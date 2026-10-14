import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import JSON5 from 'json5';

/**
 * uni-pages 沙盒独立调试模式插件（卫星）。
 *
 * 自包含：本文件不 import 核心插件或任何 plugins/ 下的共享模块。它通过在自己导出的插件对象上挂
 * `uniPagesStage` 字段被核心插件发现（核心在 configResolved 时从 config.plugins 里按该字段收集，
 * 按 order 升序在同一次生成 pass 内运行）。
 *
 * 职责：当开启沙盒调试（`.env` 的 VITE_DEV_SANDBOX，或页面内 `definePage({ debug: true })` /
 * `{ debugHome: true }`）时，把 pages.json 裁剪成「只包含被调试的页面」，首个匹配项作为启动首页，
 * 并置位 flags 让核心跳过 pages.config.json 回写。生产环境强制熔断。
 */

// ==========================================
// 与核心结构等价的最小类型（无需 import，避免共享模块）
// ==========================================

type PageConfig = {
  path: string;
  style?: Record<string, any>;
  [key: string]: any;
};

type SubPackageConfig = {
  root: string;
  pages: PageConfig[];
};

type PagesBuildState = {
  root: string;
  isProduction: boolean;
  output: { pages: PageConfig[]; [key: string]: any };
  scannedSubPkgs: SubPackageConfig[];
  finalPages: PageConfig[];
  debugAnnotatedPages: string[];
  debugHomeAnnotatedPages: string[];
  flags: { sandboxActive: boolean; skipConfigWriteback: boolean };
};

type PagesStageContext = {
  root: string;
  isProduction: boolean;
};

type PagesStage = {
  name: string;
  order: number;
  run: (state: PagesBuildState, ctx: PagesStageContext) => void;
};

// ==========================================
// 内部工具
// ==========================================

/** 读取沙盒独立调试模式配置（优先 process.env，其次实时读取 .env 文件） */
function getSandboxConfig(projectRoot: string): { enabled: boolean; pagePaths: string[] } {
  let enabledStr = process.env.VITE_DEV_SANDBOX ?? process.env.VITE_DEV_SINGLE_PAGE ?? '';
  let pathStr = process.env.VITE_DEV_SANDBOX_PAGES ?? process.env.VITE_DEV_SINGLE_PATH ?? '';

  if (!enabledStr || !pathStr) {
    try {
      const envPath = path.resolve(projectRoot, '.env');
      if (fs.existsSync(envPath)) {
        const content = fs.readFileSync(envPath, 'utf-8');
        if (!enabledStr) {
          const mEnabled = content.match(/^(?:VITE_DEV_SANDBOX|VITE_DEV_SINGLE_PAGE)\s*=\s*['"]?([^'"\r\n]+)['"]?/m);
          if (mEnabled != null && mEnabled[1] != null) {
            enabledStr = mEnabled[1].trim();
          }
        }
        if (!pathStr) {
          const mPath = content.match(/^(?:VITE_DEV_SANDBOX_PAGES|VITE_DEV_SINGLE_PATH)\s*=\s*['"]?([^'"\r\n]+)['"]?/m);
          if (mPath != null && mPath[1] != null) {
            pathStr = mPath[1].trim();
          }
        }
      }
    }
    catch {
      // 忽略异常
    }
  }

  const enabled = enabledStr.toLowerCase() === 'true' || enabledStr === '1';
  const pagePaths = pathStr
    .split(/[,;\n\r]+/)
    .map(s => s.trim())
    .filter(Boolean);

  return { enabled, pagePaths };
}

/** 规范化页面路径用于比对 */
function normalizePagePath(p: string): string {
  return p
    .trim()
    .replace(/\\/g, '/')
    .replace(/^\.\//, '')
    .replace(/^\//, '')
    .replace(/\.(uvue|vue|uts|ts|js)$/, '');
}

/** 定位源码中第一次 definePage({...}) 调用的括号位置（沙盒磁盘兜底时需要读取页面 meta） */
function scanDefinePageCall(code: string): { start: number; openParen: number; closeParen: number } | null {
  const startRegex = /definePage\s*\(\s*\{/;
  const match = code.match(startRegex);
  if (match == null || match.index == null) {
    return null;
  }
  const openParen = code.indexOf('(', match.index);
  if (openParen === -1) {
    return null;
  }
  let depth = 0;
  let inString = false;
  let stringChar = '';
  for (let i = openParen + 1; i < code.length; i++) {
    const ch = code[i];
    const prev = i > 0 ? code[i - 1] : '';
    if (inString) {
      if (ch === stringChar && prev !== '\\') {
        inString = false;
      }
      continue;
    }
    if (ch === '"' || ch === '\'' || ch === '`') {
      inString = true;
      stringChar = ch;
      continue;
    }
    if (ch === '/' && i + 1 < code.length) {
      if (code[i + 1] === '/') {
        const newline = code.indexOf('\n', i);
        if (newline === -1) {
          break;
        }
        i = newline;
        continue;
      }
      if (code[i + 1] === '*') {
        const end = code.indexOf('*/', i + 2);
        if (end === -1) {
          break;
        }
        i = end + 1;
        continue;
      }
    }
    if (ch === '{' || ch === '(') {
      depth++;
    }
    if (ch === '}' || ch === ')') {
      depth--;
      if (depth < 0) {
        return { start: match.index, openParen, closeParen: i };
      }
    }
  }
  return null;
}

/** 解析页面 meta：优先 <route> 块，其次 definePage */
function parsePageMeta(content: string): Record<string, any> | null {
  const routeRegex = /<route[^>]*>([\s\S]*?)<\/route>/;
  const routeMatch = content.match(routeRegex);
  if (routeMatch != null) {
    try {
      return JSON5.parse(routeMatch[1].trim()) as Record<string, any>;
    }
    catch {
      return null;
    }
  }

  let targetContent = content;
  const scriptMatch = content.match(/<script[^>]*>([\s\S]*?)<\/script>/);
  if (scriptMatch != null && scriptMatch[1] != null) {
    targetContent = scriptMatch[1];
  }
  const site = scanDefinePageCall(targetContent);
  if (site == null) {
    return null;
  }
  const arg = targetContent.slice(site.openParen + 1, site.closeParen).trim();
  if (arg.startsWith('{')) {
    try {
      return JSON5.parse(arg) as Record<string, any>;
    }
    catch {
      return null;
    }
  }
  return null;
}

// ==========================================
// 阶段实现
// ==========================================

function runSandbox(state: PagesBuildState): void {
  const sandboxConfig = getSandboxConfig(state.root);
  const hasEnvTargets = sandboxConfig.enabled && sandboxConfig.pagePaths.length > 0;

  if (state.debugHomeAnnotatedPages.length > 1) {
    console.warn(`\x1B[33m⚠️ [uni-pages] 检测到多个页面同时配置了 debugHome: true (${state.debugHomeAnnotatedPages.join(', ')})，全局仅允许 1 个启动首页，已采用第一个: ${state.debugHomeAnnotatedPages[0]}\x1B[0m`);
  }
  const combinedCodeDebug = [...state.debugHomeAnnotatedPages, ...state.debugAnnotatedPages];
  const hasCodeDebug = combinedCodeDebug.length > 0;
  const isSandboxMode = !state.isProduction && (hasEnvTargets || hasCodeDebug);

  if (!isSandboxMode) {
    return;
  }

  const finalPages = state.finalPages;
  const scannedSubPkgs = state.scannedSubPkgs;

  // 优先级：.env 显式配置 > definePage({ debug: true }) 代码内标记
  const targets = hasEnvTargets ? sandboxConfig.pagePaths : combinedCodeDebug;

  const matchTarget = (fullPath: string, relSubPath: string, target: string): boolean => {
    const targetNorm = normalizePagePath(target);
    const targetNormWithoutSrc = targetNorm.replace(/^src\//, '');
    const fullNorm = normalizePagePath(fullPath);
    const fullNormWithoutSrc = fullNorm.replace(/^src\//, '');
    const relNorm = normalizePagePath(relSubPath);

    // 通配符匹配 / 目录前缀匹配（如 src/sub/auth/* 或 sub/auth）
    if (target.includes('*') || !target.includes('.')) {
      const cleanPrefix = targetNormWithoutSrc.replace(/\/\*$/, '').replace(/\*$/, '');
      if (cleanPrefix) {
        if (fullNormWithoutSrc.startsWith(cleanPrefix) || relNorm.startsWith(cleanPrefix)) {
          return true;
        }
      }
    }

    return (
      fullNorm === targetNorm
      || fullNormWithoutSrc === targetNormWithoutSrc
      || relNorm === targetNormWithoutSrc
      || fullNormWithoutSrc.endsWith(`/${targetNormWithoutSrc}`)
    );
  };

  const sandboxMainPages: PageConfig[] = [];
  const sandboxSubPkgs: SubPackageConfig[] = [];
  const matchedPagePaths = new Set<string>();

  // 按 targets 顺序逐一查找，确保用户写在第一项的页面作为首页
  for (let t = 0; t < targets.length; t++) {
    const target = targets[t];

    // 1) 在主包中匹配
    for (let i = 0; i < finalPages.length; i++) {
      const p = finalPages[i];
      if (matchedPagePaths.has(p.path)) {
        continue;
      }
      if (matchTarget(p.path, p.path, target)) {
        matchedPagePaths.add(p.path);
        sandboxMainPages.push({ ...p });
      }
    }

    // 2) 在分包中匹配
    for (let s = 0; s < scannedSubPkgs.length; s++) {
      const spkg = scannedSubPkgs[s];
      for (let j = 0; j < spkg.pages.length; j++) {
        const sp = spkg.pages[j];
        const fullSubPath = `${spkg.root}/${sp.path}`;
        if (matchedPagePaths.has(fullSubPath)) {
          continue;
        }
        if (matchTarget(fullSubPath, sp.path, target)) {
          matchedPagePaths.add(fullSubPath);

          // 若目前主包没有任何页面，将这第一个匹配到的分包页面提升为主包 pages[0]（作为应用启动首页）
          if (sandboxMainPages.length === 0) {
            sandboxMainPages.push({ ...sp, path: fullSubPath });
          }
          else {
            let targetSubPkg = sandboxSubPkgs.find(pkg => pkg.root === spkg.root);
            if (targetSubPkg == null) {
              targetSubPkg = { root: spkg.root, pages: [] };
              sandboxSubPkgs.push(targetSubPkg);
            }
            targetSubPkg.pages.push({ ...sp });
          }
        }
      }
    }

    // 3) 兜底：从磁盘文件直接匹配（若有新创建还未在标准列表里的页面）
    if (!target.includes('*')) {
      let resolvedPath = normalizePagePath(target);
      if (!resolvedPath.startsWith('src/')) {
        resolvedPath = `src/${resolvedPath}`;
      }
      if (!matchedPagePaths.has(resolvedPath)) {
        const absFilePath = path.resolve(state.root, `${resolvedPath}.uvue`);
        if (fs.existsSync(absFilePath)) {
          const raw = fs.readFileSync(absFilePath, 'utf-8');
          const meta = parsePageMeta(raw);
          matchedPagePaths.add(resolvedPath);
          sandboxMainPages.push({
            path: resolvedPath,
            ...(meta ?? {})
          });
        }
      }
    }
  }

  if (sandboxMainPages.length === 0) {
    console.warn(`\x1B[31m[uni-pages] 沙盒调试模式未找到任何匹配页面: ${targets.join(', ')}\x1B[0m`);
  }

  // 生效：只有当确实裁剪出页面时才替换输出（与原实现 `isSandboxMode && sandboxMainPages.length > 0` 一致）
  if (sandboxMainPages.length > 0) {
    state.output.pages = sandboxMainPages;
    state.scannedSubPkgs = sandboxSubPkgs;
    state.flags.sandboxActive = true;
    state.flags.skipConfigWriteback = true;
  }
}

// ==========================================
// 插件导出
// ==========================================

const stage: PagesStage = {
  name: 'uni-pages:sandbox',
  order: 100,
  run(state) {
    runSandbox(state);
  }
};

export default function uniPagesSandboxPlugin() {
  return {
    name: 'uni-pages:sandbox',
    uniPagesStage: stage
  };
}
