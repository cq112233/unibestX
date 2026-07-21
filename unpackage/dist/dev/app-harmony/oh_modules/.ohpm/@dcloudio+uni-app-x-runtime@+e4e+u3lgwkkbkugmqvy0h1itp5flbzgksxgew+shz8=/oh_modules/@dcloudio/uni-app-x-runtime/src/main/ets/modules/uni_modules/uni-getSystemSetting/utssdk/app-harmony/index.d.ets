import { UTSObject } from "@dcloudio/uni-app-framework";
declare class GetSystemSettingResult extends UTSObject {
    bluetoothEnabled: boolean | null;
    bluetoothError: string | null;
    locationEnabled: boolean;
    wifiEnabled: boolean | null;
    wifiError: string | null;
    deviceOrientation: 'portrait' | 'landscape';
}
type GetSystemSetting = () => GetSystemSettingResult;
declare const getSystemSetting: GetSystemSetting;
export { GetSystemSetting as GetSystemSetting, GetSystemSettingResult as GetSystemSettingResult };
export { getSystemSetting as getSystemSetting };
