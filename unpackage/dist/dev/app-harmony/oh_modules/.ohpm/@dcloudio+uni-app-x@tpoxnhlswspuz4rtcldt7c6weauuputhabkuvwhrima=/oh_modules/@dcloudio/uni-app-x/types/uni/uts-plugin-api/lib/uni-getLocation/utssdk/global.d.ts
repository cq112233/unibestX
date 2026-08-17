// 本文件为自动构建生成
import {
  GetLocationFailImpl as GetLocationFailImplOrigin,
  UniLocationProvider as UniLocationProviderOrigin,
  UniLocationProvider as UniLocationProviderOrigin,
  LocationErrorCode as LocationErrorCodeOrigin,
  IGetLocationFail as IGetLocationFailOrigin,
  GetLocationFail as GetLocationFailOrigin,
  GetLocation as GetLocationOrigin,
  GetLocationSuccess as GetLocationSuccessOrigin,
  GetLocationOptions as GetLocationOptionsOrigin,
  Uni as UniOrigin
} from './interface'

declare global {
  type GetLocationFailImpl = GetLocationFailImplOrigin
  type UniLocationProvider = UniLocationProviderOrigin
  type UniLocationProvider = UniLocationProviderOrigin
  type LocationErrorCode = LocationErrorCodeOrigin
  type IGetLocationFail = IGetLocationFailOrigin
  type GetLocationFail = GetLocationFailOrigin
  type GetLocation = GetLocationOrigin
  type GetLocationSuccess = GetLocationSuccessOrigin
  type GetLocationOptions = GetLocationOptionsOrigin
  interface Uni extends UniOrigin { }
}
