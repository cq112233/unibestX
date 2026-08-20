import { _ as __easycom_1 } from "../up-icon/up-icon.js";
import { _ as __easycom_1$1 } from "../up-line/up-line.js";
import { d as defProps } from "./formItem.js";
import { p as propsLine } from "../up-line/line.js";
import { c as color } from "../../libs/config/color.js";
import { b as addStyle, d as deepMerge, a as addUnit, i as error } from "../../libs/function/index.js";
import { u as useUltraUI } from "../../libs/composable/useUltraUI.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataIf: _createSharedDataIf, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, toDisplayString: _toDisplayString, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpFormItemUpFormItem";
const { getCurrentInstance, ref, reactive, computed, onMounted, watch } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-form-item"
  },
  __dynamicSharedData: true,
  __hash: "7562dee4",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-form-item/up-form-item.uvue",
  __name: "up-form-item",
  props: {
    customStyle: {
      type: [Object, String],
      default: () => {
        return new UTSJSONObject({});
      }
    },
    customClass: {
      type: String,
      default: ""
    },
    // input的label提示语
    label: {
      type: String,
      default: defProps.getString("formItem.label")
    },
    // 绑定的值
    prop: {
      type: String,
      default: defProps.getString("formItem.prop")
    },
    // 绑定的规则
    rules: {
      type: [UTSJSONObject, Array],
      default: defProps.getAny("formItem.rules")
    },
    // 是否显示表单域的下划线边框
    borderBottom: {
      type: [String, Boolean],
      default: defProps.getString("formItem.borderBottom")
    },
    // label的位置，left-左边，top-上边
    labelPosition: {
      type: String,
      default: defProps.getString("formItem.labelPosition")
    },
    // label的宽度，单位px
    labelWidth: {
      type: [String, Number],
      default: defProps.getString("formItem.labelWidth")
    },
    // 右侧图标
    rightIcon: {
      type: String,
      default: defProps.getString("formItem.rightIcon")
    },
    // 左侧图标
    leftIcon: {
      type: String,
      default: defProps.getString("formItem.leftIcon")
    },
    // 是否显示左边的必填星号，只作显示用，具体校验必填的逻辑，请在rules中配置
    required: {
      type: Boolean,
      default: defProps.getBoolean("formItem.required")
    },
    leftIconStyle: {
      type: [String, UTSJSONObject],
      default: defProps.getString("formItem.leftIconStyle")
    }
  },
  emits: ["click"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit, $slots = _a.slots;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpFormItemUpFormItemSharedData", sharedDataClassId: 0 })));
    const _b = useUltraUI(new UTSJSONObject({
      // 提示文本的位置
      labelPosition: "left",
      // 提示文本对齐方式
      labelAlign: "left",
      // 提示文本的样式
      labelStyle: new UTSJSONObject({}),
      // 提示文本的宽度
      labelWidth: 45,
      // 错误提示方式
      errorType: "message",
      originalModel: new UTSJSONObject({})
    })), parent = _b.parent, parentData = _b.parentData, getParentData = _b.getParentData;
    const instance = getCurrentInstance().proxy;
    const props = __props;
    const emit = __emit;
    const message = ref("");
    const itemRules = ref(new UTSJSONObject({}));
    const bodyStyle = computed(() => {
      const custom = addStyle(props.customStyle);
      const parentPos = parentData.value != null ? parentData.value["labelPosition"] : null;
      const pos = props.labelPosition != "" ? props.labelPosition : parentPos !== null && parentPos !== void 0 ? parentPos : "left";
      const base = new UTSJSONObject({
        flexDirection: pos == "left" ? "row" : "column"
      });
      return deepMerge(base, custom);
    });
    const labelWrapperStyle = computed(() => {
      var _a2;
      const parentPos = parentData.value != null ? parentData.value["labelPosition"] : null;
      const pos = props.labelPosition != "" ? props.labelPosition : parentPos !== null && parentPos !== void 0 ? parentPos : "left";
      const parentWidth = parentData.value != null ? (_a2 = parentData.value["labelWidth"]) !== null && _a2 !== void 0 ? _a2 : 45 : 45;
      const widthVal = props.labelWidth != null && props.labelWidth != "" ? props.labelWidth : parentWidth;
      return new UTSJSONObject({
        width: addUnit(widthVal),
        marginBottom: pos == "left" ? "0px" : "5px"
      });
    });
    const labelAlignStyle = computed(() => {
      const align = parentData.value != null ? parentData.value["labelAlign"] : null;
      return new UTSJSONObject({
        justifyContent: align == "left" ? "flex-start" : align == "center" ? "center" : "flex-end"
      });
    });
    const labelCustomStyle = computed(() => {
      if (parentData.value != null && parentData.value["labelStyle"] != null) {
        return parentData.value["labelStyle"];
      }
      return new UTSJSONObject({});
    });
    const messageStyle = computed(() => {
      var _a2;
      const parentPos = parentData.value != null ? parentData.value["labelPosition"] : null;
      const pos = props.labelPosition != "" ? props.labelPosition : parentPos !== null && parentPos !== void 0 ? parentPos : "left";
      const parentWidth = parentData.value != null ? (_a2 = parentData.value["labelWidth"]) !== null && _a2 !== void 0 ? _a2 : 45 : 45;
      const widthVal = props.labelWidth != null && props.labelWidth != "" ? props.labelWidth : parentWidth;
      const left = pos == "top" ? "0px" : addUnit(widthVal);
      return new UTSJSONObject({
        marginLeft: left
      });
    });
    const isErrorMessage = computed(() => {
      const errorType = parentData.value != null ? parentData.value["errorType"] : null;
      return message.value != "" && errorType == "message";
    });
    const lineColor = computed(() => {
      var _a2;
      const errorType = parentData.value != null ? parentData.value["errorType"] : null;
      return message.value != "" && errorType == "border-bottom" ? color["error"] : (_a2 = propsLine["color"]) !== null && _a2 !== void 0 ? _a2 : "#d6d7d9";
    });
    const lineStyle = computed(() => {
      return new UTSJSONObject({
        marginTop: isErrorMessage.value ? "5px" : "0px"
      });
    });
    const updateParentData = () => {
      getParentData("up-form", instance, false);
    };
    const init = () => {
      updateParentData();
      if (parent.value == null) {
        error("up-form-item需要结合up-form组件使用");
      }
    };
    const setRules = (rules) => {
      if (Array.isArray(rules)) {
        if (rules.length == 0) {
          itemRules.value = new UTSJSONObject({});
          return null;
        }
      } else {
        if (UTSJSONObject.keys(rules).length == 0) {
          itemRules.value = new UTSJSONObject({});
          return null;
        }
      }
      itemRules.value = rules;
    };
    const clickHandler = () => {
      emit("click");
    };
    watch(() => {
      return props.rules;
    }, (newVal = null) => {
      setRules(newVal);
    }, { immediate: true });
    onMounted(() => {
      init();
    });
    const getProps = function() {
      return new UTSJSONObject({
        prop: props.prop,
        rules: itemRules.value,
        label: props.label,
        borderBottom: props.borderBottom,
        labelPosition: props.labelPosition,
        labelWidth: props.labelWidth,
        rightIcon: props.rightIcon,
        leftIcon: props.leftIcon,
        required: props.required,
        leftIconStyle: props.leftIconStyle
      });
    };
    const getRefs = function() {
      return new UTSJSONObject({
        message: message.value,
        itemRules: itemRules.value
      });
    };
    const setMessage = function(msg) {
      message.value = msg;
    };
    __expose({
      getProps,
      getRefs,
      setMessage
    });
    return () => {
      "raw js";
      const _component_up_icon = __easycom_1;
      const _component_up_line = __easycom_1$1;
      _renderSharedDataEffect(() => {
        _setSharedDataClass(__sharedData, 15, ["up-form-item", { "up-form-item--error": isErrorMessage.value }]);
        _setSharedDataStyle(__sharedData, 16, bodyStyle.value);
      });
      _createSharedDataSlot("label", null, null, () => {
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 5, _toSharedDataBoolean(__props.required || __props.leftIcon != "" || __props.label != ""));
        }, () => {
          _renderSharedDataEffect(() => {
            return _setSharedDataStyle(__sharedData, 9, labelWrapperStyle.value);
          });
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 6, _toSharedDataBoolean(__props.required));
          }, () => {
          });
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 7, _toSharedDataBoolean(__props.leftIcon != ""));
          }, () => {
            const n9 = _createSharedDataComponentWithFallback(_component_up_icon, "86e0f900", {
              name: () => {
                return __props.leftIcon;
              },
              "custom-style": () => {
                return __props.leftIconStyle;
              }
            });
            _setSharedData(__sharedData, 8, n9?.sharedData);
          });
          _renderSharedDataEffect(() => {
            _setSharedDataStyle(__sharedData, 10, labelAlignStyle.value);
            _setSharedDataStyle(__sharedData, 11, labelCustomStyle.value);
            _setSharedData(__sharedData, 12, _toDisplayString(__props.label));
          });
        });
      });
      _createSharedDataSlot("default", null, null);
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 13, _toSharedDataBoolean($slots["right"] != null));
      }, () => {
        _createSharedDataSlot("right", null, null);
      });
      _setSharedDataEvent(__sharedData, 14, clickHandler);
      _createSharedDataSlot("error", null, null, () => {
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 0, _toSharedDataBoolean(isErrorMessage.value));
        }, () => {
          _renderSharedDataEffect(() => {
            _setSharedDataStyle(__sharedData, 1, messageStyle.value);
            _setSharedData(__sharedData, 2, _toDisplayString(message.value));
          });
        });
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 3, _toSharedDataBoolean(__props.borderBottom));
      }, () => {
        const n31 = _createSharedDataComponentWithFallback(_component_up_line, "55437db6", {
          color: () => {
            return lineColor.value;
          },
          customStyle: () => {
            return lineStyle.value;
          }
        });
        _setSharedData(__sharedData, 4, n31?.sharedData);
      });
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-form-item.js.map
