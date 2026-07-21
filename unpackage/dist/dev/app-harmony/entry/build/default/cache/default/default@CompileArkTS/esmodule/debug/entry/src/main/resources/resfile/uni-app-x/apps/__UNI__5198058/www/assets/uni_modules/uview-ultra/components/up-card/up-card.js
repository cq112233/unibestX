const { defineComponent, computed, openBlock, createElementBlock, normalizeClass, withModifiers, normalizeStyle, createCommentVNode, createElementVNode, toDisplayString, renderSlot } = globalThis.Vue
import "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/composable/useUltraUI&";
import { g as getPx, a as addUnit } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/libs/function/index&";
import { d as defProps } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/uview-ultra/components/up-card/card&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "up-card"
  },
  __name: "up-card",
  props: {
    // 与屏幕两侧是否留空隙
    full: {
      type: Boolean,
      default: defProps.getBoolean("card.full")
    },
    // 标题
    title: {
      type: String,
      default: defProps.getString("card.title")
    },
    // 标题颜色
    titleColor: {
      type: String,
      default: defProps.getString("card.titleColor")
    },
    // 标题字体大小
    titleSize: {
      type: [Number, String],
      default: defProps.getString("card.titleSize")
    },
    // 副标题
    subTitle: {
      type: String,
      default: defProps.getString("card.subTitle")
    },
    // 副标题颜色
    subTitleColor: {
      type: String,
      default: defProps.getString("card.subTitleColor")
    },
    // 副标题字体大小
    subTitleSize: {
      type: [Number, String],
      default: defProps.getBoolean("card.subTitleSize")
    },
    // 是否显示外部边框，只对full=false时有效(卡片与边框有空隙时)
    border: {
      type: Boolean,
      default: defProps.getBoolean("card.border")
    },
    // 用于标识点击了第几个
    index: {
      type: [Number, String, Object],
      default: defProps.getString("card.index")
    },
    // 用于隔开上下左右的边距，带单位的写法，如："30px 30px"，"20px 20px 30px 30px"
    margin: {
      type: String,
      default: defProps.getString("card.margin")
    },
    // card卡片的圆角
    borderRadius: {
      type: [Number, String],
      default: defProps.getString("card.borderRadius")
    },
    // 头部自定义样式，对象形式
    headStyle: {
      type: Object,
      default: defProps.getAny("card.headStyle")
    },
    // 主体自定义样式，对象形式
    bodyStyle: {
      type: Object,
      default: defProps.getAny("card.bodyStyle")
    },
    // 底部自定义样式，对象形式
    footStyle: {
      type: Object,
      default: defProps.getAny("card.footStyle")
    },
    // 头部是否下边框
    headBorderBottom: {
      type: Boolean,
      default: defProps.getBoolean("card.headBorderBottom")
    },
    // 底部是否有上边框
    footBorderTop: {
      type: Boolean,
      default: defProps.getBoolean("card.footBorderTop")
    },
    // 标题左边的缩略图
    thumb: {
      type: String,
      default: defProps.getString("card.thumb")
    },
    // 缩略图宽高
    thumbWidth: {
      type: [String, Number],
      default: defProps.getString("card.thumbWidth")
    },
    // 缩略图是否为圆形
    thumbCircle: {
      type: Boolean,
      default: defProps.getBoolean("card.thumbCircle")
    },
    // 给head，body，foot的内边距
    padding: {
      type: [String, Number],
      default: defProps.getString("card.padding")
    },
    paddingHead: {
      type: [String, Number],
      default: defProps.getString("card.paddingHead")
    },
    paddingBody: {
      type: [String, Number],
      default: defProps.getString("card.paddingBody")
    },
    paddingFoot: {
      type: [String, Number],
      default: defProps.getString("card.paddingFoot")
    },
    // 是否显示头部
    showHead: {
      type: Boolean,
      default: defProps.getBoolean("card.showHead")
    },
    // 是否显示尾部
    showFoot: {
      type: Boolean,
      default: defProps.getBoolean("card.showFoot")
    },
    // 卡片外围阴影，字符串形式
    boxShadow: {
      type: String,
      default: defProps.getString("card.boxShadow")
    }
  },
  emits: ["click", "head-click", "body-click", "foot-click"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const props = __props;
    const realThumb = computed(() => {
      if (props.thumb == "")
        return "";
      return props.thumb;
    });
    const hasBorderRadius = computed(() => {
      const pxStr = getPx(props.borderRadius);
      return parseFloat(pxStr) > 0;
    });
    const cardStyle = computed(() => {
      return new UTSJSONObject({
        borderRadius: addUnit(props.borderRadius),
        margin: props.margin,
        boxShadow: props.boxShadow
      });
    });
    const headPaddingStyle = computed(() => {
      const padVal = props.paddingHead != "" ? props.paddingHead : props.padding;
      return new UTSJSONObject({ padding: addUnit(padVal) });
    });
    const thumbStyle = computed(() => {
      return new UTSJSONObject({
        height: addUnit(props.thumbWidth),
        width: addUnit(props.thumbWidth),
        borderRadius: props.thumbCircle ? "50px" : "4px"
      });
    });
    const titleStyle = computed(() => {
      return new UTSJSONObject({
        fontSize: addUnit(props.titleSize),
        color: props.titleColor
      });
    });
    const subTitleStyle = computed(() => {
      return new UTSJSONObject({
        fontSize: addUnit(props.subTitleSize),
        color: props.subTitleColor
      });
    });
    const bodyPaddingStyle = computed(() => {
      const padVal = props.paddingBody != "" ? props.paddingBody : props.padding;
      return new UTSJSONObject({ padding: addUnit(padVal) });
    });
    const footPaddingStyle = computed(() => {
      const padVal = props.paddingFoot != "" ? props.paddingFoot : props.padding;
      return new UTSJSONObject({ padding: addUnit(padVal) });
    });
    const emit = __emit;
    const click = () => {
      emit("click", props.index);
    };
    const headClick = () => {
      emit("head-click", props.index);
    };
    const bodyClick = () => {
      emit("body-click", props.index);
    };
    const footClick = () => {
      emit("foot-click", props.index);
    };
    const __returned__ = { props, realThumb, hasBorderRadius, cardStyle, headPaddingStyle, thumbStyle, titleStyle, subTitleStyle, bodyPaddingStyle, footPaddingStyle, emit, click, headClick, bodyClick, footClick };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-card": { "": { "position": "relative", "overflow": "hidden", "backgroundColor": "#ffffff", "boxSizing": "border-box" } }, "up-card-full": { "": { "!marginLeft": 0, "!marginRight": 0, "width": "100%" } }, "up-card--border": { "": { "borderTopLeftRadius:after": "16rpx", "borderTopRightRadius:after": "16rpx", "borderBottomRightRadius:after": "16rpx", "borderBottomLeftRadius:after": "16rpx" } }, "up-card__head--left": { "": { "color": "#303133" } }, "up-card__head--left__thumb": { "": { "marginRight": "16rpx" } }, "up-card__head--left__title": { "": { "maxWidth": "400rpx" } }, "up-card__head--right": { "": { "color": "#909193", "marginLeft": "16rpx" } }, "up-card__body": { "": { "color": "#606266" } }, "up-card__foot": { "": { "color": "#909193" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      class: normalizeClass(["up-card", {
        "up-border": $props.border,
        "up-card-full": $props.full,
        "up-card--border": $setup.hasBorderRadius
      }]),
      onClick: withModifiers($setup.click, ["stop"]),
      style: normalizeStyle($setup.cardStyle)
    },
    [
      $props.showHead ? (openBlock(), createElementBlock(
        "view",
        {
          key: 0,
          class: normalizeClass(["up-card__head", {
            "up-border-bottom": $props.headBorderBottom
          }]),
          style: normalizeStyle([$setup.headPaddingStyle, $props.headStyle ?? {}]),
          onClick: $setup.headClick
        },
        [
          _ctx.$slots["head"] == null ? (openBlock(), createElementBlock("view", {
            key: 0,
            class: "up-flex up-row-between up-flex-between up-flex-items-center"
          }, [
            $props.title != "" ? (openBlock(), createElementBlock("view", {
              key: 0,
              class: "up-card__head--left up-flex up-flex-items-center up-line-11"
            }, [
              $setup.realThumb != "" ? (openBlock(), createElementBlock("image", {
                key: 0,
                src: $setup.realThumb,
                class: "up-card__head--left__thumb",
                mode: "aspectFill",
                style: normalizeStyle($setup.thumbStyle)
              }, null, 12, ["src"])) : createCommentVNode("v-if", true),
              createElementVNode(
                "text",
                {
                  class: "up-card__head--left__title up-line-1",
                  style: normalizeStyle($setup.titleStyle)
                },
                toDisplayString($props.title),
                5
                /* TEXT, STYLE */
              )
            ])) : createCommentVNode("v-if", true),
            $props.subTitle != "" ? (openBlock(), createElementBlock("view", {
              key: 1,
              class: "up-card__head--right up-line-1"
            }, [
              createElementVNode(
                "text",
                {
                  class: "up-card__head__title__text",
                  style: normalizeStyle($setup.subTitleStyle)
                },
                toDisplayString($props.subTitle),
                5
                /* TEXT, STYLE */
              )
            ])) : createCommentVNode("v-if", true)
          ])) : renderSlot(_ctx.$slots, "head", { key: 1 })
        ],
        6
        /* CLASS, STYLE */
      )) : createCommentVNode("v-if", true),
      createElementVNode(
        "view",
        {
          onClick: $setup.bodyClick,
          class: "up-card__body",
          style: normalizeStyle([$setup.bodyPaddingStyle, $props.bodyStyle ?? {}])
        },
        [
          renderSlot(_ctx.$slots, "body", {}, () => [
            renderSlot(_ctx.$slots, "default")
          ])
        ],
        4
        /* STYLE */
      ),
      $props.showFoot ? (openBlock(), createElementBlock(
        "view",
        {
          key: 1,
          class: normalizeClass(["up-card__foot", {
            "up-border-top": $props.footBorderTop
          }]),
          onClick: $setup.footClick,
          style: normalizeStyle([$setup.footPaddingStyle, $props.footStyle ?? {}])
        },
        [
          renderSlot(_ctx.$slots, "foot")
        ],
        6
        /* CLASS, STYLE */
      )) : createCommentVNode("v-if", true)
    ],
    6
    /* CLASS, STYLE */
  );
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-card/up-card.uvue"]]);
export {
  __easycom_0 as _
};
//# sourceMappingURL=up-card.js.map
