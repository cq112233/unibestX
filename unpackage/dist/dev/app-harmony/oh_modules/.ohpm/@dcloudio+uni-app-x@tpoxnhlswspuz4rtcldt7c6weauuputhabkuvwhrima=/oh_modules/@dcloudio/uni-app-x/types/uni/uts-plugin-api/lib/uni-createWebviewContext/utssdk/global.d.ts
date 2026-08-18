// 本文件为自动构建生成
import {
  CreateWebviewContext as CreateWebviewContextOrigin,
  UniWebviewContextLoadDataOptions as UniWebviewContextLoadDataOptionsOrigin,
  WebviewContext as WebviewContextOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type CreateWebviewContext = CreateWebviewContextOrigin
  type UniWebviewContextLoadDataOptions = UniWebviewContextLoadDataOptionsOrigin
  type WebviewContext = WebviewContextOrigin
  interface Uni extends UniOrigin { }
}
