import { UTSObject } from "@dcloudio/uni-app-framework";
type OnPrivacyAuthorizationChange = (callback: OnPrivacyAuthorizationChangeCallback) => number;
type OffPrivacyAuthorizationChange = (id: number) => void;
type OnPrivacyAuthorizationChangeCallback = (res: PrivacyChangeResult) => void;
declare class PrivacyChangeResult extends UTSObject {
    needAuthorization: boolean;
}
type GetPrivacySetting = (options: GetPrivacySettingOptions) => void;
type GetPrivacySettingSuccessCallback = (result: GetPrivacySettingSuccessResult) => void;
type GetPrivacySettingFailCallback = (result: Object) => void;
type GetPrivacySettingCompleteCallback = (result: Object) => void;
type ResetPrivacyAuthorization = () => void;
type AgreePrivacyAuthorization = () => void;
declare class GetPrivacySettingSuccessResult extends UTSObject {
    needAuthorization: boolean;
}
declare class GetPrivacySettingOptions extends UTSObject {
    success: GetPrivacySettingSuccessCallback | null;
    fail: GetPrivacySettingFailCallback | null;
    complete: GetPrivacySettingCompleteCallback | null;
}
declare const getPrivacySetting: GetPrivacySetting;
declare const resetPrivacyAuthorization: ResetPrivacyAuthorization;
declare const onPrivacyAuthorizationChange: OnPrivacyAuthorizationChange;
declare const offPrivacyAuthorizationChange: OffPrivacyAuthorizationChange;
declare const agreePrivacyAuthorization: AgreePrivacyAuthorization;
export { GetPrivacySetting as GetPrivacySetting, GetPrivacySettingCompleteCallback as GetPrivacySettingCompleteCallback, GetPrivacySettingFailCallback as GetPrivacySettingFailCallback, GetPrivacySettingOptions as GetPrivacySettingOptions, GetPrivacySettingSuccessCallback as GetPrivacySettingSuccessCallback, GetPrivacySettingSuccessResult as GetPrivacySettingSuccessResult, OffPrivacyAuthorizationChange as OffPrivacyAuthorizationChange, OnPrivacyAuthorizationChange as OnPrivacyAuthorizationChange, OnPrivacyAuthorizationChangeCallback as OnPrivacyAuthorizationChangeCallback, PrivacyChangeResult as PrivacyChangeResult, ResetPrivacyAuthorization as ResetPrivacyAuthorization, AgreePrivacyAuthorization as AgreePrivacyAuthorization };
export { getPrivacySetting as getPrivacySetting };
export { resetPrivacyAuthorization as resetPrivacyAuthorization };
export { onPrivacyAuthorizationChange as onPrivacyAuthorizationChange };
export { offPrivacyAuthorizationChange as offPrivacyAuthorizationChange };
export { agreePrivacyAuthorization as agreePrivacyAuthorization };
