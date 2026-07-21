// 本文件为自动构建生成
import {
  RequestPaymentFailImpl as RequestPaymentFailImplOrigin,
  UniPaymentProvider as UniPaymentProviderOrigin,
  UniPaymentProvider as UniPaymentProviderOrigin,
  RequestPaymentErrorCode as RequestPaymentErrorCodeOrigin,
  RequestPayment as RequestPaymentOrigin,
  RequestPaymentSuccess as RequestPaymentSuccessOrigin,
  RequestPaymentSuccessCallback as RequestPaymentSuccessCallbackOrigin,
  RequestPaymentFail as RequestPaymentFailOrigin,
  RequestPaymentFailCallback as RequestPaymentFailCallbackOrigin,
  RequestPaymentComplete as RequestPaymentCompleteOrigin,
  IRequestPaymentFail as IRequestPaymentFailOrigin,
  RequestPaymentCompleteCallback as RequestPaymentCompleteCallbackOrigin,
  RequestPaymentOptions as RequestPaymentOptionsOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type RequestPaymentFailImpl = RequestPaymentFailImplOrigin
  type UniPaymentProvider = UniPaymentProviderOrigin
  type UniPaymentProvider = UniPaymentProviderOrigin
  type RequestPaymentErrorCode = RequestPaymentErrorCodeOrigin
  type RequestPayment = RequestPaymentOrigin
  type RequestPaymentSuccess = RequestPaymentSuccessOrigin
  type RequestPaymentSuccessCallback = RequestPaymentSuccessCallbackOrigin
  type RequestPaymentFail = RequestPaymentFailOrigin
  type RequestPaymentFailCallback = RequestPaymentFailCallbackOrigin
  type RequestPaymentComplete = RequestPaymentCompleteOrigin
  type IRequestPaymentFail = IRequestPaymentFailOrigin
  type RequestPaymentCompleteCallback = RequestPaymentCompleteCallbackOrigin
  type RequestPaymentOptions = RequestPaymentOptionsOrigin
  interface Uni extends UniOrigin { }
}
