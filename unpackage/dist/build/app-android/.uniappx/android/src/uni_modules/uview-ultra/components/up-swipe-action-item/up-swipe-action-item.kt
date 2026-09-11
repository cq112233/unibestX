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
open class GenUniModulesUviewUltraComponentsUpSwipeActionItemUpSwipeActionItem : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var show: Boolean by `$props`
    open var index: Any by `$props`
    open var name: Any by `$props`
    open var disabled: Boolean by `$props`
    open var autoClose: Boolean by `$props`
    open var threshold: Number by `$props`
    open var options: UTSArray<UTSJSONObject> by `$props`
    open var duration: Any by `$props`
    open var closeOnClick: Boolean by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var open: () -> Unit
        get() {
            return unref(this.`$exposed`["open"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "open", value)
        }
    open var close: () -> Unit
        get() {
            return unref(this.`$exposed`["close"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "close", value)
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpSwipeActionItemUpSwipeActionItem, __setupCtx: SetupContext) -> Any? = fun(__props, __setupCtx): Any? {
            val __expose = __setupCtx.expose
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpSwipeActionItemUpSwipeActionItem
            val _cache = __ins.renderCache
            var nextSwipeItemId: Number = 0
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val instance = getCurrentInstance()
            val selfItemId = ++nextSwipeItemId
            val parentContext = inject<UTSJSONObject?>("upSwipeActionContext", null)
            val status = ref<String>(if (props.show) {
                "open"
            } else {
                "close"
            }
            )
            val sliderStyle = ref<UTSJSONObject>(_uO())
            val buttonsWidth = ref<Number>(0)
            val isMoving = ref<Boolean>(false)
            val startX = ref<Number>(0)
            val startY = ref<Number>(0)
            fun gen_getIconCustomStyle_fn(item: UTSJSONObject): UTSJSONObject {
                return _uO("marginRight" to if (item["text"] != null) {
                    "2px"
                } else {
                    "0px"
                }
                )
            }
            val getIconCustomStyle = ::gen_getIconCustomStyle_fn
            fun gen_getOptionStyle_fn(item: UTSJSONObject): UTSJSONObject? {
                val style = item["style"]
                if (style == null) {
                    return null
                }
                if (style is UTSJSONObject) {
                    return style as UTSJSONObject
                }
                try {
                    return style as UTSJSONObject
                }
                 catch (_e: Throwable) {
                    return null
                }
            }
            val getOptionStyle = ::gen_getOptionStyle_fn
            fun gen_getOptionStyleProp_fn(item: UTSJSONObject, prop: String, defaultVal: String): String {
                val style = getOptionStyle(item)
                if (style != null && style[prop] != null) {
                    return style[prop] as String
                }
                return defaultVal
            }
            val getOptionStyleProp = ::gen_getOptionStyleProp_fn
            fun gen_getButtonStyle_fn(item: UTSJSONObject): UTSJSONObject {
                val style = getOptionStyle(item)
                val hasBorderRadius = style != null && style["borderRadius"] != null
                var widthStr = "80px"
                if (style != null && style["width"] != null) {
                    widthStr = style["width"] as String
                } else {
                    var baseWidth: Number = 30
                    if (item["text"] != null) {
                        baseWidth += (item["text"] as String).length * 15
                    }
                    if (item["icon"] != null) {
                        baseWidth += 20
                    }
                    widthStr = Math.max(80, baseWidth) + "px"
                }
                return _uO("alignItems" to if (hasBorderRadius) {
                    "center"
                } else {
                    "stretch"
                }
                , "width" to widthStr, "flexShrink" to 0)
            }
            val getButtonStyle = ::gen_getButtonStyle_fn
            fun gen_getWrapperStyle_fn(item: UTSJSONObject): UTSJSONObject {
                val style = getOptionStyle(item)
                val hasBorderRadius = style != null && style["borderRadius"] != null
                var bgColor = "#C7C6CD"
                if (style != null && style["backgroundColor"] != null) {
                    val bg = style["backgroundColor"] as String
                    if (bg == "primary") {
                        bgColor = ""
                    } else {
                        bgColor = bg
                    }
                }
                val result: UTSJSONObject = _uO("borderRadius" to if (hasBorderRadius) {
                    style!!["borderRadius"] as String
                } else {
                    "0"
                }
                , "padding" to if (hasBorderRadius) {
                    "0"
                } else {
                    "0 15px"
                }
                , "width" to "100%", "height" to "100%")
                if (bgColor != "") {
                    result["backgroundColor"] = bgColor
                }
                return result
            }
            val getWrapperStyle = ::gen_getWrapperStyle_fn
            fun gen_getTextStyle_fn(item: UTSJSONObject): UTSJSONObject {
                val style = getOptionStyle(item)
                return _uO("color" to if (style != null && style["color"] != null) {
                    style["color"] as String
                } else {
                    "#ffffff"
                }
                , "fontSize" to if (style != null && style["fontSize"] != null) {
                    style["fontSize"] as String
                } else {
                    "16px"
                }
                , "lineHeight" to if (style != null && style["fontSize"] != null) {
                    style["fontSize"] as String
                } else {
                    "16px"
                }
                )
            }
            val getTextStyle = ::gen_getTextStyle_fn
            fun gen_getOptionIconSize_fn(item: UTSJSONObject): Any {
                if (item["iconSize"] != null) {
                    return addUnit(item["iconSize"])
                }
                val style = getOptionStyle(item)
                if (style != null && style["fontSize"] != null) {
                    return addUnit(style["fontSize"])
                }
                return 17
            }
            val getOptionIconSize = ::gen_getOptionIconSize_fn
            fun gen_getDuration_fn(value: Any): String {
                if (value.toString().indexOf("s") >= 0) {
                    return value as String
                }
                return if (parseInt(value.toString()) > 30) {
                    value.toString() + "ms"
                } else {
                    value.toString() + "s"
                }
            }
            val getDuration = ::gen_getDuration_fn
            fun gen_openSwipeAction_fn() {
                var dur = getDuration(props.duration)
                var bWidth = 0 - buttonsWidth.value
                sliderStyle.value = _uO("transition" to ("transform " + dur), "transform" to ("translateX(" + bWidth + "px)"), "-webkit-transform" to ("translateX(" + bWidth + "px)"))
                status.value = "open"
            }
            val openSwipeAction = ::gen_openSwipeAction_fn
            fun gen_closeSwipeAction_fn() {
                var dur = getDuration(props.duration)
                sliderStyle.value = _uO("transition" to ("transform " + dur), "transform" to "translateX(0px)")
                status.value = "close"
            }
            val closeSwipeAction = ::gen_closeSwipeAction_fn
            fun gen_moveSwipeAction_fn(moveX: Number) {
                sliderStyle.value = _uO("transition" to "none", "transform" to ("translateX(" + moveX + "px)"), "-webkit-transform" to ("translateX(" + moveX + "px)"))
            }
            val moveSwipeAction = ::gen_moveSwipeAction_fn
            fun gen_closeHandler_fn() {
                closeSwipeAction()
            }
            val closeHandler = ::gen_closeHandler_fn
            fun gen_buttonClickHandler_fn(item: Any, index: Number) {
                emit("click", _uO("index" to index, "name" to props.name))
                if (props.closeOnClick) {
                    closeHandler()
                }
            }
            val buttonClickHandler = ::gen_buttonClickHandler_fn
            fun gen_clickHandler_fn() {}
            val clickHandler = ::gen_clickHandler_fn
            fun gen_getBtnWidth_fn() {
                uni.UNIB120614.upGetRect(".up-swipe-action-item__right", false, instance?.proxy).then(fun(res: NodeInfo){
                    buttonsWidth.value = res.width ?: 0
                }
                )
            }
            val getBtnWidth = ::gen_getBtnWidth_fn
            fun gen_touchstart_fn(event: UniTouchEvent) {
                isMoving.value = true
                var touches = event.touches
                startX.value = touches[0].pageX
                startY.value = touches[0].pageY
                getBtnWidth()
                if (parentContext != null && (parentContext as UTSJSONObject)["registerActive"] != null) {
                    val regFn = (parentContext as UTSJSONObject)["registerActive"] as ((id: Number) -> Unit)
                    regFn(selfItemId)
                }
            }
            val touchstart = ::gen_touchstart_fn
            fun gen_touchmove_fn(event: UniTouchEvent) {
                if (props.disabled || !isMoving.value) {
                    return
                }
                var touches = event.touches
                var pageX = touches[0].pageX
                var pageY = touches[0].pageY
                var moveX = pageX - startX.value
                var moveY = pageY - startY.value
                if (Math.abs(moveX) > Math.abs(moveY) || Math.abs(moveX) > props.threshold) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                if (Math.abs(moveX) < Math.abs(moveY)) {
                    return
                }
                if (status.value == "open") {
                    if (moveX < 0) {
                        moveX = 0
                    }
                    val btnW = buttonsWidth.value
                    if (moveX > btnW) {
                        moveX = btnW
                    }
                    moveSwipeAction(0 - btnW + moveX)
                } else {
                    if (moveX > 0) {
                        moveX = 0
                    }
                    val btnW = buttonsWidth.value
                    if (Math.abs(moveX) > btnW) {
                        moveX = 0 - btnW
                    }
                    moveSwipeAction(moveX)
                }
            }
            val touchmove = ::gen_touchmove_fn
            fun gen_touchend_fn(event: UniTouchEvent) {
                if (!isMoving.value || props.disabled) {
                    return
                }
                isMoving.value = false
                var touches: UniTouch = event.changedTouches[0] as UniTouch
                var pageX = touches.pageX
                var moveX = pageX - startX.value
                if (status.value == "open") {
                    if (moveX < 0) {
                        return
                    }
                    if (moveX == 0) {
                        closeSwipeAction()
                        return
                    }
                    if (Math.abs(moveX) < props.threshold) {
                        openSwipeAction()
                    } else {
                        closeSwipeAction()
                    }
                } else {
                    if (moveX > 0) {
                        return
                    }
                    if (Math.abs(moveX) < props.threshold) {
                        closeSwipeAction()
                    } else {
                        openSwipeAction()
                    }
                }
            }
            val touchend = ::gen_touchend_fn
            fun gen_touchcancel_fn(event: UniTouchEvent) {
                if (!isMoving.value || props.disabled) {
                    return
                }
                isMoving.value = false
                if (status.value == "open") {
                    openSwipeAction()
                } else {
                    closeSwipeAction()
                }
            }
            val touchcancel = ::gen_touchcancel_fn
            if (parentContext != null) {
                val activeItemIdRef = (parentContext as UTSJSONObject)["activeItemId"] as Ref<Number>?
                if (activeItemIdRef != null) {
                    watch(fun(): Number {
                        return activeItemIdRef!!.value
                    }
                    , fun(newActiveId: Number){
                        if (newActiveId != selfItemId && status.value == "open") {
                            closeHandler()
                        }
                    }
                    )
                }
            }
            watch(fun(): Boolean {
                return props.show
            }
            , fun(newVal: Boolean){
                status.value = if (newVal) {
                    "open"
                } else {
                    "close"
                }
            }
            )
            watch(status, fun(newValue: String, oldValue: String){
                if (newValue == "open") {
                    emit("update:show", true)
                    emit("open", props.index)
                    if (parentContext != null && (parentContext as UTSJSONObject)["registerActive"] != null) {
                        val regFn = (parentContext as UTSJSONObject)["registerActive"] as ((id: Number) -> Unit)
                        regFn(selfItemId)
                    }
                } else {
                    emit("update:show", false)
                    emit("close", props.index)
                }
                if (props.disabled) {
                    return
                }
                if (newValue == "close" && oldValue == "open") {
                    closeSwipeAction()
                } else if (newValue == "open" && oldValue == "close") {
                    openSwipeAction()
                }
            }
            )
            watch(fun(): UTSArray<UTSJSONObject> {
                return props.options
            }
            , fun(){
                getBtnWidth()
            }
            , WatchOptions(deep = true))
            onMounted(fun(){
                sleep(100).then(fun(){
                    getBtnWidth()
                }
                )
            }
            )
            onBeforeUnmount(fun(){
                closeHandler()
            }
            )
            __expose(_uM("open" to openSwipeAction, "close" to closeSwipeAction))
            return fun(): Any? {
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                return _cE("view", _uM("class" to "weapp-tw-border up-swipe-action-item", "ref" to "swipeActionItemRef"), _uA(
                    _cE("view", _uM("class" to "weapp-tw-border up-swipe-action-item__right", "ref" to "rightButtonsRef"), _uA(
                        renderSlot(_ctx.`$slots`, "button", _uO(), fun(): UTSArray<Any> {
                            return _uA(
                                _cE(Fragment, null, RenderHelpers.renderList(_ctx.options, fun(item, index, __index, _cached): Any {
                                    return _cE("view", _uM("key" to index, "class" to "weapp-tw-border up-swipe-action-item__right__button", "style" to _nS(getButtonStyle(item)), "onClick" to fun(){
                                        buttonClickHandler(item, index)
                                    }
                                    ), _uA(
                                        _cE("view", _uM("class" to _nC(_uA(
                                            "weapp-tw-border up-swipe-action-item__right__button__wrapper",
                                            _uM("up-swipe-action-item__right__button__wrapper--primary" to (getOptionStyleProp(item, "backgroundColor", "") == "primary"))
                                        )), "style" to _nS(getWrapperStyle(item))), _uA(
                                            if (item["icon"] != null) {
                                                _cV(_component_up_icon, _uM("key" to 0, "name" to item["icon"]!!.toString(), "color" to getOptionStyleProp(item, "color", "#ffffff"), "size" to getOptionIconSize(item), "customStyle" to getIconCustomStyle(item)), null, 8, _uA(
                                                    "name",
                                                    "color",
                                                    "size",
                                                    "customStyle"
                                                ))
                                            } else {
                                                _cC("v-if", true)
                                            }
                                            ,
                                            if (item["text"] != null) {
                                                _cE("text", _uM("key" to 1, "class" to "weapp-tw-border up-swipe-action-item__right__button__wrapper__text up-line-1", "style" to _nS(getTextStyle(item))), _tD(item["text"]), 5)
                                            } else {
                                                _cC("v-if", true)
                                            }
                                        ), 6)
                                    ), 12, _uA(
                                        "onClick"
                                    ))
                                }
                                ), 128)
                            )
                        }
                        )
                    ), 512),
                    _cE("view", _uM("class" to "weapp-tw-border up-swipe-action-item__content", "onClick" to clickHandler, "onTouchstart" to touchstart, "onTouchmove" to touchmove, "onTouchend" to touchend, "onTouchcancel" to touchcancel, "style" to _nS(sliderStyle.value)), _uA(
                        renderSlot(_ctx.`$slots`, "default")
                    ), 36)
                ), 512)
            }
        }
        var name = "up-swipe-action-item"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "up-swipe-action-item" to _pS(_uM("position" to "relative", "overflow" to "hidden", "display" to "flex", "flexDirection" to "column")), "up-swipe-action-item__content" to _pS(_uM("transform" to "translateX(0px)", "backgroundColor" to "#FFFFFF", "zIndex" to 10, "width" to "100%", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "up-swipe-action-item__right" to _pS(_uM("position" to "absolute", "top" to 0, "bottom" to 0, "right" to 0, "display" to "flex", "flexDirection" to "row", "zIndex" to 1)), "up-swipe-action-item__right__button" to _pS(_uM("display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "overflow" to "hidden", "alignItems" to "center")), "up-swipe-action-item__right__button__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "center", "paddingTop" to 0, "paddingRight" to 15, "paddingBottom" to 0, "paddingLeft" to 15)), "up-swipe-action-item__right__button__wrapper--primary" to _pS(_uM("backgroundColor" to "var(--theme-color, #0957de)")), "up-swipe-action-item__right__button__wrapper__text" to _pS(_uM("color" to "#FFFFFF", "fontSize" to 15, "textAlign" to "center")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("click" to null, "update:show" to null, "open" to null, "close" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "show" to _uM("type" to "Boolean", "default" to false), "index" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to ""), "name" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to ""), "disabled" to _uM("type" to "Boolean", "default" to false), "autoClose" to _uM("type" to "Boolean", "default" to true), "threshold" to _uM("type" to "Number", "default" to 30), "options" to _uM("type" to "Array", "default" to fun(): UTSArray<UTSJSONObject> {
            return _uA<UTSJSONObject>()
        }
        ), "duration" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 350), "closeOnClick" to _uM("type" to "Boolean", "default" to true)))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "show",
            "index",
            "name",
            "disabled",
            "autoClose",
            "threshold",
            "options",
            "duration",
            "closeOnClick"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
