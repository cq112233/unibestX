import { CSSStyleValue as ICSSStyleValue } from './types';
interface IStyleValueFactory {
    fromString(property: string, cssText: string | number): CSSStyleValue;
}
export declare function initStyleValueFactory(factory: IStyleValueFactory): void;
export declare function parseStyleWithCache(property: string, cssText: string | number): CSSStyleValue | undefined;
export declare class CSSStyleValue implements ICSSStyleValue {
    static parse(property: string, cssText: string | number): CSSStyleValue | undefined;
    static parseAll(property: string, value: string): CSSStyleValue;
    cssText: string;
    constructor();
    toString(): string;
}
export {};
