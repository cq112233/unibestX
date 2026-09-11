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
open class GenUniModulesUviewUltraComponentsUpCircleProgressUpCircleProgress : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var percentage: Any by `$props`
    open var activeColor: String by `$props`
    open var inactiveColor: String by `$props`
    open var width: Any by `$props`
    open var strokeWidth: Any by `$props`
    open var customStyle: Any by `$props`
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
        return uni.UNIB120614.bem(name, fixed, change)
    }
    open fun openPage(urlKey: String = "url"): Unit {}
    open fun `$uGetRect`(selector: String, all: Boolean = false): UTSPromise<NodeInfo> {
        return uni.UNIB120614.upGetRect(selector, all, this)
    }
    open fun upGetRect(selector: String, all: Boolean = false): UTSPromise<NodeInfo> {
        return uni.UNIB120614.upGetRect(selector, all, this)
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpCircleProgressUpCircleProgress) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpCircleProgressUpCircleProgress
            val _cache = __ins.renderCache
            fun normalizeNumber(value: Any?, defaultValue: Number = 0): Number {
                if (UTSAndroid.`typeof`(value) == "number") {
                    return value as Number
                }
                if (value == null) {
                    return defaultValue
                }
                val parsed = parseFloat(value.toString())
                return if (isNaN(parsed)) {
                    defaultValue
                } else {
                    parsed
                }
            }
            val props = __props
            val isDefaultColor = computed<Boolean>(fun(): Boolean {
                return props.activeColor == ""
            }
            )
            val percent = computed<Number>(fun(): Number {
                return range(0, 100, normalizeNumber(props.percentage, 30))
            }
            )
            val size = computed<String>(fun(): String {
                return addUnit(props.width)
            }
            )
            val stroke = computed<String>(fun(): String {
                return addUnit(props.strokeWidth)
            }
            )
            val rootStyle = computed(fun(): UTSJSONObject {
                val base: UTSJSONObject = _uO()
                base["width"] = size.value
                base["height"] = size.value
                val custom = addStyle(props.customStyle) as UTSJSONObject
                return deepMerge(base, custom) as UTSJSONObject
            }
            )
            val trackStyle = computed(fun(): UTSJSONObject {
                return _uO("width" to size.value, "height" to size.value, "borderWidth" to stroke.value, "borderColor" to props.inactiveColor)
            }
            )
            val textStyle = computed(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                if (props.activeColor != "") {
                    style["color"] = props.activeColor
                }
                return style
            }
            )
            fun gen_buildFillStyle_fn(deg: Number): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                style["width"] = size.value
                style["height"] = size.value
                style["borderWidth"] = stroke.value
                if (props.activeColor != "") {
                    style["borderTopColor"] = props.activeColor
                    style["borderRightColor"] = props.activeColor
                }
                style["borderBottomColor"] = "transparent"
                style["borderLeftColor"] = "transparent"
                style["transform"] = "rotate(" + deg.toString(10) + "deg)"
                return style
            }
            val buildFillStyle = ::gen_buildFillStyle_fn
            val rightStyle = computed(fun(): UTSJSONObject {
                var deg: Number = percent.value * 3.6 - 135
                if (deg > 45) {
                    deg = 45
                }
                if (deg < -135) {
                    deg = -135
                }
                return buildFillStyle(deg)
            }
            )
            val leftStyle = computed(fun(): UTSJSONObject {
                var deg: Number = percent.value * 3.6 - 135
                if (deg < 45) {
                    deg = 45
                }
                if (deg > 225) {
                    deg = 225
                }
                return buildFillStyle(deg)
            }
            )
            return fun(): Any? {
                return _cE("view", _uM("class" to "weapp-tw-border up-circle-progress", "style" to _nS(rootStyle.value)), _uA(
                    _cE("view", _uM("class" to "weapp-tw-border up-circle-progress__track", "style" to _nS(trackStyle.value)), null, 4),
                    if (percent.value > 0) {
                        _cE("view", _uM("key" to 0, "class" to "weapp-tw-border up-circle-progress__mask up-circle-progress__mask--right"), _uA(
                            _cE("view", _uM("class" to _nC(_uA(
                                "weapp-tw-border up-circle-progress__fill up-circle-progress__fill--right",
                                _uA(
                                    if (isDefaultColor.value) {
                                        "up-circle-progress__fill--primary"
                                    } else {
                                        ""
                                    }
                                )
                            )), "style" to _nS(rightStyle.value)), null, 6)
                        ))
                    } else {
                        _cC("v-if", true)
                    }
                    ,
                    if (percent.value > 50) {
                        _cE("view", _uM("key" to 1, "class" to "weapp-tw-border up-circle-progress__mask up-circle-progress__mask--left"), _uA(
                            _cE("view", _uM("class" to _nC(_uA(
                                "weapp-tw-border up-circle-progress__fill up-circle-progress__fill--left",
                                _uA(
                                    if (isDefaultColor.value) {
                                        "up-circle-progress__fill--primary"
                                    } else {
                                        ""
                                    }
                                )
                            )), "style" to _nS(leftStyle.value)), null, 6)
                        ))
                    } else {
                        _cC("v-if", true)
                    }
                    ,
                    _cE("view", _uM("class" to "weapp-tw-border up-circle-progress__content"), _uA(
                        renderSlot(_ctx.`$slots`, "default", _uO(), fun(): UTSArray<Any> {
                            return _uA(
                                _cE("text", _uM("class" to _nC(_uA(
                                    "weapp-tw-border up-circle-progress__text",
                                    _uA(
                                        if (isDefaultColor.value) {
                                            "up-circle-progress__text--primary"
                                        } else {
                                            ""
                                        }
                                    )
                                )), "style" to _nS(textStyle.value)), _tD(percent.value) + "%", 7)
                            )
                        }
                        )
                    ))
                ), 4)
            }
        }
        var name = "up-circle-progress"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "up-circle-progress" to _pS(_uM("position" to "relative", "display" to "flex", "alignItems" to "center", "justifyContent" to "center", "boxSizing" to "border-box")), "up-circle-progress__track" to _pS(_uM("position" to "absolute", "top" to 0, "left" to 0, "boxSizing" to "border-box", "borderTopLeftRadius" to "50%", "borderTopRightRadius" to "50%", "borderBottomRightRadius" to "50%", "borderBottomLeftRadius" to "50%", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "up-circle-progress__mask" to _pS(_uM("position" to "absolute", "top" to 0, "width" to "50%", "height" to "100%", "overflow" to "hidden", "boxSizing" to "border-box")), "up-circle-progress__mask--right" to _pS(_uM("right" to 0)), "up-circle-progress__mask--left" to _pS(_uM("left" to 0)), "up-circle-progress__fill" to _pS(_uM("position" to "absolute", "top" to 0, "boxSizing" to "border-box", "borderTopLeftRadius" to "50%", "borderTopRightRadius" to "50%", "borderBottomRightRadius" to "50%", "borderBottomLeftRadius" to "50%", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid", "borderBottomColor" to "rgba(0,0,0,0)", "borderLeftColor" to "rgba(0,0,0,0)")), "up-circle-progress__fill--primary" to _pS(_uM("borderTopColor" to "var(--theme-color, #0957de)", "borderRightColor" to "var(--theme-color, #0957de)")), "up-circle-progress__fill--right" to _pS(_uM("right" to 0)), "up-circle-progress__fill--left" to _pS(_uM("left" to 0)), "up-circle-progress__content" to _pS(_uM("position" to "relative", "display" to "flex", "alignItems" to "center", "justifyContent" to "center", "zIndex" to 2)), "up-circle-progress__text" to _pS(_uM("fontSize" to 14, "fontWeight" to 500)), "up-circle-progress__text--primary" to _pS(_uM("color" to "var(--theme-color, #0957de)")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM("customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "percentage" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 30), "activeColor" to _uM("type" to "String", "default" to ""), "inactiveColor" to _uM("type" to "String", "default" to "#e5e9f2"), "width" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 80), "strokeWidth" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 6), "customStyle" to _uM("default" to fun(): UTSJSONObject {
            return (_uO())
        }
        )))
        var propsNeedCastKeys = _uA(
            "customClass",
            "url",
            "linkType",
            "percentage",
            "activeColor",
            "inactiveColor",
            "width",
            "strokeWidth",
            "customStyle"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
