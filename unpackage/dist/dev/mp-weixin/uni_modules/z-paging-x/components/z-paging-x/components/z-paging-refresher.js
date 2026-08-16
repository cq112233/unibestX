"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_zPagingX_components_zPagingX_static_index = require("../static/index.js");
const uni_modules_zPagingX_components_zPagingX_enums_index = require("../enums/index.js");
const uni_modules_zPagingX_components_zPagingX_utils_index = require("../utils/index.js");
if (!Math) {
  common_vendor.unref(zPagingLoading)();
}
const zPagingLoading = () => "./z-paging-loading.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(Object.assign({
  name: "z-paging-refresher"
}, { __name: "z-paging-refresher", props: {
  // 下拉刷新状态
  status: {
    type: String,
    default: uni_modules_zPagingX_components_zPagingX_enums_index.Enum.Refresher.Default
  },
  // 自定义下拉刷新默认状态下的文字，默认：继续下拉刷新
  defaultText: {
    type: String,
    default: "继续下拉刷新"
  },
  // 自定义下拉刷新松手立即刷新状态下的文字，默认：松开立即刷新
  pullingText: {
    type: String,
    default: "松开立即刷新"
  },
  // 自定义下拉刷新刷新中状态下的文字，默认：正在刷新...
  refreshingText: {
    type: String,
    default: "正在刷新..."
  },
  // 自定义下拉刷新刷新结束状态下的文字
  completeText: {
    type: String,
    default: "刷新完成"
  },
  // 是否显示最后更新时间，默认为否
  showUpdateTime: {
    type: Boolean,
    default: false
  },
  // 用户区分不同z-paging-x组件的最后更新时间
  updateTimeKey: {
    type: String,
    default: "default"
  },
  // 最后更新时间更新的时间戳
  timeTextTimestamp: {
    type: Number,
    default: 0
  }
}, setup(__props) {
  const props = __props;
  const base64ArrowImg = common_vendor.ref(uni_modules_zPagingX_components_zPagingX_static_index.base64Arrow);
  const base64FlowerImg = common_vendor.ref(uni_modules_zPagingX_components_zPagingX_static_index.base64Flower);
  const base64SuccessImg = common_vendor.ref(uni_modules_zPagingX_components_zPagingX_static_index.base64Success);
  const isDefault = common_vendor.computed(() => {
    return props.status === uni_modules_zPagingX_components_zPagingX_enums_index.Enum.Refresher.Default;
  });
  const isReleaseToRefresh = common_vendor.computed(() => {
    return props.status === uni_modules_zPagingX_components_zPagingX_enums_index.Enum.Refresher.ReleaseToRefresh;
  });
  const isLoading = common_vendor.computed(() => {
    return props.status === uni_modules_zPagingX_components_zPagingX_enums_index.Enum.Refresher.Loading;
  });
  const isComplete = common_vendor.computed(() => {
    return props.status === uni_modules_zPagingX_components_zPagingX_enums_index.Enum.Refresher.Complete;
  });
  const getLeftImageClass = common_vendor.computed(() => {
    if (isDefault.value) {
      return "zpx-r-arrow-down";
    } else if (isReleaseToRefresh.value) {
      return "zpx-r-arrow-top";
    }
    return "";
  });
  const getLeftImageSrc = common_vendor.computed(() => {
    if (isDefault.value) {
      return base64ArrowImg.value;
    } else if (isReleaseToRefresh.value) {
      return base64ArrowImg.value;
    } else if (isLoading.value) {
      return base64FlowerImg.value;
    } else if (isComplete.value) {
      return base64SuccessImg.value;
    }
    return base64ArrowImg.value;
  });
  const statusText = common_vendor.computed(() => {
    if (isDefault.value) {
      return props.defaultText;
    } else if (isReleaseToRefresh.value) {
      return props.pullingText;
    } else if (isLoading.value) {
      return props.refreshingText;
    } else if (isComplete.value) {
      return props.completeText;
    } else {
      return "";
    }
  });
  const refresherTimeText = common_vendor.computed(() => {
    props.timeTextTimestamp;
    return uni_modules_zPagingX_components_zPagingX_utils_index.getRefesrherFormatTimeByKey(props.updateTimeKey);
  });
  const showRefresherTimeText = common_vendor.computed(() => {
    return props.showUpdateTime && refresherTimeText.value.length > 0;
  });
  return (_ctx, _cache) => {
    "raw js";
    const __returned__ = common_vendor.e({
      a: isLoading.value
    }, isLoading.value ? {
      b: common_vendor.p({
        class: "data-v-7ff87102"
      })
    } : {
      c: common_vendor.n(getLeftImageClass.value),
      d: getLeftImageSrc.value
    }, {
      e: common_vendor.t(statusText.value),
      f: showRefresherTimeText.value
    }, showRefresherTimeText.value ? {
      g: common_vendor.t(refresherTimeText.value)
    } : {}, {
      h: showRefresherTimeText.value ? "25rpx" : "10rpx",
      i: common_vendor.sei(common_vendor.gei(_ctx, ""), "view"),
      j: common_vendor.s({
        height: __props.showUpdateTime ? "60px" : "40px"
      }),
      k: common_vendor.s({
        "--status-bar-height": `${_ctx.u_s_b_h}px`,
        "--uni-safe-area-inset-bottom": `${_ctx.u_s_a_i_b}px`
      }),
      l: common_vendor.pvhc(_ctx.$scope.data.virtualHostClass)
    });
    return __returned__;
  };
} }));
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7ff87102"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/z-paging-x/components/z-paging-x/components/z-paging-refresher.js.map
