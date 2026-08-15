export function stringCodePointAt(str: string, pos: number): number | null {
    if (pos < 0 || pos >= str.length) {
        return null;
    }
    return str.codePointAt(pos) as number;
}
