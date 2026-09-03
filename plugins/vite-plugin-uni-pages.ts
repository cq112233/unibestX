import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import JSON5 from 'json5';

// ==========================================
// 类型定义
// ==========================================

interface PageConfig {
  path: string;
  style?: Record<string, any>;
  [key: string]: any;
}

interface SubPackageConfig {
  root: string;
  pages: PageConfig[];
}

interface BaseConfig {
  homePage?: string;
  pages?: PageConfig[];
  subPackages?: SubPackageConfig[];
  globalStyle?: Record<string, any>;
  tabBar?: Record<string, any>;
  easycom?: Record<string, any>;
  [key: string]: any;
}

interface UniPagesOptions {
  /** 主包页面扫描目录，默认 'src/pages' */
  dir?: string;
  /** 分包扫描目录列表，如 ['src/pages-demo']，不能是主包 dir 的子目录 */
  subPackages?: string[];
  /** 排除的 glob 模式，默认会排除 components 目录 */
  exclude?: string[];
  /** 输出的 pages.json 路径，默认项目根目录 */
  outFile?: string;
  /** 基础配置文件路径，默认 'pages.config.json' */
  configFile?: string;
  /** 首页路径 */
  homePage?: string;
}

// ==========================================
// 工具函数
// ==========================================

/** 轻量级匹配 glob 模式，避免外部模块导出兼容性问题 */
function matchGlob(filePath: string, pattern: string): boolean {
  if (pattern === '**/components/**/*.*' || pattern.includes('components')) {
    return filePath.includes('/components/') || filePath.startsWith('components/');
  }
  const regexStr = pattern
    .replace(/[.+^${}()|[\]\\]/g, '\\$&')
    .replace(/\*\*\/\*/g, '.*')
    .replace(/\*\*/g, '.*')
    .replace(/\*/g, '[^/]*')
    .replace(/\?/g, '.');
  return new RegExp(`^${regexStr}$`).test(filePath);
}

/** 读取 Tabbar 策略模式配置（0=无Tabbar, 1=原生Tabbar, 2=自定义Tabbar） */
function getTabbarMode(projectRoot: string): string {
  if (process.env.VITE_TABBAR_MODE != null && process.env.VITE_TABBAR_MODE !== '') {
    return process.env.VITE_TABBAR_MODE.trim();
  }
  try {
    const envPath = path.resolve(projectRoot, '.env');
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf-8');
      const match = content.match(/^VITE_TABBAR_MODE\s*=\s*['"]?([^'"\r\n]+)['"]?/m);
      if (match != null && match[1] != null) {
        return match[1].trim();
      }
    }
  }
  catch {
    // 忽略异常
  }
  return '1';
}

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
  // 支持逗号、分号或换行分隔多个页面路径
  const pagePaths = pathStr
    .split(/[,;\n\r]+/)
    .map(s => s.trim())
    .filter(Boolean);

  return {
    enabled,
    pagePaths
  };
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

/** 解析 <route> 块（JSON5 格式） */
function parseRouteBlock(content: string): Record<string, any> | null {
  const regex = /<route[^>]*>([\s\S]*?)<\/route>/;
  const match = content.match(regex);
  if (match == null) {
    return null;
  }
  try {
    return JSON5.parse(match[1].trim()) as Record<string, any>;
  }
  catch (e) {
    console.warn('[uni-pages] Failed to parse <route> block:', e);
    return null;
  }
}

/** 从源码中提取 definePage({...}) 的配置对象 */
function parseDefinePage(content: string): Record<string, any> | null {
  // 如果是 Vue/UVUE 文件，优先在 <script> 标签内解析，防止 <template> 文本中的说明文字被误识别
  let targetContent = content;
  const scriptMatch = content.match(/<script[^>]*>([\s\S]*?)<\/script>/);
  if (scriptMatch != null && scriptMatch[1] != null) {
    targetContent = scriptMatch[1];
  }

  // 匹配 definePage( 开头
  const startRegex = /definePage\s*\(\s*\{/;
  const match = targetContent.match(startRegex);
  if (match == null || match.index == null) {
    return null;
  }

  // 从第一个 { 开始，追踪括号深度
  const openParen = targetContent.indexOf('(', match.index);
  if (openParen === -1) {
    return null;
  }

  let depth = 0;
  let inString = false;
  let stringChar = '';
  let i = openParen + 1;

  for (; i < targetContent.length; i++) {
    const ch = targetContent[i];
    const prev = i > 0 ? targetContent[i - 1] : '';

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

    // 跳过注释
    if (ch === '/' && i + 1 < targetContent.length) {
      if (targetContent[i + 1] === '/') {
        // 单行注释，跳到行尾
        const newline = targetContent.indexOf('\n', i);
        if (newline === -1) {
          break;
        }
        i = newline;
        continue;
      }
      if (targetContent[i + 1] === '*') {
        // 多行注释
        const end = targetContent.indexOf('*/', i + 2);
        if (end === -1) {
          break;
        }
        i = end + 1;
        continue;
      }
    }

    if (ch === '{') {
      depth++;
    }
    if (ch === '}') {
      depth--;
    }
    if (ch === '(') {
      depth++;
    }
    if (ch === ')') {
      depth--;
      if (depth < 0) {
        // 找到了 definePage 参数的结束位置
        const arg = targetContent.slice(openParen + 1, i).trim();
        // 去掉外层花括号如果是对象形式
        if (arg.startsWith('{')) {
          try {
            return JSON5.parse(arg) as Record<string, any>;
          }
          catch (e) {
            console.warn('[uni-pages] Failed to parse definePage argument:', e);
            return null;
          }
        }
        return null;
      }
    }
  }
  return null;
}

/** 解析页面 meta：优先 <route> 块，其次 definePage */
function parsePageMeta(content: string): Record<string, any> | null {
  const route = parseRouteBlock(content);
  if (route != null) {
    return route;
  }
  return parseDefinePage(content);
}

/** 递归扫描 .uvue 文件，支持 exclude 模式 */
function scanUvueFiles(dir: string, excludes: string[] = [], projectRoot: string = ''): string[] {
  const results: string[] = [];
  if (!fs.existsSync(dir)) {
    return results;
  }

  const defaultExcludes = ['**/components/**/*.*'];
  const allExcludes = [...defaultExcludes, ...excludes];

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // 跳过默认的 components 目录
      if (entry.name === 'components') {
        continue;
      }
      results.push(...scanUvueFiles(fullPath, excludes, projectRoot));
    }
    else if (entry.name.endsWith('.uvue')) {
      // 检查 exclude 模式
      const relPath = projectRoot ? path.relative(projectRoot, fullPath).replace(/\\/g, '/') : fullPath.replace(/\\/g, '/');
      let excluded = false;
      for (let e = 0; e < allExcludes.length; e++) {
        if (matchGlob(relPath, allExcludes[e])) {
          excluded = true;
          break;
        }
      }
      if (!excluded) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

/** 文件路径 → 页面路由 path */
function fileToPagePath(filePath: string, pagesDir: string, projectRoot: string): string {
  const absPages = path.resolve(projectRoot, pagesDir);
  const rel = path.relative(absPages, filePath).replace(/\\/g, '/');
  const withoutExt = rel.replace(/\.uvue$/, '');
  return path.posix.join(pagesDir, withoutExt);
}

/** 最近一次成功解析的 pages.config.json，用于语法错误时的防崩缓存兜底 */
let lastGoodBaseConfig: BaseConfig | null = null;

// ==========================================
// 核心：生成 pages.json
// ==========================================

function generatePagesJson(
  opts: { dir: string; subPackages: string[]; exclude: string[]; outFile: string; configFile: string; homePage: string },
  projectRoot: string,
  isProduction: boolean = false,
  server?: any
): void {
  // 1. 读取基础配置
  let baseConfig: BaseConfig = {};
  let configParseFailed = false;
  const configPath = path.resolve(projectRoot, opts.configFile);
  if (fs.existsSync(configPath)) {
    try {
      const raw = fs.readFileSync(configPath, 'utf-8');
      baseConfig = JSON5.parse(raw) as BaseConfig;
      lastGoodBaseConfig = baseConfig;
    }
    catch (e) {
      // 配置存在语法错误（通常为用户正在编辑中途）：用上次成功的配置兜底，
      // 本次生成绝不同步回写，避免覆盖用户正在编辑的文件导致 globalStyle/tabBar/easycom 与格式丢失
      configParseFailed = true;
      if (lastGoodBaseConfig != null) {
        baseConfig = lastGoodBaseConfig;
      }
      console.warn(`[uni-pages] ${opts.configFile} has syntax errors, using last good cache and skipping write-back:`, (e as Error).message);
    }
  }

  // 无缓存可用时直接中止，保持 pages.config.json 与 pages.json 原样，等待用户修复语法
  if (configParseFailed && lastGoodBaseConfig == null) {
    console.error(`[uni-pages] Aborted: ${opts.configFile} has syntax errors and no cached config is available. Fix the file first.`);
    return;
  }

  // 读取已有的 pages.json 作为回退兜底，防止编辑中途语法错误导致配置丢失而频繁重载
  const outPath = path.resolve(projectRoot, opts.outFile);
  const existingPagesMap = new Map<string, PageConfig>();
  if (fs.existsSync(outPath)) {
    try {
      const existingData = JSON.parse(fs.readFileSync(outPath, 'utf-8'));
      if (Array.isArray(existingData.pages)) {
        existingData.pages.forEach((p: PageConfig) => {
          if (p.path) {
            existingPagesMap.set(p.path, p);
          }
        });
      }
    }
    catch {}
  }

  // 2. 扫描主包 .uvue 文件
  const pagesDir = path.resolve(projectRoot, opts.dir);
  const files = scanUvueFiles(pagesDir, opts.exclude, projectRoot);
  files.sort();

  const scanned: (PageConfig & { _hasMeta?: boolean })[] = [];
  const debugAnnotatedPages: string[] = [];
  const debugHomeAnnotatedPages: string[] = [];

  for (let i = 0; i < files.length; i++) {
    const raw = fs.readFileSync(files[i], 'utf-8');
    const meta = parsePageMeta(raw);
    const pagePath = fileToPagePath(files[i], opts.dir, projectRoot);

    const page: PageConfig & { _hasMeta?: boolean } = { path: pagePath };
    if (meta != null) {
      Object.assign(page, meta);
      page._hasMeta = true;

      // 规则：debug: false 具有最高否决权；显式配置 debug: false 时直接彻底排除沙盒调试
      if (meta.debug !== false) {
        const isDebugHome = meta.debugHome === true || meta.debug === 'home';
        const isDebug = isDebugHome || meta.debug === true || meta.only === true || meta.isDev === true;
        if (isDebugHome) {
          debugHomeAnnotatedPages.push(pagePath);
        }
        else if (isDebug) {
          debugAnnotatedPages.push(pagePath);
        }
      }
    }
    else if (raw.includes('definePage(') || raw.includes('<route')) {
      // 临时语法错误时保留之前的配置，避免 pages.json 内容变动触发重载
      const old = existingPagesMap.get(pagePath);
      if (old != null) {
        Object.assign(page, old);
        page._hasMeta = true;
      }
    }
    scanned.push(page);
  }

  // 3. 扫描分包
  const configSubPkgs = baseConfig.subPackages ?? [];
  const scannedSubPkgs: SubPackageConfig[] = [];

  for (let s = 0; s < opts.subPackages.length; s++) {
    const subDir = opts.subPackages[s];
    const absSubDir = path.resolve(projectRoot, subDir);
    if (!fs.existsSync(absSubDir)) {
      continue;
    }

    const subFiles = scanUvueFiles(absSubDir, opts.exclude, projectRoot);
    subFiles.sort();

    const subPages: (PageConfig & { _hasMeta?: boolean })[] = [];
    for (let j = 0; j < subFiles.length; j++) {
      const raw = fs.readFileSync(subFiles[j], 'utf-8');
      const meta = parsePageMeta(raw);
      // 分包路径：去掉 subDir 前缀，如 src/sub/auth/login
      const relPath = path.relative(absSubDir, subFiles[j]).replace(/\\/g, '/').replace(/\.uvue$/, '');
      const fullSubPath = `${subDir}/${relPath}`;

      const page: PageConfig & { _hasMeta?: boolean } = { path: relPath };
      if (meta != null) {
        Object.assign(page, meta);
        page._hasMeta = true;

        // 规则：debug: false 具有最高否决权；显式配置 debug: false 时直接彻底排除沙盒调试
        if (meta.debug !== false) {
          const isDebugHome = meta.debugHome === true || meta.debug === 'home';
          const isDebug = isDebugHome || meta.debug === true || meta.only === true || meta.isDev === true;
          if (isDebugHome) {
            debugHomeAnnotatedPages.push(fullSubPath);
          }
          else if (isDebug) {
            debugAnnotatedPages.push(fullSubPath);
          }
        }
      }
      else if (raw.includes('definePage(') || raw.includes('<route')) {
        const fullRel = `${subDir}/${relPath}`;
        const old = existingPagesMap.get(fullRel);
        if (old != null) {
          Object.assign(page, old);
          page._hasMeta = true;
        }
      }
      subPages.push(page);
    }

    // 与 baseConfig 中同名 root 的分包合并（以磁盘实际存在的文件为准，自动剔除已删除的页面）
    const existing = configSubPkgs.find(p => p.root === subDir);
    const existingMap = new Map<string, PageConfig>();
    if (existing != null && Array.isArray(existing.pages)) {
      for (let k = 0; k < existing.pages.length; k++) {
        existingMap.set(existing.pages[k].path, existing.pages[k]);
      }
    }

    const mergedPages: PageConfig[] = [];
    for (let k = 0; k < subPages.length; k++) {
      const sp = subPages[k];
      const manual = existingMap.get(sp.path);
      if (sp._hasMeta) {
        // 页面中显式声明了 definePage 或 <route>，以页面内的声明为唯一真实数据源（支持删除字段）
        mergedPages.push(sp);
      }
      else if (manual != null) {
        mergedPages.push({
          ...manual,
          path: sp.path
        });
      }
      else {
        mergedPages.push(sp);
      }
    }

    scannedSubPkgs.push({ root: subDir, pages: mergedPages });
  }

  // 将 baseConfig 中未扫描的分包原样保留
  for (let i = 0; i < configSubPkgs.length; i++) {
    const cp = configSubPkgs[i];
    if (!scannedSubPkgs.some(sp => sp.root === cp.root)) {
      scannedSubPkgs.push(cp);
    }
  }

  // 4. 合并主包 pages（以磁盘实际存在的文件为准，自动剔除已删除的页面）
  const manualPages = baseConfig.pages ?? [];
  const manualPagesMap = new Map<string, PageConfig>();
  for (let k = 0; k < manualPages.length; k++) {
    manualPagesMap.set(manualPages[k].path, manualPages[k]);
  }

  const finalPages: PageConfig[] = [];
  for (let k = 0; k < scanned.length; k++) {
    const sp = scanned[k];
    const manual = manualPagesMap.get(sp.path);
    if (sp._hasMeta) {
      // 页面中显式声明了 definePage 或 <route>，以页面内的声明为唯一真实数据源（支持删除字段）
      finalPages.push(sp);
    }
    else if (manual != null) {
      finalPages.push({
        ...manual,
        path: sp.path
      });
    }
    else {
      finalPages.push(sp);
    }
  }

  // 保留手动配置中、磁盘上真实存在但不在扫描目录内的页面（如 uni_modules 内置页面）
  for (let k = 0; k < manualPages.length; k++) {
    const mp = manualPages[k];
    if (finalPages.some(p => p.path === mp.path)) {
      continue;
    }
    if (fs.existsSync(path.resolve(projectRoot, `${mp.path}.uvue`))) {
      finalPages.push(mp);
    }
  }

  // 5. 首页排最前（在 uni-app 中 pages.json 的第一项 pages[0] 即为应用默认启动首页）
  // 优先级：definePage type: 'home' / isHome: true（页面内显式声明最高）> opts.homePage（插件选项）> baseConfig.homePage（配置文件）
  let home = '';
  const homeItem = scanned.find(p => (p as any).type === 'home' || (p as any).isHome === true);
  if (homeItem != null) {
    home = homeItem.path;
  }
  else if (opts.homePage !== '') {
    home = opts.homePage;
  }
  else if (baseConfig.homePage != null && baseConfig.homePage !== '') {
    home = baseConfig.homePage;
  }

  if (home !== '' && finalPages.length > 0) {
    const idx = finalPages.findIndex(p => p.path === home);
    if (idx > 0) {
      const [item] = finalPages.splice(idx, 1);
      finalPages.unshift(item);
    }
  }

  // 清理临时标记属性
  finalPages.forEach((p) => {
    delete (p as any)._hasMeta;
    if ((p as any).type === 'home') {
      delete (p as any).type;
    }
    delete (p as any).debug;
    delete (p as any).debugHome;
    delete (p as any).only;
    delete (p as any).isDev;
  });
  scannedSubPkgs.forEach((pkg) => {
    pkg.pages.forEach((p) => {
      delete (p as any)._hasMeta;
      delete (p as any).debug;
      delete (p as any).debugHome;
      delete (p as any).only;
      delete (p as any).isDev;
    });
  });

  // 6. 检查是否开启沙盒独立调试模式（生产环境强制熔断禁用，开发环境支持 .env 配置与 definePage({ debug: true })）
  const sandboxConfig = getSandboxConfig(projectRoot);
  const hasEnvTargets = sandboxConfig.enabled && sandboxConfig.pagePaths.length > 0;

  if (debugHomeAnnotatedPages.length > 1) {
    console.warn(`\x1B[33m⚠️ [uni-pages] 检测到多个页面同时配置了 debugHome: true (${debugHomeAnnotatedPages.join(', ')})，全局仅允许 1 个启动首页，已采用第一个: ${debugHomeAnnotatedPages[0]}\x1B[0m`);
  }
  const combinedCodeDebug = [...debugHomeAnnotatedPages, ...debugAnnotatedPages];
  const hasCodeDebug = combinedCodeDebug.length > 0;
  const isSandboxMode = !isProduction && (hasEnvTargets || hasCodeDebug);

  const sandboxMainPages: PageConfig[] = [];
  const sandboxSubPkgs: SubPackageConfig[] = [];

  if (isSandboxMode) {
    // 优先级：.env 显式配置 > definePage({ debug: true }) 代码内标记
    const targets = hasEnvTargets ? sandboxConfig.pagePaths : combinedCodeDebug;

    // 辅助匹配函数：判断页面路径是否命中某个 target
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

      // 精确或相对匹配
      return (
        fullNorm === targetNorm
        || fullNormWithoutSrc === targetNormWithoutSrc
        || relNorm === targetNormWithoutSrc
        || fullNormWithoutSrc.endsWith(`/${targetNormWithoutSrc}`)
      );
    };

    // 记录已经匹配到的页面 path，避免重复
    const matchedPagePaths = new Set<string>();

    // 按 targets 顺序逐一查找，确保用户写在第一项的页面作为首页
    for (let t = 0; t < targets.length; t++) {
      const target = targets[t];

      // 1) 在主包中匹配
      for (let i = 0; i < finalPages.length; i++) {
        const p = finalPages[i];
        if (matchedPagePaths.has(p.path))
          continue;
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
          if (matchedPagePaths.has(fullSubPath))
            continue;

          if (matchTarget(fullSubPath, sp.path, target)) {
            matchedPagePaths.add(fullSubPath);

            // 若目前主包没有任何页面，将这第一个匹配到的分包页面提升为主包 pages[0]（作为应用启动首页）
            if (sandboxMainPages.length === 0) {
              sandboxMainPages.push({
                ...sp,
                path: fullSubPath
              });
            }
            else {
              // 放入对应分包中保持分包路由结构
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
          const absFilePath = path.resolve(projectRoot, `${resolvedPath}.uvue`);
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
  }

  // 7. 构建输出（pages 放第一位）
  const output: Record<string, any> = {};
  if (isSandboxMode && sandboxMainPages.length > 0) {
    output.pages = sandboxMainPages;
  }
  else {
    output.pages = finalPages;
  }
  const keys = Object.keys(baseConfig);
  for (let i = 0; i < keys.length; i++) {
    const k = keys[i];
    if (k !== 'pages' && k !== 'homePage' && k !== 'subPackages') {
      output[k] = baseConfig[k];
    }
  }

  function parseCustomTabbarConfig(projectRoot: string): {
    color?: string;
    selectedColor?: string;
    backgroundColor?: string;
    borderStyle?: string;
    borderColor?: string;
    fontSize?: string;
    iconWidth?: string;
    spacing?: string;
    height?: string;
    list: Array<{ pagePath: string; text: string; iconPath: string; selectedIconPath: string }>;
  } {
    const configPath = path.resolve(projectRoot, 'src/tabbar/config.uts');
    if (!fs.existsSync(configPath)) {
      return { list: [] };
    }
    const content = fs.readFileSync(configPath, 'utf-8');

    // 读取中文翻译字典
    let zhDict: Record<string, any> = {};
    const zhPath = path.resolve(projectRoot, 'src/i18n/locales/zh-CN.json');
    if (fs.existsSync(zhPath)) {
      try {
        zhDict = JSON.parse(fs.readFileSync(zhPath, 'utf-8'));
      }
      catch {}
    }

    const colorMatch = content.match(/color\s*:\s*['"`](.*?)['"`]/);
    const selectedColorMatch = content.match(/selectedColor\s*:\s*['"`](.*?)['"`]/);
    const backgroundColorMatch = content.match(/backgroundColor\s*:\s*['"`](.*?)['"`]/);
    const borderStyleMatch = content.match(/borderStyle\s*:\s*['"`](.*?)['"`]/);
    const borderColorMatch = content.match(/borderColor\s*:\s*['"`](.*?)['"`]/);
    const fontSizeMatch = content.match(/fontSize\s*:\s*['"`](.*?)['"`]/);
    const iconWidthMatch = content.match(/iconWidth\s*:\s*['"`](.*?)['"`]/);
    const spacingMatch = content.match(/spacing\s*:\s*['"`](.*?)['"`]/);
    const heightMatch = content.match(/height\s*:\s*['"`](.*?)['"`]/);

    const midButtonMatch = content.match(/midButton\s*:\s*\{([\s\S]*?)\}/);
    let midButton: Record<string, string> | undefined;
    if (midButtonMatch) {
      const block = midButtonMatch[1];
      const width = block.match(/width\s*:\s*['"`](.*?)['"`]/);
      const height = block.match(/height\s*:\s*['"`](.*?)['"`]/);
      const text = block.match(/text\s*:\s*['"`](.*?)['"`]/);
      const iconPath = block.match(/iconPath\s*:\s*['"`](.*?)['"`]/);
      const iconWidth = block.match(/iconWidth\s*:\s*['"`](.*?)['"`]/);
      const backgroundImage = block.match(/backgroundImage\s*:\s*['"`](.*?)['"`]/);
      const mb: Record<string, string> = {};
      if (width && width[1].trim())
        mb.width = width[1].trim();
      if (height && height[1].trim())
        mb.height = height[1].trim();
      if (text && text[1].trim()) {
        const textKey = text[1].trim();
        let translatedText = textKey;
        if (textKey.startsWith('tabbar.')) {
          const subKey = textKey.replace('tabbar.', '');
          translatedText = zhDict.tabbar?.[subKey] ?? textKey;
        }
        mb.text = translatedText;
      }
      if (iconPath && iconPath[1].trim())
        mb.iconPath = iconPath[1].trim();
      if (iconWidth && iconWidth[1].trim())
        mb.iconWidth = iconWidth[1].trim();
      if (backgroundImage && backgroundImage[1].trim())
        mb.backgroundImage = backgroundImage[1].trim();

      const iconfontMatch = block.match(/iconfont\s*:\s*\{([\s\S]*?)\}/);
      if (iconfontMatch) {
        const ifBlock = iconfontMatch[1];
        const ifText = ifBlock.match(/text\s*:\s*['"`](.*?)['"`]/);
        const ifSelectedText = ifBlock.match(/selectedText\s*:\s*['"`](.*?)['"`]/);
        const ifFontSize = ifBlock.match(/fontSize\s*:\s*['"`](.*?)['"`]/);
        const ifColor = ifBlock.match(/color\s*:\s*['"`](.*?)['"`]/);
        const ifSelectedColor = ifBlock.match(/selectedColor\s*:\s*['"`](.*?)['"`]/);
        const iconfontObj: Record<string, string> = {};
        if (ifText && ifText[1].trim())
          iconfontObj.text = ifText[1].trim();
        if (ifSelectedText && ifSelectedText[1].trim())
          iconfontObj.selectedText = ifSelectedText[1].trim();
        if (ifFontSize && ifFontSize[1].trim())
          iconfontObj.fontSize = ifFontSize[1].trim();
        if (ifColor && ifColor[1].trim())
          iconfontObj.color = ifColor[1].trim();
        if (ifSelectedColor && ifSelectedColor[1].trim())
          iconfontObj.selectedColor = ifSelectedColor[1].trim();
        (mb as any).iconfont = iconfontObj;
      }
      midButton = mb;
    }

    const listMatch = content.match(/list\s*:\s*\[([\s\S]*?)\]/);
    const listResult: Array<{ pagePath: string; text: string; iconPath: string; selectedIconPath: string }> = [];
    if (listMatch) {
      const listBlock = listMatch[1];
      const itemRegex = /\{([\s\S]*?)\}/g;
      let m = itemRegex.exec(listBlock);
      while (m !== null) {
        const itemBlock = m[1];
        const pagePath = itemBlock.match(/pagePath\s*:\s*['"`](.*?)['"`]/);
        const text = itemBlock.match(/text\s*:\s*['"`](.*?)['"`]/);
        const iconPath = itemBlock.match(/iconPath\s*:\s*['"`](.*?)['"`]/);
        const selectedIconPath = itemBlock.match(/selectedIconPath\s*:\s*['"`](.*?)['"`]/);
        if (pagePath && text) {
          const textKey = text[1].trim();
          let translatedText = textKey;
          if (textKey.startsWith('tabbar.')) {
            const subKey = textKey.replace('tabbar.', '');
            translatedText = zhDict.tabbar?.[subKey] ?? textKey;
          }

          const itemObj: Record<string, any> = {
            pagePath: pagePath[1].trim().replace(/^\//, ''),
            text: translatedText,
            iconPath: iconPath ? iconPath[1].trim() : '',
            selectedIconPath: selectedIconPath ? selectedIconPath[1].trim() : ''
          };

          const iconfontMatch = itemBlock.match(/iconfont\s*:\s*\{([\s\S]*?)\}/);
          if (iconfontMatch) {
            const ifBlock = iconfontMatch[1];
            const ifText = ifBlock.match(/text\s*:\s*['"`](.*?)['"`]/);
            const ifSelectedText = ifBlock.match(/selectedText\s*:\s*['"`](.*?)['"`]/);
            const ifFontSize = ifBlock.match(/fontSize\s*:\s*['"`](.*?)['"`]/);
            const ifColor = ifBlock.match(/color\s*:\s*['"`](.*?)['"`]/);
            const ifSelectedColor = ifBlock.match(/selectedColor\s*:\s*['"`](.*?)['"`]/);
            const iconfontObj: Record<string, string> = {};
            if (ifText && ifText[1].trim())
              iconfontObj.text = ifText[1].trim();
            if (ifSelectedText && ifSelectedText[1].trim())
              iconfontObj.selectedText = ifSelectedText[1].trim();
            if (ifFontSize && ifFontSize[1].trim())
              iconfontObj.fontSize = ifFontSize[1].trim();
            if (ifColor && ifColor[1].trim())
              iconfontObj.color = ifColor[1].trim();
            if (ifSelectedColor && ifSelectedColor[1].trim())
              iconfontObj.selectedColor = ifSelectedColor[1].trim();
            itemObj.iconfont = iconfontObj;
          }

          listResult.push(itemObj as any);
        }
        m = itemRegex.exec(listBlock);
      }
    }

    return {
      color: colorMatch ? colorMatch[1].trim() : '@tabBarColor',
      selectedColor: selectedColorMatch ? selectedColorMatch[1].trim() : '@tabBarSelectedColor',
      backgroundColor: backgroundColorMatch ? backgroundColorMatch[1].trim() : '@tabBarBackgroundColor',
      borderStyle: borderStyleMatch ? borderStyleMatch[1].trim() : '@tabBarBorderStyle',
      borderColor: borderColorMatch ? borderColorMatch[1].trim() : undefined,
      fontSize: fontSizeMatch ? fontSizeMatch[1].trim() : undefined,
      iconWidth: iconWidthMatch ? iconWidthMatch[1].trim() : undefined,
      spacing: spacingMatch ? spacingMatch[1].trim() : undefined,
      height: heightMatch ? heightMatch[1].trim() : undefined,
      midButton,
      list: listResult
    };
  }

  // 根据沙盒调试模式或 VITE_TABBAR_MODE 处理 Tabbar 模式
  if (isSandboxMode && sandboxMainPages.length > 0) {
    const parsedConfig = parseCustomTabbarConfig(projectRoot);
    // 过滤出当前沙盒编译中真实存在的 TabBar 页面项
    const validSandboxTabList = parsedConfig.list.filter(item =>
      sandboxMainPages.some(p =>
        p.path === item.pagePath
        || p.path === `src/${item.pagePath}`
        || `src/${p.path}` === item.pagePath
        || normalizePagePath(p.path) === normalizePagePath(item.pagePath)
      )
    );

    // uni-app 及微信小程序底层规范：tabBar.list 数量必须在 2 ~ 5 项之间
    // 若沙盒中同时调试了 >= 2 个 Tab 页面，自动生成合法的 tabBar 节点供原生切换
    // 若仅调试 1 个 Tab 页面，移除系统级 tabBar 节点避免报路由缺失错误（界面由 App.ku 自定义 TabBar 负责视觉呈现）
    if (validSandboxTabList.length >= 2) {
      const tabbarMode = getTabbarMode(projectRoot);
      const isCustom = tabbarMode !== '1' && tabbarMode !== 'NATIVE_TABBAR';
      output.tabBar = {
        ...(isCustom ? { custom: true } : {}),
        color: parsedConfig.color,
        selectedColor: parsedConfig.selectedColor,
        backgroundColor: parsedConfig.backgroundColor,
        borderStyle: parsedConfig.borderStyle,
        list: validSandboxTabList
      };
      if (parsedConfig.borderColor)
        output.tabBar.borderColor = parsedConfig.borderColor;
      if (parsedConfig.fontSize)
        output.tabBar.fontSize = parsedConfig.fontSize;
      if (parsedConfig.iconWidth)
        output.tabBar.iconWidth = parsedConfig.iconWidth;
      if (parsedConfig.spacing)
        output.tabBar.spacing = parsedConfig.spacing;
      if (parsedConfig.height)
        output.tabBar.height = parsedConfig.height;
      if (parsedConfig.midButton)
        output.tabBar.midButton = parsedConfig.midButton;
    }
    else {
      delete output.tabBar;
    }
  }
  else {
    const tabbarMode = getTabbarMode(projectRoot);
    if (tabbarMode === '0' || tabbarMode === 'NO_TABBAR') {
      delete output.tabBar;
    }
    else if (tabbarMode === '1' || tabbarMode === 'NATIVE_TABBAR') {
      // 模式1（原生模式）：从 src/tabbar/config.uts 的 customTabbarConfig 动态提取生成原生 tabBar 配置
      const parsedConfig = parseCustomTabbarConfig(projectRoot);
      if (output.tabBar == null) {
        output.tabBar = {
          color: parsedConfig.color,
          selectedColor: parsedConfig.selectedColor,
          backgroundColor: parsedConfig.backgroundColor,
          borderStyle: parsedConfig.borderStyle,
          list: parsedConfig.list
        };
        if (parsedConfig.borderColor)
          output.tabBar.borderColor = parsedConfig.borderColor;
        if (parsedConfig.fontSize)
          output.tabBar.fontSize = parsedConfig.fontSize;
        if (parsedConfig.iconWidth)
          output.tabBar.iconWidth = parsedConfig.iconWidth;
        if (parsedConfig.spacing)
          output.tabBar.spacing = parsedConfig.spacing;
        if (parsedConfig.height)
          output.tabBar.height = parsedConfig.height;
        if (parsedConfig.midButton)
          output.tabBar.midButton = parsedConfig.midButton;
      }
      else {
        delete output.tabBar.custom;
        if (parsedConfig.list.length > 0 && (output.tabBar.list == null || output.tabBar.list.length === 0)) {
          output.tabBar.list = parsedConfig.list;
        }
        if (parsedConfig.midButton)
          output.tabBar.midButton = parsedConfig.midButton;
      }
    }
    else if (tabbarMode === '2' || tabbarMode === 'CUSTOM_TABBAR_WITH_NATIVE' || tabbarMode === 'CUSTOM_TABBAR') {
      // 模式2（带原生配置的自定义 TabBar）：生成包含 custom: true 的 pages.json tabBar 配置，通过 switchTab 跳转
      const parsedConfig = parseCustomTabbarConfig(projectRoot);
      if (output.tabBar == null) {
        output.tabBar = {
          custom: true,
          color: parsedConfig.color,
          selectedColor: parsedConfig.selectedColor,
          backgroundColor: parsedConfig.backgroundColor,
          borderStyle: parsedConfig.borderStyle,
          list: parsedConfig.list
        };
        if (parsedConfig.borderColor)
          output.tabBar.borderColor = parsedConfig.borderColor;
        if (parsedConfig.fontSize)
          output.tabBar.fontSize = parsedConfig.fontSize;
        if (parsedConfig.iconWidth)
          output.tabBar.iconWidth = parsedConfig.iconWidth;
        if (parsedConfig.spacing)
          output.tabBar.spacing = parsedConfig.spacing;
        if (parsedConfig.height)
          output.tabBar.height = parsedConfig.height;
        if (parsedConfig.midButton)
          output.tabBar.midButton = parsedConfig.midButton;
      }
      else {
        output.tabBar.custom = true;
        if (parsedConfig.list.length > 0 && (output.tabBar.list == null || output.tabBar.list.length === 0)) {
          output.tabBar.list = parsedConfig.list;
        }
        if (parsedConfig.midButton)
          output.tabBar.midButton = parsedConfig.midButton;
      }
    }
    else if (tabbarMode === '3' || tabbarMode === 'CUSTOM_TABBAR_WITHOUT_NATIVE') {
      // 模式3（纯自定义 TabBar，无原生配置）：完全删除 pages.json 中的 tabBar，使用 redirectTo / reLaunch 自定义路由跳转
      delete output.tabBar;
    }
  }

  if (isSandboxMode && sandboxMainPages.length > 0) {
    if (sandboxSubPkgs.length > 0) {
      output.subPackages = sandboxSubPkgs;
    }
    else {
      delete output.subPackages;
    }
  }
  else if (scannedSubPkgs.length > 0) {
    output.subPackages = scannedSubPkgs;
  }

  // 7. 写入 pages.json
  const jsonStr = `${JSON.stringify(output, null, 2)}\n`;
  let existing = '';
  if (fs.existsSync(outPath)) {
    existing = fs.readFileSync(outPath, 'utf-8');
  }
  if (jsonStr !== existing) {
    fs.writeFileSync(outPath, jsonStr, 'utf-8');
    if (isSandboxMode && sandboxMainPages.length > 0) {
      const allPaths = [
        ...sandboxMainPages.map(p => p.path),
        ...sandboxSubPkgs.flatMap(s => s.pages.map(p => `${s.root}/${p.path}`))
      ];
      console.log(`\x1B[33m⚡ [uni-pages] 沙盒独立调试模式已生效: 共 ${allPaths.length} 个页面 (首页: ${sandboxMainPages[0].path})\x1B[0m`);
      console.log(`\x1B[33m   包含页面: ${allPaths.join(' | ')}\x1B[0m`);
    }
    else {
      console.log(`[uni-pages] Generated ${opts.outFile} (${finalPages.length} pages, ${scannedSubPkgs.length} subpackages)`);
    }

    // 触发 Vite 开发服务器全量热重载，通知 H5 / App 开发客户端立即刷新路由
    if (server != null) {
      try {
        const mod = server.moduleGraph.getModuleById(outPath);
        if (mod != null) {
          server.moduleGraph.invalidateModule(mod);
        }
        server.ws.send({
          type: 'full-reload',
          path: '*'
        });
      }
      catch {}
    }
  }

  // 8. 自动同步回写 pages.config.json（保证手动配置文件与新建/删除/修改页面完全双向同步）
  // ⚠️ 沙盒调试模式下【绝不回写】，避免破坏或裁剪 pages.config.json 的完整全量配置
  if (isSandboxMode && sandboxMainPages.length > 0) {
    return;
  }

  // 配置文件存在语法错误时绝不回写，避免破坏用户正在编辑的文件
  if (fs.existsSync(configPath) && !configParseFailed) {
    let configUpdated = false;
    const currentConfigRaw = fs.readFileSync(configPath, 'utf-8');
    let currentConfig: BaseConfig = {};
    try {
      currentConfig = JSON5.parse(currentConfigRaw) as BaseConfig;
    }
    catch {}

    // 1) 同步主包（新增、修改、剔除已删除）
    const newMainPages: PageConfig[] = [];
    for (let i = 0; i < finalPages.length; i++) {
      newMainPages.push(finalPages[i]);
    }
    if (currentConfig.pages == null || JSON.stringify(currentConfig.pages) !== JSON.stringify(newMainPages)) {
      currentConfig.pages = newMainPages;
      configUpdated = true;
    }

    // 2) 同步分包（新增、修改、剔除已删除）
    if (currentConfig.subPackages == null) {
      currentConfig.subPackages = [];
    }
    for (let s = 0; s < scannedSubPkgs.length; s++) {
      const spkg = scannedSubPkgs[s];
      const targetSub = currentConfig.subPackages.find(cp => cp.root === spkg.root);
      if (targetSub == null) {
        currentConfig.subPackages.push({ root: spkg.root, pages: spkg.pages });
        configUpdated = true;
      }
      else {
        if (JSON.stringify(targetSub.pages) !== JSON.stringify(spkg.pages)) {
          targetSub.pages = spkg.pages;
          configUpdated = true;
        }
      }
    }

    if (configUpdated) {
      const newConfigJson = `${JSON.stringify(currentConfig, null, 2)}\n`;
      if (newConfigJson !== currentConfigRaw) {
        fs.writeFileSync(configPath, newConfigJson, 'utf-8');
        console.log(`[uni-pages] Automatically synced changes into ${opts.configFile}`);
      }
    }
  }
}

// ==========================================
// Vite 插件导出
// ==========================================

export default function uniPagesPlugin(options: UniPagesOptions = {}) {
  const opts = {
    dir: options.dir ?? 'src/pages',
    subPackages: options.subPackages ?? [],
    exclude: options.exclude ?? [],
    outFile: options.outFile ?? 'pages.json',
    configFile: options.configFile ?? 'pages.config.json',
    homePage: options.homePage ?? ''
  };

  let projectRoot = process.cwd();
  let server: any = null;
  let isProduction = false;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  function debouncedGenerate() {
    if (timeoutId != null) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      generatePagesJson(opts, projectRoot, isProduction, server);
    }, 80);
  }

  return {
    name: 'uni-pages',

    configResolved(config: any) {
      projectRoot = config.root ?? process.cwd();
      // 只有在明确的生产发版打包构建（非 watch 开发模式）时才判定为生产模式
      // 本地开发调试（无论是 H5 的 dev serve 还是 iOS / Android / HarmonyOS 的本地原生基座编译）均允许沙盒模式正常生效
      const mode = config.mode ?? process.env.NODE_ENV ?? 'development';
      const isExplicitProd = mode === 'production' || process.env.NODE_ENV === 'production';
      const isWatch = Boolean(config.build?.watch || process.env.UNI_WATCH || process.env.UNI_APP_WATCH);
      isProduction = isExplicitProd && !isWatch;
    },

    buildStart() {
      generatePagesJson(opts, projectRoot, isProduction, server);
    },

    /** 移除 definePage(...) 宏调用，避免运行时报错 */
    transform(code: string, id: string) {
      if (!code.includes('definePage(')) {
        return null;
      }
      const rawId = id.split('?')[0].replace(/\\/g, '/');
      if (!rawId.endsWith('.uvue') && !rawId.endsWith('.vue')) {
        return null;
      }

      const startRegex = /definePage\s*\(\s*\{/;
      const match = code.match(startRegex);
      if (match == null || match.index == null) {
        return null;
      }

      const openParen = code.indexOf('(', match.index);
      if (openParen === -1) {
        return null;
      }

      // 从 openParen+1 开始追踪，与 parseDefinePage 逻辑一致
      let depth = 0;
      let inString = false;
      let stringChar = '';
      let endIdx = -1;

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
            const nl = code.indexOf('\n', i);
            if (nl === -1) {
              break;
            }
            i = nl;
            continue;
          }
          if (code[i + 1] === '*') {
            const e = code.indexOf('*/', i + 2);
            if (e === -1) {
              break;
            }
            i = e + 1;
            continue;
          }
        }
        if (ch === '{' || ch === '(') {
          depth++;
        }
        if (ch === '}' || ch === ')') {
          depth--;
          if (depth < 0) {
            endIdx = i + 1;
            break;
          }
        }
      }

      if (endIdx === -1) {
        return null;
      }

      // endIdx 指向 `)` 之后一个字符，即 definePage 调用的结束
      // 往前清除多余换行
      let start = match.index;
      if (start > 0 && code[start - 1] === '\n') {
        start--;
        if (start > 0 && code[start - 1] === '\r') {
          start--;
        }
      }
      while (endIdx < code.length && (code[endIdx] === '\n' || code[endIdx] === '\r')) {
        endIdx++;
      }

      const newCode = code.slice(0, start) + code.slice(endIdx);
      return { code: newCode, map: { mappings: '' } };
    },

    configureServer(s: any) {
      server = s;
      const pagesDir = path.resolve(projectRoot, opts.dir);
      const configPath = path.resolve(projectRoot, opts.configFile);
      const tabbarConfigPath = path.resolve(projectRoot, 'src/tabbar/config.uts');
      const envPath = path.resolve(projectRoot, '.env');

      if (fs.existsSync(pagesDir)) {
        server.watcher.add(pagesDir);
      }
      // 监听分包目录
      for (let i = 0; i < opts.subPackages.length; i++) {
        const subDir = path.resolve(projectRoot, opts.subPackages[i]);
        if (fs.existsSync(subDir)) {
          server.watcher.add(subDir);
        }
      }
      if (fs.existsSync(configPath)) {
        server.watcher.add(configPath);
      }
      if (fs.existsSync(tabbarConfigPath)) {
        server.watcher.add(tabbarConfigPath);
      }
      if (fs.existsSync(envPath)) {
        server.watcher.add(envPath);
      }

      const isPageFile = (fp: string): boolean => {
        const n = fp.replace(/\\/g, '/');
        if (!n.endsWith('.uvue') || n.includes('?')) {
          return false;
        }
        // 带 / 边界匹配，避免 src/pages 误匹配 src/pages-xxx
        if (n.includes(`${opts.dir.replace(/\\/g, '/')}/`)) {
          return true;
        }
        // 检查是否在分包目录中
        for (let i = 0; i < opts.subPackages.length; i++) {
          if (n.includes(`${opts.subPackages[i].replace(/\\/g, '/')}/`)) {
            return true;
          }
        }
        return false;
      };

      server.watcher.on('add', (filePath: string) => {
        if (isPageFile(filePath)) {
          debouncedGenerate();
        }
      });
      server.watcher.on('unlink', (filePath: string) => {
        if (isPageFile(filePath)) {
          debouncedGenerate();
        }
      });
      server.watcher.on('change', (filePath: string) => {
        const normalized = filePath.replace(/\\/g, '/');
        // 配置文件或环境变量变化
        if (
          normalized === configPath.replace(/\\/g, '/')
          || normalized.includes('pages.config')
          || normalized.includes('tabbar/config')
          || normalized.endsWith('.env')
        ) {
          debouncedGenerate();
        }
        // 页面文件变化
        if (isPageFile(filePath)) {
          debouncedGenerate();
        }
      });
    },
    transformIndexHtml(html: string) {
      const mode = getTabbarMode(projectRoot);
      if (mode === '2' || mode === 'CUSTOM_TABBAR_WITH_NATIVE' || mode === 'CUSTOM_TABBAR') {
        const hideStyle = '<style id="uni-tabbar-hide-zero-flash">uni-tabbar, uni-tabbar *, .uni-tabbar, .uni-tabbar *, .uni-tabbar-bottom, .uni-tabbar-bottom *, .uni-tabbar__icon, .uni-tabbar__label { display: none !important; visibility: hidden !important; height: 0 !important; min-height: 0 !important; max-height: 0 !important; opacity: 0 !important; pointer-events: none !important; position: absolute !important; bottom: -9999px !important; }</style>';
        return html.replace('</head>', `${hideStyle}\n</head>`);
      }
      return html;
    }
  };
}
