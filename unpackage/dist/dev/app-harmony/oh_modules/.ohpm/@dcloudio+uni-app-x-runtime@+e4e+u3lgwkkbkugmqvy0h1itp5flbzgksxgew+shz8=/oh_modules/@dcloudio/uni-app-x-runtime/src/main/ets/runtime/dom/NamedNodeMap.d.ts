import { ElementOptions } from './BuiltInElement';
import { NativeMap } from './NativeMap';
export interface NamedNodeElement {
    _options?: ElementOptions;
    dataset: NativeMap<string, Object>;
    updateNativeAttribute(key: string, value: ESObject): void;
}
export declare class NamedNodeMap extends NativeMap<string, ESObject> {
    private element?;
    constructor(element: NamedNodeElement);
    set(key: string, value: ESObject): ESObject;
    get(key: string): ESObject;
    has(key: string): boolean;
    delete(key: string): boolean;
    private updateNativeNodeAttr;
    /**
     * @internal
     */
    attributeChangedCallback(name: string, oldValue: Object | null, newValue: Object | null, camelizeName?: string): void;
    /**
     * @internal
     */
    dispose(): void;
}
export declare function toNativeNodeAttr(map: NamedNodeMap): void;
