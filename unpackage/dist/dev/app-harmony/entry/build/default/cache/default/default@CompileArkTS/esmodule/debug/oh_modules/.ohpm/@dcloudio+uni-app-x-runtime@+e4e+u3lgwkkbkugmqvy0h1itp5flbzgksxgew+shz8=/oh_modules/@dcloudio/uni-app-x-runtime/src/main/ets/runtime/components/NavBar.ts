if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface NavBar_Params {
    onAboutToAppear?: (instance: NavBar) => void;
    onBackClick?: () => void;
    titleText?: string;
    titleBackgroundColor?: string;
    titleColor?: string;
    autoBackButton?: boolean;
    loading?: boolean;
    navigationStyle?: string;
}
import type { ComponentBaseOptions } from '../Node';
import { SafeAreaOffset } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/components/SafeAreaOffset&1.0.0";
export interface ITitleNView {
    titleText?: string;
    titleBackgroundColor?: string;
    titleColor?: string;
    autoBackButton?: boolean;
    loading?: boolean;
}
export interface NavBarOptions extends ComponentBaseOptions, ITitleNView {
    onBackClick?: () => void;
}
const FlexRowCenter = (): FlexOptions => {
    return { direction: FlexDirection.Row, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center };
};
export class NavBar extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.onAboutToAppear = undefined;
        this.onBackClick = undefined;
        this.__titleText = new SynchedPropertySimpleOneWayPU(params.titleText, this, "titleText");
        this.__titleBackgroundColor = new SynchedPropertySimpleOneWayPU(params.titleBackgroundColor, this, "titleBackgroundColor");
        this.__titleColor = new SynchedPropertySimpleOneWayPU(params.titleColor, this, "titleColor");
        this.__autoBackButton = new SynchedPropertySimpleOneWayPU(params.autoBackButton, this, "autoBackButton");
        this.__loading = new SynchedPropertySimpleOneWayPU(params.loading, this, "loading");
        this.__navigationStyle = new SynchedPropertySimpleOneWayPU(params.navigationStyle, this, "navigationStyle");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: NavBar_Params) {
        if (params.onAboutToAppear !== undefined) {
            this.onAboutToAppear = params.onAboutToAppear;
        }
        if (params.onBackClick !== undefined) {
            this.onBackClick = params.onBackClick;
        }
    }
    updateStateVars(params: NavBar_Params) {
        this.__titleText.reset(params.titleText);
        this.__titleBackgroundColor.reset(params.titleBackgroundColor);
        this.__titleColor.reset(params.titleColor);
        this.__autoBackButton.reset(params.autoBackButton);
        this.__loading.reset(params.loading);
        this.__navigationStyle.reset(params.navigationStyle);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__titleText.purgeDependencyOnElmtId(rmElmtId);
        this.__titleBackgroundColor.purgeDependencyOnElmtId(rmElmtId);
        this.__titleColor.purgeDependencyOnElmtId(rmElmtId);
        this.__autoBackButton.purgeDependencyOnElmtId(rmElmtId);
        this.__loading.purgeDependencyOnElmtId(rmElmtId);
        this.__navigationStyle.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__titleText.aboutToBeDeleted();
        this.__titleBackgroundColor.aboutToBeDeleted();
        this.__titleColor.aboutToBeDeleted();
        this.__autoBackButton.aboutToBeDeleted();
        this.__loading.aboutToBeDeleted();
        this.__navigationStyle.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private onAboutToAppear?: (instance: NavBar) => void;
    private onBackClick?: () => void;
    private __titleText?: SynchedPropertySimpleOneWayPU<string>;
    get titleText() {
        return this.__titleText.get();
    }
    set titleText(newValue: string) {
        this.__titleText.set(newValue);
    }
    private __titleBackgroundColor?: SynchedPropertySimpleOneWayPU<string>;
    get titleBackgroundColor() {
        return this.__titleBackgroundColor.get();
    }
    set titleBackgroundColor(newValue: string) {
        this.__titleBackgroundColor.set(newValue);
    }
    private __titleColor?: SynchedPropertySimpleOneWayPU<string>;
    get titleColor() {
        return this.__titleColor.get();
    }
    set titleColor(newValue: string) {
        this.__titleColor.set(newValue);
    }
    private __autoBackButton?: SynchedPropertySimpleOneWayPU<boolean>;
    get autoBackButton() {
        return this.__autoBackButton.get();
    }
    set autoBackButton(newValue: boolean) {
        this.__autoBackButton.set(newValue);
    }
    private __loading?: SynchedPropertySimpleOneWayPU<boolean>;
    get loading() {
        return this.__loading.get();
    }
    set loading(newValue: boolean) {
        this.__loading.set(newValue);
    }
    private __navigationStyle?: SynchedPropertySimpleOneWayPU<string>;
    get navigationStyle() {
        return this.__navigationStyle.get();
    }
    set navigationStyle(newValue: string) {
        this.__navigationStyle.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.backgroundColor(this.titleBackgroundColor || '#F8F8F8');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.navigationStyle !== 'custom') {
                this.ifElseBranchUpdateFunction(0, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new SafeAreaOffset(this, { type: 'top' }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@dcloudio+uni-app-x-runtime@+e4e+u3lgwkkbkugmqvy0h1itp5flbzgksxgew+shz8=/oh_modules/@dcloudio/uni-app-x-runtime/src/main/ets/runtime/components/NavBar.ets", line: 34, col: 9 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        type: 'top'
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    type: 'top'
                                });
                            }
                        }, { name: "SafeAreaOffset" });
                    }
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Flex.create(FlexRowCenter());
                    }, Flex);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Stack.create({ alignContent: Alignment.Start });
                        Stack.height(44);
                    }, Stack);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Flex.create(FlexRowCenter());
                        Flex.width('100%');
                    }, Flex);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        // 使用 Row 在 titleText 过长时 LoadingProgress 会静止
                        Flex.create(FlexRowCenter());
                        // 使用 Row 在 titleText 过长时 LoadingProgress 会静止
                        Flex.margin({ left: 50, right: 50 });
                    }, Flex);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        If.create();
                        if (this.loading) {
                            this.ifElseBranchUpdateFunction(0, () => {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    LoadingProgress.create();
                                    LoadingProgress.width(32);
                                    LoadingProgress.margin(4);
                                    LoadingProgress.color(this.titleColor);
                                }, LoadingProgress);
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
                        if (this.titleText) {
                            this.ifElseBranchUpdateFunction(0, () => {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    Text.create(this.titleText);
                                    Text.fontSize(20);
                                    Text.fontColor(this.titleColor);
                                    Text.maxLines(1);
                                    Text.textOverflow({
                                        overflow: TextOverflow.Ellipsis
                                    });
                                    Text.textAlign(TextAlign.Center);
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
                    // 使用 Row 在 titleText 过长时 LoadingProgress 会静止
                    Flex.pop();
                    Flex.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        If.create();
                        // 按钮在栈顶不影响点击
                        if (this.autoBackButton) {
                            this.ifElseBranchUpdateFunction(0, () => {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    Stack.create();
                                    Stack.width(30);
                                    Stack.height(30);
                                    Stack.margin({ left: 5 });
                                    Stack.onClick(() => {
                                        this.onBackClick?.();
                                    });
                                }, Stack);
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    Text.create('\uE601');
                                    Text.fontSize(27);
                                    Text.fontColor(this.titleColor ?? Color.Black);
                                    Text.halfLeading(true);
                                    Text.fontFamily('uni-icon');
                                }, Text);
                                Text.pop();
                                Stack.pop();
                            });
                        }
                        else {
                            this.ifElseBranchUpdateFunction(1, () => {
                            });
                        }
                    }, If);
                    If.pop();
                    Stack.pop();
                    Flex.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        Column.pop();
    }
    aboutToAppear(): void {
        this.onAboutToAppear?.(this);
    }
    rerender() {
        this.updateDirtyElements();
    }
}
