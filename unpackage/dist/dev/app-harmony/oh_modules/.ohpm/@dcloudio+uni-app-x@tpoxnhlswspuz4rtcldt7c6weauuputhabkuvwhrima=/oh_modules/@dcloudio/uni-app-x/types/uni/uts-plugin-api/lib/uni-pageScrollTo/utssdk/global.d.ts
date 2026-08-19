// 本文件为自动构建生成
import {
  PageScrollToErrorCode as PageScrollToErrorCodeOrigin,
  PageScrollToFail as PageScrollToFailOrigin,
  PageScrollToSuccess as PageScrollToSuccessOrigin,
  PageScrollToSuccessCallback as PageScrollToSuccessCallbackOrigin,
  PageScrollToFailCallback as PageScrollToFailCallbackOrigin,
  PageScrollToComplete as PageScrollToCompleteOrigin,
  PageScrollToCompleteCallback as PageScrollToCompleteCallbackOrigin,
  PageScrollToOptions as PageScrollToOptionsOrigin,
  PageScrollTo as PageScrollToOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type PageScrollToErrorCode = PageScrollToErrorCodeOrigin
  type PageScrollToFail = PageScrollToFailOrigin
  type PageScrollToSuccess = PageScrollToSuccessOrigin
  type PageScrollToSuccessCallback = PageScrollToSuccessCallbackOrigin
  type PageScrollToFailCallback = PageScrollToFailCallbackOrigin
  type PageScrollToComplete = PageScrollToCompleteOrigin
  type PageScrollToCompleteCallback = PageScrollToCompleteCallbackOrigin
  type PageScrollToOptions = PageScrollToOptionsOrigin
  type PageScrollTo = PageScrollToOrigin
  interface Uni extends UniOrigin { }
}
