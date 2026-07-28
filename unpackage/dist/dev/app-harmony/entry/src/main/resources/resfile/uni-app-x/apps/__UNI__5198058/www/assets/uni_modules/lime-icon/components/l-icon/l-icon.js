const { defineComponent, computed, resolveComponent, openBlock, createElementBlock, Fragment, createCommentVNode, normalizeClass, normalizeStyle, toDisplayString, createElementVNode, createVNode } = globalThis.Vue
import { c as classNames } from "../../../lime-shared/classNames/index.js";
import { s as stringifyStyle } from "../../../lime-shared/stringifyStyle/index.js";
import { a as addUnit } from "../../../lime-shared/addUnit/index.js";
import { u as useIcon, l as loadingFonts } from "../../index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    styleIsolation: "app-shared",
    inheritAttrs: true,
    externalClasses: ["l-class"],
    options: new UTSJSONObject({
      virtualHost: true
    })
  },
  __name: "l-icon",
  props: {
    name: { type: String, required: true, default: "" },
    color: { type: String, required: false },
    size: { type: [String, Number], required: false },
    prefix: { type: String, required: true, default: "l" },
    inherit: { type: Boolean, required: true, default: true },
    web: { type: Boolean, required: true, default: false },
    lClass: { type: null, required: false },
    lStyle: { type: null, required: false }
  },
  emits: ["click"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const props = __props;
    const emit = __emit;
    const _b = useIcon(computed(() => {
      return props.name;
    }), { prefix: props.prefix }), type = _b.type, fontIcon = _b.fontIcon, imageUrl = _b.imageUrl, iconifyUrl = _b.iconifyUrl, parsed = _b.parsed;
    const fontLoading = computed(() => {
      var _a2;
      if (type.value == "font") {
        if (((_a2 = fontIcon.value) === null || _a2 === void 0 ? null : _a2.fontFamily) == "l")
          return false;
        return loadingFonts.value.some((item) => {
          var _a3;
          return item.fontFamily == ((_a3 = fontIcon.value) === null || _a3 === void 0 ? null : _a3.fontFamily);
        });
      }
      return false;
    });
    const classes = computed(() => {
      var _a2;
      const prefix = (_a2 = props.prefix) !== null && _a2 !== void 0 ? _a2 : "l";
      return classNames(type.value == "font" ? prefix : null, props.lClass);
    });
    const styles = computed(() => {
      var _a2;
      const fontSize = addUnit(props.size);
      const isFont = type.value == "font";
      return stringifyStyle(new UTSJSONObject({
        fontFamily: isFont ? (_a2 = fontIcon.value) === null || _a2 === void 0 ? null : _a2.fontFamily : false,
        fontSize: isFont ? fontSize : false,
        color: isFont ? props.color : false,
        width: !isFont ? fontSize : false,
        height: !isFont ? fontSize : false
      }), props.lStyle);
    });
    const handleClick = () => {
      emit("click");
    };
    const __returned__ = { props, emit, type, fontIcon, imageUrl, iconifyUrl, parsed, fontLoading, classes, styles, handleClick };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "l-icon--font": { "": { "fontFamily": "l", "textAlign": "center" } }, "l-icon--image": { "": { "width": "var(--l-icon-size, 16px)", "height": "var(--l-icon-size, 16px)" } }, "@FONT-FACE": [{ "fontFamily": "l", "src": 'url("/uni_modules/lime-icon/static/app/t4.ttf")' }] };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_l_svg = resolveComponent("l-svg");
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
      createCommentVNode(" 字体图标 "),
      $setup.type == "font" && !$setup.fontLoading ? (openBlock(), createElementBlock(
        "text",
        {
          key: 0,
          class: normalizeClass(["l-icon l-icon--font l-class", $setup.classes]),
          style: normalizeStyle($setup.styles),
          onClick: $setup.handleClick
        },
        toDisplayString($setup.fontIcon?.char),
        7
        /* TEXT, CLASS, STYLE */
      )) : $setup.type == "image" && (!$setup.parsed.isSvg || $props.color == null) ? (openBlock(), createElementBlock(
        Fragment,
        { key: 1 },
        [
          createCommentVNode(" 图片图标 "),
          createElementVNode("image", {
            class: normalizeClass(["l-icon l-icon--image l-class", $setup.classes]),
            style: normalizeStyle($setup.styles),
            src: $setup.imageUrl,
            onClick: $setup.handleClick
          }, null, 14, ["src"])
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )) : $setup.iconifyUrl != null || $setup.type == "image" && $setup.parsed.isSvg && $props.color != null ? (openBlock(), createElementBlock(
        Fragment,
        { key: 2 },
        [
          createCommentVNode(" SVG图标（包括Iconify和带有颜色的SVG图片） "),
          createVNode(_component_l_svg, {
            class: normalizeClass(["l-icon l-icon--image l-class", $setup.classes]),
            style: normalizeStyle($setup.styles),
            src: $setup.iconifyUrl ?? $setup.imageUrl,
            color: $props.color,
            inherit: $props.inherit,
            web: $props.web,
            onClick: $setup.handleClick
          }, null, 8, ["class", "style", "src", "color", "inherit", "web"])
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )) : createCommentVNode("v-if", true)
    ],
    2112
    /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/lime-icon/components/l-icon/l-icon.uvue"]]);
export {
  __easycom_1 as _
};
//# sourceMappingURL=l-icon.js.map
