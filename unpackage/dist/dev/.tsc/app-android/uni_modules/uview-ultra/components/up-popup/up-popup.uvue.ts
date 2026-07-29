
	import { propsPopup } from './props';
	import { mpMixin } from '../../libs/mixin/mpMixin';
	import { mixin } from '../../libs/mixin/mixin';
	import { addUnit, addStyle, deepMerge, sleep } from '../../libs/function/index';
	/**
	 * popup 弹窗
	 * @description 弹出层容器，用于展示弹窗、信息提示等内容，支持上、下、左、右和中部弹出。组件只提供容器，内部内容由用户自定义
	 * @tutorial https://ijry.github.io/uview-plus/components/popup.html
	 * @property {Boolean}			show				是否展示弹窗 (默认 false )
	 * @property {Boolean}			overlay				是否显示遮罩 （默认 true ）
	 * @property {String}			mode				弹出方向（默认 'bottom' ）
	 * @property {String | Number}	duration			动画时长，单位ms （默认 300 ）
	 * @property {String | Number}	overlayDuration		遮罩层动画时长，单位ms （默认 350 ）
	 * @property {Boolean}			closeable			是否显示关闭图标（默认 false ）
	 * @property {Object | String}	overlayStyle		自定义遮罩的样式
	 * @property {String | Number}	overlayOpacity		遮罩透明度，0-1之间（默认 0.5）
	 * @property {Boolean}			closeOnClickOverlay	点击遮罩是否关闭弹窗 （默认  true ）
	 * @property {String | Number}	zIndex				层级 （默认 10075 ）
	 * @property {Boolean}			safeAreaInsetBottom	是否为iPhoneX留出底部安全距离 （默认 true ）
	 * @property {Boolean}			safeAreaInsetTop	是否留出顶部安全距离（状态栏高度） （默认 false ）
	 * @property {String}			closeIconPos		自定义关闭图标位置（默认 'top-right' ）
	 * @property {String | Number}	round				圆角值（默认 0）
	 * @property {Boolean}			zoom				当mode=center时 是否开启缩放（默认 true ）
	 * @property {Object}			customStyle			组件的样式，对象形式
	 * @event {Function} open 弹出层打开
	 * @event {Function} close 弹出层收起
	 * @example <up-popup v-model="show"><text>出淤泥而不染，濯清涟而不妖</text></up-popup>
	 */
	const __sfc__ = defineComponent({
		name: 'up-popup',
		mixins: [mpMixin, mixin, propsPopup],
		data() {
			return {
				overlayDuration: 0
			}
		},
		created() {
			// @ts-ignore
			this.overlayDuration = parseInt(this.duration!!.toString()) + 50
		},
		watch: {
			show(newValue, oldValue) {
				if (newValue == true) {




				}
			}
		},
		computed: {
			transitionStyle():any {
				const style = {__$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-popup/up-popup.uvue", 101, 11),
					display: 'flex',
				}
				if (!this.pageInline) {
					// @ts-ignore
					style['zIndex'] = parseInt(this.zIndex!!.toString()) + 1
					style['position'] = 'fixed'
				}
				style[this.mode] = 0
				if (this.mode === 'left') {
					return deepMerge(style, {
						bottom: 0,
						top: 0,
					})
				} else if (this.mode === 'right') {
					return deepMerge(style, {
						bottom: 0,
						top: 0,
					})
				} else if (this.mode === 'top') {
					return deepMerge(style, {
						left: 0,
						right: 0
					})
				} else if (this.mode === 'bottom') {
					return deepMerge(style, {
						left: 0,
						right: 0,
					})
				} else if (this.mode === 'center') {
					return deepMerge(style, {
						alignItems: 'center',
						'justify-content': 'center',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0
					})
				}
				return {}
			},
			contentStyle(): any {
				const style = {__$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-popup/up-popup.uvue", 143, 11),}
				// 通过设备信息的safeAreaInsets值来判断是否需要预留顶部状态栏和底部安全局的位置
				// 不使用css方案，是因为nvue不支持css的iPhoneX安全区查询属性
				const {
					safeAreaInsets
				} = uni.getWindowInfo()
				
				if (this.mode !== 'center') {
					style['flex'] = 1
				}
				// 背景色，一般用于设置为transparent，去除默认的白色背景
				if (this.bgColor != '') {
					style['backgroundColor'] = this.bgColor
				}
				if(this.round != '') {
					const value = addUnit(this.round)
					if(this.mode === 'top') {
						style['borderBottomLeftRadius'] = value
						style['borderBottomRightRadius'] = value
					} else if(this.mode === 'bottom') {
						style['borderTopLeftRadius'] = value
						style['borderTopRightRadius'] = value
					} else if(this.mode === 'center') {
						style['borderRadius'] = value
					} 
				}
				return deepMerge(style, addStyle(this.customStyle))
			},
			position(): string {
				if (this.mode === 'center') {
					return this.zoom ? 'fade-zoom' : 'fade'
				}
				if (this.mode === 'left') {
					return 'slide-left'
				}
				if (this.mode === 'right') {
					return 'slide-right'
				}
				if (this.mode === 'bottom') {
					return 'slide-up'
				}
				if (this.mode === 'top') {
					return 'slide-down'
				}
				return ''
			},
		},
		emits: ["open", "close", "click", "update:show"],
		methods: {
			// 点击遮罩
			overlayClick(): void {
				if (this.closeOnClickOverlay) {
					this.$emit('update:show', false)
					this.$emit('close')
				}
			},
			close(e: any): void {
				this.$emit('update:show', false)
				this.$emit('close')
			},
			afterEnter(): void {
				this.$emit('open')
			},
			clickHandler(): void {
				// 由于中部弹出时，其up-transition占据了整个页面相当于遮罩，此时需要发出遮罩点击事件，是否无法通过点击遮罩关闭弹窗
				if(this.mode === 'center') {
					this.overlayClick()
				}
				this.$emit('click')
			},



























		}
	})

export default __sfc__
function GenUniModulesUviewUltraComponentsUpPopupUpPopupRender(this: InstanceType<typeof __sfc__>): any | null {
const _ctx = this
const _cache = this.$.renderCache
const _component_up_overlay = resolveEasyComponent("up-overlay",_easycom_up_overlay)
const _component_up_status_bar = resolveEasyComponent("up-status-bar",_easycom_up_status_bar)
const _component_up_icon = resolveEasyComponent("up-icon",_easycom_up_icon)
const _component_up_safe_bottom = resolveEasyComponent("up-safe-bottom",_easycom_up_safe_bottom)
const _component_up_transition = resolveEasyComponent("up-transition",_easycom_up_transition)

  return _cE("view", _uM({
    class: _nC(["up-popup", [_ctx.customClass]])
  }), [
    isTrue(_ctx.overlay && !_ctx.pageInline)
      ? _cV(_component_up_overlay, _uM({
          key: 0,
          show: _ctx.show && !_ctx.pageInline,
          onClick: _ctx.overlayClick,
          zIndex: _ctx.zIndex,
          duration: _ctx.overlayDuration,
          customStyle: _ctx.overlayStyle,
          opacity: _ctx.overlayOpacity
        }), null, 8 /* PROPS */, ["show", "onClick", "zIndex", "duration", "customStyle", "opacity"])
      : _cC("v-if", true),
    _cV(_component_up_transition, _uM({
      show: _ctx.pageInline ? true : _ctx.show,
      customStyle: _ctx.transitionStyle,
      mode: _ctx.pageInline ? 'none' : _ctx.position,
      duration: _ctx.duration,
      onAfterEnter: _ctx.afterEnter,
      onClick: _ctx.clickHandler
    }), _uM({
      default: withSlotCtx((): any[] => [
        _cE("view", _uM({
          class: "up-popup__content",
          style: _nS([_ctx.contentStyle]),
          onClick: withModifiers(_ctx.noop, ["stop"])
        }), [
          isTrue(_ctx.safeAreaInsetTop)
            ? _cV(_component_up_status_bar, _uM({ key: 0 }))
            : _cC("v-if", true),
          renderSlot(_ctx.$slots, "default"),
          isTrue(_ctx.closeable)
            ? _cE("view", _uM({
                key: 1,
                onClick: withModifiers(_ctx.close, ["stop"]),
                class: _nC(["up-popup__content__close", ['up-popup__content__close--' + _ctx.closeIconPos]]),
                "hover-class": "up-popup__content__close--hover",
                "hover-stay-time": "150"
              }), [
                _cV(_component_up_icon, _uM({
                  name: "close",
                  color: "#909399",
                  size: "18",
                  bold: ""
                }))
              ], 10 /* CLASS, PROPS */, ["onClick"])
            : _cC("v-if", true),
          isTrue(_ctx.safeAreaInsetBottom)
            ? _cV(_component_up_safe_bottom, _uM({ key: 2 }))
            : _cC("v-if", true)
        ], 12 /* STYLE, PROPS */, ["onClick"])
      ]),
      _: 3 /* FORWARDED */
    }), 8 /* PROPS */, ["show", "customStyle", "mode", "duration", "onAfterEnter", "onClick"])
  ], 2 /* CLASS */)
}
export type UpPopupComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpPopupUpPopupStyles = [_uM([["u-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-popup", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"]]))], ["up-popup__content", _pS(_uM([["backgroundColor", "#ffffff"], ["position", "relative"]]))], ["up-popup__content--round-top", _pS(_uM([["borderTopLeftRadius", 0], ["borderTopRightRadius", 0], ["borderBottomLeftRadius", 10], ["borderBottomRightRadius", 10]]))], ["up-popup__content--round-left", _pS(_uM([["borderTopLeftRadius", 0], ["borderTopRightRadius", 10], ["borderBottomLeftRadius", 0], ["borderBottomRightRadius", 10]]))], ["up-popup__content--round-right", _pS(_uM([["borderTopLeftRadius", 10], ["borderTopRightRadius", 0], ["borderBottomLeftRadius", 10], ["borderBottomRightRadius", 0]]))], ["up-popup__content--round-bottom", _pS(_uM([["borderTopLeftRadius", 10], ["borderTopRightRadius", 10], ["borderBottomLeftRadius", 0], ["borderBottomRightRadius", 0]]))], ["up-popup__content--round-center", _pS(_uM([["borderTopLeftRadius", 10], ["borderTopRightRadius", 10], ["borderBottomLeftRadius", 10], ["borderBottomRightRadius", 10]]))], ["up-popup__content__close", _pS(_uM([["position", "absolute"]]))], ["up-popup__content__close--hover", _pS(_uM([["opacity", 0.4]]))], ["up-popup__content__close--top-left", _pS(_uM([["top", 15], ["left", 15]]))], ["up-popup__content__close--top-right", _pS(_uM([["top", 15], ["right", 15]]))], ["up-popup__content__close--bottom-left", _pS(_uM([["bottom", 15], ["left", 15]]))], ["up-popup__content__close--bottom-right", _pS(_uM([["right", 15], ["bottom", 15]]))]])]

import _easycom_up_overlay from '@/uni_modules/uview-ultra/components/up-overlay/up-overlay.uvue'
import _easycom_up_status_bar from '@/uni_modules/uview-ultra/components/up-status-bar/up-status-bar.uvue'
import _easycom_up_icon from '@/uni_modules/uview-ultra/components/up-icon/up-icon.uvue'
import _easycom_up_safe_bottom from '@/uni_modules/uview-ultra/components/up-safe-bottom/up-safe-bottom.uvue'
import _easycom_up_transition from '@/uni_modules/uview-ultra/components/up-transition/up-transition.uvue'
