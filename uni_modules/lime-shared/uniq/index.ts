// @ts-nocheck
/**
 * 数组去重（保持首次出现的顺序）
 * @description 逐元素比对，重复元素只保留第一次出现的那一个，返回新数组，不修改原数组。
 * 元素为对象时按引用比较（若需按内容比较请改用 isEqual）。
 * @param array 待去重的原始数组
 * @returns 去重后的新数组
 */
export function uniq<T>(array: T[]): T[] {
  const result: T[] = []
  for (let i = 0; i < array.length; i++) {
    const value = array[i]
    let exists = false
    for (let j = 0; j < result.length; j++) {
      if (result[j] == value) {
        exists = true
        break
      }
    }
    if (!exists) {
      result.push(value)
    }
  }
  return result
}
