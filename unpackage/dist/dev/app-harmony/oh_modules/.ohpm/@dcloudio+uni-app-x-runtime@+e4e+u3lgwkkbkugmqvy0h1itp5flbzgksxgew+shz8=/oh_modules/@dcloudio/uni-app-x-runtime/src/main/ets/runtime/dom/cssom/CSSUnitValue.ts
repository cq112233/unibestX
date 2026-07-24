import { CSSUnitValue as ICSSUnitValue, CSSNumberish as ICSSNumberish } from './types';
import { CSSNumericValue } from './CSSNumericValue';

export enum PercentUnit {
  percent = 'percent',
}

export enum LengthUnit {
  px = 'px',
  rpx = 'rpx',
  upx = 'upx',
  in = 'in',
  cm = 'cm'
}

export enum AngleUnit {
  deg = 'deg',
  rad = 'rad',
  // grad = 'grad',
  turn = 'turn',
}

export enum TimeUnit {
  s = 's',
  ms = 'ms',
}

export enum NumberUnit {
  number = 'number',
}

export enum UnitType {
  length,
  percent,
  number,
  angle,
  time,
}

export function toPx(value: CSSUnitValue): number {
  if (value.unit === LengthUnit.px) {
    return value.value;
  } else if (value.unit === LengthUnit.in) {
    return value.value * 96;
  } else if (value.unit === LengthUnit.cm) {
    return value.value * 37.8;
  }
  throw new Error(`To px error: dynamic unit could not be converted`);
}

export function toDeg(value: CSSUnitValue): number {
  if (value.unit === AngleUnit.deg) {
    return value.value;
  } else if (value.unit === AngleUnit.rad) {
    return value.value * (180 / Math.PI);
  } else if (value.unit === AngleUnit.turn) {
    return value.value * 360;
  }
  throw new Error(`To deg error: dynamic unit could not be converted`);
}

export function toRad(value: CSSUnitValue): number {
  if (value.unit === AngleUnit.deg) {
    return value.value * Math.PI / 180;
  } else if (value.unit === AngleUnit.rad) {
    return value.value;
  } else if (value.unit === AngleUnit.turn) {
    return value.value * 2 * Math.PI;
  }
  throw new Error(`To rad error: dynamic unit could not be converted`);
}

export function toCSSUnitValue(value: string | number, validTypes: UnitType[]): CSSUnitValue | undefined {
  const includeNumber = validTypes.includes(UnitType.number);
  const includeLength = validTypes.includes(UnitType.length);
  // TODO 额外判断是必然的，编译器将10px转为数字10真的快了吗？
  if (typeof value === 'number') {
    if (includeNumber) {
      return new CSSUnitValue(value, NumberUnit.number);
    } else if(includeLength) {
      return new CSSUnitValue(value, LengthUnit.px)
    } else {
      return
    }
  }

  const match = value.match(/^(-?\d*\.?\d+)([a-zA-Z%]*)$/);
  if (!match) {
    return
  }
  // TODO 是否要实现正负数校验，例：left允许为负数，但是width不允许为负数
  const numValue = parseFloat(match[1]);
  const unit = match[2];
  if (unit === '%') {
    if (!validTypes.includes(UnitType.percent)) {
      return
    }
    return new CSSUnitValue(numValue, PercentUnit.percent);
  } else if (unit in LengthUnit) {
    if (!validTypes.includes(UnitType.length)) {
      return
    }
    return new CSSUnitValue(numValue, unit as LengthUnit);
  } else if (unit in AngleUnit) {
    if (!validTypes.includes(UnitType.angle)) {
      return
    }
    return new CSSUnitValue(numValue, unit as AngleUnit);
  } else if (unit in TimeUnit) {
    if (!validTypes.includes(UnitType.time)) {
      return
    }
    return new CSSUnitValue(numValue, unit as TimeUnit);
  } else if (unit === '' || unit == null) {
    const acceptNumber = validTypes.includes(UnitType.number);
    // 支持number的属性优先转为number，例line-height: 0 => CSSUnitValue {value: 0, unit: 'number'}
    if (!acceptNumber && validTypes.includes(UnitType.length) && numValue === 0) {
      return new CSSUnitValue(numValue, LengthUnit.px);
    }
    if (!acceptNumber) {
      return
    }
    return new CSSUnitValue(numValue, NumberUnit.number);
  }
}

export class CSSUnitValue extends CSSNumericValue implements ICSSUnitValue {
  static parse(cssText: string): CSSUnitValue {
    const value =
      toCSSUnitValue(cssText, [UnitType.length, UnitType.percent, UnitType.angle, UnitType.time, UnitType.number]);
    if (value) {
      return value;
    }
    throw new Error(`Failed to execute 'parse' on 'CSSUnitValue': The provided value "${cssText}" is invalid.`);
  }

  unit: string;
  value: number;

  constructor(value: number, unit: string) {
    super()
    this.value = value;
    this.unit = unit === '%' ? PercentUnit.percent : unit;
  }

  public toString(): string {
    if (this.unit === NumberUnit.number) {
      return `${this.value}`;
    }
    return `${this.value}${this.unit === PercentUnit.percent ? '%' : this.unit}`;
  }
}

export function isCSSNumberish(value: any): value is ICSSNumberish {
  return typeof value === 'number' || (value instanceof CSSUnitValue && value.unit === NumberUnit.number);
}

export function numberishToCSSUnitValue(value: ICSSNumberish): CSSUnitValue {
  if (typeof value === 'number') {
    return new CSSUnitValue(value, NumberUnit.number);
  } else if (value instanceof CSSUnitValue) {
    return value;
  }
  throw new TypeError('Failed to convert to CSSUnitValue: parameter is not of type number or CSSUnitValue');
}