import { d as base64Arrow, c as base64Flower, e as base64Success } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/z-paging-x/components/z-paging-x/static/index&";
import { z as zPagingLoading } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/z-paging-x/components/z-paging-x/components/z-paging-loading&";
import { E as Enum } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/z-paging-x/components/z-paging-x/enums/index&";
import { g as getRefesrherFormatTimeByKey } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/uni_modules/z-paging-x/components/z-paging-x/utils/index&";
import { _ as _export_sfc } from "@normalized:N&&&entry/src/main/resources/resfile/uni-app-x/apps/__UNI__5198058/www/assets/plugin-vue-export-helper&";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { ref, computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "z-paging-refresher"
  },
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
  setup(__props, _a) {
    var __expose = _a.expose;
    __expose();
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
    const __returned__ = { props, base64ArrowImg, base64FlowerImg, base64SuccessImg, isDefault, isReleaseToRefresh, isLoading, isComplete, getLeftImageClass, getLeftImageSrc, statusText, refresherTimeText, showRefresherTimeText, get zPagingLoading() {
      return zPagingLoading;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "zpx-r-container": { "": { "height": 40, "flexDirection": "row", "alignItems": "center", "justifyContent": "center" } }, "zpx-r-image": { "": { "width": "34rpx", "height": "34rpx", "transitionDuration": ".2s", "transitionProperty": "transform", "transform": "rotate(0deg)" } }, "zpx-r-arrow-top": { "": { "transform": "rotate(0deg)" } }, "zpx-r-arrow-down": { "": { "transform": "rotate(180deg)" } }, "zpx-r-text-container": { "": { "flexDirection": "column", "alignItems": "center" } }, "zpx-r-text": { "": { "color": "#808080", "fontSize": "28rpx" } }, "zpx-r-time-text": { "": { "fontSize": "26rpx", "marginTop": "10rpx" } }, "@TRANSITION": { "zpx-r-image": { "duration": ".2s", "property": "transform" } } };
const { openBlock: _openBlock, createBlock: _createBlock, createCommentVNode: _createCommentVNode, normalizeClass: _normalizeClass, createElementBlock: _createElementBlock, toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, normalizeStyle: _normalizeStyle } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: "zpx-r-container",
      style: _normalizeStyle({ height: $props.showUpdateTime ? "60px" : "40px" })
    },
    [
      $setup.isLoading ? (_openBlock(), _createBlock($setup["zPagingLoading"], { key: 0 })) : (_openBlock(), _createElementBlock("image", {
        key: 1,
        class: _normalizeClass(["zpx-r-image", $setup.getLeftImageClass]),
        src: $setup.getLeftImageSrc
      }, null, 10, ["src"])),
      _createElementVNode(
        "view",
        {
          class: "zpx-r-text-container",
          style: _normalizeStyle({ marginLeft: $setup.showRefresherTimeText ? "25rpx" : "10rpx" })
        },
        [
          _createElementVNode(
            "text",
            { class: "zpx-r-text" },
            _toDisplayString($setup.statusText),
            1
            /* TEXT */
          ),
          $setup.showRefresherTimeText ? (_openBlock(), _createElementBlock(
            "text",
            {
              key: 0,
              class: "zpx-r-text zpx-r-time-text"
            },
            _toDisplayString($setup.refresherTimeText),
            1
            /* TEXT */
          )) : _createCommentVNode("v-if", true)
        ],
        4
        /* STYLE */
      )
    ],
    4
    /* STYLE */
  );
}
const zPagingRefresher = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/z-paging-x/components/z-paging-x/components/z-paging-refresher.uvue"]]);
export {
  zPagingRefresher as z
};
//# sourceMappingURL=z-paging-refresher.js.map
