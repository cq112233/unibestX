/*
 * @Author       : jry
 * @Description  :
 * @version      : 4.0
 * @Date         : 2021-08-20 16:44:21
 * @LastAuthor   : jry
 * @lastTime     : 2024-08-20 14:20:58
 * @FilePath     : /uview-ultra/components/up-loadmore/props.uts
 */
import { defineMixin } from '../../libs/vue.uts'
import defProps from './loadmore'
let crtProp = defProps['loadmore'] as UTSJSONObject

export const propsLoadmore = defineMixin({
    props: {
        // 组件状态，loadmore-加载前的状态，loading-加载中的状态，nomore-没有更多的状态
        status: {
            type: String,
            default: crtProp['status']
        },
        // 组件背景色
        bgColor: {
            type: String,
            default: crtProp['bgColor']
        },
        // 是否显示加载中的图标
        icon: {
            type: Boolean,
            default: crtProp['icon']
        },
        // 字体大小
        fontSize: {
            type: [String, Number],
            default: crtProp['fontSize']
        },
        // 图标大小
        iconSize: {
            type: [String, Number],
            default: crtProp['iconSize']
        },
        // 字体颜色
        color: {
            type: String,
            default: crtProp['color']
        },
        // 加载中状态的图标，spinner-花朵状图标，circle-圆圈状，semicircle-半圆
        loadingIcon: {
            type: String,
            default: crtProp['loadingIcon']
        },
        // 加载前的提示语
        loadmoreText: {
            type: String,
            default: crtProp['loadmoreText']
        },
        // 加载中提示语
        loadingText: {
            type: String,
            default: crtProp['loadingText']
        },
        // 没有更多的提示语
        nomoreText: {
            type: String,
            default: crtProp['nomoreText']
        },
        // 在"没有更多"状态下，是否显示粗点
        isDot: {
            type: Boolean,
            default: crtProp['isDot']
        },
        // 加载中图标的颜色
        iconColor: {
            type: String,
            default: crtProp['iconColor']
        },
        // 上边距
        marginTop: {
            type: [String, Number],
            default: crtProp['marginTop']
        },
        // 下边距
        marginBottom: {
            type: [String, Number],
            default: crtProp['marginBottom']
        },
        // 高度，单位px
        height: {
            type: [String, Number],
            default: crtProp['height']
        },
        // 是否显示左边分割线
        line: {
            type: Boolean,
            default: crtProp['line']
        },
        // 线条颜色
        lineColor: {
            type: String,
            default: crtProp['lineColor']
        },
        // 是否虚线，true-虚线，false-实线
        dashed: {
            type: Boolean,
            default: crtProp['dashed']
        }
    }
})