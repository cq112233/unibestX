import type { UniStickyHeaderElement as IUniStickyHeaderElement } from '@dcloudio/uni-app-x/types/native';
import { UniElementImpl } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniElement&1.0.0";
import { FrameNode } from "@ohos:arkui.node";
import { UniCssFlexEdge } from "@normalized:N&&&dcloudlayout/Index&1.0.0";
/**
 * 鸿蒙平台使用限制，StickyHeader只能在StickySection内使用。不能直接作为List的子元素
 */
export class UniStickyHeaderElementImpl extends UniElementImpl<FrameNode> implements IUniStickyHeaderElement {
    protected override createFrameNode(): FrameNode {
        const stickyHeader = new FrameNode(this.app.context!);
        return stickyHeader;
    }
    override updateNativeNodeStyle(key: string, value: Object | undefined, commonAttribute?: CommonAttribute): void {
        switch (key) {
            case 'x':
            case 'y':
                break;
            default:
                super.updateNativeNodeStyle(key, value, commonAttribute);
                break;
        }
    }
    override checkLayout(): void {
        super.checkLayout();
        const layoutNode = this.layoutNode;
        this.frameNode.commonAttribute.margin({
            top: layoutNode.getLayoutMargin(UniCssFlexEdge.Top),
            bottom: layoutNode.getLayoutMargin(UniCssFlexEdge.Bottom),
            left: layoutNode.getLayoutMargin(UniCssFlexEdge.Left),
            right: layoutNode.getLayoutMargin(UniCssFlexEdge.Right),
        });
    }
}
