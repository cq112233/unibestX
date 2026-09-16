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
import type { Ref } from 'vue';

/** 页面滚动禁用响应式开关 */
export declare const isPageScrollDisabled: Ref<boolean>;

/** 页面下拉刷新禁用响应式开关 */
export declare const isPageRefresherDisabled: Ref<boolean>;

/**
 * 动态启用/禁用页面滚动
 * @param enabled true 为启用，false 为禁用
 */
export declare function setPageScrollEnabled(enabled: boolean): void;

/**
 * 动态启用/禁用页面下拉刷新
 * @param enabled true 为启用，false 为禁用
 */
export declare function setPageRefresherEnabled(enabled: boolean): void;

/** 页面滚动事件参数类型 */
export type PageScrollDetail = {
  scrollTop: number;
};

export declare const EVENT_PAGE_SCROLL: string;

export declare const EVENT_REACH_BOTTOM: string;

/**
 * 监听 NavBar 布局内的页面滚动事件（在页面采用了 navbar 布局时替代原生的 onPageScroll）
 */
export declare function onNavbarPageScroll(callback: (e: PageScrollDetail) => void): void;

/**
 * 监听 NavBar 布局内的触底事件（在页面采用了 navbar 布局时替代原生的 onReachBottom）
 */
export declare function onNavbarReachBottom(callback: () => void): void;

/**
 * 监听 NavBar 布局下拉刷新事件
 */
export declare function onNavbarPullDownRefresh(callback: () => void): void;

/**
 * 停止 NavBar 布局下拉刷新状态
 */
export declare function stopNavbarPullDownRefresh(): void;

export declare const EVENT_SET_NAVBAR_TITLE: string;

export declare const EVENT_RESET_NAVBAR_TITLE: string;

/**
 * 动态设置/修改 NavBar 布局及原生导航栏标题
 * @param title 新的导航栏标题文本
 */
export declare function setNavbarTitle(title: string): void;

/**
 * 重置 NavBar 布局的导航栏标题为初始配置标题
 */
export declare function resetNavbarTitle(): void;

export declare const EVENT_SET_NAVBAR_VISIBLE: string;

export declare const EVENT_SET_HIDE_NAVBAR: string;

export declare const EVENT_RESET_NAVBAR_VISIBLE: string;

/**
 * 动态控制 NavBar 布局导航栏的显示或隐藏
 * @param visible 是否显示导航栏（true 显示，false 隐藏）
 */
export declare function setNavbarVisible(visible: boolean): void;

/**
 * 动态控制是否隐藏 NavBar 布局导航栏
 * @param hide 是否隐藏导航栏（true 隐藏，false 显示）
 */
export declare function setHideNavbar(hide: boolean): void;

/**
 * 重置 NavBar 布局导航栏显隐为页面初始配置
 */
export declare function resetNavbarVisible(): void;

export declare const EVENT_SET_STATUS_BAR_VISIBLE: string;

export declare const EVENT_SET_HIDE_STATUS_BAR: string;

export declare const EVENT_RESET_STATUS_BAR_VISIBLE: string;

/**
 * 动态控制是否隐藏状态栏占位高度
 * @param hide 是否隐藏状态栏占位（true 隐藏，false 显示）
 */
export declare function setHideStatusBar(hide: boolean): void;

/**
 * 动态控制状态栏占位高度是否可见
 * @param visible 是否显示状态栏占位（true 显示，false 隐藏）
 */
export declare function setStatusBarVisible(visible: boolean): void;

/**
 * 重置状态栏显隐为页面初始配置
 */
export declare function resetStatusBarVisible(): void;

/**
 * 页面滚动、下拉刷新与导航栏事件控制聚合类
 *
 * 集中呈现页面与导航栏控制方法，一目了然；同时支持面向对象式 `refresh.xxx()` 调用。
 *
 * @example
 * ```uts
 * // 方式 1：标准具名导入
 * import { stopNavbarPullDownRefresh, setNavbarTitle } from '@/src/utils/refresh/index.uts';
 *
 * // 方式 2：对象单例导入（一目了然）
 * import { refresh } from '@/src/utils/refresh/index.uts';
 * refresh.stopNavbarPullDownRefresh();
 * ```
 */
export declare class RefreshUtils {
  setPageScrollEnabled(enabled: boolean): void;

  setPageRefresherEnabled(enabled: boolean): void;

  onNavbarPageScroll(callback: (e: PageScrollDetail) => void): void;

  onNavbarReachBottom(callback: () => void): void;

  onNavbarPullDownRefresh(callback: () => void): void;

  stopNavbarPullDownRefresh(): void;

  setNavbarTitle(title: string): void;

  resetNavbarTitle(): void;

  setNavbarVisible(visible: boolean): void;

  setHideNavbar(hide: boolean): void;

  resetNavbarVisible(): void;

  setStatusBarVisible(visible: boolean): void;

  resetStatusBarVisible(): void;
}

/** 页面与导航栏控制工具全局单例 */
export declare const refresh: RefreshUtils;

/** 别名导出 */
export declare const refreshUtils: RefreshUtils;

export default refresh;
