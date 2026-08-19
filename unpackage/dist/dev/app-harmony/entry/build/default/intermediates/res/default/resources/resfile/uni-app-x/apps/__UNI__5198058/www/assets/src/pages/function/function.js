import { A as AppKu } from "../../../App.ku.js";
import { E as EnvCard } from "./components/EnvCard.js";
import { S as SystemInfoCard } from "./components/SystemInfoCard.js";
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
import "../basic/components/Card.js";
import "../../utils/env.js";
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
  __hash: "889bc4da",
  __className,
  __filename: "src/pages/function/function.uvue",
  __name: "function",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcPagesFunctionFunctionSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcPagesFunctionFunctionSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    onBackPress((options) => {
      if (options.from == "backbutton") {
        return handleBackPressExit();
      }
      return false;
    });
    return () => {
      "raw js";
      const n15 = _createSharedDataComponent(AppKu, "13021a83", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n3 = _createSharedDataComponent(EnvCard, "5ae58bc7");
          _setSharedData(__sharedData, 1, n3.sharedData);
          const n4 = _createSharedDataComponent(ZPagingDemoCard, "5ae58c66");
          _setSharedData(__sharedData, 2, n4.sharedData);
          const n5 = _createSharedDataComponent(SystemInfoCard, "5ae58f87");
          _setSharedData(__sharedData, 3, n5.sharedData);
          const n6 = _createSharedDataComponent(HapticsCard, "5ae59008");
          _setSharedData(__sharedData, 4, n6.sharedData);
          const n7 = _createSharedDataComponent(ToastCard, "5ae590a3");
          _setSharedData(__sharedData, 5, n7.sharedData);
          const n8 = _createSharedDataComponent(MediaCard, "5ae593ab");
          _setSharedData(__sharedData, 6, n8.sharedData);
          const n9 = _createSharedDataComponent(LodashDemoCard, "5ae5970a");
          _setSharedData(__sharedData, 7, n9.sharedData);
          const n10 = _createSharedDataComponent(CryptoDemoCard, "5ae597c2");
          _setSharedData(__sharedData, 8, n10.sharedData);
          const n11 = _createSharedDataComponent(TimeDemoCard, "5ae59b0a");
          _setSharedData(__sharedData, 9, n11.sharedData);
          const n12 = _createSharedDataComponent(SignatureCard, "5ae59bc3");
          _setSharedData(__sharedData, 10, n12.sharedData);
          const n13 = _createSharedDataComponent(EchartsDemoCard, "5ae59eea");
          _setSharedData(__sharedData, 11, n13.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n15.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const _function = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  _function as default
};
//# sourceMappingURL=function.js.map
