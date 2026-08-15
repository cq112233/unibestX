import { _ as __easycom_0 } from "../up-toolbar/up-toolbar.js";
import { _ as __easycom_1 } from "../up-loading-icon/up-loading-icon.js";
import { _ as __easycom_2$1 } from "../up-popup/up-popup.js";
import { a as addUnit } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent, createSharedDataIf: _createSharedDataIf, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedDataStyle: _setSharedDataStyle, unref: _unref, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, setSharedDataAttr: _setSharedDataAttr, toSharedDataNumber: _toSharedDataNumber, createSharedDataFor: _createSharedDataFor } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpPickerUpPicker";
const { ref, computed, watch, nextTick } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-picker"
  },
  __dynamicSharedData: true,
  __hash: "79efea8b",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-picker/up-picker.uvue",
  __name: "up-picker",
  props: {
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
  },
  emits: ["close", "cancel", "confirm", "change", "update:modelValue"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpPickerUpPickerSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const lastIndex = ref([]);
    const innerIndex = ref([]);
    const innerColumns = ref([]);
    const columnIndex = ref(0);
    const showByClickInput = ref(false);
    const columnScrollTops = ref([]);
    const itemHeightNumber = computed(() => {
      const h = parseInt(props.itemHeight.toString());
      return isNaN(h) || h <= 0 ? 44 : h;
    });
    const visibleCountNumber = computed(() => {
      const c = parseInt(props.visibleItemCount.toString());
      return isNaN(c) || c <= 0 ? 5 : c;
    });
    const pickerViewHeight = computed(() => {
      return addUnit(visibleCountNumber.value * itemHeightNumber.value);
    });
    const indicatorTop = computed(() => {
      const topCount = Math.floor(visibleCountNumber.value / 2);
      return addUnit(topCount * itemHeightNumber.value);
    });
    const inputLabel = computed(() => {
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
    const inputValue = computed(() => {
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
    function isItemSelected(colIdx, itemIdx) {
      if (innerIndex.value.length > colIdx) {
        return innerIndex.value[colIdx] == itemIdx;
      }
      return itemIdx == 0;
    }
    function syncScrollPositions() {
      let tops = [];
      for (let i = 0; i < innerColumns.value.length; i++) {
        const idx = i < innerIndex.value.length ? innerIndex.value[i] : 0;
        tops.push(idx * itemHeightNumber.value);
      }
      columnScrollTops.value = tops;
    }
    function onColumnScroll(e, colIndex) {
      const scrollTop = e.detail.scrollTop;
      const targetIndex = Math.max(0, Math.min(innerColumns.value[colIndex].length - 1, Math.round(scrollTop / itemHeightNumber.value)));
      if (innerIndex.value.length > colIndex && innerIndex.value[colIndex] != targetIndex) {
        innerIndex.value[colIndex] = targetIndex;
        columnIndex.value = colIndex;
        notifyChange(colIndex, targetIndex);
      }
    }
    function onColumnTouchEnd(colIndex) {
      setTimeout(() => {
        if (innerIndex.value.length > colIndex) {
          const idx = innerIndex.value[colIndex];
          columnScrollTops.value[colIndex] = idx * itemHeightNumber.value;
        }
      }, 80);
    }
    function onItemClick(colIndex, itemIndex) {
      if (innerIndex.value.length > colIndex) {
        innerIndex.value[colIndex] = itemIndex;
        columnScrollTops.value[colIndex] = itemIndex * itemHeightNumber.value;
        columnIndex.value = colIndex;
        notifyChange(colIndex, itemIndex);
      }
    }
    function notifyChange(colIdx, changedItemIdx) {
      const values = innerColumns.value;
      setLastIndex(innerIndex.value);
      emit("update:modelValue", inputValue.value);
      let valueOrigin = [];
      innerColumns.value.map((item, index) => {
        const idx = index < innerIndex.value.length ? innerIndex.value[index] : 0;
        if (idx < item.length) {
          valueOrigin.push(item[idx]);
        }
      });
      emit("change", new UTSJSONObject({
        value: valueOrigin,
        index: changedItemIdx,
        indexs: innerIndex.value,
        values,
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
      emit("confirm", new UTSJSONObject({
        indexs: innerIndex.value,
        value: innerColumns.value.map((item, index) => {
          const idx = index < innerIndex.value.length ? innerIndex.value[index] : 0;
          return idx < item.length ? item[idx] : null;
        }),
        values: innerColumns.value
      }));
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
    function setLastIndex(index) {
      lastIndex.value = [...index];
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
      return innerColumns.value.map((item, index) => {
        const idx = index < innerIndex.value.length ? innerIndex.value[index] : 0;
        return idx < item.length ? item[idx] : null;
      });
    }
    watch(() => {
      return props.defaultIndex;
    }, (n) => {
      setIndexs(n, true);
    }, { immediate: true, deep: true });
    watch(() => {
      return props.columns;
    }, (n) => {
      setColumns(n);
    }, { immediate: true, deep: true });
    watch(() => {
      return props.show;
    }, (val) => {
      if (val) {
        setColumns(props.columns);
        nextTick(() => {
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
    return () => {
      "raw js";
      const _component_up_toolbar = __easycom_0;
      const _component_up_loading_icon = __easycom_1;
      const _component_up_popup = __easycom_2$1;
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(__props.hasInput));
      }, () => {
        _createSharedDataSlot("default", null, null, () => {
          _renderSharedDataEffect(() => {
            const _inputLabel = inputLabel.value;
            _setSharedData(__sharedData, 1, _toDisplayString(_inputLabel.length > 0 ? _inputLabel.join("/") : __props.placeholder));
          });
        });
        _setSharedDataEvent(__sharedData, 2, () => {
          return showByClickInput.value = !showByClickInput.value;
        });
      });
      const n32 = _createSharedDataComponentWithFallback(_component_up_popup, "93e0cbbc", {
        show: () => {
          return __props.pageInline || __props.show || __props.hasInput && showByClickInput.value;
        },
        mode: () => {
          return __props.popupMode;
        },
        pageInline: () => {
          return __props.pageInline;
        },
        onClose: () => {
          return closeHandler;
        }
      }, {
        "default": _withSharedDataVaporCtx(() => {
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 4, _toSharedDataBoolean(__props.showToolbar));
          }, () => {
            const n10 = _createSharedDataComponentWithFallback(_component_up_toolbar, "93e0bcae", {
              cancelColor: () => {
                return __props.cancelColor;
              },
              confirmColor: () => {
                return __props.confirmColor;
              },
              cancelText: () => {
                return __props.cancelText;
              },
              confirmText: () => {
                return __props.confirmText;
              },
              title: () => {
                return __props.title;
              },
              rightSlot: () => {
                return __props.toolbarRightSlot ? true : false;
              },
              onCancel: () => {
                return cancel;
              },
              onConfirm: () => {
                return confirm;
              }
            }, {
              "right": _withSharedDataVaporCtx(() => {
                _createSharedDataSlot("toolbar-right", null, null);
              })
            });
            _setSharedData(__sharedData, 5, n10?.sharedData);
          });
          _createSharedDataSlot("toolbar-bottom", null, null);
          _renderSharedDataEffect(() => {
            const _indicatorTop = indicatorTop.value;
            const __height_indicatorTop = { height: _indicatorTop };
            _setSharedDataStyle(__sharedData, 9, { height: pickerViewHeight.value });
            _setSharedDataStyle(__sharedData, 10, {
              top: _indicatorTop,
              height: _unref(addUnit)(__props.itemHeight)
            });
            _setSharedDataStyle(__sharedData, 11, __height_indicatorTop);
            _setSharedDataStyle(__sharedData, 12, __height_indicatorTop);
          });
          _createSharedDataFor(_setSharedDataScoped(__sharedData, 8, _createSharedDataVFor(__sharedDataScope, () => {
            return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
          })), () => {
            return innerColumns.value;
          }, (__sharedData_VFor0, _for_item0, _for_key0) => {
            _renderSharedDataEffect(() => {
              _setSharedDataAttr(__sharedData_VFor0, 4, _toSharedDataNumber(columnScrollTops.value[_for_key0.value]));
              _setSharedDataStyle(__sharedData_VFor0, 5, { height: indicatorTop.value });
            });
            _createSharedDataFor(_setSharedDataScoped(__sharedData_VFor0, 1, _createSharedDataVFor(__sharedDataScope, () => {
              return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 2 });
            })), () => {
              return _for_item0.value;
            }, (__sharedData_VFor1, _for_item1, _for_key1) => {
              _setSharedDataEvent(__sharedData_VFor1, 1, () => {
                return onItemClick(_for_key0.value, _for_key1.value);
              });
              _renderSharedDataEffect(() => {
                const _addUnit = _unref(addUnit);
                const _itemHeight = __props.itemHeight;
                const _isItemSelected = isItemSelected;
                const _colIndex = _for_key0.value;
                const _itemIndex = _for_key1.value;
                _setSharedDataStyle(__sharedData_VFor1, 2, { height: _addUnit(_itemHeight) });
                _setSharedDataStyle(__sharedData_VFor1, 3, {
                  lineHeight: _addUnit(_itemHeight),
                  color: _isItemSelected(_colIndex, _itemIndex) ? "#303133" : "#909399",
                  fontWeight: _isItemSelected(_colIndex, _itemIndex) ? "bold" : "normal",
                  fontSize: "16px"
                });
                _setSharedData(__sharedData_VFor1, 4, _toDisplayString(getItemText(_for_item1.value)));
              });
              return null;
            }, (__sharedData_VFor1, item, itemIndex) => {
              return _setSharedData(__sharedData_VFor1, 0, _toDisplayString(itemIndex));
            });
            _setSharedDataEvent(__sharedData_VFor0, 2, ($event) => {
              return onColumnScroll($event, _for_key0.value);
            });
            _setSharedDataEvent(__sharedData_VFor0, 3, () => {
              return onColumnTouchEnd(_for_key0.value);
            });
            _renderSharedDataEffect(() => {
              return _setSharedDataStyle(__sharedData_VFor0, 6, { height: indicatorTop.value });
            });
            return null;
          }, (__sharedData_VFor0, column, colIndex) => {
            return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(colIndex));
          }, 1);
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 6, _toSharedDataBoolean(__props.loading));
          }, () => {
            const n29 = _createSharedDataComponentWithFallback(_component_up_loading_icon, "0be3ab2e", { mode: "circle" });
            _setSharedData(__sharedData, 7, n29?.sharedData);
          });
        })
      });
      _setSharedData(__sharedData, 3, n32?.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-picker.js.map
