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
export declare function getNativeSafeAreaInsets(): ISafeAreaInsets;
export interface WindowRect {
    width: number;
    height: number;
}
export declare function getNativeWindowRect(): WindowRect;
export interface IWindowInfo {
    pixelRatio: number;
    statusBarHeight: number;
    screenTop: number;
    windowHeight: number;
    windowWidth: number;
    screenWidth: number;
    screenHeight: number;
    windowTop: number;
    windowBottom: number;
    safeArea: ISafeArea;
    safeAreaInsets: ISafeAreaInsets;
}
export declare function formatValue(px: number): number;
/**
 * 安全区大小需要四舍五入才能和web对齐
 * 屏幕宽高需要向上取整
 */
export declare function formatValueRound(px: number): number;
export declare function formatValueCeil(px: number): number;
