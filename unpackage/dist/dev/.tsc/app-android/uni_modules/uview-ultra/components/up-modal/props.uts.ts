import { defineMixin } from '../../libs/vue'
import defProps from './modal'
let crtProp = defProps['modal'] as UTSJSONObject

export const propsModal = defineMixin({
    props: {
        // 是否展示modal
        show: {
            type: Boolean,
            default: crtProp['show']
        },
        // 标题
        title: {
            type: String,
            default: crtProp['title']
        },
        // 弹窗内容
        content: {
            type: String,
            default: crtProp['content']
        },
        // 确认文案
        confirmText: {
            type: String,
            default: crtProp['confirmText']
        },
        // 取消文案
        cancelText: {
            type: String,
            default: crtProp['cancelText']
        },
        // 是否显示确认按钮
        showConfirmButton: {
            type: Boolean,
            default: crtProp['showConfirmButton']
        },
        // 是否显示取消按钮
        showCancelButton: {
            type: Boolean,
            default: crtProp['showCancelButton']
        },
        // 确认按钮颜色
        confirmColor: {
            type: String,
            default: crtProp['confirmColor']
        },
        // 取消文字颜色
        cancelColor: {
            type: String,
            default: crtProp['cancelColor']
        },
        // 对调确认和取消的位置
        buttonReverse: {
            type: Boolean,
            default: crtProp['buttonReverse']
        },
        // 是否开启缩放效果
        zoom: {
            type: Boolean,
            default: crtProp['zoom']
        },
        // 是否异步关闭，只对确定按钮有效
        asyncClose: {
            type: Boolean,
            default: crtProp['asyncClose']
        },
        // 是否允许点击遮罩关闭modal
        closeOnClickOverlay: {
            type: Boolean,
            default: crtProp['closeOnClickOverlay']
        },
        // 给一个负的margin-top，往上偏移，避免和键盘重合的情况
        negativeTop: {
            type: [String, Number],
            default: crtProp['negativeTop']
        },
        // modal宽度，不支持百分比，可以数值，px，rpx单位
        width: {
            type: [String, Number],
            default: crtProp['width']
        },
        // 确认按钮的样式，circle-圆形，square-方形，如设置，将不会显示取消按钮
        confirmButtonShape: {
            type: String,
            default: crtProp['confirmButtonShape']
        },
        // 弹窗动画过度时间
        duration: {
            type: Number,
            default: crtProp['duration']
        },
        // 文案对齐方式
        contentTextAlign: {
            type: String,
            default: crtProp['contentTextAlign']
        },
        // 异步确定时如果点击了取消时候的提示文案
        asyncCloseTip: {
            type: String,
            default: crtProp['asyncCloseTip']
        },
        // 是否异步关闭，只对取消按钮有效
        asyncCancelClose: {
            type: Boolean,
            default: crtProp['asyncCancelClose']
        },
        // 内容样式
        contentStyle: {
            type: Object,
            default: crtProp['contentStyle']
        }
    }
})