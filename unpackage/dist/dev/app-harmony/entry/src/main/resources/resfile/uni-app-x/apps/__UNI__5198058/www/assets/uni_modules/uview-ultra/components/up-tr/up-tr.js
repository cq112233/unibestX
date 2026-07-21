const { defineComponent, openBlock, createElementBlock, renderSlot } = globalThis.Vue
import "../../libs/mixin/mixin.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "up-tr"
  },
  __name: "up-tr",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "up-tr": { "": { "display": "flex", "flexDirection": "row" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", { class: "up-tr" }, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const __easycom_7 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-tr/up-tr.uvue"]]);
export {
  __easycom_7 as _
};
//# sourceMappingURL=up-tr.js.map
