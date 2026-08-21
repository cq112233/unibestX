import { UniEvent } from "./UniEvent"

export class UniTextareaBlurEventDetail {
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
export class UniTextareaBlurEvent extends UniEvent {
  detail: UniTextareaBlurEventDetail

  /**
   * @internal
   */
  constructor(type: string, detail: UniTextareaBlurEventDetail)
}

export type TextareaBlurEvent = UniTextareaBlurEvent
export const TextareaBlurEvent: typeof UniTextareaBlurEvent

export type TextareaBlurEventDetail = UniTextareaBlurEventDetail
export const TextareaBlurEventDetail: typeof UniTextareaBlurEventDetail