import { UniDocument as IUniDocument, IComment, UniElement as IUniElement } from '@dcloudio/uni-app-x/types/native';
import { UniElementImpl } from './UniElement';
import { UniElement } from '@dcloudio/uni-app-x/types/native/IUniElement';
import { NodeData } from './NodeData';
import { UniLayoutFlexNode } from 'dcloudlayout';
import { UniBodyElementImpl } from './UniBodyElement';
import { UniNativePageImpl } from './UniNativePage';
import { FrameNode as FrameNode } from "@ohos.arkui.node";
import { typeNode as typeNode } from "@ohos.arkui.node";
import { WeakStore } from '../helper';
export declare class UniDocumentImpl extends UniElementImpl<typeNode.Stack> implements IUniDocument {
    body: UniBodyElementImpl;
    store: WeakStore<UniElementImpl<FrameNode>>;
    private _rootSize;
    private _emitter;
    private contentFrameNode;
    static get defaultStyle(): Map<any, any>;
    constructor(page: UniNativePageImpl);
    protected initClass(): void;
    /**
     * 在构造函数之后调用
     * @internal
     */
    init(): void;
    protected createFrameNode(): typeNode.Stack;
    protected createLayoutNode(): UniLayoutFlexNode;
    checkLayout(): void;
    /**
     * @internal
     */
    getRealDomNodeById<T>(id: string): T | null;
    appendChild(child: IUniElement): void;
    querySelector(selector: string): IUniElement | null;
    private renderStatus;
    private startRenderTimer;
    private onStartRenderCallback;
    private onSafeAreaInsetsChangeCallback;
    startRender(): void;
    startRender(callback?: (() => void) | null): void;
    private onStartRender;
    private renderQueue;
    private afterRenderQueue;
    private applyRenderQueueTimer;
    /**
     * @internal
     */
    firstLayoutDuration: number;
    /**
     * @internal
     */
    layoutDuration: number;
    /**
     * @internal
     */
    firstRenderDuration: number;
    /**
     * @internal
     */
    renderDuration: number;
    private isAfterFrame;
    private applyRenderQueue;
    requestRenderQueue(callback?: () => void, force?: boolean): number | null;
    cancelRenderQueue(timer?: number, callback?: () => void): void;
    /**
     * @internal
     */
    stopRender(): void;
    createElement(data: string | NodeData, attrs?: Map<string, Object>, children?: UniElement[]): IUniElement;
    createComment(data: string): IComment;
    createTextNode(data: string, attrs?: Map<string, Object>, children?: UniElement[]): UniElement;
    notifyLayout(): void;
    runAsyncDomTask(fn: () => object, callback: (value: object) => void): void;
    waitNativeRender(callback: () => void): void;
    getElementById(id: string): UniElement | null;
    private onReadyCallback;
    /**
     * @internal
     */
    onReady(callback: () => void): void;
    dispose(): void;
}
