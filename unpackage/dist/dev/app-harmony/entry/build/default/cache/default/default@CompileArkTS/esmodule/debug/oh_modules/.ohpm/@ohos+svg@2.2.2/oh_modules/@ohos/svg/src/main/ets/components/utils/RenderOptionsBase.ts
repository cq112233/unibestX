import type { Ruleset } from './CSSParser';
import { CSS } from "@normalized:N&&&@ohos/svg/src/main/ets/components/CSS&2.2.2";
import { Box } from "@normalized:N&&&@ohos/svg/src/main/ets/components/utils/SVGBase&2.2.2";
import type { PreserveAspectRatio } from '../PreserveAspectRatio';
export class RenderOptionsBase {
    css: string = null;
    cssRuleset: Ruleset = null;
    preserveAspectRatio: PreserveAspectRatio = null;
    targetId: string = null;
    viewBox: Box = null;
    viewId: string = null;
    viewPort: Box = null;
    public static create(): RenderOptionsBase {
        return new RenderOptionsBase();
    }
    constructor(other?: RenderOptionsBase) {
        if (other == null)
            return;
        this.css = other.css;
        this.cssRuleset = other.cssRuleset;
        this.preserveAspectRatio = other.preserveAspectRatio;
        this.viewBox = other.viewBox;
        this.viewId = other.viewId;
        this.viewPort = other.viewPort;
        this.targetId = other.targetId;
    }
    public getCss(css): RenderOptionsBase {
        if (css instanceof CSS) {
            this.cssRuleset = (css as CSS).cssRuleset;
            this.css = null;
            return this;
        }
        else {
            this.css = css;
            this.cssRuleset = null;
            return this;
        }
    }
    public hasCss(): boolean {
        return this.css != null && this.css.trim().length > 0 || this.cssRuleset != null;
    }
    public getPreserveAspectRatio(preserveAspectRatio: PreserveAspectRatio): RenderOptionsBase {
        this.preserveAspectRatio = preserveAspectRatio;
        return this;
    }
    public hasPreserveAspectRatio(): boolean {
        return this.preserveAspectRatio != null;
    }
    public view(viewId: string): RenderOptionsBase {
        this.viewId = viewId;
        return this;
    }
    public hasView(): boolean {
        return this.viewId != null;
    }
    public getViewBox(minX: number, minY: number, width: number, height: number): RenderOptionsBase {
        this.viewBox = new Box(minX, minY, width, height);
        return this;
    }
    public hasViewBox(): boolean {
        return this.viewBox != null;
    }
    public getViewPort(minX: number, minY: number, width: number, height: number): RenderOptionsBase {
        this.viewPort = new Box(minX, minY, width, height);
        return this;
    }
    public hasViewPort(): boolean {
        return this.viewPort != null;
    }
    public target(targetId: string): RenderOptionsBase {
        this.targetId = targetId;
        return this;
    }
    public hasTarget(): boolean {
        return this.targetId != null;
    }
}
