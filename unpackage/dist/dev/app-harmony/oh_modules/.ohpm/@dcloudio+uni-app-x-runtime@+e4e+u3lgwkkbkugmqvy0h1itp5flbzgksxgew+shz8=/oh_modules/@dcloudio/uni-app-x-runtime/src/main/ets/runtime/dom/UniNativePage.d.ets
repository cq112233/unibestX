import { INodeData, UniNativePage as IUniNativePage, NativeLoadFontFaceOptions, UniDocument, UniPageEvent, UniPageScrollEvent, UniPageBody as IUniPageBody, UniElement, ViewToTempFilePathSuccess, ViewToTempFilePathFail, ExitFullscreenOptions, UniPage } from '@dcloudio/uni-app-x/types/native';
import { UniCallbackWrapper } from './UniCallbackWrapper';
import { AsyncCallback, UTSJSONObject } from '../helper';
import { UniNativeAppImpl } from '../UniNativeApp';
import type { PageContainer } from '../components/Page';
import { UniDocumentImpl } from './UniDocument';
import { RootNodeController } from '../Node';
import { typeNode as typeNode } from "@ohos.arkui.node";
import { NavBarFrameNode } from './NavBarFrameNode';
import { UniSafeAreaInsets } from '@dcloudio/uni-app-x/types/native';
import { UniNativeDialogPageImpl } from './UniNativeDialogPage';
import { UniTabsElementImpl } from './UniTabsElement';
import { UniScrollElementImpl } from './UniScroll/UniScroll';
export declare const DefaultPageStyle: Map<string, string | number | boolean>;
export declare const pagesMap: Map<string, IUniNativePage>;
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
export declare class UniNativePageImpl implements IUniNativePage {
    pageUrl: string;
    pageId: string;
    parentPage: UniNativePageImpl | null;
    tabBarElement: UniTabsElementImpl | null;
    width: number;
    height: number;
    statusBarHeight: number;
    __uniPage: UniPage | null;
    get type(): string;
    document: UniDocumentImpl;
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
    rootNodeController: RootNodeController;
    navBarFrameNode: NavBarFrameNode;
    pageFrameNode: typeNode.Column;
    fullscreenElement: UniElement | null;
    private _emitter;
    protected dialogPagesFrameNode: typeNode.Stack | null;
    protected fullscreenFrameNode: typeNode.Stack | null;
    /**
     * @internal
     */
    contentFrameNode: typeNode.Stack;
    private pageStyle;
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
    protected showWithAnimation(animationType: string | undefined, duration: number): void;
    close(options?: Map<string, Object> | null | undefined, callback?: (() => void) | null | undefined): void;
    close(options?: Map<string, Object> | null | undefined): void;
    dispose(): void;
    protected closeWithAnimation(animationType: string | undefined, duration: number): void;
    updateStyle(style: Map<string, Object>): void;
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
    addDialogPage(dialogPage: UniNativeDialogPageImpl): boolean;
    showDialogPage(dialogPage: UniNativeDialogPageImpl, animationType: string | undefined, duration: number): boolean;
    closeDialogPage(dialogPage: UniNativeDialogPageImpl, animationType: string | undefined, duration: number): boolean;
    findDialogPageStackFrameNode(dialogPage: UniNativeDialogPageImpl): typeNode.Stack | null;
    createDialogPageFrameNode(dialogPage: UniNativeDialogPageImpl): typeNode.Stack;
    requestFullscreen(): void;
    appendFullscreenFrameNode(frameNode: FrameNode, element: UniElement): void;
    exitFullscreen(options?: ExitFullscreenOptions | null): Promise<void> | undefined;
    /**
     * 对齐安卓iOS，页面根节点有一个元素且这个元素是scroll元素时才认为其滚动内容为“文档”
     */
    get pageScrollElement(): UniScrollElementImpl | undefined;
}
export {};
