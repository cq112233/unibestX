import {
  UniScrollEventDetail as IUniScrollEventDetail,
  UniScrollEvent as IUniScrollEvent
} from '@dcloudio/uni-app-x/types/native'
import { UniCustomEvent } from '../UniCustomEvent'

export class UniScrollEventDetail implements IUniScrollEventDetail {
  scrollTop: number
  scrollLeft: number
  scrollHeight: number
  scrollWidth: number
  deltaY: number
  deltaX: number
  constructor(detail: IUniScrollEventDetail) {
    this.scrollTop = detail.scrollTop
    this.scrollLeft = detail.scrollLeft
    this.scrollHeight = detail.scrollHeight
    this.scrollWidth = detail.scrollWidth
    this.deltaY = detail.deltaY
    this.deltaX = detail.deltaX
  }
}

export class UniScrollEvent extends UniCustomEvent<UniScrollEventDetail> implements IUniScrollEvent {
  constructor(type: string, detail: IUniScrollEventDetail) {
    super(type, detail)
  }
}