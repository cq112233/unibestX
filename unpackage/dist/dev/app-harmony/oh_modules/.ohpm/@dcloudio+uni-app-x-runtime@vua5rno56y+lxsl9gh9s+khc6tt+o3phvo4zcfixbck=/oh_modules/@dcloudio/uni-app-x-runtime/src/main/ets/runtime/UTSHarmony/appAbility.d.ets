import { TinyEmitter } from 'tiny-emitter';
import window from '@ohos.window';
import Want from '@ohos.app.ability.Want';
import AbilityConstant from '@ohos.app.ability.AbilityConstant';
export declare const appAbilityEmitter: TinyEmitter;
type OnCreate = (want: Want, launchParam: AbilityConstant.LaunchParam) => void;
type OnNewWant = (want: Want, launchParam: AbilityConstant.LaunchParam) => void;
type OnShare = (wantParam: Record<string, ESObject>) => void;
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
export declare function onAppAbilityCreate(callback: OnCreate): void;
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
export declare function onAppAbilityNewWant(callback: OnNewWant): void;
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
export declare function onAppAbilityShare(callback: OnShare): void;
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
export declare function onAppAbilityWindowStageCreate(callback: OnWindowStageCreate): void;
export {};
