import { CSSVariableReferenceValue as ICSSVariableReferenceValue, CSSUnparsedValue as ICSSUnparsedValue } from './types';
export declare class CSSVariableReferenceValue implements ICSSVariableReferenceValue {
    readonly variable: string;
    readonly fallback: ICSSUnparsedValue | null;
    constructor(variable: string, fallback?: ICSSUnparsedValue | null);
    private _relatedVariables;
    /**
     * @internal
     */
    getRelatedVariables(): string[];
    /**
     * @internal
     */
    calculateCSSValue(variables: Map<string, string>): string | undefined;
    toString(): string;
}
