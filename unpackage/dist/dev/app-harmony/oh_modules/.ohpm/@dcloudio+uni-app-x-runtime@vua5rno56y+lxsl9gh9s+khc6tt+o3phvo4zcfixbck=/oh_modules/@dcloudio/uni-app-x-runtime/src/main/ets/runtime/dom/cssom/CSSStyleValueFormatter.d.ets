import { CSSStyleValue as ICSSStyleValue } from './types';
import { UniCssBorderStyle, UniCssDirection, UniCssBoxSizing, UniCssFlexAlign, UniCssFlexDirection, UniCssFlexJustify, UniCssFlexOverflow, UniCssPositionType, UniCssFlexWrap, UniCssDisplayType } from 'dcloudlayout';
import { LayoutLength } from '../../helper/css';
/**
 * 将CSSStyleValue格式化为LayoutNode或FrameNode接收的值
 */
export declare function toLayoutNodeLength(value: ICSSStyleValue): LayoutLength | undefined;
export declare function toLayoutNodeNumber(value: ICSSStyleValue): number | undefined;
export declare function toLayoutNodeDirection(value: ICSSStyleValue): UniCssDirection | undefined;
export declare function toLayoutNodeBoxSizing(value: ICSSStyleValue): UniCssBoxSizing | undefined;
export declare function toLayoutNodeBorderStyle(value: ICSSStyleValue): UniCssBorderStyle | undefined;
export declare function toLayoutNodeDisplay(value: ICSSStyleValue): UniCssDisplayType | undefined;
export declare function toLayoutNodeFlexDirection(value: ICSSStyleValue): UniCssFlexDirection | undefined;
export declare function toLayoutNodeFlexAlign(value: ICSSStyleValue): UniCssFlexAlign | undefined;
export declare function toLayoutNodeFlexJustify(value: ICSSStyleValue): UniCssFlexJustify | undefined;
export declare function toLayoutNodeOverflow(value: ICSSStyleValue): UniCssFlexOverflow | undefined;
export declare function toLayoutNodePosition(value: ICSSStyleValue): UniCssPositionType | undefined;
export declare function toLayoutNodeFlexWrap(value: ICSSStyleValue): UniCssFlexWrap | undefined;
export declare function toLayoutNodeBorderWidth(value: ICSSStyleValue): LayoutLength | undefined;
export declare function colorToFrameNodeColor(value: ICSSStyleValue): string | undefined;
export declare function overflowToFrameNodeClip(value: ICSSStyleValue): boolean | undefined;
export declare function displayToFrameNodeHidden(value: ICSSStyleValue): boolean | undefined;
export declare function borderStyleToFrameNodeBorderStyle(value: ICSSStyleValue): BorderStyle | undefined;
export declare function lengthToFrameNodeLength(value: ICSSStyleValue): string | number;
export declare function numberToFrameNodeNumber(value: ICSSStyleValue): number | undefined;
export declare function visibilityToFrameNodeVisibility(value: ICSSStyleValue): Visibility | undefined;
export declare function pointerEventsToFrameNodeHitTestMode(value: ICSSStyleValue): HitTestMode | undefined;
export declare function fontSizeToFrameNodeFontSize(value: ICSSStyleValue): number | string | undefined;
export declare function fontWeightToFrameNodeFontWeight(value: ICSSStyleValue): FontWeight | number | undefined;
export declare function fontStyleToFrameNodeFontStyle(value: ICSSStyleValue): FontStyle | undefined;
export declare function lineHeightToFrameNodeLineHeight(value: ICSSStyleValue): string | number | undefined;
export declare function textAlignToFrameNodeTextAlign(value: ICSSStyleValue): TextAlign | undefined;
export declare function whiteSpaceToFrameNodeMaxLines(value: ICSSStyleValue): number | undefined;
export interface TextOverflowValue {
    overflow: TextOverflow;
}
export declare function textOverflowToFrameNodeTextOverflow(value: ICSSStyleValue): TextOverflowValue | undefined;
export declare function textDecorationLineToFrameNodeTextDecorationType(value: ICSSStyleValue): TextDecorationType | undefined;
export declare function textDecorationStyleToFrameNodeTextDecorationStyle(value: ICSSStyleValue): TextDecorationStyle | undefined;
