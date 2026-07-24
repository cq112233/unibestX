import type { INodeData, UniNestedScrollBodyElement as IUniNestedScrollBodyElement } from '@dcloudio/uni-app-x/types/native';
import { UniNestedScrollBaseElementImpl } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniScroll/UniNestedScrollBase&1.0.0";
export class UniNestedScrollBodyElementImpl extends UniNestedScrollBaseElementImpl implements IUniNestedScrollBodyElement {
    constructor(data?: INodeData) {
        super(data);
        this.style.setProperty('width', '100%');
        this.style.setProperty('height', '100%');
    }
}
