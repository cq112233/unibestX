export function resolveInOperator<T = ESObject>(obj: ESObject, key: string): obj is T {
  return key in obj
}

export interface IJSONStringify {}

interface IObjectHelper {
  constructor: Function
}

type NoInfer<T> = T & {};

export type IUTSDefaultGenericParent = NoInfer<IObjectHelper | null>


// test IUTSDefaultGenericParent
// type Callback1<T extends IUTSDefaultGenericParent> = (first: T, ...args: number[]) => T;
//
// function sum2<T extends IUTSDefaultGenericParent>(callback: Callback1<T>, first: T, ...theArgs: number[]): T {
//   return callback(first, ...theArgs);
// }
//
// const b = sum2((first, a, b, c): string => first + a + b + c, "n", 1, 2, 3);
//
// let x!: IUTSDefaultGenericParent
// x = null
//
// function format(obj: Object | null) {
// }
//
// class X<T extends IUTSDefaultGenericParent> {
//   format(a: T) {
//     format(a)
//   }
// }