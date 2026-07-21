import { _ as __easycom_0 } from "../up-icon/up-icon.js";
const { defineComponent, getCurrentInstance, ref, watch, onMounted, resolveDynamicComponent, openBlock, createElementBlock, normalizeClass, createElementVNode, normalizeStyle, createCommentVNode, renderSlot, createVNode, toDisplayString, createBlock } = globalThis.Vue
import { r as resolveEasycom } from "../../../../App.ku.js";
import { _ as __easycom_1 } from "../up-line/up-line.js";
import { d as defProps } from "./formItem.js";
import { p as propsLine } from "../up-line/line.js";
import { c as color } from "../../libs/config/color.js";
import { e as error, j as getProperty, k as setProperty } from "../../libs/function/index.js";
import { u as useUltraUI } from "../../libs/composable/useUltraUI.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "up-form-item"
  },
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
    var __expose = _a.expose, __emit = _a.emit;
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
    const clearValidate = () => {
      message.value = "";
    };
    const resetField = () => {
      const value = getProperty(parentData.value["originalModel"], props.prop);
      setProperty(parent.value.$props["model"], props.prop, value);
      message.value = "";
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
    const __returned__ = { parent, parentData, getParentData, instance, props, emit, message, itemRules, updateParentData, init, setRules, clearValidate, resetField, clickHandler, getProps, getRefs, setMessage, get propsLine() {
      return propsLine;
    }, get color() {
      return color;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "up-form-item": { "": { "display": "flex", "flexDirection": "column" } }, "up-form-item__body": { "": { "display": "flex", "flexDirection": "row", "paddingTop": 10, "paddingRight": 0, "paddingBottom": 10, "paddingLeft": 0 } }, "up-form-item__body__left": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center" } }, "up-form-item__body__left__content": { "": { "position": "relative", "display": "flex", "flexDirection": "row", "alignItems": "center", "paddingRight": "10rpx", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "up-form-item__body__left__content__icon": { "": { "marginRight": "8rpx" } }, "up-form-item__body__left__content__required": { "": { "position": "absolute", "left": -9, "color": "#f56c6c", "lineHeight": "20px", "fontSize": 20, "top": 3 } }, "up-form-item__body__left__content__label": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "up-form-item__body__left__content__label__text": { "": { "color": "#303133", "fontSize": 15 } }, "up-form-item__body__right": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "up-form-item__body__right__content": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "up-form-item__body__right__content__slot": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "display": "flex", "flexDirection": "row", "alignItems": "center" } }, "up-form-item__body__right__content__icon": { "": { "marginLeft": "10rpx", "color": "#c0c4cc", "fontSize": "30rpx" } }, "up-form-item__body__right__message": { "": { "fontSize": 12, "lineHeight": "12px", "color": "#f56c6c" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_0);
  const _component_up_line = resolveEasycom(resolveDynamicComponent("up-line"), __easycom_1);
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["up-form-item", { "up-form-item--error": $setup.message != "" && $setup.parentData["errorType"] == "message" }])
    },
    [
      createElementVNode(
        "view",
        {
          class: "up-form-item__body",
          onClick: $setup.clickHandler,
          style: normalizeStyle([_ctx.$up.addStyle(_ctx.customStyle), {
            flexDirection: ($props.labelPosition != "" ? $props.labelPosition : $setup.parentData["labelPosition"]) == "left" ? "row" : "column"
          }])
        },
        [
          createCommentVNode(' 微信小程序中，将一个参数设置空字符串，结果会变成字符串"true" '),
          renderSlot(_ctx.$slots, "label", {}, () => [
            createCommentVNode(" {{required}} "),
            $props.required || $props.leftIcon != "" || $props.label != "" ? (openBlock(), createElementBlock(
              "view",
              {
                key: 0,
                class: "up-form-item__body__left",
                style: normalizeStyle({
                  width: _ctx.$up.addUnit($props.labelWidth != "" ? $props.labelWidth : $setup.parentData["labelWidth"]),
                  marginBottom: ($props.labelPosition != "" ? $props.labelPosition : $setup.parentData["labelPosition"]) == "left" ? 0 : "5px"
                })
              },
              [
                createCommentVNode(" 为了块对齐 "),
                createElementVNode("view", { class: "up-form-item__body__left__content" }, [
                  createCommentVNode(" nvue不支持伪元素before "),
                  $props.required ? (openBlock(), createElementBlock("text", {
                    key: 0,
                    class: "up-form-item__body__left__content__required"
                  }, "*")) : createCommentVNode("v-if", true),
                  $props.leftIcon != "" ? (openBlock(), createElementBlock("view", {
                    key: 1,
                    class: "up-form-item__body__left__content__icon"
                  }, [
                    createVNode(_component_up_icon, {
                      name: $props.leftIcon,
                      "custom-style": $props.leftIconStyle
                    }, null, 8, ["name", "custom-style"])
                  ])) : createCommentVNode("v-if", true),
                  createElementVNode(
                    "view",
                    {
                      class: "up-form-item__body__left__content__label",
                      style: normalizeStyle({
                        justifyContent: $setup.parentData["labelAlign"] == "left" ? "flex-start" : $setup.parentData["labelAlign"] == "center" ? "center" : "flex-end"
                      })
                    },
                    [
                      createElementVNode(
                        "text",
                        {
                          class: "up-form-item__body__left__content__label__text",
                          style: normalizeStyle($setup.parentData["labelStyle"] ?? {})
                        },
                        toDisplayString($props.label),
                        5
                        /* TEXT, STYLE */
                      )
                    ],
                    4
                    /* STYLE */
                  )
                ])
              ],
              4
              /* STYLE */
            )) : createCommentVNode("v-if", true)
          ]),
          createElementVNode("view", { class: "up-form-item__body__right" }, [
            createElementVNode("view", { class: "up-form-item__body__right__content" }, [
              createElementVNode("view", { class: "up-form-item__body__right__content__slot" }, [
                renderSlot(_ctx.$slots, "default")
              ]),
              _ctx.$slots["right"] != null ? (openBlock(), createElementBlock("view", {
                key: 0,
                class: "item__body__right__content__icon"
              }, [
                renderSlot(_ctx.$slots, "right")
              ])) : createCommentVNode("v-if", true)
            ])
          ])
        ],
        4
        /* STYLE */
      ),
      renderSlot(_ctx.$slots, "error", {}, () => [
        $setup.message != "" && $setup.parentData["errorType"] == "message" ? (openBlock(), createElementBlock(
          "text",
          {
            key: 0,
            class: "up-form-item__body__right__message",
            style: normalizeStyle({
              marginLeft: _ctx.$up.addUnit(($props.labelPosition ?? $setup.parentData["labelPosition"]) == "top" ? 0 : $props.labelWidth != null ? $props.labelWidth : $setup.parentData["labelWidth"])
            })
          },
          toDisplayString($setup.message),
          5
          /* TEXT, STYLE */
        )) : createCommentVNode("v-if", true)
      ]),
      $props.borderBottom ? (openBlock(), createBlock(_component_up_line, {
        key: 0,
        color: $setup.message != "" && $setup.parentData["errorType"] == "border-bottom" ? $setup.color["error"] : $setup.propsLine["color"],
        customStyle: `margin-top: ${$setup.message != "" && $setup.parentData["errorType"] == "message" ? "5px" : 0}`
      }, null, 8, ["color", "customStyle"])) : createCommentVNode("v-if", true)
    ],
    2
    /* CLASS */
  );
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-form-item/up-form-item.uvue"]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-form-item.js.map
