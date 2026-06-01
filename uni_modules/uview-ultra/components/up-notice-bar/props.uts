import { defineMixin } from '../../libs/vue'
import defProps from './noticeBar.uts'
let crtProp = defProps['noticeBar'] as UTSJSONObject

export const propsNoticeBar = defineMixin({
    props: {
        // 显示的内容，数组
        text: {
            type: [Array, String],
            default: crtProp['text']
        },
        // 通告滚动模式，row-横向滚动，column-竖向滚动
        direction: {
            type: String,
            default: crtProp['direction']
        },
        // direction = row时，是否使用步进形式滚动
        step: {
            type: Boolean,
            default: crtProp['step']
        },
        // 是否显示左侧的音量图标
        icon: {
            type: String,
            default: crtProp['icon']
        },
        // 通告模式，link-显示右箭头，closable-显示右侧关闭图标
        mode: {
            type: String,
            default: crtProp['mode']
        },
        // 文字颜色，各图标也会使用文字颜色
        color: {
            type: String,
            default: crtProp['color']
        },
        // 背景颜色
        bgColor: {
            type: String,
            default: crtProp['bgColor']
        },
        // 水平滚动时的滚动速度，即每秒滚动多少px(px)，这有利于控制文字无论多少时，都能有一个恒定的速度
        speed: {
            type: [String, Number],
            default: crtProp['speed']
        },
        // 字体大小
        fontSize: {
            type: [String, Number],
            default: crtProp['fontSize']
        },
        // 滚动一个周期的时间长，单位ms
        duration: {
            type: [String, Number],
            default: crtProp['duration']
        },
        // 是否禁止用手滑动切换
        // 目前HX2.6.11，只支持App 2.5.5+、H5 2.5.5+、支付宝小程序、字节跳动小程序
        disableTouch: {
            type: Boolean,
            default: crtProp['disableTouch']
        },
        // 跳转的页面路径
        url: {
            type: String,
            default: crtProp['url']
        },
        // 页面跳转的类型
        linkType: {
            type: String,
            default: crtProp['linkType']
        }
    }
})
