"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upRate_props = require("./props.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = common_vendor.defineComponent({
  name: "up-rate",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin, uni_modules_uviewUltra_components_upRate_props.propsRate],
  data() {
    return {
      // 生成一个唯一id，否则一个页面多个评分组件，会造成冲突
      elId: uni_modules_uviewUltra_libs_function_index.guid(),
      elClass: uni_modules_uviewUltra_libs_function_index.guid(),
      rateBoxLeft: 0,
      activeIndex: 0,
      rateWidth: 0,
      // 标识是否正在滑动，由于iOS事件上touch比click先触发，导致快速滑动结束后，接着触发click，导致事件混乱而出错
      moving: false
    };
  },
  mounted() {
    const modelVal = this.modelValue == null ? 0 : parseFloat(this.modelValue.toString());
    const minCount = this.minCount == null ? 0 : parseFloat(this.minCount.toString());
    const defaultActive = isNaN(minCount) ? 0 : minCount;
    this.activeIndex = isNaN(modelVal) ? defaultActive : modelVal == 0 ? defaultActive : modelVal;
  },
  watch: {
    modelValue(val) {
      this.activeIndex = this.normalizeActiveIndex(val);
    }
    // activeIndex: 'emitEvent'
  },
  emits: ["update:modelValue", "change"],
  methods: {
    addStyle(e = null) {
      return uni_modules_uviewUltra_libs_function_index.addStyle(e);
    },
    addUnit(e = null) {
      return uni_modules_uviewUltra_libs_function_index.addUnit(e);
    },
    toNumber(value = null, fallback = 0) {
      if (value == null)
        return fallback;
      const num = parseFloat(value.toString());
      return isNaN(num) ? fallback : num;
    },
    getMinCountValue() {
      return this.toNumber(this.minCount, 0);
    },
    getCountValue() {
      return this.toNumber(this.count, 0);
    },
    normalizeActiveIndex(value = null) {
      let normalized = this.toNumber(value, this.getMinCountValue());
      const minCount = this.getMinCountValue();
      const count = this.getCountValue();
      if (normalized < minCount)
        normalized = minCount;
      if (count > 0 && normalized > count)
        normalized = count;
      return normalized;
    },
    getFallbackRateWidth() {
      const size = this.toNumber(this.size, 18);
      const gutter = this.toNumber(this.gutter, 0);
      const width = size + gutter;
      return width > 0 ? width : 18;
    },
    ensureRateMetrics() {
      if (isNaN(this.rateBoxLeft)) {
        this.rateBoxLeft = 0;
      }
      if (isNaN(this.rateWidth) || this.rateWidth <= 0) {
        this.rateWidth = this.getFallbackRateWidth();
        this.getRateIconWrapRect();
      }
      return !isNaN(this.rateWidth) && this.rateWidth > 0;
    },
    init() {
      this.activeIndex = this.normalizeActiveIndex(this.modelValue);
      uni_modules_uviewUltra_libs_function_index.sleep().then(() => {
        this.getRateItemRect();
        this.getRateIconWrapRect();
      });
    },
    // 获取评分组件盒子的布局信息
    getRateItemRect() {
      return common_vendor.__awaiter(this, void 0, void 0, function* () {
        yield uni_modules_uviewUltra_libs_function_index.sleep();
        this.upGetRect("#" + this.elId).then((res) => {
          var _a;
          const left = (_a = res.left) !== null && _a !== void 0 ? _a : NaN;
          if (!isNaN(left)) {
            this.rateBoxLeft = left;
          }
        });
      });
    },
    // 获取单个星星的尺寸
    getRateIconWrapRect() {
      this.$uGetRect("." + this.elClass).then((res) => {
        var _a;
        const width = (_a = res.width) !== null && _a !== void 0 ? _a : NaN;
        if (!isNaN(width) && width > 0) {
          this.rateWidth = width;
        }
      });
    },
    // 手指滑动
    touchMove(e) {
      if (!this.touchable) {
        return null;
      }
      this.preventEvent(e);
      this.ensureRateMetrics();
      const x = e.changedTouches[0].pageX;
      this.getActiveIndex(x);
    },
    // 停止滑动
    touchEnd(e) {
      if (!this.touchable) {
        return null;
      }
      this.preventEvent(e);
      this.ensureRateMetrics();
      const x = e.changedTouches[0].pageX;
      this.getActiveIndex(x);
    },
    // 通过点击，直接选中
    clickHandler(e = null, index) {
      let ee = e;
      if (uni_modules_uviewUltra_libs_function_index.os() === "ios" && this.moving) {
        return null;
      }
      this.preventEvent(ee);
      this.ensureRateMetrics();
      let x = 0;
      x = ee.pageX;
      this.getActiveIndex(x, true);
    },
    // 发出事件
    emitEvent() {
      const normalizedValue = this.normalizeActiveIndex(this.activeIndex != null ? this.activeIndex : 0);
      if (this.activeIndex == null || normalizedValue != this.activeIndex) {
        this.activeIndex = normalizedValue;
        return null;
      }
      this.$emit("change", normalizedValue);
      this.$emit("update:modelValue", normalizedValue);
    },
    // 获取当前激活的评分图标
    getActiveIndex(x, isClick = false) {
      if (this.disabled || this.readonly) {
        return null;
      }
      if (!this.ensureRateMetrics()) {
        return null;
      }
      const count = this.getCountValue();
      if (count <= 0 || isNaN(x)) {
        return null;
      }
      const allRateWidth = this.rateWidth * count + this.rateBoxLeft;
      x = uni_modules_uviewUltra_libs_function_index.range(this.rateBoxLeft, allRateWidth, x) - this.rateBoxLeft;
      const distance = x;
      let index = 0;
      if (this.allowHalf) {
        index = Math.floor(distance / this.rateWidth);
        const decimal = distance % this.rateWidth;
        if (decimal <= this.rateWidth / 2 && decimal > 0) {
          index += 0.5;
        } else if (decimal > this.rateWidth / 2) {
          index++;
        }
      } else {
        index = Math.floor(distance / this.rateWidth);
        const decimal = distance % this.rateWidth;
        if (isClick) {
          if (decimal > 0)
            index++;
        } else {
          if (decimal > this.rateWidth / 2)
            index++;
        }
      }
      this.activeIndex = this.normalizeActiveIndex(Math.min(index, count));
      if (this.activeIndex < this.getMinCountValue()) {
        this.activeIndex = this.getMinCountValue();
      }
      setTimeout(() => {
        this.moving = true;
      }, 10);
      setTimeout(() => {
        this.moving = false;
      }, 10);
    }
  },
  mounted() {
    this.init();
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
  return {
    a: common_vendor.f(parseInt(_ctx.count.toString()), (item, index, i0) => {
      return common_vendor.e({
        a: "4cf7af75-0-" + i0,
        b: common_vendor.p({
          name: Math.floor(parseFloat($data.activeIndex.toString())) > index ? _ctx.activeIcon : _ctx.inactiveIcon,
          color: _ctx.disabled ? "#c8c9cc" : Math.floor(parseFloat($data.activeIndex.toString())) > index ? _ctx.activeColor === "#FA3534" ? "primary" : _ctx.activeColor : _ctx.inactiveColor,
          ["custom-style"]: {
            padding: `0 ${$options.addUnit(parseInt(_ctx.gutter.toString()) / 2)}`
          },
          size: _ctx.size,
          class: "data-v-4cf7af75"
        }),
        c: common_vendor.sei("r0-4cf7af75-" + index, "view", "up-rate__content__item__icon-wrap", {
          "f": 1
        }),
        d: common_vendor.o(($event) => $options.clickHandler($event, index + 1), index)
      }, _ctx.allowHalf ? {
        e: "4cf7af75-1-" + i0,
        f: common_vendor.p({
          name: Math.floor(parseFloat($data.activeIndex.toString())) > index ? _ctx.activeIcon : _ctx.inactiveIcon,
          color: _ctx.disabled ? "#c8c9cc" : Math.ceil(parseFloat($data.activeIndex.toString())) > index ? _ctx.activeColor === "#FA3534" ? "primary" : _ctx.activeColor : _ctx.inactiveColor,
          ["custom-style"]: {
            padding: `0 ${$options.addUnit(parseInt(_ctx.gutter.toString()) / 2)}`
          },
          size: _ctx.size,
          class: "data-v-4cf7af75"
        }),
        g: common_vendor.sei("r1-4cf7af75-" + index, "view", "up-rate__content__item__icon-wrap", {
          "f": 1
        }),
        h: common_vendor.o(($event) => $options.clickHandler($event, index + 1), index),
        i: common_vendor.s({
          width: $options.addUnit($data.rateWidth / 2)
        })
      } : {}, {
        j: index
      });
    }),
    b: _ctx.allowHalf,
    c: common_vendor.n($data.elClass),
    d: common_vendor.o((...args) => $options.touchMove && $options.touchMove(...args), "72"),
    e: common_vendor.o((...args) => $options.touchEnd && $options.touchEnd(...args), "9e"),
    f: common_vendor.sei(common_vendor.gei(_ctx, $data.elId, "r2-4cf7af75"), "view", "up-rate"),
    g: common_vendor.s($options.addStyle(_ctx.customStyle)),
    h: common_vendor.s({
      "--status-bar-height": `${_ctx.u_s_b_h}px`,
      "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
    }),
    i: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4cf7af75"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-rate/up-rate.js.map
