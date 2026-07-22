const { defineComponent, openBlock, createElementBlock, toDisplayString, createCommentVNode, normalizeClass, createElementVNode } = globalThis.Vue
import "../../libs/mixin/mixin.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = defineComponent({
  name: "up-calendar-header",
  // mixins: [mpMixin, mixin],
  props: {
    // 标题
    title: {
      type: String,
      default: ""
    },
    // 副标题
    subtitle: {
      type: String,
      default: ""
    },
    // 是否显示标题
    showTitle: {
      type: Boolean,
      default: true
    },
    // 是否显示副标题
    showSubtitle: {
      type: Boolean,
      default: true
    },
    showSwitch: {
      type: Boolean,
      default: false
    },
    prevDisabled: {
      type: Boolean,
      default: false
    },
    nextDisabled: {
      type: Boolean,
      default: false
    },
    prevYearDisabled: {
      type: Boolean,
      default: false
    },
    nextYearDisabled: {
      type: Boolean,
      default: false
    },
    showToday: {
      type: Boolean,
      default: true
    },
    todayText: {
      type: String,
      default: "今天"
    },
    todayDisabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    prev() {
      if (!this.prevDisabled) {
        this.$emit("prev");
      }
    },
    next() {
      if (!this.nextDisabled) {
        this.$emit("next");
      }
    },
    prevYear() {
      if (!this.prevYearDisabled) {
        this.$emit("prevYear");
      }
    },
    nextYear() {
      if (!this.nextYearDisabled) {
        this.$emit("nextYear");
      }
    },
    today() {
      if (!this.todayDisabled) {
        this.$emit("today");
      }
    }
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-calendar-header": { "": { "display": "flex", "flexDirection": "column", "paddingBottom": 4 } }, "up-calendar-header__title": { "": { "fontSize": 16, "color": "#303133", "textAlign": "center", "height": 42, "lineHeight": "42px", "fontWeight": "bold" } }, "up-calendar-header__subtitle-wrap": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "center", "height": 40 } }, "up-calendar-header__subtitle": { "": { "fontSize": 14, "color": "#303133", "textAlign": "center", "fontWeight": "bold", "minWidth": 120 } }, "up-calendar-header__switch": { "": { "width": 44, "height": 40, "lineHeight": "40px", "textAlign": "center", "color": "#303133", "fontSize": 22, "fontWeight": "bold", "flexShrink": 0 } }, "up-calendar-header__switch--disabled": { "": { "opacity": 0.35 } }, "up-calendar-header__weekdays": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "space-between" } }, "up-calendar-header__weekdays__weekday": { "": { "fontSize": 13, "color": "#303133", "lineHeight": "30px", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "textAlign": "center" } }, "up-calendar-header__today": { "": { "marginLeft": 4, "height": 28, "lineHeight": "28px", "paddingTop": 0, "paddingRight": 10, "paddingBottom": 0, "paddingLeft": 10, "borderTopLeftRadius": 14, "borderTopRightRadius": 14, "borderBottomRightRadius": 14, "borderBottomLeftRadius": 14, "fontSize": 13, "color": "var(--theme-color, #0957de)", "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1, "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid", "borderTopColor": "var(--theme-color, #0957de)", "borderRightColor": "var(--theme-color, #0957de)", "borderBottomColor": "var(--theme-color, #0957de)", "borderLeftColor": "var(--theme-color, #0957de)", "flexShrink": 0 } }, "up-calendar-header__today--disabled": { "": { "opacity": 0.35 } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", { class: "up-calendar-header up-border-bottom" }, [
    $props.showTitle ? (openBlock(), createElementBlock(
      "text",
      {
        key: 0,
        class: "up-calendar-header__title"
      },
      toDisplayString($props.title),
      1
      /* TEXT */
    )) : createCommentVNode("v-if", true),
    $props.showSubtitle ? (openBlock(), createElementBlock("view", {
      key: 1,
      class: "up-calendar-header__subtitle-wrap"
    }, [
      $props.showSwitch ? (openBlock(), createElementBlock(
        "text",
        {
          key: 0,
          class: normalizeClass(["up-calendar-header__switch", { "up-calendar-header__switch--disabled": $props.prevYearDisabled }]),
          onClick: _cache[0] || (_cache[0] = (...args) => $options.prevYear && $options.prevYear(...args))
        },
        "«",
        2
        /* CLASS */
      )) : createCommentVNode("v-if", true),
      $props.showSwitch ? (openBlock(), createElementBlock(
        "text",
        {
          key: 1,
          class: normalizeClass(["up-calendar-header__switch", { "up-calendar-header__switch--disabled": $props.prevDisabled }]),
          onClick: _cache[1] || (_cache[1] = (...args) => $options.prev && $options.prev(...args))
        },
        "‹",
        2
        /* CLASS */
      )) : createCommentVNode("v-if", true),
      createElementVNode(
        "text",
        { class: "up-calendar-header__subtitle" },
        toDisplayString($props.subtitle),
        1
        /* TEXT */
      ),
      $props.showSwitch ? (openBlock(), createElementBlock(
        "text",
        {
          key: 2,
          class: normalizeClass(["up-calendar-header__switch", { "up-calendar-header__switch--disabled": $props.nextDisabled }]),
          onClick: _cache[2] || (_cache[2] = (...args) => $options.next && $options.next(...args))
        },
        "›",
        2
        /* CLASS */
      )) : createCommentVNode("v-if", true),
      $props.showSwitch ? (openBlock(), createElementBlock(
        "text",
        {
          key: 3,
          class: normalizeClass(["up-calendar-header__switch", { "up-calendar-header__switch--disabled": $props.nextYearDisabled }]),
          onClick: _cache[3] || (_cache[3] = (...args) => $options.nextYear && $options.nextYear(...args))
        },
        "»",
        2
        /* CLASS */
      )) : createCommentVNode("v-if", true),
      $props.showToday ? (openBlock(), createElementBlock(
        "text",
        {
          key: 4,
          class: normalizeClass(["up-calendar-header__today", { "up-calendar-header__today--disabled": $props.todayDisabled }]),
          onClick: _cache[4] || (_cache[4] = (...args) => $options.today && $options.today(...args))
        },
        toDisplayString($props.todayText),
        3
        /* TEXT, CLASS */
      )) : createCommentVNode("v-if", true)
    ])) : createCommentVNode("v-if", true),
    createElementVNode("view", { class: "up-calendar-header__weekdays" }, [
      createElementVNode("text", { class: "up-calendar-header__weekdays__weekday" }, "一"),
      createElementVNode("text", { class: "up-calendar-header__weekdays__weekday" }, "二"),
      createElementVNode("text", { class: "up-calendar-header__weekdays__weekday" }, "三"),
      createElementVNode("text", { class: "up-calendar-header__weekdays__weekday" }, "四"),
      createElementVNode("text", { class: "up-calendar-header__weekdays__weekday" }, "五"),
      createElementVNode("text", { class: "up-calendar-header__weekdays__weekday" }, "六"),
      createElementVNode("text", { class: "up-calendar-header__weekdays__weekday" }, "日")
    ])
  ]);
}
const uHeader = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-calendar/header.uvue"]]);
export {
  uHeader as u
};
//# sourceMappingURL=header.js.map
