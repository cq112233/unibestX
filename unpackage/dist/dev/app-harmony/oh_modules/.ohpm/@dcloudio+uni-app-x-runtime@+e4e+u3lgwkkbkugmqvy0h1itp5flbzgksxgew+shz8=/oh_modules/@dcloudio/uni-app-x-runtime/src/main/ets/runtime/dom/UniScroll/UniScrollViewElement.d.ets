import { UniScrollViewElement as IUniScrollViewElement } from '@dcloudio/uni-app-x/types/native';
import { FrameNode as FrameNode } from "@ohos.arkui.node";
import { UniScrollElementImpl } from './UniScroll';
import { GenericNodeController } from './utils';
export declare class UniScrollViewElementImpl extends UniScrollElementImpl implements IUniScrollViewElement {
    protected wrapper: FrameNode;
    createScrollNodeController(): GenericNodeController;
    get slotFrameNode(): FrameNode;
    protected getWrapperSize(): void;
    checkLayout(): void;
}
