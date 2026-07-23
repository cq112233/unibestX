import { UniEvent } from "./UniEvent";

/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniCustomEventOptions<T>{
  detail: T
  constructor (detail: T)
}

/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniCustomEvent<T> extends UniEvent {
  detail: T
  constructor (type: string, detail: T)
  constructor (type: string, options: UniCustomEventOptions<T>)
}


export type CustomEventOptions<T> = UniCustomEventOptions<T>
export const CustomEventOptions: typeof UniCustomEventOptions

export type CustomEvent<T> = UniCustomEvent<T>
export const CustomEvent: typeof UniCustomEvent