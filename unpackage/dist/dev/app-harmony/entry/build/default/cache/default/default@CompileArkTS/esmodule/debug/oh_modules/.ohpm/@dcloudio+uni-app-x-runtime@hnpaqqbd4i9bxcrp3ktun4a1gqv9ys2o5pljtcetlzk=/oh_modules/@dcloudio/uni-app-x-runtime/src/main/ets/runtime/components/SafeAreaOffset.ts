if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface SafeAreaOffset_Params {
    type?: string;
    h?: number;
    onSafeAreaInsetsChange?;
}
import { getSafeAreaInsets, onSafeAreaInsetsChange, offSafeAreaInsetsChange } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/helper/index&1.0.0";
interface SafeAreaInsets {
    top?: number;
    bottom?: number;
}
export class SafeAreaOffset extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__type = new SynchedPropertySimpleOneWayPU(params.type, this, "type");
        this.__h = new ObservedPropertySimplePU(0, this, "h");
        this.onSafeAreaInsetsChange = (safeAreaInsets: SafeAreaInsets) => {
            if (this.type === 'top' && typeof safeAreaInsets.top === 'number') {
                this.h = safeAreaInsets.top;
            }
            else if (this.type === 'bottom' && typeof safeAreaInsets.bottom === 'number') {
                this.h = safeAreaInsets.bottom;
            }
        };
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: SafeAreaOffset_Params) {
        if (params.h !== undefined) {
            this.h = params.h;
        }
        if (params.onSafeAreaInsetsChange !== undefined) {
            this.onSafeAreaInsetsChange = params.onSafeAreaInsetsChange;
        }
    }
    updateStateVars(params: SafeAreaOffset_Params) {
        this.__type.reset(params.type);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__type.purgeDependencyOnElmtId(rmElmtId);
        this.__h.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__type.aboutToBeDeleted();
        this.__h.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __type: SynchedPropertySimpleOneWayPU<string>;
    get type() {
        return this.__type.get();
    }
    set type(newValue: string) {
        this.__type.set(newValue);
    }
    private __h: ObservedPropertySimplePU<number>;
    get h() {
        return this.__h.get();
    }
    set h(newValue: number) {
        this.__h.set(newValue);
    }
    private onSafeAreaInsetsChange;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.height(this.h);
            Stack.width('100%');
        }, Stack);
        Stack.pop();
    }
    aboutToAppear(): void {
        const safeAreaInsets = getSafeAreaInsets(false) as SafeAreaInsets;
        this.onSafeAreaInsetsChange(safeAreaInsets);
        onSafeAreaInsetsChange(this.onSafeAreaInsetsChange, false);
    }
    aboutToDisappear(): void {
        offSafeAreaInsetsChange(this.onSafeAreaInsetsChange);
    }
    rerender() {
        this.updateDirtyElements();
    }
}
