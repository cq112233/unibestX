"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_limeShared_classNames_index = require("../../../lime-shared/classNames/index.js");
const uni_modules_limeShared_stringifyStyle_index = require("../../../lime-shared/stringifyStyle/index.js");
const uni_modules_limeShared_addUnit_index = require("../../../lime-shared/addUnit/index.js");
const uni_modules_limeIcon_index = require("../../index.js");
if (!Array) {
  const _component_l_svg = common_vendor.resolveComponent("l-svg");
  _component_l_svg();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  styleIsolation: "app-shared",
  inheritAttrs: true,
  externalClasses: ["l-class"],
  options: new common_vendor.UTSJSONObject({
    virtualHost: true
  })
}, { __name: "l-icon", props: {
  name: { default: "" },
  color: {},
  size: {},
  prefix: { default: "l" },
  inherit: { type: Boolean, default: true },
  web: { type: Boolean, default: false },
  lClass: {},
  lStyle: {}
}, emits: ["click"], setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const _b = uni_modules_limeIcon_index.useIcon(common_vendor.computed(() => {
    return props.name;
  }), { prefix: props.prefix }), type = _b.type, fontIcon = _b.fontIcon, imageUrl = _b.imageUrl, iconifyUrl = _b.iconifyUrl, parsed = _b.parsed;
  const fontLoading = common_vendor.computed(() => {
    var _a2;
    if (type.value == "font") {
      if (((_a2 = fontIcon.value) === null || _a2 === void 0 ? null : _a2.fontFamily) == "l")
        return false;
      return uni_modules_limeIcon_index.loadingFonts.value.some((item) => {
        var _a3;
        return item.fontFamily == ((_a3 = fontIcon.value) === null || _a3 === void 0 ? null : _a3.fontFamily);
      });
    }
    return false;
  });
  const classes = common_vendor.computed(() => {
    var _a2;
    const prefix = (_a2 = props.prefix) !== null && _a2 !== void 0 ? _a2 : "l";
    return uni_modules_limeShared_classNames_index.classNames(type.value == "font" ? prefix : null, props.lClass);
  });
  const styles = common_vendor.computed(() => {
    var _a2;
    const fontSize = uni_modules_limeShared_addUnit_index.addUnit(props.size);
    const isFont = type.value == "font";
    return uni_modules_limeShared_stringifyStyle_index.stringifyStyle(new common_vendor.UTSJSONObject({
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
  return (_ctx, _cache) => {
    "raw js";
    var _a2;
    const __returned__ = common_vendor.e({
      a: common_vendor.unref(type) == "font" && !common_vendor.unref(fontLoading)
    }, common_vendor.unref(type) == "font" && !common_vendor.unref(fontLoading) ? {
      b: common_vendor.t((_a2 = common_vendor.unref(fontIcon)) == null ? void 0 : _a2.char),
      c: common_vendor.n(common_vendor.unref(classes)),
      d: common_vendor.s(common_vendor.unref(styles)),
      e: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      f: common_vendor.o(handleClick, "4d")
    } : common_vendor.unref(type) == "image" && (!common_vendor.unref(parsed).isSvg || _ctx.color == null) ? {
      h: common_vendor.n(common_vendor.unref(classes)),
      i: common_vendor.s(common_vendor.unref(styles)),
      j: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      k: common_vendor.unref(imageUrl),
      l: common_vendor.o(handleClick, "63")
    } : common_vendor.unref(iconifyUrl) != null || common_vendor.unref(type) == "image" && common_vendor.unref(parsed).isSvg && _ctx.color != null ? {
      n: common_vendor.n(common_vendor.unref(classes)),
      o: common_vendor.s(common_vendor.unref(styles)),
      p: common_vendor.o(handleClick, "e3"),
      q: common_vendor.p({
        src: common_vendor.unref(iconifyUrl) ?? common_vendor.unref(imageUrl),
        color: _ctx.color,
        inherit: _ctx.inherit,
        web: _ctx.web,
        class: common_vendor.normalizeClass(["l-icon l-icon--image l-class", common_vendor.unref(classes)]),
        style: common_vendor.normalizeStyle(common_vendor.unref(styles))
      })
    } : {}, {
      g: common_vendor.unref(type) == "image" && (!common_vendor.unref(parsed).isSvg || _ctx.color == null),
      m: common_vendor.unref(iconifyUrl) != null || common_vendor.unref(type) == "image" && common_vendor.unref(parsed).isSvg && _ctx.color != null
    });
    return __returned__;
  };
} }));
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/lime-icon/components/l-icon/l-icon.js.map
