import { UniEvent } from "./UniEvent"

/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniRichTextItemClickEventDetail {
  /**
   * <img/>图片链接
   */
  src: string | null
  /**
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
export class UniRichTextItemClickEvent extends UniEvent {
  detail: UniRichTextItemClickEventDetail
  
  /**
   * @internal
   */
  constructor(type: string, detail: UniRichTextItemClickEventDetail)
}

export type RichTextItemClickEventDetail = UniRichTextItemClickEventDetail
export const RichTextItemClickEventDetail: typeof UniRichTextItemClickEventDetail

export type RichTextItemClickEvent = UniRichTextItemClickEvent
export const RichTextItemClickEvent: typeof UniRichTextItemClickEvent