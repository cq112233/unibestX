if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface UniRichText_Params {
    // 用于获取组件实例
    onAboutToAppear?: (instance: UniRichText) => void;
    // 用于获取组件属性
    attributeUpdater?: object;
    content?: string;
    viewportWidth?: number;
    handleItemClick?: (event: ItemClickEvent) => void;
}
import type { ComponentBaseOptions } from '../Node';
export interface RichTextOptions extends ComponentBaseOptions {
    content: string;
    viewportWidth?: number;
}
export interface EventDetail {
    src?: string;
    href?: string;
}
interface ItemClickEvent {
    detail: EventDetail;
}
export class UniRichText extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.onAboutToAppear = undefined;
        this.attributeUpdater = undefined;
        this.__content = new SynchedPropertySimpleOneWayPU(params.content, this, "content");
        this.__viewportWidth = new SynchedPropertySimpleOneWayPU(params.viewportWidth, this, "viewportWidth");
        this.handleItemClick = undefined;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: UniRichText_Params) {
        if (params.onAboutToAppear !== undefined) {
            this.onAboutToAppear = params.onAboutToAppear;
        }
        if (params.attributeUpdater !== undefined) {
            this.attributeUpdater = params.attributeUpdater;
        }
        if (params.content === undefined) {
            this.__content.set('');
        }
        if (params.handleItemClick !== undefined) {
            this.handleItemClick = params.handleItemClick;
        }
    }
    updateStateVars(params: UniRichText_Params) {
        this.__content.reset(params.content);
        this.__viewportWidth.reset(params.viewportWidth);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__content.purgeDependencyOnElmtId(rmElmtId);
        this.__viewportWidth.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__content.aboutToBeDeleted();
        this.__viewportWidth.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    // 用于获取组件实例
    private onAboutToAppear?: (instance: UniRichText) => void;
    // 用于获取组件属性
    private attributeUpdater?: object;
    private __content: SynchedPropertySimpleOneWayPU<string>;
    get content() {
        return this.__content.get();
    }
    set content(newValue: string) {
        this.__content.set(newValue);
    }
    private __viewportWidth?: SynchedPropertySimpleOneWayPU<number>;
    get viewportWidth() {
        return this.__viewportWidth.get();
    }
    set viewportWidth(newValue: number) {
        this.__viewportWidth.set(newValue);
    }
    private handleItemClick?: (event: ItemClickEvent) => void;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            RichText.create(`<meta name="viewport" content="width=${this.viewportWidth ??
                'device-width'}"><style>html,body{margin:0;padding:0;}</style>${this.content}`);
            RichText.attributeModifier.bind(this)(this.attributeUpdater);
            RichText.onClick((event) => {
                // TODO: handle item click
                console.log('RichText onClick', event);
            });
        }, RichText);
    }
    aboutToAppear(): void {
        this.onAboutToAppear?.(this);
    }
    rerender() {
        this.updateDirtyElements();
    }
}
