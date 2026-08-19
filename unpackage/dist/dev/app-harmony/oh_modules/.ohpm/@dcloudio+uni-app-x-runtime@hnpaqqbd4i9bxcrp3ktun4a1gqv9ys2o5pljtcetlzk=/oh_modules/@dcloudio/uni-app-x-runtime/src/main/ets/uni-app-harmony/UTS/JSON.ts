import { UTSJSONObject } from '../uts-polyfill'
import { getType, isPlainObject } from './utils/index'
const OriginalJSON = JSON

function createUTSJSONObjectOrArray(obj: any) {
  if (Array.isArray(obj)) {
    return obj.map((item) => {
      return createUTSJSONObjectOrArray(item);
    });
  }
  else if (isPlainObject(obj)) {
    const result = new globalThis.UTSJSONObject({});
    for (const key in obj) {
      const value = obj[key];
      result[key] = createUTSJSONObjectOrArray(value);
    }
    return result;
  }
  return obj;
}

function parseObjectOrArray(object: any) {
  const objectType = getType(object);
  if (object === null || (objectType !== 'object' && objectType !== 'array')) {
    return object;
  }
  if (objectType === 'array' || objectType === 'object') {
    return createUTSJSONObjectOrArray(object);
  }
  return object;
}

const UTSJSON = {
  parse<T = UTSJSONObject>(
    text: string,
    reviver?: (this: any, key: string, value: any) => any,
  ): T | null {
    try {
      const parseResult = OriginalJSON.parse(text, reviver)
      return parseObjectOrArray(parseResult)
    } catch (error) {
      console.error(error)
      return null
    }
  },
  parseArray<T = Object | null | undefined>(text: string): Array<T> | null {
    try {
      const parseResult = OriginalJSON.parse(text)
      if (Array.isArray(parseResult)) {
        return parseObjectOrArray(parseResult)
      }
      return null
    } catch (error) {
      console.error(error)
      return null
    }
  },
  parseObject<T = UTSJSONObject>(text: string): T | null {
    try {
      const parseResult = OriginalJSON.parse(text)
      if (Array.isArray(parseResult)) {
        return null
      }
      return parseObjectOrArray(parseResult)
    } catch (error) {
      console.error(error)
      return null
    }
  },
  stringify: (value: any) => {
    return OriginalJSON.stringify(value)
  },
}

export { UTSJSON }
