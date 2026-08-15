import deviceInfo from '@ohos.deviceInfo';
import I18n from '@ohos.i18n';
import { UTSObject, UniError, defineSyncApi, UTSHarmony, defineAsyncApi, ApiExecutor } from "@dcloudio/uni-app-framework";
import { getWindowInfo as internalGetWindowInfo, getDeviceId } from "@dcloudio/uni-app-framework";
type GetSystemInfo = (options: GetSystemInfoOptions) => void;
type GetSystemInfoSync = () => GetSystemInfoResult;
type GetWindowInfo = () => GetWindowInfoResult;
class SafeArea extends UTSObject {
    left!: number;
    right!: number;
    top!: number;
    bottom!: number;
    width!: number;
    height!: number;
}
class SafeAreaInsets extends UTSObject {
    left!: number;
    right!: number;
    top!: number;
    bottom!: number;
}
class CutoutRect extends UTSObject {
    left!: number;
    right!: number;
    top!: number;
    bottom!: number;
}
class GetSystemInfoResult extends UTSObject {
    SDKVersion!: string;
    appId!: string;
    appLanguage!: string;
    appName!: string;
    appVersion!: string;
    appVersionCode!: string;
    appWgtVersion: string | null = null;
    brand!: string;
    browserName!: string;
    browserVersion!: string;
    deviceId!: string;
    deviceBrand!: string;
    deviceModel!: string;
    deviceType!: 'phone' | 'pad' | 'tv' | 'watch' | 'pc' | 'undefined' | 'car' | 'vr' | 'appliance';
    devicePixelRatio!: number;
    deviceOrientation!: 'portrait' | 'landscape';
    language!: string;
    model: string | null = null;
    osName!: 'ios' | 'android' | 'harmonyos' | 'macos' | 'windows' | 'linux';
    osVersion!: string;
    osLanguage!: string;
    osTheme: 'light' | 'dark' | null = null;
    pixelRatio!: number;
    platform!: 'ios' | 'android' | 'harmonyos' | 'mac' | 'windows' | 'linux';
    screenWidth!: number;
    screenHeight!: number;
    statusBarHeight!: number;
    system!: string;
    safeArea!: SafeArea;
    safeAreaInsets!: SafeAreaInsets;
    ua!: string;
    uniCompileVersion!: string;
    uniCompilerVersion!: string;
    uniPlatform!: 'app' | 'web' | 'mp-weixin' | 'mp-alipay' | 'mp-baidu' | 'mp-toutiao' | 'mp-lark' | 'mp-qq' | 'mp-kuaishou' | 'mp-jd' | 'mp-360' | 'quickapp-webview' | 'quickapp-webview-union' | 'quickapp-webview-huawei';
    uniRuntimeVersion!: string;
    uniCompileVersionCode!: number;
    uniCompilerVersionCode!: number;
    uniRuntimeVersionCode!: number;
    version!: string;
    romName!: string;
    romVersion!: string;
    windowWidth!: number;
    windowHeight!: number;
    windowTop!: number;
    windowBottom!: number;
    osAndroidAPILevel: number | null = null;
    osHarmonySDKAPIVersion: number | null = null;
    osHarmonyDisplayVersion: string | null = null;
    appTheme: 'light' | 'dark' | 'auto' | null = null;
    hostTheme: 'light' | 'dark' | null = null;
    hostVersion: string | null = null;
    hostLanguage: string | null = null;
    hostName: string | null = null;
    hostSDKVersion: string | null = null;
    hostFontSizeSetting: number | null = null;
}
type GetSystemInfoSuccessCallback = (result: GetSystemInfoResult) => void;
type GetSystemInfoFail = UniError;
type GetSystemInfoFailCallback = (result: GetSystemInfoFail) => void;
type GetSystemInfoComplete = Object;
type GetSystemInfoCompleteCallback = (result: GetSystemInfoComplete) => void;
class GetSystemInfoOptions extends UTSObject {
    success: GetSystemInfoSuccessCallback | null = null;
    fail: GetSystemInfoFailCallback | null = null;
    complete: GetSystemInfoCompleteCallback | null = null;
}
class GetWindowInfoResult extends UTSObject {
    pixelRatio!: number;
    screenWidth!: number;
    screenHeight!: number;
    windowWidth!: number;
    windowHeight!: number;
    statusBarHeight!: number;
    windowTop!: number;
    windowBottom!: number;
    safeArea!: SafeArea;
    safeAreaInsets!: SafeAreaInsets;
    screenTop!: number;
    cutoutArea: Array<CutoutRect> | null = null;
}
const API_GET_SYSTEM_INFO = 'getSystemInfo';
const API_GET_SYSTEM_INFO_SYNC = 'getSystemInfoSync';
const API_GET_WINDOW_INFO = 'getWindowInfo';
function parseDeviceType(deviceType: string): 'phone' | 'pad' | 'tv' | 'watch' | 'pc' | 'unknown' | 'car' | 'vr' | 'appliance' {
    switch(deviceType){
        case 'phone':
            return 'phone';
        case 'wearable':
            return 'watch';
        case 'tablet':
            return 'pad';
        case '2in1':
            return 'pc';
        case 'tv':
            return 'tv';
        case 'car':
            return 'car';
        case 'smartVision':
            return 'vr';
        default:
            return 'unknown';
    }
}
const getWindowInfo: GetWindowInfo = defineSyncApi<GetWindowInfoResult>(API_GET_WINDOW_INFO, (): GetWindowInfoResult =>{
    return internalGetWindowInfo() as GetWindowInfoResult;
}) as GetWindowInfo;
interface ISystemInfoAppVersion {
    name: string;
    code: string;
}
function internalGetSystemInfo(): GetSystemInfoResult {
    const appVersion = UTSHarmony.getAppVersion() as ISystemInfoAppVersion;
    const appLanguage = I18n.System.getAppPreferredLanguage();
    const uniCompilerVersion: string = UTSHarmony.getUniCompilerVersion() as string;
    const uniCompilerVersionCode: number = parseFloat(uniCompilerVersion);
    const uniRuntimeVersion: string = UTSHarmony.getUniRuntimeVersion();
    const windowInfo = internalGetWindowInfo() as GetWindowInfoResult;
    const pixelRatio = windowInfo.pixelRatio;
    const safeArea = windowInfo.safeArea;
    const safeAreaInsets = windowInfo.safeAreaInsets;
    const screenHeight = windowInfo.screenHeight;
    const screenWidth = windowInfo.screenWidth;
    const statusBarHeight = windowInfo.statusBarHeight;
    const windowBottom = windowInfo.windowBottom;
    const windowHeight = windowInfo.windowHeight;
    const windowTop = windowInfo.windowTop;
    const windowWidth = windowInfo.windowWidth;
    return {
        appId: UTSHarmony.getAppId() as string,
        appLanguage,
        appName: UTSHarmony.getAppName() as string,
        appTheme: UTSHarmony.getAppTheme() as string,
        appVersion: appVersion.name,
        appVersionCode: appVersion.code,
        appWgtVersion: appVersion.name,
        uniCompilerVersion: uniCompilerVersion,
        uniCompilerVersionCode: uniCompilerVersionCode,
        uniRuntimeVersion: uniRuntimeVersion,
        uniRuntimeVersionCode: parseFloat(uniRuntimeVersion),
        uniPlatform: 'app',
        deviceBrand: deviceInfo.brand.toLowerCase(),
        deviceId: getDeviceId(),
        deviceModel: deviceInfo.productModel,
        deviceOrientation: 'portrait',
        devicePixelRatio: vp2px(1),
        deviceType: parseDeviceType(deviceInfo.deviceType),
        osLanguage: I18n.System.getSystemLanguage(),
        osTheme: UTSHarmony.getOsTheme() as string,
        osVersion: deviceInfo.majorVersion + '.' + deviceInfo.seniorVersion + '.' + deviceInfo.featureVersion + '.' + deviceInfo.buildVersion,
        osName: 'harmonyos',
        romName: deviceInfo.distributionOSName || 'HarmonyOS NEXT',
        romVersion: deviceInfo.distributionOSVersion,
        system: deviceInfo.osFullName,
        osHarmonySDKAPIVersion: deviceInfo.sdkApiVersion,
        osHarmonyDisplayVersion: deviceInfo.displayVersion,
        pixelRatio,
        safeArea,
        safeAreaInsets,
        screenHeight,
        screenWidth,
        statusBarHeight,
        windowBottom,
        windowHeight,
        windowTop,
        windowWidth,
        ua: UTSHarmony.getUserAgent(),
        language: appLanguage,
        brand: deviceInfo.brand,
        platform: 'harmonyos',
        uniCompileVersion: uniCompilerVersion,
        uniCompileVersionCode: uniCompilerVersionCode
    } as GetSystemInfoResult;
}
const getSystemInfoSync: GetSystemInfoSync = defineSyncApi<GetSystemInfoResult>(API_GET_SYSTEM_INFO_SYNC, (): GetSystemInfoResult =>{
    return internalGetSystemInfo();
}) as GetSystemInfoSync;
const getSystemInfo: GetSystemInfo = defineAsyncApi<GetSystemInfoOptions, GetSystemInfoResult>(API_GET_SYSTEM_INFO, (options: GetSystemInfoOptions, exec: ApiExecutor<GetSystemInfoResult>)=>{
    try {
        exec.resolve(internalGetSystemInfo());
    } catch (error) {
        exec.reject((error as Error).message);
    }
}) as GetSystemInfo;
export { CutoutRect as CutoutRect, GetSystemInfo as GetSystemInfo, GetSystemInfoComplete as GetSystemInfoComplete, GetSystemInfoCompleteCallback as GetSystemInfoCompleteCallback, GetSystemInfoOptions as GetSystemInfoOptions, GetSystemInfoResult as GetSystemInfoResult, GetSystemInfoSuccessCallback as GetSystemInfoSuccessCallback, GetSystemInfoSync as GetSystemInfoSync, GetWindowInfo as GetWindowInfo, GetWindowInfoResult as GetWindowInfoResult, SafeArea as SafeArea, SafeAreaInsets as SafeAreaInsets };
export { getWindowInfo as getWindowInfo };
export { getSystemInfoSync as getSystemInfoSync };
export { getSystemInfo as getSystemInfo };
