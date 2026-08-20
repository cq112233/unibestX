import type Want from "@ohos:app.ability.Want";
import type common from "@ohos:app.ability.common";
import wantConstant from "@ohos:app.ability.wantConstant";
import uniformTypeDescriptor from "@ohos:data.uniformTypeDescriptor";
import fs from "@ohos:file.fs";
import { UTSObject, UTS, UTSHarmony, defineAsyncApi } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import type { IUniError, ApiExecutor, ApiError } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import fileUri from "@ohos:file.fileuri";
import { getEnv } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
const API_OPEN_DOCUMENT = 'openDocument';
class OpenDocumentSuccess extends UTSObject {
}
type OpenDocumentFail = IOpenDocumentError;
type OpenDocumentErrorCode = 1300601 | 1300602 | 1300603 | 1300604;
interface IOpenDocumentError extends IUniError {
    errCode: OpenDocumentErrorCode;
}
type OpenDocumentSuccessCallback = (res: OpenDocumentSuccess) => void;
type OpenDocumentFailCallback = (res: OpenDocumentFail) => void;
type OpenDocumentCompleteCallback = (res: Object) => void;
type OpenDocumentSupportedTypes = string;
class OpenDocumentOptions extends UTSObject {
    filePath!: string;
    fileType: OpenDocumentSupportedTypes | null = null;
    success: OpenDocumentSuccessCallback | null = null;
    fail: OpenDocumentFailCallback | null = null;
    complete: OpenDocumentCompleteCallback | null = null;
}
type OpenDocument = (options?: OpenDocumentOptions | null) => void;
function getContentType(filePath: string, fileType: string | null = null): string | void {
    const extension = fileType || UTS.arrayPop(filePath.split('.'));
    if (!extension) {
        return;
    }
    const typeId = uniformTypeDescriptor.getUniformDataTypeByFilenameExtension('.' + extension);
    const typeObj = uniformTypeDescriptor.getTypeDescriptor(typeId);
    const mimeTypes = typeObj.mimeTypes;
    return mimeTypes[0];
}
function fileExists(filePath: string): boolean {
    try {
        fs.statSync(filePath);
        return true;
    }
    catch (error) {
        return false;
    }
}
class ErrorWithCode extends Error {
    code: number;
    constructor(message: string, code: number) {
        super(message);
        this.name = 'ErrorWithCode';
        this.code = code;
    }
}
async function _openDocument(options: OpenDocumentOptions): Promise<OpenDocumentSuccess> {
    const filePath = options.filePath;
    let realPath = UTSHarmony.convert2AbsFullPath(filePath);
    let fileContentType: string | undefined = undefined;
    if (options.fileType) {
        fileContentType = (getContentType(filePath, options.fileType) || undefined) as string | undefined;
        if (!fileContentType) {
            throw new ErrorWithCode('file type not supported', 1300603);
        }
    }
    if (realPath.indexOf('/') === 0) {
        if (!fileExists(realPath)) {
            throw new ErrorWithCode('file not exists', 1300602);
        }
    }
    const fileName = UTS.arrayPop(filePath.split('/'));
    const resourceDir = getContext().resourceDir;
    if (realPath.indexOf(resourceDir + '/') > -1) {
        const saveMediaCachePath = getEnv().TEMP_PATH + '/openDocumentCache';
        if (!fileExists(saveMediaCachePath)) {
            fs.mkdirSync(saveMediaCachePath, true);
        }
        const cachedFileName = saveMediaCachePath + '/' + fileName;
        const srcFile = await fs.open(realPath, fs.OpenMode.READ_ONLY);
        if (fileExists(cachedFileName)) {
            await fs.unlink(cachedFileName);
        }
        const destFile = await fs.open(saveMediaCachePath + '/' + fileName, fs.OpenMode.WRITE_ONLY | fs.OpenMode.CREATE);
        await fs.copyFile(srcFile.fd, destFile.fd);
        await fs.close(srcFile);
        await fs.close(destFile);
        realPath = cachedFileName;
    }
    const uri = fileUri.getUriFromPath(realPath);
    const want: Want = {
        flags: wantConstant.Flags.FLAG_AUTH_WRITE_URI_PERMISSION | wantConstant.Flags.FLAG_AUTH_READ_URI_PERMISSION | wantConstant.Flags.FLAG_AUTH_PERSISTABLE_URI_PERMISSION,
        action: 'ohos.want.action.viewData',
        uri: uri,
        type: fileContentType
    };
    const abilityContext = UTSHarmony.getUIAbilityContext() as common.UIAbilityContext;
    await abilityContext.startAbility(want);
    return {} as OpenDocumentSuccess;
}
const openDocument: OpenDocument = defineAsyncApi<OpenDocumentOptions, OpenDocumentSuccess>(API_OPEN_DOCUMENT, (options: OpenDocumentOptions, exec: ApiExecutor<OpenDocumentSuccess>) => {
    _openDocument(options).then(() => {
        exec.resolve({} as OpenDocumentSuccess);
    }, (err: Error) => {
        exec.reject(err.message, {
            errCode: err instanceof ErrorWithCode ? err.code : 1300604
        } as ApiError);
    });
}) as OpenDocument;
export { OpenDocumentOptions as OpenDocumentOptions, OpenDocumentSuccess as OpenDocumentSuccess };
export type { IOpenDocumentError as IOpenDocumentError, OpenDocument as OpenDocument, OpenDocumentCompleteCallback as OpenDocumentCompleteCallback, OpenDocumentErrorCode as OpenDocumentErrorCode, OpenDocumentFail as OpenDocumentFail, OpenDocumentFailCallback as OpenDocumentFailCallback, OpenDocumentSuccessCallback as OpenDocumentSuccessCallback, OpenDocumentSupportedTypes as OpenDocumentSupportedTypes };
export { openDocument as openDocument };
