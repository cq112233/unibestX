// 本文件为自动构建生成
import {
  GetRecorderManager as GetRecorderManagerOrigin,
  RecorderManagerStartOptions as RecorderManagerStartOptionsOrigin,
  RecorderManagerOnStopResult as RecorderManagerOnStopResultOrigin,
  RecorderManager as RecorderManagerOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type GetRecorderManager = GetRecorderManagerOrigin
  type RecorderManagerStartOptions = RecorderManagerStartOptionsOrigin
  type RecorderManagerOnStopResult = RecorderManagerOnStopResultOrigin
  type RecorderManager = RecorderManagerOrigin
  interface Uni extends UniOrigin { }
}
