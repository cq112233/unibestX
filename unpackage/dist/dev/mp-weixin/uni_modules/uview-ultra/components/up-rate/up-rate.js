"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
if (!Array) {
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  _easycom_up_icon_1();
}
const _easycom_up_icon = () => "../up-icon/up-icon.js";
if (!Math) {
  _easycom_up_icon();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-rate"
}, { __name: "up-rate", props: {
  modelValue: {
    type: [String, Number],
    default: 1
  },
  count: {
    type: [String, Number],
    default: 5
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  size: {
    type: [String, Number],
    default: 18
  },
  inactiveColor: {
    type: String,
    default: "#b2b2b2"
  },
  activeColor: {
    type: String,
    default: "#FA3534"
  },
  gutter: {
    type: [String, Number],
    default: 4
  },
  minCount: {
    type: [String, Number],
    default: 1
  },
  allowHalf: {
    type: Boolean,
    default: false
  },
  activeIcon: {
    type: String,
    default: "star-fill"
  },
  inactiveIcon: {
    type: String,
    default: "star"
  },
  touchable: {
    type: Boolean,
    default: true
  },
  customStyle: {
    type: Object,
    default: () => {
      return new common_vendor.UTSJSONObject({});
    }
  }
}, emits: ["update:modelValue", "change"], setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const instance = common_vendor.getCurrentInstance();
  const elId = common_vendor.ref(uni_modules_uviewUltra_libs_function_index.guid());
  const elClass = common_vendor.ref(uni_modules_uviewUltra_libs_function_index.guid());
  const rateBoxLeft = common_vendor.ref(0);
  const activeIndex = common_vendor.ref(0);
  const rateWidth = common_vendor.ref(0);
  const moving = common_vendor.ref(false);
  function toNumber(value = null, fallback = 0) {
    if (value == null)
      return fallback;
    const num = parseFloat(value.toString());
    return isNaN(num) ? fallback : num;
  }
  function getMinCountValue() {
    return toNumber(props.minCount, 0);
  }
  function getCountValue() {
    return toNumber(props.count, 0);
  }
  function normalizeActiveIndex(value = null) {
    let normalized = toNumber(value, getMinCountValue());
    const minCount = getMinCountValue();
    const count = getCountValue();
    if (normalized < minCount)
      normalized = minCount;
    if (count > 0 && normalized > count)
      normalized = count;
    return normalized;
  }
  function getFallbackRateWidth() {
    const size = toNumber(props.size, 18);
    const gutter = toNumber(props.gutter, 0);
    const width = size + gutter;
    return width > 0 ? width : 18;
  }
  function ensureRateMetrics() {
    if (isNaN(rateBoxLeft.value)) {
      rateBoxLeft.value = 0;
    }
    if (isNaN(rateWidth.value) || rateWidth.value <= 0) {
      rateWidth.value = getFallbackRateWidth();
      getRateIconWrapRect();
    }
    return !isNaN(rateWidth.value) && rateWidth.value > 0;
  }
  function getRateItemRect() {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      yield uni_modules_uviewUltra_libs_function_index.sleep();
      uni_modules_uviewUltra_libs_function_index.upGetRect("#" + elId.value, false, instance === null || instance === void 0 ? null : instance.proxy).then((res) => {
        var _a2;
        const left = (_a2 = res.left) !== null && _a2 !== void 0 ? _a2 : NaN;
        if (!isNaN(left)) {
          rateBoxLeft.value = left;
        }
      });
    });
  }
  function getRateIconWrapRect() {
    uni_modules_uviewUltra_libs_function_index.upGetRect("." + elClass.value, false, instance === null || instance === void 0 ? null : instance.proxy).then((res) => {
      var _a2;
      const width = (_a2 = res.width) !== null && _a2 !== void 0 ? _a2 : NaN;
      if (!isNaN(width) && width > 0) {
        rateWidth.value = width;
      }
    });
  }
  function emitEvent() {
    const normalizedValue = normalizeActiveIndex(activeIndex.value);
    if (normalizedValue != activeIndex.value) {
      activeIndex.value = normalizedValue;
      return null;
    }
    emit("change", normalizedValue);
    emit("update:modelValue", normalizedValue);
  }
  function getActiveIndex(x, isClick = false) {
    if (props.disabled || props.readonly) {
      return null;
    }
    if (!ensureRateMetrics()) {
      return null;
    }
    const count = getCountValue();
    if (count <= 0 || isNaN(x)) {
      return null;
    }
    const allRateWidth = rateWidth.value * count + rateBoxLeft.value;
    x = uni_modules_uviewUltra_libs_function_index.range(rateBoxLeft.value, allRateWidth, x) - rateBoxLeft.value;
    const distance = x;
    let index = 0;
    if (props.allowHalf) {
      index = Math.floor(distance / rateWidth.value);
      const decimal = distance % rateWidth.value;
      if (decimal <= rateWidth.value / 2 && decimal > 0) {
        index += 0.5;
      } else if (decimal > rateWidth.value / 2) {
        index++;
      }
    } else {
      index = Math.floor(distance / rateWidth.value);
      const decimal = distance % rateWidth.value;
      if (isClick) {
        if (decimal > 0)
          index++;
      } else {
        if (decimal > rateWidth.value / 2)
          index++;
      }
    }
    activeIndex.value = normalizeActiveIndex(Math.min(index, count));
    if (activeIndex.value < getMinCountValue()) {
      activeIndex.value = getMinCountValue();
    }
    emitEvent();
    setTimeout(() => {
      moving.value = true;
    }, 10);
    setTimeout(() => {
      moving.value = false;
    }, 10);
  }
  function touchMove(e) {
    if (!props.touchable)
      return null;
    ensureRateMetrics();
    const x = e.changedTouches[0].pageX;
    getActiveIndex(x);
  }
  function touchEnd(e) {
    if (!props.touchable)
      return null;
    ensureRateMetrics();
    const x = e.changedTouches[0].pageX;
    getActiveIndex(x);
  }
  function clickHandler(e = null, index) {
    const ee = e;
    if (uni_modules_uviewUltra_libs_function_index.os() === "ios" && moving.value) {
      return null;
    }
    ensureRateMetrics();
    const x = ee.pageX;
    getActiveIndex(x, true);
  }
  function init() {
    const modelVal = props.modelValue == null ? 0 : parseFloat(props.modelValue.toString());
    const minCount = props.minCount == null ? 0 : parseFloat(props.minCount.toString());
    const defaultActive = isNaN(minCount) ? 0 : minCount;
    activeIndex.value = isNaN(modelVal) ? defaultActive : modelVal == 0 ? defaultActive : modelVal;
    uni_modules_uviewUltra_libs_function_index.sleep().then(() => {
      getRateItemRect();
      getRateIconWrapRect();
    });
  }
  common_vendor.watch(() => {
    return props.modelValue;
  }, (val = null) => {
    activeIndex.value = normalizeActiveIndex(val);
  });
  common_vendor.onMounted(() => {
    init();
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = {
      a: common_vendor.f(parseInt(__props.count.toString()), (_, index, i0) => {
        return common_vendor.e({
          a: "4cf7af75-0-" + i0,
          b: common_vendor.p({
            name: Math.floor(parseFloat(activeIndex.value.toString())) > index ? __props.activeIcon : __props.inactiveIcon,
            color: __props.disabled ? "#c8c9cc" : Math.floor(parseFloat(activeIndex.value.toString())) > index ? __props.activeColor === "#FA3534" ? "primary" : __props.activeColor : __props.inactiveColor,
            ["custom-style"]: {
              padding: `0 ${common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addUnit)(parseInt(__props.gutter.toString()) / 2)}`
            },
            size: __props.size,
            class: "data-v-4cf7af75"
          }),
          c: common_vendor.o(($event) => {
            return clickHandler($event);
          }, index)
        }, __props.allowHalf ? {
          d: "4cf7af75-1-" + i0,
          e: common_vendor.p({
            name: Math.floor(parseFloat(activeIndex.value.toString())) > index ? __props.activeIcon : __props.inactiveIcon,
            color: __props.disabled ? "#c8c9cc" : Math.ceil(parseFloat(activeIndex.value.toString())) > index ? __props.activeColor === "#FA3534" ? "primary" : __props.activeColor : __props.inactiveColor,
            ["custom-style"]: {
              padding: `0 ${common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addUnit)(parseInt(__props.gutter.toString()) / 2)}`
            },
            size: __props.size,
            class: "data-v-4cf7af75"
          }),
          f: common_vendor.o(($event) => {
            return clickHandler($event);
          }, index),
          g: common_vendor.s({
            width: common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addUnit)(rateWidth.value / 2)
          })
        } : {}, {
          h: index
        });
      }),
      b: __props.allowHalf,
      c: common_vendor.n(elClass.value),
      d: common_vendor.o(touchMove, "df"),
      e: common_vendor.o(touchEnd, "00"),
      f: common_vendor.sei(common_vendor.gei(_ctx, elId.value), "view"),
      g: common_vendor.s(common_vendor.unref(uni_modules_uviewUltra_libs_function_index.addStyle)(__props.customStyle)),
      h: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      i: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    };
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4cf7af75"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-rate/up-rate.js.map
