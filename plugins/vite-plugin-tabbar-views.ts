import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import type { Plugin } from 'vite';
import { loadAllPlatformPageVariants, loadPlatformPagesJson } from './pages-json-util';
import { getPagesMetaSnapshot } from './pages-meta-cache';

export type TabbarViewsOptions = {
  /** 是否启用本插件，默认 true */
  enabled?: boolean;
  /** 缺失 Tab 页面时是否自动补建模板，默认 true；只会新增，不会覆盖或删除已有页面 */
  autoCreatePage?: boolean;
  /** TabBar 配置文件路径，默认 'src/tabbar/config.uts' */
  configFile?: string;
  /** 生成的 TabViews 调度组件路径，默认 'src/tabbar/components/TabViews.uvue' */
  targetFile?: string;
  /** 模式 4 的宿主页面路径，默认 'src/pages/index/index'（该页面通过 slot 提供自身内容） */
  hostPage?: string;
  /** 是否自动从各 Tab 页面的 definePage 中同步 hideNavbar 配置，默认 true */
  syncNavbarConfig?: boolean;
};

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

type CachedPageVariant = {
  condition: string | null;
  page: Record<string, any> | null;
};

type CachedPageEntry = {
  variants: CachedPageVariant[];
};

type TabbarPageEntry = {
  pagePath: string;
  tabType: string;
  text: string;
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

/** 归一化页面路径，兼容有无前导 `/`、有无扩展名 */
function normalizeTabPagePath(pagePath: string): string {
  return pagePath.replace(/\\/g, '/').replace(/^\//, '').replace(/\.(uvue|vue)$/, '');
}

/** 过滤配置源码中的注释，避免把注释掉的 Tab 项当成有效配置 */
function stripConfigComments(source: string): string {
  return source
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/.*$/gm, '');
}

/** 从单个 Tab 配置块中提取补建页面所需字段 */
function readTabbarPageEntry(block: string): TabbarPageEntry | null {
  const pagePathMatch = block.match(/pagePath\s*:\s*['"`](.*?)['"`]/);
  if (pagePathMatch == null || pagePathMatch[1].trim() == '') {
    return null;
  }
  const tabTypeMatch = block.match(/tabType\s*:\s*['"`](.*?)['"`]/);
  const textMatch = block.match(/text\s*:\s*['"`](.*?)['"`]/);
  return {
    pagePath: normalizeTabPagePath(pagePathMatch[1].trim()),
    tabType: tabTypeMatch != null ? tabTypeMatch[1].trim() : '',
    text: textMatch != null ? textMatch[1].trim() : ''
  };
}

/** 读取 config.uts 中 list 与 midButton 的页面项 */
function readTabbarPageEntries(projectRoot: string, configFile: string): TabbarPageEntry[] {
  const configPath = path.resolve(projectRoot, configFile);
  if (!fs.existsSync(configPath)) {
    return [];
  }
  const content = stripConfigComments(fs.readFileSync(configPath, 'utf-8'));
  const listMatch = content.match(/list\s*:\s*\[([\s\S]*?)\]/);
  const list: TabbarPageEntry[] = [];
  if (listMatch != null) {
    const itemRegex = /\{([\s\S]*?)\}/g;
    let match = itemRegex.exec(listMatch[1]);
    while (match != null) {
      const entry = readTabbarPageEntry(match[1]);
      if (entry != null) {
        list.push(entry);
      }
      match = itemRegex.exec(listMatch[1]);
    }
  }

  const midButtonMatch = content.match(/midButton\s*:\s*\{([\s\S]*?)\}/);
  const midButton = midButtonMatch != null ? readTabbarPageEntry(midButtonMatch[1]) : null;

  const fullList: TabbarPageEntry[] = [];
  if (midButton != null) {
    const half = Math.floor(list.length / 2);
    for (let i = 0; i < list.length; i++) {
      if (i === half) {
        fullList.push(midButton);
      }
      fullList.push(list[i]);
    }
    if (half >= list.length) {
      fullList.push(midButton);
    }
  }
  else {
    fullList.push(...list);
  }

  return fullList.map((entry, index) => ({
    ...entry,
    tabType: entry.tabType != '' ? entry.tabType : `tab-${index}`
  }));
}

/** 转换为可作为标识符使用的 PascalCase */
function toPascalCase(value: string): string {
  const parts = value.split(/[^a-z0-9]+/i).filter(part => part != '');
  const result = parts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');
  const safe = result != '' ? result : 'Tab';
  return /^\d/.test(safe) ? `Tab${safe}` : safe;
}

/** 生成 UTS 单引号字符串字面量 */
function toSingleQuoted(value: string): string {
  return `'${value.replace(/\\/g, '\\\\').replace(/'/g, '\\\'')}'`;
}

/** 渲染缺失 Tab 页面的最小可运行模板 */
export function renderTabPageScaffold(entry: TabbarPageEntry): string {
  const pageName = path.basename(entry.pagePath);
  const safePageName = pageName != '' ? pageName : entry.tabType;
  const pascalName = toPascalCase(safePageName);
  const camelName = pascalName.charAt(0).toLowerCase() + pascalName.slice(1);
  const title = entry.text != '' ? entry.text : safePageName;
  const routeVar = `${camelName}Route`;

  return `<template>
  <view class="flex flex-col">
    <text>${pascalName}View</text>
  </view>
</template>

<script setup lang="uts">
import { curIdx, resolveTabIndexByKey, useTabPage, useTabPageShell } from '@/src/tabbar/index.uts';
import { onNavbarPullDownRefresh, stopNavbarPullDownRefresh } from '@/src/layouts/navbar/utils/index.uts';

definePage(() => {
  return {
    customPageClass: 'init-page', // 页面根容器自定义类名（配合 layout 布局使用，支持配置全局样式类）
    customPageStyle: 'background-color: transparent;', // 页面根容器自定义行内样式（穿透任何样式隔离，全端绝对生效）
    name: ${toSingleQuoted(safePageName)}, // 路由名：useRoute().name 优先读取此值，未显式声明时默认读取路径最后一个单词（如 index）
    debug: false, // 是否开启当前页面沙盒独立调试（设为 true 可单独调试此页；⚠️ 调试完成后改回 false）
    debugHome: false, // 沙盒调试模式下是否将当前页面指定为启动首页（全局仅允许 1 个页面设为 true，排在 pages[0]）
    layout: 'navbar', // 页面通用布局模板（采用 navbar 布局接管顶部导航与下拉滚动容器）
    showBack: false, // 导航栏左侧是否显示返回箭头（TabBar 首页无需返回按钮）
    hideStatusBar: false, // 是否隐藏状态栏（true 为隐藏）
    hideNavbar: false, // 是否隐藏顶部导航栏（false 为正常显示）
    style: {
      navigationBarTitleText: ${toSingleQuoted(title)},
      navigationStyle: 'custom'
    }
  };
});

const {
  route: ${routeVar},
  onLoad: on${pascalName}Load,
  onShow: on${pascalName}Show,
  onHide: on${pascalName}Hide
} = useTabPage();

// 监听 navbar 自定义下拉刷新事件
onNavbarPullDownRefresh(() => {
  // 所有已挂载 Tab 都会收到全局刷新事件，只处理当前激活的 Tab
  if (curIdx.value != resolveTabIndexByKey(${toSingleQuoted(entry.tabType)})) {
    return;
  }
  console.log(${toSingleQuoted(`${safePageName}页面刷新中...`)});
  setTimeout(() => {
    // 异步完成时再次门控：刷新期间若已切走则忽略结果
    if (curIdx.value != resolveTabIndexByKey(${toSingleQuoted(entry.tabType)})) {
      return;
    }
    console.log(${toSingleQuoted(`${safePageName}页面刷新成功`)});
    stopNavbarPullDownRefresh();
  }, 1000);
});

// 与普通页面一致的首次进入 / 显示 / 隐藏生命周期
on${pascalName}Load(() => {
  console.log(${toSingleQuoted(`on${pascalName}Load`)}, ${toSingleQuoted(`${safePageName} Tab 挂载了👋`)}, ${routeVar}.value.fullPath);
});

on${pascalName}Show(() => {
  console.log(${toSingleQuoted(`on${pascalName}Show`)}, ${toSingleQuoted(`${safePageName} Tab 显示了👀`)}, ${routeVar}.value.fullPath);
});

on${pascalName}Hide(() => {
  console.log(${toSingleQuoted(`on${pascalName}Hide`)}, ${toSingleQuoted(`${safePageName} Tab 隐藏了👉`)});
});

// 页面文件同时可作为模式 4 的 Tab 子页使用：嵌套时由 useTabPage() 接管页面生命周期
useTabPageShell(${toSingleQuoted(entry.tabType)});
</script>

<style scoped></style>
`;
}

/**
 * 为 config.uts 中尚不存在页面文件的 Tab 补建模板。
 *
 * 只新增、不覆盖、不删除：已有页面保持不变；从 Tab 配置中删除某项后，其页面文件也不会被清理。
 * @returns 本次新生成的页面相对路径
 */
export function scaffoldMissingTabPages(projectRoot: string, options: TabbarViewsOptions = {}): string[] {
  if (options.autoCreatePage === false) {
    return [];
  }
  const configFile = options.configFile ?? 'src/tabbar/config.uts';
  const entries = readTabbarPageEntries(projectRoot, configFile);
  const created: string[] = [];
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    if (entry.pagePath == '') {
      continue;
    }
    const uvueFile = path.resolve(projectRoot, `${entry.pagePath}.uvue`);
    const vueFile = path.resolve(projectRoot, `${entry.pagePath}.vue`);
    if (fs.existsSync(uvueFile) || fs.existsSync(vueFile)) {
      continue;
    }
    fs.mkdirSync(path.dirname(uvueFile), { recursive: true });
    fs.writeFileSync(uvueFile, renderTabPageScaffold(entry), 'utf-8');
    const relativePath = `${entry.pagePath}.uvue`;
    created.push(relativePath);
    console.log(`[tabbar-views] 已补建缺失 Tab 页面: ${relativePath}`);
  }
  return created;
}

/**
 * 从页面源码兜底提取静态标题。
 *
 * `navigationBarTitleText` 是条件表达式时无法在这里得到单一标题，此时必须放弃标题，
 * 不能继续匹配页面业务数据里的 `title` 字段（例如 demoList 的卡片标题）。
 */
function resolveSourceTitle(pageCode: string): string {
  const navTitleField = pageCode.match(/navigationBarTitleText\s*:/i);
  if (navTitleField != null) {
    const tail = pageCode.slice((navTitleField.index ?? 0) + navTitleField[0].length);
    const literal = tail.match(/^\s*(['"`])([\s\S]*?)\1/);
    return literal != null ? literal[2].trim() : '';
  }
  const titleField = pageCode.match(/\btitle\s*:\s*(['"`])([\s\S]*?)\1/i);
  return titleField != null ? titleField[2].trim() : '';
}

/** 把核心插件留下的完整页面快照转成 TabViews 可直接消费的配置 / 多平台变体 */
function readCachedPageEntries(projectRoot: string): Map<string, CachedPageEntry> {
  const result = new Map<string, CachedPageEntry>();
  const snapshot = getPagesMetaSnapshot(projectRoot);
  if (snapshot == null) {
    return result;
  }

  const addPage = (page: Record<string, any>, root: string = ''): void => {
    if (typeof page.path !== 'string' || page.path === '') {
      return;
    }
    const fullPath = normalizeTabPagePath(root === '' ? page.path : `${root}/${page.path}`);
    const variants = Array.isArray(page._variants)
      ? page._variants
          .filter((variant: any) => variant != null && typeof variant.platform === 'string')
          .map((variant: any): CachedPageVariant => ({
            condition: variant.platform,
            page: variant.page ?? null
          }))
      : [];
    result.set(fullPath, {
      variants: variants.length > 0 ? variants : [{ condition: null, page }]
    });
  };

  snapshot.pages.forEach(page => addPage(page));
  snapshot.subPackages.forEach((pkg) => {
    pkg.pages.forEach(page => addPage(page, pkg.root));
  });
  return result;
}

/** 合并字段完全相同的平台变体，避免 TabViews 生成大量重复的条件编译块 */
function mergeEquivalentViewVariants(variants: ViewEntryVariant[]): ViewEntryVariant[] {
  const groups = new Map<string, ViewEntryVariant[]>();
  variants.forEach((variant) => {
    const { condition: _condition, ...fields } = variant;
    const key = JSON.stringify(fields);
    const list = groups.get(key);
    if (list == null) {
      groups.set(key, [variant]);
    }
    else {
      list.push(variant);
    }
  });

  const result: ViewEntryVariant[] = [];
  groups.forEach((list) => {
    const first = list[0];
    const conditions: string[] = [];
    let unconditional = false;
    list.forEach((variant) => {
      if (variant.condition == null || variant.condition == '') {
        unconditional = true;
        return;
      }
      if (!conditions.includes(variant.condition)) {
        conditions.push(variant.condition);
      }
    });
    result.push({
      ...first,
      condition: unconditional ? null : conditions.join(' || ')
    });
  });
  return result;
}

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

  // 直接调用本生成器（单测 / 独立脚本）时也补齐缺失页面；生产构建由 configResolved 更早执行。
  scaffoldMissingTabPages(projectRoot, options);

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
  const cachedPageEntries = readCachedPageEntries(projectRoot);

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

    const normTarget = rawPath.replace(/\\/g, '/').replace(/^\//, '').replace(/\.(uvue|vue)$/, '');
    const cachedEntry = cachedPageEntries.get(normTarget);
    let sourceVariants: CachedPageVariant[] = [];
    if (cachedEntry != null) {
      // 模式 4 下这些页面已被移出 pages.json，但核心插件留下了包含 _variants 的完整快照。
      sourceVariants = cachedEntry.variants;
    }
    else {
      // 独立运行本插件或跳过核心插件时，退回读取 pages.json。
      const variants = allVariantsMap.get(normTarget)
        || allVariantsMap.get(`src/${normTarget}`)
        || allVariantsMap.get(normTarget.replace(/^src\//, ''))
        || [];
      const pageConfig = pagesJsonMap.get(normTarget)
        || pagesJsonMap.get(`src/${normTarget}`)
        || pagesJsonMap.get(normTarget.replace(/^src\//, ''))
        || null;
      sourceVariants = variants.length > 0
        ? variants
        : [{ condition: null, page: pageConfig }];
    }

    const entryVariants: ViewEntryVariant[] = mergeEquivalentViewVariants(sourceVariants.map((v) => {
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
    }));

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
        const sourceTitle = resolveSourceTitle(pageCode);
        if (sourceTitle !== '')
          v.title = sourceTitle;
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
    // v-if 必须放在 TabContent 外层：微信小程序的 slot 子组件会在父模板阶段提前实例化，
    // 仅靠 TabContent 内部的 v-if 无法阻止未激活页面的 setup / onMounted 执行。
    return `    <TabContent v-if="isTabRendered(${index})"${attrs}>\n${content}\n    </TabContent>`;
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
import { reactive, watch } from 'vue';
import { useTabbar } from '@/src/tabbar/index.uts';

const { curIdx } = useTabbar();
const renderedTabs: Array<boolean> = reactive([${viewsEntries.map(() => 'false').join(', ')}]);

if (curIdx.value >= 0 && curIdx.value < renderedTabs.length) {
  renderedTabs[curIdx.value] = true;
}

watch(curIdx, (nextIdx: number): void => {
  if (nextIdx >= 0 && nextIdx < renderedTabs.length) {
    renderedTabs[nextIdx] = true;
  }
});

/** 首次激活后常驻保活；未访问过的 Tab 不创建页面组件 */
function isTabRendered(index: number): boolean {
  return renderedTabs[index] == true;
}
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
      if (options.enabled === false || options.autoCreatePage === false) {
        return;
      }
      const mode = getTabbarMode(projectRoot);
      if (mode !== '0' && mode !== 'NO_TABBAR') {
        try {
          // 必须早于 uni-pages 的 configResolved 扫描执行，才能让新页面进入同一轮 pages.json。
          scaffoldMissingTabPages(projectRoot, options);
        }
        catch (e) {
          console.error('[tabbar-views] 自动补建 Tab 页面失败:', e);
        }
      }
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
          try {
            scaffoldMissingTabPages(projectRoot, options);
          }
          catch (e) {
            console.error('[tabbar-views] 自动补建 Tab 页面失败:', e);
          }
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

      server.watcher.on('unlink', (file) => {
        const norm = path.resolve(file);
        if (!watchedTabPages.has(norm)) {
          return;
        }
        try {
          scaffoldMissingTabPages(projectRoot, options);
        }
        catch (e) {
          console.error('[tabbar-views] 自动补建 Tab 页面失败:', e);
        }
        debouncedGenerate();
      });
    }
  };
}
