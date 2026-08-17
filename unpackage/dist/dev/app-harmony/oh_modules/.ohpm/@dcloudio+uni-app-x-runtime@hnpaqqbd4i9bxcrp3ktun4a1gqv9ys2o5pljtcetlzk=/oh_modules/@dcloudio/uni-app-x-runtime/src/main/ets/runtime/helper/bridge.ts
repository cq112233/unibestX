import { ExitFullscreenOptions, IFullscreenError, UniElement } from '@dcloudio/uni-app-x/types/native'

declare global {

  function __uni__app_Create(appId: number): void

  function __uni__app_Close(appId: number): void

  function __uni__app_AddEventListener(appId: number, event: string, callback: Function): void

  function __uni__app_RemoveEventListener(appId: number, event: string, callback: Function): void

  function __uni__page_Create(pageId: number, rootNodeContent: Object, width: number, height: number,
    style?: Object): void

  function __uni__page_OnSizeChange(pageId: number, width: number, height: number)

  function __uni__page_UpdateStyle(appId: number, pageId: number, style: Object): void

  function __uni__page_AddEventListener(appId: number, pageId: number, event: string, callback: Function): void

  function __uni__page_RemoveEventListener(appId: number, pageId: number, event: string, callback: Function): void

  function __uni__page_GetElementById(appId: number, pageId: number, elementId: string | number): UniElement | null

  function __uni__page_QuerySelector(appId: number, pageId: number, selector: string): UniElement | null
  function __uni__page_QuerySelectorAll(appId: number, pageId: number, selector: string): UniElement[] | null

  function __uni__page_GetNodeById(appId: number, pageId: number, nodeId: string | number): UniElement | null

  function __uni__page_WaitNativeRender(appId: number, pageId: number, callback: Function): UniElement | null

  function __uni__page_Close(pageId: number): void

  function __uni__page_ExitFullscreen(appId: number, pageId: number, options: ExitFullscreenOptions): void

  function emitSafeAreaInsetsChange(): void
}

export const bridge = {
  get __uni__app_Create() {
    return globalThis.__uni__app_Create
  },
  get __uni__app_Close() {
    return globalThis.__uni__app_Close
  },
  get __uni__app_AddEventListener() {
    return globalThis.__uni__app_AddEventListener
  },
  get __uni__app_RemoveEventListener() {
    return globalThis.__uni__app_RemoveEventListener
  },
  get __uni__page_Create() {
    return globalThis.__uni__page_Create
  },
  get __uni__page_OnSizeChange() {
    return globalThis.__uni__page_OnSizeChange
  },
  get __uni__page_UpdateStyle() {
    return globalThis.__uni__page_UpdateStyle
  },
  get __uni__page_AddEventListener() {
    return globalThis.__uni__page_AddEventListener
  },
  get __uni__page_RemoveEventListener() {
    return globalThis.__uni__page_RemoveEventListener
  },
  get __uni__page_GetElementById() {
    return globalThis.__uni__page_GetElementById
  },
  get __uni__page_QuerySelector() {
    return globalThis.__uni__page_QuerySelector
  },
  get __uni__page_QuerySelectorAll() {
    return globalThis.__uni__page_QuerySelectorAll
  },
  get __uni__page_GetNodeById() {
    return globalThis.__uni__page_GetNodeById
  },
  get __uni__page_WaitNativeRender() {
    return globalThis.__uni__page_WaitNativeRender
  },
  get __uni__page_Close() {
    return globalThis.__uni__page_Close
  },
  get __uni__page_ExitFullscreen() {
    return globalThis.__uni__page_ExitFullscreen
  },
  get emitSafeAreaInsetsChange() {
    return globalThis.emitSafeAreaInsetsChange
  }
}
