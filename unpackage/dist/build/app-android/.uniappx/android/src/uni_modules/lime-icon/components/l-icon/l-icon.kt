@file:Suppress("UNCHECKED_CAST", "USELESS_CAST", "INAPPLICABLE_JVM_NAME", "UNUSED_ANONYMOUS_PARAMETER", "SENSELESS_COMPARISON", "NAME_SHADOWING", "UNNECESSARY_NOT_NULL_ASSERTION")
package uni.UNI5198058
import io.dcloud.uniapp.*
import io.dcloud.uniapp.extapi.*
import io.dcloud.uniapp.framework.*
import io.dcloud.uniapp.runtime.*
import io.dcloud.uniapp.vue.*
import io.dcloud.uniapp.vue.shared.*
import io.dcloud.uts.*
import io.dcloud.uts.Map
import io.dcloud.uts.Set
import io.dcloud.uts.UTSAndroid
import kotlin.properties.Delegates
open class GenUniModulesLimeIconComponentsLIconLIcon : VueComponent, IconProps {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    override var name: String by `$props`
    override var color: String? by `$props`
    override var size: Any? by `$props`
    override var prefix: String by `$props`
    override var inherit: Boolean by `$props`
    override var web: Boolean by `$props`
    override var lClass: Any? by `$props`
    override var lStyle: Any? by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "parentData" to _uO(), "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>())
    }
    open fun `$upAddUnit`(kVal: Any?, unit: String? = ""): String {
        return addUnit(kVal, unit)
    }
    open fun `$upAddStyle`(customStyle: Any, target: String = "object"): Any {
        return addStyle(customStyle, target)
    }
    open fun `$upGetPx`(kVal: Any, unit: Boolean = false): String {
        return getPx(kVal, unit)
    }
    open var bem = ::gen_bem_fn
    open fun gen_bem_fn(name: String, fixed: UTSArray<String>, change: UTSArray<UTSArray<Any>>): String {
        return uni.UNI5198058.bem(name, fixed, change)
    }
    open fun openPage(urlKey: String = "url"): Unit {}
    open fun `$uGetRect`(selector: String, all: Boolean = false): UTSPromise<NodeInfo> {
        return uni.UNI5198058.upGetRect(selector, all, this)
    }
    open fun upGetRect(selector: String, all: Boolean = false): UTSPromise<NodeInfo> {
        return uni.UNI5198058.upGetRect(selector, all, this)
    }
    open var getChildIndex = ::gen_getChildIndex_fn
    open fun gen_getChildIndex_fn(ins: ComponentPublicInstance): Number {
        var index: Number = -1
        if (this.parent != null) {
            (this.parent!!!!.`$data`["children"] as UTSArray<ComponentPublicInstance>).forEach(fun(child: ComponentPublicInstance, idx: Number){
                if (child == ins) {
                    index = idx
                }
            }
            )
        }
        return index
    }
    open var getParent = ::gen_getParent_fn
    open fun gen_getParent_fn(name: String): ComponentPublicInstance? {
        var parent = this.`$parent`
        while(parent != null){
            if (parent.`$options`["name"] != name) {
                parent = parent.`$parent`
            } else {
                break
            }
        }
        return parent
    }
    open var addChild = ::gen_addChild_fn
    open fun gen_addChild_fn(ins: ComponentPublicInstance): Unit {
        var exist = false
        var childs: UTSArray<ComponentPublicInstance> = this.children
        childs.map(fun(child: ComponentPublicInstance){
            if (ins == child) {
                exist = true
            }
        }
        )
        if (exist == false) {
            this.children.push(ins)
        }
    }
    open var addChildRef = ::gen_addChildRef_fn
    open fun gen_addChildRef_fn(str: String): Unit {
        var index = this.childrenRefs.indexOf("str")
        if (index <= -1) {
            this.childrenRefs.push(str)
        }
    }
    open fun getParentData(parentName: String, refMode: Boolean = false): Any {
        var parent = this.getParent(parentName)
        this.parent = parent
        if (parent != null) {
            if (parent?.`$data` != null && parent?.`$data`?.get("children") != null) {
                if (refMode) {
                    parent?.`$callMethod`("addChildRef", this.`$data`["refstr"])
                } else {
                    parent?.`$callMethod`("addChild", this)
                }
            }
            UTSJSONObject.keys(this.parentData).map(fun(key: String){
                if (parent?.`$props` != null && parent?.`$props`?.get(key) != null) {
                    if (this.parentData?.get(key) != null) {
                        this.parentData[key] = parent?.`$props`?.get(key)
                    }
                }
                if (parent?.`$data` != null && parent?.`$data`?.get(key) != null) {
                    if (this.parentData?.get(key) != null) {
                        this.parentData[key] = parent?.`$data`?.get(key)
                    }
                }
            }
            )
        }
        return _uO()
    }
    open var preventEvent = ::gen_preventEvent_fn
    open fun gen_preventEvent_fn(e: UniEvent) {
        e.stopPropagation()
    }
    open var noop = ::gen_noop_fn
    open fun gen_noop_fn(e: UniEvent) {
        this.preventEvent(e)
    }
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
                val fontSize = addUnit__1(props.size)
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
                val _component_l_svg = resolveComponent("l-svg")
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
                            _cV(_component_l_svg, _uM("key" to 2, "class" to _nC(_uA(
                                "l-icon l-icon--image l-class",
                                unref(classes)
                            )), "style" to _nS(unref(styles)), "src" to (unref(iconifyUrl) ?: unref(imageUrl)), "color" to _ctx.color, "inherit" to _ctx.inherit, "web" to _ctx.web, "onClick" to handleClick), null, 8, _uA(
                                "class",
                                "style",
                                "src",
                                "color",
                                "inherit",
                                "web"
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
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "name" to _uM("type" to "String", "required" to true, "default" to ""), "color" to _uM("type" to "String", "required" to false), "size" to _uM("type" to _uA(
            "String",
            "Number"
        ), "required" to false), "prefix" to _uM("type" to "String", "required" to true, "default" to "l"), "inherit" to _uM("type" to "Boolean", "required" to true, "default" to true), "web" to _uM("type" to "Boolean", "required" to true, "default" to false), "lClass" to _uM("type" to null, "required" to false, "externalClasses" to true, "skipCheck" to true), "lStyle" to _uM("type" to _uA(
            "String",
            "UTSJSONObject"
        ), "required" to false)))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "name",
            "prefix",
            "inherit",
            "web"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
