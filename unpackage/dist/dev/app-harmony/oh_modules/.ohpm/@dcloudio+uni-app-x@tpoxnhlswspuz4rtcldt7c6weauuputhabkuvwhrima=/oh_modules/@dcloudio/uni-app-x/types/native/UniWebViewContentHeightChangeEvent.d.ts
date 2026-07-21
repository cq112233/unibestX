import { UniCustomEvent } from "./UniCustomEvent"

/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniWebViewContentHeightChangeEventDetail {
  /**
   * 内容高度
   */
  height: number

  /**
   * @internal
   */
  constructor(height: number)
}

/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniWebViewContentHeightChangeEvent extends UniCustomEvent<UniWebViewContentHeightChangeEventDetail> {
  /**
   * 事件类型，固定值contentheightchange
   */
  type: string

  /**
   * @internal
   */
  constructor(type: string, detail: UniWebViewContentHeightChangeEventDetail)
}