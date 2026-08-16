import pasteboard from "@ohos:pasteboard";
import type { BusinessError } from "@ohos:base";
import { UTSObject, UTSHarmony, defineAsyncApi } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import type { IUniError, ApiOptions, ProtocolOptions, ApiExecutor } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
type ClipBoardErrorCode = 102;
interface IClipBoardError extends IUniError {
    errCode: ClipBoardErrorCode;
}
type SetClipboardData = (options: SetClipboardDataOptions) => void;
class SetClipboardDataSuccess extends UTSObject {
}
type SetClipboardDataSuccessCallback = (result: SetClipboardDataSuccess) => void;
type SetClipboardDataFail = IClipBoardError;
type SetClipboardDataFailCallback = (result: SetClipboardDataFail) => void;
type SetClipboardDataComplete = Object;
type SetClipboardDataCompleteCallback = (result: SetClipboardDataComplete) => void;
class SetClipboardDataOptions extends UTSObject {
    data!: string;
    showToast: boolean | null = null;
    success: SetClipboardDataSuccessCallback | null = null;
    fail: SetClipboardDataFailCallback | null = null;
    complete: SetClipboardDataCompleteCallback | null = null;
}
type GetClipboardData = (options: GetClipboardDataOptions) => void;
class GetClipboardDataSuccess extends UTSObject {
    data!: string;
}
type GetClipboardDataSuccessCallback = (result: GetClipboardDataSuccess) => void;
type GetClipboardDataFail = IClipBoardError;
type GetClipboardDataFailCallback = (result: GetClipboardDataFail) => void;
type GetClipboardDataComplete = Object;
type GetClipboardDataCompleteCallback = (result: GetClipboardDataComplete) => void;
class GetClipboardDataOptions extends UTSObject {
    success: GetClipboardDataSuccessCallback | null = null;
    fail: GetClipboardDataFailCallback | null = null;
    complete: GetClipboardDataCompleteCallback | null = null;
}
const API_GET_CLIPBOARD_DATA = 'getClipboardData';
const API_SET_CLIPBOARD_DATA = 'setClipboardData';
const SetClipboardDataApiOptions: ApiOptions<SetClipboardDataOptions> = {
    formatArgs: new Map<string, boolean>([
        [
            'showToast',
            true
        ]
    ])
};
const SetClipboardDataProtocol = new Map<string, ProtocolOptions>([
    [
        'data',
        {
            type: 'string',
            required: true
        }
    ],
    [
        'showToast',
        {
            type: 'boolean'
        }
    ]
]);
class ClipboardCallbackOptions extends UTSObject {
    data!: string;
    result!: 'success' | 'fail';
}
type ClipboardCallback = (res: ClipboardCallbackOptions) => void;
function getString(callback: ClipboardCallback) {
    const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
    UTSHarmony.requestSystemPermission([
        'ohos.permission.READ_PASTEBOARD'
    ], (allRight: boolean) => {
        if (allRight) {
            const pasteData = systemPasteboard.getDataSync();
            try {
                const text: string = pasteData.getPrimaryText();
                callback({
                    data: text,
                    result: 'success'
                } as ClipboardCallbackOptions);
            }
            catch (err) {
                callback({
                    data: (err as BusinessError<void>).message,
                    result: 'fail'
                } as ClipboardCallbackOptions);
            }
        }
        else {
            callback({
                data: 'Permission denied',
                result: 'fail'
            } as ClipboardCallbackOptions);
        }
    }, () => {
        callback({
            data: 'Permission denied',
            result: 'fail'
        } as ClipboardCallbackOptions);
    });
}
function setString(data: string): ClipboardCallbackOptions {
    const pasteData: pasteboard.PasteData = pasteboard.createData(pasteboard.MIMETYPE_TEXT_PLAIN, data);
    const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
    try {
        systemPasteboard.setDataSync(pasteData);
        return {
            data,
            result: 'success'
        } as ClipboardCallbackOptions;
    }
    catch (err) {
        return {
            data: (err as BusinessError<void>).message,
            result: 'fail'
        } as ClipboardCallbackOptions;
    }
}
const getClipboardData: GetClipboardData = defineAsyncApi<GetClipboardDataOptions, GetClipboardDataSuccess>(API_GET_CLIPBOARD_DATA, (_: GetClipboardDataOptions, res: ApiExecutor<GetClipboardDataSuccess>) => {
    getString((ret: ClipboardCallbackOptions) => {
        if (ret.result === 'success') {
            res.resolve({
                data: ret.data
            } as GetClipboardDataSuccess);
        }
        else {
            res.reject('getClipboardData:fail ' + ret.data);
        }
    });
}) as GetClipboardData;
const setClipboardData: SetClipboardData = defineAsyncApi<SetClipboardDataOptions, SetClipboardDataSuccess>(API_SET_CLIPBOARD_DATA, (options: SetClipboardDataOptions, res: ApiExecutor<SetClipboardDataSuccess>) => {
    const ret = setString(options.data);
    if (ret.result === 'success') {
        res.resolve();
    }
    else {
        res.reject('setClipboardData:fail ' + ret.data);
    }
}, SetClipboardDataProtocol, SetClipboardDataApiOptions) as SetClipboardData;
export { GetClipboardDataOptions as GetClipboardDataOptions, GetClipboardDataSuccess as GetClipboardDataSuccess, SetClipboardDataOptions as SetClipboardDataOptions, SetClipboardDataSuccess as SetClipboardDataSuccess };
export type { ClipBoardErrorCode as ClipBoardErrorCode, GetClipboardData as GetClipboardData, GetClipboardDataComplete as GetClipboardDataComplete, GetClipboardDataCompleteCallback as GetClipboardDataCompleteCallback, GetClipboardDataFail as GetClipboardDataFail, GetClipboardDataFailCallback as GetClipboardDataFailCallback, GetClipboardDataSuccessCallback as GetClipboardDataSuccessCallback, IClipBoardError as IClipBoardError, SetClipboardData as SetClipboardData, SetClipboardDataComplete as SetClipboardDataComplete, SetClipboardDataCompleteCallback as SetClipboardDataCompleteCallback, SetClipboardDataFail as SetClipboardDataFail, SetClipboardDataFailCallback as SetClipboardDataFailCallback, SetClipboardDataSuccessCallback as SetClipboardDataSuccessCallback };
export { getClipboardData as getClipboardData };
export { setClipboardData as setClipboardData };
