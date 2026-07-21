import { AttributeUpdater as AttributeUpdater } from "@ohos.arkui.modifier";
import { BuilderNode as BuilderNode } from "@ohos.arkui.node";
import { FrameNode as FrameNode } from "@ohos.arkui.node";
import { NodeContent as NodeContent } from "@ohos.arkui.node";
import { NodeController as NodeController } from "@ohos.arkui.node";
import { Constructor } from './helper';
export declare class RootNodeController extends NodeController {
    rootFrameNode: FrameNode;
    constructor(uiContext: UIContext);
    makeNode(uiContext: UIContext): FrameNode | null;
    dispose(): void;
}
export interface ComponentBaseOptions {
    onAboutToAppear?: (instance: object) => void;
    attributeUpdater?: UniFrameNodeAttributeUpdater;
    slotNodeContent?: NodeContent;
}
export declare class UniFrameNodeAttributeUpdater extends AttributeUpdater<CommonAttribute> {
}
export declare class UniFrameNode extends FrameNode {
    componentInstance?: object;
    slotNodeContent: NodeContent;
    attributeUpdater: UniFrameNodeAttributeUpdater | null;
    builderNode: BuilderNode<[ComponentBaseOptions]> | null;
    get attribute(): CommonAttribute;
    bindBuilderNode(builderNode: BuilderNode<[ComponentBaseOptions]>): void;
    appendChild(node: FrameNode, isSuper?: boolean): void;
    removeChild(node: FrameNode, isSuper?: boolean): void;
    dispose(): void;
}
export declare function isUniFrameNode(node: FrameNode): boolean;
export declare function createUniFrameNode<T extends UniFrameNode, O extends ComponentBaseOptions>(uiContext: UIContext, type: Constructor<T>, wrappedBuilder: WrappedBuilder<[options: O]>, options: O): T;
