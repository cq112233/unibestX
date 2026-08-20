import { d as defProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-checkbox-group/checkboxGroup&";
import { c as bem } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { u as useUltraUI } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/composable/useUltraUI&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataClass: _setSharedDataClass, renderSharedDataEffect: _renderSharedDataEffect, createSharedDataSlot: _createSharedDataSlot } = globalThis.Vue;
const __className = "GenUniModulesUviewUltraComponentsUpCheckboxGroupUpCheckboxGroup";
const { computed, ref, watch, provide, getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "up-checkbox-group"
  },
  __dynamicSharedData: true,
  __hash: "0cc955b3",
  __className,
  __filename: "uni_modules/uview-ultra/components/up-checkbox-group/up-checkbox-group.uvue",
  __name: "up-checkbox-group",
  props: {
    // 标识符 
    name: {
      type: String,
      default: defProps.getString("checkboxGroup.name")
    },
    // 绑定的值
    modelValue: {
      type: Array,
      default: () => {
        return defProps.getArray("checkboxGroup.value");
      }
    },
    // 形状，circle-圆形，square-方形
    shape: {
      type: String,
      default: defProps.getString("checkboxGroup.shape")
    },
    // 是否禁用全部checkbox
    disabled: {
      type: Boolean,
      default: defProps.getBoolean("checkboxGroup.disabled")
    },
    // 选中状态下的颜色，如设置此值，将会覆盖parent的activeColor值
    activeColor: {
      type: String,
      default: defProps.getString("checkboxGroup.activeColor")
    },
    // 未选中的颜色
    inactiveColor: {
      type: String,
      default: defProps.getString("checkboxGroup.inactiveColor")
    },
    // 整个组件的尺寸 单位px
    size: {
      type: [String, Number],
      default: defProps.getNumber("checkboxGroup.size")
    },
    // 布局方式，row-横向，column-纵向
    placement: {
      type: String,
      default: defProps.getString("checkboxGroup.placement")
    },
    // label的字体大小，px单位
    labelSize: {
      type: [String, Number],
      default: defProps.getNumber("checkboxGroup.labelSize")
    },
    // label的字体颜色
    labelColor: {
      type: String,
      default: defProps.getString("checkboxGroup.labelColor")
    },
    // 是否禁止点击文本操作
    labelDisabled: {
      type: Boolean,
      default: defProps.getBoolean("checkboxGroup.labelDisabled")
    },
    // 图标颜色
    iconColor: {
      type: String,
      default: defProps.getString("checkboxGroup.iconColor")
    },
    // 图标的大小，单位px
    iconSize: {
      type: [String, Number],
      default: defProps.getNumber("checkboxGroup.iconSize")
    },
    // 勾选图标的对齐方式，left-左边，right-右边
    iconPlacement: {
      type: String,
      default: defProps.getString("checkboxGroup.iconPlacement")
    },
    // placement为row时，是否显示下边框
    borderBottom: {
      type: Boolean,
      default: defProps.getBoolean("checkboxGroup.borderBottom")
    }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, _a) {
    var _b;
    var __expose = _a.expose, __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesUviewUltraComponentsUpCheckboxGroupUpCheckboxGroupSharedData", sharedDataClassId: 0 })));
    const _c = useUltraUI(), children = _c.children, getChildren = _c.getChildren, addChild = _c.addChild;
    (_b = getCurrentInstance()) === null || _b === void 0 ? null : _b.proxy;
    const props = __props;
    const emit = __emit;
    const parentDataSelf = computed(() => {
      return new UTSJSONObject({
        modelValue: props.modelValue,
        disabled: props.disabled,
        inactiveColor: props.inactiveColor,
        activeColor: props.activeColor,
        size: props.size,
        labelColor: props.labelColor,
        labelDisabled: props.labelDisabled,
        labelSize: props.labelSize,
        shape: props.shape,
        iconColor: props.iconColor,
        iconSize: props.iconSize,
        iconPlacement: props.iconPlacement,
        borderBottom: props.borderBottom,
        placement: props.placement
      });
    });
    const bemClass = computed(() => {
      return bem("checkbox-group", [props.placement], []);
    });
    function toggleCheckbox(childName, childChecked) {
      let currentValues = [];
      if (props.modelValue != null) {
        const rawArr = props.modelValue;
        currentValues = rawArr.slice();
      }
      let foundIndex = -1;
      for (let i = 0; i < currentValues.length; i++) {
        if (currentValues[i] != null && currentValues[i].toString() == childName.toString()) {
          foundIndex = i;
          break;
        }
      }
      if (childChecked) {
        if (foundIndex == -1) {
          currentValues.push(childName);
        }
      } else {
        if (foundIndex != -1) {
          currentValues.splice(foundIndex, 1);
        }
      }
      emit("update:modelValue", currentValues);
      emit("change", currentValues);
    }
    provide("upCheckboxGroupProps", parentDataSelf);
    provide("upCheckboxGroupToggle", toggleCheckbox);
    function unCheckedOther(childInstance) {
      var _a2;
      const values = [];
      (_a2 = children.value) === null || _a2 === void 0 ? null : _a2.map((child) => {
        let istats = child.$callMethod("getInternalState");
        if (istats["name"] != null && istats["isChecked"] != null && istats["isChecked"].toString() == "true") {
          values.push(istats["name"].toString());
        }
      });
      emit("change", values);
      emit("update:modelValue", values);
    }
    watch(parentDataSelf, () => {
      var _a2;
      (_a2 = children.value) === null || _a2 === void 0 ? null : _a2.map((child) => {
        child === null || child === void 0 ? null : child.$callMethod("init");
      });
    }, { deep: true });
    const getProps = function() {
      return parentDataSelf.value;
    };
    const getRefs = function() {
      return new UTSJSONObject({});
    };
    __expose({
      unCheckedOther,
      getChildren,
      addChild,
      getProps,
      getRefs
    });
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        return _setSharedDataClass(__sharedData, 0, ["up-checkbox-group", bemClass.value]);
      });
      _createSharedDataSlot("default", null, null);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const __easycom_7 = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  __easycom_7 as _
};
//# sourceMappingURL=up-checkbox-group.js.map
