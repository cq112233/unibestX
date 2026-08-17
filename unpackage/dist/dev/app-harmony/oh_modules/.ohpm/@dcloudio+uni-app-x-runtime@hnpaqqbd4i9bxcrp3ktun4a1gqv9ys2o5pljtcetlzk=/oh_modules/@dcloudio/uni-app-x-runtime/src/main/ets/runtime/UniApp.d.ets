import type { UniApp } from '@dcloudio/uni-app-x/types/app';
import { Unknown } from "./helper";
import { UniEntryAbility } from './EntryAbility';
export declare class UniAppImpl implements UniApp {
    vm: Unknown;
    $vm: Unknown;
    globalData: Object;
    private _harmonyAbility;
    constructor(harmonyAbility: UniEntryAbility);
    getAndroidApplication(): any;
    getHarmonyAbility(): UniEntryAbility;
}
export declare function getApp(): UniAppImpl;
export declare function genApp(): void;
export declare function clearApp(): void;
export declare function getAppAbility(): UniEntryAbility;
