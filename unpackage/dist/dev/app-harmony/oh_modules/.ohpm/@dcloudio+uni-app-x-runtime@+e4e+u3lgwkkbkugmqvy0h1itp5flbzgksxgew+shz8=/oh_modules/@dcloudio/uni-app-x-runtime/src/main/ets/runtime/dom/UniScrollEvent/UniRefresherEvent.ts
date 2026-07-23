import {
  UniRefresherEventDetail as IUniRefresherEventDetail,
  UniRefresherEvent as IUniRefresherEvent
} from '@dcloudio/uni-app-x/types/native'
import { UniCustomEvent } from '../UniCustomEvent'

export class UniRefresherEventDetail implements IUniRefresherEventDetail {
  dy: number
  constructor(dy: number) {
    this.dy = dy
  }
}

export class UniRefresherEvent extends UniCustomEvent<UniRefresherEventDetail> implements  IUniRefresherEvent {
  constructor(type: string, detail: IUniRefresherEventDetail) {
    super(type, detail)
  }
}