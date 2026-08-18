import { _ as __easycom_1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uni-icons/components/uni-icons/uni-icons&";
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { _ as __easycom_1$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/lime-icon/components/l-icon/l-icon&";
import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
import { C as Card } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/pages/basic/components/Card&";
import { $ as $t } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/utils/i18n&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "IconDemoCard",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const iconDemoTitle = computed(() => {
      return $t("basic.iconDemoTitle");
    });
    const svgAuthWarning = computed(() => {
      return $t("basic.svgAuthWarning");
    });
    const __returned__ = { iconDemoTitle, svgAuthWarning, get Card() {
      return Card;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "wtu-edh1ze-0": { "": { "flexDirection": "row" } }, "wtu-r2og8u-1": { "": { "alignItems": "center" } }, "wtu-1c6w9qp-2": { "": { "justifyContent": "space-between" } }, "wtu-1i1fm6y-3": { "": { "backgroundColor": "#3b82f6" } }, "wtu-1dcwght-4": { "": { "color": "#475569" } }, "wtu-1lor33j-5": { "": { "--tw-font-weight": "var(--font-weight-medium, 500)", "fontWeight": 500 } }, "wtu-1uc842y-6": { "": { "color": "#94a3b8" } }, "wtu-vs4ahm-7": { "": { "backgroundColor": "#10b981" } }, "wtu-no3ft0-8": { "": { "flexDirection": "column" } }, "wtu-159q4wc-9": { "": { "backgroundColor": "#fff1f2" } }, "wtu-p0dhsv-a": { "": { "alignSelf": "flex-start" } }, "wtu-nnvrio-b": { "": { "color": "#f43f5e" } }, "wtu-1fmwiif-c": { "": { "backgroundColor": "#a855f7" } } };
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, toDisplayString: _toDisplayString, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_icons = resolveEasycom(__resolveDynamicComponent("uni-icons"), __easycom_1);
  const _component_l_icon = resolveEasycom(__resolveDynamicComponent("l-icon"), __easycom_1$1);
  const _component_up_icon = resolveEasycom(__resolveDynamicComponent("up-icon"), __easycom_0);
  return _openBlock(), _createBlock($setup["Card"], { title: $setup.iconDemoTitle }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "wtu-edh1ze-0 wtu-r2og8u-1 wtu-1c6w9qp-2 py-12px border-bottom-width-1px border-bottom-style-solid border-bottom-color-[#f1f5f9]" }, [
        _createElementVNode("view", { class: "wtu-edh1ze-0 wtu-r2og8u-1" }, [
          _createElementVNode("view", { class: "w-6px h-6px rounded-3px wtu-1i1fm6y-3 mr-8px" }),
          _createElementVNode("text", { class: "text-14px wtu-1dcwght-4 wtu-1lor33j-5" }, "uni-icon")
        ]),
        _createElementVNode("view", { class: "wtu-edh1ze-0 wtu-r2og8u-1" }, [
          _createVNode(_component_uni_icons, {
            type: "contact",
            size: "26",
            style: { "color": "#3b82f6", "margin-right": "8px" }
          }),
          _createElementVNode("text", { class: "text-12px wtu-1uc842y-6" }, "contact")
        ])
      ]),
      _createElementVNode("view", { class: "wtu-edh1ze-0 wtu-r2og8u-1 wtu-1c6w9qp-2 py-12px" }, [
        _createElementVNode("view", { class: "wtu-edh1ze-0 wtu-r2og8u-1" }, [
          _createElementVNode("view", { class: "w-6px h-6px rounded-3px wtu-vs4ahm-7 mr-8px" }),
          _createElementVNode("view", { class: "wtu-no3ft0-8" }, [
            _createElementVNode("text", { class: "text-14px wtu-1dcwght-4 wtu-1lor33j-5" }, "lime-icon"),
            _createElementVNode("view", { class: "wtu-159q4wc-9 rounded-4px py-2px px-6px mt-4px wtu-p0dhsv-a border-width-1px border-style-solid border-color-[#ffe4e6]" }, [
              _createElementVNode(
                "text",
                { class: "text-10px wtu-nnvrio-b" },
                _toDisplayString($setup.svgAuthWarning),
                1
                /* TEXT */
              )
            ])
          ])
        ]),
        _createElementVNode("view", { class: "wtu-edh1ze-0 wtu-r2og8u-1" }, [
          _createVNode(_component_l_icon, {
            name: "circle",
            size: "24",
            style: { "color": "#10b981", "margin-right": "8px" }
          }),
          _createElementVNode("text", { class: "text-12px wtu-1uc842y-6" }, "circle")
        ])
      ]),
      _createElementVNode("view", { class: "wtu-edh1ze-0 wtu-r2og8u-1 wtu-1c6w9qp-2 py-12px border-top-width-1px border-top-style-solid border-top-color-[#f1f5f9]" }, [
        _createElementVNode("view", { class: "wtu-edh1ze-0 wtu-r2og8u-1" }, [
          _createElementVNode("view", { class: "w-6px h-6px rounded-3px wtu-1fmwiif-c mr-8px" }),
          _createElementVNode("text", { class: "text-14px wtu-1dcwght-4 wtu-1lor33j-5" }, "up-icon (uview-ultra)")
        ]),
        _createElementVNode("view", { class: "wtu-edh1ze-0 wtu-r2og8u-1" }, [
          _createVNode(_component_up_icon, {
            name: "setting",
            size: "24",
            style: { "color": "#a855f7", "margin-right": "8px" }
          }),
          _createElementVNode("text", { class: "text-12px wtu-1uc842y-6" }, "setting")
        ])
      ])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["title"]);
}
const IconDemoCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/basic/components/IconDemoCard.uvue"]]);
export {
  IconDemoCard as I
};
//# sourceMappingURL=IconDemoCard.js.map
