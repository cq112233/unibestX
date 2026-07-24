
	import { propsTag } from './props';
	import { mpMixin } from '../../libs/mixin/mpMixin';
	import { mixin } from '../../libs/mixin/mixin';
	import {image as testImage} from '../../libs/function/test';
	/**
	 * Tag 标签
	 * @description tag组件一般用于标记和选择，我们提供了更加丰富的表现形式，能够较全面的涵盖您的使用场景
	 * @tutorial https://ijry.github.io/uview-plus/components/tag.html
	 * @property {String}			type		标签类型info、primary、success、warning、error （默认 'primary' ）
	 * @property {Boolean | String}	disabled	不可用（默认 false ）
	 * @property {String}			size		标签的大小，large，medium，mini （默认 'medium' ）
	 * @property {String}			shape		tag的形状，circle（两边半圆形）, square（方形，带圆角）（默认 'square' ）
	 * @property {String | Number}	text		标签的文字内容 
	 * @property {String}			bgColor		背景颜色，默认为空字符串，即不处理
	 * @property {String}			color		标签字体颜色，默认为空字符串，即不处理
	 * @property {String}			borderColor	镂空形式标签的边框颜色
	 * @property {String}			closeColor	关闭按钮图标的颜色（默认 #C6C7CB）
	 * @property {String | Number}	name		点击时返回的索引值，用于区分例遍的数组哪个元素被点击了
	 * @property {Boolean}			plainFill	镂空时是否填充背景色（默认 false ）
	 * @property {Boolean}			plain		是否镂空（默认 false ）
	 * @property {Boolean}			closable	是否可关闭，设置为true，文字右边会出现一个关闭图标（默认 false ）
	 * @property {Boolean}			show		标签显示与否（默认 true ）
	 * @property {String}			icon		内置图标，或绝对路径的图片
	 * @event {Function(index)} click 点击标签时触发 index: 传递的index参数值
	 * @event {Function(index)} close closable为true时，点击标签关闭按钮触发 index: 传递的index参数值	
	 * @example <up-tag text="标签" type="error" plain plainFill></up-tag>
	 */
	const __sfc__ = defineComponent({
		name: 'up-tag',
		mixins: [mpMixin, mixin, propsTag],
		data() {
			return {

			}
		},
		computed: {
			style(): any {
				const style = {}
				if (this.bgColor != '') {
					style['backgroundColor'] = this.bgColor
				}
				if (this.color != '') {
					style['color'] = this.color
				}
				if(this.borderColor != '') {
					style['borderColor'] = this.borderColor
				}
				return style
			},
			// nvue下，文本颜色无法继承父元素
			textColor(): any {
				const style = {}
				if (this.color != '') {
					style['color'] = this.color
				}
				return style
			},
			imgStyle(): any {
				const width = this.size === 'large' ? '17px' : this.size === 'medium' ? '15px' : '13px'
				return {
					width,
					height: width
				}
			},
			// 文本的样式
			closeSize(): string {
				const size = this.size === 'large' ? '15px' : this.size === 'medium' ? '13px' : '12px'
				return size
			},
			// 图标大小
			iconSize(): string {
				const size = this.size === 'large' ? '21px' : this.size === 'medium' ? '19px' : '16px'
				return size
			},
			// 图标颜色
			elIconColor(): string {
				return this.iconColor != '' ? this.iconColor : this.plain ? this.type : '#ffffff'
			}
		},
		emits: ["click", "close"],
		methods: {
			testImage(str: string): boolean {
				return testImage(str)
			},
			// 点击关闭按钮
			closeHandler(): void {
				this.$emit('close', this.$props['name'].toString())
			},
			// 点击标签
			clickHandler(): void {
				this.$emit('click', this.$props['name'].toString())
			}
		}
	})

export default __sfc__
function GenUniModulesUviewUltraComponentsUpTagUpTagRender(this: InstanceType<typeof __sfc__>): any | null {
const _ctx = this
const _cache = this.$.renderCache
const _component_up_icon = resolveEasyComponent("up-icon",_easycom_up_icon)
const _component_up_transition = resolveEasyComponent("up-transition",_easycom_up_transition)

  return _cV(_component_up_transition, _uM({
    mode: "fade",
    show: _ctx.show,
    style: _nS(_uM({"display":"flex"}))
  }), _uM({
    default: withSlotCtx((): any[] => [
      _cE("view", _uM({ class: "up-tag-wrapper cursor-pointer" }), [
        _cE("view", _uM({
          class: _nC(["up-tag", [`up-tag--${_ctx.shape}`, !_ctx.plain ? `up-tag--${_ctx.type}` : '', _ctx.plain ? `up-tag--${_ctx.type}--plain` : '', `up-tag--${_ctx.size}`, (_ctx.plain && _ctx.plainFill) ?  `up-tag--${_ctx.type}--plain--fill` : '']]),
          onClick: withModifiers(_ctx.clickHandler, ["stop"]),
          style: _nS([_uM({
					marginRight: _ctx.closable ? '10px' : 0,
					marginTop: _ctx.closable ? '10px' : 0,
				}), _ctx.style])
        }), [
          renderSlot(_ctx.$slots, "icon", {}, (): any[] => [
            isTrue(_ctx.icon)
              ? _cE("view", _uM({
                  key: 0,
                  class: "up-tag__icon"
                }), [
                  isTrue(_ctx.testImage(_ctx.icon))
                    ? _cE("image", _uM({
                        key: 0,
                        src: _ctx.icon,
                        style: _nS([_ctx.imgStyle])
                      }), null, 12 /* STYLE, PROPS */, ["src"])
                    : _cV(_component_up_icon, _uM({
                        key: 1,
                        color: _ctx.elIconColor,
                        name: _ctx.icon,
                        size: _ctx.iconSize
                      }), null, 8 /* PROPS */, ["color", "name", "size"])
                ])
              : _cC("v-if", true)
          ]),
          _cE("text", _uM({
            class: _nC(["up-tag__text", [`up-tag__text--${_ctx.type}`, _ctx.plain ? `up-tag__text--${_ctx.type}--plain` : '', `up-tag__text--${_ctx.size}`]]),
            style: _nS([_ctx.textColor])
          }), [
            renderSlot(_ctx.$slots, "default", {}, (): any[] => [_tD(_ctx.text)])
          ], 6 /* CLASS, STYLE */)
        ], 14 /* CLASS, STYLE, PROPS */, ["onClick"]),
        isTrue(_ctx.closable)
          ? _cE("view", _uM({
              key: 0,
              class: _nC(["up-tag__close", [`up-tag__close--${_ctx.size}`]]),
              onClick: withModifiers(_ctx.closeHandler, ["stop"]),
              style: _nS(_uM({backgroundColor: _ctx.closeColor}))
            }), [
              _cV(_component_up_icon, _uM({
                name: "close",
                size: _ctx.closeSize,
                color: "#ffffff"
              }), null, 8 /* PROPS */, ["size"])
            ], 14 /* CLASS, STYLE, PROPS */, ["onClick"])
          : _cC("v-if", true)
      ])
    ]),
    _: 3 /* FORWARDED */
  }), 8 /* PROPS */, ["show", "style"])
}
export type UpTagComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpTagUpTagStyles = [_uM([["u-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tag-wrapper", _pS(_uM([["position", "relative"]]))], ["up-tag", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"]]))], ["up-tag--circle", _pS(_uM([["borderTopLeftRadius", 100], ["borderTopRightRadius", 100], ["borderBottomRightRadius", 100], ["borderBottomLeftRadius", 100]]))], ["up-tag--square", _pS(_uM([["borderTopLeftRadius", 3], ["borderTopRightRadius", 3], ["borderBottomRightRadius", 3], ["borderBottomLeftRadius", 3]]))], ["up-tag__icon", _pS(_uM([["marginRight", 4]]))], ["up-tag__text--mini", _pS(_uM([["fontSize", 12], ["lineHeight", "12px"]]))], ["up-tag__text--medium", _pS(_uM([["fontSize", 13], ["lineHeight", "13px"]]))], ["up-tag__text--large", _pS(_uM([["fontSize", 15], ["lineHeight", "15px"]]))], ["up-tag--mini", _pS(_uM([["height", 22], ["paddingTop", 0], ["paddingRight", 5], ["paddingBottom", 0], ["paddingLeft", 5]]))], ["up-tag--medium", _pS(_uM([["height", 26], ["paddingTop", 0], ["paddingRight", 10], ["paddingBottom", 0], ["paddingLeft", 10]]))], ["up-tag--large", _pS(_uM([["height", 32], ["paddingTop", 0], ["paddingRight", 15], ["paddingBottom", 0], ["paddingLeft", 15]]))], ["up-tag--primary", _pS(_uM([["backgroundColor", "var(--theme-color, #0957de)"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1], ["borderTopColor", "var(--theme-color, #0957de)"], ["borderRightColor", "var(--theme-color, #0957de)"], ["borderBottomColor", "var(--theme-color, #0957de)"], ["borderLeftColor", "var(--theme-color, #0957de)"]]))], ["up-tag--primary--plain", _pS(_uM([["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1], ["borderTopColor", "var(--theme-color, #0957de)"], ["borderRightColor", "var(--theme-color, #0957de)"], ["borderBottomColor", "var(--theme-color, #0957de)"], ["borderLeftColor", "var(--theme-color, #0957de)"]]))], ["up-tag--primary--plain--fill", _pS(_uM([["backgroundColor", "#ecf5ff"]]))], ["up-tag__text--primary", _pS(_uM([["color", "#FFFFFF"]]))], ["up-tag__text--primary--plain", _pS(_uM([["color", "var(--theme-color, #0957de)"]]))], ["up-tag--error", _pS(_uM([["backgroundColor", "#f56c6c"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1], ["borderTopColor", "#f56c6c"], ["borderRightColor", "#f56c6c"], ["borderBottomColor", "#f56c6c"], ["borderLeftColor", "#f56c6c"]]))], ["up-tag--error--plain", _pS(_uM([["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1], ["borderTopColor", "#f56c6c"], ["borderRightColor", "#f56c6c"], ["borderBottomColor", "#f56c6c"], ["borderLeftColor", "#f56c6c"]]))], ["up-tag--error--plain--fill", _pS(_uM([["backgroundColor", "#fef0f0"]]))], ["up-tag__text--error", _pS(_uM([["color", "#FFFFFF"]]))], ["up-tag__text--error--plain", _pS(_uM([["color", "#f56c6c"]]))], ["up-tag--warning", _pS(_uM([["backgroundColor", "#f9ae3d"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1], ["borderTopColor", "#f9ae3d"], ["borderRightColor", "#f9ae3d"], ["borderBottomColor", "#f9ae3d"], ["borderLeftColor", "#f9ae3d"]]))], ["up-tag--warning--plain", _pS(_uM([["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1], ["borderTopColor", "#f9ae3d"], ["borderRightColor", "#f9ae3d"], ["borderBottomColor", "#f9ae3d"], ["borderLeftColor", "#f9ae3d"]]))], ["up-tag--warning--plain--fill", _pS(_uM([["backgroundColor", "#fdf6ec"]]))], ["up-tag__text--warning", _pS(_uM([["color", "#FFFFFF"]]))], ["up-tag__text--warning--plain", _pS(_uM([["color", "#f9ae3d"]]))], ["up-tag--success", _pS(_uM([["backgroundColor", "#5ac725"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1], ["borderTopColor", "#5ac725"], ["borderRightColor", "#5ac725"], ["borderBottomColor", "#5ac725"], ["borderLeftColor", "#5ac725"]]))], ["up-tag--success--plain", _pS(_uM([["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1], ["borderTopColor", "#5ac725"], ["borderRightColor", "#5ac725"], ["borderBottomColor", "#5ac725"], ["borderLeftColor", "#5ac725"]]))], ["up-tag--success--plain--fill", _pS(_uM([["backgroundColor", "#f5fff0"]]))], ["up-tag__text--success", _pS(_uM([["color", "#FFFFFF"]]))], ["up-tag__text--success--plain", _pS(_uM([["color", "#5ac725"]]))], ["up-tag--info", _pS(_uM([["backgroundColor", "#909399"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1], ["borderTopColor", "#909399"], ["borderRightColor", "#909399"], ["borderBottomColor", "#909399"], ["borderLeftColor", "#909399"]]))], ["up-tag--info--plain", _pS(_uM([["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1], ["borderTopColor", "#909399"], ["borderRightColor", "#909399"], ["borderBottomColor", "#909399"], ["borderLeftColor", "#909399"]]))], ["up-tag--info--plain--fill", _pS(_uM([["backgroundColor", "#f4f4f5"]]))], ["up-tag__text--info", _pS(_uM([["color", "#FFFFFF"]]))], ["up-tag__text--info--plain", _pS(_uM([["color", "#909399"]]))], ["up-tag__close", _pS(_uM([["position", "absolute"], ["zIndex", 999], ["top", 10], ["right", 10], ["borderTopLeftRadius", 100], ["borderTopRightRadius", 100], ["borderBottomRightRadius", 100], ["borderBottomLeftRadius", 100], ["backgroundColor", "#C6C7CB"], ["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["justifyContent", "center"], ["transform", "scale(0.6) translate(50%, -50%)"]]))], ["up-tag__close--mini", _pS(_uM([["width", 18], ["height", 18]]))], ["up-tag__close--medium", _pS(_uM([["width", 22], ["height", 22]]))], ["up-tag__close--large", _pS(_uM([["width", 25], ["height", 25]]))]])]

import _easycom_up_icon from '@/uni_modules/uview-ultra/components/up-icon/up-icon.uvue'
import _easycom_up_transition from '@/uni_modules/uview-ultra/components/up-transition/up-transition.uvue'
