import { UniEvent } from "./UniEvent"

/**
 * @package io.dcloud.uniapp.runtime
 * @autodoc false
 */
export class UniTabTapEvent extends UniEvent {
  /**
   * `tabBar`事件触发的类型
   */
  type: string
  /**
   * 点击的`tabBar`的某一项
   */
  index: number
}

export type TabTapEvent = UniTabTapEvent
export const TabTapEvent: typeof UniTabTapEvent