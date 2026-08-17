import { UniPage, ExitFullscreenOptions, UniElement as IUniElement, UniPageBody as IUniPageBody, TakeSnapshotSuccess, TakeSnapshotFail } from "@dcloudio/uni-app-x/types/native";
import { Unknown, UTSJSONObject } from "./helper";
import { ISafeAreaInsets } from "./window";
import { UniNativePageImpl } from "./dom/UniNativePage";
import { UniNativeDialogPageImpl } from "./dom/UniNativeDialogPage";
export interface TakeSnapshotOptionsForHarmony {
    /**
     * 截图导出类型，目前仅支持 'file' 保存到临时文件目录
     * @defaultValue "file"
     */
    type?: string | null;
    /**
     * 截图文件格式，目前仅支持 'png'
     * @defaultValue "png"
     */
    format?: string | null;
    /**
     * 接口调用成功的回调函数
     */
    success?: ((res: TakeSnapshotSuccess) => void) | null;
    /**
     * 接口调用失败的回调函数
     */
    fail?: ((res: TakeSnapshotFail) => void) | null;
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?: ((res: ESObject) => void) | null;
}
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
    takeSnapshot(options: TakeSnapshotOptionsForHarmony): void;
}
export declare class UniNormalPageImpl extends UniPageImpl {
}
export declare class UniDialogPageImpl extends UniPageImpl {
}
