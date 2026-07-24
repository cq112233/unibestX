
	import { propsToolbar } from './props';
	import { mpMixin } from '../../libs/mixin/mpMixin';
	import { mixin } from '../../libs/mixin/mixin';
	import { t } from '../../libs/i18n/index.uts';
	/**
	 * Toolbar 工具条
	 * @description 
	 * @tutorial https://ijry.github.io/uview-plus/components/toolbar.html
	 * @property {Boolean}	show			是否展示工具条（默认 true ）
	 * @property {String}	cancelText		取消按钮的文字（默认 '取消' ）
	 * @property {String}	confirmText		确认按钮的文字（默认 '确认' ）
	 * @property {String}	cancelColor		取消按钮的颜色（默认 '#909193' ）
	 * @property {String}	confirmColor	确认按钮的颜色（默认 '#3c9cff' ）
	 * @property {String}	title			标题文字
	 * @event {Function} 
	 * @example 
	 */
	const __sfc__ = defineComponent({
		name: 'up-toolbar',
		mixins: [mpMixin, mixin, propsToolbar],
		emits: ["confirm", "cancel"],
		computed: {
			elCancelText(): string {
				if (this.cancelText == '取消' || this.cancelText == '') {
					return t('up_common_cancel', {} as UTSJSONObject)
				}
				return this.cancelText
			},
			elConfirmText(): string {
				if (this.confirmText == '确认' || this.confirmText == '确定' || this.confirmText == '') {
					return t('up_common_confirm', {} as UTSJSONObject)
				}
				return this.confirmText
			},
			elConfirmColor(): string {
				// 默认色时不设置内联样式，让 SCSS 中 $up-primary CSS变量生效
				if (this.confirmColor == '#3c9cff') {
					return ''
				}
				return this.confirmColor
			}
		},
		created() {
			// console.log(this.$slots)
		},
		methods: {
			// 点击取消按钮
			cancel(): void {
				this.$emit('cancel')
			},
			// 点击确定按钮
			confirm(): void {
				this.$emit('confirm')
			}
		},
	})

export default __sfc__
function GenUniModulesUviewUltraComponentsUpToolbarUpToolbarRender(this: InstanceType<typeof __sfc__>): any | null {
const _ctx = this
const _cache = this.$.renderCache
  return isTrue(_ctx.show)
    ? _cE("view", _uM({
        key: 0,
        class: "up-toolbar",
        onTouchmove: withModifiers(_ctx.noop, ["stop"])
      }), [
        _cE("view", _uM({ class: "up-toolbar__left" }), [
          _cE("view", _uM({
            class: "up-toolbar__cancel__wrapper",
            "hover-class": "up-hover-class"
          }), [
            _cE("text", _uM({
              class: "up-toolbar__wrapper__cancel",
              onClick: _ctx.cancel,
              style: _nS(_uM({
						color: _ctx.cancelColor
					}))
            }), _tD(_ctx.elCancelText), 13 /* TEXT, STYLE, PROPS */, ["onClick"])
          ])
        ]),
        isTrue(_ctx.title)
          ? _cE("text", _uM({
              key: 0,
              class: "up-toolbar__title up-line-1"
            }), _tD(_ctx.title), 1 /* TEXT */)
          : _cC("v-if", true),
        _cE("view", _uM({ class: "up-toolbar__right" }), [
          isTrue(!_ctx.rightSlot)
            ? _cE("view", _uM({
                key: 0,
                class: "up-toolbar__confirm__wrapper",
                "hover-class": "up-hover-class"
              }), [
                _cE("text", _uM({
                  class: "up-toolbar__wrapper__confirm",
                  onClick: _ctx.confirm,
                  style: _nS(_uM({
						color: _ctx.elConfirmColor
					}))
                }), _tD(_ctx.elConfirmText), 13 /* TEXT, STYLE, PROPS */, ["onClick"])
              ])
            : renderSlot(_ctx.$slots, "right", _uM({ key: 1 }))
        ])
      ], 40 /* PROPS, NEED_HYDRATION */, ["onTouchmove"])
    : _cC("v-if", true)
}
export type UpToolbarComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpToolbarUpToolbarStyles = [_uM([["u-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-toolbar", _pS(_uM([["height", 42], ["display", "flex"], ["flexDirection", "row"], ["justifyContent", "space-between"], ["alignItems", "center"]]))], ["up-toolbar__wrapper__cancel", _pS(_uM([["color", "#909193"], ["fontSize", 15], ["paddingTop", 0], ["paddingRight", 15], ["paddingBottom", 0], ["paddingLeft", 15]]))], ["up-toolbar__title", _pS(_uM([["color", "#303133"], ["paddingTop", 0], ["paddingRight", "60rpx"], ["paddingBottom", 0], ["paddingLeft", "60rpx"], ["fontSize", 16], ["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"], ["textAlign", "center"]]))], ["up-toolbar__wrapper__left", _pS(_uM([["display", "flex"], ["flexDirection", "row"]]))], ["up-toolbar__wrapper__right", _pS(_uM([["display", "flex"], ["flexDirection", "row"]]))], ["up-toolbar__wrapper__confirm", _pS(_uM([["color", "var(--theme-color, #0957de)"], ["fontSize", 15], ["paddingTop", 0], ["paddingRight", 15], ["paddingBottom", 0], ["paddingLeft", 15]]))]])]
