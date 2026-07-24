import { LinearGradientValue } from '@dcloudio/uni-runtime-harmony/helper';
import { AnimatorResult as AnimatorResult } from "@ohos.animator";
import { UniCssBoxSizing, UniCssFlexDirection, UniCssDirection, UniCssFlexJustify, UniCssFlexAlign, UniCssPositionType, UniCssFlexWrap, UniCssFlexOverflow, UniCssDisplayType, UniCssBorderStyle, UniLayoutFlexNode, UniLengthUnit } from 'dcloudlayout';
import { CSSStyleDeclaration } from '@dcloudio/uni-app-x/types/native';
import { CSSStyleValue as ICSSStyleValue } from '../dom/cssom/types';
export declare function formatNumber(value: Object, success: (val: number) => void, fail?: () => void): void;
export declare function formatLengthValue(value: Object | undefined, onLength: (val: number) => void, onLengthPercent?: (val: number) => void, fail?: () => void): void;
export interface LayoutLength {
    value: number | string;
    unit: UniLengthUnit;
}
export declare function formatLayoutLength(value: Object | undefined, success: (val: LayoutLength) => void, fail?: (error: Error) => void): void;
export declare function formatLayoutLengthWithCSSStyleValue(value: ICSSStyleValue | undefined, success: (val: LayoutLength) => void, fail?: (error: Error) => void): void;
export declare function formatLayoutLengthWithCSSStyleValueSync(value: ICSSStyleValue | undefined): LayoutLength;
export declare function formatLength(value: Object | undefined, success: (val: number | string | undefined) => void, fail?: () => void): void;
export declare function formatLineHeight(value: Object, success: (val: string | number | undefined) => void, fail?: () => void): void;
export declare function formatVisibility(value: Object, success: (val: Visibility) => void, fail?: () => void): void;
export interface TextOverflowValue {
    overflow: TextOverflow;
}
export declare function formatTextOverflow(value: Object, success: (val: TextOverflowValue) => void, fail?: () => void): void;
export declare function formatTextDecorationLine(value: Object, success: (val: TextDecorationType) => void, fail?: () => void): void;
export declare function formatTextDecorationStyle(value: Object, success: (val: TextDecorationStyle) => void, fail?: () => void): void;
export declare function formatFontStyle(value: Object, success: (val: FontStyle) => void, fail?: () => void): void;
export declare function formatFontWeight(value: Object, success: (val: FontWeight | number | string) => void, fail?: () => void): void;
export declare function formatFontFamily(value: Object, success: (val: string) => void, fail?: () => void): void;
export declare function formatFontSize(value: Object, success: (val: string | number | undefined) => void, fail?: () => void): void;
export declare function formatDirection(value: Object, success: (val: UniCssDirection) => void, fail?: () => void): void;
export declare function formatBoxSizing(value: Object, success: (val: UniCssBoxSizing) => void, fail?: () => void): void;
export declare function formatFlexDirection(value: Object, success: (val: UniCssFlexDirection) => void, fail?: () => void): void;
export declare function formatJustifyContent(value: Object, success: (val: UniCssFlexJustify) => void, fail?: () => void): void;
export declare function formatFlexAlign(value: Object, success: (val: UniCssFlexAlign) => void, fail?: () => void): void;
export declare function formatPosition(value: Object, success: (val: UniCssPositionType) => void, fail?: () => void): void;
export declare function formatFlexWrap(value: Object, success: (val: UniCssFlexWrap) => void, fail?: () => void): void;
export declare function formatOverflow(value: Object, success: (val: UniCssFlexOverflow, val2: boolean) => void, fail?: () => void): void;
export declare function formatDisplay(value: Object, success: (val: UniCssDisplayType) => void, fail?: () => void): void;
export declare function formatBorderStyle(value: Object, success: (val1: UniCssBorderStyle, val2: BorderStyle | undefined) => void, fail?: () => void): void;
export declare enum BORDER_WIDTH {
    Thin = "1",
    Medium = "3",
    Thick = "5"
}
export declare function formatBorderWidth(value: Object, success: (val: LayoutLength) => void, fail?: () => void): void;
export declare function formatTextAlign(value: Object, success: (val: TextAlign) => void, fail?: () => void): void;
export interface TransformParse {
    name: string;
    args: string[];
}
export declare function formatAngle(angle: string): number;
export declare const DEFAULT_TRANSFORM = "none";
export declare const DEFAULT_TRANSFORM_ORIGIN: TransFormOrigin;
export declare function parseTransformValue(value: string): TransformParse[];
interface TransformOptions {
    translate?: TranslateOptions;
    rotate?: RotateOptions;
    scale?: ScaleOptions;
}
export declare function formatTransform(value: Object, transformOrigin: TransFormOrigin, success: (val?: object, transformOptions?: TransformOptions) => void, fail?: () => void): void;
interface TransFormOrigin {
    centerX: string | number;
    centerY: string | number;
}
export declare function formatTransformOrigin(value: string): TransFormOrigin;
export declare function formatColor(value: Object, success: (val: ResourceColor) => void, fail?: () => void): void;
export declare function formatColorSync(value: Object): ResourceColor;
export declare function formatLinearGradient(value: string, success: (val: LinearGradientValue) => void): void;
export declare function formatBoxShadow(value: string, success: (val: ShadowOptions) => void): void;
export declare function formatAnimationOptions(self: ESObject, options: ESObject, keyframes: ESObject | ESObject[], success: (param: KeyframeAnimateParam, keyframes: Array<KeyframeState>) => void): void;
export declare function parseTimeToMs(timeStr: string, success: (res: number) => void): void;
export declare const NUMERIC_CSS_PROPS: Set<string>;
export declare const NON_NUMERIC_CSS_PROPS: Set<string>;
export declare function handleLayoutTransitionAnimation(isMounted: boolean, animatorsCache: Map<string, AnimatorResult>, layoutNode: UniLayoutFlexNode, style: CSSStyleDeclaration, transitionProperty: string[], isTransitionPropertyAll: boolean, transitionDuration: number, transitionDelay: number, transitionTimingFunction: string, key: string, context: UIContext | null, callback: (val: Array<Object | undefined>, isSync?: boolean) => void, args: Array<Object | undefined>, onFinish: () => void): void;
export declare function handleNativeNodeTransitionAnimation(transitionProperty: string[], isTransitionPropertyAll: boolean, transitionDuration: number, transitionDelay: number, transitionTimingFunction: string, key: string, context: UIContext | null, onFinish: () => void, callback: () => void): void;
export declare function expandTransitionAnimationProperty(transitionProperty: string[]): void;
interface PointerEvents {
    hitTestMode: HitTestMode;
    responseRegion: Rectangle;
}
export declare function transformPointerEvents(value: string): PointerEvents;
export {};
