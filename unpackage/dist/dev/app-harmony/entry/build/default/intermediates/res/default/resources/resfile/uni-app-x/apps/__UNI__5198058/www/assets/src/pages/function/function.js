import { A as AppKu } from "../../../App.ku.js";
import { E as EnvCard } from "./components/EnvCard.js";
import { S as SystemInfoCard } from "./components/SystemInfoCard.js";
import { H as HapticsCard } from "./components/HapticsCard.js";
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
import "../../utils/systemInfo.js";
import "../../store/index.js";
import "../../../uni_modules/x-pinia-s/instans/types.js";
import "../../../uni_modules/x-pinia-s/instans/subscriptions.js";
import "../../../uni_modules/x-pinia-s/instans/createPinia.js";
import "../../../uni_modules/x-pinia-s/instans/rootState.js";
import "../../../uni_modules/x-pinia-s/instans/persist.js";
import "../../store/token.js";
import "../../../uni_modules/x-pinia-s/instans/storeBase.js";
import "../../../uni_modules/x-pinia-s/instans/defineStore.js";
import "../../store/user.js";
import "../../store/app.js";
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
const { defineComponent: _defineComponent } = globalThis.Vue;
const { onBackPress } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "function",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    onBackPress((options) => {
      if (options.from == "backbutton") {
        return handleBackPressExit();
      }
      return false;
    });
    const __returned__ = { get AppKu() {
      return AppKu;
    }, get EnvCard() {
      return EnvCard;
    }, get SystemInfoCard() {
      return SystemInfoCard;
    }, get HapticsCard() {
      return HapticsCard;
    }, get MediaCard() {
      return MediaCard;
    }, get LodashDemoCard() {
      return LodashDemoCard;
    }, get CryptoDemoCard() {
      return CryptoDemoCard;
    }, get TimeDemoCard() {
      return TimeDemoCard;
    }, get SignatureCard() {
      return SignatureCard;
    }, get EchartsDemoCard() {
      return EchartsDemoCard;
    }, get ZPagingDemoCard() {
      return ZPagingDemoCard;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "flex-col": { "": { "flexDirection": "column" } }, "font-bold": { "": { "fontWeight": 700 } }, "mt-4px": { "": { "marginTop": 4 } }, "pb-100px": { "": { "paddingBottom": 100 } }, "pb-10px": { "": { "paddingBottom": 10 } }, "pt-20px": { "": { "paddingTop": 20 } }, "px-16px": { "": { "paddingLeft": 16, "paddingRight": 16 } }, "text-__1a202c_": { "": { "color": "#1a202c" } }, "text-__718096_": { "": { "color": "#718096" } }, "text-13px": { "": { "fontSize": 13 } }, "text-20px": { "": { "fontSize": 20 } } };
const { createElementVNode: _createElementVNode, createVNode: _createVNode, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["AppKu"], null, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "flex-col pb-100px" }, [
        _createElementVNode("view", { class: "pt-20px px-16px pb-10px" }, [
          _createElementVNode("text", { class: "text-20px font-bold text-__1a202c_" }, "设备系统信息"),
          _createElementVNode("text", { class: "text-13px text-__718096_ mt-4px" }, "演示 iOS/Android 原生设备 API 调用与状态读取")
        ]),
        _createVNode($setup["EnvCard"]),
        _createVNode($setup["ZPagingDemoCard"]),
        _createVNode($setup["SystemInfoCard"]),
        _createVNode($setup["HapticsCard"]),
        _createVNode($setup["MediaCard"]),
        _createVNode($setup["LodashDemoCard"]),
        _createVNode($setup["CryptoDemoCard"]),
        _createVNode($setup["TimeDemoCard"]),
        _createVNode($setup["SignatureCard"]),
        _createVNode($setup["EchartsDemoCard"])
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
const _function = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/function/function.uvue"]]);
export {
  _function as default
};
//# sourceMappingURL=function.js.map
