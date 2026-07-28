import { UniNativeViewElement, UniViewElementImpl } from "@dcloudio/uni-app-framework";
import { buildLoading } from "./builder";
import { formatColorSync } from "@dcloudio/uni-app-framework";
type BorderWidth = 'normal' | 'bold';
type AnimationTimingFunction = 'ease' | 'linear';
const DEFAULT_COLOR = '#000000';
const DEFAULT_BORDER_WIDTH = 'normal';
const DEFAULT_ANIMATION_TIMING_FUNCTION = 'linear';
interface BuilderLoadingParams {
    color?: string;
    borderWidth?: BorderWidth;
    degrees?: number;
    paused?: boolean;
    animationTimingFunction?: AnimationTimingFunction;
}
class NativeLoading {
    __v_skip: boolean = true;
    private params: BuilderLoadingParams;
    private harmonyBuilderNode: ComponentContent | null = null;
    constructor(element: UniNativeViewElement, params: BuilderLoadingParams = {
        color: DEFAULT_COLOR,
        borderWidth: DEFAULT_BORDER_WIDTH,
        animationTimingFunction: DEFAULT_ANIMATION_TIMING_FUNCTION,
        paused: false
    }){
        this.params = params;
        if (this.params.color) {
            this.params.color = formatColorSync(this.params.color) as string;
        }
        element.bindHarmonyWrappedBuilder(wrapBuilder<[BuilderLoadingParams]>(buildLoading), this.params);
        if (typeof element['getHarmonyComponentContent'] === 'function') {
            this.harmonyBuilderNode = (element as ESObject).getHarmonyComponentContent() as ComponentContent;
        } else {
            this.harmonyBuilderNode = element.getHarmonyBuilderNode();
        }
        element.bindHarmonyController(this);
    }
    updateStyle(color: string | null = DEFAULT_COLOR, borderWidth: BorderWidth | null = DEFAULT_BORDER_WIDTH, animationTimingFunction: AnimationTimingFunction | null = DEFAULT_ANIMATION_TIMING_FUNCTION) {
        if (color !== null) {
            if (this.params.color) {
                this.params.color = formatColorSync(color) as string;
            }
        } else {
            color = DEFAULT_COLOR;
        }
        if (borderWidth !== null) {
            this.params.borderWidth = borderWidth;
        } else {
            borderWidth = DEFAULT_BORDER_WIDTH;
        }
        if (animationTimingFunction !== null) {
            this.params.animationTimingFunction = animationTimingFunction;
        } else {
            animationTimingFunction = DEFAULT_ANIMATION_TIMING_FUNCTION;
        }
        this.updateParams();
    }
    updateDegrees(degrees: number) {
        if (degrees !== this.params.degrees) {
            this.params.degrees = degrees;
            this.updateParams();
        }
    }
    updatePaused(paused: boolean) {
        if (paused !== this.params.paused) {
            this.params.paused = paused;
            this.updateParams();
        }
    }
    private updateParams() {
        this.harmonyBuilderNode?.update(this.params);
    }
    destroy() {
        this.harmonyBuilderNode?.dispose();
    }
}
class _Element extends UniViewElementImpl {
}
class UniLoadingElement extends _Element {
}
export { BuilderLoadingParams as BuilderLoadingParams };
export { NativeLoading as NativeLoading };
export { UniLoadingElement as UniLoadingElement };
