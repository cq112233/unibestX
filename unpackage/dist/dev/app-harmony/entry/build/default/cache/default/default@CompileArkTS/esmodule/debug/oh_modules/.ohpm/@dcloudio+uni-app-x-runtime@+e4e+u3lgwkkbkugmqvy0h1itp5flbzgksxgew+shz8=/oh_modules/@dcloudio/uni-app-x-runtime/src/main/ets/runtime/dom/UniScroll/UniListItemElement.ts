import type { UniListItemElement as IUniListItemElement } from '@dcloudio/uni-app-x/types/native';
import { UniElementImpl } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniElement&1.0.0";
import { typeNode } from "@ohos:arkui.node";
import { UniCssFlexEdge } from "@normalized:N&&&dcloudlayout/Index&1.0.0";
import { DEFAULT_TRANSFORM } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/helper/index&1.0.0";
export class UniListItemElementImpl extends UniElementImpl<typeNode.ListItem> implements IUniListItemElement {
    static skipDefaultFrameNodeStyle = true;
    protected override createFrameNode(): typeNode.ListItem {
        const listItem = typeNode.createNode(this.app.context!, 'ListItem');
        listItem.attribute
            .clip(true)
            .transform(DEFAULT_TRANSFORM as Object as object)
            .opacity(1)
            .align(Alignment.TopStart);
        return listItem;
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
        this.frameNode.attribute.margin({
            top: layoutNode.getLayoutMargin(UniCssFlexEdge.Top),
            bottom: layoutNode.getLayoutMargin(UniCssFlexEdge.Bottom),
            left: layoutNode.getLayoutMargin(UniCssFlexEdge.Left),
            right: layoutNode.getLayoutMargin(UniCssFlexEdge.Right),
        });
    }
}
