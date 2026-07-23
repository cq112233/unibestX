"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_components_upSlider_props = require("./props.js");
const uni_modules_uviewUltra_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewUltra_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
class barStyleType extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          width: { type: String, optional: false },
          transition: { type: String, optional: true }
        };
      },
      name: "barStyleType"
    };
  }
  constructor(options, metadata = barStyleType.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.width = this.__props__.width;
    this.transition = this.__props__.transition;
    delete this.__props__;
  }
}
class sliderRectType extends common_vendor.UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          left: { type: Number, optional: false },
          width: { type: Number, optional: false }
        };
      },
      name: "sliderRectType"
    };
  }
  constructor(options, metadata = sliderRectType.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = common_vendor.UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.left = this.__props__.left;
    this.width = this.__props__.width;
    delete this.__props__;
  }
}
const _sfc_main = common_vendor.defineComponent({
  name: "up-slider",
  mixins: [uni_modules_uviewUltra_libs_mixin_mpMixin.mpMixin, uni_modules_uviewUltra_libs_mixin_mixin.mixin, uni_modules_uviewUltra_components_upSlider_props.propsSlider],
  emits: ["start", "changing", "change", "update:modelValue"],
  data() {
    return {
      startX: 0,
      status: "end",
      newValue: 0,
      distanceX: 0,
      startValue0: 0,
      startValue: 0,
      barStyle0: new barStyleType({
        transition: null,
        width: "0px"
      }),
      barStyle: new barStyleType({
        width: "0px",
        transition: ""
      }),
      sliderRect: new sliderRectType({
        left: 0,
        width: 0
      })
    };
  },
  watch: {
    modelValue(n) {
      if (this.status == "end") {
        const $crtFmtValue = this.updateValue(this.modelValue, false);
        this.$emit("change", $crtFmtValue);
      }
    },
    rangeValue: {
      handler(n) {
        if (this.status == "end") {
          this.updateValue(n[0], false, 0);
          this.updateValue(n[1], false, 1);
          this.$emit("change", n);
        }
      },
      deep: true
    }
  },
  created() {
  },
  computed: {
    innerStyleCpu() {
      let style = this.innerStyle;
      style["height"] = this.isRange && this.showValue ? (parseFloat(uni_modules_uviewUltra_libs_function_index.getPx(this.blockSize)) + 24).toString() + "px" : uni_modules_uviewUltra_libs_function_index.getPx(this.blockSize) + "px";
      return style;
    },
    blockStyleCpu() {
      let style = new UTSJSONObject({});
      const blockStyle = this.blockStyle;
      if (blockStyle != null) {
        Object.assign(style, blockStyle);
      }
      style["height"] = this.getPx(this.blockSize, true);
      style["width"] = this.getPx(this.blockSize, true);
      style["backgroundColor"] = this.blockColor;
      return style;
    },
    gapStyleCpu() {
      let style = new UTSJSONObject({});
      style["width"] = this.barStyle.width;
      style["transition"] = this.barStyle.transition;
      style["height"] = this.height;
      style["marginTop"] = "-" + this.height;
      if (this.activeColor !== "#2979ff") {
        style["backgroundColor"] = this.activeColor;
      }
      return style;
    }
  },
  mounted() {
    if (!this.useNative) {
      this.upGetRect(".up-slider__base").then((rect) => {
        var _a, _b;
        this.sliderRect.width = (_a = rect.width) !== null && _a !== void 0 ? _a : 0;
        this.sliderRect.left = (_b = rect.left) !== null && _b !== void 0 ? _b : 0;
        if (this.sliderRect.width == 0) {
          common_vendor.index.__f__("info", "at uni_modules/uview-ultra/components/up-slider/up-slider.uvue:219", "如在弹窗等元素中使用，请使用v-if来显示滑块，否则无法计算长度。");
        }
        this.init();
      });
    }
  },
  methods: {
    addStyle(e = null) {
      return uni_modules_uviewUltra_libs_function_index.addStyle(e);
    },
    getPx(e = null, s = false) {
      return uni_modules_uviewUltra_libs_function_index.getPx(e, s);
    },
    init() {
      if (this.isRange) {
        this.updateValue(parseFloat(this.rangeValue[0].toString()), false, 0);
        this.updateValue(parseFloat(this.rangeValue[1].toString()), false, 1);
      } else {
        this.updateValue(this.modelValue, false);
      }
    },
    // native拖动过程中触发
    changingHandler(e) {
      const value = e.detail.value;
      this.$emit("update:modelValue", value);
      this.$emit("changing", value);
    },
    // native滑动结束时触发
    changeHandler(e) {
      const value = e.detail.value;
      this.$emit("update:modelValue", value);
      this.$emit("change", value);
    },
    onTouchStart(e = null, index = 1) {
      let event = e;
      if (this.disabled)
        return null;
      this.startX = 0;
      let touches = event.touches[0];
      this.startX = touches.clientX;
      if (this.isRange) {
        this.startValue0 = this.format(parseFloat(this.rangeValue[0].toString()), 0);
        this.startValue = this.format(parseFloat(this.rangeValue[1].toString()), 1);
      } else {
        this.startValue = this.format(this.modelValue);
      }
      this.status = "start";
      let clientX = 0;
      clientX = touches.clientX;
      this.distanceX = clientX - this.sliderRect.left;
      this.newValue = this.distanceX / this.sliderRect.width * (parseFloat(this.max.toString()) - parseFloat(this.min.toString())) + parseFloat(this.min.toString());
      this.status = "moving";
      let $crtFmtValue = this.updateValue(this.newValue, true, index);
      this.$emit("changing", $crtFmtValue);
    },
    onTouchMove(e = null, index = 1) {
      let event = e;
      if (this.disabled)
        return null;
      if (this.status == "start")
        this.$emit("start");
      let touches = event.touches[0];
      let clientX = 0;
      clientX = touches.clientX;
      this.distanceX = clientX - this.sliderRect.left;
      this.newValue = this.distanceX / this.sliderRect.width * (parseFloat(this.max.toString()) - parseFloat(this.min.toString())) + parseFloat(this.min.toString());
      this.status = "moving";
      let crtFmtValue = this.updateValue(this.newValue, true, index);
      this.$emit("changing", crtFmtValue);
    },
    onTouchEnd(e = null, index = 1) {
      if (this.disabled)
        return null;
      if (this.status === "moving") {
        let $crtFmtValue = this.updateValue(this.newValue, false, index);
        this.$emit("change", $crtFmtValue);
      }
      this.status = "end";
    },
    onTouchStart2(e = null, index = 1) {
      if (!this.isRange)
        ;
    },
    onTouchMove2(e = null, index = 1) {
      if (!this.isRange)
        ;
    },
    onTouchEnd2(e = null, index = 1) {
      if (!this.isRange)
        ;
    },
    onClick(event) {
      if (this.disabled)
        return null;
      let clientX = event.x - this.sliderRect.left;
      this.newValue = clientX / this.sliderRect.width * (parseFloat(this.max.toString()) - parseFloat(this.min.toString())) + parseFloat(this.min.toString());
      this.updateValue(this.newValue, false, 1);
    },
    updateValue(value, drag, index = 1) {
      let valueFormat = this.format(value, index);
      if (valueFormat > parseFloat(this.max.toString())) {
        valueFormat = parseFloat(this.max.toString());
      }
      let width = Math.min((valueFormat - parseFloat(this.min.toString())) / (parseFloat(this.max.toString()) - parseFloat(this.min.toString())) * this.sliderRect.width, this.sliderRect.width);
      let barStyle = new barStyleType({
        transition: null,
        width: width.toString() + "px"
      });
      if (drag == true) {
        barStyle["transition"] = "none";
      } else {
        barStyle["transition"] = "";
      }
      if (this.isRange) {
        this.rangeValue[index] = valueFormat;
        this.$emit("update:modelValue", this.rangeValue);
      } else {
        this.$emit("update:modelValue", valueFormat);
      }
      switch (index) {
        case 0:
          this.barStyle0.width = barStyle.width;
          break;
        case 1:
          this.barStyle.width = barStyle.width;
          break;
      }
      if (this.isRange) {
        return this.rangeValue;
      } else {
        return valueFormat;
      }
    },
    format(value, index = 1) {
      if (this.isRange) {
        switch (index) {
          case 0:
            return Math.round(
              // @ts-ignore
              Math.max(parseFloat(this.min.toString()), Math.min(value, parseFloat(this.rangeValue[1].toString()) - parseFloat(this.step.toString()), parseFloat(this.max.toString()))) / parseFloat(this.step.toString())
              // @ts-ignore
            ) * parseInt(this.step.toString());
          case 1:
            return Math.round(
              // @ts-ignore
              Math.max(parseFloat(this.min.toString()), parseFloat(this.rangeValue[0].toString()) + parseFloat(this.step.toString()), Math.min(value, parseFloat(this.max.toString()))) / parseFloat(this.step.toString())
              // @ts-ignore
            ) * parseFloat(this.step.toString());
        }
      } else {
        return Math.round(
          // @ts-ignore
          Math.max(parseFloat(this.min.toString()), Math.min(value, parseFloat(this.max.toString()))) / parseFloat(this.step.toString())
          // @ts-ignore
        ) * parseFloat(this.step.toString());
      }
      return 0;
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  "raw js";
  return common_vendor.e({
    a: !_ctx.useNative || _ctx.isRange
  }, !_ctx.useNative || _ctx.isRange ? common_vendor.e({
    b: common_vendor.sei("r0-66aa6fc7", "view", "up-slider__base"),
    c: _ctx.height,
    d: _ctx.inactiveColor,
    e: common_vendor.o((...args) => $options.onClick && $options.onClick(...args), "9d"),
    f: common_vendor.s($options.gapStyleCpu),
    g: _ctx.isRange
  }, _ctx.isRange ? {
    h: $data.barStyle0.width,
    i: $data.barStyle0.transition,
    j: _ctx.height,
    k: "-" + _ctx.height,
    l: _ctx.inactiveColor
  } : {}, {
    m: _ctx.isRange && _ctx.showValue
  }, _ctx.isRange && _ctx.showValue ? {
    n: common_vendor.t(this.rangeValue[0] ?? ""),
    o: parseFloat($options.getPx($data.barStyle0.width)) + parseFloat($options.getPx(_ctx.blockSize)) / 2 + "px"
  } : {}, {
    p: _ctx.isRange && _ctx.showValue
  }, _ctx.isRange && _ctx.showValue ? {
    q: common_vendor.t(this.rangeValue[1] ?? ""),
    r: parseFloat($options.getPx($data.barStyle.width)) + parseFloat($options.getPx(_ctx.blockSize)) / 2 + "px"
  } : {}, {
    s: _ctx.isRange
  }, _ctx.isRange ? common_vendor.e({
    t: _ctx.$slots["min"] != null || _ctx.$slots["$min"] != null
  }, _ctx.$slots["min"] != null || _ctx.$slots["$min"] != null ? {} : {
    v: common_vendor.s($options.blockStyleCpu)
  }, {
    w: common_vendor.o(($event) => $options.onTouchStart($event, 0), "67"),
    x: common_vendor.o(($event) => $options.onTouchMove($event, 0), "95"),
    y: common_vendor.o(($event) => $options.onTouchEnd($event, 0), "57"),
    z: common_vendor.o(($event) => $options.onTouchEnd($event, 0), "01"),
    A: (parseFloat($options.getPx($data.barStyle0.width)) + parseFloat($options.getPx(_ctx.blockSize)) / 2).toString() + "px"
  }) : {}, {
    B: _ctx.isRange && (_ctx.$slots["max"] != null || _ctx.$slots["$max"] != null)
  }, _ctx.isRange && (_ctx.$slots["max"] != null || _ctx.$slots["$max"] != null) ? {} : _ctx.$slots["default"] != null || _ctx.$slots["$default"] != null ? {} : {
    D: common_vendor.s($options.blockStyleCpu)
  }, {
    C: _ctx.$slots["default"] != null || _ctx.$slots["$default"] != null,
    E: common_vendor.o(($event) => $options.onTouchStart($event), "9b"),
    F: common_vendor.o(($event) => $options.onTouchMove($event), "d5"),
    G: common_vendor.o(($event) => $options.onTouchEnd($event), "14"),
    H: common_vendor.o(($event) => $options.onTouchEnd($event), "aa"),
    I: parseFloat($options.getPx($data.barStyle.width)) + parseFloat($options.getPx(_ctx.blockSize)) / 2 + "px",
    J: common_vendor.sei("r1-66aa6fc7", "view", "up-slider-inner"),
    K: common_vendor.o((...args) => $options.onClick && $options.onClick(...args), "75"),
    L: common_vendor.o(($event) => $options.onTouchStart2($event, 1), "ce"),
    M: common_vendor.o(($event) => $options.onTouchMove2($event, 1), "37"),
    N: common_vendor.o(($event) => $options.onTouchEnd2($event, 1), "9f"),
    O: common_vendor.o(($event) => $options.onTouchEnd2($event, 1), "5c"),
    P: common_vendor.n(_ctx.disabled ? "up-slider--disabled" : ""),
    Q: common_vendor.s($options.innerStyleCpu),
    R: _ctx.showValue && !_ctx.isRange
  }, _ctx.showValue && !_ctx.isRange ? {
    S: common_vendor.t(_ctx.modelValue)
  } : {}) : {
    T: _ctx.min,
    U: _ctx.max,
    V: _ctx.step,
    W: _ctx.modelValue,
    X: _ctx.activeColor,
    Y: _ctx.inactiveColor,
    Z: $options.getPx(_ctx.blockSize),
    aa: _ctx.blockColor,
    ab: _ctx.showValue,
    ac: _ctx.disabled,
    ad: common_vendor.o((...args) => $options.changingHandler && $options.changingHandler(...args), "f6"),
    ae: common_vendor.o((...args) => $options.changeHandler && $options.changeHandler(...args), "dd")
  }, {
    af: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
    ag: common_vendor.s($options.addStyle(_ctx.customStyle)),
    ah: common_vendor.s({
      "--status-bar-height": `${_ctx.u_s_b_h}px`,
      "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
    }),
    ai: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-66aa6fc7"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-slider/up-slider.js.map
