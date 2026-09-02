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
open class GenSrcPagesBasicComponentsCard : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {}
    open var title: String by `$props`
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenSrcPagesBasicComponentsCard) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesBasicComponentsCard
            val _cache = __ins.renderCache
            return fun(): Any? {
                return _cE("view", _uM("class" to "wtu-7ensv3-0 wtu-bpibez-1 wtu-xutmkl-2 wtu-1x9quu6-3 wtu-19r8swa-4", "style" to _nS(_uM("backgroundColor" to "var(--card-bg, #ffffff)", "borderColor" to "var(--border-color, #edf2f7)"))), _uA(
                    _cE("view", _uM("class" to "wtu-1xzbcj9-5 wtu-ermdzg-6 wtu-1ejnel4-7 wtu-1gm6xh-8"), _uA(
                        _cE("view", _uM("class" to "wtu-lhmr8c-9 wtu-r622l8-a wtu-1rlqhz-b wtu-1y9hy8q-c wtu-12f14oy-d")),
                        renderSlot(_ctx.`$slots`, "title", _uO(), fun(): UTSArray<Any> {
                            return _uA(
                                _cE("text", _uM("class" to "wtu-12gzl1t-e wtu-vvdt71-f", "style" to _nS(_uM("color" to "var(--text-color, #2d3748)"))), _tD(_ctx.title), 5)
                            )
                        }
                        )
                    )),
                    renderSlot(_ctx.`$slots`, "default")
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
                return _uM("wtu-7ensv3-0" to _pS(_uM("borderTopLeftRadius" to 16, "borderTopRightRadius" to 16, "borderBottomRightRadius" to 16, "borderBottomLeftRadius" to 16)), "wtu-bpibez-1" to _pS(_uM("paddingTop" to 20, "paddingRight" to 20, "paddingBottom" to 20, "paddingLeft" to 20)), "wtu-xutmkl-2" to _pS(_uM("marginTop" to 16, "marginRight" to 16, "marginBottom" to 16, "marginLeft" to 16)), "wtu-1x9quu6-3" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderRightStyle" to "var(--tw-border-style)", "borderBottomStyle" to "var(--tw-border-style)", "borderLeftStyle" to "var(--tw-border-style)", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "wtu-19r8swa-4" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "wtu-1xzbcj9-5" to _pS(_uM("display" to "flex")), "wtu-ermdzg-6" to _pS(_uM("flexDirection" to "row")), "wtu-1ejnel4-7" to _pS(_uM("alignItems" to "center")), "wtu-1gm6xh-8" to _pS(_uM("marginBottom" to 16)), "wtu-lhmr8c-9" to _pS(_uM("width" to 4)), "wtu-r622l8-a" to _pS(_uM("height" to 16)), "wtu-1rlqhz-b" to _pS(_uM("backgroundColor" to "#3182ce")), "wtu-1y9hy8q-c" to _pS(_uM("borderTopLeftRadius" to 2, "borderTopRightRadius" to 2, "borderBottomRightRadius" to 2, "borderBottomLeftRadius" to 2)), "wtu-12f14oy-d" to _pS(_uM("marginRight" to 8)), "wtu-12gzl1t-e" to _pS(_uM("fontSize" to 16)), "wtu-vvdt71-f" to _pS(_uM("--tw-font-weight" to "var(--font-weight-bold, 700)", "fontWeight" to 700)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM("title" to _uM("type" to "String", "default" to "默认标题")))
        var propsNeedCastKeys = _uA(
            "title"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
