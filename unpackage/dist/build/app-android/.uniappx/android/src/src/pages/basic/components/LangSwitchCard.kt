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
open class GenSrcPagesBasicComponentsLangSwitchCard : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {}
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenSrcPagesBasicComponentsLangSwitchCard) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesBasicComponentsLangSwitchCard
            val _cache = __ins.renderCache
            val appStore = useAppStore()
            val langTitle = computed(fun(): String {
                return `$t`("basic.langTitle")
            }
            )
            val langPreview = computed(fun(): String {
                return `$t`("basic.langPreview")
            }
            )
            val welcomeText = computed(fun(): String {
                return `$t`("message.welcome")
            }
            )
            val helloText = computed(fun(): String {
                return `$t`("message.hello", _uO("msg" to "hi"))
            }
            )
            val currentLocale = computed(fun(): String {
                return appStore.state.locale
            }
            )
            val isZhCN = computed(fun(): Boolean {
                return currentLocale.value == "zh-CN"
            }
            )
            val isEnUS = computed(fun(): Boolean {
                return currentLocale.value == "en-US"
            }
            )
            fun gen_switchLanguage_fn(lang: String) {
                appStore.setLocale(lang)
                setTabbarItem()
                uni_showToast(ShowToastOptions(title = `$t`("message.switch_success"), icon = "none", duration = 1500))
            }
            val switchLanguage = ::gen_switchLanguage_fn
            return fun(): Any? {
                val _component_uni_icons = resolveEasyComponent("uni-icons", GenUniModulesUniIconsComponentsUniIconsUniIconsClass)
                return _cV(unref(GenSrcPagesBasicComponentsCardClass), _uM("title" to langTitle.value), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cE("view", _uM("class" to "wtu-zeqk4z-0 wtu-1py2ikc-1 wtu-1aqjbfx-2 wtu-w8jmyu-3 wtu-opyasy-4 wtu-13g5z0w-5"), _uA(
                            _cE("text", _uM("class" to "wtu-1vqucrp-6 wtu-9qob8-7 wtu-1hy0bj4-8"), _tD(langPreview.value), 1),
                            _cE("text", _uM("class" to "wtu-f1cbux-9 wtu-tg5bk5-a wtu-uqoqln-b"), _tD(welcomeText.value), 1),
                            _cE("text", _uM("class" to "wtu-1wrjlrz-c wtu-apgfmb-d wtu-1nykptg-e"), _tD(helloText.value), 1)
                        )),
                        _cE("view", _uM("class" to "wtu-1xpqddw-f wtu-1t7tavk-g wtu-1fek2j3-h wtu-17qg8e9-i", "onClick" to fun(){
                            switchLanguage("zh-CN")
                        }
                        ), _uA(
                            _cE("view", _uM("class" to "wtu-1xpqddw-f wtu-1t7tavk-g"), _uA(
                                _cE("text", _uM("class" to "wtu-6xv57u-j wtu-1au22ic-k wtu-re8qpd-l"), "简体中文")
                            )),
                            _cE("view", _uM("class" to "wtu-1xpqddw-f wtu-1t7tavk-g"), _uA(
                                if (isTrue(isZhCN.value)) {
                                    _cV(_component_uni_icons, _uM("key" to 0, "type" to "checkmarkempty", "size" to "20", "style" to _nS(_uM("color" to "#3b82f6"))), null, 8, _uA(
                                        "style"
                                    ))
                                } else {
                                    _cC("v-if", true)
                                }
                            ))
                        ), 8, _uA(
                            "onClick"
                        )),
                        _cE("view", _uM("class" to "wtu-16287mo-m wtu-u63ba2-n")),
                        _cE("view", _uM("class" to "wtu-1xpqddw-f wtu-1t7tavk-g wtu-1fek2j3-h wtu-17qg8e9-i", "onClick" to fun(){
                            switchLanguage("en-US")
                        }
                        ), _uA(
                            _cE("view", _uM("class" to "wtu-1xpqddw-f wtu-1t7tavk-g"), _uA(
                                _cE("text", _uM("class" to "wtu-6xv57u-j wtu-1au22ic-k wtu-re8qpd-l"), "English")
                            )),
                            _cE("view", _uM("class" to "wtu-1xpqddw-f wtu-1t7tavk-g"), _uA(
                                if (isTrue(isEnUS.value)) {
                                    _cV(_component_uni_icons, _uM("key" to 0, "type" to "checkmarkempty", "size" to "20", "style" to _nS(_uM("color" to "#3b82f6"))), null, 8, _uA(
                                        "style"
                                    ))
                                } else {
                                    _cC("v-if", true)
                                }
                            ))
                        ), 8, _uA(
                            "onClick"
                        ))
                    )
                }
                ), "_" to 1), 8, _uA(
                    "title"
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
                return _uM("wtu-zeqk4z-0" to _pS(_uM("borderTopLeftRadius" to 12, "borderTopRightRadius" to 12, "borderBottomRightRadius" to 12, "borderBottomLeftRadius" to 12)), "wtu-1py2ikc-1" to _pS(_uM("paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 16, "paddingLeft" to 16)), "wtu-1aqjbfx-2" to _pS(_uM("marginBottom" to 16)), "wtu-w8jmyu-3" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderRightStyle" to "var(--tw-border-style)", "borderBottomStyle" to "var(--tw-border-style)", "borderLeftStyle" to "var(--tw-border-style)", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "wtu-opyasy-4" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "wtu-13g5z0w-5" to _pS(_uM("borderTopColor" to "#e2e8f0", "borderRightColor" to "#e2e8f0", "borderBottomColor" to "#e2e8f0", "borderLeftColor" to "#e2e8f0")), "wtu-1vqucrp-6" to _pS(_uM("fontSize" to 12)), "wtu-9qob8-7" to _pS(_uM("color" to "#94a3b8")), "wtu-1hy0bj4-8" to _pS(_uM("marginBottom" to 6)), "wtu-f1cbux-9" to _pS(_uM("fontSize" to 16)), "wtu-tg5bk5-a" to _pS(_uM("--tw-font-weight" to "var(--font-weight-bold, 700)", "fontWeight" to 700)), "wtu-uqoqln-b" to _pS(_uM("color" to "#1e293b")), "wtu-1wrjlrz-c" to _pS(_uM("fontSize" to 14)), "wtu-apgfmb-d" to _pS(_uM("color" to "#475569")), "wtu-1nykptg-e" to _pS(_uM("marginTop" to 8)), "wtu-1xpqddw-f" to _pS(_uM("flexDirection" to "row")), "wtu-1t7tavk-g" to _pS(_uM("alignItems" to "center")), "wtu-1fek2j3-h" to _pS(_uM("justifyContent" to "space-between")), "wtu-17qg8e9-i" to _pS(_uM("paddingTop" to 12, "paddingBottom" to 12)), "wtu-6xv57u-j" to _pS(_uM("fontSize" to 15)), "wtu-1au22ic-k" to _pS(_uM("color" to "#334155")), "wtu-re8qpd-l" to _pS(_uM("--tw-font-weight" to "var(--font-weight-medium, 500)", "fontWeight" to 500)), "wtu-16287mo-m" to _pS(_uM("height" to 1)), "wtu-u63ba2-n" to _pS(_uM("backgroundColor" to "#f1f5f9")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM())
        var propsNeedCastKeys: UTSArray<String> = _uA()
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
