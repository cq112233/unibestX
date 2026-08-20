import type { CSSUnparsedValue as ICSSUnparsedValue, CSSUnparsedSegment as ICSSUnparsedSegment, CSSStyleValue as ICSSStyleValue } from './types';
import { CSSStyleValue } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/cssom/CSSStyleValue&1.0.0";
import { CSSVariableReferenceValue } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/cssom/CSSVariableReferenceValue&1.0.0";
export const LAYOUT_VARS = [
    '--uni-safe-area-inset-top',
    '--uni-safe-area-inset-bottom',
    '--uni-safe-area-inset-left',
    '--uni-safe-area-inset-right',
    '--status-bar-height',
    '--window-top',
    '--window-bottom',
];
export function isLayoutVar(value: ICSSStyleValue): value is CSSUnparsedValue {
    // TODO trim
    return value instanceof CSSUnparsedValue && value.length === 1 && value[0] instanceof CSSVariableReferenceValue && LAYOUT_VARS.includes(value[0].variable);
}
export class CSSUnparsedValue extends CSSStyleValue implements ICSSUnparsedValue {
    [key: number]: ICSSUnparsedSegment;
    private _members: ICSSUnparsedSegment[] = [];
    constructor(members: ICSSUnparsedSegment[]) {
        super();
        this._members = members;
        // TODO 暂时假设不会修改members
        for (let i = 0; i < members.length; i++) {
            this[i] = members[i];
        }
    }
    get length(): number {
        return this._members.length;
    }
    private _relatedVariables: string[] | null = null;
    /**
     * @internal
     */
    getRelatedVariables(): string[] {
        // 暂时假设不会修改members，似乎也没有这种需求
        if (this._relatedVariables) {
            return this._relatedVariables;
        }
        this._relatedVariables = [];
        for (const member of this._members) {
            if (member instanceof CSSVariableReferenceValue) {
                this._relatedVariables.push(...member.getRelatedVariables());
            }
        }
        return this._relatedVariables;
    }
    /**
     * @internal
     */
    calculateCSSValue(variables: Map<string, string>): string | undefined {
        let result: string = '';
        for (const member of this._members) {
            if (member instanceof CSSVariableReferenceValue) {
                const value = member.calculateCSSValue(variables);
                if (!value) {
                    // 任意member未计算出结果均返回undefined
                    return undefined;
                }
                result += value;
            }
            else {
                // typeof member === string
                result += member;
            }
        }
        return result;
    }
    forEach(callback: (value: ICSSUnparsedSegment, key: number, parent: ICSSUnparsedValue) => void): void {
        this._members.forEach(callback);
    }
    toString(): string {
        return this._members.join('');
    }
}
export function hasVariables(value: string): boolean {
    return value.includes('var(');
}
export class UnparsedValueParser {
    index: number = 0;
    cssText: string = '';
    constructor(cssText: string) {
        this.cssText = cssText;
        this.index = 0;
    }
    private isVarStart() {
        return this.cssText[this.index] === 'v' &&
            this.cssText[this.index + 1] === 'a' &&
            this.cssText[this.index + 2] === 'r' &&
            this.cssText[this.index + 3] === '(';
    }
    parse(): CSSUnparsedValue {
        const members: ICSSUnparsedSegment[] = [];
        while (this.index < this.cssText.length) {
            if (this.isVarStart()) {
                const variable = this.consumeVariableReferenceValue();
                members.push(variable);
            }
            else {
                const segment = this.consumeString();
                members.push(segment);
            }
        }
        return new CSSUnparsedValue(members);
    }
    consumeString(): string {
        let tempString = '';
        while (this.index < this.cssText.length) {
            const c = this.cssText[this.index];
            if (this.isVarStart()) {
                return tempString;
            }
            tempString += c;
            this.index++;
            if (this.index == this.cssText.length) {
                return tempString;
            }
        }
    }
    consumeVariableReferenceValueFallback(): CSSUnparsedValue {
        const members: ICSSUnparsedSegment[] = [];
        let tempFallback = '';
        const startIndex = this.index;
        while (this.index < this.cssText.length) {
            const c = this.cssText[this.index];
            if (this.isVarStart()) {
                if (tempFallback) {
                    members.push(tempFallback);
                    tempFallback = '';
                }
                const variable = this.consumeVariableReferenceValue();
                members.push(variable);
                continue;
            }
            else if (c === ')') {
                if (tempFallback) {
                    members.push(tempFallback);
                    tempFallback = '';
                }
                this.index++;
                return new CSSUnparsedValue(members);
            }
            tempFallback += c;
            this.index++;
        }
        throw new Error('Invalid variable reference value fallback: ' + this.cssText.substring(startIndex, this.index));
    }
    consumeVariableReferenceValue(): CSSVariableReferenceValue {
        this.index += 4;
        let tempVariable = '';
        let tempFallback: CSSUnparsedValue | null = null;
        while (this.index < this.cssText.length) {
            const c = this.cssText[this.index];
            if (c === ',') {
                this.index++;
                // 存在fallback时由fallback消费")"
                tempFallback = this.consumeVariableReferenceValueFallback();
                return new CSSVariableReferenceValue(tempVariable.trim(), tempFallback);
            }
            if (c === ')') {
                this.index++;
                return new CSSVariableReferenceValue(tempVariable.trim());
            }
            tempVariable += c;
            this.index++;
        }
    }
}
export function parseUnparsedValue(cssText: string): CSSUnparsedValue {
    const parser = new UnparsedValueParser(cssText);
    return parser.parse();
}
