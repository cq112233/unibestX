// 本文件为自动构建生成
import {
  MakePhoneCall as MakePhoneCallOrigin,
  MakePhoneCallSuccess as MakePhoneCallSuccessOrigin,
  MakePhoneCallSuccessCallback as MakePhoneCallSuccessCallbackOrigin,
  MakePhoneCallErrorCode as MakePhoneCallErrorCodeOrigin,
  IMakePhoneCallError as IMakePhoneCallErrorOrigin,
  MakePhoneCallFail as MakePhoneCallFailOrigin,
  MakePhoneCallFailCallback as MakePhoneCallFailCallbackOrigin,
  MakePhoneCallComplete as MakePhoneCallCompleteOrigin,
  MakePhoneCallCompleteCallback as MakePhoneCallCompleteCallbackOrigin,
  MakePhoneCallOptions as MakePhoneCallOptionsOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type MakePhoneCall = MakePhoneCallOrigin
  type MakePhoneCallSuccess = MakePhoneCallSuccessOrigin
  type MakePhoneCallSuccessCallback = MakePhoneCallSuccessCallbackOrigin
  type MakePhoneCallErrorCode = MakePhoneCallErrorCodeOrigin
  type IMakePhoneCallError = IMakePhoneCallErrorOrigin
  type MakePhoneCallFail = MakePhoneCallFailOrigin
  type MakePhoneCallFailCallback = MakePhoneCallFailCallbackOrigin
  type MakePhoneCallComplete = MakePhoneCallCompleteOrigin
  type MakePhoneCallCompleteCallback = MakePhoneCallCompleteCallbackOrigin
  type MakePhoneCallOptions = MakePhoneCallOptionsOrigin
  interface Uni extends UniOrigin { }
}
