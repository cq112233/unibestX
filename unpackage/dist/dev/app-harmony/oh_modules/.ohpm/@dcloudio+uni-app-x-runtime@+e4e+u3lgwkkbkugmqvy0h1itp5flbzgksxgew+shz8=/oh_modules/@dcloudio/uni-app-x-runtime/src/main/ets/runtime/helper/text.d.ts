/**
 * uni-app#next packages/uni-components/src/helpers/text.ts
 */
export declare const LINEFEED = "\n";
declare const SPACE_UNICODE: {
    ensp: string;
    emsp: string;
    nbsp: string;
};
export interface DecodeOptions {
    space?: keyof typeof SPACE_UNICODE;
    decode?: boolean;
}
export type DecodeOptionsSpace = DecodeOptions['space'];
export declare function parseText(text: string, options: DecodeOptions): string[];
export {};
