import type { BusinessError } from "@ohos:base";
import { UTSObject, UTS, defineAsyncApi, UTSHarmony } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import type { IUniError, ApiOptions, ProtocolOptions, ApiExecutor, ApiError } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import promptAction from "@ohos:promptAction";
import userAuth from "@ohos:userIAM.userAuth";
type StartSoterAuthentication = (options: StartSoterAuthenticationOptions) => void;
type SoterAuthMode = 'fingerPrint' | 'facial' | 'speech';
class StartSoterAuthenticationSuccess extends UTSObject {
    errCode!: number;
    authMode!: SoterAuthMode;
    resultJSON: string | null = null;
    resultJSONSignature: string | null = null;
    errMsg!: string;
}
type StartSoterAuthenticationSuccessCallback = (result: StartSoterAuthenticationSuccess) => void;
interface IStartSoterAuthenticationFail extends IUniError {
}
type StartSoterAuthenticationFail = IStartSoterAuthenticationFail;
type StartSoterAuthenticationFailCallback = (result: StartSoterAuthenticationFail) => void;
type StartSoterAuthenticationComplete = StartSoterAuthenticationSuccess | StartSoterAuthenticationFail;
type StartSoterAuthenticationCompleteCallback = (result: StartSoterAuthenticationComplete) => void;
class StartSoterAuthenticationOptions extends UTSObject {
    requestAuthModes!: SoterAuthMode[];
    challenge: string | null = null;
    authContent: string | null = null;
    success: StartSoterAuthenticationSuccessCallback | null = null;
    fail: StartSoterAuthenticationFailCallback | null = null;
    complete: StartSoterAuthenticationCompleteCallback | null = null;
}
type CheckIsSupportSoterAuthentication = (options: CheckIsSupportSoterAuthenticationOptions) => void;
class CheckIsSupportSoterAuthenticationSuccess extends UTSObject {
    supportMode!: SoterAuthMode[];
    errMsg!: string;
}
type CheckIsSupportSoterAuthenticationSuccessCallback = (result: CheckIsSupportSoterAuthenticationSuccess) => void;
interface ICheckIsSupportSoterAuthenticationFail extends IUniError {
}
type CheckIsSupportSoterAuthenticationFail = ICheckIsSupportSoterAuthenticationFail;
type CheckIsSupportSoterAuthenticationFailCallback = (result: CheckIsSupportSoterAuthenticationFail) => void;
type CheckIsSupportSoterAuthenticationComplete = CheckIsSupportSoterAuthenticationSuccess | CheckIsSupportSoterAuthenticationFail;
type CheckIsSupportSoterAuthenticationCompleteCallback = (result: CheckIsSupportSoterAuthenticationComplete) => void;
class CheckIsSupportSoterAuthenticationOptions extends UTSObject {
    success: CheckIsSupportSoterAuthenticationSuccessCallback | null = null;
    fail: CheckIsSupportSoterAuthenticationFailCallback | null = null;
    complete: CheckIsSupportSoterAuthenticationCompleteCallback | null = null;
}
type CheckIsSoterEnrolledInDevice = (options: CheckIsSoterEnrolledInDeviceOptions) => void;
class CheckIsSoterEnrolledInDeviceSuccess extends UTSObject {
    isEnrolled!: boolean;
    errMsg!: string;
}
type CheckIsSoterEnrolledInDeviceSuccessCallback = (result: CheckIsSoterEnrolledInDeviceSuccess) => void;
interface ICheckIsSoterEnrolledInDeviceFail extends IUniError {
}
type CheckIsSoterEnrolledInDeviceFail = ICheckIsSoterEnrolledInDeviceFail;
type CheckIsSoterEnrolledInDeviceFailCallback = (result: CheckIsSoterEnrolledInDeviceFail) => void;
type CheckIsSoterEnrolledInDeviceComplete = CheckIsSoterEnrolledInDeviceSuccess | CheckIsSoterEnrolledInDeviceFail;
type CheckIsSoterEnrolledInDeviceCompleteCallback = (result: CheckIsSoterEnrolledInDeviceComplete) => void;
class CheckIsSoterEnrolledInDeviceOptions extends UTSObject {
    checkAuthMode!: SoterAuthMode;
    success: CheckIsSoterEnrolledInDeviceSuccessCallback | null = null;
    fail: CheckIsSoterEnrolledInDeviceFailCallback | null = null;
    complete: CheckIsSoterEnrolledInDeviceCompleteCallback | null = null;
}
const API_START_SOTER_AUTHENTICATION = 'startSoterAuthentication';
const StartSoterAuthenticationApiOptions: ApiOptions<StartSoterAuthenticationOptions> = {
    formatArgs: new Map<string, ((value: string) => string | undefined)>([
        [
            'requestAuthModes',
            (value: string) => {
                if (!value.includes('fingerPrint') && !value.includes('facial')) {
                    return 'requestAuthModes 填写错误';
                }
                return undefined;
            }
        ]
    ])
};
const StartSoterAuthenticationApiProtocols = new Map<string, ProtocolOptions>([
    [
        'requestAuthModes',
        {
            type: 'array',
            required: true
        }
    ],
    [
        'challenge',
        {
            type: 'string',
            required: true
        }
    ],
    [
        'authContent',
        {
            type: 'string'
        }
    ]
]);
const API_CHECK_IS_SOTER_ENROLLED_IN_DEVICE = 'checkIsSoterEnrolledInDevice';
const checkAuthModes: SoterAuthMode[] = [
    'fingerPrint',
    'facial',
    'speech'
];
const CheckIsSoterEnrolledInDeviceApiOptions: ApiOptions<CheckIsSoterEnrolledInDeviceOptions> = {
    formatArgs: new Map<string, ((value: string) => string | undefined)>([
        [
            'checkAuthMode',
            (value: string) => {
                if (!checkAuthModes.includes(value as SoterAuthMode)) {
                    return 'checkAuthMode 填写错误';
                }
                return undefined;
            }
        ]
    ])
};
const CheckIsSoterEnrolledInDeviceProtocols = new Map<string, ProtocolOptions>([
    [
        'checkAuthMode',
        {
            type: 'string'
        }
    ]
]);
const API_CHECK_IS_SUPPORT_SOTER_AUTHENTICATION = 'checkIsSupportSoterAuthentication';
const AuthenticationUniErrors: Map<number, string> = new Map([
    [
        61001,
        'permission denied'
    ],
    [
        61002,
        'biometric authentication is unavailable'
    ],
    [
        61003,
        'invalid parameter'
    ],
    [
        61004,
        'unknown error'
    ],
    [
        61005,
        'user cancelled'
    ],
    [
        61006,
        'authentication failed'
    ],
    [
        61007,
        'biometric service locked or busy'
    ],
    [
        61008,
        'biometric info not enrolled'
    ],
    [
        61009,
        'screen lock credential expired'
    ],
    [
        71001,
        'android activity is unavailable'
    ],
    [
        71002,
        'android secure lock screen is disabled'
    ],
    [
        71003,
        'android system version does not support the requested biometric mode'
    ],
    [
        81001,
        'ios authentication context is invalid'
    ],
    [
        51001,
        'harmony biometric authentication timed out'
    ],
    [
        51002,
        'harmony authentication switched to system widget flow'
    ]
]);
function getAuthenticationErrorMessage(errCode: number): string {
    return UTS.mapGet(AuthenticationUniErrors, errCode) ?? '';
}
function getErrorCode(code: number): number {
    switch (code) {
        case 201:
            return 61001;
        case 401:
            return 61003;
        case userAuth.UserAuthResultCode.FAIL:
            return 61006;
        case userAuth.UserAuthResultCode.GENERAL_ERROR:
            return 61004;
        case userAuth.UserAuthResultCode.CANCELED:
            return 61005;
        case userAuth.UserAuthResultCode.TIMEOUT:
            return 51001;
        case userAuth.UserAuthResultCode.TYPE_NOT_SUPPORT:
            return 61002;
        case userAuth.UserAuthResultCode.TRUST_LEVEL_NOT_SUPPORT:
            return 61002;
        case userAuth.UserAuthResultCode.BUSY:
            return 61007;
        case userAuth.UserAuthResultCode.LOCKED:
            return 61007;
        case userAuth.UserAuthResultCode.NOT_ENROLLED:
            return 61008;
        case userAuth.UserAuthResultCode.CANCELED_FROM_WIDGET:
            return 51002;
        case 12500013:
            return 61009;
        default:
            return 61004;
    }
}
function getRejectMessage(apiName: string, errCode: number): string {
    return apiName + ':fail ' + getAuthenticationErrorMessage(errCode);
}
function rejectExecutor<T>(executor: ApiExecutor<T>, apiName: string, nativeCode: number): void {
    const errCode = getErrorCode(nativeCode);
    executor.reject(getRejectMessage(apiName, errCode), {
        errCode
    } as ApiError);
}
function toUint8Arr(str: string): Uint8Array {
    const buffer: number[] = [];
    for (let i of str) {
        const _code: number = i.charCodeAt(0);
        if (_code < 0x80) {
            buffer.push(_code);
        }
        else if (_code < 0x800) {
            buffer.push(0xc0 + (_code >> 6));
            buffer.push(0x80 + (_code & 0x3f));
        }
        else if (_code < 0x10000) {
            buffer.push(0xe0 + (_code >> 12));
            buffer.push(0x80 + (_code >> 6 & 0x3f));
            buffer.push(0x80 + (_code & 0x3f));
        }
    }
    return Uint8Array.from(buffer);
}
const startSoterAuthentication: StartSoterAuthentication = defineAsyncApi<StartSoterAuthenticationOptions, StartSoterAuthenticationSuccess>(API_START_SOTER_AUTHENTICATION, (args: StartSoterAuthenticationOptions, executor: ApiExecutor<StartSoterAuthenticationSuccess>) => {
    const authType: userAuth.UserAuthType[] = [];
    args.requestAuthModes.forEach((item) => {
        if (item == 'fingerPrint') {
            authType.push(userAuth.UserAuthType.FINGERPRINT);
        }
        else if (item == 'facial') {
            authType.push(userAuth.UserAuthType.FACE);
        }
    });
    const challengeArr = toUint8Arr(args.challenge ?? '');
    const authContent = args.authContent ?? '';
    try {
        const auth = userAuth.getUserAuthInstance({
            challenge: challengeArr,
            authType,
            authTrustLevel: userAuth.AuthTrustLevel.ATL1
        } as userAuth.AuthParam, {
            title: authContent
        } as userAuth.WidgetParam);
        auth.on("result", {
            onResult: (result: userAuth.UserAuthResult) => {
                if (result.result == userAuth.UserAuthResultCode.SUCCESS) {
                    executor.resolve({
                        errCode: 0,
                        authMode: result.authType == userAuth.UserAuthType.FINGERPRINT ? 'fingerPrint' : 'facial'
                    } as StartSoterAuthenticationSuccess);
                }
                else {
                    rejectExecutor(executor, 'startSoterAuthentication', result.result);
                }
            }
        } as userAuth.IAuthCallback);
        if (authContent.length > 0) {
            promptAction.showToast({
                message: authContent
            } as promptAction.ShowToastOptions);
        }
        auth.start();
    }
    catch (error) {
        const code = (error as BusinessError).code;
        rejectExecutor(executor, 'startSoterAuthentication', code);
    }
}, StartSoterAuthenticationApiProtocols, StartSoterAuthenticationApiOptions) as StartSoterAuthentication;
function fingerPrintAvailable(): boolean {
    try {
        userAuth.getAvailableStatus(userAuth.UserAuthType.FINGERPRINT, userAuth.AuthTrustLevel.ATL1);
        return true;
    }
    catch (error) {
        if ([
            userAuth.UserAuthResultCode.NOT_ENROLLED,
            userAuth.UserAuthResultCode.PIN_EXPIRED
        ].includes((error as BusinessError).code)) {
            return true;
        }
        return false;
    }
}
function faceAvailable(): boolean {
    try {
        userAuth.getAvailableStatus(userAuth.UserAuthType.FACE, userAuth.AuthTrustLevel.ATL1);
        return true;
    }
    catch (error) {
        if ([
            userAuth.UserAuthResultCode.NOT_ENROLLED,
            userAuth.UserAuthResultCode.PIN_EXPIRED
        ].includes((error as BusinessError).code)) {
            return true;
        }
        return false;
    }
}
const PERMISSIONS = [
    'ohos.permission.ACCESS_BIOMETRIC'
];
const checkIsSupportSoterAuthentication: CheckIsSupportSoterAuthentication = defineAsyncApi<CheckIsSupportSoterAuthenticationOptions, CheckIsSupportSoterAuthenticationSuccess>(API_CHECK_IS_SUPPORT_SOTER_AUTHENTICATION, (args: CheckIsSupportSoterAuthenticationOptions, executor: ApiExecutor<CheckIsSupportSoterAuthenticationSuccess>) => {
    UTSHarmony.requestSystemPermission(PERMISSIONS, (allRight: boolean) => {
        if (allRight) {
            try {
                const supportMode: SoterAuthMode[] = [];
                if (fingerPrintAvailable())
                    supportMode.push('fingerPrint');
                if (faceAvailable())
                    supportMode.push('facial');
                executor.resolve({
                    supportMode,
                    errMsg: ''
                } as CheckIsSupportSoterAuthenticationSuccess);
            }
            catch (error) {
                const code = (error as BusinessError).code;
                rejectExecutor(executor, 'checkIsSupportSoterAuthentication', code);
            }
        }
        else {
            rejectExecutor(executor, 'checkIsSupportSoterAuthentication', 201);
        }
    }, () => {
        rejectExecutor(executor, 'checkIsSupportSoterAuthentication', 201);
    });
}) as CheckIsSupportSoterAuthentication;
function getFingerPrintEnrolledState(): boolean {
    userAuth.getEnrolledState(userAuth.UserAuthType.FINGERPRINT);
    return true;
}
function getFaceEnrolledState(): boolean {
    userAuth.getEnrolledState(userAuth.UserAuthType.FACE);
    return true;
}
function harmonyCheckIsSoterEnrolledInDevice(checkAuthMode: SoterAuthMode): boolean {
    if (checkAuthMode == 'fingerPrint') {
        return getFingerPrintEnrolledState();
    }
    else if (checkAuthMode == 'facial') {
        return getFaceEnrolledState();
    }
    return false;
}
const checkIsSoterEnrolledInDevice: CheckIsSoterEnrolledInDevice = defineAsyncApi<CheckIsSoterEnrolledInDeviceOptions, CheckIsSoterEnrolledInDeviceSuccess>(API_CHECK_IS_SOTER_ENROLLED_IN_DEVICE, (args: CheckIsSoterEnrolledInDeviceOptions, executor: ApiExecutor<CheckIsSoterEnrolledInDeviceSuccess>) => {
    UTSHarmony.requestSystemPermission(PERMISSIONS, (allRight: boolean) => {
        if (allRight) {
            try {
                const isEnrolled = harmonyCheckIsSoterEnrolledInDevice(args.checkAuthMode);
                executor.resolve({
                    isEnrolled,
                    errMsg: ''
                } as CheckIsSoterEnrolledInDeviceSuccess);
            }
            catch (error) {
                const code = (error as BusinessError).code;
                rejectExecutor(executor, 'checkIsSoterEnrolledInDevice', code);
            }
        }
        else {
            rejectExecutor(executor, 'checkIsSoterEnrolledInDevice', 201);
        }
    }, () => {
        rejectExecutor(executor, 'checkIsSoterEnrolledInDevice', 201);
    });
}, CheckIsSoterEnrolledInDeviceProtocols, CheckIsSoterEnrolledInDeviceApiOptions) as CheckIsSoterEnrolledInDevice;
export { CheckIsSoterEnrolledInDeviceOptions as CheckIsSoterEnrolledInDeviceOptions, CheckIsSoterEnrolledInDeviceSuccess as CheckIsSoterEnrolledInDeviceSuccess, CheckIsSupportSoterAuthenticationOptions as CheckIsSupportSoterAuthenticationOptions, CheckIsSupportSoterAuthenticationSuccess as CheckIsSupportSoterAuthenticationSuccess, StartSoterAuthenticationOptions as StartSoterAuthenticationOptions, StartSoterAuthenticationSuccess as StartSoterAuthenticationSuccess };
export type { CheckIsSoterEnrolledInDevice as CheckIsSoterEnrolledInDevice, CheckIsSoterEnrolledInDeviceComplete as CheckIsSoterEnrolledInDeviceComplete, CheckIsSoterEnrolledInDeviceCompleteCallback as CheckIsSoterEnrolledInDeviceCompleteCallback, CheckIsSoterEnrolledInDeviceFail as CheckIsSoterEnrolledInDeviceFail, CheckIsSoterEnrolledInDeviceFailCallback as CheckIsSoterEnrolledInDeviceFailCallback, CheckIsSoterEnrolledInDeviceSuccessCallback as CheckIsSoterEnrolledInDeviceSuccessCallback, CheckIsSupportSoterAuthentication as CheckIsSupportSoterAuthentication, CheckIsSupportSoterAuthenticationComplete as CheckIsSupportSoterAuthenticationComplete, CheckIsSupportSoterAuthenticationCompleteCallback as CheckIsSupportSoterAuthenticationCompleteCallback, CheckIsSupportSoterAuthenticationFail as CheckIsSupportSoterAuthenticationFail, CheckIsSupportSoterAuthenticationFailCallback as CheckIsSupportSoterAuthenticationFailCallback, CheckIsSupportSoterAuthenticationSuccessCallback as CheckIsSupportSoterAuthenticationSuccessCallback, SoterAuthMode as SoterAuthMode, StartSoterAuthentication as StartSoterAuthentication, StartSoterAuthenticationComplete as StartSoterAuthenticationComplete, StartSoterAuthenticationCompleteCallback as StartSoterAuthenticationCompleteCallback, StartSoterAuthenticationFail as StartSoterAuthenticationFail, StartSoterAuthenticationFailCallback as StartSoterAuthenticationFailCallback, StartSoterAuthenticationSuccessCallback as StartSoterAuthenticationSuccessCallback };
export type { ICheckIsSoterEnrolledInDeviceFail as ICheckIsSoterEnrolledInDeviceFail, ICheckIsSupportSoterAuthenticationFail as ICheckIsSupportSoterAuthenticationFail, IStartSoterAuthenticationFail as IStartSoterAuthenticationFail };
export { startSoterAuthentication as startSoterAuthentication };
export { checkIsSupportSoterAuthentication as checkIsSupportSoterAuthentication };
export { checkIsSoterEnrolledInDevice as checkIsSoterEnrolledInDevice };
