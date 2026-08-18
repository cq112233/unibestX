import { UniEvent } from "./UniEvent";

export class UniInputChangeEventDetail {
  /**
     * 输入框内容
     */
  value: string

  /**
   * @internal
   */
  constructor(value: string)
}


/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniInputChangeEvent extends UniEvent {
  detail: UniInputChangeEventDetail
  /**
   * @internal
   */
  constructor(type: string, detail: UniInputChangeEventDetail)
}

export type InputChangeEvent = UniInputChangeEvent
export const InputChangeEvent: typeof UniInputChangeEvent

export type InputChangeEventDetail = UniInputChangeEventDetail
export const InputChangeEventDetail: typeof UniInputChangeEventDetail