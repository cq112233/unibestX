import { _ as __easycom_0 } from "../up-icon/up-icon.js";
import { _ as __easycom_2 } from "../up-button/up-button.js";
import { _ as __easycom_2$1 } from "../up-overlay/up-overlay.js";
import { o as getDeviceInfo, t as toast } from "../../libs/function/index.js";
import { t } from "../../libs/i18n/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, withSharedDataVaporCtx: _withSharedDataVaporCtx, withModifiers: _withModifiers } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpNoNetworkUpNoNetwork";
const { ref, onMounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-no-network"
  },
  __dynamicSharedData: true,
  __hash: "3dfaf1d8",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-no-network/up-no-network.uvue",
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
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpNoNetworkUpNoNetworkSharedData", sharedDataClassId: 0 })));
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
    return () => {
      "raw js";
      const _component_up_icon = __easycom_0;
      const _component_up_button = __easycom_2;
      const _component_up_overlay = __easycom_2$1;
      const n5 = _createSharedDataComponentWithFallback(
        _component_up_overlay,
        "7572fa11",
        {
          show: () => {
            return !isConnected.value;
          },
          zIndex: () => {
            return __props.zIndex;
          },
          onTouchmove: () => {
            return _withModifiers(noop, ["stop", "prevent"]);
          },
          customStyle: {
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "center"
          }
        },
        {
          "default": _withSharedDataVaporCtx(() => {
            const n0 = _createSharedDataComponentWithFallback(_component_up_icon, "36c67f64", {
              name: () => {
                return __props.image;
              },
              size: "150",
              imgMode: "widthFit",
              class: "up-no-network__error-icon"
            });
            _setSharedData(__sharedData, 1, n0?.sharedData);
            _renderSharedDataEffect(() => {
              return _setSharedData(__sharedData, 3, _toDisplayString(__props.tips));
            });
            const n2 = _createSharedDataComponentWithFallback(_component_up_button, "36c66f9c", {
              size: "mini",
              text: () => {
                return t$1("up.common.retry");
              },
              type: "primary",
              plain: "",
              onClick: () => {
                return retry;
              }
            });
            _setSharedData(__sharedData, 2, n2?.sharedData);
          })
        },
        1
        /* SINGLE_ROOT */
      );
      _setSharedData(__sharedData, 0, n5?.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-no-network.js.map
