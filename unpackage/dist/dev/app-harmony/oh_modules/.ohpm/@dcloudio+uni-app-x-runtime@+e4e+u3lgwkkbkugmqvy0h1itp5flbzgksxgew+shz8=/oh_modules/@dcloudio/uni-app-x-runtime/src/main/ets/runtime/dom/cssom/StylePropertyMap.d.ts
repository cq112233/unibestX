import { StylePropertyMap as IStylePropertyMap, CSSStyleValue as ICSSStyleValue } from './types';
import { CSSStyleValue } from './CSSStyleValue';
import { CSSUnparsedValue } from './CSSUnparsedValue';
import { type CSSStyleDeclaration } from '../CSSStyleDeclaration';
import { NamedNodeMap } from '../NamedNodeMap';
export interface StylePropertyMapElement {
    setStyleValue: (key: string, value: ICSSStyleValue) => void;
    removeStyleValue: (key: string) => void;
    parentElement: typeof this | null;
    children: (typeof this)[];
    attributeStyleMap: StylePropertyMap;
    style: CSSStyleDeclaration;
    attributes: NamedNodeMap;
}
export declare class StylePropertyMap implements IStylePropertyMap {
    [Symbol.iterator](): IterableIterator<[string, ICSSStyleValue[]]>;
    private controller;
    constructor(controller: StylePropertyMapElement);
    /**
     * we规范下value是个数组，在uni-app-x中不会遇到数组长度不为1的情况
     */
    private _map;
    set(property: string, ...values: (ICSSStyleValue | string | number | undefined | null)[]): void;
    clear(): void;
    /**
     * @internal
     * @description 获取当前节点的CSSUnparsedValue计算结果并更新样式
     */
    updateUnparsedStyle(property: string, value: CSSUnparsedValue | undefined): CSSStyleValue;
    /**
     * @internal
     * @description 获取当前节点引用的css变量指向的CSSUnparsedValue及其所在的element
     */
    getVariableValue(variableName: string): [element: StylePropertyMapElement, value: CSSUnparsedValue] | undefined;
    /**
     * @internal
     * @description 获取当前节点的CSSUnparsedValue计算结果
     */
    getVariableString(variable: CSSUnparsedValue, root?: CSSUnparsedValue | undefined): string | undefined;
    /**
     * @internal
     * @description 通知当前节点及所有子节点更新变量值
     */
    updateVariable(variableName: string): void;
    delete(property: string): void;
    forEach(callback: (value: ICSSStyleValue[], property: string, map: StylePropertyMap) => void, thisArg?: any): void;
    get size(): number;
    has(property: string): boolean;
    keys(): IterableIterator<string>;
    values(): IterableIterator<ICSSStyleValue[]>;
    entries(): IterableIterator<[string, ICSSStyleValue[]]>;
    getAll(property: string): ICSSStyleValue[];
    get(property: string): ICSSStyleValue;
    append(property: string, ...values: (ICSSStyleValue | string)[]): void;
}
