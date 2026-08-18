// 本文件为自动构建生成
import {
  RequestMerchantTransfer as RequestMerchantTransferOrigin,
  RequestMerchantTransferOptions as RequestMerchantTransferOptionsOrigin,
  RequestMerchantTransferCompleteCallback as RequestMerchantTransferCompleteCallbackOrigin,
  RequestMerchantTransferFailCallback as RequestMerchantTransferFailCallbackOrigin,
  RequestMerchantTransferSuccessCallback as RequestMerchantTransferSuccessCallbackOrigin,
  RequestMerchantTransferGeneralCallbackResult as RequestMerchantTransferGeneralCallbackResultOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type RequestMerchantTransfer = RequestMerchantTransferOrigin
  type RequestMerchantTransferOptions = RequestMerchantTransferOptionsOrigin
  type RequestMerchantTransferCompleteCallback = RequestMerchantTransferCompleteCallbackOrigin
  type RequestMerchantTransferFailCallback = RequestMerchantTransferFailCallbackOrigin
  type RequestMerchantTransferSuccessCallback = RequestMerchantTransferSuccessCallbackOrigin
  type RequestMerchantTransferGeneralCallbackResult = RequestMerchantTransferGeneralCallbackResultOrigin
  interface Uni extends UniOrigin { }
}
