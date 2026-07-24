import { UniImageElement as IUniImageElement, INodeData } from '@dcloudio/uni-app-x/types/native';
import { FrameNode as FrameNode } from "@ohos.arkui.node";
import { UniElementImpl } from './UniElement';
import { UniNativePageImpl } from './UniNativePage';
export declare class UniImageElementImpl extends UniElementImpl<FrameNode> implements IUniImageElement {
    get src(): string;
    private get mode();
    private styleFilter?;
    private nativeStyleArgs?;
    private layoutStyleArgs?;
    private ratio;
    private onLoadCallback?;
    private imageFrameNode;
    private model;
    static get defaultStyle(): Map<string, [string] | [string, boolean]>;
    constructor(data?: INodeData, page?: UniNativePageImpl);
    private measure;
    protected createFrameNode(): FrameNode;
    onload(): void | null;
    private initializeImageFrameNode;
    updateNativeAttribute(key: string, value: ESObject): void;
    protected updateLayoutNodeStyle(key: string, method: string, ...args: Array<Object | undefined>): void;
    private updateImageSize;
    updateNativeNodeStyle(key: string, value: Object): void;
    protected initNativeEvent(type: string): void | Object;
    protected deleteNativeEvent(type: string, res: void | Object): boolean;
    dispose(): void;
}
