import { TinyEmitter } from 'tiny-emitter';
import { type OsTheme } from './constants';
/**
 * 参考文档
 * - [webview组件设置深色模式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-set-dark-mode)
 * - [应用深浅色适配](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-dark-light-color-adaptation#%E5%BA%94%E7%94%A8%E8%B7%9F%E9%9A%8F%E7%B3%BB%E7%BB%9F%E7%9A%84%E6%B7%B1%E6%B5%85%E8%89%B2%E6%A8%A1%E5%BC%8F)
 */
export declare const osThemeChangeEmitter: TinyEmitter;
/**
 * 获取系统主题
 * @internal
 */
export declare function getOsTheme(): OsTheme;
export interface OnOsThemeChangeCallbackResult {
    /**
     * 主题名称
     */
    osTheme: OsTheme;
}
type OnOsThemeChangeCallback = (res: OnOsThemeChangeCallbackResult) => void;
export declare function onOsThemeChange(callback: OnOsThemeChangeCallback): number;
export declare function offOsThemeChange(id: number): void;
export {};
