import { CSSKeywordValue as ICSSKeywordValue, } from './types'
import { CSSStyleValue } from './CSSStyleValue'
import { KeywordValues, Property } from './constants'

const KEYWORD_INSTANCE_MAP: Map<string, CSSKeywordValue> = new Map()

export class CSSKeywordValue extends CSSStyleValue implements ICSSKeywordValue {
  /**
   * 此方法和StyleValueFactory有可以共用的逻辑，为保证StyleValueFactory的执行效率，不进行代码复用
   */
  static parse(property: string, cssText: string): CSSKeywordValue {
    const propertyId = Property[property]
    if (propertyId == null) {
      throw new Error(`Failed to execute 'parse' on 'CSSStyleValue': Invalid property name`)
    }
    const values = KeywordValues[propertyId]
    if (!values) {
      throw new Error(`Failed to execute 'parse' on 'CSSStyleValue': Invalid property name`)
    }
    if(values.includes(cssText)) {
      return this.getCSSKeywordValue(cssText)
    }
    throw new Error(`Failed to execute 'parse' on 'CSSStyleValue': The provided value "${cssText}" is invalid.`)
  }

  /**
   * 获取已存在的CSSKeywordValue实例，不同于web规范，缓存CSSKeywordValue实例加速比较及创建
   */
  static getCSSKeywordValue(value: string): CSSKeywordValue {
    if (KEYWORD_INSTANCE_MAP.has(value)) {
      return KEYWORD_INSTANCE_MAP.get(value)!
    }
    const keywordValue = new CSSKeywordValue(value)
    KEYWORD_INSTANCE_MAP.set(value, keywordValue)
    return keywordValue
  }

  static isEqual(a: CSSKeywordValue, b: CSSKeywordValue): boolean {
    return a === b || a.value === b.value
  }

  value: string

  constructor(value: string) {
    super()
    this.value = value
  }

  public toString(): string {
    return this.value
  }
}