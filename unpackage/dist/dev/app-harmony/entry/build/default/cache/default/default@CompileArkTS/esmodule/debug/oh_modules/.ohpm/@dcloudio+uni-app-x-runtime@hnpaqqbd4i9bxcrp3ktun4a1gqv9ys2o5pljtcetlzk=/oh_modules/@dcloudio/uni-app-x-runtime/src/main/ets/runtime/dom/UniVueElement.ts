import { camelize } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/helper/utils&1.0.0";
import { findVueInstanceByUid } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/libs/uni-app-x-framework-dev&1.0.0";
import { UniViewElementImpl } from "@normalized:N&&&@dcloudio/uni-runtime-harmony/dom/UniViewElement&1.0.0";
import type { UniElementImpl } from '../libs/dom';
export class UniVueElement extends UniViewElementImpl {
    static findVmByElement(el: UniElementImpl) {
        // buildElement 的时候会设置 vueId
        const vueId = el.ext.get("vueComponentId");
        if (vueId == null) {
            return null;
        }
        return findVueInstanceByUid(vueId)?.proxy || null;
    }
    get vm() {
        return UniVueElement.findVmByElement(this);
    }
    hasAttribute(key: string): boolean {
        const vm = this.vm;
        if (vm) {
            const name = camelize(key.trim());
            if (!name) {
                return false;
            }
            const props = vm.$props;
            if (props && name in props) {
                return true;
            }
        }
        return super.hasAttribute(key);
    }
    getAttribute(key: string): string | null {
        if (!this.hasAttribute(key)) {
            return null;
        }
        const val: any = this.getAnyAttribute(key);
        if (val == null)
            return null;
        return "" + val;
    }
    getAnyAttribute(key: string): any {
        const vm = this.vm;
        if (vm) {
            const name = camelize(key.trim());
            if (!name) {
                return undefined;
            }
            const props = vm.$props;
            if (props && name in props) {
                return props[name];
            }
        }
        return super.getAnyAttribute(key);
    }
}
