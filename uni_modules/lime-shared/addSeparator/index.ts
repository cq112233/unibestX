/**
 * 每n位数字添加一个分隔符
 */
export function addSeparator(num : number | string, separator = ',', digit = 3) {
	return `${num}`.replace(
		new RegExp(`\\B(?=(\\d{${digit}})+(?!\\d))`, 'g'),
		separator,
	)
}