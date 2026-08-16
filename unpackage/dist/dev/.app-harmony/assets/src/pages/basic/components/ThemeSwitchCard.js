import { _ as __easycom_1 } from "../../../../uni_modules/rice-ui/components/rice-button/rice-button.js";
import { _ as __easycom_1$1 } from "../../../../uni_modules/rice-ui/components/rice-tag/rice-tag.js";
import { _ as __easycom_2 } from "../../../../uni_modules/rice-ui/components/rice-switch/rice-switch.js";
import { C as Card } from "./Card.js";
import "../../../store/index.js";
import { $ as $t, t } from "../../../utils/i18n.js";
import { i as isDark, s as setTheme } from "../../../../uni_modules/rice-ui/libs/store/useConfig.js";
import "../../../../uni_modules/rice-ui/libs/use/useCountDown/index.js";
import "../../../../uni_modules/rice-ui/libs/use/useNamespace/index.js";
import "../../../../uni_modules/rice-ui/libs/use/usePopup/index.js";
import "../../../../uni_modules/rice-ui/libs/use/useRelation/useChildren.js";
import "../../../../uni_modules/rice-ui/libs/use/useRelation/useParent.js";
import "../../../../uni_modules/rice-ui/libs/use/useSafeArea/index.js";
import "../../../../uni_modules/rice-ui/libs/use/useTouch/index.js";
import "../../../../uni_modules/rice-ui/libs/plugin/coloruts/constant.js";
import "../../../../uni_modules/rice-ui/libs/plugin/coloruts/type.js";
import "../../../../uni_modules/rice-ui/libs/plugin/dateuts/type.js";
import "../../../../uni_modules/rice-ui/libs/plugin/dateuts/locale.js";
import "../../../../uni_modules/rice-ui/components/rice-action-sheet/type.js";
import "../../../../uni_modules/rice-ui/components/rice-action-sheet/api.js";
import "../../../../uni_modules/rice-ui/components/rice-button/type.js";
import "../../../../uni_modules/rice-ui/components/rice-calendar/type.js";
import "../../../../uni_modules/rice-ui/components/rice-cascader/type.js";
import "../../../../uni_modules/rice-ui/components/rice-dialog/type.js";
import "../../../../uni_modules/rice-ui/components/rice-dialog/api.js";
import "../../../../uni_modules/rice-ui/components/rice-datetime-picker/type.js";
import "../../../../uni_modules/rice-ui/components/rice-float-fab/type.js";
import "../../../../uni_modules/rice-ui/components/rice-loading/type.js";
import "../../../../uni_modules/rice-ui/components/rice-picker/type.js";
import "../../../../uni_modules/rice-ui/libs/utils/basic.js";
import "../../../../uni_modules/rice-ui/components/rice-swipe-actions-item/type.js";
import "../../../../uni_modules/rice-ui/components/rice-tabs/type.js";
import "../../../../uni_modules/rice-ui/components/rice-icon/font.js";
import "../../../../uni_modules/rice-ui/components/rice-uploader/type.js";
import "../../../../uni_modules/rice-ui/components/rice-form/index.js";
import "../../../../uni_modules/rice-ui/components/rice-radio/type.js";
import "../../../../uni_modules/rice-ui/components/rice-radio-group/index.js";
import "../../../../uni_modules/rice-ui/components/rice-checkbox/type.js";
import "../../../../uni_modules/rice-ui/components/rice-checkbox-group/index.js";
import "../../../../uni_modules/rice-ui/components/rice-code-input/type.js";
import "../../../../uni_modules/rice-ui/components/rice-qrcode/type.js";
import { u as useAppStore } from "../../../store/app.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedData: _setSharedData, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedDataEvent: _setSharedDataEvent, setSharedDataStyle: _setSharedDataStyle, setSharedDataClass: _setSharedDataClass, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataIf: _createSharedDataIf, createSharedDataFor: _createSharedDataFor, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcPagesBasicComponentsThemeSwitchCard";
const { computed, ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "d2a06250",
  __className,
  __filename: "src/pages/basic/components/ThemeSwitchCard.uvue",
  __name: "ThemeSwitchCard",
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsThemeSwitchCardSharedData", sharedDataClassId: 0 })));
    const appStore = useAppStore();
    const switchVal = ref(true);
    const cardTitle = computed(() => {
      return $t("basic.themeTitle");
    });
    const themePreviewText = computed(() => {
      return $t("basic.themePreview");
    });
    const themeButtonText = computed(() => {
      return $t("basic.themeButton");
    });
    const currentTheme = computed(() => {
      return appStore.state.theme;
    });
    const isDarkMode = computed(() => {
      return isDark.value;
    });
    const colorOptions = [
      "#37c2bc",
      "#0957DE",
      "#10b981",
      "#f43f5e",
      "#f97316"
    ];
    function toggleDarkMode() {
      if (isDarkMode.value) {
        setTheme("light");
      } else {
        setTheme("dark");
      }
    }
    function onSwitchChange(val) {
      switchVal.value = val;
    }
    function changeTheme(color) {
      appStore.setTheme(color);
      uni.showToast({
        title: t("basic.themeSuccess", null),
        icon: "none",
        duration: 1500
      });
    }
    return () => {
      "raw js";
      const _component_rice_button = __easycom_1;
      const _component_rice_tag = __easycom_1$1;
      const _component_rice_switch = __easycom_2;
      const n30 = _createSharedDataComponent(
        Card,
        "a1511108",
        { title: () => {
          return cardTitle.value;
        } },
        {
          "default": _withSharedDataVaporCtx(() => {
            _renderSharedDataEffect(() => {
              return _setSharedData(__sharedData, 6, _toDisplayString(themePreviewText.value));
            });
            const n2 = _createSharedDataComponentWithFallback(_component_rice_button, "37578f79", {
              type: "primary",
              size: "small",
              color: () => {
                return currentTheme.value;
              }
            }, {
              "default": _withSharedDataVaporCtx(() => {
              }, "string")
            });
            _setSharedData(__sharedData, 1, n2?.sharedData);
            const n4 = _createSharedDataComponentWithFallback(_component_rice_tag, "37579359", {
              type: "primary",
              color: () => {
                return currentTheme.value;
              }
            }, {
              "default": _withSharedDataVaporCtx(() => {
              }, "string")
            });
            _setSharedData(__sharedData, 2, n4?.sharedData);
            const n5 = _createSharedDataComponentWithFallback(_component_rice_switch, "375796fc", {
              "model-value": () => {
                return switchVal.value;
              },
              "active-color": () => {
                return currentTheme.value;
              },
              onChange: () => {
                return onSwitchChange;
              }
            });
            _setSharedData(__sharedData, 3, n5?.sharedData);
            _setSharedDataEvent(__sharedData, 5, toggleDarkMode);
            _renderSharedDataEffect(() => {
              const _isDarkMode = isDarkMode.value;
              _setSharedDataStyle(__sharedData, 7, { backgroundColor: currentTheme.value });
              _setSharedData(__sharedData, 8, _toDisplayString(themeButtonText.value));
              _setSharedData(__sharedData, 9, _toDisplayString(_isDarkMode ? "🌙" : "☀️"));
              _setSharedData(__sharedData, 10, _toDisplayString(_isDarkMode ? "当前：暗黑模式" : "当前：明亮模式"));
              _setSharedDataClass(__sharedData, 11, ["px-12px py-6px rounded-6px", _isDarkMode ? "bg-__3b82f6_" : "bg-__e2e8f0_"]);
              _setSharedDataClass(__sharedData, 12, ["text-12px font-bold", _isDarkMode ? "text-white" : "text-__475569_"]);
              _setSharedData(__sharedData, 13, _toDisplayString(_isDarkMode ? "切换为明亮" : "切换为暗黑"));
            });
            _createSharedDataFor(_setSharedDataScoped(__sharedData, 4, _createSharedDataVFor(__sharedDataScope, () => {
              return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
            })), () => {
              return colorOptions;
            }, (__sharedData_VFor0, _for_item0, _for_key0) => {
              _renderSharedDataEffect(() => {
                const _item = _for_item0.value;
                _setSharedDataStyle(__sharedData_VFor0, 3, {
                  backgroundColor: _item,
                  borderWidth: currentTheme.value == _item ? "3px" : "0px",
                  borderStyle: "solid",
                  borderColor: "#1e293b"
                });
              });
              _createSharedDataIf(() => {
                return _setSharedData(__sharedData_VFor0, 1, _toSharedDataBoolean(currentTheme.value == _for_item0.value));
              }, () => {
              });
              _setSharedDataEvent(__sharedData_VFor0, 2, () => {
                return changeTheme(_for_item0.value);
              });
              return null;
            }, (__sharedData_VFor0, item, index) => {
              return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
            }, 1);
          })
        },
        1
        /* SINGLE_ROOT */
      );
      _setSharedData(__sharedData, 0, n30.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const ThemeSwitchCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  ThemeSwitchCard as T
};
//# sourceMappingURL=ThemeSwitchCard.js.map
