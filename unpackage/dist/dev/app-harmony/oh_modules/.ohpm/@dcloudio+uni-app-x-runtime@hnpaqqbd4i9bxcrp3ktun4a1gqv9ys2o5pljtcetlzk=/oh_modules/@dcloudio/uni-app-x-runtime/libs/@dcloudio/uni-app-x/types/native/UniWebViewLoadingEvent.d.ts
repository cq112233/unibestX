import { UniCustomEvent } from "./UniCustomEvent"

/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniWebViewLoadingEventDetail {
  /**
   * 加载中的网页链接
   * @deprecated 4.13版本起废弃，请改用src
   */
  url: string
  /**
   * 加载中的网页链接，4.13版本起支持
   */
  src: string

  /**
   * @internal
   */
  constructor(url: string, src: string)
}

/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniWebViewLoadingEvent extends UniCustomEvent<UniWebViewLoadingEventDetail> {
  /**
   * 事件类型，固定值loading
   */
  type: string

  /**
   * @internal
   */
  constructor(type: string, detail: UniWebViewLoadingEventDetail)
}

export type WebViewLoadingEventDetail = UniWebViewLoadingEventDetail
export const WebViewLoadingEventDetail: typeof UniWebViewLoadingEventDetail

export type WebViewLoadingEvent = UniWebViewLoadingEvent
export const WebViewLoadingEvent: typeof UniWebViewLoadingEvent