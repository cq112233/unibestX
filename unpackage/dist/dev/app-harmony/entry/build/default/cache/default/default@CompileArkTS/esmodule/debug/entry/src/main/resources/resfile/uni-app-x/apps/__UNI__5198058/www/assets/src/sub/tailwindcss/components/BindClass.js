import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "BindClass",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const condition = ref(true);
    const extra = ref("wtu-1026j5x-g wtu-1cznegj-h");
    const flag = ref(true);
    const toggled = ref(true);
    const __returned__ = { condition, extra, flag, toggled };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "issue-822-component-child": { "": { "borderTopWidth": 2, "borderRightWidth": 2, "borderBottomWidth": 2, "borderLeftWidth": 2, "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid", "borderTopColor": "#7c3aed", "borderRightColor": "#7c3aed", "borderBottomColor": "#7c3aed", "borderLeftColor": "#7c3aed" } }, "wtu-1m49j0s-0": { "": { "--tw-border-style": "solid", "borderTopStyle": "var(--tw-border-style)", "borderRightStyle": "var(--tw-border-style)", "borderBottomStyle": "var(--tw-border-style)", "borderLeftStyle": "var(--tw-border-style)", "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "wtu-n3ob0u-1": { "": { "--tw-border-style": "solid", "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "wtu-1vc4oyx-2": { "": { "borderTopColor": "#999999", "borderRightColor": "#999999", "borderBottomColor": "#999999", "borderLeftColor": "#999999" } }, "wtu-or3vkz-3": { "": { "paddingTop": "32rpx", "paddingRight": "32rpx", "paddingBottom": "32rpx", "paddingLeft": "32rpx" } }, "wtu-12ysphb-4": { "": { "height": 200 } }, "wtu-rj66cr-5": { "": { "width": "100%" } }, "wtu-79qmlq-6": { "": { "backgroundColor": "#87add3" } }, "wtu-1qewyjj-7": { "": { "color": "#111111" } }, "wtu-hahnwa-8": { "": { "paddingTop": 20.32, "paddingRight": 20.32, "paddingBottom": 20.32, "paddingLeft": 20.32 } }, "wtu-1g1ucfi-9": { "": { "borderTopColor": "#111111", "borderRightColor": "#111111", "borderBottomColor": "#111111", "borderLeftColor": "#111111" } }, "wtu-uj646o-a": { "": { "backgroundColor": "#123456" } }, "wtu-v1dixk-b": { "": { "marginBottom": 12.32 } }, "wtu-s9xl9u-c": { "": { "backgroundColor": "#d7700a" } }, "wtu-1l82hkd-d": { "": { "color": "#ff0000" } }, "wtu-1hf1vho-e": { "": { "backgroundColor": "#f205f6" } }, "wtu-6xzka-f": { "": { "color": "#70ed0a" } }, "wtu-1026j5x-g": { "": { "fontSize": "93.54rpx" } }, "wtu-1cznegj-h": { "": { "backgroundColor": "#d2e252" } } };
const { createElementVNode: _createElementVNode, normalizeClass: _normalizeClass, openBlock: _openBlock, createElementBlock: _createElementBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("view", { class: "wtu-1m49j0s-0 wtu-n3ob0u-1 wtu-1vc4oyx-2 wtu-or3vkz-3" }, [
    _createElementVNode("view", { class: "issue-822-component-child wtu-12ysphb-4 wtu-rj66cr-5 wtu-79qmlq-6" }, [
      _createElementVNode("text", { class: "wtu-1qewyjj-7" }, "issue 822 component child")
    ]),
    _createElementVNode("view", { class: "wtu-hahnwa-8 wtu-79qmlq-6 wtu-1g1ucfi-9 wtu-n3ob0u-1" }, [
      _createElementVNode(
        "text",
        {
          class: _normalizeClass($setup.flag ? "wtu-uj646o-a wtu-v1dixk-b" : "wtu-s9xl9u-c")
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
            { "wtu-1l82hkd-d": $setup.toggled }
          ])
        },
        " complex ",
        2
        /* CLASS */
      ),
      _createElementVNode(
        "text",
        {
          class: _normalizeClass($setup.condition ? "wtu-1hf1vho-e wtu-6xzka-f" : "")
        },
        " fallback ",
        2
        /* CLASS */
      )
    ])
  ]);
}
const BindClass = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/sub/tailwindcss/components/BindClass.uvue"]]);
export {
  BindClass as B
};
//# sourceMappingURL=BindClass.js.map
