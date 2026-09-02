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
import io.dcloud.uniapp.extapi.setClipboardData as uni_setClipboardData
import io.dcloud.uniapp.extapi.showToast as uni_showToast
import io.dcloud.uniapp.extapi.vibrateShort as uni_vibrateShort
open class GenSrcPagesFunctionComponentsHapticsCard : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {}
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenSrcPagesFunctionComponentsHapticsCard) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesFunctionComponentsHapticsCard
            val _cache = __ins.renderCache
            val copyText = ref("Hello unibestX!")
            fun gen_triggerVibration_fn() {
                uni_vibrateShort(VibrateShortOptions(type = "light", success = fun(_){
                    uni_showToast(ShowToastOptions(title = "已触发短震动", icon = "none"))
                }
                , fail = fun(_){
                    uni_showToast(ShowToastOptions(title = "震动触发失败", icon = "none"))
                }
                ))
            }
            val triggerVibration = ::gen_triggerVibration_fn
            fun gen_handleCopy_fn() {
                if (copyText.value === "") {
                    return
                }
                uni_setClipboardData(SetClipboardDataOptions(data = copyText.value, success = fun(_){
                    uni_showToast(ShowToastOptions(title = "复制成功", icon = "success"))
                }
                ))
            }
            val handleCopy = ::gen_handleCopy_fn
            return fun(): Any? {
                return _cV(unref(GenSrcPagesBasicComponentsCardClass), _uM("title" to "触感与工具"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cE("view", _uM("class" to "wtu-1pqljrd-0 wtu-1nsrzwm-1 wtu-z7ly8f-2 wtu-cu4oh8-3 wtu-1ae0mn0-4 wtu-1dpq0lu-5"), _uA(
                            _cE("text", _uM("class" to "wtu-1e3pw8z-6 wtu-xlfis6-7 wtu-1174kp0-8"), "剪贴板测试文本"),
                            _cE("input", _uM("modelValue" to copyText.value, "onInput" to fun(`$event`: UniInputEvent){
                                copyText.value = `$event`.detail.value
                            }
                            , "placeholder" to "请输入要复制的文本", "class" to "wtu-14leste-9 wtu-44c3cb-a wtu-rkq1ns-b wtu-3rena2-c wtu-cu4oh8-3 wtu-1ae0mn0-4 wtu-17e4xae-d wtu-wgd06p-e wtu-lwq7o6-f wtu-7zqqiz-g"), null, 40, _uA(
                                "modelValue",
                                "onInput"
                            )),
                            _cE("view", _uM("class" to "wtu-1phhh09-h wtu-14leste-9 wtu-18u1qwy-i wtu-1km86q6-j wtu-snabsj-k wtu-1e9fgzq-l wtu-15f70xm-m wtu-1kekspa-n", "onClick" to handleCopy), _uA(
                                _cE("text", _uM("class" to "wtu-199nxoz-o wtu-wgd06p-e wtu-17exkt3-p"), "复制测试文本")
                            ))
                        )),
                        _cE("view", _uM("class" to "wtu-1phhh09-h wtu-1i30ucf-q wtu-18u1qwy-i wtu-nwcnqo-r wtu-snabsj-k wtu-1e9fgzq-l wtu-15f70xm-m wtu-1kekspa-n", "onClick" to triggerVibration), _uA(
                            _cE("text", _uM("class" to "wtu-199nxoz-o wtu-wgd06p-e wtu-17exkt3-p"), "短震动反馈")
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
                return _uM("wtu-1pqljrd-0" to _pS(_uM("borderTopLeftRadius" to 12, "borderTopRightRadius" to 12, "borderBottomRightRadius" to 12, "borderBottomLeftRadius" to 12)), "wtu-1nsrzwm-1" to _pS(_uM("paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 16, "paddingLeft" to 16)), "wtu-z7ly8f-2" to _pS(_uM("marginBottom" to 16)), "wtu-cu4oh8-3" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderRightStyle" to "var(--tw-border-style)", "borderBottomStyle" to "var(--tw-border-style)", "borderLeftStyle" to "var(--tw-border-style)", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "wtu-1ae0mn0-4" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "wtu-1dpq0lu-5" to _pS(_uM("borderTopColor" to "#e2e8f0", "borderRightColor" to "#e2e8f0", "borderBottomColor" to "#e2e8f0", "borderLeftColor" to "#e2e8f0")), "wtu-1e3pw8z-6" to _pS(_uM("fontSize" to 12)), "wtu-xlfis6-7" to _pS(_uM("color" to "#94a3b8")), "wtu-1174kp0-8" to _pS(_uM("marginBottom" to 8)), "wtu-14leste-9" to _pS(_uM("height" to 38)), "wtu-44c3cb-a" to _pS(_uM("backgroundColor" to "#ffffff")), "wtu-rkq1ns-b" to _pS(_uM("borderTopLeftRadius" to 6, "borderTopRightRadius" to 6, "borderBottomRightRadius" to 6, "borderBottomLeftRadius" to 6)), "wtu-3rena2-c" to _pS(_uM("paddingLeft" to 12, "paddingRight" to 12)), "wtu-17e4xae-d" to _pS(_uM("borderTopColor" to "#cbd5e1", "borderRightColor" to "#cbd5e1", "borderBottomColor" to "#cbd5e1", "borderLeftColor" to "#cbd5e1")), "wtu-wgd06p-e" to _pS(_uM("fontSize" to 14)), "wtu-lwq7o6-f" to _pS(_uM("color" to "#334155")), "wtu-7zqqiz-g" to _pS(_uM("marginBottom" to 12)), "wtu-1phhh09-h" to _pS(_uM("width" to "100%")), "wtu-18u1qwy-i" to _pS(_uM("borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "wtu-1km86q6-j" to _pS(_uM("backgroundColor" to "#10b981")), "wtu-snabsj-k" to _pS(_uM("display" to "flex")), "wtu-1e9fgzq-l" to _pS(_uM("flexDirection" to "row")), "wtu-15f70xm-m" to _pS(_uM("alignItems" to "center")), "wtu-1kekspa-n" to _pS(_uM("justifyContent" to "center")), "wtu-199nxoz-o" to _pS(_uM("color" to "#ffffff")), "wtu-17exkt3-p" to _pS(_uM("--tw-font-weight" to "var(--font-weight-bold, 700)", "fontWeight" to 700)), "wtu-1i30ucf-q" to _pS(_uM("height" to 44)), "wtu-nwcnqo-r" to _pS(_uM("backgroundColor" to "#f59e0b")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM())
        var propsNeedCastKeys: UTSArray<String> = _uA()
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
