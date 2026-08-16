"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
if (!Array) {
  const _easycom_up_status_bar_1 = common_vendor.resolveComponent("up-status-bar");
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  (_easycom_up_status_bar_1 + _easycom_up_icon_1)();
}
const _easycom_up_status_bar = () => "../up-status-bar/up-status-bar.js";
const _easycom_up_icon = () => "../up-icon/up-icon.js";
if (!Math) {
  (_easycom_up_status_bar + _easycom_up_icon)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-navbar"
}, { __name: "up-navbar", props: {
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
  border: {
    type: Boolean,
    default: false
  },
  leftIcon: {
    type: String,
    default: "arrow-left"
  },
  leftText: {
    type: String,
    default: ""
  },
  rightText: {
    type: String,
    default: ""
  },
  rightIcon: {
    type: String,
    default: ""
  },
  title: {
    type: String,
    default: ""
  },
  bgColor: {
    type: String,
    default: "#ffffff"
  },
  titleWidth: {
    type: [String, Number],
    default: "400rpx"
  },
  height: {
    type: [String, Number],
    default: "44px"
  },
  leftIconSize: {
    type: [String, Number],
    default: 20
  },
  leftIconColor: {
    type: String,
    default: "#303133"
  },
  autoBack: {
    type: Boolean,
    default: false
  },
  titleStyle: {
    type: [Object, String],
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  },
  customClass: {
    type: String,
    default: ""
  }
}, emits: ["leftClick", "rightClick"], setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const placeholderHeight = common_vendor.computed(() => {
    const statusBarHeight = common_vendor.index.getSystemInfoSync().statusBarHeight;
    return uni_modules_uviewUltra_libs_function_index.addUnit(parseInt(uni_modules_uviewUltra_libs_function_index.getPx(props.height)) + statusBarHeight, "px");
  });
  function leftClick() {
    emit("leftClick");
    if (props.autoBack) {
      common_vendor.index.navigateBack();
    }
  }
  function rightClick() {
    emit("rightClick");
  }
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: __props.fixed && __props.placeholder
    }, __props.fixed && __props.placeholder ? {
      b: placeholderHeight.value
    } : {}, {
      c: __props.safeAreaInsetTop
    }, __props.safeAreaInsetTop ? {
      d: common_vendor.p({
        bgColor: __props.bgColor,
        class: "data-v-61ef0705"
      })
    } : {}, {
      e: __props.leftIcon != ""
    }, __props.leftIcon != "" ? {
      f: common_vendor.p({
        name: __props.leftIcon,
        size: __props.leftIconSize,
        color: __props.leftIconColor,
        class: "data-v-61ef0705"
      })
    } : {}, {
      g: __props.leftText != ""
    }, __props.leftText != "" ? {
      h: common_vendor.t(__props.leftText),
      i: __props.leftIconColor
    } : {}, {
      j: common_vendor.o(leftClick, "81"),
      k: common_vendor.t(__props.title),
      l: common_vendor.s({
        width: common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addUnit)(__props.titleWidth)
      }),
      m: common_vendor.s(common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addStyle)(__props.titleStyle)),
      n: _ctx.$slots["right"] != null || __props.rightIcon != "" || __props.rightText != ""
    }, _ctx.$slots["right"] != null || __props.rightIcon != "" || __props.rightText != "" ? common_vendor.e({
      o: __props.rightIcon != ""
    }, __props.rightIcon != "" ? {
      p: common_vendor.p({
        name: __props.rightIcon,
        size: "20",
        class: "data-v-61ef0705"
      })
    } : {}, {
      q: __props.rightText != ""
    }, __props.rightText != "" ? {
      r: common_vendor.t(__props.rightText)
    } : {}, {
      s: common_vendor.o(rightClick, "38")
    }) : {}, {
      t: common_vendor.n(__props.border ? "up-border-bottom" : ""),
      v: common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addUnit)(__props.height),
      w: __props.bgColor,
      x: common_vendor.n(__props.fixed ? "up-navbar--fixed" : ""),
      y: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      z: common_vendor.n(__props.customClass),
      A: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      B: `${_ctx.u_s_b_h}px`,
      C: `${_ctx.u_s_a_i_b}px`
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-61ef0705"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-navbar/up-navbar.js.map
