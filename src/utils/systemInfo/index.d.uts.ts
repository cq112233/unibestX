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
  // 窗口与屏幕尺寸
  screenWidth: number;
  screenHeight: number;
  windowWidth: number;
  windowHeight: number;
  statusBarHeight: number;
  availableHeight: number;
  navBarHeight: number;
  tabBarHeight: number;
  pixelRatio: number;
  // 设备信息
  brand: string;
  model: string;
  system: string;
  // 编译引擎与平台信息
  compilerVersion: string;
  uniCompileVersion: string;
  isVapor: boolean;
  compileMode: string;
  platformName: string;
  // 应用与环境变量
  appTitle: string;
  appVersion: string;
  apiBaseUrl: string;
  env: string;
  envName: string;
  // 安全区与胶囊
  safeAreaInsets: SystemSafeAreaInsets | null;
  safeArea: SystemSafeArea | null;
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

/** 系统信息全局响应式 ref */
export declare const systemInfo: Ref<SystemInfoType | null>;

/** 安全区信息全局响应式 ref */
export declare const safeAreaInsets: Ref<SystemSafeAreaInsets | null>;

/** 便捷响应式：小程序胶囊按钮矩形（仅微信小程序有值，其余平台恒为 null） */
export declare const menuRect: ComputedRef<SystemMenuRect | null>;

/** 便捷响应式：窗口宽度（px） */
export declare const windowWidth: ComputedRef<number>;

/** 便捷响应式：窗口高度（px） */
export declare const windowHeight: ComputedRef<number>;

/** 便捷响应式：屏幕宽度（px） */
export declare const screenWidth: ComputedRef<number>;

/** 便捷响应式：屏幕高度（px） */
export declare const screenHeight: ComputedRef<number>;

/** 便捷响应式：状态栏高度（px） */
export declare const statusBarHeight: ComputedRef<number>;

/** 便捷响应式：导航栏内容区高度（px），未初始化时为 NAVBAR_CONTENT_HEIGHT（44） */
export declare const navBarHeight: ComputedRef<number>;

/** 便捷响应式：TabBar 高度（px），未初始化时为 TABBAR_BASE_HEIGHT（50） */
export declare const tabBarHeight: ComputedRef<number>;

/** 便捷响应式：可用内容高度（px） */
export declare const availableHeight: ComputedRef<number>;

/** 便捷响应式：底部安全区高度（px） */
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

  /** 系统信息全局响应式 ref */
  readonly systemInfo: Ref<SystemInfoType | null>;

  /** 安全区信息全局响应式 ref */
  readonly safeAreaInsets: Ref<SystemSafeAreaInsets | null>;

  /** 小程序胶囊按钮矩形响应式 computed（仅微信小程序有值） */
  readonly menuRect: ComputedRef<SystemMenuRect | null>;

  /** 窗口宽度响应式 computed */
  readonly windowWidth: ComputedRef<number>;

  /** 窗口高度响应式 computed */
  readonly windowHeight: ComputedRef<number>;

  /** 屏幕宽度响应式 computed */
  readonly screenWidth: ComputedRef<number>;

  /** 屏幕高度响应式 computed */
  readonly screenHeight: ComputedRef<number>;

  /** 状态栏高度响应式 computed */
  readonly statusBarHeight: ComputedRef<number>;

  /** 导航栏内容区高度响应式 computed */
  readonly navBarHeight: ComputedRef<number>;

  /** TabBar 高度响应式 computed */
  readonly tabBarHeight: ComputedRef<number>;

  /** 页面可用内容高度响应式 computed */
  readonly availableHeight: ComputedRef<number>;

  /** 底部安全区高度响应式 computed */
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
