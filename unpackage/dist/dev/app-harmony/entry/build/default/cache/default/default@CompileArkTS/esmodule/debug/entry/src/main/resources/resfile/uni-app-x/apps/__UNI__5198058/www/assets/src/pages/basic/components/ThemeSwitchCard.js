import { C as Card } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/pages/basic/components/Card&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/store/index&";
import { $ as $t } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/utils/i18n&";
import { u as useAppStore } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/src/store/app&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedData: _setSharedData, toDisplayString: _toDisplayString, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataIf: _createSharedDataIf, setSharedDataEvent: _setSharedDataEvent, createSharedDataFor: _createSharedDataFor, unref: _unref, createSharedDataComponent: _createSharedDataComponent } = globalThis.Vue;
const __className = "GenSrcPagesBasicComponentsThemeSwitchCard";
const { computed } = globalThis.Vue;
class ThemeModeOption extends UTS.UTSType {
  static get$UTSMetadata$() {
    return {
      kind: 2,
      get fields() {
        return {
          value: { type: String, optional: false },
          label: { type: String, optional: false }
        };
      },
      name: "ThemeModeOption"
    };
  }
  constructor(options, metadata = ThemeModeOption.get$UTSMetadata$(), isJSONParse = false) {
    super();
    this.__props__ = UTS.UTSType.initProps(options, metadata, isJSONParse);
    this.value = this.__props__.value;
    this.label = this.__props__.label;
    delete this.__props__;
  }
}
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  __dynamicSharedData: true,
  __hash: "1edcc8af",
  __className,
  __filename: "src/pages/basic/components/ThemeSwitchCard.uvue",
  __name: "ThemeSwitchCard",
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenSrcPagesBasicComponentsThemeSwitchCardSharedData", sharedDataClassId: 0 })));
    const appStore = useAppStore();
    const themeTitle = computed(() => {
      return $t("basic.themeTitle");
    });
    const themePreview = computed(() => {
      return $t("basic.themePreview");
    });
    const themeButton = computed(() => {
      return $t("basic.themeButton");
    });
    const themeModeLabel = computed(() => {
      return $t("basic.themeModeTitle");
    });
    const themeModeOptions = computed(() => {
      return [
        new ThemeModeOption({ value: "auto", label: $t("basic.themeModeAuto") }),
        new ThemeModeOption({ value: "light", label: $t("basic.themeModeLight") }),
        new ThemeModeOption({ value: "dark", label: $t("basic.themeModeDark") })
      ];
    });
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
        title: $t("basic.themeSuccess"),
        icon: "none",
        duration: 1500
      });
    }
    function changeThemeMode(value) {
      appStore.setThemeMode(value);
      uni.showToast({
        title: $t("basic.themeModeSuccess"),
        icon: "none",
        duration: 1500
      });
    }
    return () => {
      "raw js";
      const n18 = _createSharedDataComponent(
        Card,
        "a1511108",
        { title: () => {
          return themeTitle.value;
        } },
        {
          "default": () => {
            _renderSharedDataEffect(() => {
              _setSharedData(__sharedData, 4, _toDisplayString(themePreview.value));
              _setSharedDataStyle(__sharedData, 5, { backgroundColor: currentTheme.value });
              _setSharedData(__sharedData, 6, _toDisplayString(themeButton.value));
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
            _renderSharedDataEffect(() => {
              return _setSharedData(__sharedData, 7, _toDisplayString(themeModeLabel.value));
            });
            _createSharedDataFor(_setSharedDataScoped(__sharedData, 2, _createSharedDataVFor(__sharedDataScope, () => {
              return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 2 });
            })), () => {
              return themeModeOptions.value;
            }, (__sharedData_VFor1, _for_item1, _for_key1) => {
              _setSharedDataEvent(__sharedData_VFor1, 1, () => {
                return changeThemeMode(_for_item1.value.value);
              });
              _renderSharedDataEffect(() => {
                const _appStore = _unref(appStore);
                const _appStore_state = _appStore.state;
                const _item_value = _for_item1.value.value;
                _setSharedDataStyle(__sharedData_VFor1, 2, {
                  backgroundColor: _appStore_state.themeMode == _item_value ? _appStore_state.theme : "transparent"
                });
                _setSharedDataStyle(__sharedData_VFor1, 3, {
                  color: _appStore_state.themeMode == _item_value ? "#ffffff" : "var(--text-secondary, #64748b)"
                });
                _setSharedData(__sharedData_VFor1, 4, _toDisplayString(_for_item1.value.label));
              });
              return null;
            }, (__sharedData_VFor1, item, index) => {
              return _setSharedData(__sharedData_VFor1, 0, _toDisplayString(index));
            }, 1);
            _setSharedDataStyle(__sharedData, 3, {
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "var(--border-color, #e2e8f0)"
            });
          }
        },
        1
        /* SINGLE_ROOT */
      );
      _setSharedData(__sharedData, 0, n18.sharedData);
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
