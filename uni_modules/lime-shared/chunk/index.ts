// @ts-nocheck
/**
 * 数组切片分组
 * @description 按固定长度把数组切成若干组，最后一组不足 size 也保留；不修改原数组。
 * @param array 原始数组
 * @param size 每组的元素个数，默认为 1，小于 1 或数组为空时返回空数组
 * @returns 拆分后的二维数组
 */
export function chunk<T>(array: T[], size: number = 1): T[][] {
  const length = array.length
  if (length == 0 || size < 1) {
    return []
  }
  const result: T[][] = []
  let index = 0
  while (index < length) {
    const nextIndex = index + size
    result.push(array.slice(index, nextIndex))
    index = nextIndex
  }
  return result
}
