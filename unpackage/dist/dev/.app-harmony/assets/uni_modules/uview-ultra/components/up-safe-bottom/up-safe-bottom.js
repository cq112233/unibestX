import { d as deepMerge, b as addStyle } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-safe-bottom"
  },
  __name: "up-safe-bottom",
  props: {
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    }
  },
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const props = __props;
    const style = computed(() => {
      const s = new UTSJSONObject({});
      return deepMerge(s, addStyle(props.customStyle));
    });
    const __returned__ = { props, style };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"up-safe-bottom":{"":{"width":"100%"}},"up-safe-area-inset-bottom":{"":{"paddingBottom":"var(--uni-safe-area-inset-bottom)"}}};
const { normalizeStyle: _normalizeStyle, openBlock: _openBlock, createElementBlock: _createElementBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: "up-safe-bottom up-safe-area-inset-bottom",
      style: _normalizeStyle([$setup.style])
    },
    null,
    4
    /* STYLE */
  );
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-safe-bottom/up-safe-bottom.uvue"]]);
export {
  __easycom_0 as _
};
//# sourceMappingURL=up-safe-bottom.js.map
