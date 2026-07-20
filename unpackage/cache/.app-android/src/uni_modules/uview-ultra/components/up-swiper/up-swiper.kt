@file:Suppress("UNCHECKED_CAST", "USELESS_CAST", "INAPPLICABLE_JVM_NAME", "UNUSED_ANONYMOUS_PARAMETER", "SENSELESS_COMPARISON", "NAME_SHADOWING", "UNNECESSARY_NOT_NULL_ASSERTION")
package uni.UNI5198058
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
        onCreated(fun() {}, __ins)
        this.`$watch`(fun(): Any? {
            return this.current
        }
        , fun(kVal: Any, preVal: Any) {
            if (kVal === preVal) {
                return
            }
            this.currentIndex = kVal as Number
        }
        )
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        val _component_up_loading_icon = resolveEasyComponent("up-loading-icon", GenUniModulesUviewUltraComponentsUpLoadingIconUpLoadingIconClass)
        val _component_up_swiper_indicator = resolveEasyComponent("up-swiper-indicator", GenUniModulesUviewUltraComponentsUpSwiperIndicatorUpSwiperIndicatorClass)
        return _cE("view", _uM("class" to "up-swiper", "style" to _nS(_uM("backgroundColor" to _ctx.bgColor, "height" to _ctx.addUnit(_ctx.height), "borderRadius" to _ctx.addUnit(_ctx.radius)))), _uA(
            if (isTrue(_ctx.loading)) {
                _cE("view", _uM("key" to 0, "class" to "up-swiper__loading"), _uA(
                    _cV(_component_up_loading_icon, _uM("mode" to "circle"))
                ))
            } else {
                _cE("swiper", _uM("key" to 1, "class" to "up-swiper__wrapper", "style" to _nS(_uM("width" to "100%", "height" to _ctx.addUnit(_ctx.height))), "onChange" to _ctx.change, "circular" to _ctx.circular, "interval" to _ctx.interval, "duration" to _ctx.duration, "autoplay" to _ctx.autoplay, "current" to _ctx.current, "vertical" to _ctx.vertical), _uA(
                    _cE(Fragment, null, RenderHelpers.renderList(_ctx.list, fun(item, index, __index, _cached): Any {
                        return _cE("swiper-item", _uM("class" to "up-swiper__wrapper__item", "key" to index), _uA(
                            renderSlot(_ctx.`$slots`, "default", _uM("item" to item, "index" to index), fun(): UTSArray<Any> {
                                return _uA(
                                    _cE("view", _uM("class" to "up-swiper__wrapper__item__wrapper", "style" to _nS(_uA(
                                        _ctx.itemStyle(index)
                                    ))), _uA(
                                        if (_ctx.getItemType(item) === "image") {
                                            _cE("image", _uM("key" to 0, "class" to "up-swiper__wrapper__item__wrapper__image", "src" to _ctx.getSource(item), "mode" to _ctx.imgMode, "onClick" to fun(){
                                                _ctx.clickHandler(index)
                                            }, "style" to _nS(_uM("width" to "100%", "height" to _ctx.addUnit(_ctx.height), "borderRadius" to _ctx.addUnit(_ctx.radius)))), null, 12, _uA(
                                                "src",
                                                "mode",
                                                "onClick"
                                            ))
                                        } else {
                                            _cC("v-if", true)
                                        }
                                        ,
                                        if (_ctx.getItemType(item) === "video") {
                                            _cE("video", _uM("key" to 1, "class" to "up-swiper__wrapper__item__wrapper__video", "id" to ("video-" + index), "enable-progress-gesture" to false, "src" to _ctx.getSource(item), "poster" to _ctx.getPoster(item), "title" to if (_ctx.showTitle && _ctx.testObject(item) && _ctx.getItemTitle(item) != "") {
                                                _ctx.getItemTitle(item)
                                            } else {
                                                ""
                                            }, "style" to _nS(_uM("height" to _ctx.addUnit(_ctx.height))), "controls" to "", "onClick" to fun(){
                                                _ctx.clickHandler(index)
                                            }), null, 12, _uA(
                                                "id",
                                                "src",
                                                "poster",
                                                "title",
                                                "onClick"
                                            ))
                                        } else {
                                            _cC("v-if", true)
                                        }
                                        ,
                                        if (isTrue(_ctx.showTitle && _ctx.getItemTitle(item) != "" && _ctx.testImage(_ctx.getSource(item)))) {
                                            _cE("view", _uM("key" to 2, "class" to "up-swiper__wrapper__item__wrapper__title"), _uA(
                                                _cE("text", _uM("class" to "up-line-1"), _tD(_ctx.getItemTitle(item)), 1)
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
                    "onChange",
                    "circular",
                    "interval",
                    "duration",
                    "autoplay",
                    "current",
                    "vertical"
                ))
            }
            ,
            _cE("view", _uM("class" to "up-swiper__indicator", "style" to _nS(_uA(
                _ctx.addStyle(_ctx.indicatorStyle)
            ))), _uA(
                renderSlot(_ctx.`$slots`, "indicator", _uO(), fun(): UTSArray<Any> {
                    return _uA(
                        if (isTrue(!_ctx.loading && _ctx.indicator && !_ctx.showTitle)) {
                            _cV(_component_up_swiper_indicator, _uM("key" to 0, "indicatorActiveColor" to _ctx.indicatorActiveColor, "indicatorInactiveColor" to _ctx.indicatorInactiveColor, "length" to _ctx.list.length, "current" to _ctx.currentIndex, "indicatorMode" to _ctx.indicatorMode), null, 8, _uA(
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
    open var currentIndex: Number by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "parentData" to _uO(), "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>(), "currentIndex" to 0)
    }
    open fun `$upAddUnit`(kVal: Any?, unit: String? = ""): String {
        return uni.UNI5198058.addUnit(kVal, unit)
    }
    open fun `$upAddStyle`(customStyle: Any, target: String = "object"): Any {
        return uni.UNI5198058.addStyle(customStyle, target)
    }
    open fun `$upGetPx`(kVal: Any, unit: Boolean = false): String {
        return getPx(kVal, unit)
    }
    open var bem = ::gen_bem_fn
    open fun gen_bem_fn(name: String, fixed: UTSArray<String>, change: UTSArray<UTSArray<Any>>): String {
        return uni.UNI5198058.bem(name, fixed, change)
    }
    open fun openPage(urlKey: String = "url"): Unit {}
    open fun `$uGetRect`(selector: String, all: Boolean = false): UTSPromise<NodeInfo> {
        return uni.UNI5198058.upGetRect(selector, all, this)
    }
    open fun upGetRect(selector: String, all: Boolean = false): UTSPromise<NodeInfo> {
        return uni.UNI5198058.upGetRect(selector, all, this)
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
    open var addStyle = ::gen_addStyle_fn
    open fun gen_addStyle_fn(kVal: Any): Any {
        return uni.UNI5198058.addStyle(kVal)
    }
    open var addUnit = ::gen_addUnit_fn
    open fun gen_addUnit_fn(kVal: Any): String {
        return uni.UNI5198058.addUnit(kVal)
    }
    open var itemStyle = ::gen_itemStyle_fn
    open fun gen_itemStyle_fn(index: Number): Any {
        val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-swiper/up-swiper.uvue", 155, 11))
        if (this.nextMargin != "" && this.previousMargin != "") {
            style["borderRadius"] = uni.UNI5198058.addUnit(this.radius)
            if (index !== this.currentIndex) {
                style["transform"] = "scale(0.92)"
            }
        }
        return style
    }
    open var testObject = ::gen_testObject_fn
    open fun gen_testObject_fn(e: Any?): Boolean {
        return kObject(e)
    }
    open var testImage = ::gen_testImage_fn
    open fun gen_testImage_fn(e: String): Boolean {
        return image(e)
    }
    open var getItemType = ::gen_getItemType_fn
    open fun gen_getItemType_fn(reassignedItem: Any?): String {
        var item = reassignedItem
        if (item == null) {
            return ""
        }
        if (UTSAndroid.`typeof`(item) === "string") {
            return if (video(this.getSource(item))) {
                "video"
            } else {
                "image"
            }
        }
        if (UTSAndroid.`typeof`(item) === "object" && this.keyName != "") {
            item = item as UTSJSONObject
            if (item["type"] == null) {
                return if (video(this.getSource(item))) {
                    "video"
                } else {
                    "image"
                }
            }
            if (item["type"] === "image") {
                return "image"
            }
            if (item["type"] === "video") {
                return "video"
            }
            return "image"
        }
        return "image"
    }
    open var getSource = ::gen_getSource_fn
    open fun gen_getSource_fn(reassignedItem: Any?): String {
        var item = reassignedItem
        if (UTSAndroid.`typeof`(item) === "string") {
            return item as String
        }
        if (UTSAndroid.`typeof`(item) === "object" && this.keyName != "") {
            item = item as UTSJSONObject
            return item[this.keyName].toString()
        } else {
            error("请按格式传递列表参数")
        }
        return ""
    }
    open var getItemTitle = ::gen_getItemTitle_fn
    open fun gen_getItemTitle_fn(reassignedItem: Any?): String {
        var item = reassignedItem
        if (UTSAndroid.`typeof`(item) === "string") {
            return item as String
        }
        if (UTSAndroid.`typeof`(item) === "object") {
            item = item as UTSJSONObject
            return item["title"].toString()
        } else {
            error("请按格式传递列表参数")
        }
        return ""
    }
    open var change = ::gen_change_fn
    open fun gen_change_fn(e: UniSwiperChangeEvent) {
        val current = e.detail.current
        this.pauseVideo(this.currentIndex)
        this.currentIndex = current
        this.`$emit`("update:current", this.currentIndex)
        this.`$emit`("change", e.detail)
    }
    open var pauseVideo = ::gen_pauseVideo_fn
    open fun gen_pauseVideo_fn(index: Number) {
        val lastItem = this.getSource(this.list[index])
        if (video(lastItem)) {
            val video = uni_createVideoContext("video-" + index, this)
            video!!!!.pause()
        }
    }
    open var getPoster = ::gen_getPoster_fn
    open fun gen_getPoster_fn(reassignedItem: Any?): String {
        var item = reassignedItem
        if (UTSAndroid.`typeof`(item) === "object") {
            item = item as UTSJSONObject
            return if (item["poster"].toString() != "") {
                item["poster"].toString()
            } else {
                ""
            }
        }
        return ""
    }
    open var clickHandler = ::gen_clickHandler_fn
    open fun gen_clickHandler_fn(index: Number) {
        this.`$emit`("click", index)
    }
    companion object {
        var name = "up-swiper"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-swiper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "position" to "relative", "overflow" to "hidden", "width" to "100%")), "up-swiper__loading" to _pS(_uM("display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "alignItems" to "center", "width" to "100%", "height" to "100%")), "up-swiper__wrapper" to _pS(_uM("width" to "100%", "minWidth" to 0)), "up-swiper__wrapper__item" to _pS(_uM("width" to "100%")), "up-swiper__wrapper__item__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "row", "position" to "relative", "overflow" to "hidden", "transitionProperty" to "transform", "transitionDuration" to "0.3s", "width" to "100%")), "up-swiper__wrapper__item__wrapper__image" to _pS(_uM("width" to "100%")), "up-swiper__wrapper__item__wrapper__video" to _pS(_uM("width" to "100%")), "up-swiper__wrapper__item__wrapper__title" to _pS(_uM("position" to "absolute", "backgroundColor" to "rgba(0,0,0,0.3)", "bottom" to 0, "left" to 0, "right" to 0, "fontSize" to "28rpx", "paddingTop" to "12rpx", "paddingRight" to "24rpx", "paddingBottom" to "12rpx", "paddingLeft" to "24rpx", "color" to "#FFFFFF")), "up-swiper__indicator" to _pS(_uM("position" to "absolute", "bottom" to 10)), "@TRANSITION" to _uM("up-swiper__wrapper__item__wrapper" to _uM("property" to "transform", "duration" to "0.3s")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("click" to null, "change" to null, "update:current" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "list" to _uM("type" to "Array", "default" to swiperProp["list"]), "indicator" to _uM("type" to "Boolean", "default" to swiperProp["indicator"]), "indicatorActiveColor" to _uM("type" to "String", "default" to swiperProp["indicatorActiveColor"]), "indicatorInactiveColor" to _uM("type" to "String", "default" to swiperProp["indicatorInactiveColor"]), "indicatorStyle" to _uM("type" to _uA(
            "String",
            "Object"
        ), "default" to swiperProp["indicatorStyle"]), "indicatorMode" to _uM("type" to "String", "default" to swiperProp["indicatorMode"]), "autoplay" to _uM("type" to "Boolean", "default" to swiperProp["autoplay"]), "current" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to swiperProp["current"]), "currentItemId" to _uM("type" to "String", "default" to swiperProp["currentItemId"]), "interval" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to swiperProp["interval"]), "duration" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to swiperProp["duration"]), "circular" to _uM("type" to "Boolean", "default" to swiperProp["circular"]), "vertical" to _uM("type" to "Boolean", "default" to swiperProp["vertical"]), "previousMargin" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to swiperProp["previousMargin"]), "nextMargin" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to swiperProp["nextMargin"]), "acceleration" to _uM("type" to "Boolean", "default" to swiperProp["acceleration"]), "displayMultipleItems" to _uM("type" to "Number", "default" to swiperProp["displayMultipleItems"]), "easingFunction" to _uM("type" to "String", "default" to swiperProp["easingFunction"]), "keyName" to _uM("type" to "String", "default" to swiperProp["keyName"]), "imgMode" to _uM("type" to "String", "default" to swiperProp["imgMode"]), "height" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to swiperProp["height"]), "bgColor" to _uM("type" to "String", "default" to swiperProp["bgColor"]), "radius" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to swiperProp["radius"]), "loading" to _uM("type" to "Boolean", "default" to swiperProp["loading"]), "showTitle" to _uM("type" to "Boolean", "default" to swiperProp["showTitle"])))
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
