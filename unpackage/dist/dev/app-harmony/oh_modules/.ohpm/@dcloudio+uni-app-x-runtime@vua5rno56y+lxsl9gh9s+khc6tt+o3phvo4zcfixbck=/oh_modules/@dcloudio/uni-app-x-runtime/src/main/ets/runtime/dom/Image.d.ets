import { UniImageElementImpl } from './UniImageElement';
export declare class Image extends UniImageElementImpl {
    private _bitmap;
    constructor();
    get bitmap(): ImageBitmap | null;
    set src(value: string);
    onload(): void | null;
}
