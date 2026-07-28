if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface UniSubPage_Params {
    onAboutToAppear?: (instance: UniSubPage) => void;
    name?: string;
}
interface PageContainer_Params {
    name?: string;
    rootNodeController?: RootNodeController | null;
}
interface UniPage_Params {
    router?;
    animationType?;
    animationDuration?;
    x?: number | string;
    y?: number | string;
    opacityValue?: number;
}
import { getUniApp } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/UniNativeApp&1.0.0";
import type { ComponentBaseOptions, RootNodeController } from '../Node';
import { callPageLifeCycle } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/Page&1.0.0";
import { FrameCallback } from "@ohos:arkui.UIContext";
class UniPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.router = getUniApp()?.router;
        this.animationType = getUniApp()?.animationType;
        this.animationDuration = getUniApp()?.animationDuration;
        this.__x = new ObservedPropertySimplePU(0, this, "x");
        this.__y = new ObservedPropertySimplePU(0, this, "y");
        this.__opacityValue = new ObservedPropertySimplePU(1, this, "opacityValue");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: UniPage_Params) {
        if (params.router !== undefined) {
            this.router = params.router;
        }
        if (params.animationType !== undefined) {
            this.animationType = params.animationType;
        }
        if (params.animationDuration !== undefined) {
            this.animationDuration = params.animationDuration;
        }
        if (params.x !== undefined) {
            this.x = params.x;
        }
        if (params.y !== undefined) {
            this.y = params.y;
        }
        if (params.opacityValue !== undefined) {
            this.opacityValue = params.opacityValue;
        }
    }
    updateStateVars(params: UniPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__x.purgeDependencyOnElmtId(rmElmtId);
        this.__y.purgeDependencyOnElmtId(rmElmtId);
        this.__opacityValue.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__x.aboutToBeDeleted();
        this.__y.aboutToBeDeleted();
        this.__opacityValue.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private router;
    private animationType;
    private animationDuration;
    private __x: ObservedPropertySimplePU<number | string>;
    get x() {
        return this.__x.get();
    }
    set x(newValue: number | string) {
        this.__x.set(newValue);
    }
    private __y: ObservedPropertySimplePU<number | string>;
    get y() {
        return this.__y.get();
    }
    set y(newValue: number | string) {
        this.__y.set(newValue);
    }
    private __opacityValue: ObservedPropertySimplePU<number>;
    get opacityValue() {
        return this.__opacityValue.get();
    }
    set opacityValue(newValue: number) {
        this.__opacityValue.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({
                alignContent: Alignment.TopEnd
            });
            globalThis.Context.animation({
                duration: this.animationDuration,
                curve: Curve.EaseOut,
                playMode: PlayMode.Normal
            });
            Stack.height('100%');
            Stack.width('100%');
            Stack.translate({
                x: this.x,
                y: this.y
            });
            Stack.opacity(this.opacityValue);
            globalThis.Context.animation(null);
            Stack.onAppear(() => {
            });
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Navigation.create(this.router, { moduleName: "entry", pagePath: "oh_modules/.ohpm/@dcloudio+uni-app-x-runtime@+e4e+u3lgwkkbkugmqvy0h1itp5flbzgksxgew+shz8=/oh_modules/@dcloudio/uni-app-x-runtime/src/main/ets/runtime/components/Page", isUserCreateStack: true });
            Navigation.mode(NavigationMode.Stack);
            Navigation.titleMode(NavigationTitleMode.Mini);
            Navigation.navDestination({ builder: this.pageBuilder.bind(this) });
            Navigation.hideTitleBar(true);
        }, Navigation);
        Navigation.pop();
        Stack.pop();
    }
    pageBuilder(name: string, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            NavDestination.create(() => {
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new PageContainer(this, { name: name }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@dcloudio+uni-app-x-runtime@+e4e+u3lgwkkbkugmqvy0h1itp5flbzgksxgew+shz8=/oh_modules/@dcloudio/uni-app-x-runtime/src/main/ets/runtime/components/Page.ets", line: 47, col: 7 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    name: name
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                name: name
                            });
                        }
                    }, { name: "PageContainer" });
                }
            }, { moduleName: "entry", pagePath: "oh_modules/.ohpm/@dcloudio+uni-app-x-runtime@+e4e+u3lgwkkbkugmqvy0h1itp5flbzgksxgew+shz8=/oh_modules/@dcloudio/uni-app-x-runtime/src/main/ets/runtime/components/Page" });
            NavDestination.hideTitleBar(true);
            NavDestination.onBackPressed(() => {
                getUniApp()?._emitter.emit('onBackButton');
                return true;
            });
        }, NavDestination);
        NavDestination.pop();
    }
    setAnimationBeginState() {
        switch (this.animationType) {
            case 'slide-in-right':
                this.x = '100%';
                break;
            case 'slide-in-left':
                this.x = '-100%';
                break;
            case 'slide-in-top':
                this.y = '-100%';
                break;
            case 'slide-in-bottom':
                this.y = '100%';
                break;
            case 'fade-in':
                this.opacityValue = 0;
                break;
        }
    }
    setAnimationEndState() {
        switch (this.animationType) {
            case 'slide-in-right':
                this.x = 0;
                break;
            case 'slide-in-left':
                this.x = 0;
                break;
            case 'slide-in-top':
                this.y = 0;
                break;
            case 'slide-in-bottom':
                this.y = 0;
                break;
            case 'fade-in':
                this.opacityValue = 1;
                break;
        }
    }
    aboutToAppear(): void {
        this.setAnimationBeginState();
    }
    onDidBuild(): void {
        const self = this;
        class CustomFrameCallback extends FrameCallback {
            onIdle() {
                self.setAnimationEndState();
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
export class PageContainer extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__name = new SynchedPropertySimpleOneWayPU(params.name, this, "name");
        this.rootNodeController = null;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: PageContainer_Params) {
        if (params.rootNodeController !== undefined) {
            this.rootNodeController = params.rootNodeController;
        }
    }
    updateStateVars(params: PageContainer_Params) {
        this.__name.reset(params.name);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__name.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__name.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __name: SynchedPropertySimpleOneWayPU<string>;
    get name() {
        return this.__name.get();
    }
    set name(newValue: string) {
        this.__name.set(newValue);
    }
    private rootNodeController: RootNodeController | null;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            RelativeContainer.create();
            RelativeContainer.height('100%');
            RelativeContainer.width('100%');
        }, RelativeContainer);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            NodeContainer.create(this.rootNodeController);
        }, NodeContainer);
        RelativeContainer.pop();
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
export interface IUniSubPage {
    name: string;
}
export interface UniSubPageOptions extends ComponentBaseOptions, IUniSubPage {
}
export class UniSubPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.onAboutToAppear = undefined;
        this.__name = new SynchedPropertySimpleOneWayPU(params.name, this, "name");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: UniSubPage_Params) {
        if (params.onAboutToAppear !== undefined) {
            this.onAboutToAppear = params.onAboutToAppear;
        }
    }
    updateStateVars(params: UniSubPage_Params) {
        this.__name.reset(params.name);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__name.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__name.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private onAboutToAppear?: (instance: UniSubPage) => void;
    private __name: SynchedPropertySimpleOneWayPU<string>;
    get name() {
        return this.__name.get();
    }
    set name(newValue: string) {
        this.__name.set(newValue);
    }
    initialRender() {
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new PageContainer(this, { name: this.name }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@dcloudio+uni-app-x-runtime@+e4e+u3lgwkkbkugmqvy0h1itp5flbzgksxgew+shz8=/oh_modules/@dcloudio/uni-app-x-runtime/src/main/ets/runtime/components/Page.ets", line: 154, col: 5 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            name: this.name
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        name: this.name
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
    registerNamedRoute(() => new UniPage(undefined, {}), routeNameNode, { bundleName: "com.bigScreen.qizhi", moduleName: "entry", pagePath: "../../../../oh_modules/.ohpm/@dcloudio+uni-app-x-runtime@+e4e+u3lgwkkbkugmqvy0h1itp5flbzgksxgew+shz8=/oh_modules/@dcloudio/uni-app-x-runtime/src/main/ets/runtime/components/Page", pageFullPath: "oh_modules/.ohpm/@dcloudio+uni-app-x-runtime@+e4e+u3lgwkkbkugmqvy0h1itp5flbzgksxgew+shz8=/oh_modules/@dcloudio/uni-app-x-runtime/src/main/ets/runtime/components/Page", integratedHsp: "false", moduleType: "followWithHap" });
}
