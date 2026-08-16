export function arrayPop<T>(array: T[]): T | null {
    if (array.length === 0) {
        return null;
    }
    return array.pop() as T;
}
export function arrayShift<T>(array: T[]): T | null {
    if (array.length === 0) {
        return null;
    }
    return array.shift() as T;
}
export function arrayFind<T>(array: T[], predicate: (element: T, index: number, arr: T[]) => boolean): T | null {
    const index = array.findIndex(predicate);
    if (index < 0) {
        return null;
    }
    return array[index] as T;
}
export function arrayCopyWithin<T>(array: T[], target: number, start?: number | null, end?: number | null): T[] {
    if (start == null) {
        start = 0;
    }
    if (end == null) {
        end = array.length;
    }
    return array.copyWithin(target, start, end);
}
export function arrayFill<T>(array: T[], value: T, start?: number | null, end?: number | null): T[] {
    if (start == null) {
        start = 0;
    }
    if (end == null) {
        end = array.length;
    }
    return array.fill(value, start, end);
}
