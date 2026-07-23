// 本文件为自动构建生成
import {
  GetAppAuthorizeSetting as GetAppAuthorizeSettingOrigin,
  GetAppAuthorizeSettingResult as GetAppAuthorizeSettingResultOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type GetAppAuthorizeSetting = GetAppAuthorizeSettingOrigin
  type GetAppAuthorizeSettingResult = GetAppAuthorizeSettingResultOrigin
  interface Uni extends UniOrigin { }
}
