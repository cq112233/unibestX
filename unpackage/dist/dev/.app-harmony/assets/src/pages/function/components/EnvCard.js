import { C as Card } from "../../basic/components/Card.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "EnvCard",
  setup(__props, _a) {
    var _b, _c;
    var __expose = _a.expose;
    __expose();
    const appTitle = `${"unibestX"}`;
    const appVersion = `${"1.0.0"}`;
    const buildEnvType = `${(_b = "development") !== null && _b !== void 0 ? _b : ""}`;
    const systemEnv = buildEnvType == "test" ? "test" : "development";
    const apiBaseUrl = `${(_c = "https://ukw0y1.laf.run") !== null && _c !== void 0 ? _c : "https://ukw0y1.laf.run"}`;
    const envTypeText = systemEnv;
    const envLabel = computed(() => {
      if (systemEnv === "test") {
        return "测试";
      }
      if (systemEnv === "production") {
        return "生产";
      }
      return "开发";
    });
    const envColor = computed(() => {
      if (systemEnv === "test") {
        return "#f59e0b";
      }
      if (systemEnv === "production") {
        return "#ef4444";
      }
      return "#10b981";
    });
    const __returned__ = { appTitle, appVersion, buildEnvType, systemEnv, apiBaseUrl, envTypeText, envLabel, envColor, get Card() {
      return Card;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "wtu-1yjek9y-0": { "": { "borderTopLeftRadius": 12, "borderTopRightRadius": 12, "borderBottomRightRadius": 12, "borderBottomLeftRadius": 12 } }, "wtu-s1ir6x-1": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16 } }, "wtu-r20r67-2": { "": { "--tw-border-style": "solid", "borderTopStyle": "var(--tw-border-style)", "borderRightStyle": "var(--tw-border-style)", "borderBottomStyle": "var(--tw-border-style)", "borderLeftStyle": "var(--tw-border-style)", "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "wtu-1fwde1j-3": { "": { "--tw-border-style": "solid", "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "wtu-1hn9nh1-4": { "": { "borderTopColor": "#e2e8f0", "borderRightColor": "#e2e8f0", "borderBottomColor": "#e2e8f0", "borderLeftColor": "#e2e8f0" } }, "wtu-1wn3kuh-5": { "": { "flexDirection": "row" } }, "wtu-x1ltc0-6": { "": { "justifyContent": "space-between" } }, "wtu-1s9hnts-7": { "": { "marginBottom": 10 } }, "wtu-1yinq8w-8": { "": { "fontSize": 14 } }, "wtu-y0qx9p-9": { "": { "color": "#718096" } }, "wtu-1xrmo7y-a": { "": { "--tw-font-weight": "var(--font-weight-bold, 700)", "fontWeight": 700 } }, "wtu-7t1zi1-b": { "": { "color": "#334155" } }, "wtu-21em1e-c": { "": { "fontSize": 12 } }, "wtu-1a0szfl-d": { "": { "color": "#64748b" } }, "wtu-10cqf12-e": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "wtu-twd3o9-f": { "": { "marginLeft": 8 } }, "wtu-1exppl3-g": { "": { "textAlign": "right" } } };
const { createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, normalizeStyle: _normalizeStyle, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["Card"], { title: "环境变量" }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "wtu-1yjek9y-0 wtu-s1ir6x-1 wtu-r20r67-2 wtu-1fwde1j-3 wtu-1hn9nh1-4" }, [
        _createElementVNode("view", { class: "wtu-1wn3kuh-5 wtu-x1ltc0-6 wtu-1s9hnts-7" }, [
          _createElementVNode("text", { class: "wtu-1yinq8w-8 wtu-y0qx9p-9" }, "应用名称"),
          _createElementVNode("text", { class: "wtu-1yinq8w-8 wtu-1xrmo7y-a wtu-7t1zi1-b" }, _toDisplayString($setup.appTitle))
        ]),
        _createElementVNode("view", { class: "wtu-1wn3kuh-5 wtu-x1ltc0-6 wtu-1s9hnts-7" }, [
          _createElementVNode("text", { class: "wtu-1yinq8w-8 wtu-y0qx9p-9" }, "应用版本"),
          _createElementVNode("text", { class: "wtu-1yinq8w-8 wtu-1xrmo7y-a wtu-7t1zi1-b" }, _toDisplayString($setup.appVersion))
        ]),
        _createElementVNode("view", { class: "wtu-1wn3kuh-5 wtu-x1ltc0-6 wtu-1s9hnts-7" }, [
          _createElementVNode("text", { class: "wtu-1yinq8w-8 wtu-y0qx9p-9" }, "编译环境"),
          _createElementVNode(
            "text",
            {
              class: "wtu-1yinq8w-8 wtu-1xrmo7y-a",
              style: _normalizeStyle({ color: $setup.envColor })
            },
            _toDisplayString($setup.envLabel),
            5
            /* TEXT, STYLE */
          )
        ]),
        _createElementVNode("view", { class: "wtu-1wn3kuh-5 wtu-x1ltc0-6 wtu-1s9hnts-7" }, [
          _createElementVNode("text", { class: "wtu-1yinq8w-8 wtu-y0qx9p-9" }, "环境标识"),
          _createElementVNode(
            "text",
            { class: "wtu-21em1e-c wtu-1a0szfl-d" },
            _toDisplayString($setup.envTypeText),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-1wn3kuh-5 wtu-x1ltc0-6" }, [
          _createElementVNode("text", { class: "wtu-1yinq8w-8 wtu-y0qx9p-9" }, "接口地址"),
          _createElementVNode("text", { class: "wtu-21em1e-c wtu-1a0szfl-d wtu-10cqf12-e wtu-twd3o9-f wtu-1exppl3-g" }, _toDisplayString($setup.apiBaseUrl))
        ])
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
const EnvCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/function/components/EnvCard.uvue"]]);
export {
  EnvCard as E
};
//# sourceMappingURL=EnvCard.js.map
