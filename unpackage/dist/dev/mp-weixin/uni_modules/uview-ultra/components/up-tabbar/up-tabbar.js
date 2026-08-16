"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
if (!Array) {
  const _easycom_up_safe_bottom_1 = common_vendor.resolveComponent("up-safe-bottom");
  _easycom_up_safe_bottom_1();
}
const _easycom_up_safe_bottom = () => "../up-safe-bottom/up-safe-bottom.js";
if (!Math) {
  _easycom_up_safe_bottom();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-tabbar"
}, { __name: "up-tabbar", props: {
  value: {
    type: [String, Number, null],
    default: null
  },
  safeAreaInsetBottom: {
    type: Boolean,
    default: true
  },
  border: {
    type: Boolean,
    default: true
  },
  borderColor: {
    type: String,
    default: ""
  },
  zIndex: {
    type: [String, Number],
    default: 1
  },
  activeColor: {
    type: String,
    default: "#1989fa"
  },
  inactiveColor: {
    type: String,
    default: "#7d7e80"
  },
  fixed: {
    type: Boolean,
    default: true
  },
  placeholder: {
    type: Boolean,
    default: true
  },
  backgroundColor: {
    type: String,
    default: "#ffffff"
  },
  customStyle: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  }
}, emits: ["change", "update:value"], setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const instance = common_vendor.getCurrentInstance();
  const placeholderHeight = common_vendor.ref(0);
  const tabbarStyle = common_vendor.computed(() => {
    const style = new common_vendor.UTSJSONObject({
      zIndex: props.zIndex
    });
    if (props.borderColor != "") {
      style["borderColor"] = props.borderColor + " !important";
    }
    if (props.backgroundColor != "") {
      style["backgroundColor"] = props.backgroundColor;
    }
    return uni_modules_uviewUltra_libs_function_index.deepMerge(style, uni_modules_uviewUltra_libs_function_index.addStyle(props.customStyle));
  });
  common_vendor.provide("upTabbarProps", props);
  common_vendor.provide("upTabbarChange", (name) => {
    emit("update:value", name);
    emit("change", name);
  });
  function setPlaceholderHeight() {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      if (!props.fixed || !props.placeholder)
        return Promise.resolve(null);
      yield uni_modules_uviewUltra_libs_function_index.sleep(20);
      uni_modules_uviewUltra_libs_function_index.upGetRect(".up-tabbar__content", false, instance === null || instance === void 0 ? null : instance.proxy).then((size) => {
        var _a2;
        placeholderHeight.value = (_a2 = size.height) !== null && _a2 !== void 0 ? _a2 : 50;
      });
    });
  }
  function noop() {
  }
  common_vendor.watch(() => {
    return [props.fixed, props.placeholder];
  }, () => {
    setPlaceholderHeight();
  });
  common_vendor.onMounted(() => {
    setPlaceholderHeight();
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: __props.safeAreaInsetBottom
    }, __props.safeAreaInsetBottom ? {
      b: common_vendor.p({
        class: "data-v-1a1a4fcf"
      })
    } : {}, {
      c: common_vendor.o(noop, "fc"),
      d: common_vendor.n(__props.border ? "up-border-top" : ""),
      e: common_vendor.n(__props.fixed ? "up-tabbar--fixed" : ""),
      f: common_vendor.s(tabbarStyle.value),
      g: __props.placeholder && __props.fixed
    }, __props.placeholder && __props.fixed ? {
      h: placeholderHeight.value + "px"
    } : {}, {
      i: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      j: `${_ctx.u_s_b_h}px`,
      k: `${_ctx.u_s_a_i_b}px`,
      l: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1a1a4fcf"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-tabbar/up-tabbar.js.map
