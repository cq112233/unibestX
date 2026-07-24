import {
  UniWebViewDownloadEvent as IUniWebViewDownloadEvent,
  UniWebViewDownloadEventDetail as IUniWebViewDownloadEventDetail,
} from '@dcloudio/uni-app-x/types/native'
import { UniCustomEvent } from '../UniCustomEvent'

export class UniWebViewDownloadEventDetail implements IUniWebViewDownloadEventDetail {
  url: string
  userAgent: string
  contentDisposition: string
  mimetype: string
  contentLength: number

  constructor(detail: IUniWebViewDownloadEventDetail) {
    this.url = detail.url
    this.userAgent = detail.userAgent
    this.contentDisposition = detail.contentDisposition
    this.mimetype = detail.mimetype
    this.contentLength = detail.contentLength
  }
}

export class UniWebViewDownloadEvent
  extends UniCustomEvent<UniWebViewDownloadEventDetail>
implements IUniWebViewDownloadEvent {
  constructor(type: string, detail: IUniWebViewDownloadEventDetail) {
    super(type, detail)
  }
}
