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
open class GenSrcPagesFunctionComponentsEnvCard : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {}
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenSrcPagesFunctionComponentsEnvCard) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesFunctionComponentsEnvCard
            val _cache = __ins.renderCache
            val appTitle: String = "unibestX"
            val appVersion: String = "1.0.0"
            val buildEnvType: String = "" + ("production" ?: "")
            val systemEnv: EnvType = if (buildEnvType == "test") {
                "test"
            } else {
                "production"
            }
            val apiBaseUrl: String = "" + ("https://ukw0y1.laf.run" ?: "https://ukw0y1.laf.run")
            val envTypeText: String = systemEnv
            val envLabel = computed(fun(): String {
                if (systemEnv === "test") {
                    return "测试"
                }
                if (systemEnv === "production") {
                    return "生产"
                }
                return "开发"
            }
            )
            val envColor = computed(fun(): String {
                if (systemEnv === "test") {
                    return "#f59e0b"
                }
                if (systemEnv === "production") {
                    return "#ef4444"
                }
                return "#10b981"
            }
            )
            return fun(): Any? {
                return _cV(unref(GenSrcPagesBasicComponentsCardClass), _uM("title" to "环境变量"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cE("view", _uM("class" to "wtu-1yjek9y-0 wtu-s1ir6x-1 wtu-r20r67-2 wtu-1fwde1j-3 wtu-1hn9nh1-4"), _uA(
                            _cE("view", _uM("class" to "wtu-1wn3kuh-5 wtu-x1ltc0-6 wtu-1s9hnts-7"), _uA(
                                _cE("text", _uM("class" to "wtu-1yinq8w-8 wtu-y0qx9p-9"), "应用名称"),
                                _cE("text", _uM("class" to "wtu-1yinq8w-8 wtu-1xrmo7y-a wtu-7t1zi1-b"), _tD(appTitle))
                            )),
                            _cE("view", _uM("class" to "wtu-1wn3kuh-5 wtu-x1ltc0-6 wtu-1s9hnts-7"), _uA(
                                _cE("text", _uM("class" to "wtu-1yinq8w-8 wtu-y0qx9p-9"), "应用版本"),
                                _cE("text", _uM("class" to "wtu-1yinq8w-8 wtu-1xrmo7y-a wtu-7t1zi1-b"), _tD(appVersion))
                            )),
                            _cE("view", _uM("class" to "wtu-1wn3kuh-5 wtu-x1ltc0-6 wtu-1s9hnts-7"), _uA(
                                _cE("text", _uM("class" to "wtu-1yinq8w-8 wtu-y0qx9p-9"), "编译环境"),
                                _cE("text", _uM("class" to "wtu-1yinq8w-8 wtu-1xrmo7y-a", "style" to _nS(_uM("color" to envColor.value))), _tD(envLabel.value), 5)
                            )),
                            _cE("view", _uM("class" to "wtu-1wn3kuh-5 wtu-x1ltc0-6 wtu-1s9hnts-7"), _uA(
                                _cE("text", _uM("class" to "wtu-1yinq8w-8 wtu-y0qx9p-9"), "环境标识"),
                                _cE("text", _uM("class" to "wtu-21em1e-c wtu-1a0szfl-d"), _tD(unref(envTypeText)), 1)
                            )),
                            _cE("view", _uM("class" to "wtu-1wn3kuh-5 wtu-x1ltc0-6"), _uA(
                                _cE("text", _uM("class" to "wtu-1yinq8w-8 wtu-y0qx9p-9"), "接口地址"),
                                _cE("text", _uM("class" to "wtu-21em1e-c wtu-1a0szfl-d wtu-10cqf12-e wtu-twd3o9-f wtu-1exppl3-g"), _tD(apiBaseUrl))
                            ))
                        ))
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
                return _uM("wtu-1yjek9y-0" to _pS(_uM("borderTopLeftRadius" to 12, "borderTopRightRadius" to 12, "borderBottomRightRadius" to 12, "borderBottomLeftRadius" to 12)), "wtu-s1ir6x-1" to _pS(_uM("paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 16, "paddingLeft" to 16)), "wtu-r20r67-2" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderRightStyle" to "var(--tw-border-style)", "borderBottomStyle" to "var(--tw-border-style)", "borderLeftStyle" to "var(--tw-border-style)", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "wtu-1fwde1j-3" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "wtu-1hn9nh1-4" to _pS(_uM("borderTopColor" to "#e2e8f0", "borderRightColor" to "#e2e8f0", "borderBottomColor" to "#e2e8f0", "borderLeftColor" to "#e2e8f0")), "wtu-1wn3kuh-5" to _pS(_uM("flexDirection" to "row")), "wtu-x1ltc0-6" to _pS(_uM("justifyContent" to "space-between")), "wtu-1s9hnts-7" to _pS(_uM("marginBottom" to 10)), "wtu-1yinq8w-8" to _pS(_uM("fontSize" to 14)), "wtu-y0qx9p-9" to _pS(_uM("color" to "#718096")), "wtu-1xrmo7y-a" to _pS(_uM("--tw-font-weight" to "var(--font-weight-bold, 700)", "fontWeight" to 700)), "wtu-7t1zi1-b" to _pS(_uM("color" to "#334155")), "wtu-21em1e-c" to _pS(_uM("fontSize" to 12)), "wtu-1a0szfl-d" to _pS(_uM("color" to "#64748b")), "wtu-10cqf12-e" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "wtu-twd3o9-f" to _pS(_uM("marginLeft" to 8)), "wtu-1exppl3-g" to _pS(_uM("textAlign" to "right")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM())
        var propsNeedCastKeys: UTSArray<String> = _uA()
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
