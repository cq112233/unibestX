import { C as Card } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/pages/basic/components/Card&";
import { g as getCurrentEnv, a as getEnvLabel, b as getEnvConfigFor, c as getSystemEnv, s as setCurrentEnv, r as resetEnv } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/utils/env&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
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
const _style_0 = {"wtu-1wn3kuh-0":{"":{"flexDirection":"row"}},"wtu-x1ltc0-1":{"":{"justifyContent":"space-between"}},"wtu-y0qx9p-2":{"":{"color":"#718096"}},"wtu-1xrmo7y-3":{"":{"--tw-font-weight":"var(--font-weight-bold, 700)","fontWeight":700}},"wtu-pfwwnc-4":{"":{"color":"#2d3748"}},"wtu-1a0szfl-5":{"":{"color":"#64748b"}},"wtu-10cqf12-6":{"":{"flexGrow":1,"flexShrink":1,"flexBasis":"0%"}},"wtu-1exppl3-7":{"":{"textAlign":"right"}},"wtu-1otqyah-8":{"":{"color":"#94a3b8"}},"wtu-1hgp7bw-9":{"":{"display":"flex"}},"wtu-1njuza1-a":{"":{"alignItems":"center"}},"wtu-szxrt-b":{"":{"justifyContent":"center"}},"wtu-zeam06-c":{"":{"width":"100%"}},"wtu-thuvft-d":{"":{"backgroundColor":"#64748b"}},"wtu-1bkp4ss-e":{"":{"color":"#ffffff"}},"test":{"":{"marginTop":"24rpx","display":"flex","height":100,"width":222.222,"alignItems":"center","justifyContent":"center","borderRadius":40,"backgroundColor":"rgba(49,237,216,0.54)"}},"flex":{"":{"display":"flex"}}};
const { createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, normalizeStyle: _normalizeStyle, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["Card"], { title: "环境变量" }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-[#e2e8f0]" }, [
        _createElementVNode("view", { class: "wtu-1wn3kuh-0 wtu-x1ltc0-1 mb-10px" }, [
          _createElementVNode("text", { class: "text-14px wtu-y0qx9p-2" }, "编译环境"),
          _createElementVNode(
            "text",
            { class: "text-14px wtu-1xrmo7y-3 wtu-pfwwnc-4" },
            _toDisplayString($setup.systemEnvLabel),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-1wn3kuh-0 wtu-x1ltc0-1 mb-10px" }, [
          _createElementVNode("text", { class: "text-14px wtu-y0qx9p-2" }, "当前环境"),
          _createElementVNode(
            "text",
            {
              class: "text-14px wtu-1xrmo7y-3",
              style: _normalizeStyle({ color: $setup.envColor })
            },
            _toDisplayString($setup.currentEnvLabel),
            5
            /* TEXT, STYLE */
          )
        ]),
        _createElementVNode("view", { class: "wtu-1wn3kuh-0 wtu-x1ltc0-1 mb-10px" }, [
          _createElementVNode("text", { class: "text-14px wtu-y0qx9p-2" }, "接口地址"),
          _createElementVNode(
            "text",
            { class: "text-12px wtu-1a0szfl-5 wtu-10cqf12-6 ml-8px wtu-1exppl3-7" },
            _toDisplayString($setup.envConfig.baseURL),
            1
            /* TEXT */
          )
        ]),
        _createElementVNode("view", { class: "wtu-1wn3kuh-0 wtu-x1ltc0-1" }, [
          _createElementVNode("text", { class: "text-14px wtu-y0qx9p-2" }, "是否已覆盖"),
          _createElementVNode(
            "text",
            { class: "text-14px wtu-1xrmo7y-3 wtu-pfwwnc-4" },
            _toDisplayString($setup.isOverridden ? "是" : "否"),
            1
            /* TEXT */
          )
        ])
      ]),
      _createElementVNode("view", { class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-[#e2e8f0]" }, [
        _createElementVNode("text", { class: "text-12px wtu-1otqyah-8 mb-12px" }, "切换环境（仅当前运行生效）"),
        _createElementVNode("view", { class: "wtu-1wn3kuh-0 mt-12px" }, [
          _createElementVNode(
            "view",
            {
              class: "wtu-10cqf12-6 h-38px rounded-8px wtu-1hgp7bw-9 wtu-1wn3kuh-0 wtu-1njuza1-a wtu-szxrt-b ml-5px mr-5px",
              style: _normalizeStyle({ backgroundColor: $setup.devBtnBg }),
              onClick: _cache[0] || (_cache[0] = ($event) => $setup.switchEnv("development"))
            },
            [
              _createElementVNode(
                "text",
                {
                  class: "text-14px wtu-1xrmo7y-3",
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
              class: "wtu-10cqf12-6 h-38px rounded-8px wtu-1hgp7bw-9 wtu-1wn3kuh-0 wtu-1njuza1-a wtu-szxrt-b ml-5px mr-5px",
              style: _normalizeStyle({ backgroundColor: $setup.testBtnBg }),
              onClick: _cache[1] || (_cache[1] = ($event) => $setup.switchEnv("test"))
            },
            [
              _createElementVNode(
                "text",
                {
                  class: "text-14px wtu-1xrmo7y-3",
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
              class: "wtu-10cqf12-6 h-38px rounded-8px wtu-1hgp7bw-9 wtu-1wn3kuh-0 wtu-1njuza1-a wtu-szxrt-b ml-5px mr-5px",
              style: _normalizeStyle({ backgroundColor: $setup.prodBtnBg }),
              onClick: _cache[2] || (_cache[2] = ($event) => $setup.switchEnv("production"))
            },
            [
              _createElementVNode(
                "text",
                {
                  class: "text-14px wtu-1xrmo7y-3",
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
        class: "wtu-zeam06-c h-44px rounded-8px wtu-thuvft-d wtu-1hgp7bw-9 wtu-1wn3kuh-0 wtu-1njuza1-a wtu-szxrt-b",
        onClick: $setup.handleReset
      }, [
        _createElementVNode("text", { class: "wtu-1bkp4ss-e text-14px wtu-1xrmo7y-3" }, "重置为系统默认")
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
