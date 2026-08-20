import { _ as __easycom_1 } from "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import { r as resolveEasycom } from "../../../../App.ku.js";
import { C as Card } from "./Card.js";
import "../../../store/index.js";
import { $ as $t, s as setTabbarItem } from "../../../utils/i18n.js";
import { t } from "../../../../uni_modules/uview-ultra/libs/i18n/index.js";
import { u as useAppStore } from "../../../store/app.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
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
const _style_0 = { "wtu-zeqk4z-0": { "": { "borderTopLeftRadius": 12, "borderTopRightRadius": 12, "borderBottomRightRadius": 12, "borderBottomLeftRadius": 12 } }, "wtu-1py2ikc-1": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16 } }, "wtu-1aqjbfx-2": { "": { "marginBottom": 16 } }, "wtu-w8jmyu-3": { "": { "--tw-border-style": "solid", "borderTopStyle": "var(--tw-border-style)", "borderRightStyle": "var(--tw-border-style)", "borderBottomStyle": "var(--tw-border-style)", "borderLeftStyle": "var(--tw-border-style)", "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "wtu-opyasy-4": { "": { "--tw-border-style": "solid", "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "wtu-13g5z0w-5": { "": { "borderTopColor": "#e2e8f0", "borderRightColor": "#e2e8f0", "borderBottomColor": "#e2e8f0", "borderLeftColor": "#e2e8f0" } }, "wtu-1vqucrp-6": { "": { "fontSize": 12 } }, "wtu-9qob8-7": { "": { "color": "#94a3b8" } }, "wtu-1hy0bj4-8": { "": { "marginBottom": 6 } }, "wtu-f1cbux-9": { "": { "fontSize": 16 } }, "wtu-tg5bk5-a": { "": { "--tw-font-weight": "var(--font-weight-bold, 700)", "fontWeight": 700 } }, "wtu-uqoqln-b": { "": { "color": "#1e293b" } }, "wtu-1wrjlrz-c": { "": { "fontSize": 14 } }, "wtu-apgfmb-d": { "": { "color": "#475569" } }, "wtu-1nykptg-e": { "": { "marginTop": 8 } }, "wtu-16287mo-f": { "": { "height": 1 } }, "wtu-u63ba2-g": { "": { "backgroundColor": "#f1f5f9" } }, "wtu-ui2fkq-h": { "": { "marginTop": 12, "marginBottom": 12 } }, "wtu-1xpqddw-i": { "": { "flexDirection": "row" } }, "wtu-1t7tavk-j": { "": { "alignItems": "center" } }, "wtu-uadth0-k": { "": { "flexWrap": "wrap" } }, "wtu-3p92ns-l": { "": { "fontSize": 13 } }, "wtu-zus43i-m": { "": { "color": "#2563eb" } }, "wtu-grn2i8-n": { "": { "backgroundColor": "#eff6ff" } }, "wtu-j3s3ch-o": { "": { "paddingLeft": 8, "paddingRight": 8 } }, "wtu-1x56in2-p": { "": { "paddingTop": 4, "paddingBottom": 4 } }, "wtu-8n2rm8-q": { "": { "borderTopLeftRadius": 4, "borderTopRightRadius": 4, "borderBottomRightRadius": 4, "borderBottomLeftRadius": 4 } }, "wtu-re8qpd-r": { "": { "--tw-font-weight": "var(--font-weight-medium, 500)", "fontWeight": 500 } }, "wtu-11kd58a-s": { "": { "marginRight": 8 } }, "wtu-l3s08e-t": { "": { "marginBottom": 4 } }, "wtu-6g0b4e-u": { "": { "color": "#059669" } }, "wtu-en5wvg-v": { "": { "backgroundColor": "#ecfdf5" } }, "wtu-ky8bvg-w": { "": { "color": "#d97706" } }, "wtu-14ion4g-x": { "": { "backgroundColor": "#fffbe2" } }, "wtu-1fek2j3-y": { "": { "justifyContent": "space-between" } }, "wtu-17qg8e9-z": { "": { "paddingTop": 12, "paddingBottom": 12 } }, "wtu-6xv57u-10": { "": { "fontSize": 15 } }, "wtu-1au22ic-11": { "": { "color": "#334155" } } };
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock, createCommentVNode: _createCommentVNode, withCtx: _withCtx } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_icons = resolveEasycom(__resolveDynamicComponent("uni-icons"), __easycom_1);
  return _openBlock(), _createBlock($setup["Card"], { title: $setup.langTitle }, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "wtu-zeqk4z-0 wtu-1py2ikc-1 wtu-1aqjbfx-2 wtu-w8jmyu-3 wtu-opyasy-4 wtu-13g5z0w-5" }, [
        _createElementVNode(
          "text",
          { class: "wtu-1vqucrp-6 wtu-9qob8-7 wtu-1hy0bj4-8" },
          _toDisplayString($setup.langPreview),
          1
          /* TEXT */
        ),
        _createElementVNode(
          "text",
          { class: "wtu-f1cbux-9 wtu-tg5bk5-a wtu-uqoqln-b" },
          _toDisplayString($setup.welcomeText),
          1
          /* TEXT */
        ),
        _createElementVNode(
          "text",
          { class: "wtu-1wrjlrz-c wtu-apgfmb-d wtu-1nykptg-e" },
          _toDisplayString($setup.helloText),
          1
          /* TEXT */
        ),
        _createElementVNode("view", { class: "wtu-16287mo-f wtu-u63ba2-g wtu-ui2fkq-h" }),
        _createElementVNode("view", null, [
          _createElementVNode(
            "text",
            { class: "wtu-1vqucrp-6 wtu-9qob8-7 wtu-1hy0bj4-8" },
            _toDisplayString($setup.uviewPreview),
            1
            /* TEXT */
          ),
          _createElementVNode("view", { class: "wtu-1xpqddw-i wtu-1t7tavk-j wtu-uadth0-k" }, [
            _createElementVNode(
              "text",
              { class: "wtu-3p92ns-l wtu-zus43i-m wtu-grn2i8-n wtu-j3s3ch-o wtu-1x56in2-p wtu-8n2rm8-q wtu-re8qpd-r wtu-11kd58a-s wtu-l3s08e-t" },
              _toDisplayString($setup.uViewChooseDates),
              1
              /* TEXT */
            ),
            _createElementVNode(
              "text",
              { class: "wtu-3p92ns-l wtu-6g0b4e-u wtu-en5wvg-v wtu-j3s3ch-o wtu-1x56in2-p wtu-8n2rm8-q wtu-re8qpd-r wtu-11kd58a-s wtu-l3s08e-t" },
              _toDisplayString($setup.uViewConfirm),
              1
              /* TEXT */
            ),
            _createElementVNode(
              "text",
              { class: "wtu-3p92ns-l wtu-ky8bvg-w wtu-14ion4g-x wtu-j3s3ch-o wtu-1x56in2-p wtu-8n2rm8-q wtu-re8qpd-r wtu-l3s08e-t" },
              _toDisplayString($setup.uViewStart) + " / " + _toDisplayString($setup.uViewEnd),
              1
              /* TEXT */
            )
          ])
        ])
      ]),
      _createElementVNode("view", {
        class: "wtu-1xpqddw-i wtu-1t7tavk-j wtu-1fek2j3-y wtu-17qg8e9-z",
        onClick: _cache[0] || (_cache[0] = ($event) => $setup.switchLanguage("zh-CN"))
      }, [
        _createElementVNode("view", { class: "wtu-1xpqddw-i wtu-1t7tavk-j" }, [
          _createElementVNode("text", { class: "wtu-6xv57u-10 wtu-1au22ic-11 wtu-re8qpd-r" }, "简体中文")
        ]),
        _createElementVNode("view", { class: "wtu-1xpqddw-i wtu-1t7tavk-j" }, [
          $setup.isZhCN ? (_openBlock(), _createBlock(_component_uni_icons, {
            key: 0,
            type: "checkmarkempty",
            size: "20",
            style: { "color": "#3b82f6" }
          })) : _createCommentVNode("v-if", true)
        ])
      ]),
      _createElementVNode("view", { class: "wtu-16287mo-f wtu-u63ba2-g" }),
      _createElementVNode("view", {
        class: "wtu-1xpqddw-i wtu-1t7tavk-j wtu-1fek2j3-y wtu-17qg8e9-z",
        onClick: _cache[1] || (_cache[1] = ($event) => $setup.switchLanguage("en-US"))
      }, [
        _createElementVNode("view", { class: "wtu-1xpqddw-i wtu-1t7tavk-j" }, [
          _createElementVNode("text", { class: "wtu-6xv57u-10 wtu-1au22ic-11 wtu-re8qpd-r" }, "English")
        ]),
        _createElementVNode("view", { class: "wtu-1xpqddw-i wtu-1t7tavk-j" }, [
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
