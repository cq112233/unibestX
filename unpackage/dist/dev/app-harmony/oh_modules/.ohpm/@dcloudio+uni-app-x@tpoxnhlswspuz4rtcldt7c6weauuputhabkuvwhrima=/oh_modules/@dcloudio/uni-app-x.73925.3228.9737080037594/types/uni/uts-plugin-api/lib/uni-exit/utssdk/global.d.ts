// 本文件为自动构建生成
import {
  ExitSuccess as ExitSuccessOrigin,
  ExitErrorCode as ExitErrorCodeOrigin,
  IExitError as IExitErrorOrigin,
  ExitFail as ExitFailOrigin,
  ExitSuccessCallback as ExitSuccessCallbackOrigin,
  ExitFailCallback as ExitFailCallbackOrigin,
  ExitCompleteCallback as ExitCompleteCallbackOrigin,
  ExitOptions as ExitOptionsOrigin,
  Exit as ExitOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type ExitSuccess = ExitSuccessOrigin
  type ExitErrorCode = ExitErrorCodeOrigin
  type IExitError = IExitErrorOrigin
  type ExitFail = ExitFailOrigin
  type ExitSuccessCallback = ExitSuccessCallbackOrigin
  type ExitFailCallback = ExitFailCallbackOrigin
  type ExitCompleteCallback = ExitCompleteCallbackOrigin
  type ExitOptions = ExitOptionsOrigin
  type Exit = ExitOrigin
  interface Uni extends UniOrigin { }
}
