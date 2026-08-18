import { d as defProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-radio-group/radioGroup&";
import { c as bem } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { u as useUltraUI } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/composable/useUltraUI&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed, provide, getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-radio-group"
  },
  __name: "up-radio-group",
  props: {
    // 标识符 
    name: {
      type: String,
      default: defProps.getString("radioGroup.name")
    },
    // 绑定的值
    modelValue: {
      type: [String, Number, Boolean],
      default: defProps.getString("radioGroup.value")
    },
    // 形状，circle-圆形，square-方形
    shape: {
      type: String,
      default: defProps.getString("radioGroup.shape")
    },
    // 是否禁用全部radio
    disabled: {
      type: Boolean,
      default: defProps.getBoolean("radioGroup.disabled")
    },
    // 选中状态下的颜色，如设置此值，将会覆盖parent的activeColor值
    activeColor: {
      type: String,
      default: defProps.getString("radioGroup.activeColor")
    },
    // 未选中的颜色
    inactiveColor: {
      type: String,
      default: defProps.getString("radioGroup.inactiveColor")
    },
    // 整个组件的尺寸 单位px
    size: {
      type: [String, Number],
      default: defProps.getNumber("radioGroup.size")
    },
    // 布局方式，row-横向，column-纵向
    placement: {
      type: String,
      default: defProps.getString("radioGroup.placement")
    },
    // label的字体大小，px单位
    labelSize: {
      type: [String, Number],
      default: defProps.getNumber("radioGroup.labelSize")
    },
    // label的字体颜色
    labelColor: {
      type: String,
      default: defProps.getString("radioGroup.labelColor")
    },
    // 是否禁止点击文本操作
    labelDisabled: {
      type: Boolean,
      default: defProps.getBoolean("radioGroup.labelDisabled")
    },
    // 图标颜色
    iconColor: {
      type: String,
      default: defProps.getString("radioGroup.iconColor")
    },
    // 图标的大小，单位px
    iconSize: {
      type: [String, Number],
      default: defProps.getNumber("radioGroup.iconSize")
    },
    // 勾选图标的对齐方式，left-左边，right-右边
    iconPlacement: {
      type: String,
      default: defProps.getString("radioGroup.iconPlacement")
    },
    // placement为column时，是否显示下边框
    borderBottom: {
      type: Boolean,
      default: defProps.getBoolean("radioGroup.borderBottom")
    }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, _a) {
    var _b;
    var __expose = _a.expose, __emit = _a.emit;
    const _c = useUltraUI(), getChildren = _c.getChildren, addChild = _c.addChild;
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
      return bem("radio-group", [props.placement], []);
    });
    function onRadioChange(name = null) {
      if (name != null) {
        emit("update:modelValue", name);
        emit("change", name);
      } else {
        emit("update:modelValue", "");
        emit("change", "");
      }
    }
    provide("upRadioGroupProps", parentDataSelf);
    provide("upRadioGroupChange", onRadioChange);
    function unCheckedOther(childInstance) {
      const name = childInstance.$props["name"];
      onRadioChange(name);
    }
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
    const __returned__ = { getChildren, addChild, instance, props, emit, parentDataSelf, bemClass, onRadioChange, unCheckedOther, getProps, getRefs };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"u-empty":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-empty__wrap":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__scroll-view-wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__scroll-view":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__nav":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__nav__line":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-empty":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-empty__wrap":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__scroll-view-wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__scroll-view":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__nav":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__nav__line":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-radio-group":{"":{"flexGrow":1,"flexShrink":1,"flexBasis":"0%"}},"up-radio-group--row":{"":{"display":"flex","flexDirection":"row","flexWrap":"wrap"}},"up-radio-group--column":{"":{"display":"flex","flexDirection":"column"}},"flex":{"":{"display":"flex"}}};
const { renderSlot: _renderSlot, normalizeClass: _normalizeClass, openBlock: _openBlock, createElementBlock: _createElementBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: _normalizeClass(["up-radio-group", $setup.bemClass])
    },
    [
      _renderSlot(_ctx.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-radio-group/up-radio-group.uvue"]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-radio-group.js.map
