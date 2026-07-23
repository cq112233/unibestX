import { getUniApp } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/UniNativeApp&1.0.0";
import window from "@ohos:window";
export interface ISafeArea {
    left: number;
    right: number;
    top: number;
    bottom: number;
    width: number;
    height: number;
}
export interface ISafeAreaInsets {
    left: number;
    right: number;
    top: number;
    bottom: number;
}
export function getNativeSafeAreaInsets() {
    const mainApp = getUniApp();
    const mainWindow = mainApp!.window;
    const systemArea = mainWindow.getWindowAvoidArea(window.AvoidAreaType.TYPE_SYSTEM);
    const navArea = mainWindow.getWindowAvoidArea(window.AvoidAreaType.TYPE_NAVIGATION_INDICATOR);
    const top = systemArea.topRect.height;
    const bottom = navArea.bottomRect.height;
    const left = 0;
    const right = 0;
    return {
        top,
        bottom,
        left,
        right,
    } as ISafeAreaInsets;
}
export interface WindowRect {
    width: number;
    height: number;
}
export function getNativeWindowRect() {
    const mainApp = getUniApp();
    const mainWindow = mainApp!.window;
    const windowProps = mainWindow.getWindowProperties();
    const windowRect = windowProps.windowRect;
    return {
        width: windowRect.width,
        height: windowRect.height,
    } as WindowRect;
}
export interface IWindowInfo {
    pixelRatio: number;
    statusBarHeight: number;
    screenTop: number; // webview顶部到window顶部的高度
    windowHeight: number; // webview高度
    windowWidth: number; // webview宽度
    screenWidth: number; // window宽度
    screenHeight: number; // window高度
    windowTop: number; // 固定为0
    windowBottom: number; // 固定为0
    safeArea: ISafeArea;
    safeAreaInsets: ISafeAreaInsets;
}
export function formatValue(px: number) {
    /**
     * TODO 处理像素分配 1.0使用的是Math.floor，某些情况下和其他平台计算结果不一致
     */
    return Math.floor(px2vp(px));
}
/**
 * 安全区大小需要四舍五入才能和web对齐
 * 屏幕宽高需要向上取整
 */
export function formatValueRound(px: number) {
    return Math.round(px2vp(px));
}
export function formatValueCeil(px: number) {
    return Math.ceil(px2vp(px));
}
