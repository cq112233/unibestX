import { _ as __easycom_0 } from "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const { defineComponent, computed, resolveDynamicComponent, openBlock, createBlock, withCtx, createCommentVNode, createElementVNode, toDisplayString } = globalThis.Vue
import { r as resolveEasycom } from "../../../../App.ku.js";
import { C as Card } from "./Card.js";
import "../../../store/index.js";
import { t as t$1 } from "../../../utils/i18n.js";
import { t } from "../../../../uni_modules/uview-ultra/libs/i18n/index.js";
import { u as useAppStore } from "../../../store/app.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
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
    const uViewChooseDates = computed(() => {
      currentLocale.value;
      return t("up.calendar.chooseDates", new UTSJSONObject({}));
    });
    const uViewConfirm = computed(() => {
      currentLocale.value;
      return t("up.common.confirm", new UTSJSONObject({}));
    });
    const uViewStart = computed(() => {
      currentLocale.value;
      return t("up.common.start", new UTSJSONObject({}));
    });
    const uViewEnd = computed(() => {
      currentLocale.value;
      return t("up.common.end", new UTSJSONObject({}));
    });
    function switchLanguage(lang) {
      appStore.setLocale(lang);
      uni.showToast({
        title: t$1("message.switch_success", null),
        icon: "none",
        duration: 1500
      });
    }
    const __returned__ = { appStore, currentLocale, isZhCN, isEnUS, uViewChooseDates, uViewConfirm, uViewStart, uViewEnd, switchLanguage, get Card() {
      return Card;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "bg-__ecfdf5_": { "": { "backgroundImage": "none", "backgroundColor": "#ecfdf5" } }, "bg-__eff6ff_": { "": { "backgroundImage": "none", "backgroundColor": "#eff6ff" } }, "bg-__fffbe2_": { "": { "backgroundImage": "none", "backgroundColor": "#fffbe2" } }, "border-bottom-color-__f1f5f9_": { "": { "borderBottomColor": "#f1f5f9" } }, "border-bottom-style-solid": { "": { "borderBottomStyle": "solid" } }, "border-bottom-width-1px": { "": { "borderBottomWidth": 1 } }, "border-color-__e2e8f0_": { "": { "borderTopColor": "#e2e8f0", "borderRightColor": "#e2e8f0", "borderBottomColor": "#e2e8f0", "borderLeftColor": "#e2e8f0" } }, "border-style-solid": { "": { "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "border-top-color-__f1f5f9_": { "": { "borderTopColor": "#f1f5f9" } }, "border-top-style-solid": { "": { "borderTopStyle": "solid" } }, "border-top-width-1px": { "": { "borderTopWidth": 1 } }, "border-width-1px": { "": { "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "flex-row": { "": { "flexDirection": "row" } }, "flex-wrap": { "": { "flexWrap": "wrap" } }, "font-bold": { "": { "fontWeight": 700 } }, "font-medium": { "": { "fontWeight": 500 } }, "items-center": { "": { "alignItems": "center" } }, "justify-between": { "": { "justifyContent": "space-between" } }, "mb-16px": { "": { "marginBottom": 16 } }, "mb-4px": { "": { "marginBottom": 4 } }, "mb-6px": { "": { "marginBottom": 6 } }, "mr-8px": { "": { "marginRight": 8 } }, "mt-12px": { "": { "marginTop": 12 } }, "mt-8px": { "": { "marginTop": 8 } }, "none": { "": { "display": "none" } }, "p-16px": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16 } }, "pt-12px": { "": { "paddingTop": 12 } }, "px-8px": { "": { "paddingLeft": 8, "paddingRight": 8 } }, "py-12px": { "": { "paddingTop": 12, "paddingBottom": 12 } }, "py-4px": { "": { "paddingTop": 4, "paddingBottom": 4 } }, "rounded-12px": { "": { "borderTopLeftRadius": 12, "borderTopRightRadius": 12, "borderBottomRightRadius": 12, "borderBottomLeftRadius": 12 } }, "rounded-4px": { "": { "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomRightRadius": 4, "borderBottomLeftRadius": 4 } }, "text-__059669_": { "": { "color": "#059669" } }, "text-__1e293b_": { "": { "color": "#1e293b" } }, "text-__2563eb_": { "": { "color": "#2563eb" } }, "text-__334155_": { "": { "color": "#334155" } }, "text-__475569_": { "": { "color": "#475569" } }, "text-__94a3b8_": { "": { "color": "#94a3b8" } }, "text-__d97706_": { "": { "color": "#d97706" } }, "text-12px": { "": { "fontSize": 12 } }, "text-13px": { "": { "fontSize": 13 } }, "text-14px": { "": { "fontSize": 14 } }, "text-15px": { "": { "fontSize": 15 } }, "text-16px": { "": { "fontSize": 16 } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_icons = resolveEasycom(resolveDynamicComponent("uni-icons"), __easycom_0);
  return openBlock(), createBlock($setup["Card"], {
    title: _ctx.$t("basic.langTitle")
  }, {
    default: withCtx(() => [
      createCommentVNode(" 当前语言预览 "),
      createElementVNode("view", { class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_" }, [
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
        ),
        createCommentVNode(" 组件库多语言同步预览 "),
        createElementVNode("view", { class: "mt-12px pt-12px border-top-width-1px border-top-style-solid border-top-color-__f1f5f9_" }, [
          createElementVNode(
            "text",
            { class: "text-12px text-__94a3b8_ mb-6px" },
            toDisplayString(_ctx.$t("basic.uviewPreview")),
            1
            /* TEXT */
          ),
          createElementVNode("view", { class: "flex-row items-center flex-wrap" }, [
            createElementVNode(
              "text",
              { class: "text-13px text-__2563eb_ bg-__eff6ff_ px-8px py-4px rounded-4px font-medium mr-8px mb-4px" },
              toDisplayString($setup.uViewChooseDates),
              1
              /* TEXT */
            ),
            createElementVNode(
              "text",
              { class: "text-13px text-__059669_ bg-__ecfdf5_ px-8px py-4px rounded-4px font-medium mr-8px mb-4px" },
              toDisplayString($setup.uViewConfirm),
              1
              /* TEXT */
            ),
            createElementVNode(
              "text",
              { class: "text-13px text-__d97706_ bg-__fffbe2_ px-8px py-4px rounded-4px font-medium mb-4px" },
              toDisplayString($setup.uViewStart) + " / " + toDisplayString($setup.uViewEnd),
              1
              /* TEXT */
            )
          ])
        ])
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
