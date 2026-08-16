import { UniSwiperItemElement as IUniSwiperItemElement } from '@dcloudio/uni-app-x/types/native';
import { UniElementImpl } from './UniElement';
import { typeNode as typeNode } from "@ohos.arkui.node";
export declare class UniSwiperItemElementImpl extends UniElementImpl<typeNode.Stack> implements IUniSwiperItemElement {
    itemId: string;
    private isSwiperViewportLayout;
    protected createFrameNode(): typeNode.Stack;
    updateNativeAttribute(key: string, value: string): void;
    updateNativeNodeStyle(key: string, value: Object | undefined, commonAttribute?: CommonAttribute): void;
    parseStyle(key: string, value: Object): boolean;
    setSwiperViewportLayout(): void;
    unsetSwiperViewportLayout(): void;
    private applySwiperViewportLayout;
    private restoreLayoutStyle;
}
