// ==========================================
// uni-app X 类型补充声明与全局宏声明
// ==========================================

declare global {
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
     * 页面类型标记：
     * - 'home': 标记当前页面为应用首页（自动排在 pages.json 第 1 位）
     */
    type?: 'home' | string;
    /**
     * 页面使用的布局模版：
     * - 'default': 使用 src/layouts/default.uvue
     * - 'empty': 使用 src/layouts/empty.uvue
     * - false: 禁用 layout 布局包裹
     * - string: 自定义 layout 名称（对应 src/layouts/[name].uvue）
     */
    layout?: 'default' | 'empty' | (string & {}) | boolean;
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

  interface Uni {
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
}

declare module '*.uts';
declare module '*.uvue';

export {};
