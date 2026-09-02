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
open class GenSrcPagesFunctionFunction : BasePage {
    constructor(__ins: ComponentInternalInstance, __renderer: String?) : super(__ins, __renderer) {}
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenSrcPagesFunctionFunction) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesFunctionFunction
            val _cache = __ins.renderCache
            onNavbarPullDownRefresh(fun(){
                UTSPromise(fun(resolve, _reject){
                    setTimeout(fun(){
                        resolve(true)
                    }
                    , 1000)
                }
                ).then(fun(){
                    stopNavbarPullDownRefresh()
                }
                )
            }
            )
            onBackPress(fun(options: OnBackPressOptions): Boolean {
                if (options.from == "backbutton") {
                    return handleBackPressExit()
                }
                return false
            }
            )
            return fun(): Any? {
                return _cV(unref(GenAppkuClass), null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cV(unref(GenSrcLayoutsNavbarClass), _uM("show-back" to false, "enable-pull-down-refresh" to true, "page-style" to _uO("navigationBarTitleText" to "功能", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", null, _uA(
                                    _cE("view", _uM("class" to "wtu-1i41ley-0 wtu-1a1clmh-1 wtu-qtpsxx-2"), _uA(
                                        _cE("text", _uM("class" to "wtu-ympeof-3 wtu-dexfdw-4 wtu-1macy2r-5"), "设备系统信息"),
                                        _cE("text", _uM("class" to "wtu-1q99rg1-6 wtu-17u3i8b-7 wtu-1g5yxwv-8"), "演示 iOS/Android 原生设备 API 调用与状态读取")
                                    )),
                                    _cV(unref(GenSrcPagesFunctionComponentsEnvCardClass)),
                                    _cV(unref(GenSrcPagesFunctionComponentsZPagingDemoCardClass)),
                                    _cV(unref(GenSrcPagesFunctionComponentsSystemInfoCardClass)),
                                    _cV(unref(GenSrcPagesFunctionComponentsHapticsCardClass)),
                                    _cV(unref(GenSrcPagesFunctionComponentsToastCardClass)),
                                    _cV(unref(GenSrcPagesFunctionComponentsMediaCardClass)),
                                    _cV(unref(GenSrcPagesFunctionComponentsLodashDemoCardClass)),
                                    _cV(unref(GenSrcPagesFunctionComponentsCryptoDemoCardClass)),
                                    _cV(unref(GenSrcPagesFunctionComponentsTimeDemoCardClass)),
                                    _cV(unref(GenSrcPagesFunctionComponentsSignatureCardClass)),
                                    _cV(unref(GenSrcPagesFunctionComponentsEchartsDemoCardClass))
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
                return _uM("wtu-1i41ley-0" to _pS(_uM("paddingTop" to 20)), "wtu-1a1clmh-1" to _pS(_uM("paddingLeft" to 16, "paddingRight" to 16)), "wtu-qtpsxx-2" to _pS(_uM("paddingBottom" to 10)), "wtu-ympeof-3" to _pS(_uM("fontSize" to 20)), "wtu-dexfdw-4" to _pS(_uM("--tw-font-weight" to "var(--font-weight-bold, 700)", "fontWeight" to 700)), "wtu-1macy2r-5" to _pS(_uM("color" to "#1a202c")), "wtu-1q99rg1-6" to _pS(_uM("fontSize" to 13)), "wtu-17u3i8b-7" to _pS(_uM("color" to "#718096")), "wtu-1g5yxwv-8" to _pS(_uM("marginTop" to 4)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM())
        var propsNeedCastKeys: UTSArray<String> = _uA()
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
