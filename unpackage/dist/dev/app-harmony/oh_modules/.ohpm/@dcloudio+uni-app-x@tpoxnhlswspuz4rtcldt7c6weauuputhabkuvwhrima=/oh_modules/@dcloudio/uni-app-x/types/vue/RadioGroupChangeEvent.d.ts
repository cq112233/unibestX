/// <reference path="../native/UniCustomEvent.d.ts" />
/// <reference path="../native/UniElement.d.ts" />

/**
 * @package io.dcloud.uniapp.framework
 */
export class UniRadioGroupChangeEventDetail {
  value: string
  constructor(value: string)
}

/**
 * @package io.dcloud.uniapp.framework
 */
export class UniRadioGroupChangeEvent extends UniCustomEvent<UniRadioGroupChangeEventDetail> {
  constructor(value: string)
}

/**
 * @package io.dcloud.uniapp.framework
 */
export interface UniRadioElement extends UniElement {}
export let UniRadioElement: {
  prototype: UniRadioElement
  new (): UniRadioElement
}

/**
 * @package io.dcloud.uniapp.framework
 */
export interface UniRadioGroupElement extends UniElement {}
export let UniRadioGroupElement: {
  prototype: UniRadioGroupElement
  new (): UniRadioGroupElement
}

export type RadioGroupChangeEvent = UniRadioGroupChangeEvent
export const RadioGroupChangeEvent: typeof UniRadioGroupChangeEvent

export type RadioGroupChangeEventDetail = UniRadioGroupChangeEventDetail
export const RadioGroupChangeEventDetail: typeof UniRadioGroupChangeEventDetail
