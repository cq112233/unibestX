import type { UniFlowItemElement as IUniFlowItemElement } from '@dcloudio/uni-app-x/types/native';
import { UniElementImpl } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniElement&1.0.0";
import { UniCssFlexEdge } from "@normalized:N&&&dcloudlayout/Index&1.0.0";
import { FrameNode } from "@ohos:arkui.node";
import { typeNode } from "@ohos:arkui.node";
export class UniFlowItemElementImpl extends UniElementImpl<typeNode.FlowItem> implements IUniFlowItemElement {
    private _wrapperFrameNode!: FrameNode;
    override createFrameNode(): typeNode.FlowItem {
        this.layoutNode.setGridItemLayout(true);
        const flowItem = typeNode.createNode(this.app.context!, 'FlowItem');
        flowItem.attribute.width('100%').align(Alignment.TopStart);
        this._wrapperFrameNode = new FrameNode(this.app.context!);
        this._wrapperFrameNode.commonAttribute.width('100%').height('100%');
        flowItem.appendChild(this._wrapperFrameNode);
        return flowItem;
    }
    override get slotFrameNode() {
        return this._wrapperFrameNode;
    }
    override updateNativeAttribute(key: string, value: any): void {
        if (key === 'slot' && value) {
            this.layoutNode.setGridItemLayout(false);
        }
        super.updateNativeAttribute(key, value);
    }
    override updateNativeNodeStyle(key: string, value: Object | undefined, commonAttribute?: CommonAttribute): void {
        switch (key) {
            case 'x':
            case 'y':
            case 'width':
                break;
            default:
                super.updateNativeNodeStyle(key, value, commonAttribute);
                break;
        }
    }
    override checkLayout(): void {
        super.checkLayout();
        const layoutNode = this.layoutNode;
        this.frameNode.attribute.margin({
            top: layoutNode.getLayoutMargin(UniCssFlexEdge.Top),
            bottom: layoutNode.getLayoutMargin(UniCssFlexEdge.Bottom),
            left: layoutNode.getLayoutMargin(UniCssFlexEdge.Left),
            right: layoutNode.getLayoutMargin(UniCssFlexEdge.Right),
        });
    }
}
