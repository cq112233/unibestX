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
open class GenUniModulesUniIconsComponentsUniIconsUniIcons : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {}
    open var type: String by `$props`
    open var color: String by `$props`
    open var size: Any by `$props`
    open var fontFamily: String by `$props`
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenUniModulesUniIconsComponentsUniIconsUniIcons) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUniIconsComponentsUniIconsUniIcons
            val _cache = __ins.renderCache
            val props = __props
            fun gen_getFontSize_fn(size: Number): String {
                return size + "px"
            }
            val getFontSize = ::gen_getFontSize_fn
            val unicode = computed<String>(fun(): String {
                val codes = fontData.find(fun(item: IconsDataItem): Boolean {
                    return item.font_class == props.type
                }
                )
                if (codes != null) {
                    return codes.unicode
                }
                return ""
            }
            )
            val iconSize = computed<String>(fun(): String {
                val size = props.size
                if (UTSAndroid.`typeof`(size) == "string") {
                    val reg = UTSRegExp("^[0-9]*\$", "g")
                    return if (reg.test(size as String)) {
                        "" + (size as String) + "px"
                    } else {
                        "" + (size as String)
                    }
                }
                return getFontSize(size as Number)
            }
            )
            val styleObj = computed<UTSJSONObject>(fun(): UTSJSONObject {
                if (props.fontFamily != "") {
                    return _uO("color" to props.color, "fontSize" to iconSize.value, "fontFamily" to props.fontFamily)
                }
                return _uO("color" to props.color, "fontSize" to iconSize.value)
            }
            )
            return fun(): Any? {
                return _cE("text", _uM("class" to "uni-icons", "style" to _nS(styleObj.value)), _tD(unicode.value), 5)
            }
        }
        var name = "uni-icons"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("uni-icons" to _pS(_uM("fontFamily" to "UniIconsFontFamily", "fontSize" to 18, "fontStyle" to "normal", "color" to "#333333")), "@FONT-FACE" to _uM("0" to _uM("fontFamily" to "UniIconsFontFamily", "src" to "url('/assets/uniicons.32e978a5.ttf')")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM("type" to _uM("type" to "String", "default" to ""), "color" to _uM("type" to "String", "default" to "#333333"), "size" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to 16), "fontFamily" to _uM("type" to "String", "default" to "")))
        var propsNeedCastKeys = _uA(
            "type",
            "color",
            "size",
            "fontFamily"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
