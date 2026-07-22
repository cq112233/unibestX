import { _ as __easycom_0 } from "../up-icon/up-icon.js";
const { defineComponent, getCurrentInstance, computed, resolveDynamicComponent, openBlock, createElementBlock, normalizeStyle, createBlock, createElementVNode, toDisplayString, renderSlot, createCommentVNode } = globalThis.Vue
import { r as resolveEasycom } from "../../../../App.ku.js";
import "../../libs/composable/useMp.js";
import "../../libs/composable/useUltraUI.js";
import { a as addUnit } from "../../libs/function/index.js";
import { t } from "../../libs/i18n/index.js";
import { d as defProps } from "./empty.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "up-empty"
  },
  __name: "up-empty",
  props: {
    // 内置图标名称，或图片路径，建议绝对路径
    icon: {
      type: String,
      default: defProps.getString("empty.icon")
    },
    // 提示文字
    text: {
      type: String,
      default: defProps.getString("empty.text")
    },
    // 文字颜色
    textColor: {
      type: String,
      default: defProps.getString("empty.textColor")
    },
    // 文字大小
    textSize: {
      type: [String, Number],
      default: defProps.getNumber("empty.textSize")
    },
    // 图标的颜色
    iconColor: {
      type: String,
      default: defProps.getString("empty.iconColor")
    },
    // 图标的大小
    iconSize: {
      type: [String, Number],
      default: defProps.getNumber("empty.iconSize")
    },
    // 选择预置的图标类型
    mode: {
      type: String,
      default: defProps.getString("empty.mode")
    },
    // 图标宽度，单位px
    width: {
      type: [String, Number],
      default: defProps.getNumber("empty.width")
    },
    // 图标高度，单位px
    height: {
      type: [String, Number],
      default: defProps.getNumber("empty.height")
    },
    // 是否显示组件
    show: {
      type: Boolean,
      default: defProps.getBoolean("empty.show")
    },
    // 组件距离上一个元素之间的距离，默认px单位
    marginTop: {
      type: [String, Number],
      default: defProps.getNumber("empty.marginTop")
    }
    // 自定义样式
    // ...commonProps
  },
  emits: ["click", "close"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const instance = getCurrentInstance().proxy;
    const props = __props;
    const emit = __emit;
    const icons = new UTSJSONObject(
      {
        car: t("up.empty.car", new UTSJSONObject({})),
        page: t("up.empty.page", new UTSJSONObject({})),
        search: t("up.empty.search", new UTSJSONObject({})),
        address: t("up.empty.address", new UTSJSONObject({})),
        wifi: t("up.empty.wifi", new UTSJSONObject({})),
        order: t("up.empty.order", new UTSJSONObject({})),
        coupon: t("up.empty.coupon", new UTSJSONObject({})),
        favor: t("up.empty.favor", new UTSJSONObject({})),
        permission: t("up.empty.permission", new UTSJSONObject({})),
        history: t("up.empty.history", new UTSJSONObject({})),
        news: t("up.empty.news", new UTSJSONObject({})),
        message: t("up.empty.message", new UTSJSONObject({})),
        list: t("up.empty.list", new UTSJSONObject({})),
        data: t("up.empty.data", new UTSJSONObject({})),
        comment: t("up.empty.comment", new UTSJSONObject({}))
      }
      // 计算属性
      // 组件样式
    );
    const emptyStyle = computed(() => {
      const style = new UTSJSONObject({});
      style["marginTop"] = addUnit(props.marginTop);
      return style;
    });
    const textStyle = computed(() => {
      const style = new UTSJSONObject({});
      style["color"] = props.textColor;
      style["fontSize"] = addUnit(props.textSize);
      return style;
    });
    const isSrc = computed(() => {
      return props.icon.indexOf("/") >= 0;
    });
    const __returned__ = { instance, props, emit, icons, emptyStyle, textStyle, isSrc };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "center", "alignContent": "flex-start", "justifyContent": "center" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__text": { "": { "marginTop": "20rpx" } }, "up-slot-wrap": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "marginTop": "20rpx" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_up_icon = resolveEasycom(resolveDynamicComponent("up-icon"), __easycom_0);
  return $props.show ? (openBlock(), createElementBlock(
    "view",
    {
      key: 0,
      class: "up-empty",
      style: normalizeStyle([$setup.emptyStyle, _ctx.$up.addStyle(_ctx.customStyle)])
    },
    [
      !$setup.isSrc ? (openBlock(), createBlock(_component_up_icon, {
        key: 0,
        name: $props.mode === "message" ? "chat" : `empty-${$props.mode}`,
        size: $props.iconSize,
        color: $props.iconColor,
        "margin-top": "14"
      }, null, 8, ["name", "size", "color"])) : (openBlock(), createElementBlock("image", {
        key: 1,
        style: normalizeStyle({
          width: _ctx.$up.addUnit($props.width),
          height: _ctx.$up.addUnit($props.height)
        }),
        src: $props.icon,
        mode: "widthFix"
      }, null, 12, ["src"])),
      createElementVNode(
        "text",
        {
          class: "up-empty__text",
          style: normalizeStyle([$setup.textStyle])
        },
        toDisplayString($props.text != "" ? $props.text : $setup.icons[$props.mode]),
        5
        /* TEXT, STYLE */
      ),
      _ctx.$slots["default"] != null || _ctx.$slots["$default"] != null ? (openBlock(), createElementBlock("view", {
        key: 2,
        class: "up-empty__wrap"
      }, [
        renderSlot(_ctx.$slots, "default")
      ])) : createCommentVNode("v-if", true)
    ],
    4
    /* STYLE */
  )) : createCommentVNode("v-if", true);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-empty/up-empty.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=up-empty.js.map
