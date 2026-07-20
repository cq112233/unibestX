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
open class GenUniModulesUviewUltraComponentsUpCollapseItemUpCollapseItem : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var title: String by `$props`
    open var value: String by `$props`
    open var label: String by `$props`
    open var disabled: Boolean by `$props`
    open var isLink: Boolean by `$props`
    open var clickable: Boolean by `$props`
    open var border: Boolean by `$props`
    open var align: String by `$props`
    open var name: Any by `$props`
    open var icon: String by `$props`
    open var duration: Any by `$props`
    open var showRight: Boolean by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var init: () -> UTSPromise<Unit>
        get() {
            return unref(this.`$exposed`["init"]) as () -> UTSPromise<Unit>
        }
        set(value) {
            setRefValue(this.`$exposed`, "init", value)
        }
    open var setContentAnimate: (expandedFrom: Boolean) -> UTSPromise<Unit>
        get() {
            return unref(this.`$exposed`["setContentAnimate"]) as (expandedFrom: Boolean) -> UTSPromise<Unit>
        }
        set(value) {
            setRefValue(this.`$exposed`, "setContentAnimate", value)
        }
    open var getInternalState: () -> UTSJSONObject
        get() {
            return unref(this.`$exposed`["getInternalState"]) as () -> UTSJSONObject
        }
        set(value) {
            setRefValue(this.`$exposed`, "getInternalState", value)
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpCollapseItemUpCollapseItem, __setupCtx: SetupContext) -> Any? = fun(__props, __setupCtx): Any? {
            val __expose = __setupCtx.expose
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpCollapseItemUpCollapseItem
            val _cache = __ins.renderCache
            val _useUltraUI = useUltraUI()
            val parent = _useUltraUI.parent
            val parentData = _useUltraUI.parentData
            val getParentData = _useUltraUI.getParentData
            val instance = getCurrentInstance()!!.proxy!!
            val props = __props
            val timer = ref(0)
            val elId = ref(guid())
            val height = ref(0)
            val animationData = ref(_uO())
            val expanded = ref(false)
            val showBorder = ref(false)
            val animating = ref(false)
            watch(expanded, fun(n: Boolean){
                clearTimeout(timer.value)
                timer.value = 0
                timer.value = setTimeout(fun(){
                    showBorder.value = n
                }
                , if (n) {
                    10
                } else {
                    290
                }
                )
            }
            )
            val titleCpu = computed(fun(): String {
                if (instance?.`$slots`?.get("title") == null) {
                    return props.title.toString()
                } else {
                    return ""
                }
            }
            )
            fun gen_setContentAnimate_fn(expandedFrom: Boolean): UTSPromise<Unit> {
                return wrapUTSPromise(suspend {
                        expanded.value = expandedFrom
                        val rect: NodeInfo = await(uni.UNI5198058.upGetRect("#" + elId.value, false, instance))
                        height.value = if (expanded.value) {
                            if (rect.height == null) {
                                0
                            } else {
                                rect.height!!
                            }
                        } else {
                            0
                        }
                        animating.value = true
                        await(sleep(parseInt(props.duration.toString())))
                        animating.value = false
                })
            }
            val setContentAnimate = ::gen_setContentAnimate_fn
            fun gen_init_fn(): UTSPromise<Unit> {
                return wrapUTSPromise(suspend w1@{
                        getParentData("up-collapse", instance, false)
                        if (parent.value == null) {
                            return@w1 error("up-collapse-item必须要搭配up-collapse组件使用")
                        }
                        var value = parentData.value["value"] ?: ""
                        val accordion = parentData.value["accordion"]
                        if (accordion != null && accordion as Boolean) {
                            if (array(value)) {
                                return@w1 error("手风琴模式下，up-collapse组件的value参数不能为数组")
                            }
                            expanded.value = (props.name.toString() == value.toString())
                        } else {
                            if (!array(value) && value != "") {
                                console.log("#", value, "#", " at uni_modules/uview-ultra/components/up-collapse-item/up-collapse-item.uvue:197")
                                return@w1 error("非手风琴模式下，up-collapse组件的value参数必须为数组")
                            }
                            if (value == "") {
                                value = _uA<String>()
                            }
                            val valueArr = value as UTSArray<String>
                            val sameName = fun(element: String): Boolean {
                                return element == props.name.toString()
                            }
                            expanded.value = valueArr.some(sameName)
                        }
                        await(nextTick())
                        setContentAnimate(expanded.value)
                })
            }
            val init = ::gen_init_fn
            val clickHandler = fun() {
                if (props.disabled || animating.value) {
                    return
                }
                if (parent.value != null) {
                    parent.value!!.`$callMethod`("onChange", instance)
                } else {
                    console.error("parent is null", " at uni_modules/uview-ultra/components/up-collapse-item/up-collapse-item.uvue:220")
                }
            }
            onMounted(fun(){
                init()
            }
            )
            val getInternalState = fun(): UTSJSONObject {
                return _uO("name" to props.name, "expanded" to expanded.value)
            }
            __expose(_uM("init" to init, "setContentAnimate" to setContentAnimate, "getInternalState" to getInternalState))
            return fun(): Any? {
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                val _component_up_cell = resolveEasyComponent("up-cell", GenUniModulesUviewUltraComponentsUpCellUpCellClass)
                val _component_up_line = resolveEasyComponent("up-line", GenUniModulesUviewUltraComponentsUpLineUpLineClass)
                return _cE("view", _uM("class" to "up-collapse-item"), _uA(
                    _cV(_component_up_cell, _uM("title" to titleCpu.value, "value" to _ctx.value, "label" to _ctx.label, "icon" to _ctx.icon, "isLink" to _ctx.isLink, "clickable" to _ctx.clickable, "border" to (unref(parentData)["border"] != null && unref(parentData)["border"] as Boolean && showBorder.value), "onClick" to clickHandler, "arrowDirection" to if (expanded.value) {
                        "up"
                    } else {
                        "down"
                    }
                    , "disabled" to _ctx.disabled), _uM("title" to withSlotCtx(fun(): UTSArray<Any> {
                        return _uA(
                            renderSlot(_ctx.`$slots`, "title", _uO(), fun(): UTSArray<Any> {
                                return _uA(
                                    if (isTrue(_ctx.`$slots`["title"] != null && _ctx.title != "")) {
                                        _cE("text", _uM("key" to 0), _tD(_ctx.title), 1)
                                    } else {
                                        _cC("v-if", true)
                                    }
                                )
                            }
                            )
                        )
                    }
                    ), "icon" to withSlotCtx(fun(): UTSArray<Any> {
                        return _uA(
                            renderSlot(_ctx.`$slots`, "icon", _uO(), fun(): UTSArray<Any> {
                                return _uA(
                                    if (isTrue(_ctx.`$slots`["icon"] != null && _ctx.icon != "")) {
                                        _cV(_component_up_icon, _uM("key" to 0, "size" to 22, "name" to _ctx.icon), null, 8, _uA(
                                            "name"
                                        ))
                                    } else {
                                        _cC("v-if", true)
                                    }
                                )
                            }
                            )
                        )
                    }
                    ), "value" to withSlotCtx(fun(): UTSArray<Any> {
                        return _uA(
                            renderSlot(_ctx.`$slots`, "value", _uO(), fun(): UTSArray<Any> {
                                return _uA(
                                    if (isTrue(_ctx.`$slots`["value"] != null && _ctx.value != "")) {
                                        _cE("text", _uM("key" to 0), _tD(_ctx.value), 1)
                                    } else {
                                        _cC("v-if", true)
                                    }
                                )
                            }
                            )
                        )
                    }
                    ), "right-icon" to withSlotCtx(fun(): UTSArray<Any> {
                        return _uA(
                            if (isTrue(_ctx.showRight)) {
                                _cE(Fragment, _uM("key" to 0), _uA(
                                    if (_ctx.`$slots`["right-icon"] != null) {
                                        _cV(_component_up_icon, _uM("key" to 0, "size" to 16, "name" to "arrow-right"))
                                    } else {
                                        _cC("v-if", true)
                                    },
                                    renderSlot(_ctx.`$slots`, "right-icon")
                                ), 64)
                            } else {
                                _cC("v-if", true)
                            }
                        )
                    }
                    ), "_" to 3), 8, _uA(
                        "title",
                        "value",
                        "label",
                        "icon",
                        "isLink",
                        "clickable",
                        "border",
                        "arrowDirection",
                        "disabled"
                    )),
                    _cE("view", _uM("class" to "up-collapse-item__content", "style" to _nS(_uM("height" to _ctx.`$up`.addUnit(height.value))), "animation" to animationData.value, "ref" to "animation"), _uA(
                        _cE("view", _uM("class" to "up-collapse-item__content__text content-class", "id" to elId.value, "ref" to elId.value), _uA(
                            renderSlot(_ctx.`$slots`, "default")
                        ), 8, _uA(
                            "id"
                        ))
                    ), 12, _uA(
                        "animation"
                    )),
                    if (isTrue(unref(parentData)["border"])) {
                        _cV(_component_up_line, _uM("key" to 0))
                    } else {
                        _cC("v-if", true)
                    }
                ))
            }
        }
        var name = "up-collapse-item"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-collapse-item__content" to _pS(_uM("overflow" to "hidden", "height" to 0, "transitionProperty" to "height", "transitionDuration" to "0.5s", "transitionTimingFunction" to "ease-out")), "up-collapse-item__content__text" to _pS(_uM("paddingTop" to 12, "paddingRight" to 15, "paddingBottom" to 12, "paddingLeft" to 15)), "text" to _uM(".up-collapse-item__content__text " to _uM("color" to "#606266", "fontSize" to 14, "lineHeight" to "18px")), "@TRANSITION" to _uM("up-collapse-item__content" to _uM("property" to "height", "duration" to "0.5s", "timingFunction" to "ease-out")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "title" to _uM("type" to _uA(
            "String"
        ), "default" to default__94.getString("collapseItem.title")), "value" to _uM("type" to _uA(
            "String"
        ), "default" to default__94.getString("collapseItem.value")), "label" to _uM("type" to _uA(
            "String"
        ), "default" to default__94.getString("collapseItem.label")), "disabled" to _uM("type" to _uA(
            "Boolean"
        ), "default" to default__94.getBoolean("collapseItem.disabled")), "isLink" to _uM("type" to _uA(
            "Boolean"
        ), "default" to default__94.getBoolean("collapseItem.isLink")), "clickable" to _uM("type" to _uA(
            "Boolean"
        ), "default" to default__94.getBoolean("collapseItem.clickable")), "border" to _uM("type" to _uA(
            "Boolean"
        ), "default" to default__94.getBoolean("collapseItem.border")), "align" to _uM("type" to _uA(
            "String"
        ), "default" to default__94.getString("collapseItem.align")), "name" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__94.getString("collapseItem.name")), "icon" to _uM("type" to _uA(
            "String"
        ), "default" to default__94.getString("collapseItem.icon")), "duration" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to default__94.getNumber("collapseItem.duration")), "showRight" to _uM("type" to _uA(
            "Boolean"
        ), "default" to default__94.getBoolean("collapseItem.showRight"))))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "title",
            "value",
            "label",
            "disabled",
            "isLink",
            "clickable",
            "border",
            "align",
            "name",
            "icon",
            "duration",
            "showRight"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
