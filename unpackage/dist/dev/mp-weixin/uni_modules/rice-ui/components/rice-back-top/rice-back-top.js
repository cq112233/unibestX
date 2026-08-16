"use strict";
const common_vendor = require("../../../../common/vendor.js");
require("../../libs/use/useCountDown/index.js");
require("../../libs/store/useConfig.js");
const uni_modules_riceUi_libs_use_useNamespace_index = require("../../libs/use/useNamespace/index.js");
require("../../libs/use/usePopup/index.js");
require("../../libs/use/useRelation/useChildren.js");
require("../../libs/use/useRelation/useParent.js");
require("../../libs/use/useSafeArea/index.js");
require("../../libs/use/useTouch/index.js");
const uni_modules_riceUi_libs_utils_basic = require("../../libs/utils/basic.js");
require("./type.js");
if (!Array) {
  const _easycom_rice_icon_1 = common_vendor.resolveComponent("rice-icon");
  _easycom_rice_icon_1();
}
const _easycom_rice_icon = () => "../rice-icon/rice-icon.js";
if (!Math) {
  _easycom_rice_icon();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-back-top",
  styleIsolation: "app-and-page"
}, { __name: "rice-back-top", props: {
  mode: { default: "round" },
  parentId: {},
  scrollTop: { default: null },
  offset: { default: 200 },
  right: {},
  bottom: {},
  duration: { default: 300 },
  icon: { default: "back-top" },
  iconSize: {},
  text: {},
  textSize: {},
  textColor: {},
  width: {},
  height: {},
  radius: {},
  bgColor: {},
  zoom: { type: Boolean, default: true },
  zIndex: {},
  disabledPageScroll: { type: Boolean, default: false },
  customStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } }
}, emits: ["click"], setup(__props, _a) {
  var __emit = _a.emit;
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("back-top");
  const emit = __emit;
  const props = __props;
  const _scrollTop = common_vendor.computed(() => {
    var _a2;
    return (_a2 = props.scrollTop) !== null && _a2 !== void 0 ? _a2 : 0;
  });
  const isShow = common_vendor.computed(() => {
    return _scrollTop.value >= props.offset;
  });
  const backToTop = (e) => {
    if (props.disabledPageScroll) {
      emit("click", e);
      return null;
    }
    common_vendor.index.pageScrollTo(new common_vendor.UTSJSONObject({
      scrollTop: 0,
      duration: props.duration
    }));
    emit("click", e);
  };
  const _iconSize = common_vendor.computed(() => {
    if (props.iconSize != null)
      return props.iconSize;
    return uni_modules_riceUi_libs_utils_basic.hasStrValue(props.text) ? "20px" : "24px";
  });
  const backTopStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (props.zIndex != null)
      css.set("z-index", props.zIndex);
    if (props.bottom != null)
      css.set("bottom", uni_modules_riceUi_libs_utils_basic.addUnit(props.bottom));
    if (props.right != null)
      css.set("right", uni_modules_riceUi_libs_utils_basic.addUnit(props.right));
    if (props.bgColor != null) {
      css.set("background", props.bgColor);
      css.set("border-color", props.bgColor);
    }
    if (props.height != null)
      css.set("height", props.height);
    if (props.width != null)
      css.set("width", props.width);
    if (props.radius != null)
      css.set("border-radius", props.radius);
    return css;
  });
  const _textColor = common_vendor.computed(() => {
    var _a2;
    return (_a2 = props.textColor) !== null && _a2 !== void 0 ? _a2 : "var(--rice-text-color)";
  });
  const textStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (props.textColor != null)
      css.set("color", props.textColor);
    if (props.textSize != null)
      css.set("font-size", uni_modules_riceUi_libs_utils_basic.addUnit(props.textSize));
    return css;
  });
  const backTopCss = common_vendor.computed(() => {
    const mode = ["round", "half-round"].includes(props.mode) ? props.mode : "round";
    return [
      ns.b(""),
      ns.theme(),
      ns.m(mode),
      ns.is("zoom", props.zoom),
      ns.is("show", isShow.value)
    ];
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(_ctx.icon)
    }, common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(_ctx.icon) ? {
      b: common_vendor.p({
        name: _ctx.icon,
        size: common_vendor.unref(_iconSize),
        color: common_vendor.unref(_textColor),
        bold: true,
        class: "data-v-f88d1ec2"
      })
    } : {}, {
      c: common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(_ctx.text)
    }, common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(_ctx.text) ? {
      d: common_vendor.t(_ctx.text),
      e: _ctx.mode == "half-round" ? 1 : "",
      f: common_vendor.s(common_vendor.unref(textStyle))
    } : {}, {
      g: common_vendor.sei(common_vendor.gei(_ctx, "", "r0-f88d1ec2"), "view", "backTopRef"),
      h: common_vendor.n(common_vendor.unref(backTopCss)),
      i: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      j: common_vendor.s(common_vendor.unref(backTopStyle)),
      k: common_vendor.s(_ctx.customStyle),
      l: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      m: common_vendor.o(backToTop, "0b")
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f88d1ec2"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-back-top/rice-back-top.js.map
