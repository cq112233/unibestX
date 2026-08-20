import { UniEvent } from "./UniEvent"

export class UniTextareaFocusEventDetail {
  /**
   * 键盘高度
   * @uniPlatform {
   * "app": {
   *   "android": {
   *     "osVer": "5.0",
   *     "uniVer": "√",
   *     "unixVer": "3.9"
   *     },
   *   "ios": {
   *     "osVer": "12.0",
   *     "uniVer": "√",
   *     "unixVer": "4.11"
   *     }
   *   },
   *   "web": {
   *     "uniVer": "x",
   *     "unixVer": "x"
   *   }
   * }
   */
  height: number
  /**
   * 输入框内容
   */
  value: string

  /**
   * @internal
   */
  constructor(height: number, value: string)
}

/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniTextareaFocusEvent extends UniEvent {
  detail: UniTextareaFocusEventDetail

  /**
   * @internal
   */
  constructor(type: string, detail: UniTextareaFocusEventDetail)
}


export type TextareaFocusEvent = UniTextareaFocusEvent
export const TextareaFocusEvent: typeof UniTextareaFocusEvent

export type TextareaFocusEventDetail = UniTextareaFocusEventDetail
export const TextareaFocusEventDetail: typeof UniTextareaFocusEventDetail
