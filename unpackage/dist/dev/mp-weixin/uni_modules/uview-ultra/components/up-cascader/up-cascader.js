"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewUltra_libs_i18n_index = require("../../libs/i18n/index.js");
if (!Array) {
  const _easycom_up_steps_item_1 = common_vendor.resolveComponent("up-steps-item");
  const _easycom_up_steps_1 = common_vendor.resolveComponent("up-steps");
  const _easycom_up_tabs_1 = common_vendor.resolveComponent("up-tabs");
  const _easycom_up_icon_1 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_cell_1 = common_vendor.resolveComponent("up-cell");
  const _easycom_up_cell_group_1 = common_vendor.resolveComponent("up-cell-group");
  const _easycom_up_button_1 = common_vendor.resolveComponent("up-button");
  const _easycom_up_popup_1 = common_vendor.resolveComponent("up-popup");
  (_easycom_up_steps_item_1 + _easycom_up_steps_1 + _easycom_up_tabs_1 + _easycom_up_icon_1 + _easycom_up_cell_1 + _easycom_up_cell_group_1 + _easycom_up_button_1 + _easycom_up_popup_1)();
}
const _easycom_up_steps_item = () => "../up-steps-item/up-steps-item.js";
const _easycom_up_steps = () => "../up-steps/up-steps.js";
const _easycom_up_tabs = () => "../up-tabs/up-tabs.js";
const _easycom_up_icon = () => "../up-icon/up-icon.js";
const _easycom_up_cell = () => "../up-cell/up-cell.js";
const _easycom_up_cell_group = () => "../up-cell-group/up-cell-group.js";
const _easycom_up_button = () => "../up-button/up-button.js";
const _easycom_up_popup = () => "../up-popup/up-popup.js";
if (!Math) {
  (_easycom_up_steps_item + _easycom_up_steps + _easycom_up_tabs + _easycom_up_icon + _easycom_up_cell + _easycom_up_cell_group + _easycom_up_button + _easycom_up_popup)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "up-cascader"
}, { __name: "up-cascader", props: {
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
}, emits: ["update:modelValue", "update:show", "change", "confirm", "cancel"], setup(__props, _a) {
  var __emit = _a.emit;
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
  const levelList = common_vendor.ref([]);
  const selectedValueIndexs = common_vendor.ref([]);
  const tabsIndex = common_vendor.ref(0);
  const popupShow = common_vendor.ref(props.show);
  const confirmValues = common_vendor.ref([]);
  const isChange = common_vendor.computed(() => {
    return tabsIndex.value > 1;
  });
  const levelWrapStyle = common_vendor.computed(() => {
    if (props.optionsCols == 2 && isChange.value) {
      return "transform: translateX(-33.3333333%)";
    }
    return "";
  });
  const cancelText = common_vendor.computed(() => {
    return uni_modules_uviewUltra_libs_i18n_index.t("up.common.cancel");
  });
  const confirmText = common_vendor.computed(() => {
    return uni_modules_uviewUltra_libs_i18n_index.t("up.common.confirm");
  });
  const placeholderText = common_vendor.computed(() => {
    return uni_modules_uviewUltra_libs_i18n_index.t("up.common.pleaseChoose");
  });
  const uZIndex = common_vendor.computed(() => {
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
  const genTabsList = common_vendor.computed(() => {
    const tabsList = [];
    const levelCount = Math.min(selectedValueIndexs.value.length, levelList.value.length);
    for (let i = 0; i < levelCount; i++) {
      const selectedIndex = selectedValueIndexs.value[i];
      const levelData = levelList.value[i];
      if (selectedIndex < 0 || selectedIndex >= levelData.length) {
        tabsList.push(new common_vendor.UTSJSONObject({ name: placeholderText.value }));
        continue;
      }
      const selectedItem = levelData[selectedIndex];
      tabsList.push(new common_vendor.UTSJSONObject({ name: getItemLabel(selectedItem) }));
      if (i == selectedValueIndexs.value.length - 1) {
        const children = getChildren(selectedItem);
        if (children.length > 0) {
          tabsList.push(new common_vendor.UTSJSONObject({ name: placeholderText.value }));
        }
      }
    }
    if (tabsList.length == 0) {
      tabsList.push(new common_vendor.UTSJSONObject({ name: placeholderText.value }));
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
  common_vendor.watch(() => {
    return props.data;
  }, () => {
    initLevelList();
    setDefaultValue();
  }, { deep: true, immediate: true });
  common_vendor.watch(() => {
    return props.show;
  }, (newVal) => {
    popupShow.value = newVal;
  });
  common_vendor.watch(() => {
    return props.modelValue;
  }, () => {
    setDefaultValue();
  }, { deep: true, immediate: true });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: __props.headerDirection == "column"
    }, __props.headerDirection == "column" ? common_vendor.e({
      b: popupShow.value
    }, popupShow.value ? {
      c: common_vendor.f(genTabsList.value, (item, index, i0) => {
        return {
          a: index,
          b: common_vendor.o(($event) => {
            return stepClick(index);
          }, index),
          c: "7491c4d6-2-" + i0 + ",7491c4d6-1",
          d: common_vendor.p({
            index,
            title: getTabName(item),
            class: "data-v-7491c4d6"
          })
        };
      }),
      d: common_vendor.p({
        dot: true,
        direction: "column",
        current: tabsIndex.value,
        class: "data-v-7491c4d6"
      })
    } : {}) : common_vendor.e({
      e: popupShow.value
    }, popupShow.value ? {
      f: common_vendor.o(tabsChange, "e2"),
      g: common_vendor.o(($event) => {
        return tabsIndex.value = $event;
      }, "74"),
      h: common_vendor.p({
        list: genTabsList.value,
        scrollable: true,
        current: tabsIndex.value,
        class: "data-v-7491c4d6"
      })
    } : {}), {
      i: common_vendor.f(levelList.value, (levelData, levelIndex, i0) => {
        return common_vendor.e({
          a: __props.optionsCols == 2 || levelIndex == tabsIndex.value
        }, __props.optionsCols == 2 || levelIndex == tabsIndex.value ? common_vendor.e({
          b: canShowLevel(levelIndex)
        }, canShowLevel(levelIndex) ? {
          c: common_vendor.f(levelData, (item, index, i1) => {
            return common_vendor.e({
              a: isSelected(levelIndex, index)
            }, isSelected(levelIndex, index) ? {
              b: "7491c4d6-6-" + i0 + "-" + i1 + "," + ("7491c4d6-5-" + i0 + "-" + i1),
              c: common_vendor.p({
                size: "17",
                name: "checkbox-mark",
                class: "data-v-7491c4d6"
              })
            } : {}, {
              d: index,
              e: common_vendor.o(($event) => {
                return levelChange(levelIndex, index);
              }, index),
              f: "7491c4d6-5-" + i0 + "-" + i1 + "," + ("7491c4d6-4-" + i0),
              g: common_vendor.p({
                title: getItemLabel(item),
                class: "data-v-7491c4d6"
              })
            });
          }),
          d: "7491c4d6-4-" + i0 + ",7491c4d6-0",
          e: common_vendor.p({
            class: "data-v-7491c4d6"
          })
        } : {}, {
          f: common_vendor.s(getAreaItemStyle())
        }) : {}, {
          g: levelIndex
        });
      }),
      j: isChange.value ? 1 : "",
      k: common_vendor.s(levelWrapStyle.value),
      l: common_vendor.t(cancelText.value),
      m: common_vendor.o(handleCancel, "a4"),
      n: common_vendor.p({
        type: "default",
        customStyle: {
          backgroundColor: "#f5f6f7"
        },
        class: "data-v-7491c4d6"
      }),
      o: common_vendor.o(handleConfirm, "17"),
      p: common_vendor.p({
        type: "primary",
        text: confirmText.value,
        class: "data-v-7491c4d6"
      }),
      q: common_vendor.gei(_ctx, ""),
      r: common_vendor.o(close, "ab"),
      s: common_vendor.p({
        show: popupShow.value,
        mode: "bottom",
        overlay: true,
        closeable: __props.closeable,
        safeAreaInsetBottom: true,
        zIndex: uZIndex.value,
        closeOnClickOverlay: __props.maskCloseAble,
        id: common_vendor.gei(_ctx, ""),
        class: "data-v-7491c4d6"
      }),
      t: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7491c4d6"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ultra/components/up-cascader/up-cascader.js.map
