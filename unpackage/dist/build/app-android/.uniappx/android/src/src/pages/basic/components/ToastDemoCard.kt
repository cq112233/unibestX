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
open class GenSrcPagesBasicComponentsToastDemoCard : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {}
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenSrcPagesBasicComponentsToastDemoCard) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesBasicComponentsToastDemoCard
            val _cache = __ins.renderCache
            fun gen_handleDefaultToast_fn() {
                toast("这是一条通过 App.ku 全局组件触发的轻提示")
            }
            val handleDefaultToast = ::gen_handleDefaultToast_fn
            fun gen_handleSuccessToast_fn() {
                toastSuccess("恭喜！全局 Toast 触发成功")
            }
            val handleSuccessToast = ::gen_handleSuccessToast_fn
            fun gen_handleErrorToast_fn() {
                toastError("操作异常，全局 Toast 报错提示")
            }
            val handleErrorToast = ::gen_handleErrorToast_fn
            fun gen_handleWarningToast_fn() {
                toastWarning("注意：这是一条全局警告轻提示")
            }
            val handleWarningToast = ::gen_handleWarningToast_fn
            return fun(): Any? {
                return _cV(unref(GenSrcPagesBasicComponentsCardClass), _uM("title" to "全局 Toast 轻提示"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cE("view", _uM("class" to "wtu-1bttlw5-0 wtu-1uxb1kq-1 wtu-16etgk3-2 wtu-ghwkpc-3 wtu-u4o9tc-4 wtu-gs0gzi-5"), _uA(
                            _cE("text", _uM("class" to "wtu-17lkbu7-6 wtu-q8b26m-7 wtu-h2u4nj-8"), " 统一封装的 Toast 工具函数，直接导入 @/src/utils/toast 即可在任意页面与业务逻辑中唤起轻提示。 ")
                        )),
                        _cE("view", _uM("class" to "wtu-1vpegqf-9 wtu-1ate7qk-a"), _uA(
                            _cE("view", _uM("class" to "wtu-1vpegqf-9 wtu-6fefs2-b wtu-1z0mo75-c"), _uA(
                                _cE("view", _uM("class" to "wtu-19zbq4t-d wtu-109salt-e wtu-1d2a3bm-f wtu-7qumcm-g wtu-n1y8nz-h wtu-1vpegqf-9 wtu-6fefs2-b wtu-veardi-i wtu-1b7vdei-j", "onClick" to handleDefaultToast), _uA(
                                    _cE("text", _uM("class" to "wtu-yniy87-k wtu-19sabru-l wtu-1lwcb0b-m"), "默认 Toast")
                                )),
                                _cE("view", _uM("class" to "wtu-19zbq4t-d wtu-h4bkhu-n wtu-7qumcm-g wtu-n1y8nz-h wtu-1vpegqf-9 wtu-6fefs2-b wtu-veardi-i wtu-1b7vdei-j", "onClick" to handleSuccessToast), _uA(
                                    _cE("text", _uM("class" to "wtu-yniy87-k wtu-19sabru-l wtu-1lwcb0b-m"), "成功 Toast")
                                ))
                            )),
                            _cE("view", _uM("class" to "wtu-1vpegqf-9 wtu-6fefs2-b"), _uA(
                                _cE("view", _uM("class" to "wtu-19zbq4t-d wtu-109salt-e wtu-kqvbsq-o wtu-7qumcm-g wtu-n1y8nz-h wtu-1vpegqf-9 wtu-6fefs2-b wtu-veardi-i wtu-1b7vdei-j", "onClick" to handleErrorToast), _uA(
                                    _cE("text", _uM("class" to "wtu-yniy87-k wtu-19sabru-l wtu-1lwcb0b-m"), "错误 Toast")
                                )),
                                _cE("view", _uM("class" to "wtu-19zbq4t-d wtu-1hkdjp8-p wtu-7qumcm-g wtu-n1y8nz-h wtu-1vpegqf-9 wtu-6fefs2-b wtu-veardi-i wtu-1b7vdei-j", "onClick" to handleWarningToast), _uA(
                                    _cE("text", _uM("class" to "wtu-yniy87-k wtu-19sabru-l wtu-1lwcb0b-m"), "警告 Toast")
                                ))
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
                return _uM("wtu-1bttlw5-0" to _pS(_uM("borderTopLeftRadius" to 12, "borderTopRightRadius" to 12, "borderBottomRightRadius" to 12, "borderBottomLeftRadius" to 12)), "wtu-1uxb1kq-1" to _pS(_uM("paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 16, "paddingLeft" to 16)), "wtu-16etgk3-2" to _pS(_uM("marginBottom" to 16)), "wtu-ghwkpc-3" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderRightStyle" to "var(--tw-border-style)", "borderBottomStyle" to "var(--tw-border-style)", "borderLeftStyle" to "var(--tw-border-style)", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "wtu-u4o9tc-4" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "wtu-gs0gzi-5" to _pS(_uM("borderTopColor" to "#e2e8f0", "borderRightColor" to "#e2e8f0", "borderBottomColor" to "#e2e8f0", "borderLeftColor" to "#e2e8f0")), "wtu-17lkbu7-6" to _pS(_uM("fontSize" to 12)), "wtu-q8b26m-7" to _pS(_uM("color" to "#64748b")), "wtu-h2u4nj-8" to _pS(_uM("--tw-leading" to "20px", "lineHeight" to "20px")), "wtu-1vpegqf-9" to _pS(_uM("display" to "flex")), "wtu-1ate7qk-a" to _pS(_uM("flexDirection" to "column")), "wtu-6fefs2-b" to _pS(_uM("flexDirection" to "row")), "wtu-1z0mo75-c" to _pS(_uM("marginBottom" to 10)), "wtu-19zbq4t-d" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "wtu-109salt-e" to _pS(_uM("marginRight" to 10)), "wtu-1d2a3bm-f" to _pS(_uM("backgroundColor" to "#3b82f6")), "wtu-7qumcm-g" to _pS(_uM("borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "wtu-n1y8nz-h" to _pS(_uM("height" to 40)), "wtu-veardi-i" to _pS(_uM("alignItems" to "center")), "wtu-1b7vdei-j" to _pS(_uM("justifyContent" to "center")), "wtu-yniy87-k" to _pS(_uM("color" to "#ffffff")), "wtu-19sabru-l" to _pS(_uM("fontSize" to 13)), "wtu-1lwcb0b-m" to _pS(_uM("--tw-font-weight" to "var(--font-weight-bold, 700)", "fontWeight" to 700)), "wtu-h4bkhu-n" to _pS(_uM("backgroundColor" to "#10b981")), "wtu-kqvbsq-o" to _pS(_uM("backgroundColor" to "#ef4444")), "wtu-1hkdjp8-p" to _pS(_uM("backgroundColor" to "#f59e0b")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM())
        var propsNeedCastKeys: UTSArray<String> = _uA()
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
