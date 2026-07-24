/*
 * @Author       : jry
 * @Description  : uview-plus component's props mixin file
 * @version      : 4.0
 * @Date         : 2025-12-20 22:06:00
 * @LastAuthor   : jry
 * @lastTime     : 2025-12-20 22:06:00
 */
import { defineMixin } from '../../libs/vue.uts'
import defProps from './switch.uts'
let switchProp = defProps['switch'] as UTSJSONObject

export const propsSwitch = defineMixin({
    props: {
        // 开关尺寸，单位px
        size: {
            type: [String, Number],
            default: switchProp['size']
        },
        // 是否为加载中状态
        loading: {
            type: Boolean,
            default: switchProp['loading']
        },
        // 是否为禁用状态
        disabled: {
            type: Boolean,
            default: switchProp['disabled']
        },
        // 打开时的背景颜色
        activeColor: {
            type: String,
            default: switchProp['activeColor']
        },
        // 关闭时的背景颜色
        inactiveColor: {
            type: String,
            default: switchProp['inactiveColor']
        },
        // 通过value设置开关的初始状态
        value: {
            type: [Boolean, String, Number],
            default: switchProp['value']
        },
        // v-model绑定值
        modelValue: {
            type: [Boolean, String, Number],
            default: switchProp['modelValue']
        },
        // 打开状态时的值
        activeValue: {
            type: [Boolean, String, Number],
            default: switchProp['activeValue']
        },
        // 关闭状态时的值
        inactiveValue: {
            type: [Boolean, String, Number],
            default: switchProp['inactiveValue']
        },
        // 是否开启异步变更
        asyncChange: {
            type: Boolean,
            default: switchProp['asyncChange']
        },
        // 圆点与外边框的距离
        space: {
            type: [String, Number],
            default: switchProp['space']
        },
        // 图标大小
        iconSize: {
            type: [String, Number],
            default: switchProp['iconSize']
        },
        // 切换前执行的回调函数
        beforeChange: {
			// @ts-ignore
            type: Function,
            default: switchProp['beforeChange']
        }
    }
})