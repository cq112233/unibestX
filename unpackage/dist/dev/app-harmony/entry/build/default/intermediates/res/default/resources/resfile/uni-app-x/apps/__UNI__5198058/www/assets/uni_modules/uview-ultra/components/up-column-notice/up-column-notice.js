import { _ as __easycom_0$1 } from "../up-icon/up-icon.js";
import { r as resolveEasycom } from "../../../../App.ku.js";
import { d as defProps } from "./columnNotice.js";
import { a as addUnit, f as error } from "../../libs/function/index.js";
import { a as array } from "../../libs/function/test.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed, reactive } = globalThis.Vue;
const { watch } = globalThis.Vue;
const { ref } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "up-column-notice",
  props: {
    text: {
      type: Array,
      default: () => {
        return [];
      }
    },
    icon: {
      type: String,
      default: () => {
        return defProps.getString("columnNotice.icon");
      }
    },
    mode: {
      type: String,
      default: () => {
        return defProps.getString("columnNotice.mode");
      }
    },
    color: {
      type: String,
      default: () => {
        return defProps.getString("columnNotice.color");
      }
    },
    bgColor: {
      type: String,
      default: () => {
        return defProps.getString("columnNotice.bgColor");
      }
    },
    fontSize: {
      type: [String, Number],
      default: () => {
        return defProps.getNumber("columnNotice.fontSize");
      }
    },
    speed: {
      type: [String, Number],
      default: () => {
        return defProps.getNumber("columnNotice.speed");
      }
    },
    step: {
      type: Boolean,
      default: () => {
        return defProps.getBoolean("columnNotice.step");
      }
    },
    duration: {
      type: [String, Number],
      default: () => {
        return defProps.getNumber("columnNotice.duration");
      }
    },
    disableTouch: {
      type: Boolean,
      default: () => {
        return defProps.getBoolean("columnNotice.disableTouch");
      }
    }
  },
  emits: ["click", "close"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const props = __props;
    const emit = __emit;
    const index = ref(0);
    const textStyle = computed(() => {
      let style = new UTSJSONObject({});
      style["color"] = props.color;
      style["fontSize"] = addUnit(props.fontSize);
      return style;
    });
    const vertical = computed(() => {
      if (props.mode == "horizontal")
        return false;
      else
        return true;
    });
    const noticeChange = (e) => {
      index.value = e.detail.current;
    };
    const clickHandler = () => {
      emit("click", index.value);
    };
    const close = () => {
      emit("close");
    };
    watch(() => {
      return props.text;
    }, (newValue) => {
      if (!array(newValue)) {
        error("noticebar组件direction为column时，要求text参数为数组形式");
      }
    }, {
      immediate: true
    });
    const __returned__ = { props, emit, index, textStyle, vertical, noticeChange, clickHandler, close };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-notice": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between" } }, "up-notice__left-icon": { "": { "alignItems": "center", "marginRight": 5 } }, "up-notice__right-icon": { "": { "marginLeft": 5, "alignItems": "center" } }, "up-notice__swiper": { "": { "height": 16, "display": "flex", "flexDirection": "row", "alignItems": "center", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "up-notice__swiper__item": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "overflow": "hidden" } }, "up-notice__swiper__item__text": { "": { "fontSize": 14, "color": "#f9ae3d" } } };
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { renderSlot: _renderSlot, resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, renderList: _renderList, Fragment: _Fragment, toDisplayString: _toDisplayString, normalizeStyle: _normalizeStyle, createElementVNode: _createElementVNode, createBlock: _createBlock } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(__resolveDynamicComponent("up-icon"), __easycom_0$1);
  return _openBlock(), _createElementBlock("view", {
    class: "up-notice",
    onClick: $setup.clickHandler
  }, [
    _renderSlot(_ctx.$slots, "icon", {}, () => [
      $props.icon ? (_openBlock(), _createElementBlock("view", {
        key: 0,
        class: "up-notice__left-icon"
      }, [
        _createVNode(_component_up_icon, {
          name: $props.icon,
          color: $props.color,
          size: "19"
        }, null, 8, ["name", "color"])
      ])) : _createCommentVNode("v-if", true)
    ]),
    _createElementVNode("swiper", {
      "disable-touch": $props.disableTouch,
      vertical: $props.step ? false : true,
      circular: "",
      interval: $props.duration,
      autoplay: true,
      class: "up-notice__swiper",
      onChange: $setup.noticeChange
    }, [
      (_openBlock(true), _createElementBlock(
        _Fragment,
        null,
        _renderList($props.text, (item, index) => {
          return _openBlock(), _createElementBlock("swiper-item", {
            key: index,
            class: "up-notice__swiper__item"
          }, [
            _createElementVNode(
              "text",
              {
                class: "up-notice__swiper__item__text up-line-1",
                style: _normalizeStyle([$setup.textStyle])
              },
              _toDisplayString(item),
              5
              /* TEXT, STYLE */
            )
          ]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ], 40, ["disable-touch", "vertical", "interval"]),
    ["link", "closable"].includes($props.mode) ? (_openBlock(), _createElementBlock("view", {
      key: 0,
      class: "up-notice__right-icon"
    }, [
      $props.mode === "link" ? (_openBlock(), _createBlock(_component_up_icon, {
        key: 0,
        name: "arrow-right",
        size: 17,
        color: $props.color
      }, null, 8, ["color"])) : _createCommentVNode("v-if", true),
      $props.mode === "closable" ? (_openBlock(), _createBlock(_component_up_icon, {
        key: 1,
        name: "close",
        size: 16,
        color: $props.color,
        onClick: $setup.close
      }, null, 8, ["color"])) : _createCommentVNode("v-if", true)
    ])) : _createCommentVNode("v-if", true)
  ]);
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-column-notice/up-column-notice.uvue"]]);
export {
  __easycom_0 as _
};
//# sourceMappingURL=up-column-notice.js.map
