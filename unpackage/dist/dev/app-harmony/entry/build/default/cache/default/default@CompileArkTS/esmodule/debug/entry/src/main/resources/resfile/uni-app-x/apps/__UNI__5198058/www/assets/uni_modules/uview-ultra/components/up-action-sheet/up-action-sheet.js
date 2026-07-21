import { _ as __easycom_0 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-icon/up-icon&";
const { defineComponent, getCurrentInstance, onMounted, onBeforeUnmount, computed, resolveDynamicComponent, openBlock, createBlock, withCtx, createElementVNode, createElementBlock, toDisplayString, withModifiers, createVNode, createCommentVNode, normalizeStyle, renderSlot, Fragment, renderList } = globalThis.Vue
import { r as resolveEasycom } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/App.ku&";
import { _ as __easycom_1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-line/up-line&";
import { _ as __easycom_1$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon&";
import { _ as __easycom_3 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-gap/up-gap&";
import { _ as __easycom_2$1 } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-popup/up-popup&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/composable/useButton&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/composable/useMp&";
import { u as useUltraUI } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/composable/useUltraUI&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/test&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/digit&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/config/config&";
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-action-sheet/types&";
import { d as defProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-action-sheet/actionSheet&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    // ...mpSharedMpOptions,
    name: "up-action-sheet"
  },
  __name: "up-action-sheet",
  props: {
    // 操作菜单是否展示 （默认false）
    show: {
      type: Boolean,
      default: defProps.getBoolean("actionSheet.show")
    },
    // 标题
    title: {
      type: String,
      default: defProps.getString("actionSheet.title")
    },
    // 选项上方的描述信息
    description: {
      type: String,
      default: defProps.getString("actionSheet.description")
    },
    // 数据
    actions: {
      type: Array,
      default: () => {
        return [];
      }
    },
    // 取消按钮的文字，不为空时显示按钮
    cancelText: {
      type: String,
      default: defProps.getString("actionSheet.cancelText")
    },
    // 点击某个菜单项时是否关闭弹窗
    closeOnClickAction: {
      type: Boolean,
      default: defProps.getBoolean("actionSheet.closeOnClickAction")
    },
    // 处理底部安全区（默认true）
    safeAreaInsetBottom: {
      type: Boolean,
      default: defProps.getBoolean("actionSheet.safeAreaInsetBottom")
    },
    // 小程序的打开方式
    openType: {
      type: String,
      default: defProps.getString("actionSheet.openType")
    },
    // 点击遮罩是否允许关闭 (默认true)
    closeOnClickOverlay: {
      type: Boolean,
      default: defProps.getBoolean("actionSheet.closeOnClickOverlay")
    },
    // 圆角值
    round: {
      type: [Boolean, String, Number],
      default: defProps.getAny("actionSheet.round")
    },
    // 选项区域最大高度
    wrapMaxHeight: {
      type: [String],
      default: defProps.getString("actionSheet.wrapMaxHeight")
    }
    // 	...commonProps,
    // 	...buttonProps
  },
  emits: [
    "close",
    "select",
    "update:show",
    "getuserinfo",
    "contact",
    "getphonenumber",
    "error",
    "launchapp",
    "opensetting"
  ],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const _b = useUltraUI(), onComponentDestroy = _b.onComponentDestroy, preventEvent = _b.preventEvent, noop = _b.noop;
    const instance = getCurrentInstance().proxy;
    const props = __props;
    onMounted(() => {
    });
    onBeforeUnmount(() => {
      onComponentDestroy(instance);
    });
    const emit = __emit;
    const onOpenType = (name, event) => {
      emit(name, event.detail);
    };
    const itemStyle = computed(() => {
      return (index) => {
        let style = new UTSJSONObject(
          {}
          // if (props['actions'][index]['color'] != null && props.actions[index]['color'] != '') {
          //     style['color'] = props.actions[index].color
          // }
          // if (props.actions[index]['fontSize'] != null && props.actions[index]['fontSize'] != '') {
          //      style['fontSize'] = addUnit(props.actions[index].fontSize)
          // }
          // // 选项被禁用的样式
          // if (props.actions[index]['disabled'] != null && props.actions[index]['disabled'] == true) {
          //     style['color'] = '#c0c4cc'
          // }
        );
        return style;
      };
    });
    const closeHandler = () => {
      if (props.closeOnClickOverlay) {
        emit("update:show");
        emit("close");
      }
    };
    const cancel = () => {
      emit("update:show");
      emit("close");
    };
    const selectHandler = (index) => {
      const item = props.actions[index];
      if (item["disabled"] != true && item["loading"] != true) {
        emit("select", item);
        if (props.closeOnClickAction) {
          emit("update:show");
          emit("close");
        }
      }
    };
    const __returned__ = { onComponentDestroy, preventEvent, noop, instance, props, emit, onOpenType, itemStyle, closeHandler, cancel, selectHandler };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-reset-button": { "": { "width": "100%" } }, "up-action-sheet__header": { "": { "position": "relative", "paddingTop": 12, "paddingRight": 30, "paddingBottom": 12, "paddingLeft": 30 } }, "up-action-sheet__header__title": { "": { "fontSize": 16, "color": "#303133", "fontWeight": "bold", "textAlign": "center" } }, "up-action-sheet__header__icon-wrap": { "": { "position": "absolute", "right": 15, "top": 15 } }, "up-action-sheet__description": { "": { "fontSize": 13, "color": "#909193", "marginTop": 18, "marginRight": 15, "marginBottom": 18, "marginLeft": 15, "textAlign": "center" } }, "up-action-sheet__item-wrap__item": { "": { "paddingTop": 17, "paddingRight": 17, "paddingBottom": 17, "paddingLeft": 17, "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center" } }, "up-action-sheet__item-wrap__item__name": { "": { "fontSize": 16, "color": "#303133", "textAlign": "center" } }, "up-action-sheet__item-wrap__item__subname": { "": { "fontSize": 13, "color": "#c0c4cc", "marginTop": 10, "textAlign": "center" } }, "up-action-sheet__cancel-text": { "": { "fontSize": 16, "color": "#606266", "textAlign": "center" } }, "up-action-sheet--hover": { "": { "backgroundColor": "#f2f3f5" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_0);
  const _component_up_line = resolveEasycom(resolveDynamicComponent("up-line"), __easycom_1);
  const _component_up_loading_icon = resolveEasycom(resolveDynamicComponent("up-loading-icon"), __easycom_1$1);
  const _component_up_gap = resolveEasycom(resolveDynamicComponent("up-gap"), __easycom_3);
  const _component_up_popup = resolveEasycom(resolveDynamicComponent("up-popup"), __easycom_2$1);
  return openBlock(), createBlock(_component_up_popup, {
    show: $props.show,
    mode: "bottom",
    onClose: $setup.closeHandler,
    safeAreaInsetBottom: $props.safeAreaInsetBottom,
    round: $props.round
  }, {
    default: withCtx(() => [
      createElementVNode("view", { class: "up-action-sheet" }, [
        $props.title ? (openBlock(), createElementBlock("view", {
          key: 0,
          class: "up-action-sheet__header"
        }, [
          createElementVNode(
            "text",
            { class: "up-action-sheet__header__title up-line-1" },
            toDisplayString($props.title),
            1
            /* TEXT */
          ),
          createElementVNode("view", {
            class: "up-action-sheet__header__icon-wrap",
            onClick: withModifiers($setup.cancel, ["stop"])
          }, [
            createVNode(_component_up_icon, {
              name: "close",
              size: "17",
              color: "#c8c9cc",
              bold: ""
            })
          ])
        ])) : createCommentVNode("v-if", true),
        $props.description ? (openBlock(), createElementBlock(
          "text",
          {
            key: 1,
            class: "up-action-sheet__description",
            style: normalizeStyle([{
              marginTop: `${$props.title != "" && $props.description != "" ? 0 : "18px"}`
            }])
          },
          toDisplayString($props.description),
          5
          /* TEXT, STYLE */
        )) : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "default", {}, () => [
          $props.description ? (openBlock(), createBlock(_component_up_line, { key: 0 })) : createCommentVNode("v-if", true),
          createElementVNode(
            "scroll-view",
            {
              "scroll-y": "",
              class: "up-action-sheet__item-wrap",
              style: normalizeStyle({ maxHeight: $props.wrapMaxHeight })
            },
            [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList($props.actions, (item, index) => {
                  return openBlock(), createElementBlock("view", { key: index }, [
                    createElementVNode("view", {
                      class: "up-action-sheet__item-wrap__item",
                      onClick: withModifiers(($event) => $setup.selectHandler(index), ["stop"]),
                      "hover-class": item["disabled"] != true && item["loading"] != true ? "up-action-sheet--hover" : "",
                      "hover-stay-time": 150
                    }, [
                      item["loading"] ? (openBlock(), createBlock(_component_up_loading_icon, {
                        key: 0,
                        "custom-class": "van-action-sheet__loading",
                        size: "18",
                        mode: "circle"
                      })) : (openBlock(), createElementBlock(
                        Fragment,
                        { key: 1 },
                        [
                          createElementVNode(
                            "text",
                            {
                              class: "up-action-sheet__item-wrap__item__name",
                              style: normalizeStyle([$setup.itemStyle(index)])
                            },
                            toDisplayString(item["name"]),
                            5
                            /* TEXT, STYLE */
                          ),
                          item["subname"] != "" ? (openBlock(), createElementBlock(
                            "text",
                            {
                              key: 0,
                              class: "up-action-sheet__item-wrap__item__subname"
                            },
                            toDisplayString(item["subname"]),
                            1
                            /* TEXT */
                          )) : createCommentVNode("v-if", true)
                        ],
                        64
                        /* STABLE_FRAGMENT */
                      ))
                    ], 8, ["onClick", "hover-class"]),
                    index !== $props.actions.length - 1 ? (openBlock(), createBlock(_component_up_line, { key: 0 })) : createCommentVNode("v-if", true)
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ],
            4
            /* STYLE */
          )
        ]),
        $props.cancelText ? (openBlock(), createBlock(_component_up_gap, {
          key: 2,
          bgColor: "#eaeaec",
          height: "6"
        })) : createCommentVNode("v-if", true),
        $props.cancelText ? (openBlock(), createElementBlock("view", {
          key: 3,
          class: "up-action-sheet__item-wrap__item up-action-sheet__cancel",
          "hover-class": "up-action-sheet--hover",
          onClick: $setup.cancel
        }, [
          createElementVNode(
            "text",
            {
              onTouchmove: _cache[0] || (_cache[0] = withModifiers(() => {
              }, ["stop"])),
              "hover-stay-time": 150,
              class: "up-action-sheet__cancel-text"
            },
            toDisplayString($props.cancelText),
            33
            /* TEXT, NEED_HYDRATION */
          )
        ])) : createCommentVNode("v-if", true)
      ])
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["show", "safeAreaInsetBottom", "round"]);
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-action-sheet/up-action-sheet.uvue"]]);
export {
  __easycom_2 as _
};
//# sourceMappingURL=up-action-sheet.js.map
