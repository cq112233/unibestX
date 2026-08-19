import ConfigurationConstant from "@ohos:app.ability.ConfigurationConstant";
import type { Configuration } from "@ohos:app.ability.Configuration";
import { TinyEmitter } from "@normalized:N&&&tiny-emitter/index&2.1.0";
import { getAbilityContext } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/App&1.0.0";
import { appAbilityEmitter } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/UTSHarmony/appAbility&1.0.0";
import { ON_OS_THEME_CHANGE, type OsTheme } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/UTSHarmony/constants&1.0.0";
/**
 * 参考文档
 * - [webview组件设置深色模式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-set-dark-mode)
 * - [应用深浅色适配](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-dark-light-color-adaptation#%E5%BA%94%E7%94%A8%E8%B7%9F%E9%9A%8F%E7%B3%BB%E7%BB%9F%E7%9A%84%E6%B7%B1%E6%B5%85%E8%89%B2%E6%A8%A1%E5%BC%8F)
 */
export const osThemeChangeEmitter = new TinyEmitter();
function colorMode2OsTheme(colorMode?: ConfigurationConstant.ColorMode): OsTheme {
    switch (colorMode) {
        case ConfigurationConstant.ColorMode.COLOR_MODE_DARK:
            return 'dark';
        case ConfigurationConstant.ColorMode.COLOR_MODE_LIGHT:
        default:
            return 'light';
    }
}
let isFirst = true;
let lastColorMode: ConfigurationConstant.ColorMode | undefined;
appAbilityEmitter.on('windowStageCreate', () => {
    if (isFirst) {
        isFirst = false;
        lastColorMode = getAbilityContext()?.config?.colorMode;
    }
});
appAbilityEmitter.on('configurationUpdate', (config: Configuration) => {
    const colorMode = config?.colorMode;
    if (lastColorMode !== colorMode) {
        lastColorMode = colorMode;
        const osTheme = colorMode2OsTheme(colorMode);
        osThemeChangeEmitter.emit(ON_OS_THEME_CHANGE, {
            osTheme
        } as OnOsThemeChangeCallbackResult);
    }
});
/**
 * 获取系统主题
 *
 * @return {OsTheme} 系统主题
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
export function getOsTheme(): OsTheme {
    return colorMode2OsTheme(lastColorMode);
}
export interface OnOsThemeChangeCallbackResult {
    /**
     * 主题名称
     */
    osTheme: OsTheme;
}
type OnOsThemeChangeCallback = (res: OnOsThemeChangeCallbackResult) => void;
const THEME_CALLBACKS: Record<number, OnOsThemeChangeCallback | undefined> = {};
let THEME_CALLBACK_ID = 0;
/**
 * 监听系统主题变化
 *
 * @param {OnOsThemeChangeCallback} callback 系统主题变化回调
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
export function onOsThemeChange(callback: OnOsThemeChangeCallback) {
    osThemeChangeEmitter.on(ON_OS_THEME_CHANGE, callback);
    const id = THEME_CALLBACK_ID++;
    THEME_CALLBACKS[id] = callback;
    return id;
}
/**
 * 取消监听系统主题变化
 *
 * @param {number} id 监听ID
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
export function offOsThemeChange(id: number) {
    const callback = THEME_CALLBACKS[id];
    if (id < 0 || typeof callback !== 'function') {
        return;
    }
    THEME_CALLBACKS[id] = undefined;
    osThemeChangeEmitter.off(ON_OS_THEME_CHANGE, callback);
}
