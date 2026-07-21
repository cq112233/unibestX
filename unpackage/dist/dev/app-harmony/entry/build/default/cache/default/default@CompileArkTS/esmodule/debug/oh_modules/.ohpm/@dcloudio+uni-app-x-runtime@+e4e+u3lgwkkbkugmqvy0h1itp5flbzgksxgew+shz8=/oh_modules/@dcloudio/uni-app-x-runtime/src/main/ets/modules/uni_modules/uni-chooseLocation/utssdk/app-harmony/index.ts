import { UTSObject, UniError, uni, UTS } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import type { IUniError, UTSJSONObject, OpenDialogPageOptions } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
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
class ChooseLocationOptions extends UTSObject {
    latitude: number | null = null;
    longitude: number | null = null;
    keyword: string | null = null;
    payload: UTSJSONObject | null = null;
    success: ChooseLocationSuccessCallback | null = null;
    fail: ChooseLocationFailCallback | null = null;
    complete: ChooseLocationCompleteCallback | null = null;
}
type ChooseLocation = (options: ChooseLocationOptions) => void;
class ChooseLocationSuccessImpl implements ChooseLocationSuccess {
    errMsg: string;
    name: string;
    address: string;
    latitude: number;
    longitude: number;
    constructor(name: string, address: string, latitude: number, longitude: number, errMsg: string = 'chooseLocation:ok') {
        this.errMsg = errMsg;
        this.name = name;
        this.address = address;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}
class ChooseLocationFailImpl extends UniError implements ChooseLocationFail {
    errCode: ChooseLocationErrorCode;
    constructor(errMsg: string = 'chooseLocation:fail cancel', errCode: ChooseLocationErrorCode = 1) {
        super();
        this.errCode = errCode;
        this.errMsg = errMsg;
    }
}
export { ChooseLocationOptions as ChooseLocationOptions, ChooseLocationSuccessImpl as ChooseLocationSuccessImpl, ChooseLocationFailImpl as ChooseLocationFailImpl };
export type { ChooseLocationErrorCode as ChooseLocationErrorCode, ChooseLocationSuccess as ChooseLocationSuccess, ChooseLocationFail as ChooseLocationFail, ChooseLocationComplete as ChooseLocationComplete, ChooseLocation as ChooseLocation };
const chooseLocation: ChooseLocation = (options: ChooseLocationOptions) => {
    const uuid = Date.now() + '' + Math.floor(Math.random() * 1e7);
    const baseEventName = `uni_choose_location_${uuid}`;
    const readyEventName = `${baseEventName}_ready`;
    const optionsEventName = `${baseEventName}_options`;
    const successEventName = `${baseEventName}_success`;
    const failEventName = `${baseEventName}_fail`;
    uni.$on(readyEventName, () => {
        uni.$emit(optionsEventName, UTS.JSON.parse(UTS.JSON.stringify(options)));
    });
    uni.$on(successEventName, (result: ChooseLocationSuccess) => {
        options?.success?.(result);
    });
    uni.$on(failEventName, () => {
        options.fail?.({
            errMsg: `chooseLocation:fail cancel`,
            errCode: 1
        } as ChooseLocationFail);
    });
    uni.openDialogPage({
        url: `uni:chooseLocation?readyEventName=${readyEventName}&optionsEventName=${optionsEventName}&successEventName=${successEventName}&failEventName=${failEventName}`,
        triggerParentHide: true,
        fail(err) {
            options.fail?.({
                errMsg: `chooseLocation:fail`,
                errCode: 4
            } as ChooseLocationFail);
            uni.$off(readyEventName);
            uni.$off(successEventName);
            uni.$off(failEventName);
        }
    } as OpenDialogPageOptions);
};
export { chooseLocation as chooseLocation };
