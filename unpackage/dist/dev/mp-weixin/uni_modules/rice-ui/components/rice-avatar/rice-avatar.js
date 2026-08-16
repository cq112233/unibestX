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
if (!Array) {
  const _easycom_rice_icon_1 = common_vendor.resolveComponent("rice-icon");
  _easycom_rice_icon_1();
}
const _easycom_rice_icon = () => "../rice-icon/rice-icon.js";
if (!Math) {
  _easycom_rice_icon();
}
const base64Avatar = "data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjREMEQwRkY0RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjREMEQwRkY1RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEQwRDBGRjJGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEQwRDBGRjNGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYG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";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-avatar",
  styleIsolation: "app-and-page",
  externalClasses: ["text-class"]
}, { __name: "rice-avatar", props: {
  src: {},
  round: { type: Boolean, default: true },
  radius: {},
  size: {},
  mode: { default: "scaleToFill" },
  text: {},
  icon: {},
  bgColor: {},
  color: {},
  fontSize: {},
  textClass: {},
  defaultUrl: {},
  customStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } }
}, emits: ["click", "error"], setup(__props, _a) {
  var __emit = _a.emit;
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("avatar");
  const emit = __emit;
  const props = __props;
  const isLoading = common_vendor.ref(true);
  const avatarUrl = common_vendor.ref(props.src);
  const _radius = common_vendor.computed(() => {
    return props.radius;
  });
  const iconSize = common_vendor.computed(() => {
    if (props.fontSize != null)
      return props.fontSize;
    if (props.size == "large")
      return "20px";
    if (props.size == "mini")
      return "14px";
    return "16px";
  });
  const loadError = (event = null) => {
    isLoading.value = false;
    avatarUrl.value = uni_modules_riceUi_libs_utils_basic.hasStrValue(props.defaultUrl) ? props.defaultUrl : base64Avatar;
    emit("error", event);
  };
  const onImageLoad = () => {
    isLoading.value = false;
  };
  common_vendor.watch(() => {
    return props.src;
  }, (newVal = null) => {
    avatarUrl.value = newVal;
    if (!uni_modules_riceUi_libs_utils_basic.hasStrValue(newVal)) {
      loadError(null);
    }
  }, {
    immediate: true
  });
  const handleClick = () => {
    emit("click");
  };
  const rootStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (uni_modules_riceUi_libs_utils_basic.hasStrValue(props.size) && props.size != "large" && props.size != "mini") {
      const size = uni_modules_riceUi_libs_utils_basic.addUnit(props.size);
      css.set("width", size);
      css.set("height", size);
    }
    if (props.bgColor != null) {
      css.set("background", props.bgColor);
    }
    if (_radius.value != null) {
      css.set("border-radius", uni_modules_riceUi_libs_utils_basic.addUnit(_radius.value));
    }
    return css;
  });
  const imageStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (_radius.value != null) {
      css.set("border-radius", uni_modules_riceUi_libs_utils_basic.addUnit(_radius.value));
    }
    return css;
  });
  const textStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (props.fontSize != null) {
      css.set("font-size", uni_modules_riceUi_libs_utils_basic.addUnit(props.fontSize));
    }
    if (props.color != null)
      css.set("color", props.color);
    return css;
  });
  const rootClass = common_vendor.computed(() => {
    const cls = [
      ns.b(""),
      ns.is("round", props.round && props.radius == null),
      ns.is("text", uni_modules_riceUi_libs_utils_basic.hasStrValue(props.text) || uni_modules_riceUi_libs_utils_basic.hasStrValue(props.icon)),
      ns.theme()
    ];
    if (props.size == "large" || props.size == "mini") {
      cls.push(ns.m(props.size));
    }
    return cls;
  });
  const avatarTextClass = common_vendor.computed(() => {
    var _a2;
    const basic = ["rice-avatar__text", (_a2 = props.textClass) !== null && _a2 !== void 0 ? _a2 : ""];
    if (props.size == "large" || props.size == "mini") {
      basic.push(`rice-avatar__text--${props.size}`);
    }
    return basic;
  });
  const imageClass = common_vendor.computed(() => {
    const cls = [
      ns.e("image"),
      ns.is("round", props.round && !uni_modules_riceUi_libs_utils_basic.hasStrValue(props.radius)),
      ns.is("loading", isLoading.value)
    ];
    if (props.size == "large" || props.size == "mini") {
      cls.push(ns.e(`image--${props.size}`));
    }
    return cls;
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(_ctx.icon)
    }, common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(_ctx.icon) ? {
      b: common_vendor.p({
        name: _ctx.icon,
        size: common_vendor.unref(iconSize),
        color: _ctx.color,
        class: "data-v-e0e31555"
      })
    } : common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(_ctx.text) ? {
      d: common_vendor.t(_ctx.text),
      e: common_vendor.n(common_vendor.unref(avatarTextClass)),
      f: common_vendor.s(common_vendor.unref(textStyle))
    } : {
      g: common_vendor.unref(avatarUrl),
      h: _ctx.mode,
      i: common_vendor.s(common_vendor.unref(imageStyle)),
      j: common_vendor.n(common_vendor.unref(imageClass)),
      k: common_vendor.o(onImageLoad, "12"),
      l: common_vendor.o(loadError, "f3")
    }, {
      c: common_vendor.unref(uni_modules_riceUi_libs_utils_basic.hasStrValue)(_ctx.text),
      m: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      n: common_vendor.n(common_vendor.unref(rootClass)),
      o: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      p: common_vendor.s(common_vendor.unref(rootStyle)),
      q: common_vendor.s(_ctx.customStyle),
      r: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      s: common_vendor.o(handleClick, "57")
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e0e31555"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-avatar/rice-avatar.js.map
