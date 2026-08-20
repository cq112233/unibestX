import { g as getPx, b as addStyle, u as upGetRect } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed, ref, watch, onMounted, getCurrentInstance } = globalThis.Vue;
class barStyleType extends UTS.UTSType {
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
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.width = this.__props__.width;
    this.transition = this.__props__.transition;
    delete this.__props__;
  }
}
class sliderRectType extends UTS.UTSType {
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
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.left = this.__props__.left;
    this.width = this.__props__.width;
    delete this.__props__;
  }
}
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-slider"
  },
  __name: "up-slider",
  props: {
    min: {
      type: [Number, String],
      default: 0
    },
    max: {
      type: [Number, String],
      default: 100
    },
    step: {
      type: [Number, String],
      default: 1
    },
    modelValue: {
      type: [Number],
      default: 0
    },
    isRange: {
      type: Boolean,
      default: false
    },
    rangeValue: {
      type: Array,
      default: () => {
        return [0, 0];
      }
    },
    activeColor: {
      type: String,
      default: "#2979ff"
    },
    inactiveColor: {
      type: String,
      default: "#c0c4cc"
    },
    blockSize: {
      type: [Number, String],
      default: 30
    },
    blockColor: {
      type: String,
      default: "#ffffff"
    },
    blockStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    height: {
      type: [Number, String],
      default: "6rpx"
    },
    showValue: {
      type: Boolean,
      default: false
    },
    useNative: {
      type: Boolean,
      default: false
    },
    innerStyle: {
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
  emits: ["start", "changing", "change", "update:modelValue"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const props = __props;
    const emit = __emit;
    const instance = getCurrentInstance();
    const startX = ref(0);
    const status = ref("end");
    const newValue = ref(0);
    const distanceX = ref(0);
    const startValue0 = ref(0);
    const startValue = ref(0);
    const barStyle0 = ref(new barStyleType({
      transition: null,
      width: "0px"
    }));
    const barStyle = ref(new barStyleType({
      width: "0px",
      transition: ""
    }));
    const sliderRect = ref(new sliderRectType({
      left: 0,
      width: 0
    }));
    const innerStyleCpu = computed(() => {
      var _a2;
      const style = (_a2 = props.innerStyle) !== null && _a2 !== void 0 ? _a2 : new UTSJSONObject({});
      style["height"] = props.isRange && props.showValue ? (parseFloat(getPx(props.blockSize)) + 24).toString() + "px" : getPx(props.blockSize) + "px";
      return style;
    });
    const sliderCustomStyle = computed(() => {
      return addStyle(props.customStyle);
    });
    const computedBlockSize = computed(() => {
      return parseFloat(getPx(props.blockSize));
    });
    const baseStyleCpu = computed(() => {
      return new UTSJSONObject({
        height: props.height,
        backgroundColor: props.inactiveColor
      });
    });
    const rangeGap0StyleCpu = computed(() => {
      var _a2;
      return new UTSJSONObject({
        width: barStyle0.value.width,
        transition: (_a2 = barStyle0.value.transition) !== null && _a2 !== void 0 ? _a2 : "",
        height: props.height,
        marginTop: "-" + props.height,
        backgroundColor: props.inactiveColor
      });
    });
    const blockStyleCpu = computed(() => {
      const style = new UTSJSONObject({});
      if (props.blockStyle != null) {
        UTSJSONObject.assign(style, props.blockStyle);
      }
      style["height"] = getPx(props.blockSize, true);
      style["width"] = getPx(props.blockSize, true);
      style["backgroundColor"] = props.blockColor;
      return style;
    });
    const gapStyleCpu = computed(() => {
      var _a2;
      const style = new UTSJSONObject({});
      style["width"] = barStyle.value.width;
      style["transition"] = (_a2 = barStyle.value.transition) !== null && _a2 !== void 0 ? _a2 : "";
      style["height"] = props.height;
      style["marginTop"] = "-" + props.height;
      if (props.activeColor != "#2979ff") {
        style["backgroundColor"] = props.activeColor;
      }
      return style;
    });
    const btnWrapStyle0 = computed(() => {
      const leftVal = (parseFloat(getPx(barStyle0.value.width)) + parseFloat(getPx(props.blockSize)) / 2).toString() + "px";
      return new UTSJSONObject({
        left: leftVal
      });
    });
    const btnWrapStyle1 = computed(() => {
      const leftVal = (parseFloat(getPx(barStyle.value.width)) + parseFloat(getPx(props.blockSize)) / 2).toString() + "px";
      return new UTSJSONObject({
        left: leftVal
      });
    });
    function format(value, index = 1) {
      const minVal = parseFloat(props.min.toString());
      const maxVal = parseFloat(props.max.toString());
      const stepVal = parseFloat(props.step.toString());
      if (props.isRange) {
        switch (index) {
          case 0:
            return Math.round(Math.max(minVal, Math.min(value, parseFloat(props.rangeValue[1].toString()) - stepVal, maxVal)) / stepVal) * stepVal;
          case 1:
            return Math.round(Math.max(minVal, parseFloat(props.rangeValue[0].toString()) + stepVal, Math.min(value, maxVal)) / stepVal) * stepVal;
        }
      } else {
        return Math.round(Math.max(minVal, Math.min(value, maxVal)) / stepVal) * stepVal;
      }
      return 0;
    }
    function updateValue(value, drag, index = 1) {
      let valueFormat = format(value, index);
      const maxVal = parseFloat(props.max.toString());
      const minVal = parseFloat(props.min.toString());
      if (valueFormat > maxVal) {
        valueFormat = maxVal;
      }
      const width = Math.min((valueFormat - minVal) / (maxVal - minVal) * sliderRect.value.width, sliderRect.value.width);
      const bStyle = new barStyleType({
        width: width.toString() + "px",
        transition: drag ? "none" : ""
      });
      if (props.isRange) {
        props.rangeValue[index] = valueFormat;
        emit("update:modelValue", props.rangeValue);
      } else {
        emit("update:modelValue", valueFormat);
      }
      switch (index) {
        case 0:
          barStyle0.value.width = bStyle.width;
          break;
        case 1:
          barStyle.value.width = bStyle.width;
          break;
      }
      return props.isRange ? props.rangeValue : valueFormat;
    }
    function init() {
      if (props.isRange) {
        updateValue(parseFloat(props.rangeValue[0].toString()), false, 0);
        updateValue(parseFloat(props.rangeValue[1].toString()), false, 1);
      } else {
        updateValue(props.modelValue, false, 1);
      }
    }
    function changingHandler(e) {
      const value = e.detail.value;
      emit("update:modelValue", value);
      emit("changing", value);
    }
    function changeHandler(e) {
      const value = e.detail.value;
      emit("update:modelValue", value);
      emit("change", value);
    }
    function onTouchStart(e = null, index = 1) {
      const event = e;
      if (props.disabled)
        return null;
      startX.value = 0;
      const touches = event.touches[0];
      startX.value = touches.clientX;
      if (props.isRange) {
        startValue0.value = format(parseFloat(props.rangeValue[0].toString()), 0);
        startValue.value = format(parseFloat(props.rangeValue[1].toString()), 1);
      } else {
        startValue.value = format(props.modelValue);
      }
      status.value = "start";
      let clientX = touches.clientX;
      distanceX.value = clientX - sliderRect.value.left;
      const minVal = parseFloat(props.min.toString());
      const maxVal = parseFloat(props.max.toString());
      newValue.value = distanceX.value / sliderRect.value.width * (maxVal - minVal) + minVal;
      status.value = "moving";
      const crtFmt = updateValue(newValue.value, true, index);
      emit("changing", crtFmt);
    }
    function onTouchMove(e = null, index = 1) {
      const event = e;
      if (props.disabled)
        return null;
      if (status.value == "start")
        emit("start");
      const touches = event.touches[0];
      let clientX = touches.clientX;
      distanceX.value = clientX - sliderRect.value.left;
      const minVal = parseFloat(props.min.toString());
      const maxVal = parseFloat(props.max.toString());
      newValue.value = distanceX.value / sliderRect.value.width * (maxVal - minVal) + minVal;
      status.value = "moving";
      const crtFmt = updateValue(newValue.value, true, index);
      emit("changing", crtFmt);
    }
    function onTouchEnd(e = null, index = 1) {
      if (props.disabled)
        return null;
      if (status.value === "moving") {
        const crtFmt = updateValue(newValue.value, false, index);
        emit("change", crtFmt);
      }
      status.value = "end";
    }
    function onTouchStart2(e = null, index = 1) {
    }
    function onTouchMove2(e = null, index = 1) {
    }
    function onTouchEnd2(e = null, index = 1) {
    }
    function onClick(event) {
      if (props.disabled)
        return null;
      const clientX = event.x - sliderRect.value.left;
      const minVal = parseFloat(props.min.toString());
      const maxVal = parseFloat(props.max.toString());
      newValue.value = clientX / sliderRect.value.width * (maxVal - minVal) + minVal;
      updateValue(newValue.value, false, 1);
    }
    watch(() => {
      return props.modelValue;
    }, (n) => {
      if (status.value == "end") {
        const crtFmt = updateValue(props.modelValue, false, 1);
        emit("change", crtFmt);
      }
    });
    watch(() => {
      return props.rangeValue;
    }, (n) => {
      if (status.value == "end") {
        updateValue(n[0], false, 0);
        updateValue(n[1], false, 1);
        emit("change", n);
      }
    }, { deep: true });
    onMounted(() => {
      if (!props.useNative) {
        upGetRect(".up-slider__base", false, instance === null || instance === void 0 ? null : instance.proxy).then((rect) => {
          var _a2, _b;
          sliderRect.value.width = (_a2 = rect.width) !== null && _a2 !== void 0 ? _a2 : 0;
          sliderRect.value.left = (_b = rect.left) !== null && _b !== void 0 ? _b : 0;
          init();
        });
      }
    });
    const __returned__ = { props, emit, instance, startX, status, newValue, distanceX, startValue0, startValue, barStyle0, barStyle, sliderRect, innerStyleCpu, sliderCustomStyle, computedBlockSize, baseStyleCpu, rangeGap0StyleCpu, blockStyleCpu, gapStyleCpu, btnWrapStyle0, btnWrapStyle1, format, updateValue, init, changingHandler, changeHandler, onTouchStart, onTouchMove, onTouchEnd, onTouchStart2, onTouchMove2, onTouchEnd2, onClick };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"up-slider":{"":{"position":"relative","display":"flex","flexDirection":"row","alignItems":"center"}},"up-slider__native":{"":{"flexGrow":1,"flexShrink":1,"flexBasis":"0%"}},"up-slider-inner":{"":{"flexGrow":1,"flexShrink":1,"flexBasis":"0%","display":"flex","flexDirection":"column","position":"relative","borderTopLeftRadius":999,"borderTopRightRadius":999,"borderBottomRightRadius":999,"borderBottomLeftRadius":999,"paddingTop":10,"paddingRight":18,"paddingBottom":10,"paddingLeft":18,"justifyContent":"center"}},"up-slider__show-value":{"":{"marginTop":10,"marginRight":18,"marginBottom":10,"marginLeft":0}},"up-slider__show-range-value":{"":{"paddingTop":2,"fontSize":12,"lineHeight":"12px","position":"absolute","bottom":0}},"up-slider__base":{"":{"backgroundColor":"#ebedf0"}},"up-slider__gap":{"":{"position":"relative","borderTopLeftRadius":999,"borderTopRightRadius":999,"borderBottomRightRadius":999,"borderBottomLeftRadius":999,"transitionProperty":"width","transitionDuration":"0.2s","backgroundColor":"var(--theme-color, #0957de)","alignSelf":"flex-start"}},"up-slider__button":{"":{"width":24,"height":24,"borderTopLeftRadius":999,"borderTopRightRadius":999,"borderBottomRightRadius":999,"borderBottomLeftRadius":999,"borderTopWidth":1,"borderRightWidth":1,"borderBottomWidth":1,"borderLeftWidth":1,"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid","borderTopColor":"#d0d0d0","borderRightColor":"#d0d0d0","borderBottomColor":"#d0d0d0","borderLeftColor":"#d0d0d0","backgroundColor":"#ffffff"}},"up-slider__button-wrap":{"":{"position":"absolute"}},"up-slider--disabled":{"":{"opacity":0.5}},"@TRANSITION":{"up-slider__gap":{"property":"width","duration":"0.2s"}},"relative":{"":{"position":"relative"}},"flex":{"":{"display":"flex"}}};
const { normalizeStyle: _normalizeStyle, createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, toDisplayString: _toDisplayString, renderSlot: _renderSlot, normalizeClass: _normalizeClass, Fragment: _Fragment } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: "up-slider",
      style: _normalizeStyle($setup.sliderCustomStyle)
    },
    [
      !$props.useNative || $props.isRange ? (_openBlock(), _createElementBlock(
        _Fragment,
        { key: 0 },
        [
          _createElementVNode(
            "view",
            {
              ref: "upSliderInnerRef",
              class: _normalizeClass(["up-slider-inner", [$props.disabled ? "up-slider--disabled" : ""]]),
              onClick: $setup.onClick,
              "on:onTouchStart": _cache[8] || (_cache[8] = ($event) => $setup.onTouchStart2($event, 1)),
              onTouchmove: _cache[9] || (_cache[9] = ($event) => $setup.onTouchMove2($event, 1)),
              onTouchend: _cache[10] || (_cache[10] = ($event) => $setup.onTouchEnd2($event, 1)),
              onTouchcancel: _cache[11] || (_cache[11] = ($event) => $setup.onTouchEnd2($event, 1)),
              style: _normalizeStyle($setup.innerStyleCpu)
            },
            [
              _createElementVNode(
                "view",
                {
                  class: "up-slider__base",
                  style: _normalizeStyle($setup.baseStyleCpu)
                },
                null,
                4
                /* STYLE */
              ),
              _createElementVNode(
                "view",
                {
                  onClick: $setup.onClick,
                  class: "up-slider__gap",
                  style: _normalizeStyle($setup.gapStyleCpu)
                },
                null,
                4
                /* STYLE */
              ),
              $props.isRange ? (_openBlock(), _createElementBlock(
                "view",
                {
                  key: 0,
                  class: "up-slider__gap up-slider__gap-0",
                  style: _normalizeStyle($setup.rangeGap0StyleCpu)
                },
                null,
                4
                /* STYLE */
              )) : _createCommentVNode("v-if", true),
              $props.isRange && $props.showValue ? (_openBlock(), _createElementBlock(
                "text",
                {
                  key: 1,
                  class: "up-slider__show-range-value",
                  style: _normalizeStyle($setup.btnWrapStyle0)
                },
                _toDisplayString($props.rangeValue[0] ?? ""),
                5
                /* TEXT, STYLE */
              )) : _createCommentVNode("v-if", true),
              $props.isRange && $props.showValue ? (_openBlock(), _createElementBlock(
                "text",
                {
                  key: 2,
                  class: "up-slider__show-range-value",
                  style: _normalizeStyle($setup.btnWrapStyle1)
                },
                _toDisplayString($props.rangeValue[1] ?? ""),
                5
                /* TEXT, STYLE */
              )) : _createCommentVNode("v-if", true),
              $props.isRange ? (_openBlock(), _createElementBlock(
                "view",
                {
                  key: 3,
                  class: "up-slider__button-wrap up-slider__button-wrap-0",
                  onTouchstart: _cache[0] || (_cache[0] = ($event) => $setup.onTouchStart($event, 0)),
                  onTouchmove: _cache[1] || (_cache[1] = ($event) => $setup.onTouchMove($event, 0)),
                  onTouchend: _cache[2] || (_cache[2] = ($event) => $setup.onTouchEnd($event, 0)),
                  onTouchcancel: _cache[3] || (_cache[3] = ($event) => $setup.onTouchEnd($event, 0)),
                  style: _normalizeStyle($setup.btnWrapStyle0)
                },
                [
                  _ctx.$slots["min"] != null ? _renderSlot(_ctx.$slots, "min", { key: 0 }) : (_openBlock(), _createElementBlock(
                    "view",
                    {
                      key: 1,
                      class: "up-slider__button",
                      style: _normalizeStyle($setup.blockStyleCpu)
                    },
                    null,
                    4
                    /* STYLE */
                  ))
                ],
                36
                /* STYLE, NEED_HYDRATION */
              )) : _createCommentVNode("v-if", true),
              _createElementVNode(
                "view",
                {
                  class: "up-slider__button-wrap",
                  onTouchstart: _cache[4] || (_cache[4] = ($event) => $setup.onTouchStart($event, 1)),
                  onTouchmove: _cache[5] || (_cache[5] = ($event) => $setup.onTouchMove($event, 1)),
                  onTouchend: _cache[6] || (_cache[6] = ($event) => $setup.onTouchEnd($event, 1)),
                  onTouchcancel: _cache[7] || (_cache[7] = ($event) => $setup.onTouchEnd($event, 1)),
                  style: _normalizeStyle($setup.btnWrapStyle1)
                },
                [
                  $props.isRange && _ctx.$slots["max"] != null ? _renderSlot(_ctx.$slots, "max", { key: 0 }) : _ctx.$slots["default"] != null ? _renderSlot(_ctx.$slots, "default", { key: 1 }) : (_openBlock(), _createElementBlock(
                    "view",
                    {
                      key: 2,
                      class: "up-slider__button",
                      style: _normalizeStyle($setup.blockStyleCpu)
                    },
                    null,
                    4
                    /* STYLE */
                  ))
                ],
                36
                /* STYLE, NEED_HYDRATION */
              )
            ],
            38
            /* CLASS, STYLE, NEED_HYDRATION */
          ),
          $props.showValue && !$props.isRange ? (_openBlock(), _createElementBlock(
            "view",
            {
              key: 0,
              class: "up-slider__show-value"
            },
            _toDisplayString($props.modelValue),
            1
            /* TEXT */
          )) : _createCommentVNode("v-if", true)
        ],
        64
        /* STABLE_FRAGMENT */
      )) : (_openBlock(), _createElementBlock("slider", {
        key: 1,
        class: "up-slider__native",
        min: parseFloat($props.min.toString()),
        max: parseFloat($props.max.toString()),
        step: parseFloat($props.step.toString()),
        value: parseFloat($props.modelValue.toString()),
        activeColor: $props.activeColor,
        backgroundColor: $props.inactiveColor,
        blockSize: $setup.computedBlockSize,
        blockColor: $props.blockColor,
        showValue: $props.showValue,
        disabled: $props.disabled,
        onChanging: $setup.changingHandler,
        onChange: $setup.changeHandler
      }, null, 40, ["min", "max", "step", "value", "activeColor", "backgroundColor", "blockSize", "blockColor", "showValue", "disabled"]))
    ],
    4
    /* STYLE */
  );
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-slider/up-slider.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-slider.js.map
