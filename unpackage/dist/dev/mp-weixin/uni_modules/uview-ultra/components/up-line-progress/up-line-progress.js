"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-line-progress"
}, { __name: "up-line-progress", props: {
  activeColor: {
    type: String,
    default: "#19be6b"
  },
  inactiveColor: {
    type: String,
    default: "#ececec"
  },
  percentage: {
    type: [String, Number],
    default: 0
  },
  showText: {
    type: Boolean,
    default: true
  },
  height: {
    type: [String, Number],
    default: 12
  },
  customStyle: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  }
}, setup(__props) {
  function normalizeNumber(value = null, defaultValue = 0) {
    if (typeof value === "number") {
      return value;
    }
    if (value == null) {
      return defaultValue;
    }
    const parsed = parseFloat(value.toString());
    return isNaN(parsed) ? defaultValue : parsed;
  }
  const props = __props;
  const instance = common_vendor.getCurrentInstance();
  const lineWidth = common_vendor.ref("0px");
  const percentageValue = common_vendor.computed(() => {
    return normalizeNumber(props.percentage, 0);
  });
  const innerPercentage = common_vendor.computed(() => {
    return uni_modules_uviewUltra_libs_function_index.range(0, 100, percentageValue.value);
  });
  const backgroundStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      backgroundColor: props.inactiveColor,
      height: uni_modules_uviewUltra_libs_function_index.addUnit(props.height)
    });
  });
  const progressStyle = common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      width: lineWidth.value,
      backgroundColor: props.activeColor,
      height: uni_modules_uviewUltra_libs_function_index.addUnit(props.height)
    });
  });
  const customLineProgressStyle = common_vendor.computed(() => {
    return uni_modules_uviewUltra_libs_function_index.addStyle(props.customStyle);
  });
  function resizeProgressWidth() {
    uni_modules_uviewUltra_libs_function_index.upGetRect(".up-line-progress__background", false, instance === null || instance === void 0 ? null : instance.proxy).then((size) => {
      const width = size.width != null ? size.width : 0;
      lineWidth.value = (width * innerPercentage.value / 100).toString() + "px";
    });
  }
  function init() {
    uni_modules_uviewUltra_libs_function_index.sleep(20).then(() => {
      resizeProgressWidth();
    });
  }
  common_vendor.watch(() => {
    return props.percentage;
  }, () => {
    resizeProgressWidth();
  });
  common_vendor.watch(() => {
    return props.height;
  }, () => {
    resizeProgressWidth();
  });
  common_vendor.onMounted(() => {
    init();
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: common_vendor.s(backgroundStyle.value),
      b: __props.showText && percentageValue.value >= 10
    }, __props.showText && percentageValue.value >= 10 ? {
      c: common_vendor.t(innerPercentage.value + "%")
    } : {}, {
      d: common_vendor.s(progressStyle.value),
      e: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      f: common_vendor.s(customLineProgressStyle.value),
      g: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      h: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7fd0b3d0"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-line-progress/up-line-progress.js.map
