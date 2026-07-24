/*
 * @Author       : jry
 * @Description  : uview-plus component's props mixin file
 * @version      : 4.0
 * @Date         : 2024-04-22 16:44:21
 * @LastAuthor   : jry
 * @lastTime     : 2025-12-21 23:26:00
 */
import { defineMixin } from '../../libs/vue.uts'
import defProps from './swipterIndicator.uts'
let swiperIndicatorProp = defProps['swiperIndicator'] as UTSJSONObject

export const propsSwiperIndicator = defineMixin({
    props: {
        // 轮播的长度
        length: {
            type: [String, Number],
            default: swiperIndicatorProp['length']
        },
        // 当前处于活动状态的轮播的索引
        current: {
            type: [String, Number],
            default: swiperIndicatorProp['current']
        },
        // 指示器非激活颜色
        indicatorActiveColor: {
            type: String,
            default: swiperIndicatorProp['indicatorActiveColor']
        },
        // 指示器的激活颜色
        indicatorInactiveColor: {
            type: String,
            default: swiperIndicatorProp['indicatorInactiveColor']
        },
        // 指示器模式，line-线型，dot-点型
        indicatorMode: {
            type: String,
            default: swiperIndicatorProp['indicatorMode']
        }
    }
})