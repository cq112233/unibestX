import { UniNativeViewElement as IUniNativeViewElement } from '@dcloudio/uni-app-x/types/native';
import { UniElementImpl } from '../libs/dom';
import { AttributeUpdater as AttributeUpdater } from "@ohos.arkui.modifier";
import { BuilderNode as BuilderNode } from "@ohos.arkui.node";
import { ComponentContent as ComponentContent } from "@ohos.arkui.node";
import { NodeContent as NodeContent } from "@ohos.arkui.node";
import { NativeEvent, UniEvent, UniNativeViewEvent } from '../libs/dom';
import { UniNativePageImpl } from './IUniNativePage';
export declare class ComponentAttributeUpdater extends AttributeUpdater<CommonAttribute> {
}
export interface ComponentBuilderOptions {
    slotNodeContent?: NodeContent;
    attributeUpdater?: ComponentAttributeUpdater;
}
export declare class ComponentWrapper<T extends ComponentBuilderOptions> {
    root: ComponentContent<T>;
    slot: NodeContent;
    attributeUpdater: ComponentAttributeUpdater;
    options: T;
    constructor(builder: WrappedBuilder<[T]>, options: T);
    updateOptions(key: string, value: ESObject): void;
    updateAttribute(key: string, value: ESObject): void;
    addEventListener(key: string, listener: Function): void;
}
export declare class UniNativeViewElementImpl extends UniElementImpl implements IUniNativeViewElement {
    private controller;
    component?: ComponentWrapper<ESObject>;
    bindAndroidView(view: ESObject): void;
    bindIOSView(view: ESObject): void;
    bindHarmonyFrameNode(node: ESObject): void;
    bindHarmonyWrappedBuilder<O extends Object>(builder: WrappedBuilder<[options: O]>, options?: ESObject): ComponentContent<[O]>;
    getHarmonyFrameNode(): ESObject;
    getHarmonyBuilderNode<O extends Object>(): BuilderNode<[O]>;
    getHarmonyComponentContent<O extends Object>(): ComponentContent<[O]>;
    bindHarmonyController<T extends Object>(controller: T): void;
    getHarmonyController<T>(): T | null;
    static buildEvent(nativeEvent: NativeEvent, page: UniNativePageImpl, event?: UniEvent): UniEvent;
}
export { UniNativeViewEvent };
