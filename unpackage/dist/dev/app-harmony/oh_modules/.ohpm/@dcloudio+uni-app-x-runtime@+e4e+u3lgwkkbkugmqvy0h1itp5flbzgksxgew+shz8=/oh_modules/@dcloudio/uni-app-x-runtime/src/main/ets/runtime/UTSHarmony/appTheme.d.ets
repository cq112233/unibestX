import dataPreferences from '@ohos.data.preferences';
type AppTheme = 'dark' | 'light' | 'auto';
type AppThemeWithoutAuto = 'dark' | 'light';
export declare const AppThemeStoreKey = "__U_A_X_A_T__";
export declare function createStore(): dataPreferences.Preferences;
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
export declare function setAppTheme(appTheme: AppTheme): void;
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
export declare function getAppTheme(): AppTheme;
interface OnAppThemeChangeCallbackResult {
    /**
     * 主题名称
     */
    appTheme: AppThemeWithoutAuto;
}
type OnAppThemeChangeCallback = (res: OnAppThemeChangeCallbackResult) => void;
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
export declare function onAppThemeChange(callback: OnAppThemeChangeCallback): number;
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
export declare function offAppThemeChange(id: number): void;
export {};
