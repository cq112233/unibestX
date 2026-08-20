import { NodeController as NodeController } from "@ohos.arkui.node";
export interface GenericNodeControllerOptions {
    rootFrameNode: FrameNode;
}
export declare class GenericNodeController extends NodeController {
    rootFrameNode: FrameNode;
    constructor(options: GenericNodeControllerOptions);
    makeNode(uiContext: UIContext): FrameNode | null;
    updateRootFrameNode(rootFrameNode: FrameNode): void;
    dispose(): void;
}
