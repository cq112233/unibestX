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
open class GenAppku : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var showBack: Boolean by `$props`
    open var hideNavbar: Boolean by `$props`
    open var layout: String by `$props`
    open var enablePullDownRefresh: Boolean by `$props`
    open var customPageClass: String by `$props`
    open var customPageStyle: String by `$props`
    open var pageStyle: Any by `$props`
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
        var setup: (__props: GenAppku) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenAppku
            val _cache = __ins.renderCache
            val props = __props
            val appStore = useAppStore()
            val pageStyleObj = computed(fun(): UTSJSONObject {
                return (props.pageStyle ?: _uO()) as UTSJSONObject
            }
            )
            val themeStyle = computed(fun(): UTSJSONObject {
                val dark = appStore.state.isDark
                return _uO("--theme-color" to appStore.state.theme, "--bg-color" to getThemeTokens(dark).bgContent, "--text-color" to if (dark) {
                    "#e2e8f0"
                } else {
                    "#1e293b"
                }
                , "--text-secondary" to if (dark) {
                    "#94a3b8"
                } else {
                    "#64748b"
                }
                , "--card-bg" to if (dark) {
                    "#1e293b"
                } else {
                    "#ffffff"
                }
                , "--border-color" to if (dark) {
                    "#334155"
                } else {
                    "#e2e8f0"
                }
                )
            }
            )
            val isCurrentPageTabbar = ref(false)
            val uToastRef = ref<ComponentPublicInstance?>(null)
            watch(uToastRef, fun(kVal: ComponentPublicInstance?){
                if (kVal != null) {
                    registerToast(kVal!!)
                }
            }
            , WatchOptions(immediate = true))
            onMounted(fun(){
                applyNavbarTheme(appStore.state.isDark)
                try {
                    val pages = getCurrentPages()
                    if (pages.length > 0) {
                        val route = pages[pages.length - 1].route
                        if (route != null && route.length > 0) {
                            val path = if (route.startsWith("/")) {
                                route
                            } else {
                                "/" + route
                            }
                            val isTabbar = isPageTabbar(path)
                            isCurrentPageTabbar.value = isTabbar
                            if (isTabbar) {
                                syncCurIdxByCurrentPage()
                            }
                        }
                    }
                }
                 catch (_e: Throwable) {}
                if (uToastRef.value != null) {
                    registerToast(uToastRef.value!!)
                }
            }
            )
            onMounted(fun(){
                if (uToastRef.value != null) {
                    registerToast(uToastRef.value!!)
                }
                nextTick(fun(){
                    if (uToastRef.value != null) {
                        registerToast(uToastRef.value!!)
                    }
                }
                )
            }
            )
            onUnmounted(fun(){
                if (uToastRef.value != null) {
                    unregisterToast(uToastRef.value!!)
                }
            }
            )
            onShow(fun(){
                if (uToastRef.value != null) {
                    registerToast(uToastRef.value!!)
                }
                applyNavbarTheme(appStore.state.isDark)
            }
            )
            watch(fun(): Boolean {
                return appStore.state.isDark
            }
            , fun(newVal: Boolean){
                applyNavbarTheme(newVal)
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
            onShow(fun(){
                console.log("AppKu:onShow")
                setTimeout(fun(){
                    updateAvailableHeight(AppKuHeightProps(hideNavbar = props.hideNavbar, pageStyle = (props.pageStyle ?: _uO()) as UTSJSONObject, layout = props.layout), selectedTabbarStrategy)
                }
                , 150)
            }
            )
            return fun(): Any? {
                return _cE("view", _uM("class" to _nC(_uA(
                    "weapp-tw-border root-container flex flex-col flex-1",
                    _uM("dark" to unref(appStore).state.isDark)
                )), "style" to _nS(_uA(
                    _uM("flex" to "1", "display" to "flex", "flex-direction" to "column"),
                    themeStyle.value
                ))), _uA(
                    _cE("scroll-view", _uM("direction" to "vertical", "class" to "flex-1", "style" to _nS(_uM("flex" to "1"))), _uA(
                        renderSlot(_ctx.`$slots`, "default")
                    ), 4),
                    if (isTrue(unref(customTabbarEnable) && isCurrentPageTabbar.value)) {
                        _cE(Fragment, _uM("key" to 0), _uA(
                            if (isTrue(unref(isCapsuleTabbar))) {
                                _cV(unref(GenSrcTabbarCustomIndexClass), _uM("key" to 0))
                            } else {
                                _cV(unref(GenSrcTabbarIndexClass), _uM("key" to 1))
                            }
                        ), 64)
                    } else {
                        _cC("v-if", true)
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
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "root-container" to _pS(_uM("backgroundColor" to "var(--bg-color, #f5f6fa)")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "showBack" to _uM("type" to "Boolean", "default" to true), "hideNavbar" to _uM("type" to "Boolean", "default" to false), "layout" to _uM("type" to "String", "default" to ""), "enablePullDownRefresh" to _uM("type" to "Boolean", "default" to false), "customPageClass" to _uM("type" to "String", "default" to ""), "customPageStyle" to _uM("type" to "String", "default" to ""), "pageStyle" to _uM("default" to fun(): UTSJSONObject {
            return (_uO())
        }
        )))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "showBack",
            "hideNavbar",
            "layout",
            "enablePullDownRefresh",
            "customPageClass",
            "customPageStyle",
            "pageStyle"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
