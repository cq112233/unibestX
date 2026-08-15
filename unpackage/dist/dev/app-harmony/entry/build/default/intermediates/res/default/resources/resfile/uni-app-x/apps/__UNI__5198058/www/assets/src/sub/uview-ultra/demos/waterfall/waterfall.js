import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-waterfall/up-waterfall.js";
import { _ as _sfc_main$1 } from "../../../../../App.ku.js";
import { _ as _sfc_main$2 } from "../../../../layouts/default.js";
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
import "../../../../store/index.js";
import "../../../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../../../store/token.js";
import "../../../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../../../store/user.js";
import "../../../../store/app.js";
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
import "../../../../utils/toast.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, createSharedDataScopedSlot: _createSharedDataScopedSlot, createSharedDataVSlot: _createSharedDataVSlot, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, toDisplayString: _toDisplayString, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataFor: _createSharedDataFor, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubUviewUltraDemosWaterfallWaterfall";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "982dd0ee",
  __className,
  __filename: "src/sub/uview-ultra/demos/waterfall/waterfall.uvue",
  __name: "waterfall",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosWaterfallWaterfallSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosWaterfallWaterfallSharedData", sharedDataClassId: 0 })));
    const __sharedDataScope = _useSharedDataScope(__sharedData);
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
    return () => {
      "raw js";
      const _component_NavBar = __easycom_0;
      const _component_up_waterfall = __easycom_1;
      const n16 = _createSharedDataComponent(_sfc_main$1, "678edda1", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n15 = _createSharedDataComponent(_sfc_main$2, "eb665316", {
            "navigation-style": "custom",
            "navigation-bar-title-text": "up-waterfall 瀑布流"
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "81640e52", {
                title: "Waterfall 瀑布流",
                "auto-back": true
              });
              _setSharedData(__sharedData, 2, n0?.sharedData);
              const n11 = _createSharedDataComponentWithFallback(_component_up_waterfall, "81640036", {
                modelValue: () => {
                  return list.value;
                },
                "onUpdate:modelValue": () => {
                  return (_value) => {
                    return list.value = _value;
                  };
                },
                columns: 2
              }, {
                "column": _createSharedDataScopedSlot(_createSharedDataVSlot(__sharedDataScope, () => {
                  return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 2 });
                }), (_slotProps0, __sharedData_VSlot0) => {
                  _createSharedDataFor(_setSharedDataScoped(__sharedData_VSlot0, 0, _createSharedDataVFor(__sharedDataScope, () => {
                    return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
                  })), () => {
                    return _slotProps0.colList;
                  }, (__sharedData_VFor0, _for_item0, _for_key0) => {
                    _renderSharedDataEffect(() => {
                      _setSharedDataStyle(__sharedData_VFor0, 1, { width: "100%", height: _for_item0.value.getString("imgHeight") ?? "100px", borderRadius: "6px", backgroundColor: "#ffffff" });
                      _setSharedData(__sharedData_VFor0, 2, _toDisplayString(_for_item0.value.getString("title")));
                      _setSharedData(__sharedData_VFor0, 3, _toDisplayString(_for_item0.value.getString("desc")));
                      _setSharedData(__sharedData_VFor0, 4, _toDisplayString(_for_item0.value.getNumber("price")));
                    });
                    return null;
                  }, (__sharedData_VFor0, item, idx) => {
                    return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(idx));
                  }, 32);
                })
              });
              _setSharedData(__sharedData, 3, n11?.sharedData);
            })
          });
          _setSharedData(__sharedData, 1, n15.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n16.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const waterfall = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  waterfall as default
};
//# sourceMappingURL=waterfall.js.map
