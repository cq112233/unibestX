import { _ as __easycom_1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataIf: _createSharedDataIf, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, toDisplayString: _toDisplayString, createSharedDataSlot: _createSharedDataSlot } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpStepsItemUpStepsItem";
const { computed, inject, ref, onMounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-steps-item"
  },
  __dynamicSharedData: true,
  __hash: "0ce16881",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-steps-item/up-steps-item.uvue",
  __name: "up-steps-item",
  props: {
    title: {
      type: [String, Number],
      default: ""
    },
    desc: {
      type: [String, Number],
      default: ""
    },
    iconSize: {
      type: [String, Number],
      default: 17
    },
    error: {
      type: Boolean,
      default: false
    },
    index: {
      type: [Number, String],
      default: null
    },
    itemStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    }
  },
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpStepsItemUpStepsItemSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const parentProps = inject("upStepsProps", null);
    const registerStep = inject("upStepsRegister", null);
    const totalSteps = inject("upStepsItemCount", null);
    const internalIndex = ref(0);
    onMounted(() => {
      if (props.index != null) {
        internalIndex.value = parseInt(props.index.toString());
      } else if (registerStep != null) {
        internalIndex.value = registerStep();
      }
    });
    function getParentProp(key, defaultVal = null) {
      var _a;
      if (parentProps == null)
        return defaultVal;
      const obj = parentProps.value;
      if (obj != null && obj[key] != null) {
        return (_a = obj[key]) !== null && _a !== void 0 ? _a : defaultVal;
      }
      return defaultVal;
    }
    const stepIndex = computed(() => {
      if (props.index != null)
        return parseInt(props.index.toString());
      return internalIndex.value;
    });
    const childLength = computed(() => {
      var _a;
      return (_a = totalSteps === null || totalSteps === void 0 ? null : totalSteps.value) !== null && _a !== void 0 ? _a : 0;
    });
    const direction = computed(() => {
      return getParentProp("direction", "row").toString();
    });
    const currentStep = computed(() => {
      const c = getParentProp("current", 0);
      return parseInt(c.toString());
    });
    const activeColor = computed(() => {
      return getParentProp("activeColor", "#3c9cff").toString();
    });
    const inactiveColor = computed(() => {
      return getParentProp("inactiveColor", "#969799").toString();
    });
    const activeIcon = computed(() => {
      return getParentProp("activeIcon", "").toString();
    });
    const inactiveIcon = computed(() => {
      return getParentProp("inactiveIcon", "").toString();
    });
    const isDot = computed(() => {
      var _a;
      return (_a = getParentProp("dot", false)) !== null && _a !== void 0 ? _a : false;
    });
    const statusClass = computed(() => {
      if (props.error)
        return "error";
      if (stepIndex.value < currentStep.value)
        return "finish";
      if (stepIndex.value == currentStep.value)
        return "process";
      return "wait";
    });
    const itemContainerStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (direction.value == "row") {
        style["flex"] = "1";
      } else {
        style["width"] = "100%";
      }
      return style;
    });
    const itemStyleInner = computed(() => {
      var _a;
      return (_a = props.itemStyle) !== null && _a !== void 0 ? _a : new UTSJSONObject({});
    });
    const contentStyle = computed(() => {
      return new UTSJSONObject({});
    });
    const lineLeftStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (stepIndex.value <= currentStep.value) {
        style["backgroundColor"] = activeColor.value;
      } else {
        style["backgroundColor"] = inactiveColor.value;
      }
      return style;
    });
    const lineRightStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (stepIndex.value < currentStep.value) {
        style["backgroundColor"] = activeColor.value;
      } else {
        style["backgroundColor"] = inactiveColor.value;
      }
      return style;
    });
    const lineColTopStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (stepIndex.value <= currentStep.value) {
        style["backgroundColor"] = activeColor.value;
      } else {
        style["backgroundColor"] = inactiveColor.value;
      }
      return style;
    });
    const lineColBottomStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (stepIndex.value < currentStep.value) {
        style["backgroundColor"] = activeColor.value;
      } else {
        style["backgroundColor"] = inactiveColor.value;
      }
      return style;
    });
    const dotStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (statusClass.value == "finish" || statusClass.value == "process") {
        style["backgroundColor"] = activeColor.value;
      } else {
        style["backgroundColor"] = inactiveColor.value;
      }
      return style;
    });
    const circleStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (statusClass.value == "process") {
        style["backgroundColor"] = activeColor.value;
        style["borderColor"] = activeColor.value;
      } else if (statusClass.value == "finish") {
        style["backgroundColor"] = "#ffffff";
        style["borderColor"] = activeColor.value;
      } else if (statusClass.value == "error") {
        style["backgroundColor"] = "#ffffff";
        style["borderColor"] = "#f56c6c";
      } else {
        style["backgroundColor"] = "#ffffff";
        style["borderColor"] = inactiveColor.value;
      }
      return style;
    });
    const circleTextStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (statusClass.value == "process") {
        style["color"] = "#ffffff";
      } else {
        style["color"] = inactiveColor.value;
      }
      return style;
    });
    const titleStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (statusClass.value == "process" || statusClass.value == "finish") {
        style["color"] = "#303133";
        style["fontWeight"] = "bold";
      } else {
        style["color"] = inactiveColor.value;
      }
      return style;
    });
    const descStyle = computed(() => {
      const style = new UTSJSONObject({});
      style["color"] = "#909399";
      return style;
    });
    return () => {
      "raw js";
      const _component_up_icon = __easycom_1;
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 23, ["up-steps-item", [`up-steps-item--${direction.value}`]]);
        _setSharedDataStyle(__sharedData, 24, itemContainerStyle.value);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(direction.value == "row" && stepIndex.value > 0));
      }, () => {
        _renderSharedDataEffect(() => {
          return _setSharedDataStyle(__sharedData, 1, lineLeftStyle.value);
        });
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 2, _toSharedDataBoolean(direction.value == "row" && (childLength.value == 0 || stepIndex.value < childLength.value - 1)));
      }, () => {
        _renderSharedDataEffect(() => {
          return _setSharedDataStyle(__sharedData, 3, lineRightStyle.value);
        });
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 4, _toSharedDataBoolean(direction.value == "column" && stepIndex.value > 0));
      }, () => {
        _renderSharedDataEffect(() => {
          return _setSharedDataStyle(__sharedData, 5, lineColTopStyle.value);
        });
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 6, _toSharedDataBoolean(direction.value == "column" && (childLength.value == 0 || stepIndex.value < childLength.value - 1)));
      }, () => {
        _renderSharedDataEffect(() => {
          return _setSharedDataStyle(__sharedData, 7, lineColBottomStyle.value);
        });
      });
      _renderSharedDataEffect(() => {
        const _direction = direction.value;
        _setSharedDataClass(__sharedData, 25, ["up-steps-item__wrapper", [`up-steps-item__wrapper--${_direction}`, isDot.value ? `up-steps-item__wrapper--${_direction}--dot` : ""]]);
        _setSharedDataStyle(__sharedData, 26, itemStyleInner.value);
      });
      _createSharedDataSlot("icon", null, null, () => {
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 8, _toSharedDataBoolean(isDot.value));
        }, () => {
          _renderSharedDataEffect(() => {
            return _setSharedDataStyle(__sharedData, 9, dotStyle.value);
          });
        }, () => {
          return _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 10, _toSharedDataBoolean(activeIcon.value != "" || inactiveIcon.value != ""));
          }, () => {
            const n18 = _createSharedDataComponentWithFallback(_component_up_icon, "e81f40f8", {
              name: () => {
                return stepIndex.value <= currentStep.value ? activeIcon.value != "" ? activeIcon.value : inactiveIcon.value : inactiveIcon.value != "" ? inactiveIcon.value : activeIcon.value;
              },
              size: () => {
                return __props.iconSize;
              },
              color: () => {
                return stepIndex.value <= currentStep.value ? activeColor.value != "" ? activeColor.value : "#3c9cff" : inactiveColor.value;
              }
            });
            _setSharedData(__sharedData, 11, n18?.sharedData);
          }, () => {
            _renderSharedDataEffect(() => {
              return _setSharedDataStyle(__sharedData, 16, circleStyle.value);
            });
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 12, _toSharedDataBoolean(statusClass.value == "process" || statusClass.value == "wait"));
            }, () => {
              _renderSharedDataEffect(() => {
                _setSharedDataStyle(__sharedData, 13, circleTextStyle.value);
                _setSharedData(__sharedData, 14, _toDisplayString(stepIndex.value + 1));
              });
            }, () => {
              const n26 = _createSharedDataComponentWithFallback(_component_up_icon, "e81e75c0", {
                color: () => {
                  return statusClass.value == "error" ? "#f56c6c" : activeColor.value != "" ? activeColor.value : "#3c9cff";
                },
                size: "12",
                name: () => {
                  return statusClass.value == "error" ? "close" : "checkmark";
                }
              });
              _setSharedData(__sharedData, 15, n26?.sharedData);
            }, 1797);
          }, 1541);
        }, 1285);
      });
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 27, ["up-steps-item__content", [`up-steps-item__content--${direction.value}`]]);
        _setSharedDataStyle(__sharedData, 28, contentStyle.value);
      });
      _createSharedDataSlot("content", { index: () => {
        return stepIndex.value;
      } }, (data) => {
        return _setSharedData(__sharedData, 17, data);
      }, () => {
        _createSharedDataSlot("title", null, null, () => {
          _renderSharedDataEffect(() => {
            _setSharedDataStyle(__sharedData, 18, titleStyle.value);
            _setSharedData(__sharedData, 19, _toDisplayString(__props.title.toString()));
          });
        });
        _createSharedDataSlot("desc", null, null, () => {
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 20, _toSharedDataBoolean(__props.desc.toString() != ""));
          }, () => {
            _renderSharedDataEffect(() => {
              _setSharedDataStyle(__sharedData, 21, descStyle.value);
              _setSharedData(__sharedData, 22, _toDisplayString(__props.desc.toString()));
            });
          });
        });
      });
      return __sharedData;
    };
  }
});
const _style_0 = {"flex":{"":{"display":"flex"}}};
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_0 as _
};
//# sourceMappingURL=up-steps-item.js.map
