import buffer from '@ohos.buffer';
import { ProtocolOptions, defineSyncApi } from "@dcloudio/uni-app-framework";
type ArrayBufferToBase64 = (arrayBuffer: ArrayBuffer) => string;
const API_ARRAY_BUFFER_TO_BASE64 = 'arrayBufferToBase64';
const ArrayBufferToBase64Protocol = new Map<string, ProtocolOptions>([
    [
        'arrayBuffer',
        {
            type: 'arrayBuffer',
            required: true
        }
    ]
]);
const arrayBufferToBase64: ArrayBufferToBase64 = defineSyncApi<string>(API_ARRAY_BUFFER_TO_BASE64, (arrayBuffer: ArrayBuffer): string =>{
    return buffer.from(arrayBuffer).toString('base64');
}, ArrayBufferToBase64Protocol) as ArrayBufferToBase64;
export { ArrayBufferToBase64 as ArrayBufferToBase64 };
export { arrayBufferToBase64 as arrayBufferToBase64 };
