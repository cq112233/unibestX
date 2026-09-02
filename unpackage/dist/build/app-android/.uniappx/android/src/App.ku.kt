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
    constructor(__ins: ComponentInternalInstance) : super(__ins) {}
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenAppku) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenAppku
            val _cache = __ins.renderCache
            val appStore = useAppStore()
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
            onBeforeMount(fun(){
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
            )
            onShow(fun(){
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
            return fun(): Any? {
                return _cE("view", _uM("class" to _nC(_uA(
                    "root-container flex flex-col flex-1",
                    _uM("dark" to unref(appStore).state.isDark)
                )), "style" to _nS(_uA(
                    _uM("flex" to "1"),
                    themeStyle.value
                ))), _uA(
                    _cE("scroll-view", _uM("direction" to "vertical", "class" to "flex-1", "style" to _nS(_uM("flex" to "1"))), _uA(
                        renderSlot(_ctx.`$slots`, "default")
                    ), 4),
                    if (isTrue(unref(customTabbarEnable) && isCurrentPageTabbar.value)) {
                        _cV(unref(GenSrcTabbarIndexClass), _uM("key" to 0))
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
                return _uM("root-container" to _pS(_uM("backgroundColor" to "var(--bg-color, #f5f6fa)")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM())
        var propsNeedCastKeys: UTSArray<String> = _uA()
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
