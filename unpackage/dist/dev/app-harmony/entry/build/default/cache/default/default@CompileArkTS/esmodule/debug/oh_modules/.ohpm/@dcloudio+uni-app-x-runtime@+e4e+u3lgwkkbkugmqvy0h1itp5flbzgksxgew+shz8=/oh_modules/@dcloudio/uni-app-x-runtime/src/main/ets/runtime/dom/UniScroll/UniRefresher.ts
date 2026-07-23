import type { UniElementImpl } from '../UniElement';
import { FrameNode } from "@ohos:arkui.node";
import { NodeController } from "@ohos:arkui.node";
import type { UIContext } from "@ohos:arkui.UIContext";
const ScrollViewRefresherColorMap = new Map<string, Color | string>([
    ['white', '#ffffffff'],
    ['black', '#ff666666'],
    ['none', '#ff666666']
]);
export class RefresherNodeController extends NodeController {
    private rootNode: FrameNode | null = null;
    private refresherElement: UniElementImpl | null = null;
    makeNode(uiContext: UIContext): FrameNode | null {
        if (!this.refresherElement) {
            return null;
        }
        this.rootNode = this.rootNode || new FrameNode(uiContext);
        this.rootNode.appendChild(this.refresherElement.frameNode);
        return this.rootNode!;
    }
    appendRefresherElement(refresherElement: UniElementImpl) {
        this.refresherElement = refresherElement;
        this.rebuild();
    }
    removeRefresherElement(refresherElement: UniElementImpl) {
        if (!this.rootNode) {
            return;
        }
        this.refresherElement = null;
        this.rootNode.removeChild(refresherElement.frameNode);
        this.rebuild();
    }
    dispose() {
        this.rootNode?.disposeTree();
        this.rootNode = null;
    }
}
export interface RefresherState {
    refresherBackground?: ResourceColor;
    refresherDefaultStyle?: 'black' | 'white' | 'none';
    refresherElement?: UniElementImpl;
    refresherNodeController: RefresherNodeController;
    refresherThreshold: number;
}
export function ScrollViewRefresher(refresherState: RefresherState, parent = null) {
    const __refresherState__ = refresherState;
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, refresherState = __refresherState__) => {
        Stack.create({
            alignContent: Alignment.Bottom
        });
        Stack.width('100%');
        Stack.height('100%');
        Stack.clip(true);
        Stack.backgroundColor(refresherState.refresherBackground);
    }, Stack);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, refresherState = __refresherState__) => {
        Stack.create({
            alignContent: Alignment.Center
        });
        Stack.width('100%');
        Stack.height(refresherState.refresherThreshold);
    }, Stack);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, refresherState = __refresherState__) => {
        If.create();
        if (refresherState.refresherNodeController && refresherState.refresherElement && refresherState.refresherDefaultStyle === 'none') {
            (parent ? parent : this).ifElseBranchUpdateFunction(0, () => {
                (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, refresherState = __refresherState__) => {
                    NodeContainer.create(refresherState.refresherNodeController);
                    NodeContainer.width('100%');
                    NodeContainer.height('100%');
                }, NodeContainer);
            });
        }
        else {
            (parent ? parent : this).ifElseBranchUpdateFunction(1, () => {
                (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, refresherState = __refresherState__) => {
                    LoadingProgress.create();
                    LoadingProgress.color(ScrollViewRefresherColorMap.get(refresherState.refresherDefaultStyle) || '#ff666666');
                    LoadingProgress.width(36);
                    LoadingProgress.height(36);
                }, LoadingProgress);
            });
        }
    }, If);
    If.pop();
    Stack.pop();
    Stack.pop();
}
