import { UniElement as IUniElement, UniStickySectionElement as IUniStickySectionElement } from '@dcloudio/uni-app-x/types/native';
import { UniElementImpl } from '../UniElement';
import { ComponentContent as ComponentContent } from "@ohos.arkui.node";
import { FrameNode as FrameNode } from "@ohos.arkui.node";
import { typeNode as typeNode } from "@ohos.arkui.node";
import { GenericNodeController } from './utils';
export declare class UniStickySectionElementImpl extends UniElementImpl<typeNode.ListItemGroup> implements IUniStickySectionElement {
    headerNodeController: GenericNodeController;
    headerComponentContent: ComponentContent<GenericNodeController>;
    protected createFrameNode(): typeNode.ListItemGroup;
    getRealChildFrameNode(child: UniElementImpl): FrameNode | null;
    updateNativeNodeStyle(key: string, value: Object | undefined, commonAttribute?: CommonAttribute): void;
    protected appendSlotContent(slotName: string, aChild: UniElementImpl): void;
    protected removeSlotContent(slotName: string, aChild: UniElementImpl): void;
    insertBefore(newChild: IUniElement, refChild?: IUniElement | null | undefined): IUniElement | null;
    insertBefore(newChild: IUniElement): IUniElement | null;
    removeChild(aChild: IUniElement): IUniElement | null;
    checkLayout(): void;
    dispose(): void;
}
