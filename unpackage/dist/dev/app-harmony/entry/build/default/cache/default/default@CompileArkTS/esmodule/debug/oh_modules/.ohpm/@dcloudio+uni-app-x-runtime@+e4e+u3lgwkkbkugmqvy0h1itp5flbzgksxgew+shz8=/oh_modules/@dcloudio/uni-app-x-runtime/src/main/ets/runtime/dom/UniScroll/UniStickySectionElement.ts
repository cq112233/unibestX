import type { UniElement as IUniElement, UniStickySectionElement as IUniStickySectionElement } from '@dcloudio/uni-app-x/types/native';
import { UniElementImpl } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniElement&1.0.0";
import { ComponentContent } from "@ohos:arkui.node";
import { FrameNode } from "@ohos:arkui.node";
import type { NodeController } from "@ohos:arkui.node";
import { typeNode } from "@ohos:arkui.node";
import { GenericNodeController } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniScroll/utils&1.0.0";
import { UniCssFlexEdge } from "@normalized:N&&&dcloudlayout/Index&1.0.0";
function StickyHeader(controller: NodeController, parent = null) {
    const __controller__ = controller;
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, controller = __controller__) => {
        Stack.create();
    }, Stack);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, controller = __controller__) => {
        NodeContainer.create(controller);
    }, NodeContainer);
    Stack.pop();
}
export class UniStickySectionElementImpl extends UniElementImpl<typeNode.ListItemGroup> implements IUniStickySectionElement {
    headerNodeController!: GenericNodeController;
    headerComponentContent!: ComponentContent<GenericNodeController>;
    protected override createFrameNode(): typeNode.ListItemGroup {
        this.headerNodeController = new GenericNodeController({
            rootFrameNode: new FrameNode(this.app.context!)
        });
        this.headerComponentContent =
            new ComponentContent(this.app.context!, wrapBuilder(StickyHeader), this.headerNodeController);
        const stickySection = typeNode.createNode(this.app.context!, 'ListItemGroup');
        stickySection.initialize({
            headerComponent: this.headerComponentContent
        });
        return stickySection;
    }
    override getRealChildFrameNode(child: UniElementImpl): FrameNode | null {
        /**
         * sticky-section 无论如何都会拥有一个headerFrameNode
         */
        if (child.tagName !== 'STICKY-HEADER') {
            return super.getRealChildFrameNode(child);
        }
        return this.frameNode.getChild(0);
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
    protected override appendSlotContent(slotName: string, aChild: UniElementImpl) {
        if (slotName === 'header') {
            this.headerNodeController.updateRootFrameNode(aChild.frameNode!);
        }
        super.appendSlotContent(slotName, aChild);
    }
    protected override removeSlotContent(slotName: string, aChild: UniElementImpl) {
        if (slotName === 'header' && this.app?.context) {
            this.headerNodeController.updateRootFrameNode(new FrameNode(this.app.context!));
        }
        super.removeSlotContent(slotName, aChild);
    }
    // override appendChild(aChild: IUniElement): void {
    //   if (aChild.tagName === 'STICKY-HEADER') {
    //     this.appendSlotContent('header', aChild as UniElementImpl)
    //   }
    //   super.appendChild(aChild)
    // }
    override insertBefore(newChild: IUniElement, refChild?: IUniElement | null | undefined): IUniElement | null;
    override insertBefore(newChild: IUniElement): IUniElement | null;
    override insertBefore(child: IUniElement, anchor?: IUniElement | null | undefined): IUniElement | null {
        if (child.tagName === 'STICKY-HEADER') {
            this.appendSlotContent('header', child as UniElementImpl);
        }
        return super.insertBefore(child, anchor);
    }
    override removeChild(aChild: IUniElement): IUniElement | null {
        if (aChild.tagName === 'STICKY-HEADER') {
            this.removeSlotContent('header', aChild as UniElementImpl);
            return aChild;
        }
        return super.removeChild(aChild);
    }
    // override insertFrameNodeAfter(frameNode: FrameNode, anchor: FrameNode | null) {
    //   if(!this.slotFrameNode) {
    //     return
    //   }
    //   // 首个ListItem必须插入到header的后面
    //   this.slotFrameNode.insertChildAfter(frameNode, anchor ? anchor : this.slotFrameNode.getChild(0))
    // }
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
    override dispose(): void {
        this.headerNodeController.dispose();
        this.headerComponentContent.dispose();
        this.frameNode?.initialize();
        super.dispose();
    }
}
