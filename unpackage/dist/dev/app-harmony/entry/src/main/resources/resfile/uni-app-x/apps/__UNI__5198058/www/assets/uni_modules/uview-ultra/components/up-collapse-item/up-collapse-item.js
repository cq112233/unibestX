import { _ as __easycom_0 } from "../up-icon/up-icon.js";
import { _ as __easycom_1$1 } from "../up-cell/up-cell.js";
import { _ as __easycom_0$1 } from "../up-line/up-line.js";
import { j as guid, a as addUnit, u as upGetRect, s as sleep, i as error } from "../../libs/function/index.js";
import { a as array } from "../../libs/function/test.js";
import { u as useUltraUI } from "../../libs/composable/useUltraUI.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, createSharedDataTemplateRefSetter: _createSharedDataTemplateRefSetter, resolveComponent: _resolveComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataIf: _createSharedDataIf, createSharedDataSlot: _createSharedDataSlot, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedDataStyle: _setSharedDataStyle, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString, setSharedDataTemplateRef: _setSharedDataTemplateRef, unref: _unref } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpCollapseItemUpCollapseItem";
const { nextTick, ref, watch, computed, onMounted, getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-collapse-item"
  },
  __dynamicSharedData: true,
  __hash: "53d45d0a",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-collapse-item/up-collapse-item.uvue",
  __name: "up-collapse-item",
  props: {
    title: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isLink: {
      type: Boolean,
      default: true
    },
    clickable: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: true
    },
    align: {
      type: String,
      default: "left"
    },
    name: {
      type: [String, Number],
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    duration: {
      type: [Number, String],
      default: 300
    },
    showRight: {
      type: Boolean,
      default: true
    }
  },
  setup(__props, _a) {
    var __expose = _a.expose, $slots = _a.slots;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpCollapseItemUpCollapseItemSharedData", sharedDataClassId: 0 })));
    const _b = useUltraUI(), parent = _b.parent, parentData = _b.parentData, getParentData = _b.getParentData;
    const instance = getCurrentInstance().proxy;
    const props = __props;
    const timer = ref(0);
    const elId = ref(guid());
    const height = ref(0);
    const expanded = ref(false);
    const showBorder = ref(false);
    const animating = ref(false);
    watch(expanded, (n) => {
      clearTimeout(timer.value);
      timer.value = 0;
      timer.value = setTimeout(() => {
        showBorder.value = n;
      }, n ? 10 : 290);
    });
    const titleCpu = computed(() => {
      if ((instance === null || instance === void 0 ? null : instance.$slots["title"]) == null) {
        return props.title.toString();
      } else {
        return "";
      }
    });
    const contentHeightStyle = computed(() => {
      return new UTSJSONObject({ height: addUnit(height.value) });
    });
    async function setContentAnimate(expandedFrom) {
      expanded.value = expandedFrom;
      const rect = await upGetRect(`#${elId.value}`, false, instance);
      height.value = expanded.value ? rect.height == null ? "auto" : rect.height : 0;
      animating.value = true;
      await sleep(parseInt(props.duration.toString()));
      animating.value = false;
    }
    async function init() {
      var _a2;
      getParentData("up-collapse", instance, false);
      if (parent.value == null) {
        return error("up-collapse-item必须要搭配up-collapse组件使用");
      }
      let value = (_a2 = parentData.value["value"]) !== null && _a2 !== void 0 ? _a2 : "";
      const accordion = parentData.value["accordion"];
      if (accordion != null && accordion) {
        if (array(value)) {
          return error("手风琴模式下，up-collapse组件的value参数不能为数组");
        }
        expanded.value = props.name.toString() == value.toString();
      } else {
        if (!array(value) && value != "") {
          return error("非手风琴模式下，up-collapse组件的value参数必须为数组");
        }
        if (value == "") {
          value = [];
        }
        const valueArr = value;
        const sameName = (element) => {
          return element == props.name.toString();
        };
        expanded.value = valueArr.some(sameName);
      }
      await nextTick();
      setContentAnimate(expanded.value);
    }
    const clickHandler = function() {
      if (props.disabled || animating.value)
        return null;
      if (parent.value != null) {
        parent.value.$callMethod("onChange", instance);
      }
    };
    onMounted(() => {
      init();
    });
    const getInternalState = () => {
      return new UTSJSONObject({
        name: props.name,
        expanded: expanded.value
      });
    };
    __expose({
      init,
      setContentAnimate,
      getInternalState
    });
    return () => {
      "raw js";
      const _setTemplateRef = _createSharedDataTemplateRefSetter();
      const _component_up_icon = __easycom_0;
      const _component_up_cell = __easycom_1$1;
      const _component_up_line = __easycom_0$1;
      const n25 = _createSharedDataComponentWithFallback(_component_up_cell, "35b465ee", {
        title: () => {
          return titleCpu.value;
        },
        value: () => {
          return __props.value;
        },
        label: () => {
          return __props.label;
        },
        icon: () => {
          return __props.icon;
        },
        isLink: () => {
          return __props.isLink;
        },
        clickable: () => {
          return __props.clickable;
        },
        border: () => {
          return __props.border && showBorder.value;
        },
        onClick: () => {
          return clickHandler;
        },
        customStyle: {
          padding: "10px 0"
        }
      }, {
        "title": _withSharedDataVaporCtx(() => {
          _createSharedDataSlot("title", null, null, () => {
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 1, _toSharedDataBoolean($slots["title"] != null && __props.title != ""));
            }, () => {
              _renderSharedDataEffect(() => {
                return _setSharedData(__sharedData, 2, _toDisplayString(__props.title));
              });
            }, null, 129);
          });
        }),
        "icon": _withSharedDataVaporCtx(() => {
          _createSharedDataSlot("icon", null, null, () => {
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 3, _toSharedDataBoolean($slots["icon"] != null && __props.icon != ""));
            }, () => {
              _renderSharedDataEffect(() => {
                return _setSharedData(__sharedData, 4, _toDisplayString(__props.icon));
              });
            }, null, 129);
          });
        }),
        "value": _withSharedDataVaporCtx(() => {
          _createSharedDataSlot("value", null, null, () => {
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 5, _toSharedDataBoolean($slots["value"] != null && __props.value != ""));
            }, () => {
              _renderSharedDataEffect(() => {
                return _setSharedData(__sharedData, 6, _toDisplayString(__props.value));
              });
            }, null, 129);
          });
        }),
        "right-icon": _withSharedDataVaporCtx(() => {
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 7, _toSharedDataBoolean(__props.showRight));
          }, () => {
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 8, _toSharedDataBoolean($slots["right-icon"] != null));
            }, () => {
              const n22 = _createSharedDataComponentWithFallback(_component_up_icon, "fe4f2bd4", {
                size: 16,
                name: "arrow-right"
              });
              _setSharedData(__sharedData, 9, n22?.sharedData);
            }, null, 129);
            _createSharedDataSlot("right-icon", null, null);
          }, null, 130);
        })
      });
      _setSharedData(__sharedData, 0, n25?.sharedData);
      _renderSharedDataEffect(() => {
        _setSharedDataStyle(__sharedData, 12, contentHeightStyle.value);
        _setSharedDataAttr(__sharedData, 13, _toSharedDataString(elId.value));
      });
      _createSharedDataSlot("default", null, null);
      _renderSharedDataEffect(() => {
        return _setSharedDataTemplateRef(__sharedData, 14, (n27) => {
          _setTemplateRef(n27, elId, null, "elId");
        });
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 10, _toSharedDataBoolean(_unref(parentData)["border"] != null && _unref(parentData)["border"]));
      }, () => {
        const n31 = _createSharedDataComponentWithFallback(_component_up_line, "cb9ca3ec");
        _setSharedData(__sharedData, 11, n31?.sharedData);
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
//# sourceMappingURL=up-collapse-item.js.map
