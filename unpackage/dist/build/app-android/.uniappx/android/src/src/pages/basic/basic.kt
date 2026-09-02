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
open class GenSrcPagesBasicBasic : BasePage {
    constructor(__ins: ComponentInternalInstance, __renderer: String?) : super(__ins, __renderer) {}
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenSrcPagesBasicBasic) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesBasicBasic
            val _cache = __ins.renderCache
            onNavbarPullDownRefresh(fun(){
                setTimeout(fun(){
                    stopNavbarPullDownRefresh()
                }
                , 1000)
            }
            )
            onBackPress(fun(options: OnBackPressOptions): Boolean {
                if (options.from == "backbutton") {
                    return handleBackPressExit()
                }
                return false
            }
            )
            onResize(fun(_options){
                updateSystemInfo()
            }
            )
            return fun(): Any? {
                return _cV(unref(GenAppkuClass), null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cV(unref(GenSrcLayoutsNavbarClass), _uM("show-back" to false, "enable-pull-down-refresh" to true, "page-style" to _uO("navigationBarTitleText" to "基础", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "wtu-18katrf-0"), _uA(
                                    _cE("view", _uM("class" to "wtu-18katrf-0"), _uA(
                                        _cV(unref(GenSrcPagesBasicComponentsTailwindcssDemoCardClass)),
                                        _cV(unref(GenSrcPagesBasicComponentsThemeSwitchCardClass)),
                                        _cV(unref(GenSrcPagesBasicComponentsRouterDemoCardClass)),
                                        _cV(unref(GenSrcPagesBasicComponentsLangSwitchCardClass)),
                                        _cV(unref(GenSrcPagesBasicComponentsIconDemoCardClass)),
                                        _cV(unref(GenSrcPagesBasicComponentsHttpDemoCardClass)),
                                        _cV(unref(GenSrcPagesBasicComponentsToastDemoCardClass)),
                                        _cV(unref(GenSrcPagesBasicComponentsPropsDemoCardClass)),
                                        _cV(unref(GenSrcPagesBasicComponentsSystemInfoDemoCardClass))
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
                return _uM("wtu-18katrf-0" to _pS(_uM("flexDirection" to "column")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM())
        var propsNeedCastKeys: UTSArray<String> = _uA()
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
