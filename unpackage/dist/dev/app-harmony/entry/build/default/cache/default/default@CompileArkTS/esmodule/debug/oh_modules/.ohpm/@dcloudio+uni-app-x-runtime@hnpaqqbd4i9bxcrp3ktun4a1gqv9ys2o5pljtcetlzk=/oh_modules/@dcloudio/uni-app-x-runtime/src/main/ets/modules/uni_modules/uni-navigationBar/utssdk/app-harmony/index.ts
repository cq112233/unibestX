import { UTSObject, defineAsyncApi } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import type { IUniError, string, AsyncApiSuccessResult, AsyncApiResult, ProtocolOptions, ApiExecutor, UniPageImpl } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import { navigator } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
type SetNavigationBarColorErrorCode = 4;
interface SetNavigationBarColorFail extends IUniError {
    errCode: SetNavigationBarColorErrorCode;
}
class SetNavigationBarColorOptions extends UTSObject {
    frontColor!: '#ffffff' | '#000000';
    backgroundColor!: string.ColorString;
    success: SetNavigationBarColorSuccessCallback | null = null;
    fail: SetNavigationBarColorFailCallback | null = null;
    complete: SetNavigationBarColorCompleteCallback | null = null;
}
type SetNavigationBarColorSuccess = AsyncApiSuccessResult;
type SetNavigationBarColorSuccessCallback = (result: SetNavigationBarColorSuccess) => void;
type SetNavigationBarColorFailCallback = (error: SetNavigationBarColorFail) => void;
type SetNavigationBarColorComplete = AsyncApiResult;
type SetNavigationBarColorCompleteCallback = (res: SetNavigationBarColorComplete) => void;
type SetNavigationBarColor = (options: SetNavigationBarColorOptions) => void;
type SetNavigationBarTitleErrorCode = 4;
interface SetNavigationBarTitleFail extends IUniError {
    errCode: SetNavigationBarTitleErrorCode;
}
class SetNavigationBarTitleOptions extends UTSObject {
    title!: string;
    success: SetNavigationBarTitleSuccessCallback | null = null;
    fail: SetNavigationBarTitleFailCallback | null = null;
    complete: SetNavigationBarTitleCompleteCallback | null = null;
}
type SetNavigationBarTitleSuccess = AsyncApiSuccessResult;
type SetNavigationBarTitleSuccessCallback = (result: SetNavigationBarTitleSuccess) => void;
type SetNavigationBarTitleFailCallback = (error: SetNavigationBarTitleFail) => void;
type SetNavigationBarTitleComplete = AsyncApiResult;
type SetNavigationBarTitleCompleteCallback = (res: SetNavigationBarTitleComplete) => void;
type SetNavigationBarTitle = (options: SetNavigationBarTitleOptions) => void;
type ShowNavigationBarLoadingSuccess = AsyncApiSuccessResult;
type ShowNavigationBarLoadingSuccessCallback = (result: ShowNavigationBarLoadingSuccess) => void;
interface ShowNavigationBarLoadingFail extends IUniError {
}
type ShowNavigationBarLoadingFailCallback = (error: ShowNavigationBarLoadingFail) => void;
class ShowNavigationBarLoadingOptions extends UTSObject {
    success: ShowNavigationBarLoadingSuccessCallback | null = null;
    fail: ShowNavigationBarLoadingFailCallback | null = null;
    complete: (() => void) | null = null;
}
type ShowNavigationBarLoading = (options?: ShowNavigationBarLoadingOptions | null) => void;
type HideNavigationBarLoadingSuccess = AsyncApiSuccessResult;
type HideNavigationBarLoadingSuccessCallback = (result: HideNavigationBarLoadingSuccess) => void;
interface HideNavigationBarLoadingFail extends IUniError {
}
type HideNavigationBarLoadingFailCallback = (error: HideNavigationBarLoadingFail) => void;
class HideNavigationBarLoadingOptions extends UTSObject {
    success: HideNavigationBarLoadingSuccessCallback | null = null;
    fail: HideNavigationBarLoadingFailCallback | null = null;
    complete: (() => void) | null = null;
}
type HideNavigationBarLoading = (options?: HideNavigationBarLoadingOptions | null) => void;
const FRONT_COLORS = [
    '#ffffff',
    '#000000'
];
const API_SET_NAVIGATION_BAR_COLOR = 'setNavigationBarColor';
const SetNavigationBarColorProtocol = new Map<string, ProtocolOptions>([
    [
        'frontColor',
        {
            type: 'string',
            required: true,
            validator(frontColor: Object) {
                if (FRONT_COLORS.indexOf(frontColor as string) === -1) {
                    return `invalid frontColor "${frontColor}"`;
                }
                return;
            }
        }
    ],
    [
        'backgroundColor',
        {
            type: 'string',
            required: true
        }
    ]
]);
const API_SET_NAVIGATION_BAR_TITLE = 'setNavigationBarTitle';
const SetNavigationBarTitleProtocol = new Map<string, ProtocolOptions>([
    [
        'title',
        {
            type: 'string',
            required: true
        }
    ]
]);
interface TitleNView {
    titleText: string;
    autoBackButton?: boolean;
    loading?: boolean;
}
interface BackButton {
    color?: string;
}
interface PlusWebviewWebviewTitleNViewStyles {
    backgroundColor?: string;
    titleColor?: string;
    titleNView?: TitleNView;
    backButton?: BackButton;
}
interface Webview {
    getStyle: () => PlusWebviewWebviewTitleNViewStyles | null;
    setStyle: (style: PlusWebviewWebviewTitleNViewStyles) => void;
}
interface $page {
    statusBarStyle: 'dark' | 'light';
}
interface Page {
    $getAppWebview: () => Webview | null;
    $page: $page;
}
const getWebview = (page: Page): Webview | null => {
    const webview = page.$getAppWebview();
    return webview;
};
const setNavigationBarColor: SetNavigationBarColor = defineAsyncApi<SetNavigationBarColorOptions, SetNavigationBarColorSuccess>(API_SET_NAVIGATION_BAR_COLOR, (options: SetNavigationBarColorOptions, executor: ApiExecutor<SetNavigationBarColorSuccess>): void => {
    const frontColor = options.frontColor, backgroundColor = options.backgroundColor;
    const pages = globalThis.getCurrentPages() as UniPageImpl[];
    const page = pages[pages.length - 1];
    if (!page) {
        executor.reject(`getCurrentPages is empty`);
        return;
    }
    const statusBarStyle = frontColor === '#000000' ? 'dark' : 'light';
    try {
        navigator.setStatusBarStyle(statusBarStyle);
    }
    catch (error) { }
    const appPage: any = (page.vm as any).$nativePage;
    appPage!.updateStyle(new Map<string, Object | null>([
        [
            'navigationBarTextStyle',
            frontColor == '#000000' ? 'black' : 'white'
        ],
        [
            'navigationBarBackgroundColor',
            backgroundColor
        ]
    ]));
    executor.resolve();
}, SetNavigationBarColorProtocol) as SetNavigationBarColor;
const setNavigationBarTitle: SetNavigationBarTitle = defineAsyncApi<SetNavigationBarTitleOptions, SetNavigationBarTitleSuccess>(API_SET_NAVIGATION_BAR_TITLE, (args: SetNavigationBarTitleOptions, executor: ApiExecutor<SetNavigationBarTitleSuccess>): void => {
    const pages = globalThis.getCurrentPages() as Page[];
    const page = pages[pages.length - 1];
    if (!page) {
        executor.reject(`getCurrentPages is empty`);
        return;
    }
    const webview = getWebview(page);
    if (webview) {
        const style = webview.getStyle();
        if (style && style.titleNView) {
            webview.setStyle({
                titleNView: {
                    titleText: args.title
                } as TitleNView
            } as PlusWebviewWebviewTitleNViewStyles);
        }
        executor.resolve();
    }
    else {
        executor.reject();
    }
}, SetNavigationBarTitleProtocol) as SetNavigationBarTitle;
const showNavigationBarLoading: ShowNavigationBarLoading = defineAsyncApi<ShowNavigationBarLoadingOptions, ShowNavigationBarLoadingSuccess>(API_SET_NAVIGATION_BAR_TITLE, (options: ShowNavigationBarLoadingOptions, executor: ApiExecutor<ShowNavigationBarLoadingSuccess>): void => {
    const pages = globalThis.getCurrentPages() as UniPageImpl[];
    const page = pages[pages.length - 1];
    if (!page) {
        executor.reject(`getCurrentPages is empty`);
        return;
    }
    const appPage: any = (page.vm as any).$nativePage;
    appPage!.updateStyle(new Map<string, Object | null>([
        [
            'navigationBarLoading',
            true
        ]
    ]));
    executor.resolve();
}) as ShowNavigationBarLoading;
const hideNavigationBarLoading: HideNavigationBarLoading = defineAsyncApi<HideNavigationBarLoadingOptions, HideNavigationBarLoadingSuccess>(API_SET_NAVIGATION_BAR_TITLE, (args: HideNavigationBarLoadingOptions, executor: ApiExecutor<HideNavigationBarLoadingSuccess>): void => {
    const pages = globalThis.getCurrentPages() as UniPageImpl[];
    const page = pages[pages.length - 1];
    if (!page) {
        return executor.reject(`getCurrentPages is empty`);
    }
    const appPage: any = (page.vm as any).$nativePage;
    appPage!.updateStyle(new Map<string, Object | null>([
        [
            'navigationBarLoading',
            false
        ]
    ]));
    executor.resolve();
}) as HideNavigationBarLoading;
export { HideNavigationBarLoadingOptions as HideNavigationBarLoadingOptions, SetNavigationBarColorOptions as SetNavigationBarColorOptions, SetNavigationBarTitleOptions as SetNavigationBarTitleOptions, ShowNavigationBarLoadingOptions as ShowNavigationBarLoadingOptions };
export type { HideNavigationBarLoading as HideNavigationBarLoading, HideNavigationBarLoadingFail as HideNavigationBarLoadingFail, HideNavigationBarLoadingFailCallback as HideNavigationBarLoadingFailCallback, HideNavigationBarLoadingSuccess as HideNavigationBarLoadingSuccess, HideNavigationBarLoadingSuccessCallback as HideNavigationBarLoadingSuccessCallback, SetNavigationBarColor as SetNavigationBarColor, SetNavigationBarColorComplete as SetNavigationBarColorComplete, SetNavigationBarColorCompleteCallback as SetNavigationBarColorCompleteCallback, SetNavigationBarColorErrorCode as SetNavigationBarColorErrorCode, SetNavigationBarColorFail as SetNavigationBarColorFail, SetNavigationBarColorFailCallback as SetNavigationBarColorFailCallback, SetNavigationBarColorSuccess as SetNavigationBarColorSuccess, SetNavigationBarColorSuccessCallback as SetNavigationBarColorSuccessCallback, SetNavigationBarTitle as SetNavigationBarTitle, SetNavigationBarTitleComplete as SetNavigationBarTitleComplete, SetNavigationBarTitleCompleteCallback as SetNavigationBarTitleCompleteCallback, SetNavigationBarTitleErrorCode as SetNavigationBarTitleErrorCode, SetNavigationBarTitleFail as SetNavigationBarTitleFail, SetNavigationBarTitleFailCallback as SetNavigationBarTitleFailCallback, SetNavigationBarTitleSuccess as SetNavigationBarTitleSuccess, SetNavigationBarTitleSuccessCallback as SetNavigationBarTitleSuccessCallback, ShowNavigationBarLoading as ShowNavigationBarLoading, ShowNavigationBarLoadingFail as ShowNavigationBarLoadingFail, ShowNavigationBarLoadingFailCallback as ShowNavigationBarLoadingFailCallback, ShowNavigationBarLoadingSuccess as ShowNavigationBarLoadingSuccess, ShowNavigationBarLoadingSuccessCallback as ShowNavigationBarLoadingSuccessCallback };
export { setNavigationBarColor as setNavigationBarColor };
export { setNavigationBarTitle as setNavigationBarTitle };
export { showNavigationBarLoading as showNavigationBarLoading };
export { hideNavigationBarLoading as hideNavigationBarLoading };
