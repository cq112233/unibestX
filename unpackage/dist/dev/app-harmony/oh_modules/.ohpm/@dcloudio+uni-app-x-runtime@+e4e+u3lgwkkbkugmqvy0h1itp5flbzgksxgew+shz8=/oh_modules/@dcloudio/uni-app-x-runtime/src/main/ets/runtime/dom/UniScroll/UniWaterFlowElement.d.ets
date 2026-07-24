import { UniElement as IUniElement, UniWaterFlowElement as IUniWaterFlowElement } from '@dcloudio/uni-app-x/types/native';
import { FrameNode as FrameNode } from "@ohos.arkui.node";
import { NodeController as NodeController } from "@ohos.arkui.node";
import { typeNode as typeNode } from "@ohos.arkui.node";
import { UniScrollElementImpl, ScrollViewDirection, ScrollViewFrameNode } from './UniScroll';
import { UniElementImpl } from '../UniElement';
import { GenericNodeController } from './utils';
export declare const ListViewDirectionMap: Map<ScrollViewDirection, Axis>;
export declare class LoadMoreNodeController extends NodeController {
    private rootNode;
    private loadMoreElement;
    makeNode(uiContext: UIContext): FrameNode | null;
    appendLoadMoreElement(loadMoreElement: UniElementImpl): void;
    removeLoadMoreElement(loadMoreElement: UniElementImpl): void;
    dispose(): void;
}
export declare function isLoadMoreSlotContent(child: IUniElement): boolean;
export declare class UniWaterFlowElementImpl extends UniScrollElementImpl implements IUniWaterFlowElement {
    private waterFlowFrameNode;
    private footerController;
    hasWrapperNode: boolean;
    initClass(): void;
    createFrameNode(): ScrollViewFrameNode;
    createScrollNodeController(): GenericNodeController;
    get slotFrameNode(): typeNode.WaterFlow;
    protected appendSlotContent(slotName: string, aChild: UniElementImpl): void;
    protected removeSlotContent(slotName: string, aChild: UniElementImpl): void;
    insertFrameNodeAfter(frameNode: FrameNode, anchor: FrameNode | null): void;
    private _crossAxisCount;
    private _mainAxisGap;
    private _crossAxisGap;
    private updateLayoutGrid;
    updateNativeAttribute(key: string, value: ESObject): void;
    protected getWrapperSize(): void;
    checkLayout(): void;
    dispose(): void;
}
