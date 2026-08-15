"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
if (!Array) {
  const _easycom_up_status_bar_1 = common_vendor.resolveComponent("up-status-bar");
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_line_1 = common_vendor.resolveComponent("up-line");
  (_easycom_up_status_bar_1 + _easycom_up_icon_1 + _easycom_up_line_1)();
}
const _easycom_up_status_bar = () => "../up-status-bar/up-status-bar.js";
const _easycom_up_icon = () => "../up-icon/up-icon.js";
const _easycom_up_line = () => "../up-line/up-line.js";
if (!Math) {
  (_easycom_up_status_bar + _easycom_up_icon + _easycom_up_line)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-navbar-mini"
}, { __name: "up-navbar-mini", props: {
  safeAreaInsetTop: {
    type: Boolean,
    default: true
  },
  placeholder: {
    type: Boolean,
    default: false
  },
  fixed: {
    type: Boolean,
    default: false
  },
  leftIcon: {
    type: String,
    default: "arrow-left"
  },
  bgColor: {
    type: String,
    default: "#ffffff"
  },
  height: {
    type: [String, Number],
    default: "44px"
  },
  iconSize: {
    type: [String, Number],
    default: "20px"
  },
  iconColor: {
    type: String,
    default: "#303133"
  },
  autoBack: {
    type: Boolean,
    default: false
  },
  homeUrl: {
    type: String,
    default: ""
  },
  customClass: {
    type: String,
    default: ""
  }
}, emits: ["leftClick", "homeClick"], setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const contentStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      height: uni_modules_uviewUltra_libs_function_index.addUnit(props.height),
      backgroundColor: props.bgColor
    });
  });
  function leftClick() {
    emit("leftClick");
    if (props.autoBack) {
      common_vendor.index.navigateBack();
    }
  }
  function homeClick() {
    emit("homeClick");
    if (props.homeUrl != "") {
      common_vendor.index.reLaunch({ url: props.homeUrl });
    }
  }
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: __props.safeAreaInsetTop
    }, __props.safeAreaInsetTop ? {
      b: common_vendor.p({
        class: "data-v-d5a87088"
      })
    } : {}, {
      c: common_vendor.p({
        name: __props.leftIcon,
        size: __props.iconSize,
        color: __props.iconColor,
        class: "data-v-d5a87088"
      }),
      d: common_vendor.o(leftClick, "4d"),
      e: common_vendor.p({
        direction: "col",
        color: "#fff",
        length: "16px",
        class: "data-v-d5a87088"
      }),
      f: common_vendor.p({
        name: "home",
        size: __props.iconSize,
        color: __props.iconColor,
        class: "data-v-d5a87088"
      }),
      g: common_vendor.o(homeClick, "cf"),
      h: common_vendor.s(contentStyle.value),
      i: common_vendor.n(__props.fixed ? "up-navbar-mini--fixed" : ""),
      j: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      k: common_vendor.n(__props.customClass),
      l: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      m: `${_ctx.u_s_b_h}px`,
      n: `${_ctx.u_s_a_i_b}px`
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d5a87088"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-navbar-mini/up-navbar-mini.js.map
