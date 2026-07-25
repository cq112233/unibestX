import _easycom_up_line from '@/uni_modules/uview-ultra/components/up-line/up-line.uvue'
import { computed } from 'vue'
	import defProps from './divider'
	import { addStyle, addUnit } from '../../libs/function/index.uts'
	
	
const __sfc__ = defineComponent({
  __name: 'up-divider',
  props: {
		// 是否虚线
		dashed: {
			type: Boolean,
			default: defProps.getBoolean('divider.dashed')
		},
		// 是否细线
		hairline: {
			type: Boolean,
			default: defProps.getBoolean('divider.hairline')
		},
		// 是否以点替代文字，优先于text字段起作用
		dot: {
			type: Boolean,
			default: defProps.getBoolean('divider.dot')
		},
		// 内容文本的位置，left-左边，center-中间，right-右边
		textPosition: {
			type: String,
			default: defProps.getString('divider.textPosition')
		},
		// 文本内容
		text: {
			type: [String, Number],
			default: defProps.getString('divider.text')
		},
		// 文本大小
		textSize: {
			type: [String, Number],
			default: defProps.getNumber('divider.textSize')
		},
		// 文本颜色
		textColor: {
			type: String,
			default: defProps.getString('divider.textColor')
		},
		// 线条颜色
		lineColor: {
			type: String,
			default: defProps.getString('divider.lineColor')
		}
	},
  emits: ['click'],
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

	const props = __props;
	
	function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}
	
	const textStyle = computed(() => {
		const style = {__$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-divider/up-divider.uvue", 82, 9),};
		style['fontSize'] = addUnit(props.textSize);
		style['color'] = props.textColor;
		return style;
	});
	
	// 左边线条的的样式
	const leftLineStyle = computed(() => {
		const style = {__$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-divider/up-divider.uvue", 90, 9),};
		// 如果是在左边，设置左边的宽度为固定值
		if (props.textPosition === 'left') {
			style['width'] = '80rpx';
		} else {
			style['flex'] = 1;
		}
		return style;
	});
	
	// 右边线条的的样式
	const rightLineStyle = computed(() => {
		const style = {__$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-divider/up-divider.uvue", 102, 9),};
		// 如果是在右边，设置右边的宽度为固定值
		if (props.textPosition === 'right') {
			style['width'] = '80rpx';
		} else {
			style['flex'] = 1;
		}
		return style;
	});
	
	// divider组件被点击时触发
	const clickHandler = () => {
		emit('click');
	};

return (): any | null => {

const _component_up_line = resolveEasyComponent("up-line",_easycom_up_line)

  return _cE("view", _uM({
    class: "up-divider",
    style: _nS([_ctx.$up.addStyle(_ctx.customStyle)]),
    onClick: clickHandler
  }), [
    _cV(_component_up_line, _uM({
      color: _ctx.lineColor,
      customStyle: leftLineStyle.value,
      hairline: _ctx.hairline,
      dashed: _ctx.dashed
    }), null, 8 /* PROPS */, ["color", "customStyle", "hairline", "dashed"]),
    isTrue(_ctx.dot)
      ? _cE("text", _uM({
          key: 0,
          class: "up-divider__dot"
        }), "●")
      : isTrue(_ctx.text)
        ? _cE("text", _uM({
            key: 1,
            class: "up-divider__text",
            style: _nS([textStyle.value])
          }), _tD(_ctx.text), 5 /* TEXT, STYLE */)
        : _cC("v-if", true),
    _cV(_component_up_line, _uM({
      color: _ctx.lineColor,
      customStyle: rightLineStyle.value,
      hairline: _ctx.hairline,
      dashed: _ctx.dashed
    }), null, 8 /* PROPS */, ["color", "customStyle", "hairline", "dashed"])
  ], 4 /* STYLE */)
}
}

})
export default __sfc__
export type UpDividerComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpDividerUpDividerStyles = [_uM([["u-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-divider", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["marginTop", 15], ["marginRight", 0], ["marginBottom", 15], ["marginLeft", 0]]))], ["up-divider__text", _pS(_uM([["marginTop", 0], ["marginRight", 15], ["marginBottom", 0], ["marginLeft", 15]]))], ["up-divider__dot", _pS(_uM([["fontSize", 12], ["marginTop", 0], ["marginRight", 12], ["marginBottom", 0], ["marginLeft", 12], ["color", "#c0c4cc"]]))]])]
