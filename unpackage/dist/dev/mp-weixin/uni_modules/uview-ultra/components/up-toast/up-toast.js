"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_libs_config_color = require("../../libs/config/color.js");
const uni_modules_uviewUltra_libs_function_colorGradient = require("../../libs/function/colorGradient.js");
const _sfc_main = common_vendor.defineComponent({
  name: "up-toast",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin],
  data() {
    return {
      isShow: false,
      timer: null,
      config: new UTSJSONObject({
        message: "",
        type: "",
        zIndex: 10090,
        duration: 2e3,
        icon: true,
        position: "center",
        complete: null,
        overlay: true,
        loading: false
        // 是否加载中状态
      }),
      tmpConfig: new UTSJSONObject({
        message: "",
        type: "",
        zIndex: 10090,
        duration: 2e3,
        icon: true,
        position: "center",
        complete: null,
        overlay: true,
        loading: false
      })
      // 将用户配置和内置配置合并后的临时配置变量
    };
  },
  computed: {
    iconName() {
      if (this.tmpConfig["icon"] == "" || this.tmpConfig["icon"] == "none") {
        return "";
      }
      if (this.tmpConfig["icon"] == true) {
        if (["error", "warning", "success", "primary"].includes(this.tmpConfig["type"])) {
          return uni_modules_uviewUltra_libs_function_index.type2icon(this.tmpConfig["type"]);
        } else {
          return "";
        }
      } else {
        return this.tmpConfig["icon"] != null ? this.tmpConfig["icon"].toString() : "";
      }
    },
    overlayStyle() {
      const style = new UTSJSONObject(
        {
          justifyContent: "center",
          alignItems: "center",
          display: "flex"
        }
        // 将遮罩设置为100%透明度，避免出现灰色背景
      );
      style["backgroundColor"] = "rgba(0, 0, 0, 0)";
      if (!this.tmpConfig["overlay"]) {
        style["pointerEvents"] = "none";
      }
      return style;
    },
    iconStyle() {
      const style = new UTSJSONObject(
        {}
        // 图标需要一个右边距，以跟右边的文字有隔开的距离
      );
      style["marginRight"] = "4px";
      return style;
    },
    loadingIconColor() {
      let colorTmp = "rgb(255, 255, 255)";
      if (["error", "warning", "success", "primary"].includes(this.tmpConfig["type"])) {
        colorTmp = uni_modules_uviewUltra_libs_function_colorGradient.hexToRgb(uni_modules_uviewUltra_libs_config_color.color[this.tmpConfig["type"]].toString()).toString();
      }
      return colorTmp;
    },
    // 内容盒子的样式
    contentStyle() {
      const windowHeight = uni_modules_uviewUltra_libs_function_index.getWindowInfo().windowHeight, style = new UTSJSONObject({});
      let value = 0;
      if (this.tmpConfig["position"] === "top") {
        value = -windowHeight * 0.25;
      } else if (this.tmpConfig["position"] === "bottom") {
        value = windowHeight * 0.25;
      }
      style["transform"] = `translateY(${value}px)`;
      return style;
    }
  },
  created() {
  },
  methods: {
    primary(message) {
      this.show(new UTSJSONObject({
        type: "primary",
        message
      }));
    },
    success(message) {
      this.show(new UTSJSONObject({
        type: "success",
        message
      }));
    },
    error(message) {
      this.show(new UTSJSONObject({
        type: "error",
        message
      }));
    },
    warning(message) {
      this.show(new UTSJSONObject({
        type: "warning",
        message
      }));
    },
    // 显示toast组件，由父组件通过this.$refs.xxx.show(options)形式调用
    show(options) {
      this.tmpConfig = uni_modules_uviewUltra_libs_function_index.deepMerge(this.config, options);
      this.clearTimer();
      this.isShow = true;
      if (this.tmpConfig["duration"] != -1) {
        this.timer = setTimeout(() => {
          this.clearTimer();
          const complete = this.tmpConfig["complete"];
          if (typeof complete === "function") {
            complete();
          }
        }, this.tmpConfig["duration"]);
      }
    },
    // 隐藏toast组件，由父组件通过this.$refs.xxx.hide()形式调用
    hide() {
      this.clearTimer();
    },
    clearTimer() {
      var _a;
      this.isShow = false;
      clearTimeout((_a = this.timer) !== null && _a !== void 0 ? _a : 0);
      this.timer = null;
    }
  },
  beforeUnmount() {
    this.clearTimer();
  }
});
if (!Array) {
  const _easycom_up_loading_icon2 = common_vendor.resolveComponent("up-loading-icon");
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_gap2 = common_vendor.resolveComponent("up-gap");
  const _easycom_up_overlay2 = common_vendor.resolveComponent("up-overlay");
  (_easycom_up_loading_icon2 + _easycom_up_icon2 + _easycom_up_gap2 + _easycom_up_overlay2)();
}
const _easycom_up_loading_icon = () => "../up-loading-icon/up-loading-icon.js";
const _easycom_up_icon = () => "../up-icon/up-icon.js";
const _easycom_up_gap = () => "../up-gap/up-gap.js";
const _easycom_up_overlay = () => "../up-overlay/up-overlay.js";
if (!Math) {
  (_easycom_up_loading_icon + _easycom_up_icon + _easycom_up_gap + _easycom_up_overlay)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return common_vendor.e({
    a: $data.tmpConfig["type"] === "loading"
  }, $data.tmpConfig["type"] === "loading" ? {
    b: common_vendor.p({
      mode: "circle",
      color: "rgb(255, 255, 255)",
      inactiveColor: "rgb(120, 120, 120)",
      size: "25",
      class: "data-v-d6b2c878"
    })
  } : $data.tmpConfig["type"] !== "defalut" && $options.iconName != "" ? {
    d: common_vendor.p({
      name: $options.iconName,
      size: "17",
      color: $data.tmpConfig["type"],
      customStyle: $options.iconStyle,
      class: "data-v-d6b2c878"
    })
  } : {}, {
    c: $data.tmpConfig["type"] !== "defalut" && $options.iconName != "",
    e: $data.tmpConfig["type"] === "loading" || $data.tmpConfig["loading"]
  }, $data.tmpConfig["type"] === "loading" || $data.tmpConfig["loading"] ? {
    f: common_vendor.p({
      height: "12",
      bgColor: "transparent",
      class: "data-v-d6b2c878"
    })
  } : {}, {
    g: common_vendor.t($data.tmpConfig["message"]),
    h: common_vendor.n("up-toast__content__text--" + $data.tmpConfig["type"]),
    i: common_vendor.s($options.contentStyle),
    j: common_vendor.n("up-type-" + $data.tmpConfig["type"]),
    k: common_vendor.n($data.tmpConfig["type"] === "loading" || $data.tmpConfig["loading"] ? "up-toast__content--loading" : ""),
    l: common_vendor.p({
      show: $data.isShow,
      zIndex: $data.tmpConfig["zIndex"],
      ["custom-style"]: $options.overlayStyle,
      class: "data-v-d6b2c878"
    }),
    m: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    n: `${_ctx.u_s_b_h}px`,
    o: `${_ctx.u_s_a_i_b}px`,
    p: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d6b2c878"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-toast/up-toast.js.map
