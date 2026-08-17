import deviceInfo from "@ohos:deviceInfo";
import I18n from "@ohos:i18n";
import { UTSObject, defineSyncApi, UTSHarmony } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import { getDeviceId } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
class GetDeviceInfoOptions extends UTSObject {
    filter!: Array<string>;
}
class GetDeviceInfoResult extends UTSObject {
    brand: string | null = null;
    deviceBrand: string | null = null;
    deviceId: string | null = null;
    model: string | null = null;
    deviceModel: string | null = null;
    deviceType: 'phone' | 'pad' | 'tv' | 'watch' | 'pc' | 'undefined' | 'car' | 'vr' | 'appliance' | null = null;
    deviceOrientation: string | null = null;
    devicePixelRatio: number | null = null;
    system: string | null = null;
    platform: 'ios' | 'android' | 'harmonyos' | 'mac' | 'windows' | 'linux' | null = null;
    isRoot: boolean | null = null;
    isSimulator: boolean | null = null;
    isUSBDebugging: boolean | null = null;
    osName: 'ios' | 'android' | 'harmonyos' | 'macos' | 'windows' | 'linux' | null = null;
    osVersion: string | null = null;
    osLanguage: string | null = null;
    osTheme: 'light' | 'dark' | null = null;
    osAndroidAPILevel: number | null = null;
    osHarmonySDKAPIVersion: number | null = null;
    osHarmonyDisplayVersion: string | null = null;
    romName: string | null = null;
    romVersion: string | null = null;
}
type GetDeviceInfo = (options?: GetDeviceInfoOptions | null) => GetDeviceInfoResult;
const API_GET_DEVICE_INFO = 'getDeviceInfo';
function parseDeviceType(deviceType: string): 'phone' | 'pad' | 'tv' | 'watch' | 'pc' | 'unknown' | 'car' | 'vr' | 'appliance' {
    switch (deviceType) {
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
const getDeviceInfo: GetDeviceInfo = defineSyncApi<GetDeviceInfoResult>(API_GET_DEVICE_INFO, (): GetDeviceInfoResult => {
    return {
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
        platform: 'harmonyos',
        romName: deviceInfo.distributionOSName || 'HarmonyOS NEXT',
        romVersion: deviceInfo.distributionOSVersion,
        system: deviceInfo.osFullName,
        osHarmonySDKAPIVersion: deviceInfo.sdkApiVersion,
        osHarmonyDisplayVersion: deviceInfo.displayVersion
    } as GetDeviceInfoResult;
}) as GetDeviceInfo;
export { GetDeviceInfoOptions as GetDeviceInfoOptions, GetDeviceInfoResult as GetDeviceInfoResult };
export type { GetDeviceInfo as GetDeviceInfo };
export { getDeviceInfo as getDeviceInfo };
