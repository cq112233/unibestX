const { defineComponent, openBlock, createElementBlock, toDisplayString, createCommentVNode, normalizeClass, createElementVNode } = globalThis.Vue
import "../../libs/mixin/mixin.js";
import { t } from "../../libs/i18n/index.js";
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
    t(key) {
      return t(key, new UTSJSONObject({}));
    },
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
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-calendar-header__title": { "": { "fontSize": 16, "fontWeight": "bold", "textAlign": "center", "color": "#303133", "height": 42, "lineHeight": "42px" } }, "up-calendar-header__subtitle": { "": { "fontSize": 14, "color": "#303133", "height": 40, "textAlign": "center", "lineHeight": "40px", "fontWeight": "bold" } }, "up-calendar-header__subtitle-wrap": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "position": "relative" } }, "up-calendar-header__switch": { "": { "fontSize": 16, "color": "#909193", "lineHeight": "40px", "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8 } }, "up-calendar-header__switch--disabled": { "": { "color": "#c0c4cc" } }, "up-calendar-header__today": { "": { "position": "absolute", "right": 15, "fontSize": 13, "color": "var(--theme-color, #0957de)" } }, "up-calendar-header__today--disabled": { "": { "color": "#c0c4cc" } }, "up-calendar-header__weekdays": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "space-between" } }, "up-calendar-header__weekdays__weekday": { "": { "fontSize": 13, "color": "#303133", "lineHeight": "30px", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "textAlign": "center" } } };
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
      createElementVNode(
        "text",
        { class: "up-calendar-header__weekdays__weekday" },
        toDisplayString($options.t("up_week_one")),
        1
        /* TEXT */
      ),
      createElementVNode(
        "text",
        { class: "up-calendar-header__weekdays__weekday" },
        toDisplayString($options.t("up_week_two")),
        1
        /* TEXT */
      ),
      createElementVNode(
        "text",
        { class: "up-calendar-header__weekdays__weekday" },
        toDisplayString($options.t("up_week_three")),
        1
        /* TEXT */
      ),
      createElementVNode(
        "text",
        { class: "up-calendar-header__weekdays__weekday" },
        toDisplayString($options.t("up_week_four")),
        1
        /* TEXT */
      ),
      createElementVNode(
        "text",
        { class: "up-calendar-header__weekdays__weekday" },
        toDisplayString($options.t("up_week_five")),
        1
        /* TEXT */
      ),
      createElementVNode(
        "text",
        { class: "up-calendar-header__weekdays__weekday" },
        toDisplayString($options.t("up_week_six")),
        1
        /* TEXT */
      ),
      createElementVNode(
        "text",
        { class: "up-calendar-header__weekdays__weekday" },
        toDisplayString($options.t("up_week_seven")),
        1
        /* TEXT */
      )
    ])
  ]);
}
const uHeader = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/uview-ultra/components/up-calendar/header.uvue"]]);
export {
  uHeader as u
};
//# sourceMappingURL=header.js.map
