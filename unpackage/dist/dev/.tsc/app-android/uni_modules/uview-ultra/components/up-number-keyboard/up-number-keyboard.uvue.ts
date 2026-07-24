
import { mpMixin } from '../../libs/mixin/mpMixin';
import { mixin } from '../../libs/mixin/mixin';
import { propsNumberKeyboard } from "./props";
import { randomArray } from '../../libs/function/index';

/**
 * up-number-keyboard 数字键盘组件
 * @description 数字键盘组件，用于输入数字或身份证号码等场景
 * @tutorial https://www.uviewui.com/components/numberKeyboard.html
 * @property {String} mode = [number|card]  键盘的类型，number-数字键盘，card-身份证键盘
 * @property {Boolean} dotDisabled = [true|false] 是否禁用小数点，默认为 true
 * @property {Boolean} random = [true|false] 是否打乱键盘按键的顺序，默认为 false
 * @event {Function} change 点击键盘按键时触发，返回按键值
 * @event {Function} backspace 点击退格键时触发
 * @example <up-number-keyboard :mode="mode" :dot-disabled="dotDisabled" @change="onChange" @backspace="onBackspace" />
 */
const __sfc__ = defineComponent({
	name: 'up-number-keyboard',
	mixins: [mpMixin, mixin, propsNumberKeyboard],
	emits: ["change", "backspace"],
	data() {
		return {
			backspace: 'backspace', // 退格键内容
			dot: '.', // 点
			timer: null as number|null, // 长按多次删除的事件监听
			cardX: 'X' // 身份证的X符号
		};
	},
	computed: {
		// 键盘需要显示的内容
		numList(): Array<string|number> {
			let tmp: Array<string|number> = [];
			if (this.dotDisabled && this.mode == 'number') {
				if (!this.random) {
					return [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
				} else {
					return randomArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
				}
			} else if (!this.dotDisabled && this.mode == 'number') {
				if (!this.random) {
					return [1, 2, 3, 4, 5, 6, 7, 8, 9, this.dot, 0];
				} else {
					return randomArray([1, 2, 3, 4, 5, 6, 7, 8, 9, this.dot, 0]);
				}
			} else if (this.mode == 'card') {
				if (!this.random) {
					return [1, 2, 3, 4, 5, 6, 7, 8, 9, this.cardX, 0];
				} else {
					return randomArray([1, 2, 3, 4, 5, 6, 7, 8, 9, this.cardX, 0]);
				}
			}
			return tmp;
		}
	},
	created() {
	},
	methods: {
		// 是否让按键显示灰色，只在非乱序&&数字键盘&&且允许点按键的时候
		btnBgGray(index: number): boolean {
			//return (index: number): boolean => {
				if (!this.random && index == 9 && (this.mode != 'number' || (this.mode == 'number' && !this.dotDisabled))) {
					return true;
				} else {
					return false;
				}
			//};
		},
		// 按键的样式，在非乱序&&数字键盘&&不显示点按钮时，index为9时，按键占位两个空间
		itemStyle(index: number): any {
			//return (index: number): UTSJSONObject => {
				let style = { __$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-number-keyboard/up-number-keyboard.uvue", 112, 9), } as UTSJSONObject;
				if (this.mode == 'number' && this.dotDisabled && index == 9) {
					style['width'] = '464rpx';
				}
				return style;
			//};
		},
		// 点击退格键
		backspaceClick(): void {
			this.$emit('backspace');
			clearInterval(this.timer ?? 0); //再次清空定时器，防止重复注册定时器
			this.timer = null;
			this.timer = setInterval(() => {
				this.$emit('backspace');
			}, 250);
		},
		
		clearTimer(): void {
			clearInterval(this.timer ?? 0);
			this.timer = null;
		},
		
		// 获取键盘显示的内容
		keyboardClick(val: any): void {
			// 允许键盘显示点模式和触发非点按键时，将内容转为数字类型
			if (!this.dotDisabled && val != this.dot && val != this.cardX) {
				val = parseInt(val.toString());
			}
			this.$emit('change', val);
		}
	}
});

export default __sfc__
function GenUniModulesUviewUltraComponentsUpNumberKeyboardUpNumberKeyboardRender(this: InstanceType<typeof __sfc__>): any | null {
const _ctx = this
const _cache = this.$.renderCache
const _component_up_icon = resolveEasyComponent("up-icon",_easycom_up_icon)

  return _cE("view", _uM({
    class: "up-keyboard",
    onTouchmove: withModifiers(_ctx.noop, ["stop","prevent"])
  }), [
    _cE(Fragment, null, RenderHelpers.renderList(_ctx.numList, (item, index, __index, _cached): any => {
      return _cE("view", _uM({
        class: "up-keyboard__button-wrapper",
        key: index
      }), [
        _cE("view", _uM({
          class: "up-keyboard__button-wrapper__button",
          style: _nS([_ctx.itemStyle(index)]),
          onClick: () => {_ctx.keyboardClick(item)},
          "hover-class": "up-hover-class",
          "hover-stay-time": 200
        }), [
          _cE("text", _uM({ class: "up-keyboard__button-wrapper__button__text" }), _tD(item), 1 /* TEXT */)
        ], 12 /* STYLE, PROPS */, ["onClick"])
      ])
    }), 128 /* KEYED_FRAGMENT */),
    _cE("view", _uM({ class: "up-keyboard__button-wrapper" }), [
      _cE("view", _uM({
        class: "up-keyboard__button-wrapper__button up-keyboard__button-wrapper__button--gray",
        "hover-class": "up-hover-class",
        "hover-stay-time": 200,
        onTouchstart: withModifiers(_ctx.backspaceClick, ["stop"]),
        onTouchend: _ctx.clearTimer
      }), [
        _cV(_component_up_icon, _uM({
          name: "backspace",
          color: "#303133",
          size: "28"
        }))
      ], 40 /* PROPS, NEED_HYDRATION */, ["onTouchstart", "onTouchend"])
    ])
  ], 40 /* PROPS, NEED_HYDRATION */, ["onTouchmove"])
}
export type UpNumberKeyboardComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpNumberKeyboardUpNumberKeyboardStyles = [_uM([["u-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-keyboard", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["justifyContent", "space-around"], ["backgroundColor", "#e0e4e6"], ["flexWrap", "wrap"], ["paddingTop", 8], ["paddingRight", "10rpx"], ["paddingBottom", 8], ["paddingLeft", "10rpx"]]))], ["up-keyboard__button-wrapper", _pS(_uM([["boxShadow", "0 2px 0px #BBBCBE"], ["marginTop", 4], ["marginRight", "6rpx"], ["marginBottom", 4], ["marginLeft", "6rpx"], ["borderTopLeftRadius", 4], ["borderTopRightRadius", 4], ["borderBottomLeftRadius", 4], ["borderBottomRightRadius", 4]]))], ["up-keyboard__button-wrapper__button", _pS(_uM([["width", "222rpx"], ["height", "90rpx"], ["backgroundColor", "#FFFFFF"], ["display", "flex"], ["flexDirection", "row"], ["justifyContent", "center"], ["alignItems", "center"], ["borderTopLeftRadius", 4], ["borderTopRightRadius", 4], ["borderBottomLeftRadius", 4], ["borderBottomRightRadius", 4]]))], ["up-keyboard__button-wrapper__button__text", _pS(_uM([["fontSize", 20], ["fontWeight", 400], ["color", "#303133"]]))], ["up-keyboard__button-wrapper__button--gray", _pS(_uM([["backgroundColor", "#c8cad2"]]))], ["up-hover-class", _pS(_uM([["backgroundColor", "#BBBCC6"]]))]])]

import _easycom_up_icon from '@/uni_modules/uview-ultra/components/up-icon/up-icon.uvue'
