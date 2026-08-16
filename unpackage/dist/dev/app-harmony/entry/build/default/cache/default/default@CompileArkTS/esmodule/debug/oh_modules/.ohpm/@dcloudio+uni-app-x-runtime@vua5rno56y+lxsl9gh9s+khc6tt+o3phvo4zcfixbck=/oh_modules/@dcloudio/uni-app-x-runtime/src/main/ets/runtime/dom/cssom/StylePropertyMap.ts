import type { StylePropertyMap as IStylePropertyMap, CSSStyleValue as ICSSStyleValue } from './types';
import { parseStyleWithCache } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/cssom/CSSStyleValue&1.0.0";
import type { CSSStyleValue } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/cssom/CSSStyleValue&1.0.0";
import { CSSUnparsedValue, isLayoutVar } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/cssom/CSSUnparsedValue&1.0.0";
import { type CSSStyleDeclaration } from '../CSSStyleDeclaration';
import type { NamedNodeMap } from '../NamedNodeMap';
export interface StylePropertyMapElement {
    setStyleValue: (key: string, value: ICSSStyleValue) => void;
    removeStyleValue: (key: string) => void;
    parentElement: typeof this | null;
    children: (typeof this)[];
    attributeStyleMap: StylePropertyMap;
    style: CSSStyleDeclaration;
    attributes: NamedNodeMap;
}
export class StylePropertyMap implements IStylePropertyMap {
    [Symbol.iterator](): IterableIterator<[
        string,
        ICSSStyleValue[]
    ]> {
        return this.entries();
    }
    private controller: StylePropertyMapElement;
    constructor(controller: StylePropertyMapElement) {
        this.controller = controller;
    }
    /**
     * we规范下value是个数组，在uni-app-x中不会遇到数组长度不为1的情况
     */
    private _map: Map<string, ICSSStyleValue[]> = new Map();
    set(property: string, ...values: (ICSSStyleValue | string | number | undefined | null)[]) {
        if (values.length > 1) {
            throw new Error('set() method only accepts one value');
        }
        let values0 = values[0];
        if (values0 == undefined) {
            this.delete(property);
            return;
        }
        if (typeof values0 === 'string' || typeof values0 === 'number') {
            if (this.has(property) && (this.get(property) as CSSStyleValue | undefined)?.cssText === values0 + '') {
                return;
            }
            values0 = parseStyleWithCache(property, values0);
        }
        if (values0 == null) {
            return;
        }
        this._map.set(property, [values0]);
        this.controller.attributes.attributeChangedCallback('style', '', '');
        if (values0 instanceof CSSUnparsedValue) {
            // 处理css变量，注意变量值本身也可以包含变量，例如：`--x-x1: var(--x-x2)`
            // 按照css变量全存储在attributeStyleMap内实现
            if (property.startsWith('--')) {
                this.updateVariable(property);
                return;
            }
            if (isLayoutVar(values0)) {
                /**
                 * TODO 排版器处理的限制
                 * - 仅在排版器支持的属性上生效
                 * - 无法统一完成复杂拼接、以及目前没有遇到的空值回退
                 * - 后续再调整为非排版器处理时，在开发者定义变量和内置变量冲突时（开发者可能故意为之）会有兼容问题。例如用户在某层view上定义了--window-top: 44px;由排版器处理的情况下此变量并不会生效。如果和自定义css变量统一处理，此变量会覆盖内置变量
                 */
                this.controller.setStyleValue(property, values0);
                return;
            }
            this.updateUnparsedStyle(property, values0);
            return;
        }
        this.controller.setStyleValue(property, values0);
    }
    clear(): void {
        this.forEach((_, property: string) => {
            this.delete(property);
        });
    }
    /**
     * @internal
     * @description 获取当前节点的CSSUnparsedValue计算结果并更新样式
     */
    updateUnparsedStyle(property: string, value: CSSUnparsedValue | undefined): CSSStyleValue {
        if (value == null) {
            this.delete(property);
            return;
        }
        const valueString = this.getVariableString(value);
        if (valueString == null) {
            return;
        }
        const parsedStyle = parseStyleWithCache(property, valueString);
        if (parsedStyle == null || parsedStyle instanceof CSSUnparsedValue) {
            return;
        }
        this.controller.setStyleValue(property, parsedStyle);
    }
    // TODO 优化getVariableValue及getVariableString，目前依赖多个变量时会多次遍历dom树，此场景使用较少，优先级低
    /**
     * @internal
     * @description 获取当前节点引用的css变量指向的CSSUnparsedValue及其所在的element
     */
    getVariableValue(variableName: string): [
        element: StylePropertyMapElement,
        value: CSSUnparsedValue
    ] | undefined {
        let tempElement = this.controller;
        while (tempElement) {
            const value = tempElement.attributeStyleMap.get(variableName);
            if (value && value instanceof CSSUnparsedValue) {
                return [tempElement, value as CSSUnparsedValue];
            }
            tempElement = tempElement.parentElement;
        }
    }
    /**
     * @internal
     * @description 获取当前节点的CSSUnparsedValue计算结果
     */
    getVariableString(variable: CSSUnparsedValue, root?: CSSUnparsedValue | undefined): string | undefined {
        if (variable === root) {
            // 循环引用
            return;
        }
        if (root == null) {
            root = variable;
        }
        const relatedVariables = variable.getRelatedVariables();
        const relatedVariableMap = new Map<string, string>();
        if (relatedVariables.length === 0) {
            return variable.calculateCSSValue(relatedVariableMap);
        }
        for (let i = 0; i < relatedVariables.length; i++) {
            const variableName = relatedVariables[i];
            const getVariableValueResult = this.getVariableValue(variableName);
            if (getVariableValueResult) {
                const [element, variableValue] = getVariableValueResult;
                relatedVariableMap.set(variableName, element.attributeStyleMap.getVariableString(variableValue, root));
            }
        }
        return variable.calculateCSSValue(relatedVariableMap);
    }
    /**
     * @internal
     * @description 通知当前节点及所有子节点更新变量值
     */
    updateVariable(variableName: string) {
        this.controller.style.updateVar(variableName);
        this.forEach((value, property: string) => {
            if (value && value[0] && value[0] instanceof CSSUnparsedValue) {
                const value0 = value[0];
                const value0RelatedVariables = value0.getRelatedVariables();
                if (!value0RelatedVariables.includes(variableName)) {
                    return;
                }
                if (property.startsWith('--')) {
                    this.updateVariable(property);
                }
                else {
                    this.updateUnparsedStyle(property, value0);
                }
            }
        });
        for (let i = 0; i < this.controller.children.length; i++) {
            const child = this.controller.children[i];
            if (child.attributeStyleMap.has(variableName)) {
                // 子节点存在和父结点同名的变量，终止通知
                return;
            }
            child.attributeStyleMap.updateVariable(variableName);
        }
    }
    delete(property: string): void {
        this.controller.removeStyleValue(property);
        this._map.delete(property);
        if (property.startsWith('--')) {
            this.updateVariable(property);
        }
    }
    forEach(callback: (value: ICSSStyleValue[], property: string, map: StylePropertyMap) => void, thisArg?: any): void {
        this._map.forEach((value, key) => {
            if (thisArg) {
                callback.call(thisArg, value, key, this);
            }
            else {
                callback(value, key, this);
            }
        });
    }
    get size(): number {
        return this._map.size;
    }
    has(property: string): boolean {
        return this._map.has(property);
    }
    keys(): IterableIterator<string> {
        return this._map.keys();
    }
    values(): IterableIterator<ICSSStyleValue[]> {
        return this._map.values();
    }
    entries(): IterableIterator<[
        string,
        ICSSStyleValue[]
    ]> {
        return this._map.entries();
    }
    getAll(property: string): ICSSStyleValue[] {
        return this._map.get(property) || [];
    }
    get(property: string) {
        const values = this.getAll(property);
        if (values) {
            return values[0] ?? null;
        }
        return null;
    }
    append(property: string, ...values: (ICSSStyleValue | string)[]): void {
        throw new Error('Not implemented');
        // const existingValues = this.getAll(property);
        // if (existingValues) {
        //   this.set(property, ...existingValues, ...values);
        // } else {
        //   this.set(property, ...values);
        // }
    }
}
