import { _ as __easycom_0 } from "../up-icon/up-icon.js";
import { j as guid, b as addStyle, a as addUnit, q as os, s as sleep, u as upGetRect, f as range } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, setSharedData: _setSharedData, toDisplayString: _toDisplayString, setSharedDataClass: _setSharedDataClass, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedDataEvent: _setSharedDataEvent, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataIf: _createSharedDataIf, createSharedDataFor: _createSharedDataFor } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpRateUpRate";
const { computed, ref, watch, onMounted, getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-rate"
  },
  __dynamicSharedData: true,
  __hash: "1422d7be",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-rate/up-rate.uvue",
  __name: "up-rate",
  props: {
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
    inactiveIcon: {
      type: String,
      default: "star-fill"
    },
    activeIcon: {
      type: String,
      default: "star-fill"
    },
    gutter: {
      type: [String, Number],
      default: 4
    },
    minCount: {
      type: [String, Number],
      default: 0
    },
    allowHalf: {
      type: Boolean,
      default: false
    },
    touchable: {
      type: Boolean,
      default: true
    },
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpRateUpRateSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const instance = getCurrentInstance();
    const elId = ref(guid());
    const elClass = ref(guid());
    const rateBoxLeft = ref(0);
    const activeIndex = ref(0);
    const rateWidth = ref(0);
    const moving = ref(false);
    const customRateStyle = computed(() => {
      return addStyle(props.customStyle);
    });
    const iconPaddingStyle = computed(() => {
      return new UTSJSONObject({
        padding: `0 ${addUnit(parseInt(props.gutter.toString()) / 2)}`
      });
    });
    const halfWidthStyle = computed(() => {
      return new UTSJSONObject({
        width: addUnit(rateWidth.value / 2)
      });
    });
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
    function getRateIconWrapRect() {
      upGetRect("." + elClass.value, false, instance === null || instance === void 0 ? null : instance.proxy).then((res) => {
        var _a2;
        const width = (_a2 = res.width) !== null && _a2 !== void 0 ? _a2 : NaN;
        if (!isNaN(width) && width > 0) {
          rateWidth.value = width;
        }
      });
    }
    async function getRateItemRect() {
      await sleep();
      upGetRect("#" + elId.value, false, instance === null || instance === void 0 ? null : instance.proxy).then((res) => {
        var _a2;
        const left = (_a2 = res.left) !== null && _a2 !== void 0 ? _a2 : NaN;
        if (!isNaN(left)) {
          rateBoxLeft.value = left;
        }
      });
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
      x = range(rateBoxLeft.value, allRateWidth, x) - rateBoxLeft.value;
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
      if (os() === "ios" && moving.value) {
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
      sleep().then(() => {
        getRateItemRect();
        getRateIconWrapRect();
      });
    }
    watch(() => {
      return props.modelValue;
    }, (val = null) => {
      activeIndex.value = normalizeActiveIndex(val);
    });
    onMounted(() => {
      init();
    });
    return () => {
      "raw js";
      const _component_up_icon = __easycom_0;
      _renderSharedDataEffect(() => {
        _setSharedDataAttr(__sharedData, 3, _toSharedDataString(elId.value));
        _setSharedDataStyle(__sharedData, 4, customRateStyle.value);
      });
      _createSharedDataFor(_setSharedDataScoped(__sharedData, 0, _createSharedDataVFor(__sharedDataScope, () => {
        return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
      })), () => {
        return parseInt(__props.count.toString());
      }, (__sharedData_VFor0, _for_item0, _for_key0) => {
        _renderSharedDataEffect(() => {
          return _setSharedDataClass(__sharedData_VFor0, 7, ["up-rate__content__item cursor-pointer", [elClass.value]]);
        });
        const n2 = _createSharedDataComponentWithFallback(_component_up_icon, "4df7870a-" + _for_key0.value, {
          name: () => {
            return Math.floor(parseFloat(activeIndex.value.toString())) > _for_key0.value ? __props.activeIcon : __props.inactiveIcon;
          },
          color: () => {
            return __props.disabled ? "#c8c9cc" : Math.floor(parseFloat(activeIndex.value.toString())) > _for_key0.value ? __props.activeColor == "#FA3534" ? "primary" : __props.activeColor : __props.inactiveColor;
          },
          "custom-style": () => {
            return iconPaddingStyle.value;
          },
          size: () => {
            return __props.size;
          }
        });
        _setSharedData(__sharedData_VFor0, 5, n2?.sharedData);
        _setSharedDataEvent(__sharedData_VFor0, 6, ($event) => {
          return clickHandler($event, _for_key0.value + 1);
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData_VFor0, 1, _toSharedDataBoolean(__props.allowHalf));
        }, () => {
          _renderSharedDataEffect(() => {
            return _setSharedDataStyle(__sharedData_VFor0, 4, halfWidthStyle.value);
          });
          const n6 = _createSharedDataComponentWithFallback(_component_up_icon, "70f71f79-" + _for_key0.value, {
            name: () => {
              return Math.floor(parseFloat(activeIndex.value.toString())) > _for_key0.value ? __props.activeIcon : __props.inactiveIcon;
            },
            color: () => {
              return __props.disabled ? "#c8c9cc" : Math.ceil(parseFloat(activeIndex.value.toString())) > _for_key0.value ? __props.activeColor == "#FA3534" ? "primary" : __props.activeColor : __props.inactiveColor;
            },
            "custom-style": () => {
              return iconPaddingStyle.value;
            },
            size: () => {
              return __props.size;
            }
          });
          _setSharedData(__sharedData_VFor0, 2, n6?.sharedData);
          _setSharedDataEvent(__sharedData_VFor0, 3, ($event) => {
            return clickHandler($event, _for_key0.value + 1);
          });
        });
        return null;
      }, (__sharedData_VFor0, _, index) => {
        return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
      }, 1);
      _setSharedDataEvent(__sharedData, 1, touchMove);
      _setSharedDataEvent(__sharedData, 2, touchEnd);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-rate.js.map
