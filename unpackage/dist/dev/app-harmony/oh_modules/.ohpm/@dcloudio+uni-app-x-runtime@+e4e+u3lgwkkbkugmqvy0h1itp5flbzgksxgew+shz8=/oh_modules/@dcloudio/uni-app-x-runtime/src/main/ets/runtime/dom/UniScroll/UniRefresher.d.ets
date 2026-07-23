import { UniElementImpl } from '../UniElement';
import { FrameNode as FrameNode } from "@ohos.arkui.node";
import { NodeController as NodeController } from "@ohos.arkui.node";
import { UIContext as UIContext } from "@ohos.arkui.UIContext";
export declare class RefresherNodeController extends NodeController {
    private rootNode;
    private refresherElement;
    makeNode(uiContext: UIContext): FrameNode | null;
    appendRefresherElement(refresherElement: UniElementImpl): void;
    removeRefresherElement(refresherElement: UniElementImpl): void;
    dispose(): void;
}
export interface RefresherState {
    refresherBackground?: ResourceColor;
    refresherDefaultStyle?: 'black' | 'white' | 'none';
    refresherElement?: UniElementImpl;
    refresherNodeController: RefresherNodeController;
    refresherThreshold: number;
}
@Builder
export declare function ScrollViewRefresher(refresherState: RefresherState): void;
