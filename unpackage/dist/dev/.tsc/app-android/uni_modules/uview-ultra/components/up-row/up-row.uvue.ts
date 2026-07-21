import type { PropType } from 'vue'
	import { computed } from 'vue'
	import defProps from './row'
	import { addUnit, addStyle, deepMerge, upGetRect, sleep } from '../../libs/function/index'
	import { commonProps, useUltraUI } from '../../libs/composable/useUltraUI'
	
const __sfc__ = defineComponent({
  __name: 'up-row',

	  name: 'up-row'
	,
  props: {
		// 栅格间隔，左右各为此值的一半，单位px
		gutter: {
		    type: [String, Number],
		    default: defProps.getNumber('row.gutter')
		},
		// 水平排列方式(微信小程序暂不支持) 可选值为`start`(或`flex-start`)、`end`(或`flex-end`)、`center`、`around`(或`space-around`)、`between`(或`space-between`)
		justify: {
		    type: String,
		    default: defProps.getNumber('row.justify')
		},
		// 垂直排列方式
		align: {
		    type: String,
		    default: defProps.getNumber('row.align')
		}
	},
  emits: ["click"],
  setup(__props, __setupCtx: SetupContext) {
const __expose = __setupCtx.expose
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

	const { children } = useUltraUI()
	
	// options
	
	
	// props
	const props = __props
	
	// 定义 emits
	function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}
	
	const uJustify = computed(() : string => {
		if (props.justify == 'end' || props.justify == 'start') return 'flex-' + props.justify
		else if (props.justify == 'around' || props.justify == 'between') return 'space-' + props.justify
		else return props.justify
	})
	
	const uAlignItem = computed(() : string => {
		if (props.align == 'top') return 'flex-start'
		if (props.align == 'bottom') return 'flex-end'
		else return props.align
	})
	
	const rowStyle = computed(() : any => {
		const style = {__$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-row/up-row.uvue", 60, 9),
			alignItems: uAlignItem.value,
			justifyContent: uJustify.value
		}
		// 通过给up-row左右两边的负外边距，消除up-col在有gutter时，第一个和最后一个元素的左内边距和右内边距造成的影响
		if(props.gutter != '') {
			// @ts-ignore
			style['marginLeft'] = addUnit((0-parseInt(props.gutter.toString()))/2)
			// @ts-ignore
			style['marginRight'] = addUnit((0-parseInt(props.gutter.toString()))/2)
		}
		return style
	})
	
	const clickHandler = (e: any): void => {
		emit('click')
	}
	
	const getComponentWidth = (): Promise<number|null> => {
		return new Promise(resolve => {
			// 延时一定时间，以确保节点渲染完成
			sleep().then(() => {
				// @ts-ignore
				upGetRect('.up-row').then((res: any) => {
					// console.log(res)
					let node = res as NodeInfo
					resolve(node.width != null ? node.width : 0)
				})
			})
		})
	}
	
	const getProps = function(): UTSJSONObject {
		return {
			gutter: props.gutter,
			justify: props.justify,
			align: props.align
		}
	}
	const getRefs = function() {
		return {
		}
	}
	
	// 导出组件方法
	__expose({
		getComponentWidth,
		getProps,
		getRefs
	})

return (): any | null => {

  return _cE("view", _uM({
    class: "up-row",
    ref: "up-row",
    style: _nS([rowStyle.value, _ctx.$upAddStyle(props.customStyle)]),
    onClick: clickHandler
  }), [
    renderSlot(_ctx.$slots, "default")
  ], 4 /* STYLE */)
}
}

})
export default __sfc__
export type UpRowComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpRowUpRowStyles = [_uM([["u-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-row", _pS(_uM([["display", "flex"], ["flexDirection", "row"]]))]])]
