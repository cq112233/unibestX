import { AVVolumePanelParameter as AVVolumePanelParameter } from "@ohos.multimedia.avVolumePanel";
import { UniElementImpl } from '../dom/UniElement';
import { UniFrameNode, ComponentBaseOptions } from '../Node';
import { FrameNode as FrameNode } from "@ohos.arkui.node";
export interface AVVolumePanelOptions extends ComponentBaseOptions {
    volumeLevel?: number;
    positionX?: number;
    positionY?: number;
}
@Component
export declare struct VolumePanel {
    @Prop
    volumeLevel?: number;
    @Prop
    volumeParameter?: AVVolumePanelParameter;
    onAboutToAppear?: (instance: VolumePanel) => void;
    build(): void;
    aboutToAppear(): void;
}
@Builder
export declare function buildVolumePanel(options: AVVolumePanelOptions): void;
declare class AVVolumePanelFrameNode extends UniFrameNode {
    componentInstance: VolumePanel;
}
/**
 * 解决鸿蒙上创建多音量面板修改音量时卡顿
 */
export declare class UniAVVolumePanelElementImpl extends UniElementImpl {
    constructor();
    protected createFrameNode(): FrameNode | AVVolumePanelFrameNode;
    updateNativeAttribute(key: string, value: ESObject): void;
}
export {};
