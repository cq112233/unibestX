import common from '@ohos.app.ability.common';
import uniformTypeDescriptor from '@ohos.data.uniformTypeDescriptor';
import fs from '@ohos.file.fs';
import photoAccessHelper from '@ohos.file.photoAccessHelper';
import media from '@ohos.multimedia.media';
import { BusinessError as BusinessError__1 } from '@kit.BasicServicesKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { CompressorResponseCode, CompressorResponse, VideoCompressor, CompressQuality } from '@ohos/videocompressor';
import { IUniError, UTSObject, string, ProtocolOptions, ApiOptions, UTS, defineAsyncApi, ApiExecutor, UTSHarmony, UniError, ApiError, ShowActionSheetOptions, DownloadFileOptions } from "@dcloudio/uni-app-framework";
import { ReadOptions } from '@ohos.file.fs';
import { camera } from '@kit.CameraKit';
import { cameraPicker } from '@kit.CameraKit';
import { fileIo as fs__1 } from '@kit.CoreFileKit';
import { fileIo } from '@kit.CoreFileKit';
import fileUri from '@ohos.file.fileuri';
import fs__2 from '@ohos.file.fs';
import { getEnv as getEnv__1, getResourceStr } from "@dcloudio/uni-app-framework";
import { getEnv } from "@dcloudio/uni-app-framework";
import { getRealPath } from "@dcloudio/uni-app-framework";
import { image as image__1 } from '@kit.ImageKit';
import { image } from '@kit.ImageKit';
import image__2 from '@ohos.multimedia.image';
import photoAccessHelper__1 from '@ohos.file.photoAccessHelper';
import photoAccessHelper__2 from '@ohos.file.photoAccessHelper';
import photoAccessHelper__3 from '@ohos.file.photoAccessHelper';
import { picker, fileIo as fileIo__1 } from '@kit.CoreFileKit';
import { uni as uni__1 } from "@dcloudio/uni-app-framework";
import { uni as uni__2 } from "@dcloudio/uni-app-framework";
import { uni } from "@dcloudio/uni-app-framework";
type MediaOrientation = 'up' | 'down' | 'left' | 'right' | 'up-mirrored' | 'down-mirrored' | 'left-mirrored' | 'right-mirrored';
type MediaErrorCode = 1101001 | 1101002 | 1101003 | 1101004 | 1101005 | 1101006 | 1101007 | 1101008 | 1101009 | 1101010;
interface IMediaError extends IUniError {
    errCode: MediaErrorCode;
}
class ChooseImageTempFile extends UTSObject {
    path!: string;
    size!: number;
    name: string | null = null;
    type: string | null = null;
}
class ChooseImageSuccess extends UTSObject {
    errSubject!: string;
    errMsg!: string;
    tempFilePaths!: Array<string>;
    tempFiles!: ChooseImageTempFile[];
}
type ChooseImageFail = IMediaError;
type ChooseImageSuccessCallback = (callback: ChooseImageSuccess) => void;
type ChooseImageFailCallback = (callback: ChooseImageFail) => void;
type ChooseImageCompleteCallback = (callback: Object) => void;
class ChooseImageCropOptions extends UTSObject {
    width!: number;
    height!: number;
    quality: (number) | null = null;
    resize: (boolean) | null = null;
}
type ChooseImagePageOrientation = "auto" | "portrait" | "landscape";
type ChooseImageAlbumMode = "custom" | "system";
class ChooseImageOptions extends UTSObject {
    pageOrientation: ChooseImagePageOrientation | null = null;
    albumMode: ChooseImageAlbumMode | null = null;
    count: (number) | null = null;
    sizeType: (string[]) | null = null;
    sourceType: (string[]) | null = null;
    extension: (string[]) | null = null;
    crop: (ChooseImageCropOptions) | null = null;
    success: (ChooseImageSuccessCallback) | null = null;
    fail: (ChooseImageFailCallback) | null = null;
    complete: (ChooseImageCompleteCallback) | null = null;
}
type ChooseImage = (options: ChooseImageOptions) => void;
type GetImageInfo = (options: GetImageInfoOptions) => void;
class GetImageInfoSuccess extends UTSObject {
    width!: number;
    height!: number;
    path!: string;
    orientation: MediaOrientation | null = null;
    type: string | null = null;
}
type GetImageInfoFail = IMediaError;
type GetImageInfoSuccessCallback = (callback: GetImageInfoSuccess) => void;
type GetImageInfoFailCallback = (callback: GetImageInfoFail) => void;
type GetImageInfoCompleteCallback = ChooseImageCompleteCallback;
class GetImageInfoOptions extends UTSObject {
    src!: string.ImageURIString;
    success: (GetImageInfoSuccessCallback) | null = null;
    fail: (GetImageInfoFailCallback) | null = null;
    complete: (GetImageInfoCompleteCallback) | null = null;
}
type SaveImageToPhotosAlbum = (options: SaveImageToPhotosAlbumOptions) => void;
class SaveImageToPhotosAlbumSuccess extends UTSObject {
    path!: string;
}
type SaveImageToPhotosAlbumFail = IMediaError;
type SaveImageToPhotosAlbumSuccessCallback = (callback: SaveImageToPhotosAlbumSuccess) => void;
type SaveImageToPhotosAlbumFailCallback = (callback: SaveImageToPhotosAlbumFail) => void;
type SaveImageToPhotosAlbumCompleteCallback = ChooseImageCompleteCallback;
class SaveImageToPhotosAlbumOptions extends UTSObject {
    filePath!: string.ImageURIString;
    success: (SaveImageToPhotosAlbumSuccessCallback) | null = null;
    fail: (SaveImageToPhotosAlbumFailCallback) | null = null;
    complete: (SaveImageToPhotosAlbumCompleteCallback) | null = null;
}
type CompressImage = (options: CompressImageOptions) => void;
class CompressImageSuccess extends UTSObject {
    tempFilePath!: string;
}
type CompressImageFail = IMediaError;
type CompressImageSuccessCallback = (callback: CompressImageSuccess) => void;
type CompressImageFailCallback = (callback: CompressImageFail) => void;
type CompressImageCompleteCallback = ChooseImageCompleteCallback;
class CompressImageOptions extends UTSObject {
    src!: string.ImageURIString;
    quality: number | null = null;
    rotate: number | null = null;
    width: string | null = null;
    height: string | null = null;
    compressedHeight: number | null = null;
    compressedWidth: number | null = null;
    success: (CompressImageSuccessCallback) | null = null;
    fail: (CompressImageFailCallback) | null = null;
    complete: (CompressImageCompleteCallback) | null = null;
}
class ChooseVideoSuccess extends UTSObject {
    tempFilePath!: string;
    duration!: number;
    size!: number;
    height!: number;
    width!: number;
}
type ChooseVideoFail = IMediaError;
type ChooseVideoSuccessCallback = (callback: ChooseVideoSuccess) => void;
type ChooseVideoFailCallback = (callback: ChooseVideoFail) => void;
type ChooseVideoCompleteCallback = ChooseImageCompleteCallback;
type ChooseVideoPageOrientation = ChooseImagePageOrientation;
type ChooseVideoAlbumMode = ChooseImageAlbumMode;
class ChooseVideoOptions extends UTSObject {
    pageOrientation: ChooseVideoPageOrientation | null = null;
    albumMode: ChooseVideoAlbumMode | null = null;
    sourceType: (string[]) | null = null;
    compressed: boolean | null = true;
    maxDuration: number | null = null;
    camera: 'front' | 'back' | null = null;
    extension: (string[]) | null = null;
    success: (ChooseVideoSuccessCallback) | null = null;
    fail: (ChooseVideoFailCallback) | null = null;
    complete: (ChooseVideoCompleteCallback) | null = null;
}
type ChooseVideo = (options: ChooseVideoOptions) => void;
class GetVideoInfoSuccess extends UTSObject {
    orientation: MediaOrientation | null = null;
    type: string | null = null;
    duration!: number;
    size!: number;
    height!: number;
    width!: number;
    fps: number | null = null;
    bitrate: number | null = null;
    thumbTempFilePath: string | null = null;
    byteSize: number | null = null;
}
type GetVideoInfoFail = IMediaError;
type GetVideoInfoSuccessCallback = (callback: GetVideoInfoSuccess) => void;
type GetVideoInfoFailCallback = (callback: GetVideoInfoFail) => void;
type GetVideoInfoCompleteCallback = ChooseImageCompleteCallback;
class GetVideoInfoOptions extends UTSObject {
    src!: string.VideoURIString;
    success: (GetVideoInfoSuccessCallback) | null = null;
    fail: (GetVideoInfoFailCallback) | null = null;
    complete: (GetVideoInfoCompleteCallback) | null = null;
}
type GetVideoInfo = (options: GetVideoInfoOptions) => void;
class SaveVideoToPhotosAlbumSuccess extends UTSObject {
}
type SaveVideoToPhotosAlbumFail = IMediaError;
type SaveVideoToPhotosAlbumSuccessCallback = (callback: SaveVideoToPhotosAlbumSuccess) => void;
type SaveVideoToPhotosAlbumFailCallback = (callback: SaveVideoToPhotosAlbumFail) => void;
type SaveVideoToPhotosAlbumCompleteCallback = ChooseImageCompleteCallback;
class SaveVideoToPhotosAlbumOptions extends UTSObject {
    filePath!: string.VideoURIString;
    success: (SaveVideoToPhotosAlbumSuccessCallback) | null = null;
    fail: (SaveVideoToPhotosAlbumFailCallback) | null = null;
    complete: (SaveVideoToPhotosAlbumCompleteCallback) | null = null;
}
type SaveVideoToPhotosAlbum = (options: SaveVideoToPhotosAlbumOptions) => void;
class CompressVideoSuccess extends UTSObject {
    tempFilePath!: string;
    size!: number;
    byteSize: number | null = null;
}
type CompressVideoFail = IMediaError;
type CompressVideoSuccessCallback = (callback: CompressVideoSuccess) => void;
type CompressVideoFailCallback = (callback: CompressVideoFail) => void;
type CompressVideoCompleteCallback = ChooseImageCompleteCallback;
class CompressVideoOptions extends UTSObject {
    src!: string.VideoURIString;
    quality: string | null = null;
    bitrate: number | null = null;
    fps: number | null = null;
    resolution: number | null = null;
    success: (CompressVideoSuccessCallback) | null = null;
    fail: (CompressVideoFailCallback) | null = null;
    complete: (CompressVideoCompleteCallback) | null = null;
}
type CompressVideo = (options: CompressVideoOptions) => void;
type ChooseFile = (options: ChooseFileOptions) => void;
class ChooseFileSuccess extends UTSObject {
    tempFilePaths!: string[];
    tempFiles!: ChooseFileTempFile[];
}
class ChooseFileTempFile extends UTSObject {
    name!: string;
    path!: string;
    size!: number;
    type!: 'video' | 'image' | 'audio' | 'file';
}
type ChooseFileSuccessCallback = (result: ChooseFileSuccess) => void;
type ChooseFileFail = IMediaError;
type ChooseFileFailCallback = (result: ChooseFileFail) => void;
type ChooseFileComplete = Object;
type ChooseFileCompleteCallback = (result: ChooseFileComplete) => void;
class ChooseFileOptions extends UTSObject {
    count: number | null = null;
    type: 'image' | 'video' | 'audio' | 'all' | null = null;
    extension: (string[]) | null = null;
    sizeType: Object | null = null;
    sourceType: (string[]) | null = null;
    success: ChooseFileSuccessCallback | null = null;
    fail: ChooseFileFailCallback | null = null;
    complete: ChooseFileCompleteCallback | null = null;
}
const API_GET_IMAGE_INFO = 'getImageInfo';
const GetImageInfoApiProtocol = new Map<string, ProtocolOptions>([
    [
        'src',
        {
            type: 'string',
            required: true
        }
    ]
]);
const GetImageInfoApiOptions: ApiOptions<GetImageInfoOptions> = {
    formatArgs: new Map<string, Function>([
        [
            'src',
            (src: string, params: GetImageInfoOptions)=>{
                params.src = getRealPath(src);
            }
        ]
    ])
};
const API_CHOOSE_IMAGE = 'chooseImage';
const ChooseImageApiProtocol = new Map<string, ProtocolOptions>([
    [
        'count',
        {
            type: 'number',
            required: false
        }
    ],
    [
        'sizeType',
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
        'extension',
        {
            type: 'array',
            required: false
        }
    ]
]);
const ChooseImageApiOptions: ApiOptions<ChooseImageOptions> = {
    formatArgs: new Map<string, Function>([
        [
            'count',
            (count: number, params: ChooseImageOptions)=>{
                if (count == null) {
                    params.count = 9;
                }
            }
        ],
        [
            'sizeType',
            (sizeType: string[], params: ChooseImageOptions)=>{
                if (sizeType == null) {
                    params.sizeType = [
                        'original',
                        'compressed'
                    ];
                }
            }
        ],
        [
            'sourceType',
            (sourceType: string[], params: ChooseImageOptions)=>{
                if (sourceType == null) {
                    params.sourceType = [
                        'album',
                        'camera'
                    ];
                }
            }
        ],
        [
            'extension',
            (extension: string[], params: ChooseImageOptions)=>{
                if (extension == null) {
                    params.extension = [
                        '*'
                    ];
                }
            }
        ]
    ])
};
const API_GET_VIDEO_INFO = 'getVideoInfo';
const GetVideoInfoApiProtocol = new Map<string, ProtocolOptions>([
    [
        'src',
        {
            type: 'string',
            required: true
        }
    ]
]);
const GetVideoInfoApiOptions: ApiOptions<GetVideoInfoOptions> = {
    formatArgs: new Map<string, Function>([
        [
            'src',
            (src: string, params: GetVideoInfoOptions)=>{
                params.src = getRealPath(src);
            }
        ]
    ])
};
const API_CHOOSE_VIDEO = 'chooseVideo';
const ChooseVideoApiProtocol = new Map<string, ProtocolOptions>([
    [
        'sourceType',
        {
            type: 'array',
            required: false
        }
    ],
    [
        'compressed',
        {
            type: 'boolean',
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
    ],
    [
        'extension',
        {
            type: 'array',
            required: false
        }
    ]
]);
const ChooseVideoApiOptions: ApiOptions<ChooseVideoOptions> = {
    formatArgs: new Map<string, Function>([
        [
            'sourceType',
            (sourceType: string[], params: ChooseVideoOptions)=>{
                if (sourceType == null) {
                    params.sourceType = [
                        'album',
                        'camera'
                    ];
                }
            }
        ],
        [
            'compressed',
            (compressed: boolean, params: ChooseVideoOptions)=>{
                if (compressed == null) {
                    params.compressed = true;
                }
            }
        ],
        [
            'maxDuration',
            (maxDuration: number, params: ChooseVideoOptions)=>{
                if (maxDuration == null) {
                    params.maxDuration = 60;
                }
            }
        ],
        [
            'camera',
            (camera: string, params: ChooseVideoOptions)=>{
                if (camera == null) {
                    params.camera = 'back';
                }
            }
        ],
        [
            'extension',
            (extension: string[], params: ChooseVideoOptions)=>{
                if (extension == null) {
                    params.extension = [
                        '*'
                    ];
                }
            }
        ]
    ])
};
const API_SAVE_IMAGE_TO_PHOTOS_ALBUM = 'saveImageToPhotosAlbum';
const SaveImageToPhotosAlbumApiProtocol = new Map<string, ProtocolOptions>([
    [
        'filePath',
        {
            type: 'string',
            required: true
        }
    ]
]);
const API_SAVE_VIDEO_TO_PHOTOS_ALBUM = 'saveVideoToPhotosAlbum';
const SaveVideoToPhotosAlbumApiProtocol = new Map<string, ProtocolOptions>([
    [
        'filePath',
        {
            type: 'string',
            required: true
        }
    ]
]);
const API_COMPRESS_IMAGE = 'compressImage';
const CompressImageApiOptions: ApiOptions<CompressImageOptions> = {
    formatArgs: new Map<string, Function>([
        [
            'src',
            (src: string, params: CompressImageOptions)=>{
                if (src) params.src = getRealPath(src);
            }
        ],
        [
            'quality',
            (quality: number, params: CompressImageOptions)=>{
                if (quality == null) {
                    params.quality = 80;
                }
            }
        ]
    ])
};
const CompressImageApiProtocol = new Map<string, ProtocolOptions>([
    [
        'src',
        {
            type: 'string',
            required: true
        }
    ],
    [
        'quality',
        {
            type: 'number'
        }
    ],
    [
        'compressedWidth',
        {
            type: 'number'
        }
    ],
    [
        'compressedHeight',
        {
            type: 'number'
        }
    ]
]);
const API_CHOOSE_FILE = 'chooseFile';
const CHOOSE_MEDIA_TYPE: string[] = [
    'all',
    'image',
    'video'
];
const CHOOSE_FILE_SOURCE_TYPE: string[] = [
    'album',
    'camera'
];
const ChooseFileApiOptions: ApiOptions<ChooseFileOptions> = {
    formatArgs: new Map<string, Function>([
        [
            'count',
            (count: number, params: ChooseFileOptions)=>{
                if (!count || count <= 0) {
                    params.count = 100;
                }
                return undefined;
            }
        ],
        [
            'sourceType',
            (sourceType: string[] = [], params: ChooseFileOptions)=>{
                sourceType = sourceType.filter((type): boolean =>CHOOSE_FILE_SOURCE_TYPE.includes(type));
                if (!sourceType.length) {
                    params.sourceType = [
                        'album',
                        'camera'
                    ];
                }
                return undefined;
            }
        ],
        [
            'type',
            (type: string = 'all', params: ChooseFileOptions)=>{
                if (!CHOOSE_MEDIA_TYPE.includes(type)) {
                    params.type = 'all';
                }
                return undefined;
            }
        ],
        [
            'extension',
            (extension: string[], params: ChooseFileOptions): string | undefined =>{
                if (extension instanceof Array && extension.length === 0) {
                    return 'param extension should not be empty.';
                }
                if (!extension) params.extension = [
                    ''
                ];
                return undefined;
            }
        ]
    ])
};
const ChooseFileApiProtocol = new Map<string, ProtocolOptions>([
    [
        'count',
        {
            type: 'number'
        }
    ],
    [
        'sourceType',
        {
            type: 'array'
        }
    ],
    [
        'type',
        {
            'type': 'string'
        }
    ],
    [
        'extension',
        {
            type: 'array'
        }
    ]
]);
const API_COMPRESS_VIDEO = 'compressVideo';
const CompressVideoApiOptions: ApiOptions<CompressVideoOptions> = {
    formatArgs: new Map<string, Function>([
        [
            'src',
            (src: string, params: CompressVideoOptions)=>{
                if (src) params.src = getRealPath(src);
            }
        ]
    ])
};
const CompressVideoApiProtocol = new Map<string, ProtocolOptions>([
    [
        'src',
        {
            type: 'string',
            required: true
        }
    ],
    [
        'quality',
        {
            type: 'string'
        }
    ],
    [
        'bitrate',
        {
            type: 'number'
        }
    ],
    [
        'fps',
        {
            type: 'number'
        }
    ],
    [
        'resolution',
        {
            type: 'number'
        }
    ]
]);
async function compressedImage(sourcePixelMap: image.PixelMap, maxCompressedImageByte: number, imageQuality: number = 0): Promise<ArrayBuffer> {
    let compressedImageData: ArrayBuffer = new ArrayBuffer(0);
    const packingArray: number[] = [];
    const DICHOTOMY_ACCURACY = 2;
    for(let i = 0; i <= 100; i += DICHOTOMY_ACCURACY){
        packingArray.push(i);
    }
    let left = 0;
    let right = packingArray.length - 1;
    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        imageQuality = packingArray[mid];
        compressedImageData = await packing(sourcePixelMap, imageQuality);
        if (compressedImageData.byteLength <= maxCompressedImageByte) {
            left = mid + 1;
            if (mid === packingArray.length - 1) {
                break;
            }
            const compressedImageData2 = await packing(sourcePixelMap, packingArray[mid + 1]);
            if (compressedImageData2.byteLength > maxCompressedImageByte) {
                break;
            }
        } else {
            right = mid - 1;
        }
    }
    return compressedImageData;
}
async function packing(sourcePixelMap: image.PixelMap, imageQuality: number): Promise<ArrayBuffer> {
    const imagePackerApi = image.createImagePacker();
    const packOpts: image.PackingOption = {
        format: "image/jpeg",
        quality: imageQuality
    };
    const data: ArrayBuffer = await imagePackerApi.packing(sourcePixelMap, packOpts);
    return data;
}
interface _CompressImageSuccess {
    size: number;
    tempFilePath: string;
}
function getFileName(path: string): string {
    const array = path.split('/');
    return array[array.length - 1];
}
let id: number = 0;
const SUPPORTED_COMPRESSION_EXTENSIONS_JPEG = [
    'jpg',
    'jpe',
    'jpeg',
    'png'
];
function _compressImage(args: CompressImageOptions): Promise<_CompressImageSuccess> {
    const imageName = getFileName(args.src);
    const imageExt = imageName.split('.').slice(-1)[0];
    if (!SUPPORTED_COMPRESSION_EXTENSIONS_JPEG.concat([
        'webp',
        'heif'
    ]).includes(imageExt)) {
        const fd = fileIo.openSync(args.src, fileIo.OpenMode.READ_ONLY).fd;
        const size = fileIo.statSync(fd).size;
        fileIo.closeSync(fd);
        return Promise.resolve({
            size,
            tempFilePath: args.src
        } as _CompressImageSuccess);
    }
    const imagePacker: image__1.ImagePacker = image__1.createImagePacker();
    const file2 = fileIo.openSync(args.src, fileIo.OpenMode.READ_ONLY);
    if (!file2) {
        throw new Error('open file failed');
    }
    const imageSource: image__1.ImageSource = image__1.createImageSource(file2.fd);
    const originalImageSize: number = fileIo.statSync(file2.fd).size;
    if (imageSource == null) {
        throw new Error('create image source failed');
    }
    let decodingOptions: image__1.DecodingOptions = {
        editable: true,
        desiredPixelFormat: image__1.PixelMapFormat.RGBA_8888
    };
    if (args.rotate != null) {
        decodingOptions.rotate = args.rotate;
    }
    let compressedWidth = args.compressedWidth;
    let compressedHeight = args.compressedHeight;
    if (compressedHeight != null || compressedWidth != null) {
        const imageInfo = imageSource.getImageInfoSync();
        if (typeof compressedWidth === 'number' && compressedHeight == null) {
            compressedHeight = imageInfo.size.height * (compressedWidth / imageInfo.size.width);
        }
        if (typeof compressedHeight === 'number' && compressedWidth == null) {
            compressedWidth = imageInfo.size.width * (compressedHeight / imageInfo.size.height);
        }
        decodingOptions.desiredSize = {
            height: compressedHeight!,
            width: compressedWidth!
        };
    }
    return imageSource.createPixelMap(decodingOptions).then((pixelMap): Promise<_CompressImageSuccess> =>{
        let format: string = '';
        if (SUPPORTED_COMPRESSION_EXTENSIONS_JPEG.includes(imageExt)) {
            format = 'image/jpeg';
        }
        if (imageExt === 'webp') format = 'image/webp';
        if (imageExt === 'heif') format = 'image/heif';
        if (!format.length) {
            UTS.console.error('error image format');
            const fd = fileIo.openSync(args.src, fileIo.OpenMode.READ_ONLY).fd;
            const size = fileIo.statSync(fd).size;
            fileIo.closeSync(fd);
            return Promise.resolve({
                size,
                tempFilePath: args.src
            } as _CompressImageSuccess);
        }
        const packOptions: image__1.PackingOption = {
            format,
            quality: args.quality ?? 80
        };
        const tempFileName = `${Date.now()}_${id++}.${imageExt}`;
        const tempDirPath = `${getEnv().CACHE_PATH}/uni-media`;
        if (!fileIo.accessSync(tempDirPath)) {
            fileIo.mkdirSync(tempDirPath, true);
        }
        const tempFilePath: string = `${tempDirPath}/${tempFileName}`;
        const file = fileIo.openSync(tempFilePath, fileIo.OpenMode.CREATE | fileIo.OpenMode.READ_WRITE);
        return imagePacker.packToFile(pixelMap, file.fd, packOptions).then((): Promise<_CompressImageSuccess> =>{
            const size = fileIo.statSync(file.fd).size;
            if (size > originalImageSize) {
                return compressedImage(pixelMap, originalImageSize, packOptions.quality).then((buffer): _CompressImageSuccess =>{
                    const file = fileIo.openSync(tempFilePath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.TRUNC);
                    fileIo.writeSync(file.fd, buffer);
                    const size = fileIo.statSync(file.fd).size;
                    fileIo.closeSync(file.fd);
                    return {
                        size,
                        tempFilePath
                    } as _CompressImageSuccess;
                });
            }
            return Promise.resolve({
                size,
                tempFilePath
            } as _CompressImageSuccess);
        }).finally(()=>{
            fileIo.closeSync(file.fd);
            imagePacker.release();
        });
    });
}
const compressImage: CompressImage = defineAsyncApi<CompressImageOptions, CompressImageSuccess>(API_COMPRESS_IMAGE, (args: CompressImageOptions, executor: ApiExecutor<CompressImageSuccess>)=>{
    try {
        _compressImage(args).then((res)=>{
            executor.resolve({
                tempFilePath: res.tempFilePath
            } as CompressImageSuccess);
        });
    } catch (error) {
        executor.reject((error as BusinessError).message);
    }
}, CompressImageApiProtocol, CompressImageApiOptions) as CompressImage;
interface MediaFile {
    fileType: 'video' | 'image';
    tempFilePath: string;
    size: number;
    width?: number;
    height?: number;
    duration?: number;
    thumbTempFilePath?: string;
}
interface _ChooseMediaOptions {
    original?: boolean;
    mimeType: photoAccessHelper.PhotoViewMIMETypes.VIDEO_TYPE | photoAccessHelper.PhotoViewMIMETypes.IMAGE_TYPE | photoAccessHelper.PhotoViewMIMETypes.IMAGE_VIDEO_TYPE;
    count?: number;
    sourceType?: ('album' | 'camera')[];
    isOriginalSupported?: boolean;
}
interface chooseMediaSuccessCallbackResult {
    tempFiles: MediaFile[];
}
async function _getVideoInfo(uri: string, sizeUnit: 'B' | 'KB' = 'B'): Promise<GetVideoInfoSuccess> {
    const file = await fs.open(uri, fs.OpenMode.READ_ONLY);
    const avMetadataExtractor = await media.createAVMetadataExtractor();
    let metadata: media.AVMetadata | null = null;
    let size: number = 0;
    try {
        const fileSize = (await fs.stat(file.fd)).size;
        size = sizeUnit === 'KB' ? fileSize / 1024 : fileSize;
        avMetadataExtractor.dataSrc = {
            fileSize,
            callback: (buffer: ArrayBuffer, length: number, pos: number | null = null): number =>{
                return fs.readSync(file.fd, buffer, {
                    offset: pos,
                    length
                } as ReadOptions);
            }
        };
        metadata = await avMetadataExtractor.fetchMetadata();
    } catch (error) {
        throw error as Error;
    } finally {
        await avMetadataExtractor.release();
        await fs.close(file);
    }
    const videoOrientationArr = [
        'up',
        'right',
        'down',
        'left'
    ] as MediaOrientation[];
    return {
        size: size,
        duration: metadata.duration ? Number(metadata.duration) / 1000 : undefined,
        width: metadata.videoWidth ? Number(metadata.videoWidth) : undefined,
        height: metadata.videoHeight ? Number(metadata.videoHeight) : undefined,
        type: metadata.mimeType,
        orientation: metadata.videoOrientation ? videoOrientationArr[Number(metadata.videoOrientation) / 90] : undefined
    } as GetVideoInfoSuccess;
}
async function _getImageInfo(uri: string): Promise<GetImageInfoSuccess> {
    const file = await fs.open(uri, fs.OpenMode.READ_ONLY);
    const imageSource = image__2.createImageSource(file.fd);
    const imageInfo = await imageSource.getImageInfo();
    let orientation: string = '';
    try {
        orientation = await imageSource.getImageProperty(image__2.PropertyKey.ORIENTATION);
    } catch (error) {}
    const mimeType = imageInfo.mimeType;
    await imageSource.release();
    await fs.close(file.fd);
    let orientationNum = 0;
    if (typeof orientation === 'string') {
        const matched = orientation.match(/^Unknown value (\d)$/);
        if (matched && matched[1]) {
            orientationNum = Number(matched[1]);
        } else if (/^\d$/.test(orientation)) {
            orientationNum = Number(orientation);
        }
    } else if (typeof orientation === 'number') {
        orientationNum = orientation;
    }
    let orientationStr: MediaOrientation = 'up';
    switch(orientationNum){
        case 2:
            orientationStr = 'up-mirrored';
            break;
        case 3:
            orientationStr = 'down';
            break;
        case 4:
            orientationStr = 'down-mirrored';
            break;
        case 5:
            orientationStr = 'left-mirrored';
            break;
        case 6:
            orientationStr = 'right';
            break;
        case 7:
            orientationStr = 'right-mirrored';
            break;
        case 8:
            orientationStr = 'left';
            break;
        case 0:
        case 1:
        default:
            orientationStr = 'up';
            break;
    }
    return {
        path: uri,
        width: imageInfo.size.width,
        height: imageInfo.size.height,
        orientation: orientationStr,
        type: UTSHarmony.getExtensionFromMimeType(mimeType) as string
    } as GetImageInfoSuccess;
}
async function _chooseMedia(options: _ChooseMediaOptions): Promise<chooseMediaSuccessCallbackResult> {
    const photoSelectOptions = new photoAccessHelper.PhotoSelectOptions();
    const mimeType = options.mimeType;
    photoSelectOptions.MIMEType = mimeType;
    if (mimeType === photoAccessHelper.PhotoViewMIMETypes.VIDEO_TYPE) {
        photoSelectOptions.maxSelectNumber = 1;
    } else {
        photoSelectOptions.maxSelectNumber = options.count || 9;
    }
    photoSelectOptions.isOriginalSupported = options.isOriginalSupported;
    photoSelectOptions.isPhotoTakingSupported = !(options.sourceType && !options.sourceType.includes('camera'));
    const photoPicker = new photoAccessHelper.PhotoViewPicker();
    const photoSelectResult = await photoPicker.select(photoSelectOptions);
    const uris = photoSelectResult.photoUris;
    if (mimeType !== photoAccessHelper.PhotoViewMIMETypes.VIDEO_TYPE) {
        let realUris: string[] = uris;
        if (!photoSelectResult.isOriginalPhoto && options.original !== true) {
            const compressResult = await Promise.all(uris.map((uri): Promise<CompressImageSuccess> =>{
                return _compressImage({
                    src: uri,
                    quality: 80
                } as CompressImageOptions);
            }));
            realUris = compressResult.map((result): string =>result.tempFilePath);
        }
        return {
            tempFiles: realUris.map((uri): MediaFile =>{
                const file = fs.openSync(uri, fs.OpenMode.READ_ONLY);
                const stat = fs.statSync(file.fd);
                fs.closeSync(file);
                return {
                    fileType: 'image',
                    tempFilePath: uri,
                    size: stat.size
                } as MediaFile;
            })
        };
    }
    const tempFiles: MediaFile[] = [];
    for(let i = 0; i < uris.length; i++){
        const uri = uris[i];
        const videoInfo = await _getVideoInfo(uri);
        tempFiles.push({
            fileType: 'video',
            tempFilePath: uri,
            size: videoInfo.size,
            duration: videoInfo.duration,
            width: videoInfo.width,
            height: videoInfo.height
        } as MediaFile);
    }
    return {
        tempFiles
    } as chooseMediaSuccessCallbackResult;
}
function getMimeTypeFromExtension(extension: string): string | null {
    const typeId = uniformTypeDescriptor.getUniformDataTypeByFilenameExtension('.' + extension);
    const typeObj = uniformTypeDescriptor.getTypeDescriptor(typeId);
    const mimeTypes = typeObj.mimeTypes;
    return mimeTypes[0] || null;
}
const MediaUniErrors: Map<number, string> = new Map([
    [
        1101001,
        'user cancel'
    ],
    [
        1101002,
        'fail parameter error: parameter.urls should have at least 1 item'
    ],
    [
        1101003,
        "file not find"
    ],
    [
        1101004,
        "Failed to load resource"
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
        1101007,
        "crop error"
    ],
    [
        1101008,
        'camera error'
    ],
    [
        1101009,
        "image output failed"
    ],
    [
        1101010,
        "unexpect error:"
    ]
]);
class MediaErrorImpl extends UniError implements IMediaError {
    errCode: MediaErrorCode;
    constructor(errCode: MediaErrorCode, uniErrorSubject: string){
        super();
        this.errSubject = uniErrorSubject;
        this.errCode = errCode;
        this.errMsg = UTS.mapGet(MediaUniErrors, errCode) ?? "";
    }
}
type CameraPosition = 'back' | 'front';
function getHMCameraPosition(cameraType: CameraPosition): camera.CameraPosition {
    switch(cameraType){
        case 'back':
            return camera.CameraPosition.CAMERA_POSITION_BACK;
        case 'front':
            return camera.CameraPosition.CAMERA_POSITION_FRONT;
        default:
            return camera.CameraPosition.CAMERA_POSITION_BACK;
    }
}
interface TempFiles {
    tempFilePath: string;
    size: number;
}
interface TakePhotoRes {
    tempFiles: TempFiles[];
}
const takePhoto = async (errSubject: string, cameraType: CameraPosition = 'back'): Promise<TakePhotoRes> =>{
    let pickerProfile: cameraPicker.PickerProfile = {
        cameraPosition: getHMCameraPosition(cameraType)
    };
    const res = await cameraPicker.pick(UTSHarmony.getUIAbilityContext()!, [
        cameraPicker.PickerMediaType.PHOTO
    ], pickerProfile);
    if (!res) {
        const err = new MediaErrorImpl(1101010, errSubject);
        return Promise.reject(err);
    }
    if (res.resultCode === -1) {
        const err = new MediaErrorImpl(1101001, errSubject);
        return Promise.reject(err);
    }
    const file = fs__1.openSync(res.resultUri, fs__1.OpenMode.READ_ONLY);
    const stat = fs__1.statSync(file.fd);
    return {
        tempFiles: [
            {
                tempFilePath: res.resultUri,
                size: stat.size
            }
        ]
    } as TakePhotoRes;
};
interface TakeVideoOptions {
    cameraType?: CameraPosition;
    videoDuration?: number;
}
interface TakeVideoRes {
    path: string;
    duration: number;
    size: number;
    height: number;
    width: number;
    orientation: MediaOrientation;
    type: string;
}
const takeVideo = async (errSubject: string, args: TakeVideoOptions | null = null): Promise<TakeVideoRes> =>{
    let pickerProfile: cameraPicker.PickerProfile = {
        cameraPosition: getHMCameraPosition(args?.cameraType ?? 'back'),
        videoDuration: args?.videoDuration
    };
    const res = await cameraPicker.pick(UTSHarmony.getUIAbilityContext()!, [
        cameraPicker.PickerMediaType.VIDEO
    ], pickerProfile);
    if (!res) {
        const err = new MediaErrorImpl(1101010, errSubject);
        return Promise.reject(err);
    }
    if (res.resultCode === -1) {
        const err = new MediaErrorImpl(1101001, errSubject);
        return Promise.reject(err);
    }
    return _getVideoInfo(res.resultUri).then((getVideInfoRes)=>{
        return {
            path: res.resultUri,
            size: getVideInfoRes.size,
            duration: getVideInfoRes.duration!,
            width: getVideInfoRes.width!,
            height: getVideInfoRes.height!,
            type: getVideInfoRes.type!,
            orientation: getVideInfoRes.orientation!
        } as TakeVideoRes;
    });
};
const errSubject = 'uni-chooseImage';
const _chooseImage = (options: ChooseImageOptions, res: ApiExecutor<ChooseImageSuccess>)=>{
    _chooseMedia({
        mimeType: photoAccessHelper__1.PhotoViewMIMETypes.IMAGE_TYPE,
        sourceType: [
            "album"
        ],
        isOriginalSupported: options.sizeType ? options.sizeType.includes('original') && options.sizeType.includes('compressed') : true,
        original: options.sizeType ? options.sizeType.length === 1 && options.sizeType[0] === 'original' : false,
        count: options.count!
    } as _ChooseMediaOptions).then((chooseMediaRes)=>{
        const tempFiles = chooseMediaRes.tempFiles;
        if (tempFiles.length === 0) {
            const errMsg = UTS.mapGet(MediaUniErrors, 1101001) as string;
            res.reject(errMsg, {
                errCode: 1101001
            } as ApiError);
            return;
        }
        res.resolve({
            errMsg: '',
            errSubject,
            tempFilePaths: chooseMediaRes.tempFiles.map((file): string =>file.tempFilePath),
            tempFiles: chooseMediaRes.tempFiles.map((file): ChooseImageTempFile =>{
                return {
                    path: file.tempFilePath,
                    size: file.size
                } as ChooseImageTempFile;
            })
        } as ChooseImageSuccess);
    }, (err: Error)=>{
        res.reject(err.message);
    });
};
const _takePhoto = (options: ChooseImageOptions, res: ApiExecutor<ChooseImageSuccess>)=>{
    takePhoto(errSubject).then((photo)=>{
        res.resolve({
            errMsg: '',
            errSubject,
            tempFilePaths: photo.tempFiles.map((file): string =>file.tempFilePath),
            tempFiles: photo.tempFiles.map((tempFile): ChooseImageTempFile =>({
                    path: tempFile.tempFilePath,
                    size: tempFile.size
                } as ChooseImageTempFile))
        } as ChooseImageSuccess);
    }).catch((err: Error)=>{
        res.reject(err.message, err as ApiError);
    });
};
const chooseImage: ChooseImage = defineAsyncApi<ChooseImageOptions, ChooseImageSuccess>(API_CHOOSE_IMAGE, async (options: ChooseImageOptions, res: ApiExecutor<ChooseImageSuccess>): Promise<void> =>{
    if (options.sourceType?.length === 1 && options.sourceType[0] === 'camera') {
        _takePhoto(options, res);
    } else if (options.sourceType?.length === 1 && options.sourceType[0] === 'album') {
        _chooseImage(options, res);
    } else {
        uni.showActionSheet({
            itemList: [
                '拍摄',
                '从相册选择'
            ],
            success: (e)=>{
                if (e.tapIndex === 0) {
                    _takePhoto(options, res);
                } else if (e.tapIndex === 1) {
                    _chooseImage(options, res);
                }
            },
            fail: (e)=>{
                if (e.errMsg!.includes('cancel')) {
                    res.reject('cancel');
                } else {
                    res.reject();
                }
            }
        } as ShowActionSheetOptions);
    }
}, ChooseImageApiProtocol, ChooseImageApiOptions) as ChooseImage;
const errSubject__1 = 'uni-chooseVideo';
const _chooseVideo = (options: ChooseVideoOptions, res: ApiExecutor<ChooseVideoSuccess>)=>{
    _chooseMedia({
        mimeType: photoAccessHelper__2.PhotoViewMIMETypes.VIDEO_TYPE,
        sourceType: [
            "album"
        ],
        isOriginalSupported: options.compressed === true,
        original: options.compressed === false
    } as _ChooseMediaOptions).then((chooseMediaRes)=>{
        const file = chooseMediaRes.tempFiles[0];
        if (!file) {
            const errMsg = UTS.mapGet(MediaUniErrors, 1101001) as string;
            res.reject(errMsg, {
                errCode: 1101001
            } as ApiError);
            return;
        }
        res.resolve({
            tempFilePath: file.tempFilePath,
            duration: file.duration,
            size: file.size,
            width: file.width,
            height: file.height
        } as ChooseVideoSuccess);
    }, (err: Error)=>{
        res.reject(err.message);
    });
};
const _takeVideo = (options: ChooseVideoOptions, res: ApiExecutor<ChooseVideoSuccess>)=>{
    const takeVideoOptions: TakeVideoOptions = {
        cameraType: options.camera! as CameraPosition,
        videoDuration: options.maxDuration!
    };
    takeVideo(errSubject__1, takeVideoOptions).then((video)=>{
        res.resolve({
            tempFilePath: video.path,
            duration: video.duration,
            size: video.size,
            width: video.width,
            height: video.height
        } as ChooseVideoSuccess);
    }).catch((err: Error)=>{
        res.reject(err.message, err as ApiError);
    });
};
const chooseVideo: ChooseVideo = defineAsyncApi<ChooseVideoOptions, ChooseVideoSuccess>(API_CHOOSE_VIDEO, async (options: ChooseVideoOptions, res: ApiExecutor<ChooseVideoSuccess>): Promise<void> =>{
    if (options.sourceType?.length === 1 && options.sourceType[0] === 'camera') {
        _takeVideo(options, res);
    } else if (options.sourceType?.length === 1 && options.sourceType[0] === 'album') {
        _chooseVideo(options, res);
    } else {
        uni__1.showActionSheet({
            itemList: [
                '拍摄',
                '从相册选择'
            ],
            success: (e)=>{
                if (e.tapIndex === 0) {
                    _takeVideo(options, res);
                } else if (e.tapIndex === 1) {
                    _chooseVideo(options, res);
                }
            },
            fail: (e)=>{
                if (e.errMsg!.includes('cancel')) {
                    res.reject('cancel');
                } else {
                    res.reject();
                }
            }
        } as ShowActionSheetOptions);
    }
}, ChooseVideoApiProtocol, ChooseVideoApiOptions) as ChooseVideo;
interface IGetImageInfoDownloadFail {
    errMsg: string;
}
const getImageInfo: GetImageInfo = defineAsyncApi<GetImageInfoOptions, GetImageInfoSuccess>(API_GET_IMAGE_INFO, async (options: GetImageInfoOptions, res: ApiExecutor<GetImageInfoSuccess>): Promise<void> =>{
    let src = options.src;
    if (src.startsWith('http:') || src.startsWith('https:')) {
        try {
            src = await new Promise<string>((resolve, reject)=>{
                uni__2.downloadFile({
                    url: options.src,
                    success: (res)=>{
                        resolve(res.tempFilePath);
                    },
                    fail: (err)=>{
                        reject(err);
                    }
                } as DownloadFileOptions);
            });
        } catch (err) {
            const error = err as IGetImageInfoDownloadFail;
            res.reject(error.errMsg);
            return;
        }
    }
    _getImageInfo(src).then((getImageInfoRes)=>{
        res.resolve(getImageInfoRes);
    }, (err: Error)=>{
        res.reject(err.message);
    });
}, GetImageInfoApiProtocol, GetImageInfoApiOptions) as GetImageInfo;
const getVideoInfo: GetVideoInfo = defineAsyncApi<GetVideoInfoOptions, GetVideoInfoSuccess>(API_GET_VIDEO_INFO, (options: GetVideoInfoOptions, res: ApiExecutor<GetVideoInfoSuccess>)=>{
    _getVideoInfo(options.src, 'KB').then((getVideInfoRes)=>{
        res.resolve({
            size: getVideInfoRes.size,
            duration: getVideInfoRes.duration!,
            width: getVideInfoRes.width!,
            height: getVideInfoRes.height!,
            type: getVideInfoRes.type!,
            orientation: getVideInfoRes.orientation!
        } as GetVideoInfoSuccess);
    }, (err: Error)=>{
        res.reject(err.message);
    });
}, GetVideoInfoApiProtocol, GetVideoInfoApiOptions) as GetVideoInfo;
async function saveResource(src: Resource, dest: string): Promise<void> {
    const context = UTSHarmony.getUIAbilityContext() as common.UIAbilityContext;
    const resourceManager = context.resourceManager;
    const srcPath: string = src.params?.[0] as string;
    const destFile = fs__2.openSync(dest, fs__2.OpenMode.WRITE_ONLY);
    const content = await resourceManager.getRawFileContent(srcPath);
    await fs__2.write(destFile.fd, content.buffer as ArrayBuffer);
    await fs__2.close(destFile);
}
async function saveUri(src: string, dest: string): Promise<void> {
    const srcFile = fs__2.openSync(src, fs__2.OpenMode.READ_ONLY);
    const destFile = fs__2.openSync(dest, fs__2.OpenMode.WRITE_ONLY);
    await fs__2.copyFile(srcFile.fd, destFile.fd);
    await fs__2.close(srcFile);
    await fs__2.close(destFile);
}
interface ISaveMediaError {
    code: number;
    message: string;
}
function fileExists(filePath: string): boolean {
    try {
        fs__2.statSync(filePath);
        return true;
    } catch (error) {
        return false;
    }
}
async function saveMediaToAlbum(fromUri: string, type: 'image' | 'video'): Promise<string | ISaveMediaError> {
    const realPath = getResourceStr(fromUri) as string | Resource;
    const context = UTSHarmony.getUIAbilityContext() as common.UIAbilityContext;
    let fileName = Date.now() + (type === 'image' ? '.png' : '.mp4');
    const isResource = typeof realPath !== 'string';
    if (isResource) {
        if (typeof realPath.params?.[0] === 'string') {
            fileName = UTS.arrayPop(realPath.params?.[0].split('/')) || fileName;
        }
    } else {
        fileName = UTS.arrayPop(realPath.split('/')) || fileName;
    }
    const phAccessHelper = photoAccessHelper__3.getPhotoAccessHelper(context);
    const fileNameParts = fileName.split('.');
    const title = fileNameParts[0];
    const fileNameExtension = UTS.arrayPop(fileNameParts)!;
    const photoCreationConfigs: Array<photoAccessHelper__3.PhotoCreationConfig> = [
        {
            title,
            fileNameExtension,
            photoType: type === 'image' ? photoAccessHelper__3.PhotoType.IMAGE : photoAccessHelper__3.PhotoType.VIDEO
        }
    ];
    let showUri = '';
    if (isResource) {
        showUri = fromUri;
    } else if (realPath.startsWith('file:///data')) {
        showUri = fileUri.getUriFromPath(realPath.slice(7));
    } else if (realPath.startsWith('file://')) {
        showUri = realPath;
    } else {
        showUri = fileUri.getUriFromPath(realPath);
    }
    const resourceDir = getContext().resourceDir;
    if (showUri.indexOf(resourceDir + '/') > -1) {
        const saveMediaCachePath = getEnv__1().TEMP_PATH + '/saveMediaCache';
        if (!fileExists(saveMediaCachePath)) {
            fs__2.mkdirSync(saveMediaCachePath, true);
        }
        const cachedFileName = saveMediaCachePath + '/' + fileName;
        const srcFile = await fs__2.open(showUri, fs__2.OpenMode.READ_ONLY);
        if (fileExists(cachedFileName)) {
            await fs__2.unlink(cachedFileName);
        }
        const destFile = await fs__2.open(saveMediaCachePath + '/' + fileName, fs__2.OpenMode.WRITE_ONLY | fs__2.OpenMode.CREATE);
        await fs__2.copyFile(srcFile.fd, destFile.fd);
        await fs__2.close(srcFile);
        await fs__2.close(destFile);
        showUri = fileUri.getUriFromPath(cachedFileName);
    }
    const desFileUris: Array<string> = await phAccessHelper.showAssetsCreationDialog([
        showUri
    ], photoCreationConfigs);
    if (!desFileUris || desFileUris.length === 0) {
        return {
            code: 1101001,
            message: UTS.mapGet(MediaUniErrors, 1101001) as string
        } as ISaveMediaError;
    }
    const destUri = desFileUris[0];
    if (!destUri.startsWith('file://')) {
        return {
            code: 1101006,
            message: (UTS.mapGet(MediaUniErrors, 1101006) as string) + ', code: ' + destUri
        } as ISaveMediaError;
    }
    if (isResource) {
        await saveResource(realPath as Resource, destUri);
    } else {
        await saveUri(realPath as string, destUri);
    }
    return destUri;
}
const saveImageToPhotosAlbum: SaveImageToPhotosAlbum = defineAsyncApi<SaveImageToPhotosAlbumOptions, SaveImageToPhotosAlbumSuccess>(API_SAVE_IMAGE_TO_PHOTOS_ALBUM, (options: SaveImageToPhotosAlbumOptions, res: ApiExecutor<SaveImageToPhotosAlbumSuccess>)=>{
    saveMediaToAlbum(options.filePath, 'image').then((uri)=>{
        if (typeof uri === 'object') {
            const err = uri as ISaveMediaError;
            res.reject(err.message, {
                errCode: err.code
            } as ApiError);
            return;
        }
        res.resolve({
            path: uri
        } as SaveImageToPhotosAlbumSuccess);
    }, (err: Error)=>{
        res.reject(err.message);
    });
}, SaveImageToPhotosAlbumApiProtocol) as SaveImageToPhotosAlbum;
const saveVideoToPhotosAlbum: SaveVideoToPhotosAlbum = defineAsyncApi<SaveVideoToPhotosAlbumOptions, SaveVideoToPhotosAlbumSuccess>(API_SAVE_VIDEO_TO_PHOTOS_ALBUM, (options: SaveVideoToPhotosAlbumOptions, res: ApiExecutor<SaveVideoToPhotosAlbumSuccess>)=>{
    saveMediaToAlbum(options.filePath, 'video').then((uri)=>{
        if (typeof uri === 'object') {
            const err = uri as ISaveMediaError;
            res.reject(err.message, {
                errCode: err.code
            } as ApiError);
            return;
        }
        res.resolve({} as SaveVideoToPhotosAlbumSuccess);
    }, (err: Error)=>{
        res.reject(err.message);
    });
}, SaveVideoToPhotosAlbumApiProtocol) as SaveVideoToPhotosAlbum;
const IMAGES: string[] = [
    "jpg",
    "jpe",
    "pbm",
    "pgm",
    "pnm",
    "ppm",
    "psd",
    "pic",
    "rgb",
    "svg",
    "svgz",
    "tif",
    "xif",
    "wbmp",
    "wdp",
    "xbm",
    "ico"
];
const VIDEOS: string[] = [
    "3g2",
    "3gp",
    "avi",
    "f4v",
    "flv",
    "jpgm",
    "jpgv",
    "m1v",
    "m2v",
    "mpe",
    "mpg",
    "mpg4",
    "m4v",
    "mkv",
    "mov",
    "qt",
    "movie",
    "mp4v",
    "ogv",
    "smv",
    "wm",
    "wmv",
    "wmx",
    "wvx"
];
function getFile(url: string): ChooseFileTempFile {
    const file = fileIo__1.openSync(url, fileIo__1.OpenMode.READ_ONLY);
    const size = fileIo__1.statSync(file.fd).size;
    const ext = UTS.arrayPop(file.name.split('.'))!;
    return {
        path: url,
        name: file.name,
        size,
        type: getMimeTypeFromExtension(ext) ?? ext
    } as ChooseFileTempFile;
}
const chooseFile: ChooseFile = defineAsyncApi<ChooseFileOptions, ChooseFileSuccess>(API_CHOOSE_FILE, (args: ChooseFileOptions, executor: ApiExecutor<ChooseFileSuccess>)=>{
    if ([
        'image',
        'video'
    ].includes(args.type ?? '')) {
        if (args.type === 'image') {
            chooseImage({
                sourceType: args.sourceType,
                success (res: ChooseImageSuccess) {
                    executor.resolve({
                        tempFilePaths: res.tempFilePaths,
                        tempFiles: res.tempFilePaths.map((url): ChooseFileTempFile =>getFile(url))
                    } as ChooseFileSuccess);
                },
                fail (err: IMediaError) {
                    executor.reject(err.errMsg, {
                        errCode: err.errCode
                    } as ApiError);
                }
            } as ChooseImageOptions);
        }
        if (args.type === 'video') {
            chooseVideo({
                sourceType: args.sourceType,
                success (res: ChooseVideoSuccess) {
                    executor.resolve({
                        tempFilePaths: [
                            res.tempFilePath
                        ],
                        tempFiles: [
                            getFile(res.tempFilePath)
                        ]
                    } as ChooseFileSuccess);
                },
                fail (err: IMediaError) {
                    executor.reject(err.errMsg, {
                        errCode: err.errCode
                    } as ApiError);
                }
            } as ChooseVideoOptions);
        }
    } else {
        try {
            let documentSelectOptions = new picker.DocumentSelectOptions();
            let documentPicker = new picker.DocumentViewPicker(UTSHarmony.getUIAbilityContext()!);
            documentSelectOptions.selectMode = picker.DocumentSelectMode.FILE;
            if (args.count) documentSelectOptions.maxSelectNumber = args.count;
            if (args.extension) documentSelectOptions.fileSuffixFilters = args.extension;
            if (args.type === 'image') {
                documentSelectOptions.fileSuffixFilters = documentSelectOptions.fileSuffixFilters?.concat(IMAGES);
            }
            if (args.type === 'video') {
                documentSelectOptions.fileSuffixFilters = documentSelectOptions.fileSuffixFilters?.concat(VIDEOS);
            }
            documentPicker.select(documentSelectOptions).then((documentSelectResult: Array<string>)=>{
                let tempFiles = documentSelectResult.map((url): ChooseFileTempFile =>getFile(url));
                if (tempFiles.length !== 0) {
                    executor.resolve({
                        tempFilePaths: documentSelectResult,
                        tempFiles
                    } as ChooseFileSuccess);
                } else {
                    executor.reject('cancel');
                }
            }).catch((err: BusinessError__1)=>{
                executor.reject(err.message, {
                    errCode: err.code
                } as ApiError);
            });
        } catch (error) {
            let err: BusinessError__1 = error as BusinessError__1;
            executor.reject(err.message, {
                errCode: err.code
            } as ApiError);
        }
    }
}, ChooseFileApiProtocol, ChooseFileApiOptions) as ChooseFile;
function getQuality(quality: string | null = null) {
    switch(quality){
        case "low":
            return CompressQuality.COMPRESS_QUALITY_LOW;
        case 'medium':
            return CompressQuality.COMPRESS_QUALITY_MEDIUM;
    }
    return CompressQuality.COMPRESS_QUALITY_HIGH;
}
const compressVideo: CompressVideo = defineAsyncApi<CompressVideoOptions, CompressVideoSuccess>(API_COMPRESS_VIDEO, async (args: CompressVideoOptions, executor: ApiExecutor<CompressVideoSuccess>): Promise<void> =>{
    let videoCompressor = new VideoCompressor();
    videoCompressor.compressVideo(UTSHarmony.getUIAbilityContext()!, args.src, getQuality(args.quality!)).then((data: CompressorResponse): void =>{
        if (data.code == CompressorResponseCode.SUCCESS) {
            _getVideoInfo(data.outputPath, 'KB').then((res)=>{
                executor.resolve({
                    tempFilePath: data.outputPath,
                    size: res.size
                } as CompressVideoSuccess);
            });
        } else {
            executor.reject(data.message, {
                errCode: data.code
            } as ApiError);
        }
    }).catch((err: Error)=>{
        executor.reject(err.message);
    });
}, CompressVideoApiProtocol, CompressVideoApiOptions) as CompressVideo;
export { CompressVideo as CompressVideo, CompressVideoOptions as CompressVideoOptions, CompressVideoSuccess as CompressVideoSuccess, ChooseFileOptions as ChooseFileOptions, ChooseFileSuccess as ChooseFileSuccess, ChooseFile as ChooseFile, ChooseImageOptions as ChooseImageOptions, ChooseImageSuccess as ChooseImageSuccess, ChooseImage as ChooseImage, ChooseVideoOptions as ChooseVideoOptions, ChooseVideoSuccess as ChooseVideoSuccess, ChooseVideo as ChooseVideo, GetImageInfoOptions as GetImageInfoOptions, GetImageInfoSuccess as GetImageInfoSuccess, GetImageInfo as GetImageInfo, GetVideoInfoOptions as GetVideoInfoOptions, GetVideoInfoSuccess as GetVideoInfoSuccess, GetVideoInfo as GetVideoInfo, SaveImageToPhotosAlbumOptions as SaveImageToPhotosAlbumOptions, SaveVideoToPhotosAlbumOptions as SaveVideoToPhotosAlbumOptions, SaveImageToPhotosAlbumSuccess as SaveImageToPhotosAlbumSuccess, SaveVideoToPhotosAlbumSuccess as SaveVideoToPhotosAlbumSuccess, SaveImageToPhotosAlbum as SaveImageToPhotosAlbum, SaveVideoToPhotosAlbum as SaveVideoToPhotosAlbum, CompressImageOptions as CompressImageOptions, CompressImageSuccess as CompressImageSuccess, CompressImage as CompressImage, ChooseFileComplete as ChooseFileComplete, ChooseFileCompleteCallback as ChooseFileCompleteCallback, ChooseFileFail as ChooseFileFail, ChooseFileFailCallback as ChooseFileFailCallback, ChooseFileSuccessCallback as ChooseFileSuccessCallback, ChooseFileTempFile as ChooseFileTempFile, ChooseImageAlbumMode as ChooseImageAlbumMode, ChooseImageCompleteCallback as ChooseImageCompleteCallback, ChooseImageCropOptions as ChooseImageCropOptions, ChooseImageFail as ChooseImageFail, ChooseImageFailCallback as ChooseImageFailCallback, ChooseImagePageOrientation as ChooseImagePageOrientation, ChooseImageSuccessCallback as ChooseImageSuccessCallback, ChooseImageTempFile as ChooseImageTempFile, ChooseVideoAlbumMode as ChooseVideoAlbumMode, ChooseVideoCompleteCallback as ChooseVideoCompleteCallback, ChooseVideoFail as ChooseVideoFail, ChooseVideoFailCallback as ChooseVideoFailCallback, ChooseVideoPageOrientation as ChooseVideoPageOrientation, ChooseVideoSuccessCallback as ChooseVideoSuccessCallback, CompressImageCompleteCallback as CompressImageCompleteCallback, CompressImageFail as CompressImageFail, CompressImageFailCallback as CompressImageFailCallback, CompressImageSuccessCallback as CompressImageSuccessCallback, CompressVideoCompleteCallback as CompressVideoCompleteCallback, CompressVideoFail as CompressVideoFail, CompressVideoFailCallback as CompressVideoFailCallback, CompressVideoSuccessCallback as CompressVideoSuccessCallback, GetImageInfoCompleteCallback as GetImageInfoCompleteCallback, GetImageInfoFail as GetImageInfoFail, GetImageInfoFailCallback as GetImageInfoFailCallback, GetImageInfoSuccessCallback as GetImageInfoSuccessCallback, GetVideoInfoCompleteCallback as GetVideoInfoCompleteCallback, GetVideoInfoFail as GetVideoInfoFail, GetVideoInfoFailCallback as GetVideoInfoFailCallback, GetVideoInfoSuccessCallback as GetVideoInfoSuccessCallback, SaveImageToPhotosAlbumCompleteCallback as SaveImageToPhotosAlbumCompleteCallback, SaveImageToPhotosAlbumFail as SaveImageToPhotosAlbumFail, SaveImageToPhotosAlbumFailCallback as SaveImageToPhotosAlbumFailCallback, SaveImageToPhotosAlbumSuccessCallback as SaveImageToPhotosAlbumSuccessCallback, SaveVideoToPhotosAlbumCompleteCallback as SaveVideoToPhotosAlbumCompleteCallback, SaveVideoToPhotosAlbumFail as SaveVideoToPhotosAlbumFail, SaveVideoToPhotosAlbumFailCallback as SaveVideoToPhotosAlbumFailCallback, SaveVideoToPhotosAlbumSuccessCallback as SaveVideoToPhotosAlbumSuccessCallback };
export { chooseImage as chooseImage, chooseVideo as chooseVideo, getImageInfo as getImageInfo, getVideoInfo as getVideoInfo, saveImageToPhotosAlbum as saveImageToPhotosAlbum, saveVideoToPhotosAlbum as saveVideoToPhotosAlbum, compressImage as compressImage, chooseFile as chooseFile, compressVideo as compressVideo };
export { IMediaError as IMediaError, MediaErrorCode as MediaErrorCode, MediaOrientation as MediaOrientation };
