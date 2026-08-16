import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-overlay/rice-overlay&";
import { _ as __easycom_0$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-icon/rice-icon&";
import { a as addUnit, h as hasStrValue } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/utils/basic&";
import { a as ActionSheetProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-action-sheet/type&";
import { s as showActionSheet } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/components/rice-action-sheet/api&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useCountDown/index&";
import { u as useCssVar } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useCssVar/index&";
import { u as useNamespace } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useNamespace/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/usePopup/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useChildren&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useRelation/useParent&";
import { u as useSafeArea, s as safeAreaInsets } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useSafeArea/index&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/rice-ui/libs/use/useTouch/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, useModel: _useModel, mergeModels: _mergeModels, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, unref: _unref, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataIf: _createSharedDataIf, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, toDisplayString: _toDisplayString, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, toSharedDataString: _toSharedDataString, setSharedDataEvent: _setSharedDataEvent, createSharedDataFor: _createSharedDataFor, setSharedDataTemplateRef: _setSharedDataTemplateRef } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceActionSheetRiceActionSheet";
const { computed, ref, shallowRef, nextTick, watch, onUnmounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-action-sheet",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "578ecc43",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-action-sheet/rice-action-sheet.uvue",
  __name: "rice-action-sheet",
  props: /* @__PURE__ */ _mergeModels(new UTSJSONObject({
    actions: { type: Array },
    title: { type: String },
    showCancel: { type: Boolean, default: true },
    cancelText: { default: "取消", type: String },
    duration: { default: 300, type: Number },
    zIndex: { default: 999, type: Number },
    opacity: { type: Boolean },
    overlay: { type: Boolean, default: true },
    overlayBgColor: { default: "rgba(0,0,0,.6)", type: String },
    closeOnClickAction: { type: Boolean, default: true },
    closeOnClickOverlay: { type: Boolean, default: true },
    radius: { default: "12px", type: [Number, String] },
    safeAreaInsetBottom: { type: Boolean, default: true },
    useDialogPage: { type: Boolean, default: true },
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null },
    select: { type: Function },
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
  emits: /* @__PURE__ */ _mergeModels(["select", "cancel", "open", "close", "opened", "closed", "clickOverlay"], ["update:show"]),
  __multiRoot: true,
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceActionSheetRiceActionSheetSharedData", sharedDataClassId: 0 })));
    const ns = useNamespace("action-sheet");
    useSafeArea();
    const emit = __emit;
    const props = __props;
    const show = _useModel(__props, "show");
    const actionsList = computed(() => {
      var _a2;
      return (_a2 = props.actions) !== null && _a2 !== void 0 ? _a2 : [];
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
    const actionSheetRef = shallowRef(null);
    const open = async () => {
      if (realShow.value)
        return Promise.resolve(null);
      realShow.value = true;
      await nextTick();
      handleOpenTimer();
      openTimer = setTimeout(() => {
        var _a2, _b, _c;
        (_a2 = actionSheetRef.value) === null || _a2 === void 0 ? null : _a2.style.setProperty("transition-duration", props.duration + "ms");
        (_b = actionSheetRef.value) === null || _b === void 0 ? null : _b.style.setProperty("opacity", "1");
        (_c = actionSheetRef.value) === null || _c === void 0 ? null : _c.style.setProperty("transform", "translate(0px, 0px)");
        openedTimer = setTimeout(() => {
          emit("opened");
        }, props.duration);
      }, 30);
    };
    const handleSelect = (action, index) => {
      if (action.disabled == true)
        return null;
      if (props.closeOnClickAction == true) {
        show.value = false;
      }
      emit("select", action, index);
    };
    const cancel = () => {
      show.value = false;
      emit("cancel");
    };
    const hasDialogPage = ref(true);
    const isUseDialogPage = computed(() => {
      return props.useDialogPage == true && hasDialogPage.value;
    });
    const dialogPageIns = ref(null);
    const handleShowDialog = () => {
      showActionSheet(new UTSJSONObject({
        actions: actionsList.value,
        title: props.title,
        showCancel: props.showCancel,
        cancelText: props.cancelText,
        duration: props.duration,
        zIndex: props.zIndex,
        opacity: props.opacity,
        overlay: props.overlay,
        overlayBgColor: props.overlayBgColor,
        closeOnClickAction: props.closeOnClickAction,
        closeOnClickOverlay: props.closeOnClickOverlay,
        radius: props.radius,
        safeAreaInsetBottom: props.safeAreaInsetBottom,
        customStyle: props.customStyle,
        select: (action, index) => {
          emit("select", action, index);
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
        clickOverlay: () => {
          emit("clickOverlay");
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
        props.actions
      ];
    }, () => {
      var _a2, _b;
      if (show.value) {
        (_b = (_a2 = dialogPageIns.value) === null || _a2 === void 0 ? null : _a2.vm) === null || _b === void 0 ? null : _b.$callMethod("updateParams", new ActionSheetProps({
          showCancel: null,
          cancelText: null,
          duration: null,
          zIndex: null,
          opacity: null,
          overlay: null,
          overlayBgColor: null,
          closeOnClickAction: null,
          closeOnClickOverlay: null,
          radius: null,
          safeAreaInsetBottom: null,
          useDialogPage: null,
          customStyle: null,
          select: null,
          cancel: null,
          clickOverlay: null,
          open: null,
          close: null,
          opened: null,
          closed: null,
          ready: null,
          fail: null,
          title: props.title,
          actions: props.actions
        }));
      }
    }, {
      deep: true
    });
    const close = () => {
      var _a2, _b;
      if (!realShow.value)
        return null;
      const opacity = props.opacity == true ? "0" : "1";
      (_a2 = actionSheetRef.value) === null || _a2 === void 0 ? null : _a2.style.setProperty("opacity", opacity);
      (_b = actionSheetRef.value) === null || _b === void 0 ? null : _b.style.setProperty("transform", "translate(0px, 100%)");
      handleCloseTimer();
      closeTimer = setTimeout(() => {
        realShow.value = false;
        emit("closed");
        dialogPageIns.value = null;
      }, props.duration);
    };
    const overlayClick = () => {
      if (props.closeOnClickOverlay == true) {
        show.value = false;
      }
      emit("clickOverlay");
    };
    const showOverlay = computed(() => {
      return isUseDialogPage.value ? false : props.overlay;
    });
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
    const menuDisabledColor = useCssVar("--rice-action-sheet-menu-disabled-text-color", actionSheetRef);
    const menuTextColor = useCssVar("--rice-text-color", actionSheetRef);
    const getIconColor = (menu) => {
      if (hasStrValue(menu.color))
        return menu.color;
      return menu.disabled == true ? menuDisabledColor.value : menuTextColor.value;
    };
    const getMenuTextStyle = (menu) => {
      const css = /* @__PURE__ */ new Map();
      if (hasStrValue(menu.color))
        css.set("color", menu.color);
      return css;
    };
    const getMenuTextClass = (menu) => {
      return [
        ns.e("menu__text"),
        ns.is(`__menu__text--disabled`, menu.disabled == true)
      ];
    };
    const getMenuSubnameClass = (menu) => {
      return [
        ns.e("menu__subname"),
        ns.is(`__menu__subname--disabled`, menu.disabled == true)
      ];
    };
    const actionSheetStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      css.set("z-index", props.zIndex);
      css.set("border-top-left-radius", addUnit(props.radius));
      css.set("border-top-right-radius", addUnit(props.radius));
      if (props.safeAreaInsetBottom) {
        css.set("padding-bottom", safeAreaInsets.value.bottom + "px");
      }
      return css;
    });
    const actionSheetClass = computed(() => {
      return [
        ns.b(""),
        ns.theme(),
        ns.is("opacity", props.opacity)
      ];
    });
    const getMenuClass = (menu, index) => {
      return [
        ns.e("menu"),
        ns.is("__menu--border", index < actionsList.value.length - 1)
      ];
    };
    onUnmounted(() => {
      handleOpenTimer();
      handleCloseTimer();
    });
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_rice_overlay = __easycom_0;
      const _component_rice_icon = __easycom_0$1;
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(_unref(showOverlay)));
      }, () => {
        const n2 = _createSharedDataComponentWithFallback(_component_rice_overlay, "206099a6", {
          show: () => {
            return show.value;
          },
          "z-index": () => {
            return __props.zIndex - 1;
          },
          "close-on-click-overlay": false,
          duration: () => {
            return __props.duration;
          },
          "bg-color": () => {
            return __props.overlayBgColor;
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
          _setSharedDataClass(__sharedData, 11, _unref(actionSheetClass));
          _setSharedDataStyle(__sharedData, 12, [_unref(actionSheetStyle), __props.customStyle]);
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 3, _toSharedDataBoolean(_unref(hasStrValue)(props.title)));
        }, () => {
          _renderSharedDataEffect(() => {
            return _setSharedData(__sharedData, 4, _toDisplayString(props.title));
          });
        });
        _createSharedDataFor(_setSharedDataScoped(__sharedData, 9, _createSharedDataVFor(__sharedDataScope, () => {
          return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
        })), () => {
          return _unref(actionsList);
        }, (__sharedData_VFor0, _for_item0, _for_key0) => {
          _renderSharedDataEffect(() => {
            const _item = _for_item0.value;
            _setSharedDataClass(__sharedData_VFor0, 7, getMenuClass(_item, _for_key0.value));
            _setSharedDataClass(__sharedData_VFor0, 8, _toSharedDataString(_item.disabled == true ? "none" : "rice-action-sheet--hover"));
          });
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData_VFor0, 1, _toSharedDataBoolean(_unref(hasStrValue)(_for_item0.value.icon)));
          }, () => {
            const n13 = _createSharedDataComponentWithFallback(_component_rice_icon, `3aafb1ce-${_for_item0.value.name}${_for_key0.value}`, {
              color: () => {
                return getIconColor(_for_item0.value);
              },
              name: () => {
                return _for_item0.value.icon;
              },
              size: () => {
                return _for_item0.value.iconSize;
              },
              "font-family": () => {
                return _for_item0.value.iconFontFamily;
              },
              "custom-style": { marginRight: "6px" }
            });
            _setSharedData(__sharedData_VFor0, 2, n13?.sharedData);
          });
          _renderSharedDataEffect(() => {
            const _item = _for_item0.value;
            _setSharedDataClass(__sharedData_VFor0, 9, getMenuTextClass(_item));
            _setSharedDataStyle(__sharedData_VFor0, 10, getMenuTextStyle(_item));
            _setSharedData(__sharedData_VFor0, 11, _toDisplayString(_item.name));
          });
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData_VFor0, 3, _toSharedDataBoolean(_unref(hasStrValue)(_for_item0.value.subname)));
          }, () => {
            _renderSharedDataEffect(() => {
              const _item = _for_item0.value;
              _setSharedDataClass(__sharedData_VFor0, 4, getMenuSubnameClass(_item));
              _setSharedData(__sharedData_VFor0, 5, _toDisplayString(_item.subname));
            });
          });
          _setSharedDataEvent(__sharedData_VFor0, 6, () => {
            return handleSelect(_for_item0.value, _for_key0.value);
          });
          return null;
        }, (__sharedData_VFor0, item, index) => {
          return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(`${item.name}${index}`));
        }, 1);
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 5, _toSharedDataBoolean(__props.showCancel));
        }, () => {
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 6, _toSharedDataBoolean(__props.showCancel));
        }, () => {
          _setSharedDataEvent(__sharedData, 7, cancel);
          _renderSharedDataEffect(() => {
            return _setSharedData(__sharedData, 8, _toDisplayString(__props.cancelText));
          });
        });
        _setSharedDataTemplateRef(__sharedData, 10, (n27) => {
          _setTemplateRef(n27, actionSheetRef, null, "actionSheetRef");
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
//# sourceMappingURL=rice-action-sheet.js.map
