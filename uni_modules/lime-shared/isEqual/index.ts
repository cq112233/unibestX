// @ts-nocheck
/**
 * 深比较两个值是否相等
 * @description 基础类型直接比较；对象与数组按 JSON 序列化文本比较（能覆盖嵌套结构）。
 * 局限：对象键顺序不同会被判为不相等（如 {a:1,b:2} 与 {b:2,a:1}）；
 * 含函数、循环引用的值不可用此方法。仅比较浅层数组时可用 arrayEqual。
 * @param value 待比较的值
 * @param other 另一个待比较的值
 * @returns 是否相等
 */
export function isEqual(value: any | null, other: any | null): boolean {
  if (value == null && other == null) {
    return true
  }
  if (value == null || other == null) {
    return false
  }
  if (typeof value != typeof other) {
    return false
  }
  if (typeof value != 'object') {
    return value == other
  }
  return JSON.stringify(value) == JSON.stringify(other)
}
