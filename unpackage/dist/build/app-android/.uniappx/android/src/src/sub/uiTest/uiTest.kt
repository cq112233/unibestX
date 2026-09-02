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
open class GenSrcSubUiTestUiTest : BasePage {
    constructor(__ins: ComponentInternalInstance, __renderer: String?) : super(__ins, __renderer) {}
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenSrcSubUiTestUiTest) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcSubUiTestUiTest
            val _cache = __ins.renderCache
            val logoSrc = default__5
            return fun(): Any? {
                return _cV(unref(GenAppkuClass), null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cV(unref(GenSrcLayoutsNavbarClass), _uM("show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to false, "page-style" to _uO("navigationBarTitleText" to "UI 测试", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "p-_b16px_B min-h-screen bg-_b_hf8fafc_B"), _uA(
                                    _cE("text", _uM("class" to "text-_b18px_B font-bold text-_b_h334155_B mb-_b16px_B"), "Image 标签测试"),
                                    _cE("view", _uM("class" to "mb-_b16px_B p-_b12px_B bg-white rounded-_b8px_B shadow-xs"), _uA(
                                        _cE("text", _uM("class" to "text-_b14px_B font-bold text-_b_h64748b_B mb-_b8px_B"), "1. 相对路径引用 (./images/logo.png)"),
                                        _cE("image", _uM("src" to default__5, "style" to _nS(_uM("width" to "80px", "height" to "80px")), "mode" to "aspectFit"), null, 4)
                                    )),
                                    _cE("view", _uM("class" to "mb-_b16px_B p-_b12px_B bg-white rounded-_b8px_B shadow-xs"), _uA(
                                        _cE("text", _uM("class" to "text-_b14px_B font-bold text-_b_h64748b_B mb-_b8px_B"), "2. 绝对静态路径 (/static/logo.png)"),
                                        _cE("image", _uM("src" to "/static/logo.png", "style" to _nS(_uM("width" to "80px", "height" to "80px")), "mode" to "aspectFit"), null, 4)
                                    )),
                                    _cE("view", _uM("class" to "mb-_b16px_B p-_b12px_B bg-white rounded-_b8px_B shadow-xs"), _uA(
                                        _cE("text", _uM("class" to "text-_b14px_B font-bold text-_b_h64748b_B mb-_b8px_B"), "3. JS 变量绑定 (imported logo)"),
                                        _cE("image", _uM("src" to unref(logoSrc), "style" to _nS(_uM("width" to "80px", "height" to "80px")), "mode" to "aspectFit"), null, 12, _uA(
                                            "src"
                                        ))
                                    ))
                                ))
                            )
                        }
                        ), "_" to 1))
                    )
                }
                ), "_" to 1))
            }
        }
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("p-_b16px_B" to _pS(_uM("paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 16, "paddingLeft" to 16)), "bg-_b_hf8fafc_B" to _pS(_uM("backgroundColor" to "#f8fafc")), "text-_b18px_B" to _pS(_uM("fontSize" to 18)), "font-bold" to _pS(_uM("--tw-font-weight" to "700", "fontWeight" to 700)), "text-_b_h334155_B" to _pS(_uM("color" to "#334155")), "mb-_b16px_B" to _pS(_uM("marginBottom" to 16)), "p-_b12px_B" to _pS(_uM("paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12)), "bg-white" to _pS(_uM("backgroundColor" to "#ffffff")), "rounded-_b8px_B" to _pS(_uM("borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "shadow-xs" to _pS(_uM("--tw-inset-shadow" to "0 0 #0000", "--tw-inset-ring-shadow" to "0 0 #0000", "--tw-ring-offset-shadow" to "0 0 #0000", "--tw-ring-shadow" to "0 0 #0000", "--tw-shadow" to "0 1px 2px 0 rgba(0, 0, 0, 0.05)", "boxShadow" to "var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)")), "text-_b14px_B" to _pS(_uM("fontSize" to 14)), "text-_b_h64748b_B" to _pS(_uM("color" to "#64748b")), "mb-_b8px_B" to _pS(_uM("marginBottom" to 8)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM())
        var propsNeedCastKeys: UTSArray<String> = _uA()
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
