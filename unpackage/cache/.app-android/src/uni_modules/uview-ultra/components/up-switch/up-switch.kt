@file:Suppress("UNCHECKED_CAST", "USELESS_CAST", "INAPPLICABLE_JVM_NAME", "UNUSED_ANONYMOUS_PARAMETER", "SENSELESS_COMPARISON", "NAME_SHADOWING", "UNNECESSARY_NOT_NULL_ASSERTION")
package uni.UNI5198058
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
open class GenUniModulesUviewUltraComponentsUpSwitchUpSwitch : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
        onCreated(fun() {}, __ins)
        this.`$watch`(fun(): Any? {
            return this.modelValue
        }
        , fun(n: Any) {
            if (n !== this.inactiveValue && n !== this.activeValue) {
                error("v-model绑定的值必须为inactiveValue、activeValue二者之一")
            }
        }
        , WatchOptions(immediate = true))
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        val _component_up_loading_icon = resolveEasyComponent("up-loading-icon", GenUniModulesUviewUltraComponentsUpLoadingIconUpLoadingIconClass)
        return _cE("view", _uM("class" to _nC(_ctx.switchClass), "style" to _nS(_uA(
            _ctx.switchStyle,
            _ctx.addStyle(_ctx.customStyle)
        )), "onClick" to _ctx.clickHandler), _uA(
            if (isTrue(_ctx.isActive)) {
                _cE("view", _uM("key" to 0, "class" to "up-switch__bg-active", "style" to _nS(_uA(
                    _ctx.bgActiveStyle
                ))), null, 4)
            } else {
                _cC("v-if", true)
            }
            ,
            if (isTrue(!_ctx.isActive)) {
                _cE("view", _uM("key" to 1, "class" to "up-switch__bg", "style" to _nS(_uA(
                    _ctx.bgStyle
                ))), null, 4)
            } else {
                _cC("v-if", true)
            }
            ,
            _cE("view", _uM("class" to _nC(_uA(
                "up-switch__node",
                _uA(
                    if (_ctx.modelValue == _ctx.activeValue) {
                        "up-switch__node--on"
                    } else {
                        ""
                    }
                )
            )), "style" to _nS(_uA(
                _ctx.nodeStyle
            )), "ref" to "up-switch__node"), _uA(
                _cV(_component_up_loading_icon, _uM("show" to _ctx.loading, "mode" to "circle", "timingFunction" to "linear", "color" to if (_ctx.modelValue == _ctx.activeValue) {
                    _ctx.activeColor
                } else {
                    "#AAABAD"
                }
                , "size" to (parseInt(_ctx.getPx(_ctx.size)) * 0.6)), null, 8, _uA(
                    "show",
                    "color",
                    "size"
                ))
            ), 6)
        ), 14, _uA(
            "onClick"
        ))
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var size: Any by `$props`
    open var loading: Boolean by `$props`
    open var disabled: Boolean by `$props`
    open var activeColor: String by `$props`
    open var inactiveColor: String by `$props`
    open var value: Any by `$props`
    open var modelValue: Any by `$props`
    open var activeValue: Any by `$props`
    open var inactiveValue: Any by `$props`
    open var asyncChange: Boolean by `$props`
    open var space: Any by `$props`
    open var iconSize: Any by `$props`
    open var beforeChange: Any by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var bgColor: String by `$data`
    open var switchClass: String by `$data`
    open var isActive: Boolean by `$data`
    open var switchStyle: UTSJSONObject by `$data`
    open var bgActiveStyle: UTSJSONObject by `$data`
    open var nodeStyle: UTSJSONObject by `$data`
    open var bgStyle: UTSJSONObject by `$data`
    open var customInactiveColor: Boolean by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "parentData" to _uO(), "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>(), "bgColor" to "#ffffff", "switchClass" to computed<String>(fun(): String {
            var classes = _uA(
                "up-switch",
                "cursor-pointer"
            )
            if (this.disabled) {
                classes.push("up-switch--disabled")
            }
            if (this.isActive) {
                classes.push("up-switch--on")
            } else {
                classes.push("up-switch--off")
            }
            return classes.join(" ")
        }
        ), "isActive" to computed<Boolean>(fun(): Boolean {
            return this.modelValue === this.activeValue
        }
        ), "switchStyle" to computed<UTSJSONObject>(fun(): UTSJSONObject {
            var style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-switch/up-switch.uvue", 96, 9))
            if (this.size.toString() != "25") {
                style["width"] = addUnit(parseInt(this.size.toString()) * 2 + 2)
                style["height"] = addUnit(parseInt(this.size.toString()) + 2)
            }
            if (this.isActive) {
                style["borderColor"] = "rgba(0, 0, 0, 0)"
            } else {
                if (this.customInactiveColor) {
                    style["borderColor"] = "rgba(0, 0, 0, 0)"
                } else {
                    style["borderColor"] = "rgba(0, 0, 0, 0.12)"
                }
            }
            return style
        }
        ), "bgActiveStyle" to computed<UTSJSONObject>(fun(): UTSJSONObject {
            var style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-switch/up-switch.uvue", 120, 9))
            style["width"] = addUnit(parseInt(this.size.toString()) * 2 + 2)
            style["height"] = addUnit(parseInt(this.size.toString()) + 2)
            if (this.activeColor != "#2979ff") {
                style["backgroundColor"] = this.activeColor
            }
            return style
        }
        ), "nodeStyle" to computed<UTSJSONObject>(fun(): UTSJSONObject {
            var style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-switch/up-switch.uvue", 131, 9))
            style["width"] = addUnit(parseInt(this.size.toString()) - parseInt(this.space.toString()))
            style["height"] = addUnit(parseInt(this.size.toString()) - parseInt(this.space.toString()))
            val translateX = if (this.isActive) {
                addUnit(this.space)
            } else {
                addUnit(this.size)
            }
            style["transform"] = "translateX(-" + translateX + ")"
            return style
        }
        ), "bgStyle" to computed<UTSJSONObject>(fun(): UTSJSONObject {
            var style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-switch/up-switch.uvue", 142, 9))
            style["width"] = addUnit(parseInt(this.size.toString()) * 2)
            style["height"] = addUnit(parseInt(this.size.toString()))
            style["backgroundColor"] = this.inactiveColor
            style["transform"] = "scale(" + (if (this.isActive) {
                0
            } else {
                1
            }
            ) + ")"
            return style
        }
        ), "customInactiveColor" to computed<Boolean>(fun(): Boolean {
            return this.inactiveColor !== "#fff" && this.inactiveColor !== "#ffffff"
        }
        ))
    }
    open fun `$upAddUnit`(kVal: Any?, unit: String? = ""): String {
        return addUnit(kVal, unit)
    }
    open fun `$upAddStyle`(customStyle: Any, target: String = "object"): Any {
        return uni.UNI5198058.addStyle(customStyle, target)
    }
    open fun `$upGetPx`(kVal: Any, unit: Boolean = false): String {
        return uni.UNI5198058.getPx(kVal, unit)
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
    open var getPx = ::gen_getPx_fn
    open fun gen_getPx_fn(e: Any): String {
        return uni.UNI5198058.getPx(e)
    }
    open var addStyle = ::gen_addStyle_fn
    open fun gen_addStyle_fn(e: Any): Any {
        return uni.UNI5198058.addStyle(e)
    }
    open var clickHandler = ::gen_clickHandler_fn
    open fun gen_clickHandler_fn() {
        if (!this.disabled && !this.loading) {
            val oldValue = if (this.isActive) {
                this.inactiveValue
            } else {
                this.activeValue
            }
            if (!this.asyncChange) {
                this.`$emit`("update:modelValue", oldValue)
            }
            this.`$nextTick`(fun(){
                this.`$emit`("change", oldValue)
            }
            )
        }
    }
    companion object {
        var name = "up-switch"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("up-switch" to _pS(_uM("display" to "flex", "flexDirection" to "row", "position" to "relative", "backgroundColor" to "rgba(0,0,0,0)", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopLeftRadius" to 100, "borderTopRightRadius" to 100, "borderBottomRightRadius" to 100, "borderBottomLeftRadius" to 100, "transitionProperty" to "backgroundColor", "transitionDuration" to "0.4s", "borderTopColor" to "rgba(0,0,0,0.12)", "borderRightColor" to "rgba(0,0,0,0.12)", "borderBottomColor" to "rgba(0,0,0,0.12)", "borderLeftColor" to "rgba(0,0,0,0.12)", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid", "justifyContent" to "flex-end", "alignItems" to "center", "overflow" to "hidden", "width" to 52, "height" to 27)), "up-switch__bg-active" to _pS(_uM("position" to "absolute", "top" to -1, "left" to -1, "borderTopLeftRadius" to 100, "borderTopRightRadius" to 100, "borderBottomRightRadius" to 100, "borderBottomLeftRadius" to 100, "backgroundColor" to "var(--theme-color, #0957de)", "width" to 52, "height" to 27)), "up-switch__node" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "center", "borderTopLeftRadius" to 100, "borderTopRightRadius" to 100, "borderBottomRightRadius" to 100, "borderBottomLeftRadius" to 100, "backgroundColor" to "#ffffff", "boxShadow" to "1px 1px 1px 0 rgba(0, 0, 0, 0.25)", "transitionProperty" to "transform", "transitionDuration" to "0.4s", "transitionTimingFunction" to "cubic-bezier(0.3,1.05,0.4,1.05)")), "up-switch__bg" to _pS(_uM("position" to "absolute", "borderTopLeftRadius" to 0, "borderTopRightRadius" to 100, "borderBottomRightRadius" to 100, "borderBottomLeftRadius" to 0, "backgroundColor" to "#FFFFFF", "transitionProperty" to "transform", "transitionDuration" to "0.4s", "transitionTimingFunction" to "ease")), "up-switch--disabled" to _pS(_uM("opacity" to 0.6)), "@TRANSITION" to _uM("up-switch" to _uM("property" to "backgroundColor", "duration" to "0.4s"), "up-switch__node" to _uM("property" to "transform", "duration" to "0.4s", "timingFunction" to "cubic-bezier(0.3,1.05,0.4,1.05)"), "up-switch__bg" to _uM("property" to "transform", "duration" to "0.4s", "timingFunction" to "ease")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("update:modelValue" to null, "change" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "size" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to switchProp["size"]), "loading" to _uM("type" to "Boolean", "default" to switchProp["loading"]), "disabled" to _uM("type" to "Boolean", "default" to switchProp["disabled"]), "activeColor" to _uM("type" to "String", "default" to switchProp["activeColor"]), "inactiveColor" to _uM("type" to "String", "default" to switchProp["inactiveColor"]), "value" to _uM("type" to _uA(
            "Boolean",
            "String",
            "Number"
        ), "default" to switchProp["value"]), "modelValue" to _uM("type" to _uA(
            "Boolean",
            "String",
            "Number"
        ), "default" to switchProp["modelValue"]), "activeValue" to _uM("type" to _uA(
            "Boolean",
            "String",
            "Number"
        ), "default" to switchProp["activeValue"]), "inactiveValue" to _uM("type" to _uA(
            "Boolean",
            "String",
            "Number"
        ), "default" to switchProp["inactiveValue"]), "asyncChange" to _uM("type" to "Boolean", "default" to switchProp["asyncChange"]), "space" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to switchProp["space"]), "iconSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to switchProp["iconSize"]), "beforeChange" to _uM("default" to switchProp["beforeChange"])))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "size",
            "loading",
            "disabled",
            "activeColor",
            "inactiveColor",
            "value",
            "modelValue",
            "activeValue",
            "inactiveValue",
            "asyncChange",
            "space",
            "iconSize",
            "beforeChange"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
