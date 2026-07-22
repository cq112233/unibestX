import { FrameNode as FrameNode } from "@ohos.arkui.node";
import { UniInputFileElementImpl } from './UniInputFile';
export declare class UniInputElementImpl extends UniInputFileElementImpl {
    private inputFrameNode;
    private isPassword;
    private isSetUpCustomKeyboard;
    static get defaultStyle(): Map<string, [string] | [string, boolean]>;
    protected initClass(): void;
    constructor();
    protected resetCustomKeyboard(): void;
    private updateInputType;
    protected createFrameNode(): FrameNode;
    updateNativeAttribute(key: string, value: ESObject): void;
    protected parsePlaceholderStyle(value: ESObject, level: number): void;
    updateNativeNodeStyle(key: string, value: Object | undefined): void;
    checkLayout(): void;
    reset(): void;
    getHarmonyController<T extends TextInputController>(): T;
    dispose(): void;
}
