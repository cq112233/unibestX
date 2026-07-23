import { UniElement as IUniElement } from '@dcloudio/uni-app-x/types/native';
import { UniElementImpl } from '../UniElement';
import { FrameNode as FrameNode } from "@ohos.arkui.node";
export declare class UniNestedScrollBaseElementImpl extends UniElementImpl<FrameNode> {
    private currentChild;
    protected createFrameNode(): FrameNode;
    insertBefore(newChild: IUniElement, refChild?: IUniElement | null | undefined): IUniElement | null;
    insertBefore(newChild: IUniElement): IUniElement | null;
    removeChild(aChild: IUniElement): IUniElement | null;
}
