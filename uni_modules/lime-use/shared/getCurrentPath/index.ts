// @ts-nocheck
/**
 * 获取当前页面路径
 * @returns 当前页面路径，如果无法获取则返回空字符串
 */
import { getCurrentPage } from '../getCurrentPage';

export const getCurrentPath = (): string => {
	const currentPage = getCurrentPage();
	if (currentPage == null) {
		return '';
	}
	return currentPage.route as string;
}
