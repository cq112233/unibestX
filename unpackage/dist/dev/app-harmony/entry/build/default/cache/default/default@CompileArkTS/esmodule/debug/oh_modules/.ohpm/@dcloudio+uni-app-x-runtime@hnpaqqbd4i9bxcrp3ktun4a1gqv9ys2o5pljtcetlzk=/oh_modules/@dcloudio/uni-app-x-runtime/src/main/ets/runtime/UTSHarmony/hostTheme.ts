import { osThemeChangeEmitter } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/UTSHarmony/osTheme&1.0.0";
import { ON_OS_THEME_CHANGE } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/UTSHarmony/constants&1.0.0";
type HostTHeme = 'dark' | 'light';
interface OnHostThemeChangeCallbackResult {
    /**
     * 主题名称
     */
    hostTheme: HostTHeme;
}
type OnHostThemeChangeCallback = (res: OnHostThemeChangeCallbackResult) => void;
const THEME_CALLBACKS: Record<number, OnHostThemeChangeCallback | undefined> = {};
let THEME_CALLBACK_ID = 0;
export function onHostThemeChange(callback: OnHostThemeChangeCallback) {
    osThemeChangeEmitter.on(ON_OS_THEME_CHANGE, callback);
    const id = THEME_CALLBACK_ID++;
    THEME_CALLBACKS[id] = callback;
    return id;
}
export function offHostThemeChange(id: number) {
    const callback = THEME_CALLBACKS[id];
    if (id < 0 || typeof callback !== 'function') {
        return;
    }
    THEME_CALLBACKS[id] = undefined;
    osThemeChangeEmitter.off(ON_OS_THEME_CHANGE, callback);
}
