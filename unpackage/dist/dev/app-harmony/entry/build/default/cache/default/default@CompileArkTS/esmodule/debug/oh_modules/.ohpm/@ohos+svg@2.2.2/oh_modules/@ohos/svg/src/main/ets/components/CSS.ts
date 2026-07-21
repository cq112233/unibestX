import { CSSBase } from "@normalized:N&&&@ohos/svg/src/main/ets/components/utils/CSSBase&2.2.2";
export class CSS extends CSSBase {
    constructor(css: string) {
        super(css);
    }
    public static getFromString(css: string): CSS {
        return new CSS(css);
    }
}
