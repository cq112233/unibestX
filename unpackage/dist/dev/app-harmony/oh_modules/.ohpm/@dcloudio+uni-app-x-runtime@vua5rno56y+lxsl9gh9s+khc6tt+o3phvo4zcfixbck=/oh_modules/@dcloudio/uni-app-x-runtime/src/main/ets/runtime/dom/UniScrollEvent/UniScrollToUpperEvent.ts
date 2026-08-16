import {
  UniScrollToUpperEventDetail as IUniScrollToUpperEventDetail,
  UniScrollToUpperEvent as IUniScrollToUpperEvent
} from '@dcloudio/uni-app-x/types/native'
import { UniCustomEvent } from '../UniCustomEvent'

export class UniScrollToUpperEventDetail implements IUniScrollToUpperEventDetail {
  direction: string
  constructor(detail: IUniScrollToUpperEventDetail) {
    this.direction = detail.direction
  }
}

export class UniScrollToUpperEvent extends UniCustomEvent<UniScrollToUpperEventDetail> implements IUniScrollToUpperEvent {
  constructor(type: string, detail: UniScrollToUpperEventDetail) {
    super(type, detail)
  }
}