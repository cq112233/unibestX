import { UniEvent } from "./UniEvent"

export class UniTextareaLineChangeEventDetail {
  /**
   * 行数
   */
  lineCount: number
  /**
   * textarea的高度
   */
  heightRpx: number
  /**
   * textarea的高度
   */
  height: number

  /**
   * @internal
   */
  constructor(lineCount: number, heightRpx: number, height: number)
}

/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniTextareaLineChangeEvent extends UniEvent {
  detail: UniTextareaLineChangeEventDetail

  /**
   * @internal
   */
  constructor(type: string, detail: UniTextareaLineChangeEventDetail)
}

export type TextareaLineChangeEvent = UniTextareaLineChangeEvent
export const TextareaLineChangeEvent: typeof UniTextareaLineChangeEvent

export type TextareaLineChangeEventDetail = UniTextareaLineChangeEventDetail
export const TextareaLineChangeEventDetail: typeof UniTextareaLineChangeEventDetail