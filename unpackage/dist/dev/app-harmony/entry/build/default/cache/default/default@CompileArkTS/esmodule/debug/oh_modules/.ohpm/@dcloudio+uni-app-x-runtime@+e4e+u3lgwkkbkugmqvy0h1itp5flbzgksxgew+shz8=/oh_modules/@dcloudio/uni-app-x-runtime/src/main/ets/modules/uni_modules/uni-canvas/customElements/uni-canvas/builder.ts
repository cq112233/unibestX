export function buildCanvas(params: any, parent = null) {
    const __params__ = params;
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, params = __params__) => {
        Canvas.create(params.context);
        Canvas.attributeModifier.bind(this)(params.modifier);
        Canvas.clip(true);
    }, Canvas);
    Canvas.pop();
}
export const HarmonyCanvasRenderingContext2D = CanvasRenderingContext2D;
