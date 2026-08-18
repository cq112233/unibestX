import { t } from "../../libs/i18n/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-toolbar"
  },
  __name: "up-toolbar",
  props: {
    show: {
      type: Boolean,
      default: true
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    confirmText: {
      type: String,
      default: "确认"
    },
    cancelColor: {
      type: String,
      default: "#909193"
    },
    confirmColor: {
      type: String,
      default: "#3c9cff"
    },
    title: {
      type: String,
      default: ""
    },
    rightSlot: {
      type: Boolean,
      default: false
    }
  },
  emits: ["confirm", "cancel"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const props = __props;
    const emit = __emit;
    const elCancelText = computed(() => {
      if (props.cancelText == "取消" || props.cancelText == "") {
        return t("up_common_cancel", new UTSJSONObject({}));
      }
      return props.cancelText;
    });
    const elConfirmText = computed(() => {
      if (props.confirmText == "确认" || props.confirmText == "确定" || props.confirmText == "") {
        return t("up_common_confirm", new UTSJSONObject({}));
      }
      return props.confirmText;
    });
    const cancelStyle = computed(() => {
      let style = new UTSJSONObject({});
      if (props.cancelColor != "") {
        style["color"] = props.cancelColor;
      }
      return style;
    });
    const confirmStyle = computed(() => {
      let style = new UTSJSONObject({});
      if (props.confirmColor != "" && props.confirmColor != "#3c9cff") {
        style["color"] = props.confirmColor;
      }
      return style;
    });
    function noop() {
    }
    function cancel() {
      emit("cancel");
    }
    function confirm() {
      emit("confirm");
    }
    const __returned__ = { props, emit, elCancelText, elConfirmText, cancelStyle, confirmStyle, noop, cancel, confirm };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"u-empty":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-empty__wrap":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__scroll-view-wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__scroll-view":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__nav":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__nav__line":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-empty":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-empty__wrap":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__scroll-view-wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__scroll-view":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__nav":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__nav__line":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-toolbar":{"":{"height":42,"display":"flex","flexDirection":"row","justifyContent":"space-between","alignItems":"center"}},"up-toolbar__wrapper__cancel":{"":{"color":"#909193","fontSize":15,"paddingTop":0,"paddingRight":15,"paddingBottom":0,"paddingLeft":15}},"up-toolbar__title":{"":{"color":"#303133","paddingTop":0,"paddingRight":"60rpx","paddingBottom":0,"paddingLeft":"60rpx","fontSize":16,"flexGrow":1,"flexShrink":1,"flexBasis":"0%","textAlign":"center"}},"up-toolbar__wrapper__left":{"":{"display":"flex","flexDirection":"row"}},"up-toolbar__wrapper__right":{"":{"display":"flex","flexDirection":"row"}},"up-toolbar__wrapper__confirm":{"":{"color":"var(--theme-color, #0957de)","fontSize":15,"paddingTop":0,"paddingRight":15,"paddingBottom":0,"paddingLeft":15}},"flex":{"":{"display":"flex"}},"up-hover-class":{"":{"opacity":"0.7"}},"up-line-1":{"":{"overflow":"hidden"}}};
const { toDisplayString: _toDisplayString, normalizeStyle: _normalizeStyle, createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, renderSlot: _renderSlot, withModifiers: _withModifiers } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.show ? (_openBlock(), _createElementBlock(
    "view",
    {
      key: 0,
      class: "up-toolbar",
      onTouchmove: _withModifiers($setup.noop, ["stop"])
    },
    [
      _createElementVNode("view", { class: "up-toolbar__left" }, [
        _createElementVNode("view", {
          class: "up-toolbar__cancel__wrapper",
          "hover-class": "up-hover-class"
        }, [
          _createElementVNode(
            "text",
            {
              class: "up-toolbar__wrapper__cancel",
              onClick: $setup.cancel,
              style: _normalizeStyle($setup.cancelStyle)
            },
            _toDisplayString($setup.elCancelText),
            5
            /* TEXT, STYLE */
          )
        ])
      ]),
      $props.title != "" ? (_openBlock(), _createElementBlock(
        "text",
        {
          key: 0,
          class: "up-toolbar__title up-line-1"
        },
        _toDisplayString($props.title),
        1
        /* TEXT */
      )) : _createCommentVNode("v-if", true),
      _createElementVNode("view", { class: "up-toolbar__right" }, [
        !$props.rightSlot ? (_openBlock(), _createElementBlock("view", {
          key: 0,
          class: "up-toolbar__confirm__wrapper",
          "hover-class": "up-hover-class"
        }, [
          _createElementVNode(
            "text",
            {
              class: "up-toolbar__wrapper__confirm",
              onClick: $setup.confirm,
              style: _normalizeStyle($setup.confirmStyle)
            },
            _toDisplayString($setup.elConfirmText),
            5
            /* TEXT, STYLE */
          )
        ])) : _renderSlot(_ctx.$slots, "right", { key: 1 })
      ])
    ],
    32
    /* NEED_HYDRATION */
  )) : _createCommentVNode("v-if", true);
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-toolbar/up-toolbar.uvue"]]);
export {
  __easycom_0 as _
};
//# sourceMappingURL=up-toolbar.js.map
