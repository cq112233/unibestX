import { UniEvent } from './UniEvent'

/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniImageErrorEventDetail {
  /**
   * 错误信息
   */
  errMsg: string

  /**
   * @internal
   */
  constructor(errMsg: string)
}

/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniImageErrorEvent extends UniEvent {
  detail: UniImageErrorEventDetail

  /**
   * @internal
   */
  constructor(type: string, detail: UniImageErrorEventDetail)
}

export type ImageErrorEventDetail = UniImageErrorEventDetail
export const ImageErrorEventDetail: typeof UniImageErrorEventDetail

export type ImageErrorEvent = UniImageErrorEvent
export const ImageErrorEvent: typeof UniImageErrorEvent