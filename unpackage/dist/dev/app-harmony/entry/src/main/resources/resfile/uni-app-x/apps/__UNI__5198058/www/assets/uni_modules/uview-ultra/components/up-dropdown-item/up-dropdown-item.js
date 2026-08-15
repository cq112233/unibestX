import { _ as __easycom_0 } from "../up-icon/up-icon.js";
import { _ as __easycom_1$1 } from "../up-cell/up-cell.js";
import { _ as __easycom_2 } from "../up-cell-group/up-cell-group.js";
import "../../libs/function/test.js";
import "../../libs/function/digit.js";
import { c as config } from "../../libs/config/config.js";
import { d as defProps } from "./dropdown-item.js";
import { U as UPDropdownMenu } from "../up-dropdown/types.js";
import { u as useUltraUI } from "../../libs/composable/useUltraUI.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedDataScoped: _setSharedDataScoped, createSharedDataVFor: _createSharedDataVFor, toDisplayString: _toDisplayString, setSharedDataClass: _setSharedDataClass, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, createSharedDataIf: _createSharedDataIf, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataFor: _createSharedDataFor, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpDropdownItemUpDropdownItem";
const { computed, ref, watch, onMounted } = globalThis.Vue;
const { getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-dropdown-item",
    options: new UTSJSONObject({
      styleIsolation: "shared"
    })
  },
  __dynamicSharedData: true,
  __hash: "6e325dc5",
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
    var __expose = _a.expose, __emit = _a.emit, $slots = _a.slots;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpDropdownItemUpDropdownItemSharedData", sharedDataClassId: 0 })));
    const _b = useUltraUI(new UTSJSONObject({
      activeColor: config.getString("color.up-primary"),
      inactiveColor: "#606266"
    })), parent = _b.parent, parentData = _b.parentData, getParentData = _b.getParentData;
    const instance = getCurrentInstance().proxy;
    const props = __props;
    const emit = __emit;
    const active = ref(false);
    const activeColor = ref(config.getString("color.up-primary"));
    const inactiveColor = ref("#606266");
    const propsChange = computed(() => {
      return `${props.title}-${props.disabled}`;
    });
    watch(active, (val) => {
    });
    watch(propsChange, () => {
      if (parent.value != null)
        parent.value.$callMethod("init");
    });
    function init() {
      getParentData("up-dropdown", instance, false);
      let parentRef = parent.value;
      if (parentRef != null) {
        if (parentData.value["activeColor"] != null) {
          activeColor.value = parentData.value["activeColor"];
        }
        if (parentData.value["inactiveColor"] != null) {
          inactiveColor.value = parentData.value["inactiveColor"];
        }
        let childrenList = parentRef.$callMethod("getChildren");
        if (childrenList == null) {
          childrenList = parentRef.$data["children"];
        }
        if (childrenList != null && childrenList.length == 1)
          active.value = true;
        parentRef.$callMethod("addMenuListItem", new UPDropdownMenu({
          title: props.title.toString(),
          disabled: props.disabled
        }));
      }
    }
    function cellClick(value = null) {
      emit("update:modelValue", value);
      if (parent.value != null)
        parent.value.$callMethod("close");
      emit("change", value);
    }
    const setActive = (val) => {
      active.value = val;
    };
    function getItemTextStyle(item) {
      const style = new UTSJSONObject({});
      const isSelected = props.modelValue.toString() == item["value"].toString();
      if (isSelected) {
        if (activeColor.value != "#2979ff") {
          style["color"] = activeColor.value;
        }
      } else {
        style["color"] = inactiveColor.value;
      }
      return style;
    }
    onMounted(() => {
      init();
    });
    __expose({
      init,
      active,
      setActive
    });
    return () => {
      "raw js";
      const _component_up_icon = __easycom_0;
      const _component_up_cell = __easycom_1$1;
      const _component_up_cell_group = __easycom_2;
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(active.value));
      }, () => {
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 1, _toSharedDataBoolean($slots["default"] == null && $slots["$default"] == null));
        }, () => {
          _renderSharedDataEffect(() => {
            return _setSharedDataStyle(__sharedData, 4, {
              height: $up.addUnit(props.height)
            });
          });
          const n12 = _createSharedDataComponentWithFallback(_component_up_cell_group, "ca585d1a", null, {
            "default": _withSharedDataVaporCtx(() => {
              _createSharedDataFor(_setSharedDataScoped(__sharedData, 3, _createSharedDataVFor(__sharedDataScope, () => {
                return new UniDynamicSharedData(__sharedDataScope, { bundleKey: `${__className}SharedData`, sharedDataClassId: 1 });
              })), () => {
                return props.options;
              }, (__sharedData_VFor0, _for_item0, _for_key0) => {
                const _on_click = () => {
                  return cellClick(_for_item0.value["value"]);
                };
                const n11 = _createSharedDataComponentWithFallback(_component_up_cell, "ca585c9a-" + _for_key0.value, {
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
                      const n10 = _createSharedDataComponentWithFallback(_component_up_icon, "ca583da2-" + _for_key0.value, {
                        name: "checkbox-mark",
                        color: () => {
                          return activeColor.value == "#2979ff" ? "primary" : activeColor.value;
                        },
                        size: "32"
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
