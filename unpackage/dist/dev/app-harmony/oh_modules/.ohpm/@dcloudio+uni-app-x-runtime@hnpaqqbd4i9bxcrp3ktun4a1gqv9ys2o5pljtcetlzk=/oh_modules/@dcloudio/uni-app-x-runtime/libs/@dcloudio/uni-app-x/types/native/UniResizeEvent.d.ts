import { UniEvent } from "./UniEvent"

/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniResizeEvent extends UniEvent {
  /**
   * 设备屏幕方向
   */
  deviceOrientation: string
  /**
   * 设备屏幕和页面尺寸
   */
  size: {
    /**
     * 页面宽度
     */
    windowWidth: number
    /**
     * 页面高度
     */
    windowHeight: number
    /**
     * 屏幕宽度
     */
    screenWidth: number
    /**
     * 屏幕高度
     */
    screenHeight: number
  }
}

export type ResizeEvent = UniResizeEvent
export const ResizeEvent: typeof UniResizeEvent