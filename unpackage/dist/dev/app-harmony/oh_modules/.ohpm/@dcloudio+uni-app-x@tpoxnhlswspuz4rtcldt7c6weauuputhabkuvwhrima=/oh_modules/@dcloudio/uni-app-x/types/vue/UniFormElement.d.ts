/// <reference path="../native/UniElement.d.ts" />
/// <reference path="../native/UniCustomEvent.d.ts" />
/// <reference path="../native/IUniForm.d.ts" />

/**
 * @package io.dcloud.uniapp.framework
 */
export interface UniFormElement extends UniElement, IUniForm {}

export let UniFormElement: {
  prototype: UniFormElement
  new (): UniFormElement
}

/**
 * @package io.dcloud.uniapp.framework
 */
export class UniFormSubmitEventDetail {
  value: UTSJSONObject
  constructor(value: UTSJSONObject)
}

/**
 * @package io.dcloud.uniapp.framework
 */
export class UniFormSubmitEvent extends UniCustomEvent<UniFormSubmitEventDetail> {
  constructor(value: UTSJSONObject)
}

/**
 * @package io.dcloud.uniapp.framework
 */
export class UniFormResetEventDetail {
  constructor()
}

/**
 * @package io.dcloud.uniapp.framework
 */
export class UniFormResetEvent extends UniCustomEvent<UniFormResetEventDetail> {
  constructor()
}

export type FormSubmitEvent = UniFormSubmitEvent
export const FormSubmitEvent: typeof UniFormSubmitEvent

export type FormSubmitEventDetail = UniFormSubmitEventDetail
export const FormSubmitEventDetail: typeof UniFormSubmitEventDetail

export type FormResetEvent = UniFormResetEvent
export const FormResetEvent: typeof UniFormResetEvent

export type FormResetEventDetail = UniFormResetEventDetail
export const FormResetEventDetail: typeof UniFormResetEventDetail
