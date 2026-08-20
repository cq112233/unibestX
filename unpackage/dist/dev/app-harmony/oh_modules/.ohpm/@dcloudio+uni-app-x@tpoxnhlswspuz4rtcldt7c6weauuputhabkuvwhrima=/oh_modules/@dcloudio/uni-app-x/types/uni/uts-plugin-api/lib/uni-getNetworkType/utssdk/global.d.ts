// 本文件为自动构建生成
import {
  GetNetworkType as GetNetworkTypeOrigin,
  GetNetworkTypeSuccess as GetNetworkTypeSuccessOrigin,
  GetNetworkTypeSuccessCallback as GetNetworkTypeSuccessCallbackOrigin,
  GetNetworkTypeFail as GetNetworkTypeFailOrigin,
  GetNetworkTypeFailCallback as GetNetworkTypeFailCallbackOrigin,
  GetNetworkTypeComplete as GetNetworkTypeCompleteOrigin,
  GetNetworkTypeCompleteCallback as GetNetworkTypeCompleteCallbackOrigin,
  GetNetworkTypeOptions as GetNetworkTypeOptionsOrigin,
  OnNetworkStatusChangeCallbackResult as OnNetworkStatusChangeCallbackResultOrigin,
  OnNetworkStatusChangeCallback as OnNetworkStatusChangeCallbackOrigin,
  OnNetworkStatusChange as OnNetworkStatusChangeOrigin,
  OffNetworkStatusChange as OffNetworkStatusChangeOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type GetNetworkType = GetNetworkTypeOrigin
  type GetNetworkTypeSuccess = GetNetworkTypeSuccessOrigin
  type GetNetworkTypeSuccessCallback = GetNetworkTypeSuccessCallbackOrigin
  type GetNetworkTypeFail = GetNetworkTypeFailOrigin
  type GetNetworkTypeFailCallback = GetNetworkTypeFailCallbackOrigin
  type GetNetworkTypeComplete = GetNetworkTypeCompleteOrigin
  type GetNetworkTypeCompleteCallback = GetNetworkTypeCompleteCallbackOrigin
  type GetNetworkTypeOptions = GetNetworkTypeOptionsOrigin
  type OnNetworkStatusChangeCallbackResult = OnNetworkStatusChangeCallbackResultOrigin
  type OnNetworkStatusChangeCallback = OnNetworkStatusChangeCallbackOrigin
  type OnNetworkStatusChange = OnNetworkStatusChangeOrigin
  type OffNetworkStatusChange = OffNetworkStatusChangeOrigin
  interface Uni extends UniOrigin { }
}
