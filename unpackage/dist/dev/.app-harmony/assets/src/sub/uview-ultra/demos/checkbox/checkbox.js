import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { A as AppKu, r as resolveEasycom } from "../../../../../App.ku.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-checkbox/up-checkbox.js";
import { _ as __easycom_2 } from "../../../../../uni_modules/uview-ultra/components/up-checkbox-group/up-checkbox-group.js";
import { L as LayoutComponent } from "../../../../layouts/default.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
import "../../../../utils/systemInfo.js";
import "../../../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
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
import "../../../../tabbar/store.js";
import "../../../../tabbar/types.js";
import "../../../../tabbar/config.js";
import "../../../../tabbar/TabbarItem.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../../../utils/i18n.js";
import "../../../../i18n/index.js";
import "../../../../../uni_modules/lime-i18n/common/index.js";
import "../../../../../uni_modules/lime-i18n/common/composer-class.js";
import "../../../../../uni_modules/lime-i18n/common/format.js";
import "../../../../../uni_modules/lime-i18n/common/util.js";
import "../../../../../uni_modules/lime-i18n/common/errors.js";
import "../../../../../uni_modules/lime-i18n/common/warnings.js";
import "../../../../../uni_modules/lime-i18n/common/types.js";
import "../../../../i18n/locales/zh-CN.js";
import "../../../../i18n/locales/en-US.js";
import "../../../../store/index.js";
import "../../../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../../../store/app.js";
import "../../../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../../../uni_modules/x-pinia-s/instans/defineStore.js";
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
import "../../../../store/token.js";
import "../../../../store/user.js";
import "../../../../utils/toast.js";
import "../../../../../uni_modules/uview-ultra/components/up-checkbox/checkbox.js";
import "../../../../../uni_modules/uview-ultra/components/up-checkbox-group/checkboxGroup.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "checkbox",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const checkboxValue1 = ref(["apple"]);
    const checkboxValue2 = ref(["apple"]);
    const checkboxValue3 = ref(["circle"]);
    const checkboxValue4 = ref([]);
    function checkboxChange(n) {
      uni.__f__("log", "at src/sub/uview-ultra/demos/checkbox/checkbox.uvue:48", "checkbox change", n);
    }
    const __returned__ = { checkboxValue1, checkboxValue2, checkboxValue3, checkboxValue4, checkboxChange, get AppKu() {
      return AppKu;
    }, get LayoutComponent() {
      return LayoutComponent;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"demo-block":{"":{"marginBottom":12,"paddingTop":12,"paddingRight":12,"paddingBottom":12,"paddingLeft":12,"backgroundColor":"#ffffff","borderTopLeftRadius":8,"borderTopRightRadius":8,"borderBottomRightRadius":8,"borderBottomLeftRadius":8}},"demo-label":{"":{"fontSize":14,"fontWeight":"bold","color":"#606266","paddingLeft":6,"borderLeftWidth":3,"borderLeftColor":"#2979ff","borderLeftStyle":"solid"}},"bg-_b_hf8fafc_B":{"":{"backgroundColor":"#f8fafc"}}};
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavBar = resolveEasycom(__resolveDynamicComponent("NavBar"), __easycom_0);
  const _component_up_checkbox = resolveEasycom(__resolveDynamicComponent("up-checkbox"), __easycom_1);
  const _component_up_checkbox_group = resolveEasycom(__resolveDynamicComponent("up-checkbox-group"), __easycom_2);
  return _openBlock(), _createBlock($setup["AppKu"], null, {
    default: _withCtx(() => [
      _createVNode($setup["LayoutComponent"], {
        "navigation-style": "custom",
        "navigation-bar-title-text": "up-checkbox 复选框"
      }, {
        default: _withCtx(() => [
          _createElementVNode("view", { class: "page-container bg-_b_hf8fafc_B min-h-screen pb-30px" }, [
            _createVNode(_component_NavBar, {
              title: "up-checkbox 复选框",
              "auto-back": true,
              "safe-area-inset-top": true,
              "bg-color": "#ffffff"
            }),
            _createElementVNode("view", { class: "p-16px" }, [
              _createElementVNode("view", { class: "demo-block" }, [
                _createElementVNode("text", { class: "demo-label" }, "基础用法"),
                _createVNode(_component_up_checkbox_group, {
                  modelValue: $setup.checkboxValue1,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.checkboxValue1 = $event),
                  onChange: $setup.checkboxChange
                }, {
                  default: _withCtx(() => [
                    _createVNode(_component_up_checkbox, {
                      name: "apple",
                      label: "苹果",
                      class: "mb-10px mr-20px"
                    }),
                    _createVNode(_component_up_checkbox, {
                      name: "banana",
                      label: "香蕉",
                      class: "mb-10px mr-20px"
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["modelValue"])
              ]),
              _createElementVNode("view", { class: "demo-block mt-12px" }, [
                _createElementVNode("text", { class: "demo-label" }, "禁用状态"),
                _createVNode(_component_up_checkbox_group, {
                  modelValue: $setup.checkboxValue2,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.checkboxValue2 = $event)
                }, {
                  default: _withCtx(() => [
                    _createVNode(_component_up_checkbox, {
                      name: "apple",
                      label: "苹果(禁用)",
                      disabled: true,
                      class: "mb-10px mr-20px"
                    }),
                    _createVNode(_component_up_checkbox, {
                      name: "banana",
                      label: "香蕉(未禁用)",
                      class: "mb-10px mr-20px"
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["modelValue"])
              ]),
              _createElementVNode("view", { class: "demo-block mt-12px" }, [
                _createElementVNode("text", { class: "demo-label" }, "自定义形状与颜色"),
                _createVNode(_component_up_checkbox_group, {
                  modelValue: $setup.checkboxValue3,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.checkboxValue3 = $event)
                }, {
                  default: _withCtx(() => [
                    _createVNode(_component_up_checkbox, {
                      name: "circle",
                      label: "圆形",
                      shape: "circle",
                      "active-color": "#fa3534",
                      class: "mb-10px mr-20px"
                    }),
                    _createVNode(_component_up_checkbox, {
                      name: "square",
                      label: "方形",
                      shape: "square",
                      "active-color": "#ff9900",
                      class: "mb-10px mr-20px"
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["modelValue"])
              ]),
              _createElementVNode("view", { class: "demo-block mt-12px" }, [
                _createElementVNode("text", { class: "demo-label" }, "禁止点击标签切换"),
                _createVNode(_component_up_checkbox_group, {
                  modelValue: $setup.checkboxValue4,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.checkboxValue4 = $event)
                }, {
                  default: _withCtx(() => [
                    _createVNode(_component_up_checkbox, {
                      name: "label",
                      label: "只能点框框",
                      "label-disabled": true,
                      class: "mb-10px mr-20px"
                    })
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
const checkbox = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/sub/uview-ultra/demos/checkbox/checkbox.uvue"]]);
export {
  checkbox as default
};
//# sourceMappingURL=checkbox.js.map
