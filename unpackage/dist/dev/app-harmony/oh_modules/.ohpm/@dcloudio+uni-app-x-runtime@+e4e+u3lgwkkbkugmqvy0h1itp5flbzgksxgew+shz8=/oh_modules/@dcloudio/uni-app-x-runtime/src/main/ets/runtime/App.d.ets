import window from "@ohos.window";
import type { UniEntryAbility } from './EntryAbility';
export declare function getEntryAbility(): UniEntryAbility;
export declare function getAbilityContext(): import("@dcloudio/uni-app-x-runtime/../../../../../Downloads/command-line-tools/sdk/default/openharmony/ets/api/application/UIAbilityContext").default;
export declare function getWindowStage(): window.WindowStage;
export declare function setWindowStage(stage: window.WindowStage | undefined): void;
export declare function setEntryAbility(ability: UniEntryAbility | undefined): void;
