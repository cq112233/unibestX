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
    fixed: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: Boolean,
      default: true
    },
    showBack: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    const statusBarHeight = common_vendor.computed(() => {
      const insets = src_utils_systemInfo.safeAreaInsets.value;
      if (insets != null && insets.top > 0) {
        return insets.top;
      }
      const info = src_utils_systemInfo.systemInfo.value;
      if (info != null && info.statusBarHeight > 0) {
        return info.statusBarHeight;
      }
      return 0;
    });
    function handleBack() {
      const pages = getCurrentPages();
      if (pages.length > 1) {
        common_vendor.index.navigateBack(new common_vendor.UTSJSONObject({
          delta: 1
        }));
      } else {
        common_vendor.index.reLaunch({
          url: "/src/pages/index/index"
        });
      }
    }
    return (_ctx, _cache) => {
      "raw js";
      const __returned__ = common_vendor.e({
        a: `${statusBarHeight.value}px`,
        b: __props.showBack
      }, __props.showBack ? {
        c: __props.titleColor,
        d: __props.titleColor
      } : {}, {
        e: common_vendor.o(handleBack, "89"),
        f: common_vendor.t(__props.title),
        g: __props.titleColor,
        h: common_vendor.n(__props.fixed ? "navbar-container navbar-fixed" : "navbar-container"),
        i: __props.bgColor,
        j: __props.border ? "1px" : "0px",
        k: __props.border ? "solid" : "none",
        l: __props.border ? "#e2e8f0" : "transparent",
        m: __props.fixed && __props.placeholder
      }, __props.fixed && __props.placeholder ? {
        n: `${statusBarHeight.value + 44}px`
      } : {}, {
        o: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
        p: `${_ctx.u_s_b_h}px`,
        q: `${_ctx.u_s_a_i_b}px`,
        r: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
      });
      return __returned__;
    };
  }
});
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/src/components/NavBar/NavBar.js.map
