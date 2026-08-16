import { UniEvent } from "./UniEvent"

/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniScrollToLowerEventDetail {
  /**
   * 滚动方向 bottom 或 right
   */
  direction: string
  constructor (direction: string)
}

/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniScrollToLowerEvent extends UniEvent {
  detail: UniScrollToLowerEventDetail
  constructor(type: string, detail: UniScrollToLowerEventDetail)
}

export type ScrollToLowerEvent = UniScrollToLowerEvent
export const ScrollToLowerEvent: typeof UniScrollToLowerEvent
