// 本文件为自动构建生成
import {
  $On as $OnOrigin,
  $Once as $OnceOrigin,
  $Off as $OffOrigin,
  $Emit as $EmitOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type $On = $OnOrigin
  type $Once = $OnceOrigin
  type $Off = $OffOrigin
  type $Emit = $EmitOrigin
  interface Uni extends UniOrigin { }
}
