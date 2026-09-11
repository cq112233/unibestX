import { _ as __easycom_0$1 } from "../up-icon/up-icon.js";
import { _ as __easycom_1 } from "../up-cell/up-cell.js";
import { _ as __easycom_1$1 } from "../up-line/up-line.js";
import { i as guid } from "../../libs/function/index.js";
import { U as UP_COLLAPSE_PROPS, a as UP_COLLAPSE_REGISTER, b as UP_COLLAPSE_UNREGISTER, c as UP_COLLAPSE_TOGGLE, C as CollapseItemChild } from "../up-collapse/collapse-common.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataIf: _createSharedDataIf, createSharedDataSlot: _createSharedDataSlot, withSharedDataVaporCtx: _withSharedDataVaporCtx, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpCollapseItemUpCollapseItem";
const { computed, inject, onMounted, onUnmounted, ref, watch, getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-collapse-item"
  },
  __dynamicSharedData: true,
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
    const instance = getCurrentInstance().proxy;
    const props = __props;
    const parentProps = inject(UP_COLLAPSE_PROPS, null);
    const registerChild = inject(UP_COLLAPSE_REGISTER, null);
    const unregisterChild = inject(UP_COLLAPSE_UNREGISTER, null);
    const collapseToggle = inject(UP_COLLAPSE_TOGGLE, null);
    const elId = ref(guid());
    const isOpen = ref(false);
    const timer = ref(0);
    const showBorder = ref(false);
    function setOpen(open) {
      isOpen.value = open;
    }
    watch(isOpen, (n) => {
      clearTimeout(timer.value);
      timer.value = 0;
      timer.value = setTimeout(() => {
        showBorder.value = n;
      }, n ? 10 : 290);
    });
    const parentBorder = computed(() => {
      const obj = parentProps === null || parentProps === void 0 ? null : parentProps.value;
      if (obj == null) {
        return false;
      }
      const border = obj["border"];
      return border != null && border;
    });
    const titleCpu = computed(() => {
      if ((instance === null || instance === void 0 ? null : instance.$slots["title"]) == null) {
        return props.title.toString();
      } else {
        return "";
      }
    });
    const contentStyle = computed(() => {
      return new UTSJSONObject({
        transitionDuration: props.duration.toString() + "ms"
      });
    });
    function clickHandler() {
      if (props.disabled) {
        return null;
      }
      if (collapseToggle == null) {
        return null;
      }
      collapseToggle(elId.value);
    }
    onMounted(() => {
      if (registerChild == null) {
        return null;
      }
      const child = new CollapseItemChild({
        elId: elId.value,
        name: props.name.toString(),
        isOpen,
        setOpen
      });
      registerChild(child);
    });
    onUnmounted(() => {
      if (unregisterChild != null) {
        unregisterChild(elId.value);
      }
    });
    __expose({
      isOpen,
      setOpen
    });
    return () => {
      "raw js";
      const _component_up_icon = __easycom_0$1;
      const _component_up_cell = __easycom_1;
      const _component_up_line = __easycom_1$1;
      const n25 = _createSharedDataComponentWithFallback(_component_up_cell, "35b46628", {
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
        arrowDirection: () => {
          return isOpen.value ? "up" : "down";
        },
        disabled: () => {
          return __props.disabled;
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
              return _setSharedData(__sharedData, 1, _toSharedDataBoolean($slots["title"] == null && __props.title != ""));
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
              return _setSharedData(__sharedData, 3, _toSharedDataBoolean($slots["icon"] == null && __props.icon != ""));
            }, () => {
              const n10 = _createSharedDataComponentWithFallback(_component_up_icon, "fe4f406a", {
                size: 22,
                name: () => {
                  return __props.icon;
                }
              });
              _setSharedData(__sharedData, 4, n10?.sharedData);
            }, null, 129);
          });
        }),
        "value": _withSharedDataVaporCtx(() => {
          _createSharedDataSlot("value", null, null, () => {
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 5, _toSharedDataBoolean($slots["value"] == null && __props.value != ""));
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
              return _setSharedData(__sharedData, 8, _toSharedDataBoolean($slots["right-icon"] == null));
            }, () => {
              const n22 = _createSharedDataComponentWithFallback(_component_up_icon, "fe4f2322", {
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
        _setSharedDataClass(__sharedData, 12, ["weapp-tw-border up-collapse-item__content", isOpen.value ? "up-collapse-item__content--open" : ""]);
        _setSharedDataStyle(__sharedData, 13, contentStyle.value);
        _setSharedDataAttr(__sharedData, 14, _toSharedDataString(elId.value));
      });
      _createSharedDataSlot("default", null, null);
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 10, _toSharedDataBoolean(parentBorder.value));
      }, () => {
        const n31 = _createSharedDataComponentWithFallback(_component_up_line, "cb9c8f5c");
        _setSharedData(__sharedData, 11, n31?.sharedData);
      });
      return __sharedData;
    };
  }
});
const _style_0 = {"border":{"":{"borderStyle":"var(--tw-border-style)","borderWidth":1}}};
const _style_1 = {};
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0, _style_1]]]);
export {
  __easycom_0 as _
};
