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
import io.dcloud.uniapp.extapi.`$emit` as uni__emit
import io.dcloud.uniapp.extapi.`$off` as uni__off
import io.dcloud.uniapp.extapi.`$on` as uni__on
open class GenSrcLayoutsNavbar : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var type: String by `$props`
    open var title: String by `$props`
    open var showBack: Boolean by `$props`
    open var enablePullDownRefresh: Boolean by `$props`
    open var bgColor: String by `$props`
    open var titleColor: String by `$props`
    open var border: Boolean by `$props`
    open var pageStyle: Any by `$props`
    open var hideNavbar: Boolean by `$props`
    open var hideNavBar: Boolean by `$props`
    open var showNavbar: Boolean by `$props`
    open var showNavBar: Boolean by `$props`
    open var navigationBarTitleText: String by `$props`
    open var navigationBarBackgroundColor: String by `$props`
    open var navigationBarTextStyle: String by `$props`
    open var customPageClass: String by `$props`
    open var customClass: String by `$props`
    open var layoutClass: String by `$props`
    open var customPageStyle: String by `$props`
    open var customStyle: String by `$props`
    open var layoutStyle: String by `$props`
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
        var setup: (__props: GenSrcLayoutsNavbar) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcLayoutsNavbar
            val _cache = __ins.renderCache
            val props = __props
            val pageStyleObj = computed(fun(): UTSJSONObject {
                return (props.pageStyle ?: _uO()) as UTSJSONObject
            }
            )
            val pageScrollDirection = computed(fun(): String {
                return if (isPageScrollDisabled.value) {
                    "none"
                } else {
                    "vertical"
                }
            }
            )
            val isRefresherEnabled = computed(fun(): Boolean {
                return !isPageScrollDisabled.value && !isPageRefresherDisabled.value
            }
            )
            val rootClass = computed(fun(): String {
                var cls = "navbar-layout wtu-10fwolo-0 wtu-mswjne-1 wtu-1h86bsx-2"
                if (props.customPageClass.length > 0) {
                    cls += " " + props.customPageClass
                }
                if (props.customClass.length > 0) {
                    cls += " " + props.customClass
                }
                if (props.layoutClass.length > 0) {
                    cls += " " + props.layoutClass
                }
                return cls
            }
            )
            val rootStyle = computed(fun(): String {
                var s = ""
                if (props.customPageStyle.length > 0) {
                    s += props.customPageStyle
                }
                if (props.customStyle.length > 0) {
                    s += (if (s.length > 0) {
                        ";"
                    } else {
                        ""
                    }
                    ) + props.customStyle
                }
                if (props.layoutStyle.length > 0) {
                    s += (if (s.length > 0) {
                        ";"
                    } else {
                        ""
                    }
                    ) + props.layoutStyle
                }
                return s
            }
            )
            val isNavbarVisible = computed(fun(): Boolean {
                if (props.hideNavbar || props.hideNavBar || !props.showNavbar || !props.showNavBar) {
                    return false
                }
                return true
            }
            )
            val isTriggered = ref(false)
            fun gen_handleRefresherRefresh_fn() {
                isTriggered.value = true
                uni__emit("onPagePullDownRefresh", null)
            }
            val handleRefresherRefresh = ::gen_handleRefresherRefresh_fn
            fun gen_handleRefresherRestore_fn() {
                isTriggered.value = false
            }
            val handleRefresherRestore = ::gen_handleRefresherRestore_fn
            fun gen_onStopRefresh_fn() {
                isTriggered.value = false
            }
            val onStopRefresh = ::gen_onStopRefresh_fn
            onMounted(fun(){
                uni__on("stopPagePullDownRefresh", onStopRefresh)
            }
            )
            onUnmounted(fun(){
                uni__off("stopPagePullDownRefresh", onStopRefresh)
            }
            )
            fun gen_handleScroll_fn(e: UniScrollEvent): Unit {
                val scrollTop = e.detail.scrollTop
                uni__emit("onNavbarPageScroll", _uO("scrollTop" to Math.ceil(scrollTop)))
            }
            val handleScroll = ::gen_handleScroll_fn
            fun gen_handleScrollToLower_fn(): Unit {
                uni__emit("onNavbarReachBottom", null)
            }
            val handleScrollToLower = ::gen_handleScrollToLower_fn
            val isNativePullDown = computed(fun(): Boolean {
                val psVal = pageStyleObj.value["enablePullDownRefresh"]
                if (psVal == true || psVal == "true") {
                    return true
                }
                return false
            }
            )
            val useCustomRefresher = computed(fun(): Boolean {
                if (isNativePullDown.value) {
                    return false
                }
                return props.enablePullDownRefresh
            }
            )
            val displayTitle = computed(fun(): String {
                val titleFromStyle = (pageStyleObj.value["navigationBarTitleText"] as String?) ?: ""
                if (titleFromStyle.length > 0) {
                    return titleFromStyle
                }
                if (props.navigationBarTitleText.length > 0) {
                    return props.navigationBarTitleText
                }
                return props.title
            }
            )
            val navBgColor = computed(fun(): String {
                val bgFromStyle = (pageStyleObj.value["navigationBarBackgroundColor"] as String?) ?: ""
                if (bgFromStyle.length > 0) {
                    return bgFromStyle
                }
                if (props.navigationBarBackgroundColor.length > 0) {
                    return props.navigationBarBackgroundColor
                }
                return props.bgColor
            }
            )
            val navTitleColor = computed(fun(): String {
                val textStyleFromStyle = (pageStyleObj.value["navigationBarTextStyle"] as String?) ?: ""
                if (textStyleFromStyle.length > 0) {
                    return textStyleFromStyle
                }
                if (props.navigationBarTextStyle.length > 0) {
                    return props.navigationBarTextStyle
                }
                return props.titleColor
            }
            )
            val isCustomNav = computed(fun(): Boolean {
                val textStyleFromStyle = (pageStyleObj.value["navigationStyle"] as String?) ?: ""
                if (textStyleFromStyle.length > 0) {
                    if (textStyleFromStyle == "custom") {
                        return true
                    } else {
                        return false
                    }
                } else {
                    return false
                }
            }
            )
            val themeTokens = computed(fun(): ThemeTokens {
                return getThemeTokens(useAppStore().state.isDark)
            }
            )
            return fun(): Any? {
                return _cE("view", _uM("class" to _nC(_uA(
                    "weapp-tw-border",
                    rootClass.value
                )), "style" to _nS(rootStyle.value)), _uA(
                    if (isTrue(isCustomNav.value)) {
                        _cV(unref(GenSrcComponentsNavBarNavBarClass), _uM("key" to 0, "is-navbar-visible" to isNavbarVisible.value, "title" to displayTitle.value, "show-back" to _ctx.showBack, "title-color" to navTitleColor.value, "bg-color" to navBgColor.value, "fixed" to false, "placeholder" to false, "border" to _ctx.border), null, 8, _uA(
                            "is-navbar-visible",
                            "title",
                            "show-back",
                            "title-color",
                            "bg-color",
                            "border"
                        ))
                    } else {
                        _cC("v-if", true)
                    }
                    ,
                    if (isTrue(useCustomRefresher.value)) {
                        _cE("scroll-view", _uM("key" to 1, "direction" to pageScrollDirection.value, "class" to "wtu-10fwolo-0 wtu-mswjne-1 wtu-1h86bsx-2", "refresher-enabled" to isRefresherEnabled.value, "refresher-triggered" to isTriggered.value, "refresher-background" to themeTokens.value.bgContent, "lower-threshold" to 50, "onRefresherrefresh" to handleRefresherRefresh, "onRefresherrestore" to handleRefresherRestore, "onScroll" to handleScroll, "onScrolltolower" to handleScrollToLower), _uA(
                            renderSlot(_ctx.`$slots`, "default")
                        ), 40, _uA(
                            "direction",
                            "refresher-enabled",
                            "refresher-triggered",
                            "refresher-background"
                        ))
                    } else {
                        _cE("scroll-view", _uM("key" to 2, "class" to "wtu-10fwolo-0 wtu-mswjne-1 wtu-1h86bsx-2", "direction" to pageScrollDirection.value, "lower-threshold" to 50, "onScroll" to handleScroll, "onScrolltolower" to handleScrollToLower), _uA(
                            renderSlot(_ctx.`$slots`, "default")
                        ), 40, _uA(
                            "direction"
                        ))
                    }
                ), 6)
            }
        }
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "wtu-10fwolo-0" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "wtu-mswjne-1" to _pS(_uM("display" to "flex")), "wtu-1h86bsx-2" to _pS(_uM("flexDirection" to "column")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM("url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "type" to _uM("type" to "String", "default" to ""), "title" to _uM("type" to "String", "default" to ""), "showBack" to _uM("type" to "Boolean", "default" to true), "enablePullDownRefresh" to _uM("type" to "Boolean", "default" to false), "bgColor" to _uM("type" to "String", "default" to ""), "titleColor" to _uM("type" to "String", "default" to ""), "border" to _uM("type" to "Boolean", "default" to false), "pageStyle" to _uM("default" to fun(): UTSJSONObject {
            return (_uO())
        }
        ), "hideNavbar" to _uM("type" to "Boolean", "default" to false), "hideNavBar" to _uM("type" to "Boolean", "default" to false), "showNavbar" to _uM("type" to "Boolean", "default" to true), "showNavBar" to _uM("type" to "Boolean", "default" to true), "navigationBarTitleText" to _uM("type" to "String", "default" to ""), "navigationBarBackgroundColor" to _uM("type" to "String", "default" to ""), "navigationBarTextStyle" to _uM("type" to "String", "default" to ""), "customPageClass" to _uM("type" to "String", "default" to ""), "customClass" to _uM("type" to "String", "default" to ""), "layoutClass" to _uM("type" to "String", "default" to ""), "customPageStyle" to _uM("type" to "String", "default" to ""), "customStyle" to _uM("type" to "String", "default" to ""), "layoutStyle" to _uM("type" to "String", "default" to "")))
        var propsNeedCastKeys = _uA(
            "url",
            "linkType",
            "type",
            "title",
            "showBack",
            "enablePullDownRefresh",
            "bgColor",
            "titleColor",
            "border",
            "pageStyle",
            "hideNavbar",
            "hideNavBar",
            "showNavbar",
            "showNavBar",
            "navigationBarTitleText",
            "navigationBarBackgroundColor",
            "navigationBarTextStyle",
            "customPageClass",
            "customClass",
            "layoutClass",
            "customPageStyle",
            "customStyle",
            "layoutStyle"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
