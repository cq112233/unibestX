import common from "@ohos.app.ability.common";
export declare class MemoryWarningEvent {
    level: number;
}
type MemoryWarningListener = (event: MemoryWarningEvent) => void;
export declare class MemoryWarningNative {
    private static listeners;
    private static environmentCallbackId;
    private static environmentCallback;
    static addListener(listener: MemoryWarningListener): void;
    static removeListener(listener: MemoryWarningListener | null): void;
    static startListen(uiAbilityContext: common.UIAbilityContext): void;
    static stopListen(uiAbilityContext: common.UIAbilityContext): void;
    static emitMemoryLevel(level: number): void;
    static normalizeLevel(level: number): number;
}
export {};
