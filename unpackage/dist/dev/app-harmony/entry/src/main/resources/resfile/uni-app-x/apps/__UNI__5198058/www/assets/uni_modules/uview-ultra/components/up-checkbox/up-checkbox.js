import { _ as __easycom_0 } from "../up-icon/up-icon.js";
import { r as resolveEasycom } from "../../../../App.ku.js";
import { a as addUnit, i as error, d as deepMerge, b as addStyle } from "../../libs/function/index.js";
import { d as defProps } from "./checkbox.js";
import { u as useUltraUI } from "../../libs/composable/useUltraUI.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed, ref, watch, onMounted, inject, getCurrentInstance } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-checkbox"
  },
  __name: "up-checkbox",
  props: {
    // checkbox组件的标示符
    name: {
      type: [String, Number, Boolean],
      default: defProps.getAny("checkbox.name")
    },
    // 形状，square为方形，circle为圆型
    shape: {
      type: String,
      default: defProps.getString("checkbox.shape")
    },
    // 整体的大小
    size: {
      type: [String, Number],
      default: defProps.getAny("checkbox.size")
    },
    // 是否默认选中
    checked: {
      type: Boolean,
      default: defProps.getBoolean("checkbox.checked")
    },
    // 是否禁用
    disabled: {
      type: [String, Boolean],
      default: defProps.getAny("checkbox.disabled")
    },
    // 选中状态下的颜色，如设置此值，将会覆盖parent的activeColor值
    activeColor: {
      type: String,
      default: defProps.getString("checkbox.activeColor")
    },
    // 未选中的颜色
    inactiveColor: {
      type: String,
      default: defProps.getString("checkbox.inactiveColor")
    },
    // 图标的大小，单位px
    iconSize: {
      type: [String, Number],
      default: defProps.getAny("checkbox.iconSize")
    },
    // 图标颜色
    iconColor: {
      type: String,
      default: defProps.getString("checkbox.iconColor")
    },
    // label提示文字，因为nvue下，直接slot进来的文字，由于特殊的结构，无法修改样式
    label: {
      type: [String, Number],
      default: defProps.getAny("checkbox.label")
    },
    // label的颜色
    labelColor: {
      type: String,
      default: defProps.getString("checkbox.labelColor")
    },
    // label的字体大小，px单位
    labelSize: {
      type: [String, Number],
      default: defProps.getAny("checkbox.labelSize")
    },
    // 是否禁止点击提示语选中复选框
    labelDisabled: {
      type: [String, Boolean],
      default: defProps.getAny("checkbox.labelDisabled")
    },
    // 定义需要用到的外部样式
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    },
    // 是否独立使用
    usedAlone: {
      type: Boolean,
      default: false
    }
  },
  emits: ["change", "update:checked"],
  setup(__props, _a) {
    var _b;
    var __expose = _a.expose, __emit = _a.emit;
    const _c = useUltraUI(), parent = _c.parent, parentData = _c.parentData, getParentData = _c.getParentData;
    const instance = (_b = getCurrentInstance()) === null || _b === void 0 ? null : _b.proxy;
    const props = __props;
    const emit = __emit;
    const injectedParentProps = inject("upCheckboxGroupProps", null);
    const injectedParentToggle = inject("upCheckboxGroupToggle", null);
    function getParentVal(key) {
      if (!props.usedAlone) {
        if (injectedParentProps != null && injectedParentProps.value != null) {
          const obj = injectedParentProps.value;
          if (obj != null && obj[key] != null) {
            return obj[key];
          }
        }
        if (parentData.value != null && parentData.value[key] != null) {
          return parentData.value[key];
        }
      }
      return null;
    }
    const selfChecked = ref(props.checked);
    const isChecked = computed(() => {
      if (!props.usedAlone) {
        const val = getParentVal("modelValue");
        if (val != null) {
          const arr = val;
          if (props.name != null) {
            for (let i = 0; i < arr.length; i++) {
              if (arr[i] != null && arr[i].toString() == props.name.toString()) {
                return true;
              }
            }
          }
          return false;
        }
      }
      return selfChecked.value;
    });
    const elDisabled = computed(() => {
      let disabledVal = props.disabled;
      if (disabledVal != null && disabledVal.toString() != "") {
        return disabledVal.toString() == "true";
      }
      const p = getParentVal("disabled");
      if (p != null) {
        return p;
      }
      return false;
    });
    const elLabelDisabled = computed(() => {
      let labelDisabledVal = props.labelDisabled;
      if (labelDisabledVal != null && labelDisabledVal.toString() != "") {
        return labelDisabledVal.toString() == "true";
      }
      const p = getParentVal("labelDisabled");
      if (p != null) {
        return p;
      }
      return false;
    });
    const elSize = computed(() => {
      if (props.size != null && props.size.toString() != "") {
        return props.size.toString();
      }
      const p = getParentVal("size");
      if (p != null && p.toString() != "") {
        return p.toString();
      }
      return "21";
    });
    const elIconSize = computed(() => {
      if (props.iconSize != null && props.iconSize.toString() != "") {
        return props.iconSize.toString();
      }
      const p = getParentVal("iconSize");
      if (p != null && p.toString() != "") {
        return p.toString();
      }
      return "12";
    });
    const elActiveColor = computed(() => {
      const activeColorProp = props.activeColor;
      if (activeColorProp != null && activeColorProp.toString() != "") {
        return activeColorProp.toString();
      }
      const p = getParentVal("activeColor");
      if (p != null && p.toString() != "") {
        return p.toString();
      }
      return "#2979ff";
    });
    const elInactiveColor = computed(() => {
      const inactiveColorProp = props.inactiveColor;
      if (inactiveColorProp != null && inactiveColorProp.toString() != "") {
        return inactiveColorProp.toString();
      }
      const p = getParentVal("inactiveColor");
      if (p != null && p.toString() != "") {
        return p.toString();
      }
      return "#c8c9cc";
    });
    const elLabelColor = computed(() => {
      if (props.labelColor != null && props.labelColor.toString() != "") {
        return props.labelColor.toString();
      }
      const p = getParentVal("labelColor");
      if (p != null && p.toString() != "") {
        return p.toString();
      }
      return "#606266";
    });
    const elShape = computed(() => {
      if (props.shape != null && props.shape.toString() != "") {
        return props.shape.toString();
      }
      const p = getParentVal("shape");
      if (p != null && p.toString() != "") {
        return p.toString();
      }
      return "circle";
    });
    const elLabelSize = computed(() => {
      if (props.labelSize != null && props.labelSize.toString() != "") {
        return addUnit(props.labelSize.toString());
      }
      const p = getParentVal("labelSize");
      if (p != null && p.toString() != "") {
        return addUnit(p.toString());
      }
      return addUnit("15");
    });
    const elIconColor = computed(() => {
      let iconColor = "#ffffff";
      if (props.iconColor.toString() != "") {
        iconColor = props.iconColor.toString();
      } else {
        const p = getParentVal("iconColor");
        if (p != null && p.toString() != "") {
          iconColor = p.toString();
        }
      }
      if (elDisabled.value) {
        return isChecked.value ? elInactiveColor.value : "transparent";
      } else {
        return isChecked.value ? iconColor : "transparent";
      }
    });
    const iconClasses = computed(() => {
      let classes = [];
      classes.push("up-checkbox__icon-wrap--" + elShape.value.toString());
      if (elDisabled.value) {
        classes.push("up-checkbox__icon-wrap--disabled");
      }
      if (isChecked.value && elDisabled.value) {
        classes.push("up-checkbox__icon-wrap--disabled--checked");
      }
      if (isChecked.value && !elDisabled.value && elActiveColor.value == "#2979ff") {
        classes.push("up-checkbox__icon-wrap--active");
      }
      return classes.join(" ");
    });
    const iconWrapStyle = computed(() => {
      const style = new UTSJSONObject({});
      if (isChecked.value && !elDisabled.value) {
        if (elActiveColor.value != "#2979ff") {
          style["backgroundColor"] = elActiveColor.value;
          style["borderColor"] = elActiveColor.value;
        }
      } else {
        style["backgroundColor"] = "#ffffff";
        style["borderColor"] = elInactiveColor.value;
      }
      style["width"] = addUnit(elSize.value);
      style["height"] = addUnit(elSize.value);
      const iconPlacement = getParentVal("iconPlacement");
      if (iconPlacement != null && iconPlacement.toString() == "right") {
        style["marginRight"] = 0;
      }
      return style;
    });
    const checkboxStyle = computed(() => {
      const style = new UTSJSONObject({});
      const borderBottom = getParentVal("borderBottom");
      const placement = getParentVal("placement");
      if (borderBottom != null && borderBottom.toString() == "true" && placement != null && placement.toString() == "row") {
        error("检测到您将borderBottom设置为true，需要同时将up-checkbox-group的placement设置为column才有效");
      }
      if (borderBottom != null && borderBottom.toString() == "true" && placement != null && placement.toString() == "column") {
        style["paddingBottom"] = "8px";
      }
      return deepMerge(style, addStyle(props.customStyle));
    });
    const iconPlacementClass = computed(() => {
      const p = getParentVal("iconPlacement");
      if (p != null && p.toString() != "") {
        return "up-checkbox-label--" + p.toString();
      }
      return "up-checkbox-label--left";
    });
    const borderBottomClass = computed(() => {
      const borderBottom = getParentVal("borderBottom");
      const placement = getParentVal("placement");
      if (borderBottom != null && borderBottom.toString() == "true" && placement != null && placement.toString() == "column") {
        return "up-border-bottom";
      }
      return "";
    });
    const init = function() {
      if (!props.usedAlone && injectedParentProps == null) {
        parentData.value = new UTSJSONObject({
          iconSize: 12,
          labelDisabled: null,
          disabled: null,
          shape: "square",
          activeColor: null,
          inactiveColor: null,
          size: 18,
          modelValue: null,
          iconColor: null,
          placement: "row",
          borderBottom: false,
          iconPlacement: "left"
        });
        if (instance != null) {
          getParentData("up-checkbox-group", instance, false);
        }
      }
      if (props.checked) {
        selfChecked.value = true;
      }
    };
    function setRadioCheckedStatus() {
      var _a2;
      const targetChecked = !isChecked.value;
      if (!props.usedAlone && injectedParentToggle != null) {
        injectedParentToggle(props.name != null ? props.name.toString() : "", targetChecked);
      } else {
        selfChecked.value = targetChecked;
        if (!props.usedAlone && parent.value != null && instance != null) {
          (_a2 = parent.value) === null || _a2 === void 0 ? null : _a2.$callMethod("unCheckedOther", instance);
        }
      }
      emit("change", targetChecked);
      if (props.usedAlone) {
        emit("update:checked", targetChecked);
      }
      setTimeout(() => {
      }, 10);
    }
    function iconClickHandler(e) {
      e.stopPropagation();
      if (!elDisabled.value) {
        setRadioCheckedStatus();
      }
    }
    function wrapperClickHandler(e) {
      const iconPlacement = getParentVal("iconPlacement");
      if (iconPlacement != null && iconPlacement.toString() == "right") {
        iconClickHandler(e);
      }
    }
    function labelClickHandler(e) {
      e.stopPropagation();
      if (!elLabelDisabled.value && !elDisabled.value) {
        setRadioCheckedStatus();
      }
    }
    watch(() => {
      return props.checked;
    }, (newVal) => {
      if (newVal != selfChecked.value) {
        selfChecked.value = newVal;
      }
    });
    onMounted(() => {
      init();
    });
    const getInternalState = () => {
      return new UTSJSONObject({
        name: props.name,
        isChecked: isChecked.value
      });
    };
    __expose({
      init,
      getInternalState
    });
    const __returned__ = { parent, parentData, getParentData, instance, props, emit, injectedParentProps, injectedParentToggle, getParentVal, selfChecked, isChecked, elDisabled, elLabelDisabled, elSize, elIconSize, elActiveColor, elInactiveColor, elLabelColor, elShape, elLabelSize, elIconColor, iconClasses, iconWrapStyle, checkboxStyle, iconPlacementClass, borderBottomClass, init, setRadioCheckedStatus, iconClickHandler, wrapperClickHandler, labelClickHandler, getInternalState };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"u-empty":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-empty__wrap":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__scroll-view-wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__scroll-view":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__nav":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__nav__line":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-empty":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-empty__wrap":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__scroll-view-wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__scroll-view":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__nav":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__nav__line":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-checkbox":{"":{"display":"flex","flexDirection":"row","overflow":"hidden","alignItems":"center","marginBottom":5,"marginTop":5}},"up-checkbox-label--left":{"":{"flexDirection":"row"}},"up-checkbox-label--right":{"":{"flexDirection":"row-reverse","justifyContent":"space-between"}},"up-checkbox__icon-wrap":{"":{"display":"flex","flexDirection":"row","alignItems":"center","justifyContent":"center","marginRight":6,"borderTopWidth":1,"borderRightWidth":1,"borderBottomWidth":1,"borderLeftWidth":1,"borderTopColor":"#c8c9cc","borderRightColor":"#c8c9cc","borderBottomColor":"#c8c9cc","borderLeftColor":"#c8c9cc","borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid"}},"up-checkbox__icon-wrap--circle":{"":{"borderTopLeftRadius":99,"borderTopRightRadius":99,"borderBottomRightRadius":99,"borderBottomLeftRadius":99}},"up-checkbox__icon-wrap--square":{"":{"borderTopLeftRadius":3,"borderTopRightRadius":3,"borderBottomRightRadius":3,"borderBottomLeftRadius":3}},"up-checkbox__icon-wrap--checked":{"":{"color":"#ffffff","backgroundColor":"#FF0000","borderTopColor":"#2979ff","borderRightColor":"#2979ff","borderBottomColor":"#2979ff","borderLeftColor":"#2979ff"}},"up-checkbox__icon-wrap--active":{"":{"backgroundColor":"var(--theme-color, #0957de)","borderTopColor":"var(--theme-color, #0957de)","borderRightColor":"var(--theme-color, #0957de)","borderBottomColor":"var(--theme-color, #0957de)","borderLeftColor":"var(--theme-color, #0957de)"}},"up-checkbox__icon-wrap--disabled":{"":{"!backgroundColor":"#ebedf0"}},"up-checkbox__icon-wrap--disabled--checked":{"":{"!color":"#c8c9cc"}},"up-checkbox__label":{"":{"marginLeft":5,"marginRight":12,"color":"#606266","fontSize":15}},"up-checkbox__label--disabled":{"":{"color":"#c8c9cc"}},"up-border-bottom":{"":{"borderBottomWidth":0.5,"borderColor":"#dadbde","borderBottomStyle":"solid"}},"flex":{"":{"display":"flex"}}};
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { renderSlot: _renderSlot, resolveComponent: _resolveComponent, createVNode: _createVNode, withModifiers: _withModifiers, normalizeClass: _normalizeClass, normalizeStyle: _normalizeStyle, createElementVNode: _createElementVNode, toDisplayString: _toDisplayString, openBlock: _openBlock, createElementBlock: _createElementBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(__resolveDynamicComponent("up-icon"), __easycom_0);
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: _normalizeClass(["up-checkbox cursor-pointer", [$setup.iconPlacementClass, $setup.borderBottomClass]]),
      style: _normalizeStyle([$setup.checkboxStyle]),
      onClick: _withModifiers($setup.wrapperClickHandler, ["stop"])
    },
    [
      _createElementVNode(
        "view",
        {
          class: _normalizeClass(["up-checkbox__icon-wrap cursor-pointer", $setup.iconClasses]),
          onClick: _withModifiers($setup.iconClickHandler, ["stop"]),
          style: _normalizeStyle([$setup.iconWrapStyle])
        },
        [
          _renderSlot(_ctx.$slots, "icon", {}, () => [
            _createVNode(_component_up_icon, {
              class: "up-checkbox__icon-wrap__icon",
              name: "checkbox-mark",
              size: $setup.elIconSize,
              color: $setup.elIconColor
            }, null, 8, ["size", "color"])
          ])
        ],
        6
        /* CLASS, STYLE */
      ),
      _renderSlot(_ctx.$slots, "label", {
        label: $props.label,
        elDisabled: $setup.elDisabled
      }, () => [
        _createElementVNode(
          "text",
          {
            onClick: _withModifiers($setup.labelClickHandler, ["stop"]),
            style: _normalizeStyle({
              color: $setup.elDisabled ? $setup.elInactiveColor : $setup.elLabelColor,
              fontSize: $setup.elLabelSize,
              lineHeight: $setup.elLabelSize
            })
          },
          _toDisplayString($props.label),
          5
          /* TEXT, STYLE */
        )
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-checkbox/up-checkbox.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-checkbox.js.map
