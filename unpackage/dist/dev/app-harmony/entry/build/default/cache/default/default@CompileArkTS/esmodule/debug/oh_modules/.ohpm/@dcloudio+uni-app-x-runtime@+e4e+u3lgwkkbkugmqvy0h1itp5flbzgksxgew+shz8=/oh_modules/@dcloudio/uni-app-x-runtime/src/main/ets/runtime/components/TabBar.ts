if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface TabBar_Params {
    onAboutToAppear?: (instance: TabBar) => void;
    attributeUpdater?: object;
    list?: TabBarListObservedArray<TabBarItem>;
    style?: TabBarStyle;
    selectedIndex?: number;
    onTabItemClick?: ((index: number) => void);
}
interface TabBarItemComponent_Params {
    item?: TabBarItem;
    selectedIndex?: number;
    index?: number;
    style?: TabBarStyle;
}
import { getResourceStr } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/index&1.0.0";
import type { ComponentBaseOptions } from '../Node';
import { SafeAreaOffset } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/components/SafeAreaOffset&1.0.0";
export interface ITabBar {
    style: TabBarStyle;
    list: TabBarListObservedArray<TabBarItem>;
    onTabItemClick: ((index: number) => void);
}
export interface TabBarOptions extends ComponentBaseOptions, ITabBar {
}
@Observed
export class TabBarItem {
    text?: string;
    iconPath?: string;
    selectedIconPath?: string;
    pagePath: string;
    visible: boolean;
    badgeType?: undefined | 'dot' | 'number';
    badgeText?: string;
    constructor(options: TabBarItem) {
        this.text = options.text;
        this.iconPath = options.iconPath;
        this.selectedIconPath = options.selectedIconPath;
        this.pagePath = options.pagePath;
        this.visible = options.visible == null ? true : options.visible;
        this.badgeType = options.badgeType;
        this.badgeText = options.badgeText;
    }
}
@Observed
export class TabBarStyle {
    backgroundColor?: string;
    borderColor?: string;
    color?: string;
    selectedColor?: string;
}
@Observed
export class TabBarListObservedArray<T> extends Array<T> {
    constructor() {
        super();
    }
}
class TabBarItemComponent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__item = new SynchedPropertyNesedObjectPU(params.item, this, "item");
        this.__selectedIndex = new SynchedPropertySimpleOneWayPU(params.selectedIndex, this, "selectedIndex");
        this.__index = new SynchedPropertySimpleOneWayPU(params.index, this, "index");
        this.__style = new SynchedPropertyNesedObjectPU(params.style, this, "style");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: TabBarItemComponent_Params) {
        this.__item.set(params.item);
        this.__style.set(params.style);
    }
    updateStateVars(params: TabBarItemComponent_Params) {
        this.__item.set(params.item);
        this.__selectedIndex.reset(params.selectedIndex);
        this.__index.reset(params.index);
        this.__style.set(params.style);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__item.purgeDependencyOnElmtId(rmElmtId);
        this.__selectedIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__index.purgeDependencyOnElmtId(rmElmtId);
        this.__style.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__item.aboutToBeDeleted();
        this.__selectedIndex.aboutToBeDeleted();
        this.__index.aboutToBeDeleted();
        this.__style.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __item: SynchedPropertyNesedObjectPU<TabBarItem>;
    get item() {
        return this.__item.get();
    }
    private __selectedIndex: SynchedPropertySimpleOneWayPU<number>;
    get selectedIndex() {
        return this.__selectedIndex.get();
    }
    set selectedIndex(newValue: number) {
        this.__selectedIndex.set(newValue);
    }
    private __index: SynchedPropertySimpleOneWayPU<number>;
    get index() {
        return this.__index.get();
    }
    set index(newValue: number) {
        this.__index.set(newValue);
    }
    private __style: SynchedPropertyNesedObjectPU<TabBarStyle>;
    get style() {
        return this.__style.get();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center });
            Flex.width('100%');
            Flex.height('100%');
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({
                direction: FlexDirection.Column,
                alignItems: ItemAlign.Center,
                justifyContent: FlexAlign.Center
            });
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.item.iconPath) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        // TODO 补充静态资源 /
                        Image.create(getResourceStr("/" + (this.selectedIndex == this.index ? (this.item.selectedIconPath || this.item.iconPath) : this.item.iconPath)));
                        // TODO 补充静态资源 /
                        Image.objectFit(ImageFit.Contain);
                        // TODO 补充静态资源 /
                        Image.width(24);
                        // TODO 补充静态资源 /
                        Image.height(24);
                    }, Image);
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.item.text) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.item.text);
                        Text.fontSize(10);
                        Text.fontColor(this.selectedIndex == this.index ? this.style.selectedColor : this.style.color);
                        Text.margin({ top: 3 });
                        Text.lineHeight(10);
                    }, Text);
                    Text.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.item.badgeType == 'dot') {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Circle.create({ width: 12, height: 12 });
                        Circle.fill('#f43530');
                        Circle.position({ top: 2, right: 0 });
                        Circle.translate({ x: '50%' });
                    }, Circle);
                });
            }
            else if (this.item.badgeType == 'number') {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.item.badgeText?.toString());
                        Text.fontColor('#fff');
                        Text.fontSize(12);
                        Text.textAlign(TextAlign.Center);
                        Text.backgroundColor('#f43530');
                        Text.border({ radius: 16 });
                        Text.padding({ left: 4, right: 4 });
                        Text.constraintSize({ minWidth: 16 });
                        Text.lineHeight(16);
                        Text.position({ top: 2, right: 0 });
                        Text.translate({ x: '50%' });
                    }, Text);
                    Text.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(2, () => {
                });
            }
        }, If);
        If.pop();
        Flex.pop();
        Flex.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
export class TabBar extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.onAboutToAppear = undefined;
        this.attributeUpdater = undefined;
        this.__list = new SynchedPropertyNesedObjectPU(params.list, this, "list");
        this.__style = new SynchedPropertyNesedObjectPU(params.style, this, "style");
        this.__selectedIndex = new ObservedPropertySimplePU(0, this, "selectedIndex");
        this.onTabItemClick = undefined;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: TabBar_Params) {
        if (params.onAboutToAppear !== undefined) {
            this.onAboutToAppear = params.onAboutToAppear;
        }
        if (params.attributeUpdater !== undefined) {
            this.attributeUpdater = params.attributeUpdater;
        }
        this.__list.set(params.list);
        this.__style.set(params.style);
        if (params.selectedIndex !== undefined) {
            this.selectedIndex = params.selectedIndex;
        }
        if (params.onTabItemClick !== undefined) {
            this.onTabItemClick = params.onTabItemClick;
        }
    }
    updateStateVars(params: TabBar_Params) {
        this.__list.set(params.list);
        this.__style.set(params.style);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__list.purgeDependencyOnElmtId(rmElmtId);
        this.__style.purgeDependencyOnElmtId(rmElmtId);
        this.__selectedIndex.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__list.aboutToBeDeleted();
        this.__style.aboutToBeDeleted();
        this.__selectedIndex.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private onAboutToAppear?: (instance: TabBar) => void;
    private attributeUpdater?: object;
    private __list: SynchedPropertyNesedObjectPU<TabBarListObservedArray<TabBarItem>>;
    get list() {
        return this.__list.get();
    }
    private __style: SynchedPropertyNesedObjectPU<TabBarStyle>;
    get style() {
        return this.__style.get();
    }
    private __selectedIndex: ObservedPropertySimplePU<number>;
    get selectedIndex() {
        return this.__selectedIndex.get();
    }
    set selectedIndex(newValue: number) {
        this.__selectedIndex.set(newValue);
    }
    private onTabItemClick?: ((index: number) => void);
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.attributeModifier.bind(this)(this.attributeUpdater);
            Column.backgroundColor(this.style.backgroundColor);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ direction: FlexDirection.Row });
            Flex.width('100%');
            Flex.height(50);
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.position({ x: 0, y: 0 });
            Divider.margin(0);
            Divider.padding(0);
            Divider.strokeWidth(0.5);
            Divider.color(this.style.borderColor);
        }, Divider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index) => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    If.create();
                    if (item.visible !== false) {
                        this.ifElseBranchUpdateFunction(0, () => {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                __Common__.create();
                                __Common__.layoutWeight(1);
                                __Common__.onClick(() => {
                                    this.onTabItemClick?.(index);
                                });
                            }, __Common__);
                            {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    if (isInitialRender) {
                                        let componentCall = new TabBarItemComponent(this, {
                                            item: item,
                                            index,
                                            selectedIndex: this.selectedIndex,
                                            style: this.style
                                        }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@dcloudio+uni-app-x-runtime@+e4e+u3lgwkkbkugmqvy0h1itp5flbzgksxgew+shz8=/oh_modules/@dcloudio/uni-app-x-runtime/src/main/ets/runtime/components/TabBar.ets", line: 119, col: 13 });
                                        ViewPU.create(componentCall);
                                        let paramsLambda = () => {
                                            return {
                                                item: item,
                                                index,
                                                selectedIndex: this.selectedIndex,
                                                style: this.style
                                            };
                                        };
                                        componentCall.paramsGenerator_ = paramsLambda;
                                    }
                                    else {
                                        this.updateStateVarsOfChildByElmtId(elmtId, {
                                            item: item,
                                            index,
                                            selectedIndex: this.selectedIndex,
                                            style: this.style
                                        });
                                    }
                                }, { name: "TabBarItemComponent" });
                            }
                            __Common__.pop();
                        });
                    }
                    else {
                        this.ifElseBranchUpdateFunction(1, () => {
                        });
                    }
                }, If);
                If.pop();
            };
            this.forEachUpdateFunction(elmtId, this.list, forEachItemGenFunction, undefined, true, false);
        }, ForEach);
        ForEach.pop();
        Flex.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SafeAreaOffset(this, { type: 'bottom' }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@dcloudio+uni-app-x-runtime@+e4e+u3lgwkkbkugmqvy0h1itp5flbzgksxgew+shz8=/oh_modules/@dcloudio/uni-app-x-runtime/src/main/ets/runtime/components/TabBar.ets", line: 175, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            type: 'bottom'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        type: 'bottom'
                    });
                }
            }, { name: "SafeAreaOffset" });
        }
        Column.pop();
    }
    aboutToAppear(): void {
        this.onAboutToAppear?.(this);
    }
    rerender() {
        this.updateDirtyElements();
    }
}
