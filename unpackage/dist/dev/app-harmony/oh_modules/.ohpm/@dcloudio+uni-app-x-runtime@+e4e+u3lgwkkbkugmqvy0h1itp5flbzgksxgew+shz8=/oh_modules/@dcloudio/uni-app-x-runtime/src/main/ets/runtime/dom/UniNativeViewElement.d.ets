import { UniNativeViewElement as IUniNativeViewElement } from '@dcloudio/uni-app-x/types/native';
import { UniCustomEvent } from './UniCustomEvent';
import { UniElementImpl } from './UniElement';
import { BuilderNode as BuilderNode } from "@ohos.arkui.node";
import { UTSJSONObject } from '@dcloudio/uni-app-harmony/shared';
export declare class UniNativeViewElementImpl<T extends FrameNode | null = FrameNode | null> extends UniElementImpl<T> implements IUniNativeViewElement {
    private builderNode;
    private controller;
    private _frameNodeCallbacks;
    protected initClass(): void;
    constructor();
    private onFrameNode;
    private setFrameNode;
    protected initNativeEvent(type: string): void | Object;
    updateNativeNodeStyle(key: string, value: Object | undefined, commonAttribute?: CommonAttribute | undefined): void;
    protected addFrameNode(frameNode: FrameNode | null): void;
    getHarmonyFrameNode(): FrameNode | null;
    bindHarmonyFrameNode(node: FrameNode): void;
    getHarmonyBuilderNode<O extends Object>(): BuilderNode<[O]>;
    bindHarmonyWrappedBuilder<O extends Object>(builder: WrappedBuilder<[options: O]>, options?: ESObject): BuilderNode<[O]>;
    getHarmonyController<T>(): T | null;
    bindHarmonyController<T extends ESObject>(controller: T): void;
    bindAndroidView(view: ESObject): void;
    bindIOSView(view: ESObject): void;
    dispose(): void;
}
export declare class UniNativeViewEvent extends UniCustomEvent<UTSJSONObject> {
}
