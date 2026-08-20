import { _ as __easycom_0$1 } from "../up-icon/up-icon.js";
import { r as resolveEasycom } from "../../../../App.ku.js";
import { h as randomArray } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref, computed } = globalThis.Vue;
const dot = ".";
const cardX = "X";
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-number-keyboard"
  },
  __name: "up-number-keyboard",
  props: {
    mode: {
      type: String,
      default: "number"
    },
    dotDisabled: {
      type: Boolean,
      default: true
    },
    random: {
      type: Boolean,
      default: false
    }
  },
  emits: ["change", "backspace"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const props = __props;
    const emit = __emit;
    let timer = null;
    function noop() {
    }
    const numList = computed(() => {
      let tmp = [];
      if (props.dotDisabled && props.mode == "number") {
        if (!props.random) {
          return [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        } else {
          return randomArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
        }
      } else if (!props.dotDisabled && props.mode == "number") {
        if (!props.random) {
          return [1, 2, 3, 4, 5, 6, 7, 8, 9, dot, 0];
        } else {
          return randomArray([1, 2, 3, 4, 5, 6, 7, 8, 9, dot, 0]);
        }
      } else if (props.mode == "card") {
        if (!props.random) {
          return [1, 2, 3, 4, 5, 6, 7, 8, 9, cardX, 0];
        } else {
          return randomArray([1, 2, 3, 4, 5, 6, 7, 8, 9, cardX, 0]);
        }
      }
      return tmp;
    });
    function itemStyle(index) {
      let style = new UTSJSONObject({});
      if (props.mode == "number" && props.dotDisabled && index == 9) {
        style["width"] = "464rpx";
      }
      return style;
    }
    function backspaceClick() {
      emit("backspace");
      if (timer != null) {
        clearInterval(timer);
        timer = null;
      }
      timer = setInterval(() => {
        emit("backspace");
      }, 250);
    }
    function clearTimer() {
      if (timer != null) {
        clearInterval(timer);
        timer = null;
      }
    }
    function keyboardClick(val = null) {
      let res = val;
      if (!props.dotDisabled && val != dot && val != cardX) {
        res = parseInt(val.toString());
      }
      emit("change", res);
    }
    const __returned__ = { props, emit, dot, cardX, get timer() {
      return timer;
    }, set timer(v = null) {
      timer = v;
    }, noop, numList, itemStyle, backspaceClick, clearTimer, keyboardClick };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"u-empty":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-empty__wrap":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__scroll-view-wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__scroll-view":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__nav":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__nav__line":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-empty":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-empty__wrap":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__scroll-view-wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__scroll-view":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__nav":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__nav__line":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-keyboard":{"":{"display":"flex","flexDirection":"row","justifyContent":"space-around","backgroundColor":"#e0e4e6","flexWrap":"wrap","paddingTop":8,"paddingRight":"10rpx","paddingBottom":8,"paddingLeft":"10rpx"}},"up-keyboard__button-wrapper":{"":{"boxShadow":"0 2px 0px #BBBCBE","marginTop":4,"marginRight":"6rpx","marginBottom":4,"marginLeft":"6rpx","borderTopLeftRadius":4,"borderTopRightRadius":4,"borderBottomLeftRadius":4,"borderBottomRightRadius":4}},"up-keyboard__button-wrapper__button":{"":{"width":"222rpx","height":"90rpx","backgroundColor":"#FFFFFF","display":"flex","flexDirection":"row","justifyContent":"center","alignItems":"center","borderTopLeftRadius":4,"borderTopRightRadius":4,"borderBottomLeftRadius":4,"borderBottomRightRadius":4}},"up-keyboard__button-wrapper__button__text":{"":{"fontSize":20,"fontWeight":400,"color":"#303133"}},"up-keyboard__button-wrapper__button--gray":{"":{"backgroundColor":"#c8cad2"}},"up-hover-class":{"":{"backgroundColor":"#BBBCC6","opacity":"0.7"}},"flex":{"":{"display":"flex"}}};
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, normalizeStyle: _normalizeStyle, resolveComponent: _resolveComponent, createVNode: _createVNode, withModifiers: _withModifiers } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(__resolveDynamicComponent("up-icon"), __easycom_0$1);
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: "up-keyboard",
      onTouchmove: _withModifiers($setup.noop, ["stop", "prevent"])
    },
    [
      (_openBlock(true), _createElementBlock(
        _Fragment,
        null,
        _renderList($setup.numList, (item, index) => {
          return _openBlock(), _createElementBlock("view", {
            class: "up-keyboard__button-wrapper",
            key: index
          }, [
            _createElementVNode("view", {
              class: "up-keyboard__button-wrapper__button",
              style: _normalizeStyle([$setup.itemStyle(index)]),
              onClick: ($event) => $setup.keyboardClick(item),
              "hover-class": "up-hover-class",
              "hover-stay-time": 200
            }, [
              _createElementVNode(
                "text",
                { class: "up-keyboard__button-wrapper__button__text" },
                _toDisplayString(item),
                1
                /* TEXT */
              )
            ], 12, ["onClick"])
          ]);
        }),
        128
        /* KEYED_FRAGMENT */
      )),
      _createElementVNode("view", { class: "up-keyboard__button-wrapper" }, [
        _createElementVNode(
          "view",
          {
            class: "up-keyboard__button-wrapper__button up-keyboard__button-wrapper__button--gray",
            "hover-class": "up-hover-class",
            "hover-stay-time": 200,
            onTouchstart: _withModifiers($setup.backspaceClick, ["stop"]),
            onTouchend: $setup.clearTimer
          },
          [
            _createVNode(_component_up_icon, {
              name: "backspace",
              color: "#303133",
              size: "28"
            })
          ],
          32
          /* NEED_HYDRATION */
        )
      ])
    ],
    32
    /* NEED_HYDRATION */
  );
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-number-keyboard/up-number-keyboard.uvue"]]);
export {
  __easycom_0 as _
};
//# sourceMappingURL=up-number-keyboard.js.map
