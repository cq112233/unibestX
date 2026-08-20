import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-notice-bar/up-notice-bar.js";
import { A as AppKu } from "../../../../../App.ku.js";
import { L as LayoutComponent } from "../../../../layouts/default.js";
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
import "../../../../../uni_modules/uview-ultra/components/up-column-notice/up-column-notice.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/up-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icons.js";
import "../../../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../../../uni_modules/uview-ultra/libs/function/digit.js";
import "../../../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useUltraUI.js";
import "../../../../../uni_modules/uview-ultra/components/up-icon/icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-column-notice/columnNotice.js";
import "../../../../../uni_modules/uview-ultra/components/up-row-notice/up-row-notice.js";
import "../../../../../uni_modules/uview-ultra/components/up-row-notice/rowNotice.js";
import "../../../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../../../uni_modules/uview-ultra/libs/function/colorGradient.js";
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
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataPageId: _useSharedDataPageId, useSharedDataPageOptions: _useSharedDataPageOptions, useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataRenderer: _useSharedDataRenderer, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, withSharedDataPage: _withSharedDataPage, resolveComponent: _resolveComponent, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedData: _setSharedData, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcSubUviewUltraDemosNoticeBarNoticeBar";
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "03d5dc0b",
  __className,
  __filename: "src/sub/uview-ultra/demos/notice-bar/notice-bar.uvue",
  __name: "notice-bar",
  setup(__props) {
    const __sharedDataRenderer = _useSharedDataRenderer();
    const __sharedData = __sharedDataRenderer == "component" ? _withSharedDataComponent(new UniDynamicSharedDataComponent(_useSharedDataScope(), _useSharedDataComponentOptions({ bundleKey: "GenSrcSubUviewUltraDemosNoticeBarNoticeBarSharedData", sharedDataClassId: 0 }))) : _withSharedDataPage(new UniDynamicSharedDataPage(_useSharedDataPageId(), _useSharedDataPageOptions({ bundleKey: "GenSrcSubUviewUltraDemosNoticeBarNoticeBarSharedData", sharedDataClassId: 0 })));
    _useSharedDataScope(__sharedData);
    return () => {
      "raw js";
      const _component_NavBar = __easycom_0;
      const _component_up_notice_bar = __easycom_1;
      const n19 = _createSharedDataComponent(AppKu, "6aaf6fc1", null, {
        "default": _withSharedDataVaporCtx(() => {
          const n18 = _createSharedDataComponent(LayoutComponent, "2982ef56", {
            "navigation-style": "custom",
            "navigation-bar-title-text": "up-notice-bar 通知"
          }, {
            "default": _withSharedDataVaporCtx(() => {
              const n0 = _createSharedDataComponentWithFallback(_component_NavBar, "7c9282fe", {
                title: "up-notice-bar 滚动通知",
                "auto-back": true,
                "safe-area-inset-top": true,
                "bg-color": "#ffffff"
              });
              _setSharedData(__sharedData, 2, n0?.sharedData);
              const n2 = _createSharedDataComponentWithFallback(_component_up_notice_bar, "7c928d63", {
                text: "uview-ultra 是一款专为 uni-app X 设计的高品质 UI 组件库",
                mode: "link"
              });
              _setSharedData(__sharedData, 3, n2?.sharedData);
              const n5 = _createSharedDataComponentWithFallback(_component_up_notice_bar, "7c9294e9", {
                text: "通知：系统将于今晚 24:00 进行维护更新。",
                type: "warning"
              });
              _setSharedData(__sharedData, 4, n5?.sharedData);
              const n7 = _createSharedDataComponentWithFallback(_component_up_notice_bar, "7c929904", {
                text: "成功：数据已经成功备份到云端。",
                type: "success"
              });
              _setSharedData(__sharedData, 5, n7?.sharedData);
              const n9 = _createSharedDataComponentWithFallback(_component_up_notice_bar, "7c929d02", {
                text: "错误：网络连接失败，请检查设置。",
                type: "error"
              });
              _setSharedData(__sharedData, 6, n9?.sharedData);
              const n14 = _createSharedDataComponentWithFallback(_component_up_notice_bar, "15bdbe91", {
                text: ["第一条重要通知", "第二条重要通知", "第三条重要通知"],
                direction: "column"
              });
              _setSharedData(__sharedData, 7, n14?.sharedData);
            })
          });
          _setSharedData(__sharedData, 1, n18.sharedData);
        })
      });
      _setSharedData(__sharedData, 0, n19.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const noticeBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  noticeBar as default
};
//# sourceMappingURL=notice-bar.js.map
