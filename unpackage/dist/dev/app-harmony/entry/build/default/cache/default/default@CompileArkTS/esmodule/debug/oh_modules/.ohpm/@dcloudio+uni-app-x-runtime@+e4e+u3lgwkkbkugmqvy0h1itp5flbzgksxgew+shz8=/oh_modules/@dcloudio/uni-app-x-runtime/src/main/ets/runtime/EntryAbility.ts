import type AbilityConstant from "@ohos:app.ability.AbilityConstant";
import type { Configuration } from "@ohos:app.ability.Configuration";
import UIAbility from "@ohos:app.ability.UIAbility";
import type Want from "@ohos:app.ability.Want";
import type window from "@ohos:window";
import { setEntryAbility, setWindowStage } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/App&1.0.0";
import { closeUniApp, openUniApp, getUniApp } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/UniNativeApp&1.0.0";
import { appAbilityEmitter } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/UTSHarmony/appAbility&1.0.0";
export interface IInitConfig {
    debug?: boolean;
}
export abstract class UniEntryAbility extends UIAbility {
    private entryAbilityAppID: string;
    private entryAbilityConfig: IInitConfig | undefined;
    private wantUri?: string;
    public startTime = Date.now();
    constructor(appID: string, config?: IInitConfig) {
        super();
        setEntryAbility(this);
        this.entryAbilityAppID = appID;
        this.entryAbilityConfig = config;
        // TODO WebviewController.setWebDebuggingAccess
    }
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        appAbilityEmitter.emit('create', want, launchParam);
        if (want.uri) {
            this.wantUri = want.uri;
        }
    }
    onNewWant(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        appAbilityEmitter.emit('newWant', want, launchParam);
        if (want.uri) {
            this.wantUri = want.uri;
            const uniApp = getUniApp();
            if (uniApp) {
                uniApp.appScheme = this.wantUri;
            }
        }
    }
    onShare(wantParam: Record<string, Object>): void {
        appAbilityEmitter.emit('share', wantParam);
    }
    onWindowStageCreate(windowStage: window.WindowStage, autoLaunch = true): void {
        setWindowStage(windowStage);
        if (autoLaunch) {
            openUniApp(this.entryAbilityAppID, {
                isMain: true,
                wantUri: this.wantUri
            });
        }
        appAbilityEmitter.emit('windowStageCreate', windowStage);
    }
    onWindowStageDestroy(): void {
        closeUniApp();
        setWindowStage(undefined);
    }
    onDestroy(): void | Promise<void> {
        setEntryAbility(undefined);
    }
    onConfigurationUpdate(newConfig: Configuration): void {
        appAbilityEmitter.emit('configurationUpdate', newConfig);
    }
    /**
     * return import(path)
     */
    abstract onImport(path: string): Promise<Object | void>;
}
