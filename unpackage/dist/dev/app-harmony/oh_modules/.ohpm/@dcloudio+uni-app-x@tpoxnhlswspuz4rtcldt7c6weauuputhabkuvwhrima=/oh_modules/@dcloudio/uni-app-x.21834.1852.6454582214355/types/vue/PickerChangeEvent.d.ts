import { UniCustomEvent } from "../native/UniCustomEvent"
import { UniElementImpl } from "../native/UniElement"

/**
 * @package io.dcloud.uniapp.framework
 */
export class UniPickerChangeEventDetail {
  value: any
  constructor(value: any)
}

/**
 * @package io.dcloud.uniapp.framework
 */
export class UniPickerChangeEvent extends UniCustomEvent<UniPickerChangeEventDetail> {
  constructor(value: any)
}

/**
 * @package io.dcloud.uniapp.framework
 */
export interface UniPickerElement extends UniElementImpl {}
export let UniPickerElement: {
  prototype: UniPickerElement
  new (): UniPickerElement
}

export type PickerChangeEvent = UniPickerChangeEvent
export const PickerChangeEvent: typeof UniPickerChangeEvent

export type PickerChangeEventDetail = UniPickerChangeEventDetail
export const PickerChangeEventDetail: typeof UniPickerChangeEventDetail
