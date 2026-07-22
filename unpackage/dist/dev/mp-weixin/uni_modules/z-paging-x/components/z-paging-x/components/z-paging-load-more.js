"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_zPagingX_components_zPagingX_enums_index = require("../enums/index.js");
if (!Math) {
  common_vendor.unref(zPagingLoading)();
}
const zPagingLoading = () => "./z-paging-loading.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "z-paging-load-more"
}, { __name: "z-paging-load-more", props: {
  // 下拉刷新状态
  status: {
    type: String,
    default: uni_modules_zPagingX_components_zPagingX_enums_index.Enum.More.Default
  },
  // 滑动到底部"默认"文字，默认：点击加载更多
  defaultText: {
    type: String,
    default: "点击加载更多"
  },
  // 滑动到底部"加载中"文字，默认：正在加载...
  loadingText: {
    type: String,
    default: "正在加载..."
  },
  // 滑动到底部"没有更多"文字，默认：没有更多了
  noMoreText: {
    type: String,
    default: "没有更多了"
  },
  // 滑动到底部"加载失败"文字，默认：加载失败，点击重新加载
  failText: {
    type: String,
    default: "加载失败，点击重新加载"
  }
}, emits: ["clickMore"], setup(__props, _a) {
  var __emit = _a.emit;
  const props = __props;
  const emit = __emit;
  const isDefault = common_vendor.computed(() => {
    return props.status === uni_modules_zPagingX_components_zPagingX_enums_index.Enum.More.Default;
  });
  const isLoading = common_vendor.computed(() => {
    return props.status === uni_modules_zPagingX_components_zPagingX_enums_index.Enum.More.Loading;
  });
  const isNoMore = common_vendor.computed(() => {
    return props.status === uni_modules_zPagingX_components_zPagingX_enums_index.Enum.More.NoMore;
  });
  const isFail = common_vendor.computed(() => {
    return props.status === uni_modules_zPagingX_components_zPagingX_enums_index.Enum.More.Fail;
  });
  const statusText = common_vendor.computed(() => {
    if (isDefault.value) {
      return props.defaultText;
    } else if (isLoading.value) {
      return props.loadingText;
    } else if (isNoMore.value) {
      return props.noMoreText;
    } else if (isFail.value) {
      return props.failText;
    } else {
      return "";
    }
  });
  const onClickMore = () => {
    emit("clickMore");
  };
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: isNoMore.value
    }, isNoMore.value ? {} : {}, {
      b: isLoading.value
    }, isLoading.value ? {
      c: common_vendor.p({
        class: "data-v-0008b420"
      })
    } : {}, {
      d: common_vendor.t(statusText.value),
      e: isNoMore.value
    }, isNoMore.value ? {} : {}, {
      f: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      g: common_vendor.o(onClickMore, "b7"),
      h: `${_ctx.u_s_b_h}px`,
      i: `${_ctx.u_s_a_i_b}px`,
      j: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0008b420"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/z-paging-x/components/z-paging-x/components/z-paging-load-more.js.map
