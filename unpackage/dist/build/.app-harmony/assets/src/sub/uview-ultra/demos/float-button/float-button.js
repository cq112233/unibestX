import { _ as __easycom_0 } from "../../../../../uni_modules/uview-ultra/components/up-float-button/up-float-button.js";
import { _ as __easycom_0$1 } from "../../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import { A as AppKu } from "../../../../../App.ku.js";
import { L as LayoutComponent } from "../../../../layouts/navbar.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../../../uni_modules/e-chart/components/e-chart/uts/WebviewEchart.js";
import "../../../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../../utils/systemInfo.js";
import "../../../../tabbar/config.js";
import "../../../../tabbar/types.js";
import "../../../../tabbar/index.js";
import "../../../../tabbar/helper/index.js";
import "../../../../tabbar/helper/store.js";
import "../../../../store/index.js";
import "../../../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../../../store/app.js";
import "../../../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../../../uni_modules/x-pinia-s/instans/defineStore.js";
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
import "../../../../utils/theme.js";
import "../../../../../theme.js";
import "../../../../store/token.js";
import "../../../../store/user.js";
import "../../../../tabbar/TabbarItem.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../../../utils/i18n.js";
import "../../../../tabbar/custom/index.js";
import "../../../../utils/toast.js";
import "../../../../components/NavBar/NavBar.js";
import "../../../../utils/pageScroll.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, setSharedData: _setSharedData, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubUviewUltraDemosFloatButtonFloatButton";
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __className,
  __filename: "src/sub/uview-ultra/demos/float-button/float-button.uvue",
  __name: "float-button",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosFloatButtonFloatButtonSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosFloatButtonFloatButtonSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    const basicClickCount = ref(0);
    const eventLog = ref("点击任意悬浮按钮，事件会打印在这里");
    const menuList = ref([
      new UTSJSONObject({ name: "star-fill", backgroundColor: "#ff9900", color: "#ffffff" }),
      new UTSJSONObject({ name: "chat-fill", backgroundColor: "#3c9cff", color: "#ffffff" }),
      new UTSJSONObject({ name: "share-fill", backgroundColor: "#19be6b", color: "#ffffff" })
    ]);
    function log(message) {
      eventLog.value = message;
    }
    function onBasicClick() {
      basicClickCount.value = basicClickCount.value + 1;
      log(`click => 基础按钮被点击，第 ${basicClickCount.value} 次`);
    }
    function onMenuClick() {
      log("click => 菜单按钮展开 / 收起");
    }
    function onCustomClick() {
      log("click => 自定义样式按钮被点击");
    }
    function onDragButtonClick() {
      log("click => 可拖动按钮被点击（拖动不会触发这一条）");
    }
    function onItemClick(item) {
      var _a, _b;
      const index = (_a = item.getNumber("index")) !== null && _a !== void 0 ? _a : 0;
      const name = (_b = item.getString("name")) !== null && _b !== void 0 ? _b : "";
      log(`item-click => index=${index} name=${name}`);
    }
    return () => {
      "raw js";
      const _component_up_float_button = __easycom_0;
      const _component_up_icon = __easycom_0$1;
      const n31 = _createSharedDataComponent(AppKu, "ed5cd6be", {
        layout: "navbar",
        "show-back": true,
        "hide-navbar": false,
        "enable-pull-down-refresh": false,
        "page-style": { "navigationBarTitleText": "up-float-button 悬浮按钮", "navigationStyle": "custom" }
      }, {
        "default": _withSharedDataVaporCtx(() => {
          const n30 = _createSharedDataComponent(LayoutComponent, "7b3eeffd", {
            "show-back": true,
            "hide-navbar": false,
            "enable-pull-down-refresh": false,
            "page-style": { "navigationBarTitleText": "up-float-button 悬浮按钮", "navigationStyle": "custom" }
          }, {
            "default": _withSharedDataVaporCtx(() => {
              _renderSharedDataEffect(() => {
                _setSharedData(__sharedData, 8, _toDisplayString(basicClickCount.value));
                _setSharedData(__sharedData, 9, _toDisplayString(eventLog.value));
              });
              const n23 = _createSharedDataComponentWithFallback(_component_up_float_button, "26c10f08", {
                top: "150px",
                right: "30px",
                onClick: () => {
                  return onBasicClick;
                }
              });
              _setSharedData(__sharedData, 2, n23?.sharedData);
              const n24 = _createSharedDataComponentWithFallback(_component_up_float_button, "26c106d6", {
                bottom: "190px",
                right: "30px",
                "is-menu": true,
                list: () => {
                  return menuList.value;
                },
                onClick: () => {
                  return onMenuClick;
                },
                onItemClick: () => {
                  return onItemClick;
                }
              });
              _setSharedData(__sharedData, 3, n24?.sharedData);
              const n26 = _createSharedDataComponentWithFallback(_component_up_float_button, "26c0f752", {
                bottom: "40px",
                right: "30px",
                "background-color": "#19be6b",
                color: "#ffffff",
                width: "60px",
                height: "60px",
                onClick: () => {
                  return onCustomClick;
                }
              }, {
                "default": _withSharedDataVaporCtx(() => {
                  const n25 = _createSharedDataComponentWithFallback(_component_up_icon, "26c04ae0", {
                    name: "edit-pen",
                    color: "#ffffff",
                    size: "26"
                  });
                  _setSharedData(__sharedData, 5, n25?.sharedData);
                })
              });
              _setSharedData(__sharedData, 4, n26?.sharedData);
              const n28 = _createSharedDataComponentWithFallback(_component_up_float_button, "26c03d1a", {
                top: "300px",
                right: "30px",
                "background-color": "#f59e0b",
                color: "#ffffff",
                draggable: true,
                onClick: () => {
                  return onDragButtonClick;
                }
              }, {
                "default": _withSharedDataVaporCtx(() => {
                  const n27 = _createSharedDataComponentWithFallback(_component_up_icon, "26c02e96", {
                    name: "pushpin",
                    color: "#ffffff",
                    size: "24"
                  });
                  _setSharedData(__sharedData, 7, n27?.sharedData);
                })
              });
              _setSharedData(__sharedData, 6, n28?.sharedData);
            })
          });
          _setSharedData(__sharedData, 1, n30.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n31.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const floatButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  floatButton as default
};
