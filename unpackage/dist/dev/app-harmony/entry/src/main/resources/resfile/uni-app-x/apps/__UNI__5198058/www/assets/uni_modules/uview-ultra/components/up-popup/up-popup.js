import { _ as __easycom_2$1 } from "../up-overlay/up-overlay.js";
import { r as resolveEasycom } from "../../../../App.ku.js";
import { _ as __easycom_0 } from "../up-status-bar/up-status-bar.js";
import { _ as __easycom_0$1 } from "../up-icon/up-icon.js";
import { _ as __easycom_0$2 } from "../up-safe-bottom/up-safe-bottom.js";
import { _ as __easycom_1 } from "../up-transition/up-transition.js";
import "./popup.js";
import { d as deepMerge, a as addUnit, b as addStyle } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed, ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-popup"
  },
  __name: "up-popup",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: true
    },
    mode: {
      type: String,
      default: "bottom"
    },
    duration: {
      type: [String, Number],
      default: 300
    },
    closeable: {
      type: Boolean,
      default: false
    },
    overlayStyle: {
      type: [Object, String],
      default: () => {
        return new UTSJSONObject({});
      }
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: [String, Number],
      default: 10075
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: true
    },
    safeAreaInsetTop: {
      type: Boolean,
      default: false
    },
    closeIconPos: {
      type: String,
      default: "top-right"
    },
    round: {
      type: [Boolean, String, Number],
      default: 0
    },
    zoom: {
      type: Boolean,
      default: true
    },
    bgColor: {
      type: String,
      default: ""
    },
    overlayOpacity: {
      type: [Number, String],
      default: 0.5
    },
    pageInline: {
      type: Boolean,
      default: false
    },
    customClass: {
      type: String,
      default: ""
    },
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    }
  },
  emits: ["open", "close", "click", "update:show"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const props = __props;
    const emit = __emit;
    const overlayDuration = computed(() => {
      return parseInt(props.duration.toString()) + 50;
    });
    const position = computed(() => {
      if (props.mode === "center") {
        return props.zoom ? "fade-zoom" : "fade";
      }
      if (props.mode === "left") {
        return "slide-left";
      }
      if (props.mode === "right") {
        return "slide-right";
      }
      if (props.mode === "bottom") {
        return "slide-up";
      }
      if (props.mode === "top") {
        return "slide-down";
      }
      return "";
    });
    const transitionStyle = computed(() => {
      const style = new UTSJSONObject({
        display: "flex"
      });
      if (!props.pageInline) {
        style["zIndex"] = parseInt(props.zIndex.toString()) + 1;
        style["position"] = "fixed";
      }
      style[props.mode] = 0;
      if (props.mode === "left" || props.mode === "right") {
        return deepMerge(style, new UTSJSONObject({
          bottom: 0,
          top: 0
        }));
      } else if (props.mode === "top" || props.mode === "bottom") {
        return deepMerge(style, new UTSJSONObject({
          left: 0,
          right: 0
        }));
      } else if (props.mode === "center") {
        return deepMerge(style, new UTSJSONObject({
          alignItems: "center",
          "justify-content": "center",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }));
      }
      return style;
    });
    const contentStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (props.mode !== "center") {
        style["flex"] = 1;
      }
      if (props.bgColor != "") {
        style["backgroundColor"] = props.bgColor;
      }
      if (props.round.toString() != "" && props.round != false) {
        const value = addUnit(props.round);
        if (props.mode === "top") {
          style["borderBottomLeftRadius"] = value;
          style["borderBottomRightRadius"] = value;
        } else if (props.mode === "bottom") {
          style["borderTopLeftRadius"] = value;
          style["borderTopRightRadius"] = value;
        } else if (props.mode === "center") {
          style["borderRadius"] = value;
        }
      }
      return deepMerge(style, addStyle(props.customStyle));
    });
    function noop() {
    }
    function overlayClick() {
      if (props.closeOnClickOverlay) {
        emit("update:show", false);
        emit("close");
      }
    }
    function close() {
      emit("update:show", false);
      emit("close");
    }
    function afterEnter() {
      emit("open");
    }
    function clickHandler() {
      if (props.mode === "center") {
        overlayClick();
      }
      emit("click");
    }
    const __returned__ = { props, emit, overlayDuration, position, transitionStyle, contentStyle, noop, overlayClick, close, afterEnter, clickHandler };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"u-empty":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-empty__wrap":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__scroll-view-wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__scroll-view":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__nav":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__nav__line":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-empty":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-empty__wrap":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__scroll-view-wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__scroll-view":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__nav":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__nav__line":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-popup":{"":{"flexGrow":1,"flexShrink":1,"flexBasis":"0%"}},"up-popup__content":{"":{"backgroundColor":"#ffffff","position":"relative"}},"up-popup__content--round-top":{"":{"borderTopLeftRadius":0,"borderTopRightRadius":0,"borderBottomLeftRadius":10,"borderBottomRightRadius":10}},"up-popup__content--round-left":{"":{"borderTopLeftRadius":0,"borderTopRightRadius":10,"borderBottomLeftRadius":0,"borderBottomRightRadius":10}},"up-popup__content--round-right":{"":{"borderTopLeftRadius":10,"borderTopRightRadius":0,"borderBottomLeftRadius":10,"borderBottomRightRadius":0}},"up-popup__content--round-bottom":{"":{"borderTopLeftRadius":10,"borderTopRightRadius":10,"borderBottomLeftRadius":0,"borderBottomRightRadius":0}},"up-popup__content--round-center":{"":{"borderTopLeftRadius":10,"borderTopRightRadius":10,"borderBottomLeftRadius":10,"borderBottomRightRadius":10}},"up-popup__content__close":{"":{"position":"absolute"}},"up-popup__content__close--hover":{"":{"opacity":0.4}},"up-popup__content__close--top-left":{"":{"top":15,"left":15}},"up-popup__content__close--top-right":{"":{"top":15,"right":15}},"up-popup__content__close--bottom-left":{"":{"bottom":15,"left":15}},"up-popup__content__close--bottom-right":{"":{"right":15,"bottom":15}},"flex":{"":{"display":"flex"}}};
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock, createCommentVNode: _createCommentVNode, renderSlot: _renderSlot, createVNode: _createVNode, withModifiers: _withModifiers, normalizeClass: _normalizeClass, createElementBlock: _createElementBlock, normalizeStyle: _normalizeStyle, createElementVNode: _createElementVNode, withCtx: _withCtx } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_overlay = resolveEasycom(__resolveDynamicComponent("up-overlay"), __easycom_2$1);
  const _component_up_status_bar = resolveEasycom(__resolveDynamicComponent("up-status-bar"), __easycom_0);
  const _component_up_icon = resolveEasycom(__resolveDynamicComponent("up-icon"), __easycom_0$1);
  const _component_up_safe_bottom = resolveEasycom(__resolveDynamicComponent("up-safe-bottom"), __easycom_0$2);
  const _component_up_transition = resolveEasycom(__resolveDynamicComponent("up-transition"), __easycom_1);
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: _normalizeClass(["up-popup", [$props.customClass]])
    },
    [
      $props.overlay && !$props.pageInline ? (_openBlock(), _createBlock(_component_up_overlay, {
        key: 0,
        show: $props.show && !$props.pageInline,
        onClick: $setup.overlayClick,
        zIndex: $props.zIndex,
        duration: $setup.overlayDuration,
        customStyle: $props.overlayStyle,
        opacity: $props.overlayOpacity
      }, null, 8, ["show", "zIndex", "duration", "customStyle", "opacity"])) : _createCommentVNode("v-if", true),
      _createVNode(_component_up_transition, {
        show: $props.pageInline ? true : $props.show,
        customStyle: $setup.transitionStyle,
        mode: $props.pageInline ? "none" : $setup.position,
        duration: $props.duration,
        onAfterEnter: $setup.afterEnter,
        onClick: $setup.clickHandler
      }, {
        default: _withCtx(() => [
          _createElementVNode(
            "view",
            {
              class: "up-popup__content",
              style: _normalizeStyle([$setup.contentStyle]),
              onClick: _withModifiers($setup.noop, ["stop"])
            },
            [
              $props.safeAreaInsetTop ? (_openBlock(), _createBlock(_component_up_status_bar, { key: 0 })) : _createCommentVNode("v-if", true),
              _renderSlot(_ctx.$slots, "default"),
              $props.closeable ? (_openBlock(), _createElementBlock(
                "view",
                {
                  key: 1,
                  onClick: _withModifiers($setup.close, ["stop"]),
                  class: _normalizeClass(["up-popup__content__close", ["up-popup__content__close--" + $props.closeIconPos]]),
                  "hover-class": "up-popup__content__close--hover",
                  "hover-stay-time": "150"
                },
                [
                  _createVNode(_component_up_icon, {
                    name: "close",
                    color: "#909399",
                    size: "18",
                    bold: ""
                  })
                ],
                2
                /* CLASS */
              )) : _createCommentVNode("v-if", true),
              $props.safeAreaInsetBottom ? (_openBlock(), _createBlock(_component_up_safe_bottom, { key: 2 })) : _createCommentVNode("v-if", true)
            ],
            4
            /* STYLE */
          )
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["show", "customStyle", "mode", "duration"])
    ],
    2
    /* CLASS */
  );
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-popup/up-popup.uvue"]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-popup.js.map
