import {
  UniCloudCallFunctionOptions as UniCloudCallFunctionOptionsOrigin,
  UniCloudCallFunctionResult as UniCloudCallFunctionResultOrigin,
  UniCloudChooseAndUploadFileOptions as UniCloudChooseAndUploadFileOptionsOrigin,
  UniCloudChooseAndUploadFileResult as UniCloudChooseAndUploadFileResultOrigin,
  UniCloudChooseAndUploadFileItem as UniCloudChooseAndUploadFileItemOrigin,
  UniCloudChooseAndUploadFileProgressEvent as UniCloudChooseAndUploadFileProgressEventOrigin,
  UniCloudDBAddResult as UniCloudDBAddResultOrigin,
  UniCloudDBBatchAddResult as UniCloudDBBatchAddResultOrigin,
  UniCloudDBCountResult as UniCloudDBCountResultOrigin,
  UniCloudDBFilter as UniCloudDBFilterOrigin,
  UniCloudDBGetResult as UniCloudDBGetResultOrigin,
  UniCloudDBQuery as UniCloudDBQueryOrigin,
  UniCloudDBRemoveResult as UniCloudDBRemoveResultOrigin,
  UniCloudDBUpdateResult as UniCloudDBUpdateResultOrigin,
  UniCloudDBMultiSendResultItem as UniCloudDBMultiSendResultItemOrigin,
  UniCloudDBMultiSendResult as UniCloudDBMultiSendResultOrigin,
  UniCloudError as UniCloudErrorOrigin,
  UniCloudGetTempFileURLOptions as UniCloudGetTempFileURLOptionsOrigin,
  UniCloudGetTempFileURLResult as UniCloudGetTempFileURLResultOrigin,
  UniCloudGetTempFileURLResultItem as UniCloudGetTempFileURLResultItemOrigin,
  UniCloudImportObjectErrorOptions as UniCloudImportObjectErrorOptionsOrigin,
  UniCloudImportObjectLoadingOptions as UniCloudImportObjectLoadingOptionsOrigin,
  UniCloudImportObjectOptions as UniCloudImportObjectOptionsOrigin,
  UniCloudInitOptions as UniCloudInitOptionsOrigin,
  UniCloudRefreshTokenEvent as UniCloudRefreshTokenEventOrigin,
  UniCloudResponseEvent as UniCloudResponseEventOrigin,
  UniCloudUploadFileOptions as UniCloudUploadFileOptionsOrigin,
  UniCloudUploadFileResult as UniCloudUploadFileResultOrigin,
  UniCloudUploadProgress as UniCloudUploadProgressOrigin,
  UniCloudUserInfo as UniCloudUserInfoOrigin,
  uniCloud as uniCloudOrigin
} from './interface'

declare global {
  type UniCloudCallFunctionOptions = UniCloudCallFunctionOptionsOrigin
  type UniCloudCallFunctionResult = UniCloudCallFunctionResultOrigin
  type UniCloudChooseAndUploadFileOptions = UniCloudChooseAndUploadFileOptionsOrigin
  type UniCloudChooseAndUploadFileResult = UniCloudChooseAndUploadFileResultOrigin
  type UniCloudChooseAndUploadFileItem = UniCloudChooseAndUploadFileItemOrigin
  type UniCloudChooseAndUploadFileProgressEvent = UniCloudChooseAndUploadFileProgressEventOrigin
  type UniCloudDBAddResult = UniCloudDBAddResultOrigin
  type UniCloudDBBatchAddResult = UniCloudDBBatchAddResultOrigin
  type UniCloudDBCountResult = UniCloudDBCountResultOrigin
  type UniCloudDBFilter = UniCloudDBFilterOrigin
  type UniCloudDBGetResult = UniCloudDBGetResultOrigin
  type UniCloudDBQuery = UniCloudDBQueryOrigin
  type UniCloudDBRemoveResult = UniCloudDBRemoveResultOrigin
  type UniCloudDBUpdateResult = UniCloudDBUpdateResultOrigin
  type UniCloudDBMultiSendResultItem = UniCloudDBMultiSendResultItemOrigin
  type UniCloudDBMultiSendResult = UniCloudDBMultiSendResultOrigin
  type UniCloudError = UniCloudErrorOrigin
  type UniCloudGetTempFileURLOptions = UniCloudGetTempFileURLOptionsOrigin
  type UniCloudGetTempFileURLResult = UniCloudGetTempFileURLResultOrigin
  type UniCloudGetTempFileURLResultItem = UniCloudGetTempFileURLResultItemOrigin
  type UniCloudImportObjectErrorOptions = UniCloudImportObjectErrorOptionsOrigin
  type UniCloudImportObjectLoadingOptions = UniCloudImportObjectLoadingOptionsOrigin
  type UniCloudImportObjectOptions = UniCloudImportObjectOptionsOrigin
  type UniCloudInitOptions = UniCloudInitOptionsOrigin
  type UniCloudRefreshTokenEvent = UniCloudRefreshTokenEventOrigin
  type UniCloudResponseEvent = UniCloudResponseEventOrigin
  type UniCloudUploadFileOptions = UniCloudUploadFileOptionsOrigin
  type UniCloudUploadFileResult = UniCloudUploadFileResultOrigin
  type UniCloudUploadProgress = UniCloudUploadProgressOrigin
  type UniCloudUserInfo = UniCloudUserInfoOrigin
  const uniCloud: typeof uniCloudOrigin
}
