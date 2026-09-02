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
import io.dcloud.uniapp.extapi.showToast as uni_showToast
open class GenSrcPagesBasicComponentsChildDemoBox : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {}
    open var title: String by `$props`
    open var count: Number by `$props`
    open var tags: UTSArray<String> by `$props`
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenSrcPagesBasicComponentsChildDemoBox) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesBasicComponentsChildDemoBox
            val _cache = __ins.renderCache
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val inputMsg = ref("Hello Parent from Child!")
            fun gen_handleAdd_fn() {
                emit("add", 1)
            }
            val handleAdd = ::gen_handleAdd_fn
            fun gen_handleReset_fn() {
                emit("reset")
            }
            val handleReset = ::gen_handleReset_fn
            fun gen_handleSendMsg_fn() {
                if (inputMsg.value.trim() == "") {
                    uni_showToast(ShowToastOptions(title = "请输入消息内容", icon = "none"))
                    return
                }
                emit("send-msg", inputMsg.value)
                uni_showToast(ShowToastOptions(title = "消息已发送", icon = "success"))
            }
            val handleSendMsg = ::gen_handleSendMsg_fn
            return fun(): Any? {
                return _cE("view", _uM("class" to "wtu-zipktt-0 wtu-1v0f2ef-1 wtu-j5w8hi-2 wtu-1oapzb6-3 wtu-efe1oe-4 wtu-6plw78-5"), _uA(
                    _cE("view", _uM("class" to "wtu-1k2269n-6"), _uA(
                        renderSlot(_ctx.`$slots`, "header", _uO(), fun(): UTSArray<Any> {
                            return _uA(
                                _cE("text", _uM("class" to "wtu-5zjli3-7 wtu-1nivbe9-8 wtu-15nsgd4-9"), "📦 " + _tD(_ctx.title) + "（默认 Header）", 1)
                            )
                        }
                        ),
                        _cE("view", _uM("class" to "wtu-1t03los-a wtu-qb9abt-b wtu-jtxdk8-c"))
                    )),
                    _cE("view", _uM("class" to "wtu-ucwwyt-d wtu-182oteh-e wtu-1kpj8o8-f wtu-1adrg6y-g wtu-1oapzb6-3 wtu-efe1oe-4 wtu-7kw8bf-h"), _uA(
                        _cE("text", _uM("class" to "wtu-1pxnoyx-i wtu-1nivbe9-8 wtu-c3ez2v-j wtu-yp9fxe-k"), "【父传子 Props 动态接收】"),
                        _cE("view", _uM("class" to "wtu-x7nkyg-l wtu-ix6v4k-m"), _uA(
                            _cE("text", _uM("class" to "wtu-1pxnoyx-i wtu-grng8o-n"), "父组件传递的 Count: "),
                            _cE("text", _uM("class" to "wtu-5zjli3-7 wtu-1nivbe9-8 wtu-18ekrle-o wtu-9yebru-p"), _tD(_ctx.count), 1)
                        ))
                    )),
                    _cE("view", _uM("class" to "wtu-ucwwyt-d wtu-182oteh-e wtu-1kpj8o8-f wtu-1adrg6y-g wtu-1oapzb6-3 wtu-efe1oe-4 wtu-7kw8bf-h"), _uA(
                        _cE("text", _uM("class" to "wtu-1pxnoyx-i wtu-1nivbe9-8 wtu-c3ez2v-j wtu-hisbzo-q"), "【具名作用域插槽 (Slot 向父组件传参)】"),
                        _cE(Fragment, null, RenderHelpers.renderList(_ctx.tags, fun(item, index, __index, _cached): Any {
                            return _cE("view", _uM("key" to index, "class" to "wtu-hisbzo-q"), _uA(
                                renderSlot(_ctx.`$slots`, "itemSlot", _uM("item" to item, "index" to index), fun(): UTSArray<Any> {
                                    return _uA(
                                        _cE("view", _uM("class" to "wtu-zipktt-0 wtu-l9uwt0-r wtu-2vrnhv-s"), _uA(
                                            _cE("text", _uM("class" to "wtu-1pxnoyx-i wtu-grng8o-n"), "Tag " + _tD(index + 1) + ": " + _tD(item), 1)
                                        ))
                                    )
                                }
                                )
                            ))
                        }
                        ), 128)
                    )),
                    _cE("view", _uM("class" to "wtu-1k2269n-6 wtu-182oteh-e wtu-1kpj8o8-f wtu-1adrg6y-g wtu-1oapzb6-3 wtu-efe1oe-4 wtu-7kw8bf-h"), _uA(
                        _cE("text", _uM("class" to "wtu-1pxnoyx-i wtu-1nivbe9-8 wtu-c3ez2v-j wtu-1rszb3q-t"), "【子传父 Emits 事件触发】"),
                        _cE("view", _uM("class" to "wtu-x7nkyg-l wtu-jpge2z-u wtu-ix6v4k-m wtu-1rszb3q-t"), _uA(
                            _cE("view", _uM("class" to "wtu-812ws7-v wtu-s60y7a-w wtu-1uy7k1u-x wtu-1i4pv7e-y wtu-x7nkyg-l wtu-ix6v4k-m wtu-1pd1px4-z wtu-1udz6jo-10", "onClick" to handleAdd), _uA(
                                _cE("text", _uM("class" to "wtu-ih0clp-11 wtu-1pxnoyx-i"), "触发 Count + 1")
                            )),
                            _cE("view", _uM("class" to "wtu-812ws7-v wtu-4dipnu-12 wtu-1uy7k1u-x wtu-1i4pv7e-y wtu-x7nkyg-l wtu-ix6v4k-m wtu-1pd1px4-z wtu-9yebru-p", "onClick" to handleReset), _uA(
                                _cE("text", _uM("class" to "wtu-ih0clp-11 wtu-1pxnoyx-i"), "触发 重置事件")
                            ))
                        )),
                        _cE("view", _uM("class" to "wtu-zipktt-0 wtu-1uy7k1u-x wtu-1y1vdmh-13 wtu-1oapzb6-3 wtu-efe1oe-4 wtu-6plw78-5 wtu-x7nkyg-l wtu-ix6v4k-m wtu-jpge2z-u"), _uA(
                            _cE("input", _uM("modelValue" to inputMsg.value, "onInput" to fun(`$event`: UniInputEvent){
                                inputMsg.value = `$event`.detail.value
                            }
                            , "placeholder" to "输入要送回父组件的消息", "class" to "wtu-1pxnoyx-i wtu-812ws7-v wtu-8x6qng-14 wtu-1w52wo5-15 wtu-182oteh-e wtu-l9uwt0-r wtu-1oapzb6-3 wtu-efe1oe-4 wtu-tbqpp4-16"), null, 40, _uA(
                                "modelValue",
                                "onInput"
                            )),
                            _cE("view", _uM("class" to "wtu-aufsc6-17 wtu-1uy7k1u-x wtu-8x6qng-14 wtu-xmcsy6-18 wtu-x7nkyg-l wtu-ix6v4k-m wtu-1pd1px4-z wtu-lfb8b4-19", "onClick" to handleSendMsg), _uA(
                                _cE("text", _uM("class" to "wtu-ih0clp-11 wtu-1pxnoyx-i"), "发送给父组件")
                            ))
                        ))
                    )),
                    _cE("view", _uM("class" to "wtu-1iqlyvo-1a"), _uA(
                        _cE("view", _uM("class" to "wtu-1t03los-a wtu-qb9abt-b wtu-1rszb3q-t")),
                        renderSlot(_ctx.`$slots`, "footer", _uO(), fun(): UTSArray<Any> {
                            return _uA(
                                _cE("text", _uM("class" to "wtu-1h5fdje-1b wtu-1xb3h6w-1c"), "（默认 Footer）")
                            )
                        }
                        )
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
                return _uM("wtu-zipktt-0" to _pS(_uM("backgroundColor" to "#f8fafc")), "wtu-1v0f2ef-1" to _pS(_uM("borderTopLeftRadius" to 12, "borderTopRightRadius" to 12, "borderBottomRightRadius" to 12, "borderBottomLeftRadius" to 12)), "wtu-j5w8hi-2" to _pS(_uM("paddingTop" to 14, "paddingRight" to 14, "paddingBottom" to 14, "paddingLeft" to 14)), "wtu-1oapzb6-3" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderRightStyle" to "var(--tw-border-style)", "borderBottomStyle" to "var(--tw-border-style)", "borderLeftStyle" to "var(--tw-border-style)", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "wtu-efe1oe-4" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "wtu-6plw78-5" to _pS(_uM("borderTopColor" to "#e2e8f0", "borderRightColor" to "#e2e8f0", "borderBottomColor" to "#e2e8f0", "borderLeftColor" to "#e2e8f0")), "wtu-1k2269n-6" to _pS(_uM("marginBottom" to 10)), "wtu-5zjli3-7" to _pS(_uM("fontSize" to 14)), "wtu-1nivbe9-8" to _pS(_uM("--tw-font-weight" to "var(--font-weight-bold, 700)", "fontWeight" to 700)), "wtu-15nsgd4-9" to _pS(_uM("color" to "#334155")), "wtu-1t03los-a" to _pS(_uM("height" to 1)), "wtu-qb9abt-b" to _pS(_uM("backgroundColor" to "#e2e8f0")), "wtu-jtxdk8-c" to _pS(_uM("marginTop" to 8)), "wtu-ucwwyt-d" to _pS(_uM("marginBottom" to 12)), "wtu-182oteh-e" to _pS(_uM("backgroundColor" to "#ffffff")), "wtu-1kpj8o8-f" to _pS(_uM("borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "wtu-1adrg6y-g" to _pS(_uM("paddingTop" to 10, "paddingRight" to 10, "paddingBottom" to 10, "paddingLeft" to 10)), "wtu-7kw8bf-h" to _pS(_uM("borderTopColor" to "#f1f5f9", "borderRightColor" to "#f1f5f9", "borderBottomColor" to "#f1f5f9", "borderLeftColor" to "#f1f5f9")), "wtu-1pxnoyx-i" to _pS(_uM("fontSize" to 12)), "wtu-c3ez2v-j" to _pS(_uM("color" to "#475569")), "wtu-yp9fxe-k" to _pS(_uM("marginBottom" to 4)), "wtu-x7nkyg-l" to _pS(_uM("flexDirection" to "row")), "wtu-ix6v4k-m" to _pS(_uM("alignItems" to "center")), "wtu-grng8o-n" to _pS(_uM("color" to "#64748b")), "wtu-18ekrle-o" to _pS(_uM("color" to "#2563eb")), "wtu-9yebru-p" to _pS(_uM("marginLeft" to 6)), "wtu-hisbzo-q" to _pS(_uM("marginBottom" to 6)), "wtu-l9uwt0-r" to _pS(_uM("borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4, "borderBottomLeftRadius" to 4)), "wtu-2vrnhv-s" to _pS(_uM("paddingTop" to 6, "paddingRight" to 6, "paddingBottom" to 6, "paddingLeft" to 6)), "wtu-1rszb3q-t" to _pS(_uM("marginBottom" to 8)), "wtu-jpge2z-u" to _pS(_uM("justifyContent" to "space-between")), "wtu-812ws7-v" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "wtu-s60y7a-w" to _pS(_uM("backgroundColor" to "#2563eb")), "wtu-1uy7k1u-x" to _pS(_uM("borderTopLeftRadius" to 6, "borderTopRightRadius" to 6, "borderBottomRightRadius" to 6, "borderBottomLeftRadius" to 6)), "wtu-1i4pv7e-y" to _pS(_uM("height" to 32)), "wtu-1pd1px4-z" to _pS(_uM("justifyContent" to "center")), "wtu-1udz6jo-10" to _pS(_uM("marginRight" to 6)), "wtu-ih0clp-11" to _pS(_uM("color" to "#ffffff")), "wtu-4dipnu-12" to _pS(_uM("backgroundColor" to "#dc2626")), "wtu-1y1vdmh-13" to _pS(_uM("paddingTop" to 8, "paddingRight" to 8, "paddingBottom" to 8, "paddingLeft" to 8)), "wtu-8x6qng-14" to _pS(_uM("height" to 30)), "wtu-1w52wo5-15" to _pS(_uM("paddingLeft" to 8, "paddingRight" to 8)), "wtu-tbqpp4-16" to _pS(_uM("borderTopColor" to "#cbd5e1", "borderRightColor" to "#cbd5e1", "borderBottomColor" to "#cbd5e1", "borderLeftColor" to "#cbd5e1")), "wtu-aufsc6-17" to _pS(_uM("backgroundColor" to "#059669")), "wtu-xmcsy6-18" to _pS(_uM("paddingLeft" to 10, "paddingRight" to 10)), "wtu-lfb8b4-19" to _pS(_uM("marginLeft" to 8)), "wtu-1iqlyvo-1a" to _pS(_uM("marginTop" to 4)), "wtu-1h5fdje-1b" to _pS(_uM("fontSize" to 11)), "wtu-1xb3h6w-1c" to _pS(_uM("color" to "#94a3b8")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("add" to null, "reset" to null, "send-msg" to null)
        var props = _nP(_uM("title" to _uM("type" to "String", "default" to "通信子组件"), "count" to _uM("type" to "Number", "default" to 0), "tags" to _uM("type" to "Array", "default" to fun(): UTSArray<String> {
            return _uA<String>("Vue3", "uni-app X", "UTS")
        }
        )))
        var propsNeedCastKeys = _uA(
            "title",
            "count",
            "tags"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
