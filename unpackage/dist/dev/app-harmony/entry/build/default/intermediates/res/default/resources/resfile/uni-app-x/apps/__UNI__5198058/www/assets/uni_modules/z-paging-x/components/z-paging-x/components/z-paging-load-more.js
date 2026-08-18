import { E as Enum } from "../enums/index.js";
import { z as zPagingLoading } from "./z-paging-loading.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
const { defineEmits: _defineEmits, defineVaporSharedDataComponent: _defineVaporSharedDataComponent } = globalThis.Vue;
const { useSharedDataComponentOptions: _useSharedDataComponentOptions, useSharedDataScope: _useSharedDataScope, withSharedDataComponent: _withSharedDataComponent, setSharedData: _setSharedData, toSharedDataBoolean: _toSharedDataBoolean, createSharedDataIf: _createSharedDataIf, createSharedDataComponent: _createSharedDataComponent, toDisplayString: _toDisplayString, renderSharedDataEffect: _renderSharedDataEffect, setSharedDataEvent: _setSharedDataEvent } = globalThis.Vue;
const __className = "GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoadMore";
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineVaporSharedDataComponent({
  ...{
    name: "z-paging-load-more"
  },
  __dynamicSharedData: true,
  __hash: "8324cc1c",
  __className,
  __filename: "uni_modules/z-paging-x/components/z-paging-x/components/z-paging-load-more.uvue",
  __name: "z-paging-load-more",
  props: {
    // 下拉刷新状态
    status: {
      type: String,
      default: Enum.More.Default
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
  },
  emits: ["clickMore"],
  setup(__props, _a) {
    var __emit = _a.emit;
    const __sharedDataScope = _useSharedDataScope();
    const __sharedData = _withSharedDataComponent(new UniDynamicSharedDataComponent(__sharedDataScope, _useSharedDataComponentOptions({ bundleKey: "GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoadMoreSharedData", sharedDataClassId: 0 })));
    const props = __props;
    const emit = __emit;
    const isDefault = computed(() => {
      return props.status === Enum.More.Default;
    });
    const isLoading = computed(() => {
      return props.status === Enum.More.Loading;
    });
    const isNoMore = computed(() => {
      return props.status === Enum.More.NoMore;
    });
    const isFail = computed(() => {
      return props.status === Enum.More.Fail;
    });
    const statusText = computed(() => {
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
    return () => {
      "raw js";
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 0, _toSharedDataBoolean(isNoMore.value));
      }, () => {
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 1, _toSharedDataBoolean(isLoading.value));
      }, () => {
        const n5 = _createSharedDataComponent(zPagingLoading, "e891cc82");
        _setSharedData(__sharedData, 2, n5.sharedData);
      });
      _renderSharedDataEffect(() => {
        return _setSharedData(__sharedData, 5, _toDisplayString(statusText.value));
      });
      _createSharedDataIf(() => {
        return _setSharedData(__sharedData, 3, _toSharedDataBoolean(isNoMore.value));
      }, () => {
      });
      _setSharedDataEvent(__sharedData, 4, onClickMore);
      return __sharedData;
    };
  }
});
const _style_0 = {};
const zPagingLoadMore = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  zPagingLoadMore as z
};
//# sourceMappingURL=z-paging-load-more.js.map
