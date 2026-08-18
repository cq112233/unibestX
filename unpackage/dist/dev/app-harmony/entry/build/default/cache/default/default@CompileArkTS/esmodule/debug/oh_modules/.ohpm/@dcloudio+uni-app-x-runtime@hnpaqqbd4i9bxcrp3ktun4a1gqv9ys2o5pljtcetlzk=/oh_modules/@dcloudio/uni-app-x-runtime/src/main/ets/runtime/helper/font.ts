import type { NativeLoadFontFaceOptions, NativeLoadFontFaceFail } from '@dcloudio/uni-app-x/types/native';
import type { UIContext } from "@ohos:arkui.UIContext";
import type { BusinessError } from "@ohos:base";
import request from "@ohos:request";
import util from "@ohos:util";
import buffer from "@ohos:buffer";
import fileIo from "@ohos:file.fs";
import hash from "@ohos:file.hash";
import text from "@ohos:graphics.text";
import { getEnv } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/helper/io&1.0.0";
interface OKResult {
    errMsg: string;
}
const oKResult: OKResult = {
    errMsg: 'loadFontFace:ok'
};
const failMsg = 'loadFontFace:fail';
let id = 0;
// 持久化网络字体缓存目录：getEnv().CACHE_PATH/uni-font
function getFontCacheDir(): string {
    const env = getEnv();
    // 兜底，避免 CACHE_PATH 为空
    const base = env?.CACHE_PATH || getContext().cacheDir;
    return `${base}/uni-font`;
}
function ensureDirSync(dir: string) {
    if (!dir) {
        return;
    }
    try {
        if (!fileIo.accessSync(dir)) {
            fileIo.mkdirSync(dir, true);
        }
    }
    catch (e) {
        // 目录已存在或无权限时忽略，后续写文件如果失败会在下载阶段报错
    }
}
// 根据 family+url 生成缓存文件路径（简单转义）
function getFontCacheFilePath(family: string, url: string): string {
    const dir = getFontCacheDir();
    // 用 hash 或安全文件名，避免非法字符
    const key = `${family}|${url}`;
    const hs = hash.createHash('sha256');
    hs.update(buffer.from(key).buffer);
    // 尝试从 url 提取扩展名
    const ext = url.split('?')[0].split('#')[0].split('.').pop() || 'ttf';
    return `${dir}/${hs.digest().slice(0, 12)}.${ext}`;
}
export async function registerFont(familySrc: string, options: NativeLoadFontFaceOptions, appUIContext?: UIContext | null) {
    if (familySrc.startsWith('/')) {
        familySrc = `file://${familySrc}`;
    }
    if (appUIContext == null) {
        const res = {
            errMsg: `${failMsg} app UIContext is required`,
            errCode: 99
        } as NativeLoadFontFaceFail;
        options.fail?.(res);
        return;
    }
    if (!options.source) {
        const res = {
            errMsg: `${failMsg} source is required`,
            errCode: 100002
        } as NativeLoadFontFaceFail;
        options.fail?.(res);
        return;
    }
    if (!options.family) {
        const res = {
            errMsg: `${failMsg} family is required`,
            errCode: 100001
        } as NativeLoadFontFaceFail;
        options.fail?.(res);
        return;
    }
    const context = appUIContext.getHostContext();
    try {
        const tempDir = context?.tempDir;
        const base64FontExt = (familySrc.match(/^data:font\/(.*?);/) ?? [])[1];
        if (base64FontExt && tempDir) {
            const path = `${tempDir}/${Date.now() + id++}.${base64FontExt}`;
            const base64Helper = new util.Base64Helper();
            let buf = base64Helper.decodeSync(familySrc.split(',')[1], util.Type.MIME).buffer as ArrayBuffer;
            let file = fileIo.openSync(path, fileIo.OpenMode.CREATE | fileIo.OpenMode.READ_WRITE);
            fileIo.writeSync(file.fd, buf);
            fileIo.close(file.fd);
            familySrc = `file:///${path}`;
        }
        globalThis.__uni__app_RegisterFont?.(0, options.family);
        // 如果是 http/https 协议，则下载到持久化缓存目录
        if ((familySrc.startsWith('http://') || familySrc.startsWith('https://'))) {
            const cacheFilePath = getFontCacheFilePath(options.family, familySrc);
            const cacheDir = getFontCacheDir();
            if (cacheDir) {
                ensureDirSync(cacheDir);
            }
            try {
                if (fileIo.accessSync(cacheFilePath)) {
                    const fileUrl = 'file://' + cacheFilePath;
                    text.FontCollection.getGlobalInstance().loadFontSync(options.family, fileUrl);
                    globalThis.__uni__app_OnFontLoaded(0, options.family, fileUrl, true);
                    options.success?.(oKResult);
                    return;
                }
            }
            catch (e) {
            }
            const targetPath = cacheFilePath || `${tempDir || ''}/${Date.now() + id++}.${familySrc.split('.').pop()?.split('?')[0]}`;
            let downloadTask: request.DownloadTask = await request.downloadFile(context, { url: familySrc, filePath: targetPath })!;
            const complete = async () => {
                try {
                    const downloadInfo = await downloadTask.getTaskInfo();
                    const filePath = downloadInfo.filePath || targetPath;
                    const fileUrl = 'file://' + filePath;
                    text.FontCollection.getGlobalInstance().loadFontSync(options.family, fileUrl);
                    globalThis.__uni__app_OnFontLoaded(0, options.family, fileUrl, true);
                    options.success?.(oKResult);
                }
                finally {
                    downloadTask.off('complete', complete);
                }
            };
            downloadTask.on('complete', complete);
            const fail = (errCode: number) => {
                const res = {
                    errCode,
                    errMsg: failMsg
                } as NativeLoadFontFaceFail;
                options.fail?.(res);
                globalThis.__uni__app_OnFontLoaded(0, options.family, '', false);
                downloadTask.off('fail', fail);
            };
            downloadTask.on('fail', fail);
            return;
        }
        text.FontCollection.getGlobalInstance().loadFontSync(options.family, familySrc);
        options.success?.(oKResult);
        globalThis.__uni__app_OnFontLoaded(0, options.family, familySrc, true);
    }
    catch (e) {
        const res = {
            errCode: 4,
            errMsg: `${failMsg} ${(e as BusinessError).message}`
        } as NativeLoadFontFaceFail;
        globalThis.__uni__app_OnFontLoaded(0, options.family, '', false);
        options.fail?.(res);
    }
}
