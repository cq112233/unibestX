/// <reference path="../native/UniCustomEvent.d.ts" />
/// <reference path="../native/UniElement.d.ts" />

/**
 * @package io.dcloud.uniapp.framework
 */
export class UniPickerViewChangeEventDetail {
  value: number[]
  constructor(value: number[])
}

/**
 * @package io.dcloud.uniapp.framework
 */
export class UniPickerViewChangeEvent extends UniCustomEvent<UniPickerViewChangeEventDetail> {
  constructor(value: number[])
}

/**
 * @package io.dcloud.uniapp.framework
 */
export interface UniPickerViewElement extends UniElement {}
export let UniPickerViewElement: {
  prototype: UniPickerViewElement
  new (): UniPickerViewElement
}

/**
 * @package io.dcloud.uniapp.framework
 */
export interface UniPickerViewColumnElement extends UniElement {}
export let UniPickerViewColumnElement: {
  prototype: UniPickerViewColumnElement
  new (): UniPickerViewColumnElement
}

export type PickerViewChangeEvent = UniPickerViewChangeEvent
export const PickerViewChangeEvent: typeof UniPickerViewChangeEvent

export type PickerViewChangeEventDetail = UniPickerViewChangeEventDetail
export const PickerViewChangeEventDetail: typeof UniPickerViewChangeEventDetail
