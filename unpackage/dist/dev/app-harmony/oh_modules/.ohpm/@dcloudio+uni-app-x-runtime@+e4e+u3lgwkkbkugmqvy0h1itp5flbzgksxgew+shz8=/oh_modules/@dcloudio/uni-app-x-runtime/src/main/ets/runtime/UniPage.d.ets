import { UniPage, ExitFullscreenOptions, UniElement as IUniElement, UniPageBody as IUniPageBody, TakeSnapshotOptions } from "@dcloudio/uni-app-x/types/native";
import { Unknown, UTSJSONObject } from "./helper";
import { ISafeAreaInsets } from "./window";
import { UniNativePageImpl } from "./dom/UniNativePage";
import { UniNativeDialogPageImpl } from "./dom/UniNativeDialogPage";
export declare class UniPageImpl implements UniPage {
    route: string;
    options: UTSJSONObject;
    vm: Unknown;
    $vm: Unknown;
    _nativePageId: string;
    __nativePage: UniNativePageImpl | null;
    /**
     * @internal
     */
    $fontFamilySet: Set<string>;
    constructor();
    innerWidth: number;
    innerHeight: number;
    get __nativePageId(): string;
    set __nativePageId(value: string);
    get width(): number;
    get height(): number;
    get statusBarHeight(): number;
    getNativePage(): UniNativePageImpl | UniNativeDialogPageImpl;
    getPageStyle(): UTSJSONObject;
    $getPageStyle(): UTSJSONObject;
    setPageStyle(style: UTSJSONObject): void;
    $setPageStyle(style: UTSJSONObject): void;
    getParentPage(): UniPage | null;
    $dialogPages: UniPage[];
    getDialogPages(): UniPage[];
    $systemDialogPages: UniPage[];
    $getSystemDialogPages(): UniPage[];
    getElementById(id: string): IUniElement | null;
    querySelector(selector: string): IUniElement | null;
    querySelectorAll(selector: string): IUniElement[] | null;
    getAndroidView(): Unknown;
    getIOSView(): Unknown;
    getHTMLElement(): IUniElement | null;
    get pageBody(): IUniPageBody;
    get safeAreaInsets(): ISafeAreaInsets;
    exitFullscreen(options?: ExitFullscreenOptions | null): void;
    get fullscreenElement(): IUniElement | null;
    getAndroidActivity(): object;
    createElement(tagName: string): IUniElement;
    /**
     * @internal
     */
    getNodeById<T extends IUniElement = IUniElement>(id: string): T | null;
    takeSnapshot(options: TakeSnapshotOptions): void;
}
export declare class UniNormalPageImpl extends UniPageImpl {
}
export declare class UniDialogPageImpl extends UniPageImpl {
}
