import dataPreferences from "@ohos:data.preferences";
import type common from "@ohos:app.ability.common";
import { TinyEmitter } from "@normalized:N&&&tiny-emitter/index&2.1.0";
import { getOsTheme } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/UTSHarmony/osTheme&1.0.0";
import type { OnOsThemeChangeCallbackResult } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/UTSHarmony/osTheme&1.0.0";
import { ON_APP_THEME_CHANGE, ON_OS_THEME_CHANGE } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/UTSHarmony/constants&1.0.0";
import { getCurrentMP } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/polyfill/index&1.0.0";
import { getUIAbilityContext } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/UTSHarmony/getUIAbilityContext&1.0.0";
import { osThemeChangeEmitter } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/UTSHarmony/osTheme&1.0.0";
import { appAbilityEmitter } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/UTSHarmony/appAbility&1.0.0";
/* - [webview组件设置深色模式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-set-dark-mode-0000001774279942)
- [应用深浅色适配](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-light-dark-color-adaptation-0000001786862396#section19361879317) */
type AppTheme = 'dark' | 'light' | 'auto';
type AppThemeWithoutAuto = 'dark' | 'light';
// __UNI_APP_X_APP_THEME__
export const AppThemeStoreKey = '__U_A_X_A_T__';
let store: dataPreferences.Preferences | null = null;
export function createStore(): dataPreferences.Preferences {
    if (store != null) {
        return store;
    }
    const id = getCurrentMP()!.appId;
    store = dataPreferences.getPreferencesSync(getUIAbilityContext() as common.UIAbilityContext, {
        name: `storage.${id}`
    } as dataPreferences.Options);
    return store;
}
const appThemeChangeEmitter = new TinyEmitter();
let lastAppTheme: AppTheme = 'light';
let isFirst = true;
appAbilityEmitter.on('windowStageCreate', () => {
    if (isFirst) {
        isFirst = false;
        lastAppTheme = createStore().getSync(AppThemeStoreKey, 'light') as AppTheme;
        if (lastAppTheme === 'auto') {
            osThemeChangeEmitter.on(ON_OS_THEME_CHANGE, AppThemeFollowsOsTheme);
        }
    }
});
function AppThemeFollowsOsTheme(res: OnOsThemeChangeCallbackResult) {
    const osTheme = res.osTheme;
    appThemeChangeEmitter.emit(ON_APP_THEME_CHANGE, { appTheme: osTheme } as OnAppThemeChangeCallbackResult);
}
/**
 * 设置应用主题
 *
 * @param {AppTheme} appTheme 应用主题
 * @uniPlatform {
 *   "app": {
 *     "android": {
 *       "osVer": "x",
 *       "uniVer": "x",
 *       "unixVer": "x"
 *     },
 *     "ios": {
 *       "osVer": "x",
 *       "uniVer": "x",
 *       "unixVer": "x"
 *     },
 *    "harmony": {
 *      "osVer": "5.0.0 (12)",
 *      "uniUtsPlugin": "4.71",
 *      "uniVer": "x",
 *      "unixVer": "4.71",
 *      "unixUtsPlugin": "4.71"
 *    }
 *   }
 * }
 */
export function setAppTheme(appTheme: AppTheme) {
    if (lastAppTheme === appTheme) {
        return;
    }
    const osTheme = getOsTheme();
    let isChange = false;
    if (appTheme === 'auto') {
        if (lastAppTheme !== osTheme) {
            isChange = true;
        }
    }
    else {
        if (lastAppTheme === 'auto') {
            if (appTheme !== osTheme) {
                isChange = true;
            }
        }
        else {
            isChange = true;
        }
    }
    if (appTheme === 'auto') {
        osThemeChangeEmitter.on(ON_OS_THEME_CHANGE, AppThemeFollowsOsTheme);
    }
    else if (lastAppTheme === 'auto') {
        osThemeChangeEmitter.off(ON_OS_THEME_CHANGE, AppThemeFollowsOsTheme);
    }
    lastAppTheme = appTheme;
    createStore().putSync(AppThemeStoreKey, lastAppTheme);
    createStore().flush();
    if (isChange) {
        appThemeChangeEmitter.emit(ON_APP_THEME_CHANGE, { appTheme: appTheme === 'auto' ? osTheme : appTheme } as OnAppThemeChangeCallbackResult);
    }
}
/**
 * 获取应用主题
 *
 * @return {AppTheme} 应用主题
 * @uniPlatform {
 *   "app": {
 *     "android": {
 *       "osVer": "x",
 *       "uniVer": "x",
 *       "unixVer": "x"
 *     },
 *     "ios": {
 *       "osVer": "x",
 *       "uniVer": "x",
 *       "unixVer": "x"
 *     },
 *    "harmony": {
 *      "osVer": "5.0.0 (12)",
 *      "uniUtsPlugin": "4.71",
 *      "uniVer": "x",
 *      "unixVer": "4.71",
 *      "unixUtsPlugin": "4.71"
 *    }
 *   }
 * }
 */
export function getAppTheme(): AppTheme {
    return lastAppTheme;
}
interface OnAppThemeChangeCallbackResult {
    /**
     * 主题名称
     */
    appTheme: AppThemeWithoutAuto;
}
type OnAppThemeChangeCallback = (res: OnAppThemeChangeCallbackResult) => void;
const THEME_CALLBACKS: Record<number, OnAppThemeChangeCallback | undefined> = {};
let THEME_CALLBACK_ID = 0;
/**
 * 监听应用主题变化
 *
 * @param {OnAppThemeChangeCallback} callback 应用主题
 * @returns {number} 监听ID
 * @uniPlatform {
 *   "app": {
 *     "android": {
 *       "osVer": "x",
 *       "uniVer": "x",
 *       "unixVer": "x"
 *     },
 *     "ios": {
 *       "osVer": "x",
 *       "uniVer": "x",
 *       "unixVer": "x"
 *     },
 *    "harmony": {
 *      "osVer": "5.0.0 (12)",
 *      "uniUtsPlugin": "4.71",
 *      "uniVer": "x",
 *      "unixVer": "4.71",
 *      "unixUtsPlugin": "4.71"
 *    }
 *   }
 * }
 */
export function onAppThemeChange(callback: OnAppThemeChangeCallback) {
    appThemeChangeEmitter.on(ON_APP_THEME_CHANGE, callback);
    const id = THEME_CALLBACK_ID++;
    THEME_CALLBACKS[id] = callback;
    return id;
}
/**
 * 取消监听应用主题变化
 *
 * @param {number} id 应用主题
 * @uniPlatform {
 *   "app": {
 *     "android": {
 *       "osVer": "x",
 *       "uniVer": "x",
 *       "unixVer": "x"
 *     },
 *     "ios": {
 *       "osVer": "x",
 *       "uniVer": "x",
 *       "unixVer": "x"
 *     },
 *    "harmony": {
 *      "osVer": "5.0.0 (12)",
 *      "uniUtsPlugin": "4.71",
 *      "uniVer": "x",
 *      "unixVer": "4.71",
 *      "unixUtsPlugin": "4.71"
 *    }
 *   }
 * }
 */
export function offAppThemeChange(id: number) {
    const callback = THEME_CALLBACKS[id];
    if (id < 0 || typeof callback !== 'function') {
        return;
    }
    THEME_CALLBACKS[id] = undefined;
    appThemeChangeEmitter.off(ON_APP_THEME_CHANGE, callback);
}
