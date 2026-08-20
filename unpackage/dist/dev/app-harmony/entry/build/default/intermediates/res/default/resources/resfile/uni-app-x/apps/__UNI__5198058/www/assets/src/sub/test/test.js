import { A as AppKu } from "../../../App.ku.js";
import { L as LayoutComponent } from "../../layouts/default.js";
import { _ as _export_sfc } from "../../../plugin-vue-export-helper.js";
import "../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../uni_modules/uview-ultra/libs/function/test.js";
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
import "../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../uni_modules/uview-ultra/libs/config/color.js";
import "../../tabbar/index.js";
import "../../tabbar/store.js";
import "../../tabbar/types.js";
import "../../tabbar/config.js";
import "../../tabbar/TabbarItem.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../utils/i18n.js";
import "../../i18n/index.js";
import "../../../uni_modules/lime-i18n/common/index.js";
import "../../../uni_modules/lime-i18n/common/composer-class.js";
import "../../../uni_modules/lime-i18n/common/format.js";
import "../../../uni_modules/lime-i18n/common/util.js";
import "../../../uni_modules/lime-i18n/common/errors.js";
import "../../../uni_modules/lime-i18n/common/warnings.js";
import "../../../uni_modules/lime-i18n/common/types.js";
import "../../i18n/locales/zh-CN.js";
import "../../i18n/locales/en-US.js";
import "../../store/index.js";
import "../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../store/app.js";
import "../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../uni_modules/x-pinia-s/instans/defineStore.js";
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
import "../../utils/theme.js";
import "../../../theme.js";
import "../../store/token.js";
import "../../store/user.js";
import "../../utils/systemInfo.js";
import "../../utils/toast.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref } = globalThis.Vue;
const { onLoad } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
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
const { createElementVNode: _createElementVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, createCommentVNode: _createCommentVNode, withCtx: _withCtx, createVNode: _createVNode, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["AppKu"], null, {
    default: _withCtx(() => [
      _createVNode($setup["LayoutComponent"], { "navigation-bar-title-text": "测试" }, {
        default: _withCtx(() => [
          _createElementVNode("view", { class: "p-_b5px_B min-h-screen bg-_b_hf8fafc_B" }, [
            _createElementVNode("view", { class: "bg-white rounded-lg p-_b5px_B shadow-sm border-_b1px_B border-solid border-_b_he2e8f0_B" }, [
              _createElementVNode("text", { class: "text-_b20px_B font-bold text-_b_h1e293b_B" }, "URL Query 页面参数获取测试"),
              _createElementVNode("text", { class: "text-_b12px_B text-_b_h94a3b8_B mt-_b2px_B" }, "本页面用于展示并测试如何获取 URL 中携带的 query 参数。"),
              _createElementVNode("view", { class: "mt-_b4px_B border-t-_b1px_B border-top-style-solid border-top-color-_b_hf1f5f9_B pt-_b4px_B" }, [
                _createElementVNode("view", { class: "mb-_b4px_B" }, [
                  _createElementVNode("text", { class: "text-_b14px_B font-bold text-_b_h64748b_B" }, "解析到的参数详情：")
                ]),
                (_openBlock(true), _createElementBlock(
                  _Fragment,
                  null,
                  _renderList($setup.optionKeys, (key) => {
                    return _openBlock(), _createElementBlock("view", {
                      key,
                      class: "flex flex-row justify-between items-center py-_b2px_B border-b-_b1px_B border-bottom-style-solid border-bottom-color-_b_hf8fafc_B"
                    }, [
                      _createElementVNode(
                        "text",
                        { class: "text-_b14px_B text-_b_h64748b_B font-medium" },
                        _toDisplayString(key) + ":",
                        1
                        /* TEXT */
                      ),
                      _createElementVNode(
                        "text",
                        { class: "text-_b14px_B text-_b_h334155_B font-semibold" },
                        _toDisplayString($setup.getOptionValue(key)),
                        1
                        /* TEXT */
                      )
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                )),
                $setup.optionKeys.length == 0 ? (_openBlock(), _createElementBlock("view", {
                  key: 0,
                  class: "py-_b4px_B text-center"
                }, [
                  _createElementVNode("text", { class: "text-_b14px_B text-_b_h94a3b8_B" }, "暂无任何 query 参数")
                ])) : _createCommentVNode("v-if", true)
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
const _style_wt = {"test":{"":{"marginTop":"24rpx","display":"flex","height":100,"width":222.222,"alignItems":"center","justifyContent":"center","borderRadius":40,"backgroundColor":"rgba(49,237,216,0.54)"}},"page":{"":{"--theme-color":"#37c2bc"}},"p-_b5px_B":{"":{"paddingTop":5,"paddingRight":5,"paddingBottom":5,"paddingLeft":5}},"bg-_b_hf8fafc_B":{"":{"backgroundColor":"#f8fafc"}},"bg-white":{"":{"backgroundColor":"#ffffff"}},"rounded-lg":{"":{"borderTopLeftRadius":"16rpx","borderTopRightRadius":"16rpx","borderBottomRightRadius":"16rpx","borderBottomLeftRadius":"16rpx"}},"shadow-sm":{"":{"--tw-inset-shadow":"0 0 #0000","--tw-inset-ring-shadow":"0 0 #0000","--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)","boxShadow":"var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)"}},"border-_b1px_B":{"":{"--tw-border-style":"solid","borderTopStyle":"var(--tw-border-style)","borderRightStyle":"var(--tw-border-style)","borderBottomStyle":"var(--tw-border-style)","borderLeftStyle":"var(--tw-border-style)","borderTopWidth":1,"borderRightWidth":1,"borderBottomWidth":1,"borderLeftWidth":1}},"border-solid":{"":{"--tw-border-style":"solid","borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}},"border-_b_he2e8f0_B":{"":{"borderTopColor":"#e2e8f0","borderRightColor":"#e2e8f0","borderBottomColor":"#e2e8f0","borderLeftColor":"#e2e8f0"}},"text-_b20px_B":{"":{"fontSize":20}},"font-bold":{"":{"--tw-font-weight":"700","fontWeight":700}},"text-_b_h1e293b_B":{"":{"color":"#1e293b"}},"text-_b12px_B":{"":{"fontSize":12}},"text-_b_h94a3b8_B":{"":{"color":"#94a3b8"}},"mt-_b2px_B":{"":{"marginTop":2}},"mt-_b4px_B":{"":{"marginTop":4}},"border-t-_b1px_B":{"":{"--tw-border-style":"solid","borderTopStyle":"var(--tw-border-style)","borderTopWidth":1}},"pt-_b4px_B":{"":{"paddingTop":4}},"mb-_b4px_B":{"":{"marginBottom":4}},"text-_b14px_B":{"":{"fontSize":14}},"text-_b_h64748b_B":{"":{"color":"#64748b"}},"flex":{"":{"display":"flex"}},"flex-row":{"":{"flexDirection":"row"}},"justify-between":{"":{"justifyContent":"space-between"}},"items-center":{"":{"alignItems":"center"}},"py-_b2px_B":{"":{"paddingTop":2,"paddingBottom":2}},"border-b-_b1px_B":{"":{"--tw-border-style":"solid","borderBottomStyle":"var(--tw-border-style)","borderBottomWidth":1}},"font-medium":{"":{"--tw-font-weight":"500","fontWeight":500}},"text-_b_h334155_B":{"":{"color":"#334155"}},"font-semibold":{"":{"--tw-font-weight":"600","fontWeight":600}},"py-_b4px_B":{"":{"paddingTop":4,"paddingBottom":4}},"text-center":{"":{"textAlign":"center"}}};
const test = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_wt]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/sub/test/test.uvue"]]);
export {
  test as default
};
//# sourceMappingURL=test.js.map
