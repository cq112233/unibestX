import common from '@ohos.app.ability.common';
import fs from '@ohos.file.fs';
import { UTSObject, IUniError, UTS, UTSHarmony, defineAsyncApi, ApiExecutor, ApiError } from "@dcloudio/uni-app-framework";
import fileUri from '@ohos.file.fileuri';
import { getEnv } from "@dcloudio/uni-app-framework";
import { systemShare } from '@kit.ShareKit';
import { uniformTypeDescriptor } from '@kit.ArkData';
class ShareWithSystemSuccess extends UTSObject {
}
type ShareWithSystemFail = IShareWithSystemFail;
interface IShareWithSystemFail extends IUniError {
    errCode: ShareWithSystemErrorCode;
}
type ShareWithSystemErrorCode = 1310600 | 1310601 | 1310602 | 1310603 | 1310604 | 1310605 | 1310606 | 1310607;
type ShareWithSystemSuccessCallback = (res: ShareWithSystemSuccess) => void;
type ShareWithSystemFailCallback = (res: ShareWithSystemFail) => void;
type ShareWithSystemCallback = (res: Object) => void;
class ShareWithSystemOptions extends UTSObject {
    type: 'text' | 'image' | 'video' | 'audio' | 'file' | null = null;
    summary: string | null = null;
    href: string | null = null;
    imageUrl: string | null = null;
    imagePaths: Array<string> | null = null;
    videoPaths: Array<string> | null = null;
    audioPaths: Array<string> | null = null;
    filePaths: Array<string> | null = null;
    success: ShareWithSystemSuccessCallback | null = null;
    fail: ShareWithSystemFailCallback | null = null;
    complete: ShareWithSystemCallback | null = null;
}
type ShareWithSystem = (options: ShareWithSystemOptions) => void;
const API_SHARE_WITH_SYSTEM = 'shareWithSystem';
const ShareWithSystemUniErrors: Map<ShareWithSystemErrorCode, string> = new Map([
    [
        1310600,
        'Cancel share'
    ],
    [
        1310601,
        'Shared content can not be empty'
    ],
    [
        1310602,
        'Failed to share'
    ],
    [
        1310603,
        'Failed to load image paths'
    ],
    [
        1310604,
        'Invalid herf'
    ],
    [
        1310605,
        'Invalid video paths'
    ],
    [
        1310606,
        'Invalid file paths'
    ],
    [
        1310607,
        'Invalid audio paths'
    ]
]);
function fileExists(filePath: string): boolean {
    try {
        fs.statSync(filePath);
        return true;
    } catch (error) {
        return false;
    }
}
class UniShareWithSystemErrorWithCode extends Error {
    code: ShareWithSystemErrorCode;
    constructor(code: ShareWithSystemErrorCode){
        super(UTS.mapGet(ShareWithSystemUniErrors, code) ?? "");
        this.code = code;
    }
}
async function processShareFile(filePath: string): Promise<string> {
    filePath = UTSHarmony.getResourcePath(filePath);
    const resourceDir = getContext().resourceDir;
    if (filePath.indexOf(resourceDir + '/') === -1) {
        return filePath.startsWith('/') ? fileUri.getUriFromPath(filePath) : filePath;
    }
    const fileName = UTS.arrayPop(filePath.split('/'));
    const systemShareCachePath = getEnv().TEMP_PATH + '/systemShareCache';
    if (!fileExists(systemShareCachePath)) {
        fs.mkdirSync(systemShareCachePath, true);
    }
    const cachedFileName = systemShareCachePath + '/' + fileName;
    const srcFile = await fs.open(filePath, fs.OpenMode.READ_ONLY);
    if (fileExists(cachedFileName)) {
        await fs.unlink(cachedFileName);
    }
    const destFile = await fs.open(systemShareCachePath + '/' + fileName, fs.OpenMode.WRITE_ONLY | fs.OpenMode.CREATE);
    await fs.copyFile(srcFile.fd, destFile.fd);
    await fs.close(srcFile);
    await fs.close(destFile);
    filePath = fileUri.getUriFromPath(cachedFileName);
    return filePath;
}
async function _shareWithSystem(args: ShareWithSystemOptions): Promise<void> {
    const href = args.href;
    const imageUrl = args.imageUrl;
    const summary = args.summary;
    const audioPaths = args.audioPaths;
    const filePaths = args.filePaths;
    const imagePaths = args.imagePaths;
    const videoPaths = args.videoPaths;
    const shareRecords: systemShare.SharedRecord[] = [];
    if (href) {
        shareRecords.push({
            utd: uniformTypeDescriptor.UniformDataType.HYPERLINK,
            content: href
        } as systemShare.SharedRecord);
    }
    if (imageUrl) {
        try {
            shareRecords.push({
                utd: uniformTypeDescriptor.UniformDataType.IMAGE,
                uri: await processShareFile(imageUrl)
            } as systemShare.SharedRecord);
        } catch (error) {
            throw new UniShareWithSystemErrorWithCode(1310603);
        }
    }
    if (imagePaths) {
        for(let i = 0; i < imagePaths.length; i++){
            const imagePath = imagePaths[i];
            try {
                shareRecords.push({
                    utd: uniformTypeDescriptor.UniformDataType.IMAGE,
                    uri: await processShareFile(imagePath)
                } as systemShare.SharedRecord);
            } catch (error) {
                throw new UniShareWithSystemErrorWithCode(1310603);
            }
        }
    }
    if (videoPaths) {
        for(let i = 0; i < videoPaths.length; i++){
            const videoPath = videoPaths[i];
            try {
                shareRecords.push({
                    utd: uniformTypeDescriptor.UniformDataType.VIDEO,
                    uri: await processShareFile(videoPath)
                } as systemShare.SharedRecord);
            } catch (error) {
                throw new UniShareWithSystemErrorWithCode(1310605);
            }
        }
    }
    if (audioPaths) {
        for(let i = 0; i < audioPaths.length; i++){
            const audioPath = audioPaths[i];
            try {
                shareRecords.push({
                    utd: uniformTypeDescriptor.UniformDataType.AUDIO,
                    uri: await processShareFile(audioPath)
                } as systemShare.SharedRecord);
            } catch (error) {
                throw new UniShareWithSystemErrorWithCode(1310607);
            }
        }
    }
    if (filePaths) {
        for(let i = 0; i < filePaths.length; i++){
            const filePath = filePaths[i];
            try {
                shareRecords.push({
                    utd: uniformTypeDescriptor.UniformDataType.FILE,
                    uri: await processShareFile(filePath)
                } as systemShare.SharedRecord);
            } catch (error) {
                throw new UniShareWithSystemErrorWithCode(1310606);
            }
        }
    }
    if (summary) {
        shareRecords.push({
            utd: uniformTypeDescriptor.UniformDataType.TEXT,
            content: summary
        } as systemShare.SharedRecord);
    }
    if (shareRecords.length === 0) {
        throw new UniShareWithSystemErrorWithCode(1310601);
    }
    const shareData = new systemShare.SharedData(shareRecords[0]);
    for(let index = 1; index < shareRecords.length; index++){
        shareData.addRecord(shareRecords[index]);
    }
    const shareController: systemShare.ShareController = new systemShare.ShareController(shareData);
    shareController.show(UTSHarmony.getUIAbilityContext() as common.UIAbilityContext, {
        selectionMode: systemShare.SelectionMode.BATCH,
        previewMode: systemShare.SharePreviewMode.DETAIL
    } as systemShare.ShareControllerOptions);
    return new Promise((resolve)=>{
        const onDismiss = ()=>{
            shareController.off('dismiss', onDismiss);
            resolve();
        };
        shareController.on('dismiss', onDismiss);
    });
}
const shareWithSystem = defineAsyncApi<ShareWithSystemOptions, ShareWithSystemSuccess>(API_SHARE_WITH_SYSTEM, (args: ShareWithSystemOptions, exec: ApiExecutor<ShareWithSystemSuccess>)=>{
    _shareWithSystem(args).then(()=>{
        exec.resolve({} as ShareWithSystemSuccess);
    }, (err: Error)=>{
        if (err instanceof UniShareWithSystemErrorWithCode) {
            exec.reject(err.message, {
                errCode: err.code
            } as ApiError);
            return;
        }
        exec.reject(err.message);
    });
}) as ShareWithSystem;
export { shareWithSystem as shareWithSystem };
export { IShareWithSystemFail as IShareWithSystemFail, ShareWithSystem as ShareWithSystem, ShareWithSystemCallback as ShareWithSystemCallback, ShareWithSystemErrorCode as ShareWithSystemErrorCode, ShareWithSystemFail as ShareWithSystemFail, ShareWithSystemFailCallback as ShareWithSystemFailCallback, ShareWithSystemOptions as ShareWithSystemOptions, ShareWithSystemSuccess as ShareWithSystemSuccess, ShareWithSystemSuccessCallback as ShareWithSystemSuccessCallback };
