export declare function arrayPop<T>(array: T[]): T | null;
export declare function arrayShift<T>(array: T[]): T | null;
export declare function arrayFind<T>(array: T[], predicate: (element: T, index: number, arr: T[]) => boolean): T | null;
export declare function arrayCopyWithin<T>(array: T[], target: number, start?: number | null, end?: number | null): T[];
export declare function arrayFill<T>(array: T[], value: T, start?: number | null, end?: number | null): T[];
