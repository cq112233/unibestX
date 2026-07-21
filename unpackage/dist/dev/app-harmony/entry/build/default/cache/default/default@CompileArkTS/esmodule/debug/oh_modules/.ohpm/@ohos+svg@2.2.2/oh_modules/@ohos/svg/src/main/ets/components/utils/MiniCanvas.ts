if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
import { MiniCanvasAttribute, CanvasImpl } from "@normalized:N&&&@ohos/svg/src/main/ets/components/utils/mini_canvas&2.2.2";
import type { ICanvas } from "@normalized:N&&&@ohos/svg/src/main/ets/components/utils/mini_canvas&2.2.2";
export class MiniCanvas extends ViewV2 {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda, extraInfo) {
        super(parent, elmtId, extraInfo);
        this.miniCanvas = undefined;
        this.attribute = undefined;
        this.onDraw = undefined;
        this.finalizeConstruction();
    }
    public resetStateVarsOnReuse(params: Object): void {
    }
    private miniCanvas?: CanvasImpl;
    attribute?: MiniCanvasAttribute;
    onDraw?: (canvas: ICanvas) => void;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create(this.miniCanvas!.context);
            Canvas.width(this.attribute!.width);
            Canvas.height(this.attribute!.height);
            Canvas.backgroundColor(this.attribute!.background);
            Canvas.id("really_mini_canvas");
            Canvas.onReady(() => {
                if (this.miniCanvas) {
                    this.onDraw?.(this.miniCanvas);
                }
            });
            Canvas.onClick((event) => {
                if (this.attribute) {
                    this.attribute.clickListener?.(event);
                }
            });
            Canvas.onTouch((event) => {
                if (this.attribute) {
                    this.attribute.touchListener?.(event);
                }
            });
        }, Canvas);
        Canvas.pop();
    }
    aboutToAppear() {
        this.attribute = MiniCanvasAttribute.checkAttribute(this.attribute);
        let setting = new RenderingContextSettings(this.attribute.antiAlias);
        let context = new CanvasRenderingContext2D(setting);
        this.miniCanvas = new CanvasImpl(context, this.attribute);
    }
    rerender() {
        this.updateDirtyElements();
    }
}
