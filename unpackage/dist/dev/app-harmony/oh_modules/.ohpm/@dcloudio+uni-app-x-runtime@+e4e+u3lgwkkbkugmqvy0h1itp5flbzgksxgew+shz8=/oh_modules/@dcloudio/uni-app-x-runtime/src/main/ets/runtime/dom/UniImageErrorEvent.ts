import {
  UniImageErrorEvent as IUniImageErrorEvent,
  UniImageErrorEventDetail as IUniImageErrorEventDetail,
} from '@dcloudio/uni-app-x/types/native'
import { UniEvent } from './UniEvent'

export class UniImageErrorEventDetail implements IUniImageErrorEventDetail {
  constructor(errMsg: string) {
    this.errMsg = errMsg
  }

  errMsg: string
}

export class UniImageErrorEvent extends UniEvent implements IUniImageErrorEvent {
  detail: IUniImageErrorEventDetail

  constructor(type: string, detail: IUniImageErrorEventDetail) {
    super(type)
    this.detail = new UniImageErrorEventDetail(detail.errMsg)
  }
}
