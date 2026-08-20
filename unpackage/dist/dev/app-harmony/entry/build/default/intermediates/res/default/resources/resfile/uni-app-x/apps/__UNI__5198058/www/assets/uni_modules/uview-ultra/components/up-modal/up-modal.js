import { _ as __easycom_0 } from "../up-line/up-line.js";
import { r as resolveEasycom } from "../../../../App.ku.js";
import { _ as __easycom_1 } from "../up-loading-icon/up-loading-icon.js";
import { _ as __easycom_2$1 } from "../up-popup/up-popup.js";
import { a as addUnit } from "../../libs/function/index.js";
import { t } from "../../libs/i18n/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed, ref, watch } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-modal"
  },
  __name: "up-modal",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    confirmText: {
      type: String,
      default: "确认"
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    showCancelButton: {
      type: Boolean,
      default: false
    },
    confirmColor: {
      type: String,
      default: "#2979ff"
    },
    cancelColor: {
      type: String,
      default: "#606266"
    },
    buttonReverse: {
      type: Boolean,
      default: false
    },
    zoom: {
      type: Boolean,
      default: true
    },
    asyncClose: {
      type: Boolean,
      default: false
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    },
    negativeTop: {
      type: [String, Number],
      default: 0
    },
    width: {
      type: [String, Number],
      default: "650rpx"
    },
    confirmButtonShape: {
      type: String,
      default: ""
    },
    duration: {
      type: Number,
      default: 400
    },
    contentTextAlign: {
      type: String,
      default: "left"
    },
    asyncCloseTip: {
      type: String,
      default: ""
    },
    asyncCancelClose: {
      type: Boolean,
      default: false
    },
    contentStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    },
    customClass: {
      type: String,
      default: ""
    }
  },
  emits: ["confirm", "cancel", "close", "update:show", "cancelOnAsync"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const props = __props;
    const emit = __emit;
    const loading = ref(false);
    watch(() => {
      return props.show;
    }, (n) => {
      if (n && loading.value) {
        loading.value = false;
      }
    });
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
    const popupCustomStyle = computed(() => {
      return new UTSJSONObject({
        borderRadius: "6px",
        overflow: "hidden",
        marginTop: `-${addUnit(props.negativeTop)}`
      });
    });
    const modalStyle = computed(() => {
      return new UTSJSONObject({
        width: addUnit(props.width)
      });
    });
    const buttonGroupStyle = computed(() => {
      return new UTSJSONObject({
        flexDirection: props.buttonReverse ? "row-reverse" : "row"
      });
    });
    const cancelTextStyle = computed(() => {
      return new UTSJSONObject({
        color: props.cancelColor
      });
    });
    const confirmTextStyle = computed(() => {
      return new UTSJSONObject({
        color: props.confirmColor
      });
    });
    const contentTextStyle = computed(() => {
      return new UTSJSONObject({
        textAlign: props.contentTextAlign
      });
    });
    const contentStyleCpu = computed(() => {
      var _a2;
      const style = (_a2 = props.contentStyle) !== null && _a2 !== void 0 ? _a2 : new UTSJSONObject({});
      style["paddingTop"] = `${props.title != "" ? 12 : 25}px`;
      return style;
    });
    function confirmHandler() {
      if (props.asyncClose) {
        loading.value = true;
      } else {
        emit("update:show", false);
      }
      emit("confirm");
    }
    function cancelHandler() {
      if (props.asyncClose && loading.value) {
        if (props.asyncCloseTip != "") {
          uni.showToast({
            title: props.asyncCloseTip,
            icon: "none"
          });
        }
        emit("cancelOnAsync");
      } else {
        if (!props.asyncCancelClose) {
          emit("update:show", false);
        }
      }
      emit("cancel");
    }
    function clickHandler() {
      if (props.closeOnClickOverlay) {
        emit("update:show", false);
      }
      emit("close");
    }
    const __returned__ = { props, emit, loading, elCancelText, elConfirmText, popupCustomStyle, modalStyle, buttonGroupStyle, cancelTextStyle, confirmTextStyle, contentTextStyle, contentStyleCpu, confirmHandler, cancelHandler, clickHandler };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"u-empty":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-empty__wrap":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__scroll-view-wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__scroll-view":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__nav":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__nav__line":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-empty":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-empty__wrap":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__scroll-view-wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__scroll-view":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__nav":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__nav__line":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-modal":{"":{"width":"650rpx","borderTopLeftRadius":6,"borderTopRightRadius":6,"borderBottomRightRadius":6,"borderBottomLeftRadius":6,"overflow":"hidden"}},"up-modal__title":{"":{"paddingTop":25,"fontWeight":"bold","textAlign":"center","fontSize":16,"color":"#303133"}},"up-modal__content":{"":{"paddingTop":12,"paddingRight":20,"paddingBottom":20,"paddingLeft":20,"display":"flex","flexDirection":"row","justifyContent":"center"}},"up-modal__content__text":{"":{"fontSize":14,"color":"#606266","flexGrow":1,"flexShrink":1,"flexBasis":"0%"}},"up-modal__button-group":{"":{"display":"flex","flexDirection":"row"}},"up-modal__button-group--confirm-button":{"":{"flexDirection":"column","paddingTop":0,"paddingRight":20,"paddingBottom":15,"paddingLeft":20}},"up-modal__button-group__wrapper":{"":{"flexGrow":1,"flexShrink":1,"flexBasis":"0%","display":"flex","flexDirection":"row","justifyContent":"center","alignItems":"center","height":48}},"up-modal__button-group__wrapper--confirm":{"":{"height":48,"lineHeight":"48px","fontSize":16,"color":"#606266","textAlign":"center","backgroundColor":"#ffffff"}},"up-modal__button-group__wrapper--only-cancel":{"":{"borderBottomLeftRadius":6,"borderBottomRightRadius":6}},"up-modal__button-group__wrapper--only-confirm":{"":{"borderBottomLeftRadius":6,"borderBottomRightRadius":6}},"up-modal__button-group__wrapper--cancel":{"":{"height":48,"lineHeight":"48px","fontSize":16,"color":"#606266","textAlign":"center","backgroundColor":"#ffffff"}},"up-modal__button-group__wrapper--hover":{"":{"backgroundColor":"#e6e6e6"}},"up-modal__button-group__wrapper__text":{"":{"color":"#606266","fontSize":16,"textAlign":"center"}},"flex":{"":{"display":"flex"}}};
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { toDisplayString: _toDisplayString, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, renderSlot: _renderSlot, normalizeStyle: _normalizeStyle, createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, normalizeClass: _normalizeClass, createBlock: _createBlock, Fragment: _Fragment, withCtx: _withCtx } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_line = resolveEasycom(__resolveDynamicComponent("up-line"), __easycom_0);
  const _component_up_loading_icon = resolveEasycom(__resolveDynamicComponent("up-loading-icon"), __easycom_1);
  const _component_up_popup = resolveEasycom(__resolveDynamicComponent("up-popup"), __easycom_2$1);
  return _openBlock(), _createBlock(_component_up_popup, {
    mode: "center",
    zoom: $props.zoom,
    show: $props.show,
    class: _normalizeClass([$props.customClass]),
    customStyle: $setup.popupCustomStyle,
    closeOnClickOverlay: $props.closeOnClickOverlay,
    safeAreaInsetBottom: false,
    duration: $props.duration,
    onClick: $setup.clickHandler
  }, {
    bottom: _withCtx(() => [
      _renderSlot(_ctx.$slots, "popupBottom")
    ]),
    default: _withCtx(() => [
      _createElementVNode(
        "view",
        {
          class: "up-modal",
          style: _normalizeStyle($setup.modalStyle)
        },
        [
          $props.title != "" ? (_openBlock(), _createElementBlock(
            "view",
            {
              key: 0,
              class: "up-modal__title"
            },
            _toDisplayString($props.title),
            1
            /* TEXT */
          )) : _createCommentVNode("v-if", true),
          _createElementVNode(
            "view",
            {
              class: "up-modal__content",
              style: _normalizeStyle($setup.contentStyleCpu)
            },
            [
              _renderSlot(_ctx.$slots, "default", {}, () => [
                _createElementVNode(
                  "text",
                  {
                    class: "up-modal__content__text",
                    style: _normalizeStyle($setup.contentTextStyle)
                  },
                  _toDisplayString($props.content),
                  5
                  /* TEXT, STYLE */
                )
              ])
            ],
            4
            /* STYLE */
          ),
          _ctx.$slots["confirmButton"] != null ? (_openBlock(), _createElementBlock("view", {
            key: 1,
            class: "up-modal__button-group--confirm-button"
          }, [
            _renderSlot(_ctx.$slots, "confirmButton")
          ])) : (_openBlock(), _createElementBlock(
            _Fragment,
            { key: 2 },
            [
              _createVNode(_component_up_line),
              _createElementVNode(
                "view",
                {
                  class: "up-modal__button-group",
                  style: _normalizeStyle($setup.buttonGroupStyle)
                },
                [
                  $props.showCancelButton ? (_openBlock(), _createElementBlock(
                    "view",
                    {
                      key: 0,
                      class: _normalizeClass(["up-modal__button-group__wrapper up-modal__button-group__wrapper--cancel", [$props.showCancelButton && !$props.showConfirmButton ? "up-modal__button-group__wrapper--only-cancel" : ""]]),
                      "hover-stay-time": 150,
                      "hover-class": "up-modal__button-group__wrapper--hover",
                      onClick: $setup.cancelHandler
                    },
                    [
                      _createElementVNode(
                        "text",
                        {
                          class: "up-modal__button-group__wrapper__text",
                          style: _normalizeStyle($setup.cancelTextStyle)
                        },
                        _toDisplayString($setup.elCancelText),
                        5
                        /* TEXT, STYLE */
                      )
                    ],
                    2
                    /* CLASS */
                  )) : _createCommentVNode("v-if", true),
                  $props.showConfirmButton && $props.showCancelButton ? (_openBlock(), _createBlock(_component_up_line, {
                    key: 1,
                    direction: "column"
                  })) : _createCommentVNode("v-if", true),
                  $props.showConfirmButton ? (_openBlock(), _createElementBlock(
                    "view",
                    {
                      key: 2,
                      class: _normalizeClass(["up-modal__button-group__wrapper up-modal__button-group__wrapper--confirm", [!$props.showCancelButton && $props.showConfirmButton ? "up-modal__button-group__wrapper--only-confirm" : ""]]),
                      "hover-stay-time": 150,
                      "hover-class": "up-modal__button-group__wrapper--hover",
                      onClick: $setup.confirmHandler
                    },
                    [
                      $setup.loading ? (_openBlock(), _createBlock(_component_up_loading_icon, { key: 0 })) : (_openBlock(), _createElementBlock(
                        "text",
                        {
                          key: 1,
                          class: "up-modal__button-group__wrapper__text",
                          style: _normalizeStyle($setup.confirmTextStyle)
                        },
                        _toDisplayString($setup.elConfirmText),
                        5
                        /* TEXT, STYLE */
                      ))
                    ],
                    2
                    /* CLASS */
                  )) : _createCommentVNode("v-if", true)
                ],
                4
                /* STYLE */
              )
            ],
            64
            /* STABLE_FRAGMENT */
          ))
        ],
        4
        /* STYLE */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["zoom", "show", "class", "customStyle", "closeOnClickOverlay", "duration"]);
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-modal/up-modal.uvue"]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-modal.js.map
