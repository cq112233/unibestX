import { UniEvent } from './UniEvent'

export class UniRefresherEventDetail{
  dy: number
  constructor(dy: number)
}

/**
 * @package io.dcloud.uniapp.runtime
 */
export class UniRefresherEvent extends UniEvent {
  detail: UniRefresherEventDetail
  constructor(type: string, detail: UniRefresherEventDetail)
}


export type RefresherEvent = UniRefresherEvent
export const RefresherEvent: typeof UniRefresherEvent
