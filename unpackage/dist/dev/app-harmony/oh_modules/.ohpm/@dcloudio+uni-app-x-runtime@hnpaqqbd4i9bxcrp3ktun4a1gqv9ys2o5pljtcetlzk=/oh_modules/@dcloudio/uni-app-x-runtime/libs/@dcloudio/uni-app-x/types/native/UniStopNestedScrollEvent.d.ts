import { UniEvent } from "./UniEvent";

/**
 * @package io.dcloud.uniapp.runtime
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
export class UniStopNestedScrollEvent extends UniEvent {
  
  /**
   * 是否由触摸行为发生的Event
   */
  isTouch: boolean
}

export type StopNestedScrollEvent = UniStopNestedScrollEvent
export const StopNestedScrollEvent: typeof UniStopNestedScrollEvent