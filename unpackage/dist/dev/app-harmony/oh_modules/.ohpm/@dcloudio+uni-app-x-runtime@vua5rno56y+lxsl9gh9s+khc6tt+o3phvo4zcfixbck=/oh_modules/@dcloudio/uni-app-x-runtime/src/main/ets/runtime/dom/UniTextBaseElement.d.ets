import { UniElementImpl } from './UniElement';
import { LengthMetrics } from '@ohos.arkui.node';
export declare const DEFAULT_FONT_SIZE_NUM = 16;
export declare const DEFAULT_LINE_HEIGHT = "1.2em";
export declare function setTextBaseStyleCache<T extends FrameNode | null = FrameNode | null>(element: UniElementImpl<T>, cache?: TextBaseStyleCache): void;
export declare function lengthMetricsToString(value: LengthMetrics): string;
export declare function updateFontSize<T extends FrameNode | null = FrameNode | null>(element: UniElementImpl<T>, value: number | string, callback: (value: LengthMetrics) => void): void;
export declare function updateLineHeight<T extends FrameNode | null = FrameNode | null>(element: UniElementImpl<T>, value: string | number, callback: (value: LengthMetrics) => void): void;
export interface TextBaseStyleCache {
    fontSize?: number | string;
    lineHeight?: number | string;
    ignoreLineHeight?: boolean;
}
