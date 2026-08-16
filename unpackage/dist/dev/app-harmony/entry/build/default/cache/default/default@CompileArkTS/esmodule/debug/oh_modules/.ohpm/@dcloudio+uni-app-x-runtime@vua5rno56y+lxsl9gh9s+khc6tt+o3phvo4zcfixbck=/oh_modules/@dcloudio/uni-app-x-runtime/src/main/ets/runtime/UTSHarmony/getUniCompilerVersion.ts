import { getUniApp } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/UniNativeApp&1.0.0";
import { getProperty } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/helper/index&1.0.0";
/**
 * getUniCompilerVersion
 * @internal
 */
export function getUniCompilerVersion() {
    const manifest = getUniApp()!.manifest;
    return getProperty(manifest, 'uni-app-x').compilerVersion as string;
}
