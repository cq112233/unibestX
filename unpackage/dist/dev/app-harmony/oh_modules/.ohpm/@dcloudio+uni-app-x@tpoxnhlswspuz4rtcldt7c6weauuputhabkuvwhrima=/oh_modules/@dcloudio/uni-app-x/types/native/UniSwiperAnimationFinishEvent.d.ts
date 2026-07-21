import { UniEvent } from "./UniEvent"

export class UniSwiperAnimationFinishEventDetail {
  /**
   * 发生动画结束事件的滑块下标
   */
  current: number
  /**
   * 动画结束的 swiper-item 的 item-id 属性值
   * @uniPlatform {
   *    "app": {
   *        "android": {
   *            "osVer": "5.0",
   *            "uniVer": "√",
   *            "unixVer": "x"
   *        },
   *        "ios": {
   *            "osVer": "√",
   *            "uniVer": "√",
   *            "unixVer": "x"
   *        }
   *    },
   *    "web": {
   *        "osVer": "√",
   *        "uniVer": "√",
   *        "unixVer": "√",
   *    }
   * }
   */
  currentItemId?: string
  /**
   * autoplay 自动播放导致swiper变化；touch 用户划动引起swiper变化
   */
  source: string
}

/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniSwiperAnimationFinishEvent extends UniEvent {
  detail: UniSwiperAnimationFinishEventDetail
}

export type SwiperAnimationFinishEvent = UniSwiperAnimationFinishEvent
export const SwiperAnimationFinishEvent: typeof UniSwiperAnimationFinishEvent
