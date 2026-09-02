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
open class GenSrcPagesBasicComponentsIconDemoCard : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {}
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenSrcPagesBasicComponentsIconDemoCard) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesBasicComponentsIconDemoCard
            val _cache = __ins.renderCache
            val iconDemoTitle = computed(fun(): String {
                return `$t`("basic.iconDemoTitle")
            }
            )
            val svgAuthWarning = computed(fun(): String {
                return `$t`("basic.svgAuthWarning")
            }
            )
            return fun(): Any? {
                val _component_uni_icons = resolveEasyComponent("uni-icons", GenUniModulesUniIconsComponentsUniIconsUniIconsClass)
                val _component_l_icon = resolveEasyComponent("l-icon", GenUniModulesLimeIconComponentsLIconLIconClass)
                return _cV(unref(GenSrcPagesBasicComponentsCardClass), _uM("title" to iconDemoTitle.value), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cE("view", _uM("class" to "wtu-edh1ze-0 wtu-r2og8u-1 wtu-1c6w9qp-2 wtu-e32pgj-3"), _uA(
                            _cE("view", _uM("class" to "wtu-edh1ze-0 wtu-r2og8u-1"), _uA(
                                _cE("view", _uM("class" to "wtu-jjoyn4-4 wtu-ubwupt-5 wtu-1u0ls6d-6 wtu-1i1fm6y-7 wtu-b8dflc-8")),
                                _cE("text", _uM("class" to "wtu-kba525-9 wtu-1dcwght-a wtu-1lor33j-b"), "uni-icon")
                            )),
                            _cE("view", _uM("class" to "wtu-edh1ze-0 wtu-r2og8u-1"), _uA(
                                _cV(_component_uni_icons, _uM("type" to "contact", "size" to "26", "style" to _nS(_uM("color" to "#3b82f6", "margin-right" to "8px"))), null, 8, _uA(
                                    "style"
                                )),
                                _cE("text", _uM("class" to "wtu-lbze2f-c wtu-1uc842y-d"), "contact")
                            ))
                        )),
                        _cE("view", _uM("class" to "wtu-3wtn0e-e wtu-u07xcs-f")),
                        _cE("view", _uM("class" to "wtu-edh1ze-0 wtu-r2og8u-1 wtu-1c6w9qp-2 wtu-e32pgj-3"), _uA(
                            _cE("view", _uM("class" to "wtu-edh1ze-0 wtu-r2og8u-1"), _uA(
                                _cE("view", _uM("class" to "wtu-jjoyn4-4 wtu-ubwupt-5 wtu-1u0ls6d-6 wtu-vs4ahm-g wtu-b8dflc-8")),
                                _cE("view", _uM("class" to "wtu-no3ft0-h"), _uA(
                                    _cE("text", _uM("class" to "wtu-kba525-9 wtu-1dcwght-a wtu-1lor33j-b"), "lime-icon"),
                                    _cE("view", _uM("class" to "wtu-159q4wc-i wtu-1wj9wbu-j wtu-dktp6a-k wtu-vjo5gh-l wtu-bevybu-m wtu-p0dhsv-n wtu-kl7gdk-o wtu-11fbxns-p wtu-1da3t5c-q"), _uA(
                                        _cE("text", _uM("class" to "wtu-12mw64h-r wtu-nnvrio-s"), _tD(svgAuthWarning.value), 1)
                                    ))
                                ))
                            )),
                            _cE("view", _uM("class" to "wtu-edh1ze-0 wtu-r2og8u-1"), _uA(
                                _cV(_component_l_icon, _uM("name" to "circle", "size" to "24", "style" to _nS(_uM("color" to "#10b981", "margin-right" to "8px"))), null, 8, _uA(
                                    "style"
                                )),
                                _cE("text", _uM("class" to "wtu-lbze2f-c wtu-1uc842y-d"), "circle")
                            ))
                        )),
                        _cE("view", _uM("class" to "wtu-3wtn0e-e wtu-u07xcs-f"))
                    )
                }
                ), "_" to 1), 8, _uA(
                    "title"
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
                return _uM("wtu-edh1ze-0" to _pS(_uM("flexDirection" to "row")), "wtu-r2og8u-1" to _pS(_uM("alignItems" to "center")), "wtu-1c6w9qp-2" to _pS(_uM("justifyContent" to "space-between")), "wtu-e32pgj-3" to _pS(_uM("paddingTop" to 12, "paddingBottom" to 12)), "wtu-jjoyn4-4" to _pS(_uM("width" to 6)), "wtu-ubwupt-5" to _pS(_uM("height" to 6)), "wtu-1u0ls6d-6" to _pS(_uM("borderTopLeftRadius" to 3, "borderTopRightRadius" to 3, "borderBottomRightRadius" to 3, "borderBottomLeftRadius" to 3)), "wtu-1i1fm6y-7" to _pS(_uM("backgroundColor" to "#3b82f6")), "wtu-b8dflc-8" to _pS(_uM("marginRight" to 8)), "wtu-kba525-9" to _pS(_uM("fontSize" to 14)), "wtu-1dcwght-a" to _pS(_uM("color" to "#475569")), "wtu-1lor33j-b" to _pS(_uM("--tw-font-weight" to "var(--font-weight-medium, 500)", "fontWeight" to 500)), "wtu-lbze2f-c" to _pS(_uM("fontSize" to 12)), "wtu-1uc842y-d" to _pS(_uM("color" to "#94a3b8")), "wtu-3wtn0e-e" to _pS(_uM("height" to 1)), "wtu-u07xcs-f" to _pS(_uM("backgroundColor" to "#f1f5f9")), "wtu-vs4ahm-g" to _pS(_uM("backgroundColor" to "#10b981")), "wtu-no3ft0-h" to _pS(_uM("flexDirection" to "column")), "wtu-159q4wc-i" to _pS(_uM("backgroundColor" to "#fff1f2")), "wtu-1wj9wbu-j" to _pS(_uM("borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4, "borderBottomLeftRadius" to 4)), "wtu-dktp6a-k" to _pS(_uM("paddingTop" to 2, "paddingBottom" to 2)), "wtu-vjo5gh-l" to _pS(_uM("paddingLeft" to 6, "paddingRight" to 6)), "wtu-bevybu-m" to _pS(_uM("marginTop" to 4)), "wtu-p0dhsv-n" to _pS(_uM("alignSelf" to "flex-start")), "wtu-kl7gdk-o" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderRightStyle" to "var(--tw-border-style)", "borderBottomStyle" to "var(--tw-border-style)", "borderLeftStyle" to "var(--tw-border-style)", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "wtu-11fbxns-p" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "wtu-1da3t5c-q" to _pS(_uM("borderTopColor" to "#ffe4e6", "borderRightColor" to "#ffe4e6", "borderBottomColor" to "#ffe4e6", "borderLeftColor" to "#ffe4e6")), "wtu-12mw64h-r" to _pS(_uM("fontSize" to 10)), "wtu-nnvrio-s" to _pS(_uM("color" to "#f43f5e")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM())
        var propsNeedCastKeys: UTSArray<String> = _uA()
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
