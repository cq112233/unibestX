type HostTHeme = 'dark' | 'light';
interface OnHostThemeChangeCallbackResult {
    /**
     * 主题名称
     */
    hostTheme: HostTHeme;
}
type OnHostThemeChangeCallback = (res: OnHostThemeChangeCallbackResult) => void;
/**
 * 监听主机主题变化
 *
 * @param {OnHostThemeChangeCallback} callback 主机主题变化回调
 * @returns {number} 监听ID
 * @internal
 */
export declare function onHostThemeChange(callback: OnHostThemeChangeCallback): number;
/**
 * 取消监听主机主题变化
 *
 * @param {number} id 监听ID
 * @internal
 */
export declare function offHostThemeChange(id: number): void;
export {};
