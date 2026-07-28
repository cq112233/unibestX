import { UniStickyHeaderElement as IUniStickyHeaderElement } from '@dcloudio/uni-app-x/types/native';
import { UniElementImpl } from '../UniElement';
import { FrameNode as FrameNode } from "@ohos.arkui.node";
/**
 * 鸿蒙平台使用限制，StickyHeader只能在StickySection内使用。不能直接作为List的子元素
 */
export declare class UniStickyHeaderElementImpl extends UniElementImpl<FrameNode> implements IUniStickyHeaderElement {
    protected createFrameNode(): FrameNode;
    updateNativeNodeStyle(key: string, value: Object | undefined, commonAttribute?: CommonAttribute): void;
    checkLayout(): void;
}
