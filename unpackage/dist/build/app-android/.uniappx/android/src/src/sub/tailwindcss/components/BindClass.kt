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
open class GenSrcSubTailwindcssComponentsBindClass : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {}
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenSrcSubTailwindcssComponentsBindClass) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcSubTailwindcssComponentsBindClass
            val _cache = __ins.renderCache
            val condition = ref(true)
            val extra = ref("wtu-1026j5x-g wtu-1cznegj-h")
            val flag = ref(true)
            val toggled = ref(true)
            return fun(): Any? {
                return _cE("view", _uM("class" to "wtu-1m49j0s-0 wtu-n3ob0u-1 wtu-1vc4oyx-2 wtu-or3vkz-3"), _uA(
                    _cE("view", _uM("class" to "issue-822-component-child wtu-12ysphb-4 wtu-rj66cr-5 wtu-79qmlq-6"), _uA(
                        _cE("text", _uM("class" to "wtu-1qewyjj-7"), "issue 822 component child")
                    )),
                    _cE("view", _uM("class" to "wtu-hahnwa-8 wtu-79qmlq-6 wtu-1g1ucfi-9 wtu-n3ob0u-1"), _uA(
                        _cE("text", _uM("class" to _nC(if (unref(flag)) {
                            "wtu-uj646o-a wtu-v1dixk-b"
                        } else {
                            "wtu-s9xl9u-c"
                        }
                        )), " simple ", 2),
                        _cE("text", _uM("class" to _nC(_uA(
                            unref(extra),
                            _uM("wtu-1l82hkd-d" to unref(toggled))
                        ))), " complex ", 2),
                        _cE("text", _uM("class" to _nC(if (unref(condition)) {
                            "wtu-1hf1vho-e wtu-6xzka-f"
                        } else {
                            ""
                        }
                        )), " fallback ", 2)
                    ))
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
                return _uM("issue-822-component-child" to _pS(_uM("borderTopWidth" to 2, "borderRightWidth" to 2, "borderBottomWidth" to 2, "borderLeftWidth" to 2, "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid", "borderTopColor" to "#7c3aed", "borderRightColor" to "#7c3aed", "borderBottomColor" to "#7c3aed", "borderLeftColor" to "#7c3aed")), "wtu-1m49j0s-0" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderRightStyle" to "var(--tw-border-style)", "borderBottomStyle" to "var(--tw-border-style)", "borderLeftStyle" to "var(--tw-border-style)", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "wtu-n3ob0u-1" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "wtu-1vc4oyx-2" to _pS(_uM("borderTopColor" to "#999999", "borderRightColor" to "#999999", "borderBottomColor" to "#999999", "borderLeftColor" to "#999999")), "wtu-or3vkz-3" to _pS(_uM("paddingTop" to "32rpx", "paddingRight" to "32rpx", "paddingBottom" to "32rpx", "paddingLeft" to "32rpx")), "wtu-12ysphb-4" to _pS(_uM("height" to 200)), "wtu-rj66cr-5" to _pS(_uM("width" to "100%")), "wtu-79qmlq-6" to _pS(_uM("backgroundColor" to "#87add3")), "wtu-1qewyjj-7" to _pS(_uM("color" to "#111111")), "wtu-hahnwa-8" to _pS(_uM("paddingTop" to 20.32, "paddingRight" to 20.32, "paddingBottom" to 20.32, "paddingLeft" to 20.32)), "wtu-1g1ucfi-9" to _pS(_uM("borderTopColor" to "#111111", "borderRightColor" to "#111111", "borderBottomColor" to "#111111", "borderLeftColor" to "#111111")), "wtu-uj646o-a" to _pS(_uM("backgroundColor" to "#123456")), "wtu-v1dixk-b" to _pS(_uM("marginBottom" to 12.32)), "wtu-s9xl9u-c" to _pS(_uM("backgroundColor" to "#d7700a")), "wtu-1l82hkd-d" to _pS(_uM("color" to "#ff0000")), "wtu-1hf1vho-e" to _pS(_uM("backgroundColor" to "#f205f6")), "wtu-6xzka-f" to _pS(_uM("color" to "#70ed0a")), "wtu-1026j5x-g" to _pS(_uM("fontSize" to "93.54rpx")), "wtu-1cznegj-h" to _pS(_uM("backgroundColor" to "#d2e252")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM())
        var propsNeedCastKeys: UTSArray<String> = _uA()
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
