import { defineMixin } from '../../libs/vue'
import defProps from './steps'
let crtProp = defProps['steps'] as UTSJSONObject

export const propsSteps = defineMixin({
    props: {
        // 排列方向
        direction: {
            type: String,
            default: crtProp['direction']
        },
        // 设置第几个步骤
        current: {
            type: [String, Number],
            default: crtProp['current']
        },
        // 激活状态颜色
        activeColor: {
            type: String,
            default: crtProp['activeColor']
        },
        // 未激活状态颜色
        inactiveColor: {
            type: String,
            default: crtProp['inactiveColor']
        },
        // 激活状态的图标
        activeIcon: {
            type: String,
            default: crtProp['activeIcon']
        },
        // 未激活状态图标
        inactiveIcon: {
            type: String,
            default: crtProp['inactiveIcon']
        },
        // 是否显示点类型
        dot: {
            type: Boolean,
            default: crtProp['dot']
        }
    }
})
