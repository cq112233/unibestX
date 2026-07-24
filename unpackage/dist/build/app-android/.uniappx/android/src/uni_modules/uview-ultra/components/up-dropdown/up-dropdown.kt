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
open class GenUniModulesUviewUltraComponentsUpDropdownUpDropdown : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var activeColor: String by `$props`
    open var inactiveColor: String by `$props`
    open var closeOnClickMask: Boolean by `$props`
    open var closeOnClickSelf: Boolean by `$props`
    open var duration: Any by `$props`
    open var height: Any by `$props`
    open var borderBottom: Boolean by `$props`
    open var titleSize: Any by `$props`
    open var borderRadius: Any by `$props`
    open var menuIcon: String by `$props`
    open var menuIconSize: Any by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var init: () -> Unit
        get() {
            return unref(this.`$exposed`["init"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "init", value)
        }
    open var close: () -> Unit
        get() {
            return unref(this.`$exposed`["close"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "close", value)
        }
    open fun highlight(indexParams: Any? = null) {
        callKotlinFunction(this.`$exposed`["highlight"]!!, _uA(
            indexParams
        ))
    }
    open var addMenuListItem: (op: UPDropdownMenu) -> Unit
        get() {
            return unref(this.`$exposed`["addMenuListItem"]) as (op: UPDropdownMenu) -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "addMenuListItem", value)
        }
    open var getProps: () -> UTSJSONObject
        get() {
            return unref(this.`$exposed`["getProps"]) as () -> UTSJSONObject
        }
        set(value) {
            setRefValue(this.`$exposed`, "getProps", value)
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpDropdownUpDropdown, __setupCtx: SetupContext) -> Any? = fun(__props, __setupCtx): Any? {
            val __expose = __setupCtx.expose
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpDropdownUpDropdown
            val _cache = __ins.renderCache
            val _useUltraUI = useUltraUI()
            val children = _useUltraUI.children
            val getChildren = _useUltraUI.getChildren
            val addChild = _useUltraUI.addChild
            val instance = getCurrentInstance()!!.proxy!!
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val showDropdown = ref(true)
            val menuList = ref(_uA<UPDropdownMenu>())
            val active = ref(false)
            val current = ref(99999 as Number)
            val contentStyle = ref(_uO("zIndex" to -1, "opacity" to 0))
            val highlightIndexList = ref(_uA<Number>())
            val contentHeight = ref(0 as Number)
            watch(contentHeight, fun(newVal: Number){
                if (active.value) {
                    contentStyle.value["height"] = newVal + "px"
                }
            }
            )
            val popupStyle = computed(fun(): UTSJSONObject {
                var style: UTSJSONObject = _uO()
                style["transform"] = "translateY(" + (if (active.value) {
                    "0%"
                } else {
                    "-100%"
                }
                ) + ")"
                style["transition-duration"] = parseInt(props.duration.toString()) / 1000 + "s"
                style["borderRadius"] = "0 0 " + addUnit(props.borderRadius) + " " + addUnit(props.borderRadius)
                return style
            }
            )
            fun gen_getWindowInfoWrapper_fn(): GetWindowInfoResult {
                return getWindowInfo()
            }
            val getWindowInfoWrapper = ::gen_getWindowInfoWrapper_fn
            fun gen_init_fn() {
                menuList.value = _uA()
                if (children.value != null) {
                    children.value?.map(fun(child: ComponentPublicInstance){
                        child.`$callMethod`("init")
                    }
                    )
                }
            }
            val init = ::gen_init_fn
            fun gen_getContentHeight_fn() {
                var windowHeight = getWindowInfoWrapper().windowHeight
                uni.UNI5198058.upGetRect(".up-dropdown__menu", false, instance).then(fun(res){
                    if (res.bottom != null) {
                        contentHeight.value = windowHeight - res.bottom!!
                    } else {
                        contentHeight.value = windowHeight
                    }
                }
                )
            }
            val getContentHeight = ::gen_getContentHeight_fn
            fun gen_open_fn(index: Number) {
                getContentHeight()
                contentStyle.value = _uO("zIndex" to 11, "height" to (contentHeight.value + "px"), "opacity" to 1)
                active.value = true
                current.value = index
                if (children.value != null) {
                    children.value.map(fun(kVal: ComponentPublicInstance, idx: Number){
                        if (index == idx) {
                            kVal.`$callMethod`("setActive", true)
                        } else {
                            kVal.`$callMethod`("setActive", false)
                        }
                    }
                    )
                }
                emit("open", current.value)
            }
            val open = ::gen_open_fn
            fun gen_close_fn() {
                emit("close", current.value)
                active.value = false
                current.value = 99999
                contentStyle.value["zIndex"] = -1
                contentStyle.value["opacity"] = 0
                setTimeout(fun(){
                    contentStyle.value["height"] = 0
                }
                , parseInt(props.duration.toString()))
            }
            val close = ::gen_close_fn
            fun gen_menuClick_fn(index: Number) {
                if (menuList.value[index].disabled) {
                    return
                }
                if (index == current.value && props.closeOnClickSelf) {
                    close()
                    setTimeout(fun(){
                        if (children.value != null && children.value[index] != null) {
                            children.value[index].`$callMethod`("setActive", false)
                        }
                    }
                    , parseInt(props.duration.toString()))
                    return
                }
                open(index)
            }
            val menuClick = ::gen_menuClick_fn
            fun gen_maskClick_fn() {
                if (!props.closeOnClickMask) {
                    return
                }
                close()
            }
            val maskClick = ::gen_maskClick_fn
            fun highlight(indexParams: Any? = null) {
                if (UTSArray.isArray(indexParams) && indexParams as UTSArray<Number> != null) {
                    highlightIndexList.value = indexParams as UTSArray<Number>
                    return
                }
                highlightIndexList.value = _uA()
                if (indexParams as Any != null) {
                    highlightIndexList.value.push(parseInt((indexParams as Any).toString()))
                }
            }
            val addMenuListItem = fun(op: UPDropdownMenu){
                menuList.value.push(op)
            }
            onMounted(fun(){
                getContentHeight()
            }
            )
            val getProps = fun(): UTSJSONObject {
                return _uO("activeColor" to props.activeColor, "inactiveColor" to props.inactiveColor, "closeOnClickMask" to props.closeOnClickMask, "closeOnClickSelf" to props.closeOnClickSelf, "duration" to props.duration, "height" to props.height, "borderBottom" to props.borderBottom, "titleSize" to props.titleSize, "borderRadius" to props.borderRadius, "menuIcon" to props.menuIcon, "menuIconSize" to props.menuIconSize)
            }
            fun gen_getContentTextStyle_fn(item: UPDropdownMenu, index: Number): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                style["fontSize"] = addUnit(props.titleSize)
                val isActive = index == current.value || highlightIndexList.value.includes(index)
                if (item.disabled) {
                    style["color"] = "#c0c4cc"
                } else if (isActive) {
                    if (props.activeColor != "#2979ff") {
                        style["color"] = props.activeColor
                    }
                } else {
                    style["color"] = props.inactiveColor
                }
                return style
            }
            val getContentTextStyle = ::gen_getContentTextStyle_fn
            __expose(_uM("init" to init, "close" to close, "highlight" to ::highlight, "getChildren" to getChildren, "addChild" to addChild, "children" to children, "addMenuListItem" to addMenuListItem, "getProps" to getProps))
            return fun(): Any? {
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                return _cE("view", _uM("class" to "up-dropdown", "style" to _nS(_uM("height" to if (active.value) {
                    _ctx.`$up`.addUnit((contentHeight.value + parseInt(props.height.toString())))
                } else {
                    _ctx.`$up`.addUnit(props.height)
                }
                ))), _uA(
                    _cE("view", _uM("class" to _nC(_uA(
                        "up-dropdown__menu",
                        _uM("u-border-bottom" to props.borderBottom)
                    )), "style" to _nS(_uM("height" to _ctx.`$up`.addUnit(props.height)))), _uA(
                        _cE(Fragment, null, RenderHelpers.renderList(menuList.value, fun(item, index, __index, _cached): Any {
                            return _cE("view", _uM("class" to "up-dropdown__menu__item", "key" to index, "onClick" to withModifiers(fun(){
                                menuClick(index)
                            }
                            , _uA(
                                "stop"
                            ))), _uA(
                                _cE("view", _uM("class" to "up-flex up-flex-row"), _uA(
                                    _cE("text", _uM("class" to _nC(_uA(
                                        "up-dropdown__menu__item__text",
                                        _uM("up-dropdown__menu__item__text--active" to ((index == current.value || highlightIndexList.value.includes(index)) && props.activeColor == "#2979ff"))
                                    )), "style" to _nS(_uA(
                                        getContentTextStyle(item, index)
                                    ))), _tD(item["title"]), 7),
                                    _cE("view", _uM("class" to _nC(_uA(
                                        "up-dropdown__menu__item__arrow",
                                        _uM("up-dropdown__menu__item__arrow--rotate" to (index == current.value))
                                    ))), _uA(
                                        _cV(_component_up_icon, _uM("custom-style" to _uO("display" to "flex"), "name" to props.menuIcon, "size" to _ctx.`$up`.addUnit(props.menuIconSize), "color" to if (index == current.value || highlightIndexList.value.includes(index)) {
                                            if (props.activeColor == "#2979ff") {
                                                "primary"
                                            } else {
                                                props.activeColor
                                            }
                                        } else {
                                            "#c0c4cc"
                                        }
                                        ), null, 8, _uA(
                                            "name",
                                            "size",
                                            "color"
                                        ))
                                    ), 2)
                                ))
                            ), 8, _uA(
                                "onClick"
                            ))
                        }
                        ), 128)
                    ), 6),
                    _cE("view", _uM("class" to "up-dropdown__content", "style" to _nS(_uA(
                        contentStyle.value,
                        _uM("top" to _ctx.`$up`.addUnit(props.height), "transition" to ("opacity " + parseInt(props.duration.toString()) / 1000 + "s, z-index " + parseInt(props.duration.toString()) / 1000 + "s linear"))
                    )), "onClick" to maskClick, "onTouchmove" to withModifiers(fun(){}, _uA(
                        "stop",
                        "prevent"
                    ))), _uA(
                        _cE("view", _uM("onClick" to withModifiers(fun(){}, _uA(
                            "stop",
                            "prevent"
                        )), "class" to "up-dropdown__content__popup", "style" to _nS(_uA(
                            popupStyle.value,
                            _uM<String, Any?>()
                        ))), _uA(
                            renderSlot(_ctx.`$slots`, "default")
                        ), 12, _uA(
                            "onClick"
                        )),
                        _cE("view", _uM("class" to "up-dropdown__content__mask"))
                    ), 44, _uA(
                        "onTouchmove"
                    ))
                ), 4)
            }
        }
        var name = "up-dropdown"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("up-dropdown" to _pS(_uM("flexGrow" to 0, "flexShrink" to 0, "flexBasis" to "auto", "width" to "100%", "position" to "relative")), "up-dropdown__menu" to _pS(_uM("display" to "flex", "flexDirection" to "row", "position" to "relative", "zIndex" to 11, "height" to "80rpx")), "up-dropdown__menu__item" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "alignItems" to "center")), "up-flex-row" to _uM(".up-dropdown__menu__item " to _uM("flexDirection" to "row")), "up-dropdown__menu__item__text" to _pS(_uM("fontSize" to "28rpx", "color" to "#606266")), "up-dropdown__menu__item__text--active" to _pS(_uM("color" to "var(--theme-color, #0957de)")), "up-dropdown__menu__item__arrow" to _pS(_uM("marginLeft" to "6rpx", "transitionProperty" to "transform", "transitionDuration" to "0.3s", "alignItems" to "center", "display" to "flex", "flexDirection" to "row")), "up-dropdown__menu__item__arrow--rotate" to _pS(_uM("transform" to "rotate(180deg)")), "up-dropdown__content" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0, "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid", "borderTopColor" to "#0000FF", "borderRightColor" to "#0000FF", "borderBottomColor" to "#0000FF", "borderLeftColor" to "#0000FF", "position" to "absolute", "zIndex" to 8, "width" to "100%", "left" to 0, "bottom" to 0, "top" to "80rpx", "overflow" to "hidden")), "up-dropdown__content__mask" to _pS(_uM("position" to "absolute", "zIndex" to 9, "backgroundImage" to "none", "backgroundColor" to "rgba(0,0,0,0.3)", "width" to "100%", "left" to 0, "top" to 0, "bottom" to 0)), "up-dropdown__content__popup" to _pS(_uM("position" to "relative", "zIndex" to 10, "transitionProperty" to "transform", "transitionDuration" to "0.3s", "transform" to "translate3D(0, -100%, 0)", "overflow" to "hidden")), "@TRANSITION" to _uM("up-dropdown__menu__item__arrow" to _uM("property" to "transform", "duration" to "0.3s"), "up-dropdown__content__popup" to _uM("property" to "transform", "duration" to "0.3s")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("open" to null, "close" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "activeColor" to _uM("type" to "String", "default" to default__84.getString("dropdown.activeColor")), "inactiveColor" to _uM("type" to "String", "default" to default__84.getString("dropdown.inactiveColor")), "closeOnClickMask" to _uM("type" to "Boolean", "default" to default__84.getBoolean("dropdown.closeOnClickMask")), "closeOnClickSelf" to _uM("type" to "Boolean", "default" to default__84.getBoolean("dropdown.closeOnClickSelf")), "duration" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to default__84.getNumber("dropdown.duration")), "height" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to default__84.getNumber("dropdown.height")), "borderBottom" to _uM("type" to "Boolean", "default" to default__84.getBoolean("dropdown.borderBottom")), "titleSize" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to default__84.getNumber("dropdown.titleSize")), "borderRadius" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to default__84.getNumber("dropdown.borderRadius")), "menuIcon" to _uM("type" to "String", "default" to default__84.getString("dropdown.menuIcon")), "menuIconSize" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to default__84.getNumber("dropdown.menuIconSize"))))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "activeColor",
            "inactiveColor",
            "closeOnClickMask",
            "closeOnClickSelf",
            "duration",
            "height",
            "borderBottom",
            "titleSize",
            "borderRadius",
            "menuIcon",
            "menuIconSize"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
