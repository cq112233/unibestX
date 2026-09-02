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
import io.dcloud.uniapp.extapi.showToast as uni_showToast
open class GenSrcSubAuthRegister : BasePage {
    constructor(__ins: ComponentInternalInstance, __renderer: String?) : super(__ins, __renderer) {}
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenSrcSubAuthRegister) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcSubAuthRegister
            val _cache = __ins.renderCache
            fun gen_doRegister_fn() {
                uni_showToast(ShowToastOptions(title = "注册成功", icon = "success"))
                setTimeout(fun(){
                    uni_navigateTo(NavigateToOptions(url = LOGIN_PAGE))
                }
                , 1000)
            }
            val doRegister = ::gen_doRegister_fn
            return fun(): Any? {
                return _cV(unref(GenAppkuClass), null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cV(unref(GenSrcLayoutsNavbarClass), _uM("show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to false, "page-style" to _uO("navigationBarTitleText" to "注册", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "flex-1 p-_b30px_B items-center justify-center"), _uA(
                                    _cE("view", _uM("class" to "mb-_b30px_B"), _uA(
                                        _cE("text", _uM("class" to "text-_b20px_B font-bold text-_b_h1e293b_B"), "注册页")
                                    )),
                                    _cE("view", _uM("class" to "w-_b200px_B h-_b44px_B rounded-_b8px_B bg-_b_h10b981_B flex flex-row items-center justify-center", "onClick" to doRegister), _uA(
                                        _cE("text", _uM("class" to "text-_b_hffffff_B text-_b14px_B font-bold"), "点击模拟注册")
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
                return _uM("flex-1" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "p-_b30px_B" to _pS(_uM("paddingTop" to 30, "paddingRight" to 30, "paddingBottom" to 30, "paddingLeft" to 30)), "items-center" to _pS(_uM("alignItems" to "center")), "justify-center" to _pS(_uM("justifyContent" to "center")), "mb-_b30px_B" to _pS(_uM("marginBottom" to 30)), "text-_b20px_B" to _pS(_uM("fontSize" to 20)), "font-bold" to _pS(_uM("--tw-font-weight" to "700", "fontWeight" to 700)), "text-_b_h1e293b_B" to _pS(_uM("color" to "#1e293b")), "w-_b200px_B" to _pS(_uM("width" to 200)), "h-_b44px_B" to _pS(_uM("height" to 44)), "rounded-_b8px_B" to _pS(_uM("borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "bg-_b_h10b981_B" to _pS(_uM("backgroundColor" to "#10b981")), "flex" to _pS(_uM("display" to "flex")), "flex-row" to _pS(_uM("flexDirection" to "row")), "text-_b_hffffff_B" to _pS(_uM("color" to "#ffffff")), "text-_b14px_B" to _pS(_uM("fontSize" to 14)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM())
        var propsNeedCastKeys: UTSArray<String> = _uA()
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
