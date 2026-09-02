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
import io.dcloud.uniapp.extapi.hideTabBar as uni_hideTabBar
import io.dcloud.uniapp.extapi.navigateTo as uni_navigateTo
import io.dcloud.uniapp.extapi.switchTab as uni_switchTab
open class GenSrcTabbarIndex : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {}
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenSrcTabbarIndex) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcTabbarIndex
            val _cache = __ins.renderCache
            val TABBAR_HEIGHT: Number = 50
            val TABBAR_CONTAINER_HEIGHT: Number = 80
            val themeTokens = computed(fun(): ThemeTokens {
                return getThemeTokens(useAppStore().state.isDark)
            }
            )
            val safeAreaBottom = computed<Number>(fun(): Number {
                val insets = safeAreaInsets.value
                if (insets != null) {
                    return insets.bottom
                }
                return 0
            }
            )
            val tabbarPlaceholderHeight = computed<Number>(fun(): Number {
                return TABBAR_HEIGHT + safeAreaBottom.value
            }
            )
            fun gen_handleClickBulge_fn() {
                uni_navigateTo(NavigateToOptions(url = "/src/pages/ai/ai"))
            }
            val handleClickBulge = ::gen_handleClickBulge_fn
            fun gen_handleClick_fn(index: Number) {
                if (index == curIdx.value) {
                    return
                }
                val list = tabbarList
                if (list.length <= index) {
                    return
                }
                if (list[index].isBulge) {
                    handleClickBulge()
                    return
                }
                val url = list[index].pagePath
                setCurIdx(index)
                uni_switchTab(SwitchTabOptions(url = url))
            }
            val handleClick = ::gen_handleClick_fn
            fun gen_safeHideNativeTabBar_fn(): Unit {
                if (!needHideNativeTabbar) {
                    return
                }
                try {
                    uni_hideTabBar(HideTabBarOptions(animation = false, fail = fun(err: Any){
                        console.log("hideTabBar fail: ", err)
                    }
                    ))
                }
                 catch (e: Throwable) {}
            }
            val safeHideNativeTabBar = ::gen_safeHideNativeTabBar_fn
            onMounted(fun(){
                syncCurIdxByCurrentPage()
                safeHideNativeTabBar()
            }
            )
            return fun(): Any? {
                return _cE("view", _uM("class" to "tabbar-placeholder", "style" to _nS(_uM("height" to ("" + unref(tabbarPlaceholderHeight) + "px")))), _uA(
                    _cE("view", _uM("class" to "tabbar-container", "style" to _nS(_uM("height" to ("" + (TABBAR_CONTAINER_HEIGHT + unref(safeAreaBottom)) + "px")))), _uA(
                        _cE("view", _uM("class" to "tabbar-bg", "style" to _nS(_uM("height" to ("" + (TABBAR_HEIGHT + unref(safeAreaBottom)) + "px"), "backgroundColor" to unref(themeTokens).tabBg, "borderTopColor" to unref(themeTokens).tabBorder))), null, 4),
                        _cE("view", _uM("class" to "tabbar-inner"), _uA(
                            _cE(Fragment, null, RenderHelpers.renderList(unref(tabbarList), fun(item, index, __index, _cached): Any {
                                return _cE("view", _uM("key" to index, "class" to _nC(_uA(
                                    "tabbar-item",
                                    _uM("tabbar-item-bulge" to item.isBulge)
                                )), "onClick" to fun(){
                                    handleClick(index)
                                }
                                ), _uA(
                                    _cV(unref(GenSrcTabbarTabbarItemClass), _uM("item" to item, "index" to index, "is-bulge" to item.isBulge), null, 8, _uA(
                                        "item",
                                        "index",
                                        "is-bulge"
                                    ))
                                ), 10, _uA(
                                    "onClick"
                                ))
                            }
                            ), 128)
                        )),
                        _cE("view", _uM("class" to "safe-area-bg", "style" to _nS(_uM("height" to ("" + unref(safeAreaBottom) + "px"), "backgroundColor" to unref(themeTokens).tabBg))), null, 4)
                    ), 4)
                ), 4)
            }
        }
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("tabbar-placeholder" to _pS(_uM("width" to "100%")), "tabbar-container" to _pS(_uM("position" to "fixed", "bottom" to 0, "left" to 0, "right" to 0, "zIndex" to 1, "backgroundColor" to "rgba(0,0,0,0)", "flexDirection" to "column")), "tabbar-bg" to _pS(_uM("position" to "absolute", "bottom" to 0, "left" to 0, "right" to 0, "borderTopWidth" to "1rpx", "borderTopStyle" to "solid", "zIndex" to 1)), "tabbar-inner" to _pS(_uM("flexDirection" to "row", "height" to 80, "alignItems" to "flex-end", "zIndex" to 2)), "tabbar-item" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "alignItems" to "center", "justifyContent" to "center", "height" to 50)), "tabbar-item-bulge" to _pS(_uM("height" to 80)), "safe-area-bg" to _pS(_uM("zIndex" to 1)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM())
        var propsNeedCastKeys: UTSArray<String> = _uA()
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
