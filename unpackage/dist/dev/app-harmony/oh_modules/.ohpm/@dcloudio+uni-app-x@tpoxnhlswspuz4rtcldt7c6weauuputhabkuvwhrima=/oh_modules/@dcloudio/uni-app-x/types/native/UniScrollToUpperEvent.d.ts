import { UniEvent } from "./UniEvent"

/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniScrollToUpperEventDetail {
  /**
   * 滚动方向 top 或 left
   */
  direction: string
  constructor (direction: string)
}

/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniScrollToUpperEvent extends UniEvent {
  detail: UniScrollToUpperEventDetail
  constructor(type: string, detail: UniScrollToUpperEventDetail)
}

export type ScrollToUpperEvent = UniScrollToUpperEvent
export const ScrollToUpperEvent: typeof UniScrollToUpperEvent
