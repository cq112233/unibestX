import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
const { defineComponent, ref, resolveDynamicComponent, openBlock, createBlock, withCtx, createVNode, createElementVNode, toDisplayString } = globalThis.Vue
import { A as AppKu, r as resolveEasycom } from "../../../../../App.ku.js";
import { _ as __easycom_2 } from "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
import { _ as __easycom_2$1 } from "../../../../../uni_modules/uview-ultra/components/up-popup/up-popup.js";
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
import "../../../../../uni_modules/uview-ultra/components/up-button/button.js";
import "../../../../../uni_modules/uview-ultra/libs/function/throttle.js";
import "../../../../../uni_modules/uview-ultra/components/up-status-bar/up-status-bar.js";
import "../../../../../uni_modules/uview-ultra/components/up-status-bar/props.js";
import "../../../../../uni_modules/uview-ultra/components/up-status-bar/statusBar.js";
import "../../../../../uni_modules/uview-ultra/components/up-safe-bottom/up-safe-bottom.js";
import "../../../../../uni_modules/uview-ultra/components/up-safe-bottom/props.js";
import "../../../../../uni_modules/uview-ultra/components/up-popup/props.js";
import "../../../../../uni_modules/uview-ultra/components/up-popup/popup.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "popup",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const popupShow = ref(false);
    const popupMode = ref("bottom");
    function openPopup(mode) {
      popupMode.value = mode;
      popupShow.value = true;
    }
    function onPopupClose() {
      popupShow.value = false;
    }
    const __returned__ = { popupShow, popupMode, openPopup, onPopupClose, get AppKu() {
      return AppKu;
    }, get LayoutComponent() {
      return LayoutComponent;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "bg-__f8fafc_": { "": { "backgroundImage": "none", "backgroundColor": "#f8fafc" } }, "flex-row": { "": { "flexDirection": "row" } }, "items-center": { "": { "alignItems": "center" } }, "mt-12px": { "": { "marginTop": 12 } }, "p-16px": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16 } }, "p-30px": { "": { "paddingTop": 30, "paddingRight": 30, "paddingBottom": 30, "paddingLeft": 30 } }, "pb-30px": { "": { "paddingBottom": 30 } }, "text-__303133_": { "": { "color": "#303133" } }, "text-16px": { "": { "fontSize": 16 } }, "w-10px": { "": { "width": 10 } } };
const _style_1 = { "demo-block": { "": { "marginBottom": 12, "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12, "backgroundColor": "#ffffff", "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "demo-label": { "": { "fontSize": 14, "fontWeight": "bold", "color": "#606266", "marginBottom": 10, "paddingLeft": 4, "borderLeftWidth": 3, "borderLeftStyle": "solid", "borderLeftColor": "#2979ff" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavBar = resolveEasycom(resolveDynamicComponent("NavBar"), __easycom_0);
  const _component_up_button = resolveEasycom(resolveDynamicComponent("up-button"), __easycom_2);
  const _component_up_popup = resolveEasycom(resolveDynamicComponent("up-popup"), __easycom_2$1);
  return openBlock(), createBlock($setup["AppKu"], null, {
    default: withCtx(() => [
      createVNode($setup["LayoutComponent"], {
        "navigation-style": "custom",
        "navigation-bar-title-text": "up-popup 弹出层"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "page-container bg-__f8fafc_ min-h-screen pb-30px" }, [
            createVNode(_component_NavBar, {
              title: "up-popup 弹出层",
              "auto-back": true,
              "safe-area-inset-top": true,
              "bg-color": "#ffffff"
            }),
            createElementVNode("view", { class: "p-16px" }, [
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, "基础用法"),
                createElementVNode("view", { class: "flex-row items-center" }, [
                  createVNode(_component_up_button, {
                    type: "primary",
                    text: "顶部弹出",
                    size: "mini",
                    onClick: _cache[0] || (_cache[0] = ($event) => $setup.openPopup("top"))
                  }),
                  createElementVNode("view", { class: "w-10px" }),
                  createVNode(_component_up_button, {
                    type: "primary",
                    text: "底部弹出",
                    size: "mini",
                    onClick: _cache[1] || (_cache[1] = ($event) => $setup.openPopup("bottom"))
                  })
                ])
              ]),
              createElementVNode("view", { class: "demo-block mt-12px" }, [
                createElementVNode("text", { class: "demo-label" }, "更多方向弹出"),
                createElementVNode("view", { class: "flex-row items-center" }, [
                  createVNode(_component_up_button, {
                    type: "success",
                    text: "左侧弹出",
                    size: "mini",
                    onClick: _cache[2] || (_cache[2] = ($event) => $setup.openPopup("left"))
                  }),
                  createElementVNode("view", { class: "w-10px" }),
                  createVNode(_component_up_button, {
                    type: "success",
                    text: "右侧弹出",
                    size: "mini",
                    onClick: _cache[3] || (_cache[3] = ($event) => $setup.openPopup("right"))
                  }),
                  createElementVNode("view", { class: "w-10px" }),
                  createVNode(_component_up_button, {
                    type: "success",
                    text: "居中弹出",
                    size: "mini",
                    onClick: _cache[4] || (_cache[4] = ($event) => $setup.openPopup("center"))
                  })
                ])
              ])
            ]),
            createVNode(_component_up_popup, {
              show: $setup.popupShow,
              mode: $setup.popupMode,
              closeable: true,
              round: 10,
              onClose: $setup.onPopupClose
            }, {
              default: withCtx(() => [
                createElementVNode("view", { class: "p-30px items-center" }, [
                  createElementVNode(
                    "text",
                    { class: "text-16px text-__303133_" },
                    toDisplayString($setup.popupMode) + " 弹出层内容",
                    1
                    /* TEXT */
                  )
                ])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["show", "mode"])
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
const popup = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0, _style_1]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/sub/uview-ultra/demos/popup/popup.uvue"]]);
export {
  popup as default
};
//# sourceMappingURL=popup.js.map
