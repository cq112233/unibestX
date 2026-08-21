import "./transition.js";
import { a as addStyle, s as sleep } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent, setSharedDataTemplateRef: _setSharedDataTemplateRef, createSharedDataIf: _createSharedDataIf } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpTransitionUpTransition";
const { computed, ref, watch, nextTick } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-transition"
  },
  __dynamicSharedData: true,
  __hash: "67df66c6",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-transition/up-transition.uvue",
  __name: "up-transition",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    mode: {
      type: String,
      default: "fade"
    },
    duration: {
      type: [Number, String],
      default: "300"
    },
    timingFunction: {
      type: String,
      default: "ease-out"
    },
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    }
  },
  emits: ["click", "beforeEnter", "enter", "afterEnter", "beforeLeave", "leave", "afterLeave"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpTransitionUpTransitionSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const inited = ref(false);
    const viewStyle = ref(new UTSJSONObject({}));
    const status = ref("");
    const transitionEnded = ref(false);
    const display = ref(false);
    const classes = ref("");
    const getClassNames = function(name) {
      return new UTSJSONObject({
        "enter": `up-${name}-enter up-${name}-enter-active`,
        "enter-to": `up-${name}-enter-to up-${name}-enter-active`,
        "leave": `up-${name}-leave up-${name}-leave-active`,
        "leave-to": `up-${name}-leave-to up-${name}-leave-active`
      });
    };
    const getModeStyle = function(mode, state) {
      const style = new UTSJSONObject({});
      if (state == "enter" || state == "leave-to") {
        if (mode == "fade") {
          style["opacity"] = 0;
        } else if (mode == "zoom") {
          style["transform"] = "scale(0.95)";
        } else if (mode == "fade-zoom") {
          style["transform"] = "scale(0.95)";
          style["opacity"] = 0;
        } else if (mode == "fade-up") {
          style["transform"] = "translateY(100%)";
          style["opacity"] = 0;
        } else if (mode == "fade-down") {
          style["transform"] = "translateY(-100%)";
          style["opacity"] = 0;
        } else if (mode == "fade-left") {
          style["transform"] = "translateX(-100%)";
          style["opacity"] = 0;
        } else if (mode == "fade-right") {
          style["transform"] = "translateX(100%)";
          style["opacity"] = 0;
        } else if (mode == "slide-up") {
          style["transform"] = "translateY(100%)";
        } else if (mode == "slide-down") {
          style["transform"] = "translateY(-100%)";
        } else if (mode == "slide-left") {
          style["transform"] = "translateX(-100%)";
        } else if (mode == "slide-right") {
          style["transform"] = "translateX(100%)";
        }
      } else if (state == "enter-to" || state == "leave") {
        if (mode == "fade") {
          style["opacity"] = 1;
        } else if (mode == "zoom") {
          style["transform"] = "scale(1)";
        } else if (mode == "fade-zoom") {
          style["transform"] = "scale(1)";
          style["opacity"] = 1;
        } else if (mode == "fade-up" || mode == "fade-down" || mode == "fade-left" || mode == "fade-right" || mode == "slide-up" || mode == "slide-down" || mode == "slide-left" || mode == "slide-right") {
          style["transform"] = "translate(0, 0)";
          if (mode.startsWith("fade")) {
            style["opacity"] = 1;
          }
        }
      }
      return style;
    };
    const mergeStyle = computed(() => {
      const modeVal = props.mode != "" ? props.mode : "fade";
      const durationVal = props.duration;
      const duration = durationVal != null ? durationVal.toString() : "0";
      let transitionProp = "all";
      if (modeVal == "fade") {
        transitionProp = "opacity";
      } else if (modeVal.startsWith("slide")) {
        transitionProp = "transform";
      } else if (modeVal.startsWith("fade-zoom") || modeVal == "zoom" || modeVal.startsWith("fade-up") || modeVal.startsWith("fade-down") || modeVal.startsWith("fade-left") || modeVal.startsWith("fade-right")) {
        transitionProp = "transform, opacity";
      }
      return new UTSJSONObject({
        transitionProperty: transitionProp,
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: props.timingFunction,
        ...addStyle(props.customStyle),
        ...viewStyle.value
      });
    });
    function clickHandler() {
      emit("click");
    }
    function onTransitionEnd() {
      if (transitionEnded.value)
        return null;
      transitionEnded.value = true;
      emit(status.value == "leave" ? "afterLeave" : "afterEnter");
      if (!props.show && display.value) {
        display.value = false;
        inited.value = false;
      }
    }
    async function vueEnter() {
      var _a2, _b, _c, _d;
      const classNames = getClassNames(props.mode);
      status.value = "enter";
      emit("beforeEnter");
      inited.value = true;
      display.value = true;
      classes.value = (_b = (_a2 = classNames["enter"]) === null || _a2 === void 0 ? null : _a2.toString()) !== null && _b !== void 0 ? _b : "";
      viewStyle.value = getModeStyle(props.mode, "enter");
      await nextTick();
      await sleep(20);
      emit("enter");
      transitionEnded.value = false;
      emit("afterEnter");
      classes.value = (_d = (_c = classNames["enter-to"]) === null || _c === void 0 ? null : _c.toString()) !== null && _d !== void 0 ? _d : "";
      viewStyle.value = getModeStyle(props.mode, "enter-to");
    }
    async function vueLeave() {
      var _a2, _b, _c, _d;
      if (!display.value)
        return Promise.resolve(null);
      const classNames = getClassNames(props.mode);
      status.value = "leave";
      emit("beforeLeave");
      classes.value = (_b = (_a2 = classNames["leave"]) === null || _a2 === void 0 ? null : _a2.toString()) !== null && _b !== void 0 ? _b : "";
      viewStyle.value = getModeStyle(props.mode, "leave");
      await nextTick();
      transitionEnded.value = false;
      emit("leave");
      setTimeout(onTransitionEnd, parseInt(props.duration != null ? props.duration.toString() : "0"));
      classes.value = (_d = (_c = classNames["leave-to"]) === null || _c === void 0 ? null : _c.toString()) !== null && _d !== void 0 ? _d : "";
      viewStyle.value = getModeStyle(props.mode, "leave-to");
    }
    watch(() => {
      return props.show;
    }, (newVal) => {
      if (newVal) {
        vueEnter();
      } else {
        vueLeave();
      }
    }, { immediate: true });
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(inited.value));
      }, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataClass(__sharedData, 3, ["up-transition", classes.value]);
          _setSharedDataStyle(__sharedData, 4, mergeStyle.value);
        });
        _createSharedDataSlot("default", null, null);
        _setSharedDataEvent(__sharedData, 1, clickHandler);
        _setSharedDataTemplateRef(__sharedData, 2, (n3) => {
          _setTemplateRef(n3, "up-transition");
        });
      });
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-transition.js.map
