import {
  arrayFind,
  arrayPop,
  arrayShift,
  arrayCopyWithin,
  arrayFill
} from './Array'
import { UTSJSON } from './JSON'
import { mapGet } from './Map'
import { stringCodePointAt } from './String'
import { weakMapGet } from './WeakMap'
import { UTSConsole } from './console'

type IUTS = {
  arrayFind: typeof arrayFind,
  arrayPop: typeof arrayPop,
  arrayShift: typeof arrayShift,
  arrayCopyWithin: typeof arrayCopyWithin,
  arrayFill: typeof arrayFill,
  mapGet: typeof mapGet,
  stringCodePointAt: typeof stringCodePointAt,
  weakMapGet: typeof weakMapGet,
  JSON: typeof UTSJSON,
  console: typeof UTSConsole
}

export const UTS: IUTS = {
  arrayFind,
  arrayPop,
  arrayShift,
  arrayCopyWithin,
  arrayFill,
  mapGet,
  stringCodePointAt,
  weakMapGet,
  JSON: UTSJSON,
  console: UTSConsole
}
