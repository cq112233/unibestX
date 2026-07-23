if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface CanvasCircle_Params {
    settings?: RenderingContextSettings;
    context?: CanvasRenderingContext2D;
    uiContext?: UIContext | undefined;
    lineWidthBase?: number;
    duration?: number;
    easing?: string;
    color?: string | number;
    coefficient?: number;
    degrees?: number;
    paused?: boolean;
    rotate_?: number;
    animateParam?: AnimateParam;
}
class CanvasCircle extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.settings = new RenderingContextSettings(true);
        this.context = new CanvasRenderingContext2D(this.settings);
        this.uiContext = undefined;
        this.lineWidthBase = 16;
        this.__duration = new SynchedPropertySimpleOneWayPU(params.duration, this, "duration");
        this.__easing = new SynchedPropertySimpleOneWayPU(params.easing, this, "easing");
        this.__color = new SynchedPropertySimpleOneWayPU(params.color, this, "color");
        this.__coefficient = new SynchedPropertySimpleOneWayPU(params.coefficient, this, "coefficient");
        this.__degrees = new SynchedPropertySimpleOneWayPU(params.degrees, this, "degrees");
        this.__paused = new SynchedPropertySimpleOneWayPU(params.paused, this, "paused");
        this.__rotate_ = new ObservedPropertySimplePU(0, this, "rotate_");
        this.animateParam = {
            duration: this.duration,
            curve: this.easing,
            iterations: -1
        };
        this.setInitiallyProvidedValue(params);
        this.declareWatch("color", this.draw);
        this.declareWatch("coefficient", this.draw);
        this.declareWatch("degrees", this.draw);
        this.declareWatch("paused", this.pauseAnimate);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: CanvasCircle_Params) {
        if (params.settings !== undefined) {
            this.settings = params.settings;
        }
        if (params.context !== undefined) {
            this.context = params.context;
        }
        if (params.uiContext !== undefined) {
            this.uiContext = params.uiContext;
        }
        if (params.lineWidthBase !== undefined) {
            this.lineWidthBase = params.lineWidthBase;
        }
        if (params.duration === undefined) {
            this.__duration.set(1333);
        }
        if (params.easing === undefined) {
            this.__easing.set('linear');
        }
        if (params.color === undefined) {
            this.__color.set(0x000000);
        }
        if (params.coefficient === undefined) {
            this.__coefficient.set(1);
        }
        if (params.degrees === undefined) {
            this.__degrees.set(270);
        }
        if (params.paused === undefined) {
            this.__paused.set(false);
        }
        if (params.rotate_ !== undefined) {
            this.rotate_ = params.rotate_;
        }
        if (params.animateParam !== undefined) {
            this.animateParam = params.animateParam;
        }
    }
    updateStateVars(params: CanvasCircle_Params) {
        this.__duration.reset(params.duration);
        this.__easing.reset(params.easing);
        this.__color.reset(params.color);
        this.__coefficient.reset(params.coefficient);
        this.__degrees.reset(params.degrees);
        this.__paused.reset(params.paused);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__duration.purgeDependencyOnElmtId(rmElmtId);
        this.__easing.purgeDependencyOnElmtId(rmElmtId);
        this.__color.purgeDependencyOnElmtId(rmElmtId);
        this.__coefficient.purgeDependencyOnElmtId(rmElmtId);
        this.__degrees.purgeDependencyOnElmtId(rmElmtId);
        this.__paused.purgeDependencyOnElmtId(rmElmtId);
        this.__rotate_.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__duration.aboutToBeDeleted();
        this.__easing.aboutToBeDeleted();
        this.__color.aboutToBeDeleted();
        this.__coefficient.aboutToBeDeleted();
        this.__degrees.aboutToBeDeleted();
        this.__paused.aboutToBeDeleted();
        this.__rotate_.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private settings: RenderingContextSettings;
    private context: CanvasRenderingContext2D;
    private uiContext: UIContext | undefined;
    private lineWidthBase: number;
    private __duration: SynchedPropertySimpleOneWayPU<number>;
    get duration() {
        return this.__duration.get();
    }
    set duration(newValue: number) {
        this.__duration.set(newValue);
    }
    private __easing: SynchedPropertySimpleOneWayPU<string>;
    get easing() {
        return this.__easing.get();
    }
    set easing(newValue: string) {
        this.__easing.set(newValue);
    }
    private __color: SynchedPropertySimpleOneWayPU<string | number>;
    get color() {
        return this.__color.get();
    }
    set color(newValue: string | number) {
        this.__color.set(newValue);
    }
    private __coefficient: SynchedPropertySimpleOneWayPU<number>;
    get coefficient() {
        return this.__coefficient.get();
    }
    set coefficient(newValue: number) {
        this.__coefficient.set(newValue);
    }
    private __degrees: SynchedPropertySimpleOneWayPU<number>;
    get degrees() {
        return this.__degrees.get();
    }
    set degrees(newValue: number) {
        this.__degrees.set(newValue);
    }
    private __paused: SynchedPropertySimpleOneWayPU<boolean>;
    get paused() {
        return this.__paused.get();
    }
    set paused(newValue: boolean) {
        this.__paused.set(newValue);
    }
    private __rotate_: ObservedPropertySimplePU<number>;
    get rotate_() {
        return this.__rotate_.get();
    }
    set rotate_(newValue: number) {
        this.__rotate_.set(newValue);
    }
    private animateParam: AnimateParam;
    draw() {
        const canvasWidth = this.context.width;
        const canvasHeight = this.context.height;
        const realSize = Math.min(canvasWidth, canvasHeight);
        const realLineWidth = (realSize / this.lineWidthBase) * this.coefficient;
        const angleDegrees = this.degrees;
        const angleRadians = (angleDegrees * Math.PI) / 180;
        this.context.clearRect(0, 0, canvasWidth, canvasHeight);
        this.context.strokeStyle = this.color;
        this.context.lineWidth = realLineWidth;
        this.context.beginPath();
        const centerX = canvasWidth / 2; // 圆心 X 坐标
        const centerY = canvasHeight / 2; // 圆心 Y 坐标
        const radius = realSize / 2 - realLineWidth / 2; // 半径
        // 使用 arc() 方法绘制弧线
        // arc(x, y, radius, startAngle, endAngle, anticlockwise)
        // x, y: 圆心坐标
        // radius: 半径
        // startAngle: 起始弧度 (0 度在 3 点钟方向)
        // endAngle: 结束弧度
        // anticlockwise: 是否逆时针 (false 为顺时针)
        this.context.arc(centerX, centerY, radius, 0, angleRadians, false);
        this.context.stroke();
    }
    play() {
        Context.animateToImmediately(this.animateParam, () => {
            this.rotate_ = 360;
        });
    }
    pause() {
        Context.animateToImmediately({ duration: 0 }, () => {
            this.rotate_ = 0;
        });
    }
    pauseAnimate() {
        if (this.paused) {
            this.pause();
        }
        else {
            this.play();
        }
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create(this.context);
            Canvas.rotate({
                angle: this.rotate_
            });
            Canvas.width('100%');
            Canvas.height('100%');
            Canvas.onAppear(() => {
                this.uiContext = this.getUIContext();
                if (!this.uiContext) {
                    return;
                }
            });
            Canvas.onReady(() => {
                this.draw();
                setTimeout(() => {
                    if (this.rotate_ === 0 && !this.paused) {
                        this.play();
                    }
                }, 0);
            });
        }, Canvas);
        Canvas.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
// 计算粗细的倍数 (最小边 / 16 * coefficient)
function getLineCoefficient(borderWidth: string | undefined) {
    if (borderWidth == null) {
        return 1;
    }
    // TODO 不支持具体 px 值
    /* if (borderWidth.endsWith('px')) {
      const num = parseFloat(borderWidth.replace('px', ''))
      return isNaN(num) ? 1 : num
    } */
    switch (borderWidth) {
        case 'medium':
        case 'normal':
            return 1;
        case 'thick':
        case 'bold':
            return 2;
    }
    return 1;
}
export function buildLoading(params: any, parent = null) {
    const __params__ = params;
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, params = __params__) => {
        Flex.create({ alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center });
        Flex.width('100%');
        Flex.height('100%');
    }, Flex);
    {
        (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, params = __params__) => {
            if (isInitialRender) {
                let componentCall = new CanvasCircle(parent ? parent : this, {
                    degrees: params.degrees ?? 270,
                    color: params.color as number | string,
                    coefficient: getLineCoefficient(params.borderWidth),
                    duration: params.duration ?? 1333,
                    easing: params.animationTimingFunction,
                    paused: params.paused
                }, undefined, elmtId, () => { }, { page: "oh_modules/.ohpm/@dcloudio+uni-app-x-runtime@+e4e+u3lgwkkbkugmqvy0h1itp5flbzgksxgew+shz8=/oh_modules/@dcloudio/uni-app-x-runtime/src/main/ets/modules/uni_modules/uni-loading/utssdk/app-harmony/builder.ets", line: 121, col: 5 });
                ViewPU.create(componentCall);
                let paramsLambda = () => {
                    return {
                        degrees: params.degrees ?? 270,
                        color: params.color as number | string,
                        coefficient: getLineCoefficient(params.borderWidth),
                        duration: params.duration ?? 1333,
                        easing: params.animationTimingFunction,
                        paused: params.paused
                    };
                };
                componentCall.paramsGenerator_ = paramsLambda;
            }
            else {
                (parent ? parent : this).updateStateVarsOfChildByElmtId(elmtId, {
                    degrees: params.degrees ?? 270,
                    color: params.color as number | string,
                    coefficient: getLineCoefficient(params.borderWidth),
                    duration: params.duration ?? 1333,
                    easing: params.animationTimingFunction,
                    paused: params.paused
                });
            }
        }, { name: "CanvasCircle" });
    }
    Flex.pop();
}
