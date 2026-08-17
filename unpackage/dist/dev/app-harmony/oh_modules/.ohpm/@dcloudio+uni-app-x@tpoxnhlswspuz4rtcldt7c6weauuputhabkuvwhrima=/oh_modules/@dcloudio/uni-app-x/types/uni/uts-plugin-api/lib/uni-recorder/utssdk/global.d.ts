// 本文件为自动构建生成
import {
  GetRecorderManager as GetRecorderManagerOrigin,
  RecorderManagerStartOptions as RecorderManagerStartOptionsOrigin,
  RecorderManagerOnStopResult as RecorderManagerOnStopResultOrigin,
  RecorderManager as RecorderManagerOrigin,
  RecorderManagerErrorCode as RecorderManagerErrorCodeOrigin,
  IRecorderManagerFail as IRecorderManagerFailOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type GetRecorderManager = GetRecorderManagerOrigin
  type RecorderManagerStartOptions = RecorderManagerStartOptionsOrigin
  type RecorderManagerOnStopResult = RecorderManagerOnStopResultOrigin
  type RecorderManager = RecorderManagerOrigin
  type RecorderManagerErrorCode = RecorderManagerErrorCodeOrigin
  type IRecorderManagerFail = IRecorderManagerFailOrigin
  interface Uni extends UniOrigin { }
}
