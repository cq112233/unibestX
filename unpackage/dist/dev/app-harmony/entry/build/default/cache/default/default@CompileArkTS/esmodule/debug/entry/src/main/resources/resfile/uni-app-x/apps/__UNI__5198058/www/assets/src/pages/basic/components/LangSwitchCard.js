import { _ as __easycom_1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uni-icons/components/uni-icons/uni-icons&";
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { C as Card } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/pages/basic/components/Card&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/store/index&";
import { $ as $t, s as setTabbarItem } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/utils/i18n&";
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
    const langTitle = computed(() => {
      return $t("basic.langTitle");
    });
    const langPreview = computed(() => {
      return $t("basic.langPreview");
    });
    const welcomeText = computed(() => {
      return $t("message.welcome");
    });
    const helloText = computed(() => {
      return $t("message.hello", new UTSJSONObject({ msg: "hi" }));
    });
    const uviewPreview = computed(() => {
      return $t("basic.uviewPreview");
    });
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
        title: $t("message.switch_success"),
        icon: "none",
        duration: 1500
      });
    }
    const __returned__ = { appStore, langTitle, langPreview, welcomeText, helloText, uviewPreview, currentLocale, isZhCN, isEnUS, uViewChooseDates, uViewConfirm, uViewStart, uViewEnd, switchLanguage, get Card() {
      return Card;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "wtu-9qob8-0": { "": { "color": "#94a3b8" } }, "wtu-tg5bk5-1": { "": { "--tw-font-weight": "var(--font-weight-bold, 700)", "fontWeight": 700 } }, "wtu-uqoqln-2": { "": { "color": "#1e293b" } }, "wtu-apgfmb-3": { "": { "color": "#475569" } }, "wtu-1xpqddw-4": { "": { "flexDirection": "row" } }, "wtu-1t7tavk-5": { "": { "alignItems": "center" } }, "wtu-uadth0-6": { "": { "flexWrap": "wrap" } }, "wtu-zus43i-7": { "": { "color": "#2563eb" } }, "wtu-grn2i8-8": { "": { "backgroundColor": "#eff6ff" } }, "wtu-re8qpd-9": { "": { "--tw-font-weight": "var(--font-weight-medium, 500)", "fontWeight": 500 } }, "wtu-6g0b4e-a": { "": { "color": "#059669" } }, "wtu-en5wvg-b": { "": { "backgroundColor": "#ecfdf5" } }, "wtu-ky8bvg-c": { "": { "color": "#d97706" } }, "wtu-14ion4g-d": { "": { "backgroundColor": "#fffbe2" } }, "wtu-1fek2j3-e": { "": { "justifyContent": "space-between" } }, "wtu-1au22ic-f": { "": { "color": "#334155" } } };
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock, createCommentVNode: _createCommentVNode, withCtx: _withCtx } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_icons = resolveEasycom(__resolveDynamicComponent("uni-icons"), __easycom_1);
  return _openBlock(), _createBlock($setup["Card"], { title: $setup.langTitle }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-[#e2e8f0]" }, [
        _createElementVNode(
          "text",
          { class: "text-12px wtu-9qob8-0 mb-6px" },
          _toDisplayString($setup.langPreview),
          1
          /* TEXT */
        ),
        _createElementVNode(
          "text",
          { class: "text-16px wtu-tg5bk5-1 wtu-uqoqln-2" },
          _toDisplayString($setup.welcomeText),
          1
          /* TEXT */
        ),
        _createElementVNode(
          "text",
          { class: "text-14px wtu-apgfmb-3 mt-8px" },
          _toDisplayString($setup.helloText),
          1
          /* TEXT */
        ),
        _createElementVNode("view", { class: "mt-12px pt-12px border-top-width-1px border-top-style-solid border-top-color-[#f1f5f9]" }, [
          _createElementVNode(
            "text",
            { class: "text-12px wtu-9qob8-0 mb-6px" },
            _toDisplayString($setup.uviewPreview),
            1
            /* TEXT */
          ),
          _createElementVNode("view", { class: "wtu-1xpqddw-4 wtu-1t7tavk-5 wtu-uadth0-6" }, [
            _createElementVNode(
              "text",
              { class: "text-13px wtu-zus43i-7 wtu-grn2i8-8 px-8px py-4px rounded-4px wtu-re8qpd-9 mr-8px mb-4px" },
              _toDisplayString($setup.uViewChooseDates),
              1
              /* TEXT */
            ),
            _createElementVNode(
              "text",
              { class: "text-13px wtu-6g0b4e-a wtu-en5wvg-b px-8px py-4px rounded-4px wtu-re8qpd-9 mr-8px mb-4px" },
              _toDisplayString($setup.uViewConfirm),
              1
              /* TEXT */
            ),
            _createElementVNode(
              "text",
              { class: "text-13px wtu-ky8bvg-c wtu-14ion4g-d px-8px py-4px rounded-4px wtu-re8qpd-9 mb-4px" },
              _toDisplayString($setup.uViewStart) + " / " + _toDisplayString($setup.uViewEnd),
              1
              /* TEXT */
            )
          ])
        ])
      ]),
      _createElementVNode("view", {
        class: "wtu-1xpqddw-4 wtu-1t7tavk-5 wtu-1fek2j3-e py-12px border-bottom-width-1px border-bottom-style-solid border-bottom-color-[#f1f5f9]",
        onClick: _cache[0] || (_cache[0] = ($event) => $setup.switchLanguage("zh-CN"))
      }, [
        _createElementVNode("view", { class: "wtu-1xpqddw-4 wtu-1t7tavk-5" }, [
          _createElementVNode("text", { class: "text-15px wtu-1au22ic-f wtu-re8qpd-9" }, "简体中文")
        ]),
        _createElementVNode("view", { class: "wtu-1xpqddw-4 wtu-1t7tavk-5" }, [
          $setup.isZhCN ? (_openBlock(), _createBlock(_component_uni_icons, {
            key: 0,
            type: "checkmarkempty",
            size: "20",
            style: { "color": "#3b82f6" }
          })) : _createCommentVNode("v-if", true)
        ])
      ]),
      _createElementVNode("view", {
        class: "wtu-1xpqddw-4 wtu-1t7tavk-5 wtu-1fek2j3-e py-12px",
        onClick: _cache[1] || (_cache[1] = ($event) => $setup.switchLanguage("en-US"))
      }, [
        _createElementVNode("view", { class: "wtu-1xpqddw-4 wtu-1t7tavk-5" }, [
          _createElementVNode("text", { class: "text-15px wtu-1au22ic-f wtu-re8qpd-9" }, "English")
        ]),
        _createElementVNode("view", { class: "wtu-1xpqddw-4 wtu-1t7tavk-5" }, [
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
