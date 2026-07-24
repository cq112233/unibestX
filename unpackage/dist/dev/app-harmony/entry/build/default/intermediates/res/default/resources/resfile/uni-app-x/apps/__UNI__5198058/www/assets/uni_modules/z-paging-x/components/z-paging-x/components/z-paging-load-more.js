const { defineComponent, computed, openBlock, createElementBlock, createCommentVNode, createBlock, createElementVNode, toDisplayString } = globalThis.Vue
import { E as Enum } from "../enums/index.js";
import { z as zPagingLoading } from "./z-paging-loading.js";
import { _ as _export_sfc } from "../../../../../plugin-vue-export-helper.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "z-paging-load-more"
  },
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
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
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
    const __returned__ = { props, emit, isDefault, isLoading, isNoMore, isFail, statusText, onClickMore, get zPagingLoading() {
      return zPagingLoading;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "zpx-l-container": { "": { "height": "80rpx", "flexDirection": "row", "alignItems": "center", "justifyContent": "center" } }, "zpx-l-loading-text": { "": { "color": "#a4a4a4", "marginLeft": "10rpx", "fontSize": "28rpx" } }, "zpx-l-line": { "": { "backgroundColor": "#eeeeee", "width": "100rpx", "height": 1, "marginTop": "0rpx", "marginRight": "10rpx", "marginBottom": "0rpx", "marginLeft": "10rpx" } } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: "zpx-l-container",
    onClick: $setup.onClickMore
  }, [
    $setup.isNoMore ? (openBlock(), createElementBlock("view", {
      key: 0,
      class: "zpx-l-line"
    })) : createCommentVNode("v-if", true),
    $setup.isLoading ? (openBlock(), createBlock($setup["zPagingLoading"], { key: 1 })) : createCommentVNode("v-if", true),
    createElementVNode(
      "text",
      { class: "zpx-l-loading-text" },
      toDisplayString($setup.statusText),
      1
      /* TEXT */
    ),
    $setup.isNoMore ? (openBlock(), createElementBlock("view", {
      key: 2,
      class: "zpx-l-line"
    })) : createCommentVNode("v-if", true)
  ]);
}
const zPagingLoadMore = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/z-paging-x/components/z-paging-x/components/z-paging-load-more.uvue"]]);
export {
  zPagingLoadMore as z
};
//# sourceMappingURL=z-paging-load-more.js.map
