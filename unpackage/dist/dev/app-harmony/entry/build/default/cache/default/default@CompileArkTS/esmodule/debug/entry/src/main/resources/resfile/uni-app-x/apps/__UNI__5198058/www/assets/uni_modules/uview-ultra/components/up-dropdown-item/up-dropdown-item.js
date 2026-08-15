import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
import { _ as __easycom_1$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-cell/up-cell&";
import { _ as __easycom_2 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-cell-group/up-cell-group&";
import { a as addUnit } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { d as defProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-dropdown-item/dropdown-item&";
import { U as UPDropdownMenu } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-dropdown/types&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, setSharedDataStyle: _setSharedDataStyle, unref: _unref, renderSharedDataEffect: _renderSharedDataEffect, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, toDisplayString: _toDisplayString, setSharedDataClass: _setSharedDataClass, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataIf: _createSharedDataIf, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataFor: _createSharedDataFor, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpDropdownItemUpDropdownItem";
const { computed, ref, watch, onMounted, inject } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-dropdown-item",
    options: new UTSJSONObject({
      styleIsolation: "shared"
    })
  },
  __dynamicSharedData: true,
  __hash: "033cf882",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-dropdown-item/up-dropdown-item.uvue",
  __name: "up-dropdown-item",
  props: {
    // 当前选中项的value值
    modelValue: {
      type: [Number, String, Array],
      default: defProps.getAny("dropdownItem.value")
    },
    // 菜单项标题
    title: {
      type: [String, Number],
      default: defProps.getString("dropdownItem.title")
    },
    // 选项数据，如果传入了默认slot，此参数无效
    options: {
      type: Array,
      default: () => {
        return defProps.getArray("dropdownItem.options");
      }
    },
    // 是否禁用此菜单项
    disabled: {
      type: Boolean,
      default: defProps.getBoolean("dropdownItem.disabled")
    },
    // 下拉弹窗的高度
    height: {
      type: [Number, String],
      default: defProps.getNumber("dropdownItem.height")
    },
    // 点击遮罩是否可以收起弹窗
    closeOnClickOverlay: {
      type: Boolean,
      default: defProps.getBoolean("dropdownItem.closeOnClickOverlay")
    }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, _a) {
    var __emit = _a.emit, $slots = _a.slots;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpDropdownItemUpDropdownItemSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const parentDropdown = inject("upDropdown", null);
    const itemIndex = ref(-1);
    const isActive = computed(() => {
      if (parentDropdown != null && parentDropdown.current != null && parentDropdown.active != null) {
        return parentDropdown.active.value == true && parentDropdown.current.value == itemIndex.value;
      }
      return false;
    });
    const activeColor = computed(() => {
      var _a2;
      if (parentDropdown != null && parentDropdown.props != null) {
        return (_a2 = parentDropdown.props.activeColor) !== null && _a2 !== void 0 ? _a2 : "#2979ff";
      }
      return "#2979ff";
    });
    const inactiveColor = computed(() => {
      var _a2;
      if (parentDropdown != null && parentDropdown.props != null) {
        return (_a2 = parentDropdown.props.inactiveColor) !== null && _a2 !== void 0 ? _a2 : "#606266";
      }
      return "#606266";
    });
    function cellClick(value = null) {
      emit("update:modelValue", value);
      emit("change", value);
      if (parentDropdown != null && parentDropdown.close != null) {
        parentDropdown.close();
      }
    }
    function getItemTextStyle(item) {
      const style = new UTSJSONObject({});
      const isSelected = props.modelValue.toString() == item["value"].toString();
      if (isSelected) {
        style["color"] = activeColor.value;
      } else {
        style["color"] = inactiveColor.value;
      }
      return style;
    }
    onMounted(() => {
      if (parentDropdown != null && parentDropdown.registerItem != null) {
        itemIndex.value = parentDropdown.registerItem(new UPDropdownMenu({
          title: props.title.toString(),
          disabled: props.disabled
        }));
      }
    });
    watch(() => {
      return props.title;
    }, (newTitle = null) => {
      if (parentDropdown != null && parentDropdown.updateItemTitle != null && itemIndex.value >= 0) {
        parentDropdown.updateItemTitle(itemIndex.value, newTitle.toString());
      }
    });
    return () => {
      "raw js";
      const _component_up_icon = __easycom_0;
      const _component_up_cell = __easycom_1$1;
      const _component_up_cell_group = __easycom_2;
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(isActive.value));
      }, () => {
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 1, _toSharedDataBoolean($slots["default"] == null && $slots["$default"] == null));
        }, () => {
          _renderSharedDataEffect(() => {
            return _setSharedDataStyle(__sharedData, 4, {
              height: _unref(addUnit)(props.height)
            });
          });
          const n12 = _createSharedDataComponentWithFallback(_component_up_cell_group, "ca585d1e", null, {
            "default": _withSharedDataVaporCtx(() => {
              _createSharedDataFor(_setSharedDataScoped(__sharedData, 3, _createSharedDataVFor(__sharedDataScope, () => {
                return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
              })), () => {
                return props.options;
              }, (__sharedData_VFor0, _for_item0, _for_key0) => {
                const _on_click = () => {
                  return cellClick(_for_item0.value["value"]);
                };
                const n11 = _createSharedDataComponentWithFallback(_component_up_cell, "ca585c9e-" + _for_key0.value, {
                  onClick: () => {
                    return _on_click;
                  },
                  arrow: false
                }, {
                  "title": () => {
                    _renderSharedDataEffect(() => {
                      const _item = _for_item0.value;
                      _setSharedDataClass(__sharedData_VFor0, 2, ["up-dropdown-item__text", {
                        "up-dropdown-item__text--active": props.modelValue.toString() == _item["value"].toString() && activeColor.value == "#2979ff"
                      }]);
                      _setSharedDataStyle(__sharedData_VFor0, 3, [getItemTextStyle(_item)]);
                      _setSharedData(__sharedData_VFor0, 4, _toDisplayString(_item["label"].toString()));
                    });
                  },
                  "default": _withSharedDataVaporCtx(() => {
                    _createSharedDataIf(() => {
                      return _setSharedData(__sharedData_VFor0, 5, _toSharedDataBoolean(props.modelValue.toString() == _for_item0.value["value"].toString()));
                    }, () => {
                      const n10 = _createSharedDataComponentWithFallback(_component_up_icon, "ca583da6-" + _for_key0.value, {
                        name: "checkbox-mark",
                        color: () => {
                          return activeColor.value == "#2979ff" ? "primary" : activeColor.value;
                        },
                        size: "18"
                      });
                      _setSharedData(__sharedData_VFor0, 6, n10?.sharedData);
                    }, null, 129);
                  })
                });
                _setSharedData(__sharedData_VFor0, 1, n11?.sharedData);
                return n11;
              }, (__sharedData_VFor0, item, index) => {
                return _setSharedData(__sharedData_VFor0, 0, _toDisplayString(index));
              }, 34);
            })
          });
          _setSharedData(__sharedData, 2, n12?.sharedData);
        }, () => {
          _createSharedDataSlot("default", null, null);
        }, 517);
        _setSharedDataEvent(__sharedData, 5, () => {
        });
        _setSharedDataEvent(__sharedData, 6, () => {
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
//# sourceMappingURL=up-dropdown-item.js.map
