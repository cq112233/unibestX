/*
 * @Author       : jry
 * @Description  : uview-plus component's props mixin file
 * @version      : 4.0
 * @Date         : 2025-12-17 08:48:26
 * @LastAuthor   : jry
 * @lastTime     : 2025-12-17 08:48:26
 */
import { defineMixin } from '../../libs/vue.uts'
import defProps from './numberKeyboard.uts'

let keyboardProp = defProps['numberKeyboard'] as UTSJSONObject

export const propsNumberKeyboard = defineMixin({
	props: {
		// 键盘的类型，number-数字键盘，card-身份证键盘
		mode: {
			type: String,
			default: keyboardProp['mode']
		},
		// 是否显示键盘的"."符号
		dotDisabled: {
			type: Boolean,
			default: keyboardProp['dotDisabled']
		},
		// 是否打乱键盘按键的顺序
		random: {
			type: Boolean,
			default: keyboardProp['random']
		}
	}
});