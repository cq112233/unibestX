import { UniEvent } from './UniEvent'

export class UniInputBlurEventDetail {

  /**
   * 输入框内容
   */
  value: string
  /**
   * 选择区域的起始位置
   */
  cursor: number

  /**
   * @internal
   */
  constructor(value: string, cursor: number)
}


/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniInputBlurEvent extends UniEvent {
  detail: UniInputBlurEventDetail

  /**
   * @internal
   */
  constructor(type: string, detail: UniInputBlurEventDetail)
}

export type InputBlurEvent = UniInputBlurEvent
export const InputBlurEvent: typeof UniInputBlurEvent

export type InputBlurEventDetail = UniInputBlurEventDetail
export const InputBlurEventDetail: typeof UniInputBlurEventDetail