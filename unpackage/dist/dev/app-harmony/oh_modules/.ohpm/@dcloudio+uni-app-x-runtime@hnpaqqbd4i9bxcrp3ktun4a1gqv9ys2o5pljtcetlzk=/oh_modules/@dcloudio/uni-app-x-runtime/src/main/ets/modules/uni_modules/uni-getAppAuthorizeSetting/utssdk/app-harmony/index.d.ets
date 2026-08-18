import { UTSObject } from "@dcloudio/uni-app-framework";
type GetAppAuthorizeSetting = () => GetAppAuthorizeSettingResult;
declare class GetAppAuthorizeSettingResult extends UTSObject {
    albumAuthorized: 'authorized' | 'denied' | 'not determined' | 'config error';
    bluetoothAuthorized: 'authorized' | 'denied' | 'not determined' | 'config error';
    cameraAuthorized: 'authorized' | 'denied' | 'not determined' | 'config error';
    locationAuthorized: 'authorized' | 'denied' | 'not determined' | 'config error';
    locationAccuracy: 'reduced' | 'full' | 'unsupported' | null;
    locationReducedAccuracy: boolean | null;
    microphoneAuthorized: 'authorized' | 'denied' | 'not determined' | 'config error';
    notificationAuthorized: 'authorized' | 'denied' | 'not determined' | 'config error';
    notificationAlertAuthorized: 'authorized' | 'denied' | 'not determined' | 'config error' | null;
    notificationBadgeAuthorized: 'authorized' | 'denied' | 'not determined' | 'config error' | null;
    notificationSoundAuthorized: 'authorized' | 'denied' | 'not determined' | 'config error' | null;
    phoneCalendarAuthorized: 'authorized' | 'denied' | 'not determined' | 'config error' | null;
    readPhoneCalendarAuthorized: 'authorized' | 'denied' | 'not determined' | 'config error' | null;
    writePhoneCalendarAuthorized: 'authorized' | 'denied' | 'not determined' | null;
    pasteboardAuthorized: 'authorized' | 'denied' | 'not determined' | null;
}
declare const getAppAuthorizeSetting: GetAppAuthorizeSetting;
export { GetAppAuthorizeSetting as GetAppAuthorizeSetting, GetAppAuthorizeSettingResult as GetAppAuthorizeSettingResult };
export { getAppAuthorizeSetting as getAppAuthorizeSetting };
