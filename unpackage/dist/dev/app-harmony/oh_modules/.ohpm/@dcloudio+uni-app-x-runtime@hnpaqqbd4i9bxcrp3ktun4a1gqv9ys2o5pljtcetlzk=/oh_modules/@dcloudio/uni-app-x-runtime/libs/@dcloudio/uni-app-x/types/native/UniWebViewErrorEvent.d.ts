import { UniCustomEvent } from "./UniCustomEvent"

/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniWebViewErrorEventDetail {
  /**
   * 统一错误主题（模块）名称，固定值uni-web-view
   */
  errSubject: string
  /**
   * 统一错误码
   * 100001 ssl error
   * 100002 page error
   * 100003 http error 
   */
  errCode: 100001 | 100002 | 100003
  /**
   * 统一错误描述信息
   */
  errMsg: string
  /**
   * 加载错误的网页链接，非完整链接，仅包含scheme://authority部分，4.13版本起支持
   */
  url: string
  /**
   * 加载错误的网页链接，完整链接，4.13版本起支持
   */
  fullUrl: string
   /**
   * 加载错误的网页链接，完整链接，4.13版本起支持
   */
  src: string

  /**
   * @internal
   */
  constructor(errSubject: string, errCode: 100001 | 100002 | 100003, errMsg: string, url: string, fullUrl: string, src: string)
}

/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniWebViewErrorEvent extends UniCustomEvent<UniWebViewErrorEventDetail> {
  /**
   * 事件类型，固定值error
   */
  type: string

  /**
   * @internal
   */
  constructor(type: string, detail: UniWebViewErrorEventDetail)
}

export type WebViewErrorEventDetail = UniWebViewErrorEventDetail
export const WebViewErrorEventDetail: typeof UniWebViewErrorEventDetail

export type WebViewErrorEvent = UniWebViewErrorEvent
export const WebViewErrorEvent: typeof UniWebViewErrorEvent