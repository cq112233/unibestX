// 本文件为自动构建生成
import {
  OnAppCrashCallback as OnAppCrashCallbackOrigin,
  OnAppCrash as OnAppCrashOrigin,
  OffAppCrash as OffAppCrashOrigin,
  AppCrashInfo as AppCrashInfoOrigin,
  GetAppCrashInfoIOS as GetAppCrashInfoIOSOrigin,
  GetAppCrashInfo as GetAppCrashInfoOrigin,
  DeleteAppCrashInfo as DeleteAppCrashInfoOrigin,
  CreatAppCrash as CreatAppCrashOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type OnAppCrashCallback = OnAppCrashCallbackOrigin
  type OnAppCrash = OnAppCrashOrigin
  type OffAppCrash = OffAppCrashOrigin
  type AppCrashInfo = AppCrashInfoOrigin
  type GetAppCrashInfoIOS = GetAppCrashInfoIOSOrigin
  type GetAppCrashInfo = GetAppCrashInfoOrigin
  type DeleteAppCrashInfo = DeleteAppCrashInfoOrigin
  type CreatAppCrash = CreatAppCrashOrigin
  interface Uni extends UniOrigin { }
}
