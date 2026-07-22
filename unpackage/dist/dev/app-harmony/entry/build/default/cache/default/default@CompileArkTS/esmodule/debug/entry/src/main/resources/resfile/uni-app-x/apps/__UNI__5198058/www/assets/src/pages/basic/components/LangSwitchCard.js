import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uni-icons/components/uni-icons/uni-icons&";
const { defineComponent, computed, resolveDynamicComponent, openBlock, createBlock, withCtx, createCommentVNode, createElementVNode, toDisplayString } = globalThis.Vue
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { C as Card } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/pages/basic/components/Card&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/store/index&";
import { t } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/utils/i18n&";
import { u as useAppStore } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/store/app&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LangSwitchCard",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const appStore = useAppStore();
    const currentLocale = computed(() => {
      return appStore.state.locale;
    });
    const isZhCN = computed(() => {
      return currentLocale.value == "zh-CN";
    });
    const isEnUS = computed(() => {
      return currentLocale.value == "en-US";
    });
    function switchLanguage(lang) {
      appStore.setLocale(lang);
      uni.showToast({
        title: t("message.switch_success", null),
        icon: "none",
        duration: 1500
      });
    }
    const __returned__ = { appStore, currentLocale, isZhCN, isEnUS, switchLanguage, get Card() {
      return Card;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "bg-__f8fafc_": { "": { "backgroundImage": "none", "backgroundColor": "#f8fafc" } }, "border-bottom-color-__f1f5f9_": { "": { "borderBottomColor": "#f1f5f9" } }, "border-bottom-style-solid": { "": { "borderBottomStyle": "solid" } }, "border-bottom-width-1px": { "": { "borderBottomWidth": 1 } }, "border-color-__e2e8f0_": { "": { "borderTopColor": "#e2e8f0", "borderRightColor": "#e2e8f0", "borderBottomColor": "#e2e8f0", "borderLeftColor": "#e2e8f0" } }, "border-style-solid": { "": { "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "border-width-1px": { "": { "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "flex-row": { "": { "flexDirection": "row" } }, "font-bold": { "": { "fontWeight": 700 } }, "font-medium": { "": { "fontWeight": 500 } }, "items-center": { "": { "alignItems": "center" } }, "justify-between": { "": { "justifyContent": "space-between" } }, "mb-16px": { "": { "marginBottom": 16 } }, "mb-6px": { "": { "marginBottom": 6 } }, "mt-8px": { "": { "marginTop": 8 } }, "none": { "": { "display": "none" } }, "p-16px": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16 } }, "py-12px": { "": { "paddingTop": 12, "paddingBottom": 12 } }, "rounded-12px": { "": { "borderTopLeftRadius": 12, "borderTopRightRadius": 12, "borderBottomRightRadius": 12, "borderBottomLeftRadius": 12 } }, "text-__1e293b_": { "": { "color": "#1e293b" } }, "text-__334155_": { "": { "color": "#334155" } }, "text-__475569_": { "": { "color": "#475569" } }, "text-__94a3b8_": { "": { "color": "#94a3b8" } }, "text-12px": { "": { "fontSize": 12 } }, "text-14px": { "": { "fontSize": 14 } }, "text-15px": { "": { "fontSize": 15 } }, "text-16px": { "": { "fontSize": 16 } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_icons = resolveEasycom(resolveDynamicComponent("uni-icons"), __easycom_0);
  return openBlock(), createBlock($setup["Card"], {
    title: _ctx.$t("basic.langTitle")
  }, {
    default: withCtx(() => [
      createCommentVNode(" 当前语言预览 "),
      createElementVNode("view", { class: "bg-__f8fafc_ rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_" }, [
        createElementVNode(
          "text",
          { class: "text-12px text-__94a3b8_ mb-6px" },
          toDisplayString(_ctx.$t("basic.langPreview")),
          1
          /* TEXT */
        ),
        createElementVNode(
          "text",
          { class: "text-16px font-bold text-__1e293b_" },
          toDisplayString(_ctx.$t("message.welcome")),
          1
          /* TEXT */
        ),
        createElementVNode(
          "text",
          { class: "text-14px text-__475569_ mt-8px" },
          toDisplayString(_ctx.$t("message.hello", { msg: "hi" })),
          1
          /* TEXT */
        )
      ]),
      createCommentVNode(" 选项列表 "),
      createCommentVNode(" 简体中文 "),
      createElementVNode("view", {
        class: "flex-row items-center justify-between py-12px border-bottom-width-1px border-bottom-style-solid border-bottom-color-__f1f5f9_",
        onClick: _cache[0] || (_cache[0] = ($event) => $setup.switchLanguage("zh-CN"))
      }, [
        createElementVNode("view", { class: "flex-row items-center" }, [
          createElementVNode("text", { class: "text-15px text-__334155_ font-medium" }, "简体中文")
        ]),
        createElementVNode("view", { class: "flex-row items-center" }, [
          $setup.isZhCN ? (openBlock(), createBlock(_component_uni_icons, {
            key: 0,
            type: "checkmarkempty",
            size: "20",
            style: { "color": "#3b82f6" }
          })) : createCommentVNode("v-if", true)
        ])
      ]),
      createCommentVNode(" English "),
      createElementVNode("view", {
        class: "flex-row items-center justify-between py-12px",
        onClick: _cache[1] || (_cache[1] = ($event) => $setup.switchLanguage("en-US"))
      }, [
        createElementVNode("view", { class: "flex-row items-center" }, [
          createElementVNode("text", { class: "text-15px text-__334155_ font-medium" }, "English")
        ]),
        createElementVNode("view", { class: "flex-row items-center" }, [
          $setup.isEnUS ? (openBlock(), createBlock(_component_uni_icons, {
            key: 0,
            type: "checkmarkempty",
            size: "20",
            style: { "color": "#3b82f6" }
          })) : createCommentVNode("v-if", true)
        ])
      ])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["title"]);
}
const LangSwitchCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/basic/components/LangSwitchCard.uvue"]]);
export {
  LangSwitchCard as L
};
//# sourceMappingURL=LangSwitchCard.js.map
