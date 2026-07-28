/// <reference path="../native/UniCustomEvent.d.ts" />
/// <reference path="../native/UniElement.d.ts" />

/**
 * @package io.dcloud.uniapp.framework
 */
export class UniProgressActiveendEventDetail {
  curPercent: number
  constructor(value: number)
}

/**
 * @package io.dcloud.uniapp.framework
 */
export class UniProgressActiveendEvent extends UniCustomEvent<UniProgressActiveendEventDetail> {
  constructor(value: number)
}

/**
 * @package io.dcloud.uniapp.framework
 */
export interface UniProgressElement extends UniElement {}
export let UniProgressElement: {
  prototype: UniProgressElement
  new (): UniProgressElement
}

export type ProgressActiveendEvent = UniProgressActiveendEvent
export const ProgressActiveendEvent: typeof UniProgressActiveendEvent

export type ProgressActiveendEventDetail = UniProgressActiveendEventDetail
export const ProgressActiveendEventDetail: typeof UniProgressActiveendEventDetail
