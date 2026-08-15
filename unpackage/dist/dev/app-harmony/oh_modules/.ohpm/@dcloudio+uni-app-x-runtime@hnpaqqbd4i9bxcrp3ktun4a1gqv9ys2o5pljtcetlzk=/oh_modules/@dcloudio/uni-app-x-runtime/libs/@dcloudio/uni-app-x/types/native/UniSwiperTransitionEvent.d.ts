import { UniEvent } from "./UniEvent"


export class UniSwiperTransitionEventDetail {
 /**
  * 横向偏移量，单位是逻辑像素px
  */
 dx: number
 /**
  * 纵向偏移量，单位是逻辑像素px
  */
 dy: number

}

/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniSwiperTransitionEvent extends UniEvent {
  detail: UniSwiperTransitionEventDetail
}

export type SwiperTransitionEvent = UniSwiperTransitionEvent
export const SwiperTransitionEvent: typeof UniSwiperTransitionEvent
