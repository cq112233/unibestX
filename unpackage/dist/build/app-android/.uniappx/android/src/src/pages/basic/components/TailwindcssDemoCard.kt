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
import io.dcloud.uniapp.extapi.navigateTo as uni_navigateTo
import io.dcloud.uniapp.extapi.setClipboardData as uni_setClipboardData
import io.dcloud.uniapp.extapi.showToast as uni_showToast
open class GenSrcPagesBasicComponentsTailwindcssDemoCard : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {}
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenSrcPagesBasicComponentsTailwindcssDemoCard) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesBasicComponentsTailwindcssDemoCard
            val _cache = __ins.renderCache
            fun gen_copyWebsiteUrl_fn() {
                uni_setClipboardData(SetClipboardDataOptions(data = "https://tw.icebreaker.top/zh-cn/", success = fun(_){
                    uni_showToast(ShowToastOptions(title = "官网网址已复制到剪贴板", icon = "none"))
                }
                ))
            }
            val copyWebsiteUrl = ::gen_copyWebsiteUrl_fn
            fun gen_navigateToDemo_fn() {
                uni_navigateTo(NavigateToOptions(url = "/src/sub/tailwindcss/tailwindcss", fail = fun(err){
                    console.error("navigateToDemo fail:", err)
                }
                ))
            }
            val navigateToDemo = ::gen_navigateToDemo_fn
            return fun(): Any? {
                return _cV(unref(GenSrcPagesBasicComponentsCardClass), _uM("title" to "weapp-tailwindcss Demo"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cE("view", _uM("class" to "wtu-10fxz8g-0 wtu-n07vof-1"), _uA(
                            _cE("text", _uM("class" to "wtu-1swt5i6-2 wtu-7ut3h6-3 wtu-v1603q-4 wtu-1k2vr17-5"), " 项目已接入 Tailwind CSS v4 + weapp-tailwindcss，支持方括号任意值（如 text-[14px]、mt-[12px]）、dark: 暗黑变体与多端平台变体，一套类名全端生效，写法与 Web 端完全一致。 "),
                            _cE("view", _uM("class" to "wtu-1ue8wuu-6 wtu-ugr1m2-7 wtu-64j6tc-8 wtu-7jd6f-9 wtu-ln8km0-a wtu-1k2vr17-5", "onClick" to copyWebsiteUrl), _uA(
                                _cE("text", _uM("class" to "wtu-1jpdk37-b wtu-1lxv8cd-c wtu-p1t5tf-d wtu-pgoxso-e"), "官网："),
                                _cE("text", _uM("class" to "wtu-1jpdk37-b wtu-155roug-f wtu-1klokvc-g wtu-1vk0on5-h"), "https://tw.icebreaker.top/zh-cn/"),
                                _cE("text", _uM("class" to "wtu-9ng6ts-i wtu-17ue17q-j"), "点击复制")
                            )),
                            _cE("view", _uM("class" to "wtu-1ue8wuu-6 wtu-ugr1m2-7 wtu-8yh2zy-k"), _uA(
                                _cE("view", _uM("class" to "wtu-3xj2e-l wtu-1s0c5bc-m wtu-1qnaxng-n wtu-1smlacz-o wtu-s74oky-p wtu-rwf26b-q wtu-6u6y64-r wtu-1rjkyp8-s wtu-9gow7j-t"), _uA(
                                    _cE("text", _uM("class" to "wtu-9ng6ts-i wtu-155roug-f wtu-p1t5tf-d"), "Tailwind CSS v4")
                                )),
                                _cE("view", _uM("class" to "wtu-3xj2e-l wtu-1s0c5bc-m wtu-1qnaxng-n wtu-1smlacz-o wtu-s74oky-p wtu-1796l3j-u wtu-6u6y64-r wtu-1rjkyp8-s wtu-173g5br-v"), _uA(
                                    _cE("text", _uM("class" to "wtu-9ng6ts-i wtu-itbynk-w wtu-p1t5tf-d"), "方括号任意值")
                                )),
                                _cE("view", _uM("class" to "wtu-1s0c5bc-m wtu-1qnaxng-n wtu-1smlacz-o wtu-s74oky-p wtu-1v1k4mz-x wtu-6u6y64-r wtu-1rjkyp8-s wtu-h6hcp8-y"), _uA(
                                    _cE("text", _uM("class" to "wtu-9ng6ts-i wtu-1cm941u-z wtu-p1t5tf-d"), "dark: 暗黑变体")
                                ))
                            ))
                        )),
                        _cE("view", _uM("class" to "wtu-1bmc39l-10 wtu-1tf82vj-11 wtu-12wk9v6-12 wtu-13en0gu-13 wtu-vx8l1f-14 wtu-1ue8wuu-6 wtu-ugr1m2-7 wtu-xicm2m-15", "onClick" to navigateToDemo), _uA(
                            _cE("text", _uM("class" to "wtu-jq9nhf-16 wtu-kasb8h-17 wtu-1w3ascn-18"), "进入 weapp-tailwindcss 示例")
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
                return _uM("wtu-10fxz8g-0" to _pS(_uM("flexDirection" to "column")), "wtu-n07vof-1" to _pS(_uM("marginBottom" to 16)), "wtu-1swt5i6-2" to _pS(_uM("fontSize" to 13)), "wtu-7ut3h6-3" to _pS(_uM("color" to "#64748b")), "wtu-v1603q-4" to _pS(_uM("--tw-leading" to "18px", "lineHeight" to "18px")), "wtu-1k2vr17-5" to _pS(_uM("marginBottom" to 12)), "wtu-1ue8wuu-6" to _pS(_uM("flexDirection" to "row")), "wtu-ugr1m2-7" to _pS(_uM("alignItems" to "center")), "wtu-64j6tc-8" to _pS(_uM("backgroundColor" to "#f1f5f9")), "wtu-7jd6f-9" to _pS(_uM("paddingTop" to 8, "paddingRight" to 8, "paddingBottom" to 8, "paddingLeft" to 8)), "wtu-ln8km0-a" to _pS(_uM("borderTopLeftRadius" to 6, "borderTopRightRadius" to 6, "borderBottomRightRadius" to 6, "borderBottomLeftRadius" to 6)), "wtu-1jpdk37-b" to _pS(_uM("fontSize" to 12)), "wtu-1lxv8cd-c" to _pS(_uM("color" to "#475569")), "wtu-p1t5tf-d" to _pS(_uM("--tw-font-weight" to "var(--font-weight-medium, 500)", "fontWeight" to 500)), "wtu-pgoxso-e" to _pS(_uM("marginRight" to 4)), "wtu-155roug-f" to _pS(_uM("color" to "#2563eb")), "wtu-1klokvc-g" to _pS(_uM("textDecorationLine" to "underline")), "wtu-1vk0on5-h" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "wtu-9ng6ts-i" to _pS(_uM("fontSize" to 11)), "wtu-17ue17q-j" to _pS(_uM("color" to "#94a3b8")), "wtu-8yh2zy-k" to _pS(_uM("flexWrap" to "wrap")), "wtu-3xj2e-l" to _pS(_uM("marginRight" to 6)), "wtu-1s0c5bc-m" to _pS(_uM("marginBottom" to 4)), "wtu-1qnaxng-n" to _pS(_uM("paddingLeft" to 10, "paddingRight" to 10)), "wtu-1smlacz-o" to _pS(_uM("paddingTop" to 3, "paddingBottom" to 3)), "wtu-s74oky-p" to _pS(_uM("borderTopLeftRadius" to 20, "borderTopRightRadius" to 20, "borderBottomRightRadius" to 20, "borderBottomLeftRadius" to 20)), "wtu-rwf26b-q" to _pS(_uM("backgroundColor" to "#e0edff")), "wtu-6u6y64-r" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderRightStyle" to "var(--tw-border-style)", "borderBottomStyle" to "var(--tw-border-style)", "borderLeftStyle" to "var(--tw-border-style)", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "wtu-1rjkyp8-s" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "wtu-9gow7j-t" to _pS(_uM("borderTopColor" to "#bfdbfe", "borderRightColor" to "#bfdbfe", "borderBottomColor" to "#bfdbfe", "borderLeftColor" to "#bfdbfe")), "wtu-1796l3j-u" to _pS(_uM("backgroundColor" to "#d1fae5")), "wtu-173g5br-v" to _pS(_uM("borderTopColor" to "#a7f3d0", "borderRightColor" to "#a7f3d0", "borderBottomColor" to "#a7f3d0", "borderLeftColor" to "#a7f3d0")), "wtu-itbynk-w" to _pS(_uM("color" to "#059669")), "wtu-1v1k4mz-x" to _pS(_uM("backgroundColor" to "#fef3c7")), "wtu-h6hcp8-y" to _pS(_uM("borderTopColor" to "#fde68a", "borderRightColor" to "#fde68a", "borderBottomColor" to "#fde68a", "borderLeftColor" to "#fde68a")), "wtu-1cm941u-z" to _pS(_uM("color" to "#d97706")), "wtu-1bmc39l-10" to _pS(_uM("width" to "100%")), "wtu-1tf82vj-11" to _pS(_uM("height" to 44)), "wtu-12wk9v6-12" to _pS(_uM("borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "wtu-13en0gu-13" to _pS(_uM("backgroundColor" to "#3b82f6")), "wtu-vx8l1f-14" to _pS(_uM("display" to "flex")), "wtu-xicm2m-15" to _pS(_uM("justifyContent" to "center")), "wtu-jq9nhf-16" to _pS(_uM("color" to "#ffffff")), "wtu-kasb8h-17" to _pS(_uM("fontSize" to 14)), "wtu-1w3ascn-18" to _pS(_uM("--tw-font-weight" to "var(--font-weight-bold, 700)", "fontWeight" to 700)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM())
        var propsNeedCastKeys: UTSArray<String> = _uA()
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
