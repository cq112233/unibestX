import { IUniError, UTSJSONObject, UTSObject, UniError } from "@dcloudio/uni-app-framework";
type ChooseLocationErrorCode = 1 | 4;
interface ChooseLocationSuccess {
    errMsg: string;
    name: string;
    address: string;
    latitude: number;
    longitude: number;
}
type ChooseLocationSuccessCallback = (result: ChooseLocationSuccess) => void;
interface ChooseLocationFail extends IUniError {
    errCode: ChooseLocationErrorCode;
}
type ChooseLocationFailCallback = (result: ChooseLocationFail) => void;
type ChooseLocationComplete = Object;
type ChooseLocationCompleteCallback = (result: ChooseLocationComplete) => void;
declare class ChooseLocationOptions extends UTSObject {
    latitude: number | null;
    longitude: number | null;
    keyword: string | null;
    payload: UTSJSONObject | null;
    success: ChooseLocationSuccessCallback | null;
    fail: ChooseLocationFailCallback | null;
    complete: ChooseLocationCompleteCallback | null;
}
type ChooseLocation = (options: ChooseLocationOptions) => void;
declare class ChooseLocationSuccessImpl implements ChooseLocationSuccess {
    errMsg: string;
    name: string;
    address: string;
    latitude: number;
    longitude: number;
    constructor(name: string, address: string, latitude: number, longitude: number, errMsg?: string);
}
declare class ChooseLocationFailImpl extends UniError implements ChooseLocationFail {
    errCode: ChooseLocationErrorCode;
    constructor(errMsg?: string, errCode?: ChooseLocationErrorCode);
}
export { ChooseLocationErrorCode as ChooseLocationErrorCode, ChooseLocationSuccess as ChooseLocationSuccess, ChooseLocationFail as ChooseLocationFail, ChooseLocationComplete as ChooseLocationComplete, ChooseLocationOptions as ChooseLocationOptions, ChooseLocation as ChooseLocation, ChooseLocationSuccessImpl as ChooseLocationSuccessImpl, ChooseLocationFailImpl as ChooseLocationFailImpl };
declare const chooseLocation: ChooseLocation;
export { chooseLocation as chooseLocation };
