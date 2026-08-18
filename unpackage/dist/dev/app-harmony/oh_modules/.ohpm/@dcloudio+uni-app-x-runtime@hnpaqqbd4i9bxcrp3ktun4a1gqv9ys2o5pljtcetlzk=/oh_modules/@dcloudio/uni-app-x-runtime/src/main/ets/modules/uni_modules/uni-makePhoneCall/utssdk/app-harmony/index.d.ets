import { UTSObject, IUniError } from "@dcloudio/uni-app-framework";
type MakePhoneCall = (options: MakePhoneCallOptions) => void;
declare class MakePhoneCallSuccess extends UTSObject {
}
type MakePhoneCallSuccessCallback = (result: MakePhoneCallSuccess) => void;
type MakePhoneCallErrorCode = 1500601 | 1500602 | 1500603;
interface IMakePhoneCallError extends IUniError {
    errCode: MakePhoneCallErrorCode;
}
type MakePhoneCallFail = IMakePhoneCallError;
type MakePhoneCallFailCallback = (result: MakePhoneCallFail) => void;
type MakePhoneCallComplete = Object;
type MakePhoneCallCompleteCallback = (result: MakePhoneCallComplete) => void;
declare class MakePhoneCallOptions extends UTSObject {
    phoneNumber: string;
    success: MakePhoneCallSuccessCallback | null;
    fail: MakePhoneCallFailCallback | null;
    complete: MakePhoneCallCompleteCallback | null;
}
declare const makePhoneCall: MakePhoneCall;
export { IMakePhoneCallError as IMakePhoneCallError, MakePhoneCall as MakePhoneCall, MakePhoneCallComplete as MakePhoneCallComplete, MakePhoneCallCompleteCallback as MakePhoneCallCompleteCallback, MakePhoneCallErrorCode as MakePhoneCallErrorCode, MakePhoneCallFail as MakePhoneCallFail, MakePhoneCallFailCallback as MakePhoneCallFailCallback, MakePhoneCallOptions as MakePhoneCallOptions, MakePhoneCallSuccess as MakePhoneCallSuccess, MakePhoneCallSuccessCallback as MakePhoneCallSuccessCallback };
export { makePhoneCall as makePhoneCall };
