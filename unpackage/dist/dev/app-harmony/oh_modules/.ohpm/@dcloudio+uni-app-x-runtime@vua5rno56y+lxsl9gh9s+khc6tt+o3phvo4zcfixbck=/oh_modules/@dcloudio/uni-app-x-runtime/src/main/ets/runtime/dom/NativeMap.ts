/**
 * 模仿原生 Map，缺省值为 null
 */
export class NativeMap<K, V> extends Map<K, V> {
  get(key: K): V | null
  get(key: K): V | undefined
  get(key: K): V | null | undefined {
    const value = super.get(key)
    return value === undefined ? null : value
  }
}
