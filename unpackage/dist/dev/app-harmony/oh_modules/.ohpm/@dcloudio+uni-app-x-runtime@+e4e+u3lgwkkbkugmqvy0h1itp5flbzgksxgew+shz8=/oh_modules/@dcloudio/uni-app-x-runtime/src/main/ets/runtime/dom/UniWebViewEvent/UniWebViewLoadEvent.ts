import {
  UniWebViewLoadEvent as IUniWebViewLoadEvent,
  UniWebViewLoadEventDetail as IUniWebViewLoadEventDetail,
} from '@dcloudio/uni-app-x/types/native'
import { UniCustomEvent } from '../UniCustomEvent'

export class UniWebViewLoadEventDetail implements IUniWebViewLoadEventDetail {
  public url: string
  public src: string

  constructor(detail: IUniWebViewLoadEventDetail) {
    this.url = detail.url
    this.src = detail.src
  }
}

export class UniWebViewLoadEvent
  extends UniCustomEvent<UniWebViewLoadEventDetail>
implements IUniWebViewLoadEvent {
  constructor(type: string, detail: IUniWebViewLoadEventDetail) {
    super(type, detail)
  }
}
