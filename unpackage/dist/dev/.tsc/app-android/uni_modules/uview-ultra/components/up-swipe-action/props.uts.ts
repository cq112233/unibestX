import { defineMixin } from '../../libs/vue'
import defProps from './swipeAction'
let crtProp = defProps['swipeAction'] as UTSJSONObject

export const propsSwipeAction = defineMixin({
    props: {
        // 是否自动关闭其他swipe按钮组
        autoClose: {
            type: Boolean,
            default: defProps['autoClose']
        },
        // 是否存在打开的按钮组
        opendItem: {
            type: Boolean,
            default: false
        }
    }
})
