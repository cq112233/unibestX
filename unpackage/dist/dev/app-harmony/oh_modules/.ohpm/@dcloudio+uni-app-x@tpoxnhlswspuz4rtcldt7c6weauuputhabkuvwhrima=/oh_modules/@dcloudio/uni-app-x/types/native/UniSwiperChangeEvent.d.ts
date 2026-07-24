import { UniEvent } from "./UniEvent"

export class UniSwiperChangeEventDetail {
  /**
   * 发生change事件的滑块下标
   */
  current: number
  /**
   * 切换结束的 swiper-item 的 item-id 属性值
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
   *        "unixVer": "√"
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
export class UniSwiperChangeEvent extends UniEvent {
  detail: UniSwiperChangeEventDetail
}

export type SwiperChangeEvent = UniSwiperChangeEvent
export const SwiperChangeEvent: typeof UniSwiperChangeEvent
