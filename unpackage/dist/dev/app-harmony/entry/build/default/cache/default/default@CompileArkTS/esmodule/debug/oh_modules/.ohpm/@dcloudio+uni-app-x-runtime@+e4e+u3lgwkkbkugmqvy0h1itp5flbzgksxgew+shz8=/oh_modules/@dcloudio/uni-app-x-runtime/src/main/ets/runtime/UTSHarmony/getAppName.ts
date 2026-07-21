import { getUniApp } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/UniNativeApp&1.0.0";
/**
 * getAppName
 * @internal
 */
export function getAppName() {
    return getUniApp()?.manifest.name || '';
}
