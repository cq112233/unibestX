import { IUniError, UTSObject, UniError, UniProvider } from "@dcloudio/uni-app-framework";
type GetLocationFailImpl = GetLocationFailImpl__1;
type LocationErrorCode = 1505005 | 1505021 | 1505022 | 1505023 | 1505024 | 1505025 | 1505026 | 1505003 | 1505004 | 1505600 | 1505601 | 1505602 | 1505603 | 1505604 | 1505700 | 1505701 | 1505800 | 1505605 | 1505607 | 1505608 | 1505702;
interface IGetLocationFail extends IUniError {
    errCode: LocationErrorCode;
}
type GetLocationFail = IGetLocationFail;
type GetLocation = (options: GetLocationOptions) => void;
declare class GetLocationSuccess extends UTSObject {
    latitude: number;
    longitude: number;
    speed: number;
    accuracy: number;
    altitude: number;
    verticalAccuracy: number;
    horizontalAccuracy: number;
    address: string | null;
}
type GetLocationSuccessCallback = (result: GetLocationSuccess) => void;
type GetLocationFailCallback = (result: GetLocationFail) => void;
type GetLocationComplete = Object;
type GetLocationCompleteCallback = (result: GetLocationComplete) => void;
declare class GetLocationOptions extends UTSObject {
    provider: string | null;
    type: "wgs84" | "gcj02" | null;
    altitude: boolean | null;
    geocode: boolean | null;
    highAccuracyExpireTime: number | null;
    isHighAccuracy: boolean | null;
    success: GetLocationSuccessCallback | null;
    fail: GetLocationFailCallback | null;
    complete: GetLocationCompleteCallback | null;
}
declare class StartLocationUpdateSuccess extends UTSObject {
}
type StartLocationUpdateSuccessCallback = (result: StartLocationUpdateSuccess) => void;
type StartLocationUpdateFailCallback = (result: IGetLocationFail) => void;
type StartLocationUpdateComplete = Object;
type StartLocationUpdateCompleteCallback = (result: StartLocationUpdateComplete) => void;
type StartLocationUpdateOptionsType = "wgs84" | "gcj02";
declare class StartLocationUpdateOptions extends UTSObject {
    provider: string | null;
    type: StartLocationUpdateOptionsType | null;
    success: StartLocationUpdateSuccessCallback | null;
    fail: StartLocationUpdateFailCallback | null;
    complete: StartLocationUpdateCompleteCallback | null;
}
type StartLocationUpdate = (options: StartLocationUpdateOptions) => void;
declare class StopLocationUpdateSuccess extends UTSObject {
}
type StopLocationUpdateSuccessCallback = (result: StopLocationUpdateSuccess) => void;
type StopLocationUpdateFailCallback = (result: IGetLocationFail) => void;
type StopLocationUpdateComplete = Object;
type StopLocationUpdateCompleteCallback = (result: StopLocationUpdateComplete) => void;
declare class StopLocationUpdateOptions extends UTSObject {
    success: StopLocationUpdateSuccessCallback | null;
    fail: StopLocationUpdateFailCallback | null;
    complete: StopLocationUpdateCompleteCallback | null;
}
type StopLocationUpdate = (options: StopLocationUpdateOptions) => void;
type OnLocationChangeResult = GetLocationSuccess;
type OnLocationChangeCallback = (res: OnLocationChangeResult) => void;
type OnLocationChange = (listener: OnLocationChangeCallback) => number;
type OffLocationChange = (listener?: number | OnLocationChangeCallback | null) => void;
type OnLocationChangeErrorCallback = (listener: IGetLocationFail) => void;
type OnLocationChangeError = (listener: OnLocationChangeErrorCallback) => number;
type OffLocationChangeError = (listener?: number | OnLocationChangeErrorCallback | null) => void;
type StartLocationUpdateBackgroundSuccess = StartLocationUpdateSuccess;
type StartLocationUpdateBackgroundSuccessCallback = (result: StartLocationUpdateBackgroundSuccess) => void;
type StartLocationUpdateBackgroundFailCallback = (result: IGetLocationFail) => void;
type StartLocationUpdateBackgroundComplete = Object;
type StartLocationUpdateBackgroundCompleteCallback = (result: StartLocationUpdateBackgroundComplete) => void;
type StartLocationUpdateBackgroundOptionsType = "wgs84" | "gcj02";
declare class StartLocationUpdateBackgroundOptions extends UTSObject {
    provider: string | null;
    type: StartLocationUpdateBackgroundOptionsType | null;
    success: StartLocationUpdateBackgroundSuccessCallback | null;
    fail: StartLocationUpdateBackgroundFailCallback | null;
    complete: StartLocationUpdateBackgroundCompleteCallback | null;
}
type StartLocationUpdateBackground = (options: StartLocationUpdateBackgroundOptions) => void;
declare class GetLocationFailImpl__1 extends UniError implements IGetLocationFail {
    errCode: LocationErrorCode;
    constructor(errCode: LocationErrorCode);
}
interface UniLocationProvider extends UniProvider {
    getLocation(options: GetLocationOptions): void;
    startLocationUpdate(options: StartLocationUpdateOptions): void;
    stopLocationUpdate(options: StopLocationUpdateOptions): void;
    onLocationChange(listener: OnLocationChangeCallback): number;
    startLocationUpdateBackground(options: StartLocationUpdateBackgroundOptions): void;
    onLocationChangeError(listener: OnLocationChangeErrorCallback): number;
}
declare const onLocationChange: (...args: Object[]) => number;
declare const offLocationChange: (...args: Object[]) => void;
declare const onLocationChangeError: (...args: Object[]) => number;
declare const offLocationChangeError: (...args: Object[]) => void;
declare const getLocation: GetLocation;
declare const startLocationUpdate: StartLocationUpdate;
declare const startLocationUpdateBackground: StartLocationUpdateBackground;
declare const stopLocationUpdate: StopLocationUpdate;
export { UniLocationProvider as UniLocationProvider };
export { GetLocation as GetLocation, GetLocationFail as GetLocationFail, GetLocationFailImpl as GetLocationFailImpl, GetLocationOptions as GetLocationOptions, GetLocationSuccess as GetLocationSuccess, IGetLocationFail as IGetLocationFail, LocationErrorCode as LocationErrorCode, OffLocationChange as OffLocationChange, OffLocationChangeError as OffLocationChangeError, OnLocationChange as OnLocationChange, OnLocationChangeCallback as OnLocationChangeCallback, OnLocationChangeError as OnLocationChangeError, OnLocationChangeErrorCallback as OnLocationChangeErrorCallback, OnLocationChangeResult as OnLocationChangeResult, StartLocationUpdate as StartLocationUpdate, StartLocationUpdateBackground as StartLocationUpdateBackground, StartLocationUpdateBackgroundOptions as StartLocationUpdateBackgroundOptions, StartLocationUpdateBackgroundOptionsType as StartLocationUpdateBackgroundOptionsType, StartLocationUpdateBackgroundSuccess as StartLocationUpdateBackgroundSuccess, StartLocationUpdateOptions as StartLocationUpdateOptions, StartLocationUpdateOptionsType as StartLocationUpdateOptionsType, StartLocationUpdateSuccess as StartLocationUpdateSuccess, StopLocationUpdate as StopLocationUpdate, StopLocationUpdateOptions as StopLocationUpdateOptions, StopLocationUpdateSuccess as StopLocationUpdateSuccess };
export { onLocationChange as onLocationChange };
export { offLocationChange as offLocationChange };
export { onLocationChangeError as onLocationChangeError };
export { offLocationChangeError as offLocationChangeError };
export { getLocation as getLocation };
export { startLocationUpdate as startLocationUpdate };
export { startLocationUpdateBackground as startLocationUpdateBackground };
export { stopLocationUpdate as stopLocationUpdate };
