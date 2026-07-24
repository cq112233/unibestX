import { defineMixin } from '../../libs/vue'
import defProps from './stepsItem'
let crtProp = defProps['stepsItem'] as UTSJSONObject

export const propsStepsItem = defineMixin({
    props: {
        // 标题
        title: {
            type: [String, Number],
            default: crtProp['title']
        },
        // 描述文本
        desc: {
            type: [String, Number],
            default: crtProp['desc']
        },
        // 图标大小
        iconSize: {
            type: [String, Number],
            default: crtProp['iconSize']
        },
        // 当前步骤是否处于失败状态
        error: {
            type: Boolean,
            default: crtProp['error']
        },
        // 自定义样式
        itemStyle: {
            type: [UTSJSONObject],
            default: {}
        }
    }
})
