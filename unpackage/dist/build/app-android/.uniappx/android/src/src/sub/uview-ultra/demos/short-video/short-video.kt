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
import io.dcloud.uniapp.extapi.getWindowInfo as uni_getWindowInfo
import io.dcloud.uniapp.extapi.navigateBack as uni_navigateBack
open class GenSrcSubUviewUltraDemosShortVideoShortVideo : BasePage {
    constructor(__ins: ComponentInternalInstance, __renderer: String?) : super(__ins, __renderer) {
        onLoad(fun(_: OnLoadOptions) {}, __ins)
        onCreated(fun() {}, __ins)
        onReachBottom(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
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
        var setup: (__props: GenSrcSubUviewUltraDemosShortVideoShortVideo) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcSubUviewUltraDemosShortVideoShortVideo
            val _cache = __ins.renderCache
            fun gen_makeVideo_fn(url: String, name: String, avatar: String, desc: String, likeCount: String, commentCount: String, shareCount: String, collectCount: String): UTSJSONObject {
                return _uO("videoUrl" to url, "author" to _uO("name" to name, "avatar" to avatar, "desc" to desc), "likeCount" to likeCount, "commentCount" to commentCount, "shareCount" to shareCount, "collectCount" to collectCount, "isLiked" to false, "isCollected" to false, "playbackRate" to 1, "progress" to 0, "aspectRatio" to ((16.0 as Number) / 9.0))
            }
            val makeVideo = ::gen_makeVideo_fn
            val videoList = ref(_uA<UTSJSONObject>(makeVideo("https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/2minute-demo.mp4", "uni-app 官方示例", "/static/logo.png", "DCloud 官方示例视频（国内 CDN）", "1.2w", "356", "89", "120"), makeVideo("https://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-360p.mp4", "xgplayer 示例 360P", "/static/qq_uniBestX.jpg", "字节跳动 xgplayer 官方示例视频", "8600", "124", "45", "67"), makeVideo("https://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4", "xgplayer 示例 720P", "/static/qr-code.png", "字节跳动 xgplayer 官方示例视频", "5300", "88", "30", "42")))
            val eventLog = ref<String>("上下滑动切换视频，右侧按钮点赞/评论/分享/收藏")
            val shortVideoRef = ref(null as ComponentPublicInstance?)
            val windowHeight = ref<Number>(uni_getWindowInfo().windowHeight)
            fun gen_onTabChange_fn(index: Number) {
                eventLog.value = "tabChange => " + index.toString(10)
            }
            val onTabChange = ::gen_onTabChange_fn
            fun gen_onVideoChange_fn(index: Number) {
                eventLog.value = "videoChange => 第 " + (index + 1).toString(10) + " 个视频"
            }
            val onVideoChange = ::gen_onVideoChange_fn
            fun gen_getEventIndex_fn(event: UTSJSONObject): Number {
                val value = event["index"]
                if (UTSAndroid.`typeof`(value) == "number") {
                    return value as Number
                }
                if (value == null) {
                    return 0
                }
                val parsed = parseInt(value.toString())
                return if (isNaN(parsed)) {
                    0
                } else {
                    parsed
                }
            }
            val getEventIndex = ::gen_getEventIndex_fn
            fun gen_onLike_fn(event: UTSJSONObject) {
                eventLog.value = "like => 第 " + (getEventIndex(event) + 1).toString(10) + " 个视频"
            }
            val onLike = ::gen_onLike_fn
            fun gen_onComment_fn(event: UTSJSONObject) {
                eventLog.value = "comment => 第 " + (getEventIndex(event) + 1).toString(10) + " 个视频"
            }
            val onComment = ::gen_onComment_fn
            fun gen_onShare_fn(event: UTSJSONObject) {
                eventLog.value = "share => 第 " + (getEventIndex(event) + 1).toString(10) + " 个视频"
            }
            val onShare = ::gen_onShare_fn
            fun gen_onCollect_fn(event: UTSJSONObject) {
                eventLog.value = "collect => 第 " + (getEventIndex(event) + 1).toString(10) + " 个视频"
            }
            val onCollect = ::gen_onCollect_fn
            fun gen_onProgressChange_fn(event: UTSJSONObject) {
                val progress = event["progress"]
                val value = if (progress == null) {
                    0
                } else {
                    progress.toString()
                }
                eventLog.value = "progressChange => " + value
            }
            val onProgressChange = ::gen_onProgressChange_fn
            fun gen_onGoNext_fn() {
                eventLog.value = "goNext => 点击了 Home 底部导航"
            }
            val onGoNext = ::gen_onGoNext_fn
            fun gen_onBack_fn() {
                uni_navigateBack(null)
            }
            val onBack = ::gen_onBack_fn
            return fun(): Any? {
                val _component_up_short_video = resolveEasyComponent("up-short-video", GenUniModulesUviewUltraComponentsUpShortVideoUpShortVideoClass)
                val _component_up_button = resolveEasyComponent("up-button", GenUniModulesUviewUltraComponentsUpButtonUpButtonClass)
                return _cV(unref(GenAppkuClass), _uM("layout" to "navbar", "show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to false, "page-style" to _uO("navigationBarTitleText" to "up-short-video 短视频", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cV(unref(GenSrcLayoutsNavbarClass), _uM("show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to false, "page-style" to _uO("navigationBarTitleText" to "up-short-video 短视频", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "weapp-tw-border page", "style" to _nS(_uM("height" to ("" + windowHeight.value + "px")))), _uA(
                                    _cE("view", _uM("class" to "weapp-tw-border video-wrap"), _uA(
                                        _cV(_component_up_short_video, _uM("ref_key" to "shortVideoRef", "ref" to shortVideoRef, "video-list" to videoList.value, "current-tab" to 0, "current-video" to 0, "onTabChange" to onTabChange, "onVideoChange" to onVideoChange, "onLike" to onLike, "onComment" to onComment, "onShare" to onShare, "onCollect" to onCollect, "onProgressChange" to onProgressChange, "onGoNext" to onGoNext), null, 8, _uA(
                                            "video-list"
                                        ))
                                    )),
                                    _cV(_component_up_button, _uM("text" to "返回", "type" to "primary", "size" to "small", "color" to "rgba(0, 0, 0, 0.4)", "class" to "back-btn", "onClick" to onBack)),
                                    _cE("view", _uM("class" to "weapp-tw-border log-bar"), _uA(
                                        _cE("text", _uM("class" to "weapp-tw-border log-text"), _tD(eventLog.value), 1)
                                    ))
                                ), 4)
                            )
                        }
                        ), "_" to 1))
                    )
                }
                ), "_" to 1))
            }
        }
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "page" to _pS(_uM("width" to "100%", "backgroundColor" to "#000000", "position" to "relative")), "video-wrap" to _pS(_uM("width" to "100%", "height" to "100%")), "back-btn" to _pS(_uM("position" to "fixed", "left" to 16, "top" to 56, "zIndex" to 99, "borderTopLeftRadius" to 18, "borderTopRightRadius" to 18, "borderBottomRightRadius" to 18, "borderBottomLeftRadius" to 18)), "log-bar" to _pS(_uM("position" to "fixed", "left" to "50%", "bottom" to 96, "transform" to "translateX(-50%)", "zIndex" to 99, "width" to "80%", "maxWidth" to 600, "paddingTop" to 8, "paddingRight" to 14, "paddingBottom" to 8, "paddingLeft" to 14, "backgroundColor" to "rgba(0,0,0,0.55)", "borderTopLeftRadius" to 18, "borderTopRightRadius" to 18, "borderBottomRightRadius" to 18, "borderBottomLeftRadius" to 18)), "log-text" to _pS(_uM("fontSize" to 12, "color" to "#ffffff", "lineHeight" to "18px")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo")))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
