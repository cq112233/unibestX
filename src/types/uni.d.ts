// ==========================================
// uni-app X 类型补充声明与全局宏声明
// ==========================================

declare global {
  type UniEnv = {
    USER_DATA_PATH?: string;
    CACHE_PATH?: string;
    [key: string]: any;
  };

  export interface Uni {
    env?: UniEnv;
  }

  export interface PageStyle {
    /** 导航栏标题文字内容 */
    'navigationBarTitleText'?: string;
    /** 导航栏背景颜色（同颜色十六进制） */
    'navigationBarBackgroundColor'?: string;
    /** 导航栏标题颜色及状态栏前景颜色，仅支持 black/white */
    'navigationBarTextStyle'?: 'black' | 'white';
    /** 导航栏样式，仅支持 default/custom */
    'navigationStyle'?: 'default' | 'custom';
    /** 窗口的背景颜色 */
    'backgroundColor'?: string;
    /** 下拉背景字体、loading 图标的样式，仅支持 dark/light */
    'backgroundTextStyle'?: 'dark' | 'light';
    /** 顶部窗口的背景色（仅 iOS） */
    'backgroundColorTop'?: string;
    /** 底部窗口的背景色（仅 iOS） */
    'backgroundColorBottom'?: string;
    /** 页面内容背景颜色 */
    'backgroundColorContent'?: string;
    /** 是否开启下拉刷新 */
    'enablePullDownRefresh'?: boolean;
    /** 页面上拉触底事件触发时距页面底部距离，单位为 px */
    'onReachBottomDistance'?: number;
    /** 设置为 true 则禁用页面滚动 */
    'disableScroll'?: boolean;
    /** 是否禁用侧滑返回手势（仅 iOS） */
    'disableSwipeBack'?: boolean;
    /** 导航栏图片地址（仅部分平台支持） */
    'titleImage'?: string;
    /** 导航栏透明设置。支持 always、auto、none */
    'transparentTitle'?: 'always' | 'auto' | 'none';
    /** 导航栏点击穿透 */
    'titlePenetrate'?: 'YES' | 'NO';
    /** 窗口显示的动画效果 */
    'animationType'?:
      | 'auto'
      | 'none'
      | 'slide-in-right'
      | 'slide-in-left'
      | 'slide-in-top'
      | 'slide-in-bottom'
      | 'fade-in'
      | 'zoom-out'
      | 'zoom-fade-out'
      | 'pop-in'
      | (string & {});
    /** 窗口显示动画的持续时间 */
    'animationDuration'?: number;
    /** App 原生端特有样式配置 */
    'app-plus'?: Record<string, any>;
    /** H5 平台特有样式配置 */
    'h5'?: Record<string, any>;
    /** 微信小程序特有样式配置 */
    'mp-weixin'?: Record<string, any>;
    /** 支付宝小程序特有样式配置 */
    'mp-alipay'?: Record<string, any>;
    /** 页面自定义组件配置 */
    'usingComponents'?: Record<string, string>;
    /** 允许的任意其他 style 配置 */
    [key: string]: any;
  }

  export interface DefinePageOptions {
    /**
     * 沙盒独立调试模式标记：
     * - true: 本地开发时仅编译此页面（及其关联的 debug 页面），跳过无关页面与 TabBar，极大提升编译速度
     * - ⚠️ 提示: 调试完成后记得关闭（设为 false 或删除），以还原全量页面
     */
    debug?: boolean;
    /**
     * 沙盒调试模式启动首页标记：
     * - true: 本地沙盒调试时，将当前页面显式指定为应用默认启动首页（排在 pages.json 第 1 位）
     * - ⚠️ 提示: 全局仅允许 1 个页面设置为 true；调试完成后记得关闭（设为 false 或删除）
     */
    debugHome?: boolean;
    /**
     * 页面类型标记：
     * - 'home': 标记当前页面为应用首页（自动排在 pages.json 第 1 位）
     */
    type?: 'home' | string;
    /**
     * 页面使用的布局模版：
     * - 'navbar': 使用 src/layouts/navbar.uvue（支持顶部导航栏、自定义下拉刷新）
     * - 'default': 使用 src/layouts/default.uvue
     * - 'empty': 使用 src/layouts/empty.uvue
     * - false: 禁用 layout 布局包裹
     * - string: 自定义 layout 名称（对应 src/layouts/[name].uvue）
     */
    layout?: 'navbar' | 'default' | 'empty' | (string & {}) | boolean;
    /**
     * 导航栏左侧是否显示返回箭头（配合 navbar 布局使用，默认 true）
     */
    showBack?: boolean;
    /**
     * 是否隐藏顶部导航栏（配合 navbar 布局使用，默认 false）
     */
    hideNavbar?: boolean;
    /**
     * 是否显示顶部导航栏（配合 navbar 布局使用，默认 true）
     */
    showNavbar?: boolean;
    /**
     * 是否开启自定义下拉刷新（配合 navbar 布局使用，由 scroll-view 驱动）
     */
    enablePullDownRefresh?: boolean;
    /**
     * 页面布局根容器自定义 class 类名（配合 layout 布局使用，推荐使用全局原子类如 'bg-white'、'p-[16px]'）
     */
    customPageClass?: string;
    /**
     * 页面布局根容器自定义内联样式（全端绝对兼容，穿透任何样式隔离，如 'background-color: transparent;'）
     */
    customPageStyle?: string;
    /**
     * 兼容别名：自定义 class
     */
    class?: string;
    customClass?: string;
    layoutClass?: string;
    /**
     * 兼容别名：自定义 style
     */
    customStyle?: string;
    layoutStyle?: string;
    /**
     * 页面窗口表现样式配置（对应 pages.json 中的 style）
     */
    style?: PageStyle;
    /**
     * 是否需要登录拦截校验
     */
    needLogin?: boolean;
    /**
     * 页面标题（简写）
     */
    title?: string;
    /**
     * 允许的任意自定义页面元数据
     */
    [key: string]: any;
  }

  /**
   * uni-pages 宏函数：在单文件组件内部声明页面配置与路由信息
   */
  function definePage(options: DefinePageOptions): void;

  // ==========================================
  // Vue 宏函数全局声明（保证在 uvue / uts / ts 环境中获得完整 IDE 智能补全与参数提示）
  // ==========================================

  /**
   * Vue 3 / UTS <script setup> 宏函数：定义组件可触发的自定义事件
   *
   * 示例：
   * ```uts
   * const emit = defineEmits(['change', 'update'])
   * const emit = defineEmits<{
   *   (e: 'change', id: number): void
   *   (e: 'update', value: string): void
   * }>()
   * ```
   */
  function defineEmits<EE extends string = string>(
    emit: EE[]
  ): (event: EE, ...args: any[]) => void;
  function defineEmits<T extends (...args: any[]) => any>(): T;
  function defineEmits<T extends Record<string, any>>(
    emit: T
  ): (event: keyof T, ...args: any[]) => void;

  /**
   * Vue 3 / UTS <script setup> 宏函数：定义组件的 Props 属性
   *
   * 示例：
   * ```uts
   * const props = defineProps({
   *   title: { type: String, default: '' }
   * })
   * const props = defineProps<{ title?: string }>()
   * ```
   */
  function defineProps<T extends Record<string, any>>(): T;
  function defineProps<T extends Record<string, any>>(props: T): any;

  /**
   * Vue 3 / UTS <script setup> 宏函数：显式暴露组件内部属性/方法给父组件（通过 ref 访问）
   */
  function defineExpose(exposed?: Record<string, any>): void;

  /**
   * Vue 3 / UTS <script setup> 宏函数：声明组件选项（如 name, inheritAttrs 等）
   */
  function defineOptions(options?: Record<string, any>): void;

  /**
   * Vue 3 / UTS <script setup> 宏函数：为基于类型的 defineProps 声明提供默认值
   */
  function withDefaults<T extends Record<string, any>>(
    props: T,
    defaults: Partial<T>
  ): T;

  /**
   * Vue 3 / UTS <script setup> 宏函数：定义组件插槽类型
   */
  function defineSlots<T extends Record<string, any>>(): T;

  /**
   * Vue 3 / UTS <script setup> 宏函数：声明双向绑定 prop
   */
  function defineModel<T = any>(name?: string, options?: Record<string, any>): import('vue').Ref<T>;

  // ==========================================
  // Vue 核心响应式与生命周期 API 全局声明（全工程免 import 自动推导）
  // ==========================================
  const ref: typeof import('vue')['ref'];
  const reactive: typeof import('vue')['reactive'];
  const computed: typeof import('vue')['computed'];
  const watch: typeof import('vue')['watch'];
  const watchEffect: typeof import('vue')['watchEffect'];
  const shallowRef: typeof import('vue')['shallowRef'];
  const shallowReactive: typeof import('vue')['shallowReactive'];
  const toRef: typeof import('vue')['toRef'];
  const toRefs: typeof import('vue')['toRefs'];
  const toValue: typeof import('vue')['toValue'];
  const unref: typeof import('vue')['unref'];
  const nextTick: typeof import('vue')['nextTick'];
  const onMounted: typeof import('vue')['onMounted'];
  const onUpdated: typeof import('vue')['onUpdated'];
  const onUnmounted: typeof import('vue')['onUnmounted'];
  const provide: typeof import('vue')['provide'];
  const inject: typeof import('vue')['inject'];

  // ==========================================
  // uni-app X / UTS 核心对象与生命周期全局声明
  // ==========================================
  type UTSJSONObject = Record<string, any> & {
    getString?: (key: string) => string | null;
    getNumber?: (key: string) => number | null;
    getBoolean?: (key: string) => boolean | null;
    getJSON?: (key: string) => UTSJSONObject | null;
    getArray?: (key: string) => any[] | null;
    get?: (key: string) => any;
    set?: (key: string, value: any) => void;
  };
  const UTSJSONObject: {
    new (obj?: any): UTSJSONObject;
    (obj?: any): UTSJSONObject;
    keys: (obj: any) => string[];
    values: (obj: any) => any[];
    assign: (target: any, ...sources: any[]) => any;
  };

  type OnBackPressOptions = {
    from: 'backbutton' | 'navigateBack';
  };

  type UniScrollEvent = {
    detail: {
      scrollLeft: number;
      scrollTop: number;
      scrollHeight: number;
      scrollWidth: number;
      deltaX: number;
      deltaY: number;
    };
  };

  /** 触摸事件（touchstart / touchmove / touchend 等） */
  type UniTouchEvent = {
    detail: {
      x: number;
      y: number;
      clientX: number;
      clientY: number;
      pageX: number;
      pageY: number;
      screenX: number;
      screenY: number;
    };
    touches: Array<UniTouchEventTouch>;
    changedTouches: Array<UniTouchEventTouch>;
  };

  type UniTouchEventTouch = {
    identifier: number;
    clientX: number;
    clientY: number;
    pageX: number;
    pageY: number;
    screenX: number;
    screenY: number;
    force: number;
  };

  /** 输入框键盘高度变化事件（组件 @keyboardheightchange 回调参数） */
  type UniInputKeyboardHeightChangeEvent = {
    detail: {
      height: number;
      duration: number;
    };
  };

  /** web-view 组件 @message 回调参数类型 */
  type UniWebViewMessageEvent = {
    detail: {
      data: Array<UTSJSONObject>;
    };
  };

  /** uni.onKeyboardHeightChange 的回调参数 */
  type OnKeyboardHeightChangeCallbackResult = {
    height: number;
    duration?: number;
  };

  /** uni.setTabBarItem 的参数 */
  type SetTabBarItemOptions = {
    index: number;
    text?: string;
    iconPath?: string;
    selectedIconPath?: string;
    visible?: boolean;
    badge?: string;
    success?: (result: any) => void;
    fail?: (error: any) => void;
    complete?: (result: any) => void;
  };

  /** uni.setNavigationBarTitle 的参数 */
  type SetNavigationBarTitleOptions = {
    title: string;
    success?: (result: any) => void;
    fail?: (error: any) => void;
    complete?: (result: any) => void;
  };

  /** uni.showModal 的参数 */
  type ShowModalOptions = {
    title?: string;
    content?: string;
    showCancel?: boolean;
    cancelText?: string;
    cancelColor?: string;
    confirmText?: string;
    confirmColor?: string;
    editable?: boolean;
    placeholderText?: string;
    success?: (result: any) => void;
    fail?: (error: any) => void;
    complete?: (result: any) => void;
  };

  function onLaunch(callback: (options?: any) => void): void;
  function onShow(callback: (options?: any) => void): void;
  function onHide(callback: () => void): void;
  function onLoad(callback: (options?: any) => void): void;
  function onReady(callback: () => void): void;
  function onUnload(callback: () => void): void;
  function onBackPress(callback: (options: OnBackPressOptions) => boolean | Promise<boolean> | void): void;
  function onPullDownRefresh(callback: () => void): void;
  function onReachBottom(callback: () => void): void;
  function onPageScroll(callback: (options: { scrollTop: number }) => void): void;
  function onResize(callback: (options: { size: { windowWidth: number; windowHeight: number } }) => void): void;
  function onTabItemTap(callback: (options: { index: number; pagePath: string; text: string }) => void): void;
  /** 全局错误监听（App.uvue 专用）：全平台支持，参数为错误信息（含堆栈） */
  function onError(callback: (error: any) => void): void;
  /** 未处理 Promise 拒绝监听（App.uvue 专用）：仅 Web 与小程序支持，App 原生端不支持须 #ifdef WEB || MP 隔离 */
  function onUnhandledRejection(callback: (result: { promise: Promise<any>; reason: any }) => void): void;
  function getCurrentPages(): any[];
  function getApp(): any;

  type AppThemeChangeResult = {
    appTheme: 'light' | 'dark' | string;
  };

  type OsThemeChangeResult = {
    osTheme: 'light' | 'dark' | string;
  };

  type OnHostThemeChangeCallbackResult = {
    hostTheme: 'light' | 'dark' | string;
  };

  type SetAppThemeOptions = {
    theme: 'light' | 'dark' | 'auto' | string;
    success?: (res: any) => void;
    fail?: (err: any) => void;
    complete?: (res: any) => void;
  };

  interface Uni {
    /**
     * 设置应用深浅色主题模式（仅 App 端）
     */
    setAppTheme: (options: SetAppThemeOptions) => void;

    /**
     * 监听应用主题改变事件（仅 App 端）
     */
    onAppThemeChange: (callback: (result: AppThemeChangeResult) => void) => void;

    /**
     * 取消监听应用主题改变事件
     */
    offAppThemeChange?: (callback?: (result: AppThemeChangeResult) => void) => void;

    /**
     * 监听系统操作系统深浅色改变事件（仅 App 端跟随系统 auto 模式使用）
     */
    onOsThemeChange: (callback: (result: OsThemeChangeResult) => void) => void;

    /**
     * 取消监听系统操作系统深浅色改变事件
     */
    offOsThemeChange?: (callback?: (result: OsThemeChangeResult) => void) => void;

    /**
     * 监听小程序宿主主题改变事件
     */
    onHostThemeChange: (callback: (result: OnHostThemeChangeCallbackResult) => void) => void;

    /**
     * 取消监听小程序宿主主题改变事件
     */
    offHostThemeChange?: (callback?: (result: OnHostThemeChangeCallbackResult) => void) => void;

    /**
     * 使手机发生较短时间的振动（15ms）
     *
     * 文档: http://uniapp.dcloud.io/api/system/vibrate?id=vibrateshort
     */
    vibrateShort: (options: {
      /** 接口调用成功的回调函数 */
      success?: (result: any) => void;
      /** 接口调用失败的回调函数 */
      fail?: (result: any) => void;
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result: any) => void;
    }) => void;

    /**
     * 设置系统剪贴板内容
     */
    setClipboardData: (options: {
      data: string;
      success?: (result: any) => void;
      fail?: (result: any) => void;
      complete?: (result: any) => void;
    }) => void;

    /**
     * 显示消息提示框
     */
    showToast: (options: {
      title: string;
      icon?: string;
      image?: string;
      duration?: number;
      position?: string;
      success?: (result: any) => void;
      fail?: (result: any) => void;
      complete?: (result: any) => void;
    }) => void;
  }

  /**
   * z-paging-x 组件实例类型（`<z-paging-x ref="pagingX">` 中 ref 的类型）。
   *
   * uni-app X 在 HBuilderX 侧会为 uvue 组件生成 `<组件名>ComponentPublicInstance` 实例类型
   * （插件市场里组件的「插件类型」就是这个命名），VSCode / tsconfig 拿不到这份编译产物，
   * 直接写会报 TS2304「找不到名称」。这里补一份等价声明，让编辑器能识别。
   * 方法签名真源：uni_modules/z-paging-x/components/z-paging-x/types/index.uts 的 ZPagingXInstance。
   */
  type ZPagingXComponentPublicInstance = import('vue').ComponentPublicInstance & {
    reload: () => void;
    refresh: () => void;
    complete: (data: any[] | null) => void;
    completeByTotal: (data: any[] | null, total: number) => void;
    completeByNoMore: (data: any[] | null, nomore: boolean) => void;
    completeByError: () => void;
    endRefresh: () => void;
    clear: () => void;
    scrollToTop: (animate: boolean) => void;
    scrollToBottom: (animate: boolean) => void;
    scrollToY: (y: number, animate: boolean) => void;
  };
}

declare module '*.uvue' {
  const component: import('vue').DefineComponent<{}, {}, any>;
  export default component;
}

declare module '@/src/router' {
  export * from '@/src/router/index.uts';
}

declare module './src/router' {
  export * from '@/src/router/index.uts';
}

declare module '@/src/router/interceptor' {
  export * from '@/src/router/interceptor/interceptor.uts';
}

declare module './src/router/interceptor' {
  export * from '@/src/router/interceptor/interceptor.uts';
}

declare module '@/src/tabbar' {
  export * from '@/src/tabbar/index.uts';
}

declare module './src/tabbar' {
  export * from '@/src/tabbar/index.uts';
}

declare module 'vue' {
  export interface ComponentCustomProperties {
    $callMethod: (name: string, ...args: any[]) => any;
  }
}

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $callMethod: (name: string, ...args: any[]) => any;
  }
  export interface GlobalComponents {
    A1: typeof import('../components/A1/A1.uvue')['default'];
    NavBar: typeof import('../components/NavBar/NavBar.uvue')['default'];
    TabbarMaskModal: typeof import('../components/TabbarMaskModal/TabbarMaskModal.uvue')['default'];
  }
}

export {};
