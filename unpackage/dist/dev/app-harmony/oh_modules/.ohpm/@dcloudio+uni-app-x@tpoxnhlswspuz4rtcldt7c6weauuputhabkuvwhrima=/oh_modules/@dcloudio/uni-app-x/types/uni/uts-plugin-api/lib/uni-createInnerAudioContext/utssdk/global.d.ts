// 本文件为自动构建生成
import {
  CreateInnerAudioContext as CreateInnerAudioContextOrigin,
  SetInnerAudioOptionSuccess as SetInnerAudioOptionSuccessOrigin,
  SetInnerAudioOptionSuccessCallback as SetInnerAudioOptionSuccessCallbackOrigin,
  SetInnerAudioOptionFail as SetInnerAudioOptionFailOrigin,
  SetInnerAudioOptionFailCallback as SetInnerAudioOptionFailCallbackOrigin,
  SetInnerAudioOptionComplete as SetInnerAudioOptionCompleteOrigin,
  SetInnerAudioOptionCompleteCallback as SetInnerAudioOptionCompleteCallbackOrigin,
  SetInnerAudioOptionOptions as SetInnerAudioOptionOptionsOrigin,
  SetInnerAudioOption as SetInnerAudioOptionOrigin,
  InnerAudioContext as InnerAudioContextOrigin,
  CreateInnerAudioContextErrorCode as CreateInnerAudioContextErrorCodeOrigin,
  ICreateInnerAudioContextFail as ICreateInnerAudioContextFailOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type CreateInnerAudioContext = CreateInnerAudioContextOrigin
  type SetInnerAudioOptionSuccess = SetInnerAudioOptionSuccessOrigin
  type SetInnerAudioOptionSuccessCallback = SetInnerAudioOptionSuccessCallbackOrigin
  type SetInnerAudioOptionFail = SetInnerAudioOptionFailOrigin
  type SetInnerAudioOptionFailCallback = SetInnerAudioOptionFailCallbackOrigin
  type SetInnerAudioOptionComplete = SetInnerAudioOptionCompleteOrigin
  type SetInnerAudioOptionCompleteCallback = SetInnerAudioOptionCompleteCallbackOrigin
  type SetInnerAudioOptionOptions = SetInnerAudioOptionOptionsOrigin
  type SetInnerAudioOption = SetInnerAudioOptionOrigin
  type InnerAudioContext = InnerAudioContextOrigin
  type CreateInnerAudioContextErrorCode = CreateInnerAudioContextErrorCodeOrigin
  type ICreateInnerAudioContextFail = ICreateInnerAudioContextFailOrigin
  interface Uni extends UniOrigin { }
}
