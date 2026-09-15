/**
 * 本文件由 `scripts/gen-uts-dts.mjs` 自动生成，请勿手工编辑。
 *
 * 它声明 `./index.uts` 的导出面，供 TS / IDE 解析类型与补全。
 * tsconfig 的 `allowArbitraryExtensions` 把 `./index.uts` 解析到同目录的
 * `index.d.uts.ts`，因此本文件必须与 `index.uts` **同目录同名**，不能挪走。
 *
 * 修改 `index.uts` 的导出后，重新执行：node scripts/gen-uts-dts.mjs
 * 校验是否已同步：node scripts/gen-uts-dts.mjs --check
 */
/**
 * 外观模式类型：'auto'（跟随系统） | 'light'（浅色） | 'dark'（深色）
 */
export type ThemeMode = 'auto' | 'light' | 'dark';

/**
 * 支持的外观模式常量列表
 */
export declare const THEME_MODES: string[];

/**
 * 预置常用主题主色调色盘列表
 */
export declare const THEME_COLOR_PRESETS: string[];

/**
 * 自定义 NavBar / TabBar 等组件使用的主题色板
 *
 * 说明：uts 支持直接 import JSON（HBuilderX 4.25+，项目内 i18n 已有先例），
 * 因此这里以根目录 theme.json 为单源，与 pages.json 的亮 / 暗配置保持一致。
 * navigationBarTextStyle / tabBarBorderStyle 为 black / white 枚举：
 * - navigationBarTextStyle：black / white 直接映射为 #000000 / #ffffff
 * - tabBarBorderStyle：black 表示显示分割线（浅色模式浅灰、深色模式深灰），
 *   white 映射为 #ffffff；theme.json 的 @ 变量仅用于 pages.json。
 */
export type ThemeTokens = {
  /** 页面内容背景色（backgroundColorContent） */
  bgContent: string;
  /** 导航栏背景色（navigationBarBackgroundColor） */
  navBg: string;
  /** 导航栏文字 / 返回箭头颜色（navigationBarTextStyle，black / white 映射为具体色值） */
  navText: string;
  /** tabbar 背景色（tabBarBackgroundColor） */
  tabBg: string;
  /** tabbar 顶部边框颜色（tabBarBorderStyle，black / white 按主题映射为分割线色） */
  tabBorder: string;
  /** tabbar 未选中颜色（tabBarColor） */
  tabColor: string;
  /** tabbar 选中颜色（tabBarSelectedColor） */
  tabSelected: string;
};

/**
 * 获取默认主题主色调（全端从 import.meta.env.VITE_DEFAULT_THEME 读取，未配置时兜底 #37c2bc）
 */
export declare function getDefaultTheme(): string;

/**
 * 获取当前系统 / 宿主主题
 * - App（Android / iOS / 鸿蒙）：读取系统主题 osTheme（Android 10+ / iOS 13+ 可感知深色）
 * - H5：通过 prefers-color-scheme 媒体查询判断系统深浅色
 * - 微信小程序：读取宿主主题 hostTheme（小程序宿主）
 * @returns 'dark' | 'light'，获取失败时返回 'light'
 */
export declare function getSystemTheme(): string;

/**
 * 根据当前选择的外观模式与系统亮暗状态，计算实际是否生效为暗色模式
 * @param mode 外观模式：'auto' | 'light' | 'dark'
 * @param systemTheme 当前系统深浅色（默认读取 getSystemTheme()）
 */
export declare function isDarkMode(mode: string, systemTheme: string = getSystemTheme()): boolean;

/**
 * 获取亮 / 暗模式对应的主题色板（直接读取 theme.json，单源）
 */
export declare function getThemeTokens(isDark: boolean): ThemeTokens;

/**
 * 获取全局根容器的主题 CSS 变量样式对象
 * 用于绑定在根组件 :style 上，实现全平台主题变量响应式传递
 * @param themeColor 当前主题色
 * @param isDark 当前是否为暗黑模式
 */
export declare function getRootThemeStyle(themeColor: string, isDark: boolean): UTSJSONObject;

/**
 * 应用主题主色调到运行环境（如 H5 端 CSS 变量 --theme-color）
 * @param color 十六进制主题色值（如 '#37c2bc'）
 */
export declare function applyThemeColor(color: string): void;

/**
 * 应用外观模式（更新 H5 html 根节点 data-theme，以及 App 端 setAppTheme）
 * @param mode 'auto' | 'light' | 'dark'
 * @param isDark 当前实际生效是否为暗色
 */
export declare function applyThemeMode(mode: string, isDark: boolean): void;

/**
 * 全局同步原生导航栏主题（H5 / 微信小程序）
 *
 * uni-app X 没有"运行时全局 navbar 配置"API，原生导航栏样式只能：
 * - 编译期静态配置：pages.json globalStyle / 页面 style 中的 @变量（theme.json）
 * - 运行期逐页动态修改（本函数封装）：
 *   - H5：uni.setNavigationBarColor 不生效，直接修改 uni-page-head DOM 样式
 *   - 微信小程序：无 DOM 可操作，使用官方 uni.setNavigationBarColor
 *
 * App 端（Android / iOS / 鸿蒙）由 uni.setAppTheme 系统级切换主题，
 * 原生导航栏会自动跟随，无需处理。
 *
 * 调用时机：全局根包裹组件 App.ku.uvue 的 onShow（每次页面切换都会触发）
 * 与 isDark 主题监听，调用时传入当前实际生效的亮 / 暗标识。
 *
 * 注意：navigationStyle: custom 的页面没有 uni-page-head（或为空），H5 端自动跳过，
 * 小程序端 setNavigationBarColor 仅 frontColor（状态栏文字）会生效，符合预期。
 */
export declare function applyNavbarTheme(isDark: boolean): void;

/**
 * 监听深浅色外观模式变化（跨端：App、H5、小程序）
 * 当系统或宿主主题发生改变时触发回调
 * @param callback 主题发生变化时的回调
 */
export declare function watchThemeChange(callback: () => void): void;

/**
 * 主题工具聚合类
 *
 * 集中呈现主题、深浅色模式与导航栏配色处理方法，一目了然；同时支持面向对象式 `theme.xxx()` 调用。
 *
 * @example
 * ```uts
 * // 方式 1：标准具名导入
 * import { isDarkMode, getThemeTokens } from '@/src/utils/theme/index.uts';
 *
 * // 方式 2：对象单例导入（一目了然）
 * import { theme } from '@/src/utils/theme/index.uts';
 * console.log(theme.isDarkMode('auto'));
 * ```
 */
export declare class ThemeUtils {
  getDefaultTheme(): string;

  getSystemTheme(): string;

  isDarkMode(mode: string, systemTheme: string = getSystemTheme()): boolean;

  getThemeTokens(isDark: boolean): ThemeTokens;

  getRootThemeStyle(themeColor: string, isDark: boolean): UTSJSONObject;

  applyThemeColor(color: string): void;

  applyThemeMode(mode: string, isDark: boolean): void;

  applyNavbarTheme(isDark: boolean): void;

  watchThemeChange(callback: () => void): void;
}

/** 主题工具全局单例 */
export declare const theme: ThemeUtils;

/** 别名导出 */
export declare const themeUtils: ThemeUtils;

export default theme;
