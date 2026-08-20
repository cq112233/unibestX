export function resolveInOperator<T = ESObject>(obj: ESObject, key: string): obj is T {
    return key in obj;
}
export interface IJSONStringify {
}
interface IObjectHelper {
    constructor: Function;
}
type NoInfer<T> = T & {};
export type IUTSDefaultGenericParent = NoInfer<IObjectHelper | null>;
