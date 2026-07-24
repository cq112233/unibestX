// 本文件为自动构建生成
import {
  GetProviderFailImpl as GetProviderFailImplOrigin,
  GetProviderSuccess as GetProviderSuccessOrigin,
  GetProviderSyncSuccess as GetProviderSyncSuccessOrigin,
  GetProviderSync as GetProviderSyncOrigin,
  GetProviderSyncOptions as GetProviderSyncOptionsOrigin,
  GetProviderSuccessCallback as GetProviderSuccessCallbackOrigin,
  GetProviderFail as GetProviderFailOrigin,
  GetProviderFailCallback as GetProviderFailCallbackOrigin,
  GetProviderComplete as GetProviderCompleteOrigin,
  GetProviderCompleteCallback as GetProviderCompleteCallbackOrigin,
  GetProviderOptions as GetProviderOptionsOrigin,
  GetProvider as GetProviderOrigin,
  ProviderErrorCode as ProviderErrorCodeOrigin,
  IGetProviderFail as IGetProviderFailOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type GetProviderFailImpl = GetProviderFailImplOrigin
  type GetProviderSuccess = GetProviderSuccessOrigin
  type GetProviderSyncSuccess = GetProviderSyncSuccessOrigin
  type GetProviderSync = GetProviderSyncOrigin
  type GetProviderSyncOptions = GetProviderSyncOptionsOrigin
  type GetProviderSuccessCallback = GetProviderSuccessCallbackOrigin
  type GetProviderFail = GetProviderFailOrigin
  type GetProviderFailCallback = GetProviderFailCallbackOrigin
  type GetProviderComplete = GetProviderCompleteOrigin
  type GetProviderCompleteCallback = GetProviderCompleteCallbackOrigin
  type GetProviderOptions = GetProviderOptionsOrigin
  type GetProvider = GetProviderOrigin
  type ProviderErrorCode = ProviderErrorCodeOrigin
  type IGetProviderFail = IGetProviderFailOrigin
  interface Uni extends UniOrigin { }
}
