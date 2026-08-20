import { UniElementImpl } from './UniElement';
import { FrameNode as FrameNode } from "@ohos.arkui.node";
import { NodeController as NodeController } from "@ohos.arkui.node";
import { TinyEmitter as Emitter } from 'tiny-emitter';
import { UniFrameNode } from '../Node';
@ObservedV2
declare class BodyRefresherState {
    refresherEnabled: boolean;
    refresherTriggered: boolean;
    refresherThreshold: number;
    refresherMaxDragDistance: number;
}
@ComponentV2
declare struct BodyRefresher {
    @Require
    @Param
    readonly state: BodyRefresherState;
    @Require
    @Param
    readonly emitter: Emitter;
    @Require
    @Param
    readonly bodyNodeController: NodeController;
    @Local
    pullDownRatio: number;
    @Local
    refreshOffset: number;
    @Local
    refreshStatus: RefreshStatus | null;
    build(): void;
}
export declare class BodyRefresherFrameNode extends UniFrameNode {
    componentInstance: BodyRefresher;
}
export declare class UniBodyElementImpl extends UniElementImpl<FrameNode> {
    refresherState: BodyRefresherState;
    refresherEmitter: Emitter;
    static get defaultStyle(): Map<string, [string] | [string, boolean]>;
    /**
     * 由 framework setupXPage 赋值和使用，后续需要移除
     * @internal
     * @deprecated
     */
    _page: undefined;
    _slotFrameNode: FrameNode;
    private bodyFrameNode;
    private bodyNodeController;
    get slotFrameNode(): FrameNode;
    protected createFrameNode(): FrameNode;
    initClass(): void;
    enablePullDownRefresh: boolean;
    dispose(): void;
}
export {};
