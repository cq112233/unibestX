// 本文件为自动构建生成
import {
  GetBackgroundAudioManager as GetBackgroundAudioManagerOrigin,
  BackgroundAudioManager as BackgroundAudioManagerOrigin,
  CreateBackgroundAudioErrorCode as CreateBackgroundAudioErrorCodeOrigin,
  ICreateBackgroundAudioFail as ICreateBackgroundAudioFailOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type GetBackgroundAudioManager = GetBackgroundAudioManagerOrigin
  type BackgroundAudioManager = BackgroundAudioManagerOrigin
  type CreateBackgroundAudioErrorCode = CreateBackgroundAudioErrorCodeOrigin
  type ICreateBackgroundAudioFail = ICreateBackgroundAudioFailOrigin
  interface Uni extends UniOrigin { }
}
