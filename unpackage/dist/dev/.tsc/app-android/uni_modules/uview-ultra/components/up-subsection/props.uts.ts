import { defineMixin } from '../../libs/vue'
import defProps from './subsection'
let crtProp = defProps['subsection'] as UTSJSONObject

export const subsectionProps = defineMixin({
    props: {
        // tab的数据
        list: {
            type: Array,
            default: crtProp['list']
        },
        // 当前活动的tab的index
        current: {
            type: [String, Number],
            default: crtProp['current']
        },
        // 激活的颜色
        activeColor: {
            type: String,
            default: crtProp['activeColor']
        },
        // 未激活的颜色
        inactiveColor: {
            type: String,
            default: crtProp['inactiveColor']
        },
        // 模式选择，mode=button为按钮形式，mode=subsection时为分段模式
        mode: {
            type: String,
            default: crtProp['mode']
        },
        // 字体大小
        fontSize: {
            type: [String, Number],
            default: crtProp['fontSize']
        },
        // 激活tab的字体是否加粗
        bold: {
            type: Boolean,
            default: crtProp['bold']
        },
        // mode = button时，组件背景颜色
        bgColor: {
            type: String,
            default: crtProp['bgColor']
        },
		// 从list元素对象中读取的键名
		keyName: {
			type: String,
			default: crtProp['keyName']
		},
		// 从list元素对象中读取激活时的颜色  如果存在字段 优先级大于 activeColor
		activeColorKeyName: {
			type: String,
			default: crtProp['activeColorKeyName']
		},
		// 从list元素对象中读取未激活时的颜色 如果存在字段 优先级大于 inactiveColor
		inactiveColorKeyName: {
			type: String,
			default: crtProp['inactiveColorKeyName']
		},
		// 是否禁用
		disabled: {
			type: Boolean,
			default: crtProp['disabled']
		}
    }
})
