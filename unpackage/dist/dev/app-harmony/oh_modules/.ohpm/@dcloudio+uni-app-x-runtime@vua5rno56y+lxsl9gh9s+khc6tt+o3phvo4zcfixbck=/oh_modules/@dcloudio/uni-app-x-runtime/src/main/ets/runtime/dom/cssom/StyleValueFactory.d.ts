import { CSSStyleValue } from './CSSStyleValue';
export declare class StyleValueFactory {
    static fromString(property: string, value: string | number): CSSStyleValue | undefined;
}
