import { _ as __easycom_1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-line/up-line&";
const { defineComponent, resolveDynamicComponent, openBlock, createBlock, normalizeClass, withCtx, renderSlot, createElementVNode, normalizeStyle, createElementBlock, toDisplayString, createCommentVNode, Fragment, createVNode } = globalThis.Vue
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { _ as __easycom_1$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon&";
import { _ as __easycom_2$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-popup/up-popup&";
import { p as propsModal } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-modal/props&";
import { m as mpMixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mpMixin&";
import { m as mixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mixin&";
import { a as addUnit } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const _sfc_main = defineComponent({
  name: "up-modal",
  mixins: [mpMixin, mixin, propsModal],
  data() {
    return {
      loading: false
    };
  },
  watch: {
    show(n) {
      if (n && this.loading)
        this.loading = false;
    }
  },
  emits: ["confirm", "cancel", "close", "update:show", "cancelOnAsync"],
  computed: {
    contentStyleCpu() {
      let style = this.contentStyle;
      style["paddingTop"] = `${this.title != "" ? 12 : 25}px`;
      return style;
    }
  },
  methods: {
    addUnit(val = null) {
      return addUnit(val);
    },
    // 点击确定按钮
    confirmHandler() {
      if (this.asyncClose) {
        this.loading = true;
      } else {
        this.$emit("update:show", false);
      }
      this.$emit("confirm");
    },
    // 点击取消按钮
    cancelHandler() {
      if (this.asyncClose && this.loading) {
        if (this.asyncCloseTip != "") {
          uni.showToast({
            title: this.asyncCloseTip,
            icon: "none"
          });
        }
        this.$emit("cancelOnAsync");
      } else {
        if (!this.asyncCancelClose) {
          this.$emit("update:show", false);
        }
      }
      this.$emit("cancel");
    },
    // 点击遮罩
    // 从原理上来说，modal的遮罩点击，并不是真的点击到了遮罩
    // 因为modal依赖于popup的中部弹窗类型，中部弹窗比较特殊，虽有然遮罩，但是为了让弹窗内容能flex居中
    // 多了一个透明的遮罩，此透明的遮罩会覆盖在灰色的遮罩上，所以实际上是点击不到灰色遮罩的，popup内部在
    // 透明遮罩的子元素做了.stop处理，所以点击内容区，也不会导致误触发
    clickHandler() {
      if (this.closeOnClickOverlay) {
        this.$emit("update:show", false);
        this.$emit("close");
      }
    }
  }
});
const _style_0 = { "up-modal": { "": { "width": "650rpx", "borderTopLeftRadius": 6, "borderTopRightRadius": 6, "borderBottomRightRadius": 6, "borderBottomLeftRadius": 6, "overflow": "hidden" } }, "up-modal__title": { "": { "display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "fontSize": 16, "fontWeight": "bold", "color": "#606266", "textAlign": "center", "paddingTop": 25 } }, "up-modal__content": { "": { "paddingTop": 12, "paddingRight": 25, "paddingBottom": 25, "paddingLeft": 25, "display": "flex", "flexDirection": "row", "justifyContent": "center" } }, "up-modal__content__text": { "": { "fontSize": 15, "color": "#606266", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "up-modal__button-group": { "": { "display": "flex", "flexDirection": "row" } }, "up-modal__button-group--confirm-button": { "": { "flexDirection": "column", "paddingTop": 0, "paddingRight": 25, "paddingBottom": 15, "paddingLeft": 25 } }, "up-modal__button-group__wrapper": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "height": 48 } }, "up-modal__button-group__wrapper--confirm": { "": { "borderBottomRightRadius": 6 } }, "up-modal__button-group__wrapper--only-cancel": { "": { "borderBottomRightRadius": 6 } }, "up-modal__button-group__wrapper--cancel": { "": { "borderBottomLeftRadius": 6 } }, "up-modal__button-group__wrapper--only-confirm": { "": { "borderBottomLeftRadius": 6 } }, "up-modal__button-group__wrapper--hover": { "": { "backgroundColor": "#f3f4f6" } }, "up-modal__button-group__wrapper__text": { "": { "color": "#606266", "fontSize": 16, "textAlign": "center" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_line = resolveEasycom(resolveDynamicComponent("up-line"), __easycom_1);
  const _component_up_loading_icon = resolveEasycom(resolveDynamicComponent("up-loading-icon"), __easycom_1$1);
  const _component_up_popup = resolveEasycom(resolveDynamicComponent("up-popup"), __easycom_2$1);
  return openBlock(), createBlock(_component_up_popup, {
    mode: "center",
    zoom: _ctx.zoom,
    show: _ctx.show,
    class: normalizeClass([_ctx.customClass]),
    customStyle: {
      borderRadius: "6px",
      overflow: "hidden",
      marginTop: `-${$options.addUnit(_ctx.negativeTop)}`
    },
    closeOnClickOverlay: _ctx.closeOnClickOverlay,
    safeAreaInsetBottom: false,
    duration: _ctx.duration,
    onClick: $options.clickHandler
  }, {
    bottom: withCtx(() => [
      renderSlot(_ctx.$slots, "popupBottom")
    ]),
    default: withCtx(() => [
      createElementVNode(
        "view",
        {
          class: "up-modal",
          style: normalizeStyle({
            width: $options.addUnit(_ctx.width)
          })
        },
        [
          _ctx.title ? (openBlock(), createElementBlock(
            "view",
            {
              key: 0,
              class: "up-modal__title"
            },
            toDisplayString(_ctx.title),
            1
            /* TEXT */
          )) : createCommentVNode("v-if", true),
          createElementVNode(
            "view",
            {
              class: "up-modal__content",
              style: normalizeStyle($options.contentStyleCpu)
            },
            [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createElementVNode(
                  "text",
                  {
                    class: "up-modal__content__text",
                    style: normalizeStyle({ textAlign: _ctx.contentTextAlign })
                  },
                  toDisplayString(_ctx.content),
                  5
                  /* TEXT, STYLE */
                )
              ])
            ],
            4
            /* STYLE */
          ),
          _ctx.$slots["confirmButton"] ? (openBlock(), createElementBlock("view", {
            key: 1,
            class: "up-modal__button-group--confirm-button"
          }, [
            renderSlot(_ctx.$slots, "confirmButton")
          ])) : (openBlock(), createElementBlock(
            Fragment,
            { key: 2 },
            [
              createVNode(_component_up_line),
              createElementVNode(
                "view",
                {
                  class: "up-modal__button-group",
                  style: normalizeStyle({
                    flexDirection: _ctx.buttonReverse ? "row-reverse" : "row"
                  })
                },
                [
                  _ctx.showCancelButton ? (openBlock(), createElementBlock(
                    "view",
                    {
                      key: 0,
                      class: normalizeClass(["up-modal__button-group__wrapper up-modal__button-group__wrapper--cancel", [_ctx.showCancelButton && !_ctx.showConfirmButton ? "up-modal__button-group__wrapper--only-cancel" : ""]]),
                      "hover-stay-time": 150,
                      "hover-class": "up-modal__button-group__wrapper--hover",
                      onClick: _cache[0] || (_cache[0] = (...args) => $options.cancelHandler && $options.cancelHandler(...args))
                    },
                    [
                      createElementVNode(
                        "text",
                        {
                          class: "up-modal__button-group__wrapper__text",
                          style: normalizeStyle({
                            color: _ctx.cancelColor
                          })
                        },
                        toDisplayString(_ctx.cancelText),
                        5
                        /* TEXT, STYLE */
                      )
                    ],
                    2
                    /* CLASS */
                  )) : createCommentVNode("v-if", true),
                  _ctx.showConfirmButton && _ctx.showCancelButton ? (openBlock(), createBlock(_component_up_line, {
                    key: 1,
                    direction: "column"
                  })) : createCommentVNode("v-if", true),
                  _ctx.showConfirmButton ? (openBlock(), createElementBlock(
                    "view",
                    {
                      key: 2,
                      class: normalizeClass(["up-modal__button-group__wrapper up-modal__button-group__wrapper--confirm", [!_ctx.showCancelButton && _ctx.showConfirmButton ? "up-modal__button-group__wrapper--only-confirm" : ""]]),
                      "hover-stay-time": 150,
                      "hover-class": "up-modal__button-group__wrapper--hover",
                      onClick: _cache[1] || (_cache[1] = (...args) => $options.confirmHandler && $options.confirmHandler(...args))
                    },
                    [
                      $data.loading ? (openBlock(), createBlock(_component_up_loading_icon, { key: 0 })) : (openBlock(), createElementBlock(
                        "text",
                        {
                          key: 1,
                          class: "up-modal__button-group__wrapper__text",
                          style: normalizeStyle({
                            color: _ctx.confirmColor
                          })
                        },
                        toDisplayString(_ctx.confirmText),
                        5
                        /* TEXT, STYLE */
                      ))
                    ],
                    2
                    /* CLASS */
                  )) : createCommentVNode("v-if", true)
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
  }, 8, ["zoom", "show", "class", "customStyle", "closeOnClickOverlay", "duration", "onClick"]);
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-modal/up-modal.uvue"]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-modal.js.map
