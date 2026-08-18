import { getUniRuntimeVersion } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/UTSHarmony/getUniRuntimeVersion&1.0.0";
export function getUserAgent() {
    return 'uni-app-x/' + getUniRuntimeVersion();
}
