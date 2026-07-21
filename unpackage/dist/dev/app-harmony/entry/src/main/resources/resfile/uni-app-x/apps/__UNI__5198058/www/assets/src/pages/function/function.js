const { defineComponent, onBackPress, openBlock, createBlock, withCtx, createVNode, createElementVNode, createCommentVNode } = globalThis.Vue
import { A as AppKu } from "../../../App.ku.js";
import { L as LayoutComponent } from "../../layouts/default.js";
import { S as SystemInfoCard } from "./components/SystemInfoCard.js";
import { H as HapticsCard } from "./components/HapticsCard.js";
import { M as MediaCard } from "./components/MediaCard.js";
import { h as handleBackPressExit } from "../../utils/backPress.js";
import { _ as _export_sfc } from "../../../plugin-vue-export-helper.js";
import "../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/props.js";
import "../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../uni_modules/uview-ultra/libs/mixin/mpMixin.js";
import "../../../uni_modules/uview-ultra/libs/mixin/mixin.js";
import "../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../uni_modules/uview-ultra/libs/function/index.js";
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
import "../../../uni_modules/uview-ultra/components/up-transition/props.js";
import "../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../uni_modules/uview-ultra/components/up-overlay/props.js";
import "../../../uni_modules/uview-ultra/components/up-overlay/overlay.js";
import "../../../uni_modules/uview-ultra/libs/config/color.js";
import "../../tabbar/index.js";
import "../../tabbar/store.js";
import "../../tabbar/types.js";
import "../../tabbar/config.js";
import "../../tabbar/TabbarItem.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
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
import "../../i18n/index.js";
import "../../../uni_modules/lime-i18n/common/index.js";
import "../../../uni_modules/lime-i18n/common/composer-class.js";
import "../../../uni_modules/lime-i18n/common/format.js";
import "../../../uni_modules/lime-i18n/common/util.js";
import "../../../uni_modules/lime-i18n/common/errors.js";
import "../../../uni_modules/lime-i18n/common/warnings.js";
import "../../../uni_modules/lime-i18n/common/types.js";
import "../../i18n/locales/zh_CN.js";
import "../../i18n/locales/en_US.js";
import "../../utils/toast.js";
import "../../../uni_modules/uview-ultra/components/up-button/up-button.js";
import "../../../uni_modules/uview-ultra/components/up-button/button.js";
import "../../../uni_modules/uview-ultra/libs/function/throttle.js";
import "../basic/components/Card.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
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
    }, get LayoutComponent() {
      return LayoutComponent;
    }, get SystemInfoCard() {
      return SystemInfoCard;
    }, get HapticsCard() {
      return HapticsCard;
    }, get MediaCard() {
      return MediaCard;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "bg-__f7fafc_": { "": { "backgroundImage": "none", "backgroundColor": "#f7fafc" } }, "flex-1": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "font-bold": { "": { "fontWeight": 700 } }, "mt-4px": { "": { "marginTop": 4 } }, "pb-10px": { "": { "paddingBottom": 10 } }, "pt-20px": { "": { "paddingTop": 20 } }, "px-16px": { "": { "paddingLeft": 16, "paddingRight": 16 } }, "text-__1a202c_": { "": { "color": "#1a202c" } }, "text-__718096_": { "": { "color": "#718096" } }, "text-13px": { "": { "fontSize": 13 } }, "text-20px": { "": { "fontSize": 20 } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["AppKu"], null, {
    default: withCtx(() => [
      createVNode($setup["LayoutComponent"], { "navigation-bar-title-text": "功能" }, {
        default: withCtx(() => [
          createElementVNode("scroll-view", { class: "flex-1 bg-__f7fafc_" }, [
            createCommentVNode(" 标题头 "),
            createElementVNode("view", { class: "pt-20px px-16px pb-10px" }, [
              createElementVNode("text", { class: "text-20px font-bold text-__1a202c_" }, "设备系统信息"),
              createElementVNode("text", { class: "text-13px text-__718096_ mt-4px" }, "演示 iOS/Android 原生设备 API 调用与状态读取")
            ]),
            createCommentVNode(" 系统信息卡片 "),
            createVNode($setup["SystemInfoCard"]),
            createCommentVNode(" 触感与工具卡片 "),
            createVNode($setup["HapticsCard"]),
            createCommentVNode(" 相机与多媒体卡片 "),
            createVNode($setup["MediaCard"])
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
const _function = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/pages/function/function.uvue"]]);
export {
  _function as default
};
//# sourceMappingURL=function.js.map
