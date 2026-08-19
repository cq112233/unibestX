// 本文件为自动构建生成
import {
  ScanCodeSuccess as ScanCodeSuccessOrigin,
  ScanCodeFail as ScanCodeFailOrigin,
  ScanCodeSuccessCallback as ScanCodeSuccessCallbackOrigin,
  ScanCodeFailCallback as ScanCodeFailCallbackOrigin,
  ScanCodeCompleteCallback as ScanCodeCompleteCallbackOrigin,
  ScanCodeSupportedTypes as ScanCodeSupportedTypesOrigin,
  ScanCodeOptions as ScanCodeOptionsOrigin,
  ScanCode as ScanCodeOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type ScanCodeSuccess = ScanCodeSuccessOrigin
  type ScanCodeFail = ScanCodeFailOrigin
  type ScanCodeSuccessCallback = ScanCodeSuccessCallbackOrigin
  type ScanCodeFailCallback = ScanCodeFailCallbackOrigin
  type ScanCodeCompleteCallback = ScanCodeCompleteCallbackOrigin
  type ScanCodeSupportedTypes = ScanCodeSupportedTypesOrigin
  type ScanCodeOptions = ScanCodeOptionsOrigin
  type ScanCode = ScanCodeOrigin
  interface Uni extends UniOrigin { }
}
