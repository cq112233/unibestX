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
open class GenUniModulesUviewUltraComponentsUpLoadingIconUpLoadingIcon : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpLoadingIconUpLoadingIcon) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpLoadingIconUpLoadingIcon
            val _cache = __ins.renderCache
            val props = __props
            val array12: UTSArray<Number> = _uA(
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
            )
            val webviewHide = ref<Boolean>(false)
            val degree = ref<Number>(0)
            val transform = ref<String>("")
            val spinnerItemsStyle = ref(_uA<UTSJSONObject>(_uO("left" to "0", "top" to "0"), _uO("left" to "0", "top" to "0"), _uO("left" to "0", "top" to "0"), _uO("left" to "0", "top" to "0"), _uO("left" to "0", "top" to "0"), _uO("left" to "0", "top" to "0"), _uO("left" to "0", "top" to "0"), _uO("left" to "0", "top" to "0"), _uO("left" to "0", "top" to "0"), _uO("left" to "0", "top" to "0"), _uO("left" to "0", "top" to "0"), _uO("left" to "0", "top" to "0")))
            var animationFrame: Number = 0
            val otherBorderColor = computed<String>(fun(): String {
                if (props.inactiveColor != "") {
                    return props.inactiveColor
                }
                if (props.mode == "circle") {
                    if (props.color.startsWith("#")) {
                        val gradient = colorGradient(props.color, "#ffffff", 100)
                        if (gradient.length > 80) {
                            return gradient[80]
                        }
                    }
                    return "#e5e5e5"
                } else {
                    return "transparent"
                }
            }
            )
            val customLoadingIconStyle = computed(fun(): UTSJSONObject {
                return addStyle(props.customStyle) as UTSJSONObject
            }
            )
            val spinnerStyle = computed(fun(): UTSJSONObject {
                return _uO("transform" to transform.value, "width" to addUnit(props.size), "height" to addUnit(props.size), "borderTopColor" to props.color, "borderBottomColor" to otherBorderColor.value, "borderLeftColor" to otherBorderColor.value, "borderRightColor" to otherBorderColor.value)
            }
            )
            val textStyle = computed(fun(): UTSJSONObject {
                val textSizeNumber = parseInt(getPx(props.textSize))
                return _uO("fontSize" to addUnit(props.textSize), "lineHeight" to addUnit(if (textSizeNumber > 0) {
                    Math.round(textSizeNumber * 1.4)
                } else {
                    20
                }
                ), "color" to props.textColor)
            }
            )
            val dotBarStyle = computed(fun(): UTSJSONObject {
                return _uO("backgroundColor" to props.color)
            }
            )
            fun gen_getSpinnerDotStyle_fn(index: Number): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                style["transform"] = "rotate(" + ((index + 1) * 30).toString(10) + "deg)"
                style["opacity"] = 1 - 0.0625 * index
                return style
            }
            val getSpinnerDotStyle = ::gen_getSpinnerDotStyle_fn
            fun gen_getRotateDuration_fn(): Number {
                val durationNumber = parseInt(props.duration.toString())
                return if (durationNumber > 0) {
                    durationNumber
                } else {
                    1200
                }
            }
            val getRotateDuration = ::gen_getRotateDuration_fn
            fun gen_getRotateStep_fn(): Number {
                return (5760 as Number) / getRotateDuration()
            }
            val getRotateStep = ::gen_getRotateStep_fn
            fun gen_rotateLoader_fn(): Unit {
                degree.value = (degree.value + getRotateStep()) % 360
                transform.value = "rotate(" + degree.value.toString(10) + "deg)"
            }
            val rotateLoader = ::gen_rotateLoader_fn
            fun gen_startRotate_fn(): Unit {
                if (!props.show || animationFrame > 0) {
                    return
                }
                animationFrame = setInterval(fun(){
                    rotateLoader()
                }
                , 16)
            }
            val startRotate = ::gen_startRotate_fn
            fun gen_stopRotate_fn(): Unit {
                if (animationFrame > 0) {
                    clearInterval(animationFrame)
                    animationFrame = 0
                }
            }
            val stopRotate = ::gen_stopRotate_fn
            fun gen_calculateSquareRadius_fn(sideLength: Number): Number {
                val diagonalLength = Math.sqrt(sideLength * sideLength + sideLength * sideLength)
                return diagonalLength / 2
            }
            val calculateSquareRadius = ::gen_calculateSquareRadius_fn
            fun gen_calcSpinnerTopAndLeft_fn() {
                array12.forEach(fun(_ele: Number, index: Number){
                    val angle = index * 30
                    val angleRad = angle * (Math.PI / 180)
                    val banjing = calculateSquareRadius(parseInt(getPx(parseInt(props.size.toString()) * 2)))
                    val xOffset = banjing * Math.cos(angleRad)
                    val yOffset = banjing * Math.sin(angleRad)
                    spinnerItemsStyle.value[index]["left"] = "" + Math.round(45 + xOffset).toString(10) + "%"
                    spinnerItemsStyle.value[index]["top"] = "" + Math.round(34 + yOffset).toString(10) + "%"
                }
                )
            }
            val calcSpinnerTopAndLeft = ::gen_calcSpinnerTopAndLeft_fn
            fun gen_init_fn(): Unit {
                calcSpinnerTopAndLeft()
                startRotate()
            }
            val init = ::gen_init_fn
            watch(fun(): Boolean {
                return props.show
            }
            , fun(nVal: Boolean){
                if (nVal) {
                    startRotate()
                } else {
                    stopRotate()
                }
            }
            )
            onMounted(fun(){
                init()
            }
            )
            onBeforeUnmount(fun(){
                stopRotate()
            }
            )
            return fun(): Any? {
                return if (isTrue(_ctx.show)) {
                    _cE("view", _uM("key" to 0, "class" to _nC(_uA(
                        "weapp-tw-border up-loading-icon",
                        _uA(
                            if (_ctx.vertical) {
                                "up-loading-icon--vertical"
                            } else {
                                ""
                            }
                        )
                    )), "style" to _nS(customLoadingIconStyle.value)), _uA(
                        if (isTrue(!webviewHide.value)) {
                            _cE("view", _uM("key" to 0, "class" to _nC(_uA(
                                "weapp-tw-border up-loading-icon__spinner",
                                _uA(
                                    "up-loading-icon__spinner--" + _ctx.mode
                                )
                            )), "ref" to "ani", "style" to _nS(spinnerStyle.value)), _uA(
                                if (_ctx.mode === "spinner") {
                                    _cE(Fragment, _uM("key" to 0), RenderHelpers.renderList(array12, fun(item, index, __index, _cached): Any {
                                        return _cE("view", _uM("key" to index, "class" to "weapp-tw-border up-loading-icon__dot", "style" to _nS(getSpinnerDotStyle(index))), _uA(
                                            _cE("view", _uM("class" to "weapp-tw-border up-loading-icon__dot-bar", "style" to _nS(dotBarStyle.value)), null, 4)
                                        ), 4)
                                    }), 64)
                                } else {
                                    _cC("v-if", true)
                                }
                            ), 6)
                        } else {
                            _cC("v-if", true)
                        },
                        if (_ctx.text != "") {
                            _cE("text", _uM("key" to 1, "class" to "weapp-tw-border up-loading-icon__text", "style" to _nS(textStyle.value)), _tD(_ctx.text), 5)
                        } else {
                            _cC("v-if", true)
                        }
                    ), 6)
                } else {
                    _cC("v-if", true)
                }
            }
        }
        var name = "up-loading-icon"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-loading-icon" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "center")), "up-loading-icon__text" to _pS(_uM("marginLeft" to 4, "color" to "#606266", "fontSize" to 14, "lineHeight" to "20px")), "up-loading-icon__spinner" to _pS(_uM("width" to 30, "height" to 30, "position" to "relative", "boxSizing" to "border-box")), "up-loading-icon__spinner--semicircle" to _pS(_uM("borderTopWidth" to 2, "borderRightWidth" to 2, "borderBottomWidth" to 2, "borderLeftWidth" to 2, "borderTopColor" to "rgba(0,0,0,0)", "borderRightColor" to "rgba(0,0,0,0)", "borderBottomColor" to "rgba(0,0,0,0)", "borderLeftColor" to "rgba(0,0,0,0)", "borderTopRightRadius" to 100, "borderTopLeftRadius" to 100, "borderBottomLeftRadius" to 100, "borderBottomRightRadius" to 100, "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "up-loading-icon__spinner--circle" to _pS(_uM("borderTopRightRadius" to 100, "borderTopLeftRadius" to 100, "borderBottomLeftRadius" to 100, "borderBottomRightRadius" to 100, "borderTopWidth" to 2, "borderRightWidth" to 2, "borderBottomWidth" to 2, "borderLeftWidth" to 2, "borderTopColor" to "#e5e5e5", "borderRightColor" to "#e5e5e5", "borderBottomColor" to "#e5e5e5", "borderLeftColor" to "#e5e5e5", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "up-loading-icon--vertical" to _pS(_uM("flexDirection" to "column")), "up-loading-icon__dot" to _pS(_uM("position" to "absolute", "top" to 0, "left" to 0, "width" to "100%", "height" to "100%", "display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "alignItems" to "flex-start")), "up-loading-icon__dot-bar" to _pS(_uM("width" to 2, "height" to "25%", "backgroundColor" to "#ffffff", "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM("customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "show" to _uM("type" to "Boolean", "default" to true), "color" to _uM("type" to "String", "default" to "#909193"), "textColor" to _uM("type" to "String", "default" to "#909193"), "vertical" to _uM("type" to "Boolean", "default" to false), "mode" to _uM("type" to "String", "default" to "spinner"), "size" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to "24"), "textSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to "15"), "text" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to ""), "timingFunction" to _uM("type" to "String", "default" to "ease-in-out"), "duration" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 1200), "inactiveColor" to _uM("type" to "String", "default" to ""), "customStyle" to _uM("default" to fun(): UTSJSONObject {
            return (_uO())
        }
        )))
        var propsNeedCastKeys = _uA(
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
            "inactiveColor",
            "customStyle"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
