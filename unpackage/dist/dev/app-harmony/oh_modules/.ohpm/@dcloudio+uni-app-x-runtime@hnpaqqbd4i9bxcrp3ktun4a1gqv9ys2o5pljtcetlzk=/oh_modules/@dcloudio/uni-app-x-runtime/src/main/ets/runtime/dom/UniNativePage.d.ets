import { INodeData, UniNativePage as IUniNativePage, NativeLoadFontFaceOptions, UniDocument, UniPageEvent, UniPageScrollEvent, UniPageBody as IUniPageBody, UniElement, ViewToTempFilePathSuccess, ViewToTempFilePathFail, ExitFullscreenOptions } from '@dcloudio/uni-app-x/types/native';
import { UniCallbackWrapper } from '../libs/dom';
import { AsyncCallback, UTSJSONObject } from '../helper';
import { UniNativeAppImpl } from '../UniNativeApp';
import { DialogPageController, PageContainer, AnimationController, PageStyle } from '../components/Page';
import { typeNode as typeNode } from "@ohos.arkui.node";
import { UniSafeAreaInsets } from '@dcloudio/uni-app-x/types/native';
import { UniNativeDialogPageImpl } from './UniNativeDialogPage';
import { UniNativePageImpl as IUniNativePageImpl } from './IUniNativePage';
import { UniScrollViewElementImpl } from '../libs/dom';
import type { UniPageImpl } from '../UniPage';
export declare const DefaultPageStyle: Map<string, string | number | boolean>;
export declare const pagesMap: Map<string, IUniNativePage>;
export declare const closingPagesMap: Map<string, IUniNativePage>;
export declare const pagesArray: IUniNativePage[];
export declare const homeDialogPages: Map<UniNativeDialogPageImpl, Map<string, Object>>;
interface ViewToTempFilePathOptionsArea {
    x: number;
    y: number;
    width?: number;
    height?: number;
}
interface ViewToTempFilePathOptionsForHarmony {
    deviceShot: boolean;
    area?: ViewToTempFilePathOptionsArea;
    id: string | null;
    offsetX: string | null;
    offsetY: string | null;
    wholeContent: boolean;
    path: string | null;
    overwrite?: boolean | null;
    success?: ((res: ViewToTempFilePathSuccess) => void) | null;
    fail?: ((res: ViewToTempFilePathFail) => void) | null;
    complete?: ((res: ViewToTempFilePathSuccess | ViewToTempFilePathFail) => void) | null;
}
type PageSizeChangeCallback = (size: Size) => void;
type ParentPageChangeCallback = (parentPage: UniNativePageImpl | null) => void;
export declare class UniNativePageImpl implements IUniNativePage, IUniNativePageImpl {
    pageUrl: string;
    pageId: string;
    private _parentPage;
    width: number;
    height: number;
    statusBarHeight: number;
    __uniPage: UniPageImpl | null;
    get type(): string;
    _nativeElement: UniElement | null;
    get bodyElement(): UniElement;
    document: ESObject;
    protected isRendering: boolean;
    /**
     * 关联的 UniApp 实例
     * @internal
     */
    app: UniNativeAppImpl;
    /**
     * 页面实例
     * @internal
     */
    page: PageContainer | null;
    /**
     * @internal
     */
    private rootNodeContent;
    fullscreenElement: UniElement | null;
    private _emitter;
    protected dialogPagesFrameNode: typeNode.Stack | null;
    private pageStyleCache;
    /**
     * @internal
     */
    pageStyle: PageStyle;
    /**
     * @internal
     */
    private dialogPages;
    /**
     * @internal
     */
    animationController: AnimationController;
    private stopContentSlotSizeChange;
    private onParentPageChangeCallbacks;
    get parentPage(): UniNativePageImpl | null;
    set parentPage(value: UniNativePageImpl | null);
    protected onParentPageChange(callback: ParentPageChangeCallback): () => void;
    private getScreenSize;
    getWindowSize(): Size;
    getContentSlotSize(): Size;
    onWindowSizeChange(callback: PageSizeChangeCallback): () => void;
    onContentSlotSizeChange(callback: PageSizeChangeCallback): () => void;
    constructor(pageUrl: string, pageId: string, pageStyle: Map<string, Object>);
    innerWidth: number;
    innerHeight: number;
    safeAreaInsets: UniSafeAreaInsets;
    getIOSView(): Object;
    get pageBody(): IUniPageBody;
    /**
     * @internal
     */
    init(page: PageContainer): void;
    startRender(): void;
    startRender(callback?: (() => void) | null): void;
    private stopRender;
    private showAnimationType;
    private showDuration;
    show(options?: Map<string, Object> | null | undefined, callback?: (() => void) | null | undefined): void;
    show(options?: Map<string, Object> | null | undefined): void;
    protected showWithAnimation(animationType: string | undefined, duration: number, callback?: (() => void) | null | undefined): void;
    close(options?: Map<string, Object> | null | undefined, callback?: (() => void) | null | undefined): void;
    close(options?: Map<string, Object> | null | undefined): void;
    dispose(): void;
    protected closeWithAnimation(animationType: string | undefined, duration: number, callback?: (() => void) | null | undefined): void;
    /**
     * @internal
     */
    private isCustomNavigationStyle;
    /**
     * @internal
     */
    getNavigationHeight(): number;
    updateStyle(style: Map<string, Object>, useNativeStyle?: boolean): undefined | Object;
    setPageOrientation(style: Map<string, Object>): Promise<void>;
    setHideStatusBar(style: Map<string, Object>): void;
    createDocument(documentData: INodeData): UniDocument;
    addPageEventListener(type: 'onReady' | 'onShow' | 'onHide' | 'onTabItemTap' | 'onUnload' | 'onReachBottom' | 'onPullDownRefresh' | 'onPageScroll' | 'onResize' | 'onWebViewServiceMessage' | 'onPopGesture' | 'onRestart' | 'onPageTouchStart' | 'onPageTouchEnd', callback: (event: UniPageEvent) => void): UniCallbackWrapper;
    addPageScrollEventListener(callback: (event: UniPageScrollEvent) => void): UniCallbackWrapper;
    viewToTempFilePath(options: ViewToTempFilePathOptionsForHarmony): Promise<void>;
    loadFontFace(options: NativeLoadFontFaceOptions): void;
    get enablePagePullDownRefresh(): boolean;
    startPullDownRefresh(): void;
    startPullDownRefresh(options: AsyncCallback): void;
    setEnablePullDownRefresh(enable: boolean): void;
    stopPullDownRefresh(): void;
    getPageRenderDuration(): number;
    getPageLayoutDuration(): number;
    getPageRenderCount(): number;
    getPageLayoutCount(): number;
    getFirstRenderStartTime(): number;
    getFirstLayoutStartTime(): number;
    getFirstPageRenderDuration(): number;
    getFirstPageLayoutDuration(): number;
    getCreatedElementCount(): number;
    getCreatedElementDuration(): number;
    getAndroidActivity(): object;
    getAndroidView(): object;
    getPageStyle(): UTSJSONObject;
    setPageStyle(style: UTSJSONObject): void;
    /**
     * 应用状态栏样式（页面返回时会调用）
     */
    applyStatusBarStyle(): Promise<void>;
    waitNativeRender(callback: () => void): void;
    addDialogPage(dialogPage: UniNativeDialogPageImpl): boolean;
    showDialogPage(dialogPage: UniNativeDialogPageImpl, animationType: string | undefined, duration: number): boolean;
    closeDialogPage(dialogPage: UniNativeDialogPageImpl, animationType: string | undefined, duration: number): boolean;
    findDialogPageController(dialogPage: UniNativeDialogPageImpl): DialogPageController | null;
    createDialogPageController(dialogPage: UniNativeDialogPageImpl): DialogPageController;
    requestFullscreen(): void;
    exitFullscreen(options?: ExitFullscreenOptions | null): Promise<void> | undefined;
    get pageScrollElement(): UniScrollViewElementImpl | undefined;
}
export {};
