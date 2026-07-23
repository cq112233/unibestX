import { EXTENDED_COLOR_KEYWORDS, uniCanvasGradient } from "@normalized:N&&&@dcloudio/uni-app-modules/uni_modules/uni-canvas/customElements/uni-canvas/uni-canvas&1.0.0";
import { UniError, Image, Path2D, requestAnimationFrame, cancelAnimationFrame, UTSObject, UniNativeViewElementImpl, uni } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import type { CanvasRenderingContext2D, string, ComponentPublicInstance, NodeField, NodeInfo } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import { buildCanvas, HarmonyCanvasRenderingContext2D } from "@normalized:N&&&@dcloudio/uni-app-modules/uni_modules/uni-canvas/customElements/uni-canvas/builder&1.0.0";
type CreateCanvasContextAsyncSuccessCallback = (context: CanvasContext) => void;
type CreateCanvasContextAsyncFailCallback = (error: UniError) => void;
type CreateCanvasContextAsyncCompleteCallback = () => void;
type RequestAnimationFrameCallback = (time: number) => void;
interface CanvasContext {
    getContext(type: '2d'): CanvasRenderingContext2D | null;
    toDataURL(): string;
    toDataURL(type: string): string;
    toDataURL(type: string, encoderOptions: Object): string;
    createImage(): Image;
    createPath2D(): Path2D;
    requestAnimationFrame(callback: RequestAnimationFrameCallback): number;
    cancelAnimationFrame(taskId: number): void;
}
class CreateCanvasContextAsyncOptions extends UTSObject {
    id!: string.IDString;
    component: ComponentPublicInstance | null = null;
    success: CreateCanvasContextAsyncSuccessCallback | null = null;
    fail: CreateCanvasContextAsyncFailCallback | null = null;
    complete: CreateCanvasContextAsyncCompleteCallback | null = null;
}
type CreateCanvasContextAsync = (options: CreateCanvasContextAsyncOptions) => void;
interface CanvasBuilderOptions {
    context: any;
}
type CanvasTextRendering = "auto" | "geometricPrecision" | "optimizeLegibility" | "optimizeSpeed";
type CanvasFontStretch = "condensed" | "expanded" | "extra-condensed" | "extra-expanded" | "normal" | "semi-condensed" | "semi-expanded" | "ultra-condensed" | "ultra-expanded";
type GlobalCompositeOperation = "color" | "color-burn" | "color-dodge" | "copy" | "darken" | "destination-atop" | "destination-in" | "destination-out" | "destination-over" | "difference" | "exclusion" | "hard-light" | "hue" | "lighten" | "lighter" | "luminosity" | "multiply" | "overlay" | "saturation" | "screen" | "soft-light" | "source-atop" | "source-in" | "source-out" | "source-over" | "xor";
class UniCanvasRenderingContext2D implements CanvasRenderingContext2D {
    private readonly _element: UniCanvasElement;
    private readonly _context: any;
    private _firstMoveTo = false;
    constructor(element: UniCanvasElement, context: any) {
        this._element = element;
        this._context = context;
    }
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise: boolean | null = null): void {
        if (counterclockwise) {
            this._context.arc(px2vp(x), px2vp(y), px2vp(radius), startAngle, endAngle, counterclockwise);
        }
        else {
            this._context.arc(px2vp(x), px2vp(y), px2vp(radius), startAngle, endAngle);
        }
    }
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void {
        this._context.arcTo(px2vp(x1), px2vp(y1), px2vp(x2), px2vp(y2), px2vp(radius));
    }
    beginPath(): void {
        this._context.beginPath();
        this._firstMoveTo = false;
    }
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void {
        this._context.bezierCurveTo(px2vp(cp1x), px2vp(cp1y), px2vp(cp2x), px2vp(cp2y), px2vp(x), px2vp(y));
    }
    clearRect(x: number, y: number, w: number, h: number): void {
        this._context.clearRect(px2vp(x), px2vp(y), px2vp(w), px2vp(h));
    }
    clip(): void;
    clip(fillRule: CanvasFillRule): void;
    clip(path: Path2D): void;
    clip(path: Path2D, fillRule: CanvasFillRule): void;
    clip(path: Path2D | CanvasFillRule | null = null, fillRule: CanvasFillRule | null = null): void {
        if (path) {
            if (fillRule && typeof path != 'string') {
                this._context.clip(path, fillRule);
            }
            else {
                if (typeof path == 'string') {
                    this._context.clip(path);
                }
                else {
                    this._context.clip(path);
                }
            }
        }
        else {
            this._context.clip();
        }
    }
    closePath(): void {
        this._context.closePath();
    }
    createConicGradient(startAngle: number, x: number, y: number): CanvasGradient {
        return this._uniCanvasGradient(this._context.createConicGradient(startAngle, px2vp(x), px2vp(y)));
    }
    createImageData(sw: number | ImageData, sh: number | null = null): ImageData {
        if (typeof sw == 'number') {
            return this._context.createImageData(px2vp(sw), px2vp(sh));
        }
        return this._context.createImageData(sw);
    }
    createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient {
        return this._uniCanvasGradient(this._context.createLinearGradient(px2vp(x0), px2vp(y0), px2vp(x1), px2vp(y1)));
    }
    createPattern(image: Image, repetition: string): CanvasPattern {
        if (repetition.length) {
            return this._context.createPattern((image as any).bitmap!, repetition);
        }
        else {
            return this._context.createPattern((image as any).bitmap!);
        }
    }
    createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient {
        return this._uniCanvasGradient(this._context.createRadialGradient(px2vp(x0), px2vp(y0), px2vp(r0), px2vp(x1), px2vp(y1), px2vp(r1)));
    }
    draw(): void { }
    drawImage(image: Image, dx: number, dy: number): void;
    drawImage(image: Image, dx: number, dy: number, dw: number | null = null, dh: number | null = null): void {
        if (!(image as any).bitmap) {
            return;
        }
        if (dw && dh) {
            this._context.drawImage((image as any).bitmap!, px2vp(dx), px2vp(dy), px2vp(dw), px2vp(dh));
        }
        else {
            this._context.drawImage((image as any).bitmap!, px2vp(dx), px2vp(dy));
        }
    }
    ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, counterclockwise: boolean | null = null): void {
        if (counterclockwise) {
            this._context.ellipse(px2vp(x), px2vp(y), px2vp(radiusX), px2vp(radiusY), rotation, startAngle, endAngle, counterclockwise);
        }
        else {
            this._context.ellipse(px2vp(x), px2vp(y), px2vp(radiusX), px2vp(radiusY), rotation, startAngle, endAngle);
        }
    }
    fill(): void;
    fill(fillRule: CanvasFillRule): void;
    fill(path: Path2D): void;
    fill(path: Path2D, fillRule: CanvasFillRule): void;
    fill(path: Path2D | CanvasFillRule | null = null, fillRule: CanvasFillRule | null = null): void {
        if (path) {
            if (fillRule && typeof path != 'string') {
                this._context.fill(path, fillRule);
            }
            else {
                if (typeof path == 'string') {
                    this._context.fill(path);
                }
                else {
                    this._context.fill(path);
                }
            }
        }
        else {
            this._context.fill();
        }
    }
    fillRect(x: number, y: number, w: number, h: number): void {
        this._context.fillRect(px2vp(x), px2vp(y), px2vp(w), px2vp(h));
    }
    fillText(text: string, x: number, y: number, maxWidth: number | null = null): void {
        if (maxWidth) {
            this._context.fillText(text, px2vp(x), px2vp(y), px2vp(maxWidth));
        }
        else {
            this._context.fillText(text, px2vp(x), px2vp(y));
        }
    }
    getImageData(sx: number, sy: number, sw: number, sh: number): ImageData {
        return this._context.getImageData(px2vp(sx), px2vp(sy), px2vp(sw), px2vp(sh));
    }
    getLineDash(): number[] {
        return this.vp2pxArray(this._context.getLineDash());
    }
    isContextLost(): boolean {
        return false;
    }
    isPointInPath(x: number, y: number): boolean;
    isPointInPath(x: number, y: number, fillRule: string): boolean;
    isPointInPath(path: Path2D, x: number, y: number): boolean;
    isPointInPath(path: Path2D, x: number, y: number, fillRule: string): boolean;
    isPointInPath(path: Object, x: number, y: Object | null = null, fillRule: string | null = null): boolean {
        return false;
    }
    isPointInStroke(x: number, y: number): boolean;
    isPointInStroke(path: Path2D, x: number, y: number): boolean;
    isPointInStroke(path: Object, x: number, y: number | null = null): boolean {
        return false;
    }
    lineTo(x: number, y: number): void {
        if (!this._firstMoveTo) {
            this.moveTo(x, y);
        }
        this._context.lineTo(px2vp(x), px2vp(y));
    }
    measureText(text: string): TextMetrics {
        const textMetrics: TextMetrics = this._context.measureText(text);
        return {
            width: vp2px(textMetrics.width),
            height: vp2px(textMetrics.height),
            actualBoundingBoxLeft: vp2px(textMetrics.actualBoundingBoxLeft),
            actualBoundingBoxRight: vp2px(textMetrics.actualBoundingBoxRight),
            fontBoundingBoxAscent: vp2px(textMetrics.fontBoundingBoxAscent),
            fontBoundingBoxDescent: vp2px(textMetrics.fontBoundingBoxDescent),
            actualBoundingBoxAscent: vp2px(textMetrics.actualBoundingBoxAscent),
            actualBoundingBoxDescent: vp2px(textMetrics.actualBoundingBoxDescent),
            emHeightAscent: vp2px(textMetrics.emHeightAscent),
            emHeightDescent: vp2px(textMetrics.emHeightDescent),
            hangingBaseline: vp2px(textMetrics.hangingBaseline),
            alphabeticBaseline: vp2px(textMetrics.alphabeticBaseline),
            ideographicBaseline: vp2px(textMetrics.ideographicBaseline)
        };
    }
    moveTo(x: number, y: number): void {
        this._context.moveTo(px2vp(x), px2vp(y));
        this._firstMoveTo = true;
    }
    putImageData(imageData: ImageData, dx: number, dy: number): void;
    putImageData(imageData: ImageData, dx: number, dy: number, dirtyX: number | null = null, dirtyY: number | null = null, dirtyWidth: number | null = null, dirtyHeight: number | null = null): void {
        if (dirtyX && dirtyY && dirtyWidth && dirtyHeight) {
            this._context.putImageData(imageData, px2vp(dx), px2vp(dy), px2vp(dirtyX), px2vp(dirtyY), px2vp(dirtyWidth), px2vp(dirtyHeight));
        }
        else {
            this._context.putImageData(imageData, px2vp(dx), px2vp(dy));
        }
    }
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void {
        this._context.quadraticCurveTo(px2vp(cpx), px2vp(cpy), px2vp(x), px2vp(y));
    }
    rect(x: number, y: number, w: number, h: number): void {
        this._context.rect(px2vp(x), px2vp(y), px2vp(w), px2vp(h));
    }
    reset(): void {
        this._context.reset();
        this._firstMoveTo = false;
    }
    resetTransform(): void {
        this._context.resetTransform();
    }
    restore(): void {
        this._context.restore();
    }
    rotate(angle: number): void {
        this._context.rotate(angle);
    }
    roundRect(x: number, y: number, w: number, h: number, radii: number | null = null): void {
        throw new Error('Not implemented');
    }
    save(): void {
        this._context.save();
    }
    scale(x: number, y: number): void {
        this._context.scale(x, y);
    }
    setLineDash(segments: number[]): void {
        this._context.setLineDash(this.px2vpArray(segments));
    }
    setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void {
        this._context.setTransform(a, b, c, d, px2vp(e), px2vp(f));
    }
    stroke(): void;
    stroke(path: Path2D | null = null): void {
        if (path) {
            this._context.stroke(path!);
        }
        else {
            this._context.stroke();
        }
    }
    strokeRect(x: number, y: number, w: number, h: number): void {
        this._context.strokeRect(px2vp(x), px2vp(y), px2vp(w), px2vp(h));
    }
    strokeText(text: string, x: number, y: number, maxWidth: number | null = null): void {
        if (maxWidth) {
            this._context.strokeText(text, px2vp(x), px2vp(y), px2vp(maxWidth));
        }
        else {
            this._context.strokeText(text, px2vp(x), px2vp(y));
        }
    }
    transform(a: number, b: number, c: number, d: number, e: number, f: number): void {
        this._context.transform(a, b, c, d, px2vp(e), px2vp(f));
    }
    translate(x: number, y: number): void {
        this._context.translate(px2vp(x), px2vp(y));
    }
    get canvas(): UniCanvasElement {
        return this._element;
    }
    get direction(): CanvasDirection {
        return this._context.direction;
    }
    set direction(value: CanvasDirection) {
        this._context.direction = value;
    }
    get fillStyle(): string | CanvasGradient | CanvasPattern {
        return this._context.fillStyle as (string | CanvasGradient | CanvasPattern);
    }
    set fillStyle(value: string | CanvasGradient | CanvasPattern) {
        if (typeof value == 'string') {
            this._context.fillStyle = this._fixColor(value);
        }
        else {
            this._context.fillStyle = value;
        }
    }
    get filter(): string {
        return '';
    }
    set filter(value: string) { }
    get font(): string {
        return this._context.font;
    }
    set font(value: string) {
        this._context.font = value;
    }
    get fontStretch(): CanvasFontStretch {
        return 'condensed';
    }
    set fontStretch(value: CanvasFontStretch) { }
    get globalAlpha(): number {
        return this._context.globalAlpha;
    }
    set globalAlpha(value: number) {
        this._context.globalAlpha = value;
    }
    get globalCompositeOperation(): GlobalCompositeOperation {
        return this._context.globalCompositeOperation as GlobalCompositeOperation;
    }
    set globalCompositeOperation(value: GlobalCompositeOperation) {
        this._context.globalCompositeOperation = value;
    }
    get imageSmoothingEnabled(): boolean {
        return this._context.imageSmoothingEnabled;
    }
    set imageSmoothingEnabled(value: boolean) {
        this._context.imageSmoothingEnabled = value;
    }
    get imageSmoothingQuality(): ImageSmoothingQuality {
        return this._context.imageSmoothingQuality;
    }
    set imageSmoothingQuality(value: ImageSmoothingQuality) {
        this._context.imageSmoothingQuality = value;
    }
    get letterSpacing(): string {
        return '';
    }
    set letterSpacing(value: string) { }
    get lineWidth(): number {
        return vp2px(this._context.lineWidth);
    }
    set lineWidth(value: number) {
        this._context.lineWidth = px2vp(value);
    }
    get lineCap(): CanvasLineCap {
        return this._context.lineCap;
    }
    set lineCap(value: CanvasLineCap) {
        this._context.lineCap = value;
    }
    get lineJoin(): CanvasLineJoin {
        return this._context.lineJoin;
    }
    set lineJoin(value: CanvasLineJoin) {
        this._context.lineJoin = value;
    }
    get lineDashOffset(): number {
        return vp2px(this._context.lineDashOffset);
    }
    set lineDashOffset(value: number) {
        this._context.lineDashOffset = px2vp(value);
    }
    get miterLimit(): number {
        return this._context.miterLimit;
    }
    set miterLimit(value: number) {
        this._context.miterLimit = value;
    }
    get strokeStyle(): string | CanvasGradient | CanvasPattern {
        return this._context.strokeStyle as (string | CanvasGradient | CanvasPattern);
    }
    set strokeStyle(value: string | CanvasGradient | CanvasPattern) {
        if (typeof value == 'string') {
            this._context.strokeStyle = this._fixColor(value);
        }
        else {
            this._context.strokeStyle = value;
        }
    }
    get shadowBlur(): number {
        return this._context.shadowBlur;
    }
    set shadowBlur(value: number) {
        this._context.shadowBlur = value;
    }
    get shadowColor(): string {
        return this._context.shadowColor;
    }
    set shadowColor(value: string) {
        this._context.shadowColor = value;
    }
    get shadowOffsetX(): number {
        return vp2px(this._context.shadowOffsetX);
    }
    set shadowOffsetX(value: number) {
        this._context.shadowOffsetX = px2vp(value);
    }
    get shadowOffsetY(): number {
        return vp2px(this._context.shadowOffsetY);
    }
    set shadowOffsetY(value: number) {
        this._context.shadowOffsetY = px2vp(value);
    }
    get textAlign(): CanvasTextAlign {
        return this._context.textAlign;
    }
    set textAlign(value: CanvasTextAlign) {
        this._context.textAlign = value;
    }
    get textBaseline(): CanvasTextBaseline {
        return this._context.textBaseline;
    }
    set textBaseline(value: CanvasTextBaseline) {
        this._context.textBaseline = value;
    }
    get textRendering(): CanvasTextRendering {
        return 'auto';
    }
    set textRendering(value: CanvasTextRendering) { }
    get wordSpacing(): string {
        return '';
    }
    set wordSpacing(value: string) { }
    private px2vpArray(array: number[]): number[] {
        for (let i = 0; i < array.length; i++) {
            array[i] = px2vp(array[i]);
        }
        return array;
    }
    private vp2pxArray(array: number[]): number[] {
        for (let i = 0; i < array.length; i++) {
            array[i] = vp2px(array[i]);
        }
        return array;
    }
    private _uniCanvasGradient(gradient: CanvasGradient): CanvasGradient {
        uniCanvasGradient(gradient);
        return gradient;
    }
    private _fixColor(color: string): string {
        if (color.startsWith('#') || color.startsWith('rgb')) {
            return color;
        }
        else {
            return EXTENDED_COLOR_KEYWORDS[color];
        }
    }
}
class UniCanvasElement extends UniNativeViewElementImpl {
    private settings: RenderingContextSettings = new RenderingContextSettings(true);
    private context = new HarmonyCanvasRenderingContext2D(this.settings);
    private context2D = new UniCanvasRenderingContext2D(this, this.context);
    private _width = 0;
    private _height = 0;
    constructor() {
        super();
    }
    connectedCallback() {
        this.bindHarmonyWrappedBuilder(wrapBuilder<[
            CanvasBuilderOptions
        ]>(buildCanvas), {
            context: this.context
        } as CanvasBuilderOptions);
    }
    get width(): number {
        return this._width != 0 ? this._width : vp2px(this.offsetWidth);
    }
    set width(value: number) {
        this._width = value;
    }
    get height(): number {
        return this._height != 0 ? this._height : vp2px(this.offsetHeight);
    }
    set height(value: number) {
        this._height = value;
    }
    getContext(_: string): UniCanvasRenderingContext2D | null {
        return this.context2D;
    }
    toDataURL(type: string | null = null, quality: Object | null = null): string {
        return this.context.toDataURL(type, quality);
    }
}
export type { CanvasTextRendering as CanvasTextRendering };
export type { CanvasFontStretch as CanvasFontStretch };
export type { GlobalCompositeOperation as GlobalCompositeOperation };
export { UniCanvasRenderingContext2D as UniCanvasRenderingContext2D };
export { UniCanvasElement as UniCanvasElement };
class CanvasContextImpl implements CanvasContext {
    _element: UniCanvasElement;
    _context: UniCanvasRenderingContext2D;
    constructor(element: UniCanvasElement) {
        this._element = element;
        this._context = this._element.getContext('2d')!;
    }
    getContext(type: string): UniCanvasRenderingContext2D | null {
        return this._element.getContext(type);
    }
    toDataURL(): string;
    toDataURL(type: string): string;
    toDataURL(type: string | null = null, encoderOptions: Object | null = null): string {
        return this._element.toDataURL(type, encoderOptions);
    }
    createImage(): Image {
        return new Image();
    }
    createPath2D(): Path2D {
        return new Path2D();
    }
    requestAnimationFrame(callback: RequestAnimationFrameCallback): number {
        return requestAnimationFrame(callback);
    }
    cancelAnimationFrame(taskId: number) {
        cancelAnimationFrame(taskId);
    }
}
const createCanvasContextAsync: CreateCanvasContextAsync = (options: CreateCanvasContextAsyncOptions) => {
    uni.createSelectorQuery().in(options.component).select('#' + options.id).fields({
        node: true
    } as NodeField, (ret: Object) => {
        const node = (ret as NodeInfo).node as UniCanvasElement;
        if (node != null) {
            options.success?.(new CanvasContextImpl(node));
        }
        else {
            const uniError = new UniError('uni-createCanvasContextAsync', -1, 'canvas id invalid.');
            options.fail?.(uniError);
        }
        options.complete?.();
    }).exec();
};
export { CreateCanvasContextAsyncOptions as CreateCanvasContextAsyncOptions };
export type { CanvasContext as CanvasContext, CreateCanvasContextAsync as CreateCanvasContextAsync, RequestAnimationFrameCallback as RequestAnimationFrameCallback, CreateCanvasContextAsyncSuccessCallback as CreateCanvasContextAsyncSuccessCallback, CreateCanvasContextAsyncFailCallback as CreateCanvasContextAsyncFailCallback, CreateCanvasContextAsyncCompleteCallback as CreateCanvasContextAsyncCompleteCallback };
export { createCanvasContextAsync as createCanvasContextAsync };
