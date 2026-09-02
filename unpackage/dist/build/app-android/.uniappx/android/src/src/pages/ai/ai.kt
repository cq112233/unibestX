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
open class GenSrcPagesAiAi : BasePage {
    constructor(__ins: ComponentInternalInstance, __renderer: String?) : super(__ins, __renderer) {}
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenSrcPagesAiAi) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesAiAi
            val _cache = __ins.renderCache
            val messages = ref(_uA<ChatMessage>())
            val inputText = ref<String>("")
            val isTyping = ref<Boolean>(false)
            val scrollTop = ref<Number>(0)
            fun gen_isAiMessage_fn(sender: String): Boolean {
                return sender == "ai"
            }
            val isAiMessage = ::gen_isAiMessage_fn
            val safeAreaBottom = computed<Number>(fun(): Number {
                val insets = safeAreaInsets.value
                if (insets != null) {
                    return insets.bottom
                }
                return 0
            }
            )
            fun gen_getCurrentTime_fn(): String {
                val date = Date()
                val hours = date.getHours() as Number
                val minutes = date.getMinutes() as Number
                val hStr = if (hours < 10) {
                    "0" + hours
                } else {
                    "" + hours
                }
                val mStr = if (minutes < 10) {
                    "0" + minutes
                } else {
                    "" + minutes
                }
                return "" + hStr + ":" + mStr
            }
            val getCurrentTime = ::gen_getCurrentTime_fn
            fun gen_scrollToBottom_fn() {
                setTimeout(fun(){
                    scrollTop.value = scrollTop.value + 1000
                }
                , 100)
            }
            val scrollToBottom = ::gen_scrollToBottom_fn
            fun gen_sendMessage_fn() {
                val text = inputText.value.trim()
                if (text == "") {
                    return
                }
                val userMsgId = Date.now().toString(10)
                messages.value.push(ChatMessage(id = userMsgId, sender = "user", content = text, time = getCurrentTime()))
                inputText.value = ""
                scrollToBottom()
                isTyping.value = true
                setTimeout(fun(){
                    isTyping.value = false
                    var replyContent = "收到你的消息！目前这只是一个模拟的 AI 对话窗口，你可以在此基础上接入你自己的大语言模型（如 DeepSeek、OpenAI、Gemini等）。"
                    if (text.includes("你好") || text.includes("hello")) {
                        replyContent = "你好！我是你的 AI 助手，很高兴为你提供服务。有什么我可以帮你的吗？😊"
                    } else if (text.includes("模板") || text.includes("unibest")) {
                        replyContent = "unibestX 是基于 uni-app X 极速开发模板。它支持 TypeScript、UnoCSS、UTS 插件，并能完美编译为原生 Android/iOS App！"
                    } else if (text.includes("组件")) {
                        replyContent = "当前模板内置了许多优秀的组件与工具，例如 NavBar 导航栏、分页加载、网络请求等，你都可以直接使用。"
                    }
                    messages.value.push(ChatMessage(id = Date.now().toString(10), sender = "ai", content = replyContent, time = getCurrentTime()))
                    scrollToBottom()
                }
                , 800)
            }
            val sendMessage = ::gen_sendMessage_fn
            onMounted(fun(){
                messages.value.push(ChatMessage(id = "welcome", sender = "ai", content = "你好！我是你的 AI 智能助手。你可以询问我任何关于本应用的问题，或者只是和我随便聊聊！✨", time = getCurrentTime()))
            }
            )
            return fun(): Any? {
                val _component_uni_icons = resolveEasyComponent("uni-icons", GenUniModulesUniIconsComponentsUniIconsUniIconsClass)
                return _cV(unref(GenAppkuClass), null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cV(unref(GenSrcLayoutsNavbarClass), _uM("show-back" to true, "page-style" to _uO("navigationBarTitleText" to "AI 智能助手", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "page-root wtu-12mckpk-0 wtu-gwjw8e-1 wtu-1iiedf1-2"), _uA(
                                    _cE("scroll-view", _uM("class" to "wtu-12mckpk-0 wtu-3zg6a-3 wtu-1imgdni-4", "direction" to "vertical", "scroll-top" to unref(scrollTop), "scroll-with-animation" to true), _uA(
                                        _cE(Fragment, null, RenderHelpers.renderList(unref(messages), fun(msg, __key, __index, _cached): Any {
                                            return _cE("view", _uM("key" to msg.id, "class" to "wtu-15ke1fv-5 wtu-1iiedf1-2"), _uA(
                                                if (isTrue(isAiMessage(msg.sender))) {
                                                    _cE("view", _uM("key" to 0, "class" to "msg-row-start"), _uA(
                                                        _cE("view", _uM("class" to "wtu-8tr2im-6 wtu-7y5lr9-7 wtu-6q9kae-8 wtu-8tyvyh-9 wtu-mqpefj-a wtu-1qpn96n-b wtu-1lxf9re-c wtu-1ikrsu4-d"), _uA(
                                                            _cE("text", _uM("class" to "wtu-9vtjee-e wtu-msrkdo-f wtu-j5w2ks-g"), "AI")
                                                        )),
                                                        _cE("view", _uM("class" to "msg-content-left"), _uA(
                                                            _cE("view", _uM("class" to "wtu-rq9s3i-h wtu-78q8ib-i wtu-d58m5d-j wtu-5faia3-k wtu-1ikrsu4-d wtu-jpp5lf-l wtu-1nptzfn-m"), _uA(
                                                                _cE("text", _uM("class" to "wtu-1gyyuxw-n wtu-14sfh86-o wtu-1qe55dz-p"), _tD(msg.content), 1)
                                                            )),
                                                            _cE("text", _uM("class" to "wtu-1bj83jj-q wtu-1w0aoxm-r wtu-1rwo7k7-s wtu-34to1r-t"), _tD(msg.time), 1)
                                                        ))
                                                    ))
                                                } else {
                                                    _cE("view", _uM("key" to 1, "class" to "msg-row-end"), _uA(
                                                        _cE("view", _uM("class" to "msg-content-right"), _uA(
                                                            _cE("view", _uM("class" to "wtu-b3txcv-u wtu-78q8ib-i wtu-oa4lpf-v wtu-gkh66x-w wtu-1ikrsu4-d"), _uA(
                                                                _cE("text", _uM("class" to "wtu-9vtjee-e wtu-14sfh86-o wtu-1qe55dz-p"), _tD(msg.content), 1)
                                                            )),
                                                            _cE("text", _uM("class" to "wtu-1bj83jj-q wtu-1w0aoxm-r wtu-1rwo7k7-s wtu-f5xa25-x"), _tD(msg.time), 1)
                                                        )),
                                                        _cE("view", _uM("class" to "wtu-8tr2im-6 wtu-7y5lr9-7 wtu-6q9kae-8 wtu-u5zyoi-y wtu-mqpefj-a wtu-1qpn96n-b wtu-3mj074-z wtu-1ikrsu4-d"), _uA(
                                                            _cE("text", _uM("class" to "wtu-ucxd0z-10 wtu-msrkdo-f wtu-j5w2ks-g"), "ME")
                                                        ))
                                                    ))
                                                }
                                            ))
                                        }
                                        ), 128),
                                        if (isTrue(unref(isTyping))) {
                                            _cE("view", _uM("key" to 0, "class" to "msg-row-start wtu-15ke1fv-5"), _uA(
                                                _cE("view", _uM("class" to "wtu-8tr2im-6 wtu-7y5lr9-7 wtu-6q9kae-8 wtu-8tyvyh-9 wtu-mqpefj-a wtu-1qpn96n-b wtu-1lxf9re-c wtu-1ikrsu4-d"), _uA(
                                                    _cE("text", _uM("class" to "wtu-9vtjee-e wtu-msrkdo-f wtu-j5w2ks-g"), "AI")
                                                )),
                                                _cE("view", _uM("class" to "wtu-rq9s3i-h wtu-78q8ib-i wtu-d58m5d-j wtu-5faia3-k wtu-1ikrsu4-d wtu-jpp5lf-l wtu-1nptzfn-m"), _uA(
                                                    _cE("text", _uM("class" to "wtu-ucxd0z-10 wtu-14sfh86-o"), "AI 正在思考中...")
                                                ))
                                            ))
                                        } else {
                                            _cC("v-if", true)
                                        }
                                        ,
                                        _cE("view", _uM("style" to _nS(_uM("height" to ("" + (unref(safeAreaBottom) + 70) + "px")))), null, 4)
                                    ), 8, _uA(
                                        "scroll-top"
                                    )),
                                    _cE("view", _uM("class" to "footer-fixed wtu-rq9s3i-h wtu-r4rl0q-11 wtu-1nptzfn-m wtu-hixf31-12 wtu-1iiedf1-2", "style" to _nS(_uM("paddingBottom" to ("" + (unref(safeAreaBottom) + 10) + "px")))), _uA(
                                        _cE("view", _uM("class" to "wtu-on566v-13 wtu-mqpefj-a wtu-1t3d52l-14 wtu-15fkpjz-15 wtu-1owynq5-16 wtu-y3lmuv-17"), _uA(
                                            _cE("input", _uM("modelValue" to unref(inputText), "onInput" to fun(`$event`: UniInputEvent){
                                                trySetRefValue(inputText, `$event`.detail.value)
                                            }
                                            , "type" to "text", "placeholder" to "和 AI 助手聊点什么吧...", "placeholder-style" to "color: #94a3b8", "class" to "chat-input", "confirm-type" to "send", "onConfirm" to sendMessage), null, 40, _uA(
                                                "modelValue"
                                            )),
                                            _cE("view", _uM("class" to "wtu-qglysi-18 wtu-ikawjt-19 wtu-vh6n5g-1a wtu-8tyvyh-9 wtu-mqpefj-a wtu-1qpn96n-b wtu-1gsk3nn-1b", "onClick" to sendMessage), _uA(
                                                _cV(_component_uni_icons, _uM("type" to "paperplane-filled", "size" to "18", "color" to "#ffffff"))
                                            ))
                                        ))
                                    ), 4)
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
                return _uM("page-root" to _pS(_uM("height" to "100%", "display" to "flex", "flexDirection" to "column")), "footer-fixed" to _pS(_uM("position" to "fixed", "left" to 0, "right" to 0, "bottom" to 0, "zIndex" to 100)), "msg-row-start" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "flex-start")), "msg-row-end" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "flex-start", "justifyContent" to "flex-end")), "msg-content-left" to _pS(_uM("display" to "flex", "flexDirection" to "column", "maxWidth" to 270)), "msg-content-right" to _pS(_uM("display" to "flex", "flexDirection" to "column", "alignItems" to "flex-end", "maxWidth" to 270)), "flex-col" to _pS(_uM("display" to "flex", "flexDirection" to "column")), "flex-row" to _pS(_uM("display" to "flex", "flexDirection" to "row")), "items-center" to _pS(_uM("alignItems" to "center")), "justify-center" to _pS(_uM("justifyContent" to "center")), "flex-1" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "chat-input" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "height" to 36, "backgroundColor" to "#f1f5f9", "color" to "#1e293b", "fontSize" to 14, "borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "wtu-12mckpk-0" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "wtu-gwjw8e-1" to _pS(_uM("display" to "flex")), "wtu-1iiedf1-2" to _pS(_uM("flexDirection" to "column")), "wtu-3zg6a-3" to _pS(_uM("paddingLeft" to 15, "paddingRight" to 15)), "wtu-1imgdni-4" to _pS(_uM("paddingTop" to 10, "paddingBottom" to 10)), "wtu-15ke1fv-5" to _pS(_uM("marginBottom" to 15)), "wtu-8tr2im-6" to _pS(_uM("width" to 36)), "wtu-7y5lr9-7" to _pS(_uM("height" to 36)), "wtu-6q9kae-8" to _pS(_uM("borderTopLeftRadius" to 18, "borderTopRightRadius" to 18, "borderBottomRightRadius" to 18, "borderBottomLeftRadius" to 18)), "wtu-8tyvyh-9" to _pS(_uM("backgroundColor" to "#2563eb")), "wtu-mqpefj-a" to _pS(_uM("alignItems" to "center")), "wtu-1qpn96n-b" to _pS(_uM("justifyContent" to "center")), "wtu-1lxf9re-c" to _pS(_uM("marginRight" to 10)), "wtu-1ikrsu4-d" to _pS(_uM("--tw-inset-shadow" to "0 0 #0000", "--tw-inset-ring-shadow" to "0 0 #0000", "--tw-ring-offset-shadow" to "0 0 #0000", "--tw-ring-shadow" to "0 0 #0000", "--tw-shadow" to "0 1px 3px 0 var(--tw-shadow-color, rgba(0, 0, 0, 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgba(0, 0, 0, 0.1))", "boxShadow" to "var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)")), "wtu-9vtjee-e" to _pS(_uM("color" to "#ffffff")), "wtu-msrkdo-f" to _pS(_uM("fontSize" to 12)), "wtu-j5w2ks-g" to _pS(_uM("--tw-font-weight" to "var(--font-weight-bold, 700)", "fontWeight" to 700)), "wtu-rq9s3i-h" to _pS(_uM("backgroundColor" to "#ffffff")), "wtu-78q8ib-i" to _pS(_uM("paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12)), "wtu-d58m5d-j" to _pS(_uM("borderTopRightRadius" to 16, "borderBottomRightRadius" to 16)), "wtu-5faia3-k" to _pS(_uM("borderBottomLeftRadius" to 16)), "wtu-jpp5lf-l" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderRightStyle" to "var(--tw-border-style)", "borderBottomStyle" to "var(--tw-border-style)", "borderLeftStyle" to "var(--tw-border-style)", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "wtu-1nptzfn-m" to _pS(_uM("borderTopColor" to "#e2e8f0", "borderRightColor" to "#e2e8f0", "borderBottomColor" to "#e2e8f0", "borderLeftColor" to "#e2e8f0")), "wtu-1gyyuxw-n" to _pS(_uM("color" to "#1e293b")), "wtu-14sfh86-o" to _pS(_uM("fontSize" to 14)), "wtu-1qe55dz-p" to _pS(_uM("--tw-leading" to "var(--leading-relaxed, 1.625)", "lineHeight" to 1.625)), "wtu-1bj83jj-q" to _pS(_uM("color" to "#94a3b8")), "wtu-1w0aoxm-r" to _pS(_uM("fontSize" to 10)), "wtu-1rwo7k7-s" to _pS(_uM("marginTop" to 4)), "wtu-34to1r-t" to _pS(_uM("marginLeft" to 4)), "wtu-b3txcv-u" to _pS(_uM("backgroundColor" to "#10b981")), "wtu-oa4lpf-v" to _pS(_uM("borderTopLeftRadius" to 16, "borderBottomLeftRadius" to 16)), "wtu-gkh66x-w" to _pS(_uM("borderBottomRightRadius" to 16)), "wtu-f5xa25-x" to _pS(_uM("marginRight" to 4)), "wtu-u5zyoi-y" to _pS(_uM("backgroundColor" to "#e2e8f0")), "wtu-3mj074-z" to _pS(_uM("marginLeft" to 10)), "wtu-ucxd0z-10" to _pS(_uM("color" to "#64748b")), "wtu-r4rl0q-11" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderTopWidth" to 1)), "wtu-hixf31-12" to _pS(_uM("paddingTop" to 10, "paddingRight" to 10, "paddingBottom" to 10, "paddingLeft" to 10)), "wtu-on566v-13" to _pS(_uM("flexDirection" to "row")), "wtu-1t3d52l-14" to _pS(_uM("backgroundColor" to "#f1f5f9")), "wtu-15fkpjz-15" to _pS(_uM("borderTopLeftRadius" to 24, "borderTopRightRadius" to 24, "borderBottomRightRadius" to 24, "borderBottomLeftRadius" to 24)), "wtu-1owynq5-16" to _pS(_uM("paddingLeft" to 12, "paddingRight" to 12)), "wtu-y3lmuv-17" to _pS(_uM("paddingTop" to 6, "paddingBottom" to 6)), "wtu-qglysi-18" to _pS(_uM("width" to 32)), "wtu-ikawjt-19" to _pS(_uM("height" to 32)), "wtu-vh6n5g-1a" to _pS(_uM("borderTopLeftRadius" to 16, "borderTopRightRadius" to 16, "borderBottomRightRadius" to 16, "borderBottomLeftRadius" to 16)), "wtu-1gsk3nn-1b" to _pS(_uM("marginLeft" to 8)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM())
        var propsNeedCastKeys: UTSArray<String> = _uA()
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
