import { _ as __easycom_0 } from "../up-icon/up-icon.js";
import { _ as __easycom_0$1 } from "../up-text/up-text.js";
import { c as color } from "../../libs/config/color.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, toDisplayString: _toDisplayString, createSharedDataIf: _createSharedDataIf, createSharedDataSlot: _createSharedDataSlot } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpStepsItemUpStepsItem";
const { computed, inject, ref, onMounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-steps-item"
  },
  __dynamicSharedData: true,
  __hash: "4ab81438",
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
      type: [Number, String, null],
      default: null
    },
    itemStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    }
  },
  setup(__props, _a) {
    var $slots = _a.slots;
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
    const stepIndex = computed(() => {
      if (props.index != null)
        return parseInt(props.index.toString());
      return internalIndex.value;
    });
    const childLength = computed(() => {
      var _a2;
      return (_a2 = totalSteps === null || totalSteps === void 0 ? null : totalSteps.value) !== null && _a2 !== void 0 ? _a2 : 0;
    });
    const direction = computed(() => {
      var _a2;
      return (_a2 = parentProps === null || parentProps === void 0 ? null : parentProps.direction) !== null && _a2 !== void 0 ? _a2 : "row";
    });
    const currentStep = computed(() => {
      var _a2;
      return parseInt(((_a2 = parentProps === null || parentProps === void 0 ? null : parentProps.current) !== null && _a2 !== void 0 ? _a2 : 0).toString());
    });
    const activeColor = computed(() => {
      var _a2;
      return (_a2 = parentProps === null || parentProps === void 0 ? null : parentProps.activeColor) !== null && _a2 !== void 0 ? _a2 : "#3c9cff";
    });
    const inactiveColor = computed(() => {
      var _a2;
      return (_a2 = parentProps === null || parentProps === void 0 ? null : parentProps.inactiveColor) !== null && _a2 !== void 0 ? _a2 : "#969799";
    });
    const activeIcon = computed(() => {
      var _a2;
      return (_a2 = parentProps === null || parentProps === void 0 ? null : parentProps.activeIcon) !== null && _a2 !== void 0 ? _a2 : "";
    });
    const inactiveIcon = computed(() => {
      var _a2;
      return (_a2 = parentProps === null || parentProps === void 0 ? null : parentProps.inactiveIcon) !== null && _a2 !== void 0 ? _a2 : "";
    });
    const isDot = computed(() => {
      var _a2;
      return (_a2 = parentProps === null || parentProps === void 0 ? null : parentProps.dot) !== null && _a2 !== void 0 ? _a2 : false;
    });
    const statusClass = computed(() => {
      if (props.error)
        return "error";
      if (stepIndex.value < currentStep.value)
        return "finish";
      if (stepIndex.value === currentStep.value)
        return "process";
      return "wait";
    });
    const itemWidthStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (direction.value === "row" && childLength.value > 0) {
        style["width"] = (100 / childLength.value).toString() + "%";
      }
      return style;
    });
    const itemStyleInner = computed(() => {
      var _a2;
      const style = (_a2 = props.itemStyle) !== null && _a2 !== void 0 ? _a2 : new UTSJSONObject({});
      return style;
    });
    const contentStyle = computed(() => {
      const style = new UTSJSONObject({});
      return style;
    });
    const lineStyle2 = computed(() => {
      const style = new UTSJSONObject({});
      if (direction.value === "row") {
        if (stepIndex.value == 0) {
          style["display"] = "none";
        } else {
          style["left"] = "0px";
          style["right"] = "50%";
          style["width"] = "auto";
        }
      } else {
        if (stepIndex.value == 0) {
          style["display"] = "none";
        } else {
          style["top"] = "0px";
          style["bottom"] = "50%";
          style["left"] = "10px";
          style["height"] = "auto";
          style["width"] = "1px";
        }
      }
      if (props.error) {
        style["backgroundColor"] = color["error"];
      } else if (stepIndex.value - 1 < currentStep.value) {
        if (activeColor.value != "#3c9cff") {
          style["backgroundColor"] = activeColor.value;
        }
      } else {
        style["backgroundColor"] = inactiveColor.value;
      }
      return style;
    });
    const lineStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (direction.value === "row") {
        if (childLength.value > 0 && stepIndex.value == childLength.value - 1) {
          style["display"] = "none";
        } else {
          style["left"] = "50%";
          style["right"] = "0px";
          style["width"] = "auto";
        }
      } else {
        if (childLength.value > 0 && stepIndex.value == childLength.value - 1) {
          style["display"] = "none";
        } else {
          style["top"] = "50%";
          style["bottom"] = "0px";
          style["left"] = "10px";
          style["height"] = "auto";
          style["width"] = "1px";
        }
      }
      if (stepIndex.value < currentStep.value) {
        if (activeColor.value != "#3c9cff") {
          style["backgroundColor"] = activeColor.value;
        }
      } else {
        style["backgroundColor"] = inactiveColor.value;
      }
      return style;
    });
    const dotStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (statusClass.value === "finish" || statusClass.value === "process") {
        if (activeColor.value != "#3c9cff") {
          style["backgroundColor"] = activeColor.value;
        }
      } else {
        style["backgroundColor"] = inactiveColor.value;
      }
      return style;
    });
    const circleStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (activeColor.value != "#3c9cff" || inactiveColor.value != "#969799") {
        if (statusClass.value === "process") {
          style["backgroundColor"] = activeColor.value;
          style["borderColor"] = activeColor.value;
        } else if (statusClass.value === "finish") {
          style["backgroundColor"] = "rgba(0, 0, 0, 0)";
          style["borderColor"] = activeColor.value;
        } else if (statusClass.value === "wait") {
          style["backgroundColor"] = "rgba(0, 0, 0, 0)";
          style["borderColor"] = inactiveColor.value;
        } else if (statusClass.value === "error") {
          style["backgroundColor"] = "rgba(0, 0, 0, 0)";
          style["borderColor"] = color["error"];
        }
      }
      return style;
    });
    const circleTextStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (activeColor.value != "#3c9cff" || inactiveColor.value != "#969799") {
        if (statusClass.value === "process") {
          style["color"] = "#ffffff";
        } else {
          style["color"] = inactiveColor.value;
        }
      }
      return style;
    });
    return () => {
      "raw js";
      const _component_up_icon = __easycom_0;
      const _component_up_text = __easycom_0$1;
      _renderSharedDataEffect(() => {
        const _direction = direction.value;
        _setSharedDataClass(__sharedData, 18, ["up-steps-item", [`up-steps-item--${_direction}`]]);
        _setSharedDataStyle(__sharedData, 19, itemWidthStyle.value);
        _setSharedDataClass(__sharedData, 20, ["up-steps-item__line", [
          `up-steps-item__line--${_direction}`,
          stepIndex.value < currentStep.value && activeColor.value == "#3c9cff" ? "up-steps-item__line--active" : ""
        ]]);
        _setSharedDataStyle(__sharedData, 21, lineStyle.value);
        _setSharedDataClass(__sharedData, 22, ["up-steps-item__line", [
          `up-steps-item__line--${_direction}`,
          stepIndex.value - 1 < currentStep.value && activeColor.value == "#3c9cff" ? "up-steps-item__line--active" : ""
        ]]);
        _setSharedDataStyle(__sharedData, 23, lineStyle2.value);
        _setSharedDataClass(__sharedData, 24, ["up-steps-item__wrapper", [
          `up-steps-item__wrapper--${_direction}`,
          isDot.value ? `up-steps-item__wrapper--${_direction}--dot` : ""
        ]]);
        _setSharedDataStyle(__sharedData, 25, itemStyleInner.value);
      });
      _createSharedDataSlot("icon", null, null, () => {
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 0, _toSharedDataBoolean(isDot.value));
        }, () => {
          _renderSharedDataEffect(() => {
            const _statusClass = statusClass.value;
            _setSharedDataClass(__sharedData, 1, ["up-steps-item__wrapper__dot", [
              _statusClass === "finish" || _statusClass === "process" ? "up-steps-item__wrapper__dot--active" : ""
            ]]);
            _setSharedDataStyle(__sharedData, 2, dotStyle.value);
          });
        }, () => {
          return _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 3, _toSharedDataBoolean(activeIcon.value != "" || inactiveIcon.value != ""));
          }, () => {
            const n8 = _createSharedDataComponentWithFallback(_component_up_icon, "e81f5d8c", {
              name: () => {
                return stepIndex.value <= currentStep.value ? activeIcon.value : inactiveIcon.value;
              },
              size: () => {
                return __props.iconSize;
              },
              color: () => {
                return stepIndex.value <= currentStep.value ? activeColor.value == "#3c9cff" ? "primary" : activeColor.value : inactiveColor.value;
              }
            });
            _setSharedData(__sharedData, 4, n8?.sharedData);
          }, () => {
            _renderSharedDataEffect(() => {
              const _statusClass = statusClass.value;
              _setSharedDataClass(__sharedData, 10, [[
                _statusClass === "process" ? "up-steps-item__wrapper__circle--active" : "",
                _statusClass === "finish" ? "up-steps-item__wrapper__circle--finish" : "",
                _statusClass === "wait" ? "up-steps-item__wrapper__circle--wait" : "",
                _statusClass === "error" ? "up-steps-item__wrapper__circle--error" : ""
              ], "up-steps-item__wrapper__circle"]);
              _setSharedDataStyle(__sharedData, 11, circleStyle.value);
            });
            _createSharedDataIf(() => {
              return _setSharedData(__sharedData, 5, _toSharedDataBoolean(statusClass.value === "process" || statusClass.value === "wait"));
            }, () => {
              _renderSharedDataEffect(() => {
                _setSharedDataClass(__sharedData, 6, ["up-steps-item__wrapper__circle__text", [
                  statusClass.value === "process" ? "up-steps-item__wrapper__circle__text--active" : ""
                ]]);
                _setSharedDataStyle(__sharedData, 7, circleTextStyle.value);
                _setSharedData(__sharedData, 8, _toDisplayString(stepIndex.value + 1));
              });
            }, () => {
              const n16 = _createSharedDataComponentWithFallback(_component_up_icon, "e81e7606", {
                color: () => {
                  return statusClass.value === "error" ? "error" : activeColor.value == "#3c9cff" ? "primary" : activeColor.value;
                },
                size: "12",
                name: () => {
                  return statusClass.value === "error" ? "close" : "checkmark";
                }
              });
              _setSharedData(__sharedData, 9, n16?.sharedData);
            }, 773);
          }, 517);
        }, 261);
      });
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 26, ["up-steps-item__content", [
          `up-steps-item__content--${direction.value}`,
          currentStep.value == stepIndex.value ? "up-steps-item__content--current" : ""
        ]]);
        _setSharedDataStyle(__sharedData, 27, contentStyle.value);
      });
      _createSharedDataSlot("content", { index: () => {
        return stepIndex.value;
      } }, (data) => {
        return _setSharedData(__sharedData, 12, data);
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 13, _toSharedDataBoolean($slots["content"] == null));
      }, () => {
        _createSharedDataSlot("title", null, null);
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 14, _toSharedDataBoolean($slots["title"] == null));
        }, () => {
          const n26 = _createSharedDataComponentWithFallback(_component_up_text, "e81e48be", {
            text: () => {
              return __props.title.toString();
            },
            lineHeight: "20px",
            color: () => {
              return currentStep.value == stepIndex.value ? activeColor.value == "#3c9cff" ? "" : activeColor.value : inactiveColor.value;
            },
            type: () => {
              return currentStep.value == stepIndex.value && activeColor.value == "#3c9cff" ? "primary" : "default";
            },
            size: () => {
              return currentStep.value == stepIndex.value ? 14 : 13;
            }
          });
          _setSharedData(__sharedData, 15, n26?.sharedData);
        });
        _createSharedDataSlot("desc", null, null);
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 16, _toSharedDataBoolean($slots["desc"] == null));
        }, () => {
          const n31 = _createSharedDataComponentWithFallback(_component_up_text, "e81d8c14", {
            text: () => {
              return __props.desc.toString();
            },
            type: "tips",
            size: "12"
          });
          _setSharedData(__sharedData, 17, n31?.sharedData);
        });
      }, null, 2);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-steps-item.js.map
