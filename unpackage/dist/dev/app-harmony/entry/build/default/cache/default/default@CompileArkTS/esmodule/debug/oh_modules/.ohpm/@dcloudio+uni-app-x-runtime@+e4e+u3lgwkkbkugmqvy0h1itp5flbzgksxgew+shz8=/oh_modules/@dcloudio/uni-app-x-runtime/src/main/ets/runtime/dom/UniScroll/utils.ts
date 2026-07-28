import { NodeController } from "@ohos:arkui.node";
export interface GenericNodeControllerOptions {
    rootFrameNode: FrameNode;
}
export class GenericNodeController extends NodeController {
    rootFrameNode: FrameNode;
    constructor(options: GenericNodeControllerOptions) {
        super();
        this.rootFrameNode = options.rootFrameNode;
    }
    makeNode(uiContext: UIContext): FrameNode | null {
        return this.rootFrameNode;
    }
    updateRootFrameNode(rootFrameNode: FrameNode) {
        this.rootFrameNode = rootFrameNode;
        this.rebuild();
    }
    dispose() {
        this.rootFrameNode.dispose();
    }
}
