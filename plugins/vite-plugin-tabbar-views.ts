import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import type { Plugin } from 'vite';

export type TabbarViewsOptions = {
  /** 是否启用本插件，默认 true */
  enabled?: boolean;
  /** TabBar 配置文件路径，默认 'src/tabbar/config.uts' */
  configFile?: string;
  /** 生成的 TabViews 调度组件路径，默认 'src/tabbar/components/TabViews.uvue' */
  targetFile?: string;
  /** 缺失对应 views 目录或视图组件时是否自动创建基础脚手架，默认 true */
  autoCreateViews?: boolean;
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
 * 辅助生成单页 TabBar 调度容器 TabViews.uvue 以及补全缺失的 views 视图组件
 */
export function generateTabViews(projectRoot: string, options: TabbarViewsOptions = {}): void {
  const configFile = options.configFile ?? 'src/tabbar/config.uts';
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
      tabPages.push(pagePathMatch[1].trim().replace(/^\//, ''));
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

  const viewsEntries: Array<{
    importName: string;
    importPath: string;
    hideNavbar: boolean;
  }> = [];
  const usedNames = new Set<string>();

  for (let idx = 0; idx < fullTabPages.length; idx++) {
    const rawPath = fullTabPages[idx];
    const cleanPath = rawPath.replace(/^src\//, '');
    const pageDirRel = path.dirname(cleanPath);
    const absPageDir = path.resolve(projectRoot, 'src', pageDirRel);
    const dirName = path.basename(absPageDir);
    const pascalDirName = dirName.charAt(0).toUpperCase() + dirName.slice(1);
    const expectedCompName = `${pascalDirName}View`;

    const viewsDir = path.resolve(absPageDir, 'views');
    const expectedViewFile = path.resolve(viewsDir, `${expectedCompName}.uvue`);

    let actualCompName = expectedCompName;
    let actualRelPath = `src/${pageDirRel}/views/${expectedCompName}.uvue`;

    if (fs.existsSync(absPageDir)) {
      if (!fs.existsSync(viewsDir)) {
        if (options.autoCreateViews !== false) {
          fs.mkdirSync(viewsDir, { recursive: true });
        }
      }

      // 检查 views 目录下是否已经存在视图组件
      let existingViews: string[] = [];
      if (fs.existsSync(viewsDir)) {
        try {
          existingViews = fs.readdirSync(viewsDir).filter((f: string) => f.endsWith('.uvue'));
        }
        catch {}
      }

      if (existingViews.length > 0) {
        // 已有视图组件：优先匹配 HomeView（针对 index 目录），其次匹配 expectedCompName，最后取第一个已有组件
        const matchedView = (dirName === 'index' && existingViews.includes('HomeView.uvue'))
          ? 'HomeView.uvue'
          : (existingViews.find((f: string) => f === `${expectedCompName}.uvue`) ?? existingViews[0]);

        const baseName = matchedView.replace(/\.uvue$/, '');
        actualCompName = baseName;
        actualRelPath = `src/${pageDirRel}/views/${matchedView}`;
      }
      else if (options.autoCreateViews !== false) {
        // 没有任何视图组件时，才自动创建规范的 View.uvue
        const viewTemplate = `<script lang="uts" setup>
defineOptions({
  name: '${expectedCompName}',
  styleIsolation: 'isolated'
});

import { onNavbarPullDownRefresh, stopNavbarPullDownRefresh } from '@/src/utils/refresh.uts';
import { curIdx, onTabShow } from '@/src/tabbar';

// 页面数据加载/刷新方法
function refreshData(): void {
  console.log('${expectedCompName} 刷新中...');
  setTimeout(() => {
    console.log('${expectedCompName} 刷新成功');
    // 数据加载完毕后，手动停止下拉刷新动画状态
    stopNavbarPullDownRefresh();
  }, 1000);
}

// 监听 Tab 切换到当前功能页（索引 ${idx}）时触发刷新
onTabShow(${idx}, () => {
  console.log('切换到了 ${expectedCompName} Tab');
  refreshData();
});

// 监听 navbar 自定义下拉刷新事件（在处于当前 Tab 时生效）
onNavbarPullDownRefresh(() => {
  if (curIdx.value == ${idx}) {
    refreshData();
  }
});
</script>

<template>
  <view class="flex flex-col flex-1 p-[16px]">
    <text class="text-[18px] font-bold text-[#1e293b]">${expectedCompName}</text>
    <text class="text-[13px] text-[#64748b] mt-[6px]">当前为单页面 TabBar 视图组件</text>
  </view>
</template>

<style lang="scss" scoped></style>
`;
        fs.writeFileSync(expectedViewFile, viewTemplate, 'utf-8');
        console.log(`[tabbar-views] 自动为 TabBar 单页生成基础视图组件: ${path.relative(projectRoot, expectedViewFile)}`);
      }
    }

    // 读取对应页面文件中的 definePage 配置（如 hideNavbar / hideStatusBar）
    let hideNavbar = false;
    let hideStatusBar = false;
    const absPageFile = path.resolve(projectRoot, rawPath.endsWith('.uvue') ? rawPath : `${rawPath}.uvue`);
    watchedTabPages.add(absPageFile);

    if (options.syncNavbarConfig !== false && fs.existsSync(absPageFile)) {
      try {
        const pageCode = fs.readFileSync(absPageFile, 'utf-8');
        // 提取 hideNavbar: true / false
        const mHide = pageCode.match(/hideNavbar\s*:\s*(true|false)/i);
        if (mHide) {
          hideNavbar = mHide[1].toLowerCase() === 'true';
        }
        // 提取 hideStatusBar: true / false
        const mStatus = pageCode.match(/hideStatusBar\s*:\s*(true|false)/i);
        if (mStatus) {
          hideStatusBar = mStatus[1].toLowerCase() === 'true';
        }
      }
      catch {}
    }

    // 防止相同名称冲突
    let finalCompName = actualCompName;
    if (usedNames.has(finalCompName)) {
      finalCompName = `${pascalDirName}${actualCompName}`;
    }
    usedNames.add(finalCompName);

    viewsEntries.push({
      importName: finalCompName,
      importPath: `@/${actualRelPath.replace(/\\/g, '/')}`,
      hideNavbar,
      hideStatusBar
    });
  }

  // 生成 TabViews.uvue 内容
  const targetFile = options.targetFile ?? 'src/tabbar/components/TabViews.uvue';
  const tabViewsFilePath = path.resolve(projectRoot, targetFile);

  // 排序保持稳定性
  const sortedImports = [...viewsEntries].sort((a, b) => a.importName.localeCompare(b.importName));
  const importLines = sortedImports
    .map(item => `import ${item.importName} from '${item.importPath}';`)
    .join('\n');

  const contentBlocks = viewsEntries
    .map((item, index) => {
      const hideNavAttr = item.hideNavbar ? ' :hide-navbar="true"' : '';
      const hideStatusAttr = item.hideStatusBar ? ' :hide-status-bar="true"' : '';
      return `    <TabContent :content-index="${index}"${hideNavAttr}${hideStatusAttr}>\n      <${item.importName} />\n    </TabContent>`;
    })
    .join('\n');

  const tabViewsContent = `<template>
  <view class="flex-1 relative" style="flex: 1; position: relative;">
${contentBlocks}
  </view>
</template>

<script setup lang="uts">
${importLines}
import TabContent from './TabContent.uvue';
</script>
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
 * 辅助生成最基础的 TabViews.uvue 脚手架与视图组件插件
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
        }
      });
    }
  };
}
