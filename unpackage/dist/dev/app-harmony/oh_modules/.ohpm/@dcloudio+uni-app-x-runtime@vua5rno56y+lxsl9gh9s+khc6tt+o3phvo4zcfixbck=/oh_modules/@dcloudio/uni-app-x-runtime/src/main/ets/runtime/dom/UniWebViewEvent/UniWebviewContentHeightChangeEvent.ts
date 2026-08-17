import {
  UniWebViewContentHeightChangeEvent as IUniWebViewContentHeightChangeEvent,
  UniWebViewContentHeightChangeEventDetail as IUniWebViewContentHeightChangeEventDetail,
} from '@dcloudio/uni-app-x/types/native'
import { UniCustomEvent } from '../UniCustomEvent'

export class UniWebViewContentHeightChangeEventDetail implements IUniWebViewContentHeightChangeEventDetail {
  height: number

  constructor(height: number) {
    this.height = height
  }
}

export class UniWebViewContentHeightChangeEvent
  extends UniCustomEvent<UniWebViewContentHeightChangeEventDetail> implements IUniWebViewContentHeightChangeEvent {
  constructor(detail: UniWebViewContentHeightChangeEventDetail) {
    super('contentheightchange', detail)
  }
}
