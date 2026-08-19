import _easycom_up_icon from '@/uni_modules/uview-ultra/components/up-icon/up-icon.uvue'
import _easycom_up_button from '@/uni_modules/uview-ultra/components/up-button/up-button.uvue'
import _easycom_up_overlay from '@/uni_modules/uview-ultra/components/up-overlay/up-overlay.uvue'
import { ref, onMounted } from 'vue'
import { toast, getDeviceInfo } from '../../libs/function/index'
import { t as i18nT } from '../../libs/i18n/index.uts'


const __sfc__ = defineComponent({
  __name: 'up-no-network',
name: "up-no-network",
  props: {
	tips: {
		type: String,
		default: '哎呀，网络信号丢失'
	},
	zIndex: {
		type: [String, Number],
		default: 10080
	},
	image: {
		type: String,
		default: 'wifi-off'
	}
},
  emits: ["disconnected", "connected", "retry"],
  setup(__props, __setupCtx: SetupContext) {
const __expose = __setupCtx.expose
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;



const props = __props

function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}

const isConnected = ref<boolean>(true)
const networkType = ref<string>("none")
const isIOS = ref<boolean>(false)

function noop() {}

function t(s: string): string {
	return i18nT(s, {} as UTSJSONObject)
}

function emitEvent(netType: string) {
	emit(netType === 'none' ? 'disconnected' : 'connected')
}

function retry() {
	uni.getNetworkType({
		success: (res: GetNetworkTypeSuccess) => {
			networkType.value = res.networkType
			emitEvent(networkType.value)
			if (res.networkType == 'none') {
				toast(t("up.noNetwork.disconnect"))
				isConnected.value = false
			} else {
				toast(t("up.noNetwork.connect"))
				isConnected.value = true
			}
		}
	})
	emit('retry')
}

function openSettings() {
	if (networkType.value == "none") {
		// system settings
	}
}

onMounted(() => {
	isIOS.value = (getDeviceInfo().platform === 'ios')
	uni.onNetworkStatusChange((res: OnNetworkStatusChangeCallbackResult) => {
		isConnected.value = res.isConnected
		networkType.value = res.networkType
		emitEvent(networkType.value)
	})
	uni.getNetworkType({
		success: (res: GetNetworkTypeSuccess) => {
			networkType.value = res.networkType
			emitEvent(networkType.value)
			if (res.networkType == 'none') {
				isConnected.value = false
			} else {
				isConnected.value = true
			}
		}
	})
})

__expose({
	retry
})

return (): any | null => {

const _component_up_icon = resolveEasyComponent("up-icon",_easycom_up_icon)
const _component_up_button = resolveEasyComponent("up-button",_easycom_up_button)
const _component_up_overlay = resolveEasyComponent("up-overlay",_easycom_up_overlay)

  return _cV(_component_up_overlay, _uM({
    show: !isConnected.value,
    zIndex: _ctx.zIndex,
    onTouchmove: withModifiers(noop, ["stop","prevent"]),
    customStyle: {
			backgroundColor: '#fff',
			display: 'flex',
			justifyContent: 'center',
		}
  }), _uM({
    default: withSlotCtx((): any[] => [
      _cE("view", _uM({ class: "up-no-network" }), [
        _cV(_component_up_icon, _uM({
          name: _ctx.image,
          size: "150",
          imgMode: "widthFit",
          class: "up-no-network__error-icon"
        }), null, 8 /* PROPS */, ["name"]),
        _cE("text", _uM({ class: "up-no-network__tips" }), _tD(_ctx.tips), 1 /* TEXT */),
        _cE("view", _uM({ class: "up-no-network__retry" }), [
          _cV(_component_up_button, _uM({
            size: "mini",
            text: t('up.common.retry'),
            type: "primary",
            plain: "",
            onClick: retry
          }), null, 8 /* PROPS */, ["text"])
        ])
      ])
    ]),
    _: 1 /* STABLE */
  }), 8 /* PROPS */, ["show", "zIndex"])
}
}

})
export default __sfc__
export type UpNoNetworkComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpNoNetworkUpNoNetworkStyles = [_uM([["u-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-no-network", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["justifyContent", "center"], ["alignItems", "center"], ["marginTop", -100]]))], ["up-no-network__tips", _pS(_uM([["color", "#909193"], ["fontSize", 14], ["marginTop", 15]]))], ["up-no-network__app", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["marginTop", 6]]))], ["up-no-network__app__setting", _pS(_uM([["color", "#c0c4cc"], ["fontSize", 13]]))], ["up-no-network__app__to-setting", _pS(_uM([["fontSize", 13], ["color", "var(--theme-color, #0957de)"], ["marginLeft", 3]]))], ["up-no-network__retry", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["justifyContent", "center"], ["marginTop", 15]]))]])]
