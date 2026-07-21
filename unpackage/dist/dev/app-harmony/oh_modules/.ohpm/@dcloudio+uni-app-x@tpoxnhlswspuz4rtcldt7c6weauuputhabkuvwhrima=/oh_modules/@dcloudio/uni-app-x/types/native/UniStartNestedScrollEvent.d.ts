import { UniEvent } from "./UniEvent";
import { UniElement } from "./IUniElement";

/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniStartNestedScrollEvent extends UniEvent {
  /**
   * 开始滚动子节点对象
   */
  node: UniElement
  
  /**
   * 是否由触摸行为发生的Event
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "x",
   *            "unixVer": "3.99"
   *        },
   *        "ios": {
   *            "osVer": "x",
   *            "uniVer": "x",
   *            "unixVer": "x"
   *   	    }
   *    }
   * }
   */
  isTouch: boolean
}

export type StartNestedScrollEvent = UniStartNestedScrollEvent
export const StartNestedScrollEvent: typeof UniStartNestedScrollEvent