import { t } from "../../libs/i18n/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "up-calendar-header"
  },
  __name: "header",
  props: {
    title: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
      default: ""
    },
    showTitle: {
      type: Boolean,
      default: true
    },
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
  emits: ["prev", "next", "prevYear", "nextYear", "today"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const props = __props;
    const emit = __emit;
    function t$1(key) {
      return t(key, new UTSJSONObject({}));
    }
    function prev() {
      if (!props.prevDisabled) {
        emit("prev");
      }
    }
    function next() {
      if (!props.nextDisabled) {
        emit("next");
      }
    }
    function prevYear() {
      if (!props.prevYearDisabled) {
        emit("prevYear");
      }
    }
    function nextYear() {
      if (!props.nextYearDisabled) {
        emit("nextYear");
      }
    }
    function today() {
      if (!props.todayDisabled) {
        emit("today");
      }
    }
    const __returned__ = { props, emit, t: t$1, prev, next, prevYear, nextYear, today };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "u-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "u-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-empty__wrap": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view-wrapper": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__scroll-view": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-tabs__wrapper__nav__line": { "": { "display": "flex", "flexDirection": "column", "flexShrink": 0, "flexGrow": 0, "flexBasis": "auto", "alignItems": "stretch", "alignContent": "flex-start" } }, "up-calendar-header__title": { "": { "fontSize": 16, "fontWeight": "bold", "textAlign": "center", "color": "#303133", "height": 42, "lineHeight": "42px" } }, "up-calendar-header__subtitle": { "": { "fontSize": 14, "color": "#303133", "height": 40, "textAlign": "center", "lineHeight": "40px", "fontWeight": "bold" } }, "up-calendar-header__subtitle-wrap": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "position": "relative" } }, "up-calendar-header__switch": { "": { "fontSize": 16, "color": "#909193", "lineHeight": "40px", "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8 } }, "up-calendar-header__switch--disabled": { "": { "color": "#c0c4cc" } }, "up-calendar-header__today": { "": { "position": "absolute", "right": 15, "fontSize": 13, "color": "var(--theme-color, #0957de)" } }, "up-calendar-header__today--disabled": { "": { "color": "#c0c4cc" } }, "up-calendar-header__weekdays": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "space-between" } }, "up-calendar-header__weekdays__weekday": { "": { "fontSize": 13, "color": "#303133", "lineHeight": "30px", "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "textAlign": "center" } } };
const { toDisplayString: _toDisplayString, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, normalizeClass: _normalizeClass, createElementVNode: _createElementVNode } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("view", { class: "up-calendar-header up-border-bottom" }, [
    $props.showTitle ? (_openBlock(), _createElementBlock(
      "text",
      {
        key: 0,
        class: "up-calendar-header__title"
      },
      _toDisplayString($props.title),
      1
      /* TEXT */
    )) : _createCommentVNode("v-if", true),
    $props.showSubtitle ? (_openBlock(), _createElementBlock("view", {
      key: 1,
      class: "up-calendar-header__subtitle-wrap"
    }, [
      $props.showSwitch ? (_openBlock(), _createElementBlock(
        "text",
        {
          key: 0,
          class: _normalizeClass(["up-calendar-header__switch", { "up-calendar-header__switch--disabled": $props.prevYearDisabled }]),
          onClick: $setup.prevYear
        },
        "«",
        2
        /* CLASS */
      )) : _createCommentVNode("v-if", true),
      $props.showSwitch ? (_openBlock(), _createElementBlock(
        "text",
        {
          key: 1,
          class: _normalizeClass(["up-calendar-header__switch", { "up-calendar-header__switch--disabled": $props.prevDisabled }]),
          onClick: $setup.prev
        },
        "‹",
        2
        /* CLASS */
      )) : _createCommentVNode("v-if", true),
      _createElementVNode(
        "text",
        { class: "up-calendar-header__subtitle" },
        _toDisplayString($props.subtitle),
        1
        /* TEXT */
      ),
      $props.showSwitch ? (_openBlock(), _createElementBlock(
        "text",
        {
          key: 2,
          class: _normalizeClass(["up-calendar-header__switch", { "up-calendar-header__switch--disabled": $props.nextDisabled }]),
          onClick: $setup.next
        },
        "›",
        2
        /* CLASS */
      )) : _createCommentVNode("v-if", true),
      $props.showSwitch ? (_openBlock(), _createElementBlock(
        "text",
        {
          key: 3,
          class: _normalizeClass(["up-calendar-header__switch", { "up-calendar-header__switch--disabled": $props.nextYearDisabled }]),
          onClick: $setup.nextYear
        },
        "»",
        2
        /* CLASS */
      )) : _createCommentVNode("v-if", true),
      $props.showToday ? (_openBlock(), _createElementBlock(
        "text",
        {
          key: 4,
          class: _normalizeClass(["up-calendar-header__today", { "up-calendar-header__today--disabled": $props.todayDisabled }]),
          onClick: $setup.today
        },
        _toDisplayString($props.todayText),
        3
        /* TEXT, CLASS */
      )) : _createCommentVNode("v-if", true)
    ])) : _createCommentVNode("v-if", true),
    _createElementVNode("view", { class: "up-calendar-header__weekdays" }, [
      _createElementVNode(
        "text",
        { class: "up-calendar-header__weekdays__weekday" },
        _toDisplayString($setup.t("up_week_one")),
        1
        /* TEXT */
      ),
      _createElementVNode(
        "text",
        { class: "up-calendar-header__weekdays__weekday" },
        _toDisplayString($setup.t("up_week_two")),
        1
        /* TEXT */
      ),
      _createElementVNode(
        "text",
        { class: "up-calendar-header__weekdays__weekday" },
        _toDisplayString($setup.t("up_week_three")),
        1
        /* TEXT */
      ),
      _createElementVNode(
        "text",
        { class: "up-calendar-header__weekdays__weekday" },
        _toDisplayString($setup.t("up_week_four")),
        1
        /* TEXT */
      ),
      _createElementVNode(
        "text",
        { class: "up-calendar-header__weekdays__weekday" },
        _toDisplayString($setup.t("up_week_five")),
        1
        /* TEXT */
      ),
      _createElementVNode(
        "text",
        { class: "up-calendar-header__weekdays__weekday" },
        _toDisplayString($setup.t("up_week_six")),
        1
        /* TEXT */
      ),
      _createElementVNode(
        "text",
        { class: "up-calendar-header__weekdays__weekday" },
        _toDisplayString($setup.t("up_week_seven")),
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
