import { _ as __easycom_1 } from "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
import { C as Card } from "./Card.js";
import "../../../store/index.js";
import { $ as $t, s as setTabbarItem } from "../../../utils/i18n.js";
import { t } from "../../../../uni_modules/uview-ultra/libs/i18n/index.js";
import { u as useAppStore } from "../../../store/app.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedData: _setSharedData, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataIf: _createSharedDataIf, setSharedDataEvent: _setSharedDataEvent, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcPagesBasicComponentsLangSwitchCard";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "38f6fa85",
  __className,
  __filename: "src/pages/basic/components/LangSwitchCard.uvue",
  __name: "LangSwitchCard",
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsLangSwitchCardSharedData", sharedDataClassId: 0 })));
    const appStore = useAppStore();
    const langTitle = computed(() => {
      return $t("basic.langTitle");
    });
    const langPreview = computed(() => {
      return $t("basic.langPreview");
    });
    const welcomeText = computed(() => {
      return $t("message.welcome");
    });
    const helloText = computed(() => {
      return $t("message.hello", new UTSJSONObject({ msg: "hi" }));
    });
    const uviewPreview = computed(() => {
      return $t("basic.uviewPreview");
    });
    const currentLocale = computed(() => {
      return appStore.state.locale;
    });
    const isZhCN = computed(() => {
      return currentLocale.value == "zh-CN";
    });
    const isEnUS = computed(() => {
      return currentLocale.value == "en-US";
    });
    const uViewChooseDates = computed(() => {
      currentLocale.value;
      return t("up.calendar.chooseDates", new UTSJSONObject({}));
    });
    const uViewConfirm = computed(() => {
      currentLocale.value;
      return t("up.common.confirm", new UTSJSONObject({}));
    });
    const uViewStart = computed(() => {
      currentLocale.value;
      return t("up.common.start", new UTSJSONObject({}));
    });
    const uViewEnd = computed(() => {
      currentLocale.value;
      return t("up.common.end", new UTSJSONObject({}));
    });
    function switchLanguage(lang) {
      appStore.setLocale(lang);
      setTabbarItem();
      uni.showToast({
        title: $t("message.switch_success"),
        icon: "none",
        duration: 1500
      });
    }
    return () => {
      "raw js";
      const _component_uni_icons = __easycom_1;
      const n24 = _createSharedDataComponent(
        Card,
        "2b814c75",
        { title: () => {
          return langTitle.value;
        } },
        {
          "default": _withSharedDataVaporCtx(() => {
            _renderSharedDataEffect(() => {
              _setSharedData(__sharedData, 7, _toDisplayString(langPreview.value));
              _setSharedData(__sharedData, 8, _toDisplayString(welcomeText.value));
              _setSharedData(__sharedData, 9, _toDisplayString(helloText.value));
              _setSharedData(__sharedData, 10, _toDisplayString(uviewPreview.value));
              _setSharedData(__sharedData, 11, _toDisplayString(uViewChooseDates.value));
              _setSharedData(__sharedData, 12, _toDisplayString(uViewConfirm.value));
              _setSharedData(__sharedData, 13, _toDisplayString(uViewStart.value));
              _setSharedData(__sharedData, 14, _toDisplayString(uViewEnd.value));
            });
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 1, _toSharedDataBoolean(isZhCN.value));
            }, () => {
              const n14 = _createSharedDataComponentWithFallback(_component_uni_icons, "88bf6f74", {
                type: "checkmarkempty",
                size: "20",
                style: "color: #3b82f6;"
              });
              _setSharedData(__sharedData, 2, n14?.sharedData);
            });
            _setSharedDataEvent(__sharedData, 5, () => {
              return switchLanguage("zh-CN");
            });
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 3, _toSharedDataBoolean(isEnUS.value));
            }, () => {
              const n21 = _createSharedDataComponentWithFallback(_component_uni_icons, "88bf5100", {
                type: "checkmarkempty",
                size: "20",
                style: "color: #3b82f6;"
              });
              _setSharedData(__sharedData, 4, n21?.sharedData);
            });
            _setSharedDataEvent(__sharedData, 6, () => {
              return switchLanguage("en-US");
            });
          })
        },
        1
        /* SINGLE_ROOT */
      );
      _setSharedData(__sharedData, 0, n24.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const LangSwitchCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  LangSwitchCard as L
};
//# sourceMappingURL=LangSwitchCard.js.map
