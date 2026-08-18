import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-number-keyboard/up-number-keyboard&";
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { _ as __easycom_1$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-car-keyboard/up-car-keyboard&";
import { _ as __easycom_2 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-popup/up-popup&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-keyboard"
  },
  __name: "up-keyboard",
  props: {
    mode: {
      type: String,
      default: "number"
    },
    dotDisabled: {
      type: Boolean,
      default: false
    },
    tooltip: {
      type: Boolean,
      default: true
    },
    showTips: {
      type: Boolean,
      default: true
    },
    tips: {
      type: String,
      default: ""
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    showConfirm: {
      type: Boolean,
      default: true
    },
    random: {
      type: Boolean,
      default: false
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    show: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: [String, Number],
      default: 1075
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    confirmText: {
      type: String,
      default: "确认"
    },
    autoChange: {
      type: Boolean,
      default: false
    }
  },
  emits: ["change", "close", "confirm", "cancel", "backspace"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const props = __props;
    const emit = __emit;
    function keyboardChange(e = null) {
      emit("change", e.toString());
    }
    function popupClose() {
      emit("close");
    }
    function onConfirm() {
      emit("confirm");
    }
    function onCancel() {
      emit("cancel");
    }
    function keyboardBackspace() {
      emit("backspace");
    }
    const __returned__ = { props, emit, keyboardChange, popupClose, onConfirm, onCancel, keyboardBackspace };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"u-empty":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-empty__wrap":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__scroll-view-wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__scroll-view":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__nav":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__nav__line":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-empty":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-empty__wrap":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__scroll-view-wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__scroll-view":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__nav":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__nav__line":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-keyboard__tooltip":{"":{"display":"flex","flexDirection":"row","justifyContent":"space-between","backgroundColor":"#FFFFFF","paddingTop":14,"paddingRight":12,"paddingBottom":14,"paddingLeft":12}},"up-keyboard__tooltip__item":{"":{"color":"#333333","flexGrow":1,"flexShrink":1,"flexBasis":"0%","textAlign":"center","fontSize":15}},"up-keyboard__tooltip__submit":{"":{"textAlign":"right","color":"var(--theme-color, #0957de)"}},"up-keyboard__tooltip__cancel":{"":{"textAlign":"left","color":"#888888"}},"up-keyboard__tooltip__tips":{"":{"color":"#909193"}},"flex":{"":{"display":"flex"}},"up-hover-class":{"":{"opacity":"0.7"}}};
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { renderSlot: _renderSlot, toDisplayString: _toDisplayString, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createBlock: _createBlock, withCtx: _withCtx } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_number_keyboard = resolveEasycom(__resolveDynamicComponent("up-number-keyboard"), __easycom_0);
  const _component_up_car_keyboard = resolveEasycom(__resolveDynamicComponent("up-car-keyboard"), __easycom_1$1);
  const _component_up_popup = resolveEasycom(__resolveDynamicComponent("up-popup"), __easycom_2);
  return _openBlock(), _createBlock(_component_up_popup, {
    overlay: $props.overlay,
    closeOnClickOverlay: $props.closeOnClickOverlay,
    mode: "bottom",
    popup: false,
    show: $props.show,
    safeAreaInsetBottom: $props.safeAreaInsetBottom,
    onClose: $setup.popupClose,
    zIndex: $props.zIndex,
    customStyle: {
      backgroundColor: "rgb(214, 218, 220)"
    }
  }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "up-keyboard" }, [
        _renderSlot(_ctx.$slots, "default"),
        $props.tooltip ? (_openBlock(), _createElementBlock("view", {
          key: 0,
          class: "up-keyboard__tooltip"
        }, [
          _createElementVNode("view", {
            "hover-class": "up-hover-class",
            "hover-stay-time": 100
          }, [
            $props.showCancel ? (_openBlock(), _createElementBlock(
              "text",
              {
                key: 0,
                class: "up-keyboard__tooltip__item up-keyboard__tooltip__cancel",
                onClick: $setup.onCancel
              },
              _toDisplayString($props.cancelText),
              1
              /* TEXT */
            )) : _createCommentVNode("v-if", true)
          ]),
          _createElementVNode("view", null, [
            $props.showTips ? (_openBlock(), _createElementBlock(
              "text",
              {
                key: 0,
                class: "up-keyboard__tooltip__item up-keyboard__tooltip__tips"
              },
              _toDisplayString($props.tips != "" ? $props.tips : $props.mode == "number" ? "数字键盘" : $props.mode == "card" ? "身份证键盘" : "车牌号键盘"),
              1
              /* TEXT */
            )) : _createCommentVNode("v-if", true)
          ]),
          _createElementVNode("view", {
            "hover-class": "up-hover-class",
            "hover-stay-time": 100
          }, [
            $props.showConfirm ? (_openBlock(), _createElementBlock(
              "text",
              {
                key: 0,
                onClick: $setup.onConfirm,
                class: "up-keyboard__tooltip__item up-keyboard__tooltip__submit",
                "hover-class": "up-hover-class"
              },
              _toDisplayString($props.showConfirm ? $props.confirmText : ""),
              1
              /* TEXT */
            )) : _createCommentVNode("v-if", true)
          ])
        ])) : _createCommentVNode("v-if", true),
        $props.mode == "number" || $props.mode == "card" ? (_openBlock(), _createBlock(_component_up_number_keyboard, {
          key: 1,
          random: $props.random,
          onBackspace: $setup.keyboardBackspace,
          onChange: $setup.keyboardChange,
          mode: $props.mode,
          dotDisabled: $props.dotDisabled
        }, null, 8, ["random", "mode", "dotDisabled"])) : (_openBlock(), _createBlock(_component_up_car_keyboard, {
          key: 2,
          random: $props.random,
          autoChange: $props.autoChange,
          onBackspace: $setup.keyboardBackspace,
          onChange: $setup.keyboardChange
        }, null, 8, ["random", "autoChange"]))
      ])
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["overlay", "closeOnClickOverlay", "show", "safeAreaInsetBottom", "zIndex", "customStyle"]);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-keyboard/up-keyboard.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-keyboard.js.map
