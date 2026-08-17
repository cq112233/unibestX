import type { UniElement as IUniElement, UniWaterFlowElement as IUniWaterFlowElement } from '@dcloudio/uni-app-x/types/native';
import { ComponentContent } from "@ohos:arkui.node";
import { FrameNode } from "@ohos:arkui.node";
import { NodeController } from "@ohos:arkui.node";
import { typeNode } from "@ohos:arkui.node";
import { UniCssFlexEdge } from "@normalized:N&&&dcloudlayout/Index&1.0.0";
import { UniScrollElementImpl, ScrollViewBouncesMap, scrollViewShowScrollBarMap, ScrollViewDirection, isRefresherSlotContent } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniScroll/UniScroll&1.0.0";
import type { ScrollViewFrameNode } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniScroll/UniScroll&1.0.0";
import type { UniElementImpl } from '../UniElement';
import { GenericNodeController } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniScroll/utils&1.0.0";
import deviceInfo from "@ohos:deviceInfo";
export const ListViewDirectionMap = new Map<ScrollViewDirection, Axis>([
    // [ScrollViewDirection.None, Axis.Vertical], // list只有纵向横向
    // [ScrollViewDirection.All, ScrollDirection.Free], // 安卓iOS均不支持，鸿蒙也已废弃
    // [ScrollViewDirection.Horizontal, Axis.Horizontal], // waterflow不支持横向
    [ScrollViewDirection.Vertical, Axis.Vertical],
]);
export class LoadMoreNodeController extends NodeController {
    private rootNode: FrameNode | null = null;
    private loadMoreElement: UniElementImpl | null = null;
    makeNode(uiContext: UIContext): FrameNode | null {
        if (!this.loadMoreElement) {
            this.rootNode = new FrameNode(uiContext);
            return this.rootNode;
        }
        this.rootNode = this.rootNode || new FrameNode(uiContext);
        this.rootNode.appendChild(this.loadMoreElement.frameNode);
        return this.rootNode!;
    }
    appendLoadMoreElement(loadMoreElement: UniElementImpl) {
        this.loadMoreElement = loadMoreElement;
        this.rebuild();
    }
    removeLoadMoreElement(loadMoreElement: UniElementImpl) {
        if (!this.rootNode) {
            return;
        }
        this.loadMoreElement = null;
        this.rootNode.removeChild(loadMoreElement.frameNode);
        this.rebuild();
    }
    dispose() {
        this.rootNode?.disposeTree();
        this.rootNode = null;
    }
}
interface ILoadMoreOptions {
    controller: NodeController;
}
function buildLoadMore(options: ILoadMoreOptions, parent = null) {
    const __options__ = options;
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, options = __options__) => {
        Stack.create();
        Stack.width('100%');
        Stack.height('auto');
    }, Stack);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, options = __options__) => {
        NodeContainer.create(options.controller);
    }, NodeContainer);
    Stack.pop();
}
export function isLoadMoreSlotContent(child: IUniElement) {
    return child.hasAttribute('slot') && child.getAttribute('slot') === 'load-more';
}
export class UniWaterFlowElementImpl extends UniScrollElementImpl implements IUniWaterFlowElement {
    private waterFlowFrameNode!: typeNode.WaterFlow;
    private footerController!: LoadMoreNodeController;
    override hasWrapperNode: boolean = false;
    override initClass(): void {
        this._crossAxisCount = 2;
        this._mainAxisGap = 0;
        this._crossAxisGap = 0;
        super.initClass();
    }
    override createFrameNode(): ScrollViewFrameNode {
        this.updateLayoutGrid();
        const frameNode = super.createFrameNode();
        this.state.tagName = 'WATERFLOW';
        return frameNode;
    }
    override createScrollNodeController() {
        const rootFrameNode = this.waterFlowFrameNode = typeNode.createNode(this.app.context!, 'WaterFlow');
        const footerController = this.footerController = new LoadMoreNodeController();
        if (deviceInfo.sdkApiVersion >= 18) {
            rootFrameNode.initialize({
                footerContent: new ComponentContent<ILoadMoreOptions>(this.app.context!, wrapBuilder<[
                    ILoadMoreOptions
                ]>(buildLoadMore), {
                    controller: footerController
                } as ILoadMoreOptions),
                scroller: this.scroller,
                // 此处的as用于绕过鸿蒙编译器校验，以便低版本鸿蒙ide也能编译这段代码
            } as any as WaterFlowOptions);
        }
        else {
            rootFrameNode.initialize({
                scroller: this.scroller,
            });
        }
        rootFrameNode.attribute
            .nestedScroll(this.state.nestedOptions)
            .width('100%')
            .height('100%')
            .columnsTemplate('1fr 1fr')
            .columnsGap(0)
            .rowsGap(0)
            .edgeEffect(ScrollViewBouncesMap.get(this.state.realBounces))
            .scrollBar(scrollViewShowScrollBarMap.get(this.state.showScrollbar))
            .onAreaChange((oldArea: Area, newArea: Area) => {
            this.handleAreaChange(oldArea, newArea);
        });
        /**
         * 尽管鸿蒙文档上标明waterflow支持所有滚动事件，在api15下测试如下scroll相关事件在waterflow的frameNode上均不支持。
         * api 20起water-flow frameNode支持滚动相关事件
         */
        if (deviceInfo.sdkApiVersion >= 20) {
            rootFrameNode.attribute.onScrollFrameBegin((offset: number, scrollState: ScrollState): ScrollResult | undefined => {
                const isHorizontal = this.state.direction === ScrollViewDirection.Horizontal;
                const isVertical = this.state.direction === ScrollViewDirection.Vertical;
                const offsetResult: OffsetResult | undefined = this.onWillScroll(isHorizontal ? offset : 0, isVertical ? offset : 0, scrollState, ScrollSource.DRAG);
                if (!offsetResult) {
                    return;
                }
                if (isHorizontal) {
                    return {
                        offsetRemain: offsetResult.xOffset
                    };
                }
                if (isVertical) {
                    return {
                        offsetRemain: offsetResult.yOffset
                    };
                }
                return;
            });
            rootFrameNode.attribute.onWillScroll((offset: number, scrollState: ScrollState, scrollSource: ScrollSource): ScrollResult | undefined => {
                const isHorizontal = this.state.direction === ScrollViewDirection.Horizontal;
                const isVertical = this.state.direction === ScrollViewDirection.Vertical;
                const offsetResult: OffsetResult | undefined = this.onWillScroll(isHorizontal ? offset : 0, isVertical ? offset : 0, scrollState, scrollSource);
                if (!offsetResult) {
                    return;
                }
                if (isHorizontal) {
                    return {
                        offsetRemain: offsetResult.xOffset
                    };
                }
                if (isVertical) {
                    return {
                        offsetRemain: offsetResult.yOffset
                    };
                }
                return;
            });
            rootFrameNode.attribute.onDidScroll((offset: number, scrollState: ScrollState) => {
                const isHorizontal = this.state.direction === ScrollViewDirection.Horizontal;
                const isVertical = this.state.direction === ScrollViewDirection.Vertical;
                this.onDidScroll(isHorizontal ? offset : 0, isVertical ? offset : 0, scrollState);
            });
            rootFrameNode.attribute.onScrollStop(() => {
                this.onScrollStop();
            });
            rootFrameNode.attribute.onScrollStart(() => {
                this.onScrollStart();
            });
            rootFrameNode.attribute.onScrollIndex(() => {
                this.getWrapperSize();
            });
        }
        else {
            console.error(`Scroll event of water-flow is not supported before api 20. Current sdk api version is ${deviceInfo.sdkApiVersion}`);
        }
        rootFrameNode.attribute.onAttach(() => {
            this.initialScroll();
        });
        this.state.emitter.on('stateChange', (prop: string) => {
            switch (prop) {
                case 'realBounces':
                    rootFrameNode.attribute.edgeEffect(ScrollViewBouncesMap.get(this.state.realBounces));
                    break;
                case 'realShowScrollbar':
                    rootFrameNode.attribute.scrollBar(scrollViewShowScrollBarMap.get(this.state.realShowScrollbar));
                    break;
                case 'nestedOptions':
                    rootFrameNode.attribute.nestedScroll(this.state.nestedOptions);
                    break;
            }
        });
        return new GenericNodeController({
            rootFrameNode
        });
    }
    override get slotFrameNode() {
        return this.waterFlowFrameNode;
    }
    protected appendSlotContent(slotName: string, aChild: UniElementImpl) {
        if (slotName === 'load-more') {
            this.footerController.appendLoadMoreElement(aChild);
        }
        super.appendSlotContent(slotName, aChild);
    }
    protected removeSlotContent(slotName: string, aChild: UniElementImpl) {
        if (slotName === 'load-more') {
            this.footerController.removeLoadMoreElement(aChild);
        }
        super.removeSlotContent(slotName, aChild);
    }
    override insertFrameNodeAfter(frameNode: FrameNode, anchor: FrameNode | null) {
        if (!this.slotFrameNode) {
            return;
        }
        // 首个FlowItem必须插入到load-more的后面
        this.slotFrameNode.insertChildAfter(frameNode, anchor ? anchor : this.slotFrameNode.getChild(0));
    }
    private _crossAxisCount = 2;
    private _mainAxisGap = 0;
    private _crossAxisGap = 0;
    private updateLayoutGrid() {
        this.layoutNode.setGridLayout(undefined, this._crossAxisCount, this._mainAxisGap, this._crossAxisGap);
        this.layoutNode.dirty();
    }
    override updateNativeAttribute(key: string, value: any): void {
        switch (key) {
            case 'crossAxisCount':
                this.waterFlowFrameNode.attribute.columnsTemplate(new Array(value as number).fill('1fr').join(' '));
                this._crossAxisCount = value;
                this.updateLayoutGrid();
                break;
            case 'mainAxisGap':
                this.waterFlowFrameNode.attribute.rowsGap(value as number);
                this._mainAxisGap = value;
                this.updateLayoutGrid();
                break;
            case 'crossAxisGap':
                this.waterFlowFrameNode.attribute.columnsGap(value as number);
                this._crossAxisGap = value;
                this.updateLayoutGrid();
                break;
            default:
                super.updateNativeAttribute(key, value);
                break;
        }
    }
    protected getWrapperSize(): void {
        const currentLayoutWidth = this.rootContentSize.width;
        const currentLayoutHeight = this.rootContentSize.height;
        const width = currentLayoutWidth;
        let height = currentLayoutHeight;
        for (let i = this.children.length - 1; i > this.children.length - 20; i--) {
            const child = this.children[i] as UniElementImpl | undefined;
            if (!child || isRefresherSlotContent(child)) {
                continue;
            }
            const childFrameNode = child.frameNode;
            const childLayoutNode = child.layoutNode;
            if (!childFrameNode) {
                // 容错，页面关闭后element会解除和frameNode的关联，此时机调用可能导致出错
                continue;
            }
            /**
             * 排版器仅会处理flow-item的大小信息，不会处理位置
             * 目前没有任何方式能取到water-flow的滚动内容高度。如果以后有方式能取到务必重构这块逻辑
             * scrollTop + 最后一个flow-item到list-view的偏移量（使用frameNode获取）- waterflow的paddingTop（排版器获取）+ 最后一个flow-item的高度（排版器获取）+ 最后一个flow-item的marginBottom（排版器获取）
             */
            height = Math.max(height, this.scrollTop + childFrameNode.getPositionToParent().y + childLayoutNode.getLayoutHeight() +
                childLayoutNode.getLayoutMargin(UniCssFlexEdge.Bottom) -
                this.layoutNode.getLayoutPadding(UniCssFlexEdge.Top));
        }
        height = Math.max(currentLayoutHeight, height);
        this.wrapperSize = {
            width,
            height
        };
    }
    override checkLayout(): void {
        super.checkLayout();
        const layoutNode = this.layoutNode;
        this.waterFlowFrameNode.attribute.padding({
            top: layoutNode.getLayoutPadding(UniCssFlexEdge.Top),
            bottom: layoutNode.getLayoutPadding(UniCssFlexEdge.Bottom),
            left: layoutNode.getLayoutPadding(UniCssFlexEdge.Left),
            right: layoutNode.getLayoutPadding(UniCssFlexEdge.Right),
        });
    }
    override dispose(): void {
        const waterFlowFrameNode = this.waterFlowFrameNode;
        if (waterFlowFrameNode) {
            waterFlowFrameNode.attribute.onAreaChange(undefined)
                .onScrollIndex(undefined)
                .onScrollStart(undefined)
                .onScrollStop(undefined)
                .onDidScroll(undefined)
                .onWillScroll(undefined)
                .onAttach(undefined);
        }
        this.footerController.dispose();
        super.dispose();
    }
}
