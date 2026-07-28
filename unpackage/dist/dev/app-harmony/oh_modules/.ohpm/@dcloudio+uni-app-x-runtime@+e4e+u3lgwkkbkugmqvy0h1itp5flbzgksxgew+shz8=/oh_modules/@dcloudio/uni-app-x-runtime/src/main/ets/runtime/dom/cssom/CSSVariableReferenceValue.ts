import {
  CSSVariableReferenceValue as ICSSVariableReferenceValue,
  CSSUnparsedValue as ICSSUnparsedValue
} from './types'
import { CSSUnparsedValue } from './CSSUnparsedValue'

export class CSSVariableReferenceValue implements ICSSVariableReferenceValue {
  constructor(
    public readonly variable: string,
    public readonly fallback: ICSSUnparsedValue | null = null,
  ) {
    if(!variable.startsWith('--')) {
      throw new Error('variable must start with "--"')
    }
  }

  private _relatedVariables: string[] | null = null

  /**
   * @internal
   */
  getRelatedVariables(): string[] {
    // 暂时假设不会修改variable内容，似乎也没有这种需求
    if(this._relatedVariables) {
      return this._relatedVariables
    }
    this._relatedVariables = []
    this._relatedVariables.push(this.variable)
    if(this.fallback) {
      this._relatedVariables.push(...(this.fallback as CSSUnparsedValue).getRelatedVariables())
    }
    return this._relatedVariables
  }

  /**
   * @internal
   */
  calculateCSSValue(variables: Map<string, string>): string | undefined {
    const value = variables.get(this.variable)
    if(value !== undefined) {
      return value
    }
    if(this.fallback) {
      return (this.fallback as CSSUnparsedValue).calculateCSSValue(variables)
    }
    return undefined
  }

  toString(): string {
    // 和web规范不一致，web规范会返回'[object CSSVariableReferenceValue]'
    return this.fallback ? `var(${this.variable},${this.fallback})` : `var(${this.variable})`
  }
}