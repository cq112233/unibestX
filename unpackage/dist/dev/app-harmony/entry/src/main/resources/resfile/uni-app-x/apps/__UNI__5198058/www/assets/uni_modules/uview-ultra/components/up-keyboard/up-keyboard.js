import { _ as __easycom_0 } from "../up-number-keyboard/up-number-keyboard.js";
import { _ as __easycom_1$1 } from "../up-car-keyboard/up-car-keyboard.js";
import { _ as __easycom_2 } from "../up-popup/up-popup.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, createSharedDataSlot: _createSharedDataSlot, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, setSharedDataEvent: _setSharedDataEvent, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataIf: _createSharedDataIf, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, withSharedDataVaporCtx: _withSharedDataVaporCtx } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpKeyboardUpKeyboard";
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-keyboard"
  },
  __dynamicSharedData: true,
  __hash: "1a9d3410",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-keyboard/up-keyboard.uvue",
  __name: "up-keyboard",
  props: {
    mode: {
      type: String,
      default: "number"
    },
    dotDisabled: {
      type: Boolean,
      default: false
    },
    tooltip: {
      type: Boolean,
      default: true
    },
    showTips: {
      type: Boolean,
      default: true
    },
    tips: {
      type: String,
      default: ""
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    showConfirm: {
      type: Boolean,
      default: true
    },
    random: {
      type: Boolean,
      default: false
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    show: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: [String, Number],
      default: 1075
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    confirmText: {
      type: String,
      default: "确认"
    },
    autoChange: {
      type: Boolean,
      default: false
    }
  },
  emits: ["change", "close", "confirm", "cancel", "backspace"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpKeyboardUpKeyboardSharedData", sharedDataClassId: 0 })));
    const emit = __emit;
    function keyboardChange(e = null) {
      emit("change", e.toString());
    }
    function popupClose() {
      emit("close");
    }
    function onConfirm() {
      emit("confirm");
    }
    function onCancel() {
      emit("cancel");
    }
    function keyboardBackspace() {
      emit("backspace");
    }
    return () => {
      "raw js";
      const _component_up_number_keyboard = __easycom_0;
      const _component_up_car_keyboard = __easycom_1$1;
      const _component_up_popup = __easycom_2;
      const n22 = _createSharedDataComponentWithFallback(
        _component_up_popup,
        "06f25395",
        {
          overlay: () => {
            return __props.overlay;
          },
          closeOnClickOverlay: () => {
            return __props.closeOnClickOverlay;
          },
          mode: "bottom",
          popup: false,
          show: () => {
            return __props.show;
          },
          safeAreaInsetBottom: () => {
            return __props.safeAreaInsetBottom;
          },
          onClose: () => {
            return popupClose;
          },
          zIndex: () => {
            return __props.zIndex;
          },
          customStyle: {
            backgroundColor: "rgb(214, 218, 220)"
          }
        },
        {
          "default": _withSharedDataVaporCtx(() => {
            _createSharedDataSlot("default", null, null);
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 1, _toSharedDataBoolean(__props.tooltip));
            }, () => {
              _createSharedDataIf(() => {
                return _setSharedData(__sharedData, 2, _toSharedDataBoolean(__props.showCancel));
              }, () => {
                _setSharedDataEvent(__sharedData, 3, onCancel);
                _renderSharedDataEffect(() => {
                  return _setSharedData(__sharedData, 4, _toDisplayString(__props.cancelText));
                });
              });
              _createSharedDataIf(() => {
                return _setSharedData(__sharedData, 5, _toSharedDataBoolean(__props.showTips));
              }, () => {
                _renderSharedDataEffect(() => {
                  const _tips = __props.tips;
                  const _mode = __props.mode;
                  _setSharedData(__sharedData, 6, _toDisplayString(_tips != "" ? _tips : _mode == "number" ? "数字键盘" : _mode == "card" ? "身份证键盘" : "车牌号键盘"));
                });
              });
              _createSharedDataIf(() => {
                return _setSharedData(__sharedData, 7, _toSharedDataBoolean(__props.showConfirm));
              }, () => {
                _setSharedDataEvent(__sharedData, 8, onConfirm);
                _renderSharedDataEffect(() => {
                  return _setSharedData(__sharedData, 9, _toDisplayString(__props.showConfirm ? __props.confirmText : ""));
                });
              });
            });
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 10, _toSharedDataBoolean(__props.mode == "number" || __props.mode == "card"));
            }, () => {
              const n18 = _createSharedDataComponentWithFallback(_component_up_number_keyboard, "61ccd5e4", {
                random: () => {
                  return __props.random;
                },
                onBackspace: () => {
                  return keyboardBackspace;
                },
                onChange: () => {
                  return keyboardChange;
                },
                mode: () => {
                  return __props.mode;
                },
                dotDisabled: () => {
                  return __props.dotDisabled;
                }
              });
              _setSharedData(__sharedData, 11, n18?.sharedData);
            }, () => {
              const n20 = _createSharedDataComponentWithFallback(_component_up_car_keyboard, "61ccddbe", {
                random: () => {
                  return __props.random;
                },
                autoChange: () => {
                  return __props.autoChange;
                },
                onBackspace: () => {
                  return keyboardBackspace;
                },
                onChange: () => {
                  return keyboardChange;
                }
              });
              _setSharedData(__sharedData, 12, n20?.sharedData);
            }, 1285);
          })
        },
        1
        /* SINGLE_ROOT */
      );
      _setSharedData(__sharedData, 0, n22?.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-keyboard.js.map
