import { CSSParser, Source } from "@normalized:N&&&@ohos/svg/src/main/ets/components/utils/CSSParser&2.2.3";
import type { Ruleset } from "@normalized:N&&&@ohos/svg/src/main/ets/components/utils/CSSParser&2.2.3";
export class CSSBase {
    public cssRuleset: Ruleset;
    constructor(css: string) {
        this.cssRuleset = new CSSParser(undefined, Source.RenderOptions, null).parse(css);
    }
}
