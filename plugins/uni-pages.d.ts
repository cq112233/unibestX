// ==========================================
// vite-plugin-uni-pages 全局宏声明与沙箱类型
// ==========================================

declare global {
  type PageStyle = {
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
  };

  type DefinePageOptions = {
    /**
     * -route名字
     */
    name?: string;
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
     *  是否隐藏顶状态栏（配合 navbar 布局使用，默认 false）
     */
    hideStatusBar?: boolean;

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
  };

  type DefinePagePlatform = {
    /** 平台标识字符串：'h5' | 'app-android' | 'app-ios' | 'app-harmony' | 'mp-weixin' 等 */
    name: string;
    platform: string;
    isH5: boolean;
    isWeb: boolean;
    isMp: boolean;
    isMpWeixin: boolean;
    isMpAlipay: boolean;
    isMpBaidu: boolean;
    isMpToutiao: boolean;
    isMpQQ: boolean;
    isMpKuaishou: boolean;
    isMpLark: boolean;
    isMpJD: boolean;
    isMpXHS: boolean;
    isMp360: boolean;
    isMpHarmony: boolean;
    isApp: boolean;
    isAppAndroid: boolean;
    isAppIOS: boolean;
    isAppHarmony: boolean;
    [key: string]: any;
  };

  type DefinePageContext = {
    /** 当前项目的环境变量（由 .env / .env.[mode] / process.env 加载） */
    env: Record<string, string>;
    /** 当前编译目标平台信息（包含 isH5, isAppIOS, isAppAndroid 等） */
    platform: DefinePagePlatform;
    isH5: boolean;
    isWeb: boolean;
    isMp: boolean;
    isMpWeixin: boolean;
    isMpAlipay: boolean;
    isMpBaidu: boolean;
    isMpToutiao: boolean;
    isMpQQ: boolean;
    isMpKuaishou: boolean;
    isMpLark: boolean;
    isMpJD: boolean;
    isMpXHS: boolean;
    isMp360: boolean;
    isMpHarmony: boolean;
    isApp: boolean;
    isAppAndroid: boolean;
    isAppIOS: boolean;
    isAppHarmony: boolean;
    define: (base: DefinePageOptions) => any;
    /** 支持由 vite.config.ts 的 uniPagesPlugin.context 扩展注入的自定义属性 */
    [key: string]: any;
  };

  type DefinePageHandler = (
    context: DefinePageContext
  ) => DefinePageOptions | null | void | Promise<DefinePageOptions | null | void>;

  /**
   * 跨端全局环境变量（由 vite-plugin-uni-pages 宏执行沙箱注入）
   */
  const isH5: boolean;
  const isWeb: boolean;
  const isMp: boolean;
  const isMpWeixin: boolean;
  const isMpAlipay: boolean;
  const isMpBaidu: boolean;
  const isMpToutiao: boolean;
  const isMpQQ: boolean;
  const isMpKuaishou: boolean;
  const isMpLark: boolean;
  const isMpJD: boolean;
  const isMpXHS: boolean;
  const isMp360: boolean;
  const isMpHarmony: boolean;
  const isApp: boolean;
  const isAppAndroid: boolean;
  const isAppIOS: boolean;
  const isAppHarmony: boolean;

  /**
   * uni-pages 宏函数：在单文件组件内部声明页面配置与路由信息
   * 支持传入对象字面量、函数（含 async 函数）、null，支持通过 isH5 / platform 等环境变量进行跨端条件配置
   */
  function definePage(
    options: DefinePageOptions | null | DefinePageHandler
  ): void;
}

export {};
