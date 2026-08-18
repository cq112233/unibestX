// 本文件为自动构建生成
import {
  RouteErrorCode as RouteErrorCodeOrigin,
  EventChannel as EventChannelOrigin,
  OpenDialogPageSuccess as OpenDialogPageSuccessOrigin,
  OpenDialogPageFail as OpenDialogPageFailOrigin,
  OpenDialogPageComplete as OpenDialogPageCompleteOrigin,
  OpenDialogPageOptions as OpenDialogPageOptionsOrigin,
  CloseDialogPageSuccess as CloseDialogPageSuccessOrigin,
  CloseDialogPageFail as CloseDialogPageFailOrigin,
  CloseDialogPageComplete as CloseDialogPageCompleteOrigin,
  CloseDialogPageOptions as CloseDialogPageOptionsOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type RouteErrorCode = RouteErrorCodeOrigin
  type EventChannel = EventChannelOrigin
  type OpenDialogPageSuccess = OpenDialogPageSuccessOrigin
  type OpenDialogPageFail = OpenDialogPageFailOrigin
  type OpenDialogPageComplete = OpenDialogPageCompleteOrigin
  type OpenDialogPageOptions = OpenDialogPageOptionsOrigin
  type CloseDialogPageSuccess = CloseDialogPageSuccessOrigin
  type CloseDialogPageFail = CloseDialogPageFailOrigin
  type CloseDialogPageComplete = CloseDialogPageCompleteOrigin
  type CloseDialogPageOptions = CloseDialogPageOptionsOrigin
  interface Uni extends UniOrigin { }
}
