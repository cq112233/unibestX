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
open class GenUniModulesUviewUltraComponentsUpLoadingIconUpLoadingIcon : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
        onCreated(fun() {}, __ins)
        onMounted(fun() {
            this.init()
        }
        , __ins)
        onBeforeUnmount(fun() {
            this.stopRotate()
        }
        , __ins)
        this.`$watch`(fun(): Any? {
            return this.show
        }
        , fun(nVal: Boolean) {
            if (nVal) {
                this.startRotate()
            } else {
                this.stopRotate()
            }
        }
        )
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        return if (isTrue(_ctx.show)) {
            _cE("view", _uM("key" to 0, "class" to _nC(_uA(
                "up-loading-icon",
                _uA(
                    if (isTruthy(_ctx.vertical)) {
                        "up-loading-icon--vertical"
                    } else {
                        ""
                    }
                )
            )), "style" to _nS(_uA(
                _ctx.addStyle(_ctx.customStyle)
            ))), _uA(
                if (isTrue(!_ctx.webviewHide)) {
                    _cE("view", _uM("key" to 0, "class" to _nC(_uA(
                        "up-loading-icon__spinner",
                        _uA(
                            "up-loading-icon__spinner--" + _ctx.mode
                        )
                    )), "ref" to "ani", "style" to _nS(_uM("transform" to _ctx.transform, "width" to _ctx.addUnit(_ctx.size), "height" to _ctx.addUnit(_ctx.size), "borderTopColor" to _ctx.color, "borderBottomColor" to _ctx.otherBorderColor, "borderLeftColor" to _ctx.otherBorderColor, "borderRightColor" to _ctx.otherBorderColor))), _uA(
                        if (_ctx.mode === "spinner") {
                            _cE(Fragment, _uM("key" to 0), RenderHelpers.renderList(_ctx.array12, fun(item, index, __index, _cached): Any {
                                return _cE("view", _uM("key" to index, "class" to "up-loading-icon__dot", "style" to _nS(_uA(
                                    _ctx.spinnerStyle[index],
                                    _ctx.getSpinnerDotStyle(index)
                                ))), null, 4)
                            }), 128)
                        } else {
                            _cC("v-if", true)
                        }
                    ), 6)
                } else {
                    _cC("v-if", true)
                },
                if (_ctx.text != "") {
                    _cE("text", _uM("key" to 1, "class" to "up-loading-icon__text", "style" to _nS(_uM("fontSize" to _ctx.addUnit(_ctx.textSize), "color" to _ctx.textColor))), _tD(_ctx.text), 5)
                } else {
                    _cC("v-if", true)
                }
            ), 6)
        } else {
            _cC("v-if", true)
        }
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var show: Boolean by `$props`
    open var color: String by `$props`
    open var textColor: String by `$props`
    open var vertical: Boolean by `$props`
    open var mode: String by `$props`
    open var size: Any by `$props`
    open var textSize: Any by `$props`
    open var text: Any by `$props`
    open var timingFunction: String by `$props`
    open var duration: Any by `$props`
    open var inactiveColor: String by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var array12: UTSArray<Number> by `$data`
    open var aniAngel: Number by `$data`
    open var webviewHide: Boolean by `$data`
    open var loading: Boolean by `$data`
    open var degree: Number by `$data`
    open var transform: String by `$data`
    open var spinnerStyle: UTSArray<UTSJSONObject> by `$data`
    open var animationFrame: Number by `$data`
    open var otherBorderColor: String by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "parentData" to _uO(), "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>(), "array12" to _uA(
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ), "aniAngel" to 360, "webviewHide" to false, "loading" to false, "degree" to 0, "transform" to "", "spinnerStyle" to _uA<UTSJSONObject>(_uO("left" to 0, "top" to 0), _uO("left" to 0, "top" to 0), _uO("left" to 0, "top" to 0), _uO("left" to 0, "top" to 0), _uO("left" to 0, "top" to 0), _uO("left" to 0, "top" to 0), _uO("left" to 0, "top" to 0), _uO("left" to 0, "top" to 0), _uO("left" to 0, "top" to 0), _uO("left" to 0, "top" to 0), _uO("left" to 0, "top" to 0), _uO("left" to 0, "top" to 0)), "animationFrame" to 0, "otherBorderColor" to computed<String>(fun(): String {
            val lightColor = colorGradient(this.color, "#ffffff", 100)[80]
            if (this.mode === "circle") {
                return if (this.inactiveColor != "") {
                    this.inactiveColor
                } else {
                    lightColor
                }
            } else {
                return "transparent"
            }
        }
        ))
    }
    open fun `$upAddUnit`(kVal: Any?, unit: String? = ""): String {
        return uni.UNI5198058.addUnit(kVal, unit)
    }
    open fun `$upAddStyle`(customStyle: Any, target: String = "object"): Any {
        return uni.UNI5198058.addStyle(customStyle, target)
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
    open var addStyle = ::gen_addStyle_fn
    open fun gen_addStyle_fn(kVal: Any): Any {
        return uni.UNI5198058.addStyle(kVal)
    }
    open var addUnit = ::gen_addUnit_fn
    open fun gen_addUnit_fn(kVal: Any): String {
        return uni.UNI5198058.addUnit(kVal)
    }
    open var getSpinnerDotStyle = ::gen_getSpinnerDotStyle_fn
    open fun gen_getSpinnerDotStyle_fn(index: Number): UTSJSONObject {
        val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-loading-icon/up-loading-icon.uvue", 129, 11))
        style["backgroundColor"] = this.color
        style["transform"] = "rotate(" + ((index + 1) * 30).toString(10) + "deg)"
        style["opacity"] = 1 - 0.0625 * index
        return style
    }
    open var rotateLoader = ::gen_rotateLoader_fn
    open fun gen_rotateLoader_fn(): Unit {
        this.degree = (this.degree + this.getRotateStep()) % 360
        this.transform = "rotate(" + this.degree.toString(10) + "deg)"
    }
    open var init = ::gen_init_fn
    open fun gen_init_fn(): Unit {
        this.calcSpinnerTopAndLeft()
        this.startRotate()
    }
    open var getRotateDuration = ::gen_getRotateDuration_fn
    open fun gen_getRotateDuration_fn(): Number {
        val durationValue = this.`$props`["duration"]
        val durationNumber = parseInt(durationValue.toString())
        return if (durationNumber > 0) {
            durationNumber
        } else {
            1200
        }
    }
    open var getRotateStep = ::gen_getRotateStep_fn
    open fun gen_getRotateStep_fn(): Number {
        return (5760 as Number) / this.getRotateDuration()
    }
    open var startRotate = ::gen_startRotate_fn
    open fun gen_startRotate_fn(): Unit {
        if (!isTruthy(this.show) || this.animationFrame > 0) {
            return
        }
        this.animationFrame = setInterval(fun(){
            this.rotateLoader()
        }
        , 16)
    }
    open var stopRotate = ::gen_stopRotate_fn
    open fun gen_stopRotate_fn(): Unit {
        if (this.animationFrame > 0) {
            clearInterval(this.animationFrame)
            this.animationFrame = 0
        }
    }
    open var calculateSquareRadius = ::gen_calculateSquareRadius_fn
    open fun gen_calculateSquareRadius_fn(sideLength: Number): Number {
        val diagonalLength = Math.sqrt(sideLength * sideLength + sideLength * sideLength)
        val radius = diagonalLength / 2
        return radius
    }
    open var calcSpinnerTopAndLeft = ::gen_calcSpinnerTopAndLeft_fn
    open fun gen_calcSpinnerTopAndLeft_fn() {
        this.array12.forEach(fun(ele: Number, index: Number){
            val angle = index * 30
            val angleRad = angle * (Math.PI / 180)
            val banjing = this.calculateSquareRadius(parseInt(getPx(parseInt(this.`$props`["size"].toString()) * 2)))
            val xOffset = banjing * Math.cos(angleRad)
            val yOffset = banjing * Math.sin(angleRad)
            this.spinnerStyle[index]["left"] = "" + Math.round(45 + xOffset).toString(10) + "%"
            this.spinnerStyle[index]["top"] = "" + Math.round(34 + yOffset).toString(10) + "%"
        }
        )
    }
    companion object {
        var name = "up-loading-icon"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-loading-icon" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "center")), "up-loading-icon__text" to _uM("" to _uM("marginLeft" to 4, "color" to "#606266", "fontSize" to 14, "lineHeight" to "20px", "display:empty" to "none"), ".up-loading-icon--vertical " to _uM("marginTop" to 6, "marginRight" to 0, "marginBottom" to 0, "marginLeft" to 0, "color" to "#606266")), "up-loading-icon__spinner" to _pS(_uM("width" to 30, "height" to 30, "position" to "relative", "boxSizing" to "border-box")), "up-loading-icon__spinner--semicircle" to _pS(_uM("borderTopWidth" to 2, "borderRightWidth" to 2, "borderBottomWidth" to 2, "borderLeftWidth" to 2, "borderTopColor" to "rgba(0,0,0,0)", "borderRightColor" to "rgba(0,0,0,0)", "borderBottomColor" to "rgba(0,0,0,0)", "borderLeftColor" to "rgba(0,0,0,0)", "borderTopRightRadius" to 100, "borderTopLeftRadius" to 100, "borderBottomLeftRadius" to 100, "borderBottomRightRadius" to 100, "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "up-loading-icon__spinner--circle" to _pS(_uM("borderTopRightRadius" to 100, "borderTopLeftRadius" to 100, "borderBottomLeftRadius" to 100, "borderBottomRightRadius" to 100, "borderTopWidth" to 2, "borderRightWidth" to 2, "borderBottomWidth" to 2, "borderLeftWidth" to 2, "borderTopColor" to "#e5e5e5", "borderRightColor" to "#e5e5e5", "borderBottomColor" to "#e5e5e5", "borderLeftColor" to "#e5e5e5", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "up-loading-icon--vertical" to _pS(_uM("flexDirection" to "column")), "up-loading-icon__dot" to _pS(_uM("position" to "absolute", "width" to 2, "height" to "25%", "backgroundColor" to "#ffffff", "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "show" to _uM("type" to "Boolean", "default" to crtProp["show"]), "color" to _uM("type" to "String", "default" to crtProp["color"]), "textColor" to _uM("type" to "String", "default" to crtProp["textColor"]), "vertical" to _uM("type" to "Boolean", "default" to crtProp["vertical"]), "mode" to _uM("type" to "String", "default" to crtProp["mode"]), "size" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp["size"]), "textSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp["textSize"]), "text" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp["text"]), "timingFunction" to _uM("type" to "String", "default" to crtProp["timingFunction"]), "duration" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp["duration"]), "inactiveColor" to _uM("type" to "String", "default" to crtProp["inactiveColor"])))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "show",
            "color",
            "textColor",
            "vertical",
            "mode",
            "size",
            "textSize",
            "text",
            "timingFunction",
            "duration",
            "inactiveColor"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
