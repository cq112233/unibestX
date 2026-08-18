import { getRealPath } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/polyfill/index&1.0.0";
export function getResourcePath(filePath: string) {
    const realPath = getRealPath(filePath);
    if (realPath.startsWith('file:///')) {
        return realPath.replace(/^file:\/\//, '');
    }
    return realPath;
}
