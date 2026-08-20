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
  // 匹配 definePage( 开头
  const startRegex = /definePage\s*\(\s*\{/;
  const match = content.match(startRegex);
  if (match == null || match.index == null) {
    return null;
  }

  // 从第一个 { 开始，追踪括号深度
  const openParen = content.indexOf('(', match.index);
  if (openParen === -1) {
    return null;
  }

  let depth = 0;
  let inString = false;
  let stringChar = '';
  let i = openParen + 1;

  for (; i < content.length; i++) {
    const ch = content[i];
    const prev = i > 0 ? content[i - 1] : '';

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
    if (ch === '/' && i + 1 < content.length) {
      if (content[i + 1] === '/') {
        // 单行注释，跳到行尾
        const newline = content.indexOf('\n', i);
        if (newline === -1) {
          break;
        }
        i = newline;
        continue;
      }
      if (content[i + 1] === '*') {
        // 多行注释
        const end = content.indexOf('*/', i + 2);
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
        const arg = content.slice(openParen + 1, i).trim();
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

// ==========================================
// 核心：生成 pages.json
// ==========================================

function generatePagesJson(
  opts: { dir: string; subPackages: string[]; exclude: string[]; outFile: string; configFile: string; homePage: string },
  projectRoot: string
): void {
  // 1. 读取基础配置
  let baseConfig: BaseConfig = {};
  const configPath = path.resolve(projectRoot, opts.configFile);
  if (fs.existsSync(configPath)) {
    try {
      const raw = fs.readFileSync(configPath, 'utf-8');
      baseConfig = JSON5.parse(raw) as BaseConfig;
    }
    catch (e) {
      console.error('[uni-pages] Failed to parse config file:', e);
    }
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

  const scanned: PageConfig[] = [];
  for (let i = 0; i < files.length; i++) {
    const raw = fs.readFileSync(files[i], 'utf-8');
    const meta = parsePageMeta(raw);
    const pagePath = fileToPagePath(files[i], opts.dir, projectRoot);

    const page: PageConfig = { path: pagePath };
    if (meta != null) {
      Object.assign(page, meta);
    }
    else if (raw.includes('definePage(') || raw.includes('<route')) {
      // 临时语法错误时保留之前的配置，避免 pages.json 内容变动触发重载
      const old = existingPagesMap.get(pagePath);
      if (old != null) {
        Object.assign(page, old);
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

    const subPages: PageConfig[] = [];
    for (let j = 0; j < subFiles.length; j++) {
      const raw = fs.readFileSync(subFiles[j], 'utf-8');
      const meta = parsePageMeta(raw);
      // 分包路径：去掉 subDir 前缀，如 src/sub/auth/login
      const relPath = path.relative(absSubDir, subFiles[j]).replace(/\\/g, '/').replace(/\.uvue$/, '');

      const page: PageConfig = { path: relPath };
      if (meta != null) {
        Object.assign(page, meta);
      }
      else if (raw.includes('definePage(') || raw.includes('<route')) {
        const fullRel = `${subDir}/${relPath}`;
        const old = existingPagesMap.get(fullRel);
        if (old != null) {
          Object.assign(page, old);
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
      if (manual != null) {
        mergedPages.push({
          ...manual,
          ...sp,
          style: {
            ...(manual.style || {}),
            ...(sp.style || {})
          }
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
    if (manual != null) {
      finalPages.push({
        ...manual,
        ...sp,
        style: {
          ...(manual.style || {}),
          ...(sp.style || {})
        }
      });
    }
    else {
      finalPages.push(sp);
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
    if ((p as any).type === 'home') {
      delete (p as any).type;
    }
  });

  // 6. 构建输出（pages 放第一位）
  const output: Record<string, any> = {};
  output.pages = finalPages;
  const keys = Object.keys(baseConfig);
  for (let i = 0; i < keys.length; i++) {
    const k = keys[i];
    if (k !== 'pages' && k !== 'homePage' && k !== 'subPackages') {
      output[k] = baseConfig[k];
    }
  }
  if (scannedSubPkgs.length > 0) {
    output.subPackages = scannedSubPkgs;
  }

  // 7. 写入 pages.json
  const jsonStr = JSON.stringify(output, null, 2);
  let existing = '';
  if (fs.existsSync(outPath)) {
    existing = fs.readFileSync(outPath, 'utf-8');
  }
  if (jsonStr !== existing) {
    fs.writeFileSync(outPath, jsonStr, 'utf-8');
    console.log(`[uni-pages] Generated ${opts.outFile} (${finalPages.length} pages, ${scannedSubPkgs.length} subpackages)`);
  }

  // 8. 自动同步回写 pages.config.json（保证手动配置文件与新建/删除/修改页面完全双向同步）
  if (fs.existsSync(configPath)) {
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
      const newConfigJson = JSON.stringify(currentConfig, null, 2);
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
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  function debouncedGenerate() {
    if (timeoutId != null) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      generatePagesJson(opts, projectRoot);
    }, 300);
  }

  return {
    name: 'uni-pages',

    configResolved(config: any) {
      projectRoot = config.root ?? process.cwd();
    },

    buildStart() {
      generatePagesJson(opts, projectRoot);
    },

    /** 移除 definePage(...) 宏调用，避免运行时报错 */
    transform(code: string, id: string) {
      const normalized = id.replace(/\\/g, '/');
      if (!normalized.endsWith('.uvue') || normalized.includes('?')) {
        return null;
      }
      // 只处理项目页面目录（主包 + 分包）内的 .uvue，避免误伤 uni_modules 等
      const inPages = normalized.includes(`${opts.dir.replace(/\\/g, '/')}/`);
      let inSub = false;
      for (let s = 0; s < opts.subPackages.length; s++) {
        if (normalized.includes(`${opts.subPackages[s].replace(/\\/g, '/')}/`)) {
          inSub = true;
          break;
        }
      }
      if (!inPages && !inSub) {
        return null;
      }

      // 如果页面包含 definePage 或 <route> 声明，触发 pages.json 自动同步更新
      if (code.includes('definePage(') || code.includes('<route')) {
        debouncedGenerate();
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
        // 配置文件变化
        if (normalized === configPath.replace(/\\/g, '/') || normalized.includes('pages.config')) {
          debouncedGenerate();
        }
        // 页面文件变化（仅当包含 definePage 或 <route> 时才处理）
        if (isPageFile(filePath)) {
          try {
            const content = fs.readFileSync(filePath, 'utf-8');
            if (content.includes('definePage(') || content.includes('<route')) {
              debouncedGenerate();
            }
          }
          catch {}
        }
      });
    }
  };
}
