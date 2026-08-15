import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
import { _ as __easycom_0$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-line/up-line&";
import { d as defProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-form-item/formItem&";
import { p as propsLine } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-line/line&";
import { c as color } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/config/color&";
import { k as error } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { u as useUltraUI } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/composable/useUltraUI&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, resolveComponent: _resolveComponent, unref: _unref, setSharedDataClass: _setSharedDataClass, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataIf: _createSharedDataIf, createSharedDataComponentWithFallback: _createSharedDataComponentWithFallback, toDisplayString: _toDisplayString, createSharedDataSlot: _createSharedDataSlot, setSharedDataEvent: _setSharedDataEvent } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpFormItemUpFormItem";
const { getCurrentInstance, ref, reactive, computed, onMounted, watch } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-form-item"
  },
  __dynamicSharedData: true,
  __hash: "6361130c",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-form-item/up-form-item.uvue",
  __name: "up-form-item",
  props: {
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
      const _component_up_icon = __easycom_0;
      const _component_up_line = __easycom_0$1;
      _renderSharedDataEffect(() => {
        const _parentData = _unref(parentData);
        const _labelPosition = __props.labelPosition;
        _setSharedDataClass(__sharedData, 15, ["up-form-item", { "up-form-item--error": message.value != "" && _parentData["errorType"] == "message" }]);
        _setSharedDataStyle(__sharedData, 16, [$up.addStyle(customStyle), {
          flexDirection: (_labelPosition != "" ? _labelPosition : _parentData["labelPosition"]) == "left" ? "row" : "column"
        }]);
      });
      _createSharedDataSlot("label", null, null, () => {
        _createSharedDataIf(() => {
          return _setSharedData(__sharedData, 5, _toSharedDataBoolean(__props.required || __props.leftIcon != "" || __props.label != ""));
        }, () => {
          _renderSharedDataEffect(() => {
            const _labelWidth = __props.labelWidth;
            const _parentData = _unref(parentData);
            const _labelPosition = __props.labelPosition;
            _setSharedDataStyle(__sharedData, 9, {
              width: $up.addUnit(_labelWidth != "" ? _labelWidth : _parentData["labelWidth"]),
              marginBottom: (_labelPosition != "" ? _labelPosition : _parentData["labelPosition"]) == "left" ? 0 : "5px"
            });
          });
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 6, _toSharedDataBoolean(__props.required));
          }, () => {
          });
          _createSharedDataIf(() => {
            return _setSharedData(__sharedData, 7, _toSharedDataBoolean(__props.leftIcon != ""));
          }, () => {
            const n9 = _createSharedDataComponentWithFallback(_component_up_icon, "5543a476", {
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
            const _parentData = _unref(parentData);
            const _parentData_labelAlign = _parentData["labelAlign"];
            _setSharedDataStyle(__sharedData, 10, {
              justifyContent: _parentData_labelAlign == "left" ? "flex-start" : _parentData_labelAlign == "center" ? "center" : "flex-end"
            });
            _setSharedDataStyle(__sharedData, 11, _parentData["labelStyle"] ?? {});
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
          return _setSharedData(__sharedData, 0, _toSharedDataBoolean(message.value != "" && _unref(parentData)["errorType"] == "message"));
        }, () => {
          _renderSharedDataEffect(() => {
            const _parentData = _unref(parentData);
            const _labelWidth = __props.labelWidth;
            _setSharedDataStyle(__sharedData, 1, {
              marginLeft: $up.addUnit((__props.labelPosition ?? _parentData["labelPosition"]) == "top" ? 0 : _labelWidth != null ? _labelWidth : _parentData["labelWidth"])
            });
            _setSharedData(__sharedData, 2, _toDisplayString(message.value));
          });
        });
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 3, _toSharedDataBoolean(__props.borderBottom));
      }, () => {
        const n31 = _createSharedDataComponentWithFallback(_component_up_line, "5542aad2", {
          color: () => {
            return message.value != "" && _unref(parentData)["errorType"] == "border-bottom" ? _unref(color)["error"] : _unref(propsLine)["color"];
          },
          customStyle: () => {
            return `margin-top: ${message.value != "" && _unref(parentData)["errorType"] == "message" ? "5px" : 0}`;
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
