// UTS 内置全局 → node 侧等价实现。必须在导入被测模块**之前**执行，
// 因此 run.ts 用动态 import 保证顺序（静态 import 会被提升）。
const g = globalThis as any;
g.isArray = Array.isArray;

// ── UTSJSONObject 垫片 ──
// url.uts 的 normalizeLocation / serializeQuery 走的是 UTSJSONObject 语义（对象字面量
// 在真机上就是 UTSJSONObject）：读值靠 getString / getJSON / getAny，键遍历靠
// UTSJSONObject.keys()。这三样在 node 里都不存在，不补就整段跑不起来。
//
// 补法：静态方法挂全局；实例方法以**不可枚举**属性挂 Object.prototype —— 不可枚举
// 才不会污染 JSON.stringify / for-in，用例里手写的对象字面量照旧是普通对象。
// 只实现插件真正用到的那几个（getString / getJSON / getAny / toMap + 静态 keys）。
if (g.UTSJSONObject == null) {
  const hasOwn = (target: any, key: string): boolean => Object.prototype.hasOwnProperty.call(target, key);
  const read = (target: any, key: string): any => (hasOwn(target, key) ? target[key] : null);

  Object.defineProperties(Object.prototype, {
    getAny: {
      value(key: string): any {
        return read(this, key);
      }
    },
    getString: {
      value(key: string): string | null {
        const value = read(this, key);
        return typeof value == 'string' ? value : null;
      }
    },
    getJSON: {
      value(key: string): any {
        const value = read(this, key);
        if (value == null) {
          return null;
        }
        if (typeof value == 'string') {
          try {
            return JSON.parse(value);
          }
          catch {
            return null;
          }
        }
        if (typeof value == 'object' && !Array.isArray(value)) {
          return value;
        }
        return null;
      }
    },
    toMap: {
      value(): Map<string, any> {
        const map = new Map<string, any>();
        const keys = Object.keys(this);
        for (let i = 0; i < keys.length; i++) {
          map.set(keys[i], (this as any)[keys[i]]);
        }
        return map;
      }
    }
  });

  g.UTSJSONObject = {
    keys: (item: any): Array<string> => Object.keys(item),
    parse: (text: string): any => JSON.parse(text)
  };
}

export {};
