import { ExitFullscreenOptions, UniElement } from '@dcloudio/uni-app-x/types/native';
declare global {
    function __uni__app_Create(appId: number): void;
    function __uni__app_Close(appId: number): void;
    function __uni__app_AddEventListener(appId: number, event: string, callback: Function): void;
    function __uni__app_RemoveEventListener(appId: number, event: string, callback: Function): void;
    function __uni__page_Create(pageId: number, rootNodeContent: Object, width: number, height: number, style?: Object): void;
    function __uni__page_OnSizeChange(pageId: number, width: number, height: number): any;
    function __uni__page_UpdateStyle(appId: number, pageId: number, style: Object): void;
    function __uni__page_AddEventListener(appId: number, pageId: number, event: string, callback: Function): void;
    function __uni__page_RemoveEventListener(appId: number, pageId: number, event: string, callback: Function): void;
    function __uni__page_GetElementById(appId: number, pageId: number, elementId: string | number): UniElement | null;
    function __uni__page_QuerySelector(appId: number, pageId: number, selector: string): UniElement | null;
    function __uni__page_QuerySelectorAll(appId: number, pageId: number, selector: string): UniElement[] | null;
    function __uni__page_GetNodeById(appId: number, pageId: number, nodeId: string | number): UniElement | null;
    function __uni__page_WaitNativeRender(appId: number, pageId: number, callback: Function): UniElement | null;
    function __uni__page_Close(pageId: number): void;
    function __uni__page_ExitFullscreen(appId: number, pageId: number, options: ExitFullscreenOptions): void;
    function emitSafeAreaInsetsChange(): void;
}
export declare const bridge: {
    readonly __uni__app_Create: typeof __uni__app_Create;
    readonly __uni__app_Close: typeof __uni__app_Close;
    readonly __uni__app_AddEventListener: typeof __uni__app_AddEventListener;
    readonly __uni__app_RemoveEventListener: typeof __uni__app_RemoveEventListener;
    readonly __uni__page_Create: typeof __uni__page_Create;
    readonly __uni__page_OnSizeChange: typeof __uni__page_OnSizeChange;
    readonly __uni__page_UpdateStyle: typeof __uni__page_UpdateStyle;
    readonly __uni__page_AddEventListener: typeof __uni__page_AddEventListener;
    readonly __uni__page_RemoveEventListener: typeof __uni__page_RemoveEventListener;
    readonly __uni__page_GetElementById: typeof __uni__page_GetElementById;
    readonly __uni__page_QuerySelector: typeof __uni__page_QuerySelector;
    readonly __uni__page_QuerySelectorAll: typeof __uni__page_QuerySelectorAll;
    readonly __uni__page_GetNodeById: typeof __uni__page_GetNodeById;
    readonly __uni__page_WaitNativeRender: typeof __uni__page_WaitNativeRender;
    readonly __uni__page_Close: typeof __uni__page_Close;
    readonly __uni__page_ExitFullscreen: typeof __uni__page_ExitFullscreen;
    readonly emitSafeAreaInsetsChange: typeof emitSafeAreaInsetsChange;
};
