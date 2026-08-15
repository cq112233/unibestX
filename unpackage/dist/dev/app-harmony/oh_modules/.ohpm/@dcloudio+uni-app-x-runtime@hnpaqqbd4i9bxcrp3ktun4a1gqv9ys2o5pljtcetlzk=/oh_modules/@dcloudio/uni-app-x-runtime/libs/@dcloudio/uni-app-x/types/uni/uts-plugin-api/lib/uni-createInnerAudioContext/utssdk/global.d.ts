// 本文件为自动构建生成
import {
  CreateInnerAudioContext as CreateInnerAudioContextOrigin,
  InnerAudioContext as InnerAudioContextOrigin,
  CreateInnerAudioContextErrorCode as CreateInnerAudioContextErrorCodeOrigin,
  ICreateInnerAudioContextFail as ICreateInnerAudioContextFailOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type CreateInnerAudioContext = CreateInnerAudioContextOrigin
  type InnerAudioContext = InnerAudioContextOrigin
  type CreateInnerAudioContextErrorCode = CreateInnerAudioContextErrorCodeOrigin
  type ICreateInnerAudioContextFail = ICreateInnerAudioContextFailOrigin
  interface Uni extends UniOrigin { }
}
