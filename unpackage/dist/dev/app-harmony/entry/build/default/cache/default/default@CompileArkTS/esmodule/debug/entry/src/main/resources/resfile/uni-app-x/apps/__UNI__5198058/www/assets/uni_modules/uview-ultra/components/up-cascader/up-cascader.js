import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-steps-item/up-steps-item&";
import { _ as __easycom_1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-steps/up-steps&";
import { _ as __easycom_1$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-tabs/up-tabs&";
import { _ as __easycom_1$2 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
import { _ as __easycom_2 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-cell/up-cell&";
import { _ as __easycom_3$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-cell-group/up-cell-group&";
import { _ as __easycom_3$2 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-button/up-button&";
import { _ as __easycom_4 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-popup/up-popup&";
import { t } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/i18n/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, toDisplayString: _toDisplayString, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataFor: _createSharedDataFor, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataIf: _createSharedDataIf, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpCascaderUpCascader";
const { ref, computed, watch } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-cascader"
  },
  __dynamicSharedData: true,
  __hash: "1b09434b",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-cascader/up-cascader.uvue",
  __name: "up-cascader",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: () => {
        return [];
      }
    },
    modelValue: {
      type: Array,
      default: () => {
        return [];
      }
    },
    valueKey: {
      type: String,
      default: "value"
    },
    labelKey: {
      type: String,
      default: "label"
    },
    childrenKey: {
      type: String,
      default: "children"
    },
    maskCloseAble: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: [String, Number],
      default: 0
    },
    autoClose: {
      type: Boolean,
      default: false
    },
    headerDirection: {
      type: String,
      default: "row"
    },
    optionsCols: {
      type: Number,
      default: 2
    },
    closeable: {
      type: Boolean,
      default: true
    }
  },
  emits: ["update:modelValue", "update:show", "change", "confirm", "cancel"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpCascaderUpCascaderSharedData", sharedDataClassId: 0 })));
    function toText(value = null) {
      return value == null ? "" : value.toString();
    }
    function sameValue(left = null, right = null) {
      return toText(left) == toText(right);
    }
    function emptyObjectList() {
      return [];
    }
    const props = __props;
    const emit = __emit;
    const levelList = ref([]);
    const selectedValueIndexs = ref([]);
    const tabsIndex = ref(0);
    const popupShow = ref(props.show);
    const confirmValues = ref([]);
    const isChange = computed(() => {
      return tabsIndex.value > 1;
    });
    const levelWrapStyle = computed(() => {
      if (props.optionsCols == 2 && isChange.value) {
        return "transform: translateX(-33.3333333%)";
      }
      return "";
    });
    const cancelText = computed(() => {
      return t("up.common.cancel");
    });
    const confirmText = computed(() => {
      return t("up.common.confirm");
    });
    const placeholderText = computed(() => {
      return t("up.common.pleaseChoose");
    });
    const uZIndex = computed(() => {
      if (typeof props.zIndex == "number" && props.zIndex > 0) {
        return props.zIndex;
      }
      const parsed = parseInt(toText(props.zIndex));
      return isNaN(parsed) || parsed <= 0 ? 1075 : parsed;
    });
    function getAreaItemStyle() {
      return props.optionsCols == 2 ? "width:33.33333%" : "width:750rpx";
    }
    function getDataList() {
      return props.data;
    }
    function getChildren(item) {
      const children = item[props.childrenKey];
      if (children != null && Array.isArray(children))
        return children;
      return emptyObjectList();
    }
    function getItemLabel(item) {
      return toText(item[props.labelKey]);
    }
    function getItemValue(item) {
      return item[props.valueKey];
    }
    function getTabName(item) {
      return toText(item["name"]);
    }
    function isSelected(levelIndex, index) {
      if (levelIndex < 0 || levelIndex >= selectedValueIndexs.value.length)
        return false;
      return selectedValueIndexs.value[levelIndex] == index;
    }
    function canShowLevel(levelIndex) {
      return levelIndex == 0 || selectedValueIndexs.value.length >= levelIndex;
    }
    function stepClick(index) {
      tabsIndex.value = index;
    }
    const genTabsList = computed(() => {
      const tabsList = [];
      const levelCount = Math.min(selectedValueIndexs.value.length, levelList.value.length);
      for (let i = 0; i < levelCount; i++) {
        const selectedIndex = selectedValueIndexs.value[i];
        const levelData = levelList.value[i];
        if (selectedIndex < 0 || selectedIndex >= levelData.length) {
          tabsList.push(new UTSJSONObject({ name: placeholderText.value }));
          continue;
        }
        const selectedItem = levelData[selectedIndex];
        tabsList.push(new UTSJSONObject({ name: getItemLabel(selectedItem) }));
        if (i == selectedValueIndexs.value.length - 1) {
          const children = getChildren(selectedItem);
          if (children.length > 0) {
            tabsList.push(new UTSJSONObject({ name: placeholderText.value }));
          }
        }
      }
      if (tabsList.length == 0) {
        tabsList.push(new UTSJSONObject({ name: placeholderText.value }));
      }
      return tabsList;
    });
    function getSelectedValues() {
      const result = [];
      for (let i = 0; i < selectedValueIndexs.value.length; i++) {
        if (i >= levelList.value.length)
          break;
        const selectedIndex = selectedValueIndexs.value[i];
        const levelData = levelList.value[i];
        if (selectedIndex < 0 || selectedIndex >= levelData.length)
          continue;
        const val = getItemValue(levelData[selectedIndex]);
        if (val != null)
          result.push(val);
      }
      return result;
    }
    function findValueIndex(list, val = null) {
      for (let i = 0; i < list.length; i++) {
        if (sameValue(getItemValue(list[i]), val))
          return i;
      }
      return -1;
    }
    function initLevelList() {
      const list = getDataList();
      levelList.value = list.length > 0 ? [list] : [];
      selectedValueIndexs.value = [];
      tabsIndex.value = 0;
      confirmValues.value = [];
    }
    function setDefaultValue() {
      const values = props.modelValue;
      const root = getDataList();
      selectedValueIndexs.value = [];
      levelList.value = root.length > 0 ? [root] : [];
      if (values.length == 0 || root.length == 0) {
        confirmValues.value = [];
        tabsIndex.value = 0;
        return null;
      }
      const nextLevels = [root];
      const nextIndexs = [];
      let currentLevelData = root;
      for (let i = 0; i < values.length; i++) {
        const index = findValueIndex(currentLevelData, values[i]);
        if (index == -1)
          break;
        nextIndexs.push(index);
        const children = getChildren(currentLevelData[index]);
        if (children.length == 0)
          break;
        currentLevelData = children;
        if (i < values.length - 1) {
          nextLevels.push(children);
        }
      }
      levelList.value = nextLevels;
      selectedValueIndexs.value = nextIndexs;
      confirmValues.value = getSelectedValues();
      tabsIndex.value = selectedValueIndexs.value.length > 0 ? selectedValueIndexs.value.length - 1 : 0;
    }
    function close() {
      emit("cancel");
      emit("update:show", false);
      popupShow.value = false;
    }
    function tabsChange(item) {
      const index = parseInt(toText(item["index"]));
      if (!isNaN(index)) {
        tabsIndex.value = index;
      }
    }
    function handleConfirm() {
      const values = confirmValues.value.length > 0 ? confirmValues.value : getSelectedValues();
      confirmValues.value = values;
      emit("update:modelValue", values);
      emit("confirm", values);
      emit("update:show", false);
      popupShow.value = false;
    }
    function levelChange(levelIndex, index) {
      if (levelIndex < 0 || levelIndex >= levelList.value.length)
        return null;
      const levelData = levelList.value[levelIndex];
      if (index < 0 || index >= levelData.length)
        return null;
      const nextIndexs = [];
      for (let i = 0; i < levelIndex; i++) {
        nextIndexs.push(selectedValueIndexs.value[i]);
      }
      nextIndexs.push(index);
      selectedValueIndexs.value = nextIndexs;
      const nextLevels = [];
      for (let i = 0; i <= levelIndex; i++) {
        nextLevels.push(levelList.value[i]);
      }
      const currentItem = levelData[index];
      const children = getChildren(currentItem);
      if (children.length > 0) {
        nextLevels.push(children);
        tabsIndex.value = levelIndex + 1;
      } else {
        tabsIndex.value = levelIndex;
      }
      levelList.value = nextLevels;
      confirmValues.value = getSelectedValues();
      emit("change", confirmValues.value);
      if (children.length == 0 && props.autoClose) {
        handleConfirm();
      }
    }
    function handleCancel() {
      close();
    }
    watch(() => {
      return props.data;
    }, () => {
      initLevelList();
      setDefaultValue();
    }, { deep: true, immediate: true });
    watch(() => {
      return props.show;
    }, (newVal) => {
      popupShow.value = newVal;
    });
    watch(() => {
      return props.modelValue;
    }, () => {
      setDefaultValue();
    }, { deep: true, immediate: true });
    return () => {
      "raw js";
      const _component_up_steps_item = __easycom_0;
      const _component_up_steps = __easycom_1;
      const _component_up_tabs = __easycom_1$1;
      const _component_up_icon = __easycom_1$2;
      const _component_up_cell = __easycom_2;
      const _component_up_cell_group = __easycom_3$1;
      const _component_up_button = __easycom_3$2;
      const _component_up_popup = __easycom_4;
      const n40 = _createSharedDataComponentWithFallback(
        _component_up_popup,
        "4d7a8803",
        {
          show: () => {
            return popupShow.value;
          },
          mode: "bottom",
          overlay: true,
          closeable: () => {
            return __props.closeable;
          },
          safeAreaInsetBottom: true,
          zIndex: () => {
            return uZIndex.value;
          },
          closeOnClickOverlay: () => {
            return __props.maskCloseAble;
          },
          onClose: () => {
            return close;
          }
        },
        {
          "default": _withSharedDataVaporCtx(() => {
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 1, _toSharedDataBoolean(__props.headerDirection == "column"));
            }, () => {
              _createSharedDataIf(() => {
                return _setSharedData(__sharedData, 2, _toSharedDataBoolean(popupShow.value));
              }, () => {
                const n7 = _createSharedDataComponentWithFallback(_component_up_steps, "4e0ec5f2", {
                  dot: "",
                  direction: "column",
                  current: () => {
                    return tabsIndex.value;
                  }
                }, {
                  "default": _withSharedDataVaporCtx(() => {
                    _createSharedDataFor(_setSharedDataScoped(__sharedData, 4, _createSharedDataVFor(__sharedDataScope, () => {
                      return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
                    })), () => {
                      return genTabsList.value;
                    }, (__sharedData_VFor0, _for_item0, _for_key0) => {
                      const _on_click = () => {
                        return stepClick(_for_key0.value);
                      };
                      const n6 = _createSharedDataComponentWithFallback(_component_up_steps_item, "4e0ec434-" + _for_key0.value, {
                        index: () => {
                          return _for_key0.value;
                        },
                        title: () => {
                          return getTabName(_for_item0.value);
                        },
                        onClick: () => {
                          return _on_click;
                        }
                      });
                      _setSharedData(__sharedData_VFor0, 1, n6?.sharedData);
                      return n6;
                    }, (__sharedData_VFor0, item, index) => {
                      return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
                    }, 34);
                  })
                });
                _setSharedData(__sharedData, 3, n7?.sharedData);
              });
            }, () => {
              _createSharedDataIf(() => {
                return _setSharedData(__sharedData, 5, _toSharedDataBoolean(popupShow.value));
              }, () => {
                const n12 = _createSharedDataComponentWithFallback(_component_up_tabs, "4e0eae32", {
                  list: () => {
                    return genTabsList.value;
                  },
                  scrollable: true,
                  current: () => {
                    return tabsIndex.value;
                  },
                  "onUpdate:current": () => {
                    return (_value) => {
                      return tabsIndex.value = _value;
                    };
                  },
                  onChange: () => {
                    return tabsChange;
                  }
                });
                _setSharedData(__sharedData, 6, n12?.sharedData);
              });
            }, 645);
            _renderSharedDataEffect(() => {
              _setSharedDataClass(__sharedData, 11, ["area-box__levels", { "change": isChange.value }]);
              _setSharedDataStyle(__sharedData, 12, levelWrapStyle.value);
            });
            _createSharedDataFor(_setSharedDataScoped(__sharedData, 7, _createSharedDataVFor(__sharedDataScope, () => {
              return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 2 });
            })), () => {
              return levelList.value;
            }, (__sharedData_VFor1, _for_item1, _for_key1) => {
              _createSharedDataIf(() => {
                return _setSharedData(__sharedData_VFor1, 1, _toSharedDataBoolean(__props.optionsCols == 2 || _for_key1.value == tabsIndex.value));
              }, () => {
                _renderSharedDataEffect(() => {
                  return _setSharedDataStyle(__sharedData_VFor1, 5, getAreaItemStyle());
                });
                _createSharedDataIf(() => {
                  return _setSharedData(__sharedData_VFor1, 2, _toSharedDataBoolean(canShowLevel(_for_key1.value)));
                }, () => {
                  const n28 = _createSharedDataComponentWithFallback(_component_up_cell_group, "461a2311-" + _for_key1.value, null, {
                    "default": _withSharedDataVaporCtx(() => {
                      _createSharedDataFor(_setSharedDataScoped(__sharedData_VFor1, 4, _createSharedDataVFor(__sharedDataScope, () => {
                        return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 3 });
                      })), () => {
                        return _for_item1.value;
                      }, (__sharedData_VFor2, _for_item2, _for_key2) => {
                        const _on_click1 = () => {
                          return levelChange(_for_key1.value, _for_key2.value);
                        };
                        const n27 = _createSharedDataComponentWithFallback(_component_up_cell, "461a2653-" + _for_key2.value, {
                          title: () => {
                            return getItemLabel(_for_item2.value);
                          },
                          onClick: () => {
                            return _on_click1;
                          }
                        }, {
                          "right-icon": _withSharedDataVaporCtx(() => {
                            _createSharedDataIf(() => {
                              return _setSharedData(__sharedData_VFor2, 2, _toSharedDataBoolean(isSelected(_for_key1.value, _for_key2.value)));
                            }, () => {
                              const n25 = _createSharedDataComponentWithFallback(_component_up_icon, "461a2e13-" + _for_key2.value, {
                                size: "17",
                                name: "checkbox-mark"
                              });
                              _setSharedData(__sharedData_VFor2, 3, n25?.sharedData);
                            }, null, 129);
                          })
                        });
                        _setSharedData(__sharedData_VFor2, 1, n27?.sharedData);
                        return n27;
                      }, (__sharedData_VFor2, item, index) => {
                        return _setSharedData(__sharedData_VFor2, 0, _toDisplayString(index));
                      }, 34);
                    })
                  });
                  _setSharedData(__sharedData_VFor1, 3, n28?.sharedData);
                });
              }, null, 10);
              return null;
            }, (__sharedData_VFor1, levelData, levelIndex) => {
              return _setSharedData(__sharedData_VFor1, 0, _toDisplayString(levelIndex));
            }, 1);
            const n35 = _createSharedDataComponentWithFallback(_component_up_button, "461a3cbb", {
              onClick: () => {
                return handleCancel;
              },
              type: "default",
              customStyle: { backgroundColor: "#f5f6f7" }
            }, {
              "default": () => {
                _renderSharedDataEffect(() => {
                  return _setSharedData(__sharedData, 9, _toDisplayString(cancelText.value));
                });
              }
            });
            _setSharedData(__sharedData, 8, n35?.sharedData);
            const n37 = _createSharedDataComponentWithFallback(_component_up_button, "461a93d0", {
              onClick: () => {
                return handleConfirm;
              },
              type: "primary",
              text: () => {
                return confirmText.value;
              }
            });
            _setSharedData(__sharedData, 10, n37?.sharedData);
          })
        },
        1
        /* SINGLE_ROOT */
      );
      _setSharedData(__sharedData, 0, n40?.sharedData);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_3 as _
};
//# sourceMappingURL=up-cascader.js.map
