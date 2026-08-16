"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_libs_i18n_index = require("../../libs/i18n/index.js");
if (!Array) {
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_button_1 = common_vendor.resolveComponent("up-button");
  const _easycom_up_overlay_1 = common_vendor.resolveComponent("up-overlay");
  (_easycom_up_icon_1 + _easycom_up_button_1 + _easycom_up_overlay_1)();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
const _easycom_up_button = () => "../up-button/up-button.js";
const _easycom_up_overlay = () => "../up-overlay/up-overlay.js";
if (!Math) {
  (_easycom_up_icon + _easycom_up_button + _easycom_up_overlay)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-no-network"
}, { __name: "up-no-network", props: {
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
}, emits: ["disconnected", "connected", "retry"], setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
  const emit = __emit;
  const isConnected = common_vendor.ref(true);
  const networkType = common_vendor.ref("none");
  const isIOS = common_vendor.ref(false);
  function noop() {
  }
  function t(s) {
    return uni_modules_uviewUltra_libs_i18n_index.t(s, new common_vendor.UTSJSONObject({}));
  }
  function emitEvent(netType) {
    emit(netType === "none" ? "disconnected" : "connected");
  }
  function retry() {
    common_vendor.index.getNetworkType(new common_vendor.UTSJSONObject({
      success: (res) => {
        networkType.value = res.networkType;
        emitEvent(networkType.value);
        if (res.networkType == "none") {
          uni_modules_uviewUltra_libs_function_index.toast(t("up.noNetwork.disconnect"));
          isConnected.value = false;
        } else {
          uni_modules_uviewUltra_libs_function_index.toast(t("up.noNetwork.connect"));
          isConnected.value = true;
        }
      }
    }));
    emit("retry");
  }
  common_vendor.onMounted(() => {
    isIOS.value = uni_modules_uviewUltra_libs_function_index.getDeviceInfo().platform === "ios";
    common_vendor.index.onNetworkStatusChange((res) => {
      isConnected.value = res.isConnected;
      networkType.value = res.networkType;
      emitEvent(networkType.value);
    });
    common_vendor.index.getNetworkType(new common_vendor.UTSJSONObject({
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
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.p({
        name: __props.image,
        size: "150",
        imgMode: "widthFit",
        class: "up-no-network__error-icon data-v-7f1a0fb1"
      }),
      b: common_vendor.t(__props.tips),
      c: common_vendor.o(retry, "88"),
      d: common_vendor.p({
        size: "mini",
        text: t("up.common.retry"),
        type: "primary",
        plain: true,
        class: "data-v-7f1a0fb1"
      }),
      e: common_vendor.gei(_ctx, ""),
      f: common_vendor.o(noop, "90"),
      g: common_vendor.p({
        show: !isConnected.value,
        zIndex: __props.zIndex,
        customStyle: {
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "center"
        },
        id: common_vendor.gei(_ctx, ""),
        class: "data-v-7f1a0fb1"
      }),
      h: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7f1a0fb1"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-no-network/up-no-network.js.map
