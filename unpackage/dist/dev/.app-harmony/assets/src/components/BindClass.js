import { _ as _export_sfc } from "../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "BindClass",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const condition = ref(true);
    const extra = ref("wtu-1hb5u6g-g wtu-1ht3hqg-h");
    const flag = ref(true);
    const toggled = ref(true);
    const __returned__ = { condition, extra, flag, toggled };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "issue-822-component-child": { "": { "borderTopWidth": 2, "borderRightWidth": 2, "borderBottomWidth": 2, "borderLeftWidth": 2, "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid", "borderTopColor": "#7c3aed", "borderRightColor": "#7c3aed", "borderBottomColor": "#7c3aed", "borderLeftColor": "#7c3aed" } }, "wtu-1hu0utr-0": { "": { "--tw-border-style": "solid", "borderTopStyle": "var(--tw-border-style)", "borderRightStyle": "var(--tw-border-style)", "borderBottomStyle": "var(--tw-border-style)", "borderLeftStyle": "var(--tw-border-style)", "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "wtu-y55q6h-1": { "": { "--tw-border-style": "solid", "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "wtu-ivhrpw-2": { "": { "borderTopColor": "#999999", "borderRightColor": "#999999", "borderBottomColor": "#999999", "borderLeftColor": "#999999" } }, "wtu-19wcvi6-3": { "": { "paddingTop": "32rpx", "paddingRight": "32rpx", "paddingBottom": "32rpx", "paddingLeft": "32rpx" } }, "wtu-2oqnm6-4": { "": { "height": 200 } }, "wtu-17asn6o-5": { "": { "width": "100%" } }, "wtu-3c9fnx-6": { "": { "backgroundColor": "#87add3" } }, "wtu-1f3rwb4-7": { "": { "color": "#111111" } }, "wtu-1elh8h7-8": { "": { "paddingTop": 20.32, "paddingRight": 20.32, "paddingBottom": 20.32, "paddingLeft": 20.32 } }, "wtu-vlijqx-9": { "": { "borderTopColor": "#111111", "borderRightColor": "#111111", "borderBottomColor": "#111111", "borderLeftColor": "#111111" } }, "wtu-6mro4v-a": { "": { "backgroundColor": "#123456" } }, "wtu-g3slxv-b": { "": { "marginBottom": 12.32 } }, "wtu-zbeef1-c": { "": { "backgroundColor": "#d7700a" } }, "wtu-c5hw0m-d": { "": { "color": "#ff0000" } }, "wtu-2jxb3j-e": { "": { "backgroundColor": "#f205f6" } }, "wtu-9251zl-f": { "": { "color": "#70ed0a" } }, "wtu-1hb5u6g-g": { "": { "fontSize": "93.54rpx" } }, "wtu-1ht3hqg-h": { "": { "backgroundColor": "#d2e252" } } };
const { createElementVNode: _createElementVNode, normalizeClass: _normalizeClass, openBlock: _openBlock, createElementBlock: _createElementBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("view", { class: "wtu-1hu0utr-0 wtu-y55q6h-1 wtu-ivhrpw-2 wtu-19wcvi6-3" }, [
    _createElementVNode("view", { class: "issue-822-component-child wtu-2oqnm6-4 wtu-17asn6o-5 wtu-3c9fnx-6" }, [
      _createElementVNode("text", { class: "wtu-1f3rwb4-7" }, "issue 822 component child")
    ]),
    _createElementVNode("view", { class: "wtu-1elh8h7-8 wtu-3c9fnx-6 wtu-vlijqx-9 wtu-y55q6h-1" }, [
      _createElementVNode(
        "text",
        {
          class: _normalizeClass($setup.flag ? "wtu-6mro4v-a wtu-g3slxv-b" : "wtu-zbeef1-c")
        },
        " simple ",
        2
        /* CLASS */
      ),
      _createElementVNode(
        "text",
        {
          class: _normalizeClass([
            $setup.extra,
            { "wtu-c5hw0m-d": $setup.toggled }
          ])
        },
        " complex ",
        2
        /* CLASS */
      ),
      _createElementVNode(
        "text",
        {
          class: _normalizeClass($setup.condition ? "wtu-2jxb3j-e wtu-9251zl-f" : "")
        },
        " fallback ",
        2
        /* CLASS */
      )
    ])
  ]);
}
const BindClass = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/components/BindClass.uvue"]]);
export {
  BindClass as B
};
//# sourceMappingURL=BindClass.js.map
