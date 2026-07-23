import { getUniApp } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/UniNativeApp&1.0.0";
/**
 * getAppId
 * @internal
 */
export function getAppId() {
    return getUniApp()?.manifest.id || '';
}
