// 本文件为自动构建生成
import {
  OnLaunchOptions as OnLaunchOptionsOrigin,
  GetLaunchOptionsSync as GetLaunchOptionsSyncOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type OnLaunchOptions = OnLaunchOptionsOrigin
  type GetLaunchOptionsSync = GetLaunchOptionsSyncOrigin
  interface Uni extends UniOrigin { }
}
