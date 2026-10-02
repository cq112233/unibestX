import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import type { Plugin } from 'vite';

/**
 * 驼峰转连字符 helper（与 uni-layouts-plugin 中保持一致）
 */
function kebabCase(str: string): string {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * 字符串转 PascalCase 组件名（如 App.ku -> AppKu，AppRoot -> AppRoot，global-root -> GlobalRoot）
 */
function toPascalCase(str: string): string {
  return str
    .replace(/[.-](\w)/g, (_, c: string) => c.toUpperCase())
    .replace(/^[a-z]/, (c: string) => c.toUpperCase());
}

/**
 * AppRoot.uvue / App.ku.uvue 已声明的页面参数白名单（与根组件中 defineProps 的键一一对应）。
 * 注入键永远 ⊆ 声明键：避免页面新参数未声明时被注入到根组件导致编译报错；
 * 未来新增页面参数键需三处同步：definePage / pages.config.json → 本白名单 → 根组件 defineProps。
 */
const ROOT_PROP_KEYS: string[] = [
  'layout',
  'showBack',
  'hideNavbar',
  'hideStatusBar',
  'enablePullDownRefresh',
  'customPageClass',
  'customPageStyle',
  'style'
];

/**
 * 根据页面参数生成传给包裹组件的 props 属性字符串。
 * 生成规则必须与 uni-layouts-plugin.ts（384~406 行 attrs 生成）保持完全一致，
 * 保证 根组件 与 LayoutComponent 收到同一套页面参数。
 */
function buildPageAttrs(params: Record<string, any>): string {
  let attrs = '';
  Object.keys(params).forEach((key) => {
    const val = params[key];
    if (typeof val === 'string') {
      if (key === 'class' || key === 'customClass') {
        attrs += ` :custom-page-class="'${val.replace(/'/g, '\\\'')}'"`;
      }
      if (key === 'customStyle') {
        attrs += ` :custom-page-style="'${val.replace(/'/g, '\\\'')}'"`;
      }
      attrs += ` :${kebabCase(key)}="'${val.replace(/'/g, '\\\'')}'"`;
    }
    else if (typeof val === 'number' || typeof val === 'boolean') {
      attrs += ` :${kebabCase(key)}="${val}"`;
    }
    else if (typeof val === 'object' && val !== null) {
      // 为了避免与 Vue 原生 class/style 属性冲突，如果是 style 键映射为 page-style
      const propName = key === 'style' ? 'page-style' : kebabCase(key);
      attrs += ` :${propName}="${JSON.stringify(val).replace(/"/g, '\'')}"`;
    }
  });
  return attrs;
}

export type UniRootXOptions = {
  /**
   * 是否启用虚拟节点
   * @default false
   */
  enabledVirtualHost?: boolean;
  /**
   * 是否启用全局 ref（当为 true 时为根组件添加 ref="uniKuRoot"，或者使用 template 上指定的 root 属性）
   * @default false
   */
  enabledGlobalRef?: boolean;
  /**
   * 根文件名，无需携带扩展名，如 'AppRoot' 或 'App.ku'
   * @default 'App.ku'
   */
  rootFileName?: string;
  /**
   * 需要排除根组件的页面，支持 glob 或路径子串匹配
   * @example
   * ```
   * ['pages/some', 'pages/exclude/*']
   * ```
   */
  excludePages?: string | string[];
};

// 自动给所有页面套上根包裹组件（如 AppRoot.uvue / App.ku.uvue），并把当前页面的参数通过 props 注入
export function uniRootX(options: UniRootXOptions = {}): Plugin {
  const {
    enabledGlobalRef = false,
    rootFileName = 'App.ku',
    excludePages
  } = options;

  const rawRootFileName = rootFileName.replace(/\.(uvue|vue)$/, '');
  const componentName = toPascalCase(rawRootFileName);

  const excludeList = excludePages
    ? (Array.isArray(excludePages) ? excludePages : [excludePages])
    : [];

  let projectRoot = process.cwd();
  let pagesJsonPath = path.resolve(projectRoot, 'pages.json');

  // pages.json 页面参数缓存（key: 相对项目根目录的无扩展名页面路径，如 "src/pages/index/index"）
  let cachedPagesParams: Map<string, Record<string, any>> | null = null;
  let lastPagesJsonMTime = 0;

  // 解析 pages.json：主包 + 分包页面，提取除 path/layout 外的全部自定义参数
  function loadPagesParams() {
    const paramsByPath = new Map<string, Record<string, any>>();
    if (!fs.existsSync(pagesJsonPath)) {
      return paramsByPath;
    }
    try {
      const rawContent = fs.readFileSync(pagesJsonPath, 'utf-8');
      const cleanJson = rawContent.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1');
      const data = JSON.parse(cleanJson) as { pages?: any[]; subPackages?: any[] };

      const collect = (page: any) => {
        if (page == null || typeof page.path !== 'string') {
          return;
        }
        const normPath = page.path.replace(/\\/g, '/').replace(/^\//, '');
        const params: Record<string, any> = {};
        Object.keys(page).forEach((key) => {
          if (key !== 'path') {
            params[key] = page[key];
          }
        });
        paramsByPath.set(normPath, params);
      };

      // 1. 主包页面
      if (Array.isArray(data.pages)) {
        data.pages.forEach(collect);
      }
      // 2. 分包页面（path 需与 root 拼接成完整路径）
      if (Array.isArray(data.subPackages)) {
        data.subPackages.forEach((subPkg) => {
          if (subPkg == null || typeof subPkg.root !== 'string' || !Array.isArray(subPkg.pages)) {
            return;
          }
          subPkg.pages.forEach((page: any) => {
            if (page == null || typeof page.path !== 'string') {
              return;
            }
            collect({
              ...page,
              path: path.join(subPkg.root, page.path).replace(/\\/g, '/')
            });
          });
        });
      }
    }
    catch (e) {
      console.error('[uniRootX] Failed to parse pages.json:', e);
    }
    return paramsByPath;
  }

  // 获取最新的页面参数（带 mtime 缓存校验）
  function getPagesParams() {
    if (!fs.existsSync(pagesJsonPath)) {
      return new Map<string, Record<string, any>>();
    }
    const stat = fs.statSync(pagesJsonPath);
    if (!cachedPagesParams || stat.mtimeMs !== lastPagesJsonMTime) {
      cachedPagesParams = loadPagesParams();
      lastPagesJsonMTime = stat.mtimeMs;
    }
    return cachedPagesParams;
  }

  return {
    name: 'uniRootX',
    configResolved(config: any) {
      projectRoot = config.root || process.cwd();
      pagesJsonPath = path.resolve(projectRoot, 'pages.json');
    },
    transform(code: string, id: string) {
      const normalizedId = id.replace(/\\/g, '/');
      // 必须是顶级 SFC 文件，忽略所有带 ? 的子请求（如 ?vue&type=script 等）
      if (normalizedId.includes('?')) {
        return null;
      }
      if (!normalizedId.endsWith('.uvue') && !normalizedId.endsWith('.vue')) {
        return null;
      }
      // 只处理 src/pages 和 src/sub 下的非组件 uvue 页面，排除 App.uvue、根组件文件以及组件/视图子目录
      const isPage = normalizedId.includes('src/pages/') || normalizedId.includes('src/sub/');
      if (
        !isPage
        || normalizedId.includes('/components/')
        || normalizedId.includes('/views/')
        || normalizedId.includes(`${rawRootFileName}.uvue`)
        || normalizedId.includes(`${rawRootFileName}.vue`)
        || normalizedId.includes('App.ku.uvue')
        || normalizedId.includes('AppRoot.uvue')
        || normalizedId.includes('/src/layouts/')
      ) {
        return null;
      }

      // 自动检测并生成根组件文件于项目根目录
      let targetFileExt = '.uvue';
      const uvuePath = path.join(projectRoot, `${rawRootFileName}.uvue`);
      const vuePath = path.join(projectRoot, `${rawRootFileName}.vue`);
      if (fs.existsSync(vuePath) && !fs.existsSync(uvuePath)) {
        targetFileExt = '.vue';
      }
      const targetFilePath = path.join(projectRoot, `${rawRootFileName}${targetFileExt}`);

      if (!fs.existsSync(targetFilePath)) {
        // 若存在现有的 App.ku.uvue，优先复制作为基础以保留已有的布局和主题能力
        const legacyPath = path.join(projectRoot, 'App.ku.uvue');
        if (fs.existsSync(legacyPath)) {
          try {
            fs.copyFileSync(legacyPath, targetFilePath);
            console.log(`[uniRootX] 已基于 App.ku.uvue 自动生成 ${rawRootFileName}${targetFileExt} 文件`);
          }
          catch (e) {
            console.error(`[uniRootX] 复制生成 ${rawRootFileName}${targetFileExt} 失败:`, e);
          }
        }
        else {
          const defaultContent = `<template>\n\t<view class="root-container" style="flex: 1;">\n\t\t<slot></slot>\n\t</view>\n</template>\n\n<script setup lang="uts">\nconst props = defineProps({\n\tlayout: { type: String, default: '' },\n\tshowBack: { type: Boolean, default: true },\n\thideNavbar: { type: Boolean, default: false },\n\thideStatusBar: { type: Boolean, default: false },\n\tenablePullDownRefresh: { type: Boolean, default: false },\n\tcustomPageClass: { type: String, default: '' },\n\tcustomPageStyle: { type: String, default: '' },\n\tpageStyle: { type: Object, default: () => ({}) }\n});\n</script>\n\n<style lang="scss" scoped>\n.root-container {\n\tflex: 1;\n}\n</style>\n`;
          try {
            fs.writeFileSync(targetFilePath, defaultContent, 'utf-8');
            console.log(`[uniRootX] 自动生成了缺少的 ${rawRootFileName}${targetFileExt} 文件`);
          }
          catch (e) {
            console.error(`[uniRootX] 自动生成 ${rawRootFileName}${targetFileExt} 失败:`, e);
          }
        }
      }

      // 依据 pages.json 查找当前页面的自定义参数（与 uni-layouts-plugin 同源），生成注入到根组件的 props
      const relativeId = path.relative(projectRoot, normalizedId).replace(/\\/g, '/');
      const cleanRelativeId = relativeId.replace(/\.(uvue|vue)(\?.*)?$/, '');

      // 排除排除列表中的页面
      if (excludeList.length > 0) {
        const isExcluded = excludeList.some((pattern) => {
          if (pattern.includes('*')) {
            const regex = new RegExp(`^${pattern.replace(/\*/g, '.*')}$`);
            return regex.test(cleanRelativeId) || regex.test(relativeId);
          }
          return cleanRelativeId.includes(pattern) || relativeId.includes(pattern);
        });
        if (isExcluded) {
          return null;
        }
      }

      const pageParams = getPagesParams().get(cleanRelativeId);
      // 白名单过滤：注入键必须 ⊆ 根组件声明键，未声明的新增参数只 warn 跳过，避免编译报错
      const filteredParams: Record<string, any> = {};
      if (pageParams) {
        Object.keys(pageParams).forEach((key) => {
          if (!ROOT_PROP_KEYS.includes(key)) {
            console.warn(`[uniRootX] 页面 ${cleanRelativeId} 的参数 "${key}" 未在 ${rawRootFileName} 中声明 props，已跳过注入（需同步扩展 ROOT_PROP_KEYS 与 defineProps）`);
            return;
          }
          filteredParams[key] = pageParams[key];
        });
      }
      const rootAttrs = buildPageAttrs(filteredParams);
      if (typeof (this as any).addWatchFile === 'function') {
        (this as any).addWatchFile(pagesJsonPath);
      }

      let newCode = code;

      // 1. 将 template 内的内容用 <ComponentName> 包裹（带上当前页面的参数 props 与 可选 ref）
      const startTemplateIdx = code.indexOf('<template');
      const endTemplateIdx = code.lastIndexOf('</template>');
      if (startTemplateIdx !== -1 && endTemplateIdx !== -1 && startTemplateIdx < endTemplateIdx) {
        const startTagEndIdx = code.indexOf('>', startTemplateIdx);
        if (startTagEndIdx !== -1 && startTagEndIdx < endTemplateIdx) {
          const templateAttrs = code.slice(startTemplateIdx + 9, startTagEndIdx);
          const content = code.slice(startTagEndIdx + 1, endTemplateIdx);
          const before = code.slice(0, startTemplateIdx);
          const after = code.slice(endTemplateIdx + 11);

          // 提取 template 上的 root 属性（例如 <template root="myRoot">）
          let rootRefStr = '';
          const rootMatch = templateAttrs.match(/\broot=(["'])(.*?)\1/);
          if (rootMatch && rootMatch[2]) {
            rootRefStr = ` ref="${rootMatch[2]}"`;
          }
          else if (enabledGlobalRef) {
            rootRefStr = ' ref="uniKuRoot"';
          }

          // 清理 template 上的 root 属性
          const cleanTemplateAttrs = templateAttrs.replace(/\s*\broot=(["']).*?\1/, '');

          newCode = `${before}<template${cleanTemplateAttrs}>\n  <${componentName}${rootRefStr}${rootAttrs}>\n${content}\n  </${componentName}>\n</template>${after}`;
        }
      }
      else {
        // 没有 template，不处理
        return null;
      }

      // 2. 在 script setup 内引入根组件
      const importStatement = `import ${componentName} from '@/${rawRootFileName}${targetFileExt}'`;
      const scriptSetupRegex = /<script\s[^>]*\bsetup\b[^>]*>/;
      if (scriptSetupRegex.test(newCode)) {
        newCode = newCode.replace(scriptSetupRegex, (match) => {
          return `${match}\n${importStatement}`;
        });
      }
      else {
        newCode = `${newCode}\n<script setup lang="uts">\n${importStatement}\n</script>\n`;
      }

      return {
        code: newCode,
        map: { mappings: '' }
      };
    },
    generateBundle(this: any, _: any, bundle: any) {
      // 兼容 uni-app 小程序端对根目录含点文件名组件（如 App.ku.uvue）模板编译时将前缀截断为 App.wxml 的缺陷
      if (rawRootFileName.includes('.')) {
        const miniProgramExts = ['.wxml', '.axml', '.ttml', '.swan', '.qml'];
        for (const ext of miniProgramExts) {
          const srcFile = `App${ext}`;
          const destFile = `${rawRootFileName}${ext}`;
          if (bundle[srcFile] && !bundle[destFile]) {
            this.emitFile({
              type: 'asset',
              fileName: destFile,
              source: (bundle[srcFile] as any).source
            });
          }
        }
      }
    },
    writeBundle(options: any) {
      // 产物落盘后的双重兜底，确保磁盘目录中同步存在完整的组件模板文件
      if (rawRootFileName.includes('.')) {
        const outDir = options.dir;
        if (!outDir) {
          return;
        }
        const miniProgramExts = ['.wxml', '.axml', '.ttml', '.swan', '.qml'];
        for (const ext of miniProgramExts) {
          const srcFile = path.join(outDir, `App${ext}`);
          const destFile = path.join(outDir, `${rawRootFileName}${ext}`);
          if (fs.existsSync(srcFile)) {
            try {
              fs.copyFileSync(srcFile, destFile);
            }
            catch {
              // ignore
            }
          }
        }
      }
    }
  };
}

export { uniRootX as autoRootPlugin };
export default uniRootX;
