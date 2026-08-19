import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
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
const _style_0 = { "bg-__3182ce_": { "": { "backgroundImage": "none", "backgroundColor": "#3182ce" } }, "border-style-solid": { "": { "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "border-width-1px": { "": { "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "flex": { "": { "display": "flex" } }, "flex-row": { "": { "flexDirection": "row" } }, "font-bold": { "": { "fontWeight": 700 } }, "h-16px": { "": { "height": 16 } }, "items-center": { "": { "alignItems": "center" } }, "m-16px": { "": { "marginTop": 16, "marginRight": 16, "marginBottom": 16, "marginLeft": 16 } }, "mb-16px": { "": { "marginBottom": 16 } }, "mr-8px": { "": { "marginRight": 8 } }, "p-20px": { "": { "paddingTop": 20, "paddingRight": 20, "paddingBottom": 20, "paddingLeft": 20 } }, "rounded-16px": { "": { "borderTopLeftRadius": 16, "borderTopRightRadius": 16, "borderBottomRightRadius": 16, "borderBottomLeftRadius": 16 } }, "rounded-2px": { "": { "borderTopLeftRadius": 2, "borderTopRightRadius": 2, "borderBottomRightRadius": 2, "borderBottomLeftRadius": 2 } }, "text-16px": { "": { "fontSize": 16 } }, "w-4px": { "": { "width": 4 } } };
const { createElementVNode: _createElementVNode, renderSlot: _renderSlot, toDisplayString: _toDisplayString, normalizeStyle: _normalizeStyle, openBlock: _openBlock, createElementBlock: _createElementBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: "rounded-16px p-20px m-16px border-width-1px border-style-solid",
      style: _normalizeStyle({
        backgroundColor: "var(--card-bg, #ffffff)",
        borderColor: "var(--border-color, #edf2f7)"
      })
    },
    [
      _createElementVNode("view", { class: "flex flex-row items-center mb-16px" }, [
        _createElementVNode("view", { class: "w-4px h-16px bg-__3182ce_ rounded-2px mr-8px" }),
        _renderSlot(_ctx.$slots, "title", {}, () => [
          _createElementVNode(
            "text",
            {
              class: "text-16px font-bold",
              style: _normalizeStyle({ color: "var(--text-color, #2d3748)" })
            },
            _toDisplayString($props.title),
            5
            /* TEXT, STYLE */
          )
        ])
      ]),
      _renderSlot(_ctx.$slots, "default")
    ],
    4
    /* STYLE */
  );
}
const Card = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/basic/components/Card.uvue"]]);
export {
  Card as C
};
//# sourceMappingURL=Card.js.map
