import { UniEvent } from "./UniEvent";

export class UniInputConfirmEventDetail {
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
export class UniInputConfirmEvent extends UniEvent {
  detail: UniInputConfirmEventDetail
  /**
   * @internal
   */
  constructor(type: string, detail: UniInputConfirmEventDetail)
}

export type InputConfirmEvent = UniInputConfirmEvent
export const InputConfirmEvent: typeof UniInputConfirmEvent

export type InputConfirmEventDetail = UniInputConfirmEventDetail
export const InputConfirmEventDetail: typeof UniInputConfirmEventDetail