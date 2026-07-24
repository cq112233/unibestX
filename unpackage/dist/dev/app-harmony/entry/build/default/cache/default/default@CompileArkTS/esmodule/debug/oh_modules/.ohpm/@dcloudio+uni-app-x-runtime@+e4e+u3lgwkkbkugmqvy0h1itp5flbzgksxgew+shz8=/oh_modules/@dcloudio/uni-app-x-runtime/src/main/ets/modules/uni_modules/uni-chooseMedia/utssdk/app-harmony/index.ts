import dataSharePredicates from "@ohos:data.dataSharePredicates";
import fs from "@ohos:file.fs";
import photoAccessHelper from "@ohos:file.photoAccessHelper";
import image from "@ohos:multimedia.image";
import uri from "@ohos:uri";
import { UTSObject, UTS, UniError, UTSHarmony, defineAsyncApi } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import type { IUniError, ProtocolOptions, ApiOptions, ApiExecutor, ApiError, ShowActionSheetOptions } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import cameraPicker from "@ohos:multimedia.cameraPicker";
import camera from "@ohos:multimedia.camera";
import { getAbilityContext, getEnv } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
import photoAccessHelper__1 from "@ohos:file.photoAccessHelper";
import { uni } from "@normalized:N&&&@dcloudio/uni-app-framework/index&1.0.0";
type ChooseMediaErrorCode = 1101001 | 1101005 | 1101006 | 1101008 | 1101010;
interface IChooseMediaError extends IUniError {
    errCode: ChooseMediaErrorCode;
}
type ChooseMediaFileType = 'image' | 'video';
class ChooseMediaTempFile extends UTSObject {
    tempFilePath!: string;
    fileType!: ChooseMediaFileType;
    size!: number;
    byteSize: number | null = null;
    duration: number | null = null;
    height: number | null = null;
    width: number | null = null;
    thumbTempFilePath: string | null = null;
}
class ChooseMediaSuccess extends UTSObject {
    tempFiles!: ChooseMediaTempFile[];
    type!: 'image' | 'video' | 'mix';
}
type ChooseMediaFail = IChooseMediaError;
type ChooseMediaSuccessCallback = (callback: ChooseMediaSuccess) => void;
type ChooseMediaFailCallback = (callback: ChooseMediaFail) => void;
type ChooseMediaCompleteCallback = (callback: Object) => void;
type ChooseMediaPageOrientation = "auto" | "portrait" | "landscape";
class ChooseMediaOptions extends UTSObject {
    pageOrientation: ChooseMediaPageOrientation | null = null;
    count: number | null = null;
    mediaType: (string[]) | null = null;
    sourceType: (string[]) | null = null;
    maxDuration: number | null = null;
    camera: 'front' | 'back' | null = null;
    success: (ChooseMediaSuccessCallback) | null = null;
    fail: (ChooseMediaFailCallback) | null = null;
    complete: (ChooseMediaCompleteCallback) | null = null;
}
type ChooseMedia = (options: ChooseMediaOptions) => void;
const API_CHOOSE_MEDIA = 'chooseMedia';
const ChooseMediaApiProtocol = new Map<string, ProtocolOptions>([
    [
        'count',
        {
            type: 'number',
            required: false
        }
    ],
    [
        'mediaType',
        {
            type: 'array',
            required: false
        }
    ],
    [
        'sourceType',
        {
            type: 'array',
            required: false
        }
    ],
    [
        'maxDuration',
        {
            type: 'number',
            required: false
        }
    ],
    [
        'camera',
        {
            type: 'string',
            required: false
        }
    ]
]);
const ChooseMediaApiOptions: ApiOptions<ChooseMediaOptions> = {
    formatArgs: new Map<string, Function>([
        [
            'count',
            (count: number, params: ChooseMediaOptions) => {
                if (count == null) {
                    params.count = 9;
                }
                if (params.count != null && params.count > 9) {
                    params.count = 9;
                }
            }
        ],
        [
            'mediaType',
            (mediaType: string[], params: ChooseMediaOptions) => {
                if (mediaType == null) {
                    params.mediaType = [
                        'image',
                        'video'
                    ];
                }
            }
        ],
        [
            'sourceType',
            (sourceType: string[], params: ChooseMediaOptions) => {
                if (sourceType == null) {
                    params.sourceType = [
                        'album',
                        'camera'
                    ];
                }
            }
        ],
        [
            'maxDuration',
            (maxDuration: number, params: ChooseMediaOptions) => {
                if (maxDuration == null) {
                    params.maxDuration = 10;
                }
            }
        ],
        [
            'camera',
            (camera: string, params: ChooseMediaOptions) => {
                if (camera == null) {
                    params.camera = 'back';
                }
            }
        ]
    ])
};
interface AssetInfo {
    fileType: 'video' | 'image';
    size: number;
    byteSize: number;
    width?: number;
    height?: number;
    duration?: number;
    thumbTempFilePath?: string;
}
interface _MediaFile extends AssetInfo {
    tempFilePath: string;
}
let id: number = 0;
async function getVideoThumbnail(videoUri: string, pixelMap: image.PixelMap): Promise<string> {
    const imagePacker: image.ImagePacker = image.createImagePacker();
    const uriInstance = new uri.URI(videoUri);
    const tempFileName = `${UTS.arrayShift(uriInstance.getLastSegment().split('.'))}_thumbnail_${id++}.jpg`;
    const tempDirPath = `${getEnv().CACHE_PATH}/uni-media`;
    if (!fs.accessSync(tempDirPath)) {
        fs.mkdirSync(tempDirPath, true);
    }
    const tempFilePath: string = `${tempDirPath}/${tempFileName}`;
    const file = fs.openSync(tempFilePath, fs.OpenMode.CREATE | fs.OpenMode.READ_WRITE);
    if (!fs.accessSync(tempDirPath)) {
        fs.mkdirSync(tempDirPath, true);
    }
    await imagePacker.packToFile(pixelMap, file.fd, {
        format: 'image/jpeg',
        quality: 80
    } as image.PackingOption);
    await fs.close(file);
    await pixelMap.release();
    return tempFilePath;
}
interface __ChooseMediaOptions {
    mimeType: photoAccessHelper.PhotoViewMIMETypes.VIDEO_TYPE | photoAccessHelper.PhotoViewMIMETypes.IMAGE_TYPE | photoAccessHelper.PhotoViewMIMETypes.IMAGE_VIDEO_TYPE;
    count?: number;
    sourceType?: ('album' | 'camera')[];
    isOriginalSupported?: boolean;
}
interface _chooseMediaSuccessCallbackResult {
    tempFiles: _MediaFile[];
}
async function getMediaAssetInfo(uri: string): Promise<AssetInfo> {
    const accessHelper = await photoAccessHelper.getPhotoAccessHelper(getAbilityContext()!);
    const predicates = new dataSharePredicates.DataSharePredicates();
    predicates.equalTo('uri', uri);
    const fetchResult: photoAccessHelper.FetchResult<photoAccessHelper.PhotoAsset> = await accessHelper.getAssets({
        fetchColumns: [
            photoAccessHelper.PhotoKeys.URI,
            photoAccessHelper.PhotoKeys.PHOTO_TYPE,
            photoAccessHelper.PhotoKeys.WIDTH,
            photoAccessHelper.PhotoKeys.HEIGHT,
            photoAccessHelper.PhotoKeys.SIZE,
            photoAccessHelper.PhotoKeys.DURATION,
            photoAccessHelper.PhotoKeys.ORIENTATION
        ],
        predicates
    } as photoAccessHelper.FetchOptions);
    const asset: photoAccessHelper.PhotoAsset = await fetchResult.getFirstObject();
    const photoType = asset.photoType;
    const byteSize = asset.get(photoAccessHelper.PhotoKeys.SIZE) as number;
    let width = asset.get(photoAccessHelper.PhotoKeys.WIDTH) as number;
    let height = asset.get(photoAccessHelper.PhotoKeys.HEIGHT) as number;
    const durationMs = asset.get(photoAccessHelper.PhotoKeys.DURATION) as number;
    const orientation = asset.get(photoAccessHelper.PhotoKeys.ORIENTATION) as number | null;
    let thumbTempFilePath = '';
    if (orientation != null && (orientation === 90 || orientation === 270)) {
        const temp = width;
        width = height;
        height = temp;
    }
    const multiplier = Math.pow(10, 3);
    const duration = durationMs != null ? Math.round((durationMs / 1000) * multiplier) / multiplier : undefined;
    const size = Math.round((byteSize / 1024) * multiplier) / multiplier;
    if (photoType === photoAccessHelper.PhotoType.VIDEO) {
        const thumbnailPixelMap = await asset.getThumbnail({
            width,
            height
        } as image.Size);
        try {
            thumbTempFilePath = await getVideoThumbnail(uri, thumbnailPixelMap);
        }
        catch (error) { }
    }
    fetchResult.close();
    await accessHelper.release();
    return {
        fileType: photoType === photoAccessHelper.PhotoType.VIDEO ? 'video' : 'image',
        size,
        byteSize,
        width,
        height,
        duration,
        thumbTempFilePath
    } as AssetInfo;
}
async function _chooseMedia(options: __ChooseMediaOptions): Promise<_chooseMediaSuccessCallbackResult> {
    const photoSelectOptions = new photoAccessHelper.PhotoSelectOptions();
    const mimeType = options.mimeType;
    photoSelectOptions.MIMEType = mimeType;
    if (mimeType === photoAccessHelper.PhotoViewMIMETypes.VIDEO_TYPE) {
        photoSelectOptions.maxSelectNumber = 1;
    }
    else {
        photoSelectOptions.maxSelectNumber = options.count || 9;
    }
    photoSelectOptions.isOriginalSupported = options.isOriginalSupported;
    photoSelectOptions.isPhotoTakingSupported = !(options.sourceType && !options.sourceType.includes('camera'));
    const photoPicker = new photoAccessHelper.PhotoViewPicker();
    const photoSelectResult = await photoPicker.select(photoSelectOptions);
    const uris = photoSelectResult.photoUris;
    const tempFiles: _MediaFile[] = [];
    const createMediaFile: Promise<void>[] = [];
    uris.forEach((uri) => {
        createMediaFile.push(new Promise(async (resolve) => {
            const assetInfo = await getMediaAssetInfo(uri);
            if (assetInfo.fileType === 'video') {
                tempFiles.push({
                    fileType: assetInfo.fileType,
                    tempFilePath: uri,
                    size: assetInfo.size,
                    byteSize: assetInfo.byteSize,
                    duration: assetInfo.duration,
                    width: assetInfo.width,
                    height: assetInfo.height,
                    thumbTempFilePath: assetInfo.thumbTempFilePath
                } as _MediaFile);
            }
            else if (assetInfo.fileType === 'image') {
                tempFiles.push({
                    fileType: assetInfo.fileType,
                    tempFilePath: uri,
                    size: assetInfo.byteSize
                } as _MediaFile);
            }
            resolve();
        }));
    });
    await Promise.all(createMediaFile);
    return {
        tempFiles
    } as _chooseMediaSuccessCallbackResult;
}
const ChooseMediaUniErrors: Map<number, string> = new Map([
    [
        1101001,
        'user cancel'
    ],
    [
        1101005,
        "No Permission"
    ],
    [
        1101006,
        "save error"
    ],
    [
        1101008,
        'camera error'
    ],
    [
        1101010,
        "unexpect error"
    ]
]);
class ChooseMediaErrorImpl extends UniError implements IChooseMediaError {
    errCode: ChooseMediaErrorCode;
    constructor(errCode: ChooseMediaErrorCode, uniErrorSubject: string = 'uni-chooseMedia') {
        super();
        this.errSubject = uniErrorSubject;
        this.errCode = errCode;
        this.errMsg = UTS.mapGet(ChooseMediaUniErrors, errCode) ?? "";
    }
}
type CameraPosition = 'back' | 'front';
type UNI_MEDIA_TYPE = 'image' | 'video' | 'mix';
function getHMCameraPosition(cameraType: CameraPosition): camera.CameraPosition {
    switch (cameraType) {
        case 'back':
            return camera.CameraPosition.CAMERA_POSITION_BACK;
        case 'front':
            return camera.CameraPosition.CAMERA_POSITION_FRONT;
        default:
            return camera.CameraPosition.CAMERA_POSITION_BACK;
    }
}
function getCameraPickerMediaTypes(UniMediaTypes: UNI_MEDIA_TYPE[]): cameraPicker.PickerMediaType[] {
    let mediaTypes: Array<cameraPicker.PickerMediaType> = [];
    if (UniMediaTypes.includes('mix')) {
        mediaTypes.push(cameraPicker.PickerMediaType.PHOTO, cameraPicker.PickerMediaType.VIDEO);
    }
    else {
        if (UniMediaTypes.includes('image')) {
            mediaTypes.push(cameraPicker.PickerMediaType.PHOTO);
        }
        if (UniMediaTypes.includes('video')) {
            mediaTypes.push(cameraPicker.PickerMediaType.VIDEO);
        }
    }
    return mediaTypes;
}
const _takeCamera = async (args: ChooseMediaOptions, executor: ApiExecutor<ChooseMediaSuccess>): Promise<void> => {
    try {
        let pickerProfile: cameraPicker.PickerProfile = {
            cameraPosition: getHMCameraPosition(args?.camera ?? 'back'),
            videoDuration: args?.maxDuration ?? 10
        };
        const mediaTypes = getCameraPickerMediaTypes((args.mediaType ?? []) as UNI_MEDIA_TYPE[]);
        const res = await cameraPicker.pick(UTSHarmony.getUIAbilityContext()!, mediaTypes, pickerProfile);
        if (!res) {
            const err = new ChooseMediaErrorImpl(1101010);
            executor.reject(err.message, err as ApiError);
        }
        else if (res.resultCode === -1) {
            const err = new ChooseMediaErrorImpl(1101001);
            executor.reject(err.message, err as ApiError);
        }
        else {
            const assetInfo = await getMediaAssetInfo(res.resultUri);
            const isVideo = assetInfo.fileType === 'video';
            let tempFile: ChooseMediaTempFile = {
                fileType: assetInfo.fileType,
                tempFilePath: res.resultUri,
                size: !isVideo ? assetInfo.byteSize : assetInfo.size,
                byteSize: null,
                thumbTempFilePath: null,
                duration: null,
                height: null,
                width: null
            };
            if (isVideo) {
                tempFile.thumbTempFilePath = assetInfo.thumbTempFilePath!;
                tempFile.byteSize = assetInfo.byteSize!;
                tempFile.duration = assetInfo.duration!;
                tempFile.height = assetInfo.height!;
                tempFile.width = assetInfo.width!;
            }
            executor.resolve({
                type: 'mix',
                tempFiles: [
                    tempFile
                ]
            } as ChooseMediaSuccess);
        }
    }
    catch (error) {
        const err = new ChooseMediaErrorImpl(1101008);
        executor.reject(err.message, err as ApiError);
    }
};
const __chooseMedia = async (args: ChooseMediaOptions, mimeType: photoAccessHelper__1.PhotoViewMIMETypes, executor: ApiExecutor<ChooseMediaSuccess>): Promise<void> => {
    if (args.sourceType?.length === 1 && args.sourceType[0] === 'camera') {
        _takeCamera(args, executor);
    }
    else {
        _chooseMedia({
            mimeType,
            sourceType: [
                "album"
            ],
            count: args.count!
        } as __ChooseMediaOptions).then((res) => {
            executor.resolve({
                type: mimeType === photoAccessHelper__1.PhotoViewMIMETypes.IMAGE_TYPE ? 'image' : mimeType === photoAccessHelper__1.PhotoViewMIMETypes.VIDEO_TYPE ? 'video' : 'mix',
                tempFiles: res.tempFiles.map((tempFile): ChooseMediaTempFile => {
                    if (tempFile.fileType === 'image') {
                        return {
                            fileType: tempFile.fileType,
                            tempFilePath: tempFile.tempFilePath,
                            size: tempFile.size
                        } as ChooseMediaTempFile;
                    }
                    return {
                        thumbTempFilePath: tempFile.thumbTempFilePath,
                        tempFilePath: tempFile.tempFilePath,
                        duration: tempFile.duration,
                        size: tempFile.size,
                        height: tempFile.height,
                        width: tempFile.width,
                        fileType: tempFile.fileType
                    } as ChooseMediaTempFile;
                })
            } as ChooseMediaSuccess);
        }).catch((err: Error) => {
            executor.reject(err.message);
        });
    }
};
const chooseMedia: ChooseMedia = defineAsyncApi<ChooseMediaOptions, ChooseMediaSuccess>(API_CHOOSE_MEDIA, async (args: ChooseMediaOptions, executor: ApiExecutor<ChooseMediaSuccess>): Promise<void> => {
    if (args.mediaType?.length === 1 && args.mediaType[0] === 'image') {
        __chooseMedia(args, photoAccessHelper__1.PhotoViewMIMETypes.IMAGE_TYPE, executor);
        return;
    }
    if (args.mediaType?.length === 1 && args.mediaType[0] === 'video') {
        __chooseMedia(args, photoAccessHelper__1.PhotoViewMIMETypes.VIDEO_TYPE, executor);
        return;
    }
    if (args.sourceType?.length === 1 && args.sourceType[0] === 'camera') {
        _takeCamera(args, executor);
    }
    else {
        uni.showActionSheet({
            itemList: [
                '拍摄',
                '从相册选择'
            ],
            success: (e) => {
                if (e.tapIndex === 0) {
                    _takeCamera(args, executor);
                }
                else if (e.tapIndex === 1) {
                    __chooseMedia(args, photoAccessHelper__1.PhotoViewMIMETypes.IMAGE_VIDEO_TYPE, executor);
                }
            },
            fail: (e) => {
                if (e.errMsg!.includes('cancel')) {
                    executor.reject('cancel');
                }
                else {
                    executor.reject(e.errMsg);
                }
            }
        } as ShowActionSheetOptions);
    }
}, ChooseMediaApiProtocol, ChooseMediaApiOptions) as ChooseMedia;
export { ChooseMediaOptions as ChooseMediaOptions, ChooseMediaSuccess as ChooseMediaSuccess, ChooseMediaTempFile as ChooseMediaTempFile };
export type { ChooseMedia as ChooseMedia, ChooseMediaCompleteCallback as ChooseMediaCompleteCallback, ChooseMediaErrorCode as ChooseMediaErrorCode, ChooseMediaFail as ChooseMediaFail, ChooseMediaFailCallback as ChooseMediaFailCallback, ChooseMediaFileType as ChooseMediaFileType, ChooseMediaPageOrientation as ChooseMediaPageOrientation, ChooseMediaSuccessCallback as ChooseMediaSuccessCallback, IChooseMediaError as IChooseMediaError };
export { chooseMedia as chooseMedia };
