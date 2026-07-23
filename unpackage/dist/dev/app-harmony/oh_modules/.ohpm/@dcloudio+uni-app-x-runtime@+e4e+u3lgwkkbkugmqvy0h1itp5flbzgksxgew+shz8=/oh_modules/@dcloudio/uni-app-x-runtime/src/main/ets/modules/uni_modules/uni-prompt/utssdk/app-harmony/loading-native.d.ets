import { UIContext as UIContext } from "@ohos.arkui.UIContext";
export interface ShowLoadingOptions {
    title?: string;
    mask?: boolean;
}
export declare function showLoading(uiContext: UIContext, options: ShowLoadingOptions): void;
export declare function hideLoading(uiContext: UIContext): void;
