import { UniEvent } from "./UniEvent"

/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniScrollEventDetail {
  /**
   * 竖向滚动的距离
   */
  scrollTop: number
  /**
   * 横向滚动的距离
   */
  scrollLeft: number
  /**
   * 滚动区域的高度
   */
  scrollHeight: number
  /**
   * 滚动区域的宽度
   */
  scrollWidth: number
  /**
   * 当次滚动事件竖向滚动量
   */
  deltaY: number
  /**
   * 当次滚动事件横向滚动量
   */
  deltaX: number
  constructor()
}
/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniScrollEvent extends UniEvent {
  detail: UniScrollEventDetail
  constructor(type: string, detail: UniScrollEventDetail)
}

export type ScrollEvent = UniScrollEvent
export const ScrollEvent: typeof UniScrollEvent
