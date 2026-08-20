export interface ISafeAreaInsets {
    top: number;
    bottom: number;
    left: number;
    right: number;
}
export declare function getSafeAreaInsets(useDevicePixels?: boolean): ISafeAreaInsets;
export declare function onSafeAreaInsetsChange(callback: (info: ISafeAreaInsets) => void, useDevicePixels?: boolean): void;
export declare function offSafeAreaInsetsChange(callback: Function): void;
export declare function clearSafeAreaInsetsChange(): void;
export declare function getOrientation(): number;
export declare function setStatusBarStyle(style: 'dark' | 'light', statusBarBackground?: string): void;
interface Navigator {
    setStatusBarStyle: (style: 'dark' | 'light', statusBarBackground?: string) => void;
}
export declare const navigator: Navigator;
export {};
