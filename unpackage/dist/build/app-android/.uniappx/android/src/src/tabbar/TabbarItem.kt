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
open class GenSrcTabbarTabbarItem : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {}
    open var item: Any by `$props`
    open var index: Number by `$props`
    open var isBulge: Boolean by `$props`
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenSrcTabbarTabbarItem) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcTabbarTabbarItem
            val _cache = __ins.renderCache
            val props = __props
            val tabbarItem = computed(fun(): CustomTabBarItem {
                return props.item as CustomTabBarItem
            }
            )
            val themeTokens = computed(fun(): ThemeTokens {
                return getThemeTokens(useAppStore().state.isDark)
            }
            )
            fun gen_getIcon_fn(): String {
                if (curIdx.value == props.index && tabbarItem.value.iconActive.length > 0) {
                    return tabbarItem.value.iconActive
                }
                return tabbarItem.value.icon
            }
            val getIcon = ::gen_getIcon_fn
            fun gen_getActiveColor_fn(): String {
                return if (curIdx.value == props.index) {
                    themeColor.value
                } else {
                    themeTokens.value.tabColor
                }
            }
            val getActiveColor = ::gen_getActiveColor_fn
            fun gen_isDotBadge_fn(): Boolean {
                return tabbarItem.value.badge != null && tabbarItem.value.badge == "dot"
            }
            val isDotBadge = ::gen_isDotBadge_fn
            fun gen_isNumberBadge_fn(): Boolean {
                return tabbarItem.value.badge != null && tabbarItem.value.badge != "dot"
            }
            val isNumberBadge = ::gen_isNumberBadge_fn
            fun gen_getBadgeText_fn(): String {
                val badge = tabbarItem.value.badge
                if (badge == null || badge == "dot") {
                    return ""
                }
                if (UTSAndroid.`typeof`(badge) == "number") {
                    val num = badge as Number
                    if (num > 99) {
                        return "99+"
                    }
                    return "" + num
                }
                return "" + badge
            }
            val getBadgeText = ::gen_getBadgeText_fn
            fun gen_getText_fn(): String {
                return `$t`(tabbarItem.value.text)
            }
            val getText = ::gen_getText_fn
            return fun(): Any? {
                val _component_uni_icons = resolveEasyComponent("uni-icons", GenUniModulesUniIconsComponentsUniIconsUniIconsClass)
                return _cE("view", _uM("class" to "tabbar-item-wrapper", "style" to _nS(_uM("width" to "100%", "height" to "100%", "align-items" to "center", "justify-content" to "center"))), _uA(
                    if (isTrue(props.isBulge)) {
                        _cE("view", _uM("key" to 0, "class" to "bulge-item"), _uA(
                            _cE("view", _uM("class" to "bulge-btn"), _uA(
                                _cE("text", _uM("class" to "ai-btn-text"), "AI")
                            ))
                        ))
                    } else {
                        _cE("view", _uM("key" to 1, "class" to "tabbar-item-inner"), _uA(
                            if (unref(tabbarItem).iconType === "image") {
                                _cE("image", _uM("key" to 0, "src" to getIcon(), "mode" to "scaleToFill", "class" to "icon-normal"), null, 8, _uA(
                                    "src"
                                ))
                            } else {
                                _cC("v-if", true)
                            }
                            ,
                            if (unref(tabbarItem).iconType === "icon") {
                                _cE("view", _uM("key" to 1, "class" to "icon-normal", "style" to _nS(_uM("align-items" to "center", "justify-content" to "center"))), _uA(
                                    _cV(_component_uni_icons, _uM("type" to getIcon(), "size" to 24, "color" to getActiveColor()), null, 8, _uA(
                                        "type",
                                        "color"
                                    ))
                                ), 4)
                            } else {
                                _cC("v-if", true)
                            }
                            ,
                            _cE("text", _uM("class" to "tabbar-text", "style" to _nS(_uM("color" to getActiveColor()))), _tD(getText()), 5),
                            if (isTrue(isDotBadge())) {
                                _cE("view", _uM("key" to 2, "class" to "badge-dot"))
                            } else {
                                _cC("v-if", true)
                            }
                            ,
                            if (isTrue(isNumberBadge())) {
                                _cE("view", _uM("key" to 3, "class" to "badge-count"), _uA(
                                    _cE("text", _uM("class" to "badge-count-text"), _tD(getBadgeText()), 1)
                                ))
                            } else {
                                _cC("v-if", true)
                            }
                        ))
                    }
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
                return _uM("tabbar-item-inner" to _pS(_uM("alignItems" to "center", "justifyContent" to "center", "position" to "relative")), "icon-normal" to _pS(_uM("width" to 24, "height" to 24)), "tabbar-text" to _pS(_uM("fontSize" to 10, "marginTop" to 2, "textAlign" to "center")), "badge-dot" to _pS(_uM("position" to "absolute", "top" to 0, "right" to 0, "width" to 8, "height" to 8, "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8, "backgroundColor" to "#f56c6c")), "badge-count" to _pS(_uM("position" to "absolute", "top" to 0, "right" to -6, "height" to 16, "paddingLeft" to 4, "paddingRight" to 4, "borderTopLeftRadius" to 16, "borderTopRightRadius" to 16, "borderBottomRightRadius" to 16, "borderBottomLeftRadius" to 16, "backgroundColor" to "#f56c6c", "alignItems" to "center", "justifyContent" to "center")), "badge-count-text" to _pS(_uM("fontSize" to 10, "color" to "#ffffff", "textAlign" to "center")), "bulge-item" to _pS(_uM("position" to "relative", "width" to "100%", "height" to 80, "alignItems" to "center")), "bulge-btn" to _pS(_uM("position" to "absolute", "top" to 18, "width" to 52, "height" to 52, "borderTopLeftRadius" to 26, "borderTopRightRadius" to 26, "borderBottomRightRadius" to 26, "borderBottomLeftRadius" to 26, "backgroundImage" to "linear-gradient(to bottom right, #0ea5e9, #2563eb)", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid", "borderTopColor" to "rgba(255,255,255,0.5)", "borderRightColor" to "rgba(255,255,255,0.5)", "borderBottomColor" to "rgba(255,255,255,0.5)", "borderLeftColor" to "rgba(255,255,255,0.5)", "alignItems" to "center", "justifyContent" to "center", "boxShadow" to "0px 3px 8px rgba(37, 99, 235, 0.25)")), "ai-btn-text" to _pS(_uM("color" to "#ffffff", "fontSize" to 14, "fontWeight" to 600, "letterSpacing" to 1, "textAlign" to "center")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM("item" to _uM("required" to true), "index" to _uM("type" to "Number", "required" to true), "isBulge" to _uM("type" to "Boolean", "default" to false)))
        var propsNeedCastKeys = _uA(
            "isBulge"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
