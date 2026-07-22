"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_zPagingX_components_zPagingX_static_index = require("../z-paging-x/static/index.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "z-paging-x-empty"
}, { __name: "z-paging-x-empty", props: {
  // 空数据描述文字
  emptyText: {
    type: String,
    default: "没有数据哦~"
  },
  // 空数据图片
  emptyImg: {
    type: String,
    default: ""
  },
  // 是否显示空数据图重新加载按钮
  showEmptyReload: {
    type: Boolean,
    default: false
  },
  // 空数据点击重新加载文字
  emptyReloadText: {
    type: String,
    default: "重新加载"
  },
  // 是否是加载失败
  isLoadFailed: {
    type: Boolean,
    default: false
  },
  // 空数据图样式
  emptyStyle: {
    type: Object
  },
  // 空数据图img样式
  emptyImgStyle: {
    type: Object
  },
  // 空数据图描述文字样式
  emptyTitleStyle: {
    type: Object
  },
  // 空数据图重新加载按钮样式
  emptyReloadStyle: {
    type: Object
  }
}, emits: ["reload", "viewClick"], setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const localEmptyImg = common_vendor.computed(() => {
    return props.isLoadFailed ? uni_modules_zPagingX_components_zPagingX_static_index.base64Error : uni_modules_zPagingX_components_zPagingX_static_index.base64Empty;
  });
  const reloadClick = () => {
    emit("reload");
  };
  const emptyClick = () => {
    emit("viewClick");
  };
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: __props.emptyImg.length > 0
    }, __props.emptyImg.length > 0 ? {
      b: common_vendor.s(__props.emptyImgStyle),
      c: __props.emptyImg
    } : {
      d: common_vendor.s(__props.emptyImgStyle),
      e: localEmptyImg.value
    }, {
      f: common_vendor.t(__props.emptyText),
      g: common_vendor.s(__props.emptyTitleStyle),
      h: __props.showEmptyReload
    }, __props.showEmptyReload ? {
      i: common_vendor.t(__props.emptyReloadText),
      j: common_vendor.s(__props.emptyReloadStyle),
      k: common_vendor.o(reloadClick, "84")
    } : {}, {
      l: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      m: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass),
      n: common_vendor.s(__props.emptyStyle),
      o: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      p: common_vendor.o(emptyClick, "5d")
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9ad805ee"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/z-paging-x/components/z-paging-x-empty/z-paging-x-empty.js.map
