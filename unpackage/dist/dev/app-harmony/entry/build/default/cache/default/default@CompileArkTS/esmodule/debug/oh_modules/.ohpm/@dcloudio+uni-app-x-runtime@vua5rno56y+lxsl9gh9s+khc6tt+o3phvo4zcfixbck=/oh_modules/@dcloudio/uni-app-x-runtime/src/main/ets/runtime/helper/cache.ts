export class Cache<K, V> {
    private cache: Map<K, V> = new Map<K, V>();
    maxSize: number = 10000;
    constructor(maxSize: number = 10000) {
        this.maxSize = maxSize;
    }
    has(key: K): boolean {
        return this.cache.has(key);
    }
    get(key: K): V | undefined {
        return this.cache.get(key);
    }
    set(key: K, value: V): void {
        if (this.cache.size >= this.maxSize) {
            this.cache.delete(this.cache.keys().next().value);
        }
        this.cache.set(key, value);
    }
    delete(key: K): void {
        this.cache.delete(key);
    }
    clear(): void {
        this.cache.clear();
    }
    forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void {
        this.cache.forEach(callbackfn, thisArg);
    }
}
