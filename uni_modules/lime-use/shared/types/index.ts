// @ts-nocheck
export type MaybeRef<T = any> = T | Ref<T>
export type MaybeRefOrGetter<T = any> = MaybeRef<T> | (() => T)