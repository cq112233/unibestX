import { _ as __easycom_1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-line/up-line&";
const { defineComponent, resolveDynamicComponent, openBlock, createElementBlock, normalizeStyle, normalizeClass, renderSlot, createElementVNode, toDisplayString, createCommentVNode, createBlock } = globalThis.Vue
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { d as defProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-cell-group/cellGroup&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "up-cell-group"
  },
  __name: "up-cell-group",
  props: {
    title: {
      type: String,
      default: defProps.getString("cellGroup.title")
    },
    border: {
      type: Boolean,
      default: defProps.getBoolean("cellGroup.border")
    }
  },
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const props = __props;
    const __returned__ = { props };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-cell-group__title": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 8, "paddingLeft": 16 } }, "up-cell-group__title__text": { "": { "fontSize": 15, "lineHeight": "16px", "color": "#303133" } }, "up-cell-group__wrapper": { "": { "position": "relative" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_line = resolveEasycom(resolveDynamicComponent("up-line"), __easycom_1);
  return openBlock(), createElementBlock(
    "view",
    {
      style: normalizeStyle([_ctx.$up.addStyle(_ctx.customStyle)]),
      class: normalizeClass([[_ctx.customClass], "up-cell-group"])
    },
    [
      $props.title ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: "up-cell-group__title"
      }, [
        renderSlot(_ctx.$slots, "title", {}, () => [
          createElementVNode(
            "text",
            { class: "up-cell-group__title__text" },
            toDisplayString($props.title),
            1
            /* TEXT */
          )
        ])
      ])) : createCommentVNode("v-if", true),
      createElementVNode("view", { class: "up-cell-group__wrapper" }, [
        $props.border ? (openBlock(), createBlock(_component_up_line, { key: 0 })) : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "default")
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-cell-group/up-cell-group.uvue"]]);
export {
  __easycom_3 as _
};
//# sourceMappingURL=up-cell-group.js.map
