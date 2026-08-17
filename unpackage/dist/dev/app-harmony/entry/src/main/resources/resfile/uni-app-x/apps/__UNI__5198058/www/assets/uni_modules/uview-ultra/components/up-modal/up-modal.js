import { _ as __easycom_0 } from "../up-line/up-line.js";
import { _ as __easycom_1 } from "../up-loading-icon/up-loading-icon.js";
import { _ as __easycom_2$1 } from "../up-popup/up-popup.js";
import { a as addUnit } from "../../libs/function/index.js";
import { t } from "../../libs/i18n/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, createSharedDataSlot: _createSharedDataSlot, withSharedDataVaporCtx: _withSharedDataVaporCtx, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, toDisplayString: _toDisplayString, createSharedDataIf: _createSharedDataIf, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedDataEvent: _setSharedDataEvent, setSharedDataClass: _setSharedDataClass } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpModalUpModal";
const { computed, ref, watch } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-modal"
  },
  __dynamicSharedData: true,
  __hash: "349a5226",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-modal/up-modal.uvue",
  __name: "up-modal",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    confirmText: {
      type: String,
      default: "确认"
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    showCancelButton: {
      type: Boolean,
      default: false
    },
    confirmColor: {
      type: String,
      default: "#2979ff"
    },
    cancelColor: {
      type: String,
      default: "#606266"
    },
    buttonReverse: {
      type: Boolean,
      default: false
    },
    zoom: {
      type: Boolean,
      default: true
    },
    asyncClose: {
      type: Boolean,
      default: false
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    },
    negativeTop: {
      type: [String, Number],
      default: 0
    },
    width: {
      type: [String, Number],
      default: "650rpx"
    },
    confirmButtonShape: {
      type: String,
      default: ""
    },
    duration: {
      type: Number,
      default: 400
    },
    contentTextAlign: {
      type: String,
      default: "left"
    },
    asyncCloseTip: {
      type: String,
      default: ""
    },
    asyncCancelClose: {
      type: Boolean,
      default: false
    },
    contentStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    },
    customClass: {
      type: String,
      default: ""
    }
  },
  emits: ["confirm", "cancel", "close", "update:show", "cancelOnAsync"],
  setup(__props, _a) {
    var __emit = _a.emit, $slots = _a.slots;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpModalUpModalSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const loading = ref(false);
    watch(() => {
      return props.show;
    }, (n) => {
      if (n && loading.value) {
        loading.value = false;
      }
    });
    const elCancelText = computed(() => {
      if (props.cancelText == "取消" || props.cancelText == "") {
        return t("up_common_cancel", new UTSJSONObject({}));
      }
      return props.cancelText;
    });
    const elConfirmText = computed(() => {
      if (props.confirmText == "确认" || props.confirmText == "确定" || props.confirmText == "") {
        return t("up_common_confirm", new UTSJSONObject({}));
      }
      return props.confirmText;
    });
    const popupCustomStyle = computed(() => {
      return new UTSJSONObject({
        borderRadius: "6px",
        overflow: "hidden",
        marginTop: `-${addUnit(props.negativeTop)}`
      });
    });
    const modalStyle = computed(() => {
      return new UTSJSONObject({
        width: addUnit(props.width)
      });
    });
    const buttonGroupStyle = computed(() => {
      return new UTSJSONObject({
        flexDirection: props.buttonReverse ? "row-reverse" : "row"
      });
    });
    const cancelTextStyle = computed(() => {
      return new UTSJSONObject({
        color: props.cancelColor
      });
    });
    const confirmTextStyle = computed(() => {
      return new UTSJSONObject({
        color: props.confirmColor
      });
    });
    const contentTextStyle = computed(() => {
      return new UTSJSONObject({
        textAlign: props.contentTextAlign
      });
    });
    const contentStyleCpu = computed(() => {
      var _a2;
      const style = (_a2 = props.contentStyle) !== null && _a2 !== void 0 ? _a2 : new UTSJSONObject({});
      style["paddingTop"] = `${props.title != "" ? 12 : 25}px`;
      return style;
    });
    function confirmHandler() {
      if (props.asyncClose) {
        loading.value = true;
      } else {
        emit("update:show", false);
      }
      emit("confirm");
    }
    function cancelHandler() {
      if (props.asyncClose && loading.value) {
        if (props.asyncCloseTip != "") {
          uni.showToast({
            title: props.asyncCloseTip,
            icon: "none"
          });
        }
        emit("cancelOnAsync");
      } else {
        if (!props.asyncCancelClose) {
          emit("update:show", false);
        }
      }
      emit("cancel");
    }
    function clickHandler() {
      if (props.closeOnClickOverlay) {
        emit("update:show", false);
      }
      emit("close");
    }
    return () => {
      "raw js";
      const _component_up_line = __easycom_0;
      const _component_up_loading_icon = __easycom_1;
      const _component_up_popup = __easycom_2$1;
      const n32 = _createSharedDataComponentWithFallback(
        _component_up_popup,
        "72641a11",
        {
          mode: "center",
          zoom: () => {
            return __props.zoom;
          },
          show: () => {
            return __props.show;
          },
          class: () => {
            return [__props.customClass];
          },
          customStyle: () => {
            return popupCustomStyle.value;
          },
          closeOnClickOverlay: () => {
            return __props.closeOnClickOverlay;
          },
          safeAreaInsetBottom: false,
          duration: () => {
            return __props.duration;
          },
          onClick: () => {
            return clickHandler;
          }
        },
        {
          "bottom": _withSharedDataVaporCtx(() => {
            _createSharedDataSlot("popupBottom", null, null);
          }),
          "default": _withSharedDataVaporCtx(() => {
            _renderSharedDataEffect(() => {
              return _setSharedDataStyle(__sharedData, 22, modalStyle.value);
            });
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 1, _toSharedDataBoolean(__props.title != ""));
            }, () => {
              _renderSharedDataEffect(() => {
                return _setSharedData(__sharedData, 2, _toDisplayString(__props.title));
              });
            });
            _renderSharedDataEffect(() => {
              return _setSharedDataStyle(__sharedData, 23, contentStyleCpu.value);
            });
            _createSharedDataSlot("default", null, null, () => {
              _renderSharedDataEffect(() => {
                _setSharedDataStyle(__sharedData, 20, contentTextStyle.value);
                _setSharedData(__sharedData, 21, _toDisplayString(__props.content));
              });
            });
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 3, _toSharedDataBoolean($slots["confirmButton"] != null));
            }, () => {
              _createSharedDataSlot("confirmButton", null, null);
            }, () => {
              const n12 = _createSharedDataComponentWithFallback(_component_up_line, "69c5f373");
              _setSharedData(__sharedData, 4, n12?.sharedData);
              _renderSharedDataEffect(() => {
                return _setSharedDataStyle(__sharedData, 19, buttonGroupStyle.value);
              });
              _createSharedDataIf(() => {
                return _setSharedData(__sharedData, 5, _toSharedDataBoolean(__props.showCancelButton));
              }, () => {
                _setSharedDataEvent(__sharedData, 6, cancelHandler);
                _renderSharedDataEffect(() => {
                  _setSharedDataClass(__sharedData, 7, ["up-modal__button-group__wrapper up-modal__button-group__wrapper--cancel", [__props.showCancelButton && !__props.showConfirmButton ? "up-modal__button-group__wrapper--only-cancel" : ""]]);
                  _setSharedDataStyle(__sharedData, 8, cancelTextStyle.value);
                  _setSharedData(__sharedData, 9, _toDisplayString(elCancelText.value));
                });
              });
              _createSharedDataIf(() => {
                return _setSharedData(__sharedData, 10, _toSharedDataBoolean(__props.showConfirmButton && __props.showCancelButton));
              }, () => {
                const n19 = _createSharedDataComponentWithFallback(_component_up_line, "62149b3e", { direction: "column" });
                _setSharedData(__sharedData, 11, n19?.sharedData);
              });
              _createSharedDataIf(() => {
                return _setSharedData(__sharedData, 12, _toSharedDataBoolean(__props.showConfirmButton));
              }, () => {
                _renderSharedDataEffect(() => {
                  return _setSharedDataClass(__sharedData, 18, ["up-modal__button-group__wrapper up-modal__button-group__wrapper--confirm", [!__props.showCancelButton && __props.showConfirmButton ? "up-modal__button-group__wrapper--only-confirm" : ""]]);
                });
                _createSharedDataIf(() => {
                  return _setSharedData(__sharedData, 13, _toSharedDataBoolean(loading.value));
                }, () => {
                  const n24 = _createSharedDataComponentWithFallback(_component_up_loading_icon, "62147668");
                  _setSharedData(__sharedData, 14, n24?.sharedData);
                }, () => {
                  _renderSharedDataEffect(() => {
                    _setSharedDataStyle(__sharedData, 15, confirmTextStyle.value);
                    _setSharedData(__sharedData, 16, _toDisplayString(elConfirmText.value));
                  });
                }, 1285);
                _setSharedDataEvent(__sharedData, 17, confirmHandler);
              });
            }, 521);
          })
        },
        1
        /* SINGLE_ROOT */
      );
      _setSharedData(__sharedData, 0, n32?.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-modal.js.map
