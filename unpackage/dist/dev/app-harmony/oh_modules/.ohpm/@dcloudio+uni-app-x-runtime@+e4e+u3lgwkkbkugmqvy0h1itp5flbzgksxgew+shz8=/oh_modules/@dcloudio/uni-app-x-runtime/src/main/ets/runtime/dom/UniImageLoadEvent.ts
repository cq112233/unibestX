import {
  UniImageLoadEvent as IUniImageLoadEvent,
  UniImageLoadEventDetail as IUniImageLoadEventDetail,
} from '@dcloudio/uni-app-x/types/native'
import { UniEvent } from './UniEvent'

export class UniImageLoadEventDetail implements IUniImageLoadEventDetail {
  width: number
  height: number

  constructor(data: IUniImageLoadEventDetail) {
    this.width = data.width
    this.height = data.height
  }
}

export class UniImageLoadEvent extends UniEvent implements IUniImageLoadEvent {
  detail: IUniImageLoadEventDetail

  constructor(type: string, detail: IUniImageLoadEventDetail) {
    super(type)
    this.detail = new UniImageLoadEventDetail(detail)
  }
}
