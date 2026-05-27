/**
 * 精确比较两个数组是否相等（浅比较）
 * @param arr1 数组1
 * @param arr2 数组2
 * @returns 是否相等
 */
export function arrayEqual<T>(arr1 : T[], arr2 : T[]) : boolean {
	return (
		arr1.length == arr2.length &&
		arr1.every((val, i) : boolean => val == arr2[i])
	)
}