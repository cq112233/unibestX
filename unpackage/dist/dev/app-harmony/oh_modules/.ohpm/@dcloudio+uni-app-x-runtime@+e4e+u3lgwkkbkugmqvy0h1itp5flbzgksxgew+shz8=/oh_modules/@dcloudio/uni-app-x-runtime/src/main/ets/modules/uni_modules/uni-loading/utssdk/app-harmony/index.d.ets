import { UniNativeViewElement, UniViewElementImpl } from "@dcloudio/uni-app-framework";
type BorderWidth = 'normal' | 'bold';
type AnimationTimingFunction = 'ease' | 'linear';
interface BuilderLoadingParams {
    color?: string;
    borderWidth?: BorderWidth;
    degrees?: number;
    paused?: boolean;
    animationTimingFunction?: AnimationTimingFunction;
}
declare class NativeLoading {
    __v_skip: boolean;
    private params;
    private harmonyBuilderNode;
    constructor(element: UniNativeViewElement, params?: BuilderLoadingParams);
    updateStyle(color?: string | null, borderWidth?: BorderWidth | null, animationTimingFunction?: AnimationTimingFunction | null): void;
    updateDegrees(degrees: number): void;
    updatePaused(paused: boolean): void;
    private updateParams;
    destroy(): void;
}
declare class _Element extends UniViewElementImpl {
}
declare class UniLoadingElement extends _Element {
}
export { BuilderLoadingParams as BuilderLoadingParams };
export { NativeLoading as NativeLoading };
export { UniLoadingElement as UniLoadingElement };
