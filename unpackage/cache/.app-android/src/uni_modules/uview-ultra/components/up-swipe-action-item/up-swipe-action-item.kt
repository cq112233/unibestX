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
import io.dcloud.uniapp.extapi.createSelectorQuery as uni_createSelectorQuery
open class GenUniModulesUviewUltraComponentsUpSwipeActionItemUpSwipeActionItem : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
        onCreated(fun() {}, __ins)
        onMounted(fun() {
            this.init()
            sleep(100).then(fun(){
                this.getBtnWidth()
            }
            )
        }
        , __ins)
        onBeforeUnmount(fun() {
            this.closeHandler()
        }
        , __ins)
        this.`$watch`(fun(): Any? {
            return this.show
        }
        , fun(newValue: Boolean) {
            if (newValue) {
                this.status = "open"
            } else {
                this.status = "close"
            }
        }
        )
        this.`$watch`(fun(): Any? {
            return this.status
        }
        , fun(newValue: String, oldValue: String) {
            if (newValue === "open") {
                this.`$emit`("update:show", true)
                if (this.parent != null) {
                    this.parent?.`$callMethod`("setOpendItem", 1)
                }
            } else {
                this.`$emit`("update:show", false)
            }
            if (this.disabled) {
                return
            }
            if (newValue === "close" && oldValue === "open") {
                this.closeSwipeAction()
            } else if (newValue === "open" && oldValue === "close") {
                this.openSwipeAction()
            }
        }
        )
        this.`$watch`(fun(): Any? {
            return this.options
        }
        , fun() {
            this.getBtnWidth()
        }
        )
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
        return _cE("view", _uM("class" to "up-swipe-action-item", "ref" to "up-swipe-action-item"), _uA(
            _cE("view", _uM("class" to "up-swipe-action-item__right"), _uA(
                renderSlot(_ctx.`$slots`, "button", _uO(), fun(): UTSArray<Any> {
                    return _uA(
                        _cE(Fragment, null, RenderHelpers.renderList(_ctx.options, fun(item, index, __index, _cached): Any {
                            return _cE("view", _uM("key" to index, "class" to "up-swipe-action-item__right__button", "ref_for" to true, "ref" to ("up-swipe-action-item__right__button-" + index), "style" to _nS(_uA(
                                _ctx.getButtonStyle(item)
                            )), "onClick" to fun(){
                                _ctx.buttonClickHandler(item, index)
                            }
                            ), _uA(
                                _cE("view", _uM("class" to _nC(_uA(
                                    "up-swipe-action-item__right__button__wrapper",
                                    _uM("up-swipe-action-item__right__button__wrapper--primary" to (_ctx.getOptionStyleProp(item, "backgroundColor", "") == "primary"))
                                )), "style" to _nS(_uA(
                                    _ctx.getWrapperStyle(item)
                                ))), _uA(
                                    if (isTrue(item["icon"])) {
                                        _cV(_component_up_icon, _uM("key" to 0, "name" to item["icon"], "color" to _ctx.getOptionStyleProp(item, "color", "#ffffff"), "size" to _ctx.getOptionIconSize(item), "customStyle" to _uO("marginRight" to if (item["text"] != null) {
                                            "2px"
                                        } else {
                                            0
                                        })), null, 8, _uA(
                                            "name",
                                            "color",
                                            "size",
                                            "customStyle"
                                        ))
                                    } else {
                                        _cC("v-if", true)
                                    }
                                    ,
                                    if (isTrue(item["text"])) {
                                        _cE("text", _uM("key" to 1, "class" to "up-swipe-action-item__right__button__wrapper__text up-line-1", "style" to _nS(_uA(
                                            _ctx.getTextStyle(item)
                                        ))), _tD(item["text"]), 5)
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
            )),
            _cE("view", _uM("class" to "up-swipe-action-item__content", "onClick" to _ctx.clickHandler, "onTouchstart" to _ctx.touchstart, "onTouchmove" to _ctx.touchmove, "onTouchend" to _ctx.touchend, "onTouchcancel" to _ctx.touchcancel, "style" to _nS(_ctx.sliderStyle)), _uA(
                renderSlot(_ctx.`$slots`, "default")
            ), 44, _uA(
                "onClick",
                "onTouchstart",
                "onTouchmove",
                "onTouchend",
                "onTouchcancel"
            ))
        ), 512)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var show: Boolean by `$props`
    open var closeOnClick: Boolean by `$props`
    open var name: Any by `$props`
    open var disabled: Boolean by `$props`
    open var autoClose: Boolean by `$props`
    open var threshold: Number by `$props`
    open var options: UTSArray<UTSJSONObject> by `$props`
    open var duration: Any by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var direction: String by `$data`
    open var deltaX: Number by `$data`
    open var deltaY: Number by `$data`
    open var offsetX: Number by `$data`
    open var offsetY: Number by `$data`
    open var startX: Number by `$data`
    open var startY: Number by `$data`
    open var size: UTSJSONObject by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var status: String by `$data`
    open var sliderStyle: UTSJSONObject by `$data`
    open var state: UTSJSONObject by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>(), "direction" to "", "deltaX" to 0, "deltaY" to 0, "offsetX" to 0, "offsetY" to 0, "startX" to 0, "startY" to 0, "size" to _uO(), "parentData" to _uO("autoClose" to true), "status" to "", "sliderStyle" to _uO(), "state" to _uO("moving" to false, "startX" to 0, "startY" to 0, "buttonsWidth" to 0))
    }
    open fun `$upAddUnit`(kVal: Any?, unit: String? = ""): String {
        return uni.UNI5198058.addUnit(kVal, unit)
    }
    open fun `$upAddStyle`(customStyle: Any, target: String = "object"): Any {
        return addStyle(customStyle, target)
    }
    open fun `$upGetPx`(kVal: Any, unit: Boolean = false): String {
        return uni.UNI5198058.getPx(kVal, unit)
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
    open var getTouchPoint = ::gen_getTouchPoint_fn
    open fun gen_getTouchPoint_fn(e: UniTouchEvent): UTSJSONObject {
        if (e == null) {
            return _uO("x" to 0, "y" to 0)
        }
        if (e.touches.length > 0 && e.touches[0] != null) {
            return _uO("x" to e.touches[0].pageX, "y" to e.touches[0].pageY)
        }
        if (e.changedTouches.length > 0 && e.changedTouches[0] != null) {
            return _uO("x" to e.changedTouches[0].pageX, "y" to e.changedTouches[0].pageY)
        }
        return _uO("x" to 0, "y" to 0)
    }
    open var resetTouchStatus = ::gen_resetTouchStatus_fn
    open fun gen_resetTouchStatus_fn() {
        this.direction = ""
        this.deltaX = 0
        this.deltaY = 0
        this.offsetX = 0
        this.offsetY = 0
    }
    open var touchStart = ::gen_touchStart_fn
    open fun gen_touchStart_fn(event: UniTouchEvent) {
        this.resetTouchStatus()
        val touch = this.getTouchPoint(event)
        this.startX = touch["x"] as Number
        this.startY = touch["y"] as Number
    }
    open var touchMove = ::gen_touchMove_fn
    open fun gen_touchMove_fn(event: UniTouchEvent) {
        val touch = this.getTouchPoint(event)
        this.deltaX = touch["x"] as Number - this.startX
        this.deltaY = touch["y"] as Number - this.startY
        this.offsetX = Math.abs(this.deltaX)
        this.offsetY = Math.abs(this.deltaY)
        this.direction = if (this.direction != "") {
            this.direction
        } else {
            getDirection(this.offsetX, this.offsetY)
        }
    }
    open var getOptionStyle = ::gen_getOptionStyle_fn
    open fun gen_getOptionStyle_fn(item: UTSJSONObject): UTSJSONObject? {
        val style = item["style"]
        if (style == null) {
            return null
        }
        if (style is UTSJSONObject) {
            return style as UTSJSONObject
        }
        try {
            val m = style as Map<String, Any>
            val obj: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("obj", "uni_modules/uview-ultra/components/up-swipe-action-item/up-swipe-action-item.uvue", 136, 12))
            m.forEach(fun(value: Any, key: String){
                obj[key] = value
            }
            )
            return obj
        }
         catch (_e: Throwable) {
            return null
        }
    }
    open var getOptionStyleProp = ::gen_getOptionStyleProp_fn
    open fun gen_getOptionStyleProp_fn(item: UTSJSONObject, prop: String, defaultVal: String): String {
        val style = this.getOptionStyle(item)
        if (style != null && style[prop] != null) {
            return style[prop] as String
        }
        return defaultVal
    }
    open var getButtonStyle = ::gen_getButtonStyle_fn
    open fun gen_getButtonStyle_fn(item: UTSJSONObject): Any {
        val style = this.getOptionStyle(item)
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
    open var getWrapperStyle = ::gen_getWrapperStyle_fn
    open fun gen_getWrapperStyle_fn(item: UTSJSONObject): Any {
        val style = this.getOptionStyle(item)
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
        val result: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("result", "uni_modules/uview-ultra/components/up-swipe-action-item/up-swipe-action-item.uvue", 192, 11), "borderRadius" to if (hasBorderRadius) {
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
        if (style != null) {
            style.toMap().forEach(fun(value: Any?, key: String){
                if (key != "backgroundColor") {
                    result[key] = value
                }
            }
            )
        }
        return result
    }
    open var getTextStyle = ::gen_getTextStyle_fn
    open fun gen_getTextStyle_fn(item: UTSJSONObject): Any {
        val style = this.getOptionStyle(item)
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
    open var getOptionIconSize = ::gen_getOptionIconSize_fn
    open fun gen_getOptionIconSize_fn(item: UTSJSONObject): Any {
        if (item["iconSize"] != null) {
            return uni.UNI5198058.addUnit(item["iconSize"])
        }
        val style = this.getOptionStyle(item)
        if (style != null && style["fontSize"] != null) {
            return uni.UNI5198058.addUnit(style["fontSize"])
        }
        return 17
    }
    open var addUnit = ::gen_addUnit_fn
    open fun gen_addUnit_fn(e: Any): String {
        return uni.UNI5198058.addUnit(e)
    }
    open fun getPx(e: Any, s: Boolean = false): String {
        return uni.UNI5198058.getPx(e, s)
    }
    open var init = ::gen_init_fn
    open fun gen_init_fn() {
        this.updateParentData()
        sleep().then(fun(){
            this.queryRect()
        }
        )
    }
    open var updateParentData = ::gen_updateParentData_fn
    open fun gen_updateParentData_fn() {
        this.getParentData("up-swipe-action")
    }
    open var queryRect = ::gen_queryRect_fn
    open fun gen_queryRect_fn() {}
    open var buttonClickHandler = ::gen_buttonClickHandler_fn
    open fun gen_buttonClickHandler_fn(item: Any, index: Number) {
        var ret = this.`$emit`("click", _uO("index" to index, "name" to this.name), fun(){})
        if (this.closeOnClick) {
            this.closeHandler()
        }
    }
    open var clickHandler = ::gen_clickHandler_fn
    open fun gen_clickHandler_fn() {}
    open var closeHandler = ::gen_closeHandler_fn
    open fun gen_closeHandler_fn() {
        this.closeSwipeAction()
    }
    open var setStatus = ::gen_setStatus_fn
    open fun gen_setStatus_fn(status: String) {
        this.status = status
    }
    open var getBtnWidth = ::gen_getBtnWidth_fn
    open fun gen_getBtnWidth_fn() {
        var view = uni_createSelectorQuery().`in`(this).select(".up-swipe-action-item__right")
        view.fields(NodeField(size = true, scrollOffset = true), fun(data: Any){
            this.state["buttonsWidth"] = (data as NodeInfo).width
        }
        ).exec()
    }
    open var touchstart = ::gen_touchstart_fn
    open fun gen_touchstart_fn(event: UniTouchEvent) {
        this.state["moving"] = true
        var touches = event.touches
        this.state["startX"] = touches[0].pageX
        this.state["startY"] = touches[0].pageY
        this.getBtnWidth()
        if (this.parent != null) {
            this.parent?.`$callMethod`("closeOther", this)
        }
    }
    open var touchmove = ::gen_touchmove_fn
    open fun gen_touchmove_fn(event: UniTouchEvent) {
        if (this.disabled || this.state["moving"] == null) {
            return
        }
        var touches = event.touches
        var pageX = touches[0].pageX
        var pageY = touches[0].pageY
        var moveX = pageX - this.state["startX"] as Number
        var moveY = pageY - this.state["startY"] as Number
        if (Math.abs(moveX) > Math.abs(moveY) || Math.abs(moveX) > this.threshold) {
            event.preventDefault()
            event.stopPropagation()
        }
        if (Math.abs(moveX) < Math.abs(moveY)) {
            return
        }
        if (this.status === "open") {
            if (moveX < 0) {
                moveX = 0
            }
            if (moveX > this.state["buttonsWidth"] as Number) {
                moveX = this.state["buttonsWidth"] as Number
            }
            this.moveSwipeAction(0 - this.state["buttonsWidth"] as Number + moveX)
        } else {
            if (moveX > 0) {
                moveX = 0
            }
            if (Math.abs(moveX) > this.state["buttonsWidth"] as Number) {
                moveX = 0 - this.state["buttonsWidth"] as Number
            }
            this.moveSwipeAction(moveX)
        }
    }
    open var touchend = ::gen_touchend_fn
    open fun gen_touchend_fn(event: UniTouchEvent) {
        if (this.state["moving"] == false || this.disabled) {
            return
        }
        this.state["moving"] = false
        var touches: UniTouch = event.changedTouches[0] as UniTouch
        var pageX = touches.pageX
        var pageY = touches.pageY
        var moveX = pageX - this.state["startX"] as Number
        if (this.status === "open") {
            if (moveX < 0) {
                return
            }
            if (moveX === 0) {
                return this.closeSwipeAction()
            }
            if (Math.abs(moveX) < this.threshold) {
                this.openSwipeAction()
            } else {
                this.closeSwipeAction()
            }
        } else {
            if (moveX > 0) {
                return
            }
            if (Math.abs(moveX) < this.threshold) {
                this.closeSwipeAction()
            } else {
                this.openSwipeAction()
            }
        }
    }
    open var touchcancel = ::gen_touchcancel_fn
    open fun gen_touchcancel_fn(event: UniTouchEvent) {
        if (this.state["moving"] == false || this.disabled) {
            return
        }
        this.state["moving"] = false
        if (this.status === "open") {
            this.openSwipeAction()
        } else {
            this.closeSwipeAction()
        }
    }
    open var openSwipeAction = ::gen_openSwipeAction_fn
    open fun gen_openSwipeAction_fn() {
        var duration = this.getDuration(this.duration)
        var buttonsWidth = 0 - this.state["buttonsWidth"] as Number
        this.sliderStyle = _uO("transition" to ("transform " + duration), "transform" to ("translateX(" + buttonsWidth + "px)"), "-webkit-transform" to ("translateX(" + buttonsWidth + "px)"))
        this.setStatus("open")
    }
    open var closeSwipeAction = ::gen_closeSwipeAction_fn
    open fun gen_closeSwipeAction_fn() {
        var duration = this.getDuration(this.duration)
        this.sliderStyle = _uO("transition" to ("transform " + duration), "transform" to "translateX(0px)")
        this.setStatus("close")
    }
    open var moveSwipeAction = ::gen_moveSwipeAction_fn
    open fun gen_moveSwipeAction_fn(moveX: Number) {
        this.sliderStyle = _uO("transition" to "none", "transform" to ("translateX(" + moveX + "px)"), "-webkit-transform" to ("translateX(" + moveX + "px)"))
    }
    open var getDuration = ::gen_getDuration_fn
    open fun gen_getDuration_fn(value: Any): String {
        if (value.toString().indexOf("s") >= 0) {
            return value as String
        }
        return if (parseInt(value.toString()) > 30) {
            value.toString() + "ms"
        } else {
            value.toString() + "s"
        }
    }
    companion object {
        var name = "up-swipe-action-item"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("up-swipe-action-item" to _pS(_uM("position" to "relative", "overflow" to "hidden", "display" to "flex", "flexDirection" to "column")), "up-swipe-action-item__content" to _pS(_uM("transform" to "translateX(0px)", "backgroundColor" to "#FFFFFF", "zIndex" to 10, "width" to "100%", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "up-swipe-action-item__right" to _pS(_uM("position" to "absolute", "top" to 0, "bottom" to 0, "right" to 0, "display" to "flex", "flexDirection" to "row", "zIndex" to 1)), "up-swipe-action-item__right__button" to _pS(_uM("display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "overflow" to "hidden", "alignItems" to "center")), "up-swipe-action-item__right__button__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "center", "paddingTop" to 0, "paddingRight" to 15, "paddingBottom" to 0, "paddingLeft" to 15)), "up-swipe-action-item__right__button__wrapper--primary" to _pS(_uM("backgroundColor" to "var(--theme-color, #0957de)")), "up-swipe-action-item__right__button__wrapper__text" to _pS(_uM("display" to "flex", "flexDirection" to "row", "alignItems" to "center", "color" to "#FFFFFF", "fontSize" to 15, "textAlign" to "center", "justifyContent" to "center")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("click" to null, "update:show" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "show" to _uM("type" to "Boolean", "default" to crtProp__15["show"]), "closeOnClick" to _uM("type" to "Boolean", "default" to crtProp__15["closeOnClick"]), "name" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__15["name"]), "disabled" to _uM("type" to "Boolean", "default" to crtProp__15["disabled"]), "autoClose" to _uM("type" to "Boolean", "default" to crtProp__15["autoClose"]), "threshold" to _uM("type" to "Number", "default" to crtProp__15["threshold"]), "options" to _uM("type" to "Array", "default" to crtProp__15["options"]), "duration" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__15["duration"])))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "show",
            "closeOnClick",
            "name",
            "disabled",
            "autoClose",
            "threshold",
            "options",
            "duration"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
