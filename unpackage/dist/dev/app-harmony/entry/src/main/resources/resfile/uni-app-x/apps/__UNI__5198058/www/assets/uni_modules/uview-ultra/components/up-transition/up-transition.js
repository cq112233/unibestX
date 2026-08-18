import "./transition.js";
import { b as addStyle, s as sleep } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed, ref, watch, nextTick } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-transition"
  },
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
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
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
    const __returned__ = { props, emit, inited, viewStyle, status, transitionEnded, display, classes, getClassNames, getModeStyle, mergeStyle, clickHandler, onTransitionEnd, vueEnter, vueLeave };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"u-empty":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-empty__wrap":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__scroll-view-wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__scroll-view":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__nav":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__nav__line":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-empty":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-empty__wrap":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__scroll-view-wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__scroll-view":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__nav":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__nav__line":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-fade-enter-active":{"":{"transitionProperty":"opacity"}},"up-fade-leave-active":{"":{"transitionProperty":"opacity"}},"up-fade-enter":{"":{"opacity":0}},"up-fade-leave-to":{"":{"opacity":0}},"up-fade-zoom-enter":{"":{"transform":"scale(0.95)","opacity":0}},"up-fade-zoom-leave-to":{"":{"transform":"scale(0.95)","opacity":0}},"up-fade-zoom-enter-active":{"":{"transitionProperty":"transform,opacity"}},"up-fade-zoom-leave-active":{"":{"transitionProperty":"transform,opacity"}},"up-fade-down-enter-active":{"":{"transitionProperty":"opacity,transform"}},"up-fade-down-leave-active":{"":{"transitionProperty":"opacity,transform"}},"up-fade-left-enter-active":{"":{"transitionProperty":"opacity,transform"}},"up-fade-left-leave-active":{"":{"transitionProperty":"opacity,transform"}},"up-fade-right-enter-active":{"":{"transitionProperty":"opacity,transform"}},"up-fade-right-leave-active":{"":{"transitionProperty":"opacity,transform"}},"up-fade-up-enter-active":{"":{"transitionProperty":"opacity,transform"}},"up-fade-up-leave-active":{"":{"transitionProperty":"opacity,transform"}},"up-fade-up-enter":{"":{"transform":"translateY(100%)","opacity":0}},"up-fade-up-leave-to":{"":{"transform":"translateY(100%)","opacity":0}},"up-fade-down-enter":{"":{"transform":"translateY(-100%)","opacity":0}},"up-fade-down-leave-to":{"":{"transform":"translateY(-100%)","opacity":0}},"up-fade-left-enter":{"":{"transform":"translateX(-100%)","opacity":0}},"up-fade-left-leave-to":{"":{"transform":"translateX(-100%)","opacity":0}},"up-fade-right-enter":{"":{"transform":"translateX(100%)","opacity":0}},"up-fade-right-leave-to":{"":{"transform":"translateX(100%)","opacity":0}},"up-slide-down-enter-active":{"":{"transitionProperty":"transform"}},"up-slide-down-leave-active":{"":{"transitionProperty":"transform"}},"up-slide-left-enter-active":{"":{"transitionProperty":"transform"}},"up-slide-left-leave-active":{"":{"transitionProperty":"transform"}},"up-slide-right-enter-active":{"":{"transitionProperty":"transform"}},"up-slide-right-leave-active":{"":{"transitionProperty":"transform"}},"up-slide-up-enter-active":{"":{"transitionProperty":"transform"}},"up-slide-up-leave-active":{"":{"transitionProperty":"transform"}},"up-slide-up-enter":{"":{"transform":"translateY(100%)"}},"up-slide-up-leave-to":{"":{"transform":"translateY(100%)"}},"up-slide-down-enter":{"":{"transform":"translateY(-100%)"}},"up-slide-down-leave-to":{"":{"transform":"translateY(-100%)"}},"up-slide-left-enter":{"":{"transform":"translateX(-100%)"}},"up-slide-left-leave-to":{"":{"transform":"translateX(-100%)"}},"up-slide-right-enter":{"":{"transform":"translateX(100%)"}},"up-slide-right-leave-to":{"":{"transform":"translateX(100%)"}},"up-zoom-enter-active":{"":{"transitionProperty":"transform"}},"up-zoom-leave-active":{"":{"transitionProperty":"transform"}},"up-zoom-enter":{"":{"transform":"scale(0.95)"}},"up-zoom-leave-to":{"":{"transform":"scale(0.95)"}},"@TRANSITION":{"up-fade-enter-active":{"property":"opacity"},"up-fade-leave-active":{"property":"opacity"},"up-fade-zoom-enter-active":{"property":"transform,opacity"},"up-fade-zoom-leave-active":{"property":"transform,opacity"},"up-fade-down-enter-active":{"property":"opacity,transform"},"up-fade-down-leave-active":{"property":"opacity,transform"},"up-fade-left-enter-active":{"property":"opacity,transform"},"up-fade-left-leave-active":{"property":"opacity,transform"},"up-fade-right-enter-active":{"property":"opacity,transform"},"up-fade-right-leave-active":{"property":"opacity,transform"},"up-fade-up-enter-active":{"property":"opacity,transform"},"up-fade-up-leave-active":{"property":"opacity,transform"},"up-slide-down-enter-active":{"property":"transform"},"up-slide-down-leave-active":{"property":"transform"},"up-slide-left-enter-active":{"property":"transform"},"up-slide-left-leave-active":{"property":"transform"},"up-slide-right-enter-active":{"property":"transform"},"up-slide-right-leave-active":{"property":"transform"},"up-slide-up-enter-active":{"property":"transform"},"up-slide-up-leave-active":{"property":"transform"},"up-zoom-enter-active":{"property":"transform"},"up-zoom-leave-active":{"property":"transform"}},"flex":{"":{"display":"flex"}}};
const { renderSlot: _renderSlot, normalizeClass: _normalizeClass, normalizeStyle: _normalizeStyle, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.inited ? (_openBlock(), _createElementBlock(
    "view",
    {
      key: 0,
      class: _normalizeClass(["up-transition", $setup.classes]),
      ref: "up-transition",
      onClick: $setup.clickHandler,
      style: _normalizeStyle($setup.mergeStyle)
    },
    [
      _renderSlot(_ctx.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  )) : _createCommentVNode("v-if", true);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-transition/up-transition.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-transition.js.map
