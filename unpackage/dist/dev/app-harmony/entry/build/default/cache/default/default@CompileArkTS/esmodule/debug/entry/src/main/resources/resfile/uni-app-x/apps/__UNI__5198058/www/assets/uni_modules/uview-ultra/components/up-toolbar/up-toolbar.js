const { defineComponent, openBlock, createElementBlock, withModifiers, createElementVNode, normalizeStyle, toDisplayString, createCommentVNode, renderSlot } = globalThis.Vue
import { p as propsToolbar } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-toolbar/props&";
import { m as mpMixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mpMixin&";
import { m as mixin } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/mixin/mixin&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const _sfc_main = defineComponent({
  name: "up-toolbar",
  mixins: [mpMixin, mixin, propsToolbar],
  emits: ["confirm", "cancel"],
  computed: {
    elConfirmColor() {
      if (this.confirmColor == "#3c9cff") {
        return "";
      }
      return this.confirmColor;
    }
  },
  created() {
  },
  methods: {
    // 点击取消按钮
    cancel() {
      this.$emit("cancel");
    },
    // 点击确定按钮
    confirm() {
      this.$emit("confirm");
    }
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-toolbar": { "": { "height": 42, "display": "flex", "flexDirection": "row", "justifyContent": "space-between", "alignItems": "center" } }, "up-toolbar__wrapper__cancel": { "": { "color": "#909193", "fontSize": 15, "paddingTop": 0, "paddingRight": 15, "paddingBottom": 0, "paddingLeft": 15 } }, "up-toolbar__title": { "": { "color": "#303133", "paddingTop": 0, "paddingRight": "60rpx", "paddingBottom": 0, "paddingLeft": "60rpx", "fontSize": 16, "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "textAlign": "center" } }, "up-toolbar__wrapper__left": { "": { "display": "flex", "flexDirection": "row" } }, "up-toolbar__wrapper__right": { "": { "display": "flex", "flexDirection": "row" } }, "up-toolbar__wrapper__confirm": { "": { "color": "var(--theme-color, #0957de)", "fontSize": 15, "paddingTop": 0, "paddingRight": 15, "paddingBottom": 0, "paddingLeft": 15 } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.show ? (openBlock(), createElementBlock(
    "view",
    {
      key: 0,
      class: "up-toolbar",
      onTouchmove: _cache[2] || (_cache[2] = withModifiers((...args) => _ctx.noop && _ctx.noop(...args), ["stop"]))
    },
    [
      createElementVNode("view", { class: "up-toolbar__left" }, [
        createElementVNode("view", {
          class: "up-toolbar__cancel__wrapper",
          "hover-class": "up-hover-class"
        }, [
          createElementVNode(
            "text",
            {
              class: "up-toolbar__wrapper__cancel",
              onClick: _cache[0] || (_cache[0] = (...args) => $options.cancel && $options.cancel(...args)),
              style: normalizeStyle({
                color: _ctx.cancelColor
              })
            },
            toDisplayString(_ctx.cancelText),
            5
            /* TEXT, STYLE */
          )
        ])
      ]),
      _ctx.title ? (openBlock(), createElementBlock(
        "text",
        {
          key: 0,
          class: "up-toolbar__title up-line-1"
        },
        toDisplayString(_ctx.title),
        1
        /* TEXT */
      )) : createCommentVNode("v-if", true),
      createElementVNode("view", { class: "up-toolbar__right" }, [
        !_ctx.rightSlot ? (openBlock(), createElementBlock("view", {
          key: 0,
          class: "up-toolbar__confirm__wrapper",
          "hover-class": "up-hover-class"
        }, [
          createElementVNode(
            "text",
            {
              class: "up-toolbar__wrapper__confirm",
              onClick: _cache[1] || (_cache[1] = (...args) => $options.confirm && $options.confirm(...args)),
              style: normalizeStyle({
                color: $options.elConfirmColor
              })
            },
            toDisplayString(_ctx.confirmText),
            5
            /* TEXT, STYLE */
          )
        ])) : renderSlot(_ctx.$slots, "right", { key: 1 })
      ])
    ],
    32
    /* NEED_HYDRATION */
  )) : createCommentVNode("v-if", true);
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-toolbar/up-toolbar.uvue"]]);
export {
  __easycom_0 as _
};
//# sourceMappingURL=up-toolbar.js.map
