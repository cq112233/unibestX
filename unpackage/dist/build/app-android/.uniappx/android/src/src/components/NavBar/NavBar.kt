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
import io.dcloud.uniapp.extapi.navigateBack as uni_navigateBack
import io.dcloud.uniapp.extapi.reLaunch as uni_reLaunch
open class GenSrcComponentsNavBarNavBar : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {}
    open var title: String by `$props`
    open var titleColor: String by `$props`
    open var bgColor: String by `$props`
    open var fixed: Boolean by `$props`
    open var placeholder: Boolean by `$props`
    open var showBack: Boolean by `$props`
    open var border: Boolean by `$props`
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenSrcComponentsNavBarNavBar) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcComponentsNavBarNavBar
            val _cache = __ins.renderCache
            val props = __props
            val themeTokens = computed(fun(): ThemeTokens {
                return getThemeTokens(useAppStore().state.isDark)
            }
            )
            val effectiveBgColor = computed(fun(): String {
                return if (props.bgColor != "") {
                    props.bgColor
                } else {
                    themeTokens.value.navBg
                }
            }
            )
            val effectiveTitleColor = computed(fun(): String {
                return if (props.titleColor != "") {
                    props.titleColor
                } else {
                    themeTokens.value.navText
                }
            }
            )
            val statusBarHeight = computed<Number>(fun(): Number {
                val insets = safeAreaInsets.value
                if (insets != null && insets.top > 0) {
                    return insets.top
                }
                val info = systemInfo.value
                if (info != null && info.statusBarHeight > 0) {
                    return info.statusBarHeight
                }
                return 0
            }
            )
            fun gen_handleBack_fn() {
                if (!props.showBack) {
                    return
                }
                val pages = getCurrentPages()
                if (pages.length > 1) {
                    uni_navigateBack(NavigateBackOptions(delta = 1))
                } else {
                    uni_reLaunch(ReLaunchOptions(url = "/src/pages/index/index"))
                }
            }
            val handleBack = ::gen_handleBack_fn
            return fun(): Any? {
                return _cE("view", _uM("class" to "nav-bar"), _uA(
                    _cE("view", _uM("class" to _nC(if (_ctx.fixed) {
                        "navbar-container navbar-fixed"
                    } else {
                        "navbar-container"
                    }
                    ), "style" to _nS(_uM("backgroundColor" to effectiveBgColor.value, "borderBottomWidth" to if (_ctx.border) {
                        "1px"
                    } else {
                        "0px"
                    }
                    , "borderBottomStyle" to if (_ctx.border) {
                        "solid"
                    } else {
                        "none"
                    }
                    , "borderBottomColor" to if (_ctx.border) {
                        "#e2e8f0"
                    } else {
                        "transparent"
                    }
                    ))), _uA(
                        _cE("view", _uM("style" to _nS(_uM("height" to ("" + statusBarHeight.value + "px")))), null, 4),
                        _cE("view", _uM("class" to "navbar-content"), _uA(
                            _cE("view", _uM("class" to "navbar-left"), _uA(
                                renderSlot(_ctx.`$slots`, "left", _uO(), fun(): UTSArray<Any> {
                                    return _uA(
                                        if (isTrue(_ctx.showBack)) {
                                            _cE("view", _uM("key" to 0, "class" to "back-btn-wrapper", "onClick" to handleBack), _uA(
                                                _cE("view", _uM("class" to "back-arrow", "style" to _nS(_uM("borderLeftColor" to effectiveTitleColor.value, "borderBottomColor" to effectiveTitleColor.value))), null, 4)
                                            ))
                                        } else {
                                            _cC("v-if", true)
                                        }
                                    )
                                }
                                )
                            )),
                            _cE("view", _uM("class" to "navbar-title"), _uA(
                                renderSlot(_ctx.`$slots`, "mid", _uO(), fun(): UTSArray<Any> {
                                    return _uA(
                                        renderSlot(_ctx.`$slots`, "default", _uO(), fun(): UTSArray<Any> {
                                            return _uA(
                                                if (_ctx.title.length > 0) {
                                                    _cE("text", _uM("key" to 0, "class" to "title-text", "style" to _nS(_uM("color" to effectiveTitleColor.value))), _tD(_ctx.title), 5)
                                                } else {
                                                    _cC("v-if", true)
                                                }
                                            )
                                        }
                                        )
                                    )
                                }
                                )
                            )),
                            _cE("view", _uM("class" to "navbar-right"), _uA(
                                renderSlot(_ctx.`$slots`, "right")
                            ))
                        ))
                    ), 6),
                    if (isTrue(_ctx.fixed && _ctx.placeholder)) {
                        _cE("view", _uM("key" to 0, "style" to _nS(_uM("height" to ("" + (statusBarHeight.value + 44) + "px")))), null, 4)
                    } else {
                        _cC("v-if", true)
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
                return _uM("nav-bar" to _pS(_uM("width" to "100%")), "navbar-container" to _pS(_uM("width" to "100%", "display" to "flex", "flexDirection" to "column")), "navbar-fixed" to _pS(_uM("position" to "fixed", "top" to 0, "left" to 0, "right" to 0, "zIndex" to 999)), "navbar-content" to _pS(_uM("height" to 44, "display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "center", "position" to "relative", "width" to "100%")), "navbar-left" to _pS(_uM("position" to "absolute", "left" to 0, "top" to 0, "bottom" to 0, "width" to 60, "display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "flex-start", "zIndex" to 10)), "back-btn-wrapper" to _pS(_uM("paddingTop" to 10, "paddingRight" to 15, "paddingBottom" to 10, "paddingLeft" to 15, "display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "center")), "back-arrow" to _pS(_uM("width" to 10, "height" to 10, "borderLeftWidth" to 2, "borderLeftStyle" to "solid", "borderLeftColor" to "#1e293b", "borderBottomWidth" to 2, "borderBottomStyle" to "solid", "borderBottomColor" to "#1e293b", "transform" to "rotate(45deg)")), "navbar-title" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "center", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "height" to "100%", "paddingLeft" to 60, "paddingRight" to 60)), "title-text" to _pS(_uM("fontSize" to 17, "fontWeight" to 600, "textOverflow" to "ellipsis")), "navbar-right" to _pS(_uM("position" to "absolute", "right" to 0, "top" to 0, "bottom" to 0, "width" to 60, "display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "flex-end", "zIndex" to 10, "paddingRight" to 15)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM("title" to _uM("type" to "String", "default" to ""), "titleColor" to _uM("type" to "String", "default" to ""), "bgColor" to _uM("type" to "String", "default" to ""), "fixed" to _uM("type" to "Boolean", "default" to true), "placeholder" to _uM("type" to "Boolean", "default" to true), "showBack" to _uM("type" to "Boolean", "default" to true), "border" to _uM("type" to "Boolean", "default" to false)))
        var propsNeedCastKeys = _uA(
            "title",
            "titleColor",
            "bgColor",
            "fixed",
            "placeholder",
            "showBack",
            "border"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
