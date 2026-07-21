import { UniCustomEvent } from "../native/UniCustomEvent"
import { UniElementImpl } from "../native/UniElement"

/**
 * @package io.dcloud.uniapp.framework
 */
export class UniSwitchChangeEventDetail {
  value: boolean
  constructor(value: boolean)
}

/**
 * @package io.dcloud.uniapp.framework
 */
export class UniSwitchChangeEvent extends UniCustomEvent<UniSwitchChangeEventDetail> {
  constructor(value: boolean)
}

/**
 * @package io.dcloud.uniapp.framework
 */
export interface UniSwitchElement extends UniElementImpl {}
export let UniSwitchElement: {
  prototype: UniSwitchElement
  new (): UniSwitchElement
}

export type SwitchChangeEvent = UniSwitchChangeEvent
export const SwitchChangeEvent: typeof UniSwitchChangeEvent

export type SwitchChangeEventDetail = UniSwitchChangeEventDetail
export const SwitchChangeEventDetail: typeof UniSwitchChangeEventDetail
