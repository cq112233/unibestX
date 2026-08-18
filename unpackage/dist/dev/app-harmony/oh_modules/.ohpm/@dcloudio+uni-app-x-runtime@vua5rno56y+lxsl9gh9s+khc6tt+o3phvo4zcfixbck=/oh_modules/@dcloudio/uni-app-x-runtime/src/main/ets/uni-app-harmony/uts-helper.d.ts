export declare function resolveInOperator<T = ESObject>(obj: ESObject, key: string): obj is T;
export interface IJSONStringify {
}
interface IObjectHelper {
    constructor: Function;
}
type NoInfer<T> = T & {};
export type IUTSDefaultGenericParent = NoInfer<IObjectHelper | null>;
export {};
