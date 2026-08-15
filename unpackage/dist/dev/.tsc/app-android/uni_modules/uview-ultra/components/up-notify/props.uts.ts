/*
 * @Author       : jry
 * @Description  : uview-plus component's props mixin file
 * @version      : 4.0
 * @Date         : 2024-12-18 17:06:10
 * @LastAuthor   : jry
 * @lastTime     : 2024-12-18 17:06:10
 */
import { defineMixin } from '../../libs/vue.uts'
import defProps from './notify.uts'
let notifyProp = defProps['notify'] as UTSJSONObject

export const propsNotify = defineMixin({
    props: {
        // 到顶部的距离
        top: {
            type: [String, Number],
            default: notifyProp['top']
        },
        // type主题，primary，success，warning，error
        type: {
            type: String,
            default: notifyProp['type']
        },
        // 字体颜色
        color: {
            type: String,
            default: notifyProp['color']
        },
        // 背景颜色
        bgColor: {
            type: String,
            default: notifyProp['bgColor']
        },
        // 展示的文字内容
        message: {
            type: String,
            default: notifyProp['message']
        },
        // 展示时长，为0时不消失，单位ms
        duration: {
            type: [String, Number],
            default: notifyProp['duration']
        },
        // 字体大小
        fontSize: {
            type: [String, Number],
            default: notifyProp['fontSize']
        },
        // 是否留出顶部安全距离（状态栏高度）
        safeAreaInsetTop: {
            type: Boolean,
            default: notifyProp['safeAreaInsetTop']
        }
    }
})