import type { BusinessError } from "@ohos:base";
import { UTSObject, defineSyncApi } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import access from "@ohos:bluetooth.access";
import display from "@ohos:display";
import geoLocationManager from "@ohos:geoLocationManager";
import wifiManager from "@ohos:wifiManager";
class GetSystemSettingResult extends UTSObject {
    bluetoothEnabled: boolean | null = null;
    bluetoothError: string | null = null;
    locationEnabled!: boolean;
    wifiEnabled: boolean | null = null;
    wifiError: string | null = null;
    deviceOrientation!: 'portrait' | 'landscape';
}
type GetSystemSetting = () => GetSystemSettingResult;
const getSystemSetting: GetSystemSetting = defineSyncApi<GetSystemSettingResult>('getSystemSetting', (): GetSystemSettingResult => {
    const defaultDisplay = display.getDefaultDisplaySync();
    const res: GetSystemSettingResult = {
        bluetoothEnabled: false,
        bluetoothError: null,
        locationEnabled: false,
        wifiEnabled: false,
        wifiError: null,
        deviceOrientation: (defaultDisplay.orientation === display.Orientation.PORTRAIT || defaultDisplay.orientation === display.Orientation.PORTRAIT_INVERTED) ? 'portrait' : 'landscape'
    };
    try {
        if (access.getState() === access.BluetoothState.STATE_ON)
            res.bluetoothEnabled = true;
    }
    catch (err) {
        res.bluetoothError = (err as BusinessError).message;
    }
    try {
        res.locationEnabled = geoLocationManager.isLocationEnabled();
    }
    catch (err) { }
    try {
        res.wifiEnabled = wifiManager.isWifiActive();
    }
    catch (err) {
        res.wifiError = (err as BusinessError).message;
    }
    return res;
}) as GetSystemSetting;
export { GetSystemSettingResult as GetSystemSettingResult };
export type { GetSystemSetting as GetSystemSetting };
export { getSystemSetting as getSystemSetting };
