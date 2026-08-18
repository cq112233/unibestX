import buffer from "@ohos:buffer";
import { defineSyncApi } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import type { ProtocolOptions } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
type Base64ToArrayBuffer = (base64: string) => ArrayBuffer;
const API_BASE64_TO_ARRAY_BUFFER = 'base64ToArrayBuffer';
const Base64ToArrayBufferProtocol = new Map<string, ProtocolOptions>([
    [
        'base64',
        {
            type: 'string',
            required: true
        }
    ]
]);
const base64ToArrayBuffer: Base64ToArrayBuffer = defineSyncApi<ArrayBuffer>(API_BASE64_TO_ARRAY_BUFFER, (base64: string): ArrayBuffer => {
    return buffer.from(base64, 'base64').buffer;
}, Base64ToArrayBufferProtocol) as Base64ToArrayBuffer;
export type { Base64ToArrayBuffer as Base64ToArrayBuffer };
export { base64ToArrayBuffer as base64ToArrayBuffer };
