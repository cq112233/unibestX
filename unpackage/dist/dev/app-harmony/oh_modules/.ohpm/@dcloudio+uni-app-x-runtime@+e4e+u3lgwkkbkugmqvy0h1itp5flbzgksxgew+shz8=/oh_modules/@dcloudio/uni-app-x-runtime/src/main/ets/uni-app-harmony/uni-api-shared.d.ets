interface UniProvider {
    id: string;
    description: string;
}
declare function getUniProvider<T extends UniProvider>(service: string, providerName: String): T | null;
declare function getUniProviders(service: string): UniProvider[];
declare function registerUniProvider<T extends UniProvider>(service: string, providerName: string, provider: T): void;
type FormatArgsValueType = Function | string | number | boolean;
interface AsyncApiResult {
    errMsg: string;
}
interface AsyncApiSuccessResult extends AsyncApiResult {
}
interface ApiError {
    errMsg?: string | null;
    errCode?: number | null;
}
interface ApiExecutor<K> {
    resolve: (res?: K | void) => void;
    reject: (errMsg?: string, errRes?: ApiError) => void;
}
interface ProtocolOptions {
    name?: string | null;
    type?: string | null;
    required?: boolean | null;
    validator?: (value: Object) => boolean | undefined | string;
}
interface ApiOptions<T> {
    beforeInvoke?: (args: Object) => boolean | void | string;
    beforeAll?: (res: Object) => void;
    beforeSuccess?: (res: Object, args: T) => void;
    formatArgs?: Map<string, FormatArgsValueType>;
}
interface AsyncMethodOptionLike {
    success?: Function | null;
}
declare function defineAsyncApi<T extends AsyncMethodOptionLike, K>(name: string, fn: (options: T, res: ApiExecutor<K>) => void, protocol?: Map<string, ProtocolOptions> | null, options?: ApiOptions<T> | null): Function;
declare function defineTaskApi<T, K, TASK>(name: string, fn: (options: T, res: ApiExecutor<K>) => TASK, protocol: Map<string, ProtocolOptions>, options: ApiOptions<T>): Object;
declare function defineSyncApi<K>(name: string, fn: Function, protocol?: Map<string, ProtocolOptions> | null, options?: ApiOptions<Object> | null): (...args: Object[]) => K;
declare function defineOnApi<T>(name: string, fn: () => void, options?: ApiOptions<T> | null): Function;
declare function defineOffApi<T>(name: string, fn: () => void, options?: ApiOptions<T> | null): Function;
export { UniProvider as UniProvider, getUniProvider as getUniProvider, getUniProviders as getUniProviders, registerUniProvider as registerUniProvider };
export { AsyncApiSuccessResult as AsyncApiSuccessResult };
export { AsyncApiResult as AsyncApiResult };
export { ApiError as ApiError };
export { ApiExecutor as ApiExecutor };
export { ProtocolOptions as ProtocolOptions };
export { ApiOptions as ApiOptions };
export { defineAsyncApi as defineAsyncApi };
export { defineTaskApi as defineTaskApi };
export { defineSyncApi as defineSyncApi };
export { defineOnApi as defineOnApi };
export { defineOffApi as defineOffApi };
