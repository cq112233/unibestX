/**
 * 路由单测共用小工具
 *
 * 真源 UTS 里对象字面量会**隐式**变成 `UTSJSONObject`（自带 getString / getJSON / keys），
 * 单测环境是裸 JS，字面量就是普通对象 —— 直接喂给 `.uts` 代码会崩在
 * `obj.getString is not a function`。凡是「本该由编译器送进来」的对象（导航入参、
 * onAppRoute 事件载荷、meta 注册值），都要先套一层这里的包装才与真机等价。
 *
 * ⚠️ **嵌套对象也要递归包装**：真源里 `{ path: '/a', query: { id: 1 } }` 编译出来是
 * `new UTSJSONObject({ path: ..., query: new UTSJSONObject({ id: 1 }) })` —— 内层同样是
 * `UTSJSONObject`。导航入参现在由 `resolveUrl()` 按字段**直读** `to.query`（不再是
 * `obj.getJSON('query')`），只包一层的话内层拿到的还是裸字面量，`serializeQuery()` 里
 * `query.getAny(k)` 就会 `is not a function`（假阴性）。数组保持原样不动：
 * `queryValueToString()` 的 `Array.isArray()` 判定与 `,` 拼接依赖它仍是数组。
 */
function wrapJsonValue(val: any): any {
  if (val == null || typeof val !== 'object' || Array.isArray(val)) {
    return val;
  }
  const UTSJSONObjectCtor = (globalThis as any).UTSJSONObject;
  if (val instanceof UTSJSONObjectCtor) {
    return val;
  }
  const wrapped = new UTSJSONObjectCtor();
  const keys = Object.keys(val);
  for (let i = 0; i < keys.length; i++) {
    wrapped[keys[i]] = wrapJsonValue(val[keys[i]]);
  }
  return wrapped;
}

export function utsObject(raw: Record<string, any>): any {
  return wrapJsonValue(raw);
}
