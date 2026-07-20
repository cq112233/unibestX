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
open class GenUniModulesUviewUltraComponentsUpLineProgressUpLineProgress : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
        onCreated(fun() {}, __ins)
        onMounted(fun() {
            this.init()
        }
        , __ins)
        this.`$watch`(fun(): Any? {
            return this.percentage
        }
        , fun() {
            this.resizeProgressWidth()
        }
        )
        this.`$watch`(fun(): Any? {
            return this.height
        }
        , fun() {
            this.resizeProgressWidth()
        }
        )
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        return _cE("view", _uM("class" to "up-line-progress", "style" to _nS(_uA(
            _ctx.addStyle(_ctx.customStyle)
        ))), _uA(
            _cE("view", _uM("class" to "up-line-progress__background", "style" to _nS(_uA(
                _ctx.backgroundStyle
            ))), null, 4),
            _cE("view", _uM("class" to "up-line-progress__line", "style" to _nS(_uA(
                _ctx.progressStyle
            ))), _uA(
                renderSlot(_ctx.`$slots`, "default", _uO(), fun(): UTSArray<Any> {
                    return _uA(
                        if (isTrue(_ctx.showText && _ctx.percentageValue >= 10)) {
                            _cE("text", _uM("key" to 0, "class" to "up-line-progress__text"), _tD(_ctx.innerPercentage + "%"), 1)
                        } else {
                            _cC("v-if", true)
                        }
                    )
                }
                )
            ), 4)
        ), 4)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var activeColor: String by `$props`
    open var inactiveColor: String by `$props`
    open var percentage: Any by `$props`
    open var showText: Boolean by `$props`
    open var height: Any by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var lineWidth: String by `$data`
    open var percentageValue: Number by `$data`
    open var innerPercentage: Number by `$data`
    open var backgroundStyle: UTSJSONObject by `$data`
    open var progressStyle: UTSJSONObject by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "parentData" to _uO(), "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>(), "lineWidth" to "0px", "percentageValue" to computed<Number>(fun(): Number {
            return normalizeNumber(this.percentage, 0)
        }
        ), "innerPercentage" to computed<Number>(fun(): Number {
            return range(0, 100, this.percentageValue)
        }
        ), "backgroundStyle" to computed<UTSJSONObject>(fun(): UTSJSONObject {
            return _uO("backgroundColor" to this.inactiveColor, "height" to addUnit(this.height))
        }
        ), "progressStyle" to computed<UTSJSONObject>(fun(): UTSJSONObject {
            return _uO("width" to this.lineWidth, "backgroundColor" to this.activeColor, "height" to addUnit(this.height))
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
    open fun gen_addStyle_fn(e: Any): Any {
        return uni.UNI5198058.addStyle(e)
    }
    open var init = ::gen_init_fn
    open fun gen_init_fn() {
        sleep(20).then(fun(){
            this.resizeProgressWidth()
        }
        )
    }
    open var resizeProgressWidth = ::gen_resizeProgressWidth_fn
    open fun gen_resizeProgressWidth_fn() {
        uni.UNI5198058.upGetRect(".up-line-progress__background", false, this).then(fun(size: NodeInfo){
            val width = if (size.width != null) {
                size.width!!
            } else {
                0
            }
            this.lineWidth = (width * this.innerPercentage / 100).toString(10) + "px"
        }
        )
    }
    companion object {
        var name = "up-line-progress"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-line-progress" to _pS(_uM("alignItems" to "stretch", "position" to "relative", "display" to "flex", "flexDirection" to "row", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "overflow" to "hidden", "borderTopLeftRadius" to 100, "borderTopRightRadius" to 100, "borderBottomRightRadius" to 100, "borderBottomLeftRadius" to 100)), "up-line-progress__background" to _pS(_uM("backgroundColor" to "#ececec", "borderTopLeftRadius" to 100, "borderTopRightRadius" to 100, "borderBottomRightRadius" to 100, "borderBottomLeftRadius" to 100, "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "up-line-progress__line" to _pS(_uM("position" to "absolute", "top" to 0, "left" to 0, "bottom" to 0, "alignItems" to "center", "display" to "flex", "flexDirection" to "row", "color" to "#ffffff", "borderTopLeftRadius" to 100, "borderTopRightRadius" to 100, "borderBottomRightRadius" to 100, "borderBottomLeftRadius" to 100, "transitionProperty" to "width", "transitionDuration" to "0.5s", "transitionTimingFunction" to "ease", "justifyContent" to "flex-end")), "up-line-progress__text" to _pS(_uM("fontSize" to 10, "alignItems" to "center", "textAlign" to "right", "color" to "#FFFFFF", "marginRight" to 5, "transform" to "scale(0.9)")), "@TRANSITION" to _uM("up-line-progress__line" to _uM("property" to "width", "duration" to "0.5s", "timingFunction" to "ease")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "activeColor" to _uM("type" to "String", "default" to crtProp__17["activeColor"]), "inactiveColor" to _uM("type" to "String", "default" to crtProp__17["inactiveColor"]), "percentage" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__17["percentage"]), "showText" to _uM("type" to "Boolean", "default" to crtProp__17["showText"]), "height" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__17["height"])))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "activeColor",
            "inactiveColor",
            "percentage",
            "showText",
            "height"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
