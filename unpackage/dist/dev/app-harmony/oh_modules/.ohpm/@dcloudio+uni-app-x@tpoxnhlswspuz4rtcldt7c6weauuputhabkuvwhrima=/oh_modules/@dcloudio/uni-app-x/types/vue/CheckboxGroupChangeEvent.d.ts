/// <reference path="../native/UniCustomEvent.d.ts" />
/// <reference path="../native/UniElement.d.ts" />

/**
 * @package io.dcloud.uniapp.framework
 */
export declare class UniCheckboxGroupChangeEventDetail {
  value: string[]
  constructor(value: string[])
}

/**
 * @package io.dcloud.uniapp.framework
 */
export class UniCheckboxGroupChangeEvent extends UniCustomEvent<UniCheckboxGroupChangeEventDetail> {
  constructor(value: string[])
}

/**
 * @package io.dcloud.uniapp.framework
 */
export interface UniCheckboxGroupElement extends UniElement {}
export let UniCheckboxGroupElement: {
  prototype: UniCheckboxGroupElement
  new (): UniCheckboxGroupElement
}

/**
 * @package io.dcloud.uniapp.framework
 */
export interface UniCheckboxElement extends UniElement {}
export let UniCheckboxElement: {
  prototype: UniCheckboxElement
  new (): UniCheckboxElement
}

export type CheckboxGroupChangeEvent = UniCheckboxGroupChangeEvent
export const CheckboxGroupChangeEvent: typeof UniCheckboxGroupChangeEvent

export type CheckboxGroupChangeEventDetail = UniCheckboxGroupChangeEventDetail
export const CheckboxGroupChangeEventDetail: typeof UniCheckboxGroupChangeEventDetail
