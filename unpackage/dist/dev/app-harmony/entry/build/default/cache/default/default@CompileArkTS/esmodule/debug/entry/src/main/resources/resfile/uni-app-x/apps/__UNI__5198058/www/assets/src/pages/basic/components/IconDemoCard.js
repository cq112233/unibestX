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
const _style_0 = { "wtu-edh1ze-0": { "": { "flexDirection": "row" } }, "wtu-r2og8u-1": { "": { "alignItems": "center" } }, "wtu-1c6w9qp-2": { "": { "justifyContent": "space-between" } }, "wtu-e32pgj-3": { "": { "paddingTop": 12, "paddingBottom": 12 } }, "wtu-jjoyn4-4": { "": { "width": 6 } }, "wtu-ubwupt-5": { "": { "height": 6 } }, "wtu-1u0ls6d-6": { "": { "borderTopLeftRadius": 3, "borderTopRightRadius": 3, "borderBottomRightRadius": 3, "borderBottomLeftRadius": 3 } }, "wtu-1i1fm6y-7": { "": { "backgroundColor": "#3b82f6" } }, "wtu-b8dflc-8": { "": { "marginRight": 8 } }, "wtu-kba525-9": { "": { "fontSize": 14 } }, "wtu-1dcwght-a": { "": { "color": "#475569" } }, "wtu-1lor33j-b": { "": { "--tw-font-weight": "var(--font-weight-medium, 500)", "fontWeight": 500 } }, "wtu-lbze2f-c": { "": { "fontSize": 12 } }, "wtu-1uc842y-d": { "": { "color": "#94a3b8" } }, "wtu-3wtn0e-e": { "": { "height": 1 } }, "wtu-u07xcs-f": { "": { "backgroundColor": "#f1f5f9" } }, "wtu-vs4ahm-g": { "": { "backgroundColor": "#10b981" } }, "wtu-no3ft0-h": { "": { "flexDirection": "column" } }, "wtu-159q4wc-i": { "": { "backgroundColor": "#fff1f2" } }, "wtu-1wj9wbu-j": { "": { "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomRightRadius": 4, "borderBottomLeftRadius": 4 } }, "wtu-dktp6a-k": { "": { "paddingTop": 2, "paddingBottom": 2 } }, "wtu-vjo5gh-l": { "": { "paddingLeft": 6, "paddingRight": 6 } }, "wtu-bevybu-m": { "": { "marginTop": 4 } }, "wtu-p0dhsv-n": { "": { "alignSelf": "flex-start" } }, "wtu-kl7gdk-o": { "": { "--tw-border-style": "solid", "borderTopStyle": "var(--tw-border-style)", "borderRightStyle": "var(--tw-border-style)", "borderBottomStyle": "var(--tw-border-style)", "borderLeftStyle": "var(--tw-border-style)", "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "wtu-11fbxns-p": { "": { "--tw-border-style": "solid", "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "wtu-1da3t5c-q": { "": { "borderTopColor": "#ffe4e6", "borderRightColor": "#ffe4e6", "borderBottomColor": "#ffe4e6", "borderLeftColor": "#ffe4e6" } }, "wtu-12mw64h-r": { "": { "fontSize": 10 } }, "wtu-nnvrio-s": { "": { "color": "#f43f5e" } }, "wtu-1fmwiif-t": { "": { "backgroundColor": "#a855f7" } } };
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, toDisplayString: _toDisplayString, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_icons = resolveEasycom(__resolveDynamicComponent("uni-icons"), __easycom_1);
  const _component_l_icon = resolveEasycom(__resolveDynamicComponent("l-icon"), __easycom_1$1);
  const _component_up_icon = resolveEasycom(__resolveDynamicComponent("up-icon"), __easycom_0);
  return _openBlock(), _createBlock($setup["Card"], { title: $setup.iconDemoTitle }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "wtu-edh1ze-0 wtu-r2og8u-1 wtu-1c6w9qp-2 wtu-e32pgj-3" }, [
        _createElementVNode("view", { class: "wtu-edh1ze-0 wtu-r2og8u-1" }, [
          _createElementVNode("view", { class: "wtu-jjoyn4-4 wtu-ubwupt-5 wtu-1u0ls6d-6 wtu-1i1fm6y-7 wtu-b8dflc-8" }),
          _createElementVNode("text", { class: "wtu-kba525-9 wtu-1dcwght-a wtu-1lor33j-b" }, "uni-icon")
        ]),
        _createElementVNode("view", { class: "wtu-edh1ze-0 wtu-r2og8u-1" }, [
          _createVNode(_component_uni_icons, {
            type: "contact",
            size: "26",
            style: { "color": "#3b82f6", "margin-right": "8px" }
          }),
          _createElementVNode("text", { class: "wtu-lbze2f-c wtu-1uc842y-d" }, "contact")
        ])
      ]),
      _createElementVNode("view", { class: "wtu-3wtn0e-e wtu-u07xcs-f" }),
      _createElementVNode("view", { class: "wtu-edh1ze-0 wtu-r2og8u-1 wtu-1c6w9qp-2 wtu-e32pgj-3" }, [
        _createElementVNode("view", { class: "wtu-edh1ze-0 wtu-r2og8u-1" }, [
          _createElementVNode("view", { class: "wtu-jjoyn4-4 wtu-ubwupt-5 wtu-1u0ls6d-6 wtu-vs4ahm-g wtu-b8dflc-8" }),
          _createElementVNode("view", { class: "wtu-no3ft0-h" }, [
            _createElementVNode("text", { class: "wtu-kba525-9 wtu-1dcwght-a wtu-1lor33j-b" }, "lime-icon"),
            _createElementVNode("view", { class: "wtu-159q4wc-i wtu-1wj9wbu-j wtu-dktp6a-k wtu-vjo5gh-l wtu-bevybu-m wtu-p0dhsv-n wtu-kl7gdk-o wtu-11fbxns-p wtu-1da3t5c-q" }, [
              _createElementVNode(
                "text",
                { class: "wtu-12mw64h-r wtu-nnvrio-s" },
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
          _createElementVNode("text", { class: "wtu-lbze2f-c wtu-1uc842y-d" }, "circle")
        ])
      ]),
      _createElementVNode("view", { class: "wtu-3wtn0e-e wtu-u07xcs-f" }),
      _createElementVNode("view", { class: "wtu-edh1ze-0 wtu-r2og8u-1 wtu-1c6w9qp-2 wtu-e32pgj-3" }, [
        _createElementVNode("view", { class: "wtu-edh1ze-0 wtu-r2og8u-1" }, [
          _createElementVNode("view", { class: "wtu-jjoyn4-4 wtu-ubwupt-5 wtu-1u0ls6d-6 wtu-1fmwiif-t wtu-b8dflc-8" }),
          _createElementVNode("text", { class: "wtu-kba525-9 wtu-1dcwght-a wtu-1lor33j-b" }, "up-icon (uview-ultra)")
        ]),
        _createElementVNode("view", { class: "wtu-edh1ze-0 wtu-r2og8u-1" }, [
          _createVNode(_component_up_icon, {
            name: "setting",
            size: "24",
            style: { "color": "#a855f7", "margin-right": "8px" }
          }),
          _createElementVNode("text", { class: "wtu-lbze2f-c wtu-1uc842y-d" }, "setting")
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
