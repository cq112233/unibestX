// 本文件为自动构建生成
import {
  PullDownRefreshErrorCode as PullDownRefreshErrorCodeOrigin,
  StartPullDownRefreshFail as StartPullDownRefreshFailOrigin,
  StartPullDownRefreshOptions as StartPullDownRefreshOptionsOrigin,
  StartPullDownRefreshSuccess as StartPullDownRefreshSuccessOrigin,
  StartPullDownRefreshSuccessCallback as StartPullDownRefreshSuccessCallbackOrigin,
  StartPullDownRefreshFailCallback as StartPullDownRefreshFailCallbackOrigin,
  StartPullDownRefreshComplete as StartPullDownRefreshCompleteOrigin,
  StartPullDownRefreshCompleteCallback as StartPullDownRefreshCompleteCallbackOrigin,
  StartPullDownRefresh as StartPullDownRefreshOrigin,
  StopPullDownRefresh as StopPullDownRefreshOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type PullDownRefreshErrorCode = PullDownRefreshErrorCodeOrigin
  type StartPullDownRefreshFail = StartPullDownRefreshFailOrigin
  type StartPullDownRefreshOptions = StartPullDownRefreshOptionsOrigin
  type StartPullDownRefreshSuccess = StartPullDownRefreshSuccessOrigin
  type StartPullDownRefreshSuccessCallback = StartPullDownRefreshSuccessCallbackOrigin
  type StartPullDownRefreshFailCallback = StartPullDownRefreshFailCallbackOrigin
  type StartPullDownRefreshComplete = StartPullDownRefreshCompleteOrigin
  type StartPullDownRefreshCompleteCallback = StartPullDownRefreshCompleteCallbackOrigin
  type StartPullDownRefresh = StartPullDownRefreshOrigin
  type StopPullDownRefresh = StopPullDownRefreshOrigin
  interface Uni extends UniOrigin { }
}
