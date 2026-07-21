import image from "@ohos.multimedia.image";
import { BusinessError as BusinessError } from "@ohos.base";
import { UniPage } from '@dcloudio/uni-app-x/types/native';
export interface AsyncCallback {
    success: (res: object) => void;
    fail: (res: object) => void;
}
export declare const camelize: (str: string) => string;
export declare const hyphenate: (str: string) => string;
export declare function bindClass(obj: any, superClass: any, overwriteProperties?: string[]): any;
export declare function isBindClass(obj: any, superClass: any): boolean;
export declare function callClass(obj: any, superClass: any, method: any, args: any): any;
export declare function callObject(obj: any, superClass: any, method: any, args: any): any;
export declare function setProperty(obj: any, key: any, value: any): void;
/**
 * 用于解决Indexed access is not supported for fields (arkts-no-props-by-index) <ArkTSCheck>
 * @param obj
 * @param key
 * @returns
 */
export declare function getProperty(obj: any, key: any): any;
export declare class WeakStore<T extends Object> {
    idMap: Map<string, WeakRef<T>>;
    set(id: string, obj: T): void;
    get(id: string): T | null;
    clear(): void;
}
export declare function getCurrentPage(): UniPage;
export interface PixelMap2Base64Options {
    pixmap: image.PixelMap;
    format?: string;
    quality?: number;
    success: (base64: string) => void;
    fail?: (err: BusinessError) => void;
}
export declare function cropPixelMap(pixmap: image.PixelMap, x: number, y: number, width: number | null, height: number | null): Promise<unknown>;
export declare function getType(obj: any): any;
