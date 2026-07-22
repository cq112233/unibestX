/**
 * web-view组件的样式
 */
export class WebViewStyles {
  /**
   * 网络地址页面加载进度条样式，设置为 false 时表示不显示加载进度条。
   * @defaultValue {"color": "#00FF00"}
   */
  progress: WebViewProgressStyles | boolean
}

/**
 * web-view组件的进度条样式
 */
export class WebViewProgressStyles {
  /**
   * 网页加载进度条颜色，默认值为 #00FF00 。
   */
  color: string.ColorString
}
