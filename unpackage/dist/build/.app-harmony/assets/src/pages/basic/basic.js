import { A as AppKu } from "../../../App.ku.js";
import { L as LayoutComponent } from "../../layouts/navbar.js";
import { T as ToastDemoCard } from "./components/ToastDemoCard.js";
import { P as PropsDemoCard } from "./components/PropsDemoCard.js";
import { I as IconDemoCard } from "./components/IconDemoCard.js";
import { L as LangSwitchCard } from "./components/LangSwitchCard.js";
import { L as LayoutDemoCard } from "./components/LayoutDemoCard.js";
import { T as ThemeSwitchCard } from "./components/ThemeSwitchCard.js";
import { R as RouterDemoCard } from "./components/RouterDemoCard.js";
import { H as HttpDemoCard } from "./components/HttpDemoCard.js";
import { U as UViewUltraDemoCard } from "./components/UViewUltraDemoCard.js";
import { T as TailwindcssDemoCard } from "./components/TailwindcssDemoCard.js";
import { S as SystemInfoDemoCard } from "./components/SystemInfoDemoCard.js";
import { h as handleBackPressExit } from "../../utils/backPress.js";
import { o as onNavbarPullDownRefresh, s as stopNavbarPullDownRefresh } from "../../utils/refresh.js";
import { _ as _export_sfc } from "../../../plugin-vue-export-helper.js";
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
import "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../utils/i18n.js";
import "../../tabbar/custom/index.js";
import "../../utils/toast.js";
import "../../components/NavBar/NavBar.js";
import "../../utils/pageScroll.js";
import "./components/Card.js";
import "./components/ChildDemoBox.js";
import "../../../uni_modules/lime-icon/components/l-icon/l-icon.js";
import "../../../uni_modules/lime-shared/classNames/index.js";
import "../../../uni_modules/lime-shared/stringifyStyle/index.js";
import "../../../uni_modules/lime-shared/addUnit/index.js";
import "../../../uni_modules/lime-shared/isNumeric/index.js";
import "../../../uni_modules/lime-shared/isNumber/index.js";
import "../../../uni_modules/lime-shared/isString/index.js";
import "../../../uni_modules/lime-shared/isDef/index.js";
import "../../../uni_modules/lime-icon/index.js";
import "../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import "../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../api/foo.js";
import "../../http/request.js";
import "../../../uni_modules/lime-request/common/index.js";
import "../../../uni_modules/lime-request/utssdk/interface.js";
import "../../../uni_modules/lime-request/common/utils.js";
import "../../../uni_modules/lime-request/common/url-query.js";
import "../../../uni_modules/lime-request/utssdk/unierror.js";
import "../../utils/toLoginPage.js";
import "../../http/tools/enum.js";
import "../../utils/upload.js";
import "../../../@dcloudio/uni-cloud.js";
import "../../../pages.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, createSharedDataComponent: _createSharedDataComponent, setSharedData: _setSharedData, withSharedDataVaporCtx: _withSharedDataVaporCtx } = globalThis.Vue;
const __className = "GenSrcPagesBasicBasic";
const { onBackPress } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __className,
  __filename: "src/pages/basic/basic.uvue",
  __name: "basic",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicBasicSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcPagesBasicBasicSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    onNavbarPullDownRefresh(() => {
      setTimeout(() => {
        stopNavbarPullDownRefresh();
      }, 1e3);
    });
    onBackPress((options) => {
      if (options.from == "backbutton") {
        return handleBackPressExit();
      }
      return false;
    });
    return () => {
      "raw js";
      const n14 = _createSharedDataComponent(AppKu, "56ab5a5a", {
        layout: "navbar",
        "show-back": false,
        "enable-pull-down-refresh": true,
        "page-style": { "navigationBarTitleText": "基础", "navigationStyle": "custom" }
      }, {
        "default": _withSharedDataVaporCtx(() => {
          const n13 = _createSharedDataComponent(LayoutComponent, "5360e934", {
            "show-back": false,
            "enable-pull-down-refresh": true,
            "page-style": { "navigationBarTitleText": "基础", "navigationStyle": "custom" }
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n0 = _createSharedDataComponent(LayoutDemoCard, "5360f41a");
              _setSharedData(__sharedData, 2, n0.sharedData);
              const n1 = _createSharedDataComponent(UViewUltraDemoCard, "5360f4d3");
              _setSharedData(__sharedData, 3, n1.sharedData);
              const n2 = _createSharedDataComponent(TailwindcssDemoCard, "5360f837");
              _setSharedData(__sharedData, 4, n2.sharedData);
              const n3 = _createSharedDataComponent(ThemeSwitchCard, "5360fb7a");
              _setSharedData(__sharedData, 5, n3.sharedData);
              const n4 = _createSharedDataComponent(RouterDemoCard, "5360fc30");
              _setSharedData(__sharedData, 6, n4.sharedData);
              const n5 = _createSharedDataComponent(LangSwitchCard, "5360ff5a");
              _setSharedData(__sharedData, 7, n5.sharedData);
              const n6 = _createSharedDataComponent(IconDemoCard, "5360fff8");
              _setSharedData(__sharedData, 8, n6.sharedData);
              const n7 = _createSharedDataComponent(HttpDemoCard, "53610338");
              _setSharedData(__sharedData, 9, n7.sharedData);
              const n8 = _createSharedDataComponent(ToastDemoCard, "536103d9");
              _setSharedData(__sharedData, 10, n8.sharedData);
              const n9 = _createSharedDataComponent(PropsDemoCard, "5361071c");
              _setSharedData(__sharedData, 11, n9.sharedData);
              const n10 = _createSharedDataComponent(SystemInfoDemoCard, "536107b9");
              _setSharedData(__sharedData, 12, n10.sharedData);
            })
          });
          _setSharedData(__sharedData, 1, n13.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n14.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _style_1 = {};
const basic = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  basic as default
};
