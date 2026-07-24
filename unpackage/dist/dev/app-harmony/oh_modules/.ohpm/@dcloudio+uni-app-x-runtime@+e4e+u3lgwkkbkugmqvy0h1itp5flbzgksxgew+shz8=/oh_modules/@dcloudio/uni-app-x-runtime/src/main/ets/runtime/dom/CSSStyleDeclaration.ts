import { camelize } from '../helper/utils'
import { parseStyleDecl } from '../helper/parser'
import { CSSStyleDeclaration as ICSSStyleDeclaration } from '@dcloudio/uni-app-x/types/native'
import { NativeMap } from './NativeMap'
import { NamedNodeMap } from './NamedNodeMap'
import { isPropertySupportedByCSSOM, getCSSOMProperty } from './cssom/utils'
import { type StylePropertyMap } from './cssom/StylePropertyMap'

export const enableAttributeStyleMap = false

export enum VarItemType {
  Text,
  Var
}

export interface VarItem {
  type: VarItemType
  value: string,
  fallback?: string
}

export function parseVar(value: string) {
  const vars = value.matchAll(/(?:var\(\s*)(--[\S-_]+?)(?:(?:\s*,\s*)(.+?))?(?:\s*)(?:\s*\))/g)

  const array: VarItem[] = []
  let position = 0
  let hasVar = false
  const layoutVars = [
    '--uni-safe-area-inset-top',
    '--uni-safe-area-inset-bottom',
    '--uni-safe-area-inset-left',
    '--uni-safe-area-inset-right',
    '--status-bar-height',
    '--window-top',
    '--window-bottom',
  ]
  for (const match of vars) {
    const index = match.index!
    const length = match[0].length
    const subValue = match[1]
    const fallback = match[2]
    if (index > position) {
      array.push({
        type: VarItemType.Text,
        value: value.substring(position, index),
      })
    }
    position = index + length
    if (layoutVars.includes(subValue)) {
      array.push({
        type: VarItemType.Text,
        value: match[0],
      })
    } else {
      hasVar = true
      const item: VarItem = {
        type: VarItemType.Var,
        value: subValue,
      }
      if (fallback) {
        item.fallback = fallback
      }
      array.push(item)
    }
  }
  if (!hasVar) {
    return []
  }
  if (position < value.length) {
    array.push({
      type: VarItemType.Text,
      value: value.substring(position),
    })
  }
  return array
}

export interface StyleElement {
  parseStyle: (key: string, value: Object) => boolean
  parentElement: typeof this | null
  children: typeof this[]
  style: CSSStyleDeclaration
  attributes: NamedNodeMap
  attributeStyleMap: StylePropertyMap
}

class VarUpdater {
  private callback: Function
  vars: string[]

  constructor(style: CSSStyleDeclaration, items: VarItem[], callback: (value: string) => void) {
    this.vars = []
    for (const item of items) {
      if (item.type === VarItemType.Var) {
        this.vars.push(item.value)
      }
    }
    // TODO 依赖收集
    this.callback = () => {
      if (enableAttributeStyleMap) {
        let valueString = ''
        for (const item of items) {
          if (item.type === VarItemType.Text) {
            valueString += item.value
          } else if (item.type === VarItemType.Var) {
            const getVariableValueResult = style._element.attributeStyleMap.getVariableValue(item.value)
            if (getVariableValueResult) {
              const [element, variableValue] = getVariableValueResult
              valueString += element.attributeStyleMap.getVariableString(variableValue)
            }
          }
        }
        callback(valueString)
        return
      }
      let value = ''
      for (const item of items) {
        if (item.type === VarItemType.Text) {
          value += item.value
        } else if (item.type === VarItemType.Var) {
          let varValue: string
          let current = style._element
          while (current) {
            varValue = current.style.getPropertyValue(item.value)
            if (varValue) {
              break
            }
            current = current.parentElement
          }
          if (varValue) {
            value += varValue
          } else {
            const fallback = item.fallback
            if (fallback) {
              value += fallback
            } else {
              value = ''
              break
            }
          }
        }
      }
      callback(value)
    }
  }

  updateVar() {
    this.callback()
  }

  dispose() {
    this.vars = []
    this.callback = () => {
    }
  }
}

function toPropertySupportedByCSSOM(key: string): string | undefined {
  if (!enableAttributeStyleMap) {
    return
  }
  const cssomKey = getCSSOMProperty(key)
  if (isPropertySupportedByCSSOM(cssomKey)) {
    return cssomKey
  }
  return
}

export class CSSStyleDeclaration implements ICSSStyleDeclaration {
  get [Symbol.toStringTag]() {
    return 'CSSStyleDeclaration'
  }

  private style: NativeMap<string, Object | null> = new NativeMap()
  /**
   * @internal
   */
  _element?: StyleElement

  constructor(el: StyleElement) {
    if (!el) {
      throw new Error('Uncaught TypeError: Illegal constructor')
    }
    this._element = el
    const proxy = new Proxy(this, {
      get(target, prop: string) {
        if (Reflect.has(target, prop)) {
          const value = Reflect.get(target, prop, target)
          return typeof value === 'function' ? value.bind(target) : value
        } else if (typeof prop === 'string') {
          return target.getPropertyValue(prop)
        }
      },
      set(target, prop: string, value) {
        target.setProperty(prop, value)
        return true
      },
    })
    return proxy
  }

  setProperty(name: string | Object | null, value?: string): void

  setProperty(name: string, value: Object | null): void

  setProperty(name: string | Object | null, value: Object | null): void {
    const key = name as string
    this.updateProperty(key, value)
  }

  removeProperty(property: string): string {
    const val = this.style.get(property as string) as string
    // this.style.delete(property as string)
    // 当作差量更新处理，删除属性时，设置属性值为空字符串
    const key = property as string
    const value = ''
    this.updateProperty(key, value)
    return val
  }

  /**
   * @internal
   */
  updateVar(key: string) {
    this.varUpdaters.forEach((updater) => {
      if (updater.vars.includes(key)) {
        updater.updateVar()
      }
    })
    if (enableAttributeStyleMap) {
      return
    }
    this._element?.children.forEach((element: StyleElement) => {
      const style = element.style
      if (!style.getPropertyValue(key)) {
        element.style.updateVar(key)
      }
    })
  }

  /**
   * @internal
   */
  updateAllVars() {
    this.varUpdaters.forEach((updater) => {
      updater.updateVar()
    })
  }

  private updateProperty(key: string, value: Object | null) {
    const cssomKey = toPropertySupportedByCSSOM(key)
    if (cssomKey) {
      this._element?.attributeStyleMap.set(cssomKey, value)
      return
    }
    if (key.startsWith('--')) {
      const oldValue = this.style.get(key)
      if (oldValue !== value) {
        this.style.set(key, value)
        this.updateVar(key)
        this._element?.attributes.attributeChangedCallback('style', '', '')
      }
      return
    }
    key = camelize(key)
    const oldValue = this.style.get(key)
    if (oldValue !== value) {
      parseStyleDecl(key, value).forEach(item => {
        const key = item.prop
        const value = item.value
        // TODO 临时对部分属性做简易二次解析
        if (key === 'flex') {
          const valueSplit = value.split(/\s+/)
          const flexBasisKeyWords = ['none', 'auto']
          // flex: none | auto;
          if (valueSplit.length === 1 && flexBasisKeyWords.includes(valueSplit[0])) {
            switch (value) {
              case 'none':
                this.updateProperty('flexGrow', '0')
                this.updateProperty('flexShrink', '0')
                this.updateProperty('flexBasis', 'auto')
                return;
              case 'auto':
                this.updateProperty('flexGrow', '1')
                this.updateProperty('flexShrink', '1')
                this.updateProperty('flexBasis', 'auto')
                return;
            }
          }
          // flex: 1 auto; flex: 1 10px;
          if (valueSplit.length === 2 && (valueSplit[1] === 'auto' || isNaN(Number(valueSplit[1])))) {
            this.updateProperty('flexGrow', valueSplit[0])
            this.updateProperty('flexShrink', '1')
            this.updateProperty('flexBasis', valueSplit[1])
            return
          }
          const [flexGrow, flexShrink, flexBasis] = valueSplit
          this.updateProperty('flexGrow', flexGrow)
          this.updateProperty('flexShrink', flexShrink || '1')
          this.updateProperty('flexBasis', flexBasis || '0%')
          return
        }
        const cssomKey = toPropertySupportedByCSSOM(key)
        if (cssomKey) {
          return this.updateProperty(key, value)
        }
        if (typeof value === 'string' && value.includes('var(')) {
          if (this.parseVar(key, value as string, (value) => {
            this._element?.parseStyle(key, value)
          })) {
            this.style.set(key, value)
            return
          }
        }
        if (this._element?.parseStyle(key, value)) {
          this.varUpdaters.delete(key)
          this.style.set(key, value)
        }
      })
      this._element?.attributes.attributeChangedCallback('style', '', '')
    }
  }

  getPropertyValue(
    key: string,
  ): string {
    if (enableAttributeStyleMap) {
      const cssomKey = getCSSOMProperty(key)
      if (isPropertySupportedByCSSOM(cssomKey)) {
        return this._element?.attributeStyleMap.get(cssomKey)?.toString()
      }
    }
    if (key.startsWith('--')) {
      const value = this.style.get(key as string)
      return (value || '') as string
    }
    const property = camelize(key as string)
    let value: Object
    // TODO 暂时对部分属性简写读取
    if ([
      'borderWidth',
      'borderColor',
      'borderStyle',
    ].includes(property as string)) {
      const p3 = property.substring(6)
      const array = ['Top', 'Right', 'Bottom', 'Left']
      const values = array.map((item) => {
        if (enableAttributeStyleMap) {
          return this.getPropertyValue('border' + item + p3)
        }
        return this.style.get('border' + item + p3)
      })
      const v1 = values[0]
      const v2 = values[1]
      const v3 = values[2]
      const v4 = values[3]
      if (v1 && v2 && v3 && v4) {
        value = v1 === v2 && v2 === v3 && v3 === v4 ? v1 : [v1, v2, v3, v4].join(' ')
      }
    } else {
      if (enableAttributeStyleMap) {
        value = this.getPropertyValue(property as string)
      } else {
        value = this.style.get(property as string)
      }
    }
    return (value || '') as string
  }

  getStyleMap(): NativeMap<string, Object | null> {
    return this.style
  }

  /**
   * @internal
   */
  dispose(): void {
    this.varUpdaters.forEach((updater) => updater.dispose())
    this.varUpdaters.clear()
    this._element = undefined
  }

  private varUpdaters: Map<string, VarUpdater> = new Map()

  private parseVar(key: string, value: string, callback: (value: string) => void): boolean {
    const array = parseVar(value)
    if (array.length === 0) {
      return false
    }
    const varUpdater = new VarUpdater(this, array, callback)
    this.varUpdaters.set(key, varUpdater)
    varUpdater.updateVar()
    return true
  }
}
