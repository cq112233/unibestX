import { AttributeUpdater } from "@ohos:arkui.modifier";
import { BuilderNode } from "@ohos:arkui.node";
import { FrameNode } from "@ohos:arkui.node";
import { NodeContent } from "@ohos:arkui.node";
import { NodeController } from "@ohos:arkui.node";
import type { Constructor } from './helper';
export class RootNodeController extends NodeController {
    rootFrameNode: FrameNode;
    constructor(uiContext: UIContext) {
        super();
        this.rootFrameNode = new FrameNode(uiContext);
        this.rootFrameNode.commonAttribute.width('100%').height('100%');
    }
    makeNode(uiContext: UIContext): FrameNode | null {
        return this.rootFrameNode;
    }
    dispose() {
        this.rootFrameNode.dispose();
    }
}
export interface ComponentBaseOptions {
    onAboutToAppear?: (instance: object) => void;
    attributeUpdater?: UniFrameNodeAttributeUpdater;
    slotNodeContent?: NodeContent;
}
export class UniFrameNodeAttributeUpdater extends AttributeUpdater<CommonAttribute> {
}
export class UniFrameNode extends FrameNode {
    componentInstance?: object;
    slotNodeContent = new NodeContent();
    attributeUpdater: UniFrameNodeAttributeUpdater | null = new UniFrameNodeAttributeUpdater();
    builderNode: BuilderNode<[
        ComponentBaseOptions
    ]> | null = null;
    // attribute!: CommonAttribute
    //
    // constructor(uiContext: UIContext) {
    //   super(uiContext)
    //   this.attribute = this.attributeUpdater?.attribute || this.commonAttribute
    // }
    get attribute(): CommonAttribute {
        // 如果组件未绑定 attributeUpdater，则使用 commonAttribute
        return this.attributeUpdater?.attribute || this.commonAttribute;
    }
    bindBuilderNode(builderNode: BuilderNode<[
        ComponentBaseOptions
    ]>) {
        this.builderNode = builderNode;
        const frameNode = builderNode.getFrameNode()!;
        this.appendChild(frameNode, true);
    }
    appendChild(node: FrameNode, isSuper: boolean = false): void {
        if (isSuper) {
            super.appendChild(node);
        }
        else {
            this.slotNodeContent.addFrameNode(node);
        }
    }
    removeChild(node: FrameNode, isSuper: boolean = false): void {
        if (isSuper) {
            super.removeChild(node);
        }
        else {
            this.slotNodeContent.removeFrameNode(node);
        }
    }
    dispose(): void {
        // TODO 内存泄漏、不及时触发子组件的aboutToDisappear(比如：NavBar，如果不clear的话，会等到gc的时候才触发)，主动清理子节点
        super.clearChildren();
        this.builderNode?.dispose();
        super.dispose();
        this.componentInstance = undefined;
        this.builderNode = null;
        this.attributeUpdater = null;
    }
}
export function isUniFrameNode(node: FrameNode) {
    return node instanceof UniFrameNode;
}
export function createUniFrameNode<T extends UniFrameNode, O extends ComponentBaseOptions>(uiContext: UIContext, type: Constructor<T>, wrappedBuilder: WrappedBuilder<[
    options: O
]>, options: O): T {
    const builderNode = new BuilderNode<[
        O
    ]>(uiContext);
    const uniFrameNode = new type(uiContext) as T;
    options.onAboutToAppear = (instance: object) => {
        uniFrameNode.componentInstance = instance;
    };
    options.attributeUpdater = uniFrameNode.attributeUpdater!;
    options.slotNodeContent = uniFrameNode.slotNodeContent;
    builderNode.build(wrappedBuilder, options);
    uniFrameNode.bindBuilderNode(builderNode);
    return uniFrameNode;
}
