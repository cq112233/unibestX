import { _ as __easycom_0 } from "../up-line/up-line.js";
import { r as resolveEasycom } from "../../../../App.ku.js";
import { _ as __easycom_1$1 } from "../up-loading-icon/up-loading-icon.js";
import { a as addUnit, b as addStyle, d as deepMerge } from "../../libs/function/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed } = globalThis.Vue;
const dotText = "●";
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-loadmore"
  },
  __name: "up-loadmore",
  props: {
    status: {
      type: String,
      default: "loadmore"
    },
    bgColor: {
      type: String,
      default: "transparent"
    },
    icon: {
      type: Boolean,
      default: true
    },
    fontSize: {
      type: [String, Number],
      default: 14
    },
    iconSize: {
      type: [String, Number],
      default: 17
    },
    color: {
      type: String,
      default: "#606266"
    },
    loadingIcon: {
      type: String,
      default: "circle"
    },
    loadmoreText: {
      type: String,
      default: "加载更多"
    },
    loadingText: {
      type: String,
      default: "正在加载..."
    },
    nomoreText: {
      type: String,
      default: "没有更多了"
    },
    isDot: {
      type: Boolean,
      default: false
    },
    iconColor: {
      type: String,
      default: "#b7b7b7"
    },
    lineColor: {
      type: String,
      default: "#E6E8EB"
    },
    marginTop: {
      type: [String, Number],
      default: 10
    },
    marginBottom: {
      type: [String, Number],
      default: 10
    },
    height: {
      type: [String, Number],
      default: "auto"
    },
    line: {
      type: Boolean,
      default: false
    },
    dashed: {
      type: Boolean,
      default: false
    },
    customStyle: {
      type: Object,
      default: () => {
        return new UTSJSONObject({});
      }
    }
  },
  emits: ["loadmore"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const props = __props;
    const emit = __emit;
    const loadmoreStyle = computed(() => {
      const base = new UTSJSONObject({
        backgroundColor: props.bgColor,
        marginBottom: addUnit(props.marginBottom),
        marginTop: addUnit(props.marginTop),
        height: addUnit(props.height)
      });
      const custom = addStyle(props.customStyle);
      return deepMerge(base, custom);
    });
    const loadTextStyle = computed(() => {
      return new UTSJSONObject({
        color: props.color,
        fontSize: addUnit(props.fontSize),
        backgroundColor: props.bgColor
      });
    });
    const showText = computed(() => {
      let text = "";
      if (props.status == "loadmore")
        text = props.loadmoreText;
      else if (props.status == "loading")
        text = props.loadingText;
      else if (props.status == "nomore" && props.isDot)
        text = dotText;
      else
        text = props.nomoreText;
      return text;
    });
    function loadMore() {
      if (props.status == "loadmore")
        emit("loadmore");
    }
    const __returned__ = { props, emit, dotText, loadmoreStyle, loadTextStyle, showText, loadMore };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-loadmore": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%" } }, "up-loadmore__content": { "": { "marginTop": 0, "marginRight": 15, "marginBottom": 0, "marginLeft": 15, "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center" } }, "up-loadmore__content__icon-wrap": { "": { "marginRight": 8 } }, "up-loadmore__content__text": { "": { "fontSize": 14, "color": "#606266" } }, "up-loadmore__content__dot-text": { "": { "fontSize": 15, "color": "#909193" } } };
const { resolveDynamicComponent: __resolveDynamicComponent } = globalThis.Vue;
const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock, createCommentVNode: _createCommentVNode, createVNode: _createVNode, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, normalizeClass: _normalizeClass, normalizeStyle: _normalizeStyle, createElementVNode: _createElementVNode } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_line = resolveEasycom(__resolveDynamicComponent("up-line"), __easycom_0);
  const _component_up_loading_icon = resolveEasycom(__resolveDynamicComponent("up-loading-icon"), __easycom_1$1);
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: "up-loadmore",
      style: _normalizeStyle($setup.loadmoreStyle)
    },
    [
      $props.line ? (_openBlock(), _createBlock(_component_up_line, {
        key: 0,
        length: "140rpx",
        color: $props.lineColor,
        hairline: false,
        dashed: $props.dashed
      }, null, 8, ["color", "dashed"])) : _createCommentVNode("v-if", true),
      _createElementVNode(
        "view",
        {
          class: _normalizeClass([$props.status == "loadmore" || $props.status == "nomore" ? "up-more" : "", "up-loadmore__content"])
        },
        [
          $props.status == "loading" && $props.icon ? (_openBlock(), _createElementBlock("view", {
            key: 0,
            class: "up-loadmore__content__icon-wrap"
          }, [
            _createVNode(_component_up_loading_icon, {
              color: $props.iconColor,
              size: $props.iconSize,
              mode: $props.loadingIcon
            }, null, 8, ["color", "size", "mode"])
          ])) : _createCommentVNode("v-if", true),
          _createElementVNode(
            "text",
            {
              class: _normalizeClass(["up-line-11", [$props.status == "nomore" && $props.isDot == true ? "up-loadmore__content__dot-text" : "up-loadmore__content__text"]]),
              style: _normalizeStyle($setup.loadTextStyle),
              onClick: $setup.loadMore
            },
            _toDisplayString($setup.showText),
            7
            /* TEXT, CLASS, STYLE */
          )
        ],
        2
        /* CLASS */
      ),
      $props.line ? (_openBlock(), _createBlock(_component_up_line, {
        key: 1,
        length: "140rpx",
        color: $props.lineColor,
        hairline: false,
        dashed: $props.dashed
      }, null, 8, ["color", "dashed"])) : _createCommentVNode("v-if", true)
    ],
    4
    /* STYLE */
  );
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-loadmore/up-loadmore.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-loadmore.js.map
