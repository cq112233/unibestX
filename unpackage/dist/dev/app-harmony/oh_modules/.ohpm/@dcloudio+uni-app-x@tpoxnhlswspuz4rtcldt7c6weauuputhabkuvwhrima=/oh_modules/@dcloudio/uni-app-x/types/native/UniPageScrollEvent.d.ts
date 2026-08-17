import { UniPageEvent } from "./UniPageEvent";

/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniPageScrollEvent extends UniPageEvent {
  /**
   * 竖向滚动的距离
   */
  scrollTop: number
}

export type PageScrollEvent = UniPageScrollEvent
export const PageScrollEvent: typeof UniPageScrollEvent