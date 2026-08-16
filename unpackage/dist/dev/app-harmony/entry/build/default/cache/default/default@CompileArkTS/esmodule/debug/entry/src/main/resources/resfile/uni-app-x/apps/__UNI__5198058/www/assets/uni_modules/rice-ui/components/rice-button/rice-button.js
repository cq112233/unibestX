import { _ as __easycom_2 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-loading/rice-loading&";
import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-icon/rice-icon&";
import { h as hasStrValue, i as isThemeColor, b as isGradientColor, a as addUnit } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/utils/basic&";
import { d as debugWarn } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/utils/debug&";
import { C as Coloruts } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/plugin/coloruts/conversion&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/plugin/coloruts/constant&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/plugin/coloruts/type&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/plugin/dateuts/type&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/plugin/dateuts/locale&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useCountDown/index&";
import { i as isDark } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/store/useConfig&";
import { u as useNamespace } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useNamespace/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/usePopup/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useChildren&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useParent&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useSafeArea/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useTouch/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-button/type&";
import { i as iconSizeTypes, l as loadingSizeTypes } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-button/utils&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, unref: _unref, setSharedDataStyle: _setSharedDataStyle, toSharedDataString: _toSharedDataString, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataIf: _createSharedDataIf, toDisplayString: _toDisplayString, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent, setSharedDataTemplateRef: _setSharedDataTemplateRef } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceButtonRiceButton";
const { computed, ref, shallowRef, nextTick, watch, onMounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-button",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "0beabe98",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-button/rice-button.uvue",
  __name: "rice-button",
  props: {
    type: { type: String },
    size: { type: String },
    text: { type: [String, Number] },
    color: { type: String },
    darkColor: { type: String },
    textColor: { type: String },
    textSize: { type: [String, Number] },
    icon: { type: [String, Number] },
    iconSize: { type: [String, Number] },
    iconColor: { type: String },
    iconFontFamily: { type: String },
    plainFill: { type: Boolean, default: false },
    plain: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    loadingSize: { type: [String, Number] },
    loadingText: { type: [String, Number] },
    loadingMode: { type: String },
    shape: { type: String },
    width: { type: [String, Number] },
    height: { type: [String, Number] },
    openType: { type: String },
    formType: { type: String },
    lang: { type: String },
    sessionFrom: { type: String },
    sendMessageTitle: { type: String },
    sendMessageImg: { type: String },
    sendMessagePath: { type: String },
    showMessageCard: { type: String },
    appParameter: { type: String },
    to: { type: String },
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null }
  },
  emits: [
    "click",
    "getphonenumber",
    "getrealtimephonenumber",
    "getuserinfo",
    "chooseavatar",
    "launchapp",
    "agreeprivacyauthorization",
    "opensetting",
    "error",
    "contact"
  ],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceButtonRiceButtonSharedData", sharedDataClassId: 0 })));
    const ns = useNamespace("button");
    const emit = __emit;
    const props = __props;
    const btnText = computed(() => {
      return props.loading && hasStrValue(props.loadingText) ? props.loadingText : props.text;
    });
    const isPlain = computed(() => {
      return props.plain || props.plainFill;
    });
    const buttonColor = computed(() => {
      var _a2;
      return isDark.value ? (_a2 = props.darkColor) !== null && _a2 !== void 0 ? _a2 : props.color : props.color;
    });
    const emitClick = (e) => {
      e.stopPropagation();
      if (props.disabled || props.loading)
        return null;
      if (hasStrValue(props.to)) {
        uni.navigateTo({
          url: props.to,
          fail: (err) => {
            debugWarn("Button", err.errMsg);
          }
        });
      }
      emit("click");
    };
    const _iconSize = computed(() => {
      var _a2, _b;
      if (hasStrValue(props.iconSize))
        return props.iconSize;
      return (_b = iconSizeTypes[(_a2 = props.size) !== null && _a2 !== void 0 ? _a2 : "default"]) !== null && _b !== void 0 ? _b : "16px";
    });
    const _loadingSize = computed(() => {
      var _a2, _b;
      if (hasStrValue(props.loadingSize))
        return props.loadingSize;
      return (_b = loadingSizeTypes[(_a2 = props.size) !== null && _a2 !== void 0 ? _a2 : "default"]) !== null && _b !== void 0 ? _b : "18px";
    });
    const buttonType = computed(() => {
      if (hasStrValue(buttonColor.value))
        return "";
      if (props.type == "info")
        return "info";
      return isThemeColor(props.type) ? props.type : "default";
    });
    const getTextColor = () => {
      if (hasStrValue(props.textColor))
        return props.textColor;
      if (hasStrValue(buttonColor.value)) {
        return isPlain.value && !isGradientColor(buttonColor.value) ? buttonColor.value : "";
      }
      return "";
    };
    const themeColor = ref("");
    const _iconColor = computed(() => {
      if (hasStrValue(props.iconColor)) {
        return props.iconColor;
      }
      const textColor = getTextColor();
      if (textColor != "")
        return textColor;
      const baseColor = "var(--rice-text-color)";
      if (isPlain.value || buttonType.value == "info" || buttonType.value == "default")
        return themeColor.value == "" ? baseColor : themeColor.value;
      return "#f5f5f5";
    });
    function darken(color, amount = 20) {
      return color.mix("#141414", amount).toHexString();
    }
    const btnStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (hasStrValue(buttonColor.value)) {
        const color = buttonColor.value;
        if (isGradientColor(color)) {
          css.set("background", color);
          css.set("border-style", "none");
        } else {
          const colorUts = new Coloruts(color);
          css.set("border-color", color);
          if (!isPlain.value) {
            css.set("background", color);
          } else if (props.plainFill) {
            css.set("background", isDark.value ? darken(colorUts, 90) : colorUts.tint(90).toHexString());
          }
        }
      }
      if (props.height != null)
        css.set("height", addUnit(props.height));
      if (props.width != null)
        css.set("width", addUnit(props.width));
      return css;
    });
    const buttonClass = computed(() => {
      const basic = [
        ns.b(""),
        ns.theme(),
        ns.m(props.size),
        ns.m(props.shape),
        ns.is("disabled", props.disabled)
      ];
      if (buttonType.value != "") {
        const theme = ns.m(props.plainFill ? `${buttonType.value}--plain-fill` : buttonType.value);
        basic.push(theme);
      }
      basic.push(ns.is("plain", props.plain));
      return basic;
    });
    const textStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      const textColor = getTextColor();
      if (textColor != "")
        css.set("color", textColor);
      if (props.textSize != null)
        css.set("font-size", addUnit(props.textSize));
      if (hasStrValue(props.icon) || props.loading)
        css.set("margin-left", "4px");
      return css;
    });
    const textClass = computed(() => {
      const basic = [ns.e("text")];
      if (buttonType.value != "") {
        const theme = ns.m(isPlain.value ? `${buttonType.value}--plain__text` : `${buttonType.value}__text`);
        basic.push(theme);
      }
      if (props.size != null)
        basic.push(ns.m(`${props.size}__text`));
      return basic;
    });
    const hoverClass = computed(() => {
      if (props.disabled || props.loading)
        return "none";
      if (isPlain.value || buttonType.value == "")
        return "rice-button--hover";
      return `rice-button--${buttonType.value}--hover`;
    });
    const buttonRef = shallowRef(null);
    const getCssVar = async () => {
      var _a2, _b, _c, _d, _e, _f;
      await nextTick();
      if (buttonType.value == "default" || buttonType.value == "info") {
        themeColor.value = (_b = (_a2 = buttonRef.value) === null || _a2 === void 0 ? null : _a2.style.getPropertyValue(`--rice-text-color`)) !== null && _b !== void 0 ? _b : "";
      } else if (isThemeColor(buttonType.value)) {
        themeColor.value = (_d = (_c = buttonRef.value) === null || _c === void 0 ? null : _c.style.getPropertyValue(`--rice-${buttonType.value}-color`)) !== null && _d !== void 0 ? _d : "";
      } else {
        themeColor.value = (_f = (_e = buttonRef.value) === null || _e === void 0 ? null : _e.style.getPropertyValue(`--rice-text-color-white`)) !== null && _f !== void 0 ? _f : "";
      }
    };
    watch([buttonType, () => {
      return isDark.value;
    }], () => {
      getCssVar();
    });
    onMounted(() => {
      getCssVar();
    });
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_rice_loading = __easycom_2;
      const _component_rice_icon = __easycom_0;
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 10, _unref(buttonClass));
        _setSharedDataStyle(__sharedData, 11, [_unref(btnStyle), __props.customStyle]);
        _setSharedDataClass(__sharedData, 12, _toSharedDataString(_unref(hoverClass)));
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.loading));
      }, () => {
        const n2 = _createSharedDataComponentWithFallback(_component_rice_loading, "6bae9650", {
          color: () => {
            return _unref(_iconColor);
          },
          size: () => {
            return _unref(_loadingSize);
          },
          mode: () => {
            return __props.loadingMode;
          }
        });
        _setSharedData(__sharedData, 1, n2?.sharedData);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 2, _toSharedDataBoolean(__props.icon));
      }, () => {
        const n5 = _createSharedDataComponentWithFallback(_component_rice_icon, "6bae8f00", {
          name: () => {
            return __props.icon;
          },
          color: () => {
            return _unref(_iconColor);
          },
          size: () => {
            return _unref(_iconSize);
          },
          "font-family": () => {
            return __props.iconFontFamily;
          }
        });
        _setSharedData(__sharedData, 3, n5?.sharedData);
      });
      _createSharedDataSlot("default", null, null, () => {
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 4, _toSharedDataBoolean(_unref(hasStrValue)(__props.text)));
        }, () => {
          _renderSharedDataEffect(() => {
            _setSharedDataClass(__sharedData, 5, _unref(textClass));
            _setSharedDataStyle(__sharedData, 6, _unref(textStyle));
            _setSharedData(__sharedData, 7, _toDisplayString(_unref(btnText)));
          });
        });
      });
      _setSharedDataEvent(__sharedData, 8, emitClick);
      _setSharedDataTemplateRef(__sharedData, 9, (n11) => {
        _setTemplateRef(n11, buttonRef, null, "buttonRef");
      });
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=rice-button.js.map
