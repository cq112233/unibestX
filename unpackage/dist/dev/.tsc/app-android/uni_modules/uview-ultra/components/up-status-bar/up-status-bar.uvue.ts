
	import { propsStatusBar } from './props';
	import { mpMixin } from '../../libs/mixin/mpMixin';
	import { mixin } from '../../libs/mixin/mixin';
	import { addUnit, addStyle, deepMerge, sys } from '../../libs/function/index';
	/**
	 * StatbusBar 状态栏占位
	 * @author jry ijry@qq.com
	 * @description 本组件主要用于状态填充，比如在自定导航栏的时候，它会自动适配一个恰当的状态栏高度。
	 * @tutorial https://uview-plus.jiangruyi.com/components/statusBar.html
	 * @property {String}			bgColor			背景色 (默认 'transparent' )
	 * @property {String | Object}	customStyle		自定义样式 
	 * @example <up-status-bar></up-status-bar>
	 */
	const __sfc__ = defineComponent({
		name: 'up-status-bar',
		mixins: [mpMixin, mixin, propsStatusBar],
		data() {
			return {
			}
		},
		computed: {
			style(): any {
				const style = {__$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-status-bar/up-status-bar.uvue", 33, 11),}
				// 状态栏高度，由于某些安卓和微信开发工具无法识别css的顶部状态栏变量，所以使用js获取的方式
				style['height'] = addUnit(uni.getSystemInfoSync().statusBarHeight, 'px')
				style['backgroundColor'] = this.bgColor
				return deepMerge(style, addStyle(this.customStyle))
			}
		},
	})

export default __sfc__
function GenUniModulesUviewUltraComponentsUpStatusBarUpStatusBarRender(this: InstanceType<typeof __sfc__>): any | null {
const _ctx = this
const _cache = this.$.renderCache
  return _cE("view", _uM({
    style: _nS([_ctx.style]),
    class: "up-status-bar"
  }), [
    renderSlot(_ctx.$slots, "default")
  ], 4 /* STYLE */)
}
export type UpStatusBarComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpStatusBarUpStatusBarStyles = [_uM([["up-status-bar", _pS(_uM([["width", "100%"]]))]])]
