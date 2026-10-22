import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import type { Plugin } from 'vite';
import { loadAllPlatformPageVariants, loadPlatformPagesJson } from './pages-json-util';

export type TabbarViewsOptions = {
  /** 是否启用本插件，默认 true */
  enabled?: boolean;
  /** TabBar 配置文件路径，默认 'src/tabbar/config.uts' */
  configFile?: string;
  /** 生成的 TabViews 调度组件路径，默认 'src/tabbar/components/TabViews.uvue' */
  targetFile?: string;
  /** 模式 4 的宿主页面路径，默认 'src/pages/index/index'（该页面通过 slot 提供自身内容） */
  hostPage?: string;
  /** 是否自动从各 Tab 页面的 definePage 中同步 hideNavbar 配置，默认 true */
  syncNavbarConfig?: boolean;
};

/** 读取 TabBar 模式配置（0=无TabBar, 1=原生TabBar, 2=自定义TabBar, 4=单页TabBar） */
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
  catch {}
  return '1';
}

/** 缓存当前所有 Tab 对应的页面文件绝对路径，供 watcher 高性能匹配 */
export const watchedTabPages = new Set<string>();

/**
 * 生成单页 TabBar 调度容器 TabViews.uvue。
 *
 * 普通 Tab 直接复用页面 .uvue；宿主页通过 tabHost slot 注入，避免页面自引用。
 */
export function generateTabViews(projectRoot: string, options: TabbarViewsOptions = {}): void {
  const configFile = options.configFile ?? 'src/tabbar/config.uts';
  const hostPage = (options.hostPage ?? 'src/pages/index/index').replace(/\\/g, '/').replace(/^\//, '').replace(/\.(uvue|vue)$/, '');
  const configPath = path.resolve(projectRoot, configFile);
  if (!fs.existsSync(configPath)) {
    return;
  }

  const rawContent = fs.readFileSync(configPath, 'utf-8');
  // 过滤多行注释与单行注释，避免注释项被解析
  const content = rawContent
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/.*$/gm, '');

  const listMatch = content.match(/list\s*:\s*\[([\s\S]*?)\]/);
  if (!listMatch) {
    return;
  }

  const listBlock = listMatch[1];
  const itemRegex = /\{([\s\S]*?)\}/g;
  let m = itemRegex.exec(listBlock);
  const tabPages: string[] = [];
  while (m !== null) {
    const itemBlock = m[1];
    const pagePathMatch = itemBlock.match(/pagePath\s*:\s*['"`](.*?)['"`]/);
    if (pagePathMatch) {
      const pagePath = pagePathMatch[1].trim().replace(/^\//, '');
      tabPages.push(pagePath);
    }
    m = itemRegex.exec(listBlock);
  }

  // 解析 midButton（鼓包也是属于 tabbar 的一部分）
  const midButtonMatch = content.match(/midButton\s*:\s*\{([\s\S]*?)\}/);
  let midButtonPagePath: string | null = null;
  if (midButtonMatch) {
    const block = midButtonMatch[1];
    const pagePathMatch = block.match(/pagePath\s*:\s*['"`](.*?)['"`]/);
    if (pagePathMatch && pagePathMatch[1].trim()) {
      midButtonPagePath = pagePathMatch[1].trim().replace(/^\//, '');
    }
  }

  // 与 tabbar 底层 buildFullTabbarList 保持严格一致的排序规则（midButton 居中插入）
  const fullTabPages: string[] = [];
  if (midButtonPagePath) {
    const half = Math.floor(tabPages.length / 2);
    for (let i = 0; i < tabPages.length; i++) {
      if (i === half) {
        fullTabPages.push(midButtonPagePath);
      }
      fullTabPages.push(tabPages[i]);
    }
    if (half >= tabPages.length) {
      fullTabPages.push(midButtonPagePath);
    }
  }
  else {
    for (let i = 0; i < tabPages.length; i++) {
      fullTabPages.push(tabPages[i]);
    }
  }

  if (fullTabPages.length === 0) {
    return;
  }

  watchedTabPages.clear();

  // 读取 pages.json 获取各页面完整配置
  const pagesJsonMap = new Map<string, Record<string, any>>();
  const pagesJsonPath = path.resolve(projectRoot, 'pages.json');
  if (fs.existsSync(pagesJsonPath)) {
    try {
      const data = loadPlatformPagesJson(pagesJsonPath);
      if (Array.isArray(data.pages)) {
        data.pages.forEach((p: any) => {
          if (p && typeof p.path === 'string') {
            const normPath = p.path.replace(/\\/g, '/').replace(/^\//, '');
            pagesJsonMap.set(normPath, p);
          }
        });
      }
    }
    catch {}
  }

  const allVariantsMap = loadAllPlatformPageVariants(pagesJsonPath);

  type ViewEntryVariant = {
    condition: string | null;
    title: string;
    hideNavbar: boolean;
    hideStatusBar: boolean;
    showBack: boolean;
    enablePullDownRefresh: boolean;
    customPageClass: string;
    customPageStyle: string;
  };

  const viewsEntries: Array<{
    importName: string | null;
    importPath: string;
    variants: ViewEntryVariant[];
  }> = [];
  const usedNames = new Set<string>();

  for (let idx = 0; idx < fullTabPages.length; idx++) {
    const rawPath = fullTabPages[idx];
    const pageRelPath = rawPath.replace(/^src\//, '').replace(/\.(uvue|vue)$/, '');
    const pageBaseName = path.basename(pageRelPath);
    const pascalPageName = pageBaseName.charAt(0).toUpperCase() + pageBaseName.slice(1);
    // 模式 4 直接复用真实页面组件：普通 Tab 由 TabContent 注入 tabPageIndex；
    // 宿主页改走 slot，避免 index.uvue 被 TabViews 反向 import。这样业务只需要维护一个 .uvue。
    const isHostPage = pageRelPath == hostPage.replace(/^src\//, '');
    const actualCompName = `${pascalPageName}Page`;
    const actualRelPath = `src/${pageRelPath}.uvue`;

    // 优先从 pages.json 读取对应页面在 definePage 中的各平台变体配置
    const normTarget = rawPath.replace(/\\/g, '/').replace(/^\//, '').replace(/\.(uvue|vue)$/, '');
    const variants = allVariantsMap.get(normTarget)
      || allVariantsMap.get(`src/${normTarget}`)
      || allVariantsMap.get(normTarget.replace(/^src\//, ''))
      || [];

    const pageConfig = pagesJsonMap.get(normTarget)
      || pagesJsonMap.get(`src/${normTarget}`)
      || pagesJsonMap.get(normTarget.replace(/^src\//, ''))
      || null;

    let sourceVariants: Array<{ condition: string | null; page: Record<string, any> | null }> = [];
    if (variants.length > 0) {
      sourceVariants = variants;
    }
    else {
      sourceVariants = [{ condition: null, page: pageConfig }];
    }

    const entryVariants: ViewEntryVariant[] = sourceVariants.map((v) => {
      const p = v.page;
      return {
        condition: v.condition,
        hideNavbar: p?.hideNavbar === true,
        hideStatusBar: p?.hideStatusBar === true,
        showBack: p?.showBack !== false,
        enablePullDownRefresh: typeof p?.enablePullDownRefresh === 'boolean' ? p.enablePullDownRefresh : true,
        title: typeof p?.style?.navigationBarTitleText === 'string'
          ? p.style.navigationBarTitleText
          : (typeof p?.title === 'string' ? p.title : ''),
        customPageClass: typeof p?.customPageClass === 'string'
          ? p.customPageClass
          : (typeof p?.class === 'string' ? p.class : ''),
        customPageStyle: typeof p?.customPageStyle === 'string'
          ? p.customPageStyle
          : (typeof p?.customStyle === 'string' ? p.customStyle : '')
      };
    });

    const absPageFile = path.resolve(projectRoot, rawPath.endsWith('.uvue') ? rawPath : `${rawPath}.uvue`);
    watchedTabPages.add(absPageFile);

    // 兜底直接解析对应主页面源码（仅在无多平台变体且为单默认变体时作为源码即时编辑的兜底）
    if (options.syncNavbarConfig !== false && fs.existsSync(absPageFile) && entryVariants.length === 1 && !entryVariants[0].condition) {
      try {
        const pageCode = fs.readFileSync(absPageFile, 'utf-8');
        const v = entryVariants[0];
        const mHide = pageCode.match(/hideNavbar\s*:\s*(true|false)/i);
        if (mHide)
          v.hideNavbar = mHide[1].toLowerCase() === 'true';
        const mStatus = pageCode.match(/hideStatusBar\s*:\s*(true|false)/i);
        if (mStatus)
          v.hideStatusBar = mStatus[1].toLowerCase() === 'true';
        const mShowBack = pageCode.match(/showBack\s*:\s*(true|false)/i);
        if (mShowBack)
          v.showBack = mShowBack[1].toLowerCase() === 'true';
        const mRefresh = pageCode.match(/enablePullDownRefresh\s*:\s*(true|false)/i);
        if (mRefresh)
          v.enablePullDownRefresh = mRefresh[1].toLowerCase() === 'true';
        const mTitle = pageCode.match(/navigationBarTitleText\s*:\s*['"`](.*?)['"`]/i)
          || pageCode.match(/\btitle\s*:\s*['"`](.*?)['"`]/i);
        if (mTitle)
          v.title = mTitle[1].trim();
        const mClass = pageCode.match(/customPageClass\s*:\s*['"`](.*?)['"`]/i);
        if (mClass)
          v.customPageClass = mClass[1].trim();
        const mStyle = pageCode.match(/customPageStyle\s*:\s*['"`](.*?)['"`]/i);
        if (mStyle)
          v.customPageStyle = mStyle[1].trim();
      }
      catch {}
    }

    // 防止相同名称冲突
    let finalCompName = actualCompName;
    if (usedNames.has(finalCompName)) {
      finalCompName = `${pascalPageName}${actualCompName}`;
    }
    usedNames.add(finalCompName);

    viewsEntries.push({
      // 宿主页不能 import 自身（index.uvue -> TabViews -> index.uvue），改由页面传入 slot。
      importName: isHostPage ? null : finalCompName,
      importPath: `@/${actualRelPath.replace(/\\/g, '/')}`,
      variants: entryVariants
    });
  }

  // 生成 TabViews.uvue 内容
  const targetFile = options.targetFile ?? 'src/tabbar/components/TabViews.uvue';
  const tabViewsFilePath = path.resolve(projectRoot, targetFile);

  // 排序保持稳定性
  const sortedImports = viewsEntries
    .filter(item => item.importName != null)
    .sort((a, b) => (a.importName ?? '').localeCompare(b.importName ?? ''));
  const importLines = sortedImports
    .map(item => `import ${item.importName} from '${item.importPath}';`)
    .join('\n');

  function renderTabContentTag(index: number, importName: string | null, v: ViewEntryVariant): string {
    let attrs = ` :content-index="${index}"`;
    if (v.title) {
      attrs += ` title="${v.title.replace(/"/g, '&quot;')}"`;
    }
    if (v.enablePullDownRefresh !== undefined) {
      attrs += ` :enable-pull-down-refresh="${v.enablePullDownRefresh}"`;
    }
    if (v.hideNavbar) {
      attrs += ` :hide-navbar="true"`;
    }
    if (v.hideStatusBar) {
      attrs += ` :hide-status-bar="true"`;
    }
    attrs += ` :show-back="${v.showBack}"`;
    if (v.customPageClass) {
      attrs += ` custom-page-class="${v.customPageClass.replace(/"/g, '&quot;')}"`;
    }
    if (v.customPageStyle) {
      attrs += ` custom-page-style="${v.customPageStyle.replace(/"/g, '&quot;')}"`;
    }
    const content = importName == null
      ? '      <slot name="tabHost" />'
      : `      <${importName} />`;
    return `    <TabContent${attrs}>\n${content}\n    </TabContent>`;
  }

  const contentBlocks = viewsEntries
    .map((item, index) => {
      const renderedTags = item.variants.map(v => ({
        condition: v.condition,
        tag: renderTabContentTag(index, item.importName, v)
      }));

      // 判断所有变体的 tag 是否完全相同
      const uniqueTags = new Set(renderedTags.map(r => r.tag));
      if (uniqueTags.size <= 1) {
        return renderedTags[0].tag;
      }

      // 存在多平台差异，按条件输出 <!-- #ifdef -->
      return renderedTags
        .map(({ condition, tag }) => {
          if (condition) {
            return `    <!-- #ifdef ${condition} -->\n${tag}\n    <!-- #endif -->`;
          }
          return tag;
        })
        .join('\n');
    })
    .join('\n');

  const tabViewsContent = `<template>
  <view class="tab-views-container" style="position: relative; display: flex; flex-direction: column; flex: 1; height: 100%;">
${contentBlocks}
  </view>
</template>

<script setup lang="uts">
${importLines}
import TabContent from './TabContent.uvue';
</script>

<style lang="scss" scoped>
.tab-views-container {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
}
</style>
`;

  let existingContent = '';
  if (fs.existsSync(tabViewsFilePath)) {
    existingContent = fs.readFileSync(tabViewsFilePath, 'utf-8');
  }

  // 仅在文件不存在或内容变化时写入，避免无谓触发热重载
  if (existingContent !== tabViewsContent) {
    const parentDir = path.dirname(tabViewsFilePath);
    if (!fs.existsSync(parentDir)) {
      fs.mkdirSync(parentDir, { recursive: true });
    }
    fs.writeFileSync(tabViewsFilePath, tabViewsContent, 'utf-8');
    console.log('[tabbar-views] 自动同步更新 TabViews.uvue 调度组件');
  }
}

/**
 * 根据 config.uts 自动同步 TabViews.uvue 调度组件的插件
 */
export default function tabbarViewsPlugin(options: TabbarViewsOptions = {}): Plugin {
  let projectRoot = '';
  let debounceTimer: ReturnType<typeof setTimeout> | null = null;

  function debouncedGenerate() {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    debounceTimer = setTimeout(() => {
      const mode = getTabbarMode(projectRoot);
      if (mode !== '0' && mode !== 'NO_TABBAR') {
        try {
          generateTabViews(projectRoot, options);
        }
        catch (e) {
          console.error('[tabbar-views] 重新生成 TabViews 失败:', e);
        }
      }
    }, 100);
  }

  return {
    name: 'vite-plugin-tabbar-views',
    enforce: 'pre',
    configResolved(config) {
      projectRoot = config.root;
    },
    buildStart() {
      if (options.enabled === false) {
        return;
      }
      const mode = getTabbarMode(projectRoot);
      if (mode !== '0' && mode !== 'NO_TABBAR') {
        try {
          generateTabViews(projectRoot, options);
        }
        catch (e) {
          console.error('[tabbar-views] 生成 TabViews 脚手架失败:', e);
        }
      }
    },
    configureServer(server) {
      if (options.enabled === false) {
        return;
      }
      const configFile = options.configFile ?? 'src/tabbar/config.uts';
      const configAbsPath = path.resolve(projectRoot, configFile);

      server.watcher.on('change', (file) => {
        const norm = path.resolve(file);
        // 1. config.uts 改动触发
        if (norm === configAbsPath) {
          debouncedGenerate();
          return;
        }
        // 2. TabBar 对应的主页面文件（如 index.uvue, basic.uvue 等）改动触发
        if (watchedTabPages.has(norm)) {
          debouncedGenerate();
          return;
        }
        // 3. pages.json 改动触发
        const pagesJsonPath = path.resolve(projectRoot, 'pages.json');
        if (norm === pagesJsonPath) {
          debouncedGenerate();
        }
      });
    }
  };
}
