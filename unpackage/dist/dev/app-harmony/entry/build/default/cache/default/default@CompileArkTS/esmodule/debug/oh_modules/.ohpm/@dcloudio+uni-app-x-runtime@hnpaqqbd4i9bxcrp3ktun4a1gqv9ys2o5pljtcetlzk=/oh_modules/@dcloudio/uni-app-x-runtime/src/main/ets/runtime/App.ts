import type window from "@ohos:window";
import type { UniEntryAbility } from './EntryAbility';
let entryAbility: UniEntryAbility | undefined;
export function getEntryAbility() {
    return entryAbility!;
}
export function getAbilityContext() {
    return entryAbility!.context;
}
let windowStage: window.WindowStage | undefined;
export function getWindowStage() {
    return windowStage;
}
export function setWindowStage(stage: window.WindowStage | undefined) {
    windowStage = stage;
}
export function setEntryAbility(ability: UniEntryAbility | undefined) {
    entryAbility = ability;
}
