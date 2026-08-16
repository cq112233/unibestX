import { _ as __easycom_0 } from "../rice-overlay/rice-overlay.js";
import { _ as __easycom_0$1 } from "../rice-icon/rice-icon.js";
import { _ as __easycom_1$1 } from "../rice-tabs/rice-tabs.js";
import { _ as __easycom_1$2 } from "../rice-divider/rice-divider.js";
import { u as usePopup, U as UsePopupOptions } from "../../libs/use/usePopup/index.js";
import "../../libs/use/useCountDown/index.js";
import "../../libs/store/useConfig.js";
import { u as useNamespace } from "../../libs/use/useNamespace/index.js";
import "../../libs/use/useRelation/useChildren.js";
import "../../libs/use/useRelation/useParent.js";
import { u as useSafeArea, s as safeAreaInsets } from "../../libs/use/useSafeArea/index.js";
import "../../libs/use/useTouch/index.js";
import { h as hasStrValue, e as isSameValue, a as addUnit } from "../../libs/utils/basic.js";
import { T as TabsOptions } from "../rice-tabs/type.js";
import { a as CascaderClickDisabledEvent, b as CascaderEvent } from "./type.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, useSlots: _useSlots, useModel: _useModel, mergeModels: _mergeModels, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataIf: _createSharedDataIf, setSharedDataClass: _setSharedDataClass, unref: _unref, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, toDisplayString: _toDisplayString, createSharedDataSlot: _createSharedDataSlot, isRef: _isRef, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, createRecycleContext: _createRecycleContext, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataRecycleFor: _createSharedDataRecycleFor, preCreateSharedDataRecycleFor: _preCreateSharedDataRecycleFor, createSharedDataFor: _createSharedDataFor, setSharedDataTemplateRef: _setSharedDataTemplateRef } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRiceCascaderRiceCascader";
const { shallowRef, ref, computed, nextTick, watch, onUnmounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-cascader",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "7afa28a8",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-cascader/rice-cascader.uvue",
  __name: "rice-cascader",
  props: /* @__PURE__ */ _mergeModels(new UTSJSONObject({
    options: { default: () => {
      return [];
    }, type: Array },
    title: { type: String },
    titleAlign: { type: String },
    placeholder: { default: "请选择", type: String },
    color: { type: String },
    activeColor: { default: "var(--rice-primary-color)", type: String },
    fontSize: { type: [String, Number] },
    closeable: { type: Boolean, default: true },
    closeIcon: { default: "cross", type: String },
    border: { type: Boolean },
    usePopup: { type: Boolean, default: true },
    closeOnFinish: { type: Boolean, default: true },
    closeOnClickClose: { type: Boolean, default: true },
    closeOnClickOverlay: { type: Boolean, default: true },
    safeAreaInsetBottom: { type: Boolean, default: null },
    zIndex: { default: 999, type: Number },
    customStyle: { default: () => {
      return new UTSJSONObject({});
    }, type: null }
  }), new UTSJSONObject({
    "modelValue": {
      type: [String, Number]
    },
    "modelModifiers": {},
    "show": {
      type: Boolean,
      default: false
    },
    "showModifiers": {}
  })),
  emits: /* @__PURE__ */ _mergeModels(["change", "finish", "clickClose", "clickDisabled", "open", "close", "opened", "closed"], ["update:modelValue", "update:show"]),
  __multiRoot: true,
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRiceCascaderRiceCascaderSharedData", sharedDataClassId: 0 })));
    const ns = useNamespace("cascader");
    useSafeArea();
    const emit = __emit;
    const slots = _useSlots();
    const props = __props;
    const modelValue = _useModel(__props, "modelValue");
    const show = _useModel(__props, "show");
    const cascaderRef = shallowRef(null);
    const realShow = usePopup(cascaderRef, new UsePopupOptions({
      zoom: null,
      zoomScale: null,
      beforeClose: null,
      show,
      duration: 300,
      position: "bottom",
      opacity: false
    })).realShow;
    const list = ref([]);
    const selectedOptions = ref([]);
    const selectedPathMap = ref(/* @__PURE__ */ new Map());
    const tabIndex = ref(0);
    const swiperIndex = ref(0);
    const isShow = computed(() => {
      return props.usePopup ? realShow.value : true;
    });
    const hasHeader = computed(() => {
      return hasStrValue(props.title) || props.closeable || slots["title"] != null;
    });
    const isSafeAreaInsetBottom = computed(() => {
      var _a2;
      return (_a2 = props.safeAreaInsetBottom) !== null && _a2 !== void 0 ? _a2 : props.usePopup;
    });
    const tabs = computed(() => {
      const selected = selectedOptions.value.map((option) => {
        return new TabsOptions({
          value: null,
          disabled: null,
          badge: null,
          name: option.text
        });
      });
      if (selectedOptions.value.length < list.value.length) {
        selected.push(new TabsOptions({
          value: null,
          disabled: null,
          badge: null,
          name: props.placeholder
        }));
      }
      return selected;
    });
    function getValueCacheKey(value = null) {
      if (value == null)
        return "";
      if (typeof value == "number") {
        return "number:" + value.toString();
      }
      return "string:" + value;
    }
    function buildSelectedPathMap(options, parentPath) {
      for (let i = 0; i < options.length; i++) {
        const option = options[i];
        const path = parentPath.concat([option]);
        const key = getValueCacheKey(option.value);
        if (!selectedPathMap.value.has(key)) {
          selectedPathMap.value.set(key, path);
        }
        if (option.children != null && option.children.length > 0) {
          buildSelectedPathMap(option.children, path);
        }
      }
    }
    let getSelectedOptionsByValue = null;
    getSelectedOptionsByValue = (_options, value = null) => {
      var _a2;
      if (value == null)
        return [];
      return (_a2 = selectedPathMap.value.get(getValueCacheKey(value))) !== null && _a2 !== void 0 ? _a2 : [];
    };
    const setTabIndex = async () => {
      await nextTick();
      tabIndex.value = Math.max(list.value.length - 1, 0);
    };
    const updateList = () => {
      var _a2;
      if (!isShow.value)
        return null;
      if (modelValue.value != null) {
        const selected = getSelectedOptionsByValue(props.options, modelValue.value);
        selectedOptions.value = selected;
        if (selected.length > 0) {
          let cursor = props.options;
          const data = [];
          for (let i = 0; i < selected.length; i++) {
            const option = selected[i];
            data.push(cursor);
            const next = cursor.find((item = null) => {
              return isSameValue(item.value, option.value);
            });
            if (next != null) {
              cursor = (_a2 = next.children) !== null && _a2 !== void 0 ? _a2 : [];
            }
          }
          if (cursor.length > 0) {
            data.push(cursor);
          }
          list.value = data;
          setTabIndex();
          return null;
        }
      }
      selectedOptions.value = [];
      list.value = [props.options];
      setTabIndex();
    };
    const getIsSelected = (option, index) => {
      if (index >= selectedOptions.value.length) {
        return false;
      }
      return isSameValue(selectedOptions.value[index].value, option.value);
    };
    const clickOption = (option, index) => {
      if (option.disabled == true) {
        emit("clickDisabled", new CascaderClickDisabledEvent({
          tabIndex: index,
          option
        }));
        return null;
      }
      const nextIndex = index + 1;
      if (list.value.length > nextIndex) {
        list.value = list.value.slice(0, nextIndex);
      }
      if (Array.isArray(option.children) && option.children.length > 0) {
        list.value.push(option.children);
        setTabIndex();
      }
      const oldModelValue = modelValue.value;
      modelValue.value = option.value;
      selectedOptions.value = getSelectedOptionsByValue(props.options, option.value);
      const params = new CascaderEvent({
        value: option.value,
        tabIndex: tabIndex.value,
        selectedOptions: selectedOptions.value
      });
      if (!isSameValue(option.value, oldModelValue)) {
        emit("change", params);
      }
      if (option.children == null || !Array.isArray(option.children) || option.children.length == 0) {
        if (props.closeOnFinish && props.usePopup) {
          show.value = false;
        }
        emit("finish", params);
      }
    };
    const clickClose = () => {
      if (props.usePopup && props.closeOnClickClose) {
        show.value = false;
      }
      emit("clickClose");
    };
    watch(modelValue, (newVal = null) => {
      if (newVal != null) {
        const selectedValues = selectedOptions.value.map((v) => {
          return v.value;
        });
        if (selectedValues.includes(newVal)) {
          return null;
        }
      }
      updateList();
    });
    watch(() => {
      return props.options;
    }, () => {
      selectedPathMap.value.clear();
      buildSelectedPathMap(props.options, []);
      if (isShow.value) {
        updateList();
      }
    }, {
      deep: true,
      immediate: true
    });
    watch(isShow, (newVal) => {
      if (newVal) {
        if (props.usePopup) {
          updateList();
        }
      }
    }, {
      immediate: true
    });
    watch(tabIndex, async (newVal) => {
      swiperIndex.value = newVal;
    }, {
      immediate: true
    });
    const rootClass = computed(() => {
      return [
        ns.theme(),
        ns.is("popup", props.usePopup)
      ];
    });
    const rootStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      if (props.usePopup) {
        css.set("z-index", props.zIndex);
      }
      if (isSafeAreaInsetBottom.value) {
        css.set("padding-bottom", safeAreaInsets.value.bottom + "px");
      }
      return css;
    });
    const getOptionTextClass = (option) => {
      return new UTSJSONObject({
        "rice-cascader__option__text--disabled": option.disabled == true
      });
    };
    const getOptionTextStyle = (option, index) => {
      const css = /* @__PURE__ */ new Map();
      if (props.fontSize != null) {
        css.set("font-size", addUnit(props.fontSize));
      }
      const isSelected = getIsSelected(option, index);
      if (props.color != null && !isSelected && option.disabled != true) {
        css.set("color", props.color);
      }
      if (props.activeColor != null && isSelected) {
        css.set("color", props.activeColor);
      }
      return css;
    };
    const getOptionClass = (index) => {
      return new UTSJSONObject({
        "rice-cascader__option--first": index == 0 && slots["optionsTop"] == null,
        "rice-cascader__option--border": props.border == true
      });
    };
    const getSelectedOptions = () => {
      return selectedOptions.value.slice();
    };
    const closeIconStyle = computed(() => {
      return new UTSJSONObject({
        position: "absolute",
        right: "16px",
        top: "8px",
        zIndex: 9,
        padding: "4px 8px"
      });
    });
    onUnmounted(() => {
    });
    __expose({
      getSelectedOptions
    });
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_rice_overlay = __easycom_0;
      const _component_rice_icon = __easycom_0$1;
      const _component_rice_tabs = __easycom_1$1;
      const _component_rice_divider = __easycom_1$2;
      const _component_list_item = _resolveComponent("list-item");
      const _component_list_view = _resolveComponent("list-view");
      const _component_swiper_item = _resolveComponent("swiper-item");
      const _component_swiper = _resolveComponent("swiper");
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.usePopup));
      }, () => {
        const n2 = _createSharedDataComponentWithFallback(_component_rice_overlay, "23370edb", {
          show: () => {
            return show.value;
          },
          "onUpdate:show": () => {
            return (_value) => {
              return show.value = _value;
            };
          },
          "z-index": () => {
            return __props.zIndex - 1;
          },
          "close-on-click-overlay": () => {
            return __props.closeOnClickOverlay;
          },
          duration: 300
        });
        _setSharedData(__sharedData, 1, n2?.sharedData);
      });
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 13, ["rice-cascader", _unref(rootClass)]);
        _setSharedDataStyle(__sharedData, 14, [_unref(rootStyle), __props.customStyle]);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 2, _toSharedDataBoolean(_unref(hasHeader)));
      }, () => {
        _createSharedDataSlot("title", null, null, () => {
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 3, _toSharedDataBoolean(_unref(hasStrValue)(__props.title)));
          }, () => {
            _renderSharedDataEffect(() => {
              _setSharedDataClass(__sharedData, 4, ["rice-cascader__header__title", { "rice-cascader__header__title--left": __props.titleAlign == "left" }]);
              _setSharedData(__sharedData, 5, _toDisplayString(__props.title));
            });
          });
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 6, _toSharedDataBoolean(__props.closeable));
        }, () => {
          const n12 = _createSharedDataComponentWithFallback(_component_rice_icon, "31aed1c4", {
            name: () => {
              return __props.closeIcon;
            },
            size: "20px",
            "custom-style": () => {
              return _unref(closeIconStyle);
            },
            onClick: () => {
              return clickClose;
            }
          });
          _setSharedData(__sharedData, 7, n12?.sharedData);
        });
      });
      const n14 = _createSharedDataComponentWithFallback(_component_rice_tabs, "31aed5e2", {
        list: () => {
          return _unref(tabs);
        },
        modelValue: () => {
          return _unref(tabIndex);
        },
        "onUpdate:modelValue": () => {
          return (_value) => {
            return _isRef(tabIndex) ? tabIndex.value = _value : null;
          };
        },
        "init-animate": false,
        shrink: "",
        "title-active-color": () => {
          return __props.activeColor;
        },
        "line-color": () => {
          return __props.activeColor;
        },
        "title-inactive-color": "var(--rice-text-color)",
        style: "padding: 0 8px;",
        "line-mode": "zoom"
      });
      _setSharedData(__sharedData, 8, n14?.sharedData);
      const n15 = _createSharedDataComponentWithFallback(_component_rice_divider, "31aedddc", {
        hairline: "",
        style: "margin-top: -2px;margin-bottom: 0;"
      });
      _setSharedData(__sharedData, 9, n15?.sharedData);
      const n29 = _createSharedDataComponentWithFallback(_component_swiper, "31aee145", {
        class: "rice-cascader__swiper",
        current: () => {
          return _unref(swiperIndex);
        },
        duration: 120,
        "disable-touch": true
      }, {
        "default": _withSharedDataVaporCtx(() => {
          _createSharedDataFor(_setSharedDataScoped(__sharedData, 11, _createSharedDataVFor(__sharedDataScope, () => {
            return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
          })), () => {
            return _unref(list);
          }, (__sharedData_VFor0, _for_item0, _for_key0) => {
            const n28 = _createSharedDataComponentWithFallback(_component_swiper_item, "04299177-" + _for_key0.value, { class: "rice-cascader__swiper__item" }, {
              "default": _withSharedDataVaporCtx(() => {
                _createSharedDataSlot("optionsTop", { tabIndex: () => {
                  return _unref(tabIndex);
                } }, (data) => {
                  return _setSharedData(__sharedData_VFor0, 2, data);
                });
                const n26 = _createSharedDataComponentWithFallback(_component_list_view, "0429989d-" + _for_key0.value, {
                  class: "rice-cascader__list",
                  "show-scrollbar": false,
                  direction: "vertical"
                }, {
                  "default": _withSharedDataVaporCtx(() => {
                    const _recycleContext = _createRecycleContext();
                    _createSharedDataRecycleFor(_recycleContext, _setSharedDataScoped(__sharedData_VFor0, 4, _createSharedDataVFor(__sharedDataScope, () => {
                      return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 2 });
                    })), _preCreateSharedDataRecycleFor(() => {
                      return _for_item0.value;
                    }, (option, optionIndex) => {
                      return option.value;
                    }), (__sharedData_VFor1, _for_item1, _for_key1) => {
                      const _on_click = () => {
                        return clickOption(_for_item1.value, _for_key0.value);
                      };
                      const n25 = _createSharedDataComponentWithFallback(_component_list_item, "04299c57", {
                        class: () => {
                          return ["rice-cascader__option", getOptionClass(_for_key1.value)];
                        },
                        onClick: () => {
                          return _on_click;
                        },
                        itemKey: () => {
                          return _for_item1.value.value;
                        }
                      }, {
                        "default": _withSharedDataVaporCtx(() => {
                          _renderSharedDataEffect(() => {
                            const _option = _for_item1.value;
                            _setSharedDataClass(__sharedData_VFor1, 4, ["rice-cascader__option__text", getOptionTextClass(_option)]);
                            _setSharedDataStyle(__sharedData_VFor1, 5, getOptionTextStyle(_option, _for_key0.value));
                            _setSharedData(__sharedData_VFor1, 6, _toDisplayString(_option.text));
                          });
                          _createSharedDataIf(() => {
                            return _setSharedData(__sharedData_VFor1, 2, _toSharedDataBoolean(getIsSelected(_for_item1.value, _for_key0.value)));
                          }, () => {
                            const n24 = _createSharedDataComponentWithFallback(_component_rice_icon, "0429a836", {
                              name: "checked",
                              color: () => {
                                return __props.activeColor;
                              }
                            });
                            _setSharedData(__sharedData_VFor1, 3, n24?.sharedData);
                          }, null, 129);
                        })
                      });
                      _setSharedData(__sharedData_VFor1, 1, n25?.sharedData);
                      return n25;
                    }, (__sharedData_VFor1, option, optionIndex) => {
                      return _setSharedData(__sharedData_VFor1, 0, _toDisplayString(option.value));
                    }, (__sharedData_VFor1, option, optionIndex) => {
                      return "0";
                    }, 34);
                  })
                });
                _setSharedData(__sharedData_VFor0, 3, n26?.sharedData);
                _createSharedDataSlot("optionsBottom", { tabIndex: () => {
                  return _unref(tabIndex);
                } }, (data) => {
                  return _setSharedData(__sharedData_VFor0, 5, data);
                });
              })
            });
            _setSharedData(__sharedData_VFor0, 1, n28?.sharedData);
            return n28;
          }, (__sharedData_VFor0, item, index) => {
            return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
          }, 34);
        })
      });
      _setSharedData(__sharedData, 10, n29?.sharedData);
      _setSharedDataTemplateRef(__sharedData, 12, (n30) => {
        _setTemplateRef(n30, cascaderRef, null, "cascaderRef");
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
//# sourceMappingURL=rice-cascader.js.map
