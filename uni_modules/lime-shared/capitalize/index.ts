// @ts-nocheck
/**
 * 首字母大写（其余字母小写）
 * @description 与 lodash 的 capitalize 语义一致：首字母转大写、其余字符转小写。
 * 需要「每个单词首字母都大写」时请改用 camelCase(str, true)。
 * @param string 输入文本
 * @returns 转换后的字符串
 */
export function capitalize(string: string): string {
  if (string == '') {
    return ''
  }
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}
