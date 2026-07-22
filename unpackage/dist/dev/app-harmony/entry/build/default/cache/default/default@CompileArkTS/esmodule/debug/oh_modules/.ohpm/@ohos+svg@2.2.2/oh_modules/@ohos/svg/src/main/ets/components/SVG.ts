import type common from "@ohos:app.ability.common";
import { SVGBase } from "@normalized:N&&&@ohos/svg/src/main/ets/components/utils/SVGBase&2.2.2";
import type { Svg } from "@normalized:N&&&@ohos/svg/src/main/ets/components/utils/SVGBase&2.2.2";
export class SVG {
    static TAG: string = "SVG";
    private static VERSION: string = "1.5";
    base: SVGBase;
    constructor(base: SVGBase) {
        this.base = base;
    }
    public static getFromString(svg: string): SVG {
        return new SVG(SVGBase.getFromString(svg));
    }
    public static getFromResource(media: Resource, callback, context?: common.UIAbilityContext) {
        SVGBase.getFromResource(media, (svgBase: SVGBase) => {
            let svg: SVG = new SVG(svgBase);
            callback(svg);
        }, context);
    }
    public static getFromRawfile(rawfileName: string, callback, context?: common.UIAbilityContext) {
        SVGBase.getFromRawfile(rawfileName, (svgBase: SVGBase) => {
            let svg: SVG = new SVG(svgBase);
            callback(svg);
        }, context);
    }
    getRootElement(): Svg {
        return this.base.getRootElement();
    }
}
