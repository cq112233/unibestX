import { d as defProps } from "./checkboxGroup.js";
import { c as bem } from "../../libs/function/index.js";
import { u as useUltraUI } from "../../libs/composable/useUltraUI.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed, ref, watch, provide, getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-checkbox-group"
  },
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
    const _c = useUltraUI(), children = _c.children, getChildren = _c.getChildren, addChild = _c.addChild;
    const instance = (_b = getCurrentInstance()) === null || _b === void 0 ? null : _b.proxy;
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
    const __returned__ = { children, getChildren, addChild, instance, props, emit, parentDataSelf, bemClass, toggleCheckbox, unCheckedOther, getProps, getRefs };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"u-empty":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-empty__wrap":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__scroll-view-wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__scroll-view":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__nav":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__nav__line":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-empty":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-empty__wrap":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__scroll-view-wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__scroll-view":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__nav":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__nav__line":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-checkbox-group--row":{"":{"display":"flex","flexDirection":"row","flexWrap":"wrap"}},"up-checkbox-group--column":{"":{"display":"flex","flexDirection":"column"}},"flex":{"":{"display":"flex"}}};
const { renderSlot: _renderSlot, normalizeClass: _normalizeClass, openBlock: _openBlock, createElementBlock: _createElementBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: _normalizeClass(["up-checkbox-group", $setup.bemClass])
    },
    [
      _renderSlot(_ctx.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-checkbox-group/up-checkbox-group.uvue"]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-checkbox-group.js.map
