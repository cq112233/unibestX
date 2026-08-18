import { UniPage, ExitFullscreenOptions, UniElement as IUniElement, UniPageOnRenderChangeCallback, UniPageOnLayoutChangeCallback, TakeSnapshotOptions } from "@dcloudio/uni-app-x/types/native";
import { UniElement, UniPageBody as IUniPageBody } from "@dcloudio/uni-app-x/types/native";
import { ISafeAreaInsets, Unknown, UTSJSONObject } from "./helper";
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
    onLayoutChange(callback: UniPageOnLayoutChangeCallback): number;
    offLayoutChange(id: number): void;
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
    __$$getSystemDialogPages(): UniPage[];
    getElementById(id: string): UniElement | null;
    querySelector(selector: string): IUniElement | null;
    querySelectorAll(selector: string): IUniElement[] | null;
    /**
     * @internal
     */
    getNodeById<T extends IUniElement = IUniElement>(id: string): T | null;
    getAndroidView(): Unknown;
    getIOSView(): Unknown;
    getHTMLElement(): UniElement | null;
    get pageBody(): IUniPageBody;
    get safeAreaInsets(): ISafeAreaInsets;
    exitFullscreen(options?: ExitFullscreenOptions | null): void;
    get fullscreenElement(): UniElement | null;
    getAndroidActivity(): object;
    createElement(tagName: string): IUniElement;
    onRenderChangeIndex: number;
    onRenderChangeCallbacks: Map<number, UniPageOnRenderChangeCallback>;
    /**
     * 监听页面渲染变化更新事件
     * 前端封装为页面的生命周期 onLayout
     */
    onRenderChange(callback: UniPageOnRenderChangeCallback): number;
    /**
     * 取消监听页面渲染变化更新事件
     */
    offRenderChange(id: number): void;
    private onTouchStartIndex;
    private onTouchStartCallbacks;
    onTouchStart(callback: () => void): number;
    offTouchStart(id: number): void;
    /**
     * @internal
     */
    triggerTouchStart(): void;
    private onTouchEndIndex;
    private onTouchEndCallbacks;
    onTouchEnd(callback: () => void): number;
    offTouchEnd(id: number): void;
    /**
     * @internal
     */
    triggerTouchEnd(): void;
    takeSnapshot(options: TakeSnapshotOptions): void;
}
export declare class UniNormalPageImpl extends UniPageImpl {
}
export declare class UniDialogPageImpl extends UniPageImpl {
}
