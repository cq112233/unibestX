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
open class GenUniModulesUviewUltraComponentsUpFormItemUpFormItem : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var label: String by `$props`
    open var prop: String by `$props`
    open var rules: Any by `$props`
    open var borderBottom: Any by `$props`
    open var labelPosition: String by `$props`
    open var labelWidth: Any by `$props`
    open var rightIcon: String by `$props`
    open var leftIcon: String by `$props`
    open var required: Boolean by `$props`
    open var leftIconStyle: Any by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var getProps: () -> UTSJSONObject
        get() {
            return unref(this.`$exposed`["getProps"]) as () -> UTSJSONObject
        }
        set(value) {
            setRefValue(this.`$exposed`, "getProps", value)
        }
    open var getRefs: () -> UTSJSONObject
        get() {
            return unref(this.`$exposed`["getRefs"]) as () -> UTSJSONObject
        }
        set(value) {
            setRefValue(this.`$exposed`, "getRefs", value)
        }
    open var setMessage: (msg: String) -> Unit
        get() {
            return unref(this.`$exposed`["setMessage"]) as (msg: String) -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "setMessage", value)
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpFormItemUpFormItem, __setupCtx: SetupContext) -> Any? = fun(__props, __setupCtx): Any? {
            val __expose = __setupCtx.expose
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpFormItemUpFormItem
            val _cache = __ins.renderCache
            val _useUltraUI = useUltraUI(_uO("labelPosition" to "left", "labelAlign" to "left", "labelStyle" to _uO(), "labelWidth" to 45, "errorType" to "message", "originalModel" to _uO()))
            val parent = _useUltraUI.parent
            val parentData = _useUltraUI.parentData
            val getParentData = _useUltraUI.getParentData
            val instance = getCurrentInstance()!!.proxy!!
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val message = ref("")
            val itemRules = ref(_uO() as Any)
            val updateParentData = fun(){
                getParentData("up-form", instance, false)
            }
            val init = fun(){
                updateParentData()
                if (parent.value == null) {
                    error("up-form-item需要结合up-form组件使用")
                }
            }
            val setRules = fun(rules: Any){
                if (UTSArray.isArray(rules)) {
                    if ((rules as UTSArray<UTSJSONObject>).length == 0) {
                        itemRules.value = _uO()
                        return
                    }
                } else {
                    if (UTSJSONObject.keys(rules as UTSJSONObject).length == 0) {
                        itemRules.value = _uO()
                        return
                    }
                }
                itemRules.value = rules
            }
            val clickHandler = fun(){
                emit("click")
            }
            watch(fun(): Any {
                return props.rules
            }
            , fun(newVal: Any){
                setRules(newVal as Any)
            }
            , WatchOptions(immediate = true))
            onMounted(fun(){
                init()
            }
            )
            val getProps = fun(): UTSJSONObject {
                return _uO("prop" to props.prop, "rules" to itemRules.value, "label" to props.label, "borderBottom" to props.borderBottom, "labelPosition" to props.labelPosition, "labelWidth" to props.labelWidth, "rightIcon" to props.rightIcon, "leftIcon" to props.leftIcon, "required" to props.required, "leftIconStyle" to props.leftIconStyle)
            }
            val getRefs = fun(): UTSJSONObject {
                return _uO("message" to message.value, "itemRules" to itemRules.value)
            }
            val setMessage = fun(msg: String) {
                message.value = msg
            }
            __expose(_uM("getProps" to getProps, "getRefs" to getRefs, "setMessage" to setMessage))
            return fun(): Any? {
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                val _component_up_line = resolveEasyComponent("up-line", GenUniModulesUviewUltraComponentsUpLineUpLineClass)
                return _cE("view", _uM("class" to _nC(_uA(
                    "up-form-item",
                    _uM("up-form-item--error" to (message.value != "" && unref(parentData)["errorType"] == "message"))
                ))), _uA(
                    _cE("view", _uM("class" to "up-form-item__body", "onClick" to clickHandler, "style" to _nS(_uA(
                        _ctx.`$up`.addStyle(_ctx.customStyle),
                        _uM("flexDirection" to if ((if (_ctx.labelPosition != "") {
                            _ctx.labelPosition
                        } else {
                            unref(parentData)["labelPosition"]
                        }
                        ) == "left") {
                            "row"
                        } else {
                            "column"
                        }
                        )
                    ))), _uA(
                        renderSlot(_ctx.`$slots`, "label", _uO(), fun(): UTSArray<Any> {
                            return _uA(
                                if (isTrue((if (isTruthy(_ctx.required)) {
                                    _ctx.required
                                } else {
                                    _ctx.leftIcon != ""
                                }
                                ) || _ctx.label != "")) {
                                    _cE("view", _uM("key" to 0, "class" to "up-form-item__body__left", "style" to _nS(_uM("width" to _ctx.`$up`.addUnit(if (_ctx.labelWidth != "") {
                                        _ctx.labelWidth
                                    } else {
                                        unref(parentData)["labelWidth"]
                                    }), "marginBottom" to if ((if (_ctx.labelPosition != "") {
                                        _ctx.labelPosition
                                    } else {
                                        unref(parentData)["labelPosition"]
                                    }) == "left") {
                                        0
                                    } else {
                                        "5px"
                                    }))), _uA(
                                        _cE("view", _uM("class" to "up-form-item__body__left__content"), _uA(
                                            if (isTrue(_ctx.required)) {
                                                _cE("text", _uM("key" to 0, "class" to "up-form-item__body__left__content__required"), "*")
                                            } else {
                                                _cC("v-if", true)
                                            },
                                            if (_ctx.leftIcon != "") {
                                                _cE("view", _uM("key" to 1, "class" to "up-form-item__body__left__content__icon"), _uA(
                                                    _cV(_component_up_icon, _uM("name" to _ctx.leftIcon, "custom-style" to _ctx.leftIconStyle), null, 8, _uA(
                                                        "name",
                                                        "custom-style"
                                                    ))
                                                ))
                                            } else {
                                                _cC("v-if", true)
                                            },
                                            _cE("view", _uM("class" to "up-form-item__body__left__content__label", "style" to _nS(_uM("justifyContent" to if (unref(parentData)["labelAlign"] == "left") {
                                                "flex-start"
                                            } else {
                                                if (unref(parentData)["labelAlign"] == "center") {
                                                    "center"
                                                } else {
                                                    "flex-end"
                                                }
                                            }))), _uA(
                                                _cE("text", _uM("class" to "up-form-item__body__left__content__label__text", "style" to _nS((unref(parentData)["labelStyle"] ?: _uM<String, Any?>()) as Any)), _tD(_ctx.label), 5)
                                            ), 4)
                                        ))
                                    ), 4)
                                } else {
                                    _cC("v-if", true)
                                }
                            )
                        }
                        ),
                        _cE("view", _uM("class" to "up-form-item__body__right"), _uA(
                            _cE("view", _uM("class" to "up-form-item__body__right__content"), _uA(
                                _cE("view", _uM("class" to "up-form-item__body__right__content__slot"), _uA(
                                    renderSlot(_ctx.`$slots`, "default")
                                )),
                                if (_ctx.`$slots`["right"] != null) {
                                    _cE("view", _uM("key" to 0, "class" to "item__body__right__content__icon"), _uA(
                                        renderSlot(_ctx.`$slots`, "right")
                                    ))
                                } else {
                                    _cC("v-if", true)
                                }
                            ))
                        ))
                    ), 4),
                    renderSlot(_ctx.`$slots`, "error", _uO(), fun(): UTSArray<Any> {
                        return _uA(
                            if (isTrue(message.value != "" && unref(parentData)["errorType"] == "message")) {
                                _cE("text", _uM("key" to 0, "class" to "up-form-item__body__right__message", "style" to _nS(_uM("marginLeft" to _ctx.`$up`.addUnit(if ((_ctx.labelPosition ?: unref(parentData)["labelPosition"]) == "top") {
                                    0
                                } else {
                                    if (_ctx.labelWidth != null) {
                                        _ctx.labelWidth
                                    } else {
                                        unref(parentData)["labelWidth"]
                                    }
                                })))), _tD(message.value), 5)
                            } else {
                                _cC("v-if", true)
                            }
                        )
                    }
                    ),
                    if (isTrue(_ctx.borderBottom)) {
                        _cV(_component_up_line, _uM("key" to 0, "color" to if (message.value != "" && unref(parentData)["errorType"] == "border-bottom") {
                            unref(color)["error"]
                        } else {
                            unref(default__23)["color"]
                        }, "customStyle" to ("margin-top: " + (if (message.value != "" && unref(parentData)["errorType"] == "message") {
                            "5px"
                        } else {
                            0
                        }))), null, 8, _uA(
                            "color",
                            "customStyle"
                        ))
                    } else {
                        _cC("v-if", true)
                    }
                ), 2)
            }
        }
        var name = "up-form-item"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("up-form-item" to _pS(_uM("display" to "flex", "flexDirection" to "column")), "up-form-item__body" to _pS(_uM("display" to "flex", "flexDirection" to "row", "paddingTop" to 10, "paddingRight" to 0, "paddingBottom" to 10, "paddingLeft" to 0)), "up-form-item__body__left" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center")), "up-form-item__body__left__content" to _pS(_uM("position" to "relative", "display" to "flex", "flexDirection" to "row", "alignItems" to "center", "paddingRight" to "10rpx", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "up-form-item__body__left__content__icon" to _pS(_uM("marginRight" to "8rpx")), "up-form-item__body__left__content__required" to _pS(_uM("position" to "absolute", "left" to -9, "color" to "#f56c6c", "lineHeight" to "20px", "fontSize" to 20, "top" to 3)), "up-form-item__body__left__content__label" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "up-form-item__body__left__content__label__text" to _pS(_uM("color" to "#303133", "fontSize" to 15)), "up-form-item__body__right" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "up-form-item__body__right__content" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "up-form-item__body__right__content__slot" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "display" to "flex", "flexDirection" to "row", "alignItems" to "center")), "up-form-item__body__right__content__icon" to _pS(_uM("marginLeft" to "10rpx", "color" to "#c0c4cc", "fontSize" to "30rpx")), "up-form-item__body__right__message" to _pS(_uM("fontSize" to 12, "lineHeight" to "12px", "color" to "#f56c6c")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("click" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "label" to _uM("type" to "String", "default" to default__77.getString("formItem.label")), "prop" to _uM("type" to "String", "default" to default__77.getString("formItem.prop")), "rules" to _uM("type" to _uA(
            "UTSJSONObject",
            "Array"
        ), "default" to default__77.getAny("formItem.rules") as UTSJSONObject), "borderBottom" to _uM("type" to _uA(
            "String",
            "Boolean"
        ), "default" to default__77.getString("formItem.borderBottom")), "labelPosition" to _uM("type" to "String", "default" to default__77.getString("formItem.labelPosition")), "labelWidth" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__77.getString("formItem.labelWidth")), "rightIcon" to _uM("type" to "String", "default" to default__77.getString("formItem.rightIcon")), "leftIcon" to _uM("type" to "String", "default" to default__77.getString("formItem.leftIcon")), "required" to _uM("type" to "Boolean", "default" to default__77.getBoolean("formItem.required")), "leftIconStyle" to _uM("type" to _uA(
            "String",
            "UTSJSONObject"
        ), "default" to default__77.getString("formItem.leftIconStyle"))))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "label",
            "prop",
            "rules",
            "borderBottom",
            "labelPosition",
            "labelWidth",
            "rightIcon",
            "leftIcon",
            "required",
            "leftIconStyle"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
