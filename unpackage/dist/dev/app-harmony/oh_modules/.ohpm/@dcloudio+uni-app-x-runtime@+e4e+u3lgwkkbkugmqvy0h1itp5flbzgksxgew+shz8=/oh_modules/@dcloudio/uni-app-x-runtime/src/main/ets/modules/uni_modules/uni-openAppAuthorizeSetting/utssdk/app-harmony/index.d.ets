import { UTSObject } from "@dcloudio/uni-app-framework";
type OpenAppAuthorizeSetting = (options: OpenAppAuthorizeSettingOptions) => void;
declare class OpenAppAuthorizeSettingSuccess extends UTSObject {
    errMsg: string;
}
type OpenAppAuthorizeSettingSuccessCallback = (result: OpenAppAuthorizeSettingSuccess) => void;
declare class OpenAppAuthorizeSettingFail extends UTSObject {
    errMsg: string;
}
type OpenAppAuthorizeSettingFailCallback = (result: OpenAppAuthorizeSettingFail) => void;
declare class OpenAppAuthorizeSettingComplete extends UTSObject {
    errMsg: string;
}
type OpenAppAuthorizeSettingCompleteCallback = (result: OpenAppAuthorizeSettingComplete) => void;
declare class OpenAppAuthorizeSettingOptions extends UTSObject {
    success: OpenAppAuthorizeSettingSuccessCallback | null;
    fail: OpenAppAuthorizeSettingFailCallback | null;
    complete: OpenAppAuthorizeSettingCompleteCallback | null;
}
declare const openAppAuthorizeSetting: OpenAppAuthorizeSetting;
export { OpenAppAuthorizeSetting as OpenAppAuthorizeSetting, OpenAppAuthorizeSettingComplete as OpenAppAuthorizeSettingComplete, OpenAppAuthorizeSettingCompleteCallback as OpenAppAuthorizeSettingCompleteCallback, OpenAppAuthorizeSettingFail as OpenAppAuthorizeSettingFail, OpenAppAuthorizeSettingFailCallback as OpenAppAuthorizeSettingFailCallback, OpenAppAuthorizeSettingOptions as OpenAppAuthorizeSettingOptions, OpenAppAuthorizeSettingSuccess as OpenAppAuthorizeSettingSuccess, OpenAppAuthorizeSettingSuccessCallback as OpenAppAuthorizeSettingSuccessCallback };
export { openAppAuthorizeSetting as openAppAuthorizeSetting };
