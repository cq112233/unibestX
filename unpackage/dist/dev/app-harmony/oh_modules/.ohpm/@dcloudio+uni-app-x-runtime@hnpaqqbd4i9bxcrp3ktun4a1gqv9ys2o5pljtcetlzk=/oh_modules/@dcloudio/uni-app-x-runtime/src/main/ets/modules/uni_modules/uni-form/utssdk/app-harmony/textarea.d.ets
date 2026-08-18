import type { UniInputFileOptions } from "./index";
export interface UniTextareaOptions extends UniInputFileOptions {
    controller: TextAreaController;
    lineHeight?: string;
    autoHeight?: boolean;
    height: number | string;
    padding?: UniTextareaPadding;
}
export interface UniTextareaPadding {
    top: string;
    right: string;
    bottom: string;
    left: string;
}
@Builder
export declare function TextareaBuilder(options: UniTextareaOptions): void;
