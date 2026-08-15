import { d as base64Arrow, c as base64Flower, e as base64Success } from "../static/index.js";
import { z as zPagingLoading } from "./z-paging-loading.js";
import { E as Enum } from "../enums/index.js";
import { g as getRefesrherFormatTimeByKey } from "../utils/index.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
const { defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedDataStyle: _setSharedDataStyle, renderSharedDataEffect: _renderSharedDataEffect, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataComponent: _createSharedDataComponent, setSharedDataClass: _setSharedDataClass, setSharedDataAttr: _setSharedDataAttr, toSharedDataString: _toSharedDataString, createSharedDataIf: _createSharedDataIf, toDisplayString: _toDisplayString } = globalThis.Vue;
const __className = "GenUniModulesZPagingXComponentsZPagingXComponentsZPagingRefresher";
const { ref, computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "z-paging-refresher"
  },
  __dynamicSharedData: true,
  __hash: "3d55d144",
  __className,
  __filename: "uni_modules/z-paging-x/components/z-paging-x/components/z-paging-refresher.uvue",
  __name: "z-paging-refresher",
  props: {
    // 下拉刷新状态
    status: {
      type: String,
      default: Enum.Refresher.Default
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
  },
  setup(__props) {
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesZPagingXComponentsZPagingXComponentsZPagingRefresherSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const base64ArrowImg = ref(base64Arrow);
    const base64FlowerImg = ref(base64Flower);
    const base64SuccessImg = ref(base64Success);
    const isDefault = computed(() => {
      return props.status === Enum.Refresher.Default;
    });
    const isReleaseToRefresh = computed(() => {
      return props.status === Enum.Refresher.ReleaseToRefresh;
    });
    const isLoading = computed(() => {
      return props.status === Enum.Refresher.Loading;
    });
    const isComplete = computed(() => {
      return props.status === Enum.Refresher.Complete;
    });
    const getLeftImageClass = computed(() => {
      if (isDefault.value) {
        return "zpx-r-arrow-down";
      } else if (isReleaseToRefresh.value) {
        return "zpx-r-arrow-top";
      }
      return "";
    });
    const getLeftImageSrc = computed(() => {
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
    const statusText = computed(() => {
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
    const refresherTimeText = computed(() => {
      props.timeTextTimestamp;
      return getRefesrherFormatTimeByKey(props.updateTimeKey);
    });
    const showRefresherTimeText = computed(() => {
      return props.showUpdateTime && refresherTimeText.value.length > 0;
    });
    return () => {
      "raw js";
      _renderSharedDataEffect(() => {
        return _setSharedDataStyle(__sharedData, 6, { height: __props.showUpdateTime ? "60px" : "40px" });
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(isLoading.value));
      }, () => {
        const n2 = _createSharedDataComponent(zPagingLoading, "49dd896e");
        _setSharedData(__sharedData, 1, n2.sharedData);
      }, () => {
        _renderSharedDataEffect(() => {
          _setSharedDataClass(__sharedData, 2, ["zpx-r-image", getLeftImageClass.value]);
          _setSharedDataAttr(__sharedData, 3, _toSharedDataString(getLeftImageSrc.value));
        });
      }, 261);
      _renderSharedDataEffect(() => {
        _setSharedDataStyle(__sharedData, 7, { marginLeft: showRefresherTimeText.value ? "25rpx" : "10rpx" });
        _setSharedData(__sharedData, 8, _toDisplayString(statusText.value));
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 4, _toSharedDataBoolean(showRefresherTimeText.value));
      }, () => {
        _renderSharedDataEffect(() => {
          return _setSharedData(__sharedData, 5, _toDisplayString(refresherTimeText.value));
        });
      });
      return __sharedData;
    };
  }
});
const _style_0 = {};
const zPagingRefresher = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  zPagingRefresher as z
};
//# sourceMappingURL=z-paging-refresher.js.map
