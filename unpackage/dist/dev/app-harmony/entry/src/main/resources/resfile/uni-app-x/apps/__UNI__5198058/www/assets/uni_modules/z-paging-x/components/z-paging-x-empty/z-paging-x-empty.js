import { b as base64Error, a as base64Empty } from "../z-paging-x/static/index.js";
import { _ as _export_sfc } from "../../../../plugin-vue-export-helper.js";
const { defineComponent: _defineComponent } = globalThis.Vue;
const { computed } = globalThis.Vue;
const _sfc_main = /* @__PURE__ */ _defineComponent({
  ...{
    name: "z-paging-x-empty"
  },
  __name: "z-paging-x-empty",
  props: {
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
  },
  emits: ["reload", "viewClick"],
  setup(__props, _a) {
    var __expose = _a.expose, __emit = _a.emit;
    __expose();
    const props = __props;
    const emit = __emit;
    const localEmptyImg = computed(() => {
      return props.isLoadFailed ? base64Error : base64Empty;
    });
    const reloadClick = () => {
      emit("reload");
    };
    const emptyClick = () => {
      emit("viewClick");
    };
    const __returned__ = { props, emit, localEmptyImg, reloadClick, emptyClick };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _style_0 = { "zpx-container": { "": { "flexGrow": 1, "flexShrink": 1, "flexBasis": "0%", "alignItems": "center", "justifyContent": "center" } }, "zpx-main": { "": { "flexDirection": "column", "alignItems": "center", "paddingTop": "50rpx", "paddingRight": "0rpx", "paddingBottom": "50rpx", "paddingLeft": "0rpx" } }, "zpx-main-image": { "": { "width": "240rpx", "height": "240rpx" } }, "zpx-main-title": { "": { "fontSize": "28rpx", "color": "#aaaaaa", "textAlign": "center", "marginTop": "10rpx", "paddingTop": "0rpx", "paddingRight": "20rpx", "paddingBottom": "0rpx", "paddingLeft": "20rpx" } }, "zpx-main-error-btn": { "": { "fontSize": "28rpx", "paddingTop": "8rpx", "paddingRight": "24rpx", "paddingBottom": "8rpx", "paddingLeft": "24rpx", "borderTopWidth": 1, "borderRightWidth": 1, "borderBottomWidth": 1, "borderLeftWidth": 1, "borderTopStyle": "solid", "borderRightStyle": "solid", "borderBottomStyle": "solid", "borderLeftStyle": "solid", "borderTopColor": "#dddddd", "borderRightColor": "#dddddd", "borderBottomColor": "#dddddd", "borderLeftColor": "#dddddd", "borderTopLeftRadius": "6rpx", "borderTopRightRadius": "6rpx", "borderBottomRightRadius": "6rpx", "borderBottomLeftRadius": "6rpx", "color": "#aaaaaa", "marginTop": "50rpx" } } };
const { normalizeStyle: _normalizeStyle, openBlock: _openBlock, createElementBlock: _createElementBlock, createCommentVNode: _createCommentVNode, toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, withModifiers: _withModifiers, normalizeClass: _normalizeClass } = globalThis.Vue;
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    "view",
    {
      class: _normalizeClass({ "zpx-container": true }),
      style: _normalizeStyle([$props.emptyStyle]),
      onClick: $setup.emptyClick
    },
    [
      _createElementVNode("view", { class: "zpx-main" }, [
        $props.emptyImg.length > 0 ? (_openBlock(), _createElementBlock("image", {
          key: 0,
          class: "zpx-main-image",
          style: _normalizeStyle([$props.emptyImgStyle]),
          src: $props.emptyImg
        }, null, 12, ["src"])) : (_openBlock(), _createElementBlock("image", {
          key: 1,
          class: "zpx-main-image",
          mode: "aspectFit",
          style: _normalizeStyle([$props.emptyImgStyle]),
          src: $setup.localEmptyImg
        }, null, 12, ["src"])),
        _createElementVNode(
          "text",
          {
            class: "zpx-main-title",
            style: _normalizeStyle([$props.emptyTitleStyle])
          },
          _toDisplayString($props.emptyText),
          5
          /* TEXT, STYLE */
        ),
        $props.showEmptyReload ? (_openBlock(), _createElementBlock(
          "text",
          {
            key: 2,
            class: "zpx-main-error-btn",
            style: _normalizeStyle([$props.emptyReloadStyle]),
            onClick: _withModifiers($setup.reloadClick, ["stop"])
          },
          _toDisplayString($props.emptyReloadText),
          5
          /* TEXT, STYLE */
        )) : _createCommentVNode("v-if", true)
      ])
    ],
    4
    /* STYLE */
  );
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/chenqi/Documents/chenqi-front/unibestX/uni_modules/z-paging-x/components/z-paging-x-empty/z-paging-x-empty.uvue"]]);
export {
  __easycom_0 as _
};
//# sourceMappingURL=z-paging-x-empty.js.map
