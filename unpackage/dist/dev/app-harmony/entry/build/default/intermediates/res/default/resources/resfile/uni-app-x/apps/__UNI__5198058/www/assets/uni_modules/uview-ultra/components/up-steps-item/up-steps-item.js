import { _ as __easycom_0 } from "../up-icon/up-icon.js";
import { r as resolveEasycom } from "../../../../App.ku.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed, inject, ref, onMounted } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-steps-item"
  },
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
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
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
      var _a2;
      if (parentProps == null)
        return defaultVal;
      const obj = parentProps.value;
      if (obj != null && obj[key] != null) {
        return (_a2 = obj[key]) !== null && _a2 !== void 0 ? _a2 : defaultVal;
      }
      return defaultVal;
    }
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
      var _a2;
      return (_a2 = getParentProp("dot", false)) !== null && _a2 !== void 0 ? _a2 : false;
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
      var _a2;
      return (_a2 = props.itemStyle) !== null && _a2 !== void 0 ? _a2 : new UTSJSONObject({});
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
    const __returned__ = { props, parentProps, registerStep, totalSteps, internalIndex, getParentProp, stepIndex, childLength, direction, currentStep, activeColor, inactiveColor, activeIcon, inactiveIcon, isDot, statusClass, itemContainerStyle, itemStyleInner, contentStyle, lineLeftStyle, lineRightStyle, lineColTopStyle, lineColBottomStyle, dotStyle, circleStyle, circleTextStyle, titleStyle, descStyle };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = {"u-empty":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-empty__wrap":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__scroll-view-wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__scroll-view":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__nav":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"u-tabs__wrapper__nav__line":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-empty":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-empty__wrap":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__scroll-view-wrapper":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__scroll-view":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__nav":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-tabs__wrapper__nav__line":{"":{"display":"flex","flexDirection":"column","flexShrink":0,"flexGrow":0,"flexBasis":"auto","alignItems":"stretch","alignContent":"flex-start"}},"up-steps-item":{"":{"position":"relative","display":"flex"}},"up-steps-item--row":{"":{"flexGrow":1,"flexShrink":1,"flexBasis":"0%","flexDirection":"column","alignItems":"center","justifyContent":"flex-start"}},"up-steps-item--column":{"":{"flexDirection":"row","alignItems":"flex-start","width":"100%","minHeight":60}},"up-steps-item__wrapper":{"":{"display":"flex","justifyContent":"center","alignItems":"center","position":"relative","backgroundColor":"#ffffff","zIndex":2}},"up-steps-item__wrapper--row":{"":{"height":24,"width":24}},"up-steps-item__wrapper--row--dot":{"":{"width":16,"height":16}},"up-steps-item__wrapper--column":{"":{"width":24,"height":24,"marginRight":10}},"up-steps-item__wrapper--column--dot":{"":{"height":16,"width":16}},"up-steps-item__wrapper__circle":{"":{"width":20,"height":20,"borderTopLeftRadius":100,"borderTopRightRadius":100,"borderBottomRightRadius":100,"borderBottomLeftRadius":100,"borderTopWidth":1,"borderRightWidth":1,"borderBottomWidth":1,"borderLeftWidth":1,"borderTopStyle":"solid","borderRightStyle":"solid","borderBottomStyle":"solid","borderLeftStyle":"solid","display":"flex","flexDirection":"row","alignItems":"center","justifyContent":"center"}},"up-steps-item__wrapper__circle__text":{"":{"fontSize":11,"textAlign":"center","lineHeight":"11px"}},"up-steps-item__wrapper__dot":{"":{"width":8,"height":8,"borderTopLeftRadius":100,"borderTopRightRadius":100,"borderBottomRightRadius":100,"borderBottomLeftRadius":100}},"up-steps-item__content":{"":{"display":"flex"}},"up-steps-item__content--row":{"":{"flexDirection":"column","alignItems":"center","marginTop":6,"width":"100%"}},"up-steps-item__content--column":{"":{"flexDirection":"column","flexGrow":1,"flexShrink":1,"flexBasis":"0%","paddingBottom":16}},"up-steps-item__content__title-text":{"":{"fontSize":13,"lineHeight":"18px","textAlign":"center"}},"up-steps-item__content__desc-text":{"":{"fontSize":11,"lineHeight":"16px","marginTop":2,"textAlign":"center"}},"up-steps-item__line":{"":{"position":"absolute","zIndex":1}},"up-steps-item__line--row-left":{"":{"top":11,"left":0,"width":"50%","height":2}},"up-steps-item__line--row-right":{"":{"top":11,"left":"50%","width":"50%","height":2}},"up-steps-item__line--col-top":{"":{"top":0,"left":11,"width":2,"height":12}},"up-steps-item__line--col-bottom":{"":{"top":12,"bottom":0,"left":11,"width":2}},"flex":{"":{"display":"flex"}},"relative":{"":{"position":"relative"}}};
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { normalizeStyle: _normalizeStyle, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, renderSlot: _renderSlot, resolveComponent: _resolveComponent, createVNode: _createVNode, toDisplayString: _toDisplayString, createBlock: _createBlock, normalizeClass: _normalizeClass, createElementVNode: _createElementVNode } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(__resolveDynamicComponent("up-icon"), __easycom_0);
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: _normalizeClass(["up-steps-item", [`up-steps-item--${$setup.direction}`]]),
      style: _normalizeStyle($setup.itemContainerStyle)
    },
    [
      $setup.direction == "row" && $setup.stepIndex > 0 ? (_openBlock(), _createElementBlock(
        "view",
        {
          key: 0,
          class: "up-steps-item__line up-steps-item__line--row-left",
          style: _normalizeStyle($setup.lineLeftStyle)
        },
        null,
        4
        /* STYLE */
      )) : _createCommentVNode("v-if", true),
      $setup.direction == "row" && ($setup.childLength == 0 || $setup.stepIndex < $setup.childLength - 1) ? (_openBlock(), _createElementBlock(
        "view",
        {
          key: 1,
          class: "up-steps-item__line up-steps-item__line--row-right",
          style: _normalizeStyle($setup.lineRightStyle)
        },
        null,
        4
        /* STYLE */
      )) : _createCommentVNode("v-if", true),
      $setup.direction == "column" && $setup.stepIndex > 0 ? (_openBlock(), _createElementBlock(
        "view",
        {
          key: 2,
          class: "up-steps-item__line up-steps-item__line--col-top",
          style: _normalizeStyle($setup.lineColTopStyle)
        },
        null,
        4
        /* STYLE */
      )) : _createCommentVNode("v-if", true),
      $setup.direction == "column" && ($setup.childLength == 0 || $setup.stepIndex < $setup.childLength - 1) ? (_openBlock(), _createElementBlock(
        "view",
        {
          key: 3,
          class: "up-steps-item__line up-steps-item__line--col-bottom",
          style: _normalizeStyle($setup.lineColBottomStyle)
        },
        null,
        4
        /* STYLE */
      )) : _createCommentVNode("v-if", true),
      _createElementVNode(
        "view",
        {
          class: _normalizeClass(["up-steps-item__wrapper", [`up-steps-item__wrapper--${$setup.direction}`, $setup.isDot ? `up-steps-item__wrapper--${$setup.direction}--dot` : ""]]),
          style: _normalizeStyle($setup.itemStyleInner)
        },
        [
          _renderSlot(_ctx.$slots, "icon", {}, () => [
            $setup.isDot ? (_openBlock(), _createElementBlock(
              "view",
              {
                key: 0,
                class: "up-steps-item__wrapper__dot",
                style: _normalizeStyle($setup.dotStyle)
              },
              null,
              4
              /* STYLE */
            )) : $setup.activeIcon != "" || $setup.inactiveIcon != "" ? (_openBlock(), _createElementBlock("view", {
              key: 1,
              class: "up-steps-item__wrapper__icon"
            }, [
              _createVNode(_component_up_icon, {
                name: $setup.stepIndex <= $setup.currentStep ? $setup.activeIcon != "" ? $setup.activeIcon : $setup.inactiveIcon : $setup.inactiveIcon != "" ? $setup.inactiveIcon : $setup.activeIcon,
                size: $props.iconSize,
                color: $setup.stepIndex <= $setup.currentStep ? $setup.activeColor != "" ? $setup.activeColor : "#3c9cff" : $setup.inactiveColor
              }, null, 8, ["name", "size", "color"])
            ])) : (_openBlock(), _createElementBlock(
              "view",
              {
                key: 2,
                class: "up-steps-item__wrapper__circle",
                style: _normalizeStyle($setup.circleStyle)
              },
              [
                $setup.statusClass == "process" || $setup.statusClass == "wait" ? (_openBlock(), _createElementBlock(
                  "text",
                  {
                    key: 0,
                    class: "up-steps-item__wrapper__circle__text",
                    style: _normalizeStyle($setup.circleTextStyle)
                  },
                  _toDisplayString($setup.stepIndex + 1),
                  5
                  /* TEXT, STYLE */
                )) : (_openBlock(), _createBlock(_component_up_icon, {
                  key: 1,
                  color: $setup.statusClass == "error" ? "#f56c6c" : $setup.activeColor != "" ? $setup.activeColor : "#3c9cff",
                  size: "12",
                  name: $setup.statusClass == "error" ? "close" : "checkmark"
                }, null, 8, ["color", "name"]))
              ],
              4
              /* STYLE */
            ))
          ])
        ],
        6
        /* CLASS, STYLE */
      ),
      _createElementVNode(
        "view",
        {
          class: _normalizeClass(["up-steps-item__content", [`up-steps-item__content--${$setup.direction}`]]),
          style: _normalizeStyle($setup.contentStyle)
        },
        [
          _renderSlot(_ctx.$slots, "content", { index: $setup.stepIndex }, () => [
            _renderSlot(_ctx.$slots, "title", {}, () => [
              _createElementVNode(
                "text",
                {
                  class: "up-steps-item__content__title-text",
                  style: _normalizeStyle($setup.titleStyle)
                },
                _toDisplayString($props.title.toString()),
                5
                /* TEXT, STYLE */
              )
            ]),
            _renderSlot(_ctx.$slots, "desc", {}, () => [
              $props.desc.toString() != "" ? (_openBlock(), _createElementBlock(
                "text",
                {
                  key: 0,
                  class: "up-steps-item__content__desc-text",
                  style: _normalizeStyle($setup.descStyle)
                },
                _toDisplayString($props.desc.toString()),
                5
                /* TEXT, STYLE */
              )) : _createCommentVNode("v-if", true)
            ])
          ])
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-steps-item/up-steps-item.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-steps-item.js.map
