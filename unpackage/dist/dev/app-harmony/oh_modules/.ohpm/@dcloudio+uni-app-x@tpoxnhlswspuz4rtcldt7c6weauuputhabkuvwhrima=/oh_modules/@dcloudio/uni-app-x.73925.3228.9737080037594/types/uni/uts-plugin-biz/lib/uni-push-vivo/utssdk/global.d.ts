// 本文件为自动构建生成
import {
  MyApiOptions as MyApiOptionsOrigin,
  MyApiResult as MyApiResultOrigin,
  MyApiErrorCode as MyApiErrorCodeOrigin,
  MyApiFail as MyApiFailOrigin,
  MyApi as MyApiOrigin,
  MyApiSync as MyApiSyncOrigin,
} from './interface'

declare global {
  type MyApiOptions = MyApiOptionsOrigin
  type MyApiResult = MyApiResultOrigin
  type MyApiErrorCode = MyApiErrorCodeOrigin
  type MyApiFail = MyApiFailOrigin
  type MyApi = MyApiOrigin
  type MyApiSync = MyApiSyncOrigin
}
