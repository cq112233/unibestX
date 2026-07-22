import { UniEvent } from "./UniEvent";

export class UniInputKeyboardHeightChangeEventDetail {
  /**
   * 键盘高度
   */
  height: number
  /**
   * 持续时间
   */
  duration: number

  /**
   * @internal
   */
  constructor(height: number, duration: number)
}

/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniInputKeyboardHeightChangeEvent extends UniEvent {
  detail: UniInputKeyboardHeightChangeEventDetail

  /**
   * @internal
   */
  constructor(type: string, detail: UniInputKeyboardHeightChangeEventDetail)
}

export type InputKeyboardHeightChangeEvent = UniInputKeyboardHeightChangeEvent
export const InputKeyboardHeightChangeEvent: typeof UniInputKeyboardHeightChangeEvent

export type InputKeyboardHeightChangeEventDetail = UniInputKeyboardHeightChangeEventDetail
export const InputKeyboardHeightChangeEventDetail: typeof UniInputKeyboardHeightChangeEventDetail