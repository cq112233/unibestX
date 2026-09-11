import _easycom_up_icon from '@/uni_modules/uview-ultra/components/up-icon/up-icon.uvue'
import _easycom_up_tabs from '@/uni_modules/uview-ultra/components/up-tabs/up-tabs.uvue'
import _easycom_up_avatar from '@/uni_modules/uview-ultra/components/up-avatar/up-avatar.uvue'
import _easycom_up_button from '@/uni_modules/uview-ultra/components/up-button/up-button.uvue'
import _easycom_up_action_sheet from '@/uni_modules/uview-ultra/components/up-action-sheet/up-action-sheet.uvue'
import _easycom_up_slider from '@/uni_modules/uview-ultra/components/up-slider/up-slider.uvue'
import _easycom_up_tabbar_item from '@/uni_modules/uview-ultra/components/up-tabbar-item/up-tabbar-item.uvue'
import _easycom_up_tabbar from '@/uni_modules/uview-ultra/components/up-tabbar/up-tabbar.uvue'
import { ref, computed, watch, nextTick, getCurrentInstance } from 'vue'


const __sfc__ = defineComponent({
  __name: 'up-short-video',
name: 'up-short-video',
  props: {
	tabsList: {
		type: Array as PropType<Array<UTSJSONObject>>,
		default: () => [] as Array<UTSJSONObject>
	},
	videoList: {
		type: Array as PropType<Array<UTSJSONObject>>,
		default: () => [] as Array<UTSJSONObject>
	},
	currentTab: {
		type: Number,
		default: 0
	},
	currentVideo: {
		type: Number,
		default: 0
	}
},
  emits: [
	'tabChange',
	'videoChange',
	'like',
	'comment',
	'share',
	'collect',
	'progressChanging',
	'progressChange',
	'videoPlay',
	'videoPause',
	'videoEnded',
	'timeUpdate',
	'loadedMetadata',
	'goNext'
],
  setup(__props, __setupCtx: SetupContext) {
const __expose = __setupCtx.expose
const __ins = getCurrentInstance()!;
const _ctx = __ins.proxy as InstanceType<typeof __sfc__>;
const _cache = __ins.renderCache;

function createSpeedOptions(): Array<UTSJSONObject> {
	const options = [] as Array<UTSJSONObject>
	const values = [0.5, 0.75, 1.0, 1.25, 1.5, 2.0]
	for (let i = 0; i < values.length; i++) {
		const item = {} as UTSJSONObject
		item['name'] = `${values[i]}x`
		item['value'] = values[i]
		options.push(item)
	}
	return options
}

function copyObject(item: UTSJSONObject): UTSJSONObject {
	const copied = {} as UTSJSONObject
	const keys = UTSJSONObject.keys(item)
	for (let i = 0; i < keys.length; i++) {
		const key = keys[i]
		const value = item[key]
		if (value != null && typeof value == 'object' && !Array.isArray(value)) {
			copied[key] = copyObject(value as UTSJSONObject)
		} else {
			copied[key] = value
		}
	}
	return copied
}

function copyVideoList(list: Array<UTSJSONObject>): Array<UTSJSONObject> {
	const copied = [] as Array<UTSJSONObject>
	for (let i = 0; i < list.length; i++) {
		copied.push(copyObject(list[i]))
	}
	return copied
}

function normalizeNumber(value: any | null, defaultValue: number = 0): number {
	if (typeof value == 'number') {
		return value as number
	}
	if (value == null) {
		return defaultValue
	}
	const parsed = parseFloat(value.toString())
	return isNaN(parsed) ? defaultValue : parsed
}

function stringValue(value: any | null): string {
	return value == null ? '' : value.toString()
}

function booleanValue(value: any | null): boolean {
	if (typeof value == 'boolean') {
		return value as boolean
	}
	return value != null && value.toString() == 'true'
}



const props = __props

function emit(event: string, ...do_not_transform_spread: Array<any | null>) {
__ins.emit(event, ...do_not_transform_spread)
}
const instance = getCurrentInstance()

const internalVideoList = ref<Array<UTSJSONObject>>([] as Array<UTSJSONObject>)
const showSpeedSheet = ref<boolean>(false)
const currentSpeedVideoIndex = ref<number>(0)
const speedOptions = ref<Array<UTSJSONObject>>(createSpeedOptions())
const activeVideoIndex = ref<number>(props.currentVideo)
const DEFAULT_ASPECT_RATIO: number = 16.0 / 9.0
const windowWidth = ref<number>(uni.getWindowInfo().windowWidth)
const windowHeight = ref<number>(uni.getWindowInfo().windowHeight)

const videoItems = computed<Array<UTSJSONObject>>(() => {
	return internalVideoList.value
})

let useNativeSlider = ref<boolean>(false)





const progressDragging = ref<boolean>(false)
const playingIndex = ref<number>(-1)

function getVideoItem(index: number): UTSJSONObject | null {
	const list = videoItems.value
	if (index < 0 || index >= list.length) {
		return null
	}
	return list[index]
}

const currentProgress = computed<number>(() => {
	const item = getVideoItem(activeVideoIndex.value)
	if (item == null) {
		return 0
	}
	return normalizeNumber(item['progress'], 0)
})

function syncVideoList(list: Array<UTSJSONObject>): void {
	internalVideoList.value = copyVideoList(list)
}

function getVideoId(index: number): string {
	return `video-${index}`
}

function getPlaybackRate(item: UTSJSONObject): number {
	return normalizeNumber(item['playbackRate'], 1)
}

function getVideoUrl(item: UTSJSONObject): string {
	return stringValue(item['videoUrl'])
}

function getVideoStyle(index: number): UTSJSONObject {
	const style = {} as UTSJSONObject
	const item = getVideoItem(index)
	const containerWidth = windowWidth.value
	const containerHeight = windowHeight.value
	if (containerWidth <= 0 || containerHeight <= 0) {
		style['width'] = '100%'
		style['height'] = '100%'
		return style
	}
	const ratio = normalizeNumber(item == null ? null : item['aspectRatio'], DEFAULT_ASPECT_RATIO)
	if (ratio <= 0) {
		style['width'] = '100%'
		style['height'] = '100%'
		return style
	}
	const fitWidth = containerHeight * ratio
	if (fitWidth <= containerWidth) {
		style['width'] = `${Math.floor(fitWidth)}px`
		style['height'] = `${Math.floor(containerHeight)}px`
	} else {
		style['width'] = `${Math.floor(containerWidth)}px`
		style['height'] = `${Math.floor(containerWidth / ratio)}px`
	}
	return style
}

function getAuthor(item: UTSJSONObject): UTSJSONObject {
	const author = item['author'] as UTSJSONObject | null
	return author == null ? ({} as UTSJSONObject) : author
}

function getAuthorAvatar(item: UTSJSONObject): string {
	return stringValue(getAuthor(item)['avatar'])
}

function getAuthorName(item: UTSJSONObject): string {
	return stringValue(getAuthor(item)['name'])
}

function getAuthorDesc(item: UTSJSONObject): string {
	return stringValue(getAuthor(item)['desc'])
}

function isLiked(item: UTSJSONObject): boolean {
	return booleanValue(item['isLiked'])
}

function isCollected(item: UTSJSONObject): boolean {
	return booleanValue(item['isCollected'])
}

function getCountText(item: UTSJSONObject, key: string): string {
	return stringValue(item[key])
}

function updateVideoItemValue(index: number, key: string, value: any): void {
	const item = getVideoItem(index)
	if (item == null) {
		return
	}
	item[key] = value
}

function getVideoContext(index: number): VideoContext | null {
	const id = getVideoId(index)






	return uni.createVideoContext(id, instance?.proxy)

}

function handleTabChange(event: UTSJSONObject, index: number): void {
	emit('tabChange', index)
}

function playVideo(index: number): void {
	const context = getVideoContext(index)
	if (context != null) {
		context.play()
	}
}

function pauseCurrentVideo(): void {
	const context = getVideoContext(activeVideoIndex.value)
	if (context != null) {
		context.pause()
	}
}

function pauseVideo(index: number): void {
	const context = getVideoContext(index)
	if (context != null) {
		context.pause()
	}
}

function stopVideo(index: number): void {
	const context = getVideoContext(index)
	if (context != null) {
		context.stop()
	}
}

function handleSwiperChange(e: UniSwiperChangeEvent): void {
	const curIndex = e.detail.current
	activeVideoIndex.value = curIndex
	playingIndex.value = -1
	for (let i = 0; i < videoItems.value.length; i++) {
		if (i != curIndex) {
			stopVideo(i)
		}
	}
	nextTick(() => {
		playVideo(curIndex)
	})
	emit('videoChange', curIndex)
}

function handleLike(item: UTSJSONObject, index: number): void {
	emit('like', { item: item, index: index } as UTSJSONObject)
}

function handleComment(item: UTSJSONObject, index: number): void {
	emit('comment', { item: item, index: index } as UTSJSONObject)
}

function handleShare(item: UTSJSONObject, index: number): void {
	emit('share', { item: item, index: index } as UTSJSONObject)
}

function handleCollect(item: UTSJSONObject, index: number): void {
	emit('collect', { item: item, index: index } as UTSJSONObject)
}

function onProgressChanging(value: number): void {
	const progress = normalizeNumber(value, 0)
	progressDragging.value = true
	updateVideoItemValue(activeVideoIndex.value, 'progressValue', progress)
	emit('progressChanging', {
		progress: progress,
		index: activeVideoIndex.value
	} as UTSJSONObject)
}

function onProgressChange(value: number): void {
	const progress = normalizeNumber(value, 0)
	const wasDragging = progressDragging.value
	progressDragging.value = false
	if (wasDragging) {
		const item = getVideoItem(activeVideoIndex.value)
		const duration = item == null ? 0 : normalizeNumber(item['duration'], 0)
		if (duration > 0) {
			const context = getVideoContext(activeVideoIndex.value)
			if (context != null) {
				context.seek(progress / 100 * duration)
			}
		}
	}
	updateVideoItemValue(activeVideoIndex.value, 'progressValue', progress)
	updateVideoItemValue(activeVideoIndex.value, 'progress', progress)
	emit('progressChange', {
		progress: progress,
		index: activeVideoIndex.value
	} as UTSJSONObject)
}

function showSpeedOptions(index: number): void {
	currentSpeedVideoIndex.value = index
	showSpeedSheet.value = true
}

function selectSpeed(action: UTSJSONObject): void {
	const videoContext = getVideoContext(currentSpeedVideoIndex.value)
	const speed = normalizeNumber(action['value'], 1)
	if (videoContext != null) {
		videoContext.playbackRate(speed)
	}
	updateVideoItemValue(currentSpeedVideoIndex.value, 'playbackRate', speed)
	showSpeedSheet.value = false
}

function onVideoPlay(index: number): void {
	if (index != activeVideoIndex.value) {
		pauseVideo(index)
		return
	}
	playingIndex.value = index
	emit('videoPlay', { index: index } as UTSJSONObject)
}

function onVideoPause(index: number): void {
	if (playingIndex.value == index) {
		playingIndex.value = -1
	}
	emit('videoPause', { index: index } as UTSJSONObject)
}

function onVideoEnded(index: number): void {
	if (playingIndex.value == index) {
		playingIndex.value = -1
	}
	emit('videoEnded', { index: index } as UTSJSONObject)
}

function onVideoClick(index: number): void {
	if (index != activeVideoIndex.value) {
		return
	}
	if (playingIndex.value == index) {
		pauseVideo(index)
	} else {
		playVideo(index)
	}
}

function onTimeUpdate(e: UniVideoTimeUpdateEvent): void {
	const currentTime = e.detail.currentTime
	const duration = e.detail.duration
	if (duration > 0) {
		updateVideoItemValue(activeVideoIndex.value, 'duration', duration)
		if (!progressDragging.value) {
			updateVideoItemValue(activeVideoIndex.value, 'progress', currentTime / duration * 100)
		}
	}
	emit('timeUpdate', { index: activeVideoIndex.value, event: e } as UTSJSONObject)
}

function onLoadedMetadata(e: UniEvent): void {
	emit('loadedMetadata', { index: activeVideoIndex.value, event: e } as UTSJSONObject)
}

function goNext(_item: any | null = null): void {
	emit('goNext')
}

watch((): Array<UTSJSONObject> => props.videoList, (newVal: Array<UTSJSONObject>) => {
	syncVideoList(newVal)
}, { immediate: true })

nextTick(() => {
	setTimeout(() => {
		playVideo(activeVideoIndex.value)
	}, 30)
})

__expose({
	playVideo,
	pauseCurrentVideo,
	showSpeedOptions
})

return (): any | null => {

const _component_up_icon = resolveEasyComponent("up-icon",_easycom_up_icon)
const _component_up_tabs = resolveEasyComponent("up-tabs",_easycom_up_tabs)
const _component_video = resolveComponent("video")
const _component_up_avatar = resolveEasyComponent("up-avatar",_easycom_up_avatar)
const _component_up_button = resolveEasyComponent("up-button",_easycom_up_button)
const _component_up_action_sheet = resolveEasyComponent("up-action-sheet",_easycom_up_action_sheet)
const _component_up_slider = resolveEasyComponent("up-slider",_easycom_up_slider)
const _component_up_tabbar_item = resolveEasyComponent("up-tabbar-item",_easycom_up_tabbar_item)
const _component_up_tabbar = resolveEasyComponent("up-tabbar",_easycom_up_tabbar)

  return _cE("view", _uM({ class: "weapp-tw-border up-short-video" }), [
    _cE("view", _uM({ class: "weapp-tw-border up-short-video__header" }), [
      renderSlot(_ctx.$slots, "menu", {}, (): any[] => [
        _cE("view", _uM({ class: "weapp-tw-border up-short-video__header__menu" }), [
          _cV(_component_up_icon, _uM({
            name: "grid",
            size: "24"
          }))
        ])
      ]),
      _cV(_component_up_tabs, _uM({
        list: _ctx.tabsList,
        current: _ctx.currentTab,
        lineColor: "#ddd",
        activeStyle: {
                    color: '#ddd',
                    fontWeight: 400,
                    transform: 'scale(1)'
                },
        inactiveStyle: {
                    color: '#bbb',
                    transform: 'scale(1)'
                },
        onChange: handleTabChange,
        class: "up-short-video__header__tabs"
      }), null, 8 /* PROPS */, ["list", "current", "activeStyle", "inactiveStyle"]),
      renderSlot(_ctx.$slots, "search", {}, (): any[] => [
        _cE("view", _uM({ class: "weapp-tw-border up-short-video__header__search" }), [
          _cV(_component_up_icon, _uM({
            name: "search",
            size: "24"
          }))
        ])
      ])
    ]),
    _cE("swiper", _uM({
      vertical: true,
      autoplay: false,
      onChange: handleSwiperChange,
      current: _ctx.currentVideo,
      class: "up-short-video__content"
    }), [
      _cE(Fragment, null, RenderHelpers.renderList(videoItems.value, (item, index, __index, _cached): any => {
        return _cE("swiper-item", _uM({ key: index }), [
          _cE("view", _uM({ class: "weapp-tw-border up-short-video__content__item" }), [
            _cE("view", _uM({
              class: "weapp-tw-border up-short-video__content__video",
              onClick: () => {onVideoClick(index)}
            }), [
              _cV(_component_video, _uM({
                id: getVideoId(index),
                src: getVideoUrl(item),
                autoplay: index == activeVideoIndex.value,
                controls: false,
                "show-fullscreen-btn": false,
                "show-play-btn": false,
                "show-center-play-btn": false,
                "enable-progress-gesture": true,
                loop: true,
                "playback-rate": getPlaybackRate(item),
                "object-fit": "contain",
                style: _nS(getVideoStyle(index)),
                onPlay: () => {onVideoPlay(index)},
                onPause: () => {onVideoPause(index)},
                onEnded: () => {onVideoEnded(index)},
                onTimeupdate: onTimeUpdate,
                onLoadedmetadata: onLoadedMetadata
              }), null, 8 /* PROPS */, ["id", "src", "autoplay", "playback-rate", "style", "onPlay", "onPause", "onEnded"])
            ], 8 /* PROPS */, ["onClick"]),
            _cE("view", _uM({ class: "weapp-tw-border up-short-video__content__author" }), [
              _cE("view", _uM({ class: "weapp-tw-border up-short-video__content__author__avatar" }), [
                _cV(_component_up_avatar, _uM({
                  src: getAuthorAvatar(item),
                  size: "50px"
                }), null, 8 /* PROPS */, ["src"])
              ]),
              _cE("view", _uM({ class: "weapp-tw-border up-short-video__content__author__info" }), [
                _cE("text", _uM({ class: "weapp-tw-border up-short-video__content__author__name" }), _tD(getAuthorName(item)), 1 /* TEXT */),
                _cE("text", _uM({ class: "weapp-tw-border up-short-video__content__author__desc" }), _tD(getAuthorDesc(item)), 1 /* TEXT */)
              ]),
              _cE("view", _uM({ class: "weapp-tw-border up-short-video__content__author__follow" }), [
                _cV(_component_up_button, _uM({
                  type: "primary",
                  size: "mini"
                }), _uM({
                  default: withSlotCtx((): any[] => ["Follow"]),
                  _: 1 /* STABLE */
                }))
              ])
            ]),
            _cE("view", _uM({ class: "weapp-tw-border up-short-video__content__actions" }), [
              renderSlot(_ctx.$slots, "actions", _uM({
                item: item,
                index: index
              }), (): any[] => [
                _cE("view", _uM({
                  class: "weapp-tw-border up-short-video__content__actions__item",
                  onClick: () => {handleLike(item, index)}
                }), [
                  _cV(_component_up_icon, _uM({
                    color: "#eee",
                    name: isLiked(item) ? 'thumb-up-fill' : 'thumb-up',
                    size: "32px"
                  }), null, 8 /* PROPS */, ["name"]),
                  _cE("text", _uM({ class: "weapp-tw-border up-short-video__content__actions__text" }), _tD(getCountText(item, 'likeCount')), 1 /* TEXT */)
                ], 8 /* PROPS */, ["onClick"]),
                _cE("view", _uM({
                  class: "weapp-tw-border up-short-video__content__actions__item",
                  onClick: () => {handleComment(item, index)}
                }), [
                  _cV(_component_up_icon, _uM({
                    color: "#eee",
                    name: "chat",
                    size: "32px"
                  })),
                  _cE("text", _uM({ class: "weapp-tw-border up-short-video__content__actions__text" }), _tD(getCountText(item, 'commentCount')), 1 /* TEXT */)
                ], 8 /* PROPS */, ["onClick"]),
                _cE("view", _uM({
                  class: "weapp-tw-border up-short-video__content__actions__item",
                  onClick: () => {handleShare(item, index)}
                }), [
                  _cV(_component_up_icon, _uM({
                    color: "#eee",
                    name: "share",
                    size: "32px"
                  })),
                  _cE("text", _uM({ class: "weapp-tw-border up-short-video__content__actions__text" }), _tD(getCountText(item, 'shareCount')), 1 /* TEXT */)
                ], 8 /* PROPS */, ["onClick"]),
                _cE("view", _uM({
                  class: "weapp-tw-border up-short-video__content__actions__item",
                  onClick: () => {handleCollect(item, index)}
                }), [
                  _cV(_component_up_icon, _uM({
                    color: "#eee",
                    name: isCollected(item) ? 'bookmark-fill' : 'bookmark',
                    size: "32px"
                  }), null, 8 /* PROPS */, ["name"]),
                  _cE("text", _uM({ class: "weapp-tw-border up-short-video__content__actions__text" }), _tD(getCountText(item, 'collectCount')), 1 /* TEXT */)
                ], 8 /* PROPS */, ["onClick"])
              ])
            ])
          ])
        ])
      }), 128 /* KEYED_FRAGMENT */)
    ], 40 /* PROPS, NEED_HYDRATION */, ["current"]),
    _cV(_component_up_action_sheet, _uM({
      show: showSpeedSheet.value,
      actions: speedOptions.value,
      title: "Playback speed",
      onClose: () => {showSpeedSheet.value = false},
      onSelect: selectSpeed
    }), null, 8 /* PROPS */, ["show", "actions", "onClose"]),
    _cE("view", _uM({ class: "weapp-tw-border up-short-video__footer" }), [
      _cE("view", _uM({
        class: "weapp-tw-border up-short-video__progress",
        style: _nS(_uM({"z-index":"999"}))
      }), [
        _cV(_component_up_slider, _uM({
          "model-value": currentProgress.value,
          min: 0,
          max: 100,
          step: 1,
          "show-value": false,
          "use-native": unref(useNativeSlider),
          innerStyle: { padding: 0 },
          activeColor: "rgba(255,255,255,0.32)",
          "inactive-color": "rgba(255,255,255,0.3)",
          "block-size": "6px",
          "block-color": "rgba(255,255,255,0.5)",
          height: "1px",
          onChanging: onProgressChanging,
          onChange: onProgressChange
        }), null, 8 /* PROPS */, ["model-value", "use-native"])
      ], 4 /* STYLE */),
      renderSlot(_ctx.$slots, "tabbar", {}, (): any[] => [
        _cV(_component_up_tabbar, _uM({
          fixed: true,
          placeholder: true,
          safeAreaInsetBottom: true,
          borderColor: "rgba(255,255,255,0.25) !important",
          backgroundColor: "rgba(255,255,255,0.05)"
        }), _uM({
          default: withSlotCtx((): any[] => [
            _cV(_component_up_tabbar_item, _uM({
              onClick: () => {goNext()},
              text: "Home",
              icon: "home"
            }), null, 8 /* PROPS */, ["onClick"]),
            _cV(_component_up_tabbar_item, _uM({
              text: "Discover",
              icon: "photo"
            })),
            _cV(_component_up_tabbar_item, _uM({
              text: "Live",
              icon: "play-right"
            })),
            _cV(_component_up_tabbar_item, _uM({
              text: "Mine",
              icon: "account"
            }))
          ]),
          _: 1 /* STABLE */
        }))
      ])
    ])
  ])
}
}

})
export default __sfc__
export type UpShortVideoComponentPublicInstance = InstanceType<typeof __sfc__>;
const GenUniModulesUviewUltraComponentsUpShortVideoUpShortVideoStyles = [_uM([["weapp-tw-border", _pS(_uM([["borderTopWidth", 0], ["borderRightWidth", 0], ["borderBottomWidth", 0], ["borderLeftWidth", 0]]))], ["up-short-video", _pS(_uM([["width", "100%"], ["height", "100%"], ["position", "relative"]]))], ["up-short-video__header", _pS(_uM([["position", "absolute"], ["top", 0], ["left", 0], ["right", 0], ["zIndex", 10], ["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["justifyContent", "space-between"], ["paddingTop", 10], ["paddingRight", 15], ["paddingBottom", 10], ["paddingLeft", 15], ["backgroundColor", "rgba(255,255,255,0.05)"], ["opacity", 1]]))], ["up-short-video__header__menu", _pS(_uM([["width", 40], ["height", 40], ["display", "flex"], ["alignItems", "center"], ["justifyContent", "center"]]))], ["up-short-video__header__search", _pS(_uM([["width", 40], ["height", 40], ["display", "flex"], ["alignItems", "center"], ["justifyContent", "center"]]))], ["up-short-video__header__tabs", _pS(_uM([["flexGrow", 1], ["flexShrink", 1], ["flexBasis", "0%"], ["marginTop", 0], ["marginRight", 10], ["marginBottom", 0], ["marginLeft", 10]]))], ["up-short-video__content", _pS(_uM([["width", "100%"], ["height", "100%"]]))], ["up-short-video__content__item", _pS(_uM([["width", "100%"], ["height", "100%"], ["position", "relative"]]))], ["up-short-video__content__video", _pS(_uM([["width", "100%"], ["height", "100%"], ["position", "relative"], ["display", "flex"], ["alignItems", "center"], ["justifyContent", "center"], ["overflow", "hidden"]]))], ["up-short-video__content__author", _pS(_uM([["position", "absolute"], ["left", 15], ["bottom", 100], ["display", "flex"], ["flexDirection", "row"], ["alignItems", "center"], ["zIndex", 10]]))], ["up-short-video__content__author__info", _pS(_uM([["marginLeft", 10], ["display", "flex"], ["flexDirection", "column"], ["justifyContent", "center"]]))], ["up-short-video__content__author__name", _pS(_uM([["color", "#eeeeee"], ["fontSize", 16], ["fontWeight", "bold"], ["marginBottom", 5]]))], ["up-short-video__content__author__desc", _pS(_uM([["color", "rgba(255,255,255,0.8)"], ["fontSize", 14]]))], ["up-short-video__content__author__follow", _pS(_uM([["marginLeft", 15]]))], ["up-short-video__content__actions", _pS(_uM([["position", "absolute"], ["right", 15], ["bottom", 100], ["display", "flex"], ["flexDirection", "column"], ["alignItems", "center"], ["zIndex", 10]]))], ["up-short-video__content__actions__item", _pS(_uM([["display", "flex"], ["flexDirection", "column"], ["alignItems", "center"], ["marginBottom", 20]]))], ["up-short-video__content__actions__text", _pS(_uM([["color", "#ffffff"], ["fontSize", 12], ["marginTop", 5]]))], ["up-short-video__footer", _pS(_uM([["position", "absolute"], ["bottom", 0], ["left", 0], ["right", 0], ["zIndex", 10]]))]])]
