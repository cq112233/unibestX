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

    // ==========================================
    // 补齐 uni-app X 专有的 uni.exit()
    //
    // ⚠️ 位置有讲究：必须加在**这里**（`declare global` 顶层的 `interface Uni`），
    //    写进下方 `namespace UniNamespace { interface Uni {} }` 对全局 `uni` 是**无效**的。
    //    原因在 @dcloudio/types 的 uni-app/uni/legacy/uni.d.ts：
    //      · 1~9652 行是 `declare namespace UniNamespace {}`，里面**根本没有** `Uni`；
    //      · 9659 行 `declare const uni: UniNamespace.Uni;` 引用的 `UniNamespace.Uni` 并不存在
    //        （skipLibCheck 把它压住了）；
    //      · 9661~11915 行的**顶层全局 `interface Uni`** 才是真正的 API 面（getAppBaseInfo
    //        等都在其中，文件末尾还有 `type UniInterface = Uni;` 佐证）。
    //    实测对比（探针）：`uni.__probeGlobal` 通过、`uni.__probeInNs` 报 TS2339。
    //    口诀：补 `uni.xxx` → 全局 `interface Uni`；补 `UniNamespace.Xxx` 类型 → namespace 块。
    //
    // 真源：HBuilderX @dcloudio/uni-app-x/types/uni/uts-plugin-api/lib/uni-exit/utssdk/interface.d.ts
    //       exit(options?: ExitOptions | null): void
    //       平台矩阵（真源 @uniPlatform）：Android 3.8.15+ / iOS uniX 4.33+；鸿蒙与 Web 未标注。
    //
    // ⚠️ 选项类型**就地内联**，不新增全局类型名：ExitOptions / ExitSuccess 等在 HBuilderX 侧
    //    已是全局类型，另起同名声明会在 HBuilderX 的 TS 检查里撞名。
    // ==========================================
    /** 退出当前应用（App 端专有，平台矩阵见上方真源说明） */
    exit: (options?: {
      /** 退出成功回调，只带统一 errMsg */
      success?: ((res: { errMsg: string }) => void) | null;
      /** 退出失败回调；errCode 取值为 12001 / 12002 / 12003 */
      fail?: ((res: { errCode: number; errMsg?: string }) => void) | null;
      /** 完成回调，成功与失败都会走 */
      complete?: ((res: any) => void) | null;
    } | null) => void;
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
  // UTSJSONObject：UTS 内置的 JSON 对象类型（uni.request 返回体、_serialize/_hydrate 等）。
  //
  // ⚠️ 只能声明为纯索引签名（等价 Record<string, any>），不得附加具名方法，否则必踩以下坑：
  //   - 交叉 + 方法可选（`Record<string, any> & { getString?: ... }`）：
  //     `obj['k']` / `obj.k` 可用，但 `data.getNumber('id')` 报 TS2722
  //     「不能调用可能是未定义的对象」（src/api/example.uts 曾如此）。
  //   - 交叉 + 方法必选（`Record<string, any> & { getString: ... }`）：
  //     调用可用，但 `{ ... } as UTSJSONObject` 报 TS2352、赋值报 TS2739 / TS2322
  //     （字面量缺 getString 等必选成员）—— 项目内此类断言逾百处。
  //     （已实测：TS 的索引签名无法满足具名必选属性，故「必选方法 + 索引签名」也不可行。）
  //   - 方法集 | Record<string, any>（联合）：调用与断言可用，但 `obj['k']` / `obj.k`
  //     报 TS7053 / TS2339（联合的每个成员都须具备该索引签名 / 属性）。
  // 故取纯索引签名：`obj['k']`、`obj.k`、`data.getNumber('id')`、`as UTSJSONObject`、
  // `= {}` 五种写法全部通过。代价是具名方法调用结果为 any（项目已接受该取舍）。
  //
  // ⚠️ 附带代价：**不能给这些方法传泛型实参**。`obj.getArray` 经索引签名解析为 any，
  //    写 `data.getArray<string>('roles', [])` 会报 TS2347「非类型化函数调用不能接受类型参数」。
  //    需要元素类型时，改用带类型标注的默认值反推，例如：
  //      const defaultRoles: Array<string> = [];
  //      const roles = data.getArray('roles', defaultRoles) ?? defaultRoles;
  //    （UTS 真源侧 `getArray<T>(key, defaultValue)` 本身支持泛型，仅 TS 侧声明受限。）
  type UTSJSONObject = Record<string, any>;
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

  // ==========================================
  // 文件系统管理 (uni.getFileSystemManager)
  // 框架类型仅存在于 HBuilderX 内置 dts，项目 types 未引入，
  // 故在此按官方签名补齐，供 IDE (Volar) 解析，避免 "Xxx is not defined"。
  // ==========================================

  /** fsm.readdir 成功回调参数 */
  type ReadDirSuccessResult = {
    /** 目录下的文件名列表 */
    files: string[];
    errMsg?: string;
  };

  /** fsm.readdir 的参数 */
  type ReadDirOptions = {
    /** 要读取的目录路径 (本地路径) */
    dirPath: string;
    success?: ((res: ReadDirSuccessResult) => void) | null;
    fail?: ((err: any) => void) | null;
    complete?: ((res: any) => void) | null;
  };

  /** fsm.getFileInfo 成功回调参数 */
  type GetFileInfoSuccessResult = {
    /** 按照传入的 digestAlgorithm 计算得出的文件摘要 */
    digest: string;
    /** 文件大小，以字节为单位 */
    size: number;
    errMsg?: string;
  };

  /** fsm.getFileInfo 的参数 */
  type GetFileInfoOptions = {
    /** 要读取的文件路径 (本地路径) */
    filePath: string;
    /** 计算文件摘要的算法 */
    digestAlgorithm?: 'md5' | 'sha1' | null;
    success?: ((res: GetFileInfoSuccessResult) => void) | null;
    fail?: ((err: any) => void) | null;
    complete?: ((res: any) => void) | null;
  };

  /** fsm.rmdir 的参数 */
  type RmDirOptions = {
    /** 要删除的目录路径 (本地路径) */
    dirPath: string;
    /** 是否递归删除目录 */
    recursive: boolean;
    success?: ((res: any) => void) | null;
    fail?: ((err: any) => void) | null;
    complete?: ((res: any) => void) | null;
  };

  /** fsm.unlink 的参数 */
  type UnLinkOptions = {
    /** 文件路径，只支持绝对地址 */
    filePath: string;
    success?: ((res: any) => void) | null;
    fail?: ((err: any) => void) | null;
    complete?: ((res: any) => void) | null;
  };

  /** fsm.writeFile 的参数 */
  type WriteFileOptions = {
    /** 文件路径，只支持绝对地址 */
    filePath: string;
    /** 字符编码 */
    encoding?: 'ascii' | 'base64' | 'utf-8';
    /** 写入的内容 */
    data: string | ArrayBuffer;
    success?: ((res: any) => void) | null;
    fail?: ((err: any) => void) | null;
    complete?: ((res: any) => void) | null;
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

  // ==========================================
  // uni-app X 原生异步任务类型（uni.request / uploadFile / downloadFile 的返回值）
  //
  // 为什么需要补这份声明：
  //   1) HBuilderX 编辑器与真机编译用的是它自带的 uni-app x dts，其中这三个类型
  //      已通过 `declare global` 暴露为全局（HBuilderX 内置
  //      @dcloudio/uni-app-x/types/uni/uts-plugin-api/lib/uni-network/utssdk/global.d.ts:56,70），
  //      所以 HBuilderX 里裸写 `RequestTask` 不报错。
  //   2) VSCode / tsconfig 侧挂的是 npm 包 `@dcloudio/types`，它把三者关在
  //      `declare namespace UniNamespace` 内（base/request.d.ts:1,113），**未提升到全局**，
  //      于是 .uts 里裸写 `RequestTask` 会报 TS2304「找不到名称」。
  //   3) 不能改用 `UniNamespace.RequestTask` 绕开：`declare namespace` 只是 TS 的 d.ts 语法，
  //      并非 UTS 运行时语法，写进 .uts 源码会被 HBuilderX 编译报错。
  //
  // 故按 HBuilderX 真源签名补齐全局声明（真源：utssdk/interface.d.ts:1760 起）。
  // ⚠️ 必须用 `type` 而非 `interface`：scripts/gen-uts-dts.mjs 注明「项目禁用 interface」。
  // ==========================================

  /** uni.request 的返回值，可用于中断请求、监听响应头 / 分块数据 */
  type RequestTask = {
    /** 中断请求任务 */
    abort: () => void;
    /** 监听 Transfer-Encoding Chunk Received 事件，返回监听器 id */
    onChunkReceived: (listener: (result: { data: ArrayBuffer }) => void) => number;
    /** 移除分块数据监听（不传参则移除全部） */
    offChunkReceived: (listener?: number | ((result: { data: ArrayBuffer }) => void) | null) => void;
    /** 监听 HTTP Response Header 事件，返回监听器 id */
    onHeadersReceived: (listener: (result: { header: any; cookies: string[]; statusCode: number }) => void) => number;
    /** 移除响应头监听（不传参则移除全部） */
    offHeadersReceived: (listener?: number | ((result: { header: any; cookies: string[]; statusCode: number }) => void) | null) => void;
  };

  /** uni.uploadFile 的返回值，可用于中断上传、监听上传进度 */
  type UploadTask = {
    /** 中断上传任务 */
    abort: () => void;
    /** 监听上传进度变化 */
    onProgressUpdate: (callback: (result: {
      progress: number;
      totalBytesSent: number;
      totalBytesExpectedToSend: number;
    }) => void) => void;
  };

  /** uni.downloadFile 的返回值，可用于中断下载、监听下载进度 */
  type DownloadTask = {
    /** 中断下载任务 */
    abort: () => void;
    /** 监听下载进度变化 */
    onProgressUpdate: (callback: (result: {
      progress: number;
      totalBytesWritten: number;
      totalBytesExpectedToWrite: number;
    }) => void) => void;
  };

  /** uni.uploadFile 的 onProgressUpdate 回调入参 */
  type OnProgressUpdateResult = {
    /** 上传进度百分比 */
    progress: number;
    /** 已上传的数据长度，单位 Bytes */
    totalBytesSent: number;
    /** 预期需要上传的数据总长度，单位 Bytes */
    totalBytesExpectedToSend: number;
  };

  /** uni.downloadFile 的 onProgressUpdate 回调入参 */
  type OnProgressDownloadResult = {
    /** 下载进度百分比 */
    progress: number;
    /** 已下载的数据长度，单位 Bytes */
    totalBytesWritten: number;
    /** 预期需要下载的数据总长度，单位 Bytes */
    totalBytesExpectedToWrite: number;
  };

  // ==========================================
  // 给 @dcloudio/types 的 UniNamespace.RequestTask 补齐分块接收 API
  //
  // `uni.request(...)` 的返回类型是 `UniNamespace.RequestTask`（来自 @dcloudio/types，
  // 即 Vue2 时代 uni-app 的类型），它只有 abort / onHeadersReceived / offHeadersReceived，
  // **没有** uni-app X 才有的 `onChunkReceived` —— 于是 stream.uts 里
  // `task.onChunkReceived(...)` 报 TS2339「RequestTask 上不存在属性 onChunkReceived」。
  //
  // 用声明合并（interface 可合并）就地补齐，无需改动 @dcloudio/types。
  // 真源签名同上方全局 `RequestTask`（HBuilderX 内置 uni-app x dts）。
  // ==========================================
  namespace UniNamespace {
    interface RequestTask {
      /** 监听 Transfer-Encoding Chunk Received 事件，返回监听器 id */
      onChunkReceived: (listener: (result: { data: ArrayBuffer }) => void) => number;
      /** 移除分块数据监听（不传参则移除全部） */
      offChunkReceived: (listener?: number | ((result: { data: ArrayBuffer }) => void) | null) => void;
    }

    // ==========================================
    // 给 @dcloudio/types 的 UniNamespace.GetAppBaseInfoResult 补齐 uni-app X 专有字段
    //
    // @dcloudio/types 是 uni-app **经典版**（Vue2 时代）的类型，其 GetAppBaseInfoResult
    // 只有 appId / appName / appVersion / language / version / hostName ... 这一批，
    // **整份没有** uni-app X 才返回的 uniPlatform / uniCompilerVersion / uniCompileVersion 等，
    // 于是 `uni.getAppBaseInfo().uniPlatform` 在 VSCode 里报 TS2339。
    //
    // 真源：HBuilderX uni-app x dts
    //   @dcloudio/uni-app-x/types/uni/uts-plugin-api/lib/uni-getAppBaseInfo/utssdk/interface.d.ts
    // 该处 GetAppBaseInfoResult 是 `type`（不可合并），故这里对 @dcloudio/types 的同名
    // `interface` 做声明合并来补齐；字段连同可选性、字面量联合取值一并与真源保持一致。
    // ==========================================
    interface GetAppBaseInfoResult {
      /**
       * 当前运行平台标识（uni-app X 专有）。
       * 真源为字面量联合，这里同样精确到取值，便于 isWebOrMpPlatform 一类的判断收敛。
       */
      uniPlatform?:
        | 'app'
        | 'web'
        | 'mp-weixin'
        | 'mp-alipay'
        | 'mp-baidu'
        | 'mp-toutiao'
        | 'mp-lark'
        | 'mp-qq'
        | 'mp-kuaishou'
        | 'mp-jd'
        | 'mp-360'
        | 'quickapp-webview'
        | 'quickapp-webview-union'
        | 'quickapp-webview-huawei';
      /** uni 编译器版本号（Android 4.0+ / iOS 4.11+ / 鸿蒙 4.61+ / 微信小程序 4.41+ / Web 4.18+） */
      uniCompilerVersion?: string;
      /** uni 编译版本号（支付宝等未实现 uniCompilerVersion 的端由它兜底） */
      uniCompileVersion?: string;
      /** uni 运行时版本号 */
      uniRuntimeVersion?: string;
      /** 当前是否运行在 uni-app X 环境 */
      isUniAppX?: boolean;
    }
  }

  // ==========================================
  // Vite 环境变量：import.meta.env.*
  //
  // 项目 tsconfig 的 `types` 白名单仅含 "@dcloudio/types"（未引入 "vite/client"），
  // 故 VSCode / tsc 下 `import.meta.env.VITE_*` 报 TS2339「ImportMeta 上不存在 env」。
  // 此处按 vite/client 的声明形式补齐。
  //
  // ⚠️ 必须用 interface 以与 lib.es5 的全局 `interface ImportMeta` 做声明合并，
  //    改成 type 会因重名报错（interface 可合并，type 不可）。
  // ==========================================
  interface ImportMetaEnv {
    readonly [key: string]: any;
    readonly BASE_URL: string;
    readonly MODE: string;
    readonly DEV: boolean;
    readonly PROD: boolean;
    readonly SSR: boolean;

    // —— 以下为项目自定义变量（真源：仓库根 .env / .env.development / .env.production / .env.test）
    // ⚠️ 一律声明为可选：同一变量并非每个模式文件都有（如 VITE_ENV_NAME 只在 .development/.test/.production 中），
    //    且 .env 中被注释掉的项在运行时确实不存在。声明为必选会让 `${x ?? 'default'}` 的兜底写法失去意义，
    //    并可能触发 no-unnecessary-condition 类告警。

    // 取自 .env
    readonly VITE_APP_TITLE?: string;
    readonly VITE_APP_VERSION?: string;
    readonly VITE_DEFAULT_LOCALE?: string;
    readonly VITE_DEFAULT_THEME?: string;
    readonly VITE_DEFAULT_THEME_MODE?: string;
    readonly VITE_DEV_SANDBOX?: string;
    readonly VITE_DEV_SANDBOX_PAGES?: string;
    readonly VITE_H5_USE_PROXY?: string;
    readonly VITE_SHOW_VCONSOLE?: string;
    readonly VITE_STREAM_URL?: string;
    readonly VITE_TABBAR_MODE?: string;
    readonly VITE_USE_MOCK?: string;

    // 取自 .env.development / .env.production / .env.test
    readonly VITE_ENV_NAME?: string;
    readonly VITE_ENV_TYPE?: string;
    readonly VITE_SERVER_BASEURL?: string;
    readonly VITE_SERVER_BASEURL_SECONDARY?: string;
    readonly VITE_UPLOAD_BASEURL?: string;
    readonly VITE_UPLOAD_PATH?: string;

    // 非 .env 声明，由 vite 构建期插件注入
    readonly VITE_BUILD_TIME?: string;
    readonly VITE_GIT_BRANCH?: string;
    readonly VITE_GIT_COMMIT_HASH?: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }

  // ==========================================
  // UTS 扩展的 JSON 静态方法
  //
  // HBuilderX 内置 UTS 运行时提供 `JSON.parseObject`（把字符串解析为 UTSJSONObject，
  // 解析失败返回 null），但 @dcloudio/types 未覆盖。此处合并进全局 JSON 接口。
  // 真源用法：src/store/vdom/i18n.uts:16、src/http/request/request.uts:124 等。
  // ==========================================
  interface JSON {
    parseObject: (text: string) => any;
  }
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
