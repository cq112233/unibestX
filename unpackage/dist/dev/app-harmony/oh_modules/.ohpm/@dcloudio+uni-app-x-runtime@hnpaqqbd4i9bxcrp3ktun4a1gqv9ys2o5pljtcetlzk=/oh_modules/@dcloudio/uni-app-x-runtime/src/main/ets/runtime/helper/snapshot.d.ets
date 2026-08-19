import { UniElement } from '@dcloudio/uni-app-x/types/native';
import image from "@ohos.multimedia.image";
export declare function windowSnapShot(context: Context): Promise<PixelMap>;
export declare function getSnapShotElementByBody(body: UniElement): UniElement;
export declare function pixelMapToImgPath(context: Context, format: string, pixelMap: image.PixelMap, path: string | null): Promise<string>;
export declare function isTransparent(color: string): boolean;
