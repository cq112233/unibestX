if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
import type { UniScrollViewElement as IUniScrollViewElement } from '@dcloudio/uni-app-x/types/native';
import { BuilderNode } from "@ohos:arkui.node";
import { FrameNode } from "@ohos:arkui.node";
import { UniScrollElementImpl, ScrollViewDirectionMap, ScrollViewBouncesMap, scrollViewShowScrollBarMap, isRefresherSlotContent } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniScroll/UniScroll&1.0.0";
import type { ScrollViewState } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniScroll/UniScroll&1.0.0";
import type { UniElementImpl } from '../UniElement';
import { GenericNodeController } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniScroll/utils&1.0.0";
import { UniCssFlexEdge } from "@normalized:N&&&dcloudlayout/Index&1.0.0";
interface PrivateUniElement {
    isFullscreen: boolean;
    isFixed: boolean;
}
class ScrollViewScroll extends ViewV2 {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda, extraInfo) {
        super(parent, elmtId, extraInfo);
        this.initParam("scroller", (params && "scroller" in params) ? params.scroller : undefined);
        this.initParam("wrapperNodeController", (params && "wrapperNodeController" in params) ? params.wrapperNodeController : null);
        this.initParam("state", (params && "state" in params) ? params.state : undefined);
        this.initParam("onWillScroll", (params && "onWillScroll" in params) ? params.onWillScroll : undefined);
        this.initParam("handleAreaChange", (params && "handleAreaChange" in params) ? params.handleAreaChange : undefined);
        this.initParam("onScrollStop", (params && "onScrollStop" in params) ? params.onScrollStop : undefined);
        this.initParam("onScrollStart", (params && "onScrollStart" in params) ? params.onScrollStart : undefined);
        this.initParam("onDidScroll", (params && "onDidScroll" in params) ? params.onDidScroll : undefined);
        this.initParam("initialScroll", (params && "initialScroll" in params) ? params.initialScroll : undefined);
        this.initParam("onAboutToDisappear", (params && "onAboutToDisappear" in params) ? params.onAboutToDisappear : undefined);
        this.finalizeConstruction();
    }
    public resetStateVarsOnReuse(params: Object): void {
        this.resetParam("scroller", (params && "scroller" in params) ? params.scroller : undefined);
        this.resetParam("wrapperNodeController", (params && "wrapperNodeController" in params) ? params.wrapperNodeController : null);
        this.resetParam("state", (params && "state" in params) ? params.state : undefined);
        this.resetParam("onWillScroll", (params && "onWillScroll" in params) ? params.onWillScroll : undefined);
        this.resetParam("handleAreaChange", (params && "handleAreaChange" in params) ? params.handleAreaChange : undefined);
        this.resetParam("onScrollStop", (params && "onScrollStop" in params) ? params.onScrollStop : undefined);
        this.resetParam("onScrollStart", (params && "onScrollStart" in params) ? params.onScrollStart : undefined);
        this.resetParam("onDidScroll", (params && "onDidScroll" in params) ? params.onDidScroll : undefined);
        this.resetParam("initialScroll", (params && "initialScroll" in params) ? params.initialScroll : undefined);
        this.resetParam("onAboutToDisappear", (params && "onAboutToDisappear" in params) ? params.onAboutToDisappear : undefined);
    }
    @Param
    readonly scroller: Scroller;
    @Once
    @Param
    wrapperNodeController: GenericNodeController | null;
    @Param
    readonly state: ScrollViewState;
    @Param
    readonly onWillScroll: Function;
    @Param
    readonly handleAreaChange: (oldValue: Area, newValue: Area) => void;
    @Param
    readonly onScrollStop: Function;
    @Param
    readonly onScrollStart: Function;
    @Param
    readonly onDidScroll: Function;
    @Param
    readonly initialScroll: Function;
    @Param
    readonly onAboutToDisappear: Function;
    aboutToDisappear(): void {
        this.wrapperNodeController?.dispose();
        this.wrapperNodeController = null;
        this.onAboutToDisappear();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create(this.scroller);
            Scroll.onAttach(() => {
                this.initialScroll();
            });
            Scroll.nestedScroll(this.state.nestedOptions);
            Scroll.width('100%');
            Scroll.height('100%');
            Scroll.scrollable(ScrollViewDirectionMap.get(this.state.direction));
            Scroll.edgeEffect(ScrollViewBouncesMap.get(this.state.realBounces));
            Scroll.scrollBar(scrollViewShowScrollBarMap.get(this.state.realShowScrollbar));
            Scroll.onWillScroll((xOffset: number, yOffset: number, scrollState: ScrollState, scrollSource: ScrollSource): OffsetResult | undefined => {
                return this.onWillScroll(xOffset, yOffset, scrollState, scrollSource);
            });
            Scroll.onDidScroll((xOffset: number, yOffset: number, scrollState: ScrollState) => {
                return this.onDidScroll(xOffset, yOffset, scrollState);
            });
            Scroll.onAreaChange((oldArea: Area, newArea: Area) => {
                this.handleAreaChange(oldArea, newArea);
            });
            Scroll.onScrollStop(() => {
                this.onScrollStop();
            });
            Scroll.onScrollStart(() => {
                this.onScrollStart();
            });
            Scroll.align(Alignment.TopStart);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            NodeContainer.create(this.wrapperNodeController);
        }, NodeContainer);
        Scroll.pop();
    }
    public updateStateVars(params) {
        if (params === undefined) {
            return;
        }
        if ("scroller" in params) {
            this.updateParam("scroller", params.scroller);
        }
        if ("wrapperNodeController" in params) {
            this.updateParam("wrapperNodeController", params.wrapperNodeController);
        }
        if ("state" in params) {
            this.updateParam("state", params.state);
        }
        if ("onWillScroll" in params) {
            this.updateParam("onWillScroll", params.onWillScroll);
        }
        if ("handleAreaChange" in params) {
            this.updateParam("handleAreaChange", params.handleAreaChange);
        }
        if ("onScrollStop" in params) {
            this.updateParam("onScrollStop", params.onScrollStop);
        }
        if ("onScrollStart" in params) {
            this.updateParam("onScrollStart", params.onScrollStart);
        }
        if ("onDidScroll" in params) {
            this.updateParam("onDidScroll", params.onDidScroll);
        }
        if ("initialScroll" in params) {
            this.updateParam("initialScroll", params.initialScroll);
        }
        if ("onAboutToDisappear" in params) {
            this.updateParam("onAboutToDisappear", params.onAboutToDisappear);
        }
    }
    rerender() {
        this.updateDirtyElements();
    }
}
interface ScrollBuilderOptions {
    onWillScroll: Function;
    handleAreaChange: (oldValue: Area, newValue: Area) => void;
    onScrollStop: Function;
    initialScroll: Function;
    onDidScroll: Function;
    onScrollStart: Function;
    onAboutToDisappear: Function;
    state: ScrollViewState;
    scroller: Scroller;
    wrapperNodeController: GenericNodeController;
}
function ScrollViewScrollBuilder(options: ScrollBuilderOptions, parent = null) {
    const __options__ = options;
    {
        (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, options = __options__) => {
            if (isInitialRender) {
                let componentCall = new ScrollViewScroll(parent ? parent : this, {
                    onWillScroll: options.onWillScroll,
                    handleAreaChange: options.handleAreaChange,
                    onScrollStop: options.onScrollStop,
                    initialScroll: options.initialScroll,
                    onDidScroll: options.onDidScroll,
                    onScrollStart: options.onScrollStart,
                    onAboutToDisappear: options.onAboutToDisappear,
                    state: options.state,
                    scroller: options.scroller,
                    wrapperNodeController: options.wrapperNodeController,
                }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@dcloudio+uni-app-x-runtime@+e4e+u3lgwkkbkugmqvy0h1itp5flbzgksxgew+shz8=/oh_modules/@dcloudio/uni-app-x-runtime/src/main/ets/runtime/dom/UniScroll/UniScrollViewElement.ets", line: 88, col: 3 });
                ViewV2.create(componentCall);
                let paramsLambda = () => {
                    return {
                        onWillScroll: options.onWillScroll,
                        handleAreaChange: options.handleAreaChange,
                        onScrollStop: options.onScrollStop,
                        initialScroll: options.initialScroll,
                        onDidScroll: options.onDidScroll,
                        onScrollStart: options.onScrollStart,
                        onAboutToDisappear: options.onAboutToDisappear,
                        state: options.state,
                        scroller: options.scroller,
                        wrapperNodeController: options.wrapperNodeController
                    };
                };
                componentCall.paramsGenerator_ = paramsLambda;
            }
            else {
                (parent ? parent : this).updateStateVarsOfChildByElmtId(elmtId, {
                    onWillScroll: options.onWillScroll,
                    handleAreaChange: options.handleAreaChange,
                    onScrollStop: options.onScrollStop,
                    initialScroll: options.initialScroll,
                    onDidScroll: options.onDidScroll,
                    onScrollStart: options.onScrollStart,
                    onAboutToDisappear: options.onAboutToDisappear,
                    state: options.state,
                    scroller: options.scroller,
                    wrapperNodeController: options.wrapperNodeController
                });
            }
        }, { name: "ScrollViewScroll" });
    }
}
const wrappedScrollBuilder = wrapBuilder<[
    ScrollBuilderOptions
]>(ScrollViewScrollBuilder);
export class UniScrollViewElementImpl extends UniScrollElementImpl implements IUniScrollViewElement {
    protected wrapper!: FrameNode;
    override createScrollNodeController() {
        const rootBuilderNode = new BuilderNode<[
            ScrollBuilderOptions
        ]>(this.app.context!);
        const slotFrameNode = new FrameNode(this.app.context!);
        this.wrapper = slotFrameNode;
        const onAboutToDisappear = () => {
            this.slotFrameNode.dispose();
            rootBuilderNode.update({});
        };
        rootBuilderNode.build(wrappedScrollBuilder, {
            onAboutToDisappear,
            onWillScroll: this.onWillScroll,
            handleAreaChange: this.handleAreaChange,
            onScrollStop: this.onScrollStop,
            initialScroll: this.initialScroll,
            onDidScroll: this.onDidScroll,
            onScrollStart: this.onScrollStart,
            state: this.state,
            scroller: this.scroller,
            wrapperNodeController: new GenericNodeController({
                rootFrameNode: slotFrameNode
            })
        });
        const rootFrameNode = rootBuilderNode.getFrameNode()!;
        return new GenericNodeController({
            rootFrameNode
        });
    }
    override get slotFrameNode() {
        return this.wrapper!;
    }
    protected getWrapperSize(): void {
        let height = 0;
        let width = 0;
        const children = this.children;
        const childCount = children.length;
        let lastChild: UniElementImpl | null = null;
        for (let i = childCount - 1; i >= childCount - 10 && i >= 0; i--) {
            lastChild = children[i] as UniElementImpl;
            if (isRefresherSlotContent(lastChild)) {
                continue;
            }
            const layoutNode = (lastChild as UniElementImpl).layoutNode;
            const tempHeight = layoutNode.getLayoutTop() + layoutNode.getLayoutHeight() + layoutNode.getLayoutMargin(UniCssFlexEdge.Bottom);
            const tempWidth = layoutNode.getLayoutLeft() + layoutNode.getLayoutWidth() + layoutNode.getLayoutMargin(UniCssFlexEdge.Right);
            height = Math.max(height, tempHeight);
            width = Math.max(width, tempWidth);
        }
        width = Math.max(this.rootContentSize.width, width);
        height = Math.max(this.rootContentSize.height, height);
        this.wrapperSize = {
            width,
            height
        };
    }
    override checkLayout(): void {
        super.checkLayout();
        this.getWrapperSize();
        this.wrapper.commonAttribute.width(this.wrapperSize.width);
        this.wrapper.commonAttribute.height(this.wrapperSize.height);
    }
}
