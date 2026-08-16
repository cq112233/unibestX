"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_riceUi_libs_use_usePopup_index = require("../../libs/use/usePopup/index.js");
require("../../libs/use/useCountDown/index.js");
const uni_modules_riceUi_libs_store_useConfig = require("../../libs/store/useConfig.js");
const uni_modules_riceUi_libs_use_useNamespace_index = require("../../libs/use/useNamespace/index.js");
require("../../libs/use/useRelation/useChildren.js");
require("../../libs/use/useRelation/useParent.js");
const uni_modules_riceUi_libs_use_useSafeArea_index = require("../../libs/use/useSafeArea/index.js");
require("../../libs/use/useTouch/index.js");
const uni_modules_riceUi_libs_utils_basic = require("../../libs/utils/basic.js");
const uni_modules_riceUi_components_ricePicker_type = require("./type.js");
const uni_modules_riceUi_components_ricePicker_utils = require("./utils.js");
const uni_modules_riceUi_components_ricePicker_style = require("./style.js");
if (!Array) {
  const _easycom_rice_overlay_1 = common_vendor.resolveComponent("rice-overlay");
  const _easycom_rice_loading_1 = common_vendor.resolveComponent("rice-loading");
  const _easycom_rice_button_1 = common_vendor.resolveComponent("rice-button");
  (_easycom_rice_overlay_1 + _easycom_rice_loading_1 + _easycom_rice_button_1)();
}
const _easycom_rice_overlay = () => "../rice-overlay/rice-overlay.js";
const _easycom_rice_loading = () => "../rice-loading/rice-loading.js";
const _easycom_rice_button = () => "../rice-button/rice-button.js";
if (!Math) {
  (_easycom_rice_overlay + _easycom_rice_loading + _easycom_rice_button)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-picker",
  styleIsolation: "app-and-page"
}, { __name: "rice-picker", props: /* @__PURE__ */ common_vendor.mergeModels(new common_vendor.UTSJSONObject({
  columns: { default: () => {
    return [];
  } },
  toolbarPosition: { default: "bottom" },
  title: {},
  confirmButtonText: { default: "确定" },
  cancelButtonText: { default: "取消" },
  fontSize: {},
  optionHeight: { default: "50px" },
  visibleOptionNum: { default: 5 },
  closeOnClickOverlay: { type: Boolean, default: true },
  closeOnClickConfirm: { type: Boolean, default: true },
  closeOnClickCancel: { type: Boolean, default: true },
  loading: { type: Boolean, default: false },
  safeAreaInsetBottom: { type: Boolean, default: null },
  usePopup: { type: Boolean, default: true },
  immediateChange: { type: Boolean, default: true },
  zIndex: { default: 999 },
  emptyText: { default: "暂无数据" }
}), new common_vendor.UTSJSONObject({
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
})), emits: /* @__PURE__ */ common_vendor.mergeModels(["change", "confirm", "cancel", "open", "close", "opened", "closed"], ["update:modelValue", "update:show"]), setup(__props, _a) {
  var __emit = _a.emit;
  uni_modules_riceUi_libs_use_useSafeArea_index.useSafeArea();
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("picker");
  const slots = common_vendor.useSlots();
  const emit = __emit;
  const _b = uni_modules_riceUi_components_ricePicker_style.usePickerStyle(), maskTopStyle = _b.maskTopStyle, maskBottomStyle = _b.maskBottomStyle, maskStyle = _b.maskStyle;
  const props = __props;
  const modelValue = common_vendor.useModel(__props, "modelValue");
  const show = common_vendor.useModel(__props, "show");
  const pickerRef = common_vendor.shallowRef(null);
  const realShow = uni_modules_riceUi_libs_use_usePopup_index.usePopup(pickerRef, new uni_modules_riceUi_libs_use_usePopup_index.UsePopupOptions({
    zoom: null,
    zoomScale: null,
    beforeClose: null,
    show,
    duration: 300,
    position: "bottom",
    opacity: false
  })).realShow;
  const isShow = common_vendor.computed(() => {
    return props.usePopup ? realShow.value : true;
  });
  const initShow = common_vendor.ref(false);
  const showPicker = common_vendor.computed(() => {
    return initShow.value ? initShow.value : isShow.value;
  });
  const columnType = common_vendor.computed(() => {
    return uni_modules_riceUi_components_ricePicker_utils.getColumnsType(props.columns);
  });
  const cascadeColumns = common_vendor.ref([]);
  const selectedValue = common_vendor.ref([]);
  const selectedIndex = common_vendor.ref([]);
  const preSelectedIndex = common_vendor.ref([]);
  const currentColumns = common_vendor.computed(() => {
    return columnType.value == "cascade" ? cascadeColumns.value : props.columns;
  });
  const indicatorHeight = common_vendor.computed(() => {
    return uni_modules_riceUi_libs_utils_basic.getPxNum(props.optionHeight);
  });
  const hasConfirm = common_vendor.computed(() => {
    return uni_modules_riceUi_libs_utils_basic.hasStrValue(props.confirmButtonText);
  });
  const hasCancel = common_vendor.computed(() => {
    return uni_modules_riceUi_libs_utils_basic.hasStrValue(props.cancelButtonText);
  });
  const hasOptions = common_vendor.computed(() => {
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
      values.push(column[uni_modules_riceUi_components_ricePicker_utils.getFirstEnabledIndex(column)].value);
    }
    return values;
  };
  const getDefaultCascadeIndexes = () => {
    var _a2;
    const indexes = [];
    let children = props.columns.length > 0 ? props.columns[0] : null;
    while (children != null && children.length > 0) {
      const currentIndex = uni_modules_riceUi_components_ricePicker_utils.getFirstEnabledIndex(children);
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
        return uni_modules_riceUi_libs_utils_basic.isSameValue(option.value, currentValue);
      });
      const currentIndex = matchedIndex > -1 ? matchedIndex : 0;
      indexes.push(currentIndex);
      selectedValues.push(column[currentIndex].value);
    }
    return new uni_modules_riceUi_components_ricePicker_type.PickerCascadeState({
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
    return new uni_modules_riceUi_components_ricePicker_type.PickerEvent({
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
        return uni_modules_riceUi_libs_utils_basic.isSameValue(option.value, currentValue);
      });
      const currentIndex = matchedIndex > -1 ? matchedIndex : 0;
      const currentOption = children[currentIndex];
      indexes.push(currentIndex);
      selectedValues.push(currentOption.value);
      children = (_a2 = currentOption.children) !== null && _a2 !== void 0 ? _a2 : null;
      depth++;
    }
    while (depth < maxDepth) {
      columns.push([new uni_modules_riceUi_components_ricePicker_type.PickerOption({
        children: null,
        extend: null,
        text: "",
        value: "",
        disabled: true
      })]);
      indexes.push(0);
      depth++;
    }
    return new uni_modules_riceUi_components_ricePicker_type.PickerCascadeState({
      columns,
      selectedIndex: indexes,
      selectedValues
    });
  };
  const isTouch = common_vendor.ref(false);
  const onTouchstart = (e) => {
    isTouch.value = true;
  };
  const shouldInitWithDefaultValue = (values) => {
    return values.length == 0;
  };
  const syncCascadeState = (values, syncModel, fromPickerChange) => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      const sourceValues = shouldInitWithDefaultValue(values) ? getCascadeValuesByIndex(getDefaultCascadeIndexes()) : values;
      const state = getCascadeState(sourceValues);
      cascadeColumns.value = state.columns;
      selectedIndex.value = state.selectedIndex;
      selectedValue.value = state.selectedValues;
      preSelectedIndex.value = [...state.selectedIndex];
      if (syncModel && !uni_modules_riceUi_components_ricePicker_utils.isSameValueArr(modelValue.value, state.selectedValues) && isShow.value) {
        modelValue.value = [...state.selectedValues];
      }
    });
  };
  const syncPlainState = (values, syncModel, fromPickerChange) => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      const sourceValues = shouldInitWithDefaultValue(values) ? getDefaultPlainValues() : values;
      const state = getPlainState(sourceValues);
      selectedIndex.value = state.selectedIndex;
      selectedValue.value = state.selectedValues;
      preSelectedIndex.value = [...state.selectedIndex];
      if (syncModel && !uni_modules_riceUi_components_ricePicker_utils.isSameValueArr(modelValue.value, state.selectedValues) && isShow.value) {
        modelValue.value = [...state.selectedValues];
      }
    });
  };
  const init = () => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      if (props.columns.length == 0) {
        return Promise.resolve(null);
      }
      if (columnType.value == "cascade") {
        syncCascadeState(modelValue.value, true);
      } else {
        syncPlainState(modelValue.value, true);
      }
    });
  };
  common_vendor.watch(() => {
    return props.columns;
  }, () => {
    init();
  }, {
    deep: true
  });
  common_vendor.watch(() => {
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
  common_vendor.watch(isShow, (newVal) => {
    return common_vendor.__awaiter(this, void 0, void 0, function* () {
      if (newVal) {
        init();
        initShow.value = true;
      }
    });
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
    for (let i = 0; i < values.length; i++) {
      if (isNaN(values[i]))
        return null;
    }
    if (uni_modules_riceUi_components_ricePicker_utils.isSameIndexArray(values, selectedIndex.value)) {
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
  const hasTopBar = common_vendor.computed(() => {
    return props.toolbarPosition == "top" || uni_modules_riceUi_libs_utils_basic.hasStrValue(props.title);
  });
  const rootClass = common_vendor.computed(() => {
    return [
      ns.theme(),
      ns.is("popup", props.usePopup),
      ns.is("padding-top", slots["top"] == null && !hasTopBar.value)
    ];
  });
  const rootStyle = common_vendor.computed(() => {
    var _a2;
    const css = /* @__PURE__ */ new Map();
    if (props.usePopup) {
      css.set("z-index", props.zIndex);
    }
    const isSafeAreaInsetBottom = (_a2 = props.safeAreaInsetBottom) !== null && _a2 !== void 0 ? _a2 : props.usePopup;
    if (isSafeAreaInsetBottom) {
      css.set("padding-bottom", uni_modules_riceUi_libs_use_useSafeArea_index.safeAreaInsets.value.bottom + "px");
    }
    return css;
  });
  const pickerViewStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    const height = indicatorHeight.value * props.visibleOptionNum;
    css.set("height", `${height}px`);
    return css;
  });
  const indicatorBorderColor = common_vendor.computed(() => {
    return uni_modules_riceUi_libs_store_useConfig.isDark.value ? "#3a3a3c" : "#e5e5e5";
  });
  const indicatorStyle = common_vendor.computed(() => {
    const base = `height:${indicatorHeight.value}px;background-color: transparent;`;
    return base + `border-top:1rpx solid ${indicatorBorderColor.value};border-bottom:1rpx solid ${indicatorBorderColor.value}`;
  });
  const getOptionTextStyle = (option, index) => {
    const css = /* @__PURE__ */ new Map();
    css.set("height", `${indicatorHeight.value}px`);
    css.set("line-height", `${indicatorHeight.value}px`);
    if (props.fontSize != null) {
      css.set("font-size", uni_modules_riceUi_libs_utils_basic.addUnit(props.fontSize));
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
  const cancelButtonTextColor = common_vendor.computed(() => {
    return uni_modules_riceUi_libs_store_useConfig.isDark.value ? "#f5f5f5" : "var(--rice-primary-color)";
  });
  common_vendor.onUnmounted(() => {
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: _ctx.usePopup
    }, _ctx.usePopup ? {
      b: common_vendor.gei(_ctx, ""),
      c: common_vendor.o(($event) => {
        return show.value = $event;
      }, "34"),
      d: common_vendor.p({
        ["z-index"]: _ctx.zIndex - 1,
        ["close-on-click-overlay"]: _ctx.closeOnClickOverlay,
        duration: 300,
        show: show.value,
        id: common_vendor.gei(_ctx, ""),
        class: "data-v-1a2696a4"
      }),
      e: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    } : {}, {
      f: common_vendor.unref(showPicker)
    }, common_vendor.unref(showPicker) ? common_vendor.e({
      g: common_vendor.unref(hasTopBar)
    }, common_vendor.unref(hasTopBar) ? common_vendor.e({
      h: _ctx.toolbarPosition == "top"
    }, _ctx.toolbarPosition == "top" ? {
      i: common_vendor.t(_ctx.cancelButtonText),
      j: common_vendor.o(cancel, "cc")
    } : {}, {
      k: common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(_ctx.title)
    }, common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(_ctx.title) ? {
      l: common_vendor.t(_ctx.title)
    } : {}, {
      m: _ctx.toolbarPosition == "top"
    }, _ctx.toolbarPosition == "top" ? {
      n: common_vendor.t(_ctx.confirmButtonText),
      o: common_vendor.o(confirm, "93")
    } : {}) : {}, {
      p: common_vendor.unref(hasOptions)
    }, common_vendor.unref(hasOptions) ? {
      q: common_vendor.f(common_vendor.unref(currentColumns), (item, index, i0) => {
        return {
          a: common_vendor.f(item, (option, k1, i1) => {
            return {
              a: common_vendor.t(option.text),
              b: option.value,
              c: common_vendor.s(getOptionTextStyle(option, index))
            };
          }),
          b: index
        };
      }),
      r: common_vendor.s(common_vendor.unref(pickerViewStyle)),
      s: common_vendor.unref(indicatorStyle),
      t: common_vendor.unref(maskTopStyle),
      v: common_vendor.unref(maskBottomStyle),
      w: common_vendor.unref(maskStyle),
      x: _ctx.immediateChange,
      y: common_vendor.unref(selectedIndex),
      z: common_vendor.o(onPickerChange, "95"),
      A: common_vendor.o(onTouchstart, "4c")
    } : {}, {
      B: !common_vendor.unref(hasOptions)
    }, !common_vendor.unref(hasOptions) ? common_vendor.e({
      C: !_ctx.loading
    }, !_ctx.loading ? {
      D: common_vendor.t(_ctx.emptyText)
    } : {}, {
      E: common_vendor.s(common_vendor.unref(pickerViewStyle))
    }) : {}, {
      F: _ctx.loading
    }, _ctx.loading ? {
      G: common_vendor.p({
        class: "data-v-1a2696a4"
      }),
      H: common_vendor.s(common_vendor.unref(pickerViewStyle))
    } : {}, {
      I: _ctx.toolbarPosition == "bottom"
    }, _ctx.toolbarPosition == "bottom" ? common_vendor.e({
      J: common_vendor.unref(hasCancel)
    }, common_vendor.unref(hasCancel) ? {
      K: common_vendor.unref(hasConfirm) ? "15px" : "0px",
      L: common_vendor.o(cancel, "50"),
      M: common_vendor.p({
        width: common_vendor.unref(hasConfirm) ? "120px" : "185px",
        text: _ctx.cancelButtonText,
        color: common_vendor.unref(uni_modules_riceUi_libs_store_useConfig.isDark) ? "#2b2b2b" : "#f2f2f2",
        ["text-color"]: common_vendor.unref(cancelButtonTextColor),
        class: "data-v-1a2696a4",
        style: common_vendor.normalizeStyle({
          marginRight: common_vendor.unref(hasConfirm) ? "15px" : "0px"
        })
      })
    } : {}, {
      N: common_vendor.unref(hasConfirm)
    }, common_vendor.unref(hasConfirm) ? {
      O: common_vendor.o(confirm, "93"),
      P: common_vendor.p({
        width: common_vendor.unref(hasCancel) ? "120px" : "185px",
        text: _ctx.confirmButtonText,
        type: "primary",
        class: "data-v-1a2696a4"
      })
    } : {}) : {}, {
      Q: common_vendor.sei("r0-1a2696a4", "view", pickerRef, {
        "k": "pickerRef"
      }),
      R: common_vendor.n(common_vendor.unref(rootClass)),
      S: common_vendor.s(common_vendor.unref(rootStyle)),
      T: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      })
    }) : {});
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1a2696a4"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-picker/rice-picker.js.map
