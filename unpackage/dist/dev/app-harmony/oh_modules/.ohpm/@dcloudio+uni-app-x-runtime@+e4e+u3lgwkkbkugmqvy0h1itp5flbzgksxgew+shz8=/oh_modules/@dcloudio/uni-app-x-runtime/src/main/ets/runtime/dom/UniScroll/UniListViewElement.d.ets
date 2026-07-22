import { UniElement as IUniElement, UniListViewElement as IUniListViewElement } from '@dcloudio/uni-app-x/types/native';
import { typeNode as typeNode } from "@ohos.arkui.node";
import { UniScrollElementImpl, ScrollViewDirection, ScrollViewFrameNode } from './UniScroll';
import { GenericNodeController } from './utils';
export declare const ListViewDirectionMap: Map<ScrollViewDirection, Axis>;
export declare class UniListViewElementImpl extends UniScrollElementImpl implements IUniListViewElement {
    private listFrameNode;
    hasWrapperNode: boolean;
    createFrameNode(): ScrollViewFrameNode;
    createScrollNodeController(): GenericNodeController;
    get slotFrameNode(): typeNode.List;
    insertBefore(newChild: IUniElement, refChild?: IUniElement | null | undefined): IUniElement | null;
    insertBefore(newChild: IUniElement): IUniElement | null;
    protected getWrapperSize(): void;
    checkLayout(): void;
    dispose(): void;
}
