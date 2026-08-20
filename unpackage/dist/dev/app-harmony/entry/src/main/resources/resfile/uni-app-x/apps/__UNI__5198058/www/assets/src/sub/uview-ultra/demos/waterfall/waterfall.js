import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { A as AppKu, r as resolveEasycom } from "../../../../../App.ku.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-waterfall/up-waterfall.js";
import { L as LayoutComponent } from "../../../../layouts/default.js";
import { _ as _imports_0 } from "../../../../../static/logo.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
import "../../../../utils/systemInfo.js";
import "../../../../store/index.js";
import "../../../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../../../store/app.js";
import "../../../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../../../tabbar/store.js";
import "../../../../tabbar/types.js";
import "../../../../tabbar/config.js";
import "../../../../i18n/index.js";
import "../../../../../uni_modules/lime-i18n/common/index.js";
import "../../../../../uni_modules/lime-i18n/common/composer-class.js";
import "../../../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../../../uni_modules/lime-i18n/common/format.js";
import "../../../../../uni_modules/lime-i18n/common/util.js";
import "../../../../../uni_modules/lime-i18n/common/errors.js";
import "../../../../../uni_modules/lime-i18n/common/warnings.js";
import "../../../../../uni_modules/lime-i18n/common/types.js";
import "../../../../i18n/locales/zh-CN.js";
import "../../../../i18n/locales/en-US.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/index.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/zh-Hans.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/zh-Hant.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/en.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/es.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/fr.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/de.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/ko.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/ja.js";
import "../../../../../uni_modules/uview-ultra/libs/i18n/locales/ru.js";
import "../../../../utils/theme.js";
import "../../../../../theme.js";
import "../../../../store/token.js";
import "../../../../store/user.js";
import "../../../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-gap/up-gap.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useMp.js";
import "../../../../../uni_modules/uview-ultra/components/up-gap/gap.js";
import "../../../../../uni_modules/uview-ultra/components/up-overlay/up-overlay.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/up-transition.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../../../uni_modules/uview-ultra/libs/config/color.js";
import "../../../../tabbar/index.js";
import "../../../../tabbar/TabbarItem.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../../../utils/i18n.js";
import "../../../../utils/toast.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "waterfall",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const list = ref([
      new UTSJSONObject({ title: "uview-ultra 核心UI组件", desc: "轻量级UI框架", price: 129, imgHeight: "80px" }),
      new UTSJSONObject({ title: "高性能 UniAppX 跨端套件", desc: "支持原生Android/iOS", price: 299, imgHeight: "160px" }),
      new UTSJSONObject({ title: "智能瀑布流弹性排版", desc: "自动适配列高", price: 89, imgHeight: "110px" }),
      new UTSJSONObject({ title: "极速渲染流畅体验", desc: "零延迟丝滑滚动", price: 199, imgHeight: "200px" }),
      new UTSJSONObject({ title: "炫彩主题切换系统", desc: "一键换肤体验", price: 49, imgHeight: "90px" }),
      new UTSJSONObject({ title: "全套内置工程级图标库", desc: "上百款高清矢量图标", price: 159, imgHeight: "140px" }),
      new UTSJSONObject({ title: "响应式页面布局容器", desc: "完美适配屏幕", price: 79, imgHeight: "180px" }),
      new UTSJSONObject({ title: "开箱即用多端示例", desc: "快速构建产品原型", price: 99, imgHeight: "120px" })
    ]);
    const __returned__ = { list, get AppKu() {
      return AppKu;
    }, get LayoutComponent() {
      return LayoutComponent;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"demo-block":{"":{"marginBottom":12,"paddingTop":12,"paddingRight":12,"paddingBottom":12,"paddingLeft":12,"backgroundColor":"#ffffff","borderTopLeftRadius":8,"borderTopRightRadius":8,"borderBottomRightRadius":8,"borderBottomLeftRadius":8}},"demo-label":{"":{"fontSize":14,"fontWeight":"bold","color":"#606266","marginBottom":10,"paddingLeft":4,"borderLeftWidth":3,"borderLeftStyle":"solid","borderLeftColor":"#2979ff"}},"bg-_b_hf8fafc_B":{"":{"backgroundColor":"#f8fafc"}},"pb-_b30px_B":{"":{"paddingBottom":30}},"p-_b16px_B":{"":{"paddingTop":16,"paddingRight":16,"paddingBottom":16,"paddingLeft":16,"padding":16}},"p-_b6px_B":{"":{"paddingTop":6,"paddingRight":6,"paddingBottom":6,"paddingLeft":6,"padding":6}},"bg-_b_hf1f5f9_B":{"":{"backgroundColor":"#f1f5f9"}},"rounded-_b8px_B":{"":{"borderTopLeftRadius":8,"borderTopRightRadius":8,"borderBottomRightRadius":8,"borderBottomLeftRadius":8,"borderRadius":8}},"overflow-hidden":{"":{"overflow":"hidden"}},"p-_b8px_B":{"":{"paddingTop":8,"paddingRight":8,"paddingBottom":8,"paddingLeft":8,"padding":8}},"mb-_b8px_B":{"":{"marginBottom":8}},"text-_b14px_B":{"":{"fontSize":14}},"font-bold":{"":{"--tw-font-weight":"700","fontWeight":"var(--font-weight-bold)","-TwFontWeight":"var(--font-weight-bold)"}},"text-_b_h334155_B":{"":{"color":"#334155"}},"mt-_b6px_B":{"":{"marginTop":6}},"text-_b12px_B":{"":{"fontSize":12}},"text-_b_h94a3b8_B":{"":{"color":"#94a3b8"}},"mt-_b2px_B":{"":{"marginTop":2}},"text-_b_he11d48_B":{"":{"color":"#e11d48"}},"mt-_b4px_B":{"":{"marginTop":4}},"min-h-screen":{"":{"minHeight":"100vh"}}};
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, renderList: _renderList, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock, normalizeStyle: _normalizeStyle, toDisplayString: _toDisplayString, withCtx: _withCtx, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavBar = resolveEasycom(__resolveDynamicComponent("NavBar"), __easycom_0);
  const _component_up_waterfall = resolveEasycom(__resolveDynamicComponent("up-waterfall"), __easycom_1);
  return _openBlock(), _createBlock($setup["AppKu"], null, {
    default: _withCtx(() => [
      _createVNode($setup["LayoutComponent"], {
        "navigation-style": "custom",
        "navigation-bar-title-text": "up-waterfall 瀑布流"
      }, {
        default: _withCtx(() => [
          _createElementVNode("view", { class: "page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B" }, [
            _createVNode(_component_NavBar, {
              title: "Waterfall 瀑布流",
              "auto-back": true
            }),
            _createElementVNode("view", { class: "p-_b16px_B" }, [
              _createElementVNode("view", { class: "demo-block" }, [
                _createElementVNode("text", { class: "demo-label" }, "基础瀑布流 (2列)"),
                _createVNode(_component_up_waterfall, {
                  modelValue: $setup.list,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.list = $event),
                  columns: 2
                }, {
                  column: _withCtx(({ colList }) => [
                    (_openBlock(true), _createElementBlock(
                      _Fragment,
                      null,
                      _renderList(colList, (item, idx) => {
                        return _openBlock(), _createElementBlock("view", {
                          key: idx,
                          class: "p-_b6px_B"
                        }, [
                          _createElementVNode("view", { class: "bg-_b_hf1f5f9_B rounded-_b8px_B overflow-hidden p-_b8px_B mb-_b8px_B" }, [
                            _createElementVNode(
                              "image",
                              {
                                src: _imports_0,
                                mode: "aspectFit",
                                style: _normalizeStyle({ width: "100%", height: item.getString("imgHeight") ?? "100px", borderRadius: "6px", backgroundColor: "#ffffff" })
                              },
                              null,
                              4
                              /* STYLE */
                            ),
                            _createElementVNode(
                              "text",
                              { class: "text-_b14px_B font-bold text-_b_h334155_B mt-_b6px_B" },
                              _toDisplayString(item.getString("title")),
                              1
                              /* TEXT */
                            ),
                            _createElementVNode(
                              "text",
                              { class: "text-_b12px_B text-_b_h94a3b8_B mt-_b2px_B" },
                              _toDisplayString(item.getString("desc")),
                              1
                              /* TEXT */
                            ),
                            _createElementVNode(
                              "text",
                              { class: "text-_b14px_B text-_b_he11d48_B mt-_b4px_B font-bold" },
                              "￥" + _toDisplayString(item.getNumber("price")),
                              1
                              /* TEXT */
                            )
                          ])
                        ]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["modelValue"])
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
const waterfall = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/sub/uview-ultra/demos/waterfall/waterfall.uvue"]]);
export {
  waterfall as default
};
//# sourceMappingURL=waterfall.js.map
