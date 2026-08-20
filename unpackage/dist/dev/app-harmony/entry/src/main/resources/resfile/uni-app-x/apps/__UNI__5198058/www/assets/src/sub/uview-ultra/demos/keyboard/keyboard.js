import { _ as __easycom_0 } from "../../../../components/NavBar/NavBar.js";
import { A as AppKu, r as resolveEasycom } from "../../../../../App.ku.js";
import { _ as __easycom_1 } from "../../../../../uni_modules/uview-ultra/components/up-keyboard/up-keyboard.js";
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
import "../../../../../uni_modules/uview-ultra/components/up-number-keyboard/up-number-keyboard.js";
import "../../../../../uni_modules/uview-ultra/components/up-car-keyboard/up-car-keyboard.js";
import "../../../../../uni_modules/uview-ultra/components/up-car-keyboard/carKeyboard.js";
import "../../../../../uni_modules/uview-ultra/components/up-popup/up-popup.js";
import "../../../../../uni_modules/uview-ultra/components/up-status-bar/up-status-bar.js";
import "../../../../../uni_modules/uview-ultra/components/up-status-bar/statusBar.js";
import "../../../../../uni_modules/uview-ultra/components/up-safe-bottom/up-safe-bottom.js";
import "../../../../../uni_modules/uview-ultra/components/up-popup/popup.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "keyboard",
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
    const showNumber = ref(false);
    const valNumber = ref("");
    function onNumberChange(val) {
      valNumber.value += val;
    }
    function onNumberBackspace() {
      if (valNumber.value.length > 0) {
        valNumber.value = valNumber.value.substring(0, valNumber.value.length - 1);
      }
    }
    const showCard = ref(false);
    const valCard = ref("");
    function onCardChange(val) {
      valCard.value += val;
    }
    function onCardBackspace() {
      if (valCard.value.length > 0) {
        valCard.value = valCard.value.substring(0, valCard.value.length - 1);
      }
    }
    const showCar = ref(false);
    const valCar = ref("");
    function onCarChange(val) {
      valCar.value += val;
    }
    function onCarBackspace() {
      if (valCar.value.length > 0) {
        valCar.value = valCar.value.substring(0, valCar.value.length - 1);
      }
    }
    const __returned__ = { showNumber, valNumber, onNumberChange, onNumberBackspace, showCard, valCard, onCardChange, onCardBackspace, showCar, valCar, onCarChange, onCarBackspace, get AppKu() {
      return AppKu;
    }, get LayoutComponent() {
      return LayoutComponent;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"demo-block":{"":{"marginBottom":12,"paddingTop":12,"paddingRight":12,"paddingBottom":12,"paddingLeft":12,"backgroundColor":"#ffffff","borderTopLeftRadius":8,"borderTopRightRadius":8,"borderBottomRightRadius":8,"borderBottomLeftRadius":8}},"demo-label":{"":{"fontSize":14,"fontWeight":"bold","color":"#606266","marginBottom":10,"paddingLeft":4,"borderLeftWidth":3,"borderLeftStyle":"solid","borderLeftColor":"#2979ff"}},"mock-input":{"":{"height":40,"borderTopLeftRadius":6,"borderTopRightRadius":6,"borderBottomRightRadius":6,"borderBottomLeftRadius":6,"backgroundColor":"#f3f4f6","display":"flex","flexDirection":"row","alignItems":"center","paddingTop":0,"paddingRight":12,"paddingBottom":0,"paddingLeft":12}},"mock-input-text":{"":{"fontSize":15,"color":"#333333"}},"mock-input-placeholder":{"":{"fontSize":15,"color":"#9ca3af"}},"flex":{"":{"display":"flex"}},"bg-_b_hf8fafc_B":{"":{"backgroundColor":"#f8fafc"}},"pb-_b30px_B":{"":{"paddingBottom":30}},"p-_b16px_B":{"":{"paddingTop":16,"paddingRight":16,"paddingBottom":16,"paddingLeft":16,"padding":16}},"min-h-screen":{"":{"minHeight":"100vh"}}};
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, normalizeClass: _normalizeClass, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavBar = resolveEasycom(__resolveDynamicComponent("NavBar"), __easycom_0);
  const _component_up_keyboard = resolveEasycom(__resolveDynamicComponent("up-keyboard"), __easycom_1);
  return _openBlock(), _createBlock($setup["AppKu"], null, {
    default: _withCtx(() => [
      _createVNode($setup["LayoutComponent"], {
        "navigation-style": "custom",
        "navigation-bar-title-text": "up-keyboard 键盘"
      }, {
        default: _withCtx(() => [
          _createElementVNode("view", { class: "page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B" }, [
            _createVNode(_component_NavBar, {
              title: "Keyboard 键盘",
              "auto-back": true
            }),
            _createElementVNode("view", { class: "p-_b16px_B" }, [
              _createElementVNode("view", { class: "demo-block" }, [
                _createElementVNode("text", { class: "demo-label" }, "数字键盘"),
                _createElementVNode("view", {
                  class: "mock-input",
                  onClick: _cache[0] || (_cache[0] = ($event) => $setup.showNumber = true)
                }, [
                  _createElementVNode(
                    "text",
                    {
                      class: _normalizeClass($setup.valNumber ? "mock-input-text" : "mock-input-placeholder")
                    },
                    _toDisplayString($setup.valNumber || "请点击输入数字"),
                    3
                    /* TEXT, CLASS */
                  )
                ]),
                _createVNode(_component_up_keyboard, {
                  mode: "number",
                  show: $setup.showNumber,
                  onChange: $setup.onNumberChange,
                  onBackspace: $setup.onNumberBackspace,
                  onClose: _cache[1] || (_cache[1] = ($event) => $setup.showNumber = false),
                  onCancel: _cache[2] || (_cache[2] = ($event) => $setup.showNumber = false),
                  onConfirm: _cache[3] || (_cache[3] = ($event) => $setup.showNumber = false)
                }, null, 8, ["show"])
              ]),
              _createElementVNode("view", { class: "demo-block" }, [
                _createElementVNode("text", { class: "demo-label" }, "身份证键盘"),
                _createElementVNode("view", {
                  class: "mock-input",
                  onClick: _cache[4] || (_cache[4] = ($event) => $setup.showCard = true)
                }, [
                  _createElementVNode(
                    "text",
                    {
                      class: _normalizeClass($setup.valCard ? "mock-input-text" : "mock-input-placeholder")
                    },
                    _toDisplayString($setup.valCard || "请点击输入身份证"),
                    3
                    /* TEXT, CLASS */
                  )
                ]),
                _createVNode(_component_up_keyboard, {
                  mode: "card",
                  show: $setup.showCard,
                  onChange: $setup.onCardChange,
                  onBackspace: $setup.onCardBackspace,
                  onClose: _cache[5] || (_cache[5] = ($event) => $setup.showCard = false),
                  onCancel: _cache[6] || (_cache[6] = ($event) => $setup.showCard = false),
                  onConfirm: _cache[7] || (_cache[7] = ($event) => $setup.showCard = false)
                }, null, 8, ["show"])
              ]),
              _createElementVNode("view", { class: "demo-block" }, [
                _createElementVNode("text", { class: "demo-label" }, "车牌号键盘"),
                _createElementVNode("view", {
                  class: "mock-input",
                  onClick: _cache[8] || (_cache[8] = ($event) => $setup.showCar = true)
                }, [
                  _createElementVNode(
                    "text",
                    {
                      class: _normalizeClass($setup.valCar ? "mock-input-text" : "mock-input-placeholder")
                    },
                    _toDisplayString($setup.valCar || "请点击输入车牌号"),
                    3
                    /* TEXT, CLASS */
                  )
                ]),
                _createVNode(_component_up_keyboard, {
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
const keyboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/src/sub/uview-ultra/demos/keyboard/keyboard.uvue"]]);
export {
  keyboard as default
};
//# sourceMappingURL=keyboard.js.map
