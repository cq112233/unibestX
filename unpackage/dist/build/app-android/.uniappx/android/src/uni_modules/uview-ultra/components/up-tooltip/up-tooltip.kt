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
import io.dcloud.uniapp.extapi.setClipboardData as uni_setClipboardData
open class GenUniModulesUviewUltraComponentsUpTooltipUpTooltip : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var text: Any by `$props`
    open var copyText: Any by `$props`
    open var size: Any by `$props`
    open var color: String by `$props`
    open var bgColor: String by `$props`
    open var popupBgColor: String by `$props`
    open var direction: String by `$props`
    open var placement: String by `$props`
    open var zIndex: Any by `$props`
    open var showCopy: Boolean by `$props`
    open var buttons: UTSArray<String> by `$props`
    open var overlay: Boolean by `$props`
    open var showToast: Boolean by `$props`
    open var show: Boolean by `$props`
    open var triggerMode: String by `$props`
    open var forcePosition: Any by `$props`
    open var customStyle: Any by `$props`
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpTooltipUpTooltip, __setupCtx: SetupContext) -> Any? = fun(__props, __setupCtx): Any? {
            val __expose = __setupCtx.expose
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpTooltipUpTooltip
            val _cache = __ins.renderCache
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val instance = getCurrentInstance()
            fun gen_createRectInfo_fn(): UTSJSONObject {
                val info: UTSJSONObject = _uO()
                info["width"] = 0
                info["left"] = 0
                info["right"] = 0
                return info
            }
            val createRectInfo = ::gen_createRectInfo_fn
            fun gen_normalizeBool_fn(value: Any?): Boolean {
                return value == true
            }
            val normalizeBool = ::gen_normalizeBool_fn
            fun normalizeNumber(value: Any?, fallback: Number = 0): Number {
                if (UTSAndroid.`typeof`(value) === "number") {
                    return value as Number
                }
                if (value == null) {
                    return fallback
                }
                val parsed = parseFloat(value.toString())
                return if (isNaN(parsed)) {
                    fallback
                } else {
                    parsed
                }
            }
            fun getObjNumber(obj: Any?, key: String, fallback: Number = 0): Number {
                if (obj == null) {
                    return fallback
                }
                return normalizeNumber((obj as UTSJSONObject)[key], fallback)
            }
            val innerShow = ref<Boolean>(false)
            val lastLongpressTime = ref<Number>(0)
            val lastClickTime = ref<Number>(0)
            val openTime = ref<Number>(0)
            val textId = ref<String>(guid())
            val tooltipId = ref<String>(guid())
            val tooltipInfo = ref<UTSJSONObject>(createRectInfo())
            val textInfo = ref<UTSJSONObject>(createRectInfo())
            val screenGap: Number = 12
            val indicatorWidth: Number = 14
            val displayText = computed<String>(fun(): String {
                return if (props.text == null) {
                    ""
                } else {
                    props.text.toString()
                }
            }
            )
            val hasText = computed<Boolean>(fun(): Boolean {
                return displayText.value != ""
            }
            )
            val currentDirection = computed<String>(fun(): String {
                if (props.placement != "") {
                    if (props.placement.indexOf("bottom") != -1) {
                        return "bottom"
                    }
                    if (props.placement.indexOf("top") != -1) {
                        return "top"
                    }
                }
                return if (props.direction == "bottom") {
                    "bottom"
                } else {
                    "top"
                }
            }
            )
            val displayShow = computed<Boolean>(fun(): Boolean {
                return props.show || innerShow.value
            }
            )
            val rootStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                return addStyle(props.customStyle) as UTSJSONObject
            }
            )
            val buttonItems = computed<UTSArray<String>>(fun(): UTSArray<String> {
                return props.buttons
            }
            )
            val buttonCount = computed<Number>(fun(): Number {
                return buttonItems.value.length
            }
            )
            val overlayShow = computed<Boolean>(fun(): Boolean {
                return displayShow.value == true && normalizeBool(props.overlay)
            }
            )
            val showIndicator = computed<Boolean>(fun(): Boolean {
                return normalizeBool(props.showCopy) || buttonCount.value > 0
            }
            )
            val showCopyLine = computed<Boolean>(fun(): Boolean {
                return normalizeBool(props.showCopy) && buttonCount.value > 0
            }
            )
            val showCopyButton = computed<Boolean>(fun(): Boolean {
                return normalizeBool(props.showCopy)
            }
            )
            val textStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                style["fontSize"] = addUnit(props.size)
                style["color"] = props.color
                style["borderRadius"] = "4px"
                style["padding"] = "2px 4px"
                style["backgroundColor"] = if (props.bgColor != "" && props.bgColor != "transparent" && displayShow.value == true) {
                    props.bgColor
                } else {
                    "transparent"
                }
                return style
            }
            )
            val popupListStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                if (props.popupBgColor != "" && props.popupBgColor != "transparent") {
                    style["backgroundColor"] = props.popupBgColor
                }
                return style
            }
            )
            val indicatorStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                val sysInfo = sys()
                val tInfo = tooltipInfo.value
                val txInfo = textInfo.value
                val tooltipWidth = getObjNumber(tInfo, "width")
                val textWidth = getObjNumber(txInfo, "width")
                val textLeft = getObjNumber(txInfo, "left")
                val windowWidth = normalizeNumber(sysInfo.windowWidth, 0)
                if (props.popupBgColor != "" && props.popupBgColor != "transparent") {
                    style["backgroundColor"] = props.popupBgColor
                }
                if (tooltipWidth > 0 && textWidth > 0 && textLeft >= 0 && windowWidth > 0) {
                    val textCenter = textLeft + textWidth / 2
                    val idealPopupLeftScreen = textCenter - tooltipWidth / 2
                    var actualPopupLeftScreen = idealPopupLeftScreen
                    if (idealPopupLeftScreen < screenGap) {
                        actualPopupLeftScreen = screenGap
                    } else if (idealPopupLeftScreen + tooltipWidth > windowWidth - screenGap) {
                        actualPopupLeftScreen = windowWidth - screenGap - tooltipWidth
                    }
                    val textCenterInPopup = textCenter - actualPopupLeftScreen
                    var indicatorLeftRelative = textCenterInPopup - indicatorWidth / 2
                    val minLeft: Number = 8
                    val maxLeft = tooltipWidth - indicatorWidth - 8
                    if (indicatorLeftRelative < minLeft) {
                        indicatorLeftRelative = minLeft
                    } else if (indicatorLeftRelative > maxLeft) {
                        indicatorLeftRelative = maxLeft
                    }
                    style["left"] = addUnit(indicatorLeftRelative)
                } else {
                    style["left"] = "50%"
                    style["marginLeft"] = "-" + addUnit(indicatorWidth / 2)
                }
                if (currentDirection.value === "top") {
                    style["bottom"] = "-4px"
                } else {
                    style["top"] = "-4px"
                }
                return style
            }
            )
            val tooltipStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                val sysInfo = sys()
                val tInfo = tooltipInfo.value
                val txInfo = textInfo.value
                val tooltipWidth = getObjNumber(tInfo, "width")
                val textWidth = getObjNumber(txInfo, "width")
                val textLeft = getObjNumber(txInfo, "left")
                val windowWidth = normalizeNumber(sysInfo.windowWidth, 0)
                var isCentered = false
                if (tooltipWidth > 0 && textWidth > 0 && textLeft >= 0 && windowWidth > 0) {
                    val textCenter = textLeft + textWidth / 2
                    val idealPopupLeftScreen = textCenter - tooltipWidth / 2
                    var actualPopupLeftScreen = idealPopupLeftScreen
                    if (idealPopupLeftScreen < screenGap) {
                        actualPopupLeftScreen = screenGap
                    } else if (idealPopupLeftScreen + tooltipWidth > windowWidth - screenGap) {
                        actualPopupLeftScreen = windowWidth - screenGap - tooltipWidth
                    }
                    val popupLeftRelative = actualPopupLeftScreen - textLeft
                    style["left"] = addUnit(popupLeftRelative)
                } else {
                    style["left"] = "50%"
                    isCentered = true
                }
                if (currentDirection.value === "top") {
                    style["top"] = "0px"
                    style["transform"] = if (isCentered) {
                        "translate(-50%, -100%)"
                    } else {
                        "translateY(-100%)"
                    }
                    style["marginTop"] = "-10px"
                } else {
                    style["top"] = "100%"
                    style["transform"] = if (isCentered) {
                        "translate(-50%, 0%)"
                    } else {
                        "translateY(0%)"
                    }
                    style["marginTop"] = "10px"
                }
                return style
            }
            )
            val transitionStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                style["position"] = "absolute"
                style["zIndex"] = props.zIndex
                val ts = tooltipStyle.value
                UTSJSONObject.keys(ts).forEach(fun(key: String){
                    style[key] = ts[key]
                }
                )
                return style
            }
            )
            val indicatorMergedStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                val isStyle = indicatorStyle.value
                UTSJSONObject.keys(isStyle).forEach(fun(key: String){
                    style[key] = isStyle[key]
                }
                )
                style["width"] = addUnit(indicatorWidth)
                style["height"] = addUnit(indicatorWidth)
                return style
            }
            )
            fun gen_queryRect_fn(refName: String): UTSPromise<NodeInfo> {
                return uni.UNIB120614.upGetRect("#" + refName, false, instance?.proxy)
            }
            val queryRect = ::gen_queryRect_fn
            fun gen_getElRect_fn() {
                queryRect(tooltipId.value).then(fun(size: NodeInfo){
                    tooltipInfo.value = size as Any as UTSJSONObject
                }
                )
                queryRect(textId.value).then(fun(size: NodeInfo){
                    textInfo.value = size as Any as UTSJSONObject
                }
                )
            }
            val getElRect = ::gen_getElRect_fn
            fun gen_triggerPopup_fn() {
                innerShow.value = !innerShow.value
                if (innerShow.value) {
                    openTime.value = Date.now()
                    emit("open")
                    sleep(30).then(fun(){
                        getElRect()
                    })
                } else {
                    emit("close")
                }
            }
            val triggerPopup = ::gen_triggerPopup_fn
            fun gen_longpressHandler_fn() {
                lastLongpressTime.value = Date.now()
                triggerPopup()
            }
            val longpressHandler = ::gen_longpressHandler_fn
            fun gen_clickHandler_fn() {
                if (Date.now() - lastLongpressTime.value < 500) {
                    return
                }
                if (Date.now() - lastClickTime.value < 300) {
                    return
                }
                lastClickTime.value = Date.now()
                if (props.triggerMode == "click" || props.triggerMode == "hover") {
                    triggerPopup()
                }
            }
            val clickHandler = ::gen_clickHandler_fn
            fun gen_overlayClickHandler_fn() {
                if (Date.now() - openTime.value < 200) {
                    return
                }
                innerShow.value = false
                emit("close")
            }
            val overlayClickHandler = ::gen_overlayClickHandler_fn
            fun gen_btnClickHandler_fn(index: Number): Unit {
                innerShow.value = false
                emit("close")
                emit("click", if (props.showCopy) {
                    index + 1
                } else {
                    index
                }
                )
            }
            val btnClickHandler = ::gen_btnClickHandler_fn
            fun gen_getCopyData_fn(): String {
                val copyText = props.copyText
                if (copyText != null && copyText.toString() != "") {
                    return copyText.toString()
                }
                return displayText.value
            }
            val getCopyData = ::gen_getCopyData_fn
            fun gen_setClipboardData_fn() {
                innerShow.value = false
                emit("close")
                emit("click", 0)
                uni_setClipboardData(SetClipboardDataOptions(data = getCopyData(), success = fun(_){
                    if (props.showToast == true) {
                        toast("复制成功")
                    }
                }
                , fail = fun(_){
                    if (props.showToast == true) {
                        toast("复制失败")
                    }
                }
                ))
            }
            val setClipboardData = ::gen_setClipboardData_fn
            watch(fun(): Boolean {
                return props.show
            }
            , fun(newVal: Boolean){
                innerShow.value = newVal
                if (newVal) {
                    getElRect()
                }
            }
            )
            watch(displayShow, fun(newVal: Boolean){
                if (newVal) {
                    nextTick(fun(){
                        getElRect()
                        sleep(50).then(fun(){
                            getElRect()
                        }
                        )
                        sleep(150).then(fun(){
                            getElRect()
                        }
                        )
                    }
                    )
                }
            }
            )
            onMounted(fun(){
                if (props.show) {
                    innerShow.value = true
                }
                getElRect()
            }
            )
            __expose(_uM("open" to fun(){
                innerShow.value = true
                openTime.value = Date.now()
                emit("open")
                sleep(30).then(fun(){
                    getElRect()
                }
                )
            }
            , "close" to fun(){
                innerShow.value = false
                emit("close")
            }
            ))
            return fun(): Any? {
                val _component_up_overlay = resolveEasyComponent("up-overlay", GenUniModulesUviewUltraComponentsUpOverlayUpOverlayClass)
                val _component_up_line = resolveEasyComponent("up-line", GenUniModulesUviewUltraComponentsUpLineUpLineClass)
                val _component_up_transition = resolveEasyComponent("up-transition", GenUniModulesUviewUltraComponentsUpTransitionUpTransitionClass)
                return _cE("view", _uM("class" to "weapp-tw-border up-tooltip", "style" to _nS(_uA(
                    rootStyle.value
                ))), _uA(
                    _cV(_component_up_overlay, _uM("show" to overlayShow.value, "opacity" to 0, "onClick" to overlayClickHandler), null, 8, _uA(
                        "show"
                    )),
                    _cE("view", _uM("class" to "weapp-tw-border up-tooltip__wrapper"), _uA(
                        if (isTrue(hasText.value)) {
                            _cE("text", _uM("key" to 0, "class" to "weapp-tw-border up-tooltip__wrapper__text", "id" to textId.value, "ref" to textId.value, "selectable" to false, "onLongpress" to withModifiers(longpressHandler, _uA(
                                "stop"
                            )), "onClick" to withModifiers(clickHandler, _uA(
                                "stop"
                            )), "style" to _nS(_uA(
                                textStyle.value
                            ))), _tD(displayText.value), 45, _uA(
                                "id"
                            ))
                        } else {
                            _cE("view", _uM("key" to 1, "class" to "weapp-tw-border up-tooltip__wrapper__trigger", "id" to textId.value, "ref" to textId.value, "onLongpress" to withModifiers(longpressHandler, _uA(
                                "stop"
                            )), "onClick" to withModifiers(clickHandler, _uA(
                                "stop"
                            ))), _uA(
                                renderSlot(_ctx.`$slots`, "trigger", _uO(), fun(): UTSArray<Any> {
                                    return _uA(
                                        renderSlot(_ctx.`$slots`, "default")
                                    )
                                }
                                )
                            ), 40, _uA(
                                "id"
                            ))
                        }
                        ,
                        _cV(_component_up_transition, _uM("mode" to "fade", "show" to displayShow.value, "duration" to "300", "customStyle" to transitionStyle.value), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "weapp-tw-border up-tooltip__wrapper__popup", "id" to tooltipId.value, "ref" to tooltipId.value), _uA(
                                    if (isTrue(showIndicator.value)) {
                                        _cE("view", _uM("key" to 0, "class" to "weapp-tw-border up-tooltip__wrapper__popup__indicator", "hover-class" to "up-tooltip__wrapper__popup__indicator--hover", "style" to _nS(_uA(
                                            indicatorMergedStyle.value
                                        ))), null, 4)
                                    } else {
                                        _cC("v-if", true)
                                    }
                                    ,
                                    renderSlot(_ctx.`$slots`, "content", _uO(), fun(): UTSArray<Any> {
                                        return _uA(
                                            _cE("view", _uM("class" to "weapp-tw-border up-tooltip__wrapper__popup__list", "style" to _nS(_uA(
                                                popupListStyle.value
                                            ))), _uA(
                                                if (isTrue(showCopyButton.value)) {
                                                    _cE("view", _uM("key" to 0, "class" to "weapp-tw-border up-tooltip__wrapper__popup__list__btn", "hover-class" to "up-tooltip__wrapper__popup__list__btn--hover", "onClick" to setClipboardData), _uA(
                                                        _cE("text", _uM("class" to "weapp-tw-border up-tooltip__wrapper__popup__list__btn__text"), "复制")
                                                    ))
                                                } else {
                                                    _cC("v-if", true)
                                                }
                                                ,
                                                if (isTrue(showCopyLine.value)) {
                                                    _cV(_component_up_line, _uM("key" to 1, "direction" to "column", "color" to "#8d8e90", "length" to "18"))
                                                } else {
                                                    _cC("v-if", true)
                                                }
                                                ,
                                                _cE(Fragment, null, RenderHelpers.renderList(buttonItems.value, fun(item, index, __index, _cached): Any {
                                                    return _cE(Fragment, _uM("key" to index), _uA(
                                                        _cE("view", _uM("class" to "weapp-tw-border up-tooltip__wrapper__popup__list__btn", "hover-class" to "up-tooltip__wrapper__popup__list__btn--hover", "onClick" to fun(){
                                                            btnClickHandler(index)
                                                        }
                                                        ), _uA(
                                                            _cE("text", _uM("class" to "weapp-tw-border up-tooltip__wrapper__popup__list__btn__text"), _tD(item), 1)
                                                        ), 8, _uA(
                                                            "onClick"
                                                        )),
                                                        if (index < buttonCount.value - 1) {
                                                            _cV(_component_up_line, _uM("key" to 0, "direction" to "column", "color" to "#8d8e90", "length" to "18"))
                                                        } else {
                                                            _cC("v-if", true)
                                                        }
                                                    ), 64)
                                                }
                                                ), 128)
                                            ), 4)
                                        )
                                    }
                                    )
                                ), 8, _uA(
                                    "id"
                                ))
                            )
                        }
                        ), "_" to 3), 8, _uA(
                            "show",
                            "customStyle"
                        ))
                    ))
                ), 4)
            }
        }
        var name = "up-tooltip"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tooltip" to _pS(_uM("position" to "relative", "display" to "flex", "flexDirection" to "row")), "up-tooltip__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "whiteSpace" to "nowrap")), "up-tooltip__wrapper__text" to _pS(_uM("fontSize" to 14)), "up-tooltip__wrapper__trigger" to _pS(_uM("display" to "flex", "flexDirection" to "row")), "up-tooltip__wrapper__popup" to _pS(_uM("display" to "flex", "flexDirection" to "row", "justifyContent" to "center")), "up-tooltip__wrapper__popup__list" to _pS(_uM("backgroundColor" to "#060607", "position" to "relative", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "borderTopLeftRadius" to 5, "borderTopRightRadius" to 5, "borderBottomRightRadius" to 5, "borderBottomLeftRadius" to 5, "paddingTop" to 0, "paddingRight" to 0, "paddingBottom" to 0, "paddingLeft" to 0, "display" to "flex", "flexDirection" to "row", "alignItems" to "center", "overflow" to "hidden")), "up-tooltip__wrapper__popup__list__btn" to _pS(_uM("paddingTop" to 11, "paddingRight" to 13, "paddingBottom" to 11, "paddingLeft" to 13)), "up-tooltip__wrapper__popup__list__btn--hover" to _pS(_uM("backgroundColor" to "#58595B")), "up-tooltip__wrapper__popup__list__btn__text" to _pS(_uM("lineHeight" to "12px", "fontSize" to 13, "color" to "#FFFFFF")), "up-tooltip__wrapper__popup__indicator" to _pS(_uM("position" to "absolute", "backgroundColor" to "#060607", "width" to 14, "height" to 14, "bottom" to -4, "transform" to "rotate(45deg)", "borderTopLeftRadius" to 2, "borderTopRightRadius" to 2, "borderBottomRightRadius" to 2, "borderBottomLeftRadius" to 2, "zIndex" to -1)), "up-tooltip__wrapper__popup__indicator--hover" to _pS(_uM("backgroundColor" to "#58595B")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("click" to null, "open" to null, "close" to null)
        var props = _nP(_uM("customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "text" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to ""), "copyText" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to ""), "size" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 14), "color" to _uM("type" to "String", "default" to "#606266"), "bgColor" to _uM("type" to "String", "default" to "transparent"), "popupBgColor" to _uM("type" to "String", "default" to "#060607"), "direction" to _uM("type" to "String", "default" to "top"), "placement" to _uM("type" to "String", "default" to ""), "zIndex" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 10071), "showCopy" to _uM("type" to "Boolean", "default" to true), "buttons" to _uM("type" to "Array", "default" to fun(): UTSArray<String> {
            return _uA<String>()
        }
        ), "overlay" to _uM("type" to "Boolean", "default" to true), "showToast" to _uM("type" to "Boolean", "default" to true), "show" to _uM("type" to "Boolean", "default" to false), "triggerMode" to _uM("type" to "String", "default" to "click"), "forcePosition" to _uM("default" to fun(): UTSJSONObject {
            return (_uO())
        }
        ), "customStyle" to _uM("default" to fun(): UTSJSONObject {
            return (_uO())
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
            "popupBgColor",
            "direction",
            "placement",
            "zIndex",
            "showCopy",
            "buttons",
            "overlay",
            "showToast",
            "show",
            "triggerMode",
            "forcePosition",
            "customStyle"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
