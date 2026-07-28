import { UniProvider, UTSObject, IUniError } from "@dcloudio/uni-app-framework";
interface UniOAuthProvider extends UniProvider {
    login(options: LoginOptions): void;
    getUserInfo(options: GetUserInfoOptions): void;
}
type Login = (options: LoginOptions) => void;
declare class AppleLoginAppleInfo extends UTSObject {
    authorizationCode: string | null;
    fullName: Object | null;
    identityToken: string | null;
    realUserStatus: number | null;
    user: string | null;
}
declare class LoginSuccess extends UTSObject {
    errMsg: string | null;
    authResult: Object;
    code: string;
    anonymousCode: string | null;
    authCode: string | null;
    authErrorScope: Object | null;
    authSucessScope: (string[]) | null;
    appleInfo: AppleLoginAppleInfo | null;
}
type LoginSuccessCallback = (result: LoginSuccess) => void;
type LoginFail = IOauthFail;
type LoginFailCallback = (result: LoginFail) => void;
type LoginComplete = Object;
type LoginCompleteCallback = (result: LoginComplete) => void;
declare class LoginOptions extends UTSObject {
    provider: 'weixin' | 'qq' | 'sinaweibo' | 'xiaomi' | 'apple' | 'huawei' | null;
    scopes: Object | null;
    timeout: number | null;
    onlyAuthorize: boolean | null;
    success: LoginSuccessCallback | null;
    fail: LoginFailCallback | null;
    complete: LoginCompleteCallback | null;
}
declare class UniverifyIconStyles extends UTSObject {
    path: string;
    width: string | null;
    height: string | null;
}
declare class UniverifyPhoneNumStyles extends UTSObject {
    color: string | null;
    fontSize: string | null;
}
declare class UniverifySloganStyles extends UTSObject {
    color: string | null;
    fontSize: string | null;
}
declare class UniverifyAuthButtonStyles extends UTSObject {
    normalColor: string | null;
    highlightColor: string | null;
    disabledColor: string | null;
    width: string | null;
    height: string | null;
    textColor: string | null;
    title: string | null;
    borderRadius: string | null;
}
declare class UniverifyOtherButtonStyles extends UTSObject {
    visible: boolean | null;
    normalColor: string | null;
    highlightColor: string | null;
    width: string | null;
    height: string | null;
    textColor: string | null;
    title: string | null;
    borderWidth: string | null;
    borderColor: string | null;
    borderRadius: string | null;
}
declare class UniverifyPrivacyItemStyles extends UTSObject {
    url: string;
    title: string;
}
declare class UniverifyPrivacyTermsStyles extends UTSObject {
    defaultCheckBoxState: boolean | null;
    textColor: string | null;
    termsColor: string | null;
    prefix: string | null;
    suffix: string | null;
    fontSize: string | null;
    privacyItems: (UniverifyPrivacyItemStyles[]) | null;
}
declare class UniVerifyButtonListItem extends UTSObject {
    provider: string;
    iconPath: string;
}
declare class UniVerifyButtonsStyles extends UTSObject {
    iconWidth: string | null;
    list: UniVerifyButtonListItem[];
}
declare class UniverifyStyle extends UTSObject {
    fullScreen: boolean | null;
    backgroundColor: string | null;
    backgroundImage: string | null;
    icon: UniverifyIconStyles | null;
    phoneNum: UniverifyPhoneNumStyles | null;
    slogan: UniverifySloganStyles | null;
    authButton: UniverifyAuthButtonStyles | null;
    otherLoginButton: UniverifyOtherButtonStyles | null;
    privacyTerms: UniverifyPrivacyTermsStyles | null;
    buttons: UniVerifyButtonsStyles | null;
}
type GetUserInfo = (options: GetUserInfoOptions) => void;
declare class UserInfo extends UTSObject {
    nickName: string;
    openId: string | null;
    avatarUrl: string;
    gender: '0' | '1' | '2' | null;
}
declare class GetUserInfoSuccess extends UTSObject {
    userInfo: UserInfo;
    rawData: string | null;
    signature: string | null;
    encryptedData: string | null;
    iv: string | null;
    errMsg: string;
}
type GetUserInfoSuccessCallback = (result: GetUserInfoSuccess) => void;
type GetUserInfoFail = IUniError;
type GetUserInfoFailCallback = (result: GetUserInfoFail) => void;
type GetUserInfoComplete = Object;
type GetUserInfoCompleteCallback = (result: GetUserInfoComplete) => void;
declare class GetUserInfoOptions extends UTSObject {
    provider: 'weixin' | 'qq' | 'sinaweibo' | 'xiaomi' | 'apple' | 'huawei' | null;
    withCredentials: boolean | null;
    lang: string | null;
    timeout: number | null;
    success: GetUserInfoSuccessCallback | null;
    fail: GetUserInfoFailCallback | null;
    complete: GetUserInfoCompleteCallback | null;
}
interface IOauthFail extends IUniError {
    errCode: OauthErrorCode;
}
type OauthErrorCode = 1310500 | 1310501 | 1310502 | 1310503 | 1310504 | 1310505 | 1310506 | 1310507 | 1310508 | 1310509 | 1310510 | 1310511 | 1310512 | 1310513 | 1001502040 | 1310600;
declare const login: Login;
declare const getUserInfo: GetUserInfo;
export { AppleLoginAppleInfo as AppleLoginAppleInfo, GetUserInfo as GetUserInfo, GetUserInfoComplete as GetUserInfoComplete, GetUserInfoCompleteCallback as GetUserInfoCompleteCallback, GetUserInfoFail as GetUserInfoFail, GetUserInfoFailCallback as GetUserInfoFailCallback, GetUserInfoOptions as GetUserInfoOptions, GetUserInfoSuccess as GetUserInfoSuccess, GetUserInfoSuccessCallback as GetUserInfoSuccessCallback, IOauthFail as IOauthFail, Login as Login, LoginComplete as LoginComplete, LoginCompleteCallback as LoginCompleteCallback, LoginFail as LoginFail, LoginFailCallback as LoginFailCallback, LoginOptions as LoginOptions, LoginSuccess as LoginSuccess, LoginSuccessCallback as LoginSuccessCallback, OauthErrorCode as OauthErrorCode, UniOAuthProvider as UniOAuthProvider, UniVerifyButtonListItem as UniVerifyButtonListItem, UniVerifyButtonsStyles as UniVerifyButtonsStyles, UniverifyAuthButtonStyles as UniverifyAuthButtonStyles, UniverifyIconStyles as UniverifyIconStyles, UniverifyOtherButtonStyles as UniverifyOtherButtonStyles, UniverifyPhoneNumStyles as UniverifyPhoneNumStyles, UniverifyPrivacyItemStyles as UniverifyPrivacyItemStyles, UniverifyPrivacyTermsStyles as UniverifyPrivacyTermsStyles, UniverifySloganStyles as UniverifySloganStyles, UniverifyStyle as UniverifyStyle, UserInfo as UserInfo };
export { login as login };
export { getUserInfo as getUserInfo };
