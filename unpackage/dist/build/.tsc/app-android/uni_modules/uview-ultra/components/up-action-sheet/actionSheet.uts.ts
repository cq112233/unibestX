/*
 * @Author       : jry
 * @Description  :
 * @version      : 4.0
 * @Date         : 2024-12-22 19:21:21
 * @LastAuthor   : jry
 * @lastTime     : 2024-12-22 19:21:21
 * @FilePath     : /uview-ultra/libs/config/props/actionSheet
 */
import { UPActionSheetItem } from './types.uts'
export default {
    // action-sheet组件
    actionSheet: {
        show: false,
        title: '',
        description: '',
        // actions: [] as Array<UPActionSheetItem>,
		actions: [] as Array<UTSJSONObject>,
        index: '',
        cancelText: '',
        closeOnClickAction: true,
        safeAreaInsetBottom: true,
        openType: '',
        closeOnClickOverlay: true,
        round: 0,
        wrapMaxHeight: '600px'
    }
} as UTSJSONObject
