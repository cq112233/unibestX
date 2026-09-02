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
open class GenSrcPagesBasicComponentsPropsDemoCard : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {}
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenSrcPagesBasicComponentsPropsDemoCard) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesBasicComponentsPropsDemoCard
            val _cache = __ins.renderCache
            val parentCount = ref<Number>(10)
            val childMessage = ref<String>("暂无子组件消息")
            val tagList = ref(_uA<String>("响应式 Props 传递", "Emits 事件监听与回传", "具名 Header/Footer 插槽", "具名 Slot 作用域传参"))
            fun gen_onChildAdd_fn(delta: Number) {
                parentCount.value += delta
            }
            val onChildAdd = ::gen_onChildAdd_fn
            fun gen_onChildReset_fn() {
                parentCount.value = 0
                childMessage.value = "已被子组件重置为 0"
            }
            val onChildReset = ::gen_onChildReset_fn
            fun gen_onChildSendMsg_fn(msg: String) {
                childMessage.value = msg
            }
            val onChildSendMsg = ::gen_onChildSendMsg_fn
            fun gen_addFiveFromParent_fn() {
                parentCount.value += 5
            }
            val addFiveFromParent = ::gen_addFiveFromParent_fn
            fun gen_resetParent_fn() {
                parentCount.value = 10
                childMessage.value = "已重置为初始状态"
            }
            val resetParent = ::gen_resetParent_fn
            return fun(): Any? {
                return _cV(unref(GenSrcPagesBasicComponentsCardClass), _uM("title" to "父子组件传参 & 具名插槽演示"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cE("view", _uM("class" to "wtu-vxgnz7-0 wtu-bzagc8-1 wtu-b66ka1-2 wtu-74ncny-3 wtu-1owovkx-4 wtu-1pdwtsl-5 wtu-cwe6v6-6"), _uA(
                            _cE("text", _uM("class" to "wtu-1a5l072-7 wtu-sv7fhw-8 wtu-44jmxl-9 wtu-bhsfe3-a"), "👨‍👩‍👧 父组件状态管理面板"),
                            _cE("view", _uM("class" to "wtu-1qcvxlr-b wtu-i6zy5z-c wtu-1vkc6z9-d"), _uA(
                                _cE("text", _uM("class" to "wtu-1hmoe0k-e wtu-1581zln-f"), "父组件 Count 变量: "),
                                _cE("text", _uM("class" to "wtu-1a5l072-7 wtu-sv7fhw-8 wtu-1cwqag0-g wtu-1cbwlqp-h"), _tD(parentCount.value), 1)
                            )),
                            _cE("view", _uM("class" to "wtu-1qcvxlr-b wtu-i6zy5z-c wtu-hqsngi-i"), _uA(
                                _cE("text", _uM("class" to "wtu-1hmoe0k-e wtu-1581zln-f"), "接收到的子组件消息: "),
                                _cE("text", _uM("class" to "wtu-1hmoe0k-e wtu-sv7fhw-8 wtu-cj9lbh-j wtu-1cbwlqp-h"), _tD(childMessage.value), 1)
                            )),
                            _cE("view", _uM("class" to "wtu-1qcvxlr-b wtu-i6zy5z-c"), _uA(
                                _cE("view", _uM("class" to "wtu-1t9ug01-k wtu-1qt2m0f-l wtu-hvwz4r-m wtu-bf75hz-n wtu-1qcvxlr-b wtu-i6zy5z-c wtu-19aj3kn-o wtu-6ebfap-p", "onClick" to addFiveFromParent), _uA(
                                    _cE("text", _uM("class" to "wtu-1c2l3ni-q wtu-1hmoe0k-e"), "父组件直接 Count + 5")
                                )),
                                _cE("view", _uM("class" to "wtu-1h73awj-r wtu-1qt2m0f-l wtu-hvwz4r-m wtu-bf75hz-n wtu-1qcvxlr-b wtu-i6zy5z-c wtu-19aj3kn-o", "onClick" to resetParent), _uA(
                                    _cE("text", _uM("class" to "wtu-1c2l3ni-q wtu-1hmoe0k-e"), "父组件重置状态")
                                ))
                            ))
                        )),
                        _cV(unref(GenSrcPagesBasicComponentsChildDemoBoxClass), _uM("title" to "组件通信演示子节点", "count" to parentCount.value, "tags" to tagList.value, "onAdd" to onChildAdd, "onReset" to onChildReset, "onSendMsg" to onChildSendMsg), _uM("header" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "wtu-1qcvxlr-b wtu-i6zy5z-c wtu-16203my-s"), _uA(
                                    _cE("text", _uM("class" to "wtu-1a5l072-7 wtu-sv7fhw-8 wtu-161zm7w-t"), "🏷️ 父组件填入的具名 Header 插槽"),
                                    _cE("text", _uM("class" to "wtu-1j9rfuf-u wtu-1581zln-f wtu-v9l0kh-v wtu-zb8dsk-w wtu-1y4fkff-x wtu-1jbz86x-y"), "自定义 Header")
                                ))
                            )
                        }
                        ), "itemSlot" to withScopedSlotCtx(fun(slotProps: Record<String, Any?>): UTSArray<Any> {
                            val item = slotProps["item"]
                            val index = slotProps["index"]
                            return _uA(
                                _cE("view", _uM("class" to "wtu-1qcvxlr-b wtu-i6zy5z-c wtu-1ue7bt4-z wtu-1qt2m0f-l wtu-1932lzo-10 wtu-1owovkx-4 wtu-1pdwtsl-5 wtu-16vqpiu-11"), _uA(
                                    _cE("text", _uM("class" to "wtu-1j9rfuf-u wtu-sv7fhw-8 wtu-1gdtqyh-12 wtu-1ys92t7-13"), "#" + _tD((index as Number) + 1), 1),
                                    _cE("text", _uM("class" to "wtu-1hmoe0k-e wtu-165ep59-14 wtu-1nu791o-15"), _tD(item), 1),
                                    _cE("text", _uM("class" to "wtu-1sh719e-16 wtu-1qit6r8-17 wtu-1aizezg-18"), "具名Slot传参: " + _tD(item), 1)
                                ))
                            )
                        }
                        ), "footer" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "wtu-1qcvxlr-b wtu-i6zy5z-c wtu-16203my-s wtu-1y4fkff-x"), _uA(
                                    _cE("text", _uM("class" to "wtu-1hmoe0k-e wtu-ntizu3-19"), "📌 父组件填入的具名 Footer 插槽"),
                                    _cE("text", _uM("class" to "wtu-1j9rfuf-u wtu-cj9lbh-j wtu-5777z3-1a wtu-zb8dsk-w wtu-1y4fkff-x wtu-1jbz86x-y wtu-1nu791o-15"), "双向通信验证成功")
                                ))
                            )
                        }
                        ), "_" to 1), 8, _uA(
                            "count",
                            "tags"
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
                return _uM("wtu-vxgnz7-0" to _pS(_uM("backgroundColor" to "#eff6ff")), "wtu-bzagc8-1" to _pS(_uM("borderTopLeftRadius" to 12, "borderTopRightRadius" to 12, "borderBottomRightRadius" to 12, "borderBottomLeftRadius" to 12)), "wtu-b66ka1-2" to _pS(_uM("paddingTop" to 14, "paddingRight" to 14, "paddingBottom" to 14, "paddingLeft" to 14)), "wtu-74ncny-3" to _pS(_uM("marginBottom" to 14)), "wtu-1owovkx-4" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderRightStyle" to "var(--tw-border-style)", "borderBottomStyle" to "var(--tw-border-style)", "borderLeftStyle" to "var(--tw-border-style)", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "wtu-1pdwtsl-5" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "wtu-cwe6v6-6" to _pS(_uM("borderTopColor" to "#bfdbfe", "borderRightColor" to "#bfdbfe", "borderBottomColor" to "#bfdbfe", "borderLeftColor" to "#bfdbfe")), "wtu-1a5l072-7" to _pS(_uM("fontSize" to 14)), "wtu-sv7fhw-8" to _pS(_uM("--tw-font-weight" to "var(--font-weight-bold, 700)", "fontWeight" to 700)), "wtu-44jmxl-9" to _pS(_uM("color" to "#1e40af")), "wtu-bhsfe3-a" to _pS(_uM("marginBottom" to 6)), "wtu-1qcvxlr-b" to _pS(_uM("flexDirection" to "row")), "wtu-i6zy5z-c" to _pS(_uM("alignItems" to "center")), "wtu-1vkc6z9-d" to _pS(_uM("marginBottom" to 4)), "wtu-1hmoe0k-e" to _pS(_uM("fontSize" to 12)), "wtu-1581zln-f" to _pS(_uM("color" to "#3b82f6")), "wtu-1cwqag0-g" to _pS(_uM("color" to "#1d4ed8")), "wtu-1cbwlqp-h" to _pS(_uM("marginLeft" to 6)), "wtu-hqsngi-i" to _pS(_uM("marginBottom" to 10)), "wtu-cj9lbh-j" to _pS(_uM("color" to "#059669")), "wtu-1t9ug01-k" to _pS(_uM("backgroundColor" to "#2563eb")), "wtu-1qt2m0f-l" to _pS(_uM("borderTopLeftRadius" to 6, "borderTopRightRadius" to 6, "borderBottomRightRadius" to 6, "borderBottomLeftRadius" to 6)), "wtu-hvwz4r-m" to _pS(_uM("paddingLeft" to 10, "paddingRight" to 10)), "wtu-bf75hz-n" to _pS(_uM("height" to 30)), "wtu-19aj3kn-o" to _pS(_uM("justifyContent" to "center")), "wtu-6ebfap-p" to _pS(_uM("marginRight" to 8)), "wtu-1c2l3ni-q" to _pS(_uM("color" to "#ffffff")), "wtu-1h73awj-r" to _pS(_uM("backgroundColor" to "#64748b")), "wtu-16203my-s" to _pS(_uM("justifyContent" to "space-between")), "wtu-161zm7w-t" to _pS(_uM("color" to "#1e293b")), "wtu-1j9rfuf-u" to _pS(_uM("fontSize" to 11)), "wtu-v9l0kh-v" to _pS(_uM("backgroundColor" to "#dbeafe")), "wtu-zb8dsk-w" to _pS(_uM("paddingLeft" to 6, "paddingRight" to 6)), "wtu-1y4fkff-x" to _pS(_uM("paddingTop" to 2, "paddingBottom" to 2)), "wtu-1jbz86x-y" to _pS(_uM("borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4, "borderBottomLeftRadius" to 4)), "wtu-1ue7bt4-z" to _pS(_uM("backgroundColor" to "#f0fdf4")), "wtu-1932lzo-10" to _pS(_uM("paddingTop" to 8, "paddingRight" to 8, "paddingBottom" to 8, "paddingLeft" to 8)), "wtu-16vqpiu-11" to _pS(_uM("borderTopColor" to "#bbf7d0", "borderRightColor" to "#bbf7d0", "borderBottomColor" to "#bbf7d0", "borderLeftColor" to "#bbf7d0")), "wtu-1gdtqyh-12" to _pS(_uM("color" to "#15803d")), "wtu-1ys92t7-13" to _pS(_uM("marginRight" to 6)), "wtu-165ep59-14" to _pS(_uM("color" to "#166534")), "wtu-1nu791o-15" to _pS(_uM("--tw-font-weight" to "var(--font-weight-medium, 500)", "fontWeight" to 500)), "wtu-1sh719e-16" to _pS(_uM("fontSize" to 10)), "wtu-1qit6r8-17" to _pS(_uM("color" to "#22c55e")), "wtu-1aizezg-18" to _pS(_uM("marginLeft" to "auto")), "wtu-ntizu3-19" to _pS(_uM("color" to "#64748b")), "wtu-5777z3-1a" to _pS(_uM("backgroundColor" to "#ecfdf5")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM())
        var propsNeedCastKeys: UTSArray<String> = _uA()
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
