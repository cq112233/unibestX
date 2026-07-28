const { defineComponent, openBlock, createElementBlock, createCommentVNode, createElementVNode, renderSlot, toDisplayString } = globalThis.Vue
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Card",
  props: {
    title: {
      type: String,
      default: "默认标题"
    }
  },
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "bg-__3182ce_": { "": { "backgroundImage": "none", "backgroundColor": "#3182ce" } }, "bg-white": { "": { "backgroundColor": "rgba(255,255,255,var(--un-bg-opacity,1))" } }, "border-color-__edf2f7_": { "": { "borderTopColor": "#edf2f7", "borderRightColor": "#edf2f7", "borderBottomColor": "#edf2f7", "borderLeftColor": "#edf2f7" } }, "border-style-solid": { "": { "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "border-width-1px": { "": { "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "flex": { "": { "display": "flex" } }, "flex-row": { "": { "flexDirection": "row" } }, "font-bold": { "": { "fontWeight": 700 } }, "h-16px": { "": { "height": 16 } }, "items-center": { "": { "alignItems": "center" } }, "m-16px": { "": { "marginTop": 16, "marginRight": 16, "marginBottom": 16, "marginLeft": 16 } }, "mb-16px": { "": { "marginBottom": 16 } }, "mr-8px": { "": { "marginRight": 8 } }, "p-20px": { "": { "paddingTop": 20, "paddingRight": 20, "paddingBottom": 20, "paddingLeft": 20 } }, "rounded-16px": { "": { "borderTopLeftRadius": 16, "borderTopRightRadius": 16, "borderBottomRightRadius": 16, "borderBottomLeftRadius": 16 } }, "rounded-2px": { "": { "borderTopLeftRadius": 2, "borderTopRightRadius": 2, "borderBottomRightRadius": 2, "borderBottomLeftRadius": 2 } }, "text-__2d3748_": { "": { "color": "#2d3748" } }, "text-16px": { "": { "fontSize": 16 } }, "w-4px": { "": { "width": 4 } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", { class: "bg-white rounded-16px p-20px m-16px border-width-1px border-style-solid border-color-__edf2f7_" }, [
    createCommentVNode(" 标题区域 "),
    createElementVNode("view", { class: "flex flex-row items-center mb-16px" }, [
      createElementVNode("view", { class: "w-4px h-16px bg-__3182ce_ rounded-2px mr-8px" }),
      renderSlot(_ctx.$slots, "title", {}, () => [
        createElementVNode(
          "text",
          { class: "text-16px font-bold text-__2d3748_" },
          toDisplayString($props.title),
          1
          /* TEXT */
        )
      ])
    ]),
    createCommentVNode(" 内容区域插槽 "),
    renderSlot(_ctx.$slots, "default")
  ]);
}
const Card = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/basic/components/Card.uvue"]]);
export {
  Card as C
};
//# sourceMappingURL=Card.js.map
