import { getUniApp } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/UniNativeApp&1.0.0";
interface Version {
    name: string;
    code: string;
}
/**
 * getAppId
 * @internal
 */
export function getAppVersion(): Version {
    return getUniApp()!.manifest.version as Version;
}
