import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
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
const _style_0 = {"wtu-7ensv3-0":{"":{"borderTopLeftRadius":16,"borderTopRightRadius":16,"borderBottomRightRadius":16,"borderBottomLeftRadius":16}},"wtu-bpibez-1":{"":{"paddingTop":20,"paddingRight":20,"paddingBottom":20,"paddingLeft":20}},"wtu-xutmkl-2":{"":{"marginTop":16,"marginRight":16,"marginBottom":16,"marginLeft":16}},"wtu-1x9quu6-3":{"":{"--tw-border-style":"solid","borderTopStyle":"var(--tw-border-style)","borderRightStyle":"var(--tw-border-style)","borderBottomStyle":"var(--tw-border-style)","borderLeftStyle":"var(--tw-border-style)","borderTopWidth":1,"borderRightWidth":1,"borderBottomWidth":1,"borderLeftWidth":1}},"wtu-19r8swa-4":{"":{"--tw-border-style":"solid","borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}},"wtu-1xzbcj9-5":{"":{"display":"flex"}},"wtu-ermdzg-6":{"":{"flexDirection":"row"}},"wtu-1ejnel4-7":{"":{"alignItems":"center"}},"wtu-1gm6xh-8":{"":{"marginBottom":16}},"wtu-lhmr8c-9":{"":{"width":4}},"wtu-r622l8-a":{"":{"height":16}},"wtu-1rlqhz-b":{"":{"backgroundColor":"#3182ce"}},"wtu-1y9hy8q-c":{"":{"borderTopLeftRadius":2,"borderTopRightRadius":2,"borderBottomRightRadius":2,"borderBottomLeftRadius":2}},"wtu-12f14oy-d":{"":{"marginRight":8}},"wtu-12gzl1t-e":{"":{"fontSize":16}},"wtu-vvdt71-f":{"":{"--tw-font-weight":"var(--font-weight-bold, 700)","fontWeight":700}},"flex":{"":{"display":"flex"}}};
const { createElementVNode: _createElementVNode, renderSlot: _renderSlot, toDisplayString: _toDisplayString, normalizeStyle: _normalizeStyle, openBlock: _openBlock, createElementBlock: _createElementBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: "wtu-7ensv3-0 wtu-bpibez-1 wtu-xutmkl-2 wtu-1x9quu6-3 wtu-19r8swa-4",
      style: _normalizeStyle({
        backgroundColor: "var(--card-bg, #ffffff)",
        borderColor: "var(--border-color, #edf2f7)"
      })
    },
    [
      _createElementVNode("view", { class: "wtu-1xzbcj9-5 wtu-ermdzg-6 wtu-1ejnel4-7 wtu-1gm6xh-8" }, [
        _createElementVNode("view", { class: "wtu-lhmr8c-9 wtu-r622l8-a wtu-1rlqhz-b wtu-1y9hy8q-c wtu-12f14oy-d" }),
        _renderSlot(_ctx.$slots, "title", {}, () => [
          _createElementVNode(
            "text",
            {
              class: "wtu-12gzl1t-e wtu-vvdt71-f",
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
