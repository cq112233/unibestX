// 本文件为自动构建生成
import {
  GetElementById as GetElementByIdOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type GetElementById = GetElementByIdOrigin
  interface Uni extends UniOrigin { }
}
