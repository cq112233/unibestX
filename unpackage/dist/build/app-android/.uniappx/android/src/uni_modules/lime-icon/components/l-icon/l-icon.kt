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
open class GenUniModulesLimeIconComponentsLIconLIcon : VueComponent, IconProps {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {}
    override var name: String by `$props`
    override var color: String? by `$props`
    override var size: Any? by `$props`
    override var prefix: String by `$props`
    override var inherit: Boolean by `$props`
    override var web: Boolean by `$props`
    override var lClass: Any? by `$props`
    override var lStyle: Any? by `$props`
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenUniModulesLimeIconComponentsLIconLIcon) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesLimeIconComponentsLIconLIcon
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val _useIcon = useIcon(computed(fun(): String {
                return props.name
            }
            ), UseIconOptions(prefix = props.prefix))
            val type = _useIcon.type
            val fontIcon = _useIcon.fontIcon
            val imageUrl = _useIcon.imageUrl
            val iconifyUrl = _useIcon.iconifyUrl
            val parsed = _useIcon.parsed
            val fontLoading = computed(fun(): Boolean {
                if (type.value == "font") {
                    if (fontIcon.value?.fontFamily == "l") {
                        return false
                    }
                    return loadingFonts.value.some(fun(item): Boolean {
                        return item.fontFamily == fontIcon.value?.fontFamily
                    }
                    )
                }
                return false
            }
            )
            val classes = computed(fun(): String {
                val prefix = props.prefix ?: "l"
                return classNames(if (type.value == "font") {
                    prefix
                } else {
                    null
                }
                , props.lClass)
            }
            )
            val styles = computed(fun(): String {
                val fontSize = addUnit(props.size)
                val isFont = type.value == "font"
                return stringifyStyle(_uO("fontFamily" to if (isFont) {
                    fontIcon.value?.fontFamily
                } else {
                    false
                }
                , "fontSize" to if (isFont) {
                    fontSize
                } else {
                    false
                }
                , "color" to if (isFont) {
                    props.color
                } else {
                    false
                }
                , "width" to if (!isFont) {
                    fontSize
                } else {
                    false
                }
                , "height" to if (!isFont) {
                    fontSize
                } else {
                    false
                }
                ), props.lStyle)
            }
            )
            val handleClick = fun(){
                emit("click")
            }
            return fun(): Any? {
                return if (isTrue(unref(type) == "font" && !unref(fontLoading))) {
                    _cE("text", _uM("key" to 0, "class" to _nC(_uA(
                        "l-icon l-icon--font l-class",
                        unref(classes)
                    )), "style" to _nS(unref(styles)), "onClick" to handleClick), _tD(unref(fontIcon)?.char), 7)
                } else {
                    if (isTrue(unref(type) == "image" && (!unref(parsed).isSvg || _ctx.color == null))) {
                        _cE("image", _uM("key" to 1, "class" to _nC(_uA(
                            "l-icon l-icon--image l-class",
                            unref(classes)
                        )), "style" to _nS(unref(styles)), "src" to unref(imageUrl), "onClick" to handleClick), null, 14, _uA(
                            "src"
                        ))
                    } else {
                        if (isTrue(unref(iconifyUrl) != null || (unref(type) == "image" && unref(parsed).isSvg && _ctx.color != null))) {
                            _cE("image", _uM("key" to 2, "class" to _nC(_uA(
                                "l-icon l-icon--image l-class",
                                unref(classes)
                            )), "style" to _nS(unref(styles)), "src" to (unref(iconifyUrl) ?: unref(imageUrl)), "onClick" to handleClick), null, 14, _uA(
                                "src"
                            ))
                        } else {
                            _cC("v-if", true)
                        }
                    }
                }
            }
        }
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("l-icon--font" to _pS(_uM("fontFamily" to "l", "textAlign" to "center")), "l-icon--image" to _pS(_uM("width" to "var(--l-icon-size, 16px)", "height" to "var(--l-icon-size, 16px)")), "@FONT-FACE" to _uM("0" to _uM("fontFamily" to "l", "src" to "url(\"/uni_modules/lime-icon/static/app/t4.ttf\")")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("click" to null)
        var props = _nP(_uM("name" to _uM("type" to "String", "required" to true, "default" to ""), "color" to _uM("type" to "String", "required" to false), "size" to _uM("type" to _uA(
            "String",
            "Number"
        ), "required" to false), "prefix" to _uM("type" to "String", "required" to true, "default" to "l"), "inherit" to _uM("type" to "Boolean", "required" to true, "default" to true), "web" to _uM("type" to "Boolean", "required" to true, "default" to false), "lClass" to _uM("type" to null, "required" to false, "externalClasses" to true, "skipCheck" to true), "lStyle" to _uM("type" to _uA(
            "String",
            "UTSJSONObject"
        ), "required" to false)))
        var propsNeedCastKeys = _uA(
            "name",
            "prefix",
            "inherit",
            "web"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
