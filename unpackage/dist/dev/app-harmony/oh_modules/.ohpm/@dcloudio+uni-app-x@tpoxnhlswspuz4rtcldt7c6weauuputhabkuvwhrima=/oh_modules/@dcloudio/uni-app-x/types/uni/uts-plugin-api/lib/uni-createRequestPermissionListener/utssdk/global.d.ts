// 本文件为自动构建生成
import {
  RequestPermissionListenerRequestCallback as RequestPermissionListenerRequestCallbackOrigin,
  RequestPermissionListenerConfirmCallback as RequestPermissionListenerConfirmCallbackOrigin,
  RequestPermissionListenerCompleteCallback as RequestPermissionListenerCompleteCallbackOrigin,
  RequestPermissionListener as RequestPermissionListenerOrigin,
  CreateRequestPermissionListener as CreateRequestPermissionListenerOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type RequestPermissionListenerRequestCallback = RequestPermissionListenerRequestCallbackOrigin
  type RequestPermissionListenerConfirmCallback = RequestPermissionListenerConfirmCallbackOrigin
  type RequestPermissionListenerCompleteCallback = RequestPermissionListenerCompleteCallbackOrigin
  type RequestPermissionListener = RequestPermissionListenerOrigin
  type CreateRequestPermissionListener = CreateRequestPermissionListenerOrigin
  interface Uni extends UniOrigin { }
}
