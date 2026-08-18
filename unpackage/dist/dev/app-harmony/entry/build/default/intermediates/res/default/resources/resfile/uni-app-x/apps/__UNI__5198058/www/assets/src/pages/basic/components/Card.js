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
const _style_0 = {"wtu-1ldduh1-0":{"":{"backgroundColor":"#ffffff"}},"wtu-1xzbcj9-1":{"":{"display":"flex"}},"wtu-ermdzg-2":{"":{"flexDirection":"row"}},"wtu-1ejnel4-3":{"":{"alignItems":"center"}},"wtu-1rlqhz-4":{"":{"backgroundColor":"#3182ce"}},"wtu-vvdt71-5":{"":{"--tw-font-weight":"var(--font-weight-bold, 700)","fontWeight":700}},"wtu-6hzxf1-6":{"":{"color":"#2d3748"}},"flex":{"":{"display":"flex"}}};
const { createElementVNode: _createElementVNode, renderSlot: _renderSlot, toDisplayString: _toDisplayString, openBlock: _openBlock, createElementBlock: _createElementBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("view", { class: "wtu-1ldduh1-0 rounded-16px p-20px m-16px border-width-1px border-style-solid border-color-[#edf2f7]" }, [
    _createElementVNode("view", { class: "wtu-1xzbcj9-1 wtu-ermdzg-2 wtu-1ejnel4-3 mb-16px" }, [
      _createElementVNode("view", { class: "w-4px h-16px wtu-1rlqhz-4 rounded-2px mr-8px" }),
      _renderSlot(_ctx.$slots, "title", {}, () => [
        _createElementVNode(
          "text",
          { class: "text-16px wtu-vvdt71-5 wtu-6hzxf1-6" },
          _toDisplayString($props.title),
          1
          /* TEXT */
        )
      ])
    ]),
    _renderSlot(_ctx.$slots, "default")
  ]);
}
const Card = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/basic/components/Card.uvue"]]);
export {
  Card as C
};
//# sourceMappingURL=Card.js.map
