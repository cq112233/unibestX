import { UniImageElementImpl } from '../libs/dom';
export declare class Image extends UniImageElementImpl {
    private _bitmap;
    constructor();
    get bitmap(): ImageBitmap | null;
    set src(value: string);
    onload(): void | null;
}
