import { UniEvent } from "./UniEvent"

/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniTouch {
  /**
   * 相对于页面可显示区域左边的距离
   */
  clientX: number
  /**
   * 相对于页面可显示区域顶部的距离
   */
  clientY: number
  /**
   * 触摸点的标识符。这个值在这根手指所引发的所有事件中保持一致，直到手指抬起。
   */
  identifier: number
  /**
   * 相对于屏幕左边的距离，包括滚动距离。
   */
  pageX: number
  /**
   * 相对于屏幕顶部的距离，包括滚动距离。
   */
  pageY: number
  /**
   * 相对于屏幕左边的距离，不包括滚动距离。
   */
  screenX: number
  /**
   * 相对于屏幕顶部的距离，不包括滚动距离。
   */
  screenY: number
  /**
   * 返回当前触摸点按下的压力大小
   */
  force: number | null
}

/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniTouchEvent extends UniEvent {
  /**
   * 当前停留在屏幕中的触摸点信息的数组
   */
  touches: UniTouch[]
  /**
   * 当前变化的触摸点信息的数组
   */
  changedTouches: UniTouch[]
  /**
   * @internal
   */
  constructor (type: string, touches: UniTouch[], changedTouches: UniTouch[])
}


export type Touch = UniTouch
export const Touch: typeof UniTouch

export type TouchEvent = UniTouchEvent
export const TouchEvent: typeof UniTouchEvent
