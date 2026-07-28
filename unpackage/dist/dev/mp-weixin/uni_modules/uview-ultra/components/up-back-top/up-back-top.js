"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("./backtop.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const _sfc_main = common_vendor.defineComponent({
  name: "up-back-top",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin],
  props: {
    mode: {
      type: String,
      default: "circle"
    },
    icon: {
      type: String,
      default: "arrow-upward"
    },
    text: {
      type: String,
      default: ""
    },
    duration: {
      type: [String, Number],
      default: 100
    },
    scrollTop: {
      type: [String, Number],
      default: 0
    },
    top: {
      type: [String, Number],
      default: 100
    },
    bottom: {
      type: [String, Number],
      default: 80
    },
    right: {
      type: [String, Number],
      default: 20
    },
    zIndex: {
      type: [String, Number],
      default: 999
    },
    iconStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    },
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    }
  },
  emits: ["click"],
  computed: {
    show() {
      var _a, _b;
      const sVal = ((_a = this.scrollTop) !== null && _a !== void 0 ? _a : 0).toString();
      const tVal = ((_b = this.top) !== null && _b !== void 0 ? _b : 100).toString();
      const sTop = parseFloat(sVal);
      const targetTop = parseFloat(tVal);
      if (isNaN(sTop))
        return false;
      const threshold = isNaN(targetTop) ? 100 : targetTop;
      return sTop >= threshold;
    },
    finalStyle() {
      var _a, _b, _c;
      const bStr = ((_a = this.bottom) !== null && _a !== void 0 ? _a : 80).toString();
      const rStr = ((_b = this.right) !== null && _b !== void 0 ? _b : 20).toString();
      const bVal = bStr.includes("px") ? bStr : bStr + "px";
      const rVal = rStr.includes("px") ? rStr : rStr + "px";
      const zVal = parseInt(((_c = this.zIndex) !== null && _c !== void 0 ? _c : 999).toString());
      const style = new UTSJSONObject({
        position: "fixed",
        bottom: bVal,
        right: rVal,
        width: "44px",
        height: "44px",
        zIndex: isNaN(zVal) ? 999 : zVal,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        borderRadius: this.mode === "circle" ? "100px" : "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "#e2e8f0"
      });
      return uni_modules_uviewUltra_libs_function_index.deepMerge(style, uni_modules_uviewUltra_libs_function_index.addStyle(this.customStyle));
    }
  },
  methods: {
    backToTop(e = null) {
      common_vendor.index.pageScrollTo(new UTSJSONObject({
        scrollTop: 0,
        duration: parseInt(this.duration.toString()),
        fail: (_ = null) => {
        }
      }));
      this.$emit("click", e);
    }
  }
});
if (!Array) {
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  _easycom_up_icon2();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
if (!Math) {
  _easycom_up_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return common_vendor.e({
    a: $options.show
  }, $options.show ? common_vendor.e({
    b: common_vendor.p({
      name: $props.icon,
      size: "22",
      color: "#2563eb",
      class: "data-v-5283f3ea"
    }),
    c: $props.text != ""
  }, $props.text != "" ? {
    d: common_vendor.t($props.text)
  } : {}, {
    e: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    f: common_vendor.s($options.finalStyle),
    g: common_vendor.s({
      "--status-bar-height": `${_ctx.u_s_b_h}px`,
      "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
    }),
    h: common_vendor.o((...args) => $options.backToTop && $options.backToTop(...args), "e0"),
    i: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5283f3ea"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-back-top/up-back-top.js.map
