"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_riceUi_libs_utils_basic = require("../../libs/utils/basic.js");
require("../../libs/use/useCountDown/index.js");
require("../../libs/store/useConfig.js");
const uni_modules_riceUi_libs_use_useNamespace_index = require("../../libs/use/useNamespace/index.js");
require("../../libs/use/usePopup/index.js");
require("../../libs/use/useRelation/useChildren.js");
require("../../libs/use/useRelation/useParent.js");
require("../../libs/use/useSafeArea/index.js");
require("../../libs/use/useTouch/index.js");
require("./type.js");
const uni_modules_riceUi_components_riceIcon_font = require("./font.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-icon",
  styleIsolation: "app-and-page"
}, { __name: "rice-icon", props: {
  name: { default: "" },
  size: { default: "16px" },
  color: {},
  bold: { type: Boolean },
  fontFamily: {},
  stop: { type: Boolean },
  customStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } }
}, emits: ["click"], setup(__props, _a) {
  var __emit = _a.emit;
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("icon");
  const emit = __emit;
  const props = __props;
  const isBase64 = () => {
    return props.name.indexOf("data:") > -1 && props.name.indexOf("base64") > -1;
  };
  const isImage = common_vendor.computed(() => {
    return props.name.includes("/") || isBase64();
  });
  const iconCode = common_vendor.computed(() => {
    var _a2, _b;
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(props.fontFamily))
      return String.fromCharCode(parseInt(props.name, 16));
    return (_b = (_a2 = common_vendor.UTS.arrayFind(uni_modules_riceUi_components_riceIcon_font.fontData, (v) => {
      return v.name == props.name;
    })) === null || _a2 === void 0 ? null : _a2.code) !== null && _b !== void 0 ? _b : "";
  });
  const iconClick = () => {
    emit("click");
  };
  const iconStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (props.size != null)
      css.set("font-size", uni_modules_riceUi_libs_utils_basic.addUnit(props.size));
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(props.color))
      css.set("color", props.color);
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(props.fontFamily))
      css.set("font-family", props.fontFamily);
    return css;
  });
  const imageStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (props.size != null) {
      const size = uni_modules_riceUi_libs_utils_basic.addUnit(props.size);
      css.set("height", uni_modules_riceUi_libs_utils_basic.addUnit(size));
      css.set("width", uni_modules_riceUi_libs_utils_basic.addUnit(size));
    }
    return css;
  });
  const iconClass = common_vendor.computed(() => {
    var _a2;
    return [
      ns.theme(),
      ns.is("bold", (_a2 = props.bold) !== null && _a2 !== void 0 ? _a2 : false)
    ];
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: !common_vendor.unref(isImage)
    }, !common_vendor.unref(isImage) ? {
      b: common_vendor.t(common_vendor.unref(iconCode)),
      c: common_vendor.n(common_vendor.unref(iconClass)),
      d: common_vendor.s(common_vendor.unref(iconStyle)),
      e: common_vendor.s(_ctx.customStyle),
      f: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      g: common_vendor.o(iconClick, "3e")
    } : {
      h: _ctx.name,
      i: common_vendor.s(common_vendor.unref(imageStyle)),
      j: common_vendor.s(_ctx.customStyle),
      k: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      l: common_vendor.o(iconClick, "02")
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1be32a1e"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-icon/rice-icon.js.map
