import { defineMixin } from '../../libs/vue'
import defProps from './navbarMini'
let crtProp = defProps['navbarMini'] as UTSJSONObject

export const propsNavbarMini = defineMixin({
	props: {
		// 是否开启顶部安全区适配
		safeAreaInsetTop: {
			type: Boolean,
			default: crtProp['safeAreaInsetTop']
		},
		// 是否固定在顶部
		fixed: {
			type: Boolean,
			default: crtProp['fixed']
		},
		// 左边的图标
		leftIcon: {
			type: String,
			default: crtProp['leftIcon']
		},
		// 背景颜色
		bgColor: {
			type: String,
			default: crtProp['bgColor']
		},
		// 导航栏高度
		height: {
			type: [String, Number],
			default: crtProp['height']
		},
		// 图标的大小
		iconSize: {
			type: [String, Number],
			default: crtProp['iconSize']
		},
		// 图标的颜色
		iconColor: {
			type: String,
			default: crtProp['iconColor']
		},
		// 点击左侧区域(返回图标)，是否自动返回上一页
		autoBack: {
			type: Boolean,
			default: crtProp['autoBack']
		},
		// 首页路径
		homeUrl: {
			type: String,
			default: crtProp['homeUrl']
		}
	}
})