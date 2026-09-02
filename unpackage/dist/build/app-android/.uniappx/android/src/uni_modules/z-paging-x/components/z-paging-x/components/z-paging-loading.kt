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
import io.dcloud.uniapp.extapi.getElementById as uni_getElementById
open class GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoading : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {}
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoading) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesZPagingXComponentsZPagingXComponentsZPagingLoading
            val _cache = __ins.renderCache
            val times = ref(0)
            val element = ref<UniElement?>(null)
            val base64FlowerImg = ref(base64Flower)
            val doRotate = fun(){
                if (element.value != null) {
                    times.value = times.value + 1
                    element.value!!.style.setProperty("transform", "rotate(" + times.value * 360 + "deg)")
                    element.value!!.style.setProperty("transition-duration", "1000ms")
                }
            }
            onMounted(fun(){
                nextTick(fun(){
                    setTimeout(fun(){
                        element.value = uni_getElementById("z-paging-loading-img")
                        doRotate()
                    }
                    , 10)
                }
                )
            }
            )
            return fun(): Any? {
                return _cE("image", _uM("class" to "zpx-loading-img", "id" to "z-paging-loading-img", "src" to base64FlowerImg.value, "onTransitionend" to doRotate), null, 40, _uA(
                    "src"
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
                return _uM("zpx-loading-img" to _pS(_uM("width" to "34rpx", "height" to "34rpx", "transitionDuration" to "2000ms", "transitionProperty" to "transform", "transitionTimingFunction" to "linear", "transform" to "rotate(0deg)")), "@TRANSITION" to _uM("zpx-loading-img" to _uM("duration" to "2000ms", "property" to "transform", "timingFunction" to "linear")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM())
        var propsNeedCastKeys: UTSArray<String> = _uA()
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
