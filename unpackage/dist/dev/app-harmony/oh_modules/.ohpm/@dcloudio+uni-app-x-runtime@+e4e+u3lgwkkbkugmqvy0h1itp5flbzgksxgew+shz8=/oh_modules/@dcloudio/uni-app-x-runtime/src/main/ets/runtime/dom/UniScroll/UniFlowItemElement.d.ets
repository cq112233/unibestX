import { UniFlowItemElement as IUniFlowItemElement } from '@dcloudio/uni-app-x/types/native';
import { UniElementImpl } from '../UniElement';
import { FrameNode as FrameNode } from "@ohos.arkui.node";
import { typeNode as typeNode } from "@ohos.arkui.node";
export declare class UniFlowItemElementImpl extends UniElementImpl<typeNode.FlowItem> implements IUniFlowItemElement {
    private _wrapperFrameNode;
    createFrameNode(): typeNode.FlowItem;
    get slotFrameNode(): FrameNode;
    updateNativeAttribute(key: string, value: ESObject): void;
    updateNativeNodeStyle(key: string, value: Object | undefined, commonAttribute?: CommonAttribute): void;
    checkLayout(): void;
}
