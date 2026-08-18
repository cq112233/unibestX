import { UTSObject, UniError } from "@dcloudio/uni-app-framework";
type GetSystemInfo = (options: GetSystemInfoOptions) => void;
type GetSystemInfoSync = () => GetSystemInfoResult;
type GetWindowInfo = () => GetWindowInfoResult;
declare class SafeArea extends UTSObject {
    left: number;
    right: number;
    top: number;
    bottom: number;
    width: number;
    height: number;
}
declare class SafeAreaInsets extends UTSObject {
    left: number;
    right: number;
    top: number;
    bottom: number;
}
declare class CutoutRect extends UTSObject {
    left: number;
    right: number;
    top: number;
    bottom: number;
}
declare class GetSystemInfoResult extends UTSObject {
    SDKVersion: string;
    appId: string;
    appLanguage: string;
    appName: string;
    appVersion: string;
    appVersionCode: string;
    appWgtVersion: string | null;
    brand: string;
    browserName: string;
    browserVersion: string;
    deviceId: string;
    deviceBrand: string;
    deviceModel: string;
    deviceType: 'phone' | 'pad' | 'tv' | 'watch' | 'pc' | 'undefined' | 'car' | 'vr' | 'appliance';
    devicePixelRatio: number;
    deviceOrientation: 'portrait' | 'landscape';
    language: string;
    model: string | null;
    osName: 'ios' | 'android' | 'harmonyos' | 'macos' | 'windows' | 'linux';
    osVersion: string;
    osLanguage: string;
    osTheme: 'light' | 'dark' | null;
    pixelRatio: number;
    platform: 'ios' | 'android' | 'harmonyos' | 'mac' | 'windows' | 'linux';
    screenWidth: number;
    screenHeight: number;
    statusBarHeight: number;
    system: string;
    safeArea: SafeArea;
    safeAreaInsets: SafeAreaInsets;
    ua: string;
    uniCompileVersion: string;
    uniCompilerVersion: string;
    uniPlatform: 'app' | 'web' | 'mp-weixin' | 'mp-alipay' | 'mp-baidu' | 'mp-toutiao' | 'mp-lark' | 'mp-qq' | 'mp-kuaishou' | 'mp-jd' | 'mp-360' | 'quickapp-webview' | 'quickapp-webview-union' | 'quickapp-webview-huawei';
    uniRuntimeVersion: string;
    uniCompileVersionCode: number;
    uniCompilerVersionCode: number;
    uniRuntimeVersionCode: number;
    version: string;
    romName: string;
    romVersion: string;
    windowWidth: number;
    windowHeight: number;
    windowTop: number;
    windowBottom: number;
    osAndroidAPILevel: number | null;
    osHarmonySDKAPIVersion: number | null;
    osHarmonyDisplayVersion: string | null;
    appTheme: 'light' | 'dark' | 'auto' | null;
    hostTheme: 'light' | 'dark' | null;
    hostVersion: string | null;
    hostLanguage: string | null;
    hostName: string | null;
    hostSDKVersion: string | null;
    hostFontSizeSetting: number | null;
}
type GetSystemInfoSuccessCallback = (result: GetSystemInfoResult) => void;
type GetSystemInfoFail = UniError;
type GetSystemInfoFailCallback = (result: GetSystemInfoFail) => void;
type GetSystemInfoComplete = Object;
type GetSystemInfoCompleteCallback = (result: GetSystemInfoComplete) => void;
declare class GetSystemInfoOptions extends UTSObject {
    success: GetSystemInfoSuccessCallback | null;
    fail: GetSystemInfoFailCallback | null;
    complete: GetSystemInfoCompleteCallback | null;
}
declare class GetWindowInfoResult extends UTSObject {
    pixelRatio: number;
    screenWidth: number;
    screenHeight: number;
    windowWidth: number;
    windowHeight: number;
    statusBarHeight: number;
    windowTop: number;
    windowBottom: number;
    safeArea: SafeArea;
    safeAreaInsets: SafeAreaInsets;
    screenTop: number;
    cutoutArea: Array<CutoutRect> | null;
}
declare const getWindowInfo: GetWindowInfo;
declare const getSystemInfoSync: GetSystemInfoSync;
declare const getSystemInfo: GetSystemInfo;
export { CutoutRect as CutoutRect, GetSystemInfo as GetSystemInfo, GetSystemInfoComplete as GetSystemInfoComplete, GetSystemInfoCompleteCallback as GetSystemInfoCompleteCallback, GetSystemInfoOptions as GetSystemInfoOptions, GetSystemInfoResult as GetSystemInfoResult, GetSystemInfoSuccessCallback as GetSystemInfoSuccessCallback, GetSystemInfoSync as GetSystemInfoSync, GetWindowInfo as GetWindowInfo, GetWindowInfoResult as GetWindowInfoResult, SafeArea as SafeArea, SafeAreaInsets as SafeAreaInsets };
export { getWindowInfo as getWindowInfo };
export { getSystemInfoSync as getSystemInfoSync };
export { getSystemInfo as getSystemInfo };
