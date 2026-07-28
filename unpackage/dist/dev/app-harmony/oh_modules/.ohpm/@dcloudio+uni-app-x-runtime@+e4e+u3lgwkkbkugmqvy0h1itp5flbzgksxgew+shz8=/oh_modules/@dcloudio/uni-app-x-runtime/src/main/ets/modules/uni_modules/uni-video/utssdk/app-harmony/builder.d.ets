import { AVVolumePanelParameter as AVVolumePanelParameter } from "@ohos.multimedia.avVolumePanel";
export interface AVVolumePanelOptions {
    show?: boolean;
    volumeLevel?: number;
    positionX?: number;
    positionY?: number;
}
@Component
export declare struct VolumePanel {
    @Prop
    volumeLevel: number;
    @Prop
    volumeParameter?: AVVolumePanelParameter;
    onAboutToAppear?: (instance: VolumePanel) => void;
    build(): void;
    aboutToAppear(): void;
}
@Builder
export declare function buildVideo(params: ESObject): void;
