import { UTSObject, UTSHarmony } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
type OnPrivacyAuthorizationChange = (callback: OnPrivacyAuthorizationChangeCallback) => number;
type OffPrivacyAuthorizationChange = (id: number) => void;
type OnPrivacyAuthorizationChangeCallback = (res: PrivacyChangeResult) => void;
class PrivacyChangeResult extends UTSObject {
    needAuthorization!: boolean;
}
type GetPrivacySetting = (options: GetPrivacySettingOptions) => void;
type GetPrivacySettingSuccessCallback = (result: GetPrivacySettingSuccessResult) => void;
type GetPrivacySettingFailCallback = (result: Object) => void;
type GetPrivacySettingCompleteCallback = (result: Object) => void;
type ResetPrivacyAuthorization = () => void;
type AgreePrivacyAuthorization = () => void;
class GetPrivacySettingSuccessResult extends UTSObject {
    needAuthorization!: boolean;
}
class GetPrivacySettingOptions extends UTSObject {
    success: GetPrivacySettingSuccessCallback | null = null;
    fail: GetPrivacySettingFailCallback | null = null;
    complete: GetPrivacySettingCompleteCallback | null = null;
}
let callbackId = 0;
const privacyCallbacks = new Map<number, OnPrivacyAuthorizationChangeCallback>();
const privacyAuthorizationChangeFunction = (agree: boolean) => {
    privacyCallbacks.forEach((entry: OnPrivacyAuthorizationChangeCallback) => {
        entry({
            'needAuthorization': !agree
        } as PrivacyChangeResult);
    });
};
const getPrivacySetting: GetPrivacySetting = (option: GetPrivacySettingOptions) => {
    const successCallback: GetPrivacySettingSuccessResult = {
        'needAuthorization': !UTSHarmony.getPrivacyAgree()
    };
    option.success?.(successCallback);
    option.complete?.(successCallback);
};
const resetPrivacyAuthorization: ResetPrivacyAuthorization = () => {
    UTSHarmony.resetPrivacyAgree();
};
const onPrivacyAuthorizationChange: OnPrivacyAuthorizationChange = (callback: OnPrivacyAuthorizationChangeCallback): number => {
    if (privacyCallbacks.size == 0) {
        UTSHarmony.onPrivacyAgreeChange(privacyAuthorizationChangeFunction);
    }
    callbackId++;
    privacyCallbacks.set(callbackId, callback);
    return callbackId;
};
const offPrivacyAuthorizationChange: OffPrivacyAuthorizationChange = (id: number) => {
    privacyCallbacks.delete(id);
    if (privacyCallbacks.size == 0) {
        UTSHarmony.offPrivacyAgreeChange(privacyAuthorizationChangeFunction);
    }
};
const agreePrivacyAuthorization: AgreePrivacyAuthorization = () => {
    UTSHarmony.setPrivacyAgree(true);
};
export { GetPrivacySettingOptions as GetPrivacySettingOptions, GetPrivacySettingSuccessResult as GetPrivacySettingSuccessResult, PrivacyChangeResult as PrivacyChangeResult };
export type { GetPrivacySetting as GetPrivacySetting, GetPrivacySettingCompleteCallback as GetPrivacySettingCompleteCallback, GetPrivacySettingFailCallback as GetPrivacySettingFailCallback, GetPrivacySettingSuccessCallback as GetPrivacySettingSuccessCallback, OffPrivacyAuthorizationChange as OffPrivacyAuthorizationChange, OnPrivacyAuthorizationChange as OnPrivacyAuthorizationChange, OnPrivacyAuthorizationChangeCallback as OnPrivacyAuthorizationChangeCallback, ResetPrivacyAuthorization as ResetPrivacyAuthorization, AgreePrivacyAuthorization as AgreePrivacyAuthorization };
export { getPrivacySetting as getPrivacySetting };
export { resetPrivacyAuthorization as resetPrivacyAuthorization };
export { onPrivacyAuthorizationChange as onPrivacyAuthorizationChange };
export { offPrivacyAuthorizationChange as offPrivacyAuthorizationChange };
export { agreePrivacyAuthorization as agreePrivacyAuthorization };
