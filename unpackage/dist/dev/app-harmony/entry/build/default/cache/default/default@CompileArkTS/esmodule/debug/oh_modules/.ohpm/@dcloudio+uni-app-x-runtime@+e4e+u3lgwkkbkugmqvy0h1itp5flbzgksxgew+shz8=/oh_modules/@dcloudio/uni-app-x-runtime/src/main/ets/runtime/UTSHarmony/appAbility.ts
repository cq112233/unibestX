import { TinyEmitter } from "@normalized:N&&&tiny-emitter/index&2.1.0";
import type window from "@ohos:window";
import type Want from "@ohos:app.ability.Want";
import type AbilityConstant from "@ohos:app.ability.AbilityConstant";
export const appAbilityEmitter = new TinyEmitter();
type OnCreate = (want: Want, launchParam: AbilityConstant.LaunchParam) => void;
type OnNewWant = (want: Want, launchParam: AbilityConstant.LaunchParam) => void;
type OnShare = (wantParam: Record<string, any>) => void;
// type OnForeground = () => void
// type OnDestroy = () => void | Promise<void>
// type OnWindowStageWillDestroy = (windowStage: window.WindowStage) => void
// type OnWindowStageDestroy = () => void
// type OnWindowStageRestore = (windowStage: window.WindowStage) => void
// type OnMemoryLevel = (level: AbilityConstant.MemoryLevel) => void
// type OnBackground = () => void
// type OnConfigurationUpdate = (newConfig: Configuration) => void
type OnWindowStageCreate = (windowStage: window.WindowStage) => void;
/**
 * onAppAbilityCreate
 * @description 监听应用EntryAbility生命周期onCreate
 * @param {OnCreate} callback
 * @return {void}
 * @uniPlatform
 * {
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
 *      "osVer": "3.0",
 *      "uniUtsPlugin": "4.31",
 *      "uniVer": "4.31",
 *      "unixVer": "x"
 *    }
 *   }
 * }
 */
export function onAppAbilityCreate(callback: OnCreate) {
    appAbilityEmitter.on('create', callback);
}
/**
 * onAppAbilityNewWant
 * @description 监听应用EntryAbility生命周期onNewWant
 * @param {OnNewWant} callback
 * @return {void}
 * @uniPlatform
 * {
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
 *      "osVer": "3.0",
 *      "uniUtsPlugin": "4.31",
 *      "uniVer": "4.31",
 *      "unixVer": "x"
 *    }
 *   }
 * }
 */
export function onAppAbilityNewWant(callback: OnNewWant) {
    appAbilityEmitter.on('newWant', callback);
}
/**
 * onAppAbilityShare
 * @description 监听应用EntryAbility生命周期onShare
 * @param {OnShare} callback
 * @return {void}
 * @uniPlatform
 * {
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
 *      "osVer": "3.0",
 *      "uniUtsPlugin": "4.31",
 *      "uniVer": "4.31",
 *      "unixVer": "x"
 *    }
 *   }
 * }
 */
export function onAppAbilityShare(callback: OnShare) {
    appAbilityEmitter.on('share', callback);
}
// export function onAppAbilityForeground(callback: OnForeground) {
//   appAbilityEmitter.on('foreground', callback)
// }
// export function onAppAbilityDestroy(callback: OnDestroy) {
//   appAbilityEmitter.on('destroy', callback)
// }
// export function onAppAbilityWindowStageWillDestroy(callback: OnWindowStageWillDestroy) {
//   appAbilityEmitter.on('windowStageWillDestroy', callback)
// }
// export function onAppAbilityWindowStageDestroy(callback: OnWindowStageDestroy) {
//   appAbilityEmitter.on('windowStageDestroy', callback)
// }
// export function onAppAbilityWindowStageRestore(callback: OnWindowStageRestore) {
//   appAbilityEmitter.on('windowStageRestore', callback)
// }
// export function onAppAbilityMemoryLevel(callback: OnMemoryLevel) {
//   appAbilityEmitter.on('memoryLevel', callback)
// }
// export function onAppAbilityBackground(callback: OnBackground) {
//   appAbilityEmitter.on('background', callback)
// }
// export function onAppAbilityConfigurationUpdate(callback: OnConfigurationUpdate) {
//   appAbilityEmitter.on('configurationUpdate', callback)
// }
/**
 * onAppAbilityWindowStageCreate
 * @description 监听应用EntryAbility生命周期onWindowStageCreate
 * @param {OnWindowStageCreate} callback
 * @return {void}
 * @uniPlatform
 * {
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
 *      "osVer": "3.0",
 *      "uniUtsPlugin": "4.31",
 *      "uniVer": "4.31",
 *      "unixVer": "x"
 *    }
 *   }
 * }
 */
export function onAppAbilityWindowStageCreate(callback: OnWindowStageCreate) {
    appAbilityEmitter.on('windowStageCreate', callback);
}
