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
import io.dcloud.uniapp.extapi.setClipboardData as uni_setClipboardData
open class GenUniModulesUviewUltraComponentsUpTooltipUpTooltip : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
        onCreated(fun() {}, __ins)
        onMounted(fun() {
            this.init()
        }
        , __ins)
        this.`$watch`(fun(): Any? {
            return this.propsChange
        }
        , fun() {
            this.getElRect()
        }
        )
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        val _component_up_overlay = resolveEasyComponent("up-overlay", GenUniModulesUviewUltraComponentsUpOverlayUpOverlayClass)
        val _component_up_line = resolveEasyComponent("up-line", GenUniModulesUviewUltraComponentsUpLineUpLineClass)
        val _component_up_transition = resolveEasyComponent("up-transition", GenUniModulesUviewUltraComponentsUpTransitionUpTransitionClass)
        return _cE("view", _uM("class" to "up-tooltip", "style" to _nS(_ctx.rootStyle)), _uA(
            _cV(_component_up_overlay, _uM("show" to _ctx.overlayShow, "customStyle" to "backgroundColor: rgba(0, 0, 0, 0)", "onClick" to _ctx.overlayClickHandler), null, 8, _uA(
                "show",
                "onClick"
            )),
            _cE("view", _uM("class" to "up-tooltip__wrapper"), _uA(
                _cE("text", _uM("class" to "up-tooltip__wrapper__text", "id" to _ctx.textId, "ref" to _ctx.textId, "userSelect" to false, "selectable" to false, "onLongpress" to withModifiers(_ctx.longpressHandler, _uA(
                    "stop"
                )), "style" to _nS(_ctx.textStyle)), _tD(_ctx.displayText), 45, _uA(
                    "id",
                    "onLongpress"
                )),
                _cV(_component_up_transition, _uM("mode" to "fade", "show" to _ctx.showTooltip, "duration" to "300", "customStyle" to _ctx.transitionStyle), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cE("view", _uM("class" to "up-tooltip__wrapper__popup", "id" to _ctx.tooltipId, "ref" to _ctx.tooltipId), _uA(
                            if (isTrue(_ctx.showIndicator)) {
                                _cE("view", _uM("key" to 0, "class" to "up-tooltip__wrapper__popup__indicator", "hover-class" to "up-tooltip__wrapper__popup__indicator--hover", "style" to _nS(_ctx.indicatorMergedStyle)), null, 4)
                            } else {
                                _cC("v-if", true)
                            }
                            ,
                            _cE("view", _uM("class" to "up-tooltip__wrapper__popup__list"), _uA(
                                if (isTrue(_ctx.showCopyButton)) {
                                    _cE("view", _uM("key" to 0, "class" to "up-tooltip__wrapper__popup__list__btn", "hover-class" to "up-tooltip__wrapper__popup__list__btn--hover", "onClick" to _ctx.setClipboardData), _uA(
                                        _cE("text", _uM("class" to "up-tooltip__wrapper__popup__list__btn__text"), "复制")
                                    ), 8, _uA(
                                        "onClick"
                                    ))
                                } else {
                                    _cC("v-if", true)
                                }
                                ,
                                if (isTrue(_ctx.showCopyLine)) {
                                    _cV(_component_up_line, _uM("key" to 1, "direction" to "column", "color" to "#8d8e90", "length" to "18"))
                                } else {
                                    _cC("v-if", true)
                                }
                                ,
                                _cE(Fragment, null, RenderHelpers.renderList(_ctx.buttonItems, fun(item, index, __index, _cached): Any {
                                    return _cE(Fragment, _uM("key" to index), _uA(
                                        _cE("view", _uM("class" to "up-tooltip__wrapper__popup__list__btn", "hover-class" to "up-tooltip__wrapper__popup__list__btn--hover"), _uA(
                                            _cE("text", _uM("class" to "up-tooltip__wrapper__popup__list__btn__text", "onClick" to fun(){
                                                _ctx.btnClickHandler(index)
                                            }
                                            ), _tD(item), 9, _uA(
                                                "onClick"
                                            ))
                                        )),
                                        if (index < _ctx.buttonCount - 1) {
                                            _cV(_component_up_line, _uM("key" to 0, "direction" to "column", "color" to "#8d8e90", "length" to "18"))
                                        } else {
                                            _cC("v-if", true)
                                        }
                                    ), 64)
                                }
                                ), 128)
                            ))
                        ), 8, _uA(
                            "id"
                        ))
                    )
                }
                ), "_" to 1), 8, _uA(
                    "show",
                    "customStyle"
                ))
            ))
        ), 4)
    }
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var text: Any by `$props`
    open var copyText: Any by `$props`
    open var size: Any by `$props`
    open var color: String by `$props`
    open var bgColor: String by `$props`
    open var direction: String by `$props`
    open var zIndex: Any by `$props`
    open var showCopy: Boolean by `$props`
    open var buttons: UTSArray<Any?>? by `$props`
    open var overlay: Boolean by `$props`
    open var showToast: Boolean by `$props`
    open var customStyle: Any? by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var showTooltip: Boolean by `$data`
    open var textId: Any? by `$data`
    open var tooltipId: Any? by `$data`
    open var tooltipTop: Number by `$data`
    open var tooltipInfo: Any? by `$data`
    open var textInfo: Any? by `$data`
    open var indicatorStyle: Any? by `$data`
    open var screenGap: Number by `$data`
    open var indicatorWidth: Number by `$data`
    open var propsChange: String by `$data`
    open var displayText: String by `$data`
    open var rootStyle: UTSJSONObject by `$data`
    open var buttonItems: UTSArray<String> by `$data`
    open var buttonCount: Number by `$data`
    open var overlayShow: Boolean by `$data`
    open var showIndicator: Boolean by `$data`
    open var showCopyLine: Boolean by `$data`
    open var showCopyButton: Boolean by `$data`
    open var textStyle: UTSJSONObject by `$data`
    open var transitionStyle: UTSJSONObject by `$data`
    open var indicatorMergedStyle: UTSJSONObject by `$data`
    open var tooltipStyle: UTSJSONObject by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "parentData" to _uO(), "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>(), "showTooltip" to true, "textId" to guid(), "tooltipId" to guid(), "tooltipTop" to -10000, "tooltipInfo" to createRectInfo(), "textInfo" to createRectInfo(), "indicatorStyle" to emptyStyle(), "screenGap" to 12, "indicatorWidth" to 14, "propsChange" to computed<String>(fun(): String {
            return this.displayText + "-" + this.buttonCount.toString(10)
        }
        ), "displayText" to computed<String>(fun(): String {
            val text = this.text
            return if (text == null) {
                ""
            } else {
                text.toString()
            }
        }
        ), "rootStyle" to computed<UTSJSONObject>(fun(): UTSJSONObject {
            val customStyle = if (this.customStyle != null) {
                this.customStyle
            } else {
                _uO()
            }
             as UTSJSONObject
            return addStyle(customStyle) as UTSJSONObject
        }
        ), "buttonItems" to computed<UTSArray<String>>(fun(): UTSArray<String> {
            return if (this.buttons != null) {
                this.buttons
            } else {
                _uA()
            }
             as UTSArray<String>
        }
        ), "buttonCount" to computed<Number>(fun(): Number {
            return this.buttonItems.length
        }
        ), "overlayShow" to computed<Boolean>(fun(): Boolean {
            return this.showTooltip == true && this.tooltipTop !== -10000 && normalizeBool(this.overlay)
        }
        ), "showIndicator" to computed<Boolean>(fun(): Boolean {
            return normalizeBool(this.showCopy) || this.buttonCount > 0
        }
        ), "showCopyLine" to computed<Boolean>(fun(): Boolean {
            return normalizeBool(this.showCopy) && this.buttonCount > 0
        }
        ), "showCopyButton" to computed<Boolean>(fun(): Boolean {
            return normalizeBool(this.showCopy)
        }
        ), "textStyle" to computed<UTSJSONObject>(fun(): UTSJSONObject {
            val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-tooltip/up-tooltip.uvue", 263, 11))
            style["color"] = this.color
            style["backgroundColor"] = if (this.bgColor != "" && this.showTooltip == true && this.tooltipTop !== -10000) {
                this.bgColor
            } else {
                "transparent"
            }
            return style
        }
        ), "transitionStyle" to computed<UTSJSONObject>(fun(): UTSJSONObject {
            val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-tooltip/up-tooltip.uvue", 269, 11))
            style["position"] = "absolute"
            style["top"] = addUnit(this.tooltipTop)
            style["zIndex"] = this.zIndex
            return UTSJSONObject.assign(style, if (this.tooltipStyle != null) {
                this.tooltipStyle
            } else {
                (_uO())
            }
            )
        }
        ), "indicatorMergedStyle" to computed<UTSJSONObject>(fun(): UTSJSONObject {
            val indicatorStyle = this.indicatorStyle as UTSJSONObject
            val style = UTSJSONObject.assign(_uO(), indicatorStyle)
            style["width"] = addUnit(this.indicatorWidth)
            style["height"] = addUnit(this.indicatorWidth)
            return style
        }
        ), "tooltipStyle" to computed<UTSJSONObject>(fun(): UTSJSONObject {
            val style: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("style", "uni_modules/uview-ultra/components/up-tooltip/up-tooltip.uvue", 284, 11))
            style["transform"] = if (this.direction === "top") {
                "translateY(-100%)"
            } else {
                "translateY(100%)"
            }
            val sysInfo = sys()
            val tooltipInfo = this.tooltipInfo
            val textInfo = this.textInfo
            val tooltipWidth = getObjNumber(tooltipInfo, "width")
            val textWidth = getObjNumber(textInfo, "width")
            val textLeft = getObjNumber(textInfo, "left")
            val textRight = getObjNumber(textInfo, "right")
            val windowWidth = normalizeNumber__1(sysInfo.windowWidth, 0)
            if (tooltipWidth / 2 > textLeft + textWidth / 2 - this.screenGap) {
                this.indicatorStyle = emptyStyle()
                val left = "-" + addUnit(textLeft - this.screenGap)
                style["left"] = left
                val indicatorStyle = this.indicatorStyle as UTSJSONObject
                indicatorStyle["left"] = addUnit(textWidth / 2 - normalizeNumber__1(getPx(left), 0) - this.indicatorWidth / 2)
            } else if (tooltipWidth / 2 > windowWidth - textRight + textWidth / 2 - this.screenGap) {
                this.indicatorStyle = emptyStyle()
                val right = "-" + addUnit(windowWidth - textRight - this.screenGap)
                style["right"] = right
                val indicatorStyle = this.indicatorStyle as UTSJSONObject
                indicatorStyle["right"] = addUnit(textWidth / 2 - normalizeNumber__1(getPx(right), 0) - this.indicatorWidth / 2)
            } else {
                val left = Math.abs(textWidth / 2 - tooltipWidth / 2)
                style["left"] = if (textWidth > tooltipWidth) {
                    addUnit(left)
                } else {
                    "-" + addUnit(left)
                }
                this.indicatorStyle = emptyStyle()
            }
            if (this.direction === "top") {
                style["marginTop"] = "-10px"
                val indicatorStyle = this.indicatorStyle as UTSJSONObject
                indicatorStyle["bottom"] = "-4px"
            } else {
                style["marginBottom"] = "-10px"
                val indicatorStyle = this.indicatorStyle as UTSJSONObject
                indicatorStyle["top"] = "-4px"
            }
            return style
        }
        ))
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
    open var init = ::gen_init_fn
    open fun gen_init_fn() {
        this.getElRect()
    }
    open var longpressHandler = ::gen_longpressHandler_fn
    open fun gen_longpressHandler_fn(): UTSPromise<Unit> {
        return wrapUTSPromise(suspend {
                this.tooltipTop = 0
                this.showTooltip = true
        })
    }
    open var overlayClickHandler = ::gen_overlayClickHandler_fn
    open fun gen_overlayClickHandler_fn() {
        this.showTooltip = false
    }
    open var btnClickHandler = ::gen_btnClickHandler_fn
    open fun gen_btnClickHandler_fn(index: Number): Unit {
        this.showTooltip = false
        this.`$emit`("click", if (this.showCopy) {
            index + 1
        } else {
            index
        }
        )
    }
    open var queryRect = ::gen_queryRect_fn
    open fun gen_queryRect_fn(ref__1: String): UTSPromise<Any?> {
        return UTSPromise(fun(resolve, _reject){
            this.`$uGetRect`("#" + ref__1).then(fun(size){
                resolve(size)
            }
            )
        }
        )
    }
    open var getElRect = ::gen_getElRect_fn
    open fun gen_getElRect_fn() {
        this.showTooltip = true
        this.tooltipTop = -10000
        sleep(500).then(fun(){
            this.queryRect(this.tooltipId.toString()).then(fun(size: Any?){
                this.tooltipInfo = size
                this.showTooltip = false
            }
            )
            this.queryRect(this.textId.toString()).then(fun(size: Any?){
                this.textInfo = size
            }
            )
        }
        )
    }
    open var getCopyData = ::gen_getCopyData_fn
    open fun gen_getCopyData_fn(): String {
        val copyText = this.copyText
        if (copyText != null && copyText.toString() != "") {
            return copyText.toString()
        }
        return this.displayText
    }
    open var setClipboardData = ::gen_setClipboardData_fn
    open fun gen_setClipboardData_fn() {
        this.showTooltip = false
        this.`$emit`("click", 0)
        uni_setClipboardData(SetClipboardDataOptions(data = this.getCopyData(), success = fun(_){
            if (this.showToast == true) {
                toast("复制成功")
            }
        }
        , fail = fun(_){
            if (this.showToast == true) {
                toast("复制失败")
            }
        }
        , complete = fun(_){
            this.showTooltip = false
        }
        ))
    }
    companion object {
        var name = "up-tooltip"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tooltip" to _pS(_uM("position" to "relative", "display" to "flex", "flexDirection" to "row")), "up-tooltip__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "row", "justifyContent" to "center")), "up-tooltip__wrapper__text" to _pS(_uM("fontSize" to 14)), "up-tooltip__wrapper__popup" to _pS(_uM("display" to "flex", "flexDirection" to "row", "justifyContent" to "center")), "up-tooltip__wrapper__popup__list" to _pS(_uM("backgroundColor" to "#060607", "position" to "relative", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "borderTopLeftRadius" to 5, "borderTopRightRadius" to 5, "borderBottomRightRadius" to 5, "borderBottomLeftRadius" to 5, "paddingTop" to 0, "paddingRight" to 0, "paddingBottom" to 0, "paddingLeft" to 0, "display" to "flex", "flexDirection" to "row", "alignItems" to "center", "overflow" to "hidden")), "up-tooltip__wrapper__popup__list__btn" to _pS(_uM("paddingTop" to 11, "paddingRight" to 13, "paddingBottom" to 11, "paddingLeft" to 13)), "up-tooltip__wrapper__popup__list__btn--hover" to _pS(_uM("backgroundColor" to "#58595B")), "up-tooltip__wrapper__popup__list__btn__text" to _pS(_uM("lineHeight" to "12px", "fontSize" to 13, "color" to "#FFFFFF")), "up-tooltip__wrapper__popup__indicator" to _pS(_uM("position" to "absolute", "backgroundColor" to "#060607", "width" to 14, "height" to 14, "bottom" to -4, "transform" to "rotate(45deg)", "borderTopLeftRadius" to 2, "borderTopRightRadius" to 2, "borderBottomRightRadius" to 2, "borderBottomLeftRadius" to 2, "zIndex" to -1)), "up-tooltip__wrapper__popup__indicator--hover" to _pS(_uM("backgroundColor" to "#58595B")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("click" to null)
        var props = _nP(_uM("customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "text" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to ""), "copyText" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to ""), "size" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 14), "color" to _uM("type" to "String", "default" to "#606266"), "bgColor" to _uM("type" to "String", "default" to "transparent"), "direction" to _uM("type" to "String", "default" to "top"), "zIndex" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 10071), "showCopy" to _uM("type" to "Boolean", "default" to true), "buttons" to _uM("type" to "Array", "default" to fun(): UTSArray<String> {
            return _uA<String>()
        }
        ), "overlay" to _uM("type" to "Boolean", "default" to true), "showToast" to _uM("type" to "Boolean", "default" to true), "customStyle" to _uM("default" to fun(): UTSJSONObject {
            return _uO()
        }
        )))
        var propsNeedCastKeys = _uA(
            "customClass",
            "url",
            "linkType",
            "text",
            "copyText",
            "size",
            "color",
            "bgColor",
            "direction",
            "zIndex",
            "showCopy",
            "overlay",
            "showToast"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
