import { computed } from 'vue'
  import Enum from '../enums/index.uts'
  import zPagingLoading from '../components/z-paging-loading.uvue'

  
const __sfc__ = defineComponent({
  __name: 'z-paging-load-more',

    name: 'z-paging-load-more'
  ,
  props: {
    // 下拉刷新状态
    status: {
      type: String,
      default: Enum.More.Default,
    },
    // 滑动到底部"默认"文字，默认：点击加载更多
    defaultText: {
      type: String,
      default: '点击加载更多'
    },
    // 滑动到底部"加载中"文字，默认：正在加载...
    loadingText: {
      type: String,
      default: '正在加载...'
    },
    // 滑动到底部"没有更多"文字，默认：没有更多了
    noMoreText: {
      type: String,
      default: '没有更多了'
    },
    // 滑动到底部"加载失败"文字，默认：加载失败，点击重新加载
    failText: {
      type: String,
      default: '加载失败，点击重新加载'
    },
  },
  emits: ["clickMore"],
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

  

  const props = __props

  function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}

  const isDefault = computed((): boolean => {
    return props.status === Enum.More.Default;
  })
  const isLoading = computed((): boolean => {
    return props.status === Enum.More.Loading;
  })
  const isNoMore = computed((): boolean => {
    return props.status === Enum.More.NoMore;
  })
  const isFail = computed((): boolean => {
    return props.status === Enum.More.Fail;
  })
  const statusText = computed((): string => {
    // 底部加载更多状态 default:默认状态 loading:加载中 no-more:没有更多数据 fail:加载失败
    if (isDefault.value) {
      return props.defaultText;
    } else if (isLoading.value) {
      return props.loadingText;
    } else if (isNoMore.value) {
      return props.noMoreText;
    } else if (isFail.value) {
      return props.failText;
    } else {
      return '';
    }
  })

  const onClickMore = () => {
    emit('clickMore');
  }

return (): any | null => {

  return _cE("view", _uM({
    class: "zpx-l-container",
    onClick: onClickMore
  }), [
    isTrue(isNoMore.value)
      ? _cE("view", _uM({
          key: 0,
          class: "zpx-l-line"
        }))
      : _cC("v-if", true),
    isTrue(isLoading.value)
      ? _cV(unref(zPagingLoading), _uM({ key: 1 }))
      : _cC("v-if", true),
    _cE("text", _uM({ class: "zpx-l-loading-text" }), _tD(statusText.value), 1 /* TEXT */),
    isTrue(isNoMore.value)
      ? _cE("view", _uM({
          key: 2,
          class: "zpx-l-line"
        }))
      : _cC("v-if", true)
  ])
}
}

})
export default __sfc__
const GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoadMoreStyles = [_uM([["zpx-l-container", _pS(_uM([["height", "80rpx"], ["flexDirection", "row"], ["alignItems", "center"], ["justifyContent", "center"]]))], ["zpx-l-loading-text", _pS(_uM([["color", "#a4a4a4"], ["marginLeft", "10rpx"], ["fontSize", "28rpx"]]))], ["zpx-l-line", _pS(_uM([["backgroundColor", "#eeeeee"], ["width", "100rpx"], ["height", 1], ["marginTop", "0rpx"], ["marginRight", "10rpx"], ["marginBottom", "0rpx"], ["marginLeft", "10rpx"]]))]])]
