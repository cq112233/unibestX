// @ts-nocheck
/**
 * 获取当前页面实例
 * @returns 当前页面实例，如果无法获取则返回null
 */
export const getCurrentPage = (): UniPage | null => {
	const pages = getCurrentPages();
	if (pages == null || pages.length == 0) {
		return null;
	}
	return pages[pages.length - 1];
};