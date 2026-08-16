import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-overlay/rice-overlay&";
import { _ as __easycom_1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-button/rice-button&";
import { _ as __easycom_2$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-loading/rice-loading&";
import { h as hasStrValue, a as addUnit, j as callInterceptor, I as InterceptorOption } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/utils/basic&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useCountDown/index&";
import { i as isDark } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/store/useConfig&";
import { u as useNamespace } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useNamespace/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/usePopup/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useChildren&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useParent&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useSafeArea/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useTouch/index&";
import { s as showDialog } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-dialog/api&";
import { D as DialogProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-dialog/type&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, useModel: _useModel, mergeModels: _mergeModels, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, unref: _unref, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataIf: _createSharedDataIf, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, toDisplayString: _toDisplayString, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent, toSharedDataString: _toSharedDataString, setSharedDataTemplateRef: _setSharedDataTemplateRef } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceDialogRiceDialog";
const { useSlots, computed, ref, shallowRef, nextTick, watch, onUnmounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-dialog",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "2e39ae34",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-dialog/rice-dialog.uvue",
  __name: "rice-dialog",
  props: /* @__PURE__ */ _mergeModels(new UTSJSONObject({
    title: { type: String },
    width: { type: [String, Number] },
    message: { type: String },
    messageAlign: { default: "center", type: String },
    buttonTheme: { default: "default", type: String },
    buttonLayout: { default: "row", type: String },
    showConfirmButton: { type: Boolean, default: true },
    confirmButtonText: { default: "确认", type: String },
    confirmButtonColor: { type: String },
    confirmButtonDisabled: { type: Boolean, default: false },
    showCancelButton: { type: Boolean, default: true },
    cancelButtonText: { default: "取消", type: String },
    cancelButtonColor: { type: String },
    cancelButtonDisabled: { type: Boolean, default: false },
    duration: { default: 250, type: Number },
    overlay: { type: Boolean, default: true },
    overlayBgColor: { default: "rgba(0,0,0,.6)", type: String },
    closeOnClickOverlay: { type: Boolean, default: false },
    beforeClose: { type: null },
    zIndex: { default: 999, type: Number },
    bgColor: { type: String },
    marginTop: { type: [String, Number] },
    useDialogPage: { type: Boolean, default: true },
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null },
    confirm: { type: Function },
    cancel: { type: Function },
    clickOverlay: { type: Function },
    open: { type: Function },
    close: { type: Function },
    opened: { type: Function },
    closed: { type: Function },
    ready: { type: Function },
    fail: { type: Function }
  }), new UTSJSONObject({
    "show": {
      type: Boolean,
      default: false
    },
    "showModifiers": {}
  })),
  emits: /* @__PURE__ */ _mergeModels(["confirm", "cancel", "open", "close", "closed", "opened", "clickOverlay"], ["update:show"]),
  __multiRoot: true,
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceDialogRiceDialogSharedData", sharedDataClassId: 0 })));
    const ns = useNamespace("dialog");
    const slots = useSlots();
    const emit = __emit;
    const show = _useModel(__props, "show");
    const props = __props;
    const hasTitle = computed(() => {
      return slots["title"] != null || hasStrValue(props.title);
    });
    let openTimer = null;
    let openedTimer = null;
    let closeTimer = null;
    const handleOpenTimer = () => {
      if (openTimer != null)
        clearTimeout(openTimer);
      if (openedTimer != null)
        clearTimeout(openedTimer);
    };
    const handleCloseTimer = () => {
      if (closeTimer != null)
        clearTimeout(closeTimer);
    };
    const realShow = ref(false);
    const dialogRef = shallowRef(null);
    const open = async () => {
      if (realShow.value)
        return Promise.resolve(null);
      realShow.value = true;
      await nextTick();
      handleOpenTimer();
      openTimer = setTimeout(() => {
        var _a2, _b, _c;
        (_a2 = dialogRef.value) === null || _a2 === void 0 ? null : _a2.style.setProperty("transition-duration", props.duration + "ms");
        (_b = dialogRef.value) === null || _b === void 0 ? null : _b.style.setProperty("opacity", "1");
        (_c = dialogRef.value) === null || _c === void 0 ? null : _c.style.setProperty("transform", "translate(-50%, -50%) scale(1)");
        openedTimer = setTimeout(() => {
          emit("opened");
        }, props.duration);
      }, 30);
    };
    const hasDialogPage = ref(true);
    const isUseDialogPage = computed(() => {
      return props.useDialogPage == true && hasDialogPage.value && slots["title"] == null && slots["default"] == null && slots["footer"] == null;
    });
    const dialogPageIns = ref(null);
    const handleShowDialog = () => {
      showDialog(new UTSJSONObject({
        title: props.title,
        message: props.message,
        messageAlign: props.messageAlign,
        buttonTheme: props.buttonTheme,
        buttonLayout: props.buttonLayout,
        showConfirmButton: props.showConfirmButton,
        confirmButtonText: props.confirmButtonText,
        confirmButtonColor: props.confirmButtonColor,
        confirmButtonDisabled: props.confirmButtonDisabled,
        showCancelButton: props.showCancelButton,
        cancelButtonText: props.cancelButtonText,
        cancelButtonColor: props.cancelButtonColor,
        cancelButtonDisabled: props.cancelButtonDisabled,
        duration: props.duration,
        overlay: props.overlay,
        overlayBgColor: props.overlayBgColor,
        closeOnClickOverlay: props.closeOnClickOverlay,
        beforeClose: props.beforeClose,
        bgColor: props.bgColor,
        zIndex: props.zIndex,
        marginTop: props.marginTop,
        confirm: () => {
          emit("confirm");
        },
        cancel: () => {
          emit("cancel");
        },
        ready: (pageIns = null) => {
          dialogPageIns.value = pageIns;
          hasDialogPage.value = true;
        },
        open: () => {
          emit("open");
        },
        close: () => {
          if (show.value) {
            show.value = false;
            emit("close");
          }
        },
        opened: () => {
          emit("opened");
        },
        closed: () => {
          emit("closed");
        },
        fail: () => {
          hasDialogPage.value = false;
          emit("open");
          open();
        }
      }));
    };
    watch(() => {
      return [
        props.title,
        props.message
      ];
    }, () => {
      var _a2, _b;
      if (show.value) {
        (_b = (_a2 = dialogPageIns.value) === null || _a2 === void 0 ? null : _a2.vm) === null || _b === void 0 ? null : _b.$callMethod("updateParams", new DialogProps({
          width: null,
          messageAlign: null,
          buttonTheme: null,
          buttonLayout: null,
          showConfirmButton: null,
          confirmButtonText: null,
          confirmButtonColor: null,
          confirmButtonDisabled: null,
          showCancelButton: null,
          cancelButtonText: null,
          cancelButtonColor: null,
          cancelButtonDisabled: null,
          duration: null,
          overlay: null,
          overlayBgColor: null,
          closeOnClickOverlay: null,
          beforeClose: null,
          zIndex: null,
          bgColor: null,
          marginTop: null,
          useDialogPage: null,
          customStyle: null,
          confirm: null,
          cancel: null,
          clickOverlay: null,
          open: null,
          close: null,
          opened: null,
          closed: null,
          ready: null,
          fail: null,
          title: props.title,
          message: props.message
        }));
      }
    });
    const showOverlay = computed(() => {
      return isUseDialogPage.value ? false : props.overlay;
    });
    const close = () => {
      var _a2, _b;
      if (!realShow.value)
        return null;
      (_a2 = dialogRef.value) === null || _a2 === void 0 ? null : _a2.style.setProperty("opacity", "0");
      (_b = dialogRef.value) === null || _b === void 0 ? null : _b.style.setProperty("transform", `translate(-50%, -50%) scale(0.85)`);
      handleCloseTimer();
      closeTimer = setTimeout(() => {
        realShow.value = false;
        emit("closed");
        dialogPageIns.value = null;
      }, props.duration);
    };
    const confirmLoading = ref(false);
    const confirm = () => {
      if (props.confirmButtonDisabled || confirmLoading.value)
        return null;
      emit("confirm");
      if (typeof props.beforeClose != "function") {
        show.value = false;
        return null;
      }
      confirmLoading.value = true;
      callInterceptor(props.beforeClose, new InterceptorOption({
        args: null,
        canceled: null,
        error: null,
        undone: null,
        done() {
          show.value = false;
        },
        complete() {
          confirmLoading.value = false;
        }
      }));
    };
    const cancel = () => {
      if (props.cancelButtonDisabled)
        return null;
      show.value = false;
      emit("cancel");
    };
    const overlayClick = () => {
      if (props.closeOnClickOverlay) {
        show.value = false;
      }
      emit("clickOverlay");
    };
    watch(show, (newVal) => {
      if (newVal && !realShow.value) {
        if (isUseDialogPage.value) {
          handleShowDialog();
          return null;
        }
        open();
        emit("open");
      }
      if (!newVal && realShow.value) {
        close();
        emit("close");
      }
    }, {
      immediate: true
    });
    const cancelButtonHover = computed(() => {
      return props.cancelButtonDisabled ? "none" : `rice-dialog__button--${isDark.value ? "hover--dark" : "hover"}`;
    });
    const confirmButtonHover = computed(() => {
      return props.confirmButtonDisabled || confirmLoading.value ? "none" : `rice-dialog__button--${isDark.value ? "hover--dark" : "hover"}`;
    });
    const dialogStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      css.set("z-index", props.zIndex);
      if (props.width != null) {
        css.set("width", addUnit(props.width));
      }
      if (props.marginTop != null) {
        css.set("margin-top", addUnit(props.marginTop));
      }
      if (hasStrValue(props.bgColor)) {
        css.set("background-color", props.bgColor);
      }
      return css;
    });
    const cancelTextStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (hasStrValue(props.cancelButtonColor)) {
        css.set("color", props.cancelButtonColor);
      }
      return css;
    });
    const confirmTextStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (hasStrValue(props.confirmButtonColor)) {
        css.set("color", props.confirmButtonColor);
      }
      return css;
    });
    const dialogClass = computed(() => {
      return [
        ns.b(""),
        ns.theme()
      ];
    });
    const contentClass = computed(() => {
      return [
        ns.e("content"),
        ns.is("__content--has-title", hasTitle.value)
      ];
    });
    const messageTextClass = computed(() => {
      return [
        ns.e("message__text"),
        ns.e(`message__${props.messageAlign}`)
      ];
    });
    const footerClass = computed(() => {
      const hasSlot = slots["footer"] != null;
      const isDefaultTheme = props.buttonTheme == "default";
      return [
        ns.e("footer"),
        ns.is("__footer--border", isDefaultTheme && !hasSlot),
        ns.is("__footer--vertical", props.buttonLayout == "col" && !isDefaultTheme && !hasSlot),
        ns.is("__footer--btn", !isDefaultTheme && !hasSlot)
      ];
    });
    const getButtonClass = (type) => {
      const base = [
        ns.e("button"),
        ns.is(`__button--disabled`, type == "cancel" ? props.cancelButtonDisabled : props.confirmButtonDisabled)
      ];
      if (type == "cancel" && props.showConfirmButton) {
        base.push(ns.e("button--border"));
      }
      return base;
    };
    const cancelButtonStyle = computed(() => {
      const isVertical = props.buttonLayout == "col";
      const css = /* @__PURE__ */ new Map();
      if (props.buttonLayout == "row") {
        css.set("flex", 1);
      }
      css.set("marginRight", props.showConfirmButton && !isVertical ? "12px" : "0px");
      css.set("marginTop", props.showConfirmButton && isVertical ? "12px" : "0px");
      return css;
    });
    const confirmButtonStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.buttonLayout == "row") {
        css.set("flex", 1);
      }
      return css;
    });
    onUnmounted(() => {
      handleOpenTimer();
      handleCloseTimer();
    });
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_rice_overlay = __easycom_0;
      const _component_rice_button = __easycom_1;
      const _component_rice_loading = __easycom_2$1;
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(_unref(showOverlay)));
      }, () => {
        const n2 = _createSharedDataComponentWithFallback(_component_rice_overlay, "d96190a2", {
          show: () => {
            return show.value;
          },
          duration: () => {
            return __props.duration;
          },
          "close-on-click-overlay": false,
          "bg-color": () => {
            return __props.overlayBgColor;
          },
          "z-index": () => {
            return __props.zIndex - 1;
          },
          onClick: () => {
            return overlayClick;
          }
        });
        _setSharedData(__sharedData, 1, n2?.sharedData);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 2, _toSharedDataBoolean(_unref(realShow)));
      }, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataClass(__sharedData, 27, _unref(dialogClass));
          _setSharedDataStyle(__sharedData, 28, [_unref(dialogStyle), __props.customStyle]);
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 3, _toSharedDataBoolean(_unref(hasTitle)));
        }, () => {
          _createSharedDataSlot("title", null, null, () => {
            _renderSharedDataEffect(() => {
              return _setSharedData(__sharedData, 4, _toDisplayString(__props.title));
            });
          });
        });
        _renderSharedDataEffect(() => {
          return _setSharedDataClass(__sharedData, 29, _unref(contentClass));
        });
        _createSharedDataSlot("default", null, null, () => {
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 5, _toSharedDataBoolean(_unref(hasStrValue)(__props.message)));
          }, () => {
            _renderSharedDataEffect(() => {
              _setSharedDataClass(__sharedData, 6, _unref(messageTextClass));
              _setSharedData(__sharedData, 7, _toDisplayString(__props.message));
            });
          });
        });
        _renderSharedDataEffect(() => {
          return _setSharedDataClass(__sharedData, 30, _unref(footerClass));
        });
        _createSharedDataSlot("footer", null, null, () => {
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 8, _toSharedDataBoolean(__props.showCancelButton));
          }, () => {
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 9, _toSharedDataBoolean(__props.buttonTheme != "default"));
            }, () => {
              const n24 = _createSharedDataComponentWithFallback(_component_rice_button, "073fc42a", {
                type: "primary",
                "plain-fill": "",
                text: () => {
                  return __props.cancelButtonText;
                },
                shape: () => {
                  return __props.buttonTheme == "round" ? "round" : "";
                },
                color: () => {
                  return __props.cancelButtonColor;
                },
                disabled: () => {
                  return __props.cancelButtonDisabled;
                },
                style: () => {
                  return _unref(cancelButtonStyle);
                },
                onClick: () => {
                  return cancel;
                }
              });
              _setSharedData(__sharedData, 10, n24?.sharedData);
            }, () => {
              _setSharedDataEvent(__sharedData, 11, cancel);
              _renderSharedDataEffect(() => {
                _setSharedDataClass(__sharedData, 12, getButtonClass("cancel"));
                _setSharedDataClass(__sharedData, 13, _toSharedDataString(_unref(cancelButtonHover)));
                _setSharedDataStyle(__sharedData, 14, _unref(cancelTextStyle));
                _setSharedData(__sharedData, 15, _toDisplayString(__props.cancelButtonText));
              });
            }, 1029);
          });
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 16, _toSharedDataBoolean(__props.showConfirmButton));
          }, () => {
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 17, _toSharedDataBoolean(__props.buttonTheme != "default"));
            }, () => {
              const n33 = _createSharedDataComponentWithFallback(_component_rice_button, "e0be59b0", {
                type: "primary",
                text: () => {
                  return __props.confirmButtonText;
                },
                color: () => {
                  return __props.confirmButtonColor;
                },
                shape: () => {
                  return __props.buttonTheme == "round" ? "round" : "";
                },
                style: () => {
                  return _unref(confirmButtonStyle);
                },
                disabled: () => {
                  return __props.confirmButtonDisabled;
                },
                loading: () => {
                  return _unref(confirmLoading);
                },
                onClick: () => {
                  return confirm;
                }
              });
              _setSharedData(__sharedData, 18, n33?.sharedData);
            }, () => {
              _renderSharedDataEffect(() => {
                _setSharedDataClass(__sharedData, 24, getButtonClass("confirm"));
                _setSharedDataClass(__sharedData, 25, _toSharedDataString(_unref(confirmButtonHover)));
              });
              _createSharedDataIf(() => {
                return _setSharedData(__sharedData, 19, _toSharedDataBoolean(!_unref(confirmLoading)));
              }, () => {
                _renderSharedDataEffect(() => {
                  _setSharedDataStyle(__sharedData, 20, _unref(confirmTextStyle));
                  _setSharedData(__sharedData, 21, _toDisplayString(__props.confirmButtonText));
                });
              }, () => {
                const n39 = _createSharedDataComponentWithFallback(_component_rice_loading, "e0be2cea", { color: () => {
                  return __props.confirmButtonColor;
                } });
                _setSharedData(__sharedData, 22, n39?.sharedData);
              }, 1797);
              _setSharedDataEvent(__sharedData, 23, confirm);
            }, 1541);
          });
        });
        _setSharedDataTemplateRef(__sharedData, 26, (n43) => {
          _setTemplateRef(n43, dialogRef, null, "dialogRef");
        });
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
//# sourceMappingURL=rice-dialog.js.map
