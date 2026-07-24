import { ref, computed } from 'vue'
  import { base64Arrow, base64Flower, base64Success } from '../static/index.uts'
  import zPagingLoading from '../components/z-paging-loading.uvue'
  import Enum from '../enums/index.uts'
  import { getRefesrherFormatTimeByKey } from '../utils/index.uts'

  
const __sfc__ = defineComponent({
  __name: 'z-paging-refresher',

    name: 'z-paging-refresher'
  ,
  props: {
    // 下拉刷新状态
    status: {
      type: String,
      default: Enum.Refresher.Default,
    },
    // 自定义下拉刷新默认状态下的文字，默认：继续下拉刷新
    defaultText: {
      type: String,
      default: '继续下拉刷新'
    },
    // 自定义下拉刷新松手立即刷新状态下的文字，默认：松开立即刷新
    pullingText: {
      type: String,
      default: '松开立即刷新'
    },
    // 自定义下拉刷新刷新中状态下的文字，默认：正在刷新...
    refreshingText: {
      type: String,
      default: '正在刷新...'
    },
    // 自定义下拉刷新刷新结束状态下的文字
    completeText: {
      type: String,
      default: '刷新完成'
    },
    // 是否显示最后更新时间，默认为否
    showUpdateTime: {
      type: Boolean,
      default: false
    },
    // 用户区分不同z-paging-x组件的最后更新时间
    updateTimeKey: {
      type: String,
      default: 'default'
    },
    // 最后更新时间更新的时间戳
    timeTextTimestamp: {
      type: Number,
      default: 0
    },
  },
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

  

  const props = __props

  const base64ArrowImg = ref(base64Arrow)
  const base64FlowerImg = ref(base64Flower)
  const base64SuccessImg = ref(base64Success)

  const isDefault = computed((): boolean => {
    return props.status === Enum.Refresher.Default;
  })
  const isReleaseToRefresh = computed((): boolean => {
    return props.status === Enum.Refresher.ReleaseToRefresh;
  })
  const isLoading = computed((): boolean => {
    return props.status === Enum.Refresher.Loading;
  })
  const isComplete = computed((): boolean => {
    return props.status === Enum.Refresher.Complete;
  })

  // 获取左侧图片样式class
  const getLeftImageClass = computed((): string => {
    if (isDefault.value) {
      return 'zpx-r-arrow-down';
    } else if (isReleaseToRefresh.value) {
      return 'zpx-r-arrow-top';
    }
    // complete和loading状态不需要额外class
    return '';
  })

  // 获取左侧图片src
  const getLeftImageSrc = computed((): string => {
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
  })

  // 状态文字
  const statusText = computed((): string => {
    if (isDefault.value) {
      return props.defaultText;
    } else if (isReleaseToRefresh.value) {
      return props.pullingText;
    } else if (isLoading.value) {
      return props.refreshingText;
    } else if (isComplete.value) {
      return props.completeText;
    } else {
      return '';
    }
  })
  const refresherTimeText = computed((): string => {
    props.timeTextTimestamp;
    return getRefesrherFormatTimeByKey(props.updateTimeKey);
  })
  const showRefresherTimeText = computed((): boolean => {
    return props.showUpdateTime && refresherTimeText.value.length > 0;
  })

return (): any | null => {

  return _cE("view", _uM({
    class: "zpx-r-container",
    style: _nS(_uM({height: _ctx.showUpdateTime ? '60px' : '40px'}))
  }), [
    isTrue(isLoading.value)
      ? _cV(unref(zPagingLoading), _uM({ key: 0 }))
      : _cE("image", _uM({
          key: 1,
          class: _nC(["zpx-r-image", getLeftImageClass.value]),
          src: getLeftImageSrc.value
        }), null, 10 /* CLASS, PROPS */, ["src"]),
    _cE("view", _uM({
      class: "zpx-r-text-container",
      style: _nS(_uM({marginLeft: showRefresherTimeText.value ? '25rpx' : '10rpx'}))
    }), [
      _cE("text", _uM({ class: "zpx-r-text" }), _tD(statusText.value), 1 /* TEXT */),
      isTrue(showRefresherTimeText.value)
        ? _cE("text", _uM({
            key: 0,
            class: "zpx-r-text zpx-r-time-text"
          }), _tD(refresherTimeText.value), 1 /* TEXT */)
        : _cC("v-if", true)
    ], 4 /* STYLE */)
  ], 4 /* STYLE */)
}
}

})
export default __sfc__
const GenUniModulesZPagingXComponentsZPagingXComponentsZPagingRefresherStyles = [_uM([["zpx-r-container", _pS(_uM([["height", 40], ["flexDirection", "row"], ["alignItems", "center"], ["justifyContent", "center"]]))], ["zpx-r-image", _pS(_uM([["width", "34rpx"], ["height", "34rpx"], ["transitionDuration", ".2s"], ["transitionProperty", "transform"], ["transform", "rotate(0deg)"]]))], ["zpx-r-arrow-top", _pS(_uM([["transform", "rotate(0deg)"]]))], ["zpx-r-arrow-down", _pS(_uM([["transform", "rotate(180deg)"]]))], ["zpx-r-text-container", _pS(_uM([["flexDirection", "column"], ["alignItems", "center"]]))], ["zpx-r-text", _pS(_uM([["color", "#808080"], ["fontSize", "28rpx"]]))], ["zpx-r-time-text", _pS(_uM([["fontSize", "26rpx"], ["marginTop", "10rpx"]]))], ["@TRANSITION", _uM([["zpx-r-image", _uM([["duration", ".2s"], ["property", "transform"]])]])]])]
