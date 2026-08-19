import { UniCustomEvent } from "./UniCustomEvent"

/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniWebViewMessageEventDetail {
  /**
   * 消息包含的数据，4.13版本之前类型为Map<string, any | null> | null，4.13版本（含）之后类型为Array<UTSJSONObject>
   */
  data: Array<UTSJSONObject>

  /**
   * @internal
   */
  constructor(data: Array<UTSJSONObject>)
}

/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniWebViewMessageEvent extends UniCustomEvent<UniWebViewMessageEventDetail> {
  /**
   * 事件类型，固定值message
   */
  type: string

  /**
   * @internal
   */
  constructor(type: string, detail: UniWebViewMessageEventDetail)
}

export type WebViewMessageEventDetail = UniWebViewMessageEventDetail
export const WebViewMessageEventDetail: typeof UniWebViewMessageEventDetail

export type WebViewMessageEvent = UniWebViewMessageEvent
export const WebViewMessageEvent: typeof UniWebViewMessageEvent