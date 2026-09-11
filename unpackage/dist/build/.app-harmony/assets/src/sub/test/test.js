import { _ as __easycom_0 } from "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import { A as AppKu } from "../../../App.ku.js";
import { L as LayoutComponent } from "../../layouts/navbar.js";
import { o as onNavbarPullDownRefresh, s as stopNavbarPullDownRefresh } from "../../utils/refresh.js";
import { _ as _export_sfc } from "../../../plugin-vue-export-helper.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../utils/systemInfo.js";
import "../../tabbar/config.js";
import "../../tabbar/types.js";
import "../../tabbar/index.js";
import "../../tabbar/helper/index.js";
import "../../tabbar/helper/store.js";
import "../../store/index.js";
import "../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../store/app.js";
import "../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../i18n/index.js";
import "../../../uni_modules/lime-i18n/common/index.js";
import "../../../uni_modules/lime-i18n/common/composer-class.js";
import "../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../uni_modules/lime-i18n/common/format.js";
import "../../../uni_modules/lime-i18n/common/util.js";
import "../../../uni_modules/lime-i18n/common/errors.js";
import "../../../uni_modules/lime-i18n/common/warnings.js";
import "../../../uni_modules/lime-i18n/common/types.js";
import "../../i18n/locales/zh-CN.js";
import "../../i18n/locales/en-US.js";
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
import "../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../utils/theme.js";
import "../../../theme.js";
import "../../store/token.js";
import "../../store/user.js";
import "../../tabbar/TabbarItem.js";
import "../../utils/i18n.js";
import "../../tabbar/custom/index.js";
import "../../utils/toast.js";
import "../../components/NavBar/NavBar.js";
import "../../utils/pageScroll.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, createSharedDataFor: _createSharedDataFor, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataIf: _createSharedDataIf, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubTestTest";
const { ref, computed } = globalThis.Vue;
const { onLoad } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __className,
  __filename: "src/sub/test/test.uvue",
  __name: "test",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubTestTestSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubTestTestSharedData", sharedDataClassId: 0 })));
    const __sharedDataScope = _useSharedDataScope(__sharedData);
    const optionKeys = ref([]);
    const queryOptions = ref(null);
    const countLabel = computed(() => {
      return optionKeys.value.length > 0 ? "已解析" : "待解析";
    });
    onLoad((options = null) => {
      uni.__f__("log", "at src/sub/test/test.uvue:97", "test page onLoad options:", options);
      if (options != null) {
        queryOptions.value = options;
        optionKeys.value = UTSJSONObject.keys(options);
      }
    });
    onNavbarPullDownRefresh(() => {
      setTimeout(() => {
        stopNavbarPullDownRefresh();
      }, 800);
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
    return () => {
      "raw js";
      const _component_uni_icons = __easycom_0;
      const n38 = _createSharedDataComponent(AppKu, "51fce8f3", {
        layout: "navbar",
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": true,
        "page-style": { "navigationBarTitleText": "URL 参数测试", "navigationStyle": "custom" }
      }, {
        "default": _withSharedDataVaporCtx(() => {
          const n37 = _createSharedDataComponent(LayoutComponent, "733310a6", {
            "show-back": true,
            "hide-navbar": false,
            "enable-pull-down-refresh": true,
            "page-style": { "navigationBarTitleText": "URL 参数测试", "navigationStyle": "custom" }
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n0 = _createSharedDataComponentWithFallback(_component_uni_icons, "7332dbdc", {
                type: "link",
                size: "22",
                color: "#3182ce"
              });
              _setSharedData(__sharedData, 2, n0?.sharedData);
              _renderSharedDataEffect(() => {
                _setSharedData(__sharedData, 6, _toDisplayString(optionKeys.value.length));
                _setSharedData(__sharedData, 7, _toDisplayString(countLabel.value));
              });
              _createSharedDataFor(_setSharedDataScoped(__sharedData, 3, _createSharedDataVFor(__sharedDataScope, () => {
                return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
              })), () => {
                return optionKeys.value;
              }, (__sharedData_VFor0, _for_item0) => {
                _renderSharedDataEffect(() => {
                  const _key = _for_item0.value;
                  _setSharedData(__sharedData_VFor0, 1, _toDisplayString(_key));
                  _setSharedData(__sharedData_VFor0, 2, _toDisplayString(getOptionValue(_key)));
                });
                return null;
              }, (__sharedData_VFor0, key) => {
                return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(key));
              });
              _createSharedDataIf(() => {
                return _setSharedData(__sharedData, 4, _toSharedDataBoolean(optionKeys.value.length == 0));
              }, () => {
                const n26 = _createSharedDataComponentWithFallback(_component_uni_icons, "066957fe", {
                  type: "info",
                  size: "28",
                  color: "#cbd5e1"
                });
                _setSharedData(__sharedData, 5, n26?.sharedData);
              });
            })
          });
          _setSharedData(__sharedData, 1, n37.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n38.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {"page":{"":{"-ThemeColor":"#37c2bc"}}};
const test = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  test as default
};
