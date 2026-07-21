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
import io.dcloud.uniapp.extapi.navigateTo as uni_navigateTo
open class GenUniModulesUviewUltraComponentsUpCellUpCell : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var title: String by `$props`
    open var label: String by `$props`
    open var value: Any by `$props`
    open var icon: String by `$props`
    open var iconStyle: Any by `$props`
    open var rightIcon: String by `$props`
    open var rightIconStyle: Any by `$props`
    open var size: String by `$props`
    open var center: Boolean by `$props`
    open var url: String by `$props`
    open var name: Any by `$props`
    open var linkType: String by `$props`
    open var clickable: Boolean by `$props`
    open var isLink: Boolean by `$props`
    open var arrowDirection: String by `$props`
    open var border: Boolean by `$props`
    open var disabled: Boolean by `$props`
    open var titleStyle: Any by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var testEmpty: (kVal: Any) -> Boolean
        get() {
            return unref(this.`$exposed`["testEmpty"]) as (kVal: Any) -> Boolean
        }
        set(value) {
            setRefValue(this.`$exposed`, "testEmpty", value)
        }
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpCellUpCell, __setupCtx: SetupContext) -> Any? = fun(__props, __setupCtx): Any? {
            val __expose = __setupCtx.expose
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpCellUpCell
            val _cache = __ins.renderCache
            val props = __props
            fun emits(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val testEmpty = fun(kVal: Any): Boolean {
                return empty(kVal)
            }
            val titleTextStyle = computed(fun(): Any {
                return addStyle(props.titleStyle)
            }
            )
            val clickHandler = fun(e: Any){
                if (props.disabled) {
                    return
                }
                emits("click", _uO("name" to props.name))
                if (!props.isLink) {
                    return
                }
                if (props.url != "") {
                    uni_navigateTo(NavigateToOptions(url = props.url))
                }
            }
            __expose(_uM("testEmpty" to testEmpty))
            return fun(): Any? {
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                val _component_up_line = resolveEasyComponent("up-line", GenUniModulesUviewUltraComponentsUpLineUpLineClass)
                return _cE("view", _uM("class" to _nC(_uA(
                    "up-cell",
                    _uA(
                        _ctx.customClass
                    )
                )), "style" to _nS(_uA(
                    _ctx.`$up`.addStyle(_ctx.customStyle)
                )), "hover-class" to if ((!_ctx.disabled && (_ctx.clickable || _ctx.isLink))) {
                    "up-cell--clickable"
                } else {
                    ""
                }
                , "hover-stay-time" to 250, "onClick" to clickHandler), _uA(
                    _cE("view", _uM("class" to "up-cell__body", "aclass" to "[ center && 'up-cell--center', size === 'large' && 'up-cell__body--large']"), _uA(
                        _cE("view", _uM("class" to "up-cell__body__content"), _uA(
                            if (isTrue(_ctx.`$slots`["icon"] != null || _ctx.icon != "")) {
                                _cE("view", _uM("key" to 0, "class" to "up-cell__left-icon-wrap"), _uA(
                                    if (_ctx.`$slots`["icon"] != null) {
                                        renderSlot(_ctx.`$slots`, "icon", _uM("key" to 0))
                                    } else {
                                        _cV(_component_up_icon, _uM("key" to 1, "name" to _ctx.icon, "custom-style" to _ctx.iconStyle, "size" to if (_ctx.size === "large") {
                                            "22px"
                                        } else {
                                            "18px"
                                        }), null, 8, _uA(
                                            "name",
                                            "custom-style",
                                            "size"
                                        ))
                                    }
                                ))
                            } else {
                                _cC("v-if", true)
                            }
                            ,
                            _cE("view", _uM("class" to "up-cell__title"), _uA(
                                if (isTrue(_ctx.`$slots`["title"] != null && _ctx.title == "")) {
                                    renderSlot(_ctx.`$slots`, "title", _uM("key" to 0))
                                } else {
                                    _cE("text", _uM("key" to 1, "class" to "up-cell__title-text", "style" to _nS(_uA(
                                        titleTextStyle.value
                                    )), "aclass" to "[disabled && 'up-cell--disabled', size === 'large' && 'up-cell__title-text--large']"), _tD(_ctx.title), 5)
                                }
                                ,
                                renderSlot(_ctx.`$slots`, "label", _uO(), fun(): UTSArray<Any> {
                                    return _uA(
                                        if (isTrue(_ctx.label)) {
                                            _cE("text", _uM("key" to 0, "class" to "up-cell__label", "aclass" to "[disabled && 'up-cell--disabled', size === 'large' && 'up-cell__label--large']"), _tD(_ctx.label), 1)
                                        } else {
                                            _cC("v-if", true)
                                        }
                                    )
                                }
                                )
                            ))
                        )),
                        renderSlot(_ctx.`$slots`, "value", _uO(), fun(): UTSArray<Any> {
                            return _uA(
                                if (testEmpty(_ctx.value) == false) {
                                    _cE("text", _uM("key" to 0, "class" to "up-cell__value", "aclass" to "[disabled && 'up-cell--disabled', size === 'large' && 'up-cell__value--large']"), _tD(_ctx.value), 1)
                                } else {
                                    _cC("v-if", true)
                                }
                            )
                        }
                        ),
                        if (isTrue(_ctx.`$slots`["right-icon"] != null || _ctx.isLink)) {
                            _cE("view", _uM("key" to 0, "class" to _nC(_uA(
                                "up-cell__right-icon-wrap",
                                _uA(
                                    "up-cell__right-icon-wrap--" + _ctx.arrowDirection
                                )
                            ))), _uA(
                                renderSlot(_ctx.`$slots`, "right-icon", _uO(), fun(): UTSArray<Any> {
                                    return _uA(
                                        if (isTrue(_ctx.rightIcon)) {
                                            _cV(_component_up_icon, _uM("key" to 0, "name" to _ctx.rightIcon, "custom-style" to _ctx.rightIconStyle, "color" to if (_ctx.disabled) {
                                                "#c8c9cc"
                                            } else {
                                                "info"
                                            }, "size" to if (_ctx.size === "large") {
                                                "18px"
                                            } else {
                                                "16px"
                                            }), null, 8, _uA(
                                                "name",
                                                "custom-style",
                                                "color",
                                                "size"
                                            ))
                                        } else {
                                            _cC("v-if", true)
                                        }
                                    )
                                })
                            ), 2)
                        } else {
                            _cC("v-if", true)
                        }
                        ,
                        if (_ctx.`$slots`["righticon"] != null) {
                            _cE("view", _uM("key" to 1, "class" to _nC(_uA(
                                "up-cell__right-icon-wrap",
                                _uA(
                                    "up-cell__right-icon-wrap--" + _ctx.arrowDirection
                                )
                            ))), _uA(
                                renderSlot(_ctx.`$slots`, "righticon")
                            ), 2)
                        } else {
                            _cC("v-if", true)
                        }
                    )),
                    if (isTrue(_ctx.border)) {
                        _cV(_component_up_line, _uM("key" to 0))
                    } else {
                        _cC("v-if", true)
                    }
                ), 14, _uA(
                    "hover-class"
                ))
            }
        }
        var name = "up-cell"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-cell__body" to _pS(_uM("display" to "flex", "flexDirection" to "row", "boxSizing" to "border-box", "!paddingTop" to 10, "!paddingRight" to 15, "!paddingBottom" to 10, "!paddingLeft" to 15, "alignItems" to "center")), "up-cell__body__content" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "up-cell__body--large" to _pS(_uM("!paddingTop" to 13, "!paddingBottom" to 13)), "up-cell__left-icon-wrap" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "!marginRight" to 4)), "up-cell__right-icon-wrap" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "!marginLeft" to 4, "transitionProperty" to "transform", "transitionDuration" to "0.3s")), "up-cell__right-icon-wrap--up" to _pS(_uM("transform" to "rotate(-90deg)")), "up-cell__right-icon-wrap--down" to _pS(_uM("transform" to "rotate(90deg)")), "up-cell__title" to _pS(_uM("!flexGrow" to 1, "!flexShrink" to 1, "!flexBasis" to "0%")), "up-cell__title-text" to _pS(_uM("!fontSize" to 15, "!lineHeight" to "22px", "!color" to "#303133")), "up-cell__title-text--large" to _pS(_uM("!fontSize" to 16)), "up-cell__label" to _pS(_uM("!marginTop" to 5, "!fontSize" to 12, "!color" to "#909193", "!lineHeight" to "18px")), "up-cell__label--large" to _pS(_uM("!fontSize" to 14)), "up-cell__value" to _pS(_uM("textAlign" to "right", "marginLeft" to "auto", "!fontSize" to 14, "!lineHeight" to "24px", "!color" to "#606266")), "up-cell__value--large" to _pS(_uM("!fontSize" to 15)), "up-cell--clickable" to _pS(_uM("!backgroundColor" to "#f3f4f6")), "up-cell--disabled" to _pS(_uM("!color" to "#c8c9cc")), "up-cell--center" to _pS(_uM("alignItems" to "center")), "@TRANSITION" to _uM("up-cell__right-icon-wrap" to _uM("property" to "transform", "duration" to "0.3s")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("click" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "title" to _uM("type" to "String", "default" to default__47.getString("cell.title")), "label" to _uM("type" to "String", "default" to default__47.getString("cell.label")), "value" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__47.getString("cell.value")), "icon" to _uM("type" to "String", "default" to default__47.getString("cell.icon")), "iconStyle" to _uM("type" to _uA(
            "String",
            "Object"
        ), "default" to default__47.getAny("cell.iconStyle")), "rightIcon" to _uM("type" to "String", "default" to default__47.getString("cell.rightIcon")), "rightIconStyle" to _uM("type" to _uA(
            "String",
            "Object"
        ), "default" to default__47.getAny("cell.rightIconStyle")), "size" to _uM("type" to "String", "default" to default__47.getString("cell.size")), "center" to _uM("type" to "Boolean", "default" to default__47.getBoolean("cell.center")), "url" to _uM("type" to "String", "default" to default__47.getString("cell.url")), "name" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__47.getString("cell.name")), "linkType" to _uM("type" to "String", "default" to default__47.getString("cell.linkType")), "clickable" to _uM("type" to "Boolean", "default" to default__47.getBoolean("cell.clickable")), "isLink" to _uM("type" to "Boolean", "default" to default__47.getBoolean("cell.isLink")), "arrowDirection" to _uM("type" to "String", "default" to default__47.getString("cell.arrowDirection")), "border" to _uM("type" to "Boolean", "default" to default__47.getBoolean("cell.border")), "disabled" to _uM("type" to "Boolean", "default" to default__47.getBoolean("cell.disabled")), "titleStyle" to _uM("default" to default__47.getAny("cell.titleStyle"))))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "title",
            "label",
            "value",
            "icon",
            "iconStyle",
            "rightIcon",
            "rightIconStyle",
            "size",
            "center",
            "url",
            "name",
            "linkType",
            "clickable",
            "isLink",
            "arrowDirection",
            "border",
            "disabled",
            "titleStyle"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
