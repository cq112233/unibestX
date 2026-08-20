// 本文件为自动构建生成
import {
  AddInterceptorOptions as AddInterceptorOptionsOrigin,
  RemoveInterceptorOptions as RemoveInterceptorOptionsOrigin,
  AddInterceptor as AddInterceptorOrigin,
  RemoveInterceptor as RemoveInterceptorOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type AddInterceptorOptions = AddInterceptorOptionsOrigin
  type RemoveInterceptorOptions = RemoveInterceptorOptionsOrigin
  type AddInterceptor = AddInterceptorOrigin
  type RemoveInterceptor = RemoveInterceptorOrigin
  interface Uni extends UniOrigin { }
}
