import { A as AppKu } from "../../../App.ku.js";
import { T as ToastDemoCard } from "./components/ToastDemoCard.js";
import { P as PropsDemoCard } from "./components/PropsDemoCard.js";
import { I as IconDemoCard } from "./components/IconDemoCard.js";
import { L as LangSwitchCard } from "./components/LangSwitchCard.js";
import { T as ThemeSwitchCard } from "./components/ThemeSwitchCard.js";
import { R as RouterDemoCard } from "./components/RouterDemoCard.js";
import { H as HttpDemoCard } from "./components/HttpDemoCard.js";
import { U as UViewUltraDemoCard } from "./components/UViewUltraDemoCard.js";
import { S as SystemInfoDemoCard } from "./components/SystemInfoDemoCard.js";
import { u as updateSystemInfo } from "../../utils/systemInfo.js";
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
import "../../utils/toast.js";
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
import "../../api/foo.js";
import "../../http/request.js";
import "../../../uni_modules/lime-request/common/index.js";
import "../../../uni_modules/lime-request/utssdk/interface.js";
import "../../../uni_modules/lime-request/common/utils.js";
import "../../../uni_modules/lime-request/common/url-query.js";
import "../../../uni_modules/lime-request/utssdk/unierror.js";
import "../../utils/toLoginPage.js";
import "../../http/tools/enum.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { onBackPress, onResize } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "basic",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    onBackPress((options) => {
      if (options.from == "backbutton") {
        return handleBackPressExit();
      }
      return false;
    });
    onResize(() => {
      updateSystemInfo();
    });
    const __returned__ = { get AppKu() {
      return AppKu;
    }, get ToastDemoCard() {
      return ToastDemoCard;
    }, get PropsDemoCard() {
      return PropsDemoCard;
    }, get IconDemoCard() {
      return IconDemoCard;
    }, get LangSwitchCard() {
      return LangSwitchCard;
    }, get ThemeSwitchCard() {
      return ThemeSwitchCard;
    }, get RouterDemoCard() {
      return RouterDemoCard;
    }, get HttpDemoCard() {
      return HttpDemoCard;
    }, get UViewUltraDemoCard() {
      return UViewUltraDemoCard;
    }, get SystemInfoDemoCard() {
      return SystemInfoDemoCard;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "flex-col": { "": { "flexDirection": "column" } }, "pb-100px": { "": { "paddingBottom": 100 } } };
const { createVNode: _createVNode, createElementVNode: _createElementVNode, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["AppKu"], null, {
    default: _withCtx(() => [
      _createElementVNode("view", { class: "flex-col pb-100px" }, [
        _createElementVNode("view", { class: "flex-col" }, [
          _createVNode($setup["UViewUltraDemoCard"]),
          _createVNode($setup["ThemeSwitchCard"]),
          _createVNode($setup["RouterDemoCard"]),
          _createVNode($setup["LangSwitchCard"]),
          _createVNode($setup["IconDemoCard"]),
          _createVNode($setup["HttpDemoCard"]),
          _createVNode($setup["ToastDemoCard"]),
          _createVNode($setup["PropsDemoCard"]),
          _createVNode($setup["SystemInfoDemoCard"])
        ])
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
const basic = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/basic/basic.uvue"]]);
export {
  basic as default
};
//# sourceMappingURL=basic.js.map
