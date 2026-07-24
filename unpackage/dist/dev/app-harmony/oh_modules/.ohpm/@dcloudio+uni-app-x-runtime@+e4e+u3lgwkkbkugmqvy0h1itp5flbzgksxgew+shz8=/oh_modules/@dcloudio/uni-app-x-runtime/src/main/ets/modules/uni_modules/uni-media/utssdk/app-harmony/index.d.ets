import { IUniError, UTSObject, string } from "@dcloudio/uni-app-framework";
type MediaOrientation = 'up' | 'down' | 'left' | 'right' | 'up-mirrored' | 'down-mirrored' | 'left-mirrored' | 'right-mirrored';
type MediaErrorCode = 1101001 | 1101002 | 1101003 | 1101004 | 1101005 | 1101006 | 1101007 | 1101008 | 1101009 | 1101010;
interface IMediaError extends IUniError {
    errCode: MediaErrorCode;
}
declare class ChooseImageTempFile extends UTSObject {
    path: string;
    size: number;
    name: string | null;
    type: string | null;
}
declare class ChooseImageSuccess extends UTSObject {
    errSubject: string;
    errMsg: string;
    tempFilePaths: Array<string>;
    tempFiles: ChooseImageTempFile[];
}
type ChooseImageFail = IMediaError;
type ChooseImageSuccessCallback = (callback: ChooseImageSuccess) => void;
type ChooseImageFailCallback = (callback: ChooseImageFail) => void;
type ChooseImageCompleteCallback = (callback: Object) => void;
declare class ChooseImageCropOptions extends UTSObject {
    width: number;
    height: number;
    quality: (number) | null;
    resize: (boolean) | null;
}
type ChooseImagePageOrientation = "auto" | "portrait" | "landscape";
type ChooseImageAlbumMode = "custom" | "system";
declare class ChooseImageOptions extends UTSObject {
    pageOrientation: ChooseImagePageOrientation | null;
    albumMode: ChooseImageAlbumMode | null;
    count: (number) | null;
    sizeType: (string[]) | null;
    sourceType: (string[]) | null;
    extension: (string[]) | null;
    crop: (ChooseImageCropOptions) | null;
    success: (ChooseImageSuccessCallback) | null;
    fail: (ChooseImageFailCallback) | null;
    complete: (ChooseImageCompleteCallback) | null;
}
type ChooseImage = (options: ChooseImageOptions) => void;
type GetImageInfo = (options: GetImageInfoOptions) => void;
declare class GetImageInfoSuccess extends UTSObject {
    width: number;
    height: number;
    path: string;
    orientation: MediaOrientation | null;
    type: string | null;
}
type GetImageInfoFail = IMediaError;
type GetImageInfoSuccessCallback = (callback: GetImageInfoSuccess) => void;
type GetImageInfoFailCallback = (callback: GetImageInfoFail) => void;
type GetImageInfoCompleteCallback = ChooseImageCompleteCallback;
declare class GetImageInfoOptions extends UTSObject {
    src: string.ImageURIString;
    success: (GetImageInfoSuccessCallback) | null;
    fail: (GetImageInfoFailCallback) | null;
    complete: (GetImageInfoCompleteCallback) | null;
}
type SaveImageToPhotosAlbum = (options: SaveImageToPhotosAlbumOptions) => void;
declare class SaveImageToPhotosAlbumSuccess extends UTSObject {
    path: string;
}
type SaveImageToPhotosAlbumFail = IMediaError;
type SaveImageToPhotosAlbumSuccessCallback = (callback: SaveImageToPhotosAlbumSuccess) => void;
type SaveImageToPhotosAlbumFailCallback = (callback: SaveImageToPhotosAlbumFail) => void;
type SaveImageToPhotosAlbumCompleteCallback = ChooseImageCompleteCallback;
declare class SaveImageToPhotosAlbumOptions extends UTSObject {
    filePath: string.ImageURIString;
    success: (SaveImageToPhotosAlbumSuccessCallback) | null;
    fail: (SaveImageToPhotosAlbumFailCallback) | null;
    complete: (SaveImageToPhotosAlbumCompleteCallback) | null;
}
type CompressImage = (options: CompressImageOptions) => void;
declare class CompressImageSuccess extends UTSObject {
    tempFilePath: string;
}
type CompressImageFail = IMediaError;
type CompressImageSuccessCallback = (callback: CompressImageSuccess) => void;
type CompressImageFailCallback = (callback: CompressImageFail) => void;
type CompressImageCompleteCallback = ChooseImageCompleteCallback;
declare class CompressImageOptions extends UTSObject {
    src: string.ImageURIString;
    quality: number | null;
    rotate: number | null;
    width: string | null;
    height: string | null;
    compressedHeight: number | null;
    compressedWidth: number | null;
    success: (CompressImageSuccessCallback) | null;
    fail: (CompressImageFailCallback) | null;
    complete: (CompressImageCompleteCallback) | null;
}
declare class ChooseVideoSuccess extends UTSObject {
    tempFilePath: string;
    duration: number;
    size: number;
    height: number;
    width: number;
}
type ChooseVideoFail = IMediaError;
type ChooseVideoSuccessCallback = (callback: ChooseVideoSuccess) => void;
type ChooseVideoFailCallback = (callback: ChooseVideoFail) => void;
type ChooseVideoCompleteCallback = ChooseImageCompleteCallback;
type ChooseVideoPageOrientation = ChooseImagePageOrientation;
type ChooseVideoAlbumMode = ChooseImageAlbumMode;
declare class ChooseVideoOptions extends UTSObject {
    pageOrientation: ChooseVideoPageOrientation | null;
    albumMode: ChooseVideoAlbumMode | null;
    sourceType: (string[]) | null;
    compressed: boolean | null;
    maxDuration: number | null;
    camera: 'front' | 'back' | null;
    extension: (string[]) | null;
    success: (ChooseVideoSuccessCallback) | null;
    fail: (ChooseVideoFailCallback) | null;
    complete: (ChooseVideoCompleteCallback) | null;
}
type ChooseVideo = (options: ChooseVideoOptions) => void;
declare class GetVideoInfoSuccess extends UTSObject {
    orientation: MediaOrientation | null;
    type: string | null;
    duration: number;
    size: number;
    height: number;
    width: number;
    fps: number | null;
    bitrate: number | null;
    thumbTempFilePath: string | null;
    byteSize: number | null;
}
type GetVideoInfoFail = IMediaError;
type GetVideoInfoSuccessCallback = (callback: GetVideoInfoSuccess) => void;
type GetVideoInfoFailCallback = (callback: GetVideoInfoFail) => void;
type GetVideoInfoCompleteCallback = ChooseImageCompleteCallback;
declare class GetVideoInfoOptions extends UTSObject {
    src: string.VideoURIString;
    success: (GetVideoInfoSuccessCallback) | null;
    fail: (GetVideoInfoFailCallback) | null;
    complete: (GetVideoInfoCompleteCallback) | null;
}
type GetVideoInfo = (options: GetVideoInfoOptions) => void;
declare class SaveVideoToPhotosAlbumSuccess extends UTSObject {
}
type SaveVideoToPhotosAlbumFail = IMediaError;
type SaveVideoToPhotosAlbumSuccessCallback = (callback: SaveVideoToPhotosAlbumSuccess) => void;
type SaveVideoToPhotosAlbumFailCallback = (callback: SaveVideoToPhotosAlbumFail) => void;
type SaveVideoToPhotosAlbumCompleteCallback = ChooseImageCompleteCallback;
declare class SaveVideoToPhotosAlbumOptions extends UTSObject {
    filePath: string.VideoURIString;
    success: (SaveVideoToPhotosAlbumSuccessCallback) | null;
    fail: (SaveVideoToPhotosAlbumFailCallback) | null;
    complete: (SaveVideoToPhotosAlbumCompleteCallback) | null;
}
type SaveVideoToPhotosAlbum = (options: SaveVideoToPhotosAlbumOptions) => void;
declare class CompressVideoSuccess extends UTSObject {
    tempFilePath: string;
    size: number;
    byteSize: number | null;
}
type CompressVideoFail = IMediaError;
type CompressVideoSuccessCallback = (callback: CompressVideoSuccess) => void;
type CompressVideoFailCallback = (callback: CompressVideoFail) => void;
type CompressVideoCompleteCallback = ChooseImageCompleteCallback;
declare class CompressVideoOptions extends UTSObject {
    src: string.VideoURIString;
    quality: string | null;
    bitrate: number | null;
    fps: number | null;
    resolution: number | null;
    success: (CompressVideoSuccessCallback) | null;
    fail: (CompressVideoFailCallback) | null;
    complete: (CompressVideoCompleteCallback) | null;
}
type CompressVideo = (options: CompressVideoOptions) => void;
type ChooseFile = (options: ChooseFileOptions) => void;
declare class ChooseFileSuccess extends UTSObject {
    tempFilePaths: string[];
    tempFiles: ChooseFileTempFile[];
}
declare class ChooseFileTempFile extends UTSObject {
    name: string;
    path: string;
    size: number;
    type: 'video' | 'image' | 'audio' | 'file';
}
type ChooseFileSuccessCallback = (result: ChooseFileSuccess) => void;
type ChooseFileFail = IMediaError;
type ChooseFileFailCallback = (result: ChooseFileFail) => void;
type ChooseFileComplete = Object;
type ChooseFileCompleteCallback = (result: ChooseFileComplete) => void;
declare class ChooseFileOptions extends UTSObject {
    count: number | null;
    type: 'image' | 'video' | 'audio' | 'all' | null;
    extension: (string[]) | null;
    sizeType: Object | null;
    sourceType: (string[]) | null;
    success: ChooseFileSuccessCallback | null;
    fail: ChooseFileFailCallback | null;
    complete: ChooseFileCompleteCallback | null;
}
declare const compressImage: CompressImage;
declare const chooseImage: ChooseImage;
declare const chooseVideo: ChooseVideo;
declare const getImageInfo: GetImageInfo;
declare const getVideoInfo: GetVideoInfo;
declare const saveImageToPhotosAlbum: SaveImageToPhotosAlbum;
declare const saveVideoToPhotosAlbum: SaveVideoToPhotosAlbum;
declare const chooseFile: ChooseFile;
declare const compressVideo: CompressVideo;
export { CompressVideo as CompressVideo, CompressVideoOptions as CompressVideoOptions, CompressVideoSuccess as CompressVideoSuccess, ChooseFileOptions as ChooseFileOptions, ChooseFileSuccess as ChooseFileSuccess, ChooseFile as ChooseFile, ChooseImageOptions as ChooseImageOptions, ChooseImageSuccess as ChooseImageSuccess, ChooseImage as ChooseImage, ChooseVideoOptions as ChooseVideoOptions, ChooseVideoSuccess as ChooseVideoSuccess, ChooseVideo as ChooseVideo, GetImageInfoOptions as GetImageInfoOptions, GetImageInfoSuccess as GetImageInfoSuccess, GetImageInfo as GetImageInfo, GetVideoInfoOptions as GetVideoInfoOptions, GetVideoInfoSuccess as GetVideoInfoSuccess, GetVideoInfo as GetVideoInfo, SaveImageToPhotosAlbumOptions as SaveImageToPhotosAlbumOptions, SaveVideoToPhotosAlbumOptions as SaveVideoToPhotosAlbumOptions, SaveImageToPhotosAlbumSuccess as SaveImageToPhotosAlbumSuccess, SaveVideoToPhotosAlbumSuccess as SaveVideoToPhotosAlbumSuccess, SaveImageToPhotosAlbum as SaveImageToPhotosAlbum, SaveVideoToPhotosAlbum as SaveVideoToPhotosAlbum, CompressImageOptions as CompressImageOptions, CompressImageSuccess as CompressImageSuccess, CompressImage as CompressImage, ChooseFileComplete as ChooseFileComplete, ChooseFileCompleteCallback as ChooseFileCompleteCallback, ChooseFileFail as ChooseFileFail, ChooseFileFailCallback as ChooseFileFailCallback, ChooseFileSuccessCallback as ChooseFileSuccessCallback, ChooseFileTempFile as ChooseFileTempFile, ChooseImageAlbumMode as ChooseImageAlbumMode, ChooseImageCompleteCallback as ChooseImageCompleteCallback, ChooseImageCropOptions as ChooseImageCropOptions, ChooseImageFail as ChooseImageFail, ChooseImageFailCallback as ChooseImageFailCallback, ChooseImagePageOrientation as ChooseImagePageOrientation, ChooseImageSuccessCallback as ChooseImageSuccessCallback, ChooseImageTempFile as ChooseImageTempFile, ChooseVideoAlbumMode as ChooseVideoAlbumMode, ChooseVideoCompleteCallback as ChooseVideoCompleteCallback, ChooseVideoFail as ChooseVideoFail, ChooseVideoFailCallback as ChooseVideoFailCallback, ChooseVideoPageOrientation as ChooseVideoPageOrientation, ChooseVideoSuccessCallback as ChooseVideoSuccessCallback, CompressImageCompleteCallback as CompressImageCompleteCallback, CompressImageFail as CompressImageFail, CompressImageFailCallback as CompressImageFailCallback, CompressImageSuccessCallback as CompressImageSuccessCallback, CompressVideoCompleteCallback as CompressVideoCompleteCallback, CompressVideoFail as CompressVideoFail, CompressVideoFailCallback as CompressVideoFailCallback, CompressVideoSuccessCallback as CompressVideoSuccessCallback, GetImageInfoCompleteCallback as GetImageInfoCompleteCallback, GetImageInfoFail as GetImageInfoFail, GetImageInfoFailCallback as GetImageInfoFailCallback, GetImageInfoSuccessCallback as GetImageInfoSuccessCallback, GetVideoInfoCompleteCallback as GetVideoInfoCompleteCallback, GetVideoInfoFail as GetVideoInfoFail, GetVideoInfoFailCallback as GetVideoInfoFailCallback, GetVideoInfoSuccessCallback as GetVideoInfoSuccessCallback, SaveImageToPhotosAlbumCompleteCallback as SaveImageToPhotosAlbumCompleteCallback, SaveImageToPhotosAlbumFail as SaveImageToPhotosAlbumFail, SaveImageToPhotosAlbumFailCallback as SaveImageToPhotosAlbumFailCallback, SaveImageToPhotosAlbumSuccessCallback as SaveImageToPhotosAlbumSuccessCallback, SaveVideoToPhotosAlbumCompleteCallback as SaveVideoToPhotosAlbumCompleteCallback, SaveVideoToPhotosAlbumFail as SaveVideoToPhotosAlbumFail, SaveVideoToPhotosAlbumFailCallback as SaveVideoToPhotosAlbumFailCallback, SaveVideoToPhotosAlbumSuccessCallback as SaveVideoToPhotosAlbumSuccessCallback };
export { chooseImage as chooseImage, chooseVideo as chooseVideo, getImageInfo as getImageInfo, getVideoInfo as getVideoInfo, saveImageToPhotosAlbum as saveImageToPhotosAlbum, saveVideoToPhotosAlbum as saveVideoToPhotosAlbum, compressImage as compressImage, chooseFile as chooseFile, compressVideo as compressVideo };
export { IMediaError as IMediaError, MediaErrorCode as MediaErrorCode, MediaOrientation as MediaOrientation };
