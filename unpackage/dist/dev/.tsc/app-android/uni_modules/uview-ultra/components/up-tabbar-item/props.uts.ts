/*
 * @Author       : ly
 * @Description  : uview-plus component's props mixin file
 * @version      : 4.0
 * @Date         : 2025-12-22 00:32:00
 * @LastAuthor   : jry
 * @lastTime     : 2025-12-22 00:32:00
 */
import { defineMixin } from '../../libs/vue.uts'
import defProps from './tabbarItem.uts'
let tabbarItemProp = defProps['tabbarItem'] as UTSJSONObject

export const propsTabbarItem = defineMixin({
    props: {
        // item标签的名称，作为与u-tabbar的value参数匹配的标识符
        name: {
            type: [String, Number, null],
            default: tabbarItemProp['name']
        },
        // uview-plus内置图标或者绝对路径的图片
        icon: {
            icon: String,
            default: tabbarItemProp['icon']
        },
        // 右上角的角标提示信息
        badge: {
            type: [String, Number, null],
            default: tabbarItemProp['badge']
        },
        // 是否显示圆点，将会覆盖badge参数
        dot: {
            type: Boolean,
            default: tabbarItemProp['dot']
        },
        // 描述文本
        text: {
            type: String,
            default: tabbarItemProp['text']
        },
        // 控制徽标的位置，对象或者字符串形式，可以设置top和right属性
        badgeStyle: {
            type: [UTSJSONObject, String],
            default: tabbarItemProp['badgeStyle']
        },
        // 模式，默认普通模式，midButton中间按钮模式
        mode: {
            type: String,
            default: tabbarItemProp['mode']
        }
    }
})