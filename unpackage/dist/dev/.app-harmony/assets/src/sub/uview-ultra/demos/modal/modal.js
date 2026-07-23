import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
const { defineComponent, ref, resolveDynamicComponent, openBlock, createBlock, withCtx, createVNode, createElementVNode } = globalThis.Vue
import { A as AppKu, r as resolveEasycom } from "../../../../../App.ku.js";
import { _ as __easycom_2 } from "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
import { _ as __easycom_2$1 } from "../../../../../uni_modules/uview-ultra/components/up-modal/up-modal.js";
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
import "../../../../../uni_modules/uview-ultra/components/up-line/up-line.js";
import "../../../../../uni_modules/uview-ultra/components/up-line/props.js";
import "../../../../../uni_modules/uview-ultra/components/up-line/line.js";
import "../../../../../uni_modules/uview-ultra/components/up-popup/up-popup.js";
import "../../../../../uni_modules/uview-ultra/components/up-status-bar/up-status-bar.js";
import "../../../../../uni_modules/uview-ultra/components/up-status-bar/props.js";
import "../../../../../uni_modules/uview-ultra/components/up-status-bar/statusBar.js";
import "../../../../../uni_modules/uview-ultra/components/up-safe-bottom/up-safe-bottom.js";
import "../../../../../uni_modules/uview-ultra/components/up-safe-bottom/props.js";
import "../../../../../uni_modules/uview-ultra/components/up-popup/props.js";
import "../../../../../uni_modules/uview-ultra/components/up-popup/popup.js";
import "../../../../../uni_modules/uview-ultra/components/up-modal/props.js";
import "../../../../../uni_modules/uview-ultra/components/up-modal/modal.js";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "modal",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const modalShow = ref(false);
    const modalTitle = ref("");
    const modalContent = ref("");
    const modalShowCancel = ref(false);
    function showModal() {
      modalTitle.value = "提示";
      modalContent.value = "这是一个模态弹窗，用于提示重要信息。";
      modalShowCancel.value = false;
      modalShow.value = true;
    }
    function showConfirmModal() {
      modalTitle.value = "确认操作";
      modalContent.value = "确定要执行此操作吗？此操作不可撤销。";
      modalShowCancel.value = true;
      modalShow.value = true;
    }
    function showNoTitleModal() {
      modalTitle.value = "";
      modalContent.value = "这是一个没有标题的弹窗，显得更加简洁。";
      modalShowCancel.value = false;
      modalShow.value = true;
    }
    function showLongModal() {
      modalTitle.value = "用户协议";
      modalContent.value = "1. 这是一个很长很长很长很长很长很长很长很长的内容\n2. 这是一个很长很长很长很长很长很长很长很长的内容";
      modalShowCancel.value = false;
      modalShow.value = true;
    }
    function onModalConfirm() {
      modalShow.value = false;
      uni.showToast({ title: "操作成功", icon: "success" });
    }
    function onModalClose() {
      modalShow.value = false;
    }
    const __returned__ = { modalShow, modalTitle, modalContent, modalShowCancel, showModal, showConfirmModal, showNoTitleModal, showLongModal, onModalConfirm, onModalClose, get AppKu() {
      return AppKu;
    }, get LayoutComponent() {
      return LayoutComponent;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "bg-__f8fafc_": { "": { "backgroundImage": "none", "backgroundColor": "#f8fafc" } }, "flex-row": { "": { "flexDirection": "row" } }, "items-center": { "": { "alignItems": "center" } }, "mt-12px": { "": { "marginTop": 12 } }, "p-16px": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16 } }, "pb-30px": { "": { "paddingBottom": 30 } }, "w-10px": { "": { "width": 10 } } };
const _style_1 = { "demo-block": { "": { "marginBottom": 12, "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12, "backgroundColor": "#ffffff", "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "demo-label": { "": { "fontSize": 14, "fontWeight": "bold", "color": "#606266", "marginBottom": 10, "paddingLeft": 4, "borderLeftWidth": 3, "borderLeftStyle": "solid", "borderLeftColor": "#2979ff" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavBar = resolveEasycom(resolveDynamicComponent("NavBar"), __easycom_0);
  const _component_up_button = resolveEasycom(resolveDynamicComponent("up-button"), __easycom_2);
  const _component_up_modal = resolveEasycom(resolveDynamicComponent("up-modal"), __easycom_2$1);
  return openBlock(), createBlock($setup["AppKu"], null, {
    default: withCtx(() => [
      createVNode($setup["LayoutComponent"], {
        "navigation-style": "custom",
        "navigation-bar-title-text": "up-modal 模态框"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "page-container bg-__f8fafc_ min-h-screen pb-30px" }, [
            createVNode(_component_NavBar, {
              title: "up-modal 模态框",
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
                    text: "弹窗提示",
                    size: "mini",
                    onClick: $setup.showModal
                  }),
                  createElementVNode("view", { class: "w-10px" }),
                  createVNode(_component_up_button, {
                    type: "warning",
                    text: "确认弹窗",
                    size: "mini",
                    onClick: $setup.showConfirmModal
                  })
                ])
              ]),
              createElementVNode("view", { class: "demo-block mt-12px" }, [
                createElementVNode("text", { class: "demo-label" }, "无标题弹窗"),
                createElementVNode("view", { class: "flex-row items-center" }, [
                  createVNode(_component_up_button, {
                    type: "success",
                    text: "无标题",
                    size: "mini",
                    onClick: $setup.showNoTitleModal
                  })
                ])
              ]),
              createElementVNode("view", { class: "demo-block mt-12px" }, [
                createElementVNode("text", { class: "demo-label" }, "长内容弹窗"),
                createElementVNode("view", { class: "flex-row items-center" }, [
                  createVNode(_component_up_button, {
                    type: "error",
                    text: "长内容",
                    size: "mini",
                    onClick: $setup.showLongModal
                  })
                ])
              ])
            ]),
            createVNode(_component_up_modal, {
              show: $setup.modalShow,
              title: $setup.modalTitle,
              content: $setup.modalContent,
              "show-confirm-button": true,
              "show-cancel-button": $setup.modalShowCancel,
              onConfirm: $setup.onModalConfirm,
              onClose: $setup.onModalClose
            }, null, 8, ["show", "title", "content", "show-cancel-button"])
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
const modal = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0, _style_1]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/sub/uview-ultra/demos/modal/modal.uvue"]]);
export {
  modal as default
};
//# sourceMappingURL=modal.js.map
