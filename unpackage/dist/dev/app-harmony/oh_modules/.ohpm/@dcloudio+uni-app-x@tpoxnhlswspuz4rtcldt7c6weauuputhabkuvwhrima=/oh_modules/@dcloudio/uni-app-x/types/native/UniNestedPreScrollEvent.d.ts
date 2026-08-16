import { UniEvent } from "./UniEvent"

/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniNestedPreScrollEvent extends UniEvent {
  /**
   * x轴滚动距离
   */
  deltaX: number

  /**
   * y轴滚动距离
   */
  deltaY: number

  /**
   * 是否由触摸行为发生的Event
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "3.99"
   *        },
   *        "ios": {
   *            "osVer": "x",
   *            "uniVer": "x",
   *            "unixVer": "x"
   *   	    }
   *    }
   * }
   */
  isTouch: boolean

  /**
   * 通知到子节点x,y轴滚动距离的消耗
   * @param {number} consumedX x轴消耗的滚动距离
   * @param {number} consumedY y轴消耗的滚动距离
   */
  consumed(consumedX: number, consumedY: number): void
}

export type NestedPreScrollEvent = UniNestedPreScrollEvent
export const NestedPreScrollEvent: typeof UniNestedPreScrollEvent
