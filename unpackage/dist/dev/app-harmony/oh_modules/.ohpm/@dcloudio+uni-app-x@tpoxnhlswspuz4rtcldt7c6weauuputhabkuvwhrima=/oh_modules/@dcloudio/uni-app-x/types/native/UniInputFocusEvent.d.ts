import { UniEvent } from "./UniEvent";

export class UniInputFocusEventDetail {
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
export class UniInputFocusEvent extends UniEvent {
  detail: UniInputFocusEventDetail

  /**
   * @internal
   */
  constructor(type: string, detail: UniInputFocusEventDetail)
}

export type InputFocusEvent = UniInputFocusEvent
export const InputFocusEvent: typeof UniInputFocusEvent

export type InputFocusEventDetail = UniInputFocusEventDetail
export const InputFocusEventDetail: typeof UniInputFocusEventDetail
