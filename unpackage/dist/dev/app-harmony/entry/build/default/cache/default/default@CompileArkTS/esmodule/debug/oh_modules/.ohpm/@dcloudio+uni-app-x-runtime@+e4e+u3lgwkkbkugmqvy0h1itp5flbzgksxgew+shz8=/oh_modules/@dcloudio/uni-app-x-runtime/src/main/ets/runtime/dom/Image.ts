import { NodeData } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/NodeData&1.0.0";
import { UniImageElementImpl } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniImageElement&1.0.0";
import { getResourceStr } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/helper/index&1.0.0";
import { getUniApp } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/UniNativeApp&1.0.0";
let id = 0;
export class Image extends UniImageElementImpl {
    private _bitmap: ImageBitmap | null = null;
    constructor() {
        super(new NodeData('img-' + (id++).toString(), 'Image'), getUniApp()?.pageManager.getTopPage()!);
    }
    get bitmap(): ImageBitmap | null {
        return this._bitmap;
    }
    set src(value: string) {
        this._bitmap = new ImageBitmap(getResourceStr(value) as string);
        setTimeout(() => {
            this.onload();
        }, 1);
    }
    onload(): void | null {
    }
}
