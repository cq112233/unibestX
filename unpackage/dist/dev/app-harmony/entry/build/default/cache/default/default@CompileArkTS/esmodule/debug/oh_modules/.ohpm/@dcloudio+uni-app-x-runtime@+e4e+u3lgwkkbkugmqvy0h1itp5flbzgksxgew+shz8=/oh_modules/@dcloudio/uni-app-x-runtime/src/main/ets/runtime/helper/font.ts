import type { NativeLoadFontFaceOptions } from '@dcloudio/uni-app-x/types/native';
import type { UIContext } from "@ohos:arkui.UIContext";
import type { BusinessError } from "@ohos:base";
import util from "@ohos:util";
import fileIo from "@ohos:file.fs";
let id = 0;
export function registerFont(familySrc: string, options: NativeLoadFontFaceOptions, appUIContext?: UIContext | null) {
    if (familySrc.startsWith('/')) {
        familySrc = `file://${familySrc}`;
    }
    if (appUIContext == null) {
        options.fail?.({
            errMsg: 'loadFontFace fail: app UIContext is required',
            errCode: 99
        } as ESObject);
        return;
    }
    if (!options.source) {
        options.fail?.({
            errMsg: 'loadFontFace fail: source is required',
            errCode: 100002
        } as ESObject);
        return;
    }
    if (!options.family) {
        options.fail?.({
            errMsg: 'loadFontFace fail: family is required',
            errCode: 100001
        } as ESObject);
        return;
    }
    const okMsg = 'loadFontFace ok';
    try {
        const tempDir = appUIContext.getHostContext()?.tempDir;
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
        const font = appUIContext.getFont();
        font.registerFont({
            familyName: options.family,
            familySrc
        });
        options.success?.({
            errMsg: okMsg
        } as ESObject);
        options.complete?.({
            errMsg: okMsg
        } as ESObject);
    }
    catch (e) {
        const err = e as BusinessError;
        options.fail?.({
            errCode: 4,
            errMsg: err.message
        } as ESObject);
    }
}
