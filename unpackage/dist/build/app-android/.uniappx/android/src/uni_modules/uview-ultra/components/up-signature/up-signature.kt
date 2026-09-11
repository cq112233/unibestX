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
open class GenUniModulesUviewUltraComponentsUpSignatureUpSignature : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var width: Any by `$props`
    open var height: Any by `$props`
    open var bgColor: String by `$props`
    open var color: String by `$props`
    open var thickness: Any by `$props`
    open var showToolbar: Boolean by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var undo: () -> Unit
        get() {
            return unref(this.`$exposed`["undo"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "undo", value)
        }
    open var clearCanvas: () -> Unit
        get() {
            return unref(this.`$exposed`["clearCanvas"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "clearCanvas", value)
        }
    open var redraw: () -> Unit
        get() {
            return unref(this.`$exposed`["redraw"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "redraw", value)
        }
    open var exportSignature: () -> Unit
        get() {
            return unref(this.`$exposed`["exportSignature"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "exportSignature", value)
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpSignatureUpSignature, __setupCtx: SetupContext) -> Any? = fun(__props, __setupCtx): Any? {
            val __expose = __setupCtx.expose
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpSignatureUpSignature
            val _cache = __ins.renderCache
            fun normalizeNumber(value: Any?, defaultValue: Number = 0): Number {
                if (UTSAndroid.`typeof`(value) == "number") {
                    return value as Number
                }
                if (value == null) {
                    return defaultValue
                }
                val parsed = parseFloat(value.toString())
                return if (isNaN(parsed)) {
                    defaultValue
                } else {
                    parsed
                }
            }
            fun gen_createPath_fn(): UTSArray<SignaturePoint> {
                return _uA<SignaturePoint>()
            }
            val createPath = ::gen_createPath_fn
            fun gen_createPathStack_fn(): UTSArray<UTSArray<SignaturePoint>> {
                return _uA<UTSArray<SignaturePoint>>()
            }
            val createPathStack = ::gen_createPathStack_fn
            fun gen_createColors_fn(): UTSArray<String> {
                return _uA<String>("#000000", "#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff", "#ff00ff", "#ffffff")
            }
            val createColors = ::gen_createColors_fn
            fun gen_createPoint_fn(x: Number, y: Number, type: String, color: String, width: Number): SignaturePoint {
                return SignaturePoint(x = x, y = y, type = type, color = color, width = width)
            }
            val createPoint = ::gen_createPoint_fn
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            var canvasCompCount: Number = 0
            fun gen_makeCanvasId_fn(prefix: String): String {
                return prefix + Date.now().toString(10) + "_" + (++canvasCompCount).toString(10)
            }
            val makeCanvasId = ::gen_makeCanvasId_fn
            val instance = getCurrentInstance()
            val canvasId = ref<String>(makeCanvasId("up-signature-"))
            val canvasWidth = ref<Number>(normalizeNumber(props.width, 300))
            val canvasHeight = ref<Number>(normalizeNumber(props.height, 200))
            val lineColor = ref<String>(props.color)
            val lineWidth = ref<Number>(normalizeNumber(props.thickness, 3))
            val isDrawing = ref<Boolean>(false)
            val pathStack = ref<UTSArray<UTSArray<SignaturePoint>>>(createPathStack())
            val currentPath = ref<UTSArray<SignaturePoint>>(createPath())
            val isEmpty = ref<Boolean>(true)
            val presetColors = ref<UTSArray<String>>(createColors())
            val showBrushSettings = ref<Boolean>(false)
            val showColorSettings = ref<Boolean>(false)
            var ctx: SignatureCanvasContext__1? = null
            var lastDrawX: Number = 0
            var lastDrawY: Number = 0
            val drawAreaRef = ref<UniElement?>(null)
            val pathCount = computed<Number>(fun(): Number {
                return pathStack.value.length
            }
            )
            val colorItems = computed<UTSArray<String>>(fun(): UTSArray<String> {
                return presetColors.value
            }
            )
            val canvasWrapStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                style["width"] = canvasWidth.value.toString(10) + "px"
                style["height"] = canvasHeight.value.toString(10) + "px"
                style["backgroundColor"] = props.bgColor
                return style
            }
            )
            val penSizeLabel = computed<String>(fun(): String {
                return t("up.signature.penSize", _uO())
            }
            )
            val penColorLabel = computed<String>(fun(): String {
                return t("up.signature.penColor", _uO())
            }
            )
            fun gen_getColorStyle_fn(col: String): UTSJSONObject {
                val style: UTSJSONObject = _uO()
                style["backgroundColor"] = col
                return style
            }
            val getColorStyle = ::gen_getColorStyle_fn
            fun gen_getLineColor_fn(): String {
                return if (lineColor.value == null) {
                    "#000000"
                } else {
                    lineColor.value.toString()
                }
            }
            val getLineColor = ::gen_getLineColor_fn
            fun gen_getLineWidth_fn(): Number {
                return normalizeNumber(lineWidth.value, 3)
            }
            val getLineWidth = ::gen_getLineWidth_fn
            fun gen_getDrawElement_fn(): UniElement? {
                return drawAreaRef.value
            }
            val getDrawElement = ::gen_getDrawElement_fn
            fun gen_getTouchPoint_fn(e: UniTouchEvent): SignaturePoint {
                var x: Number = 0
                var y: Number = 0
                var touch: UniTouch? = null
                if (e.touches.length > 0) {
                    touch = e.touches[0]
                } else if (e.changedTouches.length > 0) {
                    touch = e.changedTouches[0]
                }
                if (touch != null) {
                    val el = getDrawElement()
                    if (el != null) {
                        val rect = el.getBoundingClientRect()
                        x = touch.clientX - rect.left
                        y = touch.clientY - rect.top
                    }
                }
                return createPoint(x, y, "move", "", 0)
            }
            val getTouchPoint = ::gen_getTouchPoint_fn
            fun gen_applyLineStyle_fn(color: String, width: Number): Unit {
                if (ctx == null) {
                    return
                }
                ctx!!.lineWidth = width
                ctx!!.strokeStyle = color
                ctx!!.lineCap = "round"
                ctx!!.lineJoin = "round"
            }
            val applyLineStyle = ::gen_applyLineStyle_fn
            fun gen_beginPath_fn(): Unit {
                if (ctx != null) {
                    ctx!!.beginPath()
                }
            }
            val beginPath = ::gen_beginPath_fn
            fun gen_moveTo_fn(x: Number, y: Number): Unit {
                if (ctx != null) {
                    ctx!!.moveTo(x, y)
                }
            }
            val moveTo = ::gen_moveTo_fn
            fun gen_lineTo_fn(x: Number, y: Number): Unit {
                if (ctx != null) {
                    ctx!!.lineTo(x, y)
                }
            }
            val lineTo = ::gen_lineTo_fn
            fun gen_stroke_fn(): Unit {
                if (ctx == null) {
                    return
                }
                ctx!!.stroke()
                ctx!!.update()
            }
            val stroke = ::gen_stroke_fn
            fun gen_closePath_fn(): Unit {
                if (ctx != null) {
                    ctx!!.closePath()
                }
            }
            val closePath = ::gen_closePath_fn
            fun gen_clearDrawing_fn(): Unit {
                if (ctx == null) {
                    return
                }
                ctx!!.reset()
                ctx!!.fillStyle = props.bgColor
                ctx!!.fillRect(0, 0, canvasWidth.value, canvasHeight.value)
                ctx!!.update()
            }
            val clearDrawing = ::gen_clearDrawing_fn
            fun gen_startDraw_fn(x: Number, y: Number): Unit {
                isDrawing.value = true
                isEmpty.value = false
                currentPath.value = createPath()
                val col = getLineColor()
                val wid = getLineWidth()
                val startPoint = createPoint(normalizeNumber(x, 0), normalizeNumber(y, 0), "start", col, wid)
                currentPath.value.push(startPoint)
                lastDrawX = startPoint.x
                lastDrawY = startPoint.y
                emit("change", currentPath.value)
            }
            val startDraw = ::gen_startDraw_fn
            fun gen_moveDraw_fn(x: Number, y: Number): Unit {
                if (!isDrawing.value) {
                    return
                }
                val movePoint = createPoint(normalizeNumber(x, 0), normalizeNumber(y, 0), "move", getLineColor(), getLineWidth())
                currentPath.value.push(movePoint)
                applyLineStyle(movePoint.color, movePoint.width)
                beginPath()
                moveTo(lastDrawX, lastDrawY)
                lineTo(movePoint.x, movePoint.y)
                stroke()
                closePath()
                lastDrawX = movePoint.x
                lastDrawY = movePoint.y
                emit("change", currentPath.value)
            }
            val moveDraw = ::gen_moveDraw_fn
            fun gen_endDraw_fn(): Unit {
                if (!isDrawing.value) {
                    return
                }
                isDrawing.value = false
                if (currentPath.value.length > 0) {
                    pathStack.value.push(currentPath.value)
                }
                currentPath.value = createPath()
            }
            val endDraw = ::gen_endDraw_fn
            fun gen_initContext_fn(): Unit {
                val drawArea = drawAreaRef.value
                if (drawArea == null) {
                    return
                }
                ctx = drawArea.getDrawableContext() as DrawableContext
                clearDrawing()
            }
            val initContext = ::gen_initContext_fn
            fun gen_touchStart_fn(e: UniTouchEvent): Unit {
                e.stopPropagation()
                e.preventDefault()
                val point = getTouchPoint(e)
                startDraw(point.x, point.y)
            }
            val touchStart = ::gen_touchStart_fn
            fun gen_touchMove_fn(e: UniTouchEvent): Unit {
                if (!isDrawing.value) {
                    return
                }
                e.stopPropagation()
                e.preventDefault()
                val point = getTouchPoint(e)
                moveDraw(point.x, point.y)
            }
            val touchMove = ::gen_touchMove_fn
            fun gen_touchEnd_fn(): Unit {
                endDraw()
            }
            val touchEnd = ::gen_touchEnd_fn
            fun gen_selectColor_fn(col: String): Unit {
                lineColor.value = col
            }
            val selectColor = ::gen_selectColor_fn
            fun gen_redraw_fn(): Unit {
                clearDrawing()
                val stack = pathStack.value
                if (stack.length == 0) {
                    isEmpty.value = true
                    return
                }
                isEmpty.value = false
                run {
                    var i: Number = 0
                    while(i < stack.length){
                        val path = stack[i]
                        if (path.length == 0) {
                            i++
                            continue
                        }
                        beginPath()
                        run {
                            var j: Number = 0
                            while(j < path.length){
                                val point = path[j]
                                if (j == 0 && point.type == "start") {
                                    applyLineStyle(point.color, point.width)
                                    moveTo(point.x, point.y)
                                } else if (point.type == "move") {
                                    lineTo(point.x, point.y)
                                }
                                j++
                            }
                        }
                        stroke()
                        closePath()
                        i++
                    }
                }
            }
            val redraw = ::gen_redraw_fn
            fun gen_undo_fn(): Unit {
                if (pathStack.value.length == 0) {
                    return
                }
                pathStack.value.pop()
                redraw()
            }
            val undo = ::gen_undo_fn
            fun gen_clearCanvas_fn(): Unit {
                clearDrawing()
                pathStack.value = createPathStack()
                currentPath.value = createPath()
                isEmpty.value = true
                emit("clear")
            }
            val clearCanvas = ::gen_clearCanvas_fn
            fun gen_exportSignature_fn(): Unit {
                if (isEmpty.value) {
                    emit("error", "签名为空")
                    return
                }
                redraw()
                val el = drawAreaRef.value
                if (el == null) {
                    emit("error", "无法获取画布实例")
                    return
                }
                el.takeSnapshot(TakeSnapshotOptions(format = "png", success = fun(res: TakeSnapshotSuccess){
                    val tempFilePath = res.tempFilePath
                    if (tempFilePath == "") {
                        emit("error", "导出签名图片失败")
                    } else {
                        emit("confirm", tempFilePath)
                    }
                }
                , fail = fun(err: TakeSnapshotFail){
                    emit("error", err.errMsg)
                }
                ))
            }
            val exportSignature = ::gen_exportSignature_fn
            fun gen_toggleBrushSettings_fn(): Unit {
                showBrushSettings.value = !showBrushSettings.value
                if (showBrushSettings.value) {
                    showColorSettings.value = false
                }
            }
            val toggleBrushSettings = ::gen_toggleBrushSettings_fn
            fun gen_toggleColorSettings_fn(): Unit {
                showColorSettings.value = !showColorSettings.value
                if (showColorSettings.value) {
                    showBrushSettings.value = false
                }
            }
            val toggleColorSettings = ::gen_toggleColorSettings_fn
            watch(fun(): Any {
                return props.width
            }
            , fun(newVal: Any?){
                canvasWidth.value = normalizeNumber(newVal, 300)
            }
            )
            watch(fun(): Any {
                return props.height
            }
            , fun(newVal: Any?){
                canvasHeight.value = normalizeNumber(newVal, 200)
            }
            )
            watch(fun(): Any {
                return props.color
            }
            , fun(newVal: String){
                lineColor.value = newVal
            }
            )
            watch(fun(): Any {
                return props.thickness
            }
            , fun(newVal: Any?){
                lineWidth.value = normalizeNumber(newVal, 3)
            }
            )
            var initAttempts: Number = 0
            fun gen_scheduleInit_fn(delay: Number): Unit {
                setTimeout(fun(){
                    initContext()
                    if (ctx == null && initAttempts < 2) {
                        initAttempts++
                        gen_scheduleInit_fn(200)
                    }
                }
                , delay)
            }
            val scheduleInit = ::gen_scheduleInit_fn
            onMounted(fun(){
                nextTick(fun(){
                    initAttempts = 0
                    scheduleInit(100)
                }
                )
            }
            )
            __expose(_uM("undo" to undo, "clearCanvas" to clearCanvas, "redraw" to redraw, "exportSignature" to exportSignature))
            return fun(): Any? {
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                val _component_up_slider = resolveEasyComponent("up-slider", GenUniModulesUviewUltraComponentsUpSliderUpSliderClass)
                return _cE("view", _uM("class" to "weapp-tw-border up-signature"), _uA(
                    _cE("view", _uM("class" to "weapp-tw-border up-signature__canvas-wrap", "style" to _nS(canvasWrapStyle.value)), _uA(
                        _cE("view", _uM("ref_key" to "drawAreaRef", "ref" to drawAreaRef, "class" to "weapp-tw-border up-signature__canvas", "onTouchstart" to touchStart, "onTouchmove" to touchMove, "onTouchend" to touchEnd, "onTouchcancel" to touchEnd), null, 544)
                    ), 4),
                    if (isTrue(_ctx.showToolbar)) {
                        _cE("view", _uM("key" to 0, "class" to "weapp-tw-border up-signature__toolbar"), _uA(
                            _cE("view", _uM("class" to "weapp-tw-border up-signature__toolbar-icons"), _uA(
                                _cE("view", _uM("class" to "weapp-tw-border up-signature__toolbar-icon", "onClick" to undo), _uA(
                                    _cV(_component_up_icon, _uM("name" to "arrow-left", "size" to "22", "color" to if (pathCount.value == 0) {
                                        "#ccc"
                                    } else {
                                        "#999"
                                    }), null, 8, _uA(
                                        "color"
                                    ))
                                )),
                                _cE("view", _uM("class" to "weapp-tw-border up-signature__toolbar-icon", "onClick" to clearCanvas), _uA(
                                    _cV(_component_up_icon, _uM("name" to "trash", "size" to "25", "color" to "#999"))
                                )),
                                _cE("view", _uM("class" to "weapp-tw-border up-signature__toolbar-icon", "onClick" to toggleBrushSettings), _uA(
                                    _cV(_component_up_icon, _uM("name" to "edit-pen", "size" to "25", "color" to "#999"))
                                )),
                                _cE("view", _uM("class" to "weapp-tw-border up-signature__toolbar-icon", "onClick" to toggleColorSettings), _uA(
                                    _cV(_component_up_icon, _uM("name" to "grid", "size" to "24", "color" to "#999"))
                                )),
                                _cE("view", _uM("class" to "weapp-tw-border up-signature__toolbar-icon", "onClick" to exportSignature), _uA(
                                    _cV(_component_up_icon, _uM("name" to "checkmark", "size" to "25", "color" to if (isEmpty.value) {
                                        "#ccc"
                                    } else {
                                        "#999"
                                    }), null, 8, _uA(
                                        "color"
                                    ))
                                ))
                            )),
                            if (isTrue(showBrushSettings.value)) {
                                _cE("view", _uM("key" to 0, "class" to "weapp-tw-border up-signature__brush-settings"), _uA(
                                    _cE("view", _uM("class" to "weapp-tw-border up-signature__progress"), _uA(
                                        _cE("text", _uM("class" to "weapp-tw-border up-signature__progress-label"), _tD(penSizeLabel.value) + ":", 1),
                                        _cV(_component_up_slider, _uM("modelValue" to lineWidth.value, "onUpdate:modelValue" to fun(`$event`: Number){
                                            lineWidth.value = `$event`
                                        }, "min" to 1, "max" to 20, "step" to 1, "value-show" to lineWidth.value), null, 8, _uA(
                                            "modelValue",
                                            "onUpdate:modelValue",
                                            "value-show"
                                        ))
                                    ))
                                ))
                            } else {
                                _cC("v-if", true)
                            },
                            if (isTrue(showColorSettings.value)) {
                                _cE("view", _uM("key" to 1, "class" to "weapp-tw-border up-signature__color-settings"), _uA(
                                    _cE("view", _uM("class" to "weapp-tw-border up-signature__color-picker"), _uA(
                                        _cE("text", _uM("class" to "weapp-tw-border up-signature__color-label"), _tD(penColorLabel.value) + ":", 1),
                                        _cE("view", _uM("class" to "weapp-tw-border up-signature__colors"), _uA(
                                            _cE(Fragment, null, RenderHelpers.renderList(colorItems.value, fun(color, index, __index, _cached): Any {
                                                return _cE("view", _uM("key" to index, "class" to _nC(_uA(
                                                    "weapp-tw-border up-signature__color-item",
                                                    if (lineColor.value == color) {
                                                        "up-signature__color-item--active"
                                                    } else {
                                                        ""
                                                    }
                                                )), "style" to _nS(getColorStyle(color)), "onClick" to fun(){
                                                    selectColor(color)
                                                }), null, 14, _uA(
                                                    "onClick"
                                                ))
                                            }), 128)
                                        ))
                                    ))
                                ))
                            } else {
                                _cC("v-if", true)
                            }
                        ))
                    } else {
                        _cC("v-if", true)
                    }
                ))
            }
        }
        var name = "up-signature"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "up-signature" to _pS(_uM("display" to "flex", "flexDirection" to "column")), "up-signature__canvas-wrap" to _pS(_uM("borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1, "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid", "borderTopColor" to "#e0e0e0", "borderRightColor" to "#e0e0e0", "borderBottomColor" to "#e0e0e0", "borderLeftColor" to "#e0e0e0", "borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4, "borderBottomLeftRadius" to 4, "overflow" to "hidden")), "up-signature__canvas" to _pS(_uM("width" to "100%", "height" to "100%")), "up-signature__toolbar" to _pS(_uM("marginTop" to 5, "backgroundColor" to "#ffffff")), "up-signature__toolbar-icons" to _pS(_uM("display" to "flex", "flexDirection" to "row", "justifyContent" to "space-between", "alignItems" to "center", "width" to "100%", "paddingTop" to 1, "paddingRight" to 0, "paddingBottom" to 1, "paddingLeft" to 0, "borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4, "borderBottomLeftRadius" to 4)), "up-signature__toolbar-icon" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "alignItems" to "center", "paddingTop" to 5, "paddingRight" to 0, "paddingBottom" to 5, "paddingLeft" to 0)), "up-signature__brush-settings" to _pS(_uM("marginTop" to 15, "paddingTop" to 1, "paddingRight" to 1, "paddingBottom" to 1, "paddingLeft" to 1, "borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4, "borderBottomLeftRadius" to 4)), "up-signature__color-settings" to _pS(_uM("marginTop" to 15, "paddingTop" to 1, "paddingRight" to 1, "paddingBottom" to 1, "paddingLeft" to 1, "borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4, "borderBottomLeftRadius" to 4)), "up-signature__progress-label" to _pS(_uM("display" to "flex", "marginBottom" to 10, "fontSize" to 14, "color" to "#999999")), "up-signature__color-label" to _pS(_uM("display" to "flex", "marginBottom" to 10, "fontSize" to 14, "color" to "#999999")), "up-signature__colors" to _pS(_uM("display" to "flex", "flexDirection" to "row", "flexWrap" to "wrap")), "up-signature__color-item" to _pS(_uM("width" to 30, "height" to 30, "borderTopLeftRadius" to "50%", "borderTopRightRadius" to "50%", "borderBottomRightRadius" to "50%", "borderBottomLeftRadius" to "50%", "marginRight" to 10, "marginBottom" to 10, "borderTopWidth" to 2, "borderRightWidth" to 2, "borderBottomWidth" to 2, "borderLeftWidth" to 2, "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid", "borderTopColor" to "rgba(0,0,0,0)", "borderRightColor" to "rgba(0,0,0,0)", "borderBottomColor" to "rgba(0,0,0,0)", "borderLeftColor" to "rgba(0,0,0,0)")), "up-signature__color-item--active" to _pS(_uM("borderTopColor" to "#2979ff", "borderRightColor" to "#2979ff", "borderBottomColor" to "#2979ff", "borderLeftColor" to "#2979ff")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("confirm" to null, "error" to null, "change" to null, "clear" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "width" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 300), "height" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 200), "bgColor" to _uM("type" to "String", "default" to "#ffffff"), "color" to _uM("type" to "String", "default" to "#000000"), "thickness" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 3), "showToolbar" to _uM("type" to "Boolean", "default" to true)))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "width",
            "height",
            "bgColor",
            "color",
            "thickness",
            "showToolbar"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
