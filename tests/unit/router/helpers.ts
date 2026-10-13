/**
 * 路由单测共用小工具
 *
 * 真源 UTS 里对象字面量会**隐式**变成 `UTSJSONObject`（自带 getString / getJSON / keys），
 * 单测环境是裸 JS，字面量就是普通对象 —— 直接喂给 `.uts` 代码会崩在
 * `obj.getString is not a function`。凡是「本该由编译器送进来」的对象（导航入参、
 * onAppRoute 事件载荷、meta 注册值），都要先套一层这里的包装才与真机等价。
 */
export function utsObject(raw: Record<string, any>): any {
  const UTSJSONObjectCtor = (globalThis as any).UTSJSONObject;
  return Object.assign(new UTSJSONObjectCtor(), raw);
}
