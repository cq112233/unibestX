import { RenderOptionsBase } from "@normalized:N&&&@ohos/svg/src/main/ets/components/utils/RenderOptionsBase&2.2.2";
import type { CSS } from './CSS';
import type { PreserveAspectRatio } from './PreserveAspectRatio';
export class RenderOptions extends RenderOptionsBase {
    public constructor(other?: RenderOptions) {
        super();
    }
    public static create(): RenderOptions {
        return new RenderOptions();
    }
    public getCss(css: string | CSS): RenderOptionsBase {
        return super.getCss(css);
    }
    public hasCss(): boolean {
        return super.hasCss();
    }
    public getPreserveAspectRatio(preserveAspectRatio: PreserveAspectRatio): RenderOptionsBase {
        return super.getPreserveAspectRatio(preserveAspectRatio);
    }
    public hasPreserveAspectRatio(): boolean {
        return super.hasPreserveAspectRatio();
    }
    public view(viewId: string): RenderOptionsBase {
        return super.view(viewId);
    }
    public hasView(): boolean {
        return super.hasView();
    }
    public getViewBox(minX: number, minY: number, width: number, height: number): RenderOptionsBase {
        return super.getViewBox(minY, minY, width, height);
    }
    public hasViewBox(): boolean {
        return super.hasViewBox();
    }
    public getViewPort(minX: number, minY: number, width: number, height: number): RenderOptions {
        return super.getViewPort(minX, minY, width, height);
    }
    public hasViewPort(): boolean {
        return super.hasViewPort();
    }
    public target(targetId: string): RenderOptions {
        return super.target(targetId);
    }
    public hasTarget(): boolean {
        return super.hasTarget();
    }
}
