
	import { propsLine } from './props';
	import { mpMixin } from '../../libs/mixin/mpMixin';
	import { mixin } from '../../libs/mixin/mixin';
	import { addUnit, addStyle, deepMerge } from '../../libs/function/index';
	/**
	 * line 线条
	 * @description 此组件一般用于显示一根线条，用于分隔内容块，有横向和竖向两种模式，且能设置0.5px线条，使用也很简单
	 * @tutorial https://ijry.github.io/uview-plus/components/line.html
	 * @property {String}			color		线条的颜色 ( 默认 '#d6d7d9' )
	 * @property {String }			length		长度，竖向时表现为高度，横向时表现为长度，可以为百分比，带px单位的值等 ( 默认 '100%' )
	 * @property {String}			direction	线条的方向，row-横向，col-竖向 (默认 'row' )
	 * @property {Boolean}			hairline	是否显示细线条 (默认 true )
	 * @property {String }			margin		线条与上下左右元素的间距，字符串形式，如"30px"  (默认 0 )
	 * @property {Boolean}			dashed		是否虚线，true-虚线，false-实线 (默认 false )
	 * @property {Object}			customStyle	定义需要用到的外部样式
	 * @example <up-line color="red"></up-line>
	 */
	const __sfc__ = defineComponent({
		name: 'up-line',
		mixins: [mpMixin, mixin, propsLine],
		computed: {
			lineStyle(): UTSJSONObject {
				const style = {__$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-line/up-line.uvue", 32, 11),}
				style['margin'] = this.margin
				// 如果是水平线条，边框高度为1px，再通过transform缩小一半，就是0.5px了
				if (this.direction === 'row') {
					// 此处采用兼容分开写，兼容nvue的写法
					style['borderBottomWidth'] = '1px'
					style['borderBottomStyle'] = this.dashed ? 'dashed' : 'solid'
					style['width'] = addUnit(this.length)
					if (this.hairline) style['transform'] = 'scaleY(0.5)'
				} else {
					// 如果是竖向线条，边框宽度为1px，再通过transform缩小一半，就是0.5px了
					style['borderLeftWidth'] = '1px'
					style['borderLeftStyle'] = this.dashed ? 'dashed' : 'solid'
					style['height'] = addUnit(this.length)
					if (this.hairline) style['transform'] = 'scaleX(0.5)'
				}

				style['borderColor'] = this.color
				return deepMerge(style, addStyle(this.customStyle))
			}
		}
	})

export default __sfc__
function GenUniModulesUviewUltraComponentsUpLineUpLineRender(this: InstanceType<typeof __sfc__>): any | null {
const _ctx = this
const _cache = this.$.renderCache
  return _cE("view", _uM({
    class: "up-line",
    style: _nS([_ctx.lineStyle])
  }), null, 4 /* STYLE */)
}
export type UpLineComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpLineUpLineStyles = [_uM([["u-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))]])]
