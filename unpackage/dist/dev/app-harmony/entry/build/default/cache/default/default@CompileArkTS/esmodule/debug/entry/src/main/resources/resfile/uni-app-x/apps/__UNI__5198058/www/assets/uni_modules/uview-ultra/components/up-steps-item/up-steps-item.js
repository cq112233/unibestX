import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { _ as __easycom_0$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-text/up-text&";
import { c as color } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/config/color&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
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
    const __returned__ = { props, parentProps, registerStep, totalSteps, internalIndex, stepIndex, childLength, direction, currentStep, activeColor, inactiveColor, activeIcon, inactiveIcon, isDot, statusClass, itemWidthStyle, itemStyleInner, contentStyle, lineStyle2, lineStyle, dotStyle, circleStyle, circleTextStyle };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-steps-item": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "display": "flex", "flexDirection": "row", "position": "relative" } }, "up-steps-item--row": { "": { "flexDirection": "column", "alignItems": "center", "justifyContent": "center" } }, "up-steps-item--column": { "": { "flexDirection": "row", "justifyContent": "flex-start", "minHeight": 50 } }, "up-steps-item__wrapper": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "position": "relative", "backgroundColor": "#ffffff" } }, "up-steps-item__wrapper--column": { "": { "width": 20, "height": 32 } }, "up-steps-item__wrapper--column--dot": { "": { "height": 20, "width": 20 } }, "up-steps-item__wrapper--row": { "": { "height": 32, "width": 32 } }, "up-steps-item__wrapper--row--dot": { "": { "width": 20, "height": 20 } }, "up-steps-item__wrapper__circle": { "": { "width": 20, "height": 20, "boxSizing": "border-box", "flexDirection": "row", "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 100, "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1, "borderTopColor": "#909193", "borderRightColor": "#909193", "borderBottomColor": "#909193", "borderLeftColor": "#909193", "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid", "display": "flex", "alignItems": "center", "justifyContent": "center", "transitionProperty": "backgroundColor", "transitionDuration": "0.3s" } }, "up-steps-item__wrapper__circle__text": { "": { "color": "#909193", "fontSize": 11, "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "textAlign": "center", "lineHeight": "11px" } }, "up-steps-item__wrapper__dot": { "": { "width": 10, "height": 10, "borderTopLeftRadius": 100, "borderTopRightRadius": 100, "borderBottomRightRadius": 100, "borderBottomLeftRadius": 100, "backgroundColor": "#606266" } }, "up-steps-item__content": { "": { "display": "flex", "flexDirection": "row", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "up-steps-item__content--row": { "": { "flexDirection": "column", "alignItems": "center", "textAlign": "center" } }, "up-steps-item__content--column": { "": { "flexDirection": "column", "marginLeft": 6 } }, "up-steps-item__line": { "": { "position": "absolute", "backgroundImage": "none", "backgroundColor": "#909193" } }, "up-steps-item__line--row": { "": { "top": 16, "height": 1 } }, "up-steps-item__line--column": { "": { "width": 1, "left": 10 } }, "@TRANSITION": { "up-steps-item__wrapper__circle": { "property": "backgroundColor", "duration": "0.3s" } } };
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { normalizeClass: _normalizeClass, normalizeStyle: _normalizeStyle, createElementVNode: _createElementVNode, renderSlot: _renderSlot, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, resolveComponent: _resolveComponent, createVNode: _createVNode, toDisplayString: _toDisplayString, createBlock: _createBlock, Fragment: _Fragment } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(__resolveDynamicComponent("up-icon"), __easycom_0);
  const _component_up_text = resolveEasycom(__resolveDynamicComponent("up-text"), __easycom_0$1);
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: _normalizeClass(["up-steps-item", [`up-steps-item--${$setup.direction}`]]),
      style: _normalizeStyle($setup.itemWidthStyle)
    },
    [
      _createElementVNode(
        "view",
        {
          class: _normalizeClass(["up-steps-item__line", [
            `up-steps-item__line--${$setup.direction}`,
            $setup.stepIndex < $setup.currentStep && $setup.activeColor == "#3c9cff" ? "up-steps-item__line--active" : ""
          ]]),
          style: _normalizeStyle($setup.lineStyle)
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      _createElementVNode(
        "view",
        {
          class: _normalizeClass(["up-steps-item__line", [
            `up-steps-item__line--${$setup.direction}`,
            $setup.stepIndex - 1 < $setup.currentStep && $setup.activeColor == "#3c9cff" ? "up-steps-item__line--active" : ""
          ]]),
          style: _normalizeStyle($setup.lineStyle2)
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      _createElementVNode(
        "view",
        {
          class: _normalizeClass(["up-steps-item__wrapper", [
            `up-steps-item__wrapper--${$setup.direction}`,
            $setup.isDot ? `up-steps-item__wrapper--${$setup.direction}--dot` : ""
          ]]),
          style: _normalizeStyle($setup.itemStyleInner)
        },
        [
          _renderSlot(_ctx.$slots, "icon", {}, () => [
            $setup.isDot ? (_openBlock(), _createElementBlock(
              "view",
              {
                key: 0,
                class: _normalizeClass(["up-steps-item__wrapper__dot", [
                  $setup.statusClass === "finish" || $setup.statusClass === "process" ? "up-steps-item__wrapper__dot--active" : ""
                ]]),
                style: _normalizeStyle($setup.dotStyle)
              },
              null,
              6
              /* CLASS, STYLE */
            )) : $setup.activeIcon != "" || $setup.inactiveIcon != "" ? (_openBlock(), _createElementBlock("view", {
              key: 1,
              class: "up-steps-item__wrapper__icon"
            }, [
              _createVNode(_component_up_icon, {
                name: $setup.stepIndex <= $setup.currentStep ? $setup.activeIcon : $setup.inactiveIcon,
                size: $props.iconSize,
                color: $setup.stepIndex <= $setup.currentStep ? $setup.activeColor == "#3c9cff" ? "primary" : $setup.activeColor : $setup.inactiveColor
              }, null, 8, ["name", "size", "color"])
            ])) : (_openBlock(), _createElementBlock(
              "view",
              {
                key: 2,
                class: _normalizeClass([[
                  $setup.statusClass === "process" ? "up-steps-item__wrapper__circle--active" : "",
                  $setup.statusClass === "finish" ? "up-steps-item__wrapper__circle--finish" : "",
                  $setup.statusClass === "wait" ? "up-steps-item__wrapper__circle--wait" : "",
                  $setup.statusClass === "error" ? "up-steps-item__wrapper__circle--error" : ""
                ], "up-steps-item__wrapper__circle"]),
                style: _normalizeStyle($setup.circleStyle)
              },
              [
                $setup.statusClass === "process" || $setup.statusClass === "wait" ? (_openBlock(), _createElementBlock(
                  "text",
                  {
                    key: 0,
                    class: _normalizeClass(["up-steps-item__wrapper__circle__text", [
                      $setup.statusClass === "process" ? "up-steps-item__wrapper__circle__text--active" : ""
                    ]]),
                    style: _normalizeStyle($setup.circleTextStyle)
                  },
                  _toDisplayString($setup.stepIndex + 1),
                  7
                  /* TEXT, CLASS, STYLE */
                )) : (_openBlock(), _createBlock(_component_up_icon, {
                  key: 1,
                  color: $setup.statusClass === "error" ? "error" : $setup.activeColor == "#3c9cff" ? "primary" : $setup.activeColor,
                  size: "12",
                  name: $setup.statusClass === "error" ? "close" : "checkmark"
                }, null, 8, ["color", "name"]))
              ],
              6
              /* CLASS, STYLE */
            ))
          ])
        ],
        6
        /* CLASS, STYLE */
      ),
      _createElementVNode(
        "view",
        {
          class: _normalizeClass(["up-steps-item__content", [
            `up-steps-item__content--${$setup.direction}`,
            $setup.currentStep == $setup.stepIndex ? "up-steps-item__content--current" : ""
          ]]),
          style: _normalizeStyle($setup.contentStyle)
        },
        [
          _renderSlot(_ctx.$slots, "content", { index: $setup.stepIndex }),
          _ctx.$slots["content"] == null ? (_openBlock(), _createElementBlock(
            _Fragment,
            { key: 0 },
            [
              _createElementVNode("view", { class: "up-steps-item__content__title" }, [
                _renderSlot(_ctx.$slots, "title"),
                _ctx.$slots["title"] == null ? (_openBlock(), _createBlock(_component_up_text, {
                  key: 0,
                  text: $props.title.toString(),
                  lineHeight: "20px",
                  color: $setup.currentStep == $setup.stepIndex ? $setup.activeColor == "#3c9cff" ? "" : $setup.activeColor : $setup.inactiveColor,
                  type: $setup.currentStep == $setup.stepIndex && $setup.activeColor == "#3c9cff" ? "primary" : "default",
                  size: $setup.currentStep == $setup.stepIndex ? 14 : 13
                }, null, 8, ["text", "color", "type", "size"])) : _createCommentVNode("v-if", true)
              ]),
              _createElementVNode("view", { class: "up-steps-item__content__desc" }, [
                _renderSlot(_ctx.$slots, "desc"),
                _ctx.$slots["desc"] == null ? (_openBlock(), _createBlock(_component_up_text, {
                  key: 0,
                  text: $props.desc.toString(),
                  type: "tips",
                  size: "12"
                }, null, 8, ["text"])) : _createCommentVNode("v-if", true)
              ])
            ],
            64
            /* STABLE_FRAGMENT */
          )) : _createCommentVNode("v-if", true)
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
