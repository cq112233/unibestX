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
open class GenSrcSubTailwindcssComponentsWeappTailwindcss : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {}
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _cache = this.`$`.renderCache
        return _cE("view", _uM("class" to "wtu-gifzto-0"), _uA(
            _cE("image", _uM("src" to "/static/logo-text-colorful.png", "class" to "wtu-rshcm6-1 wtu-8uk72j-2")),
            _cE("view", null, _uA(
                _cE("text", _uM("class" to "wtu-16dgrlp-3 wtu-1ps2q5z-4 wtu-8rd55c-5"), " tw.icebreaker.top ")
            )),
            _cE("view", null, _uA(
                _cE("text", _uM("class" to "wtu-s3p7ug-6 wtu-1c5mft6-7"), "你可以在上方的官网上，找到大量的提效解决方案")
            ))
        ))
    }
    companion object {
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("wtu-gifzto-0" to _pS(_uM("paddingLeft" to "32rpx", "paddingRight" to "32rpx")), "wtu-rshcm6-1" to _pS(_uM("width" to 300)), "wtu-8uk72j-2" to _pS(_uM("height" to 48.3)), "wtu-16dgrlp-3" to _pS(_uM("fontSize" to "48rpx", "lineHeight" to 1.33333)), "wtu-1ps2q5z-4" to _pS(_uM("textDecorationLine" to "underline")), "wtu-8rd55c-5" to _pS(_uM("textAlign" to "center")), "wtu-s3p7ug-6" to _pS(_uM("fontSize" to "24rpx", "lineHeight" to 1.33333)), "wtu-1c5mft6-7" to _pS(_uM("color" to "rgba(74,85,101,0.75)")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM())
        var propsNeedCastKeys: UTSArray<String> = _uA()
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
