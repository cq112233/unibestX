export interface SignaturePadProps {
  /**
   * 绘图样式（CSS样式字符串）
   */
  styles: string

  /**
   * 画笔颜色
   */
  penColor: string

  /**
   * 画笔粗细（像素）
   */
  penSize: number

  /**
   * 背景颜色
   */
  backgroundColor: string

  /**
   * 是否开启平滑绘制
   */
  openSmooth: boolean

  /**
   * 最小笔触宽度
   */
  minLineWidth: number

  /**
   * 最大笔触宽度
   */
  maxLineWidth: number

  /**
   * 最小绘制速度（像素/秒）
   */
  minSpeed: number

  /**
   * 最大宽度差异率
   */
  maxWidthDiffRate: number

  /**
   * 历史记录最大长度
   */
  maxHistoryLength: number

  /**
   * 是否禁止滚动穿透
   */
  disableScroll: boolean

  /**
   * 组件是否禁用
   */
  disabled: boolean

  /**
   * 是否横屏模式
   */
  landscape: boolean
}