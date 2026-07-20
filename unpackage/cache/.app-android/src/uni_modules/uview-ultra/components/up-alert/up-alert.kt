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
open class GenUniModulesUviewUltraComponentsUpAlertUpAlert : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var type: String by `$props`
    open var description: String by `$props`
    open var closable: Boolean by `$props`
    open var showIcon: Boolean by `$props`
    open var effect: String by `$props`
    open var center: Boolean by `$props`
    open var fontSize: Any by `$props`
    open var customStyle: Any by `$props`
    open var title: String by `$props`
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpAlertUpAlert) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpAlertUpAlert
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val show = ref(true)
            val style1 = computed(fun(): UTSJSONObject {
                return _uO("fontSize" to addUnit(props.fontSize), "textAlign" to if (props.center) {
                    "center"
                } else {
                    "left"
                }
                )
            }
            )
            val iconColor = computed(fun(): String {
                return if (props.effect == "light") {
                    props.type
                } else {
                    "#ffffff"
                }
            }
            )
            val iconName = computed(fun(): String {
                when (props.type) {
                    "success" -> 
                        return "checkmark-circle-fill"
                    "error" -> 
                        return "close-circle-fill"
                    "warning" -> 
                        return "error-circle-fill"
                    "info" -> 
                        return "info-circle-fill"
                    "primary" -> 
                        return "more-circle-fill"
                    else -> 
                        return "error-circle-fill"
                }
            }
            )
            val clickHandler = fun(){
                emit("click")
            }
            val closeHandler = fun(){
                show.value = false
            }
            return fun(): Any? {
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                val _component_up_transition = resolveEasyComponent("up-transition", GenUniModulesUviewUltraComponentsUpTransitionUpTransitionClass)
                return _cV(_component_up_transition, _uM("mode" to "fade", "show" to show.value), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cE("view", _uM("class" to _nC(_uA(
                            "up-alert",
                            _uA(
                                "up-alert--" + _ctx.type + "--" + _ctx.effect
                            )
                        )), "onClick" to withModifiers(clickHandler, _uA(
                            "stop"
                        )), "style" to _nS(_uA(
                            _ctx.`$upAddStyle`(_ctx.customStyle)
                        ))), _uA(
                            if (isTrue(_ctx.showIcon)) {
                                _cE("view", _uM("key" to 0, "class" to "up-alert__icon"), _uA(
                                    _cV(_component_up_icon, _uM("name" to iconName.value, "size" to "18", "color" to iconColor.value), null, 8, _uA(
                                        "name",
                                        "color"
                                    ))
                                ))
                            } else {
                                _cC("v-if", true)
                            }
                            ,
                            _cE("view", _uM("class" to "up-alert__content", "style" to _nS(_uA(
                                _uM("paddingRight" to if (_ctx.closable) {
                                    "20px"
                                } else {
                                    0
                                }
                                )
                            ))), _uA(
                                if (isTrue(_ctx.title)) {
                                    _cE("text", _uM("key" to 0, "class" to _nC(_uA(
                                        "up-alert__content__title",
                                        _uA(
                                            if (_ctx.effect === "dark") {
                                                "up-alert__text--dark"
                                            } else {
                                                "up-alert__text--" + _ctx.type + "--light"
                                            }
                                        )
                                    )), "style" to _nS(_uA(
                                        style1.value
                                    ))), _tD(_ctx.title), 7)
                                } else {
                                    _cC("v-if", true)
                                }
                                ,
                                if (isTrue(_ctx.description)) {
                                    _cE("text", _uM("key" to 1, "class" to _nC(_uA(
                                        "up-alert__content__desc",
                                        _uA(
                                            if (_ctx.effect === "dark") {
                                                "up-alert__text--dark"
                                            } else {
                                                "up-alert__text--" + _ctx.type + "--light"
                                            }
                                        )
                                    )), "style" to _nS(_uA(
                                        style1.value
                                    ))), _tD(_ctx.description), 7)
                                } else {
                                    _cC("v-if", true)
                                }
                            ), 4),
                            if (isTrue(_ctx.closable)) {
                                _cE("view", _uM("key" to 1, "class" to "up-alert__close", "onClick" to withModifiers(closeHandler, _uA(
                                    "stop"
                                ))), _uA(
                                    _cV(_component_up_icon, _uM("name" to "close", "color" to iconColor.value, "size" to "15"), null, 8, _uA(
                                        "color"
                                    ))
                                ))
                            } else {
                                _cC("v-if", true)
                            }
                        ), 6)
                    )
                }
                ), "_" to 1), 8, _uA(
                    "show"
                ))
            }
        }
        var name = "up-alert"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-alert" to _pS(_uM("position" to "relative", "backgroundColor" to "var(--theme-color, #0957de)", "paddingTop" to 8, "paddingRight" to 10, "paddingBottom" to 8, "paddingLeft" to 10, "display" to "flex", "flexDirection" to "row", "alignItems" to "center", "borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomLeftRadius" to 4, "borderBottomRightRadius" to 4)), "up-alert--primary--dark" to _pS(_uM("backgroundColor" to "var(--theme-color, #0957de)")), "up-alert--primary--light" to _pS(_uM("backgroundColor" to "#ecf5ff")), "up-alert--error--dark" to _pS(_uM("backgroundColor" to "#f56c6c")), "up-alert--error--light" to _pS(_uM("backgroundColor" to "#FEF0F0")), "up-alert--success--dark" to _pS(_uM("backgroundColor" to "#5ac725")), "up-alert--success--light" to _pS(_uM("backgroundColor" to "#f5fff0")), "up-alert--warning--dark" to _pS(_uM("backgroundColor" to "#f9ae3d")), "up-alert--warning--light" to _pS(_uM("backgroundColor" to "#FDF6EC")), "up-alert--info--dark" to _pS(_uM("backgroundColor" to "#909399")), "up-alert--info--light" to _pS(_uM("backgroundColor" to "#f4f4f5")), "up-alert__icon" to _pS(_uM("marginRight" to 5)), "up-alert__content" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "up-alert__content__title" to _pS(_uM("color" to "#ffffff", "fontSize" to 14, "fontWeight" to "bold", "marginBottom" to 2)), "up-alert__content__desc" to _pS(_uM("color" to "#ffffff", "fontSize" to 14, "flexWrap" to "wrap")), "up-alert__title--dark" to _pS(_uM("color" to "#FFFFFF")), "up-alert__desc--dark" to _pS(_uM("color" to "#FFFFFF")), "up-alert__text--primary--light" to _pS(_uM("color" to "var(--theme-color, #0957de)")), "up-alert__text--success--light" to _pS(_uM("color" to "#5ac725")), "up-alert__text--warning--light" to _pS(_uM("color" to "#f9ae3d")), "up-alert__text--error--light" to _pS(_uM("color" to "#f56c6c")), "up-alert__text--info--light" to _pS(_uM("color" to "#909399")), "up-alert__close" to _pS(_uM("position" to "absolute", "top" to 11, "right" to 10)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("click" to null)
        var props = _nP(_uM("customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "type" to _uM("type" to "String", "default" to default__90.getString("alert.type")), "description" to _uM("type" to "String", "default" to default__90.getString("alert.description")), "closable" to _uM("type" to "Boolean", "default" to default__90.getBoolean("alert.closable")), "showIcon" to _uM("type" to "Boolean", "default" to default__90.getBoolean("alert.showIcon")), "effect" to _uM("type" to "String", "default" to default__90.getString("alert.effect")), "center" to _uM("type" to "Boolean", "default" to default__90.getBoolean("alert.center")), "fontSize" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__90.getNumber("alert.fontSize")), "customStyle" to _uM("default" to fun(): UTSJSONObject {
            return (_uO())
        }
        ), "title" to _uM("type" to "String", "default" to default__90.getString("alert.title", ""))))
        var propsNeedCastKeys = _uA(
            "customClass",
            "url",
            "linkType",
            "type",
            "description",
            "closable",
            "showIcon",
            "effect",
            "center",
            "fontSize",
            "customStyle",
            "title"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
