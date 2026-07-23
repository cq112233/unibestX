import {
  UniScrollToLowerEventDetail as IUniScrollToLowerEventDetail,
  UniScrollToLowerEvent as IUniScrollToLowerEvent
} from '@dcloudio/uni-app-x/types/native'
import { UniCustomEvent } from '../UniCustomEvent'

export class UniScrollToLowerEventDetail implements IUniScrollToLowerEventDetail {
  direction: string
  constructor(detail: IUniScrollToLowerEventDetail) {
    this.direction = detail.direction
  }
}

export class UniScrollToLowerEvent extends UniCustomEvent<UniScrollToLowerEventDetail> implements IUniScrollToLowerEvent {
  constructor(type: string, detail: UniScrollToLowerEventDetail) {
    super(type, detail)
  }
}