// 本文件为自动构建生成
import {
  Request as RequestOrigin,
  RequestOptions as RequestOptionsOrigin,
  RequestSuccess as RequestSuccessOrigin,
  RequestMethod as RequestMethodOrigin,
  RequestErrorCode as RequestErrorCodeOrigin,
  RequestFail as RequestFailOrigin,
  RequestSuccessCallback as RequestSuccessCallbackOrigin,
  RequestFailCallback as RequestFailCallbackOrigin,
  RequestCompleteCallback as RequestCompleteCallbackOrigin,
  RequestTaskOnChunkReceivedListenerResult as RequestTaskOnChunkReceivedListenerResultOrigin,
  RequestTaskOnChunkReceivedCallback as RequestTaskOnChunkReceivedCallbackOrigin,
  RequestTaskOnHeadersReceivedListenerResult as RequestTaskOnHeadersReceivedListenerResultOrigin,
  RequestTaskOnHeadersReceivedCallback as RequestTaskOnHeadersReceivedCallbackOrigin,
  RequestTask as RequestTaskOrigin,
  UploadFile as UploadFileOrigin,
  UploadFileOptionFiles as UploadFileOptionFilesOrigin,
  UploadFileSuccess as UploadFileSuccessOrigin,
  UploadFileSuccessCallback as UploadFileSuccessCallbackOrigin,
  UploadFileFail as UploadFileFailOrigin,
  UploadFileFailCallback as UploadFileFailCallbackOrigin,
  UploadFileCompleteCallback as UploadFileCompleteCallbackOrigin,
  UploadFileOptions as UploadFileOptionsOrigin,
  OnProgressUpdateResult as OnProgressUpdateResultOrigin,
  UploadFileProgressUpdateCallback as UploadFileProgressUpdateCallbackOrigin,
  UploadTask as UploadTaskOrigin,
  DownloadFile as DownloadFileOrigin,
  DownloadFileSuccess as DownloadFileSuccessOrigin,
  DownloadFileSuccessCallback as DownloadFileSuccessCallbackOrigin,
  DownloadFileFail as DownloadFileFailOrigin,
  DownloadFileFailCallback as DownloadFileFailCallbackOrigin,
  DownloadFileComplete as DownloadFileCompleteOrigin,
  DownloadFileCompleteCallback as DownloadFileCompleteCallbackOrigin,
  DownloadFileOptions as DownloadFileOptionsOrigin,
  OnProgressDownloadResult as OnProgressDownloadResultOrigin,
  DownloadFileProgressUpdateCallback as DownloadFileProgressUpdateCallbackOrigin,
  DownloadTask as DownloadTaskOrigin,
  ConfigMTLS as ConfigMTLSOrigin,
  Certificate as CertificateOrigin,
  ConfigMTLSSuccess as ConfigMTLSSuccessOrigin,
  ConfigMTLSSuccessCallback as ConfigMTLSSuccessCallbackOrigin,
  ConfigMTLSFail as ConfigMTLSFailOrigin,
  ConfigMTLSFailCallback as ConfigMTLSFailCallbackOrigin,
  ConfigMTLSComplete as ConfigMTLSCompleteOrigin,
  ConfigMTLSCompleteCallback as ConfigMTLSCompleteCallbackOrigin,
  ConfigMTLSOptions as ConfigMTLSOptionsOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type Request<T> = RequestOrigin<T>
  type RequestOptions<T> = RequestOptionsOrigin<T>
  type RequestSuccess<T> = RequestSuccessOrigin<T>
  type RequestMethod = RequestMethodOrigin
  type RequestErrorCode = RequestErrorCodeOrigin
  type RequestFail = RequestFailOrigin
  type RequestSuccessCallback<T> = RequestSuccessCallbackOrigin<T>
  type RequestFailCallback = RequestFailCallbackOrigin
  type RequestCompleteCallback = RequestCompleteCallbackOrigin
  type RequestTaskOnChunkReceivedListenerResult = RequestTaskOnChunkReceivedListenerResultOrigin
  type RequestTaskOnChunkReceivedCallback = RequestTaskOnChunkReceivedCallbackOrigin
  type RequestTaskOnHeadersReceivedListenerResult = RequestTaskOnHeadersReceivedListenerResultOrigin
  type RequestTaskOnHeadersReceivedCallback = RequestTaskOnHeadersReceivedCallbackOrigin
  type RequestTask = RequestTaskOrigin
  type UploadFile = UploadFileOrigin
  type UploadFileOptionFiles = UploadFileOptionFilesOrigin
  type UploadFileSuccess = UploadFileSuccessOrigin
  type UploadFileSuccessCallback = UploadFileSuccessCallbackOrigin
  type UploadFileFail = UploadFileFailOrigin
  type UploadFileFailCallback = UploadFileFailCallbackOrigin
  type UploadFileCompleteCallback = UploadFileCompleteCallbackOrigin
  type UploadFileOptions = UploadFileOptionsOrigin
  type OnProgressUpdateResult = OnProgressUpdateResultOrigin
  type UploadFileProgressUpdateCallback = UploadFileProgressUpdateCallbackOrigin
  type UploadTask = UploadTaskOrigin
  type DownloadFile = DownloadFileOrigin
  type DownloadFileSuccess = DownloadFileSuccessOrigin
  type DownloadFileSuccessCallback = DownloadFileSuccessCallbackOrigin
  type DownloadFileFail = DownloadFileFailOrigin
  type DownloadFileFailCallback = DownloadFileFailCallbackOrigin
  type DownloadFileComplete = DownloadFileCompleteOrigin
  type DownloadFileCompleteCallback = DownloadFileCompleteCallbackOrigin
  type DownloadFileOptions = DownloadFileOptionsOrigin
  type OnProgressDownloadResult = OnProgressDownloadResultOrigin
  type DownloadFileProgressUpdateCallback = DownloadFileProgressUpdateCallbackOrigin
  type DownloadTask = DownloadTaskOrigin
  type ConfigMTLS = ConfigMTLSOrigin
  type Certificate = CertificateOrigin
  type ConfigMTLSSuccess = ConfigMTLSSuccessOrigin
  type ConfigMTLSSuccessCallback = ConfigMTLSSuccessCallbackOrigin
  type ConfigMTLSFail = ConfigMTLSFailOrigin
  type ConfigMTLSFailCallback = ConfigMTLSFailCallbackOrigin
  type ConfigMTLSComplete = ConfigMTLSCompleteOrigin
  type ConfigMTLSCompleteCallback = ConfigMTLSCompleteCallbackOrigin
  type ConfigMTLSOptions = ConfigMTLSOptionsOrigin
  interface Uni extends UniOrigin { }
}
