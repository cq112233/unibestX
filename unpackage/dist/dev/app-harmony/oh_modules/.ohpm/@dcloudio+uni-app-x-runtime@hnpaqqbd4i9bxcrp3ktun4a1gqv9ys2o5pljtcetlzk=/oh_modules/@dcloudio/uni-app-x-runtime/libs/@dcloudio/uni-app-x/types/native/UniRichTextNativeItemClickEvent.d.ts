import { UniCustomEvent } from "./UniCustomEvent"

/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniRichTextNativeItemClickEventDetail {
  /**
   * <img/>图片链接
   */
  src: string | null
  /**s
   * <a/>超链接
   */
  href: string | null

  /**
   * @internal
   */
  constructor(src: string | null, href: string | null)
}

/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniRichTextNativeItemClickEvent extends UniCustomEvent<UniRichTextNativeItemClickEventDetail>  {
  detail: UniRichTextNativeItemClickEventDetail

  /**
   * @internal
   */
  constructor(type: string, detail: UniRichTextNativeItemClickEventDetail)
}

export type RichTextNativeItemClickEventDetail = UniRichTextNativeItemClickEventDetail
export const RichTextNativeItemClickEventDetail: typeof UniRichTextNativeItemClickEventDetail

export type RichTextNativeItemClickEvent = UniRichTextNativeItemClickEvent
export const RichTextNativeItemClickEvent: typeof UniRichTextNativeItemClickEvent