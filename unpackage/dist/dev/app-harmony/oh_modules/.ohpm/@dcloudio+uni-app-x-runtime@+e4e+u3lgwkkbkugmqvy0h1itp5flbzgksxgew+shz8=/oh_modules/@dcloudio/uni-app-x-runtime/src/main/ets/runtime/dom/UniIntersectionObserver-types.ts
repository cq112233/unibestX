import { DOMRect as IDOMRect } from '@dcloudio/uni-app-x/types/native/DOMRect'

export interface CreateIntersectionObserverOptions {
  /**
   * 初始的相交比例，如果调用时检测到的相交比例与这个值不相等且达到阈值，则会触发一次监听器的回调函数。
   */
  initialRatio?: number | null
  /**
   * 是否使用原生观察器模式。
   */
  nativeMode?: boolean | null
  /**
   * 是否同时观测多个目标节点（而非一个），如果设为 true ，observe 的 targetSelector 将选中多个节点（注意：同时选中过多节点将影响渲染性能）
   */
  observeAll?: boolean | null
  /**
   * 一个数值数组，包含所有阈值。
   */
  thresholds?: number[] | null
}

export interface UniIntersectionObserverRectResult {
  /** 下边界 */
  bottom: number
  /** 高度 */
  height: number
  /** 左边界 */
  left: number
  /** 右边界 */
  right: number
  /** 上边界 */
  top: number
  /** 宽度 */
  width: number
}

export interface UniIntersectionObserverObserveCallbackResult {
  /**
   * 目标边界
   */
  boundingClientRect: IDOMRect
  /** 节点自定义数据属性 */
  dataset: Record<string, any>
  /** 节点 ID */
  id: string
  /** 相交比例 */
  intersectionRatio: number
  /** 相交区域的边界 */
  intersectionRect: UniIntersectionObserverRectResult
  /** 参照区域的边界 */
  relativeRect: IDOMRect
  /** 相交检测时的时间戳 */
  time: number
}

export type UniIntersectionObserverObserveCallback = (
  result: UniIntersectionObserverObserveCallbackResult
) => void

/** 用来扩展（或收缩）参照节点布局区域的边界 */
export interface UniIntersectionObserverMargins {
  /** 节点布局区域的下边界 */
  bottom?: number | null
  /** 节点布局区域的左边界 */
  left?: number | null
  /** 节点布局区域的右边界 */
  right?: number | null
  /** 节点布局区域的上边界 */
  top?: number | null
}

export interface UniIntersectionObserver {
  /**
   * 停止监听。回调函数将不再触发
   */
  disconnect(): void

  /**
   * 指定目标节点并开始监听相交状态变化情况
   */
  observe(
    /** 选择器 */
    targetSelector: string,
    /** 监听相交状态变化的回调函数 */
    callback: UniIntersectionObserverObserveCallback
  ): void

  /**
   * 使用选择器指定一个节点，作为参照区域之一。
   */
  relativeTo(
    /** 选择器 */
    selector: string,
    /** 用来扩展（或收缩）参照节点布局区域的边界 */
    margins?: UniIntersectionObserverMargins | null
  ): UniIntersectionObserver

  /**
   * 指定页面显示区域作为参照区域之一
   */
  relativeToViewport(
    /** 用来扩展（或收缩）参照节点布局区域的边界 */
    margins?: UniIntersectionObserverMargins | null
  ): UniIntersectionObserver
}

export type CreateIntersectionObserver = (
/** 自定义组件实例 */
  component: any,
  /** 选项 */
  options?: CreateIntersectionObserverOptions | null
) => UniIntersectionObserver