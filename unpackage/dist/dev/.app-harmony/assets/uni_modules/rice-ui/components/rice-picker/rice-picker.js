import { _ as __easycom_0 } from "../rice-overlay/rice-overlay.js";
import { _ as __easycom_1$1 } from "../rice-button/rice-button.js";
import { u as usePopup, U as UsePopupOptions } from "../../libs/use/usePopup/index.js";
import "../../libs/use/useCountDown/index.js";
import { i as isDark } from "../../libs/store/useConfig.js";
import { u as useNamespace } from "../../libs/use/useNamespace/index.js";
import "../../libs/use/useRelation/useChildren.js";
import "../../libs/use/useRelation/useParent.js";
import { u as useSafeArea, s as safeAreaInsets } from "../../libs/use/useSafeArea/index.js";
import "../../libs/use/useTouch/index.js";
import { d as getPxNum, h as hasStrValue, a as addUnit, e as isSameValue } from "../../libs/utils/basic.js";
import { a as PickerCascadeState, b as PickerEvent, P as PickerOption } from "./type.js";
import { g as getColumnsType, i as isSameValueArr, a as isSameIndexArray, b as getFirstEnabledIndex } from "./utils.js";
import { u as usePickerStyle } from "./style.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, useModel: _useModel, mergeModels: _mergeModels, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataIf: _createSharedDataIf, unref: _unref, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedDataEvent: _setSharedDataEvent, toDisplayString: _toDisplayString, createSharedDataSlot: _createSharedDataSlot, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, createSharedDataFor: _createSharedDataFor, withSharedDataVaporCtx: _withSharedDataVaporCtx, setSharedDataTemplateRef: _setSharedDataTemplateRef } = globalThis.Vue;
const __className = "GenUniModulesRiceUiComponentsRicePickerRicePicker";
const { useSlots, shallowRef, computed, ref, watch, onUnmounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "rice-picker",
    styleIsolation: "app-and-page"
  },
  __dynamicSharedData: true,
  __hash: "1018fa10",
  __className,
  __filename: "uni_modules/rice-ui/components/rice-picker/rice-picker.uvue",
  __name: "rice-picker",
  props: /* @__PURE__ */ _mergeModels(new UTSJSONObject({
    columns: { default: () => {
      return [];
    }, type: Array },
    toolbarPosition: { default: "bottom", type: String },
    title: { type: String },
    confirmButtonText: { default: "确定", type: String },
    cancelButtonText: { default: "取消", type: String },
    fontSize: { type: [String, Number] },
    optionHeight: { default: "50px", type: [String, Number] },
    visibleOptionNum: { default: 5, type: Number },
    closeOnClickOverlay: { type: Boolean, default: true },
    closeOnClickConfirm: { type: Boolean, default: true },
    closeOnClickCancel: { type: Boolean, default: true },
    loading: { type: Boolean, default: false },
    safeAreaInsetBottom: { type: Boolean, default: null },
    usePopup: { type: Boolean, default: true },
    immediateChange: { type: Boolean, default: true },
    zIndex: { default: 999, type: Number },
    emptyText: { default: "暂无数据", type: String }
  }), new UTSJSONObject({
    "modelValue": {
      type: Array,
      default: () => {
        return [];
      }
    },
    "modelModifiers": {},
    "show": {
      type: Boolean,
      default: false
    },
    "showModifiers": {}
  })),
  emits: /* @__PURE__ */ _mergeModels(["change", "confirm", "cancel", "open", "close", "opened", "closed"], ["update:modelValue", "update:show"]),
  __multiRoot: true,
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesRiceUiComponentsRicePickerRicePickerSharedData", sharedDataClassId: 0 })));
    useSafeArea();
    const ns = useNamespace("picker");
    const slots = useSlots();
    const emit = __emit;
    const _b = usePickerStyle(), maskTopStyle = _b.maskTopStyle, maskBottomStyle = _b.maskBottomStyle, maskStyle = _b.maskStyle;
    const props = __props;
    const modelValue = _useModel(__props, "modelValue");
    const show = _useModel(__props, "show");
    const pickerRef = shallowRef(null);
    const realShow = usePopup(pickerRef, new UsePopupOptions({
      zoom: null,
      zoomScale: null,
      beforeClose: null,
      show,
      duration: 300,
      position: "bottom",
      opacity: false
    })).realShow;
    const isShow = computed(() => {
      return props.usePopup ? realShow.value : true;
    });
    const initShow = ref(false);
    const showPicker = computed(() => {
      return initShow.value ? initShow.value : isShow.value;
    });
    const columnType = computed(() => {
      return getColumnsType(props.columns);
    });
    const cascadeColumns = ref([]);
    const selectedValue = ref([]);
    const selectedIndex = ref([]);
    const preSelectedIndex = ref([]);
    const currentColumns = computed(() => {
      return columnType.value == "cascade" ? cascadeColumns.value : props.columns;
    });
    const indicatorHeight = computed(() => {
      return getPxNum(props.optionHeight);
    });
    const hasConfirm = computed(() => {
      return hasStrValue(props.confirmButtonText);
    });
    const hasCancel = computed(() => {
      return hasStrValue(props.cancelButtonText);
    });
    const hasOptions = computed(() => {
      return currentColumns.value.some((option) => {
        return option.length > 0;
      });
    });
    const getDefaultPlainValues = () => {
      const values = [];
      for (let i = 0; i < props.columns.length; i++) {
        const column = props.columns[i];
        if (column.length == 0) {
          continue;
        }
        values.push(column[getFirstEnabledIndex(column)].value);
      }
      return values;
    };
    const getDefaultCascadeIndexes = () => {
      var _a2;
      const indexes = [];
      let children = props.columns.length > 0 ? props.columns[0] : null;
      while (children != null && children.length > 0) {
        const currentIndex = getFirstEnabledIndex(children);
        indexes.push(currentIndex);
        children = (_a2 = children[currentIndex].children) !== null && _a2 !== void 0 ? _a2 : null;
      }
      return indexes;
    };
    let getCascadeMaxDepth = null;
    getCascadeMaxDepth = (options) => {
      let maxDepth = 0;
      for (let i = 0; i < options.length; i++) {
        const option = options[i];
        const nextDepth = option.children != null && option.children.length > 0 ? getCascadeMaxDepth(option.children) : 0;
        const currentDepth = nextDepth + 1;
        if (currentDepth > maxDepth) {
          maxDepth = currentDepth;
        }
      }
      return maxDepth;
    };
    const getCascadeValuesByIndex = (indexes) => {
      var _a2;
      const values = [];
      let children = props.columns.length > 0 ? props.columns[0] : null;
      let depth = 0;
      while (children != null && children.length > 0) {
        const rawIndex = depth < indexes.length ? indexes[depth] : 0;
        let currentIndex = rawIndex;
        if (currentIndex < 0 || currentIndex >= children.length) {
          currentIndex = 0;
        }
        const currentOption = children[currentIndex];
        if (currentOption != null) {
          values.push(currentOption.value);
          children = (_a2 = currentOption.children) !== null && _a2 !== void 0 ? _a2 : null;
        }
        depth++;
      }
      return values;
    };
    const getPlainState = (values) => {
      const indexes = [];
      const selectedValues = [];
      for (let i = 0; i < props.columns.length; i++) {
        const column = props.columns[i];
        if (column.length == 0) {
          continue;
        }
        const currentValue = i < values.length ? values[i] : null;
        const matchedIndex = currentValue == null ? -1 : column.findIndex((option = null) => {
          return isSameValue(option.value, currentValue);
        });
        const currentIndex = matchedIndex > -1 ? matchedIndex : 0;
        indexes.push(currentIndex);
        selectedValues.push(column[currentIndex].value);
      }
      return new PickerCascadeState({
        columns: props.columns,
        selectedIndex: indexes,
        selectedValues
      });
    };
    const getPlainSelectedOptions = (indexes) => {
      const options = [];
      for (let i = 0; i < props.columns.length; i++) {
        const column = props.columns[i];
        if (column.length == 0) {
          continue;
        }
        const rawIndex = i < indexes.length ? indexes[i] : 0;
        let currentIndex = rawIndex;
        if (currentIndex < 0 || currentIndex >= column.length) {
          currentIndex = 0;
        }
        options.push(column[currentIndex]);
      }
      return options;
    };
    const getCascadeSelectedOptions = (indexes) => {
      var _a2;
      const options = [];
      let children = props.columns.length > 0 ? props.columns[0] : null;
      let depth = 0;
      while (children != null && children.length > 0) {
        const rawIndex = depth < indexes.length ? indexes[depth] : 0;
        let currentIndex = rawIndex;
        if (currentIndex < 0 || currentIndex >= children.length) {
          currentIndex = 0;
        }
        const currentOption = children[currentIndex];
        if (currentOption != null) {
          options.push(currentOption);
          children = (_a2 = currentOption.children) !== null && _a2 !== void 0 ? _a2 : null;
        }
        depth++;
      }
      return options;
    };
    const getPickerEvent = (indexes, values) => {
      const selectedOptions = columnType.value == "cascade" ? getCascadeSelectedOptions(indexes) : getPlainSelectedOptions(indexes);
      return new PickerEvent({
        selectedValues: [...values],
        selectedOptions,
        selectedIndex: [...indexes]
      });
    };
    const getCascadeState = (values) => {
      var _a2;
      const columns = [];
      const indexes = [];
      const selectedValues = [];
      let children = props.columns.length > 0 ? props.columns[0] : null;
      const maxDepth = children != null ? getCascadeMaxDepth(children) : 0;
      let depth = 0;
      while (children != null && children.length > 0) {
        columns.push(children);
        const currentValue = depth < values.length ? values[depth] : null;
        const matchedIndex = currentValue == null ? -1 : children.findIndex((option = null) => {
          return isSameValue(option.value, currentValue);
        });
        const currentIndex = matchedIndex > -1 ? matchedIndex : 0;
        const currentOption = children[currentIndex];
        indexes.push(currentIndex);
        selectedValues.push(currentOption.value);
        children = (_a2 = currentOption.children) !== null && _a2 !== void 0 ? _a2 : null;
        depth++;
      }
      while (depth < maxDepth) {
        columns.push([new PickerOption({
          children: null,
          extend: null,
          text: "",
          value: "",
          disabled: true
        })]);
        indexes.push(0);
        depth++;
      }
      return new PickerCascadeState({
        columns,
        selectedIndex: indexes,
        selectedValues
      });
    };
    const isTouch = ref(false);
    const onTouchstart = (e) => {
      isTouch.value = true;
    };
    const shouldInitWithDefaultValue = (values) => {
      return values.length == 0;
    };
    const syncCascadeState = async (values, syncModel, fromPickerChange) => {
      const sourceValues = shouldInitWithDefaultValue(values) ? getCascadeValuesByIndex(getDefaultCascadeIndexes()) : values;
      const state = getCascadeState(sourceValues);
      cascadeColumns.value = state.columns;
      selectedIndex.value = state.selectedIndex;
      selectedValue.value = state.selectedValues;
      preSelectedIndex.value = [...state.selectedIndex];
      if (syncModel && !isSameValueArr(modelValue.value, state.selectedValues) && isShow.value) {
        modelValue.value = [...state.selectedValues];
      }
    };
    const syncPlainState = async (values, syncModel, fromPickerChange) => {
      const sourceValues = shouldInitWithDefaultValue(values) ? getDefaultPlainValues() : values;
      const state = getPlainState(sourceValues);
      selectedIndex.value = state.selectedIndex;
      selectedValue.value = state.selectedValues;
      preSelectedIndex.value = [...state.selectedIndex];
      if (syncModel && !isSameValueArr(modelValue.value, state.selectedValues) && isShow.value) {
        modelValue.value = [...state.selectedValues];
      }
    };
    const init = async () => {
      if (props.columns.length == 0) {
        return Promise.resolve(null);
      }
      if (columnType.value == "cascade") {
        syncCascadeState(modelValue.value, true);
      } else {
        syncPlainState(modelValue.value, true);
      }
    };
    watch(() => {
      return props.columns;
    }, () => {
      init();
    }, {
      deep: true,
      immediate: true
    });
    watch(() => {
      return modelValue.value;
    }, (value) => {
      if (columnType.value == "cascade") {
        syncCascadeState(value, false);
      } else {
        syncPlainState(value, false);
      }
    }, {
      deep: true
    });
    watch(isShow, async (newVal) => {
      if (newVal) {
        init();
        initShow.value = true;
      }
    }, {
      immediate: true
    });
    const emitChangeEvent = (indexes, values) => {
      emit("change", getPickerEvent(indexes, values));
    };
    const confirm = () => {
      if (props.closeOnClickConfirm && props.usePopup) {
        show.value = false;
      }
      emit("confirm", getPickerEvent(selectedIndex.value, selectedValue.value));
    };
    const cancel = () => {
      if (props.closeOnClickCancel && props.usePopup) {
        show.value = false;
      }
      emit("cancel", getPickerEvent(selectedIndex.value, selectedValue.value));
    };
    const onPickerChange = (e) => {
      const values = e.detail.value;
      if (!isTouch.value) {
        return null;
      }
      for (let i = 0; i < values.length; i++) {
        if (isNaN(values[i]))
          return null;
      }
      if (isSameIndexArray(values, selectedIndex.value)) {
        return null;
      }
      while (preSelectedIndex.value.length < values.length) {
        preSelectedIndex.value.push(0);
      }
      if (columnType.value == "cascade") {
        let changedColumn = -1;
        for (let i = 0; i < values.length; i++) {
          if (preSelectedIndex.value[i] !== values[i]) {
            changedColumn = i;
            break;
          }
        }
        const nextIndexes = [];
        for (let i = 0; i < values.length; i++) {
          const useDefaultIndex = changedColumn > -1 && i > changedColumn;
          nextIndexes.push(useDefaultIndex ? 0 : values[i]);
        }
        const nextValues_1 = getCascadeValuesByIndex(nextIndexes);
        syncCascadeState(nextValues_1, true);
        emitChangeEvent(nextIndexes, nextValues_1);
        return null;
      }
      const nextValues = [];
      for (let i = 0; i < props.columns.length; i++) {
        const column = props.columns[i];
        if (column.length == 0) {
          continue;
        }
        const rawIndex = i < values.length ? values[i] : 0;
        let currentIndex = rawIndex;
        if (currentIndex < 0 || currentIndex >= column.length) {
          currentIndex = 0;
        }
        nextValues.push(column[currentIndex].value);
      }
      syncPlainState(nextValues, true);
      emitChangeEvent(values, nextValues);
      preSelectedIndex.value = [...values];
    };
    const hasTopBar = computed(() => {
      return props.toolbarPosition == "top" || hasStrValue(props.title);
    });
    const rootClass = computed(() => {
      return [
        ns.theme(),
        ns.is("popup", props.usePopup),
        ns.is("padding-top", slots["top"] == null && !hasTopBar.value)
      ];
    });
    const rootStyle = computed(() => {
      var _a2;
      const css = /* @__PURE__ */ new Map();
      if (props.usePopup) {
        css.set("z-index", props.zIndex);
      }
      const isSafeAreaInsetBottom = (_a2 = props.safeAreaInsetBottom) !== null && _a2 !== void 0 ? _a2 : props.usePopup;
      if (isSafeAreaInsetBottom) {
        css.set("padding-bottom", safeAreaInsets.value.bottom + "px");
      }
      return css;
    });
    const pickerViewStyle = computed(() => {
      const css = /* @__PURE__ */ new Map();
      const height = indicatorHeight.value * props.visibleOptionNum;
      css.set("height", `${height}px`);
      return css;
    });
    const indicatorBorderColor = computed(() => {
      return isDark.value ? "#3a3a3c" : "#e5e5e5";
    });
    const indicatorStyle = computed(() => {
      const base = `height:${indicatorHeight.value}px;background-color: transparent;`;
      return base + `border-top:1rpx solid ${indicatorBorderColor.value};border-bottom:1rpx solid ${indicatorBorderColor.value}`;
    });
    const getOptionTextStyle = (option, index) => {
      const css = /* @__PURE__ */ new Map();
      css.set("height", `${indicatorHeight.value}px`);
      css.set("line-height", `${indicatorHeight.value}px`);
      if (props.fontSize != null) {
        css.set("font-size", addUnit(props.fontSize));
      }
      if (index < selectedValue.value.length) {
        const selected = selectedValue.value[index];
        if (selected === option.value) {
          css.set("font-weight", "bold");
          if (option.disabled == true) {
            css.set("color", "var(--rice-picker-disabled-text-color)");
          }
        }
      }
      return css;
    };
    const cancelButtonTextColor = computed(() => {
      return isDark.value ? "#f5f5f5" : "var(--rice-primary-color)";
    });
    onUnmounted(() => {
    });
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_rice_overlay = __easycom_0;
      const _component_picker_view_column = _resolveComponent("picker-view-column");
      const _component_picker_view = _resolveComponent("picker-view");
      const _component_loading = _resolveComponent("loading");
      const _component_rice_button = __easycom_1$1;
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.usePopup));
      }, () => {
        const n2 = _createSharedDataComponentWithFallback(_component_rice_overlay, "fb6a488a", {
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
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 2, _toSharedDataBoolean(_unref(showPicker)));
      }, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataClass(__sharedData, 28, ["rice-picker", _unref(rootClass)]);
          _setSharedDataStyle(__sharedData, 29, _unref(rootStyle));
        });
        _createSharedDataSlot("top", null, null, () => {
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 3, _toSharedDataBoolean(_unref(hasTopBar)));
          }, () => {
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 4, _toSharedDataBoolean(__props.toolbarPosition == "top"));
            }, () => {
              _setSharedDataEvent(__sharedData, 5, cancel);
              _renderSharedDataEffect(() => {
                return _setSharedData(__sharedData, 6, _toDisplayString(__props.cancelButtonText));
              });
            });
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 7, _toSharedDataBoolean(_unref(hasStrValue)(__props.title)));
            }, () => {
              _renderSharedDataEffect(() => {
                return _setSharedData(__sharedData, 8, _toDisplayString(__props.title));
              });
            });
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 9, _toSharedDataBoolean(__props.toolbarPosition == "top"));
            }, () => {
              _setSharedDataEvent(__sharedData, 10, confirm);
              _renderSharedDataEffect(() => {
                return _setSharedData(__sharedData, 11, _toDisplayString(__props.confirmButtonText));
              });
            });
          });
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 12, _toSharedDataBoolean(_unref(hasOptions)));
        }, () => {
          const n27 = _createSharedDataComponentWithFallback(_component_picker_view, "1b02ee41", {
            style: () => {
              return _unref(pickerViewStyle);
            },
            "indicator-style": () => {
              return _unref(indicatorStyle);
            },
            "mask-top-style": () => {
              return _unref(maskTopStyle);
            },
            "mask-bottom-style": () => {
              return _unref(maskBottomStyle);
            },
            "mask-style": () => {
              return _unref(maskStyle);
            },
            "immediate-change": () => {
              return __props.immediateChange;
            },
            value: () => {
              return _unref(selectedIndex);
            },
            onChange: () => {
              return onPickerChange;
            },
            onTouchstart: () => {
              return onTouchstart;
            }
          }, {
            "default": _withSharedDataVaporCtx(() => {
              _createSharedDataFor(_setSharedDataScoped(__sharedData, 14, _createSharedDataVFor(__sharedDataScope, () => {
                return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
              })), () => {
                return _unref(currentColumns);
              }, (__sharedData_VFor0, _for_item0, _for_key0) => {
                const n26 = _createSharedDataComponentWithFallback(_component_picker_view_column, "45581815-" + _for_key0.value, null, {
                  "default": () => {
                    _createSharedDataFor(_setSharedDataScoped(__sharedData_VFor0, 2, _createSharedDataVFor(__sharedDataScope, () => {
                      return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 2 });
                    })), () => {
                      return _for_item0.value;
                    }, (__sharedData_VFor1, _for_item1) => {
                      _renderSharedDataEffect(() => {
                        const _option = _for_item1.value;
                        _setSharedDataStyle(__sharedData_VFor1, 1, getOptionTextStyle(_option, _for_key0.value));
                        _setSharedData(__sharedData_VFor1, 2, _toDisplayString(_option.text));
                      });
                      return null;
                    }, (__sharedData_VFor1, option) => {
                      return _setSharedData(__sharedData_VFor1, 0, _toDisplayString(option.value));
                    }, 32);
                  }
                });
                _setSharedData(__sharedData_VFor0, 1, n26?.sharedData);
                return n26;
              }, (__sharedData_VFor0, item, index) => {
                return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
              }, 34);
            })
          });
          _setSharedData(__sharedData, 13, n27?.sharedData);
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 15, _toSharedDataBoolean(!_unref(hasOptions)));
        }, () => {
          _renderSharedDataEffect(() => {
            return _setSharedDataStyle(__sharedData, 18, _unref(pickerViewStyle));
          });
          _createSharedDataSlot("empty", null, null, () => {
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 16, _toSharedDataBoolean(!__props.loading));
            }, () => {
              _renderSharedDataEffect(() => {
                return _setSharedData(__sharedData, 17, _toDisplayString(__props.emptyText));
              });
            });
          });
        });
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 19, _toSharedDataBoolean(__props.loading));
        }, () => {
          _renderSharedDataEffect(() => {
            return _setSharedDataStyle(__sharedData, 21, _unref(pickerViewStyle));
          });
          const n38 = _createSharedDataComponentWithFallback(_component_loading, "45583264", {
            "ios-spinner": "",
            class: "rice-picker--loading"
          });
          _setSharedData(__sharedData, 20, n38?.sharedData);
        });
        _createSharedDataSlot("bottom", null, null, () => {
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 22, _toSharedDataBoolean(__props.toolbarPosition == "bottom"));
          }, () => {
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 23, _toSharedDataBoolean(_unref(hasCancel)));
            }, () => {
              const n46 = _createSharedDataComponentWithFallback(_component_rice_button, "455839e3", {
                width: () => {
                  return _unref(hasConfirm) ? "120px" : "185px";
                },
                text: () => {
                  return __props.cancelButtonText;
                },
                color: () => {
                  return _unref(isDark) ? "#2b2b2b" : "#f2f2f2";
                },
                style: () => {
                  return { marginRight: _unref(hasConfirm) ? "15px" : "0px" };
                },
                "text-color": () => {
                  return _unref(cancelButtonTextColor);
                },
                onClick: () => {
                  return cancel;
                }
              });
              _setSharedData(__sharedData, 24, n46?.sharedData);
            });
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 25, _toSharedDataBoolean(_unref(hasConfirm)));
            }, () => {
              const n49 = _createSharedDataComponentWithFallback(_component_rice_button, "455890f5", {
                width: () => {
                  return _unref(hasCancel) ? "120px" : "185px";
                },
                text: () => {
                  return __props.confirmButtonText;
                },
                type: "primary",
                onClick: () => {
                  return confirm;
                }
              });
              _setSharedData(__sharedData, 26, n49?.sharedData);
            });
          });
        });
        _setSharedDataTemplateRef(__sharedData, 27, (n51) => {
          _setTemplateRef(n51, pickerRef, null, "pickerRef");
        });
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
//# sourceMappingURL=rice-picker.js.map
