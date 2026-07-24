/*
 * @Author: jry 
 * @Date: 2025-12-19 22:20:00 
 * @Last Modified by: jry
 * @Last Modified time: 2025-12-19 22:20:00
 */
import { defineMixin } from '../../libs/vue'
import defProps from './skeleton.uts'
let skProp = defProps['skeleton'] as UTSJSONObject

export const propsSkeleton = defineMixin({
	props: {
		// 是否展示骨架组件
		loading: {
			type: Boolean,
			default: skProp['loading']
		},
		// 是否开启动画效果
		animate: {
			type: Boolean,
			default: skProp['animate']
		},
		// 段落占位图行数
		rows: {
			type: [String, Number],
			default: skProp['rows']
		},
		// 段落占位图的宽度
		rowsWidth: {
			type: [String, Number, Array],
			default: skProp['rowsWidth']
		},
		// 段落占位图的高度
		rowsHeight: {
			type: [String, Number, Array],
			default: skProp['rowsHeight']
		},
		// 是否展示标题占位图
		title: {
			type: Boolean,
			default: skProp['title']
		},
		// 段落标题的宽度
		titleWidth: {
			type: [String, Number],
			default: skProp['titleWidth']
		},
		// 段落标题的高度
		titleHeight: {
			type: [String, Number],
			default: skProp['titleHeight']
		},
		// 是否展示头像占位图
		avatar: {
			type: Boolean,
			default: skProp['avatar']
		},
		// 头像占位图大小
		avatarSize: {
			type: [String, Number],
			default: skProp['avatarSize']
		},
		// 头像占位图的形状，circle-圆形，square-方形
		avatarShape: {
			type: String,
			default: skProp['avatarShape']
		}
	}
})