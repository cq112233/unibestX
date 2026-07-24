@file:Suppress("UNCHECKED_CAST", "USELESS_CAST", "INAPPLICABLE_JVM_NAME", "UNUSED_ANONYMOUS_PARAMETER", "SENSELESS_COMPARISON", "NAME_SHADOWING", "UNNECESSARY_NOT_NULL_ASSERTION")
package uni.UNI5198058
import io.dcloud.uniapp.*
import io.dcloud.uniapp.extapi.*
import io.dcloud.uniapp.framework.*
import io.dcloud.uniapp.runtime.*
import io.dcloud.uniapp.vue.*
import io.dcloud.uniapp.vue.shared.*
import io.dcloud.uts.*
import io.dcloud.uts.Map
import io.dcloud.uts.Set
import io.dcloud.uts.UTSAndroid
import kotlin.properties.Delegates
open class GenUniModulesUviewUltraComponentsUpListUpList : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
        onCreated(fun() {}, __ins)
        onCreated(fun() {}, __ins)
        onMounted(fun() {}, __ins)
        this.`$watch`(fun(): Any? {
            return this.scrollIntoView
        }
        , fun(n: String) {
            this.scrollIntoViewById(n)
        }
        )
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        return _cE("scroll-view", _uM("class" to "up-list", "direction" to "vertical", "custom-nested-scroll" to _ctx.customNestedScroll, "scroll-into-view" to _ctx.scrollIntoView, "style" to _nS(_uA(
            _ctx.listStyle
        )), "scroll-y" to _ctx.scrollable, "scroll-top" to parseFloat(_ctx.scrollTop.toString()), "lower-threshold" to parseFloat(_ctx.lowerThreshold.toString()), "upper-threshold" to parseFloat(_ctx.upperThreshold.toString()), "show-scrollbar" to _ctx.showScrollbar, "scroll-with-animation" to _ctx.scrollWithAnimation, "onScroll" to _ctx.onScroll, "onScrolltolower" to _ctx.scrolltolower, "onScrolltoupper" to _ctx.scrolltoupper, "refresher-enabled" to _ctx.refresherEnabled, "refresher-threshold" to _ctx.refresherThreshold, "refresher-default-style" to _ctx.refresherDefaultStyle, "refresher-background" to _ctx.refresherBackground, "refresher-triggered" to _ctx.refresherTriggered, "onRefresherpulling" to _ctx.refresherpulling, "onRefresherrefresh" to _ctx.refresherrefresh, "onRefresherrestore" to _ctx.refresherrestore, "onRefresherabort" to _ctx.refresherabort), _uA(
            _cE("view", null, _uA(
                renderSlot(_ctx.`$slots`, "default")
            ))
        ), 44, _uA(
            "custom-nested-scroll",
            "scroll-into-view",
            "scroll-y",
            "scroll-top",
            "lower-threshold",
            "upper-threshold",
            "show-scrollbar",
            "scroll-with-animation",
            "onScroll",
            "onScrolltolower",
            "onScrolltoupper",
            "refresher-enabled",
            "refresher-threshold",
            "refresher-default-style",
            "refresher-background",
            "refresher-triggered",
            "onRefresherpulling",
            "onRefresherrefresh",
            "onRefresherrestore",
            "onRefresherabort"
        ))
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var showScrollbar: Boolean by `$props`
    open var lowerThreshold: Any by `$props`
    open var upperThreshold: Any by `$props`
    open var scrollTop: Any by `$props`
    open var offsetAccuracy: Any by `$props`
    open var enableFlex: Boolean by `$props`
    open var pagingEnabled: Boolean by `$props`
    open var scrollable: Boolean by `$props`
    open var scrollIntoView: String by `$props`
    open var scrollWithAnimation: Boolean by `$props`
    open var enableBackToTop: Boolean by `$props`
    open var height: Any by `$props`
    open var width: Any by `$props`
    open var preLoadScreen: Any by `$props`
    open var refresherEnabled: Boolean by `$props`
    open var refresherThreshold: Number by `$props`
    open var refresherDefaultStyle: String by `$props`
    open var refresherBackground: String by `$props`
    open var refresherTriggered: Boolean by `$props`
    open var customNestedScroll: Boolean by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var innerScrollTop: Number by `$data`
    open var offset: Number by `$data`
    open var sys: GetWindowInfoResult by `$data`
    open var listStyle: UTSJSONObject by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "parentData" to _uO(), "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>(), "innerScrollTop" to 0, "offset" to 0, "sys" to getWindowInfo() as GetWindowInfoResult, "listStyle" to computed<UTSJSONObject>(fun(): UTSJSONObject {
            val style: UTSJSONObject = _uO()
            if (this.width != 0) {
                style["width"] = addUnit(this.width)
            }
            if (this.height != 0) {
                style["height"] = addUnit(this.height)
            }
            if (style["height"] == null) {
                style["height"] = addUnit(this.sys.windowHeight, "px")
            }
            return deepMerge(style, addStyle(this.customStyle))
        }
        ))
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
    open var updateOffsetFromChild = ::gen_updateOffsetFromChild_fn
    open fun gen_updateOffsetFromChild_fn(top: Number) {
        this.offset = top
    }
    open var onScroll = ::gen_onScroll_fn
    open fun gen_onScroll_fn(e: UniScrollEvent) {
        var scrollTop: Number = 0
        scrollTop = e.detail.scrollTop
        this.innerScrollTop = scrollTop
        this.`$emit`("scroll", scrollTop)
    }
    open var scrollIntoViewById = ::gen_scrollIntoViewById_fn
    open fun gen_scrollIntoViewById_fn(id: String) {}
    open var scrolltolower = ::gen_scrolltolower_fn
    open fun gen_scrolltolower_fn(e: UniScrollToLowerEvent) {
        sleep(30).then(fun(){
            this.`$emit`("scrolltolower")
            this.`$emit`("scroll-to-lower")
        }
        )
    }
    open var scrolltoupper = ::gen_scrolltoupper_fn
    open fun gen_scrolltoupper_fn(e: UniScrollToUpperEvent) {
        sleep(30).then(fun(){
            this.`$emit`("scrolltoupper")
            this.`$emit`("scroll-to-upper")
            this.offset = 0
        }
        )
    }
    open var refresherpulling = ::gen_refresherpulling_fn
    open fun gen_refresherpulling_fn(e: UniRefresherEvent) {
        this.`$emit`("refresherpulling", e)
    }
    open var refresherrefresh = ::gen_refresherrefresh_fn
    open fun gen_refresherrefresh_fn(e: UniRefresherEvent) {
        this.`$emit`("refresherrefresh", e)
    }
    open var refresherrestore = ::gen_refresherrestore_fn
    open fun gen_refresherrestore_fn(e: UniRefresherEvent) {
        this.`$emit`("refresherrestore", e)
    }
    open var refresherabort = ::gen_refresherabort_fn
    open fun gen_refresherabort_fn(e: UniRefresherEvent) {
        this.`$emit`("refresherabort", e)
    }
    companion object {
        var name = "up-list"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("up-list" to _pS(_uM("display" to "flex", "flexDirection" to "column")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("scroll" to null, "scrolltolower" to null, "scroll-to-lower" to null, "scrolltoupper" to null, "scroll-to-upper" to null, "refresherpulling" to null, "refresherrefresh" to null, "refresherrestore" to null, "refresherabort" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "showScrollbar" to _uM("type" to "Boolean", "default" to listProp["showScrollbar"]), "lowerThreshold" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to listProp["lowerThreshold"]), "upperThreshold" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to listProp["upperThreshold"]), "scrollTop" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to listProp["scrollTop"]), "offsetAccuracy" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to listProp["offsetAccuracy"]), "enableFlex" to _uM("type" to "Boolean", "default" to listProp["enableFlex"]), "pagingEnabled" to _uM("type" to "Boolean", "default" to listProp["pagingEnabled"]), "scrollable" to _uM("type" to "Boolean", "default" to listProp["scrollable"]), "scrollIntoView" to _uM("type" to "String", "default" to listProp["scrollIntoView"]), "scrollWithAnimation" to _uM("type" to "Boolean", "default" to listProp["scrollWithAnimation"]), "enableBackToTop" to _uM("type" to "Boolean", "default" to listProp["enableBackToTop"]), "height" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to listProp["height"]), "width" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to listProp["width"]), "preLoadScreen" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to listProp["preLoadScreen"]), "refresherEnabled" to _uM("type" to "Boolean", "default" to listProp["refresherEnabled"]), "refresherThreshold" to _uM("type" to "Number", "default" to listProp["refresherThreshold"]), "refresherDefaultStyle" to _uM("type" to "String", "default" to listProp["refresherDefaultStyle"]), "refresherBackground" to _uM("type" to "String", "default" to listProp["refresherBackground"]), "refresherTriggered" to _uM("type" to "Boolean", "default" to listProp["refresherTriggered"]), "customNestedScroll" to _uM("type" to "Boolean", "default" to listProp["customNestedScroll"])))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "showScrollbar",
            "lowerThreshold",
            "upperThreshold",
            "scrollTop",
            "offsetAccuracy",
            "enableFlex",
            "pagingEnabled",
            "scrollable",
            "scrollIntoView",
            "scrollWithAnimation",
            "enableBackToTop",
            "height",
            "width",
            "preLoadScreen",
            "refresherEnabled",
            "refresherThreshold",
            "refresherDefaultStyle",
            "refresherBackground",
            "refresherTriggered",
            "customNestedScroll"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
