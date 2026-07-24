@file:Suppress("UNCHECKED_CAST", "USELESS_CAST", "INAPPLICABLE_JVM_NAME", "UNUSED_ANONYMOUS_PARAMETER", "SENSELESS_COMPARISON", "NAME_SHADOWING", "UNNECESSARY_NOT_NULL_ASSERTION")
package uni.UNI5198058
import io.dcloud.uniapp.*
import io.dcloud.uniapp.extapi.*
import io.dcloud.uniapp.framework.*
import io.dcloud.uniapp.runtime.*
import io.dcloud.uniapp.vue.*
import io.dcloud.uniapp.vue.shared.*
import io.dcloud.uts.*
import io.dcloud.uts.Map
import io.dcloud.uts.Set
import io.dcloud.uts.UTSAndroid
import kotlin.properties.Delegates
open class GenUniModulesUviewUltraComponentsUpActionSheetUpActionSheet : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var show: Boolean by `$props`
    open var title: String by `$props`
    open var description: String by `$props`
    open var actions: UTSArray<UTSJSONObject> by `$props`
    open var cancelText: String by `$props`
    open var closeOnClickAction: Boolean by `$props`
    open var safeAreaInsetBottom: Boolean by `$props`
    open var openType: String by `$props`
    open var closeOnClickOverlay: Boolean by `$props`
    open var round: Any by `$props`
    open var wrapMaxHeight: String by `$props`
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpActionSheetUpActionSheet) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpActionSheetUpActionSheet
            val _cache = __ins.renderCache
            val _useUltraUI = useUltraUI()
            val onComponentDestroy = _useUltraUI.onComponentDestroy
            val preventEvent = _useUltraUI.preventEvent
            val noop = _useUltraUI.noop
            val instance = getCurrentInstance()!!.proxy!!
            val props = __props
            onMounted(fun(){})
            onBeforeUnmount(fun(){
                onComponentDestroy(instance)
            }
            )
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val itemStyle = computed(fun(): (index: Number) -> Any {
                return fun(index: Number): Any {
                    var style: UTSJSONObject = _uO()
                    return style
                }
            }
            )
            val closeHandler = fun(){
                if (props.closeOnClickOverlay) {
                    emit("update:show")
                    emit("close")
                }
            }
            val cancel = fun(){
                emit("update:show")
                emit("close")
            }
            val selectHandler = fun(index: Number){
                val item = props.actions[index]
                if (item["disabled"] != true && item["loading"] != true) {
                    emit("select", item as UTSJSONObject)
                    if (props.closeOnClickAction) {
                        emit("update:show")
                        emit("close")
                    }
                }
            }
            return fun(): Any? {
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                val _component_up_line = resolveEasyComponent("up-line", GenUniModulesUviewUltraComponentsUpLineUpLineClass)
                val _component_up_loading_icon = resolveEasyComponent("up-loading-icon", GenUniModulesUviewUltraComponentsUpLoadingIconUpLoadingIconClass)
                val _component_up_gap = resolveEasyComponent("up-gap", GenUniModulesUviewUltraComponentsUpGapUpGapClass)
                val _component_up_popup = resolveEasyComponent("up-popup", GenUniModulesUviewUltraComponentsUpPopupUpPopupClass)
                return _cV(_component_up_popup, _uM("show" to _ctx.show, "mode" to "bottom", "onClose" to closeHandler, "safeAreaInsetBottom" to _ctx.safeAreaInsetBottom, "round" to _ctx.round), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cE("view", _uM("class" to "up-action-sheet"), _uA(
                            if (isTrue(_ctx.title)) {
                                _cE("view", _uM("key" to 0, "class" to "up-action-sheet__header"), _uA(
                                    _cE("text", _uM("class" to "up-action-sheet__header__title up-line-1"), _tD(_ctx.title), 1),
                                    _cE("view", _uM("class" to "up-action-sheet__header__icon-wrap", "onClick" to withModifiers(cancel, _uA(
                                        "stop"
                                    ))), _uA(
                                        _cV(_component_up_icon, _uM("name" to "close", "size" to "17", "color" to "#c8c9cc", "bold" to ""))
                                    ))
                                ))
                            } else {
                                _cC("v-if", true)
                            }
                            ,
                            if (isTrue(_ctx.description)) {
                                _cE("text", _uM("key" to 1, "class" to "up-action-sheet__description", "style" to _nS(_uA(
                                    _uM("marginTop" to ("" + (if (_ctx.title != "" && _ctx.description != "") {
                                        0
                                    } else {
                                        "18px"
                                    })))
                                ))), _tD(_ctx.description), 5)
                            } else {
                                _cC("v-if", true)
                            }
                            ,
                            renderSlot(_ctx.`$slots`, "default", _uO(), fun(): UTSArray<Any> {
                                return _uA(
                                    if (isTrue(_ctx.description)) {
                                        _cV(_component_up_line, _uM("key" to 0))
                                    } else {
                                        _cC("v-if", true)
                                    }
                                    ,
                                    _cE("scroll-view", _uM("scroll-y" to "", "class" to "up-action-sheet__item-wrap", "style" to _nS(_uM("maxHeight" to _ctx.wrapMaxHeight))), _uA(
                                        _cE(Fragment, null, RenderHelpers.renderList(_ctx.actions, fun(item, index, __index, _cached): Any {
                                            return _cE("view", _uM("key" to index), _uA(
                                                _cE("view", _uM("class" to "up-action-sheet__item-wrap__item", "onClick" to withModifiers(fun(){
                                                    selectHandler(index)
                                                }
                                                , _uA(
                                                    "stop"
                                                )), "hover-class" to if (item["disabled"] != true && item["loading"] != true) {
                                                    "up-action-sheet--hover"
                                                } else {
                                                    ""
                                                }
                                                , "hover-stay-time" to 150), _uA(
                                                    if (isTrue(item["loading"])) {
                                                        _cV(_component_up_loading_icon, _uM("key" to 0, "custom-class" to "van-action-sheet__loading", "size" to "18", "mode" to "circle"))
                                                    } else {
                                                        _cE(Fragment, _uM("key" to 1), _uA(
                                                            _cE("text", _uM("class" to "up-action-sheet__item-wrap__item__name", "style" to _nS(_uA(
                                                                itemStyle.value(index)
                                                            ))), _tD(item["name"]), 5),
                                                            if (item["subname"] != "") {
                                                                _cE("text", _uM("key" to 0, "class" to "up-action-sheet__item-wrap__item__subname"), _tD(item["subname"]), 1)
                                                            } else {
                                                                _cC("v-if", true)
                                                            }
                                                        ), 64)
                                                    }
                                                ), 8, _uA(
                                                    "onClick",
                                                    "hover-class"
                                                )),
                                                if (index !== _ctx.actions.length - 1) {
                                                    _cV(_component_up_line, _uM("key" to 0))
                                                } else {
                                                    _cC("v-if", true)
                                                }
                                            ))
                                        }
                                        ), 128)
                                    ), 4)
                                )
                            }
                            ),
                            if (isTrue(_ctx.cancelText)) {
                                _cV(_component_up_gap, _uM("key" to 2, "bgColor" to "#eaeaec", "height" to "6"))
                            } else {
                                _cC("v-if", true)
                            }
                            ,
                            if (isTrue(_ctx.cancelText)) {
                                _cE("view", _uM("key" to 3, "class" to "up-action-sheet__item-wrap__item up-action-sheet__cancel", "hover-class" to "up-action-sheet--hover", "onClick" to cancel), _uA(
                                    _cE("text", _uM("onTouchmove" to withModifiers(fun(){}, _uA(
                                        "stop"
                                    )), "hover-stay-time" to 150, "class" to "up-action-sheet__cancel-text"), _tD(_ctx.cancelText), 41, _uA(
                                        "onTouchmove"
                                    ))
                                ))
                            } else {
                                _cC("v-if", true)
                            }
                        ))
                    )
                }
                ), "_" to 3), 8, _uA(
                    "show",
                    "safeAreaInsetBottom",
                    "round"
                ))
            }
        }
        var name = "up-action-sheet"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-reset-button" to _pS(_uM("width" to "100%")), "up-action-sheet__header" to _pS(_uM("position" to "relative", "paddingTop" to 12, "paddingRight" to 30, "paddingBottom" to 12, "paddingLeft" to 30)), "up-action-sheet__header__title" to _pS(_uM("fontSize" to 16, "color" to "#303133", "fontWeight" to "bold", "textAlign" to "center")), "up-action-sheet__header__icon-wrap" to _pS(_uM("position" to "absolute", "right" to 15, "top" to 15)), "up-action-sheet__description" to _pS(_uM("fontSize" to 13, "color" to "#909193", "marginTop" to 18, "marginRight" to 15, "marginBottom" to 18, "marginLeft" to 15, "textAlign" to "center")), "up-action-sheet__item-wrap__item" to _pS(_uM("paddingTop" to 17, "paddingRight" to 17, "paddingBottom" to 17, "paddingLeft" to 17, "display" to "flex", "flexDirection" to "column", "alignItems" to "center", "justifyContent" to "center")), "up-action-sheet__item-wrap__item__name" to _pS(_uM("fontSize" to 16, "color" to "#303133", "textAlign" to "center")), "up-action-sheet__item-wrap__item__subname" to _pS(_uM("fontSize" to 13, "color" to "#c0c4cc", "marginTop" to 10, "textAlign" to "center")), "up-action-sheet__cancel-text" to _pS(_uM("fontSize" to 16, "color" to "#606266", "textAlign" to "center")), "up-action-sheet--hover" to _pS(_uM("backgroundColor" to "#f2f3f5")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("close" to null, "select" to null, "update:show" to null, "getuserinfo" to null, "contact" to null, "getphonenumber" to null, "error" to null, "launchapp" to null, "opensetting" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "show" to _uM("type" to "Boolean", "default" to default__59.getBoolean("actionSheet.show")), "title" to _uM("type" to "String", "default" to default__59.getString("actionSheet.title")), "description" to _uM("type" to "String", "default" to default__59.getString("actionSheet.description")), "actions" to _uM("type" to "Array", "default" to fun(): UTSArray<UTSJSONObject> {
            return _uA()
        }
        ), "cancelText" to _uM("type" to "String", "default" to default__59.getString("actionSheet.cancelText")), "closeOnClickAction" to _uM("type" to "Boolean", "default" to default__59.getBoolean("actionSheet.closeOnClickAction")), "safeAreaInsetBottom" to _uM("type" to "Boolean", "default" to default__59.getBoolean("actionSheet.safeAreaInsetBottom")), "openType" to _uM("type" to "String", "default" to default__59.getString("actionSheet.openType")), "closeOnClickOverlay" to _uM("type" to "Boolean", "default" to default__59.getBoolean("actionSheet.closeOnClickOverlay")), "round" to _uM("type" to _uA(
            "Boolean",
            "String",
            "Number"
        ), "default" to default__59.getAny("actionSheet.round")), "wrapMaxHeight" to _uM("type" to _uA(
            "String"
        ), "default" to default__59.getString("actionSheet.wrapMaxHeight"))))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "show",
            "title",
            "description",
            "actions",
            "cancelText",
            "closeOnClickAction",
            "safeAreaInsetBottom",
            "openType",
            "closeOnClickOverlay",
            "round",
            "wrapMaxHeight"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
