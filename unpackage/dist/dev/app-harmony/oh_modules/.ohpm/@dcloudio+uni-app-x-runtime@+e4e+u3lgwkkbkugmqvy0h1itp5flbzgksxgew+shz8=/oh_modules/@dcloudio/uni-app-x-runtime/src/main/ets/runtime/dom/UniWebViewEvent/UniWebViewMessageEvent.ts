import {
  UniWebViewMessageEvent as IUniWebViewMessageEvent,
  UniWebViewMessageEventDetail as IUniWebViewMessageEventDetail,
} from '@dcloudio/uni-app-x/types/native'
import { UniCustomEvent } from '../UniCustomEvent'

export class UniWebViewMessageEventDetail implements IUniWebViewMessageEventDetail {
  public data: Array<ESObject>

  constructor(detail: IUniWebViewMessageEventDetail) {
    this.data = detail.data
  }
}

export class UniWebViewMessageEvent
  extends UniCustomEvent<UniWebViewMessageEventDetail>
implements IUniWebViewMessageEvent {
  constructor(type: string, detail: IUniWebViewMessageEventDetail) {
    super(type, detail)
  }
}
