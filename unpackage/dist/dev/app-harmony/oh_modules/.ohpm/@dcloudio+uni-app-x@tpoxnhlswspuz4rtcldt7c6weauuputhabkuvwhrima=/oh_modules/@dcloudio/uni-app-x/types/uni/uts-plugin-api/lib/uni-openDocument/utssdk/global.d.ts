// 本文件为自动构建生成
import {
  OpenDocumentSuccess as OpenDocumentSuccessOrigin,
  OpenDocumentFail as OpenDocumentFailOrigin,
  OpenDocumentErrorCode as OpenDocumentErrorCodeOrigin,
  IOpenDocumentError as IOpenDocumentErrorOrigin,
  OpenDocumentSuccessCallback as OpenDocumentSuccessCallbackOrigin,
  OpenDocumentFailCallback as OpenDocumentFailCallbackOrigin,
  OpenDocumentCompleteCallback as OpenDocumentCompleteCallbackOrigin,
  OpenDocumentSupportedTypes as OpenDocumentSupportedTypesOrigin,
  OpenDocumentOptions as OpenDocumentOptionsOrigin,
  OpenDocument as OpenDocumentOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type OpenDocumentSuccess = OpenDocumentSuccessOrigin
  type OpenDocumentFail = OpenDocumentFailOrigin
  type OpenDocumentErrorCode = OpenDocumentErrorCodeOrigin
  type IOpenDocumentError = IOpenDocumentErrorOrigin
  type OpenDocumentSuccessCallback = OpenDocumentSuccessCallbackOrigin
  type OpenDocumentFailCallback = OpenDocumentFailCallbackOrigin
  type OpenDocumentCompleteCallback = OpenDocumentCompleteCallbackOrigin
  type OpenDocumentSupportedTypes = OpenDocumentSupportedTypesOrigin
  type OpenDocumentOptions = OpenDocumentOptionsOrigin
  type OpenDocument = OpenDocumentOrigin
  interface Uni extends UniOrigin { }
}
