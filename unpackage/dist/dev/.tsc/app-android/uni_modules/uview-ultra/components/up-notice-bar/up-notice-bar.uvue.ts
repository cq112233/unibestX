import _easycom_up_column_notice from '@/uni_modules/uview-ultra/components/up-column-notice/up-column-notice.uvue'
import _easycom_up_row_notice from '@/uni_modules/uview-ultra/components/up-row-notice/up-row-notice.uvue'
import { ref, computed } from 'vue'
import { addStyle, deepMerge } from '../../libs/function/index.uts'


const __sfc__ = defineComponent({
  __name: 'up-notice-bar',
name: "up-notice-bar",
  props: {
	text: {
		type: [Array, String],
		default: () => [] as Array<string>
	},
	direction: {
		type: String,
		default: 'row'
	},
	step: {
		type: Boolean,
		default: false
	},
	icon: {
		type: String,
		default: 'volume'
	},
	mode: {
		type: String,
		default: ''
	},
	color: {
		type: String,
		default: '#f9ae3d'
	},
	bgColor: {
		type: String,
		default: '#fdf6ec'
	},
	speed: {
		type: [String, Number],
		default: 80
	},
	fontSize: {
		type: [String, Number],
		default: 14
	},
	duration: {
		type: [String, Number],
		default: 2000
	},
	disableTouch: {
		type: Boolean,
		default: true
	},
	url: {
		type: String,
		default: ''
	},
	linkType: {
		type: String,
		default: 'navigateTo'
	},
	customStyle: {
		type: Object,
		default: () => ({})
	}
},
  emits: ["click", "close"],
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;



const props = __props

function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}

const show = ref<boolean>(true)

const noticeBarStyle = computed((): UTSJSONObject => {
	const base = { __$originalPosition: new UTSSourceMapPosition("base", "uni_modules/uview-ultra/components/up-notice-bar/up-notice-bar.uvue", 112, 8), 
		backgroundColor: props.bgColor
	} as UTSJSONObject
	const custom = addStyle(props.customStyle) as UTSJSONObject
	return deepMerge(base, custom) as UTSJSONObject
})

function click(index: number) {
	emit('click', index)
	if (props.url != '' && props.linkType != '') {
		if (props.linkType == 'navigateTo') {
			uni.navigateTo({ url: props.url })
		} else if (props.linkType == 'redirectTo') {
			uni.redirectTo({ url: props.url })
		} else if (props.linkType == 'switchTab') {
			uni.switchTab({ url: props.url })
		} else if (props.linkType == 'reLaunch') {
			uni.reLaunch({ url: props.url })
		}
	}
}

function close() {
	show.value = false
	emit('close')
}

return (): any | null => {

const _component_up_column_notice = resolveEasyComponent("up-column-notice",_easycom_up_column_notice)
const _component_up_row_notice = resolveEasyComponent("up-row-notice",_easycom_up_row_notice)

  return isTrue(show.value)
    ? _cE("view", _uM({
        key: 0,
        class: "up-notice-bar",
        style: _nS(noticeBarStyle.value)
      }), [
        isTrue(_ctx.direction == 'column' || (_ctx.direction == 'row' && _ctx.step))
          ? _cV(_component_up_column_notice, _uM({
              key: 0,
              color: _ctx.color,
              bgColor: _ctx.bgColor,
              text: _ctx.text,
              mode: _ctx.mode,
              step: _ctx.step,
              icon: _ctx.icon,
              "disable-touch": _ctx.disableTouch,
              fontSize: _ctx.fontSize,
              duration: _ctx.duration,
              onClose: close,
              onClick: click
            }), null, 8 /* PROPS */, ["color", "bgColor", "text", "mode", "step", "icon", "disable-touch", "fontSize", "duration"])
          : _cV(_component_up_row_notice, _uM({
              key: 1,
              color: _ctx.color,
              bgColor: _ctx.bgColor,
              text: _ctx.text,
              mode: _ctx.mode,
              fontSize: _ctx.fontSize,
              speed: _ctx.speed,
              url: _ctx.url,
              linkType: _ctx.linkType,
              icon: _ctx.icon,
              onClose: close,
              onClick: click
            }), null, 8 /* PROPS */, ["color", "bgColor", "text", "mode", "fontSize", "speed", "url", "linkType", "icon"])
      ], 4 /* STYLE */)
    : _cC("v-if", true)
}
}

})
export default __sfc__
export type UpNoticeBarComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpNoticeBarUpNoticeBarStyles = [_uM([["u-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-notice-bar", _pS(_uM([["paddingTop", 9], ["paddingRight", 12], ["paddingBottom", 9], ["paddingLeft", 12]]))]])]
