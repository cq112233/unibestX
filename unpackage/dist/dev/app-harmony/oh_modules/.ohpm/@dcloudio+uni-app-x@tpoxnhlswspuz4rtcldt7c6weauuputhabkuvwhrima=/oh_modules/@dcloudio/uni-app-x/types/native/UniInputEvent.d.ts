import { UniEvent } from './UniEvent'

export class UniInputEventDetail {
  /**
   * 输入框内容
   */
  value: string
  /**
   * 光标的位置
   */
  cursor: number
  /**
   * 输入字符的Unicode值
   */
  keyCode: number

  /**
   * @internal
   */
  constructor(value: string, cursor: number, keyCode: number)
}

/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniInputEvent extends UniEvent {
  detail: UniInputEventDetail
  /**
   * @internal
   */
  constructor(type: string, detail: UniInputEventDetail)
}

export type InputEvent = UniInputEvent
export const InputEvent: typeof UniInputEvent

export type InputEventDetail = UniInputEventDetail
export const InputEventDetail: typeof UniInputEventDetail
