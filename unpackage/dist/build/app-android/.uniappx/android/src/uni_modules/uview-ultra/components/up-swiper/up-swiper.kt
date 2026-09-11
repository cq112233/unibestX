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
open class GenUniModulesUviewUltraComponentsUpSwiperUpSwiper : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var list: UTSArray<Any> by `$props`
    open var indicator: Boolean by `$props`
    open var indicatorActiveColor: String by `$props`
    open var indicatorInactiveColor: String by `$props`
    open var indicatorStyle: Any by `$props`
    open var indicatorMode: String by `$props`
    open var autoplay: Boolean by `$props`
    open var current: Any by `$props`
    open var currentItemId: String by `$props`
    open var interval: Any by `$props`
    open var duration: Any by `$props`
    open var circular: Boolean by `$props`
    open var vertical: Boolean by `$props`
    open var previousMargin: Any by `$props`
    open var nextMargin: Any by `$props`
    open var acceleration: Boolean by `$props`
    open var displayMultipleItems: Number by `$props`
    open var easingFunction: String by `$props`
    open var keyName: String by `$props`
    open var imgMode: String by `$props`
    open var height: Any by `$props`
    open var bgColor: String by `$props`
    open var radius: Any by `$props`
    open var loading: Boolean by `$props`
    open var showTitle: Boolean by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpSwiperUpSwiper) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpSwiperUpSwiper
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val currentIndex = ref<Number>(parseInt(props.current.toString()))
            val swiperContainerStyle = computed(fun(): UTSJSONObject {
                return _uO("backgroundColor" to props.bgColor, "height" to addUnit(props.height), "borderRadius" to addUnit(props.radius))
            }
            )
            val swiperWrapperStyle = computed(fun(): UTSJSONObject {
                return _uO("width" to "100%", "height" to addUnit(props.height))
            }
            )
            val swiperImageStyle = computed(fun(): UTSJSONObject {
                return _uO("width" to "100%", "height" to addUnit(props.height), "borderRadius" to addUnit(props.radius))
            }
            )
            val swiperVideoStyle = computed(fun(): UTSJSONObject {
                return _uO("height" to addUnit(props.height))
            }
            )
            val customIndicatorStyle = computed(fun(): UTSJSONObject {
                val res = addStyle(props.indicatorStyle)
                if (UTSAndroid.`typeof`(res) === "object" && res != null) {
                    return res as UTSJSONObject
                }
                return _uO()
            }
            )
            fun gen_getSource_fn(item: Any?): String {
                var src = ""
                if (item == null) {
                    return ""
                }
                if (UTSAndroid.`typeof`(item) === "string") {
                    src = item as String
                } else if (UTSAndroid.`typeof`(item) === "object" && props.keyName != "") {
                    val obj = item as UTSJSONObject
                    src = obj[props.keyName]?.toString() ?: ""
                } else {
                    error("请按格式传递列表参数")
                    return ""
                }
                return src
            }
            val getSource = ::gen_getSource_fn
            fun gen_getItemTitle_fn(item: Any?): String {
                if (item == null) {
                    return ""
                }
                if (UTSAndroid.`typeof`(item) === "string") {
                    return item as String
                }
                if (UTSAndroid.`typeof`(item) === "object") {
                    val obj = item as UTSJSONObject
                    return obj["title"]?.toString() ?: ""
                }
                return ""
            }
            val getItemTitle = ::gen_getItemTitle_fn
            fun gen_getPoster_fn(item: Any?): String {
                if (item == null) {
                    return ""
                }
                if (UTSAndroid.`typeof`(item) === "object") {
                    val obj = item as UTSJSONObject
                    return obj["poster"]?.toString() ?: ""
                }
                return ""
            }
            val getPoster = ::gen_getPoster_fn
            fun gen_getVideoTitle_fn(item: Any?): String {
                if (!props.showTitle || item == null) {
                    return ""
                }
                if (UTSAndroid.`typeof`(item) === "object") {
                    return getItemTitle(item)
                }
                return ""
            }
            val getVideoTitle = ::gen_getVideoTitle_fn
            fun gen_isImageTitleVisible_fn(item: Any?): Boolean {
                if (!props.showTitle || item == null) {
                    return false
                }
                val title = getItemTitle(item)
                if (title == "") {
                    return false
                }
                return image(getSource(item))
            }
            val isImageTitleVisible = ::gen_isImageTitleVisible_fn
            fun gen_getItemType_fn(item: Any?): String {
                if (item == null) {
                    return ""
                }
                if (UTSAndroid.`typeof`(item) === "string") {
                    return if (video(getSource(item))) {
                        "video"
                    } else {
                        "image"
                    }
                }
                if (UTSAndroid.`typeof`(item) === "object" && props.keyName != "") {
                    val obj = item as UTSJSONObject
                    if (obj["type"] == null) {
                        return if (video(getSource(item))) {
                            "video"
                        } else {
                            "image"
                        }
                    }
                    if (obj["type"] == "image") {
                        return "image"
                    }
                    if (obj["type"] == "video") {
                        return "video"
                    }
                    return "image"
                }
                return "image"
            }
            val getItemType = ::gen_getItemType_fn
            fun gen_pauseVideo_fn(index: Number) {
                if (index >= 0 && index < props.list.length) {
                    val lastItem = getSource(props.list[index])
                    if (video(lastItem)) {
                        val video = uni_createVideoContext("video-" + index, null)
                        video?.pause()
                    }
                }
            }
            val pauseVideo = ::gen_pauseVideo_fn
            fun gen_change_fn(e: UniSwiperChangeEvent) {
                val current = e.detail.current
                pauseVideo(currentIndex.value)
                currentIndex.value = current
                emit("update:current", currentIndex.value)
                emit("change", e.detail)
            }
            val change = ::gen_change_fn
            fun gen_itemStyle_fn(index: Number): Any {
                val style: UTSJSONObject = _uO()
                if (props.nextMargin.toString() != "" && props.previousMargin.toString() != "") {
                    style["borderRadius"] = addUnit(props.radius)
                    if (index != currentIndex.value) {
                        style["transform"] = "scale(0.92)"
                    }
                }
                return style
            }
            val itemStyle = ::gen_itemStyle_fn
            fun gen_clickHandler_fn(index: Number) {
                emit("click", index)
            }
            val clickHandler = ::gen_clickHandler_fn
            watch(fun(): Any {
                return props.current
            }
            , fun(kVal: Any, preVal: Any){
                if (kVal == preVal) {
                    return
                }
                currentIndex.value = parseInt(kVal.toString())
            }
            )
            return fun(): Any? {
                val _component_up_loading_icon = resolveEasyComponent("up-loading-icon", GenUniModulesUviewUltraComponentsUpLoadingIconUpLoadingIconClass)
                val _component_video = resolveComponent("video")
                val _component_up_swiper_indicator = resolveEasyComponent("up-swiper-indicator", GenUniModulesUviewUltraComponentsUpSwiperIndicatorUpSwiperIndicatorClass)
                return _cE("view", _uM("class" to "weapp-tw-border up-swiper", "style" to _nS(swiperContainerStyle.value)), _uA(
                    if (isTrue(_ctx.loading)) {
                        _cE("view", _uM("key" to 0, "class" to "weapp-tw-border up-swiper__loading"), _uA(
                            _cV(_component_up_loading_icon, _uM("mode" to "circle"))
                        ))
                    } else {
                        _cE("swiper", _uM("key" to 1, "class" to "up-swiper__wrapper", "style" to _nS(swiperWrapperStyle.value), "onChange" to change, "circular" to _ctx.circular, "interval" to _ctx.interval, "duration" to _ctx.duration, "autoplay" to _ctx.autoplay, "current" to _ctx.current, "vertical" to _ctx.vertical), _uA(
                            _cE(Fragment, null, RenderHelpers.renderList(_ctx.list, fun(item, index, __index, _cached): Any {
                                return _cE("swiper-item", _uM("class" to "up-swiper__wrapper__item", "key" to index), _uA(
                                    renderSlot(_ctx.`$slots`, "default", _uM("item" to item, "index" to index), fun(): UTSArray<Any> {
                                        return _uA(
                                            _cE("view", _uM("class" to "weapp-tw-border up-swiper__wrapper__item__wrapper", "style" to _nS(itemStyle(index))), _uA(
                                                if (getItemType(item) == "image") {
                                                    _cE("image", _uM("key" to 0, "class" to "up-swiper__wrapper__item__wrapper__image", "src" to getSource(item), "mode" to _ctx.imgMode, "onClick" to fun(){
                                                        clickHandler(index)
                                                    }, "style" to _nS(swiperImageStyle.value)), null, 12, _uA(
                                                        "src",
                                                        "mode",
                                                        "onClick"
                                                    ))
                                                } else {
                                                    _cC("v-if", true)
                                                }
                                                ,
                                                if (getItemType(item) == "video") {
                                                    _cV(_component_video, _uM("key" to 1, "class" to "up-swiper__wrapper__item__wrapper__video", "id" to ("video-" + index), "enable-progress-gesture" to false, "src" to getSource(item), "poster" to getPoster(item), "title" to getVideoTitle(item), "style" to _nS(swiperVideoStyle.value), "controls" to "", "onClick" to fun(){
                                                        clickHandler(index)
                                                    }), null, 8, _uA(
                                                        "id",
                                                        "src",
                                                        "poster",
                                                        "title",
                                                        "style",
                                                        "onClick"
                                                    ))
                                                } else {
                                                    _cC("v-if", true)
                                                }
                                                ,
                                                if (isTrue(isImageTitleVisible(item))) {
                                                    _cE("view", _uM("key" to 2, "class" to "weapp-tw-border up-swiper__wrapper__item__wrapper__title"), _uA(
                                                        _cE("text", _uM("class" to "weapp-tw-border up-line-1 up-swiper__wrapper__item__wrapper__title-text"), _tD(getItemTitle(item)), 1)
                                                    ))
                                                } else {
                                                    _cC("v-if", true)
                                                }
                                            ), 4)
                                        )
                                    }
                                    )
                                ))
                            }
                            ), 128)
                        ), 44, _uA(
                            "circular",
                            "interval",
                            "duration",
                            "autoplay",
                            "current",
                            "vertical"
                        ))
                    }
                    ,
                    _cE("view", _uM("class" to "weapp-tw-border up-swiper__indicator", "style" to _nS(customIndicatorStyle.value)), _uA(
                        renderSlot(_ctx.`$slots`, "indicator", _uO(), fun(): UTSArray<Any> {
                            return _uA(
                                if (isTrue(!_ctx.loading && _ctx.indicator && !_ctx.showTitle)) {
                                    _cV(_component_up_swiper_indicator, _uM("key" to 0, "indicatorActiveColor" to _ctx.indicatorActiveColor, "indicatorInactiveColor" to _ctx.indicatorInactiveColor, "length" to _ctx.list.length, "current" to currentIndex.value, "indicatorMode" to _ctx.indicatorMode), null, 8, _uA(
                                        "indicatorActiveColor",
                                        "indicatorInactiveColor",
                                        "length",
                                        "current",
                                        "indicatorMode"
                                    ))
                                } else {
                                    _cC("v-if", true)
                                }
                            )
                        }
                        )
                    ), 4)
                ), 4)
            }
        }
        var name = "up-swiper"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-swiper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "position" to "relative", "overflow" to "hidden", "width" to "100%")), "up-swiper__loading" to _pS(_uM("display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "alignItems" to "center", "width" to "100%", "height" to "100%")), "up-swiper__wrapper" to _pS(_uM("width" to "100%", "minWidth" to 0)), "up-swiper__wrapper__item" to _pS(_uM("width" to "100%")), "up-swiper__wrapper__item__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "row", "position" to "relative", "overflow" to "hidden", "transitionProperty" to "transform", "transitionDuration" to "0.3s", "width" to "100%")), "up-swiper__wrapper__item__wrapper__image" to _pS(_uM("width" to "100%")), "up-swiper__wrapper__item__wrapper__video" to _pS(_uM("width" to "100%")), "up-swiper__wrapper__item__wrapper__title" to _pS(_uM("position" to "absolute", "backgroundColor" to "rgba(0,0,0,0.3)", "bottom" to 0, "left" to 0, "right" to 0, "paddingTop" to "12rpx", "paddingRight" to "24rpx", "paddingBottom" to "12rpx", "paddingLeft" to "24rpx")), "up-swiper__wrapper__item__wrapper__title-text" to _pS(_uM("fontSize" to "28rpx", "color" to "#FFFFFF")), "up-swiper__indicator" to _pS(_uM("position" to "absolute", "bottom" to 10, "left" to 0, "right" to 0, "display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "zIndex" to 10)), "@TRANSITION" to _uM("up-swiper__wrapper__item__wrapper" to _uM("property" to "transform", "duration" to "0.3s")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("click" to null, "change" to null, "update:current" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "list" to _uM("type" to "Array", "default" to fun(): UTSArray<Any> {
            return _uA<Any>()
        }
        ), "indicator" to _uM("type" to "Boolean", "default" to false), "indicatorActiveColor" to _uM("type" to "String", "default" to "#FFFFFF"), "indicatorInactiveColor" to _uM("type" to "String", "default" to "rgba(255, 255, 255, 0.35)"), "indicatorStyle" to _uM("type" to _uA(
            "String",
            "Object"
        ), "default" to ""), "indicatorMode" to _uM("type" to "String", "default" to "line"), "autoplay" to _uM("type" to "Boolean", "default" to true), "current" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 0), "currentItemId" to _uM("type" to "String", "default" to ""), "interval" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 3000), "duration" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 300), "circular" to _uM("type" to "Boolean", "default" to false), "vertical" to _uM("type" to "Boolean", "default" to false), "previousMargin" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 0), "nextMargin" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 0), "acceleration" to _uM("type" to "Boolean", "default" to false), "displayMultipleItems" to _uM("type" to "Number", "default" to 1), "easingFunction" to _uM("type" to "String", "default" to "default"), "keyName" to _uM("type" to "String", "default" to "url"), "imgMode" to _uM("type" to "String", "default" to "aspectFill"), "height" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 130), "bgColor" to _uM("type" to "String", "default" to "#f3f4f6"), "radius" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 4), "loading" to _uM("type" to "Boolean", "default" to false), "showTitle" to _uM("type" to "Boolean", "default" to false)))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "list",
            "indicator",
            "indicatorActiveColor",
            "indicatorInactiveColor",
            "indicatorStyle",
            "indicatorMode",
            "autoplay",
            "current",
            "currentItemId",
            "interval",
            "duration",
            "circular",
            "vertical",
            "previousMargin",
            "nextMargin",
            "acceleration",
            "displayMultipleItems",
            "easingFunction",
            "keyName",
            "imgMode",
            "height",
            "bgColor",
            "radius",
            "loading",
            "showTitle"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
