"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upNoNetwork_props = require("./props.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_libs_i18n_index = require("../../libs/i18n/index.js");
const _sfc_main = common_vendor.defineComponent({
  name: "up-no-network",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin, uni_modules_uviewUltra_components_upNoNetwork_props.propsNoNetwork],
  data() {
    return {
      isConnected: true,
      networkType: "none",
      isIOS: false
    };
  },
  mounted() {
    this.isIOS = uni_modules_uviewUltra_libs_function_index.getDeviceInfo().platform === "ios";
    common_vendor.index.onNetworkStatusChange((res) => {
      this.isConnected = res.isConnected;
      this.networkType = res.networkType;
      this.emitEvent(this.networkType);
    });
    common_vendor.index.getNetworkType(new common_vendor.UTSJSONObject({
      success: (res) => {
        this.networkType = res.networkType;
        this.emitEvent(this.networkType);
        if (res.networkType == "none") {
          this.isConnected = false;
        } else {
          this.isConnected = true;
        }
      }
    }));
  },
  emits: ["disconnected", "connected", "retry"],
  methods: {
    t(s) {
      return uni_modules_uviewUltra_libs_i18n_index.t(s);
    },
    retry() {
      common_vendor.index.getNetworkType(new common_vendor.UTSJSONObject({
        success: (res) => {
          this.networkType = res.networkType;
          this.emitEvent(this.networkType);
          if (res.networkType == "none") {
            uni_modules_uviewUltra_libs_function_index.toast(uni_modules_uviewUltra_libs_i18n_index.t("up.noNetwork.disconnect"));
            this.isConnected = false;
          } else {
            uni_modules_uviewUltra_libs_function_index.toast(uni_modules_uviewUltra_libs_i18n_index.t("up.noNetwork.connect"));
            this.isConnected = true;
          }
        }
      }));
      this.$emit("retry");
    },
    // 发出事件给父组件
    emitEvent(networkType) {
      this.$emit(networkType === "none" ? "disconnected" : "connected");
    },
    openSettings() {
      return common_vendor.__awaiter(this, void 0, void 0, function* () {
        if (this.networkType == "none") {
          this.openSystemSettings();
          return Promise.resolve(null);
        }
      });
    },
    openAppSettings() {
      this.gotoAppSetting();
    },
    openSystemSettings() {
      if (this.isIOS) {
        this.gotoiOSSetting();
      } else {
        this.gotoAndroidSetting();
      }
    },
    network() {
    },
    gotoAppSetting() {
    },
    gotoiOSSetting() {
    },
    gotoAndroidSetting() {
    }
  }
});
if (!Array) {
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_button2 = common_vendor.resolveComponent("up-button");
  const _easycom_up_overlay2 = common_vendor.resolveComponent("up-overlay");
  (_easycom_up_icon2 + _easycom_up_button2 + _easycom_up_overlay2)();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
const _easycom_up_button = () => "../up-button/up-button.js";
const _easycom_up_overlay = () => "../up-overlay/up-overlay.js";
if (!Math) {
  (_easycom_up_icon + _easycom_up_button + _easycom_up_overlay)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return {
    a: common_vendor.p({
      name: _ctx.image,
      size: "150",
      imgMode: "widthFit",
      class: "up-no-network__error-icon data-v-7f1a0fb1"
    }),
    b: common_vendor.t(_ctx.tips),
    c: common_vendor.o($options.retry, "39"),
    d: common_vendor.p({
      size: "mini",
      text: $options.t("up.common.retry"),
      type: "primary",
      plain: true,
      class: "data-v-7f1a0fb1"
    }),
    e: common_vendor.gei(_ctx, ""),
    f: common_vendor.o(_ctx.noop, "7f"),
    g: common_vendor.p({
      show: !$data.isConnected,
      zIndex: _ctx.zIndex,
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
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7f1a0fb1"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-no-network/up-no-network.js.map
