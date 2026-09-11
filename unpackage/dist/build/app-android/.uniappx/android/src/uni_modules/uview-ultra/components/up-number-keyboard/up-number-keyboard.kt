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
open class GenUniModulesUviewUltraComponentsUpNumberKeyboardUpNumberKeyboard : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var mode: String by `$props`
    open var dotDisabled: Boolean by `$props`
    open var random: Boolean by `$props`
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpNumberKeyboardUpNumberKeyboard) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpNumberKeyboardUpNumberKeyboard
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val dot = "."
            val cardX = "X"
            var timer: Number? = null
            fun gen_noop_fn() {}
            val noop = ::gen_noop_fn
            val numList = computed<UTSArray<Any>>(fun(): UTSArray<Any> {
                var tmp: UTSArray<Any> = _uA()
                if (props.dotDisabled && props.mode == "number") {
                    if (!props.random) {
                        return _uA(
                            1,
                            2,
                            3,
                            4,
                            5,
                            6,
                            7,
                            8,
                            9,
                            0
                        )
                    } else {
                        return randomArray(_uA(
                            1,
                            2,
                            3,
                            4,
                            5,
                            6,
                            7,
                            8,
                            9,
                            0
                        ))
                    }
                } else if (!props.dotDisabled && props.mode == "number") {
                    if (!props.random) {
                        return _uA(
                            1,
                            2,
                            3,
                            4,
                            5,
                            6,
                            7,
                            8,
                            9,
                            dot,
                            0
                        )
                    } else {
                        return randomArray(_uA(
                            1,
                            2,
                            3,
                            4,
                            5,
                            6,
                            7,
                            8,
                            9,
                            dot,
                            0
                        ))
                    }
                } else if (props.mode == "card") {
                    if (!props.random) {
                        return _uA(
                            1,
                            2,
                            3,
                            4,
                            5,
                            6,
                            7,
                            8,
                            9,
                            cardX,
                            0
                        )
                    } else {
                        return randomArray(_uA(
                            1,
                            2,
                            3,
                            4,
                            5,
                            6,
                            7,
                            8,
                            9,
                            cardX,
                            0
                        ))
                    }
                }
                return tmp
            }
            )
            fun gen_itemStyle_fn(index: Number): UTSJSONObject {
                var style: UTSJSONObject = _uO()
                if (props.mode == "number" && props.dotDisabled && index == 9) {
                    style["width"] = "464rpx"
                }
                return style
            }
            val itemStyle = ::gen_itemStyle_fn
            fun gen_backspaceClick_fn(): Unit {
                emit("backspace")
                if (timer != null) {
                    clearInterval(timer!!)
                    timer = null
                }
                timer = setInterval(fun(){
                    emit("backspace")
                }
                , 250)
            }
            val backspaceClick = ::gen_backspaceClick_fn
            fun gen_clearTimer_fn(): Unit {
                if (timer != null) {
                    clearInterval(timer!!)
                    timer = null
                }
            }
            val clearTimer = ::gen_clearTimer_fn
            fun gen_keyboardClick_fn(kVal: Any): Unit {
                var res = kVal
                if (!props.dotDisabled && kVal != dot && kVal != cardX) {
                    res = parseInt(kVal.toString())
                }
                emit("change", res)
            }
            val keyboardClick = ::gen_keyboardClick_fn
            return fun(): Any? {
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                return _cE("view", _uM("class" to "weapp-tw-border up-keyboard", "onTouchmove" to withModifiers(noop, _uA(
                    "stop",
                    "prevent"
                ))), _uA(
                    _cE(Fragment, null, RenderHelpers.renderList(numList.value, fun(item, index, __index, _cached): Any {
                        return _cE("view", _uM("class" to "weapp-tw-border up-keyboard__button-wrapper", "key" to index), _uA(
                            _cE("view", _uM("class" to "weapp-tw-border up-keyboard__button-wrapper__button", "style" to _nS(_uA(
                                itemStyle(index)
                            )), "onClick" to fun(){
                                keyboardClick(item)
                            }
                            , "hover-class" to "up-hover-class", "hover-stay-time" to 200), _uA(
                                _cE("text", _uM("class" to "weapp-tw-border up-keyboard__button-wrapper__button__text"), _tD(item), 1)
                            ), 12, _uA(
                                "onClick"
                            ))
                        ))
                    }
                    ), 128),
                    _cE("view", _uM("class" to "weapp-tw-border up-keyboard__button-wrapper"), _uA(
                        _cE("view", _uM("class" to "weapp-tw-border up-keyboard__button-wrapper__button up-keyboard__button-wrapper__button--gray", "hover-class" to "up-hover-class", "hover-stay-time" to 200, "onTouchstart" to withModifiers(backspaceClick, _uA(
                            "stop"
                        )), "onTouchend" to clearTimer), _uA(
                            _cV(_component_up_icon, _uM("name" to "backspace", "color" to "#303133", "size" to "28"))
                        ), 32)
                    ))
                ), 32)
            }
        }
        var name = "up-number-keyboard"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-keyboard" to _pS(_uM("display" to "flex", "flexDirection" to "row", "justifyContent" to "space-around", "backgroundColor" to "#e0e4e6", "flexWrap" to "wrap", "paddingTop" to 8, "paddingRight" to "10rpx", "paddingBottom" to 8, "paddingLeft" to "10rpx")), "up-keyboard__button-wrapper" to _pS(_uM("boxShadow" to "0 2px 0px #BBBCBE", "marginTop" to 4, "marginRight" to "6rpx", "marginBottom" to 4, "marginLeft" to "6rpx", "borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomLeftRadius" to 4, "borderBottomRightRadius" to 4)), "up-keyboard__button-wrapper__button" to _pS(_uM("width" to "222rpx", "height" to "90rpx", "backgroundColor" to "#FFFFFF", "display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "alignItems" to "center", "borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomLeftRadius" to 4, "borderBottomRightRadius" to 4)), "up-keyboard__button-wrapper__button__text" to _pS(_uM("fontSize" to 20, "fontWeight" to 400, "color" to "#303133")), "up-keyboard__button-wrapper__button--gray" to _pS(_uM("backgroundColor" to "#c8cad2")), "up-hover-class" to _pS(_uM("backgroundColor" to "#BBBCC6")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("change" to null, "backspace" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "mode" to _uM("type" to "String", "default" to "number"), "dotDisabled" to _uM("type" to "Boolean", "default" to true), "random" to _uM("type" to "Boolean", "default" to false)))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "mode",
            "dotDisabled",
            "random"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
