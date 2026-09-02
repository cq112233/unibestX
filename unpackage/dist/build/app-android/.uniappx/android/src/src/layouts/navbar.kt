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
    constructor(__ins: ComponentInternalInstance) : super(__ins) {}
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
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenSrcLayoutsNavbar) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcLayoutsNavbar
            val _cache = __ins.renderCache
            val props = __props
            console.log(props, "props")
            val pageScrollDirection = computed(fun(): String {
                return if (isPageScrollDisabled.value) {
                    "none"
                } else {
                    "vertical"
                }
            }
            )
            val isRefresherEnabled = computed(fun(): Boolean {
                return !isPageScrollDisabled.value
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
            val pageStyleObj = computed(fun(): UTSJSONObject {
                return (props.pageStyle ?: _uO()) as UTSJSONObject
            }
            )
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
            val themeTokens = computed(fun(): ThemeTokens {
                return getThemeTokens(useAppStore().state.isDark)
            }
            )
            return fun(): Any? {
                val _component_NavBar = resolveEasyComponent("NavBar", GenSrcComponentsNavBarNavBarClass)
                return _cE("view", _uM("class" to "navbar-layout wtu-10fwolo-0 wtu-mswjne-1 wtu-1h86bsx-2"), _uA(
                    if (isTrue(isNavbarVisible.value)) {
                        _cV(_component_NavBar, _uM("key" to 0, "title" to displayTitle.value, "show-back" to _ctx.showBack, "title-color" to navTitleColor.value, "bg-color" to navBgColor.value, "fixed" to false, "placeholder" to false, "border" to _ctx.border), null, 8, _uA(
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
                        _cE("scroll-view", _uM("key" to 1, "direction" to pageScrollDirection.value, "class" to "wtu-10fwolo-0", "refresher-enabled" to isRefresherEnabled.value, "refresher-triggered" to isTriggered.value, "refresher-background" to themeTokens.value.bgContent, "onRefresherrefresh" to handleRefresherRefresh, "onRefresherrestore" to handleRefresherRestore), _uA(
                            renderSlot(_ctx.`$slots`, "default")
                        ), 40, _uA(
                            "direction",
                            "refresher-enabled",
                            "refresher-triggered",
                            "refresher-background"
                        ))
                    } else {
                        _cE("scroll-view", _uM("key" to 2, "class" to "wtu-10fwolo-0 wtu-mswjne-1 wtu-1h86bsx-2", "direction" to pageScrollDirection.value), _uA(
                            renderSlot(_ctx.`$slots`, "default")
                        ), 8, _uA(
                            "direction"
                        ))
                    }
                ))
            }
        }
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("wtu-10fwolo-0" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "wtu-mswjne-1" to _pS(_uM("display" to "flex")), "wtu-1h86bsx-2" to _pS(_uM("flexDirection" to "column")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM("type" to _uM("type" to "String", "default" to ""), "title" to _uM("type" to "String", "default" to ""), "showBack" to _uM("type" to "Boolean", "default" to true), "enablePullDownRefresh" to _uM("type" to "Boolean", "default" to false), "bgColor" to _uM("type" to "String", "default" to ""), "titleColor" to _uM("type" to "String", "default" to ""), "border" to _uM("type" to "Boolean", "default" to false), "pageStyle" to _uM("default" to fun(): UTSJSONObject {
            return (_uO())
        }
        ), "hideNavbar" to _uM("type" to "Boolean", "default" to false), "hideNavBar" to _uM("type" to "Boolean", "default" to false), "showNavbar" to _uM("type" to "Boolean", "default" to true), "showNavBar" to _uM("type" to "Boolean", "default" to true), "navigationBarTitleText" to _uM("type" to "String", "default" to ""), "navigationBarBackgroundColor" to _uM("type" to "String", "default" to ""), "navigationBarTextStyle" to _uM("type" to "String", "default" to "")))
        var propsNeedCastKeys = _uA(
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
            "navigationBarTextStyle"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
