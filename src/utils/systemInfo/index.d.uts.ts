/**
 * `index.uts` 的类型声明（供 IDE / TS 语言服务使用）
 *
 * ⚠️ 为什么需要这个文件
 * `src/types/uni.d.ts` 里有 `declare module '*.uts'` 这样的**无 body 通配声明**，
 * 它让所有 `.uts` 导入解析成「存在但导出未知」的 any 模块 —— 于是具名导入
 * 里列不出任何补全，导入进来的值也全是 any。
 * 按照 TS 的 `allowArbitraryExtensions` 规则，`./index.uts` 可以解析到同目录的
 * `index.d.uts.ts`；**真实解析优先于通配声明**，因此补全与类型都能恢复。
 * 注意这条规则要求声明文件与 `.uts` **同目录同名**，所以本目录不能挪走。
 *
 * ⚠️ 这个文件是纯声明，不参与运行，也不会进打包产物。
 * ⚠️ 它与 `index.uts` 是**手工同步**的两份东西：改了 `.uts` 的导出面，
 *    必须回来同步这里，否则补全和类型会对不上（编译不会报错，只会静默失准）。
 */
import type { ComputedRef, Ref } from 'vue';

// ==========================================
// 常量
// ==========================================

/** NavBar 内容区默认基准高度（不含状态栏，单位 px，标准 44px） */
export declare const NAVBAR_CONTENT_HEIGHT: number;

/** TabBar 默认基准高度（单位 px，标准 50px） */
export declare const TABBAR_BASE_HEIGHT: number;

/** 系统信息变更计数器（每次 updateAvailableHeight 自增） */
// eslint-disable-next-line import/no-mutable-exports
export declare let systemId: number;

// ==========================================
// 类型
// ==========================================

export type SystemSafeAreaInsets = {
  top: number;
  right: number;
  bottom: number;
  left: number;
};

export type SystemSafeArea = {
  top: number;
  right: number;
  bottom: number;
  left: number;
  width: number;
  height: number;
};

/**
 * 小程序胶囊菜单按钮的布局位置信息
 *
 * ⚠️ 仅微信小程序（MP-WEIXIN）提供，其余平台恒为 null。
 *
 * ⚠️ 六个字段全部是「视口坐标」，原点为屏幕左上角（与 DOM getBoundingClientRect() 一致），
 *    与 CSS 的 right / bottom **语义相反** —— 它们不是「距右/下边缘的距离」：
 *    · right = 胶囊右边缘的 x 坐标（距**屏幕左边**），right 越大越靠右；
 *    · bottom = 胶囊下边缘的 y 坐标（距**屏幕顶边**），bottom 越大越靠下。
 *    所以「胶囊距屏幕右边的距离」要自己算：screenWidth - right。
 */
export type SystemMenuRect = {
  /** 胶囊宽度（px） */
  width: number;
  /** 胶囊高度（px） */
  height: number;
  /** 胶囊上边缘的 y 坐标（距屏幕顶边的 px） */
  top: number;
  /** 胶囊右边缘的 x 坐标（距屏幕左边的 px），⚠️ 不是距屏幕右边的距离 */
  right: number;
  /** 胶囊下边缘的 y 坐标（距屏幕顶边的 px），⚠️ 不是距屏幕底边的距离 */
  bottom: number;
  /** 胶囊左边缘的 x 坐标（距屏幕左边的 px） */
  left: number;
};

export type SystemInfoType = {
  // ---- 窗口与屏幕尺寸（单位均为 px）----
  /** 屏幕宽度（物理屏宽） */
  screenWidth: number;
  /** 屏幕高度（物理屏高） */
  screenHeight: number;
  /** 窗口可视宽度 */
  windowWidth: number;
  /** 窗口可视高度（含状态栏占位） */
  windowHeight: number;
  /** 状态栏高度 */
  statusBarHeight: number;
  /** 可用内容高度 = windowHeight - statusBarHeight，⚠️ 不叠加 TabBar */
  availableHeight: number;
  /** 导航栏内容区默认基准高度，恒为 NAVBAR_CONTENT_HEIGHT（44），⚠️ 不是当前页实际导航栏高度 */
  navBarHeight: number;
  /** TabBar 默认基准高度，恒为 TABBAR_BASE_HEIGHT（50），⚠️ 不含底部安全区 */
  tabBarHeight: number;
  /** 设备像素比（dpr） */
  pixelRatio: number;
  // ---- 设备信息（getDeviceInfo 优先，缺失字段回退 getSystemInfoSync，都取不到则为 ''）----
  /** 设备品牌（如 'Apple'） */
  brand: string;
  /** 设备型号（如 'iPhone 15 Pro'） */
  model: string;
  /** 操作系统及版本（如 'iOS 17.4'），⚠️ 只来自 getSystemInfoSync */
  system: string;
  // ---- 编译引擎与平台信息 ----
  /** 编译器 / SDK 版本（各平台来源不同互相兜底，最终兜底 '1.0.0'） */
  compilerVersion: string;
  /** uni 编译器版本，⚠️ 当前与 compilerVersion 同源，不是独立值 */
  uniCompileVersion: string;
  /** 是否为 Vapor 渲染模式（VDOM 模式为 false） */
  isVapor: boolean;
  /** 编译运行模式（Vapor / VDOM + 环境） */
  compileMode: string;
  /** 编译目标平台 */
  platformName: string;
  // ---- 应用与环境变量 ----
  /** 应用名称 */
  appTitle: string;
  /** 应用版本号 */
  appVersion: string;
  /** 接口 BaseURL 地址（来自环境变量） */
  apiBaseUrl: string;
  /** 运行环境标识：development / test / production */
  env: string;
  /** 运行环境中文名称 */
  envName: string;
  // ---- 安全区与胶囊（在整体赋值之后被单独二次写入）----
  /** 安全区域插入距离（距离语义，可直接当 padding 用；与 safeAreaInsets ref 是同一对象），取不到时 null */
  safeAreaInsets: SystemSafeAreaInsets | null;
  /** 安全区绝对坐标矩形（含 width / height），取不到时 null */
  safeArea: SystemSafeArea | null;
  /** 小程序胶囊按钮布局信息（与 menuRect ref 是同一对象），仅微信小程序有值，其余平台恒为 null */
  menuRect: SystemMenuRect | null;
};

/**
 * App.ku.uvue 页面 props 中参与可用高度计算的字段
 *
 * ⚠️ `pageStyle` 在 `.uts` 中的真实类型是 `UTSJSONObject | null`。
 *    `UTSJSONObject` 是 uni-app x 专有类型，纯 TS 环境里不存在，
 *    这里用 `Record<string, any>` 等价替代（仅影响 IDE 提示，不影响编译）。
 */
export type AppKuHeightProps = {
  /** 是否隐藏导航栏 */
  hideNavbar: boolean;
  /** 是否隐藏状态栏 */
  hideStatusBar: boolean;
  /** 页面 style 完整配置对象（含 navigationStyle，可能为空） */
  pageStyle: Record<string, any> | null;
  /** 页面布局模板标识：不是 'navbar' 时状态栏与导航栏都不扣除 */
  layout: string;
};

// ==========================================
// 响应式状态
// ==========================================

/** 系统信息全局响应式 ref（全 App 单例，初始 null，由 updateSystemInfo 写入） */
export declare const systemInfo: Ref<SystemInfoType | null>;

/** 安全区信息全局响应式 ref（与 systemInfo.value.safeAreaInsets 为同一对象） */
export declare const safeAreaInsets: Ref<SystemSafeAreaInsets | null>;

/** 便捷响应式：小程序胶囊按钮矩形，⚠️ 仅微信小程序有值，其余平台恒为 null（不会退化成 0） */
export declare const menuRect: ComputedRef<SystemMenuRect | null>;

/** 便捷响应式：窗口可视宽度（px），未初始化时为 0 */
export declare const windowWidth: ComputedRef<number>;

/** 便捷响应式：窗口可视高度（px），未初始化时为 0 */
export declare const windowHeight: ComputedRef<number>;

/** 便捷响应式：屏幕宽度（px），未初始化时为 0 */
export declare const screenWidth: ComputedRef<number>;

/** 便捷响应式：屏幕高度（px），未初始化时为 0 */
export declare const screenHeight: ComputedRef<number>;

/** 便捷响应式：状态栏高度（px），未初始化时为 0 */
export declare const statusBarHeight: ComputedRef<number>;

/** 便捷响应式：导航栏内容区高度（px），未初始化时为 44（NAVBAR_CONTENT_HEIGHT）而非 0 */
export declare const navBarHeight: ComputedRef<number>;

/** 便捷响应式：TabBar 高度（px，不含底部安全区），未初始化时为 50（TABBAR_BASE_HEIGHT）而非 0 */
export declare const tabBarHeight: ComputedRef<number>;

/** 便捷响应式：可用内容高度（px，已按当前 tabbar 策略修正过），未初始化时为 0 */
export declare const availableHeight: ComputedRef<number>;

/** 便捷响应式：底部安全区高度（px），未初始化时为 0 */
export declare const safeAreaBottom: ComputedRef<number>;

// ==========================================
// 函数
// ==========================================

/** 刷新并更新系统全局信息响应式状态 */
export declare function updateSystemInfo(): void;

/** 判断当前编译器版本是否大于等于指定版本（如 '5.25' 或 '4.25'） */
export declare function isCompilerVersionGte(targetVersion: string): boolean;

/**
 * 计算页面视口内滚动容器的自适应剩余可用高度（单位 px）
 * @param topOffset 顶部占用高度（默认 0）
 * @param bottomOffset 底部占用高度（默认 0）
 * @param minusStatusBar 是否自动扣除系统状态栏高度（默认 true）
 */
export declare function getScrollHeight(
  topOffset?: number,
  bottomOffset?: number,
  minusStatusBar?: boolean
): number;

/** 更新页面可用高度 */
export declare function updateAvailableHeight(
  kuProps: AppKuHeightProps,
  selectedTabbarStrategy: number
): void;

// ==========================================
// 聚合类与单例
// ==========================================

/** 系统与屏幕信息工具聚合类 */
export declare class SystemUtils {
  /** 导航栏默认基准高度（44px） */
  readonly NAVBAR_CONTENT_HEIGHT: number;

  /** TabBar 默认基准高度（50px） */
  readonly TABBAR_BASE_HEIGHT: number;

  /** 系统信息全局响应式 ref（与顶层具名导出的 systemInfo 是同一个 ref 实例） */
  readonly systemInfo: Ref<SystemInfoType | null>;

  /** 安全区信息全局响应式 ref（与 systemInfo.value.safeAreaInsets 为同一对象） */
  readonly safeAreaInsets: Ref<SystemSafeAreaInsets | null>;

  /** 小程序胶囊按钮矩形响应式 computed，⚠️ 仅微信小程序有值，其余平台恒为 null */
  readonly menuRect: ComputedRef<SystemMenuRect | null>;

  /** 窗口可视宽度响应式 computed（px），未初始化时为 0 */
  readonly windowWidth: ComputedRef<number>;

  /** 窗口可视高度响应式 computed（px），未初始化时为 0 */
  readonly windowHeight: ComputedRef<number>;

  /** 屏幕宽度响应式 computed（px），未初始化时为 0 */
  readonly screenWidth: ComputedRef<number>;

  /** 屏幕高度响应式 computed（px），未初始化时为 0 */
  readonly screenHeight: ComputedRef<number>;

  /** 状态栏高度响应式 computed（px），未初始化时为 0 */
  readonly statusBarHeight: ComputedRef<number>;

  /** 导航栏内容区高度响应式 computed（px），未初始化时为 44 而非 0 */
  readonly navBarHeight: ComputedRef<number>;

  /** TabBar 高度响应式 computed（px，不含底部安全区），未初始化时为 50 而非 0 */
  readonly tabBarHeight: ComputedRef<number>;

  /** 页面可用内容高度响应式 computed（px，已按 tabbar 策略修正），未初始化时为 0 */
  readonly availableHeight: ComputedRef<number>;

  /** 底部安全区高度响应式 computed（px），未初始化时为 0 */
  readonly safeAreaBottom: ComputedRef<number>;

  /** 刷新并更新系统全局信息响应式状态 */
  updateSystemInfo(): void;

  /** 获取当前系统信息快照对象 */
  getInfo(): SystemInfoType | null;

  /** 判断当前编译器版本是否大于等于指定版本 */
  isCompilerVersionGte(targetVersion: string): boolean;

  /** 实时获取状态栏高度（px） */
  getStatusBarHeight(): number;

  /** 实时获取窗口可视高度（px） */
  getWindowHeight(): number;

  /** 实时获取屏幕宽度（px） */
  getScreenWidth(): number;

  /** 实时获取屏幕高度（px） */
  getScreenHeight(): number;

  /** 实时获取导航栏内容区高度（px） */
  getNavBarHeight(): number;

  /** 实时获取 TabBar 高度（px，可选叠加底部安全区） */
  getTabBarHeight(includeSafeArea?: boolean): number;

  /** 实时获取当前页面可用内容高度（px） */
  getAvailableHeight(): number;

  /** 实时获取底部安全区高度（px） */
  getSafeAreaBottom(): number;

  /** 实时获取小程序胶囊按钮布局信息（非微信小程序平台恒为 null） */
  getMenuRect(): SystemMenuRect | null;

  /** 计算页面视口内滚动容器的自适应剩余可用高度（px） */
  getScrollHeight(
    topOffset?: number,
    bottomOffset?: number,
    minusStatusBar?: boolean
  ): number;

  /** 更新页面可用高度 */
  updateAvailableHeight(kuProps: AppKuHeightProps, selectedTabbarStrategy: number): void;
}

/** 系统与屏幕信息工具全局单例 */
export declare const systemUtils: SystemUtils;

/** 别名导出 */
export declare const sys: SystemUtils;

export default systemUtils;
