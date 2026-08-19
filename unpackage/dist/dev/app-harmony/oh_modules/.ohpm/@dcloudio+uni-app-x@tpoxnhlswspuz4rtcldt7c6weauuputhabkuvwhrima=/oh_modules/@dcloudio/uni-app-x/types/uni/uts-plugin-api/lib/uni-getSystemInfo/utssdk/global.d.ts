// 本文件为自动构建生成
import {
  GetSystemInfo as GetSystemInfoOrigin,
  GetSystemInfoSync as GetSystemInfoSyncOrigin,
  GetWindowInfo as GetWindowInfoOrigin,
  SafeArea as SafeAreaOrigin,
  SafeAreaInsets as SafeAreaInsetsOrigin,
  CutoutRect as CutoutRectOrigin,
  GetSystemInfoResult as GetSystemInfoResultOrigin,
  GetSystemInfoSuccessCallback as GetSystemInfoSuccessCallbackOrigin,
  GetSystemInfoComplete as GetSystemInfoCompleteOrigin,
  GetSystemInfoCompleteCallback as GetSystemInfoCompleteCallbackOrigin,
  GetSystemInfoOptions as GetSystemInfoOptionsOrigin,
  GetWindowInfoResult as GetWindowInfoResultOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type GetSystemInfo = GetSystemInfoOrigin
  type GetSystemInfoSync = GetSystemInfoSyncOrigin
  type GetWindowInfo = GetWindowInfoOrigin
  type SafeArea = SafeAreaOrigin
  type SafeAreaInsets = SafeAreaInsetsOrigin
  type CutoutRect = CutoutRectOrigin
  type GetSystemInfoResult = GetSystemInfoResultOrigin
  type GetSystemInfoSuccessCallback = GetSystemInfoSuccessCallbackOrigin
  type GetSystemInfoComplete = GetSystemInfoCompleteOrigin
  type GetSystemInfoCompleteCallback = GetSystemInfoCompleteCallbackOrigin
  type GetSystemInfoOptions = GetSystemInfoOptionsOrigin
  type GetWindowInfoResult = GetWindowInfoResultOrigin
  interface Uni extends UniOrigin { }
}
