/**
 * 模仿原生 Map，缺省值为 null
 */
export declare class NativeMap<K, V> extends Map<K, V> {
    get(key: K): V | null;
    get(key: K): V | undefined;
}
