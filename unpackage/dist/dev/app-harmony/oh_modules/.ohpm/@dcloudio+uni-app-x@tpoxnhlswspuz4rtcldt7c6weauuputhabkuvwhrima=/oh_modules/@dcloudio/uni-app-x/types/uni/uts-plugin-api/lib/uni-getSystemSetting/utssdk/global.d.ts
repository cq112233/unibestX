// 本文件为自动构建生成
import {
  GetSystemSettingResult as GetSystemSettingResultOrigin,
  GetSystemSetting as GetSystemSettingOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type GetSystemSettingResult = GetSystemSettingResultOrigin
  type GetSystemSetting = GetSystemSettingOrigin
  interface Uni extends UniOrigin { }
}
