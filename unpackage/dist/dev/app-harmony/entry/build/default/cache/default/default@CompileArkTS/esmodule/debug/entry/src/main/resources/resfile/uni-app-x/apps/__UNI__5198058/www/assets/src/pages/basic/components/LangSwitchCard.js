import { _ as __easycom_1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uni-icons/components/uni-icons/uni-icons&";
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { C as Card } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/pages/basic/components/Card&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/store/index&";
import { $ as $t, s as setTabbarItem, t as t$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/utils/i18n&";
import { t } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/i18n/index&";
import { u as useAppStore } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/store/app&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
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
      setTabbarItem();
      uni.showToast({
        title: t$1("message.switch_success", null),
        icon: "none",
        duration: 1500
      });
    }
    const __returned__ = { appStore, currentLocale, isZhCN, isEnUS, uViewChooseDates, uViewConfirm, uViewStart, uViewEnd, switchLanguage, get Card() {
      return Card;
    }, get $t() {
      return $t;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "bg-__ecfdf5_": { "": { "backgroundImage": "none", "backgroundColor": "#ecfdf5" } }, "bg-__eff6ff_": { "": { "backgroundImage": "none", "backgroundColor": "#eff6ff" } }, "bg-__fffbe2_": { "": { "backgroundImage": "none", "backgroundColor": "#fffbe2" } }, "border-bottom-color-__f1f5f9_": { "": { "borderBottomColor": "#f1f5f9" } }, "border-bottom-style-solid": { "": { "borderBottomStyle": "solid" } }, "border-bottom-width-1px": { "": { "borderBottomWidth": 1 } }, "border-color-__e2e8f0_": { "": { "borderTopColor": "#e2e8f0", "borderRightColor": "#e2e8f0", "borderBottomColor": "#e2e8f0", "borderLeftColor": "#e2e8f0" } }, "border-style-solid": { "": { "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "border-top-color-__f1f5f9_": { "": { "borderTopColor": "#f1f5f9" } }, "border-top-style-solid": { "": { "borderTopStyle": "solid" } }, "border-top-width-1px": { "": { "borderTopWidth": 1 } }, "border-width-1px": { "": { "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "flex-row": { "": { "flexDirection": "row" } }, "flex-wrap": { "": { "flexWrap": "wrap" } }, "font-bold": { "": { "fontWeight": 700 } }, "font-medium": { "": { "fontWeight": 500 } }, "items-center": { "": { "alignItems": "center" } }, "justify-between": { "": { "justifyContent": "space-between" } }, "mb-16px": { "": { "marginBottom": 16 } }, "mb-4px": { "": { "marginBottom": 4 } }, "mb-6px": { "": { "marginBottom": 6 } }, "mr-8px": { "": { "marginRight": 8 } }, "mt-12px": { "": { "marginTop": 12 } }, "mt-8px": { "": { "marginTop": 8 } }, "none": { "": { "display": "none" } }, "p-16px": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16 } }, "pt-12px": { "": { "paddingTop": 12 } }, "px-8px": { "": { "paddingLeft": 8, "paddingRight": 8 } }, "py-12px": { "": { "paddingTop": 12, "paddingBottom": 12 } }, "py-4px": { "": { "paddingTop": 4, "paddingBottom": 4 } }, "rounded-12px": { "": { "borderTopLeftRadius": 12, "borderTopRightRadius": 12, "borderBottomRightRadius": 12, "borderBottomLeftRadius": 12 } }, "rounded-4px": { "": { "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomRightRadius": 4, "borderBottomLeftRadius": 4 } }, "text-__059669_": { "": { "color": "#059669" } }, "text-__1e293b_": { "": { "color": "#1e293b" } }, "text-__2563eb_": { "": { "color": "#2563eb" } }, "text-__334155_": { "": { "color": "#334155" } }, "text-__475569_": { "": { "color": "#475569" } }, "text-__94a3b8_": { "": { "color": "#94a3b8" } }, "text-__d97706_": { "": { "color": "#d97706" } }, "text-12px": { "": { "fontSize": 12 } }, "text-13px": { "": { "fontSize": 13 } }, "text-14px": { "": { "fontSize": 14 } }, "text-15px": { "": { "fontSize": 15 } }, "text-16px": { "": { "fontSize": 16 } } };
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock, createCommentVNode: _createCommentVNode, withCtx: _withCtx } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_icons = resolveEasycom(__resolveDynamicComponent("uni-icons"), __easycom_1);
  return _openBlock(), _createBlock($setup["Card"], {
    title: $setup.$t("basic.langTitle")
  }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_" }, [
        _createElementVNode(
          "text",
          { class: "text-12px text-__94a3b8_ mb-6px" },
          _toDisplayString($setup.$t("basic.langPreview")),
          1
          /* TEXT */
        ),
        _createElementVNode(
          "text",
          { class: "text-16px font-bold text-__1e293b_" },
          _toDisplayString($setup.$t("message.welcome")),
          1
          /* TEXT */
        ),
        _createElementVNode(
          "text",
          { class: "text-14px text-__475569_ mt-8px" },
          _toDisplayString($setup.$t("message.hello", { msg: "hi" })),
          1
          /* TEXT */
        ),
        _createElementVNode("view", { class: "mt-12px pt-12px border-top-width-1px border-top-style-solid border-top-color-__f1f5f9_" }, [
          _createElementVNode(
            "text",
            { class: "text-12px text-__94a3b8_ mb-6px" },
            _toDisplayString($setup.$t("basic.uviewPreview")),
            1
            /* TEXT */
          ),
          _createElementVNode("view", { class: "flex-row items-center flex-wrap" }, [
            _createElementVNode(
              "text",
              { class: "text-13px text-__2563eb_ bg-__eff6ff_ px-8px py-4px rounded-4px font-medium mr-8px mb-4px" },
              _toDisplayString($setup.uViewChooseDates),
              1
              /* TEXT */
            ),
            _createElementVNode(
              "text",
              { class: "text-13px text-__059669_ bg-__ecfdf5_ px-8px py-4px rounded-4px font-medium mr-8px mb-4px" },
              _toDisplayString($setup.uViewConfirm),
              1
              /* TEXT */
            ),
            _createElementVNode(
              "text",
              { class: "text-13px text-__d97706_ bg-__fffbe2_ px-8px py-4px rounded-4px font-medium mb-4px" },
              _toDisplayString($setup.uViewStart) + " / " + _toDisplayString($setup.uViewEnd),
              1
              /* TEXT */
            )
          ])
        ])
      ]),
      _createElementVNode("view", {
        class: "flex-row items-center justify-between py-12px border-bottom-width-1px border-bottom-style-solid border-bottom-color-__f1f5f9_",
        onClick: _cache[0] || (_cache[0] = ($event) => $setup.switchLanguage("zh-CN"))
      }, [
        _createElementVNode("view", { class: "flex-row items-center" }, [
          _createElementVNode("text", { class: "text-15px text-__334155_ font-medium" }, "简体中文")
        ]),
        _createElementVNode("view", { class: "flex-row items-center" }, [
          $setup.isZhCN ? (_openBlock(), _createBlock(_component_uni_icons, {
            key: 0,
            type: "checkmarkempty",
            size: "20",
            style: { "color": "#3b82f6" }
          })) : _createCommentVNode("v-if", true)
        ])
      ]),
      _createElementVNode("view", {
        class: "flex-row items-center justify-between py-12px",
        onClick: _cache[1] || (_cache[1] = ($event) => $setup.switchLanguage("en-US"))
      }, [
        _createElementVNode("view", { class: "flex-row items-center" }, [
          _createElementVNode("text", { class: "text-15px text-__334155_ font-medium" }, "English")
        ]),
        _createElementVNode("view", { class: "flex-row items-center" }, [
          $setup.isEnUS ? (_openBlock(), _createBlock(_component_uni_icons, {
            key: 0,
            type: "checkmarkempty",
            size: "20",
            style: { "color": "#3b82f6" }
          })) : _createCommentVNode("v-if", true)
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
