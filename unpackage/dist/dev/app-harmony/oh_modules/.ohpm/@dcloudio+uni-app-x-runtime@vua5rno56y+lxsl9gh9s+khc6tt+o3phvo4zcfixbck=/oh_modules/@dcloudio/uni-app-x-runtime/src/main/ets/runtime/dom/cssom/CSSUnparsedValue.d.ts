import { CSSUnparsedValue as ICSSUnparsedValue, CSSUnparsedSegment as ICSSUnparsedSegment, CSSStyleValue as ICSSStyleValue } from './types';
import { CSSStyleValue } from './CSSStyleValue';
import { CSSVariableReferenceValue } from './CSSVariableReferenceValue';
export declare const LAYOUT_VARS: string[];
export declare function isLayoutVar(value: ICSSStyleValue): value is CSSUnparsedValue;
export declare class CSSUnparsedValue extends CSSStyleValue implements ICSSUnparsedValue {
    [key: number]: ICSSUnparsedSegment;
    private _members;
    constructor(members: ICSSUnparsedSegment[]);
    get length(): number;
    private _relatedVariables;
    /**
     * @internal
     */
    getRelatedVariables(): string[];
    /**
     * @internal
     */
    calculateCSSValue(variables: Map<string, string>): string | undefined;
    forEach(callback: (value: ICSSUnparsedSegment, key: number, parent: ICSSUnparsedValue) => void): void;
    toString(): string;
}
export declare function hasVariables(value: string): boolean;
export declare class UnparsedValueParser {
    index: number;
    cssText: string;
    constructor(cssText: string);
    private isVarStart;
    parse(): CSSUnparsedValue;
    consumeString(): string;
    consumeVariableReferenceValueFallback(): CSSUnparsedValue;
    consumeVariableReferenceValue(): CSSVariableReferenceValue;
}
export declare function parseUnparsedValue(cssText: string): CSSUnparsedValue;
