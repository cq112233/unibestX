import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
const { defineComponent, ref, resolveDynamicComponent, openBlock, createBlock, withCtx, createVNode, createElementVNode, createCommentVNode, normalizeClass, toDisplayString } = globalThis.Vue
import { A as AppKu, r as resolveEasycom } from "../../../../../App.ku.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-keyboard/up-keyboard.js";
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
import "../../../../../uni_modules/uview-ultra/components/up-number-keyboard/up-number-keyboard.js";
import "../../../../../uni_modules/uview-ultra/components/up-number-keyboard/props.js";
import "../../../../../uni_modules/uview-ultra/components/up-number-keyboard/numberKeyboard.js";
import "../../../../../uni_modules/uview-ultra/components/up-car-keyboard/up-car-keyboard.js";
import "../../../../../uni_modules/uview-ultra/components/up-car-keyboard/carKeyboard.js";
import "../../../../../uni_modules/uview-ultra/components/up-popup/up-popup.js";
import "../../../../../uni_modules/uview-ultra/components/up-status-bar/up-status-bar.js";
import "../../../../../uni_modules/uview-ultra/components/up-status-bar/props.js";
import "../../../../../uni_modules/uview-ultra/components/up-status-bar/statusBar.js";
import "../../../../../uni_modules/uview-ultra/components/up-safe-bottom/up-safe-bottom.js";
import "../../../../../uni_modules/uview-ultra/components/up-safe-bottom/props.js";
import "../../../../../uni_modules/uview-ultra/components/up-popup/props.js";
import "../../../../../uni_modules/uview-ultra/components/up-popup/popup.js";
import "../../../../../uni_modules/uview-ultra/components/up-keyboard/props.js";
import "../../../../../uni_modules/uview-ultra/components/up-keyboard/keyboard.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "keyboard",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const showNumber = ref(false);
    const valNumber = ref("");
    const onNumberChange = (val) => {
      valNumber.value += val;
    };
    const onNumberBackspace = () => {
      if (valNumber.value.length > 0) {
        valNumber.value = valNumber.value.substring(0, valNumber.value.length - 1);
      }
    };
    const showCard = ref(false);
    const valCard = ref("");
    const onCardChange = (val) => {
      valCard.value += val;
    };
    const onCardBackspace = () => {
      if (valCard.value.length > 0) {
        valCard.value = valCard.value.substring(0, valCard.value.length - 1);
      }
    };
    const showCar = ref(false);
    const valCar = ref("");
    const onCarChange = (val) => {
      valCar.value += val;
    };
    const onCarBackspace = () => {
      if (valCar.value.length > 0) {
        valCar.value = valCar.value.substring(0, valCar.value.length - 1);
      }
    };
    const __returned__ = { showNumber, valNumber, onNumberChange, onNumberBackspace, showCard, valCard, onCardChange, onCardBackspace, showCar, valCar, onCarChange, onCarBackspace, get AppKu() {
      return AppKu;
    }, get LayoutComponent() {
      return LayoutComponent;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "bg-__f8fafc_": { "": { "backgroundImage": "none", "backgroundColor": "#f8fafc" } }, "p-16px": { "": { "paddingTop": 16, "paddingRight": 16, "paddingBottom": 16, "paddingLeft": 16 } }, "pb-30px": { "": { "paddingBottom": 30 } } };
const _style_1 = { "demo-block": { "": { "marginBottom": 12, "paddingTop": 12, "paddingRight": 12, "paddingBottom": 12, "paddingLeft": 12, "backgroundColor": "#ffffff", "borderTopLeftRadius": 8, "borderTopRightRadius": 8, "borderBottomRightRadius": 8, "borderBottomLeftRadius": 8 } }, "demo-label": { "": { "fontSize": 14, "fontWeight": "bold", "color": "#606266", "marginBottom": 10, "paddingLeft": 4, "borderLeftWidth": 3, "borderLeftStyle": "solid", "borderLeftColor": "#2979ff" } }, "mock-input": { "": { "height": 40, "borderTopLeftRadius": 6, "borderTopRightRadius": 6, "borderBottomRightRadius": 6, "borderBottomLeftRadius": 6, "backgroundColor": "#f3f4f6", "display": "flex", "flexDirection": "row", "alignItems": "center", "paddingTop": 0, "paddingRight": 12, "paddingBottom": 0, "paddingLeft": 12 } }, "mock-input-text": { "": { "fontSize": 15, "color": "#333333" } }, "mock-input-placeholder": { "": { "fontSize": 15, "color": "#9ca3af" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavBar = resolveEasycom(resolveDynamicComponent("NavBar"), __easycom_0);
  const _component_up_keyboard = resolveEasycom(resolveDynamicComponent("up-keyboard"), __easycom_1);
  return openBlock(), createBlock($setup["AppKu"], null, {
    default: withCtx(() => [
      createVNode($setup["LayoutComponent"], {
        "navigation-style": "custom",
        "navigation-bar-title-text": "up-keyboard 键盘"
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "page-container bg-__f8fafc_ min-h-screen pb-30px" }, [
            createVNode(_component_NavBar, {
              title: "Keyboard 键盘",
              "auto-back": true
            }),
            createElementVNode("view", { class: "p-16px" }, [
              createCommentVNode(" 1. 数字键盘 "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, "数字键盘"),
                createCommentVNode(" 模拟输入框，避免唤起系统自带键盘 "),
                createElementVNode("view", {
                  class: "mock-input",
                  onClick: _cache[0] || (_cache[0] = ($event) => $setup.showNumber = true)
                }, [
                  createElementVNode(
                    "text",
                    {
                      class: normalizeClass($setup.valNumber ? "mock-input-text" : "mock-input-placeholder")
                    },
                    toDisplayString($setup.valNumber || "请点击输入数字"),
                    3
                    /* TEXT, CLASS */
                  )
                ]),
                createVNode(_component_up_keyboard, {
                  mode: "number",
                  show: $setup.showNumber,
                  onChange: $setup.onNumberChange,
                  onBackspace: $setup.onNumberBackspace,
                  onClose: _cache[1] || (_cache[1] = ($event) => $setup.showNumber = false),
                  onCancel: _cache[2] || (_cache[2] = ($event) => $setup.showNumber = false),
                  onConfirm: _cache[3] || (_cache[3] = ($event) => $setup.showNumber = false)
                }, null, 8, ["show"])
              ]),
              createCommentVNode(" 2. 身份证键盘 "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, "身份证键盘"),
                createElementVNode("view", {
                  class: "mock-input",
                  onClick: _cache[4] || (_cache[4] = ($event) => $setup.showCard = true)
                }, [
                  createElementVNode(
                    "text",
                    {
                      class: normalizeClass($setup.valCard ? "mock-input-text" : "mock-input-placeholder")
                    },
                    toDisplayString($setup.valCard || "请点击输入身份证"),
                    3
                    /* TEXT, CLASS */
                  )
                ]),
                createVNode(_component_up_keyboard, {
                  mode: "card",
                  show: $setup.showCard,
                  onChange: $setup.onCardChange,
                  onBackspace: $setup.onCardBackspace,
                  onClose: _cache[5] || (_cache[5] = ($event) => $setup.showCard = false),
                  onCancel: _cache[6] || (_cache[6] = ($event) => $setup.showCard = false),
                  onConfirm: _cache[7] || (_cache[7] = ($event) => $setup.showCard = false)
                }, null, 8, ["show"])
              ]),
              createCommentVNode(" 3. 车牌号键盘 "),
              createElementVNode("view", { class: "demo-block" }, [
                createElementVNode("text", { class: "demo-label" }, "车牌号键盘"),
                createElementVNode("view", {
                  class: "mock-input",
                  onClick: _cache[8] || (_cache[8] = ($event) => $setup.showCar = true)
                }, [
                  createElementVNode(
                    "text",
                    {
                      class: normalizeClass($setup.valCar ? "mock-input-text" : "mock-input-placeholder")
                    },
                    toDisplayString($setup.valCar || "请点击输入车牌号"),
                    3
                    /* TEXT, CLASS */
                  )
                ]),
                createVNode(_component_up_keyboard, {
                  mode: "car",
                  show: $setup.showCar,
                  onChange: $setup.onCarChange,
                  onBackspace: $setup.onCarBackspace,
                  onClose: _cache[9] || (_cache[9] = ($event) => $setup.showCar = false),
                  onCancel: _cache[10] || (_cache[10] = ($event) => $setup.showCar = false),
                  onConfirm: _cache[11] || (_cache[11] = ($event) => $setup.showCar = false)
                }, null, 8, ["show"])
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
const keyboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0, _style_1]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/sub/uview-ultra/demos/keyboard/keyboard.uvue"]]);
export {
  keyboard as default
};
//# sourceMappingURL=keyboard.js.map
