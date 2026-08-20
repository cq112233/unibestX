import { _ as __easycom_1 } from "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import { r as resolveEasycom } from "../../../../App.ku.js";
import { _ as __easycom_1$1 } from "../../../../uni_modules/lime-icon/components/l-icon/l-icon.js";
import { _ as __easycom_0 } from "../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import { C as Card } from "./Card.js";
import { $ as $t } from "../../../utils/i18n.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
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
const _style_0 = { "wtu-edh1ze-0": { "": { "flexDirection": "row" } }, "wtu-r2og8u-1": { "": { "alignItems": "center" } }, "wtu-1c6w9qp-2": { "": { "justifyContent": "space-between" } }, "wtu-e32pgj-3": { "": { "paddingTop": 12, "paddingBottom": 12 } }, "wtu-1sf4qgj-4": { "": { "--tw-border-style": "solid", "borderBottomStyle": "var(--tw-border-style)", "borderBottomWidth": 1 } }, "wtu-jjoyn4-5": { "": { "width": 6 } }, "wtu-ubwupt-6": { "": { "height": 6 } }, "wtu-1u0ls6d-7": { "": { "borderTopLeftRadius": 3, "borderTopRightRadius": 3, "borderBottomRightRadius": 3, "borderBottomLeftRadius": 3 } }, "wtu-1i1fm6y-8": { "": { "backgroundColor": "#3b82f6" } }, "wtu-b8dflc-9": { "": { "marginRight": 8 } }, "wtu-kba525-a": { "": { "fontSize": 14 } }, "wtu-1dcwght-b": { "": { "color": "#475569" } }, "wtu-1lor33j-c": { "": { "--tw-font-weight": "var(--font-weight-medium, 500)", "fontWeight": 500 } }, "wtu-lbze2f-d": { "": { "fontSize": 12 } }, "wtu-1uc842y-e": { "": { "color": "#94a3b8" } }, "wtu-vs4ahm-f": { "": { "backgroundColor": "#10b981" } }, "wtu-no3ft0-g": { "": { "flexDirection": "column" } }, "wtu-159q4wc-h": { "": { "backgroundColor": "#fff1f2" } }, "wtu-1wj9wbu-i": { "": { "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomRightRadius": 4, "borderBottomLeftRadius": 4 } }, "wtu-dktp6a-j": { "": { "paddingTop": 2, "paddingBottom": 2 } }, "wtu-vjo5gh-k": { "": { "paddingLeft": 6, "paddingRight": 6 } }, "wtu-bevybu-l": { "": { "marginTop": 4 } }, "wtu-p0dhsv-m": { "": { "alignSelf": "flex-start" } }, "wtu-kl7gdk-n": { "": { "--tw-border-style": "solid", "borderTopStyle": "var(--tw-border-style)", "borderRightStyle": "var(--tw-border-style)", "borderBottomStyle": "var(--tw-border-style)", "borderLeftStyle": "var(--tw-border-style)", "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "wtu-11fbxns-o": { "": { "--tw-border-style": "solid", "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "wtu-1da3t5c-p": { "": { "borderTopColor": "#ffe4e6", "borderRightColor": "#ffe4e6", "borderBottomColor": "#ffe4e6", "borderLeftColor": "#ffe4e6" } }, "wtu-12mw64h-q": { "": { "fontSize": 10 } }, "wtu-nnvrio-r": { "": { "color": "#f43f5e" } }, "wtu-17gdztp-s": { "": { "--tw-border-style": "solid", "borderTopStyle": "var(--tw-border-style)", "borderTopWidth": 1 } }, "wtu-1fmwiif-t": { "": { "backgroundColor": "#a855f7" } } };
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, toDisplayString: _toDisplayString, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_icons = resolveEasycom(__resolveDynamicComponent("uni-icons"), __easycom_1);
  const _component_l_icon = resolveEasycom(__resolveDynamicComponent("l-icon"), __easycom_1$1);
  const _component_up_icon = resolveEasycom(__resolveDynamicComponent("up-icon"), __easycom_0);
  return _openBlock(), _createBlock($setup["Card"], { title: $setup.iconDemoTitle }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "wtu-edh1ze-0 wtu-r2og8u-1 wtu-1c6w9qp-2 wtu-e32pgj-3 wtu-1sf4qgj-4 border-bottom-style-solid border-bottom-color-[#f1f5f9]" }, [
        _createElementVNode("view", { class: "wtu-edh1ze-0 wtu-r2og8u-1" }, [
          _createElementVNode("view", { class: "wtu-jjoyn4-5 wtu-ubwupt-6 wtu-1u0ls6d-7 wtu-1i1fm6y-8 wtu-b8dflc-9" }),
          _createElementVNode("text", { class: "wtu-kba525-a wtu-1dcwght-b wtu-1lor33j-c" }, "uni-icon")
        ]),
        _createElementVNode("view", { class: "wtu-edh1ze-0 wtu-r2og8u-1" }, [
          _createVNode(_component_uni_icons, {
            type: "contact",
            size: "26",
            style: { "color": "#3b82f6", "margin-right": "8px" }
          }),
          _createElementVNode("text", { class: "wtu-lbze2f-d wtu-1uc842y-e" }, "contact")
        ])
      ]),
      _createElementVNode("view", { class: "wtu-edh1ze-0 wtu-r2og8u-1 wtu-1c6w9qp-2 wtu-e32pgj-3" }, [
        _createElementVNode("view", { class: "wtu-edh1ze-0 wtu-r2og8u-1" }, [
          _createElementVNode("view", { class: "wtu-jjoyn4-5 wtu-ubwupt-6 wtu-1u0ls6d-7 wtu-vs4ahm-f wtu-b8dflc-9" }),
          _createElementVNode("view", { class: "wtu-no3ft0-g" }, [
            _createElementVNode("text", { class: "wtu-kba525-a wtu-1dcwght-b wtu-1lor33j-c" }, "lime-icon"),
            _createElementVNode("view", { class: "wtu-159q4wc-h wtu-1wj9wbu-i wtu-dktp6a-j wtu-vjo5gh-k wtu-bevybu-l wtu-p0dhsv-m wtu-kl7gdk-n wtu-11fbxns-o wtu-1da3t5c-p" }, [
              _createElementVNode(
                "text",
                { class: "wtu-12mw64h-q wtu-nnvrio-r" },
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
          _createElementVNode("text", { class: "wtu-lbze2f-d wtu-1uc842y-e" }, "circle")
        ])
      ]),
      _createElementVNode("view", { class: "wtu-edh1ze-0 wtu-r2og8u-1 wtu-1c6w9qp-2 wtu-e32pgj-3 wtu-17gdztp-s border-top-style-solid border-top-color-[#f1f5f9]" }, [
        _createElementVNode("view", { class: "wtu-edh1ze-0 wtu-r2og8u-1" }, [
          _createElementVNode("view", { class: "wtu-jjoyn4-5 wtu-ubwupt-6 wtu-1u0ls6d-7 wtu-1fmwiif-t wtu-b8dflc-9" }),
          _createElementVNode("text", { class: "wtu-kba525-a wtu-1dcwght-b wtu-1lor33j-c" }, "up-icon (uview-ultra)")
        ]),
        _createElementVNode("view", { class: "wtu-edh1ze-0 wtu-r2og8u-1" }, [
          _createVNode(_component_up_icon, {
            name: "setting",
            size: "24",
            style: { "color": "#a855f7", "margin-right": "8px" }
          }),
          _createElementVNode("text", { class: "wtu-lbze2f-d wtu-1uc842y-e" }, "setting")
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
