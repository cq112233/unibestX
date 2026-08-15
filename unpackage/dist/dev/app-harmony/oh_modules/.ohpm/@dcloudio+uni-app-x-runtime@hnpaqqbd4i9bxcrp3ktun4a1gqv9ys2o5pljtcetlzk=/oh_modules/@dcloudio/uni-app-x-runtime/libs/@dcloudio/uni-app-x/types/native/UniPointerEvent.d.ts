import { UniEvent } from './UniEvent'

/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniPointerEvent extends UniEvent {
  /**
   * 相对于页面可显示区域左边的距离
   */
  clientX: number
  /**
   * 相对于页面可显示区域顶部的距离
   */
  clientY: number
  /**
   * 相对于页面可显示区域左边的距离，同`clientX`
   */
  x: number
  /**
   * 相对于页面可显示区域顶部的距离，同`clientY`
   */
  y: number
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
   * 创建一个新的 PointerEvent 对象
   * @param {string} type 事件类型
   * @param {number} x 相对于页面可显示区域左边的距离
   * @param {number} y 相对于页面可显示区域顶部的距离
   * @param {number} clientX 相对于页面可显示区域左边的距离
   * @param {number} clientY 相对于页面可显示区域顶部的距离
   * @param {number} pageX 相对于屏幕左边的距离，包括滚动距离。
   * @param {number} pageY 相对于屏幕顶部的距离，包括滚动距离。
   * @param {number} screenX 相对于屏幕左边的距离，不包括滚动距离。
   * @param {number} screenY 相对于屏幕顶部的距离，不包括滚动距离。
   * @internal
   */
  constructor (
    type: string,
    x: number,
    y: number,
    clientX: number,
    clientY: number,
    pageX: number,
    pageY: number,
    screenX: number,
    screenY: number
  )
}

export type PointerEvent = UniPointerEvent
export const PointerEvent: typeof UniPointerEvent

export type MouseEvent = UniPointerEvent
export const MouseEvent: typeof UniPointerEvent

export type UniMouseEvent = UniPointerEvent
export const UniMouseEvent: typeof UniPointerEvent

