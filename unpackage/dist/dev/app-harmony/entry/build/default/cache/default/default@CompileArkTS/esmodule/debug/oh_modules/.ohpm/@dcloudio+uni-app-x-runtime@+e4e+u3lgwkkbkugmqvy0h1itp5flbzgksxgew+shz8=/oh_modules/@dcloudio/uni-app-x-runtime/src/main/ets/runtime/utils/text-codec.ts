import util from "@ohos:util";
export class TextEncoder {
    private encoder: util.TextEncoder;
    constructor() {
        // TODO encoding
        this.encoder = new util.TextEncoder();
    }
    encode(input: string): Uint8Array {
        if (typeof input === 'string' && input.length === 0) {
            return new Uint8Array(0);
        }
        return this.encoder.encodeInto(input);
    }
}
export class TextDecoder {
    private decoder: util.TextDecoder;
    constructor() {
        // TODO encoding
        this.decoder = new util.TextDecoder();
    }
    decode(input: ArrayBuffer | ArrayBufferView | DataView): string {
        if (input instanceof ArrayBuffer) {
            return this.decoder.decodeToString(new Uint8Array(input));
        }
        if (input instanceof Uint8Array) {
            if (input.byteLength === 0) {
                return '';
            }
            return this.decoder.decodeToString(input);
        }
        return this.decoder.decodeToString(new Uint8Array(input.buffer));
    }
}
