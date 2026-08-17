import { C as Card } from "../../basic/components/Card.js";
import { g as getCurrentEnv, a as getEnvLabel, b as getEnvConfigFor, c as getSystemEnv, s as setCurrentEnv, r as resetEnv } from "../../../utils/env.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed, ref } = globalThis.Vue;
const COLOR_DEV = "#10b981";
const COLOR_TEST = "#f59e0b";
const COLOR_PROD = "#ef4444";
const COLOR_BG = "#e2e8f0";
const COLOR_WHITE = "#ffffff";
const COLOR_DARK = "#475569";
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "EnvCard",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const systemEnv = getSystemEnv();
    const systemEnvLabel = computed(() => {
      return "开发";
    });
    const currentEnv = ref(getCurrentEnv());
    const isOverridden = computed(() => {
      return currentEnv.value !== systemEnv;
    });
    const currentEnvLabel = computed(() => {
      return getEnvLabel(currentEnv.value);
    });
    const envColor = computed(() => {
      if (currentEnv.value === "development") {
        return COLOR_DEV;
      }
      if (currentEnv.value === "test") {
        return COLOR_TEST;
      }
      return COLOR_PROD;
    });
    const envConfig = computed(() => {
      return getEnvConfigFor(currentEnv.value);
    });
    const devBtnBg = computed(() => {
      return currentEnv.value === "development" ? COLOR_DEV : COLOR_BG;
    });
    const devBtnText = computed(() => {
      return currentEnv.value === "development" ? COLOR_WHITE : COLOR_DARK;
    });
    const testBtnBg = computed(() => {
      return currentEnv.value === "test" ? COLOR_TEST : COLOR_BG;
    });
    const testBtnText = computed(() => {
      return currentEnv.value === "test" ? COLOR_WHITE : COLOR_DARK;
    });
    const prodBtnBg = computed(() => {
      return currentEnv.value === "production" ? COLOR_PROD : COLOR_BG;
    });
    const prodBtnText = computed(() => {
      return currentEnv.value === "production" ? COLOR_WHITE : COLOR_DARK;
    });
    function switchEnv(type) {
      const env = type;
      setCurrentEnv(env);
      currentEnv.value = env;
      const label = getEnvLabel(env);
      uni.showToast({
        title: `已切换至${label}环境`,
        icon: "none",
        duration: 1500
      });
    }
    function handleReset() {
      resetEnv();
      currentEnv.value = systemEnv;
      uni.showToast({
        title: "已重置为系统默认环境",
        icon: "none",
        duration: 1500
      });
    }
    const __returned__ = { COLOR_DEV, COLOR_TEST, COLOR_PROD, COLOR_BG, COLOR_WHITE, COLOR_DARK, systemEnv, systemEnvLabel, currentEnv, isOverridden, currentEnvLabel, envColor, envConfig, devBtnBg, devBtnText, testBtnBg, testBtnText, prodBtnBg, prodBtnText, switchEnv, handleReset, get Card() {
      return Card;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "bg-__64748b_": { "": { "backgroundImage": "none", "backgroundColor": "#64748b" } }, "border-color-__e2e8f0_": { "": { "borderTopColor": "#e2e8f0", "borderRightColor": "#e2e8f0", "borderBottomColor": "#e2e8f0", "borderLeftColor": "#e2e8f0" } }, "border-style-solid": { "": { "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "border-width-1px": { "": { "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "flex": { "": { "display": "flex" } }, "flex-1": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "flex-row": { "": { "flexDirection": "row" } }, "font-bold": { "": { "fontWeight": 700 } }, "h-38px": { "": { "height": 38 } }, "h-44px": { "": { "height": 44 } }, "items-center": { "": { "alignItems": "center" } }, "justify-between": { "": { "justifyContent": "space-between" } }, "justify-center": { "": { "justifyContent": "center" } }, "mb-10px": { "": { "marginBottom": 10 } }, "mb-12px": { "": { "marginBottom": 12 } }, "mb-16px": { "": { "marginBottom": 16 } }, "ml-5px": { "": { "marginLeft": 5 } }, "ml-8px": { "": { "marginLeft": 8 } }, "mr-5px": { "": { "marginRight": 5 } }, "mt-12px": { "": { "marginTop": 12 } }, "none": { "": { "display": "none" } }, "p-16px": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16 } }, "rounded-12px": { "": { "borderTopLeftRadius": 12, "borderTopRightRadius": 12, "borderBottomRightRadius": 12, "borderBottomLeftRadius": 12 } }, "rounded-8px": { "": { "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "text-__2d3748_": { "": { "color": "#2d3748" } }, "text-__64748b_": { "": { "color": "#64748b" } }, "text-__718096_": { "": { "color": "#718096" } }, "text-__94a3b8_": { "": { "color": "#94a3b8" } }, "text-__ffffff_": { "": { "color": "#ffffff" } }, "text-12px": { "": { "fontSize": 12 } }, "text-14px": { "": { "fontSize": 14 } }, "text-right": { "": { "textAlign": "right" } }, "w-full": { "": { "width": "100%" } } };
const { createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, normalizeStyle: _normalizeStyle, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["Card"], { title: "环境变量" }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_" }, [
        _createElementVNode("view", { class: "flex-row justify-between mb-10px" }, [
          _createElementVNode("text", { class: "text-14px text-__718096_" }, "编译环境"),
          _createElementVNode(
            "text",
            { class: "text-14px font-bold text-__2d3748_" },
            _toDisplayString($setup.systemEnvLabel),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "flex-row justify-between mb-10px" }, [
          _createElementVNode("text", { class: "text-14px text-__718096_" }, "当前环境"),
          _createElementVNode(
            "text",
            {
              class: "text-14px font-bold",
              style: _normalizeStyle({ color: $setup.envColor })
            },
            _toDisplayString($setup.currentEnvLabel),
            5
            /* TEXT, STYLE */
          )
        ]),
        _createElementVNode("view", { class: "flex-row justify-between mb-10px" }, [
          _createElementVNode("text", { class: "text-14px text-__718096_" }, "接口地址"),
          _createElementVNode(
            "text",
            { class: "text-12px text-__64748b_ flex-1 ml-8px text-right" },
            _toDisplayString($setup.envConfig.baseURL),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "flex-row justify-between" }, [
          _createElementVNode("text", { class: "text-14px text-__718096_" }, "是否已覆盖"),
          _createElementVNode(
            "text",
            { class: "text-14px font-bold text-__2d3748_" },
            _toDisplayString($setup.isOverridden ? "是" : "否"),
            1
            /* TEXT */
          )
        ])
      ]),
      _createElementVNode("view", { class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_" }, [
        _createElementVNode("text", { class: "text-12px text-__94a3b8_ mb-12px" }, "切换环境（仅当前运行生效）"),
        _createElementVNode("view", { class: "flex-row mt-12px" }, [
          _createElementVNode(
            "view",
            {
              class: "flex-1 h-38px rounded-8px flex flex-row items-center justify-center ml-5px mr-5px",
              style: _normalizeStyle({ backgroundColor: $setup.devBtnBg }),
              onClick: _cache[0] || (_cache[0] = ($event) => $setup.switchEnv("development"))
            },
            [
              _createElementVNode(
                "text",
                {
                  class: "text-14px font-bold",
                  style: _normalizeStyle({ color: $setup.devBtnText })
                },
                "开发",
                4
                /* STYLE */
              )
            ],
            4
            /* STYLE */
          ),
          _createElementVNode(
            "view",
            {
              class: "flex-1 h-38px rounded-8px flex flex-row items-center justify-center ml-5px mr-5px",
              style: _normalizeStyle({ backgroundColor: $setup.testBtnBg }),
              onClick: _cache[1] || (_cache[1] = ($event) => $setup.switchEnv("test"))
            },
            [
              _createElementVNode(
                "text",
                {
                  class: "text-14px font-bold",
                  style: _normalizeStyle({ color: $setup.testBtnText })
                },
                "测试",
                4
                /* STYLE */
              )
            ],
            4
            /* STYLE */
          ),
          _createElementVNode(
            "view",
            {
              class: "flex-1 h-38px rounded-8px flex flex-row items-center justify-center ml-5px mr-5px",
              style: _normalizeStyle({ backgroundColor: $setup.prodBtnBg }),
              onClick: _cache[2] || (_cache[2] = ($event) => $setup.switchEnv("production"))
            },
            [
              _createElementVNode(
                "text",
                {
                  class: "text-14px font-bold",
                  style: _normalizeStyle({ color: $setup.prodBtnText })
                },
                "生产",
                4
                /* STYLE */
              )
            ],
            4
            /* STYLE */
          )
        ])
      ]),
      _createElementVNode("view", {
        class: "w-full h-44px rounded-8px bg-__64748b_ flex flex-row items-center justify-center",
        onClick: $setup.handleReset
      }, [
        _createElementVNode("text", { class: "text-__ffffff_ text-14px font-bold" }, "重置为系统默认")
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
