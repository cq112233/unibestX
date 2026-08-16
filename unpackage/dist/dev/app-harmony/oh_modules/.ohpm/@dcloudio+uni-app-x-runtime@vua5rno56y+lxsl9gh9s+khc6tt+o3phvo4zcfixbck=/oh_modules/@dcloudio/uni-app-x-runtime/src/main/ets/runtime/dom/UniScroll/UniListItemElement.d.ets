import { UniListItemElement as IUniListItemElement } from '@dcloudio/uni-app-x/types/native';
import { UniElementImpl } from '../UniElement';
import { typeNode as typeNode } from "@ohos.arkui.node";
export declare class UniListItemElementImpl extends UniElementImpl<typeNode.ListItem> implements IUniListItemElement {
    static skipDefaultFrameNodeStyle: boolean;
    protected createFrameNode(): typeNode.ListItem;
    updateNativeNodeStyle(key: string, value: Object | undefined, commonAttribute?: CommonAttribute): void;
    checkLayout(): void;
}
