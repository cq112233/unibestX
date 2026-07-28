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
export interface AVVolumePanelOptions {
    show?: boolean;
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
        if (params.volumeLevel === undefined) {
            this.__volumeLevel.set(0);
        }
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
    private __volumeLevel: SynchedPropertySimpleOneWayPU<number>;
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
                    }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@dcloudio+uni-app-x-runtime@+e4e+u3lgwkkbkugmqvy0h1itp5flbzgksxgew+shz8=/oh_modules/@dcloudio/uni-app-x-runtime/src/main/ets/modules/uni_modules/uni-video/utssdk/app-harmony/builder.ets", line: 29, col: 5 });
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
export function buildVideo(params: any, parent = null) {
    const __params__ = params;
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, params = __params__) => {
        Stack.create();
    }, Stack);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, params = __params__) => {
        Video.create(params.options);
        Video.attributeModifier.bind(this)(params.modifier);
        Video.width('100%');
        Video.height('100%');
        Video.objectFit(params.objectFit ?? ImageFit.Contain);
        Video.muted(params.muted);
        Video.autoPlay(params.autoplay);
        Video.loop(params.loop);
        Video.controls(params.controls ?? false);
        Video.onStart(params?.event?.onPlay);
        Video.onPause(params?.event?.onPause);
        Video.onFinish(params?.event?.onEnded);
        Video.onStop(params?.event?.onStop);
        Video.onPrepared(params?.event?.onPrepared);
        Video.onSeeking(params?.event?.onSeeking);
        Video.onSeeked(params?.event?.onSeeked);
        Video.onUpdate(params?.event?.onTimeUpdate);
        Video.onFullscreenChange(params?.event?.onFullscreenChange);
        Video.onError(params?.event?.onError);
    }, Video);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, params = __params__) => {
        If.create();
        if (params.volumeOptions.show === true) {
            (parent ? parent : this).ifElseBranchUpdateFunction(0, () => {
                {
                    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, params = __params__) => {
                        if (isInitialRender) {
                            let componentCall = new VolumePanel(parent ? parent : this, {
                                volumeLevel: params.volumeOptions.volumeLevel ?? 0,
                                volumeParameter: createVolumeParameter(params.volumeOptions.positionX, params.volumeOptions.positionY)
                            }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@dcloudio+uni-app-x-runtime@+e4e+u3lgwkkbkugmqvy0h1itp5flbzgksxgew+shz8=/oh_modules/@dcloudio/uni-app-x-runtime/src/main/ets/modules/uni_modules/uni-video/utssdk/app-harmony/builder.ets", line: 63, col: 7 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    volumeLevel: params.volumeOptions.volumeLevel ?? 0,
                                    volumeParameter: createVolumeParameter(params.volumeOptions.positionX, params.volumeOptions.positionY)
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            (parent ? parent : this).updateStateVarsOfChildByElmtId(elmtId, {
                                volumeLevel: params.volumeOptions.volumeLevel ?? 0,
                                volumeParameter: createVolumeParameter(params.volumeOptions.positionX, params.volumeOptions.positionY)
                            });
                        }
                    }, { name: "VolumePanel" });
                }
            });
        }
        else {
            this.ifElseBranchUpdateFunction(1, () => {
            });
        }
    }, If);
    If.pop();
    Stack.pop();
}
