import call from '@ohos.telephony.call';
import { BusinessError } from '@kit.BasicServicesKit';
import { UTSObject, IUniError, ProtocolOptions, UTS, UniError, defineAsyncApi, ApiExecutor, ApiError } from "@dcloudio/uni-app-framework";
type MakePhoneCall = (options: MakePhoneCallOptions) => void;
class MakePhoneCallSuccess extends UTSObject {
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
class MakePhoneCallOptions extends UTSObject {
    phoneNumber!: string;
    success: MakePhoneCallSuccessCallback | null = null;
    fail: MakePhoneCallFailCallback | null = null;
    complete: MakePhoneCallCompleteCallback | null = null;
}
const API_MAKE_PHONE_CALL = 'makePhoneCall';
const MakePhoneCallProtocol = new Map<string, ProtocolOptions>([
    [
        'phoneNumber',
        {
            type: 'string',
            required: true
        }
    ]
]);
const MakePhoneCallUniErrors: Map<number, string> = new Map([
    [
        1500601,
        'not support'
    ],
    [
        1500602,
        'invalid number'
    ],
    [
        1500603,
        'internal error'
    ]
]);
class MakePhoneCallErrorImpl extends UniError implements IMakePhoneCallError {
    errCode: MakePhoneCallErrorCode;
    constructor(code: MakePhoneCallErrorCode){
        super();
        this.errSubject = 'uni-makePhoneCall';
        this.errCode = code;
        this.errMsg = UTS.mapGet(MakePhoneCallUniErrors, code) ?? '';
    }
}
function isValidPhoneRules(input: string): boolean {
    const cleaned = input.trim();
    const validDialPattern = /^[0-9+\-*#;,]+$/;
    return validDialPattern.test(cleaned);
}
function transformErrorCode(code: number): MakePhoneCallErrorCode {
    switch(code){
        case 401:
        case 8300001:
            return 1500602;
        case 8300003:
            return 1500603;
    }
    return 1500603;
}
const makePhoneCall: MakePhoneCall = defineAsyncApi<MakePhoneCallOptions, MakePhoneCallSuccess>(API_MAKE_PHONE_CALL, (options: MakePhoneCallOptions, res: ApiExecutor<MakePhoneCallSuccess>)=>{
    const phoneNumber = options.phoneNumber;
    if (!isValidPhoneRules(phoneNumber)) {
        const err = new MakePhoneCallErrorImpl(1500602);
        res.reject(err.errMsg, err as ApiError);
        return;
    }
    try {
        call.makeCall(phoneNumber).then(res.resolve).catch((err: BusinessError<void>)=>{
            const error = new MakePhoneCallErrorImpl(transformErrorCode(err.code));
            res.reject(error.errMsg, error as ApiError);
        });
    } catch (e) {
        const error = new MakePhoneCallErrorImpl(transformErrorCode((e as BusinessError).code));
        res.reject(error.errMsg, error as ApiError);
    }
}, MakePhoneCallProtocol) as MakePhoneCall;
export { IMakePhoneCallError as IMakePhoneCallError, MakePhoneCall as MakePhoneCall, MakePhoneCallComplete as MakePhoneCallComplete, MakePhoneCallCompleteCallback as MakePhoneCallCompleteCallback, MakePhoneCallErrorCode as MakePhoneCallErrorCode, MakePhoneCallFail as MakePhoneCallFail, MakePhoneCallFailCallback as MakePhoneCallFailCallback, MakePhoneCallOptions as MakePhoneCallOptions, MakePhoneCallSuccess as MakePhoneCallSuccess, MakePhoneCallSuccessCallback as MakePhoneCallSuccessCallback };
export { makePhoneCall as makePhoneCall };
