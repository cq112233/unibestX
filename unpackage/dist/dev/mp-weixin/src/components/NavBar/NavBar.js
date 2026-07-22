"use strict";
const common_vendor = require("../../../common/vendor.js");
const src_utils_systemInfo = require("../../utils/systemInfo.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "NavBar",
  props: {
    title: {
      type: String,
      default: ""
    },
    titleColor: {
      type: String,
      default: "#1e293b"
    },
    bgColor: {
      type: String,
      default: "#ffffff"
    },
    showBack: {
      type: Boolean,
      default: true
    },
    fixed: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const statusBarHeight = common_vendor.computed(() => {
      var _a, _b, _c, _d;
      return (_d = (_b = (_a = src_utils_systemInfo.safeAreaInsets.value) === null || _a === void 0 ? null : _a.top) !== null && _b !== void 0 ? _b : (_c = src_utils_systemInfo.systemInfo.value) === null || _c === void 0 ? null : _c.statusBarHeight) !== null && _d !== void 0 ? _d : 0;
    });
    function handleBack() {
      common_vendor.index.navigateBack(new common_vendor.UTSJSONObject({
        success() {
          common_vendor.index.__f__("log", "at src/components/NavBar/NavBar.uvue:86", "返回成功");
        },
        fail() {
          common_vendor.index.switchTab({
            url: "/src/pages/index/index"
          });
        }
      }));
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = common_vendor.e({
        a: `${statusBarHeight.value}px`,
        b: __props.showBack
      }, __props.showBack ? {
        c: __props.titleColor
      } : {}, {
        d: common_vendor.o(handleBack, "9c"),
        e: common_vendor.t(__props.title),
        f: __props.titleColor,
        g: common_vendor.n(__props.fixed ? "navbar-container navbar-fixed" : "navbar-container"),
        h: __props.bgColor,
        i: __props.border ? "1px solid #e2e8f0" : "none",
        j: __props.fixed && __props.placeholder
      }, __props.fixed && __props.placeholder ? {
        k: `${statusBarHeight.value + 44}px`
      } : {}, {
        l: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        m: `${_ctx.u_s_b_h}px`,
        n: `${_ctx.u_s_a_i_b}px`,
        o: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      });
      return __returned__;
    };
  }
});
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/src/components/NavBar/NavBar.js.map
