// @ts-nocheck
/**
 * 对象嵌套路径安全取值
 * @description 按 'a.b.c' 形式的路径逐层取值，路径不存在或中途为空时返回兜底值，不会抛错。
 * 注意：只支持普通对象逐层下钻；路径上遇到数组（需要下标取值）时直接返回兜底值，
 * 以避免原生端把数组强转成 UTSJSONObject 触发 ClassCastException。
 * @param object 目标对象
 * @param path 属性路径（例如 'user.info.name'）
 * @param defaultValue 未取到值时的兜底默认值
 * @returns 取到的值或兜底默认值
 */
export function get(object: any | null, path: string, defaultValue: any | null = null): any | null {
  if (object == null || path == '') {
    return defaultValue
  }
  const pathKeys = path.split('.')
  let curr: any | null = object
  for (let i = 0; i < pathKeys.length; i++) {
    if (curr == null || typeof curr != 'object' || Array.isArray(curr)) {
      return defaultValue
    }
    const jsonObj = curr as UTSJSONObject
    curr = jsonObj[pathKeys[i]]
  }
  if (curr != null) {
    return curr
  }
  return defaultValue
}
