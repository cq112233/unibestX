type HostTHeme = 'dark' | 'light';
interface OnHostThemeChangeCallbackResult {
    /**
     * 主题名称
     */
    hostTheme: HostTHeme;
}
type OnHostThemeChangeCallback = (res: OnHostThemeChangeCallbackResult) => void;
export declare function onHostThemeChange(callback: OnHostThemeChangeCallback): number;
export declare function offHostThemeChange(id: number): void;
export {};
