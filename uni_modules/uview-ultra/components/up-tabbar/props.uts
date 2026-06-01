/*
 * @Author       : jry
 * @Description  : uview-plus component's props mixin file
 * @version      : 4.0
 * @Date         : 2024-04-22 16:44:21
 * @LastAuthor   : jry
 * @lastTime     : 2025-12-22 00:12:00
 */
import { defineMixin } from '../../libs/vue.uts'
import defProps from './tabbar.uts'
let tabbarProp = defProps['tabbar'] as UTSJSONObject

export const propsTabbar = defineMixin({
    props: {
        // 当前匹配项的name
        value: {
            type: [String, Number, null],
            default: tabbarProp['value']
        },
        // 是否为iPhoneX留出底部安全距离
        safeAreaInsetBottom: {
            type: Boolean,
            default: tabbarProp['safeAreaInsetBottom']
        },
        // 是否显示上方边框
        border: {
            type: Boolean,
            default: tabbarProp['border']
        },
        // 上方边框颜色
        borderColor: {
            type: String,
            default: tabbarProp['borderColor']
        },
        // 元素层级z-index
        zIndex: {
            type: [String, Number],
            default: tabbarProp['zIndex']
        },
        // 选中标签的颜色
        activeColor: {
            type: String,
            default: tabbarProp['activeColor']
        },
        // 未选中标签的颜色
        inactiveColor: {
            type: String,
            default: tabbarProp['inactiveColor']
        },
        // 是否固定在底部
        fixed: {
            type: Boolean,
            default: tabbarProp['fixed']
        },
        // fixed定位固定在底部时，是否生成一个等高元素防止塌陷
        placeholder: {
            type: Boolean,
            default: tabbarProp['placeholder']
        },
        // 背景色
        backgroundColor: {
            type: String,
            default: tabbarProp['backgroundColor']
        }
    }
})