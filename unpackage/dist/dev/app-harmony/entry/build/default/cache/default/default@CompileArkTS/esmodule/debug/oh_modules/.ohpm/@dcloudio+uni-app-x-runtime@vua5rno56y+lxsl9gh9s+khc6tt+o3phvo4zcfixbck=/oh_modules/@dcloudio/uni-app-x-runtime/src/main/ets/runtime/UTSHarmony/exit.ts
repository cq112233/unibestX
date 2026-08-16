import { getUniApp } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/UniNativeApp&1.0.0";
export function exit() {
    getUniApp()?.quit();
}
