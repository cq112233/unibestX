if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface VolumePanel_Params {
    volumeLevel?: number;
    volumeParameter?: AVVolumePanelParameter;
    onAboutToAppear?: (instance: VolumePanel) => void;
}
import { AVVolumePanel } from "@ohos:multimedia.avVolumePanel";
import type { AVVolumePanelParameter } from "@ohos:multimedia.avVolumePanel";
import { UniElementImpl } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniElement&1.0.0";
import { createUniFrameNode, UniFrameNode } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/Node&1.0.0";
import type { ComponentBaseOptions } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/Node&1.0.0";
import { FrameNode } from "@ohos:arkui.node";
const createVolumeParameter = (x?: Length, y?: Length): AVVolumePanelParameter | undefined => {
    if (typeof x === 'number' || typeof y === 'number') {
        return {
            position: {
                x,
                y
            }
        } as AVVolumePanelParameter;
    }
    return undefined;
};
export interface AVVolumePanelOptions extends ComponentBaseOptions {
    volumeLevel?: number;
    positionX?: number;
    positionY?: number;
}
export class VolumePanel extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__volumeLevel = new SynchedPropertySimpleOneWayPU(params.volumeLevel, this, "volumeLevel");
        this.__volumeParameter = new SynchedPropertyObjectOneWayPU(params.volumeParameter, this, "volumeParameter");
        this.onAboutToAppear = undefined;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: VolumePanel_Params) {
        if (params.onAboutToAppear !== undefined) {
            this.onAboutToAppear = params.onAboutToAppear;
        }
    }
    updateStateVars(params: VolumePanel_Params) {
        this.__volumeLevel.reset(params.volumeLevel);
        this.__volumeParameter.reset(params.volumeParameter);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__volumeLevel.purgeDependencyOnElmtId(rmElmtId);
        this.__volumeParameter.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__volumeLevel.aboutToBeDeleted();
        this.__volumeParameter.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __volumeLevel?: SynchedPropertySimpleOneWayPU<number>;
    get volumeLevel() {
        return this.__volumeLevel.get();
    }
    set volumeLevel(newValue: number) {
        this.__volumeLevel.set(newValue);
    }
    private __volumeParameter?: SynchedPropertySimpleOneWayPU<AVVolumePanelParameter>;
    get volumeParameter() {
        return this.__volumeParameter.get();
    }
    set volumeParameter(newValue: AVVolumePanelParameter) {
        this.__volumeParameter.set(newValue);
    }
    private onAboutToAppear?: (instance: VolumePanel) => void;
    initialRender() {
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new AVVolumePanel(this, {
                        volumeLevel: this.volumeLevel,
                        volumeParameter: this.volumeParameter
                    }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@dcloudio+uni-app-x-runtime@+e4e+u3lgwkkbkugmqvy0h1itp5flbzgksxgew+shz8=/oh_modules/@dcloudio/uni-app-x-runtime/src/main/ets/runtime/dom/UniAVVolumePanelElement.ets", line: 31, col: 5 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            volumeLevel: this.volumeLevel,
                            volumeParameter: this.volumeParameter
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        volumeLevel: this.volumeLevel,
                        volumeParameter: this.volumeParameter
                    });
                }
            }, { name: "AVVolumePanel" });
        }
    }
    aboutToAppear(): void {
        this.onAboutToAppear?.(this);
    }
    rerender() {
        this.updateDirtyElements();
    }
}
export function buildVolumePanel(options: AVVolumePanelOptions, parent = null) {
    const __options__ = options;
    {
        (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, options = __options__) => {
            if (isInitialRender) {
                let componentCall = new VolumePanel(parent ? parent : this, options, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@dcloudio+uni-app-x-runtime@+e4e+u3lgwkkbkugmqvy0h1itp5flbzgksxgew+shz8=/oh_modules/@dcloudio/uni-app-x-runtime/src/main/ets/runtime/dom/UniAVVolumePanelElement.ets", line: 44, col: 3 });
                ViewPU.create(componentCall);
                let paramsLambda = () => {
                    return options;
                };
                componentCall.paramsGenerator_ = paramsLambda;
            }
            else {
                (parent ? parent : this).updateStateVarsOfChildByElmtId(elmtId, {});
            }
        }, { name: "VolumePanel" });
    }
}
class AVVolumePanelFrameNode extends UniFrameNode {
    componentInstance!: VolumePanel;
}
let frameNode: AVVolumePanelFrameNode | null = null;
/**
 * 解决鸿蒙上创建多音量面板修改音量时卡顿
 */
export class UniAVVolumePanelElementImpl extends UniElementImpl {
    constructor() {
        super();
    }
    protected override createFrameNode() {
        if (frameNode != null && frameNode.componentInstance != null) {
            return new FrameNode(this.app.context!);
        }
        frameNode =
            createUniFrameNode<AVVolumePanelFrameNode, AVVolumePanelOptions>(this.app.context!, AVVolumePanelFrameNode, wrapBuilder(buildVolumePanel), {} as AVVolumePanelOptions);
        return frameNode;
    }
    override updateNativeAttribute(key: string, value: any) {
        if (frameNode == null || frameNode.componentInstance == null) {
            return;
        }
        switch (key) {
            case 'volumeLevel':
                frameNode.componentInstance.volumeLevel = typeof value === 'number' ? value : undefined;
                break;
            case 'positionX':
                frameNode.componentInstance.volumeParameter = createVolumeParameter(value);
                break;
        }
    }
}
