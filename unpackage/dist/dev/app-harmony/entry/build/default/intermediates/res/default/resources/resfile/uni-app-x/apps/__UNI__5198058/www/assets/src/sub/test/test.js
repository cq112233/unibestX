const { defineComponent, ref, onLoad, openBlock, createBlock, withCtx, createVNode, createElementVNode, createElementBlock, Fragment, renderList, toDisplayString, createCommentVNode } = globalThis.Vue
import { A as AppKu } from "../../../App.ku.js";
import { L as LayoutComponent } from "../../layouts/default.js";
import { _ as _export_sfc } from "../../../plugin-vue-export-helper.js";
import "../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/props.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../uni_modules/uview-ultra/libs/mixin/mpMixin.js";
import "../../../uni_modules/uview-ultra/libs/mixin/mixin.js";
import "../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
import "../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import "../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../uni_modules/uview-ultra/components/up-gap/up-gap.js";
import "../../../uni_modules/uview-ultra/libs/composable/useMp.js";
import "../../../uni_modules/uview-ultra/components/up-gap/gap.js";
import "../../../uni_modules/uview-ultra/components/up-overlay/up-overlay.js";
import "../../../uni_modules/uview-ultra/components/up-transition/up-transition.js";
import "../../../uni_modules/uview-ultra/components/up-transition/props.js";
import "../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../uni_modules/uview-ultra/components/up-overlay/props.js";
import "../../../uni_modules/uview-ultra/components/up-overlay/overlay.js";
import "../../../uni_modules/uview-ultra/libs/config/color.js";
import "../../tabbar/index.js";
import "../../tabbar/store.js";
import "../../tabbar/types.js";
import "../../tabbar/config.js";
import "../../tabbar/TabbarItem.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../utils/systemInfo.js";
import "../../store/index.js";
import "../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../store/token.js";
import "../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../store/user.js";
import "../../store/app.js";
import "../../i18n/index.js";
import "../../../uni_modules/lime-i18n/common/index.js";
import "../../../uni_modules/lime-i18n/common/composer-class.js";
import "../../../uni_modules/lime-i18n/common/format.js";
import "../../../uni_modules/lime-i18n/common/util.js";
import "../../../uni_modules/lime-i18n/common/errors.js";
import "../../../uni_modules/lime-i18n/common/warnings.js";
import "../../../uni_modules/lime-i18n/common/types.js";
import "../../i18n/locales/zh_CN.js";
import "../../i18n/locales/en_US.js";
import "../../../uni_modules/uview-ultra/libs/i18n/index.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/zh-Hans.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/zh-Hant.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/en.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/es.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/fr.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/de.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/ko.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/ja.js";
import "../../../uni_modules/uview-ultra/libs/i18n/locales/ru.js";
import "../../utils/toast.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "test",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const optionKeys = ref([]);
    const queryOptions = ref(null);
    onLoad((options = null) => {
      uni.__f__("log", "at src/sub/test/test.uvue:32", "test page onLoad options:", options);
      if (options != null) {
        queryOptions.value = options;
        optionKeys.value = UTSJSONObject.keys(options);
      }
    });
    function getOptionValue(key) {
      const options = queryOptions.value;
      if (options != null) {
        const val = options[key];
        if (val != null) {
          return `${val}`;
        }
      }
      return "";
    }
    const __returned__ = { optionKeys, queryOptions, getOptionValue, get AppKu() {
      return AppKu;
    }, get LayoutComponent() {
      return LayoutComponent;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "bg-__f8fafc_": { "": { "backgroundImage": "none", "backgroundColor": "#f8fafc" } }, "bg-white": { "": { "backgroundColor": "rgba(255,255,255,var(--un-bg-opacity,1))" } }, "border-bottom-color-__f8fafc_": { "": { "borderBottomColor": "#f8fafc" } }, "border-bottom-style-solid": { "": { "borderBottomStyle": "solid" } }, "border-bottom-width-1px": { "": { "borderBottomWidth": 1 } }, "border-color-__e2e8f0_": { "": { "borderTopColor": "#e2e8f0", "borderRightColor": "#e2e8f0", "borderBottomColor": "#e2e8f0", "borderLeftColor": "#e2e8f0" } }, "border-style-solid": { "": { "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid" } }, "border-top-color-__f1f5f9_": { "": { "borderTopColor": "#f1f5f9" } }, "border-top-style-solid": { "": { "borderTopStyle": "solid" } }, "border-top-width-1px": { "": { "borderTopWidth": 1 } }, "border-width-1px": { "": { "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1 } }, "flex": { "": { "display": "flex" } }, "flex-row": { "": { "flexDirection": "row" } }, "font-bold": { "": { "fontWeight": 700 } }, "font-medium": { "": { "fontWeight": 500 } }, "font-semibold": { "": { "fontWeight": 600 } }, "items-center": { "": { "alignItems": "center" } }, "justify-between": { "": { "justifyContent": "space-between" } }, "mb-4px": { "": { "marginBottom": 4 } }, "mt-2px": { "": { "marginTop": 2 } }, "mt-4px": { "": { "marginTop": 4 } }, "p-5px": { "": { "paddingTop": 5, "paddingRight": 5, "paddingBottom": 5, "paddingLeft": 5 } }, "pt-4px": { "": { "paddingTop": 4 } }, "py-2px": { "": { "paddingTop": 2, "paddingBottom": 2 } }, "py-4px": { "": { "paddingTop": 4, "paddingBottom": 4 } }, "rounded-lg": { "": { "borderTopLeftRadius": "var(--un-radius-lg-default,8rpx)", "borderTopRightRadius": "var(--un-radius-lg-default,8rpx)", "borderBottomRightRadius": "var(--un-radius-lg-default,8rpx)", "borderBottomLeftRadius": "var(--un-radius-lg-default,8rpx)" } }, "shadow-sm": { "": { "boxShadow": "var(--un-inset-shadow,0 0 #0000),var(--un-inset-ring-shadow,0 0 #0000),var(--un-ring-offset-shadow,0 0 #0000),var(--un-ring-shadow,0 0 #0000),var(--un-shadow,0 1rpx 3rpx 0 var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))),0 1rpx 2rpx -1rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))))", "--un-shadow": "0 1rpx 3rpx 0rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1))),0 1rpx 2rpx -1rpx var(--un-shadow-color,rgba(0,0,0,var(--un-shadow-opacity,0.1)))" } }, "text-__1e293b_": { "": { "color": "#1e293b" } }, "text-__334155_": { "": { "color": "#334155" } }, "text-__64748b_": { "": { "color": "#64748b" } }, "text-__94a3b8_": { "": { "color": "#94a3b8" } }, "text-12px": { "": { "fontSize": 12 } }, "text-14px": { "": { "fontSize": 14 } }, "text-20px": { "": { "fontSize": 20 } }, "text-center": { "": { "textAlign": "center" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["AppKu"], null, {
    default: withCtx(() => [
      createVNode($setup["LayoutComponent"], { "navigation-bar-title-text": "测试" }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "p-5px min-h-screen bg-__f8fafc_" }, [
            createElementVNode("view", { class: "bg-white rounded-lg p-5px shadow-sm border-width-1px border-style-solid border-color-__e2e8f0_" }, [
              createElementVNode("text", { class: "text-20px font-bold text-__1e293b_" }, "URL Query 页面参数获取测试"),
              createElementVNode("text", { class: "text-12px text-__94a3b8_ mt-2px" }, "本页面用于展示并测试如何获取 URL 中携带的 query 参数。"),
              createElementVNode("view", { class: "mt-4px border-top-width-1px border-top-style-solid border-top-color-__f1f5f9_ pt-4px" }, [
                createElementVNode("view", { class: "mb-4px" }, [
                  createElementVNode("text", { class: "text-14px font-bold text-__64748b_" }, "解析到的参数详情：")
                ]),
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList($setup.optionKeys, (key) => {
                    return openBlock(), createElementBlock("view", {
                      key,
                      class: "flex flex-row justify-between items-center py-2px border-bottom-width-1px border-bottom-style-solid border-bottom-color-__f8fafc_"
                    }, [
                      createElementVNode(
                        "text",
                        { class: "text-14px text-__64748b_ font-medium" },
                        toDisplayString(key) + ":",
                        1
                        /* TEXT */
                      ),
                      createElementVNode(
                        "text",
                        { class: "text-14px text-__334155_ font-semibold" },
                        toDisplayString($setup.getOptionValue(key)),
                        1
                        /* TEXT */
                      )
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                )),
                $setup.optionKeys.length == 0 ? (openBlock(), createElementBlock("view", {
                  key: 0,
                  class: "py-4px text-center"
                }, [
                  createElementVNode("text", { class: "text-14px text-__94a3b8_" }, "暂无任何 query 参数")
                ])) : createCommentVNode("v-if", true)
              ])
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
const test = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/sub/test/test.uvue"]]);
export {
  test as default
};
//# sourceMappingURL=test.js.map
