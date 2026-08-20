import { _ as __easycom_0 } from "../up-icon/up-icon.js";
import { r as resolveEasycom } from "../../../../App.ku.js";
import { _ as __easycom_2 } from "../up-button/up-button.js";
import { _ as __easycom_2$1 } from "../up-overlay/up-overlay.js";
import { o as getDeviceInfo, t as toast } from "../../libs/function/index.js";
import { t } from "../../libs/i18n/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref, onMounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-no-network"
  },
  __name: "up-no-network",
  props: {
    tips: {
      type: String,
      default: "哎呀，网络信号丢失"
    },
    zIndex: {
      type: [String, Number],
      default: 10080
    },
    image: {
      type: String,
      default: "wifi-off"
    }
  },
  emits: ["disconnected", "connected", "retry"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const props = __props;
    const emit = __emit;
    const isConnected = ref(true);
    const networkType = ref("none");
    const isIOS = ref(false);
    function noop() {
    }
    function t$1(s) {
      return t(s, new UTSJSONObject({}));
    }
    function emitEvent(netType) {
      emit(netType === "none" ? "disconnected" : "connected");
    }
    function retry() {
      uni.getNetworkType(new UTSJSONObject({
        success: (res) => {
          networkType.value = res.networkType;
          emitEvent(networkType.value);
          if (res.networkType == "none") {
            toast(t$1("up.noNetwork.disconnect"));
            isConnected.value = false;
          } else {
            toast(t$1("up.noNetwork.connect"));
            isConnected.value = true;
          }
        }
      }));
      emit("retry");
    }
    function openSettings() {
      if (networkType.value == "none")
        ;
    }
    onMounted(() => {
      isIOS.value = getDeviceInfo().platform === "ios";
      uni.onNetworkStatusChange((res) => {
        isConnected.value = res.isConnected;
        networkType.value = res.networkType;
        emitEvent(networkType.value);
      });
      uni.getNetworkType(new UTSJSONObject({
        success: (res) => {
          networkType.value = res.networkType;
          emitEvent(networkType.value);
          if (res.networkType == "none") {
            isConnected.value = false;
          } else {
            isConnected.value = true;
          }
        }
      }));
    });
    __expose({
      retry
    });
    const __returned__ = { props, emit, isConnected, networkType, isIOS, noop, t: t$1, emitEvent, retry, openSettings };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"u-empty":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-empty__wrap":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__scroll-view-wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__scroll-view":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__nav":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__nav__line":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-empty":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-empty__wrap":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__scroll-view-wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__scroll-view":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__nav":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__nav__line":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-no-network":{"":{"display":"flex","flexDirection":"column","justifyContent":"center","alignItems":"center","marginTop":-100}},"up-no-network__tips":{"":{"color":"#909193","fontSize":14,"marginTop":15}},"up-no-network__app":{"":{"display":"flex","flexDirection":"row","marginTop":6}},"up-no-network__app__setting":{"":{"color":"#c0c4cc","fontSize":13}},"up-no-network__app__to-setting":{"":{"fontSize":13,"color":"var(--theme-color, #0957de)","marginLeft":3}},"up-no-network__retry":{"":{"display":"flex","flexDirection":"row","justifyContent":"center","marginTop":15}},"flex":{"":{"display":"flex"}}};
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, withModifiers: _withModifiers, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(__resolveDynamicComponent("up-icon"), __easycom_0);
  const _component_up_button = resolveEasycom(__resolveDynamicComponent("up-button"), __easycom_2);
  const _component_up_overlay = resolveEasycom(__resolveDynamicComponent("up-overlay"), __easycom_2$1);
  return _openBlock(), _createBlock(_component_up_overlay, {
    show: !$setup.isConnected,
    zIndex: $props.zIndex,
    onTouchmove: _withModifiers($setup.noop, ["stop", "prevent"]),
    customStyle: {
      backgroundColor: "#fff",
      display: "flex",
      justifyContent: "center"
    }
  }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "up-no-network" }, [
        _createVNode(_component_up_icon, {
          name: $props.image,
          size: "150",
          imgMode: "widthFit",
          class: "up-no-network__error-icon"
        }, null, 8, ["name"]),
        _createElementVNode(
          "text",
          { class: "up-no-network__tips" },
          _toDisplayString($props.tips),
          1
          /* TEXT */
        ),
        _createElementVNode("view", { class: "up-no-network__retry" }, [
          _createVNode(_component_up_button, {
            size: "mini",
            text: $setup.t("up.common.retry"),
            type: "primary",
            plain: "",
            onClick: $setup.retry
          }, null, 8, ["text"])
        ])
      ])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["show", "zIndex"]);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-no-network/up-no-network.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-no-network.js.map
