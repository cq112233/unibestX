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
open class GenSrcSubTestTest : BasePage {
    constructor(__ins: ComponentInternalInstance, __renderer: String?) : super(__ins, __renderer) {}
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenSrcSubTestTest) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcSubTestTest
            val _cache = __ins.renderCache
            val optionKeys = ref(_uA<String>())
            val queryOptions = ref<UTSJSONObject?>(null)
            onLoad(fun(options: UTSJSONObject?){
                console.log("test page onLoad options:", options)
                if (options != null) {
                    queryOptions.value = options
                    optionKeys.value = UTSJSONObject.keys(options)
                }
            }
            )
            fun gen_getOptionValue_fn(key: String): String {
                val options = queryOptions.value
                if (options != null) {
                    val kVal = options[key]
                    if (kVal != null) {
                        return "" + kVal
                    }
                }
                return ""
            }
            val getOptionValue = ::gen_getOptionValue_fn
            return fun(): Any? {
                return _cV(unref(GenAppkuClass), null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cV(unref(GenSrcLayoutsNavbarClass), _uM("show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to false, "page-style" to _uO("navigationBarTitleText" to "URL 参数测试", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "p-_b5px_B min-h-screen bg-_b_hf8fafc_B"), _uA(
                                    _cE("view", _uM("class" to "bg-white rounded-lg p-_b5px_B shadow-sm border-_b1px_B border-solid border-_b_he2e8f0_B"), _uA(
                                        _cE("text", _uM("class" to "text-_b20px_B font-bold text-_b_h1e293b_B"), "URL Query 页面参数获取测试"),
                                        _cE("text", _uM("class" to "text-_b12px_B text-_b_h94a3b8_B mt-_b2px_B"), "本页面用于展示并测试如何获取 URL 中携带的 query 参数。"),
                                        _cE("view", _uM("class" to "mt-_b4px_B border-t-_b1px_B border-top-style-solid border-top-color-_b_hf1f5f9_B pt-_b4px_B"), _uA(
                                            _cE("view", _uM("class" to "mb-_b4px_B"), _uA(
                                                _cE("text", _uM("class" to "text-_b14px_B font-bold text-_b_h64748b_B"), "解析到的参数详情：")
                                            )),
                                            _cE(Fragment, null, RenderHelpers.renderList(optionKeys.value, fun(key, __key, __index, _cached): Any {
                                                return _cE("view", _uM("key" to key, "class" to "flex flex-row justify-between items-center py-_b2px_B border-b-_b1px_B border-bottom-style-solid border-bottom-color-_b_hf8fafc_B"), _uA(
                                                    _cE("text", _uM("class" to "text-_b14px_B text-_b_h64748b_B font-medium"), _tD(key) + ":", 1),
                                                    _cE("text", _uM("class" to "text-_b14px_B text-_b_h334155_B font-semibold"), _tD(getOptionValue(key)), 1)
                                                ))
                                            }
                                            ), 128),
                                            if (optionKeys.value.length == 0) {
                                                _cE("view", _uM("key" to 0, "class" to "py-_b4px_B text-center"), _uA(
                                                    _cE("text", _uM("class" to "text-_b14px_B text-_b_h94a3b8_B"), "暂无任何 query 参数")
                                                ))
                                            } else {
                                                _cC("v-if", true)
                                            }
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
                return _uM("page" to _pS(_uM("--theme-color" to "#37c2bc")), "p-_b5px_B" to _pS(_uM("paddingTop" to 5, "paddingRight" to 5, "paddingBottom" to 5, "paddingLeft" to 5)), "bg-_b_hf8fafc_B" to _pS(_uM("backgroundColor" to "#f8fafc")), "bg-white" to _pS(_uM("backgroundColor" to "#ffffff")), "rounded-lg" to _pS(_uM("borderTopLeftRadius" to "16rpx", "borderTopRightRadius" to "16rpx", "borderBottomRightRadius" to "16rpx", "borderBottomLeftRadius" to "16rpx")), "shadow-sm" to _pS(_uM("--tw-inset-shadow" to "0 0 #0000", "--tw-inset-ring-shadow" to "0 0 #0000", "--tw-ring-offset-shadow" to "0 0 #0000", "--tw-ring-shadow" to "0 0 #0000", "--tw-shadow" to "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)", "boxShadow" to "var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)")), "border-_b1px_B" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderRightStyle" to "var(--tw-border-style)", "borderBottomStyle" to "var(--tw-border-style)", "borderLeftStyle" to "var(--tw-border-style)", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "border-solid" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "border-_b_he2e8f0_B" to _pS(_uM("borderTopColor" to "#e2e8f0", "borderRightColor" to "#e2e8f0", "borderBottomColor" to "#e2e8f0", "borderLeftColor" to "#e2e8f0")), "text-_b20px_B" to _pS(_uM("fontSize" to 20)), "font-bold" to _pS(_uM("--tw-font-weight" to "700", "fontWeight" to 700)), "text-_b_h1e293b_B" to _pS(_uM("color" to "#1e293b")), "text-_b12px_B" to _pS(_uM("fontSize" to 12)), "text-_b_h94a3b8_B" to _pS(_uM("color" to "#94a3b8")), "mt-_b2px_B" to _pS(_uM("marginTop" to 2)), "mt-_b4px_B" to _pS(_uM("marginTop" to 4)), "border-t-_b1px_B" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderTopWidth" to 1)), "pt-_b4px_B" to _pS(_uM("paddingTop" to 4)), "mb-_b4px_B" to _pS(_uM("marginBottom" to 4)), "text-_b14px_B" to _pS(_uM("fontSize" to 14)), "text-_b_h64748b_B" to _pS(_uM("color" to "#64748b")), "flex" to _pS(_uM("display" to "flex")), "flex-row" to _pS(_uM("flexDirection" to "row")), "justify-between" to _pS(_uM("justifyContent" to "space-between")), "items-center" to _pS(_uM("alignItems" to "center")), "py-_b2px_B" to _pS(_uM("paddingTop" to 2, "paddingBottom" to 2)), "border-b-_b1px_B" to _pS(_uM("--tw-border-style" to "solid", "borderBottomStyle" to "var(--tw-border-style)", "borderBottomWidth" to 1)), "font-medium" to _pS(_uM("--tw-font-weight" to "500", "fontWeight" to 500)), "text-_b_h334155_B" to _pS(_uM("color" to "#334155")), "font-semibold" to _pS(_uM("--tw-font-weight" to "600", "fontWeight" to 600)), "py-_b4px_B" to _pS(_uM("paddingTop" to 4, "paddingBottom" to 4)), "text-center" to _pS(_uM("textAlign" to "center")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM())
        var propsNeedCastKeys: UTSArray<String> = _uA()
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
