import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { j as guid, b as addStyle, a as addUnit, s as sleep, u as upGetRect, f as range, q as os } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed, ref, watch, onMounted, getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-rate"
  },
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
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
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
    const __returned__ = { props, emit, instance, elId, elClass, rateBoxLeft, activeIndex, rateWidth, moving, customRateStyle, iconPaddingStyle, halfWidthStyle, toNumber, getMinCountValue, getCountValue, normalizeActiveIndex, getFallbackRateWidth, getRateIconWrapRect, getRateItemRect, ensureRateMetrics, emitEvent, getActiveIndex, touchMove, touchEnd, clickHandler, init };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "up-rate": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "marginTop": 0, "marginRight": 0, "marginBottom": 0, "marginLeft": 0, "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0 } }, "up-rate__content": { "": { "display": "flex", "flexDirection": "row" } }, "up-rate__content__item": { "": { "position": "relative" } }, "up-rate__content__item__icon-wrap--half": { "": { "position": "absolute", "overflow": "hidden", "top": 0, "left": 0 } }, "up-icon": { "": { "boxSizing": "border-box" } } };
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, resolveComponent: _resolveComponent, createVNode: _createVNode, withModifiers: _withModifiers, createElementVNode: _createElementVNode, normalizeStyle: _normalizeStyle, createCommentVNode: _createCommentVNode, normalizeClass: _normalizeClass } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(__resolveDynamicComponent("up-icon"), __easycom_0);
  return _openBlock(), _createElementBlock("view", {
    class: "up-rate",
    id: $setup.elId,
    style: _normalizeStyle($setup.customRateStyle)
  }, [
    _createElementVNode(
      "view",
      {
        class: "up-rate__content",
        onTouchmove: _withModifiers($setup.touchMove, ["stop"]),
        onTouchend: _withModifiers($setup.touchEnd, ["stop"])
      },
      [
        (_openBlock(true), _createElementBlock(
          _Fragment,
          null,
          _renderList(parseInt($props.count.toString()), (_, index) => {
            return _openBlock(), _createElementBlock(
              "view",
              {
                class: _normalizeClass(["up-rate__content__item cursor-pointer", [$setup.elClass]]),
                key: index
              },
              [
                _createElementVNode("view", {
                  class: "up-rate__content__item__icon-wrap",
                  onClick: _withModifiers(($event) => $setup.clickHandler($event, index + 1), ["stop"])
                }, [
                  _createVNode(_component_up_icon, {
                    name: Math.floor(parseFloat($setup.activeIndex.toString())) > index ? $props.activeIcon : $props.inactiveIcon,
                    color: $props.disabled ? "#c8c9cc" : Math.floor(parseFloat($setup.activeIndex.toString())) > index ? $props.activeColor == "#FA3534" ? "primary" : $props.activeColor : $props.inactiveColor,
                    "custom-style": $setup.iconPaddingStyle,
                    size: $props.size
                  }, null, 8, ["name", "color", "custom-style", "size"])
                ], 8, ["onClick"]),
                $props.allowHalf ? (_openBlock(), _createElementBlock("view", {
                  key: 0,
                  onClick: _withModifiers(($event) => $setup.clickHandler($event, index + 1), ["stop"]),
                  class: "up-rate__content__item__icon-wrap up-rate__content__item__icon-wrap--half",
                  style: _normalizeStyle($setup.halfWidthStyle)
                }, [
                  _createVNode(_component_up_icon, {
                    name: Math.floor(parseFloat($setup.activeIndex.toString())) > index ? $props.activeIcon : $props.inactiveIcon,
                    color: $props.disabled ? "#c8c9cc" : Math.ceil(parseFloat($setup.activeIndex.toString())) > index ? $props.activeColor == "#FA3534" ? "primary" : $props.activeColor : $props.inactiveColor,
                    "custom-style": $setup.iconPaddingStyle,
                    size: $props.size
                  }, null, 8, ["name", "color", "custom-style", "size"])
                ], 12, ["onClick"])) : _createCommentVNode("v-if", true)
              ],
              2
              /* CLASS */
            );
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ],
      32
      /* NEED_HYDRATION */
    )
  ], 12, ["id"]);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-rate/up-rate.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-rate.js.map
