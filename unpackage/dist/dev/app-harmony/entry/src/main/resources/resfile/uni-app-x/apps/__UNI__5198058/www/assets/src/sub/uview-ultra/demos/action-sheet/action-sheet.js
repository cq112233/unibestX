import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { A as AppKu, r as resolveEasycom } from "../../../../../App.ku.js";
import { _ as __easycom_2 } from "../../../../../uni_modules/uview-ultra/components/up-button/up-button.js";
import { _ as __easycom_2$1 } from "../../../../../uni_modules/uview-ultra/components/up-action-sheet/up-action-sheet.js";
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
import "../../../../../uni_modules/uview-ultra/components/up-toast/up-toast.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.js";
import "../../../../../uni_modules/uview-ultra/components/up-loading-icon/loadingIcon.js";
import "../../../../../uni_modules/uview-ultra/libs/config/config.js";
import "../../../../../uni_modules/uview-ultra/libs/function/index.js";
import "../../../../../uni_modules/uview-ultra/libs/function/test.js";
import "../../../../../uni_modules/uview-ultra/libs/function/digit.js";
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
import "../../../../../uni_modules/uview-ultra/components/up-transition/transition.js";
import "../../../../../uni_modules/uview-ultra/libs/config/color.js";
import "../../../../tabbar/index.js";
import "../../../../tabbar/TabbarItem.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import "../../../../../uni_modules/uni-icons/components/uni-icons/uniicons_file.js";
import "../../../../utils/i18n.js";
import "../../../../utils/toast.js";
import "../../../../../uni_modules/uview-ultra/libs/function/throttle.js";
import "../../../../../uni_modules/uview-ultra/components/up-line/up-line.js";
import "../../../../../uni_modules/uview-ultra/components/up-line/line.js";
import "../../../../../uni_modules/uview-ultra/components/up-popup/up-popup.js";
import "../../../../../uni_modules/uview-ultra/components/up-status-bar/up-status-bar.js";
import "../../../../../uni_modules/uview-ultra/components/up-status-bar/statusBar.js";
import "../../../../../uni_modules/uview-ultra/components/up-safe-bottom/up-safe-bottom.js";
import "../../../../../uni_modules/uview-ultra/components/up-popup/popup.js";
import "../../../../../uni_modules/uview-ultra/libs/composable/useButton.js";
import "../../../../../uni_modules/uview-ultra/components/up-action-sheet/types.js";
import "../../../../../uni_modules/uview-ultra/components/up-action-sheet/actionSheet.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "action-sheet",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const actionSheetShow = ref(false);
    const actionSheetShow2 = ref(false);
    const actionSheetShow3 = ref(false);
    const actionList = ref([
      new UTSJSONObject({ name: "拍照" }),
      new UTSJSONObject({ name: "从相册选择" })
    ]);
    const actionListComplex = ref([
      new UTSJSONObject({ name: "着色选项", color: "#ffaa33" }),
      new UTSJSONObject({ name: "禁用选项", disabled: true }),
      new UTSJSONObject({ name: "带副标题选项", subname: "我是副标题" })
    ]);
    function onActionSelect(e) {
      uni.__f__("log", "at src/sub/uview-ultra/demos/action-sheet/action-sheet.uvue:68", "action select", e);
      actionSheetShow.value = false;
      actionSheetShow2.value = false;
      actionSheetShow3.value = false;
    }
    const __returned__ = { actionSheetShow, actionSheetShow2, actionSheetShow3, actionList, actionListComplex, onActionSelect, get AppKu() {
      return AppKu;
    }, get LayoutComponent() {
      return LayoutComponent;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"demo-block":{"":{"marginBottom":12,"paddingTop":12,"paddingRight":12,"paddingBottom":12,"paddingLeft":12,"backgroundColor":"#ffffff","borderTopLeftRadius":8,"borderTopRightRadius":8,"borderBottomRightRadius":8,"borderBottomLeftRadius":8}},"demo-label":{"":{"fontSize":14,"fontWeight":"bold","color":"#606266","marginBottom":10,"paddingLeft":4,"borderLeftWidth":3,"borderLeftStyle":"solid","borderLeftColor":"#2979ff"}},"bg-_b_hf8fafc_B":{"":{"backgroundColor":"#f8fafc"}},"pb-_b30px_B":{"":{"paddingBottom":30}},"p-_b16px_B":{"":{"paddingTop":16,"paddingRight":16,"paddingBottom":16,"paddingLeft":16,"padding":16}},"flex-row":{"":{"flexDirection":"row"}},"items-center":{"":{"alignItems":"center"}},"mt-_b12px_B":{"":{"marginTop":12}},"min-h-screen":{"":{"minHeight":"100vh"}}};
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavBar = resolveEasycom(__resolveDynamicComponent("NavBar"), __easycom_0);
  const _component_up_button = resolveEasycom(__resolveDynamicComponent("up-button"), __easycom_2);
  const _component_up_action_sheet = resolveEasycom(__resolveDynamicComponent("up-action-sheet"), __easycom_2$1);
  return _openBlock(), _createBlock($setup["AppKu"], null, {
    default: _withCtx(() => [
      _createVNode($setup["LayoutComponent"], {
        "navigation-style": "custom",
        "navigation-bar-title-text": "up-action-sheet 动作面板"
      }, {
        default: _withCtx(() => [
          _createElementVNode("view", { class: "page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B" }, [
            _createVNode(_component_NavBar, {
              title: "up-action-sheet 动作面板",
              "auto-back": true,
              "safe-area-inset-top": true,
              "bg-color": "#ffffff"
            }),
            _createElementVNode("view", { class: "p-_b16px_B" }, [
              _createElementVNode("view", { class: "demo-block" }, [
                _createElementVNode("text", { class: "demo-label" }, "基础用法"),
                _createElementVNode("view", { class: "flex-row items-center" }, [
                  _createVNode(_component_up_button, {
                    type: "primary",
                    text: "弹出面板",
                    size: "mini",
                    onClick: _cache[0] || (_cache[0] = ($event) => $setup.actionSheetShow = true)
                  })
                ])
              ]),
              _createElementVNode("view", { class: "demo-block mt-_b12px_B" }, [
                _createElementVNode("text", { class: "demo-label" }, "显示取消按钮"),
                _createElementVNode("view", { class: "flex-row items-center" }, [
                  _createVNode(_component_up_button, {
                    type: "success",
                    text: "带取消按钮",
                    size: "mini",
                    onClick: _cache[1] || (_cache[1] = ($event) => $setup.actionSheetShow2 = true)
                  })
                ])
              ]),
              _createElementVNode("view", { class: "demo-block mt-_b12px_B" }, [
                _createElementVNode("text", { class: "demo-label" }, "带描述信息与禁用项"),
                _createElementVNode("view", { class: "flex-row items-center" }, [
                  _createVNode(_component_up_button, {
                    type: "warning",
                    text: "复杂面板",
                    size: "mini",
                    onClick: _cache[2] || (_cache[2] = ($event) => $setup.actionSheetShow3 = true)
                  })
                ])
              ])
            ]),
            _createVNode(_component_up_action_sheet, {
              show: $setup.actionSheetShow,
              actions: $setup.actionList,
              title: "请选择操作",
              onClose: _cache[3] || (_cache[3] = ($event) => $setup.actionSheetShow = false),
              onSelect: $setup.onActionSelect
            }, null, 8, ["show", "actions"]),
            _createVNode(_component_up_action_sheet, {
              show: $setup.actionSheetShow2,
              actions: $setup.actionList,
              title: "请选择操作",
              "cancel-text": "取消",
              onClose: _cache[4] || (_cache[4] = ($event) => $setup.actionSheetShow2 = false),
              onSelect: $setup.onActionSelect
            }, null, 8, ["show", "actions"]),
            _createVNode(_component_up_action_sheet, {
              show: $setup.actionSheetShow3,
              actions: $setup.actionListComplex,
              title: "请选择操作",
              description: "这是一段描述信息",
              "cancel-text": "取消",
              onClose: _cache[5] || (_cache[5] = ($event) => $setup.actionSheetShow3 = false),
              onSelect: $setup.onActionSelect
            }, null, 8, ["show", "actions"])
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
const actionSheet = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/sub/uview-ultra/demos/action-sheet/action-sheet.uvue"]]);
export {
  actionSheet as default
};
//# sourceMappingURL=action-sheet.js.map
