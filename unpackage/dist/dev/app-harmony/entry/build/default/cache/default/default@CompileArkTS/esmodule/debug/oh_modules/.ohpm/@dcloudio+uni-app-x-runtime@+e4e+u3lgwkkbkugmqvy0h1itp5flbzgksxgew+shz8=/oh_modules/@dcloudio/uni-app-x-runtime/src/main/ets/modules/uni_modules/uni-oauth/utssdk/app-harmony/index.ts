import { UTSObject, defineAsyncApi, getUniProvider } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import type { UniProvider, IUniError, ProtocolOptions, ApiExecutor } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
interface UniOAuthProvider extends UniProvider {
    login(options: LoginOptions): void;
    getUserInfo(options: GetUserInfoOptions): void;
}
type Login = (options: LoginOptions) => void;
class AppleLoginAppleInfo extends UTSObject {
    authorizationCode: string | null = null;
    fullName: Object | null = null;
    identityToken: string | null = null;
    realUserStatus: number | null = null;
    user: string | null = null;
}
class LoginSuccess extends UTSObject {
    errMsg: string | null = null;
    authResult!: Object;
    code!: string;
    anonymousCode: string | null = null;
    authCode: string | null = null;
    authErrorScope: Object | null = null;
    authSucessScope: (string[]) | null = null;
    appleInfo: AppleLoginAppleInfo | null = null;
}
type LoginSuccessCallback = (result: LoginSuccess) => void;
type LoginFail = IOauthFail;
type LoginFailCallback = (result: LoginFail) => void;
type LoginComplete = Object;
type LoginCompleteCallback = (result: LoginComplete) => void;
class LoginOptions extends UTSObject {
    provider: 'weixin' | 'qq' | 'sinaweibo' | 'xiaomi' | 'apple' | 'huawei' | null = null;
    scopes: Object | null = null;
    timeout: number | null = null;
    onlyAuthorize: boolean | null = null;
    success: LoginSuccessCallback | null = null;
    fail: LoginFailCallback | null = null;
    complete: LoginCompleteCallback | null = null;
}
class UniverifyIconStyles extends UTSObject {
    path!: string;
    width: string | null = null;
    height: string | null = null;
}
class UniverifyPhoneNumStyles extends UTSObject {
    color: string | null = null;
    fontSize: string | null = null;
}
class UniverifySloganStyles extends UTSObject {
    color: string | null = null;
    fontSize: string | null = null;
}
class UniverifyAuthButtonStyles extends UTSObject {
    normalColor: string | null = null;
    highlightColor: string | null = null;
    disabledColor: string | null = null;
    width: string | null = null;
    height: string | null = null;
    textColor: string | null = null;
    title: string | null = null;
    borderRadius: string | null = null;
}
class UniverifyOtherButtonStyles extends UTSObject {
    visible: boolean | null = null;
    normalColor: string | null = null;
    highlightColor: string | null = null;
    width: string | null = null;
    height: string | null = null;
    textColor: string | null = null;
    title: string | null = null;
    borderWidth: string | null = null;
    borderColor: string | null = null;
    borderRadius: string | null = null;
}
class UniverifyPrivacyItemStyles extends UTSObject {
    url!: string;
    title!: string;
}
class UniverifyPrivacyTermsStyles extends UTSObject {
    defaultCheckBoxState: boolean | null = null;
    textColor: string | null = null;
    termsColor: string | null = null;
    prefix: string | null = null;
    suffix: string | null = null;
    fontSize: string | null = null;
    privacyItems: (UniverifyPrivacyItemStyles[]) | null = null;
}
class UniVerifyButtonListItem extends UTSObject {
    provider!: string;
    iconPath!: string;
}
class UniVerifyButtonsStyles extends UTSObject {
    iconWidth: string | null = null;
    list!: UniVerifyButtonListItem[];
}
class UniverifyStyle extends UTSObject {
    fullScreen: boolean | null = null;
    backgroundColor: string | null = null;
    backgroundImage: string | null = null;
    icon: UniverifyIconStyles | null = null;
    phoneNum: UniverifyPhoneNumStyles | null = null;
    slogan: UniverifySloganStyles | null = null;
    authButton: UniverifyAuthButtonStyles | null = null;
    otherLoginButton: UniverifyOtherButtonStyles | null = null;
    privacyTerms: UniverifyPrivacyTermsStyles | null = null;
    buttons: UniVerifyButtonsStyles | null = null;
}
type GetUserInfo = (options: GetUserInfoOptions) => void;
class UserInfo extends UTSObject {
    nickName!: string;
    openId: string | null = null;
    avatarUrl!: string;
    gender: '0' | '1' | '2' | null = null;
}
class GetUserInfoSuccess extends UTSObject {
    userInfo!: UserInfo;
    rawData: string | null = null;
    signature: string | null = null;
    encryptedData: string | null = null;
    iv: string | null = null;
    errMsg!: string;
}
type GetUserInfoSuccessCallback = (result: GetUserInfoSuccess) => void;
type GetUserInfoFail = IUniError;
type GetUserInfoFailCallback = (result: GetUserInfoFail) => void;
type GetUserInfoComplete = Object;
type GetUserInfoCompleteCallback = (result: GetUserInfoComplete) => void;
class GetUserInfoOptions extends UTSObject {
    provider: 'weixin' | 'qq' | 'sinaweibo' | 'xiaomi' | 'apple' | 'huawei' | null = null;
    withCredentials: boolean | null = null;
    lang: string | null = null;
    timeout: number | null = null;
    success: GetUserInfoSuccessCallback | null = null;
    fail: GetUserInfoFailCallback | null = null;
    complete: GetUserInfoCompleteCallback | null = null;
}
interface IOauthFail extends IUniError {
    errCode: OauthErrorCode;
}
type OauthErrorCode = 1310500 | 1310501 | 1310502 | 1310503 | 1310504 | 1310505 | 1310506 | 1310507 | 1310508 | 1310509 | 1310510 | 1310511 | 1310512 | 1310513 | 1001502040 | 1310600;
const API_LOGIN = 'login';
const LoginApiProtocol = new Map<string, ProtocolOptions>([
    [
        'provider',
        {
            type: 'string'
        }
    ],
    [
        'timeout',
        {
            type: 'number'
        }
    ]
]);
const API_GET_USER_INFO = 'getUserInfo';
const GetUserInfoApiProtocol = new Map<string, ProtocolOptions>([
    [
        'provider',
        {
            type: 'string'
        }
    ],
    [
        'timeout',
        {
            type: 'number'
        }
    ]
]);
const SERVICE = 'oauth';
const PROVIDER = 'huawei';
const login: Login = defineAsyncApi<LoginOptions, LoginSuccess>(API_LOGIN, (args: LoginOptions, executor: ApiExecutor<LoginSuccess>) => {
    const provider = getUniProvider<UniOAuthProvider>(SERVICE, args.provider ?? PROVIDER);
    if (!provider) {
        executor.reject('Provider not found.');
        return;
    }
    provider.login({
        provider: args.provider,
        scopes: args.scopes,
        timeout: args.timeout,
        onlyAuthorize: args.onlyAuthorize,
        success(res) {
            executor.resolve(res);
        },
        fail(err) {
            executor.reject(err.errMsg);
        }
    } as LoginOptions);
}, LoginApiProtocol) as Login;
const getUserInfo: GetUserInfo = defineAsyncApi<GetUserInfoOptions, GetUserInfoSuccess>(API_GET_USER_INFO, (args: GetUserInfoOptions, executor: ApiExecutor<GetUserInfoSuccess>) => {
    const provider = getUniProvider<UniOAuthProvider>(SERVICE, args.provider ?? PROVIDER);
    if (!provider) {
        executor.reject('Provider not found.');
        return;
    }
    provider.getUserInfo({
        provider: args.provider,
        withCredentials: args.withCredentials,
        timeout: args.timeout,
        lang: args.lang,
        success(res) {
            executor.resolve(res);
        },
        fail(err) {
            executor.reject(err.errMsg);
        }
    } as GetUserInfoOptions);
}, GetUserInfoApiProtocol) as GetUserInfo;
export { AppleLoginAppleInfo as AppleLoginAppleInfo, GetUserInfoOptions as GetUserInfoOptions, GetUserInfoSuccess as GetUserInfoSuccess, LoginOptions as LoginOptions, LoginSuccess as LoginSuccess, UniVerifyButtonListItem as UniVerifyButtonListItem, UniVerifyButtonsStyles as UniVerifyButtonsStyles, UniverifyAuthButtonStyles as UniverifyAuthButtonStyles, UniverifyIconStyles as UniverifyIconStyles, UniverifyOtherButtonStyles as UniverifyOtherButtonStyles, UniverifyPhoneNumStyles as UniverifyPhoneNumStyles, UniverifyPrivacyItemStyles as UniverifyPrivacyItemStyles, UniverifyPrivacyTermsStyles as UniverifyPrivacyTermsStyles, UniverifySloganStyles as UniverifySloganStyles, UniverifyStyle as UniverifyStyle, UserInfo as UserInfo };
export type { GetUserInfo as GetUserInfo, GetUserInfoComplete as GetUserInfoComplete, GetUserInfoCompleteCallback as GetUserInfoCompleteCallback, GetUserInfoFail as GetUserInfoFail, GetUserInfoFailCallback as GetUserInfoFailCallback, GetUserInfoSuccessCallback as GetUserInfoSuccessCallback, IOauthFail as IOauthFail, Login as Login, LoginComplete as LoginComplete, LoginCompleteCallback as LoginCompleteCallback, LoginFail as LoginFail, LoginFailCallback as LoginFailCallback, LoginSuccessCallback as LoginSuccessCallback, OauthErrorCode as OauthErrorCode, UniOAuthProvider as UniOAuthProvider };
export { login as login };
export { getUserInfo as getUserInfo };
