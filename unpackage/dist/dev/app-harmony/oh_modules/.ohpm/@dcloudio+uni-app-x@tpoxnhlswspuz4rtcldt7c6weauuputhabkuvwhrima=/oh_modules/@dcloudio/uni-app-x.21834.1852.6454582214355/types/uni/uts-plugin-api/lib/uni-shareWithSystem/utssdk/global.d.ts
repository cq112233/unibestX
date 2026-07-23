// 本文件为自动构建生成
import {
  ShareWithSystemSuccess as ShareWithSystemSuccessOrigin,
  ShareWithSystemFail as ShareWithSystemFailOrigin,
  IShareWithSystemFail as IShareWithSystemFailOrigin,
  ShareWithSystemErrorCode as ShareWithSystemErrorCodeOrigin,
  ShareWithSystemSuccessCallback as ShareWithSystemSuccessCallbackOrigin,
  ShareWithSystemFailCallback as ShareWithSystemFailCallbackOrigin,
  ShareWithSystemCallback as ShareWithSystemCallbackOrigin,
  ShareWithSystemOptions as ShareWithSystemOptionsOrigin,
  ShareWithSystem as ShareWithSystemOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type ShareWithSystemSuccess = ShareWithSystemSuccessOrigin
  type ShareWithSystemFail = ShareWithSystemFailOrigin
  type IShareWithSystemFail = IShareWithSystemFailOrigin
  type ShareWithSystemErrorCode = ShareWithSystemErrorCodeOrigin
  type ShareWithSystemSuccessCallback = ShareWithSystemSuccessCallbackOrigin
  type ShareWithSystemFailCallback = ShareWithSystemFailCallbackOrigin
  type ShareWithSystemCallback = ShareWithSystemCallbackOrigin
  type ShareWithSystemOptions = ShareWithSystemOptionsOrigin
  type ShareWithSystem = ShareWithSystemOrigin
  interface Uni extends UniOrigin { }
}
