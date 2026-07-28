import { ElementOptions } from './BuiltInElement'
import { camelize, hyphenate } from '../helper/utils'
import { UniCustomElement, CustomElementOptions } from './CustomElement'
import { NativeMap } from './NativeMap'

function getDatasetKey(key: string) {
  return camelize(key.substring(5))
}

const ignoreKeys = ['class']

export interface NamedNodeElement {
  _options?: ElementOptions
  dataset: NativeMap<string, Object>

  updateNativeAttribute(key: string, value: ESObject): void
}

// TODO 暂时忽略 forEach 等方法和 dataset 的关联
export class NamedNodeMap extends NativeMap<string, ESObject> {
  private element?: NamedNodeElement

  // ets 类型问题，使用 UniElementImpl 会报错
  constructor(element: NamedNodeElement) {
    super()
    this.element = element
  }

  set(key: string, value: ESObject): ESObject {
    let oldValue: ESObject
    let newKey: string | undefined = undefined
    if (value === undefined) {
      value = null
    }
    if (this.element && key.startsWith('data-')) {
      oldValue = this.element.dataset.get(getDatasetKey(key))
      this.element.dataset.set(getDatasetKey(key), value)
    } else {
      newKey = camelize(key)
      oldValue = this.get(newKey) as Object
      if (oldValue !== value) {
        super.set(newKey, value)
        if (!ignoreKeys.includes(newKey)) {
          this.updateNativeNodeAttr(newKey, value)
        }
      }
    }
    this.attributeChangedCallback(key, oldValue, value, newKey)
    return this
  }

  get(key: string): ESObject {
    if (this.element && key.startsWith('data-')) {
      return this.element.dataset.get(getDatasetKey(key))
    }
    return super.get(camelize(key))
  }

  has(key: string): boolean {
    if (this.element && key.startsWith('data-')) {
      return this.element.dataset.has(getDatasetKey(key))
    }
    return super.has(camelize(key))
  }

  delete(key: string): boolean {
    let res = false
    if (this.element && key.startsWith('data-')) {
      const oldVal = this.element.dataset.get(getDatasetKey(key))
      res = this.element.dataset.delete(getDatasetKey(key))
      if (res) {
        this.attributeChangedCallback(key, oldVal, null)
      }
    } else {
      const newKey = camelize(key)
      if (this.has(newKey)) {
        const oldVal = this.get(newKey) as Object
        res = super.delete(newKey)
        if (!ignoreKeys.includes(newKey)) {
          // TODO 暂时设置初始值为空字符串
          this.updateNativeNodeAttr(newKey, '')
        }
        this.attributeChangedCallback(key, oldVal, null, newKey)
      }
    }
    return res
  }

  private updateNativeNodeAttr(key: string, val: ESObject) {
    this.element?.updateNativeAttribute(key, val)
  }

  /**
   * @internal
   */
  attributeChangedCallback(
    name: string,
    oldValue: Object | null,
    newValue: Object | null,
    camelizeName?: string
  ) {
    const element = this.element
    const options = element?._options as CustomElementOptions
    if (options) {
      const observedAttributes = options.observedAttributes
      if (observedAttributes && observedAttributes.length) {
        const names = [name]
        // 无 camelizeName 直接忽略转换
        if (camelizeName) {
          if (camelizeName !== name) {
            names.push(camelizeName)
          } else {
            const hyphenateName = hyphenate(name)
            if (hyphenateName !== name) {
              names.push(hyphenateName)
            }
          }
        }
        names.forEach((name) => {
          if (observedAttributes.includes(name)) {
            const customElement = element as UniCustomElement
            customElement.attributeChangedCallback?.(name, oldValue, newValue)
          }
        })
      }
    }
  }

  /**
   * @internal
   */
  dispose() {
    this.element = undefined
  }
}

export function toNativeNodeAttr(map: NamedNodeMap) {
  throw new Error('Not implemented')
}
