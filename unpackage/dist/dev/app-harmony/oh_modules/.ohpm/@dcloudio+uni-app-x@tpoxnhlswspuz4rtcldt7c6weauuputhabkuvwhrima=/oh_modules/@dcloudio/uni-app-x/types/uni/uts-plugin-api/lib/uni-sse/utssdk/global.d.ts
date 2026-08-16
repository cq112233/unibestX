// 本文件为自动构建生成
import {
  ConnectEventSourceOptions as ConnectEventSourceOptionsOrigin,
  ConnectEventSourceCallback as ConnectEventSourceCallbackOrigin,
  ConnectEventSourceErrorCallback as ConnectEventSourceErrorCallbackOrigin,
  ConnectEventSource as ConnectEventSourceOrigin,
  UniEventSource as UniEventSourceOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type ConnectEventSourceOptions = ConnectEventSourceOptionsOrigin
  type ConnectEventSourceCallback = ConnectEventSourceCallbackOrigin
  type ConnectEventSourceErrorCallback = ConnectEventSourceErrorCallbackOrigin
  type ConnectEventSource = ConnectEventSourceOrigin
  type UniEventSource = UniEventSourceOrigin
  interface Uni extends UniOrigin { }
}
