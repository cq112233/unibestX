import { _ as __easycom_41 } from "../up-loading-icon/up-loading-icon.js";
const { defineComponent, resolveDynamicComponent, openBlock, createBlock, withCtx, createElementVNode, createElementBlock, normalizeStyle, renderSlot, toDisplayString } = globalThis.Vue
import { r as resolveEasycom } from "../../../../App.ku.js";
import { _ as __easycom_11 } from "../up-transition/up-transition.js";
import { p as propsLoadingPage } from "./props.js";
import { m as mpMixin } from "../../libs/mixin/mpMixin.js";
import { m as mixin } from "../../libs/mixin/mixin.js";
import { a as addUnit } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = defineComponent({
  name: "up-loading-page",
  mixins: [mpMixin, mixin, propsLoadingPage],
  data() {
    return {};
  },
  computed: {
    customStyleParse() {
      return this.customStyle;
    }
  },
  methods: {
    addUnit(str = null) {
      return addUnit(str);
    }
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-loading-page": { "": { "display": "flex", "flexDirection": "column", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "alignItems": "center", "justifyContent": "center" } }, "up-loading-page__warpper": { "": { "marginTop": -150, "justifyContent": "center", "alignItems": "center", "display": "flex", "flexDirection": "column" } }, "up-loading-page__warpper__loading-icon": { "": { "marginBottom": 10 } }, "up-loading-page__warpper__loading-icon__img": { "": { "width": 40, "height": 40 } }, "up-loading-page__warpper__text": { "": { "fontSize": 19, "color": "#c8c8c8" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_loading_icon = resolveEasycom(resolveDynamicComponent("up-loading-icon"), __easycom_41);
  const _component_up_transition = resolveEasycom(resolveDynamicComponent("up-transition"), __easycom_11);
  return openBlock(), createBlock(_component_up_transition, {
    show: _ctx.loading,
    "custom-style": {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: _ctx.bgColor,
      display: "flex",
      zIndex: _ctx.zIndex,
      ...$options.customStyleParse
    }
  }, {
    default: withCtx(() => [
      createElementVNode("view", { class: "up-loading-page" }, [
        createElementVNode("view", { class: "up-loading-page__warpper" }, [
          createElementVNode("view", { class: "up-loading-page__warpper__loading-icon" }, [
            _ctx.image ? (openBlock(), createElementBlock("image", {
              key: 0,
              src: _ctx.image,
              class: "up-loading-page__warpper__loading-icon__img",
              mode: "widthFit",
              style: normalizeStyle({
                width: $options.addUnit(_ctx.iconSize),
                height: $options.addUnit(_ctx.iconSize)
              })
            }, null, 12, ["src"])) : (openBlock(), createBlock(_component_up_loading_icon, {
              key: 1,
              mode: _ctx.loadingMode,
              size: $options.addUnit(_ctx.iconSize),
              color: _ctx.loadingColor
            }, null, 8, ["mode", "size", "color"]))
          ]),
          renderSlot(_ctx.$slots, "default", {}, () => [
            createElementVNode(
              "text",
              {
                class: "up-loading-page__warpper__text",
                style: normalizeStyle({
                  fontSize: $options.addUnit(_ctx.fontSize),
                  color: _ctx.color
                })
              },
              toDisplayString(_ctx.loadingText),
              5
              /* TEXT, STYLE */
            )
          ])
        ])
      ])
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["show", "custom-style"]);
}
const __easycom_13 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-loading-page/up-loading-page.uvue"]]);
export {
  __easycom_13 as _
};
//# sourceMappingURL=up-loading-page.js.map
