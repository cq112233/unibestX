import { UniCustomEvent } from "./UniCustomEvent"

/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniWebViewLoadEventDetail {
  /**
   * 加载完成的网页链接
   * @deprecated 4.13版本起废弃，请改用src
   */
  url: string
  /**
   * 加载完成的网页链接，4.13版本起支持
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
export class UniWebViewLoadEvent extends UniCustomEvent<UniWebViewLoadEventDetail> {
  /**
   * 事件类型，固定值load
   */
  type: string

  /**
   * @internal
   */
  constructor(type: string, detail: UniWebViewLoadEventDetail)
}

export type WebViewLoadedEventDetail = UniWebViewLoadEventDetail
export const WebViewLoadedEventDetail: typeof UniWebViewLoadEventDetail

export type WebViewLoadedEvent = UniWebViewLoadEvent
export const WebViewLoadedEvent: typeof UniWebViewLoadEvent