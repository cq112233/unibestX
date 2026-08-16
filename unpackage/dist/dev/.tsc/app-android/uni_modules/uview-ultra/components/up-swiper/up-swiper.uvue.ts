import _easycom_up_loading_icon from '@/uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.uvue'
import _easycom_up_swiper_indicator from '@/uni_modules/uview-ultra/components/up-swiper-indicator/up-swiper-indicator.uvue'
import { computed, ref, watch } from 'vue'
import defProps from './swiper.uts'
import { addUnit, addStyle, error } from '../../libs/function/index.uts'
import { object as testObject, image as testImage, video as testVideo } from '../../libs/function/test.uts'


const __sfc__ = defineComponent({
  __name: 'up-swiper',
name: 'up-swiper',
  props: {
  list: {
    type: Array as PropType<Array<any>>,
    default: () => [] as any[]
  },
  indicator: {
    type: Boolean,
    default: false
  },
  indicatorActiveColor: {
    type: String,
    default: '#FFFFFF'
  },
  indicatorInactiveColor: {
    type: String,
    default: 'rgba(255, 255, 255, 0.35)'
  },
  indicatorStyle: {
    type: [String, Object],
    default: ''
  },
  indicatorMode: {
    type: String,
    default: 'line'
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  current: {
    type: [String, Number],
    default: 0
  },
  currentItemId: {
    type: String,
    default: ''
  },
  interval: {
    type: [String, Number],
    default: 3000
  },
  duration: {
    type: [String, Number],
    default: 300
  },
  circular: {
    type: Boolean,
    default: false
  },
  vertical: {
    type: Boolean,
    default: false
  },
  previousMargin: {
    type: [String, Number],
    default: 0
  },
  nextMargin: {
    type: [String, Number],
    default: 0
  },
  acceleration: {
    type: Boolean,
    default: false
  },
  displayMultipleItems: {
    type: Number,
    default: 1
  },
  easingFunction: {
    type: String,
    default: 'default'
  },
  keyName: {
    type: String,
    default: 'url'
  },
  imgMode: {
    type: String,
    default: 'aspectFill'
  },
  height: {
    type: [String, Number],
    default: 130
  },
  bgColor: {
    type: String,
    default: '#f3f4f6'
  },
  radius: {
    type: [String, Number],
    default: 4
  },
  loading: {
    type: Boolean,
    default: false
  },
  showTitle: {
    type: Boolean,
    default: false
  }
},
  emits: ['click', 'change', 'update:current'],
  setup(__props) {
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;



const props = __props

function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}

const currentIndex = ref<number>(parseInt(props.current.toString()))

const swiperContainerStyle = computed((): UTSJSONObject => {
  return {
    backgroundColor: props.bgColor,
    height: addUnit(props.height),
    borderRadius: addUnit(props.radius)
  } as UTSJSONObject
})

const swiperWrapperStyle = computed((): UTSJSONObject => {
  return {
    width: '100%',
    height: addUnit(props.height)
  } as UTSJSONObject
})

const swiperImageStyle = computed((): UTSJSONObject => {
  return {
    width: '100%',
    height: addUnit(props.height),
    borderRadius: addUnit(props.radius)
  } as UTSJSONObject
})

const swiperVideoStyle = computed((): UTSJSONObject => {
  return {
    height: addUnit(props.height)
  } as UTSJSONObject
})

const customIndicatorStyle = computed((): UTSJSONObject => {
  return addStyle(props.indicatorStyle) as UTSJSONObject
})

function getSource(item: any | null): string {
  let src = ''
  if (item == null) return ''
  if (typeof item === 'string') {
    src = item as string
  } else if (typeof item === 'object' && props.keyName != '') {
    const obj = item as UTSJSONObject
    src = obj[props.keyName]?.toString() ?? ''
  } else {
    error('请按格式传递列表参数')
    return ''
  }
  return src
}

function getItemTitle(item: any | null): string {
  if (item == null) return ''
  if (typeof item === 'string') return item as string
  if (typeof item === 'object') {
    const obj = item as UTSJSONObject
    return obj['title']?.toString() ?? ''
  }
  return ''
}

function getPoster(item: any | null): string {
  if (item == null) return ''
  if (typeof item === 'object') {
    const obj = item as UTSJSONObject
    return obj['poster']?.toString() ?? ''
  }
  return ''
}

function getVideoTitle(item: any | null): string {
  if (!props.showTitle || item == null) return ''
  if (typeof item === 'object') {
    return getItemTitle(item)
  }
  return ''
}

function isImageTitleVisible(item: any | null): boolean {
  if (!props.showTitle || item == null) return false
  const title = getItemTitle(item)
  if (title == '') return false
  return testImage(getSource(item))
}

function getItemType(item: any | null): string {
  if (item == null) return ''
  if (typeof item === 'string') return testVideo(getSource(item)) ? 'video' : 'image'
  if (typeof item === 'object' && props.keyName != '') {
    const obj = item as UTSJSONObject
    if (obj['type'] == null) return testVideo(getSource(item)) ? 'video' : 'image'
    if (obj['type'] == 'image') return 'image'
    if (obj['type'] == 'video') return 'video'
    return 'image'
  }
  return 'image'
}

function pauseVideo(index: number) {
  if (index >= 0 && index < props.list.length) {
    const lastItem = getSource(props.list[index])
    if (testVideo(lastItem)) {
      // @ts-ignore
      const video = uni.createVideoContext(`video-${index}`)
      video?.pause()
    }
  }
}

function change(e: UniSwiperChangeEvent) {
  const current = e.detail.current
  pauseVideo(currentIndex.value)
  currentIndex.value = current
  emit('update:current', currentIndex.value)
  emit('change', e.detail)
}

function itemStyle(index: number): any {
  const style = {__$originalPosition: new UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-swiper/up-swiper.uvue", 310, 9),}
  if (props.nextMargin.toString() != '' && props.previousMargin.toString() != '') {
    style['borderRadius'] = addUnit(props.radius)
    if (index != currentIndex.value) {
      style['transform'] = 'scale(0.92)'
    }
  }
  return style
}

function clickHandler(index: number) {
  emit('click', index)
}

watch((): any => props.current, (val: any, preVal: any) => {
  if (val == preVal) return
  currentIndex.value = parseInt(val.toString())
})

return (): any | null => {

const _component_up_loading_icon = resolveEasyComponent("up-loading-icon",_easycom_up_loading_icon)
const _component_video = resolveComponent("video")
const _component_up_swiper_indicator = resolveEasyComponent("up-swiper-indicator",_easycom_up_swiper_indicator)

  return _cE("view", _uM({
    class: "up-swiper",
    style: _nS(swiperContainerStyle.value)
  }), [
    isTrue(_ctx.loading)
      ? _cE("view", _uM({
          key: 0,
          class: "up-swiper__loading"
        }), [
          _cV(_component_up_loading_icon, _uM({ mode: "circle" }))
        ])
      : _cE("swiper", _uM({
          key: 1,
          class: "up-swiper__wrapper",
          style: _nS(swiperWrapperStyle.value),
          onChange: change,
          circular: _ctx.circular,
          interval: _ctx.interval,
          duration: _ctx.duration,
          autoplay: _ctx.autoplay,
          current: _ctx.current,
          vertical: _ctx.vertical
        }), [
          _cE(Fragment, null, RenderHelpers.renderList(_ctx.list, (item, index, __index, _cached): any => {
            return _cE("swiper-item", _uM({
              class: "up-swiper__wrapper__item",
              key: index
            }), [
              renderSlot(_ctx.$slots, "default", _uM({
                item: item,
                index: index
              }), (): any[] => [
                _cE("view", _uM({
                  class: "up-swiper__wrapper__item__wrapper",
                  style: _nS(itemStyle(index))
                }), [
                  getItemType(item) == 'image'
                    ? _cE("image", _uM({
                        key: 0,
                        class: "up-swiper__wrapper__item__wrapper__image",
                        src: getSource(item),
                        mode: _ctx.imgMode,
                        onClick: () => {clickHandler(index)},
                        style: _nS(swiperImageStyle.value)
                      }), null, 12 /* STYLE, PROPS */, ["src", "mode", "onClick"])
                    : _cC("v-if", true),
                  getItemType(item) == 'video'
                    ? _cV(_component_video, _uM({
                        key: 1,
                        class: "up-swiper__wrapper__item__wrapper__video",
                        id: `video-${index}`,
                        "enable-progress-gesture": false,
                        src: getSource(item),
                        poster: getPoster(item),
                        title: getVideoTitle(item),
                        style: _nS(swiperVideoStyle.value),
                        controls: "",
                        onClick: () => {clickHandler(index)}
                      }), null, 8 /* PROPS */, ["id", "src", "poster", "title", "style", "onClick"])
                    : _cC("v-if", true),
                  isTrue(isImageTitleVisible(item))
                    ? _cE("view", _uM({
                        key: 2,
                        class: "up-swiper__wrapper__item__wrapper__title"
                      }), [
                        _cE("text", _uM({ class: "up-line-1 up-swiper__wrapper__item__wrapper__title-text" }), _tD(getItemTitle(item)), 1 /* TEXT */)
                      ])
                    : _cC("v-if", true)
                ], 4 /* STYLE */)
              ])
            ])
          }), 128 /* KEYED_FRAGMENT */)
        ], 44 /* STYLE, PROPS, NEED_HYDRATION */, ["circular", "interval", "duration", "autoplay", "current", "vertical"]),
    _cE("view", _uM({
      class: "up-swiper__indicator",
      style: _nS(customIndicatorStyle.value)
    }), [
      renderSlot(_ctx.$slots, "indicator", {}, (): any[] => [
        isTrue(!_ctx.loading && _ctx.indicator && !_ctx.showTitle)
          ? _cV(_component_up_swiper_indicator, _uM({
              key: 0,
              indicatorActiveColor: _ctx.indicatorActiveColor,
              indicatorInactiveColor: _ctx.indicatorInactiveColor,
              length: _ctx.list.length,
              current: currentIndex.value,
              indicatorMode: _ctx.indicatorMode
            }), null, 8 /* PROPS */, ["indicatorActiveColor", "indicatorInactiveColor", "length", "current", "indicatorMode"])
          : _cC("v-if", true)
      ])
    ], 4 /* STYLE */)
  ], 4 /* STYLE */)
}
}

})
export default __sfc__
export type UpSwiperComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpSwiperUpSwiperStyles = [_uM([["u-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["u-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-empty__wrap", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view-wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__scroll-view", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-tabs__wrapper__nav__line", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["flexShrink", 0], ["flexGrow", 0], ["flexBasis", "auto"], ["alignItems", "stretch"], ["alignContent", "flex-start"]]))], ["up-swiper", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["position", "relative"], ["overflow", "hidden"], ["width", "100%"]]))], ["up-swiper__loading", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["justifyContent", "center"], ["alignItems", "center"], ["width", "100%"], ["height", "100%"]]))], ["up-swiper__wrapper", _pS(_uM([["width", "100%"], ["minWidth", 0]]))], ["up-swiper__wrapper__item", _pS(_uM([["width", "100%"]]))], ["up-swiper__wrapper__item__wrapper", _pS(_uM([["display", "flex"], ["flexDirection", "row"], ["position", "relative"], ["overflow", "hidden"], ["transitionProperty", "transform"], ["transitionDuration", "0.3s"], ["width", "100%"]]))], ["up-swiper__wrapper__item__wrapper__image", _pS(_uM([["width", "100%"]]))], ["up-swiper__wrapper__item__wrapper__video", _pS(_uM([["width", "100%"]]))], ["up-swiper__wrapper__item__wrapper__title", _pS(_uM([["position", "absolute"], ["backgroundColor", "rgba(0,0,0,0.3)"], ["bottom", 0], ["left", 0], ["right", 0], ["paddingTop", "12rpx"], ["paddingRight", "24rpx"], ["paddingBottom", "12rpx"], ["paddingLeft", "24rpx"]]))], ["up-swiper__wrapper__item__wrapper__title-text", _pS(_uM([["fontSize", "28rpx"], ["color", "#FFFFFF"]]))], ["up-swiper__indicator", _pS(_uM([["position", "absolute"], ["bottom", 10], ["left", 0], ["right", 0], ["display", "flex"], ["flexDirection", "row"], ["justifyContent", "center"], ["zIndex", 10]]))], ["@TRANSITION", _uM([["up-swiper__wrapper__item__wrapper", _uM([["property", "transform"], ["duration", "0.3s"]])]])]])]
