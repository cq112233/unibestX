// 本文件为自动构建生成
import {
  ChooseLocationErrorCode as ChooseLocationErrorCodeOrigin,
  ChooseLocationSuccess as ChooseLocationSuccessOrigin,
  ChooseLocationFail as ChooseLocationFailOrigin,
  ChooseLocationComplete as ChooseLocationCompleteOrigin,
  ChooseLocationOptions as ChooseLocationOptionsOrigin,
  ChooseLocation as ChooseLocationOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type ChooseLocationErrorCode = ChooseLocationErrorCodeOrigin
  type ChooseLocationSuccess = ChooseLocationSuccessOrigin
  type ChooseLocationFail = ChooseLocationFailOrigin
  type ChooseLocationComplete = ChooseLocationCompleteOrigin
  type ChooseLocationOptions = ChooseLocationOptionsOrigin
  type ChooseLocation = ChooseLocationOrigin
  interface Uni extends UniOrigin { }
}
