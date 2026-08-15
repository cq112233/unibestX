import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-toolbar/up-toolbar&";
import { _ as __easycom_1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon&";
import { _ as __easycom_2$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-popup/up-popup&";
import { a as addUnit } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { a as array } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/test&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent, createSharedDataIf: _createSharedDataIf, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, unref: _unref, setSharedDataStyle: _setSharedDataStyle, createSharedDataFor: _createSharedDataFor } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpPickerUpPicker";
const { ref, computed, watch } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-picker"
  },
  __dynamicSharedData: true,
  __hash: "4a770ae8",
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
    const pickerViewHeight = computed(() => {
      let tmp = parseInt(props.visibleItemCount.toString()) * parseInt(props.itemHeight.toString());
      return addUnit(tmp);
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
        if (typeof element == "object") {
          let eleObj = element;
          if (eleObj[props.keyName] != null) {
            res.push(eleObj[props.keyName].toString());
          }
        } else {
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
        if (typeof element == "string") {
          res.push(element.toString());
        } else {
          let ele1 = element["id"];
          if (ele1 != null) {
            res.push(ele1);
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
    function changeHandler(e) {
      const value = e.detail.value;
      let changedIndex = 0;
      let curColIndex = 0;
      for (let i = 0; i < value.length; i++) {
        let item = value[i];
        if (item !== (i < lastIndex.value.length ? lastIndex.value[i] : 0)) {
          curColIndex = i;
          changedIndex = item;
          break;
        }
      }
      columnIndex.value = curColIndex;
      const values = innerColumns.value;
      setLastIndex(value);
      setIndexs(value, false);
      emit("update:modelValue", inputValue.value);
      let valueOrigin = [];
      innerColumns.value.map((item, index) => {
        const idx = index < value.length ? value[index] : 0;
        if (idx < item.length) {
          valueOrigin.push(item[idx]);
        }
      });
      emit("change", new UTSJSONObject({
        value: valueOrigin,
        index: changedIndex,
        indexs: value,
        values,
        columnIndex: curColIndex
      }));
    }
    function setIndexs(index = null, shouldSetLast) {
      innerIndex.value = index != null ? [...index] : [];
      if (shouldSetLast) {
        setLastIndex(innerIndex.value);
      }
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
      if (innerIndex.value.length == 0) {
        innerIndex.value = new Array(cols.length).fill(0);
      }
    }
    function getIndexs() {
      return innerIndex.value;
    }
    function getValues() {
      let res = [];
      innerColumns.value.forEach((item, index) => {
        const idx = index < innerIndex.value.length ? innerIndex.value[index] : 0;
        if (idx < item.length) {
          res.push(item[idx]);
        }
      });
      return res;
    }
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
      const _component_picker_view_column = _resolveComponent("picker-view-column");
      const _component_picker_view = _resolveComponent("picker-view");
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
      const n27 = _createSharedDataComponentWithFallback(_component_up_popup, "93e0cbb8", {
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
            const n10 = _createSharedDataComponentWithFallback(_component_up_toolbar, "93e0bd28", {
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
          const n21 = _createSharedDataComponentWithFallback(_component_picker_view, "93e09e68", {
            class: "up-picker__view",
            indicatorStyle: () => {
              return `height: ${_unref(addUnit)(__props.itemHeight)}`;
            },
            value: () => {
              return innerIndex.value;
            },
            immediateChange: () => {
              return __props.immediateChange;
            },
            style: () => {
              return {
                height: pickerViewHeight.value
              };
            },
            onChange: () => {
              return changeHandler;
            }
          }, {
            "default": _withSharedDataVaporCtx(() => {
              _createSharedDataFor(_setSharedDataScoped(__sharedData, 7, _createSharedDataVFor(__sharedDataScope, () => {
                return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
              })), () => {
                return innerColumns.value;
              }, (__sharedData_VFor0, _for_item0, _for_key0) => {
                const n20 = _createSharedDataComponentWithFallback(_component_picker_view_column, "0be2bee8-" + _for_key0.value, { class: "up-picker__view__column" }, {
                  "default": () => {
                    _createSharedDataIf(() => {
                      return _setSharedData(__sharedData_VFor0, 2, _toSharedDataBoolean(_unref(array)(_for_item0.value)));
                    }, () => {
                      _createSharedDataFor(_setSharedDataScoped(__sharedData_VFor0, 3, _createSharedDataVFor(__sharedDataScope, () => {
                        return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 2 });
                      })), () => {
                        return _for_item0.value;
                      }, (__sharedData_VFor1, _for_item1, _for_key1) => {
                        _renderSharedDataEffect(() => {
                          const _addUnit = _unref(addUnit);
                          const _itemHeight = __props.itemHeight;
                          const _innerIndex = innerIndex.value;
                          const _index = _for_key0.value;
                          _setSharedDataStyle(__sharedData_VFor1, 1, {
                            height: _addUnit(_itemHeight)
                          });
                          _setSharedDataStyle(__sharedData_VFor1, 2, {
                            lineHeight: _addUnit(_itemHeight),
                            fontWeight: _innerIndex.length - 1 >= _index && _for_key1.value === _innerIndex[_index] ? "bold" : "normal"
                          });
                          _setSharedData(__sharedData_VFor1, 3, _toDisplayString(getItemText(_for_item1.value)));
                        });
                        return null;
                      }, (__sharedData_VFor1, item1, index1) => {
                        return _setSharedData(__sharedData_VFor1, 0, _toDisplayString(index1));
                      }, 32);
                    }, null, 129);
                  }
                });
                _setSharedData(__sharedData_VFor0, 1, n20?.sharedData);
                return n20;
              }, (__sharedData_VFor0, item, index) => {
                return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
              }, 34);
            })
          });
          _setSharedData(__sharedData, 6, n21?.sharedData);
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 8, _toSharedDataBoolean(__props.loading));
          }, () => {
            const n24 = _createSharedDataComponentWithFallback(_component_up_loading_icon, "0be2dc97", { mode: "circle" });
            _setSharedData(__sharedData, 9, n24?.sharedData);
          });
        })
      });
      _setSharedData(__sharedData, 3, n27?.sharedData);
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
