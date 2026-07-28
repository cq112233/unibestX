import { _ as __easycom_0 } from "../up-icon/up-icon.js";
const { defineComponent, getCurrentInstance, ref, computed, watch, onMounted, onBeforeUnmount, resolveDynamicComponent, openBlock, createElementBlock, renderSlot, createVNode, createCommentVNode, createElementVNode, normalizeStyle, Fragment, renderList, toDisplayString, createBlock } = globalThis.Vue
import { r as resolveEasycom } from "../../../../App.ku.js";
import { d as defProps } from "./rowNotice.js";
import { a as addUnit, f as error, s as sleep, u as upGetRect, g as getPx } from "../../libs/function/index.js";
import { s as string } from "../../libs/function/test.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "up-row-notice",
  props: {
    text: {
      type: String,
      default: defProps.getString("rowNotice.text")
    },
    icon: {
      type: String,
      default: defProps.getString("rowNotice.icon")
    },
    mode: {
      type: String,
      default: defProps.getString("rowNotice.mode")
    },
    color: {
      type: String,
      default: defProps.getString("rowNotice.color")
    },
    bgColor: {
      type: String,
      default: defProps.getString("rowNotice.bgColor")
    },
    fontSize: {
      type: [String, Number],
      default: defProps.getNumber("rowNotice.fontSize")
    },
    speed: {
      type: [String, Number],
      default: defProps.getNumber("rowNotice.speed")
    }
  },
  emits: ["click", "close"],
  setup(__props, _a) {
    var _b;
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const props = __props;
    const instance = (_b = getCurrentInstance()) === null || _b === void 0 ? null : _b.proxy;
    const transform = ref("");
    const animationFrameId = ref(0);
    const startTime = ref(0);
    const currentPosition = ref(0);
    const scrollWidth = ref(0);
    const containerWidth = ref(0);
    const isAnimating = ref(false);
    const show = ref(true);
    const webviewHide = ref(false);
    const emit = __emit;
    const textStyle = computed(() => {
      let style = new UTSJSONObject({});
      style["whiteSpace"] = "nowrap !important";
      style["color"] = props.color;
      style["fontSize"] = addUnit(props.fontSize);
      return style;
    });
    const animationStyle = computed(() => {
      let style = new UTSJSONObject({});
      style["transform"] = transform.value;
      return style;
    });
    const innerText = computed(() => {
      let result = [], len = 20;
      const textArr = props.text.split("");
      for (let i = 0; i < textArr.length; i += len) {
        result.push(textArr.slice(i, i + len).join(""));
      }
      return result;
    });
    const clickHandler = (index) => {
      emit("click");
    };
    const close = () => {
      emit("close");
    };
    function animate(timestamp) {
      if (!isAnimating.value)
        return null;
      if (startTime.value == 0)
        startTime.value = timestamp;
      const elapsed = timestamp - startTime.value;
      const speedNum = parseInt(getPx(props.speed));
      const distance = speedNum * elapsed / 1e3;
      currentPosition.value = containerWidth.value - distance;
      if (currentPosition.value <= -scrollWidth.value) {
        startTime.value = timestamp;
        currentPosition.value = containerWidth.value;
      }
      transform.value = `translateX(${currentPosition.value}px)`;
      animationFrameId.value = setTimeout(() => {
        return animate(Date.now());
      }, 16);
    }
    const startScroll = async () => {
      var _a2, _b2;
      if (animationFrameId.value > 0) {
        clearTimeout(animationFrameId.value);
        animationFrameId.value = 0;
      }
      await sleep(10);
      const textRect = await upGetRect(".up-notice__content__text", false, instance);
      const containerRect = await upGetRect(".up-notice__content", false, instance);
      scrollWidth.value = (_a2 = textRect.width) !== null && _a2 !== void 0 ? _a2 : 0;
      containerWidth.value = (_b2 = containerRect.width) !== null && _b2 !== void 0 ? _b2 : 0;
      currentPosition.value = containerWidth.value;
      startTime.value = 0;
      isAnimating.value = true;
      animate(0);
    };
    const stopScroll = () => {
      isAnimating.value = false;
      if (animationFrameId.value > 0) {
        clearTimeout(animationFrameId.value);
        animationFrameId.value = 0;
      }
    };
    watch(() => {
      return props.text;
    }, (newValue) => {
      startScroll();
      if (!string(newValue)) {
        error("noticebar组件direction为row时，要求text参数为字符串形式");
      }
    }, { immediate: true });
    watch(() => {
      return props.fontSize;
    }, () => {
      startScroll();
    });
    watch(() => {
      return props.speed;
    }, () => {
      startScroll();
    });
    onMounted(() => {
      startScroll();
      if (!string(props.text)) {
        error("noticebar组件direction为row时，要求text参数为字符串形式");
      }
    });
    onBeforeUnmount(() => {
      stopScroll();
    });
    const __returned__ = { props, instance, transform, animationFrameId, startTime, currentPosition, scrollWidth, containerWidth, isAnimating, show, webviewHide, emit, textStyle, animationStyle, innerText, clickHandler, close, animate, startScroll, stopScroll };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-notice": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between" } }, "up-notice__left-icon": { "": { "alignItems": "center", "marginRight": 5 } }, "up-notice__right-icon": { "": { "marginLeft": 5, "alignItems": "center" } }, "up-notice__content": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "display": "flex", "flexDirection": "row", "flexWrap": "nowrap", "overflow": "hidden" } }, "up-notice__content__text": { "": { "display": "flex", "flexDirection": "row" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_0);
  return openBlock(), createElementBlock("view", {
    class: "up-notice",
    onClick: $setup.clickHandler
  }, [
    renderSlot(_ctx.$slots, "icon", {}, () => [
      $props.icon ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: "up-notice__left-icon"
      }, [
        createVNode(_component_up_icon, {
          name: $props.icon,
          color: $props.color,
          size: "19"
        }, null, 8, ["name", "color"])
      ])) : createCommentVNode("v-if", true)
    ]),
    createElementVNode(
      "view",
      {
        class: "up-notice__content",
        ref: "up-notice__content"
      },
      [
        createElementVNode(
          "view",
          {
            ref: "up-notice__content__text",
            class: "up-notice__content__text",
            style: normalizeStyle([$setup.animationStyle])
          },
          [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList($setup.innerText, (item, index) => {
                return openBlock(), createElementBlock(
                  "text",
                  {
                    key: index,
                    style: normalizeStyle([$setup.textStyle])
                  },
                  toDisplayString(item),
                  5
                  /* TEXT, STYLE */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          4
          /* STYLE */
        )
      ],
      512
      /* NEED_PATCH */
    ),
    ["link", "closable"].includes($props.mode) ? (openBlock(), createElementBlock("view", {
      key: 0,
      class: "up-notice__right-icon"
    }, [
      $props.mode === "link" ? (openBlock(), createBlock(_component_up_icon, {
        key: 0,
        name: "arrow-right",
        size: 17,
        color: $props.color
      }, null, 8, ["color"])) : createCommentVNode("v-if", true),
      $props.mode === "closable" ? (openBlock(), createBlock(_component_up_icon, {
        key: 1,
        onClick: $setup.close,
        name: "close",
        size: 16,
        color: $props.color
      }, null, 8, ["color"])) : createCommentVNode("v-if", true)
    ])) : createCommentVNode("v-if", true)
  ]);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-row-notice/up-row-notice.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-row-notice.js.map
