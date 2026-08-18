export declare class TextEncoder {
    private encoder;
    constructor();
    encode(input: string): Uint8Array;
}
export declare class TextDecoder {
    private decoder;
    constructor();
    decode(input: ArrayBuffer | ArrayBufferView | DataView): string;
}
