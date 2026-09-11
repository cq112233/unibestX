import { A as AppKu } from "../../../App.ku.js";
import { L as LayoutComponent } from "../../layouts/navbar.js";
import { H as HapticsCard } from "./components/HapticsCard.js";
import { T as ToastCard } from "./components/ToastCard.js";
import { M as MediaCard } from "./components/MediaCard.js";
import { L as LodashDemoCard } from "./components/LodashDemoCard.js";
import { C as CryptoDemoCard } from "./components/CryptoDemoCard.js";
import { T as TimeDemoCard } from "./components/TimeDemoCard.js";
import { S as SignatureCard } from "./components/SignatureCard.js";
import { E as EchartsDemoCard } from "./components/EchartsDemoCard.js";
import { Z as ZPagingDemoCard } from "./components/ZPagingDemoCard.js";
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
import "../basic/components/Card.js";
import "../../../uni_modules/iRainna-lodash/index.js";
import "../../../uni_modules/unix-crypto/index.js";
import "../../../uni_modules/unix-crypto/rsa.js";
import "../../../uni_modules/lime-dayuts/common/index.js";
import "../../../uni_modules/lime-dayuts/utssdk/interface.js";
import "../../../uni_modules/lime-dayuts/common/constant.js";
import "../../../uni_modules/lime-dayuts/common/utils.js";
import "../../../uni_modules/lime-dayuts/common/use.js";
import "../../../uni_modules/lime-dayuts/common/locale/en/index.js";
import "../../../uni_modules/lime-dayuts/common/locale/zh-cn/index.js";
import "../../../uni_modules/lime-signature/components/l-signature/l-signature.js";
import "../../../uni_modules/lime-signature/components/l-signature/signature.js";
import "../../../uni_modules/lime-signature/index.js";
import "../../../uni_modules/e-chart/components/e-chart/e-chart.js";
import "../../../uni_modules/e-chart/components/e-chart/uts/util.js";
import "../../../uni_modules/z-paging-x/components/z-paging-x/z-paging-x.js";
import "../../../uni_modules/z-paging-x/components/z-paging-x-empty/z-paging-x-empty.js";
import "../../../uni_modules/z-paging-x/components/z-paging-x/static/index.js";
import "../../../uni_modules/z-paging-x/components/z-paging-x/components/z-paging-refresher.js";
import "../../../uni_modules/z-paging-x/components/z-paging-x/components/z-paging-loading.js";
import "../../../uni_modules/z-paging-x/components/z-paging-x/enums/index.js";
import "../../../uni_modules/z-paging-x/components/z-paging-x/utils/index.js";
import "../../../uni_modules/z-paging-x/components/z-paging-x/components/z-paging-load-more.js";
import "../../../uni_modules/z-paging-x/components/z-paging-x/config/index.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, createSharedDataComponent: _createSharedDataComponent, setSharedData: _setSharedData, withSharedDataVaporCtx: _withSharedDataVaporCtx } = globalThis.Vue;
const __className = "GenSrcPagesFunctionFunction";
const { onBackPress } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __className,
  __filename: "src/pages/function/function.uvue",
  __name: "function",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcPagesFunctionFunctionSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcPagesFunctionFunctionSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    onNavbarPullDownRefresh(() => {
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 1e3);
      }).then(() => {
        stopNavbarPullDownRefresh();
      });
    });
    onBackPress((options) => {
      if (options.from == "backbutton") {
        return handleBackPressExit();
      }
      return false;
    });
    return () => {
      "raw js";
      const n14 = _createSharedDataComponent(AppKu, "13021a83", {
        layout: "navbar",
        "show-back": false,
        "enable-pull-down-refresh": true,
        "page-style": { "navigationBarTitleText": "功能", "navigationStyle": "custom" }
      }, {
        "default": _withSharedDataVaporCtx(() => {
          const n13 = _createSharedDataComponent(LayoutComponent, "5ae584e4", {
            "show-back": false,
            "enable-pull-down-refresh": true,
            "page-style": { "navigationBarTitleText": "功能", "navigationStyle": "custom" }
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n3 = _createSharedDataComponent(ZPagingDemoCard, "5ae59801");
              _setSharedData(__sharedData, 2, n3.sharedData);
              const n4 = _createSharedDataComponent(HapticsCard, "5ae59b0e");
              _setSharedData(__sharedData, 3, n4.sharedData);
              const n5 = _createSharedDataComponent(ToastCard, "5ae59ba9");
              _setSharedData(__sharedData, 4, n5.sharedData);
              const n6 = _createSharedDataComponent(MediaCard, "5ae59ec6");
              _setSharedData(__sharedData, 5, n6.sharedData);
              const n7 = _createSharedDataComponent(LodashDemoCard, "5ae59f85");
              _setSharedData(__sharedData, 6, n7.sharedData);
              const n8 = _createSharedDataComponent(CryptoDemoCard, "5ae5a2c8");
              _setSharedData(__sharedData, 7, n8.sharedData);
              const n9 = _createSharedDataComponent(TimeDemoCard, "01cb0415");
              _setSharedData(__sharedData, 8, n9.sharedData);
              const n10 = _createSharedDataComponent(SignatureCard, "01cb04ce");
              _setSharedData(__sharedData, 9, n10.sharedData);
              const n11 = _createSharedDataComponent(EchartsDemoCard, "01cb07f5");
              _setSharedData(__sharedData, 10, n11.sharedData);
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
const _function = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  _function as default
};
