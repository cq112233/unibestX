import preferences from "@ohos:data.preferences";
import { getAbilityContext } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/App&1.0.0";
const utsShareConfigName = "uts_share_config_sp_name";
const utsPrivacyStateConfigKey = "DCLOUD_UTS_PRIVACY_STATUS_CONFIG_KEY";
type AgreeCallback = (agree: boolean) => void;
const agreeChangeCallbacks = new Array<AgreeCallback>();
let dataPreferences: preferences.Preferences | null = null;
function getSharedPreferences(): preferences.Preferences {
    if (dataPreferences == null) {
        const options: preferences.Options = { name: utsShareConfigName };
        dataPreferences = preferences.getPreferencesSync(getAbilityContext(), options);
    }
    return dataPreferences;
}
/**
 * getPrivacyAgree
 * @internal
 */
export function getPrivacyAgree(): boolean {
    return getSharedPreferences().getSync(utsPrivacyStateConfigKey, false) as boolean;
}
/**
 * setPrivacyAgree
 * @internal
 */
export function setPrivacyAgree(value: boolean) {
    getSharedPreferences().putSync(utsPrivacyStateConfigKey, value);
    getSharedPreferences().flushSync();
    dispatchEvent(value);
}
/**
 * resetPrivacyAgree
 * @internal
 */
export function resetPrivacyAgree() {
    getSharedPreferences().deleteSync(utsPrivacyStateConfigKey);
    getSharedPreferences().flushSync();
    dispatchEvent(false);
}
/**
 * onPrivacyAgreeChange
 * @internal
 */
export function onPrivacyAgreeChange(callback: AgreeCallback) {
    agreeChangeCallbacks.push(callback);
}
/**
 * offPrivacyAgreeChange
 * @internal
 */
export function offPrivacyAgreeChange(callback: AgreeCallback) {
    const index = agreeChangeCallbacks.findIndex((x) => x == callback);
    if (index >= 0) {
        agreeChangeCallbacks.splice(index, 1);
    }
}
function dispatchEvent(agree: boolean) {
    agreeChangeCallbacks.forEach((value: AgreeCallback) => {
        value(agree);
    });
}
