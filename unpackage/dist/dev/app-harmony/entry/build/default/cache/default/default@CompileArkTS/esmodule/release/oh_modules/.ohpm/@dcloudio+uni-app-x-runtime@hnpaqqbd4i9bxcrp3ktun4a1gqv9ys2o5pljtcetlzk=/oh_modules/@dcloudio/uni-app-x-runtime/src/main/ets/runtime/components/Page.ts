if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface UniSubPage_Params {
    onAboutToAppear?: (instance: UniSubPage) => void;
    pageId?: string;
}
interface PageContainer_Params {
    pageId?: string;
    isSubPage?: boolean;
    pageStyle?: PageStyle | null;
    rootNodeContent?: RootNodeContent | null;
    tabBarController?: TabBarController | null;
    dialogPages?: DialogPageControllerArray | null;
    animationController?: AnimationController;
    onTouchCallback?: ((event: TouchEvent) => void) | null;
}
interface UniPage_Params {
    router?;
    highFrameRateDisplaySync?: displaySync.DisplaySync | undefined;
    animationController?: AnimationController;
}
import { getUniApp } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/UniNativeApp&1.0.0";
import type { RootNodeContent } from '../Node';
import { callPageLifeCycle } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/Page&1.0.0";
import { AttributeUpdater } from "@ohos:arkui.modifier";
import display from "@ohos:display";
import { FrameCallback } from "@ohos:arkui.UIContext";
import displaySync from "@ohos:graphics.displaySync";
import { TabBarStyle, TabBarListObservedArray } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/components/TabBar&1.0.0";
import type { TabBar, TabBarItem } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/components/TabBar&1.0.0";
import { TabBarWithAnimation } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/components/TabBarWithAnimation&1.0.0";
export class AnimationAttributeUpdater extends AttributeUpdater<CommonAttribute> {
    private isInitialized: boolean = false;
    private callbacks: Array<(attribute: CommonAttribute) => void> = [];
    initializeModifier(attribute: CommonAttribute): void {
        this.isInitialized = true;
        this.callbacks.forEach(callback => {
            callback(attribute);
        });
        this.callbacks = [];
    }
    getAttribute(callback: (attribute: CommonAttribute) => void) {
        if (this.isInitialized) {
            callback(this.attribute!);
        }
        else {
            this.callbacks.push(callback);
        }
    }
}
export class AnimationController {
    type?: string;
    duration?: number;
    callback?: (() => void) | null;
    attributeUpdater: AnimationAttributeUpdater = new AnimationAttributeUpdater();
    finish?: () => void;
    constructor(type?: string, duration?: number) {
        this.type = type;
        this.duration = duration;
    }
    animate(context: UIContext, onFinish: () => void, linkPageController?: AnimationController) {
        this.setBeginState(linkPageController);
        context.animateTo({
            duration: this.duration,
            curve: Curve.EaseOut,
            playMode: PlayMode.Normal,
            onFinish: onFinish
        }, () => {
            this.setEndState(linkPageController);
        });
    }
    setBeginState(linkPageController?: AnimationController) {
        const attributeUpdater = this.attributeUpdater;
        attributeUpdater.getAttribute((attribute) => {
            switch (this.type) {
                case 'pop-in': {
                    attribute.translate({
                        x: '100%'
                    });
                    linkPageController?.attributeUpdater.attribute?.translate({
                        x: 0
                    });
                    break;
                }
                case 'slide-in-right':
                    attribute.translate({
                        x: '100%'
                    });
                    break;
                case 'slide-in-left':
                    attribute.translate({
                        x: '-100%'
                    });
                    break;
                case 'slide-in-top':
                    attribute.translate({
                        y: '-100%'
                    });
                    break;
                case 'slide-in-bottom':
                    attribute.translate({
                        y: '100%'
                    });
                    break;
                case 'pop-out': {
                    attribute.translate({ x: 0 });
                    linkPageController?.attributeUpdater.attribute?.translate({
                        x: '-50%'
                    });
                    break;
                }
                case 'slide-out-right':
                case 'slide-out-left':
                    attribute.translate({ x: 0 });
                    break;
                case 'slide-out-top':
                case 'slide-out-bottom':
                    attribute.translate({ y: 0 });
                    break;
                case 'fade-in':
                    attribute.opacity(0);
                    break;
                case 'fade-out':
                    attribute.opacity(1);
                    break;
                case 'zoom-out':
                    attribute.scale({ x: 0, y: 0 });
                    break;
                case 'zoom-fade-out': {
                    attribute.scale({ x: 0, y: 0 });
                    attribute.opacity(0);
                    break;
                }
                case 'zoom-in':
                    attribute.scale({ x: 1, y: 1 });
                    break;
                case 'zoom-fade-in': {
                    attribute.scale({ x: 1, y: 1 });
                    attribute.opacity(1);
                    break;
                }
            }
        });
    }
    setEndState(linkPageController?: AnimationController) {
        const attribute = this.attributeUpdater.attribute!;
        switch (this.type) {
            case 'pop-in': {
                attribute.translate({ x: 0 });
                linkPageController?.attributeUpdater.attribute?.translate({ x: '-50%' });
                break;
            }
            case 'slide-in-right':
            case 'slide-in-left':
                attribute.translate({ x: 0 });
                break;
            case 'slide-in-top':
            case 'slide-in-bottom':
                attribute.translate({ y: 0 });
                break;
            case 'pop-out': {
                attribute.translate({ x: '100%' });
                linkPageController?.attributeUpdater.attribute?.translate({ x: 0 });
                break;
            }
            case 'slide-out-right':
                attribute.translate({ x: '100%' });
                break;
            case 'slide-out-left':
                attribute.translate({ x: '-100%' });
                break;
            case 'slide-out-top':
                attribute.translate({ y: '-100%' });
                break;
            case 'slide-out-bottom':
                attribute.translate({ y: '100%' });
                break;
            case 'fade-in':
                attribute.opacity(1);
                break;
            case 'fade-out':
                attribute.opacity(0);
                break;
            case 'zoom-out':
                attribute.scale({ x: 1, y: 1 });
                break;
            case 'zoom-fade-out': {
                attribute.scale({ x: 1, y: 1 });
                attribute.opacity(1);
                break;
            }
            case 'zoom-in':
                attribute.scale({ x: 0, y: 0 });
                break;
            case 'zoom-fade-in': {
                attribute.scale({ x: 0, y: 0 });
                attribute.opacity(0);
                break;
            }
        }
    }
    resetState(linkPageController?: AnimationController) {
        switch (this.type) {
            // 暂时仅处理 pop-in 动画
            case 'pop-in': {
                // 暂时仅处理 linkPage
                linkPageController?.attributeUpdater.attribute?.translate({
                    x: 0
                });
                break;
            }
        }
    }
}
class UniPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.router = getUniApp()?.router;
        this.highFrameRateDisplaySync = undefined;
        this.__animationController = new ObservedPropertyObjectPU(new AnimationController(getUniApp()?.animationType, getUniApp()?.animationDuration), this, "animationController");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: UniPage_Params) {
        if (params.router !== undefined) {
            this.router = params.router;
        }
        if (params.highFrameRateDisplaySync !== undefined) {
            this.highFrameRateDisplaySync = params.highFrameRateDisplaySync;
        }
        if (params.animationController !== undefined) {
            this.animationController = params.animationController;
        }
    }
    updateStateVars(params: UniPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__animationController.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__animationController.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private router;
    private highFrameRateDisplaySync: displaySync.DisplaySync | undefined;
    private __animationController: ObservedPropertyObjectPU<AnimationController>;
    get animationController() {
        return this.__animationController.get();
    }
    set animationController(newValue: AnimationController) {
        this.__animationController.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({
                alignContent: Alignment.TopEnd
            });
            Stack.height('100%');
            Stack.width('100%');
            Stack.attributeModifier.bind(this)(this.animationController.attributeUpdater);
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Navigation.create(this.router, { moduleName: "entry", pagePath: "oh_modules/.ohpm/@dcloudio+uni-app-x-runtime@hnpaqqbd4i9bxcrp3ktun4a1gqv9ys2o5pljtcetlzk=/oh_modules/@dcloudio/uni-app-x-runtime/src/main/ets/runtime/components/Page", isUserCreateStack: true });
            Navigation.mode(NavigationMode.Stack);
            Navigation.titleMode(NavigationTitleMode.Mini);
            Navigation.navDestination({ builder: this.pageBuilder.bind(this) });
            Navigation.hideTitleBar(true);
            Navigation.customNavContentTransition((from: NavContentInfo, to: NavContentInfo, operation: NavigationOperation) => {
                const target = operation === NavigationOperation.PUSH ? to : from;
                const other = operation === NavigationOperation.PUSH ? from : to;
                const pageManager = getUniApp()!.pageManager;
                const targetPage = pageManager.findPageById(target.name!);
                const linkPage = pageManager.findPageById(other.name!);
                // reLaunch 时 pushPathByName 与 removeByName 合并为 POP，此时无 targetPage
                if (!targetPage) {
                    return {
                        timeout: 0,
                        transition: (transitionProxy: NavigationTransitionProxy) => {
                            return;
                        }
                    } as NavigationAnimatedTransition;
                }
                const animationController = targetPage.page!.animationController;
                const duration = animationController.duration || 300;
                return {
                    timeout: duration + 100,
                    transition: (transitionProxy: NavigationTransitionProxy) => {
                        if (!from.navDestinationId || !to.navDestinationId) {
                            return;
                        }
                        animationController.finish = () => {
                            animationController.finish = undefined;
                            transitionProxy.finishTransition();
                        };
                        animationController.animate(this.getUIContext(), () => {
                            animationController.finish?.();
                        }, ObservedObject.GetRawObject(linkPage?.animationController));
                    },
                    onTransitionEnd() {
                        // 结束后重置 linkPage 状态，避免下次 linkPage 不参与动画时显示异常
                        animationController.resetState(ObservedObject.GetRawObject(linkPage?.animationController));
                        animationController.callback?.();
                        animationController.callback = null;
                    }
                } as NavigationAnimatedTransition;
            });
        }, Navigation);
        Navigation.pop();
        Stack.pop();
    }
    pageBuilder(name: string, parent = null) {
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new PageContainer(this, { pageId: name }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@dcloudio+uni-app-x-runtime@hnpaqqbd4i9bxcrp3ktun4a1gqv9ys2o5pljtcetlzk=/oh_modules/@dcloudio/uni-app-x-runtime/src/main/ets/runtime/components/Page.ets", line: 264, col: 5 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            pageId: name
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        pageId: name
                    });
                }
            }, { name: "PageContainer" });
        }
    }
    aboutToAppear(): void {
        this.animationController.setBeginState();
        const displayInfo = display.getDefaultDisplaySync();
        const maxRefreshRate = displayInfo.supportedRefreshRates?.reduce((max, refreshRate) => Math.max(max, refreshRate), displayInfo.refreshRate) ?? displayInfo.refreshRate;
        this.highFrameRateDisplaySync = displaySync.create();
        this.highFrameRateDisplaySync.setExpectedFrameRateRange({
            min: maxRefreshRate,
            max: maxRefreshRate,
            expected: maxRefreshRate,
        });
        this.highFrameRateDisplaySync.start();
    }
    aboutToDisappear(): void {
        this.highFrameRateDisplaySync?.stop();
        this.highFrameRateDisplaySync = undefined;
    }
    onDidBuild(): void {
        const self = this;
        class CustomFrameCallback extends FrameCallback {
            onIdle() {
                // self.setAnimationEndState()
                self.getUIContext().animateTo({
                    duration: self.animationController.duration,
                    curve: Curve.EaseOut,
                    playMode: PlayMode.Normal
                }, () => {
                    self.animationController.setEndState();
                });
            }
        }
        this.getUIContext()?.postFrameCallback(new CustomFrameCallback());
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "UniPage";
    }
}
export const TEMPLATE_PAGE_NAME = 'UniPage';
@Observed
export class TabBarPageController {
    pageId: string;
    constructor(pageId: string) {
        this.pageId = pageId;
    }
}
@Observed
export class TabBarPageControllerArray extends Array<TabBarPageController> {
}
@Observed
export class TabBarController {
    style: TabBarStyle = new TabBarStyle();
    list: TabBarListObservedArray<TabBarItem> = new TabBarListObservedArray<TabBarItem>();
    pages: TabBarPageControllerArray = new TabBarPageControllerArray();
    selectedId: string | null = null;
    isVisible: boolean = true;
    selectedIndex: number = 0;
    onTabItemClick?: (index: number) => void;
    tabBar?: TabBar | null;
    attributeUpdater: AnimationAttributeUpdater = new AnimationAttributeUpdater();
    onAboutToAppear: (tabBar: TabBar) => void = (tabBar: TabBar) => {
        this.tabBar = tabBar;
        tabBar.selectedIndex = this.selectedIndex;
    };
}
export class DialogPageController {
    pageId: string;
    visibility: Visibility;
    attributeUpdater: AnimationAttributeUpdater = new AnimationAttributeUpdater();
    constructor(pageId: string, visibility: Visibility) {
        this.pageId = pageId;
        this.visibility = visibility;
    }
}
@Observed
export class DialogPageControllerArray extends Array<DialogPageController> {
}
@Observed
export class PageStyle {
    backgroundColor?: string;
}
export class PageContainer extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__pageId = new SynchedPropertySimpleOneWayPU(params.pageId, this, "pageId");
        this.__isSubPage = new SynchedPropertySimpleOneWayPU(params.isSubPage, this, "isSubPage");
        this.__pageStyle = new ObservedPropertyObjectPU(null, this, "pageStyle");
        this.rootNodeContent = null;
        this.__tabBarController = new ObservedPropertyObjectPU(null, this, "tabBarController");
        this.__dialogPages = new ObservedPropertyObjectPU(null, this, "dialogPages");
        this.animationController = undefined;
        this.onTouchCallback = null;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: PageContainer_Params) {
        if (params.pageStyle !== undefined) {
            this.pageStyle = params.pageStyle;
        }
        if (params.rootNodeContent !== undefined) {
            this.rootNodeContent = params.rootNodeContent;
        }
        if (params.tabBarController !== undefined) {
            this.tabBarController = params.tabBarController;
        }
        if (params.dialogPages !== undefined) {
            this.dialogPages = params.dialogPages;
        }
        if (params.animationController !== undefined) {
            this.animationController = params.animationController;
        }
        if (params.onTouchCallback !== undefined) {
            this.onTouchCallback = params.onTouchCallback;
        }
    }
    updateStateVars(params: PageContainer_Params) {
        this.__pageId.reset(params.pageId);
        this.__isSubPage.reset(params.isSubPage);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__pageId.purgeDependencyOnElmtId(rmElmtId);
        this.__isSubPage.purgeDependencyOnElmtId(rmElmtId);
        this.__pageStyle.purgeDependencyOnElmtId(rmElmtId);
        this.__tabBarController.purgeDependencyOnElmtId(rmElmtId);
        this.__dialogPages.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__pageId.aboutToBeDeleted();
        this.__isSubPage.aboutToBeDeleted();
        this.__pageStyle.aboutToBeDeleted();
        this.__tabBarController.aboutToBeDeleted();
        this.__dialogPages.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __pageId: SynchedPropertySimpleOneWayPU<string>;
    get pageId() {
        return this.__pageId.get();
    }
    set pageId(newValue: string) {
        this.__pageId.set(newValue);
    }
    private __isSubPage: SynchedPropertySimpleOneWayPU<boolean>;
    get isSubPage() {
        return this.__isSubPage.get();
    }
    set isSubPage(newValue: boolean) {
        this.__isSubPage.set(newValue);
    }
    private __pageStyle: ObservedPropertyObjectPU<PageStyle | null>;
    get pageStyle() {
        return this.__pageStyle.get();
    }
    set pageStyle(newValue: PageStyle | null) {
        this.__pageStyle.set(newValue);
    }
    private rootNodeContent: RootNodeContent | null;
    private __tabBarController: ObservedPropertyObjectPU<TabBarController | null>;
    get tabBarController() {
        return this.__tabBarController.get();
    }
    set tabBarController(newValue: TabBarController | null) {
        this.__tabBarController.set(newValue);
    }
    private __dialogPages: ObservedPropertyObjectPU<DialogPageControllerArray | null>;
    get dialogPages() {
        return this.__dialogPages.get();
    }
    set dialogPages(newValue: DialogPageControllerArray | null) {
        this.__dialogPages.set(newValue);
    }
    private animationController: AnimationController;
    private onTouchCallback: ((event: TouchEvent) => void) | null;
    buildRelativeContainer(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            RelativeContainer.create();
            RelativeContainer.height('100%');
            RelativeContainer.width('100%');
            RelativeContainer.backgroundColor(this.pageStyle?.backgroundColor);
            RelativeContainer.onTouch(event => {
                this.onTouchCallback?.(event);
            });
        }, RelativeContainer);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.tabBarController) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.height('100%');
                        Column.width('100%');
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Stack.create({ alignContent: Alignment.TopStart });
                        Stack.width('100%');
                        Stack.layoutWeight(1);
                        Stack.clip(true);
                    }, Stack);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        ForEach.create();
                        const forEachItemGenFunction = _item => {
                            const item = _item;
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                __Common__.create();
                                __Common__.width('100%');
                                __Common__.height('100%');
                                __Common__.clip(true);
                                __Common__.visibility(this.tabBarController?.selectedId === item.pageId ? Visibility.Visible : Visibility.Hidden);
                            }, __Common__);
                            {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    if (isInitialRender) {
                                        let componentCall = new UniSubPage(this, { pageId: item.pageId }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@dcloudio+uni-app-x-runtime@hnpaqqbd4i9bxcrp3ktun4a1gqv9ys2o5pljtcetlzk=/oh_modules/@dcloudio/uni-app-x-runtime/src/main/ets/runtime/components/Page.ets", line: 379, col: 15 });
                                        ViewPU.create(componentCall);
                                        let paramsLambda = () => {
                                            return {
                                                pageId: item.pageId
                                            };
                                        };
                                        componentCall.paramsGenerator_ = paramsLambda;
                                    }
                                    else {
                                        this.updateStateVarsOfChildByElmtId(elmtId, {
                                            pageId: item.pageId
                                        });
                                    }
                                }, { name: "UniSubPage" });
                            }
                            __Common__.pop();
                        };
                        this.forEachUpdateFunction(elmtId, this.tabBarController.pages, forEachItemGenFunction, (item: TabBarPageController) => item.pageId, false, false);
                    }, ForEach);
                    ForEach.pop();
                    Stack.pop();
                    TabBarWithAnimation.bind(this)(makeBuilderParameterProxy("TabBarWithAnimation", { onAboutToAppear: () => this.tabBarController.onAboutToAppear, list: () => this.tabBarController.list, style: () => this.tabBarController.style, onTabItemClick: () => this.tabBarController.onTabItemClick, attributeUpdater: () => this.tabBarController.attributeUpdater }));
                    Column.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        ContentSlot.create(this.rootNodeContent);
                    }, ContentSlot);
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.dialogPages) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        ForEach.create();
                        const forEachItemGenFunction = _item => {
                            const item = _item;
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                __Common__.create();
                                __Common__.width('100%');
                                __Common__.height('100%');
                                __Common__.clip(true);
                                __Common__.visibility(item.visibility);
                                __Common__.zIndex(1);
                                __Common__.attributeModifier.bind(this)(item.attributeUpdater);
                            }, __Common__);
                            {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    if (isInitialRender) {
                                        let componentCall = new UniSubPage(this, { pageId: item.pageId }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@dcloudio+uni-app-x-runtime@hnpaqqbd4i9bxcrp3ktun4a1gqv9ys2o5pljtcetlzk=/oh_modules/@dcloudio/uni-app-x-runtime/src/main/ets/runtime/components/Page.ets", line: 405, col: 11 });
                                        ViewPU.create(componentCall);
                                        let paramsLambda = () => {
                                            return {
                                                pageId: item.pageId
                                            };
                                        };
                                        componentCall.paramsGenerator_ = paramsLambda;
                                    }
                                    else {
                                        this.updateStateVarsOfChildByElmtId(elmtId, {
                                            pageId: item.pageId
                                        });
                                    }
                                }, { name: "UniSubPage" });
                            }
                            __Common__.pop();
                        };
                        this.forEachUpdateFunction(elmtId, this.dialogPages, forEachItemGenFunction, (item: DialogPageController) => item.pageId, false, false);
                    }, ForEach);
                    ForEach.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        RelativeContainer.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.isSubPage) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.buildRelativeContainer.bind(this)();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        NavDestination.create(() => {
                            this.buildRelativeContainer.bind(this)();
                        }, { moduleName: "entry", pagePath: "oh_modules/.ohpm/@dcloudio+uni-app-x-runtime@hnpaqqbd4i9bxcrp3ktun4a1gqv9ys2o5pljtcetlzk=/oh_modules/@dcloudio/uni-app-x-runtime/src/main/ets/runtime/components/Page" });
                        NavDestination.attributeModifier.bind(this)(this.animationController.attributeUpdater);
                        NavDestination.hideTitleBar(true);
                        NavDestination.onBackPressed(() => {
                            getUniApp()?._emitter.emit('onBackButton');
                            return true;
                        });
                    }, NavDestination);
                    NavDestination.pop();
                });
            }
        }, If);
        If.pop();
    }
    aboutToAppear() {
        callPageLifeCycle('aboutToAppear', this);
    }
    onDidBuild(): void {
        callPageLifeCycle('onDidBuild', this);
    }
    aboutToDisappear() {
        callPageLifeCycle('aboutToDisappear', this);
    }
    rerender() {
        this.updateDirtyElements();
    }
}
export class UniSubPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.onAboutToAppear = undefined;
        this.__pageId = new SynchedPropertySimpleOneWayPU(params.pageId, this, "pageId");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: UniSubPage_Params) {
        if (params.onAboutToAppear !== undefined) {
            this.onAboutToAppear = params.onAboutToAppear;
        }
    }
    updateStateVars(params: UniSubPage_Params) {
        this.__pageId.reset(params.pageId);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__pageId.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__pageId.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private onAboutToAppear?: (instance: UniSubPage) => void;
    private __pageId: SynchedPropertySimpleOneWayPU<string>;
    get pageId() {
        return this.__pageId.get();
    }
    set pageId(newValue: string) {
        this.__pageId.set(newValue);
    }
    initialRender() {
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new PageContainer(this, { pageId: this.pageId, isSubPage: true }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@dcloudio+uni-app-x-runtime@hnpaqqbd4i9bxcrp3ktun4a1gqv9ys2o5pljtcetlzk=/oh_modules/@dcloudio/uni-app-x-runtime/src/main/ets/runtime/components/Page.ets", line: 458, col: 5 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            pageId: this.pageId,
                            isSubPage: true
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        pageId: this.pageId, isSubPage: true
                    });
                }
            }, { name: "PageContainer" });
        }
    }
    aboutToAppear(): void {
        this.onAboutToAppear?.(this);
    }
    rerender() {
        this.updateDirtyElements();
    }
}
{
    let routeNameNode = 'UniPage';
    registerNamedRoute(() => new UniPage(undefined, {}), routeNameNode, { bundleName: "com.bigScreen.qizhi", moduleName: "entry", pagePath: "../../../../oh_modules/.ohpm/@dcloudio+uni-app-x-runtime@hnpaqqbd4i9bxcrp3ktun4a1gqv9ys2o5pljtcetlzk=/oh_modules/@dcloudio/uni-app-x-runtime/src/main/ets/runtime/components/Page", pageFullPath: "oh_modules/.ohpm/@dcloudio+uni-app-x-runtime@hnpaqqbd4i9bxcrp3ktun4a1gqv9ys2o5pljtcetlzk=/oh_modules/@dcloudio/uni-app-x-runtime/src/main/ets/runtime/components/Page", integratedHsp: "false", moduleType: "followWithHap" });
}
