import { g as getPx, u as upGetRect, b as addStyle } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, setSharedDataStyle: _setSharedDataStyle, unref: _unref, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, setSharedDataEvent: _setSharedDataEvent, setSharedDataClass: _setSharedDataClass, createSharedDataIf: _createSharedDataIf, toDisplayString: _toDisplayString, createSharedDataSlot: _createSharedDataSlot, setSharedDataTemplateRef: _setSharedDataTemplateRef, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpSliderUpSlider";
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
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-slider"
  },
  __dynamicSharedData: true,
  __hash: "bb6ac2c4",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-slider/up-slider.uvue",
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
    var __emit = _a.emit, $slots = _a.slots;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpSliderUpSliderSharedData", sharedDataClassId: 0 })));
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
      if (props.activeColor !== "#2979ff") {
        style["backgroundColor"] = props.activeColor;
      }
      return style;
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
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_slider = _resolveComponent("slider");
      _renderSharedDataEffect(() => {
        return _setSharedDataStyle(__sharedData, 39, _unref(addStyle)(__props.customStyle));
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(!__props.useNative || __props.isRange));
      }, () => {
        _setSharedDataEvent(__sharedData, 22, onClick);
        _renderSharedDataEffect(() => {
          _setSharedDataClass(__sharedData, 33, ["up-slider-inner", [__props.disabled ? "up-slider--disabled" : ""]]);
          _setSharedDataStyle(__sharedData, 34, innerStyleCpu.value);
          _setSharedDataStyle(__sharedData, 35, {
            height: __props.height,
            backgroundColor: __props.inactiveColor
          });
          _setSharedDataStyle(__sharedData, 36, gapStyleCpu.value);
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 3, _toSharedDataBoolean(__props.isRange));
        }, () => {
          _renderSharedDataEffect(() => {
            const _barStyle0 = barStyle0.value;
            const _height = __props.height;
            _setSharedDataStyle(__sharedData, 4, {
              width: _barStyle0.width,
              transition: _barStyle0.transition,
              height: _height,
              marginTop: "-" + _height,
              backgroundColor: __props.inactiveColor
            });
          });
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 5, _toSharedDataBoolean(__props.isRange && __props.showValue));
        }, () => {
          _renderSharedDataEffect(() => {
            const _getPx = _unref(getPx);
            _setSharedDataStyle(__sharedData, 6, { left: parseFloat(_getPx(barStyle0.value.width)) + parseFloat(_getPx(__props.blockSize)) / 2 + "px" });
            _setSharedData(__sharedData, 7, _toDisplayString(__props.rangeValue[0] ?? ""));
          });
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 8, _toSharedDataBoolean(__props.isRange && __props.showValue));
        }, () => {
          _renderSharedDataEffect(() => {
            const _getPx = _unref(getPx);
            _setSharedDataStyle(__sharedData, 9, { left: parseFloat(_getPx(barStyle.value.width)) + parseFloat(_getPx(__props.blockSize)) / 2 + "px" });
            _setSharedData(__sharedData, 10, _toDisplayString(__props.rangeValue[1] ?? ""));
          });
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 11, _toSharedDataBoolean(__props.isRange));
        }, () => {
          _renderSharedDataEffect(() => {
            return _setSharedDataStyle(__sharedData, 18, { left: (parseFloat(_unref(getPx)(barStyle0.value.width)) + parseFloat(_unref(getPx)(__props.blockSize)) / 2).toString() + "px" });
          });
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 12, _toSharedDataBoolean($slots["min"] != null));
          }, () => {
            _createSharedDataSlot("min", null, null);
          }, () => {
            _renderSharedDataEffect(() => {
              return _setSharedDataStyle(__sharedData, 13, blockStyleCpu.value);
            });
          }, 1029);
          _setSharedDataEvent(__sharedData, 14, ($event) => {
            return onTouchStart($event, 0);
          });
          _setSharedDataEvent(__sharedData, 15, ($event) => {
            return onTouchMove($event, 0);
          });
          _setSharedDataEvent(__sharedData, 16, ($event) => {
            return onTouchEnd($event, 0);
          });
          _setSharedDataEvent(__sharedData, 17, ($event) => {
            return onTouchEnd($event, 0);
          });
        });
        _renderSharedDataEffect(() => {
          const _getPx = _unref(getPx);
          _setSharedDataStyle(__sharedData, 37, { left: parseFloat(_getPx(barStyle.value.width)) + parseFloat(_getPx(__props.blockSize)) / 2 + "px" });
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 19, _toSharedDataBoolean(__props.isRange && $slots["max"] != null));
        }, () => {
          _createSharedDataSlot("max", null, null);
        }, () => {
          return _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 20, _toSharedDataBoolean($slots["default"] != null));
          }, () => {
            _createSharedDataSlot("default", null, null);
          }, () => {
            _renderSharedDataEffect(() => {
              return _setSharedDataStyle(__sharedData, 21, blockStyleCpu.value);
            });
          }, 1797);
        }, 1541);
        _setSharedDataEvent(__sharedData, 23, ($event) => {
          return onTouchStart($event, 1);
        });
        _setSharedDataEvent(__sharedData, 24, ($event) => {
          return onTouchMove($event, 1);
        });
        _setSharedDataEvent(__sharedData, 25, ($event) => {
          return onTouchEnd($event, 1);
        });
        _setSharedDataEvent(__sharedData, 26, ($event) => {
          return onTouchEnd($event, 1);
        });
        _setSharedDataEvent(__sharedData, 27, onClick);
        _setSharedDataEvent(__sharedData, 28, ($event) => {
          return onTouchStart2($event, 1);
        });
        _setSharedDataEvent(__sharedData, 29, ($event) => {
          return onTouchMove2($event, 1);
        });
        _setSharedDataEvent(__sharedData, 30, ($event) => {
          return onTouchEnd2($event, 1);
        });
        _setSharedDataEvent(__sharedData, 31, ($event) => {
          return onTouchEnd2($event, 1);
        });
        _setSharedDataTemplateRef(__sharedData, 32, (n30) => {
          _setTemplateRef(n30, "upSliderInnerRef");
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 1, _toSharedDataBoolean(__props.showValue && !__props.isRange));
        }, () => {
          _renderSharedDataEffect(() => {
            return _setSharedData(__sharedData, 2, _toDisplayString(__props.modelValue));
          });
        });
      }, () => {
        const n35 = _createSharedDataComponentWithFallback(_component_slider, "8cda092a", {
          class: "up-slider__native",
          min: () => {
            return parseFloat(__props.min.toString());
          },
          max: () => {
            return parseFloat(__props.max.toString());
          },
          step: () => {
            return parseFloat(__props.step.toString());
          },
          value: () => {
            return parseFloat(__props.modelValue.toString());
          },
          activeColor: () => {
            return __props.activeColor;
          },
          backgroundColor: () => {
            return __props.inactiveColor;
          },
          blockSize: () => {
            return parseFloat(_unref(getPx)(__props.blockSize));
          },
          blockColor: () => {
            return __props.blockColor;
          },
          showValue: () => {
            return __props.showValue;
          },
          disabled: () => {
            return __props.disabled;
          },
          onChanging: () => {
            return changingHandler;
          },
          onChange: () => {
            return changeHandler;
          }
        });
        _setSharedData(__sharedData, 38, n35?.sharedData);
      }, 2310);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-slider.js.map
