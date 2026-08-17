import { camelize } from '../helper/utils'
import { findVueInstanceByUid } from '../libs/uni-app-x-framework-dev'
import { UniViewElementImpl } from './UniViewElement'
import { UniElementImpl } from '../libs/dom'

export class UniVueElement extends UniViewElementImpl {
  static findVmByElement(el: UniElementImpl) {
    // buildElement 的时候会设置 vueId
    const vueId = el.ext.get("vueComponentId")
    if (vueId == null) {
      return null
    }
    return findVueInstanceByUid(vueId)?.proxy || null
  }

  get vm() {
    return UniVueElement.findVmByElement(this)
  }

  hasAttribute(key: string): boolean {
    const vm = this.vm
    if (vm) {
      const name = camelize(key.trim())
      if (!name) {
        return false
      }
      const props = vm.$props
      if (props && name in props) {
        return true
      }
    }
    return super.hasAttribute(key)
  }

  getAttribute(key: string): string | null {
    if (!this.hasAttribute(key)) {
      return null
    }
    const val: any = this.getAnyAttribute(key);
    if (val == null) return null;
    return "" + val;
  }

  getAnyAttribute(key: string): any {
    const vm = this.vm
    if (vm) {
      const name = camelize(key.trim())
      if (!name) {
        return undefined
      }
      const props = vm.$props
      if (props && name in props) {
        return props[name]
      }
    }
    return super.getAnyAttribute(key)
  }
}
