/*
 * @Author       : jry
 * @Description  : uview-plus component's props mixin file
 * @version      : 4.0
 * @Date         : 2025-12-17 08:48:27
 * @LastAuthor   : jry
 * @lastTime     : 2025-12-17 08:48:27
 */
import { defineMixin } from '../../libs/vue.uts'
import defProps from './keyboard.uts'

let keyboardProp = defProps['keyboard'] as UTSJSONObject

export const propsKeyboard = defineMixin({
	props: {
		// 键盘类型，见官网基本使用的说明
		mode: {
			type: String,
			default: keyboardProp['mode']
		},
		// 是否显示"."按键，只在mode=number时有效
		dotDisabled: {
			type: Boolean,
			default: keyboardProp['dotDisabled']
		},
		// 是否显示键盘顶部工具条
		tooltip: {
			type: Boolean,
			default: keyboardProp['tooltip']
		},
		// 是否显示工具条中间的提示
		showTips: {
			type: Boolean,
			default: keyboardProp['showTips']
		},
		// 工具条中间的提示文字，见上方基本使用的说明，如不需要，请传""空字符
		tips: {
			type: String,
			default: keyboardProp['tips']
		},
		// 是否显示工具条左边的"取消"按钮
		showCancel: {
			type: Boolean,
			default: keyboardProp['showCancel']
		},
		// 是否显示工具条右边的"完成"按钮
		showConfirm: {
			type: Boolean,
			default: keyboardProp['showConfirm']
		},
		// 是否打乱键盘按键的顺序
		random: {
			type: Boolean,
			default: keyboardProp['random']
		},
		// 是否开启底部安全区适配
		safeAreaInsetBottom: {
			type: Boolean,
			default: keyboardProp['safeAreaInsetBottom']
		},
		// 是否允许点击遮罩收起键盘
		closeOnClickOverlay: {
			type: Boolean,
			default: keyboardProp['closeOnClickOverlay']
		},
		// 控制键盘的弹出与收起
		show: {
			type: Boolean,
			default: keyboardProp['show']
		},
		// 是否显示遮罩
		overlay: {
			type: Boolean,
			default: keyboardProp['overlay']
		},
		// 弹出键盘的z-index值
		zIndex: {
			type: [String, Number],
			default: keyboardProp['zIndex']
		},
		// 取消按钮的文字
		cancelText: {
			type: String,
			default: keyboardProp['cancelText']
		},
		// 确认按钮的文字
		confirmText: {
			type: String,
			default: keyboardProp['confirmText']
		},
        // 输入一个中文后，是否自动切换到英文
        autoChange: {
            type: Boolean,
            default: keyboardProp['autoChange']
        }
	}
});