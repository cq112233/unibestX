import { UniEvent } from './UniEvent'

/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniImageLoadEventDetail {
  /**
   * 图片宽度
   */
  width: number
  /**
   * 图片高度
   */
  height: number

  /**
   * @internal
   */
  constructor(width: number, height: number)
}

/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniImageLoadEvent extends UniEvent {
  detail: UniImageLoadEventDetail

  /**
   * @internal
   */
  constructor(type: string, detail: UniImageLoadEventDetail)
}

export type ImageLoadEventDetail = UniImageLoadEventDetail
export const ImageLoadEventDetail: typeof UniImageLoadEventDetail

export type ImageLoadEvent = UniImageLoadEvent
export const ImageLoadEvent: typeof UniImageLoadEvent