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
open class GenUniModulesUviewUltraComponentsUpListUpList : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var showScrollbar: Boolean by `$props`
    open var lowerThreshold: Any by `$props`
    open var upperThreshold: Any by `$props`
    open var scrollTop: Any by `$props`
    open var scrollable: Boolean by `$props`
    open var scrollIntoView: String by `$props`
    open var scrollWithAnimation: Boolean by `$props`
    open var height: Any by `$props`
    open var width: Any by `$props`
    open var refresherEnabled: Boolean by `$props`
    open var refresherThreshold: Number by `$props`
    open var refresherDefaultStyle: String by `$props`
    open var refresherBackground: String by `$props`
    open var refresherTriggered: Boolean by `$props`
    open var customStyle: Any by `$props`
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpListUpList) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpListUpList
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val innerScrollTop = ref<Number>(0)
            val offset = ref<Number>(0)
            val sys = getWindowInfo()
            val listStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                if (props.width != 0) {
                    style["width"] = addUnit(props.width)
                }
                if (props.height != 0) {
                    style["height"] = addUnit(props.height)
                }
                if (style["height"] == null) {
                    style["height"] = addUnit(sys.windowHeight, "px")
                }
                return deepMerge(style, addStyle(props.customStyle))
            }
            )
            provide("upListContext", _uO("innerScrollTop" to innerScrollTop, "updateOffsetFromChild" to fun(top: Number){
                offset.value = top
            }
            ))
            fun gen_onScroll_fn(e: UniScrollEvent) {
                var top = e.detail.scrollTop
                innerScrollTop.value = top
                emit("scroll", top)
            }
            val onScroll = ::gen_onScroll_fn
            fun gen_scrolltolower_fn(e: UniScrollToLowerEvent) {
                sleep(30).then(fun(){
                    emit("scrolltolower")
                    emit("scroll-to-lower")
                }
                )
            }
            val scrolltolower = ::gen_scrolltolower_fn
            fun gen_scrolltoupper_fn(e: UniScrollToUpperEvent) {
                sleep(30).then(fun(){
                    emit("scrolltoupper")
                    emit("scroll-to-upper")
                    offset.value = 0
                }
                )
            }
            val scrolltoupper = ::gen_scrolltoupper_fn
            fun gen_refresherpulling_fn(e: UniRefresherEvent) {
                emit("refresherpulling", e)
            }
            val refresherpulling = ::gen_refresherpulling_fn
            fun gen_refresherrefresh_fn(e: UniRefresherEvent) {
                emit("refresherrefresh", e)
            }
            val refresherrefresh = ::gen_refresherrefresh_fn
            fun gen_refresherrestore_fn(e: UniRefresherEvent) {
                emit("refresherrestore", e)
            }
            val refresherrestore = ::gen_refresherrestore_fn
            fun gen_refresherabort_fn(e: UniRefresherEvent) {
                emit("refresherabort", e)
            }
            val refresherabort = ::gen_refresherabort_fn
            return fun(): Any? {
                return _cE("scroll-view", _uM("class" to "up-list", "direction" to "vertical", "scroll-into-view" to _ctx.scrollIntoView, "style" to _nS(_uA(
                    listStyle.value
                )), "scroll-top" to parseFloat(_ctx.scrollTop.toString()), "lower-threshold" to parseFloat(_ctx.lowerThreshold.toString()), "upper-threshold" to parseFloat(_ctx.upperThreshold.toString()), "show-scrollbar" to _ctx.showScrollbar, "scroll-with-animation" to _ctx.scrollWithAnimation, "onScroll" to onScroll, "onScrolltolower" to scrolltolower, "onScrolltoupper" to scrolltoupper, "refresher-enabled" to _ctx.refresherEnabled, "refresher-threshold" to _ctx.refresherThreshold, "refresher-default-style" to _ctx.refresherDefaultStyle, "refresher-background" to _ctx.refresherBackground, "refresher-triggered" to _ctx.refresherTriggered, "onRefresherpulling" to refresherpulling, "onRefresherrefresh" to refresherrefresh, "onRefresherrestore" to refresherrestore, "onRefresherabort" to refresherabort), _uA(
                    _cE("view", _uM("class" to "weapp-tw-border"), _uA(
                        renderSlot(_ctx.`$slots`, "default")
                    ))
                ), 44, _uA(
                    "scroll-into-view",
                    "scroll-top",
                    "lower-threshold",
                    "upper-threshold",
                    "show-scrollbar",
                    "scroll-with-animation",
                    "refresher-enabled",
                    "refresher-threshold",
                    "refresher-default-style",
                    "refresher-background",
                    "refresher-triggered"
                ))
            }
        }
        var name = "up-list"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "up-list" to _pS(_uM("flexDirection" to "column")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("scroll" to null, "scrolltolower" to null, "scroll-to-lower" to null, "scrolltoupper" to null, "scroll-to-upper" to null, "refresherpulling" to null, "refresherrefresh" to null, "refresherrestore" to null, "refresherabort" to null)
        var props = _nP(_uM("customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "showScrollbar" to _uM("type" to "Boolean", "default" to false), "lowerThreshold" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 50), "upperThreshold" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 0), "scrollTop" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 0), "scrollable" to _uM("type" to "Boolean", "default" to true), "scrollIntoView" to _uM("type" to "String", "default" to ""), "scrollWithAnimation" to _uM("type" to "Boolean", "default" to false), "height" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 0), "width" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 0), "refresherEnabled" to _uM("type" to "Boolean", "default" to false), "refresherThreshold" to _uM("type" to "Number", "default" to 45), "refresherDefaultStyle" to _uM("type" to "String", "default" to "black"), "refresherBackground" to _uM("type" to "String", "default" to "#FFF"), "refresherTriggered" to _uM("type" to "Boolean", "default" to false), "customStyle" to _uM("default" to fun(): UTSJSONObject {
            return (_uO())
        }
        )))
        var propsNeedCastKeys = _uA(
            "customClass",
            "url",
            "linkType",
            "showScrollbar",
            "lowerThreshold",
            "upperThreshold",
            "scrollTop",
            "scrollable",
            "scrollIntoView",
            "scrollWithAnimation",
            "height",
            "width",
            "refresherEnabled",
            "refresherThreshold",
            "refresherDefaultStyle",
            "refresherBackground",
            "refresherTriggered",
            "customStyle"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
