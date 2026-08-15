import { C as Card } from "./Card.js";
import "../../../store/index.js";
import { $ as $t, t } from "../../../utils/i18n.js";
import { u as useAppStore } from "../../../store/app.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, unref: _unref, setSharedData: _setSharedData, toDisplayString: _toDisplayString, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataIf: _createSharedDataIf, setSharedDataEvent: _setSharedDataEvent, createSharedDataFor: _createSharedDataFor, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcPagesBasicComponentsThemeSwitchCard";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "2b47a93d",
  __className,
  __filename: "src/pages/basic/components/ThemeSwitchCard.uvue",
  __name: "ThemeSwitchCard",
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsThemeSwitchCardSharedData", sharedDataClassId: 0 })));
    const appStore = useAppStore();
    const currentTheme = computed(() => {
      return appStore.state.theme;
    });
    const colorOptions = [
      "#37c2bc",
      "#0957DE",
      "#10b981",
      "#f43f5e",
      "#f97316"
    ];
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
      const n11 = _createSharedDataComponent(
        Card,
        "a1511108",
        { title: () => {
          return _unref($t)("basic.themeTitle");
        } },
        {
          "default": () => {
            _renderSharedDataEffect(() => {
              const _$t = _unref($t);
              _setSharedData(__sharedData, 2, _toDisplayString(_$t("basic.themePreview")));
              _setSharedDataStyle(__sharedData, 3, { backgroundColor: _unref(currentTheme) });
              _setSharedData(__sharedData, 4, _toDisplayString(_$t("basic.themeButton")));
            });
            _createSharedDataFor(_setSharedDataScoped(__sharedData, 1, _createSharedDataVFor(__sharedDataScope, () => {
              return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
            })), () => {
              return colorOptions;
            }, (__sharedData_VFor0, _for_item0, _for_key0) => {
              _renderSharedDataEffect(() => {
                const _item = _for_item0.value;
                _setSharedDataStyle(__sharedData_VFor0, 3, {
                  backgroundColor: _item,
                  borderWidth: _unref(currentTheme) == _item ? "3px" : "0px",
                  borderStyle: "solid",
                  borderColor: "#1e293b"
                });
              });
              _createSharedDataIf(() => {
                return _setSharedData(__sharedData_VFor0, 1, _toSharedDataBoolean(_unref(currentTheme) == _for_item0.value));
              }, () => {
              });
              _setSharedDataEvent(__sharedData_VFor0, 2, () => {
                return changeTheme(_for_item0.value);
              });
              return null;
            }, (__sharedData_VFor0, item, index) => {
              return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
            }, 1);
          }
        },
        1
        /* SINGLE_ROOT */
      );
      _setSharedData(__sharedData, 0, n11.sharedData);
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
