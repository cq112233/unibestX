import { UniCustomEvent } from "./UniCustomEvent"

/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniWebViewDownloadEventDetail {
  /**
   * 下载链接
   */
  url: string
  /**
   * 用户代理
   */
  userAgent: string
  /**
   * 指示回复的内容该以何种形式展示，是以内联的形式（即网页或者页面的一部分），还是以附件的形式下载并保存到本地
   */
  contentDisposition: string
  /**
   * 媒体类型
   */
  mimetype: string
  /**
   * 文件大小
   */
  contentLength: number

  /**
   * @internal
   */
  constructor(url: string, userAgent: string, contentDisposition: string, mimetype: string, contentLength: number)
}

/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniWebViewDownloadEvent extends UniCustomEvent<UniWebViewDownloadEventDetail> {
  /**
   * 事件类型，固定值download
   */
  type: string

  /**
   * @internal
   */
  constructor(type: string, detail: UniWebViewDownloadEventDetail)
}

export type WebViewDownloadEventDetail = UniWebViewDownloadEventDetail
export const WebViewDownloadEventDetail: typeof UniWebViewDownloadEventDetail

export type WebViewDownloadEvent = UniWebViewDownloadEvent
export const WebViewDownloadEvent: typeof UniWebViewDownloadEvent