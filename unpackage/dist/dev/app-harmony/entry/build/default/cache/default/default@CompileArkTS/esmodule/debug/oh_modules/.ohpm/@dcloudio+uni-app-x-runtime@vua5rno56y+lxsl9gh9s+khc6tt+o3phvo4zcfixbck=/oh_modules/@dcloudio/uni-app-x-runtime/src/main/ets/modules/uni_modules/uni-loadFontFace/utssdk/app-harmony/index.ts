import { UTSObject, defineAsyncApi } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import type { IUniError, string, AsyncApiSuccessResult, AsyncApiResult, ProtocolOptions, ApiExecutor, ApiError } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import { getRealPath } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
class LoadFontFaceOptionDesc extends UTSObject {
    style: string | null = null;
    weight: string | null = null;
    variant: string | null = null;
}
type LoadFontFaceErrCode = 4 | 99 | 101 | 100001 | 100002 | 200001 | 300001 | 300002;
interface LoadFontFaceFail extends IUniError {
    errCode: LoadFontFaceErrCode;
}
class LoadFontFaceOptions extends UTSObject {
    global: boolean | null = null;
    family!: string;
    source!: string.FontURIString;
    desc: LoadFontFaceOptionDesc | null = null;
    success: LoadFontFaceSuccessCallback | null = null;
    fail: LoadFontFaceFailCallback | null = null;
    complete: LoadFontFaceCompleteCallback | null = null;
}
type LoadFontFaceSuccess = AsyncApiSuccessResult;
type LoadFontFaceSuccessCallback = (result: LoadFontFaceSuccess) => void;
type LoadFontFaceFailCallback = (error: LoadFontFaceFail) => void;
type LoadFontFaceComplete = AsyncApiResult;
type LoadFontFaceCompleteCallback = (res: LoadFontFaceComplete) => void;
type LoadFontFace = (options: LoadFontFaceOptions) => Promise<LoadFontFaceSuccess> | null;
const API_LOAD_FONT_FACE = 'loadFontFace';
const ApiLoadFontFaceProtocol = new Map<string, ProtocolOptions>([
    [
        'family',
        {
            type: 'string',
            required: true
        }
    ],
    [
        'source',
        {
            type: 'string',
            required: true
        }
    ],
    [
        'desc',
        {
            type: 'object'
        }
    ]
]);
function getFontSrc(source: string): string {
    if (source.startsWith(`url("`) || source.startsWith(`url('`)) {
        source = getRealPath(source.substring(5, source.length - 2)) as string;
    }
    else if (source.startsWith('url(')) {
        source = getRealPath(source.substring(4, source.length - 1)) as string;
    }
    else {
        source = getRealPath(source) as string;
    }
    return source;
}
interface MockUniNativeAppImpl {
    loadFontFace: (options: any) => void;
}
const loadFontFace: LoadFontFace = defineAsyncApi<LoadFontFaceOptions, LoadFontFaceSuccess>(API_LOAD_FONT_FACE, (options: LoadFontFaceOptions, exec: ApiExecutor<LoadFontFaceSuccess>) => {
    const src = getFontSrc(options.source);
    const loadFontFaceOptions: any = {
        family: options.family,
        source: src,
        success: () => {
            exec.resolve();
        },
        fail: (err: ApiError) => {
            exec.reject('', err);
        }
    };
    const app = globalThis.getUniApp() as MockUniNativeAppImpl;
    app.loadFontFace(loadFontFaceOptions);
}, ApiLoadFontFaceProtocol) as LoadFontFace;
export { LoadFontFaceOptionDesc as LoadFontFaceOptionDesc, LoadFontFaceOptions as LoadFontFaceOptions };
export type { LoadFontFace as LoadFontFace, LoadFontFaceComplete as LoadFontFaceComplete, LoadFontFaceCompleteCallback as LoadFontFaceCompleteCallback, LoadFontFaceErrCode as LoadFontFaceErrCode, LoadFontFaceFail as LoadFontFaceFail, LoadFontFaceFailCallback as LoadFontFaceFailCallback, LoadFontFaceSuccess as LoadFontFaceSuccess, LoadFontFaceSuccessCallback as LoadFontFaceSuccessCallback };
export { loadFontFace as loadFontFace };
