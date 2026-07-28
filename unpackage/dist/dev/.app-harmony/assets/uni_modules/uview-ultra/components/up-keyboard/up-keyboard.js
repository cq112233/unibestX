import { _ as __easycom_0 } from "../up-number-keyboard/up-number-keyboard.js";
const { defineComponent, resolveDynamicComponent, openBlock, createBlock, withCtx, createElementVNode, renderSlot, createElementBlock, toDisplayString, createCommentVNode } = globalThis.Vue
import { r as resolveEasycom } from "../../../../App.ku.js";
import { _ as __easycom_1$1 } from "../up-car-keyboard/up-car-keyboard.js";
import { _ as __easycom_2 } from "../up-popup/up-popup.js";
import { m as mpMixin } from "../../libs/mixin/mpMixin.js";
import { m as mixin } from "../../libs/mixin/mixin.js";
import { p as propsKeyboard } from "./props.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = defineComponent({
  name: "up-keyboard",
  data() {
    return {};
  },
  mixins: [mpMixin, mixin, propsKeyboard],
  emits: ["change", "close", "confirm", "cancel", "backspace"],
  methods: {
    keyboardChange(e = null) {
      this.$emit("change", e.toString());
    },
    // 键盘关闭
    popupClose() {
      this.$emit("close");
    },
    // 输入完成
    onConfirm() {
      this.$emit("confirm");
    },
    // 取消输入
    onCancel() {
      this.$emit("cancel");
    },
    // 退格键
    keyboardBackspace() {
      this.$emit("backspace");
    }
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-keyboard__tooltip": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "space-between", "backgroundColor": "#FFFFFF", "paddingTop": 14, "paddingRight": 12, "paddingBottom": 14, "paddingLeft": 12 } }, "up-keyboard__tooltip__item": { "": { "color": "#333333", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "textAlign": "center", "fontSize": 15 } }, "up-keyboard__tooltip__submit": { "": { "textAlign": "right", "color": "var(--theme-color, #0957de)" } }, "up-keyboard__tooltip__cancel": { "": { "textAlign": "left", "color": "#888888" } }, "up-keyboard__tooltip__tips": { "": { "color": "#909193" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_number_keyboard = resolveEasycom(resolveDynamicComponent("up-number-keyboard"), __easycom_0);
  const _component_up_car_keyboard = resolveEasycom(resolveDynamicComponent("up-car-keyboard"), __easycom_1$1);
  const _component_up_popup = resolveEasycom(resolveDynamicComponent("up-popup"), __easycom_2);
  return openBlock(), createBlock(_component_up_popup, {
    overlay: _ctx.overlay,
    closeOnClickOverlay: _ctx.closeOnClickOverlay,
    mode: "bottom",
    popup: false,
    show: _ctx.show,
    safeAreaInsetBottom: _ctx.safeAreaInsetBottom,
    onClose: $options.popupClose,
    zIndex: _ctx.zIndex,
    customStyle: {
      backgroundColor: "rgb(214, 218, 220)"
    }
  }, {
    default: withCtx(() => [
      createElementVNode("view", { class: "up-keyboard" }, [
        renderSlot(_ctx.$slots, "default"),
        _ctx.tooltip ? (openBlock(), createElementBlock("view", {
          key: 0,
          class: "up-keyboard__tooltip"
        }, [
          createElementVNode("view", {
            "hover-class": "up-hover-class",
            "hover-stay-time": 100
          }, [
            _ctx.showCancel ? (openBlock(), createElementBlock(
              "text",
              {
                key: 0,
                class: "up-keyboard__tooltip__item up-keyboard__tooltip__cancel",
                onClick: _cache[0] || (_cache[0] = (...args) => $options.onCancel && $options.onCancel(...args))
              },
              toDisplayString(_ctx.cancelText),
              1
              /* TEXT */
            )) : createCommentVNode("v-if", true)
          ]),
          createElementVNode("view", null, [
            _ctx.showTips ? (openBlock(), createElementBlock(
              "text",
              {
                key: 0,
                class: "up-keyboard__tooltip__item up-keyboard__tooltip__tips"
              },
              toDisplayString(_ctx.tips != "" ? _ctx.tips : _ctx.mode == "number" ? "数字键盘" : _ctx.mode == "card" ? "身份证键盘" : "车牌号键盘"),
              1
              /* TEXT */
            )) : createCommentVNode("v-if", true)
          ]),
          createElementVNode("view", {
            "hover-class": "up-hover-class",
            "hover-stay-time": 100
          }, [
            _ctx.showConfirm ? (openBlock(), createElementBlock(
              "text",
              {
                key: 0,
                onClick: _cache[1] || (_cache[1] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
                class: "up-keyboard__tooltip__item up-keyboard__tooltip__submit",
                "hover-class": "up-hover-class"
              },
              toDisplayString(_ctx.showConfirm ? _ctx.confirmText : ""),
              1
              /* TEXT */
            )) : createCommentVNode("v-if", true)
          ])
        ])) : createCommentVNode("v-if", true),
        _ctx.mode == "number" || _ctx.mode == "card" ? (openBlock(), createBlock(_component_up_number_keyboard, {
          key: 1,
          random: _ctx.random,
          onBackspace: $options.keyboardBackspace,
          onChange: $options.keyboardChange,
          mode: _ctx.mode,
          dotDisabled: _ctx.dotDisabled
        }, null, 8, ["random", "onBackspace", "onChange", "mode", "dotDisabled"])) : (openBlock(), createBlock(_component_up_car_keyboard, {
          key: 2,
          random: _ctx.random,
          autoChange: _ctx.autoChange,
          onBackspace: $options.keyboardBackspace,
          onChange: $options.keyboardChange
        }, null, 8, ["random", "autoChange", "onBackspace", "onChange"]))
      ])
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["overlay", "closeOnClickOverlay", "show", "safeAreaInsetBottom", "onClose", "zIndex", "customStyle"]);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-keyboard/up-keyboard.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-keyboard.js.map
