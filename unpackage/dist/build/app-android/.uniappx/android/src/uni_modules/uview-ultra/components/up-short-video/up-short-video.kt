@file:Suppress("UNCHECKED_CAST", "USELESS_CAST", "INAPPLICABLE_JVM_NAME", "UNUSED_ANONYMOUS_PARAMETER", "SENSELESS_COMPARISON", "NAME_SHADOWING", "UNNECESSARY_NOT_NULL_ASSERTION")
package uni.UNIB120614
import io.dcloud.uniapp.*
import io.dcloud.uniapp.extapi.*
import io.dcloud.uniapp.framework.*
import io.dcloud.uniapp.runtime.*
import io.dcloud.uniapp.vue.*
import io.dcloud.uniapp.vue.shared.*
import io.dcloud.unicloud.*
import io.dcloud.uts.*
import io.dcloud.uts.Map
import io.dcloud.uts.Set
import io.dcloud.uts.UTSAndroid
import kotlin.properties.Delegates
import io.dcloud.uniapp.extapi.createVideoContext as uni_createVideoContext
import io.dcloud.uniapp.extapi.getWindowInfo as uni_getWindowInfo
open class GenUniModulesUviewUltraComponentsUpShortVideoUpShortVideo : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var tabsList: UTSArray<UTSJSONObject> by `$props`
    open var videoList: UTSArray<UTSJSONObject> by `$props`
    open var currentTab: Number by `$props`
    open var currentVideo: Number by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var playVideo: (index: Number) -> Unit
        get() {
            return unref(this.`$exposed`["playVideo"]) as (index: Number) -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "playVideo", value)
        }
    open var pauseCurrentVideo: () -> Unit
        get() {
            return unref(this.`$exposed`["pauseCurrentVideo"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "pauseCurrentVideo", value)
        }
    open var showSpeedOptions: (index: Number) -> Unit
        get() {
            return unref(this.`$exposed`["showSpeedOptions"]) as (index: Number) -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "showSpeedOptions", value)
        }
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "parentData" to _uO(), "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>())
    }
    open fun `$upAddUnit`(kVal: Any?, unit: String? = ""): String {
        return addUnit(kVal, unit)
    }
    open fun `$upAddStyle`(customStyle: Any, target: String = "object"): Any {
        return addStyle(customStyle, target)
    }
    open fun `$upGetPx`(kVal: Any, unit: Boolean = false): String {
        return getPx(kVal, unit)
    }
    open var bem = ::gen_bem_fn
    open fun gen_bem_fn(name: String, fixed: UTSArray<String>, change: UTSArray<UTSArray<Any>>): String {
        return uni.UNIB120614.bem(name, fixed, change)
    }
    open fun openPage(urlKey: String = "url"): Unit {}
    open fun `$uGetRect`(selector: String, all: Boolean = false): UTSPromise<NodeInfo> {
        return uni.UNIB120614.upGetRect(selector, all, this)
    }
    open fun upGetRect(selector: String, all: Boolean = false): UTSPromise<NodeInfo> {
        return uni.UNIB120614.upGetRect(selector, all, this)
    }
    open var getChildIndex = ::gen_getChildIndex_fn
    open fun gen_getChildIndex_fn(ins: ComponentPublicInstance): Number {
        var index: Number = -1
        if (this.parent != null) {
            (this.parent!!!!.`$data`["children"] as UTSArray<ComponentPublicInstance>).forEach(fun(child: ComponentPublicInstance, idx: Number){
                if (child == ins) {
                    index = idx
                }
            }
            )
        }
        return index
    }
    open var getParent = ::gen_getParent_fn
    open fun gen_getParent_fn(name: String): ComponentPublicInstance? {
        var parent = this.`$parent`
        while(parent != null){
            if (parent.`$options`["name"] != name) {
                parent = parent.`$parent`
            } else {
                break
            }
        }
        return parent
    }
    open var addChild = ::gen_addChild_fn
    open fun gen_addChild_fn(ins: ComponentPublicInstance): Unit {
        var exist = false
        var childs: UTSArray<ComponentPublicInstance> = this.children
        childs.map(fun(child: ComponentPublicInstance){
            if (ins == child) {
                exist = true
            }
        }
        )
        if (exist == false) {
            this.children.push(ins)
        }
    }
    open var addChildRef = ::gen_addChildRef_fn
    open fun gen_addChildRef_fn(str: String): Unit {
        var index = this.childrenRefs.indexOf("str")
        if (index <= -1) {
            this.childrenRefs.push(str)
        }
    }
    open fun getParentData(parentName: String, refMode: Boolean = false): Any {
        var parent = this.getParent(parentName)
        this.parent = parent
        if (parent != null) {
            if (parent?.`$data` != null && parent?.`$data`?.get("children") != null) {
                if (refMode) {
                    parent?.`$callMethod`("addChildRef", this.`$data`["refstr"])
                } else {
                    parent?.`$callMethod`("addChild", this)
                }
            }
            UTSJSONObject.keys(this.parentData).map(fun(key: String){
                if (parent?.`$props` != null && parent?.`$props`?.get(key) != null) {
                    if (this.parentData?.get(key) != null) {
                        this.parentData[key] = parent?.`$props`?.get(key)
                    }
                }
                if (parent?.`$data` != null && parent?.`$data`?.get(key) != null) {
                    if (this.parentData?.get(key) != null) {
                        this.parentData[key] = parent?.`$data`?.get(key)
                    }
                }
            }
            )
        }
        return _uO()
    }
    open var preventEvent = ::gen_preventEvent_fn
    open fun gen_preventEvent_fn(e: UniEvent) {
        e.stopPropagation()
    }
    open var noop = ::gen_noop_fn
    open fun gen_noop_fn(e: UniEvent) {
        this.preventEvent(e)
    }
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenUniModulesUviewUltraComponentsUpShortVideoUpShortVideo, __setupCtx: SetupContext) -> Any? = fun(__props, __setupCtx): Any? {
            val __expose = __setupCtx.expose
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpShortVideoUpShortVideo
            val _cache = __ins.renderCache
            fun gen_createSpeedOptions_fn(): UTSArray<UTSJSONObject> {
                val options = _uA<UTSJSONObject>()
                val values: UTSArray<Number> = _uA(
                    0.5,
                    0.75,
                    1.0,
                    1.25,
                    1.5,
                    2.0
                )
                run {
                    var i: Number = 0
                    while(i < values.length){
                        val item: UTSJSONObject = _uO()
                        item["name"] = "" + values[i] + "x"
                        item["value"] = values[i]
                        options.push(item)
                        i++
                    }
                }
                return options
            }
            val createSpeedOptions = ::gen_createSpeedOptions_fn
            fun gen_copyObject_fn(item: UTSJSONObject): UTSJSONObject {
                val copied: UTSJSONObject = _uO()
                val keys = UTSJSONObject.keys(item)
                run {
                    var i: Number = 0
                    while(i < keys.length){
                        val key = keys[i]
                        val value = item[key]
                        if (value != null && UTSAndroid.`typeof`(value) == "object" && !UTSArray.isArray(value)) {
                            copied[key] = gen_copyObject_fn(value as UTSJSONObject)
                        } else {
                            copied[key] = value
                        }
                        i++
                    }
                }
                return copied
            }
            val copyObject = ::gen_copyObject_fn
            fun gen_copyVideoList_fn(list: UTSArray<UTSJSONObject>): UTSArray<UTSJSONObject> {
                val copied = _uA<UTSJSONObject>()
                run {
                    var i: Number = 0
                    while(i < list.length){
                        copied.push(copyObject(list[i]))
                        i++
                    }
                }
                return copied
            }
            val copyVideoList = ::gen_copyVideoList_fn
            fun normalizeNumber(value: Any?, defaultValue: Number = 0): Number {
                if (UTSAndroid.`typeof`(value) == "number") {
                    return value as Number
                }
                if (value == null) {
                    return defaultValue
                }
                val parsed = parseFloat(value.toString())
                return if (isNaN(parsed)) {
                    defaultValue
                } else {
                    parsed
                }
            }
            fun gen_stringValue_fn(value: Any?): String {
                return if (value == null) {
                    ""
                } else {
                    value.toString()
                }
            }
            val stringValue = ::gen_stringValue_fn
            fun gen_booleanValue_fn(value: Any?): Boolean {
                if (UTSAndroid.`typeof`(value) == "boolean") {
                    return value as Boolean
                }
                return value != null && value.toString() == "true"
            }
            val booleanValue = ::gen_booleanValue_fn
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val instance = getCurrentInstance()
            val internalVideoList = ref<UTSArray<UTSJSONObject>>(_uA<UTSJSONObject>())
            val showSpeedSheet = ref<Boolean>(false)
            val currentSpeedVideoIndex = ref<Number>(0)
            val speedOptions = ref<UTSArray<UTSJSONObject>>(createSpeedOptions())
            val activeVideoIndex = ref<Number>(props.currentVideo)
            val DEFAULT_ASPECT_RATIO: Number = (16.0 as Number) / 9.0
            val windowWidth = ref<Number>(uni_getWindowInfo().windowWidth)
            val windowHeight = ref<Number>(uni_getWindowInfo().windowHeight)
            val videoItems = computed<UTSArray<UTSJSONObject>>(fun(): UTSArray<UTSJSONObject> {
                return internalVideoList.value
            }
            )
            var useNativeSlider = ref<Boolean>(false)
            val progressDragging = ref<Boolean>(false)
            val playingIndex = ref<Number>(-1)
            fun gen_getVideoItem_fn(index: Number): UTSJSONObject? {
                val list = videoItems.value
                if (index < 0 || index >= list.length) {
                    return null
                }
                return list[index]
            }
            val getVideoItem = ::gen_getVideoItem_fn
            val currentProgress = computed<Number>(fun(): Number {
                val item = getVideoItem(activeVideoIndex.value)
                if (item == null) {
                    return 0
                }
                return normalizeNumber(item["progress"], 0)
            }
            )
            fun gen_syncVideoList_fn(list: UTSArray<UTSJSONObject>): Unit {
                internalVideoList.value = copyVideoList(list)
            }
            val syncVideoList = ::gen_syncVideoList_fn
            fun gen_getVideoId_fn(index: Number): String {
                return "video-" + index
            }
            val getVideoId = ::gen_getVideoId_fn
            fun gen_getPlaybackRate_fn(item: UTSJSONObject): Number {
                return normalizeNumber(item["playbackRate"], 1)
            }
            val getPlaybackRate = ::gen_getPlaybackRate_fn
            fun gen_getVideoUrl_fn(item: UTSJSONObject): String {
                return stringValue(item["videoUrl"])
            }
            val getVideoUrl = ::gen_getVideoUrl_fn
            fun gen_getVideoStyle_fn(index: Number): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                val item = getVideoItem(index)
                val containerWidth = windowWidth.value
                val containerHeight = windowHeight.value
                if (containerWidth <= 0 || containerHeight <= 0) {
                    style["width"] = "100%"
                    style["height"] = "100%"
                    return style
                }
                val ratio = normalizeNumber(if (item == null) {
                    null
                } else {
                    item["aspectRatio"]
                }
                , DEFAULT_ASPECT_RATIO)
                if (ratio <= 0) {
                    style["width"] = "100%"
                    style["height"] = "100%"
                    return style
                }
                val fitWidth = containerHeight * ratio
                if (fitWidth <= containerWidth) {
                    style["width"] = "" + Math.floor(fitWidth) + "px"
                    style["height"] = "" + Math.floor(containerHeight) + "px"
                } else {
                    style["width"] = "" + Math.floor(containerWidth) + "px"
                    style["height"] = "" + Math.floor(containerWidth / ratio) + "px"
                }
                return style
            }
            val getVideoStyle = ::gen_getVideoStyle_fn
            fun gen_getAuthor_fn(item: UTSJSONObject): UTSJSONObject {
                val author = item["author"] as UTSJSONObject?
                return if (author == null) {
                    (_uO())
                } else {
                    author
                }
            }
            val getAuthor = ::gen_getAuthor_fn
            fun gen_getAuthorAvatar_fn(item: UTSJSONObject): String {
                return stringValue(getAuthor(item)["avatar"])
            }
            val getAuthorAvatar = ::gen_getAuthorAvatar_fn
            fun gen_getAuthorName_fn(item: UTSJSONObject): String {
                return stringValue(getAuthor(item)["name"])
            }
            val getAuthorName = ::gen_getAuthorName_fn
            fun gen_getAuthorDesc_fn(item: UTSJSONObject): String {
                return stringValue(getAuthor(item)["desc"])
            }
            val getAuthorDesc = ::gen_getAuthorDesc_fn
            fun gen_isLiked_fn(item: UTSJSONObject): Boolean {
                return booleanValue(item["isLiked"])
            }
            val isLiked = ::gen_isLiked_fn
            fun gen_isCollected_fn(item: UTSJSONObject): Boolean {
                return booleanValue(item["isCollected"])
            }
            val isCollected = ::gen_isCollected_fn
            fun gen_getCountText_fn(item: UTSJSONObject, key: String): String {
                return stringValue(item[key])
            }
            val getCountText = ::gen_getCountText_fn
            fun gen_updateVideoItemValue_fn(index: Number, key: String, value: Any): Unit {
                val item = getVideoItem(index)
                if (item == null) {
                    return
                }
                item[key] = value
            }
            val updateVideoItemValue = ::gen_updateVideoItemValue_fn
            fun gen_getVideoContext_fn(index: Number): VideoContext? {
                val id = getVideoId(index)
                return uni_createVideoContext(id, instance?.proxy)
            }
            val getVideoContext = ::gen_getVideoContext_fn
            fun gen_handleTabChange_fn(event: UTSJSONObject, index: Number): Unit {
                emit("tabChange", index)
            }
            val handleTabChange = ::gen_handleTabChange_fn
            fun gen_playVideo_fn(index: Number): Unit {
                val context = getVideoContext(index)
                if (context != null) {
                    context.play()
                }
            }
            val playVideo = ::gen_playVideo_fn
            fun gen_pauseCurrentVideo_fn(): Unit {
                val context = getVideoContext(activeVideoIndex.value)
                if (context != null) {
                    context.pause()
                }
            }
            val pauseCurrentVideo = ::gen_pauseCurrentVideo_fn
            fun gen_pauseVideo_fn(index: Number): Unit {
                val context = getVideoContext(index)
                if (context != null) {
                    context.pause()
                }
            }
            val pauseVideo = ::gen_pauseVideo_fn
            fun gen_stopVideo_fn(index: Number): Unit {
                val context = getVideoContext(index)
                if (context != null) {
                    context.stop()
                }
            }
            val stopVideo = ::gen_stopVideo_fn
            fun gen_handleSwiperChange_fn(e: UniSwiperChangeEvent): Unit {
                val curIndex = e.detail.current
                activeVideoIndex.value = curIndex
                playingIndex.value = -1
                run {
                    var i: Number = 0
                    while(i < videoItems.value.length){
                        if (i != curIndex) {
                            stopVideo(i)
                        }
                        i++
                    }
                }
                nextTick(fun(){
                    playVideo(curIndex)
                }
                )
                emit("videoChange", curIndex)
            }
            val handleSwiperChange = ::gen_handleSwiperChange_fn
            fun gen_handleLike_fn(item: UTSJSONObject, index: Number): Unit {
                emit("like", _uO("item" to item, "index" to index))
            }
            val handleLike = ::gen_handleLike_fn
            fun gen_handleComment_fn(item: UTSJSONObject, index: Number): Unit {
                emit("comment", _uO("item" to item, "index" to index))
            }
            val handleComment = ::gen_handleComment_fn
            fun gen_handleShare_fn(item: UTSJSONObject, index: Number): Unit {
                emit("share", _uO("item" to item, "index" to index))
            }
            val handleShare = ::gen_handleShare_fn
            fun gen_handleCollect_fn(item: UTSJSONObject, index: Number): Unit {
                emit("collect", _uO("item" to item, "index" to index))
            }
            val handleCollect = ::gen_handleCollect_fn
            fun gen_onProgressChanging_fn(value: Number): Unit {
                val progress = normalizeNumber(value, 0)
                progressDragging.value = true
                updateVideoItemValue(activeVideoIndex.value, "progressValue", progress)
                emit("progressChanging", _uO("progress" to progress, "index" to activeVideoIndex.value))
            }
            val onProgressChanging = ::gen_onProgressChanging_fn
            fun gen_onProgressChange_fn(value: Number): Unit {
                val progress = normalizeNumber(value, 0)
                val wasDragging = progressDragging.value
                progressDragging.value = false
                if (wasDragging) {
                    val item = getVideoItem(activeVideoIndex.value)
                    val duration = if (item == null) {
                        0
                    } else {
                        normalizeNumber(item["duration"], 0)
                    }
                    if (duration > 0) {
                        val context = getVideoContext(activeVideoIndex.value)
                        if (context != null) {
                            context.seek(progress / 100 * duration)
                        }
                    }
                }
                updateVideoItemValue(activeVideoIndex.value, "progressValue", progress)
                updateVideoItemValue(activeVideoIndex.value, "progress", progress)
                emit("progressChange", _uO("progress" to progress, "index" to activeVideoIndex.value))
            }
            val onProgressChange = ::gen_onProgressChange_fn
            fun gen_showSpeedOptions_fn(index: Number): Unit {
                currentSpeedVideoIndex.value = index
                showSpeedSheet.value = true
            }
            val showSpeedOptions = ::gen_showSpeedOptions_fn
            fun gen_selectSpeed_fn(action: UTSJSONObject): Unit {
                val videoContext = getVideoContext(currentSpeedVideoIndex.value)
                val speed = normalizeNumber(action["value"], 1)
                if (videoContext != null) {
                    videoContext.playbackRate(speed)
                }
                updateVideoItemValue(currentSpeedVideoIndex.value, "playbackRate", speed)
                showSpeedSheet.value = false
            }
            val selectSpeed = ::gen_selectSpeed_fn
            fun gen_onVideoPlay_fn(index: Number): Unit {
                if (index != activeVideoIndex.value) {
                    pauseVideo(index)
                    return
                }
                playingIndex.value = index
                emit("videoPlay", _uO("index" to index))
            }
            val onVideoPlay = ::gen_onVideoPlay_fn
            fun gen_onVideoPause_fn(index: Number): Unit {
                if (playingIndex.value == index) {
                    playingIndex.value = -1
                }
                emit("videoPause", _uO("index" to index))
            }
            val onVideoPause = ::gen_onVideoPause_fn
            fun gen_onVideoEnded_fn(index: Number): Unit {
                if (playingIndex.value == index) {
                    playingIndex.value = -1
                }
                emit("videoEnded", _uO("index" to index))
            }
            val onVideoEnded = ::gen_onVideoEnded_fn
            fun gen_onVideoClick_fn(index: Number): Unit {
                if (index != activeVideoIndex.value) {
                    return
                }
                if (playingIndex.value == index) {
                    pauseVideo(index)
                } else {
                    playVideo(index)
                }
            }
            val onVideoClick = ::gen_onVideoClick_fn
            fun gen_onTimeUpdate_fn(e: UniVideoTimeUpdateEvent): Unit {
                val currentTime = e.detail.currentTime
                val duration = e.detail.duration
                if (duration > 0) {
                    updateVideoItemValue(activeVideoIndex.value, "duration", duration)
                    if (!progressDragging.value) {
                        updateVideoItemValue(activeVideoIndex.value, "progress", currentTime / duration * 100)
                    }
                }
                emit("timeUpdate", _uO("index" to activeVideoIndex.value, "event" to e))
            }
            val onTimeUpdate = ::gen_onTimeUpdate_fn
            fun gen_onLoadedMetadata_fn(e: UniEvent): Unit {
                emit("loadedMetadata", _uO("index" to activeVideoIndex.value, "event" to e))
            }
            val onLoadedMetadata = ::gen_onLoadedMetadata_fn
            fun goNext(_item: Any? = null): Unit {
                emit("goNext")
            }
            watch(fun(): UTSArray<UTSJSONObject> {
                return props.videoList
            }
            , fun(newVal: UTSArray<UTSJSONObject>){
                syncVideoList(newVal)
            }
            , WatchOptions(immediate = true))
            nextTick(fun(){
                setTimeout(fun(){
                    playVideo(activeVideoIndex.value)
                }
                , 30)
            }
            )
            __expose(_uM("playVideo" to playVideo, "pauseCurrentVideo" to pauseCurrentVideo, "showSpeedOptions" to showSpeedOptions))
            return fun(): Any? {
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                val _component_up_tabs = resolveEasyComponent("up-tabs", GenUniModulesUviewUltraComponentsUpTabsUpTabsClass)
                val _component_video = resolveComponent("video")
                val _component_up_avatar = resolveEasyComponent("up-avatar", GenUniModulesUviewUltraComponentsUpAvatarUpAvatarClass)
                val _component_up_button = resolveEasyComponent("up-button", GenUniModulesUviewUltraComponentsUpButtonUpButtonClass)
                val _component_up_action_sheet = resolveEasyComponent("up-action-sheet", GenUniModulesUviewUltraComponentsUpActionSheetUpActionSheetClass)
                val _component_up_slider = resolveEasyComponent("up-slider", GenUniModulesUviewUltraComponentsUpSliderUpSliderClass)
                val _component_up_tabbar_item = resolveEasyComponent("up-tabbar-item", GenUniModulesUviewUltraComponentsUpTabbarItemUpTabbarItemClass)
                val _component_up_tabbar = resolveEasyComponent("up-tabbar", GenUniModulesUviewUltraComponentsUpTabbarUpTabbarClass)
                return _cE("view", _uM("class" to "weapp-tw-border up-short-video"), _uA(
                    _cE("view", _uM("class" to "weapp-tw-border up-short-video__header"), _uA(
                        renderSlot(_ctx.`$slots`, "menu", _uO(), fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "weapp-tw-border up-short-video__header__menu"), _uA(
                                    _cV(_component_up_icon, _uM("name" to "grid", "size" to "24"))
                                ))
                            )
                        }
                        ),
                        _cV(_component_up_tabs, _uM("list" to _ctx.tabsList, "current" to _ctx.currentTab, "lineColor" to "#ddd", "activeStyle" to _uO("color" to "#ddd", "fontWeight" to 400, "transform" to "scale(1)"), "inactiveStyle" to _uO("color" to "#bbb", "transform" to "scale(1)"), "onChange" to handleTabChange, "class" to "up-short-video__header__tabs"), null, 8, _uA(
                            "list",
                            "current",
                            "activeStyle",
                            "inactiveStyle"
                        )),
                        renderSlot(_ctx.`$slots`, "search", _uO(), fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "weapp-tw-border up-short-video__header__search"), _uA(
                                    _cV(_component_up_icon, _uM("name" to "search", "size" to "24"))
                                ))
                            )
                        }
                        )
                    )),
                    _cE("swiper", _uM("vertical" to true, "autoplay" to false, "onChange" to handleSwiperChange, "current" to _ctx.currentVideo, "class" to "up-short-video__content"), _uA(
                        _cE(Fragment, null, RenderHelpers.renderList(videoItems.value, fun(item, index, __index, _cached): Any {
                            return _cE("swiper-item", _uM("key" to index), _uA(
                                _cE("view", _uM("class" to "weapp-tw-border up-short-video__content__item"), _uA(
                                    _cE("view", _uM("class" to "weapp-tw-border up-short-video__content__video", "onClick" to fun(){
                                        onVideoClick(index)
                                    }
                                    ), _uA(
                                        _cV(_component_video, _uM("id" to getVideoId(index), "src" to getVideoUrl(item), "autoplay" to (index == activeVideoIndex.value), "controls" to false, "show-fullscreen-btn" to false, "show-play-btn" to false, "show-center-play-btn" to false, "enable-progress-gesture" to true, "loop" to true, "playback-rate" to getPlaybackRate(item), "object-fit" to "contain", "style" to _nS(getVideoStyle(index)), "onPlay" to fun(){
                                            onVideoPlay(index)
                                        }
                                        , "onPause" to fun(){
                                            onVideoPause(index)
                                        }
                                        , "onEnded" to fun(){
                                            onVideoEnded(index)
                                        }
                                        , "onTimeupdate" to onTimeUpdate, "onLoadedmetadata" to onLoadedMetadata), null, 8, _uA(
                                            "id",
                                            "src",
                                            "autoplay",
                                            "playback-rate",
                                            "style",
                                            "onPlay",
                                            "onPause",
                                            "onEnded"
                                        ))
                                    ), 8, _uA(
                                        "onClick"
                                    )),
                                    _cE("view", _uM("class" to "weapp-tw-border up-short-video__content__author"), _uA(
                                        _cE("view", _uM("class" to "weapp-tw-border up-short-video__content__author__avatar"), _uA(
                                            _cV(_component_up_avatar, _uM("src" to getAuthorAvatar(item), "size" to "50px"), null, 8, _uA(
                                                "src"
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border up-short-video__content__author__info"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border up-short-video__content__author__name"), _tD(getAuthorName(item)), 1),
                                            _cE("text", _uM("class" to "weapp-tw-border up-short-video__content__author__desc"), _tD(getAuthorDesc(item)), 1)
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border up-short-video__content__author__follow"), _uA(
                                            _cV(_component_up_button, _uM("type" to "primary", "size" to "mini"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    "Follow"
                                                )
                                            }
                                            ), "_" to 1))
                                        ))
                                    )),
                                    _cE("view", _uM("class" to "weapp-tw-border up-short-video__content__actions"), _uA(
                                        renderSlot(_ctx.`$slots`, "actions", _uM("item" to item, "index" to index), fun(): UTSArray<Any> {
                                            return _uA(
                                                _cE("view", _uM("class" to "weapp-tw-border up-short-video__content__actions__item", "onClick" to fun(){
                                                    handleLike(item, index)
                                                }
                                                ), _uA(
                                                    _cV(_component_up_icon, _uM("color" to "#eee", "name" to if (isLiked(item)) {
                                                        "thumb-up-fill"
                                                    } else {
                                                        "thumb-up"
                                                    }
                                                    , "size" to "32px"), null, 8, _uA(
                                                        "name"
                                                    )),
                                                    _cE("text", _uM("class" to "weapp-tw-border up-short-video__content__actions__text"), _tD(getCountText(item, "likeCount")), 1)
                                                ), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cE("view", _uM("class" to "weapp-tw-border up-short-video__content__actions__item", "onClick" to fun(){
                                                    handleComment(item, index)
                                                }
                                                ), _uA(
                                                    _cV(_component_up_icon, _uM("color" to "#eee", "name" to "chat", "size" to "32px")),
                                                    _cE("text", _uM("class" to "weapp-tw-border up-short-video__content__actions__text"), _tD(getCountText(item, "commentCount")), 1)
                                                ), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cE("view", _uM("class" to "weapp-tw-border up-short-video__content__actions__item", "onClick" to fun(){
                                                    handleShare(item, index)
                                                }
                                                ), _uA(
                                                    _cV(_component_up_icon, _uM("color" to "#eee", "name" to "share", "size" to "32px")),
                                                    _cE("text", _uM("class" to "weapp-tw-border up-short-video__content__actions__text"), _tD(getCountText(item, "shareCount")), 1)
                                                ), 8, _uA(
                                                    "onClick"
                                                )),
                                                _cE("view", _uM("class" to "weapp-tw-border up-short-video__content__actions__item", "onClick" to fun(){
                                                    handleCollect(item, index)
                                                }
                                                ), _uA(
                                                    _cV(_component_up_icon, _uM("color" to "#eee", "name" to if (isCollected(item)) {
                                                        "bookmark-fill"
                                                    } else {
                                                        "bookmark"
                                                    }
                                                    , "size" to "32px"), null, 8, _uA(
                                                        "name"
                                                    )),
                                                    _cE("text", _uM("class" to "weapp-tw-border up-short-video__content__actions__text"), _tD(getCountText(item, "collectCount")), 1)
                                                ), 8, _uA(
                                                    "onClick"
                                                ))
                                            )
                                        }
                                        )
                                    ))
                                ))
                            ))
                        }
                        ), 128)
                    ), 40, _uA(
                        "current"
                    )),
                    _cV(_component_up_action_sheet, _uM("show" to showSpeedSheet.value, "actions" to speedOptions.value, "title" to "Playback speed", "onClose" to fun(){
                        showSpeedSheet.value = false
                    }
                    , "onSelect" to selectSpeed), null, 8, _uA(
                        "show",
                        "actions",
                        "onClose"
                    )),
                    _cE("view", _uM("class" to "weapp-tw-border up-short-video__footer"), _uA(
                        _cE("view", _uM("class" to "weapp-tw-border up-short-video__progress", "style" to _nS(_uM("z-index" to "999"))), _uA(
                            _cV(_component_up_slider, _uM("model-value" to currentProgress.value, "min" to 0, "max" to 100, "step" to 1, "show-value" to false, "use-native" to unref(useNativeSlider), "innerStyle" to _uO("padding" to 0), "activeColor" to "rgba(255,255,255,0.32)", "inactive-color" to "rgba(255,255,255,0.3)", "block-size" to "6px", "block-color" to "rgba(255,255,255,0.5)", "height" to "1px", "onChanging" to onProgressChanging, "onChange" to onProgressChange), null, 8, _uA(
                                "model-value",
                                "use-native"
                            ))
                        ), 4),
                        renderSlot(_ctx.`$slots`, "tabbar", _uO(), fun(): UTSArray<Any> {
                            return _uA(
                                _cV(_component_up_tabbar, _uM("fixed" to true, "placeholder" to true, "safeAreaInsetBottom" to true, "borderColor" to "rgba(255,255,255,0.25) !important", "backgroundColor" to "rgba(255,255,255,0.05)"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                    return _uA(
                                        _cV(_component_up_tabbar_item, _uM("onClick" to fun(){
                                            goNext()
                                        }
                                        , "text" to "Home", "icon" to "home"), null, 8, _uA(
                                            "onClick"
                                        )),
                                        _cV(_component_up_tabbar_item, _uM("text" to "Discover", "icon" to "photo")),
                                        _cV(_component_up_tabbar_item, _uM("text" to "Live", "icon" to "play-right")),
                                        _cV(_component_up_tabbar_item, _uM("text" to "Mine", "icon" to "account"))
                                    )
                                }
                                ), "_" to 1))
                            )
                        }
                        )
                    ))
                ))
            }
        }
        var name = "up-short-video"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "up-short-video" to _pS(_uM("width" to "100%", "height" to "100%", "position" to "relative")), "up-short-video__header" to _pS(_uM("position" to "absolute", "top" to 0, "left" to 0, "right" to 0, "zIndex" to 10, "display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "space-between", "paddingTop" to 10, "paddingRight" to 15, "paddingBottom" to 10, "paddingLeft" to 15, "backgroundColor" to "rgba(255,255,255,0.05)", "opacity" to 1)), "up-short-video__header__menu" to _pS(_uM("width" to 40, "height" to 40, "display" to "flex", "alignItems" to "center", "justifyContent" to "center")), "up-short-video__header__search" to _pS(_uM("width" to 40, "height" to 40, "display" to "flex", "alignItems" to "center", "justifyContent" to "center")), "up-short-video__header__tabs" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "marginTop" to 0, "marginRight" to 10, "marginBottom" to 0, "marginLeft" to 10)), "up-short-video__content" to _pS(_uM("width" to "100%", "height" to "100%")), "up-short-video__content__item" to _pS(_uM("width" to "100%", "height" to "100%", "position" to "relative")), "up-short-video__content__video" to _pS(_uM("width" to "100%", "height" to "100%", "position" to "relative", "display" to "flex", "alignItems" to "center", "justifyContent" to "center", "overflow" to "hidden")), "up-short-video__content__author" to _pS(_uM("position" to "absolute", "left" to 15, "bottom" to 100, "display" to "flex", "flexDirection" to "row", "alignItems" to "center", "zIndex" to 10)), "up-short-video__content__author__info" to _pS(_uM("marginLeft" to 10, "display" to "flex", "flexDirection" to "column", "justifyContent" to "center")), "up-short-video__content__author__name" to _pS(_uM("color" to "#eeeeee", "fontSize" to 16, "fontWeight" to "bold", "marginBottom" to 5)), "up-short-video__content__author__desc" to _pS(_uM("color" to "rgba(255,255,255,0.8)", "fontSize" to 14)), "up-short-video__content__author__follow" to _pS(_uM("marginLeft" to 15)), "up-short-video__content__actions" to _pS(_uM("position" to "absolute", "right" to 15, "bottom" to 100, "display" to "flex", "flexDirection" to "column", "alignItems" to "center", "zIndex" to 10)), "up-short-video__content__actions__item" to _pS(_uM("display" to "flex", "flexDirection" to "column", "alignItems" to "center", "marginBottom" to 20)), "up-short-video__content__actions__text" to _pS(_uM("color" to "#ffffff", "fontSize" to 12, "marginTop" to 5)), "up-short-video__footer" to _pS(_uM("position" to "absolute", "bottom" to 0, "left" to 0, "right" to 0, "zIndex" to 10)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("tabChange" to null, "videoChange" to null, "like" to null, "comment" to null, "share" to null, "collect" to null, "progressChanging" to null, "progressChange" to null, "videoPlay" to null, "videoPause" to null, "videoEnded" to null, "timeUpdate" to null, "loadedMetadata" to null, "goNext" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "tabsList" to _uM("type" to "Array", "default" to fun(): UTSArray<UTSJSONObject> {
            return _uA<UTSJSONObject>()
        }
        ), "videoList" to _uM("type" to "Array", "default" to fun(): UTSArray<UTSJSONObject> {
            return _uA<UTSJSONObject>()
        }
        ), "currentTab" to _uM("type" to "Number", "default" to 0), "currentVideo" to _uM("type" to "Number", "default" to 0)))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "tabsList",
            "videoList",
            "currentTab",
            "currentVideo"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
