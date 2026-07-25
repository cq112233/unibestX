import { computed } from 'vue'
  import { base64Empty, base64Error } from '../z-paging-x/static/index.uts'

  
const __sfc__ = defineComponent({
  __name: 'z-paging-x-empty',

    name: 'z-paging-x-empty'
  ,
  props: {
    // 空数据描述文字
    emptyText: {
      type: String,
      default: '没有数据哦~'
    },
    // 空数据图片
    emptyImg: {
      type: String,
      default: ''
    },
    // 是否显示空数据图重新加载按钮
    showEmptyReload: {
      type: Boolean,
      default: false
    },
    // 空数据点击重新加载文字
    emptyReloadText: {
      type: String,
      default: '重新加载'
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
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

  

  const props = __props

  function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}

  const localEmptyImg = computed((): string => {
    return props.isLoadFailed ? base64Error : base64Empty;
  })

  const reloadClick = () => {
    emit('reload');
  }
  const emptyClick = () => {
    emit('viewClick');
  }

return (): any | null => {

  return _cE("view", _uM({
    class: _nC(_uM({'zpx-container':true})),
    style: _nS([_ctx.emptyStyle]),
    onClick: emptyClick
  }), [
    _cE("view", _uM({ class: "zpx-main" }), [
      _ctx.emptyImg.length > 0
        ? _cE("image", _uM({
            key: 0,
            class: "zpx-main-image",
            style: _nS([_ctx.emptyImgStyle]),
            src: _ctx.emptyImg
          }), null, 12 /* STYLE, PROPS */, ["src"])
        : _cE("image", _uM({
            key: 1,
            class: "zpx-main-image",
            mode: "aspectFit",
            style: _nS([_ctx.emptyImgStyle]),
            src: localEmptyImg.value
          }), null, 12 /* STYLE, PROPS */, ["src"]),
      _cE("text", _uM({
        class: "zpx-main-title",
        style: _nS([_ctx.emptyTitleStyle])
      }), _tD(_ctx.emptyText), 5 /* TEXT, STYLE */),
      isTrue(_ctx.showEmptyReload)
        ? _cE("text", _uM({
            key: 2,
            class: "zpx-main-error-btn",
            style: _nS([_ctx.emptyReloadStyle]),
            onClick: withModifiers(reloadClick, ["stop"])
          }), _tD(_ctx.emptyReloadText), 5 /* TEXT, STYLE */)
        : _cC("v-if", true)
    ])
  ], 6 /* CLASS, STYLE */)
}
}

})
export default __sfc__
export type ZPagingXEmptyComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesZPagingXComponentsZPagingXEmptyZPagingXEmptyStyles = [_uM([["zpx-container", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"], ["alignItems", "center"], ["justifyContent", "center"]]))], ["zpx-main", _pS(_uM([["flexDirection", "column"], ["alignItems", "center"], ["paddingTop", "50rpx"], ["paddingRight", "0rpx"], ["paddingBottom", "50rpx"], ["paddingLeft", "0rpx"]]))], ["zpx-main-image", _pS(_uM([["width", "240rpx"], ["height", "240rpx"]]))], ["zpx-main-title", _pS(_uM([["fontSize", "28rpx"], ["color", "#aaaaaa"], ["textAlign", "center"], ["marginTop", "10rpx"], ["paddingTop", "0rpx"], ["paddingRight", "20rpx"], ["paddingBottom", "0rpx"], ["paddingLeft", "20rpx"]]))], ["zpx-main-error-btn", _pS(_uM([["fontSize", "28rpx"], ["paddingTop", "8rpx"], ["paddingRight", "24rpx"], ["paddingBottom", "8rpx"], ["paddingLeft", "24rpx"], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"], ["borderTopColor", "#dddddd"], ["borderRightColor", "#dddddd"], ["borderBottomColor", "#dddddd"], ["borderLeftColor", "#dddddd"], ["borderTopLeftRadius", "6rpx"], ["borderTopRightRadius", "6rpx"], ["borderBottomRightRadius", "6rpx"], ["borderBottomLeftRadius", "6rpx"], ["color", "#aaaaaa"], ["marginTop", "50rpx"]]))]])]
