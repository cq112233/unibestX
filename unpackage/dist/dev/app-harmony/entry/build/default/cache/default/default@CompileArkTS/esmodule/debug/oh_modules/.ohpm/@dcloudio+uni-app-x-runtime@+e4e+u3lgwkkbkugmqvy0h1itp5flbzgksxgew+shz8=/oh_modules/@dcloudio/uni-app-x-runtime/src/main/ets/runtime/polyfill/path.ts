import { getFileURL } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/helper/index&1.0.0";
export function getRealPath(url: string): string {
    return getFileURL(url).replace(/^file:\/\/\//, '/');
}
