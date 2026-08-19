import { UniCustomEvent } from "../native/UniCustomEvent"
import { UniElementImpl } from "../native/UniElement"

/**
 * @package io.dcloud.uniapp.framework
 */
export class UniPickerColumnChangeEventDetail {
  value : number
  column : number
  constructor(value : number, column : number)
}

/**
 * @package io.dcloud.uniapp.framework
 */
export class UniPickerColumnChangeEvent extends UniCustomEvent<UniPickerColumnChangeEventDetail> {
  constructor(value : number, column : number)
}

/**
 * @package io.dcloud.uniapp.framework
 */
export interface UniPickerColumnElement extends UniElementImpl { }
export let UniPickerColumnElement : {
  prototype : UniPickerColumnElement
  new() : UniPickerColumnElement
}

export type PickerColumnChangeEvent = UniPickerColumnChangeEvent
export const PickerColumnChangeEvent : typeof UniPickerColumnChangeEvent

export type PickerColumnChangeEventDetail = UniPickerColumnChangeEventDetail
export const PickerColumnChangeEventDetail : typeof UniPickerColumnChangeEventDetail
