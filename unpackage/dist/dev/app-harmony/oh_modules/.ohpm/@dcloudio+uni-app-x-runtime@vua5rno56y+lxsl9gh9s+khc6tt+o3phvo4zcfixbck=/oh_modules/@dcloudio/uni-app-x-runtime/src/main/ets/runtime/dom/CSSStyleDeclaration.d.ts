import { CSSStyleDeclaration as ICSSStyleDeclaration } from '@dcloudio/uni-app-x/types/native';
import { NativeMap } from './NativeMap';
import { NamedNodeMap } from './NamedNodeMap';
import { type StylePropertyMap } from './cssom/StylePropertyMap';
export declare const enableAttributeStyleMap = false;
export declare enum VarItemType {
    Text = 0,
    Var = 1
}
export interface VarItem {
    type: VarItemType;
    value: string;
    fallback?: string;
}
export declare function parseVar(value: string): VarItem[];
export interface StyleElement {
    parseStyle: (key: string, value: Object) => boolean;
    parentElement: typeof this | null;
    children: typeof this[];
    style: CSSStyleDeclaration;
    attributes: NamedNodeMap;
    attributeStyleMap: StylePropertyMap;
}
export declare class CSSStyleDeclaration implements ICSSStyleDeclaration {
    get [Symbol.toStringTag](): string;
    private style;
    /**
     * @internal
     */
    _element?: StyleElement;
    constructor(el: StyleElement);
    setProperty(name: string | Object | null, value?: string): void;
    setProperty(name: string, value: Object | null): void;
    removeProperty(property: string): string;
    /**
     * @internal
     */
    updateVar(key: string): void;
    /**
     * @internal
     */
    updateAllVars(): void;
    private updateProperty;
    getPropertyValue(key: string): string;
    getStyleMap(): NativeMap<string, Object | null>;
    /**
     * @internal
     */
    dispose(): void;
    private varUpdaters;
    private parseVar;
}
