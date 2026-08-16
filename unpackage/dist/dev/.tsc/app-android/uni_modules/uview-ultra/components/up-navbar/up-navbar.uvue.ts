
	import { propsNavbar } from './props';
	import { mpMixin } from '../../libs/mixin/mpMixin';
	import { mixin } from '../../libs/mixin/mixin';
	import { addUnit, addStyle, getPx, sys } from '../../libs/function/index';
	/**
	 * Navbar 自定义导航栏
	 * @author jry ijry@qq.com
	 * @description 此组件一般用于在特殊情况下，需要自定义导航栏的时候用到，一般建议使用uni-app带的导航栏。
	 * @tutorial https://ijry.github.io/uview-plus/components/navbar.html
	 * @property {Boolean}			safeAreaInsetTop	是否开启顶部安全区适配  （默认 true ）
	 * @property {Boolean}			placeholder			固定在顶部时，是否生成一个等高元素，以防止塌陷 （默认 false ）
	 * @property {Boolean}			fixed				导航栏是否固定在顶部 （默认 false ）
	 * @property {Boolean}			border				导航栏底部是否显示下边框 （默认 false ）
	 * @property {String}			leftIcon			左边返回图标的名称，只能为uView自带的图标 （默认 'arrow-left' ）
	 * @property {String}			leftText			左边的提示文字
	 * @property {String}			rightText			右边的提示文字
	 * @property {String}			rightIcon			右边返回图标的名称，只能为uView自带的图标
	 * @property {String}			title				导航栏标题，如设置为空字符，将会隐藏标题占位区域
	 * @property {String}			bgColor				导航栏背景设置 （默认 '#ffffff' ）
	 * @property {String | Number}	titleWidth			导航栏标题的最大宽度，内容超出会以省略号隐藏 （默认 '400rpx' ）
	 * @property {String | Number}	height				导航栏高度(不包括状态栏高度在内，内部自动加上)（默认 '44px' ）
	 * @property {String | Number}	leftIconSize		左侧返回图标的大小（默认 20px ）
	 * @property {String | Number}	leftIconColor		左侧返回图标的颜色（默认 #303133 ）
	 * @property {Boolean}	        autoBack			点击左侧区域(返回图标)，是否自动返回上一页（默认 false ）
	 * @property {Object | String}	titleStyle			标题的样式，对象或字符串
	 * @event {Function} leftClick		点击左侧区域
	 * @event {Function} rightClick		点击右侧区域
	 * @example <up-navbar title="剑未配妥，出门已是江湖" left-text="返回" right-text="帮助" @click-left="onClickBack" @click-right="onClickRight"></up-navbar>
	 */
	const __sfc__ = defineComponent({
		name: 'up-navbar',
		mixins: [mpMixin, mixin, propsNavbar],
		data() {
			return {
				statusBarHeight: 0 as number,
				placeholderHeight: '0px' as string,
			}
		},
		emits: ["leftClick", "rightClick"],
		created() {
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight
			this.placeholderHeight = addUnit(parseInt(getPx(this.height)) + this.statusBarHeight, 'px')
		},
		methods: {
			addStyle(val: any): any {
				return addStyle(val)
			},
			addUnit(val: any): string {
				return addUnit(val)
			},
			getPx(val: any): string {
				return getPx(val)
			},
			// 点击左侧区域
			leftClick(): void {
				// 如果配置了autoBack，自动返回上一页
				this.$emit('leftClick')
				if(this.autoBack) {
					uni.navigateBack()
				}
			},
			// 点击右侧区域
			rightClick(): void {
				this.$emit('rightClick')
			}
		}
	})

export default __sfc__
function GenUniModulesUviewUltraComponentsUpNavbarUpNavbarRender(this: InstanceType<typeof __sfc__>): any | null {
const _ctx = this
const _cache = this.$.renderCache
const _component_up_status_bar = resolveEasyComponent("up-status-bar",_easycom_up_status_bar)
const _component_up_icon = resolveEasyComponent("up-icon",_easycom_up_icon)

  return _cE("view", _uM({
    class: _nC(["up-navbar", [_ctx.customClass]])
  }), [
    isTrue(_ctx.fixed && _ctx.placeholder)
      ? _cE("view", _uM({
          key: 0,
          class: "up-navbar__placeholder",
          style: _nS(_uM({
				height: _ctx.placeholderHeight,
			}))
        }), null, 4 /* STYLE */)
      : _cC("v-if", true),
    _cE("view", _uM({
      class: _nC([_ctx.fixed ? 'up-navbar--fixed' : ''])
    }), [
      isTrue(_ctx.safeAreaInsetTop)
        ? _cV(_component_up_status_bar, _uM({
            key: 0,
            bgColor: _ctx.bgColor
          }), null, 8 /* PROPS */, ["bgColor"])
        : _cC("v-if", true),
      _cE("view", _uM({
        class: _nC(["up-navbar__content", [_ctx.border ? 'up-border-bottom' : '']]),
        style: _nS(_uM({
					height: _ctx.addUnit(_ctx.height),
					backgroundColor: _ctx.bgColor,
				}))
      }), [
        _cE("view", _uM({
          class: "up-navbar__content__left",
          "hover-class": "up-navbar__content__left--hover",
          "hover-start-time": "150",
          onClick: _ctx.leftClick
        }), [
          renderSlot(_ctx.$slots, "left", {}, (): any[] => [
            isTrue(_ctx.leftIcon)
              ? _cV(_component_up_icon, _uM({
                  key: 0,
                  name: _ctx.leftIcon,
                  size: _ctx.leftIconSize,
                  color: _ctx.leftIconColor
                }), null, 8 /* PROPS */, ["name", "size", "color"])
              : _cC("v-if", true),
            isTrue(_ctx.leftText)
              ? _cE("text", _uM({
                  key: 1,
                  style: _nS(_uM({
								color: _ctx.leftIconColor
							})),
                  class: "up-navbar__content__left__text"
                }), _tD(_ctx.leftText), 5 /* TEXT, STYLE */)
              : _cC("v-if", true)
          ])
        ], 8 /* PROPS */, ["onClick"]),
        renderSlot(_ctx.$slots, "center", {}, (): any[] => [
          _cE("text", _uM({
            class: "up-line-1 up-navbar__content__title",
            style: _nS([_uM({
							width: _ctx.addUnit(_ctx.titleWidth),
						}), _ctx.addStyle(_ctx.titleStyle)])
          }), _tD(_ctx.title), 5 /* TEXT, STYLE */)
        ]),
        isTrue(_ctx.$slots['right'] != null || _ctx.rightIcon != '' || _ctx.rightText != '')
          ? _cE("view", _uM({
              key: 0,
              class: "up-navbar__content__right",
              onClick: _ctx.rightClick
            }), [
              renderSlot(_ctx.$slots, "right", {}, (): any[] => [
                isTrue(_ctx.rightIcon)
                  ? _cV(_component_up_icon, _uM({
                      key: 0,
                      name: _ctx.rightIcon,
                      size: "20"
                    }), null, 8 /* PROPS */, ["name"])
                  : _cC("v-if", true),
                isTrue(_ctx.rightText)
                  ? _cE("text", _uM({
                      key: 1,
                      class: "up-navbar__content__right__text"
                    }), _tD(_ctx.rightText), 1 /* TEXT */)
                  : _cC("v-if", true)
              ])
            ], 8 /* PROPS */, ["onClick"])
          : _cC("v-if", true)
      ], 6 /* CLASS, STYLE */)
    ], 2 /* CLASS */)
  ], 2 /* CLASS */)
}
export type UpNavbarComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpNavbarUpNavbarStyles = [_uM([["u-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-navbar--fixed", _pS(_uM([["position", "fixed"], ["left", 0], ["right", 0], ["top", 0], ["zIndex", 11]]))], ["up-navbar__content", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["height", 44], ["backgroundColor", "#9acafc"], ["position", "relative"], ["justifyContent", "center"]]))], ["up-navbar__content__left", _pS(_uM([["paddingTop", 0], ["paddingRight", 13], ["paddingBottom", 0], ["paddingLeft", 13], ["position", "absolute"], ["top", 0], ["bottom", 0], ["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["left", 0]]))], ["up-navbar__content__right", _pS(_uM([["paddingTop", 0], ["paddingRight", 13], ["paddingBottom", 0], ["paddingLeft", 13], ["position", "absolute"], ["top", 0], ["bottom", 0], ["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["right", 0]]))], ["up-navbar__content__left--hover", _pS(_uM([["opacity", 0.7]]))], ["up-navbar__content__left__text", _pS(_uM([["fontSize", 15], ["marginLeft", 3]]))], ["up-navbar__content__title", _pS(_uM([["textAlign", "center"], ["fontSize", 16], ["color", "#303133"]]))], ["up-navbar__content__right__text", _pS(_uM([["fontSize", 15], ["marginLeft", 3]]))]])]

import _easycom_up_status_bar from '@/uni_modules/uview-ultra/components/up-status-bar/up-status-bar.uvue'
import _easycom_up_icon from '@/uni_modules/uview-ultra/components/up-icon/up-icon.uvue'
