import type { UniNativeViewElement as IUniNativeViewElement } from '@dcloudio/uni-app-x/types/native';
import { UniElementImpl } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/libs/dom&1.0.0";
import { AttributeUpdater } from "@ohos:arkui.modifier";
import type { BuilderNode } from "@ohos:arkui.node";
import { ComponentContent } from "@ohos:arkui.node";
import { NodeContent } from "@ohos:arkui.node";
import { callObject } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/helper/index&1.0.0";
import { getUniApp } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/UniNativeApp&1.0.0";
import { buildElement, UniNativeViewEvent, UniNativeViewInitEvent, UniNativeViewReadyEvent, } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/libs/dom&1.0.0";
import type { NativeEvent, NativeEventForUniNativeViewInitEvent, NativeEventForUniNativeViewReadyEvent, UniEvent, NativeEventForUniNativeViewEvent } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/libs/dom&1.0.0";
import type { UniNativePageImpl } from './IUniNativePage';
// TODO 后续需要整理
const UNI_MOUSE_EVENT_TYPES = ['mousedown', 'mousemove', 'mouseup'];
const UNI_POINTER_EVENT_TYPES = ['click', 'tap'];
const UNI_TOUCH_EVENT_TYPES = [
    'touchstart',
    'touchmove',
    'touchcancel',
    'touchend',
    'longpress',
    'longtap',
];
const UNI_BASE_EVENT_TYPES = [
    ...UNI_MOUSE_EVENT_TYPES,
    ...UNI_POINTER_EVENT_TYPES,
    ...UNI_TOUCH_EVENT_TYPES,
];
export class ComponentAttributeUpdater extends AttributeUpdater<CommonAttribute> {
}
export interface ComponentBuilderOptions {
    slotNodeContent?: NodeContent;
    attributeUpdater?: ComponentAttributeUpdater;
}
export class ComponentWrapper<T extends ComponentBuilderOptions> {
    root: ComponentContent<T>;
    slot: NodeContent = new NodeContent();
    attributeUpdater = new ComponentAttributeUpdater();
    options: T;
    constructor(builder: WrappedBuilder<[
        T
    ]>, options: T) {
        const uiContext = getUniApp()?.context!;
        options.slotNodeContent = this.slot;
        options.attributeUpdater = this.attributeUpdater;
        this.options = options;
        this.root = new ComponentContent(uiContext, builder, options);
    }
    updateOptions(key: string, value: any) {
        (this.options as any)[key] = value;
        this.root.update(this.options);
    }
    updateAttribute(key: string, value: any) {
        const attribute = this.attributeUpdater.attribute;
        if (attribute) {
            callObject(attribute, attribute, key, [value]);
        }
    }
    addEventListener(key: string, listener: Function) {
        const attribute = this.attributeUpdater.attribute;
        if (attribute) {
            callObject(attribute, attribute, 'on' + key.charAt(0).toUpperCase() + key.slice(1), [listener]);
        }
    }
}
export class UniNativeViewElementImpl extends UniElementImpl implements IUniNativeViewElement {
    private controller: any | null = null;
    component?: ComponentWrapper<any>;
    bindAndroidView(view: any): void {
        throw new Error('Method not implemented.');
    }
    bindIOSView(view: any): void {
        throw new Error('Method not implemented.');
    }
    bindHarmonyFrameNode(node: any): void {
        throw new Error('Method not implemented.');
    }
    bindHarmonyWrappedBuilder<O extends Object>(builder: WrappedBuilder<[
        options: O
    ]>, options?: any): ComponentContent<[
        O
    ]> {
        this.component = new ComponentWrapper(builder, options);
        globalThis.__uni__element_BindComponent(Number(this.page.pageId), this.getNodeId(), this.component);
        return this.component!.root;
    }
    getHarmonyFrameNode(): any {
        throw new Error('Method not implemented.');
    }
    getHarmonyBuilderNode<O extends Object>(): BuilderNode<[
        O
    ]> {
        throw new Error('Method not implemented.');
    }
    getHarmonyComponentContent<O extends Object>(): ComponentContent<[
        O
    ]> {
        return this.component!.root as ComponentContent<[
            O
        ]>;
    }
    bindHarmonyController<T extends Object>(controller: T): void {
        this.controller = controller;
    }
    override getHarmonyController<T>(): T | null {
        return this.controller as T;
    }
    static buildEvent(nativeEvent: NativeEvent, page: UniNativePageImpl, event?: UniEvent): UniEvent {
        if (nativeEvent.type === 'init') {
            const detailElement = (nativeEvent as NativeEventForUniNativeViewInitEvent).detail.element;
            const element = buildElement(detailElement, page) as UniNativeViewElementImpl;
            event = new UniNativeViewInitEvent('init', { element });
        }
        else if (nativeEvent.type === 'ready') {
            const detailElement = (nativeEvent as NativeEventForUniNativeViewReadyEvent).detail.element;
            const element = buildElement(detailElement, page) as UniNativeViewElementImpl;
            event = new UniNativeViewReadyEvent('ready', { element });
        }
        else if (!UNI_BASE_EVENT_TYPES.includes(nativeEvent.type)) {
            const detail = (nativeEvent as NativeEventForUniNativeViewEvent).detail;
            event = new UniNativeViewEvent(nativeEvent.type, detail);
        }
        return super.buildEvent(nativeEvent, page, event);
    }
}
export { UniNativeViewEvent };
