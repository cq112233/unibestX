import AbilityConstant from "@ohos.app.ability.AbilityConstant";
import { Configuration as Configuration } from "@ohos.app.ability.Configuration";
import UIAbility from "@ohos.app.ability.UIAbility";
import Want from "@ohos.app.ability.Want";
import window from "@ohos.window";
export interface IInitConfig {
    debug?: boolean;
}
export declare abstract class UniEntryAbility extends UIAbility {
    private entryAbilityAppID;
    private entryAbilityConfig;
    private wantUri?;
    startTime: number;
    constructor(appID: string, config?: IInitConfig);
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void;
    onNewWant(want: Want, launchParam: AbilityConstant.LaunchParam): void;
    onShare(wantParam: Record<string, Object>): void;
    onWindowStageCreate(windowStage: window.WindowStage, autoLaunch?: boolean): void;
    onWindowStageDestroy(): void;
    onDestroy(): void | Promise<void>;
    onConfigurationUpdate(newConfig: Configuration): void;
    /**
     * return import(path)
     */
    abstract onImport(path: string): Promise<Object | void>;
}
