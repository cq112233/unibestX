// 本文件为自动构建生成
import {
  InstallApkSuccess as InstallApkSuccessOrigin,
  InstallApkComplete as InstallApkCompleteOrigin,
  InstallApkSuccessCallback as InstallApkSuccessCallbackOrigin,
  InstallApkErrorCode as InstallApkErrorCodeOrigin,
  InstallApkFail as InstallApkFailOrigin,
  InstallApkFailCallback as InstallApkFailCallbackOrigin,
  InstallApkCompleteCallback as InstallApkCompleteCallbackOrigin,
  InstallApkOptions as InstallApkOptionsOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type InstallApkSuccess = InstallApkSuccessOrigin
  type InstallApkComplete = InstallApkCompleteOrigin
  type InstallApkSuccessCallback = InstallApkSuccessCallbackOrigin
  type InstallApkErrorCode = InstallApkErrorCodeOrigin
  type InstallApkFail = InstallApkFailOrigin
  type InstallApkFailCallback = InstallApkFailCallbackOrigin
  type InstallApkCompleteCallback = InstallApkCompleteCallbackOrigin
  type InstallApkOptions = InstallApkOptionsOrigin
  interface Uni extends UniOrigin { }
}
