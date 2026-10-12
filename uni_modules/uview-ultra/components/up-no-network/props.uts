/*
 * @Author       : jry
 * @Description  : uview-plus component's props mixin file
 * @version      : 4.0
 * @Date         : 2024-12-18 15:38:45
 * @LastAuthor   : jry
 * @lastTime     : 2024-12-18 15:38:45
 */
import { defineMixin } from '../../libs/vue.uts'
import defProps from './noNetwork.uts'
let noNetworkProp = defProps['noNetwork'] as UTSJSONObject

export const propsNoNetwork = defineMixin({
    props: {
        // 页面文字提示
        tips: {
            type: String,
            default: noNetworkProp['tips']
        },
        // 一个z-index值，用于设置没有网络这个组件的层次，因为页面可能会有其他定位的元素层级过高，导致此组件被覆盖
        zIndex: {
            type: [String, Number],
            default: noNetworkProp['zIndex']
        },
        // image 没有网络的图片提示
        image: {
            type: String,
            default: noNetworkProp['image']
        }
    }
})