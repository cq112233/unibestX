import { getCurrentPages } from './global'
import { image } from '@kit.ImageKit'
import { BusinessError } from '@kit.BasicServicesKit';
import { UniPage } from '@dcloudio/uni-app-x/types/native'

export interface AsyncCallback {
  success: (res: object) => void
  fail: (res: object) => void
}

// TODO import from framework
const cacheStringFunction = <T extends (str: string) => string>(fn: T): T => {
  const cache: Record<string, string> = Object.create(null)
  return ((str: string) => {
    const hit = cache[str]
    return hit || (cache[str] = fn(str))
  }) as T
}

const camelizeRE = /-(\w)/g

// TODO import from framework
export const camelize = cacheStringFunction((str: string): string => {
  return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''))
})

// TODO import from framework
export const hyphenate = cacheStringFunction((str: string): string => {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '')
})

export function bindClass(obj: any, superClass: any, overwriteProperties?: string[]) {
  let current = superClass
  obj._classes = []
  while (current && !(obj instanceof current)) {
    const prototype = current.prototype
    const keys = Object.getOwnPropertyNames(prototype)
    keys.forEach(key => {
      if (key === 'constructor') {
        return
      }
      if (key in obj && (!overwriteProperties || overwriteProperties.indexOf(key) === -1)) {
        // TODO 一般属性不支持重写
        throw new Error(`can't overwrite property ${key}`)
      }
      obj[key] = prototype[key]
    })
    obj._classes.push(current)
    current = Object.getPrototypeOf(current)
  }
  // 代替构造函数对实例进行初始化
  obj.initClass?.()
  return obj
}

export function isBindClass(obj, superClass): boolean {
  const classes = obj._classes
  return classes && classes.indexOf(superClass) > -1
}

export function callClass(obj, superClass, method, args) {
  return superClass.prototype[method].apply(obj, args)
}

export function callObject(obj, superClass, method, args) {
  return superClass[method].apply(obj, args)
}

export function setProperty(obj, key, value) {
  obj[key] = value
}

/**
 * 用于解决Indexed access is not supported for fields (arkts-no-props-by-index) <ArkTSCheck>
 * @param obj
 * @param key
 * @returns
 */
export function getProperty(obj, key) {
  return obj[key]
}

export class WeakStore<T extends Object> {
  idMap = new Map<string, WeakRef<T>>()

  // FinalizationRegistry 不仅不起作用，还会导致相关作用域无法回收，暂时放弃使用
  // registry = new FinalizationRegistry((id: string) => {
  //   this.idMap.delete(id)
  // })

  set(id: string, obj: T) {
    const ref = new WeakRef<T>(obj)
    this.idMap.set(id, ref)
    // this.registry.register(obj, id)
  }

  get(id: string): T | null {
    const ref = this.idMap.get(id)
    if (!ref) {
      return null
    }

    const obj = ref.deref() ?? null
    return obj
  }

  clear() {
    this.idMap.clear()
  }
}

export function getCurrentPage(): UniPage {
  const pages = getCurrentPages() as UniPage[]
  return pages[pages.length - 1] as UniPage
}

export interface PixelMap2Base64Options {
  pixmap: image.PixelMap,
  format?: string,
  quality?: number
  success: (base64: string) => void
  fail?: (err: BusinessError) => void
}

export function cropPixelMap(pixmap: image.PixelMap, x: number, y: number, width: number | null,
  height: number | null) {
  return new Promise((resolve, reject) => {
    const imageInfo: image.ImageInfo = pixmap.getImageInfoSync();
    if (!width || width > imageInfo.size.width - x) {
      width = imageInfo.size.width - x
    }
    if (!height || height > imageInfo.size.height - y) {
      height = imageInfo.size.height - y
    }
    pixmap.crop({ x, y, size: { width, height } }).then(() => {
      resolve(pixmap);
    }).catch(reject);
  })
}

export function getType(obj: any) {
  return Object.prototype.toString.call(obj)
    .slice(8, -1)
    .toLowerCase()
}