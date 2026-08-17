// ==========================================
// uni-app X 类型补充声明与全局宏声明
// ==========================================

export interface PageStyle {
  /** 导航栏标题文字内容 */
  navigationBarTitleText?: string
  /** 导航栏样式，仅支持 default/custom */
  navigationStyle?: 'default' | 'custom'
  /** 导航栏背景颜色（同颜色十六进制） */
  navigationBarBackgroundColor?: string
  /** 导航栏标题颜色及状态栏前景颜色，仅支持 black/white */
  navigationBarTextStyle?: 'black' | 'white'
  /** 页面背景颜色 */
  backgroundColor?: string
  /** 页面内容背景颜色 */
  backgroundColorContent?: string
  /** 窗口显示的动画效果 */
  animationType?: string
  /** 窗口显示动画的持续时间 */
  animationDuration?: number
  /** 设置为 true 则禁用页面滚动 */
  disableScroll?: boolean
  /** 是否开启下拉刷新 */
  enablePullDownRefresh?: boolean
  /** 页面上拉触底事件触发时距页面底部距离，单位为 px */
  onReachBottomDistance?: number
  /** 允许的任意其他 style 配置 */
  [key: string]: any
}

export interface DefinePageOptions {
  /**
   * 页面类型标记：
   * - 'home': 标记当前页面为应用首页（自动排在 pages.json 第 1 位）
   */
  type?: 'home' | string
  /**
   * 页面使用的布局模版：
   * - 'default': 使用 src/layouts/default.uvue
   * - 'empty': 使用 src/layouts/empty.uvue
   * - false: 禁用 layout 布局包裹
   * - string: 自定义 layout 名称（对应 src/layouts/[name].uvue）
   */
  layout?: 'default' | 'empty' | (string & {}) | boolean
  /**
   * 页面窗口表现样式配置（对应 pages.json 中的 style）
   */
  style?: PageStyle
  /**
   * 是否需要登录拦截校验
   */
  needLogin?: boolean
  /**
   * 页面标题（简写）
   */
  title?: string
  /**
   * 允许的任意自定义页面元数据
   */
  [key: string]: any
}

declare global {
  /**
   * uni-pages 宏函数：在单文件组件内部声明页面配置与路由信息
   */
  function definePage(options: DefinePageOptions): void

  // Vue 宏函数全局声明（保证在 uvue / uts / ts 环境中获得完整 IDE 智能补全）
  const defineProps: typeof import('vue').defineProps
  const defineEmits: typeof import('vue').defineEmits
  const defineExpose: typeof import('vue').defineExpose
  const defineOptions: typeof import('vue').defineOptions
  const withDefaults: typeof import('vue').withDefaults

  interface Uni {
    /**
     * 使手机发生较短时间的振动（15ms）
     *
     * 文档: http://uniapp.dcloud.io/api/system/vibrate?id=vibrateshort
     */
    vibrateShort: (options: {
      /** 接口调用成功的回调函数 */
      success?: (result: any) => void
      /** 接口调用失败的回调函数 */
      fail?: (result: any) => void
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (result: any) => void
    }) => void

    /**
     * 设置系统剪贴板内容
     */
    setClipboardData: (options: {
      data: string
      success?: (result: any) => void
      fail?: (result: any) => void
      complete?: (result: any) => void
    }) => void

    /**
     * 显示消息提示框
     */
    showToast: (options: {
      title: string
      icon?: string
      image?: string
      duration?: number
      position?: string
      success?: (result: any) => void
      fail?: (result: any) => void
      complete?: (result: any) => void
    }) => void
  }
}

export {}
