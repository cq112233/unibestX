"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_function_index = require("../../libs/function/index.js");
if (!Array) {
  const _easycom_up_toolbar_1 = common_vendor.resolveComponent("up-toolbar");
  const _easycom_up_loading_icon_1 = common_vendor.resolveComponent("up-loading-icon");
  const _easycom_up_popup_1 = common_vendor.resolveComponent("up-popup");
  (_easycom_up_toolbar_1 + _easycom_up_loading_icon_1 + _easycom_up_popup_1)();
}
const _easycom_up_toolbar = () => "../up-toolbar/up-toolbar.js";
const _easycom_up_loading_icon = () => "../up-loading-icon/up-loading-icon.js";
const _easycom_up_popup = () => "../up-popup/up-popup.js";
if (!Math) {
  (_easycom_up_toolbar + _easycom_up_loading_icon + _easycom_up_popup)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-picker"
}, { __name: "up-picker", props: {
  modelValue: {
    type: Array,
    default: () => {
      return [];
    }
  },
  hasInput: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: "请选择"
  },
  show: {
    type: Boolean,
    default: false
  },
  popupMode: {
    type: String,
    default: "bottom"
  },
  pageInline: {
    type: Boolean,
    default: false
  },
  showToolbar: {
    type: Boolean,
    default: true
  },
  toolbarRightSlot: {
    type: Boolean,
    default: false
  },
  toolbarBottomSlot: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ""
  },
  columns: {
    type: Array,
    default: () => {
      return [];
    }
  },
  loading: {
    type: Boolean,
    default: false
  },
  itemHeight: {
    type: [String, Number],
    default: 44
  },
  cancelText: {
    type: String,
    default: "取消"
  },
  confirmText: {
    type: String,
    default: "确定"
  },
  cancelColor: {
    type: String,
    default: "#909193"
  },
  confirmColor: {
    type: String,
    default: "#3c9cff"
  },
  visibleItemCount: {
    type: [String, Number],
    default: 5
  },
  keyName: {
    type: String,
    default: "text"
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: false
  },
  defaultIndex: {
    type: Array,
    default: () => {
      return [];
    }
  },
  immediateChange: {
    type: Boolean,
    default: true
  }
}, emits: ["close", "cancel", "confirm", "change", "update:modelValue"], setup(__props, _a) {
  var __expose = _a.expose, __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const lastIndex = common_vendor.ref([]);
  const innerIndex = common_vendor.ref([]);
  const innerColumns = common_vendor.ref([]);
  const columnIndex = common_vendor.ref(0);
  const showByClickInput = common_vendor.ref(false);
  const columnScrollTops = common_vendor.ref([]);
  const itemHeightNumber = common_vendor.computed(() => {
    const h = parseInt(props.itemHeight.toString());
    return isNaN(h) || h <= 0 ? 44 : h;
  });
  const visibleCountNumber = common_vendor.computed(() => {
    const c = parseInt(props.visibleItemCount.toString());
    return isNaN(c) || c <= 0 ? 5 : c;
  });
  const pickerViewHeight = common_vendor.computed(() => {
    return uni_modules_uviewUltra_libs_function_index.addUnit(visibleCountNumber.value * itemHeightNumber.value);
  });
  const indicatorTop = common_vendor.computed(() => {
    const topCount = Math.floor(visibleCountNumber.value / 2);
    return uni_modules_uviewUltra_libs_function_index.addUnit(topCount * itemHeightNumber.value);
  });
  const itemHeightUnit = common_vendor.computed(() => {
    return uni_modules_uviewUltra_libs_function_index.addUnit(itemHeightNumber.value);
  });
  common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      top: indicatorTop.value,
      height: itemHeightUnit.value
    });
  });
  common_vendor.computed(() => {
    return new common_vendor.UTSJSONObject({
      height: itemHeightUnit.value
    });
  });
  const inputLabel = common_vendor.computed(() => {
    let items = [];
    innerColumns.value.map((item, index) => {
      const idx = index < innerIndex.value.length ? innerIndex.value[index] : 0;
      if (idx < item.length) {
        items.push(item[idx]);
      }
    });
    let res = [];
    items.forEach((element = null) => {
      if (typeof element == "object" && element != null) {
        let ele1 = element[props.keyName];
        if (ele1 != null) {
          res.push(ele1.toString());
        }
      } else if (element != null) {
        res.push(element.toString());
      }
    });
    return res;
  });
  const inputValue = common_vendor.computed(() => {
    let items = [];
    innerColumns.value.map((item, index) => {
      const idx = index < innerIndex.value.length ? innerIndex.value[index] : 0;
      if (idx < item.length) {
        items.push(item[idx]);
      }
    });
    let res = [];
    items.forEach((element = null) => {
      if (typeof element == "object" && element != null) {
        let ele1 = element["id"];
        if (ele1 != null) {
          res.push(ele1.toString());
        }
      }
    });
    return res;
  });
  function getItemText(item = null) {
    if (typeof item == "object" && item != null) {
      let ele1 = item[props.keyName];
      if (ele1 != null) {
        return ele1.toString();
      }
      return "";
    }
    return item != null ? item.toString() : "";
  }
  function setLastIndex(index) {
    lastIndex.value = [...index];
  }
  function syncScrollPositions() {
    let tops = [];
    for (let i = 0; i < innerColumns.value.length; i++) {
      const idx = i < innerIndex.value.length ? innerIndex.value[i] : 0;
      tops.push(idx * itemHeightNumber.value);
    }
    columnScrollTops.value = tops;
  }
  function setIndexs(index = null, shouldSetLast) {
    if (index != null && index.length > 0) {
      innerIndex.value = [...index];
    } else {
      let newIndexes = [];
      for (let i = 0; i < innerColumns.value.length; i++) {
        newIndexes.push(0);
      }
      innerIndex.value = newIndexes;
    }
    if (shouldSetLast) {
      setLastIndex(innerIndex.value);
    }
    syncScrollPositions();
  }
  function changeHandler(e = null) {
    const val = e.detail.value;
    let index = 0;
    let colIdx = 0;
    for (let i = 0; i < val.length; i++) {
      const item = val[i];
      if (item != (i < lastIndex.value.length ? lastIndex.value[i] : 0)) {
        colIdx = i;
        index = item;
        break;
      }
    }
    columnIndex.value = colIdx;
    setLastIndex(val);
    setIndexs(val, false);
    emit("update:modelValue", inputValue.value);
    let valueOrigin = [];
    for (let i = 0; i < innerColumns.value.length; i++) {
      const col = innerColumns.value[i];
      const selectedIdx = i < val.length ? val[i] : 0;
      if (selectedIdx < col.length) {
        valueOrigin.push(col[selectedIdx]);
      }
    }
    emit("change", new common_vendor.UTSJSONObject({
      value: valueOrigin,
      index,
      indexs: val,
      values: innerColumns.value,
      columnIndex: colIdx
    }));
  }
  function closeHandler() {
    if (props.closeOnClickOverlay) {
      if (props.hasInput) {
        showByClickInput.value = false;
      }
      emit("close");
    }
  }
  function cancel() {
    if (props.hasInput) {
      showByClickInput.value = false;
    }
    emit("cancel");
  }
  function confirm() {
    emit("update:modelValue", inputValue.value);
    if (props.hasInput) {
      showByClickInput.value = false;
    }
    let confirmValues = [];
    for (let index = 0; index < innerColumns.value.length; index++) {
      const item = innerColumns.value[index];
      const idx = index < innerIndex.value.length ? innerIndex.value[index] : 0;
      if (idx < item.length) {
        confirmValues.push(item[idx]);
      }
    }
    emit("confirm", new common_vendor.UTSJSONObject({
      indexs: innerIndex.value,
      value: confirmValues,
      values: innerColumns.value
    }));
  }
  function setColumnValues(colIdx, values) {
    innerColumns.value.splice(colIdx, 1, values);
    setLastIndex(innerIndex.value.slice(0, colIdx));
    let tmpIndex = [...innerIndex.value];
    for (let i = 0; i < innerColumns.value.length; i++) {
      if (i > columnIndex.value) {
        tmpIndex[i] = 0;
      }
    }
    setIndexs(tmpIndex, false);
  }
  function getColumnValues(colIdx) {
    return innerColumns.value[colIdx];
  }
  function setColumns(cols) {
    innerColumns.value = cols;
    let newIndexes = [];
    for (let i = 0; i < cols.length; i++) {
      if (props.defaultIndex.length > i) {
        newIndexes.push(props.defaultIndex[i]);
      } else if (innerIndex.value.length > i) {
        newIndexes.push(innerIndex.value[i]);
      } else {
        newIndexes.push(0);
      }
    }
    innerIndex.value = newIndexes;
    setLastIndex(newIndexes);
    syncScrollPositions();
  }
  function getIndexs() {
    return innerIndex.value;
  }
  function getValues() {
    let res = [];
    for (let index = 0; index < innerColumns.value.length; index++) {
      const item = innerColumns.value[index];
      const idx = index < innerIndex.value.length ? innerIndex.value[index] : 0;
      if (idx < item.length) {
        res.push(item[idx]);
      }
    }
    return res;
  }
  common_vendor.watch(() => {
    return props.defaultIndex;
  }, (n) => {
    setIndexs(n, true);
  }, { immediate: true, deep: true });
  common_vendor.watch(() => {
    return props.columns;
  }, (n) => {
    setColumns(n);
  }, { immediate: true, deep: true });
  common_vendor.watch(() => {
    return props.show;
  }, (val) => {
    if (val) {
      setColumns(props.columns);
      common_vendor.nextTick$1(() => {
        syncScrollPositions();
      });
    }
  });
  __expose({
    setIndexs,
    setLastIndex,
    setColumnValues,
    getColumnValues,
    setColumns,
    getIndexs,
    getValues
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: __props.hasInput
    }, __props.hasInput ? {
      b: common_vendor.t(inputLabel.value.length > 0 ? inputLabel.value.join("/") : __props.placeholder),
      c: common_vendor.o(($event) => {
        return showByClickInput.value = !showByClickInput.value;
      }, "66")
    } : {}, {
      d: __props.showToolbar
    }, __props.showToolbar ? {
      e: common_vendor.o(cancel, "3f"),
      f: common_vendor.o(confirm, "70"),
      g: common_vendor.p({
        cancelColor: __props.cancelColor,
        confirmColor: __props.confirmColor,
        cancelText: __props.cancelText,
        confirmText: __props.confirmText,
        title: __props.title,
        rightSlot: __props.toolbarRightSlot ? true : false,
        class: "data-v-4aec16d9"
      })
    } : {}, {
      h: __props.toolbarBottomSlot
    }, __props.toolbarBottomSlot ? {} : {}, {
      i: common_vendor.f(innerColumns.value, (column, colIndex, i0) => {
        return {
          a: common_vendor.f(column, (item, itemIndex, i1) => {
            return {
              a: common_vendor.t(getItemText(item)),
              b: innerIndex.value.length > colIndex && itemIndex == innerIndex.value[colIndex] ? "#303133" : "#606266",
              c: innerIndex.value.length > colIndex && itemIndex == innerIndex.value[colIndex] ? "bold" : "normal",
              d: itemIndex
            };
          }),
          b: colIndex
        };
      }),
      j: itemHeightUnit.value,
      k: itemHeightUnit.value,
      l: `height: ${itemHeightUnit.value}`,
      m: innerIndex.value,
      n: __props.immediateChange,
      o: pickerViewHeight.value,
      p: common_vendor.o(changeHandler, "48"),
      q: __props.loading
    }, __props.loading ? {
      r: common_vendor.p({
        mode: "circle",
        class: "data-v-4aec16d9"
      })
    } : {}, {
      s: common_vendor.o(closeHandler, "8d"),
      t: common_vendor.p({
        show: __props.pageInline || __props.show || __props.hasInput && showByClickInput.value,
        mode: __props.popupMode,
        pageInline: __props.pageInline,
        class: "data-v-4aec16d9"
      }),
      v: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      w: `${_ctx.u_s_b_h}px`,
      x: `${_ctx.u_s_a_i_b}px`,
      y: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4aec16d9"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-picker/up-picker.js.map
