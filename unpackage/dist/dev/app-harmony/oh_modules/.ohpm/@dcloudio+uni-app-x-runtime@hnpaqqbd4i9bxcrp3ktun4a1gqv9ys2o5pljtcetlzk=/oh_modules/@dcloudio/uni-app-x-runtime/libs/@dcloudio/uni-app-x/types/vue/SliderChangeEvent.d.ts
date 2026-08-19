/// <reference path="../native/UniCustomEvent.d.ts" />
/// <reference path="../native/UniElement.d.ts" />

/**
 * @package io.dcloud.uniapp.framework
 */
export class UniSliderChangeEventDetail {
  value: number
  constructor(value: number)
}

/**
 * @package io.dcloud.uniapp.framework
 */
export class UniSliderChangeEvent extends UniCustomEvent<UniSliderChangeEventDetail> {
  constructor(value: number)
}

/**
 * @package io.dcloud.uniapp.framework
 */
export interface UniSliderElement extends UniElement {
  get value(): number
  set value(value: number)
}
export let UniSliderElement: {
  prototype: UniSliderElement
  new (): UniSliderElement
}

export type SliderChangeEvent = UniSliderChangeEvent
export const SliderChangeEvent: typeof UniSliderChangeEvent

export type SliderChangeEventDetail = UniSliderChangeEventDetail
export const SliderChangeEventDetail: typeof UniSliderChangeEventDetail
