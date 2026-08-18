import { Emitter, getCurrentMP } from "@dcloudio/uni-app-framework";
import { IUniError, UTSObject, UTS, UniError, UniProvider, ProtocolOptions, ApiOptions, defineSyncApi, defineAsyncApi, ApiExecutor, getUniProvider, ApiError, ref } from "@dcloudio/uni-app-framework";
type GetLocationFailImpl = GetLocationFailImpl__1;
const LocationUniErrorSubject = 'uni-location';
type LocationErrorCode = 1505005 | 1505021 | 1505022 | 1505023 | 1505024 | 1505025 | 1505026 | 1505003 | 1505004 | 1505600 | 1505601 | 1505602 | 1505603 | 1505604 | 1505700 | 1505701 | 1505800 | 1505605 | 1505607 | 1505608 | 1505702;
interface IGetLocationFail extends IUniError {
    errCode: LocationErrorCode;
}
type GetLocationFail = IGetLocationFail;
type GetLocation = (options: GetLocationOptions) => void;
class GetLocationSuccess extends UTSObject {
    latitude!: number;
    longitude!: number;
    speed!: number;
    accuracy!: number;
    altitude!: number;
    verticalAccuracy!: number;
    horizontalAccuracy!: number;
    address: string | null = null;
}
type GetLocationSuccessCallback = (result: GetLocationSuccess) => void;
type GetLocationFailCallback = (result: GetLocationFail) => void;
type GetLocationComplete = Object;
type GetLocationCompleteCallback = (result: GetLocationComplete) => void;
class GetLocationOptions extends UTSObject {
    provider: string | null = null;
    type: "wgs84" | "gcj02" | null = null;
    altitude: boolean | null = null;
    geocode: boolean | null = null;
    highAccuracyExpireTime: number | null = null;
    isHighAccuracy: boolean | null = null;
    success: GetLocationSuccessCallback | null = null;
    fail: GetLocationFailCallback | null = null;
    complete: GetLocationCompleteCallback | null = null;
}
class StartLocationUpdateSuccess extends UTSObject {
}
type StartLocationUpdateSuccessCallback = (result: StartLocationUpdateSuccess) => void;
type StartLocationUpdateFailCallback = (result: IGetLocationFail) => void;
type StartLocationUpdateComplete = Object;
type StartLocationUpdateCompleteCallback = (result: StartLocationUpdateComplete) => void;
type StartLocationUpdateOptionsType = "wgs84" | "gcj02";
class StartLocationUpdateOptions extends UTSObject {
    provider: string | null = null;
    type: StartLocationUpdateOptionsType | null = null;
    success: StartLocationUpdateSuccessCallback | null = null;
    fail: StartLocationUpdateFailCallback | null = null;
    complete: StartLocationUpdateCompleteCallback | null = null;
}
type StartLocationUpdate = (options: StartLocationUpdateOptions) => void;
class StopLocationUpdateSuccess extends UTSObject {
}
type StopLocationUpdateSuccessCallback = (result: StopLocationUpdateSuccess) => void;
type StopLocationUpdateFailCallback = (result: IGetLocationFail) => void;
type StopLocationUpdateComplete = Object;
type StopLocationUpdateCompleteCallback = (result: StopLocationUpdateComplete) => void;
class StopLocationUpdateOptions extends UTSObject {
    success: StopLocationUpdateSuccessCallback | null = null;
    fail: StopLocationUpdateFailCallback | null = null;
    complete: StopLocationUpdateCompleteCallback | null = null;
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
class StartLocationUpdateBackgroundOptions extends UTSObject {
    provider: string | null = null;
    type: StartLocationUpdateBackgroundOptionsType | null = null;
    success: StartLocationUpdateBackgroundSuccessCallback | null = null;
    fail: StartLocationUpdateBackgroundFailCallback | null = null;
    complete: StartLocationUpdateBackgroundCompleteCallback | null = null;
}
type StartLocationUpdateBackground = (options: StartLocationUpdateBackgroundOptions) => void;
const LocationUniErrors: Map<LocationErrorCode, string> = new Map([
    [
        1505003,
        'maybe not turn on the system location permission.'
    ],
    [
        1505004,
        'maybe not obtain GPS Permission.'
    ],
    [
        1505600,
        'location fail: timeout'
    ],
    [
        1505601,
        'system location support wgs84 only.'
    ],
    [
        1505602,
        'location fail: request error'
    ],
    [
        1505603,
        'The system failed to retrieve geocode for the location.'
    ],
    [
        1505604,
        'Failed to get provider.'
    ],
    [
        1505700,
        'system location not support geocode.'
    ],
    [
        1505701,
        'Provider is not find,Please ensure that the device location function is turned on'
    ],
    [
        1505800,
        'Unauthorized access to high-accuracy location services.'
    ],
    [
        1505605,
        'The Tencent api key is misconfigured.'
    ],
    [
        1505607,
        'GCJ-02 support only.'
    ],
    [
        1505608,
        "Only one provider can have continuous location updates enabled at a time."
    ],
    [
        1505702,
        'Missing background location configuration in iOS plist file：UIBackgroundModes->location '
    ]
]);
class GetLocationFailImpl__1 extends UniError implements IGetLocationFail {
    errCode: LocationErrorCode;
    constructor(errCode: LocationErrorCode){
        super();
        this.errSubject = LocationUniErrorSubject;
        this.errCode = errCode;
        this.errMsg = UTS.mapGet(LocationUniErrors, errCode) ?? "";
    }
}
interface UniLocationProvider extends UniProvider {
    getLocation(options: GetLocationOptions): void;
    startLocationUpdate(options: StartLocationUpdateOptions): void;
    stopLocationUpdate(options: StopLocationUpdateOptions): void;
    onLocationChange(listener: OnLocationChangeCallback): number;
    startLocationUpdateBackground(options: StartLocationUpdateBackgroundOptions): void;
    onLocationChangeError(listener: OnLocationChangeErrorCallback): number;
}
const API_GET_LOCATION = 'getLocation';
const API_ON_LOCATION_CHANGE = 'onLocationChange';
const API_OFF_LOCATION_CHANGE = 'offLocationChange';
const API_ON_LOCATION_CHANGE_ERROR = 'onLocationChangeError';
const API_OFF_LOCATION_CHANGE_ERROR = 'offLocationChangeError';
const API_START_LOCATION_UPDATE_BACKGROUND = 'startLocationUpdateBackground';
const API_STOP_LOCATION_UPDATE = 'stopLocationUpdate';
const API_START_LOCATION_UPDATE = 'startLocationUpdate';
const coordTypes: StartLocationUpdateOptionsType[] = [
    'wgs84',
    'gcj02'
];
const StartLocationUpdateApiProtocol = new Map<string, ProtocolOptions>([
    [
        'type',
        {
            type: 'string'
        }
    ]
]);
const StartLocationUpdateApiOptions: ApiOptions<StartLocationUpdateOptions> = {
    formatArgs: new Map<string, Function>([
        [
            'type',
            (value: StartLocationUpdateOptionsType, params: StartLocationUpdateOptions)=>{
                value = (value || '').toLowerCase() as StartLocationUpdateOptionsType;
                if (coordTypes.indexOf(value) === -1) {
                    params.type = coordTypes[1];
                } else {
                    params.type = value;
                }
            }
        ]
    ])
};
interface ILocationEventEmitter<T = Object> {
    on: (eventName: string, callback: Function) => void;
    once: (eventName: string, callback: Function) => void;
    off: (eventName: string, callback?: Function | null) => void;
    emit: (eventName: string, ...args: (T | undefined | null)[]) => void;
}
const emitterStore = new Map<string, ILocationEventEmitter<Object>>();
function getEmitter<T extends Object>(): ILocationEventEmitter<T> {
    const mp = getCurrentMP();
    const id = mp.appId as string;
    if (emitterStore.has(id)) {
        return UTS.mapGet(emitterStore, id) as ILocationEventEmitter<T>;
    }
    const emitter = new Emitter() as ILocationEventEmitter<Object>;
    emitterStore.set(id, emitter);
    mp.on('beforeClose', ()=>{
        emitterStore.delete(id);
    });
    return emitter as ILocationEventEmitter<T>;
}
const OnLocationChangeCallbacks: OnLocationChangeCallback[] = [];
const OnLocationChangeErrorCallbacks: OnLocationChangeErrorCallback[] = [];
function removeCallback(name: string, callbacks: (OnLocationChangeErrorCallback | OnLocationChangeCallback)[], callback: number | OnLocationChangeCallback | OnLocationChangeErrorCallback | null = null) {
    if (callback == null) {
        getEmitter().off(name);
        callbacks.length = 0;
    } else if (typeof callback === 'number') {
        const index = callbacks.findIndex((cb): boolean =>cb === callbacks[callback]);
        if (index !== -1) {
            getEmitter().off(name, callbacks[index]);
            callbacks.splice(index, 1);
        }
    } else {
        getEmitter().off(name, callback);
        const index = callbacks.indexOf(callback);
        if (index !== -1) {
            callbacks.splice(index, 1);
        }
    }
}
const onLocationChange = defineSyncApi<number>(API_ON_LOCATION_CHANGE, (callback: OnLocationChangeCallback): number =>{
    getEmitter().on(API_ON_LOCATION_CHANGE, callback);
    return OnLocationChangeCallbacks.push(callback);
});
const offLocationChange = defineSyncApi<void>(API_OFF_LOCATION_CHANGE, (callback: number | OnLocationChangeCallback | null = null)=>{
    removeCallback(API_ON_LOCATION_CHANGE, OnLocationChangeCallbacks, callback);
});
const onLocationChangeError = defineSyncApi<number>(API_ON_LOCATION_CHANGE_ERROR, (callback: OnLocationChangeErrorCallback): number =>{
    getEmitter().on(API_ON_LOCATION_CHANGE_ERROR, callback);
    return OnLocationChangeErrorCallbacks.push(callback);
});
const offLocationChangeError = defineSyncApi<void>(API_OFF_LOCATION_CHANGE_ERROR, (callback: number | OnLocationChangeErrorCallback | null = null)=>{
    removeCallback(API_ON_LOCATION_CHANGE_ERROR, OnLocationChangeErrorCallbacks, callback);
});
const _onLocationChange: OnLocationChangeCallback = (res: GetLocationSuccess): void =>{
    getEmitter<GetLocationSuccess>().emit(API_ON_LOCATION_CHANGE, res);
};
const _onLocationChangeError: OnLocationChangeErrorCallback = (err: IGetLocationFail)=>{
    err = new GetLocationFailImpl__1(err.errCode);
    err.errMsg = `onLocationChange:fail ${err.errMsg}`;
    getEmitter<IGetLocationFail>().emit(API_ON_LOCATION_CHANGE_ERROR, err);
};
let locationProvider: UniLocationProvider | null = null;
const getLocation: GetLocation = defineAsyncApi<GetLocationOptions, GetLocationSuccess>(API_GET_LOCATION, (options: GetLocationOptions, exec: ApiExecutor<GetLocationSuccess>): void =>{
    const realProvider = options.provider || 'system';
    locationProvider = getUniProvider<UniLocationProvider>('location', realProvider);
    if (!locationProvider) {
        const errMsg = UTS.mapGet(LocationUniErrors, 1505604) ?? "";
        exec.reject(errMsg, {
            errCode: 1505604
        } as ApiError);
        return;
    }
    locationProvider.getLocation({
        type: options.type,
        altitude: options.altitude,
        geocode: options.geocode,
        isHighAccuracy: options.isHighAccuracy,
        highAccuracyExpireTime: options.highAccuracyExpireTime,
        success: (result: GetLocationSuccess)=>{
            exec.resolve(result);
        },
        fail: (error: IGetLocationFail)=>{
            error = new GetLocationFailImpl__1(error.errCode);
            const errMsg = `getLocation:fail ${error.errMsg}`;
            exec.reject(errMsg, {
                errCode: error.errCode
            } as ApiError);
        }
    } as GetLocationOptions);
}) as GetLocation;
const startLocationUpdate: StartLocationUpdate = defineAsyncApi<StartLocationUpdateOptions, StartLocationUpdateSuccess>(API_START_LOCATION_UPDATE, (options, ref)=>{
    let resolve = ref.resolve, reject = ref.reject;
    const realProvider = options.provider || 'system';
    locationProvider = getUniProvider<UniLocationProvider>('location', realProvider);
    if (!locationProvider) {
        const errMsg = UTS.mapGet(LocationUniErrors, 1505604) ?? "";
        reject(errMsg, {
            errCode: 1505604
        } as ApiError);
        return;
    }
    locationProvider.startLocationUpdate({
        type: options.type,
        success: (result: StartLocationUpdateSuccess)=>{
            locationProvider?.onLocationChange(_onLocationChange);
            locationProvider?.onLocationChangeError(_onLocationChangeError);
            resolve(result);
        },
        fail: (error: IGetLocationFail)=>{
            error = new GetLocationFailImpl__1(error.errCode);
            const errMsg = `startLocationUpdate:fail ${error.errMsg}`;
            reject(errMsg, error as ApiError);
        }
    } as StartLocationUpdateOptions);
}, StartLocationUpdateApiProtocol, StartLocationUpdateApiOptions) as StartLocationUpdate;
const startLocationUpdateBackground: StartLocationUpdateBackground = defineAsyncApi<StartLocationUpdateBackgroundOptions, StartLocationUpdateBackgroundSuccess>(API_START_LOCATION_UPDATE_BACKGROUND, (options, ref)=>{
    let resolve = ref.resolve, reject = ref.reject;
    const realProvider = options.provider || 'system';
    locationProvider = getUniProvider<UniLocationProvider>('location', realProvider);
    if (!locationProvider) {
        const errMsg = UTS.mapGet(LocationUniErrors, 1505604) ?? "";
        reject(errMsg, {
            errCode: 1505604
        } as ApiError);
        return;
    }
    locationProvider.startLocationUpdateBackground({
        type: options.type,
        success: (result: StartLocationUpdateBackgroundSuccess)=>{
            locationProvider?.onLocationChange(_onLocationChange);
            locationProvider?.onLocationChangeError(_onLocationChangeError);
            resolve(result);
        },
        fail: (error: IGetLocationFail)=>{
            error = new GetLocationFailImpl__1(error.errCode);
            const errMsg = `startLocationUpdateBackground:fail ${error.errMsg}`;
            reject(errMsg, error as ApiError);
        }
    } as StartLocationUpdateBackgroundOptions);
}) as StartLocationUpdateBackground;
const stopLocationUpdate: StopLocationUpdate = defineAsyncApi<StopLocationUpdateOptions, StopLocationUpdateSuccess>(API_STOP_LOCATION_UPDATE, (_, ref)=>{
    let resolve = ref.resolve, reject = ref.reject;
    locationProvider?.stopLocationUpdate({
        success: (result: StopLocationUpdateSuccess)=>{
            resolve(result);
        },
        fail: (error: IGetLocationFail)=>{
            error = new GetLocationFailImpl__1(error.errCode);
            const errMsg = `stopLocationUpdate:fail ${error.errMsg}`;
            reject(errMsg, error as ApiError);
        }
    } as StopLocationUpdateOptions);
}) as StopLocationUpdate;
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
