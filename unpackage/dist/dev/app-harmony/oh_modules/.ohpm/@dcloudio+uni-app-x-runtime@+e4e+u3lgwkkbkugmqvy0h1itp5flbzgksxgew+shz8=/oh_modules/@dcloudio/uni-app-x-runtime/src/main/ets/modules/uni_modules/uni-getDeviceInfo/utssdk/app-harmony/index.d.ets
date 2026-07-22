import { UTSObject } from "@dcloudio/uni-app-framework";
declare class GetDeviceInfoOptions extends UTSObject {
    filter: Array<string>;
}
declare class GetDeviceInfoResult extends UTSObject {
    brand: string | null;
    deviceBrand: string | null;
    deviceId: string | null;
    model: string | null;
    deviceModel: string | null;
    deviceType: 'phone' | 'pad' | 'tv' | 'watch' | 'pc' | 'undefined' | 'car' | 'vr' | 'appliance' | null;
    deviceOrientation: string | null;
    devicePixelRatio: number | null;
    system: string | null;
    platform: 'ios' | 'android' | 'harmonyos' | 'mac' | 'windows' | 'linux' | null;
    isRoot: boolean | null;
    isSimulator: boolean | null;
    isUSBDebugging: boolean | null;
    osName: 'ios' | 'android' | 'harmonyos' | 'macos' | 'windows' | 'linux' | null;
    osVersion: string | null;
    osLanguage: string | null;
    osTheme: 'light' | 'dark' | null;
    osAndroidAPILevel: number | null;
    osHarmonySDKAPIVersion: number | null;
    osHarmonyDisplayVersion: string | null;
    romName: string | null;
    romVersion: string | null;
}
type GetDeviceInfo = (options?: GetDeviceInfoOptions | null) => GetDeviceInfoResult;
declare const getDeviceInfo: GetDeviceInfo;
export { GetDeviceInfo as GetDeviceInfo, GetDeviceInfoOptions as GetDeviceInfoOptions, GetDeviceInfoResult as GetDeviceInfoResult };
export { getDeviceInfo as getDeviceInfo };
