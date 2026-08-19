import {
  CSSNumericValue as ICSSNumericValue,
  CSSNumberish as ICSSNumberish,
  CSSUnitValue as ICSSUnitValue,
  CSSMathSum as ICSSMathSum,
  CSSNumericType as ICSSNumericType
} from './types'
import { CSSStyleValue } from './CSSStyleValue'

export class CSSNumericValue extends CSSStyleValue implements ICSSNumericValue {
  add(...values: ICSSNumberish[]): CSSNumericValue {
    throw new Error('Not implemented');
  }

  div(...values: ICSSNumberish[]): ICSSNumericValue {
    throw new Error('Not implemented');
  }

  equals(...values: ICSSNumberish[]): boolean {
    throw new Error('Not implemented');
  }

  max(...values: ICSSNumberish[]): CSSNumericValue {
    throw new Error('Not implemented');
  }

  min(...values: ICSSNumberish[]): CSSNumericValue {
    throw new Error('Not implemented');
  }

  mul(...values: ICSSNumberish[]): CSSNumericValue {
    throw new Error('Not implemented');
  }

  sub(...values: ICSSNumberish[]): CSSNumericValue {
    throw new Error('Not implemented');
  }

  to(unit: string): ICSSUnitValue {
    throw new Error('Not implemented');
  }

  toSum(...units: string[]): ICSSMathSum {
    throw new Error('Not implemented');
  }

  type(): ICSSNumericType {
    throw new Error('Not implemented');
  }
}