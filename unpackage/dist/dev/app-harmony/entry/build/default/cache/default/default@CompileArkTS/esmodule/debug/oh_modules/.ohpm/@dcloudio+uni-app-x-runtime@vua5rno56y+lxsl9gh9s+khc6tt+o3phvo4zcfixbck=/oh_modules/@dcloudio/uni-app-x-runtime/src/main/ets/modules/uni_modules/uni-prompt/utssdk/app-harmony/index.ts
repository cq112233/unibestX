import { UTSObject, defineAsyncApi, UTSHarmony } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import type { IUniError, string, ProtocolOptions, ApiOptions, ApiExecutor } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import deviceInfo from "@ohos:deviceInfo";
import type { BusinessError } from "@ohos:base";
import type promptAction from "@ohos:promptAction";
import type { PromptAction } from "@ohos:arkui.UIContext";
type PromptErrorCode = 1 | 1001;
interface IPromptError extends IUniError {
    errCode: PromptErrorCode;
}
class ShowToastSuccess extends UTSObject {
}
type ShowToastFail = IPromptError;
type ShowToastSuccessCallback = (res: ShowToastSuccess) => void;
type ShowToastFailCallback = (res: ShowToastFail) => void;
type ShowToastCompleteCallback = (res: Object) => void;
type Icon = "success" | "error" | "fail" | "exception" | "loading" | "none";
type ShowToastPosition = "top" | "center" | "bottom";
class ShowToastOptions extends UTSObject {
    title!: string;
    icon: Icon | null = null;
    image: string.ImageURIString | null = null;
    mask: boolean | null = null;
    duration: number | null = null;
    position: ShowToastPosition | null = null;
    success: ShowToastSuccessCallback | null = null;
    fail: ShowToastFailCallback | null = null;
    complete: ShowToastCompleteCallback | null = null;
}
type ShowToast = (options: ShowToastOptions) => void;
type HideToast = () => void;
const API_SHOW_TOAST = 'showToast';
const ShowToastProtocol = new Map<string, ProtocolOptions>([
    [
        'title',
        {
            type: 'string',
            required: true
        }
    ],
    [
        'duration',
        {
            type: 'number'
        }
    ]
]);
const ShowToastApiOptions: ApiOptions<ShowToastOptions> = {
    formatArgs: new Map<string, Function | string | number>([
        [
            "title",
            ""
        ],
        [
            "duration",
            1500
        ]
    ])
};
const API_HIDE_TOAST = 'hideToast';
let openToastPromiseTimer: number | null = null;
let openToastPromise: Promise<number> | null = null;
const showToast: ShowToast = defineAsyncApi<ShowToastOptions, ShowToastSuccess>(API_SHOW_TOAST, (options: ShowToastOptions, res: ApiExecutor<ShowToastSuccess>) => {
    try {
        const showToastOptions: promptAction.ShowToastOptions = {
            message: options.title,
            duration: options.duration == null ? undefined : options.duration,
            alignment: Alignment.Center
        };
        if (options.position) {
            switch (options.position) {
                case 'top':
                    showToastOptions.alignment = Alignment.Top;
                    break;
                case 'bottom':
                    showToastOptions.alignment = Alignment.Bottom;
                    break;
            }
        }
        const window = UTSHarmony.getCurrentWindow();
        const promptActionIns = window.getUIContext().getPromptAction() as PromptAction;
        if (deviceInfo.sdkApiVersion >= 18) {
            if (openToastPromiseTimer != null) {
                clearTimeout(openToastPromiseTimer);
                openToastPromiseTimer = null;
            }
            openToastPromise = promptActionIns.openToast(showToastOptions).then((id) => {
                res.resolve({} as ShowToastSuccess);
                return id;
            }).catch((err: BusinessError) => {
                res.reject(err.message);
                return 0;
            });
            openToastPromiseTimer = setTimeout(() => {
                openToastPromiseTimer = null;
                openToastPromise = null;
            }, showToastOptions.duration ?? 1500);
        }
        else {
            promptActionIns.showToast(showToastOptions);
            res.resolve({} as ShowToastSuccess);
        }
    }
    catch (error) {
        let message = (error as BusinessError).message;
        res.reject(message);
    }
}, ShowToastProtocol, ShowToastApiOptions) as ShowToast;
const hideToast: HideToast = defineAsyncApi(API_HIDE_TOAST, (_, res: ApiExecutor<Object>) => {
    if (deviceInfo.sdkApiVersion >= 18) {
        const window = UTSHarmony.getCurrentWindow();
        const promptActionIns = window.getUIContext().getPromptAction() as PromptAction;
        if (openToastPromiseTimer != null) {
            clearTimeout(openToastPromiseTimer);
            openToastPromiseTimer = null;
        }
        openToastPromise?.then((id) => {
            promptActionIns.closeToast(id);
        }).finally(() => {
            openToastPromise = null;
        });
    }
    res.resolve();
}) as HideToast;
export { showToast as showToast, hideToast as hideToast };
export { ShowToastOptions as ShowToastOptions, ShowToastSuccess as ShowToastSuccess };
export type { HideToast as HideToast, IPromptError as IPromptError, Icon as Icon, PromptErrorCode as PromptErrorCode, ShowToast as ShowToast, ShowToastCompleteCallback as ShowToastCompleteCallback, ShowToastFail as ShowToastFail, ShowToastFailCallback as ShowToastFailCallback, ShowToastPosition as ShowToastPosition, ShowToastSuccessCallback as ShowToastSuccessCallback };
