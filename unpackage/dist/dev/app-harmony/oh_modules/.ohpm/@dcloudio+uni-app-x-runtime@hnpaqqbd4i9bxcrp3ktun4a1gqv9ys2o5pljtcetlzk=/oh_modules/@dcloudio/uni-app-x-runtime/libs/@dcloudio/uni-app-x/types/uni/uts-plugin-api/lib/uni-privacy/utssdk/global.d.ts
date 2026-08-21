// 本文件为自动构建生成
import {
  OnPrivacyAuthorizationChange as OnPrivacyAuthorizationChangeOrigin,
  OffPrivacyAuthorizationChange as OffPrivacyAuthorizationChangeOrigin,
  OnPrivacyAuthorizationChangeCallback as OnPrivacyAuthorizationChangeCallbackOrigin,
  PrivacyChangeResult as PrivacyChangeResultOrigin,
  GetPrivacySetting as GetPrivacySettingOrigin,
  GetPrivacySettingSuccessCallback as GetPrivacySettingSuccessCallbackOrigin,
  GetPrivacySettingFailCallback as GetPrivacySettingFailCallbackOrigin,
  GetPrivacySettingCompleteCallback as GetPrivacySettingCompleteCallbackOrigin,
  ResetPrivacyAuthorization as ResetPrivacyAuthorizationOrigin,
  GetPrivacySettingSuccessResult as GetPrivacySettingSuccessResultOrigin,
  GetPrivacySettingOptions as GetPrivacySettingOptionsOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type OnPrivacyAuthorizationChange = OnPrivacyAuthorizationChangeOrigin
  type OffPrivacyAuthorizationChange = OffPrivacyAuthorizationChangeOrigin
  type OnPrivacyAuthorizationChangeCallback = OnPrivacyAuthorizationChangeCallbackOrigin
  type PrivacyChangeResult = PrivacyChangeResultOrigin
  type GetPrivacySetting = GetPrivacySettingOrigin
  type GetPrivacySettingSuccessCallback = GetPrivacySettingSuccessCallbackOrigin
  type GetPrivacySettingFailCallback = GetPrivacySettingFailCallbackOrigin
  type GetPrivacySettingCompleteCallback = GetPrivacySettingCompleteCallbackOrigin
  type ResetPrivacyAuthorization = ResetPrivacyAuthorizationOrigin
  type GetPrivacySettingSuccessResult = GetPrivacySettingSuccessResultOrigin
  type GetPrivacySettingOptions = GetPrivacySettingOptionsOrigin
  interface Uni extends UniOrigin { }
}
