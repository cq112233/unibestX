
import { mpMixin } from '../../libs/mixin/mpMixin';
import { mixin } from '../../libs/mixin/mixin';
import { propsKeyboard } from "./props";

/**
 * keyboard 键盘
 * @description 此为uViw自定义的键盘面板，内含了数字键盘，车牌号键，身份证号键盘3中模式，都有可以打乱按键顺序的选项。
 * @tutorial https://ijry.github.io/uview-plus/components/keyboard.html
 * @property {String}			mode				键盘类型，见官网基本使用的说明 （默认 'number' ）
 * @property {Boolean}			dotDisabled			是否显示"."按键，只在mode=number时有效 （默认 false ）
 * @property {Boolean}			tooltip				是否显示键盘顶部工具条 （默认 true ）
 * @property {Boolean}			showTips			是否显示工具条中间的提示 （默认 true ）
 * @property {String}			tips				工具条中间的提示文字，见上方基本使用的说明，如不需要，请传""空字符
 * @property {Boolean}			showCancel			是否显示工具条左边的"取消"按钮 （默认 true ）
 * @property {Boolean}			showConfirm			是否显示工具条右边的"完成"按钮（ 默认 true ）
 * @property {Boolean}			random				是否打乱键盘按键的顺序 （默认 false ）
 * @property {Boolean}			safeAreaInsetBottom	是否开启底部安全区适配 （默认 true ）
 * @property {Boolean}			closeOnClickOverlay	是否允许点击遮罩收起键盘 （默认 true ）
 * @property {Boolean}			show				控制键盘的弹出与收起（默认 false ）
 * @property {Boolean}			overlay				是否显示遮罩 （默认 true ）
 * @property {String | Number}	zIndex				弹出键盘的z-index值 （默认 1075 ）
 * @property {String}			cancelText			取消按钮的文字 （默认 '取消' ）
 * @property {String}			confirmText			确认按钮的文字 （默认 '确认' ）
 * @property {Object}			customStyle			自定义样式，对象形式
 * @event {Function} change 按键被点击(不包含退格键被点击)
 * @event {Function} cancel 键盘顶部工具条左边的"取消"按钮被点击
 * @event {Function} confirm 键盘顶部工具条右边的"完成"按钮被点击
 * @event {Function} backspace 键盘退格键被点击
 * @example <up-keyboard mode="number" v-model="show"></up-keyboard>
 */
const __sfc__ = defineComponent({
	name: "up-keyboard",
	data() {
		return {
			
		}
	},
	mixins: [mpMixin, mixin, propsKeyboard],
	emits: ["change", "close", "confirm", "cancel", "backspace"],
	methods: {
		keyboardChange(e: any) {
			this.$emit('change', e.toString());
		},
		// 键盘关闭
		popupClose() {
			this.$emit('close');
		},
		// 输入完成
		onConfirm() {
			this.$emit('confirm');
		},
		// 取消输入
		onCancel() {
			this.$emit('cancel');
		},
		// 退格键
		keyboardBackspace() {
			this.$emit('backspace');
		}
	}
})

export default __sfc__
function GenUniModulesUviewUltraComponentsUpKeyboardUpKeyboardRender(this: InstanceType<typeof __sfc__>): any | null {
const _ctx = this
const _cache = this.$.renderCache
const _component_up_number_keyboard = resolveEasyComponent("up-number-keyboard",_easycom_up_number_keyboard)
const _component_up_car_keyboard = resolveEasyComponent("up-car-keyboard",_easycom_up_car_keyboard)
const _component_up_popup = resolveEasyComponent("up-popup",_easycom_up_popup)

  return _cV(_component_up_popup, _uM({
    overlay: _ctx.overlay,
    closeOnClickOverlay: _ctx.closeOnClickOverlay,
    mode: "bottom",
    popup: false,
    show: _ctx.show,
    safeAreaInsetBottom: _ctx.safeAreaInsetBottom,
    onClose: _ctx.popupClose,
    zIndex: _ctx.zIndex,
    customStyle: {
			backgroundColor: 'rgb(214, 218, 220)'
		}
  }), _uM({
    default: withSlotCtx((): any[] => [
      _cE("view", _uM({ class: "up-keyboard" }), [
        renderSlot(_ctx.$slots, "default"),
        isTrue(_ctx.tooltip)
          ? _cE("view", _uM({
              key: 0,
              class: "up-keyboard__tooltip"
            }), [
              _cE("view", _uM({
                "hover-class": "up-hover-class",
                "hover-stay-time": 100
              }), [
                isTrue(_ctx.showCancel)
                  ? _cE("text", _uM({
                      key: 0,
                      class: "up-keyboard__tooltip__item up-keyboard__tooltip__cancel",
                      onClick: _ctx.onCancel
                    }), _tD(_ctx.cancelText), 9 /* TEXT, PROPS */, ["onClick"])
                  : _cC("v-if", true)
              ]),
              _cE("view", null, [
                isTrue(_ctx.showTips)
                  ? _cE("text", _uM({
                      key: 0,
                      class: "up-keyboard__tooltip__item up-keyboard__tooltip__tips"
                    }), _tD(_ctx.tips != '' ? _ctx.tips : _ctx.mode == 'number' ? '数字键盘' : _ctx.mode == 'card' ? '身份证键盘' : '车牌号键盘'), 1 /* TEXT */)
                  : _cC("v-if", true)
              ]),
              _cE("view", _uM({
                "hover-class": "up-hover-class",
                "hover-stay-time": 100
              }), [
                isTrue(_ctx.showConfirm)
                  ? _cE("text", _uM({
                      key: 0,
                      onClick: _ctx.onConfirm,
                      class: "up-keyboard__tooltip__item up-keyboard__tooltip__submit",
                      "hover-class": "up-hover-class"
                    }), _tD(_ctx.showConfirm ? _ctx.confirmText : ''), 9 /* TEXT, PROPS */, ["onClick"])
                  : _cC("v-if", true)
              ])
            ])
          : _cC("v-if", true),
        isTrue(_ctx.mode == 'number' || _ctx.mode == 'card')
          ? _cV(_component_up_number_keyboard, _uM({
              key: 1,
              random: _ctx.random,
              onBackspace: _ctx.keyboardBackspace,
              onChange: _ctx.keyboardChange,
              mode: _ctx.mode,
              dotDisabled: _ctx.dotDisabled
            }), null, 8 /* PROPS */, ["random", "onBackspace", "onChange", "mode", "dotDisabled"])
          : _cV(_component_up_car_keyboard, _uM({
              key: 2,
              random: _ctx.random,
              autoChange: _ctx.autoChange,
              onBackspace: _ctx.keyboardBackspace,
              onChange: _ctx.keyboardChange
            }), null, 8 /* PROPS */, ["random", "autoChange", "onBackspace", "onChange"])
      ])
    ]),
    _: 3 /* FORWARDED */
  }), 8 /* PROPS */, ["overlay", "closeOnClickOverlay", "show", "safeAreaInsetBottom", "onClose", "zIndex", "customStyle"])
}
export type UpKeyboardComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpKeyboardUpKeyboardStyles = [_uM([["u-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-keyboard__tooltip", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["justifyContent", "space-between"], ["backgroundColor", "#FFFFFF"], ["paddingTop", 14], ["paddingRight", 12], ["paddingBottom", 14], ["paddingLeft", 12]]))], ["up-keyboard__tooltip__item", _pS(_uM([["color", "#333333"], ["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"], ["textAlign", "center"], ["fontSize", 15]]))], ["up-keyboard__tooltip__submit", _pS(_uM([["textAlign", "right"], ["color", "var(--theme-color, #0957de)"]]))], ["up-keyboard__tooltip__cancel", _pS(_uM([["textAlign", "left"], ["color", "#888888"]]))], ["up-keyboard__tooltip__tips", _pS(_uM([["color", "#909193"]]))]])]

import _easycom_up_number_keyboard from '@/uni_modules/uview-ultra/components/up-number-keyboard/up-number-keyboard.uvue'
import _easycom_up_car_keyboard from '@/uni_modules/uview-ultra/components/up-car-keyboard/up-car-keyboard.uvue'
import _easycom_up_popup from '@/uni_modules/uview-ultra/components/up-popup/up-popup.uvue'
