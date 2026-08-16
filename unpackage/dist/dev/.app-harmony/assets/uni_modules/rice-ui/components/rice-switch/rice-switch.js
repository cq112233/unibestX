import { _ as __easycom_0 } from "../rice-icon/rice-icon.js";
import { _ as __easycom_2$1 } from "../rice-loading/rice-loading.js";
import { e as isSameValue, h as hasStrValue, a as addUnit, d as getPxNum, j as callInterceptor, I as InterceptorOption } from "../../libs/utils/basic.js";
import "../../libs/use/useCountDown/index.js";
import { u as useCssVar } from "../../libs/use/useCssVar/index.js";
import { u as useNamespace } from "../../libs/use/useNamespace/index.js";
import "../../libs/use/usePopup/index.js";
import "../../libs/use/useRelation/useChildren.js";
import "../../libs/use/useRelation/useParent.js";
import "../../libs/use/useSafeArea/index.js";
import "../../libs/use/useTouch/index.js";
import { f as formDisabledInjectKey, a as formReadonlyInjectKey } from "../rice-form/index.js";
import "./type.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, useModel: _useModel, mergeModels: _mergeModels, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, unref: _unref, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, toDisplayString: _toDisplayString, createSharedDataIf: _createSharedDataIf, setSharedDataEvent: _setSharedDataEvent, setSharedDataTemplateRef: _setSharedDataTemplateRef } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceSwitchRiceSwitch";
const { inject, computed, shallowRef } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-switch",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "1336336f",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-switch/rice-switch.uvue",
  __name: "rice-switch",
  props: /* @__PURE__ */ _mergeModels(new UTSJSONObject({
    activeValue: { type: [String, Number, Boolean], default: true },
    inactiveValue: { type: [String, Number, Boolean], default: false },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    width: { type: [String, Number] },
    iconSize: { default: "12px", type: [String, Number] },
    textSize: { type: [String, Number] },
    activeColor: { type: String },
    inactiveColor: { type: String },
    activeText: { type: [String, Number] },
    inactiveText: { type: [String, Number] },
    activeIcon: { type: [String, Number] },
    inactiveIcon: { type: [String, Number] },
    promptPosition: { default: "outball", type: String },
    beforeChange: { type: null },
    vibrate: { type: Boolean, default: true },
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null }
  }), new UTSJSONObject({
    "modelValue": {
      type: [String, Number, Boolean],
      default: false
    },
    "modelModifiers": {}
  })),
  emits: /* @__PURE__ */ _mergeModels(["change"], ["update:modelValue"]),
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceSwitchRiceSwitchSharedData", sharedDataClassId: 0 })));
    const ns = useNamespace("switch");
    const emit = __emit;
    const props = __props;
    const modelValue = _useModel(__props, "modelValue");
    const formDisabled = inject(formDisabledInjectKey, null);
    const formReadonly = inject(formReadonlyInjectKey, null);
    const isDisabled = computed(() => {
      var _a2;
      return ((_a2 = formDisabled === null || formDisabled === void 0 ? null : formDisabled.value) !== null && _a2 !== void 0 ? _a2 : false) || props.disabled;
    });
    const isReadonly = computed(() => {
      var _a2;
      return ((_a2 = formReadonly === null || formReadonly === void 0 ? null : formReadonly.value) !== null && _a2 !== void 0 ? _a2 : false) || props.readonly;
    });
    const isChecked = computed(() => {
      return isSameValue(modelValue.value, props.activeValue);
    });
    const hasText = computed(() => {
      return hasStrValue(props.activeText) || hasStrValue(props.inactiveText);
    });
    const hasIcon = computed(() => {
      return hasStrValue(props.activeIcon) || hasStrValue(props.inactiveIcon);
    });
    const showOutBall = computed(() => {
      return props.promptPosition == "outball" && (hasText.value || hasIcon.value);
    });
    const showInsidePrompt = computed(() => {
      return props.promptPosition == "inball" && (hasText.value || hasIcon.value);
    });
    const handleChange = () => {
      const value = isChecked.value ? props.inactiveValue : props.activeValue;
      modelValue.value = value;
      emit("change", value);
    };
    const changeValue = (e) => {
      e.stopPropagation();
      if (isDisabled.value || isReadonly.value || props.loading)
        return null;
      if (typeof props.beforeChange != "function") {
        handleChange();
        return null;
      }
      callInterceptor(props.beforeChange, new InterceptorOption({
        args: null,
        canceled: null,
        error: null,
        undone: null,
        complete: null,
        done() {
          handleChange();
        }
      }));
    };
    const switchRef = shallowRef(null);
    const primaryColor = useCssVar("--rice-primary-color", switchRef);
    const switchBgColor = useCssVar("--rice-switch-background", switchRef);
    const switchColor = computed(() => {
      var _a2, _b;
      if (isChecked.value) {
        return (_a2 = props.activeColor) !== null && _a2 !== void 0 ? _a2 : primaryColor.value;
      }
      return (_b = props.inactiveColor) !== null && _b !== void 0 ? _b : switchBgColor.value;
    });
    const iconColor = computed(() => {
      return switchColor.value;
    });
    const switchStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (switchColor.value != "") {
        css.set("background-color", switchColor.value);
      }
      if (props.width != null) {
        css.set("width", addUnit(props.width));
      }
      return css;
    });
    const innerTextStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.textSize != null) {
        css.set("font-size", addUnit(props.textSize));
      }
      return css;
    });
    const nodeTextStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.textSize != null) {
        css.set("font-size", addUnit(props.textSize));
      }
      if (switchColor.value != "") {
        css.set("color", switchColor.value);
      }
      return css;
    });
    const nodeStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      const switchWidth = props.width != null ? getPxNum(props.width) : 50;
      const nodeWidth = 22;
      const translateX = isChecked.value ? `${switchWidth - nodeWidth - 4}px` : "4px";
      css.set("transform", `translateX(${translateX})`);
      return css;
    });
    const switchClass = computed(() => {
      return [
        ns.b(""),
        ns.theme(),
        ns.is("disabled", isDisabled.value),
        ns.is("active", isChecked.value)
      ];
    });
    const innerClass = computed(() => {
      return [
        ns.e("inner"),
        ns.is("__inner--active", isChecked.value)
      ];
    });
    const nodeClass = computed(() => {
      return [
        ns.e("node")
      ];
    });
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_rice_icon = __easycom_0;
      const _component_rice_loading = __easycom_2$1;
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 17, _unref(switchClass));
        _setSharedDataStyle(__sharedData, 18, [_unref(switchStyle), __props.customStyle]);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(_unref(showOutBall)));
      }, () => {
        _renderSharedDataEffect(() => {
          return _setSharedDataClass(__sharedData, 6, _unref(innerClass));
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 1, _toSharedDataBoolean(_unref(hasIcon)));
        }, () => {
          const n4 = _createSharedDataComponentWithFallback(_component_rice_icon, "7cead800", {
            name: () => {
              return _unref(isChecked) ? __props.activeIcon : __props.inactiveIcon;
            },
            color: "rgba(255,255,255,.9)",
            size: () => {
              return __props.iconSize;
            }
          });
          _setSharedData(__sharedData, 2, n4?.sharedData);
        }, () => {
          return _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 3, _toSharedDataBoolean(_unref(hasText)));
          }, () => {
            _renderSharedDataEffect(() => {
              _setSharedDataStyle(__sharedData, 4, _unref(innerTextStyle));
              _setSharedData(__sharedData, 5, _toDisplayString(_unref(isChecked) ? __props.activeText : __props.inactiveText));
            });
          });
        }, 261);
      });
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 19, _unref(nodeClass));
        _setSharedDataStyle(__sharedData, 20, _unref(nodeStyle));
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 7, _toSharedDataBoolean(__props.loading));
      }, () => {
        const n10 = _createSharedDataComponentWithFallback(_component_rice_loading, "7ceae383", {
          size: "17",
          color: () => {
            return _unref(iconColor);
          }
        });
        _setSharedData(__sharedData, 8, n10?.sharedData);
      }, () => {
        return _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 9, _toSharedDataBoolean(_unref(showInsidePrompt)));
        }, () => {
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 10, _toSharedDataBoolean(_unref(hasIcon)));
          }, () => {
            const n14 = _createSharedDataComponentWithFallback(_component_rice_icon, "7ceae763", {
              name: () => {
                return _unref(isChecked) ? __props.activeIcon : __props.inactiveIcon;
              },
              color: () => {
                return _unref(iconColor);
              },
              size: () => {
                return __props.iconSize;
              }
            });
            _setSharedData(__sharedData, 11, n14?.sharedData);
          }, () => {
            return _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 12, _toSharedDataBoolean(_unref(hasText)));
            }, () => {
              _renderSharedDataEffect(() => {
                _setSharedDataStyle(__sharedData, 13, _unref(nodeTextStyle));
                _setSharedData(__sharedData, 14, _toDisplayString(_unref(isChecked) ? __props.activeText : __props.inactiveText));
              });
            });
          }, 1541);
        });
      }, 1029);
      _setSharedDataEvent(__sharedData, 15, changeValue);
      _setSharedDataTemplateRef(__sharedData, 16, (n19) => {
        _setTemplateRef(n19, switchRef, null, "switchRef");
      });
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=rice-switch.js.map
