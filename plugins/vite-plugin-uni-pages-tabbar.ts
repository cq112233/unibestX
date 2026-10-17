import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

/**
 * uni-pages TabBar 策略插件（卫星）。
 *
 * 自包含：本文件不 import 核心插件或任何 plugins/ 下的共享模块。它通过在自己导出的插件对象上挂
 * `uniPagesStage` 字段被核心插件发现（核心在 configResolved 时按该字段收集、按 order 升序在同一次
 * 生成 pass 内运行）。
 *
 * 职责：根据 `.env` 的 VITE_TABBAR_MODE（0=无 / 1=原生 / 2=自定义带原生节点 / 3、4=纯自定义或单页容器）
 * 决定 pages.json 里的 tabBar 节点；配置来源是正则解析 `src/tabbar/config.uts`，文案走
 * `src/i18n/locales/zh-CN.json` 的 tabbar.* 翻译。沙盒生效时只保留被调试的 tab 项。
 */

// ==========================================
// 与核心结构等价的最小类型（无需 import，避免共享模块）
// ==========================================

type PageConfig = {
  path: string;
  style?: Record<string, any>;
  [key: string]: any;
};

type TabBarItem = {
  tabType?: string;
  pagePath: string;
  text: string;
  iconPath: string;
  selectedIconPath: string;
  [key: string]: any;
};

type ParsedTabBarConfig = {
  color?: string;
  selectedColor?: string;
  backgroundColor?: string;
  borderStyle?: string;
  borderColor?: string;
  fontSize?: string;
  iconWidth?: string;
  spacing?: string;
  height?: string;
  midButton?: any;
  glassEffect?: boolean;
  list: TabBarItem[];
};

type PagesBuildState = {
  root: string;
  isProduction: boolean;
  output: { pages: PageConfig[]; tabBar?: Record<string, any>; [key: string]: any };
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

/** 规范化页面路径用于比对 */
function normalizePagePath(p: string): string {
  return p
    .trim()
    .replace(/\\/g, '/')
    .replace(/^\.\//, '')
    .replace(/^\//, '')
    .replace(/\.(uvue|vue|uts|ts|js)$/, '');
}

/** 正则解析 src/tabbar/config.uts，提取 tabBar 节点所需的全部字段 */
function parseCustomTabbarConfig(projectRoot: string): ParsedTabBarConfig {
  const configPath = path.resolve(projectRoot, 'src/tabbar/config.uts');
  if (!fs.existsSync(configPath)) {
    return { list: [] };
  }
  const rawContent = fs.readFileSync(configPath, 'utf-8');
  // 过滤多行注释与单行注释，避免注释掉的属性（如 midButton 等）被误解析
  const content = rawContent
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/.*$/gm, '');

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
  const glassEffectMatch = content.match(/glassEffect\s*:\s*(true|false)/);

  const midButtonMatch = content.match(/midButton\s*:\s*\{([\s\S]*?)\}/);
  let midButton: Record<string, any> | undefined;
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
  const listResult: TabBarItem[] = [];
  if (listMatch) {
    const listBlock = listMatch[1];
    const itemRegex = /\{([\s\S]*?)\}/g;
    let m = itemRegex.exec(listBlock);
    while (m !== null) {
      const itemBlock = m[1];
      const itemType = itemBlock.match(/tabType\s*:\s*['"`](.*?)['"`]/);
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

        // 业务标识（type）：仅回写为页面级唯一键，供原生 tabBar 页面互跳去重
        if (itemType && itemType[1].trim())
          itemObj.tabType = itemType[1].trim();

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
    glassEffect: glassEffectMatch ? glassEffectMatch[1] === 'true' : undefined,
    midButton,
    list: listResult
  };
}

/** 把解析结果的可选字段补齐到 tabBar 节点上（沙盒与模式 1/2 的首次构建共用） */
function appendOptionalTabBarFields(tabBar: Record<string, any>, parsedConfig: ParsedTabBarConfig): void {
  if (parsedConfig.borderColor)
    tabBar.borderColor = parsedConfig.borderColor;
  if (parsedConfig.fontSize)
    tabBar.fontSize = parsedConfig.fontSize;
  if (parsedConfig.iconWidth)
    tabBar.iconWidth = parsedConfig.iconWidth;
  if (parsedConfig.spacing)
    tabBar.spacing = parsedConfig.spacing;
  if (parsedConfig.height)
    tabBar.height = parsedConfig.height;
  if (parsedConfig.midButton)
    tabBar.midButton = parsedConfig.midButton;
  if (parsedConfig.glassEffect !== undefined)
    tabBar.glassEffect = parsedConfig.glassEffect;
}

// ==========================================
// 阶段实现
// ==========================================

function runTabBar(state: PagesBuildState): void {
  const output = state.output;
  const projectRoot = state.root;

  if (state.flags.sandboxActive) {
    // 沙盒模式：只保留当前沙盒编译中真实存在的 TabBar 页面项
    const sandboxMainPages = output.pages;
    const parsedConfig = parseCustomTabbarConfig(projectRoot);
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
    // 若仅调试 1 个 Tab 页面，移除系统级 tabBar 节点避免报路由缺失错误
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
      appendOptionalTabBarFields(output.tabBar, parsedConfig);
    }
    else {
      delete output.tabBar;
    }
    return;
  }

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
      appendOptionalTabBarFields(output.tabBar, parsedConfig);
    }
    else {
      delete output.tabBar.custom;
      if (parsedConfig.list.length > 0 && (output.tabBar.list == null || output.tabBar.list.length === 0)) {
        output.tabBar.list = parsedConfig.list;
      }
      if (parsedConfig.midButton)
        output.tabBar.midButton = parsedConfig.midButton;
      if (parsedConfig.glassEffect !== undefined)
        output.tabBar.glassEffect = parsedConfig.glassEffect;
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
      appendOptionalTabBarFields(output.tabBar, parsedConfig);
    }
    else {
      output.tabBar.custom = true;
      if (parsedConfig.list.length > 0 && (output.tabBar.list == null || output.tabBar.list.length === 0)) {
        output.tabBar.list = parsedConfig.list;
      }
      if (parsedConfig.midButton)
        output.tabBar.midButton = parsedConfig.midButton;
      if (parsedConfig.glassEffect !== undefined)
        output.tabBar.glassEffect = parsedConfig.glassEffect;
    }
  }
  else if (tabbarMode === '3' || tabbarMode === 'CUSTOM_TABBAR_WITHOUT_NATIVE' || tabbarMode === '4' || tabbarMode === 'SINGLE_PAGE_TABBAR') {
    // 模式3（纯自定义 TabBar，无原生配置）与 模式4（单页面 TabBar 容器模式）：完全删除 pages.json 中的 tabBar
    delete output.tabBar;
  }
}

// ==========================================
// 插件导出
// ==========================================

const stage: PagesStage = {
  name: 'uni-pages:tabbar',
  order: 200,
  run(state) {
    runTabBar(state);
  }
};

export default function uniPagesTabbarPlugin() {
  return {
    name: 'uni-pages:tabbar',
    uniPagesStage: stage
  };
}
