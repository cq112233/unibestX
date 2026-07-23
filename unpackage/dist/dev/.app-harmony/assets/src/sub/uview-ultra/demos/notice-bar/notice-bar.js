import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
const { defineComponent, resolveDynamicComponent, openBlock, createBlock, withCtx, createVNode, createElementVNode } = globalThis.Vue
import { A as AppKu, r as resolveEasycom } from "../../../../../App.ku.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-notice-bar/up-notice-bar.js";
import { L as LayoutComponent } from "../../../../layouts/default.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
import "../../../../utils/systemInfo.js";
import "../../../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/props.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../../../uni_modules/uview-ultra/libs/mixin/mpMixin.js";
import "../../../../../uni_modules/uview-ultra/libs/mixin/mixin.js";
import "../../../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../../../uni_modules/uview-ultra/libs/function/index.js";
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
import "../../../../../uni_modules/uview-ultra/components/up-transition/props.js";
import "../../../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../../../uni_modules/uview-ultra/components/up-overlay/props.js";
import "../../../../../uni_modules/uview-ultra/components/up-overlay/overlay.js";
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
import "../../../../i18n/locales/zh_CN.js";
import "../../../../i18n/locales/en_US.js";
import "../../../../utils/toast.js";
import "../../../../../uni_modules/uview-ultra/components/up-column-notice/up-column-notice.js";
import "../../../../../uni_modules/uview-ultra/components/up-column-notice/columnNotice.js";
import "../../../../../uni_modules/uview-ultra/components/up-row-notice/up-row-notice.js";
import "../../../../../uni_modules/uview-ultra/components/up-row-notice/rowNotice.js";
import "../../../../../uni_modules/uview-ultra/components/up-notice-bar/props.js";
import "../../../../../uni_modules/uview-ultra/components/up-notice-bar/noticeBar.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "notice-bar",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const __returned__ = { get AppKu() {
      return AppKu;
    }, get LayoutComponent() {
      return LayoutComponent;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "bg-__f8fafc_": { "": { "backgroundImage": "none", "backgroundColor": "#f8fafc" } }, "h-10px": { "": { "height": 10 } }, "mt-12px": { "": { "marginTop": 12 } }, "p-16px": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16 } }, "pb-30px": { "": { "paddingBottom": 30 } } };
const _style_1 = { "demo-block": { "": { "marginBottom": 12, "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12, "backgroundColor": "#ffffff", "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "demo-label": { "": { "fontSize": 14, "fontWeight": "bold", "color": "#606266", "marginBottom": 10, "paddingLeft": 4, "borderLeftWidth": 3, "borderLeftStyle": "solid", "borderLeftColor": "#2979ff" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavBar = resolveEasycom(resolveDynamicComponent("NavBar"), __easycom_0);
  const _component_up_notice_bar = resolveEasycom(resolveDynamicComponent("up-notice-bar"), __easycom_1);
  return openBlock(), createBlock($setup["AppKu"], null, {
    default: withCtx(() => [
      createVNode($setup["LayoutComponent"], {
        "navigation-style": "custom",
        "navigation-bar-title-text": "up-notice-bar 通知"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "page-container bg-__f8fafc_ min-h-screen pb-30px" }, [
            createVNode(_component_NavBar, {
              title: "up-notice-bar 滚动通知",
              "auto-back": true,
              "safe-area-inset-top": true,
              "bg-color": "#ffffff"
            }),
            createElementVNode("view", { class: "p-16px" }, [
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, "基础用法"),
                createVNode(_component_up_notice_bar, {
                  text: "uview-ultra 是一款专为 uni-app X 设计的高品质 UI 组件库",
                  mode: "link"
                })
              ]),
              createElementVNode("view", { class: "demo-block mt-12px" }, [
                createElementVNode("text", { class: "demo-label" }, "不同主题"),
                createVNode(_component_up_notice_bar, {
                  text: "通知：系统将于今晚 24:00 进行维护更新。",
                  type: "warning"
                }),
                createElementVNode("view", { class: "h-10px" }),
                createVNode(_component_up_notice_bar, {
                  text: "成功：数据已经成功备份到云端。",
                  type: "success"
                }),
                createElementVNode("view", { class: "h-10px" }),
                createVNode(_component_up_notice_bar, {
                  text: "错误：网络连接失败，请检查设置。",
                  type: "error"
                })
              ]),
              createElementVNode("view", { class: "demo-block mt-12px" }, [
                createElementVNode("text", { class: "demo-label" }, "竖向步进滚动"),
                createVNode(_component_up_notice_bar, {
                  text: ["第一条重要通知", "第二条重要通知", "第三条重要通知"],
                  direction: "column"
                })
              ])
            ])
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
const noticeBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0, _style_1]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/sub/uview-ultra/demos/notice-bar/notice-bar.uvue"]]);
export {
  noticeBar as default
};
//# sourceMappingURL=notice-bar.js.map
