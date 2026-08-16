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
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "rice-image",
  styleIsolation: "app-and-page"
}, { __name: "rice-image", props: {
  src: { default: "" },
  mode: { default: "scaleToFill" },
  width: {},
  height: {},
  round: { type: Boolean },
  radius: {},
  showError: { type: Boolean, default: true },
  showLoading: { type: Boolean, default: true },
  errorIcon: { default: "photo-fail" },
  loadingIcon: { default: "photo" },
  iconSize: { default: "30px" },
  iconColor: {},
  bgColor: {},
  preview: { type: Boolean, default: false },
  previewSrcList: {},
  previewIndex: {},
  lazyLoad: { type: Boolean, default: false },
  fadeShow: { type: Boolean, default: false },
  webp: { type: Boolean, default: true },
  showMenuByLongpress: { type: Boolean, default: false },
  draggable: { type: Boolean, default: false },
  customStyle: { default: () => {
    return new common_vendor.UTSJSONObject({});
  } }
}, emits: ["click", "load", "error"], setup(__props, _a) {
  var __emit = _a.emit;
  const ns = uni_modules_riceUi_libs_use_useNamespace_index.useNamespace("image");
  const emit = __emit;
  const props = __props;
  const _iconColor = common_vendor.computed(() => {
    var _a2;
    return (_a2 = props.iconColor) !== null && _a2 !== void 0 ? _a2 : "var(--rice-image-icon-color)";
  });
  const error = common_vendor.ref(false);
  const loading = common_vendor.ref(true);
  common_vendor.watch(() => {
    return props.src;
  }, () => {
    error.value = false;
    loading.value = true;
  });
  const handleLoad = (event) => {
    error.value = false;
    if (loading.value) {
      loading.value = false;
      emit("load", event);
    }
  };
  const handleError = (event) => {
    error.value = true;
    loading.value = false;
    emit("error", event);
  };
  const handleClick = () => {
    var _a2;
    if (loading.value || error.value)
      return null;
    const hasPreviewList = Array.isArray(props.previewSrcList) && props.previewSrcList.length > 0;
    if (props.preview || hasPreviewList) {
      const urls = hasPreviewList ? props.previewSrcList : [props.src];
      let current = (_a2 = props.previewIndex) !== null && _a2 !== void 0 ? _a2 : urls.findIndex((v = null) => {
        return v == props.src;
      });
      current = uni_modules_riceUi_libs_utils_basic.clamp(current, 0, urls.length - 1);
      common_vendor.index.previewImage({
        urls,
        current
      });
      return null;
    }
    emit("click");
  };
  const rootStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (props.height != null)
      css.set("height", uni_modules_riceUi_libs_utils_basic.addUnit(props.height));
    if (props.width != null)
      css.set("width", uni_modules_riceUi_libs_utils_basic.addUnit(props.width));
    if (props.radius != null)
      css.set("border-radius", uni_modules_riceUi_libs_utils_basic.addUnit(props.radius));
    if (props.bgColor != null)
      css.set("background-color", props.bgColor);
    return css;
  });
  const imgStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (props.radius != null)
      css.set("border-radius", uni_modules_riceUi_libs_utils_basic.addUnit(props.radius));
    return css;
  });
  const rootClass = common_vendor.computed(() => {
    return [
      ns.b(""),
      ns.theme(),
      ns.is("round", props.round == true)
    ];
  });
  const imgClass = common_vendor.computed(() => {
    return [
      ns.e("img"),
      ns.is("round", props.round == true)
    ];
  });
  const bgColorStyle = common_vendor.computed(() => {
    const css = /* @__PURE__ */ new Map();
    if (props.bgColor != null)
      css.set("background-color", props.bgColor);
    return css;
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: common_vendor.unref(error)
    }, common_vendor.unref(error) ? common_vendor.e({
      b: _ctx.showError
    }, _ctx.showError ? {
      c: common_vendor.p({
        name: _ctx.errorIcon,
        size: _ctx.iconSize,
        color: common_vendor.unref(_iconColor),
        class: "data-v-41eaed42"
      })
    } : {}, {
      d: common_vendor.s(common_vendor.unref(bgColorStyle))
    }) : {
      e: common_vendor.n(common_vendor.unref(imgClass)),
      f: _ctx.src,
      g: _ctx.mode,
      h: _ctx.lazyLoad,
      i: _ctx.fadeShow,
      j: _ctx.webp,
      k: _ctx.showMenuByLongpress,
      l: _ctx.draggable,
      m: common_vendor.s(common_vendor.unref(imgStyle)),
      n: common_vendor.o(handleLoad, "64"),
      o: common_vendor.o(handleError, "d4")
    }, {
      p: common_vendor.unref(loading)
    }, common_vendor.unref(loading) ? common_vendor.e({
      q: _ctx.showLoading
    }, _ctx.showLoading ? {
      r: common_vendor.p({
        name: _ctx.loadingIcon,
        size: _ctx.iconSize,
        color: common_vendor.unref(_iconColor),
        class: "data-v-41eaed42"
      })
    } : {}, {
      s: common_vendor.s(common_vendor.unref(bgColorStyle))
    }) : {}, {
      t: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      v: common_vendor.n(common_vendor.unref(rootClass)),
      w: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      x: common_vendor.s(common_vendor.unref(rootStyle)),
      y: common_vendor.s(_ctx.customStyle),
      z: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      A: common_vendor.o(handleClick, "57")
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-41eaed42"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/rice-ui/components/rice-image/rice-image.js.map
