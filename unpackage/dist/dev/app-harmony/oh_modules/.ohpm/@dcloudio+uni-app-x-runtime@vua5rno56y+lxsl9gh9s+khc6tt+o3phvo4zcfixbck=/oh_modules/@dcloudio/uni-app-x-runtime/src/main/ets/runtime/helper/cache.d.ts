export declare class Cache<K, V> {
    private cache;
    maxSize: number;
    constructor(maxSize?: number);
    has(key: K): boolean;
    get(key: K): V | undefined;
    set(key: K, value: V): void;
    delete(key: K): void;
    clear(): void;
    forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
}
