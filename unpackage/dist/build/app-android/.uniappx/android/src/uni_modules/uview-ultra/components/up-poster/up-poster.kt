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
import io.dcloud.uniapp.extapi.createCanvasContextAsync as uni_createCanvasContextAsync
import io.dcloud.uniapp.extapi.env as uni_env
import io.dcloud.uniapp.extapi.getFileSystemManager as uni_getFileSystemManager
import io.dcloud.uniapp.extapi.getImageInfo as uni_getImageInfo
import io.dcloud.uniapp.extapi.getSystemInfoSync as uni_getSystemInfoSync
import io.dcloud.uniapp.extapi.getWindowInfo as uni_getWindowInfo
open class GenUniModulesUviewUltraComponentsUpPosterUpPoster : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var json: Any by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var generatePoster: () -> UTSPromise<String>
        get() {
            return unref(this.`$exposed`["generatePoster"]) as () -> UTSPromise<String>
        }
        set(value) {
            setRefValue(this.`$exposed`, "generatePoster", value)
        }
    open var exportImage: () -> UTSPromise<UTSJSONObject>
        get() {
            return unref(this.`$exposed`["exportImage"]) as () -> UTSPromise<UTSJSONObject>
        }
        set(value) {
            setRefValue(this.`$exposed`, "exportImage", value)
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpPosterUpPoster, __setupCtx: SetupContext) -> Any? = fun(__props, __setupCtx): Any? {
            val __expose = __setupCtx.expose
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpPosterUpPoster
            val _cache = __ins.renderCache
            fun gen_toObject_fn(value: Any?): UTSJSONObject {
                if (value == null) {
                    return _uO()
                }
                return value as UTSJSONObject
            }
            val toObject = ::gen_toObject_fn
            fun stringValue(value: Any?, fallback: String = ""): String {
                return if (value == null) {
                    fallback
                } else {
                    value.toString()
                }
            }
            fun numberValue(value: Any?, fallback: Number = 0): Number {
                if (UTSAndroid.`typeof`(value) === "number") {
                    return value as Number
                }
                if (value == null) {
                    return fallback
                }
                val text = value.toString()
                if (isTruthy(text.endsWith("rpx"))) {
                    val parsed = parseFloat(text.substring(0, text.length - 3))
                    return if (isNaN(parsed)) {
                        fallback
                    } else {
                        parsed * uni_getWindowInfo().windowWidth / 750
                    }
                }
                if (isTruthy(text.endsWith("px"))) {
                    val parsed = parseFloat(text.substring(0, text.length - 2))
                    return if (isNaN(parsed)) {
                        fallback
                    } else {
                        parsed
                    }
                }
                val parsed = parseFloat(text)
                return if (isNaN(parsed)) {
                    fallback
                } else {
                    parsed
                }
            }
            fun gen_colorValue_fn(value: Any?, fallback: String): String {
                val text = stringValue(value, fallback)
                return if (text.length > 0) {
                    text
                } else {
                    fallback
                }
            }
            val colorValue = ::gen_colorValue_fn
            fun gen_splitGradientArgs_fn(value: String): UTSArray<String> {
                val result = _uA<String>()
                var depth: Number = 0
                var start: Number = 0
                run {
                    var i: Number = 0
                    while(i < value.length){
                        val char = value.substring(i, i + 1)
                        if (char == "(") {
                            depth++
                        } else if (char == ")") {
                            depth--
                        } else if (char == "," && depth == 0) {
                            result.push(value.substring(start, i).trim())
                            start = i + 1
                        }
                        i++
                    }
                }
                val tail = value.substring(start).trim()
                if (tail.length > 0) {
                    result.push(tail)
                }
                return result
            }
            val splitGradientArgs = ::gen_splitGradientArgs_fn
            fun gen_gradientBody_fn(value: String): String {
                val start = value.indexOf("(")
                val end = value.lastIndexOf(")")
                if (start < 0 || end <= start) {
                    return ""
                }
                return value.substring(start + 1, end)
            }
            val gradientBody = ::gen_gradientBody_fn
            fun gen_isGradientDirection_fn(value: String): Boolean {
                return value.endsWith("deg") || value.startsWith("to ")
            }
            val isGradientDirection = ::gen_isGradientDirection_fn
            fun gen_parseGradientStop_fn(value: String, index: Number, total: Number): GradientStop {
                val parts = value.split(" ")
                val color = if (parts.length > 0) {
                    parts[0].trim()
                } else {
                    "#ffffff"
                }
                var offset = if (total <= 1) {
                    0
                } else {
                    index / (total - 1)
                }
                run {
                    var i: Number = 1
                    while(i < parts.length){
                        val part = parts[i].trim()
                        if (part.endsWith("%")) {
                            val parsed = parseFloat(part.substring(0, part.length - 1))
                            if (!isNaN(parsed)) {
                                offset = Math.max(0, Math.min(1, parsed / 100))
                            }
                        }
                        i++
                    }
                }
                return GradientStop(color = if (color.length > 0) {
                    color
                } else {
                    "#ffffff"
                }
                , offset = offset)
            }
            val parseGradientStop = ::gen_parseGradientStop_fn
            fun gen_parseGradientStops_fn(background: String): UTSArray<GradientStop> {
                val args = splitGradientArgs(gradientBody(background))
                val firstColorIndex = if (args.length > 0 && isGradientDirection(args[0])) {
                    1
                } else {
                    0
                }
                val total = args.length - firstColorIndex
                val stops = _uA<GradientStop>()
                run {
                    var i = firstColorIndex
                    while(i < args.length){
                        stops.push(parseGradientStop(args[i], i - firstColorIndex, total))
                        i++
                    }
                }
                if (stops.length == 0) {
                    stops.push(GradientStop(color = "#ffffff", offset = 0))
                    stops.push(GradientStop(color = "#ffffff", offset = 1))
                } else if (stops.length == 1) {
                    stops.push(GradientStop(color = stops[0].color, offset = 1))
                }
                return stops
            }
            val parseGradientStops = ::gen_parseGradientStops_fn
            fun gen_gradientAngle_fn(background: String): Number {
                val args = splitGradientArgs(gradientBody(background))
                if (args.length == 0) {
                    return 135
                }
                val direction = args[0]
                if (direction.endsWith("deg")) {
                    val parsed = parseFloat(direction.substring(0, direction.length - 3))
                    return if (isNaN(parsed)) {
                        135
                    } else {
                        parsed
                    }
                }
                if (direction == "to right") {
                    return 90
                }
                if (direction == "to left") {
                    return 270
                }
                if (direction == "to bottom") {
                    return 180
                }
                if (direction == "to top") {
                    return 0
                }
                if (direction == "to right bottom" || direction == "to bottom right") {
                    return 135
                }
                if (direction == "to left bottom" || direction == "to bottom left") {
                    return 225
                }
                if (direction == "to right top" || direction == "to top right") {
                    return 45
                }
                if (direction == "to left top" || direction == "to top left") {
                    return 315
                }
                return 135
            }
            val gradientAngle = ::gen_gradientAngle_fn
            fun gen_createItem_fn(raw: Any?): PosterItem {
                val obj = toObject(raw)
                return PosterItem(type = stringValue(obj["type"]), text = stringValue(obj["text"]), src = stringValue(obj["src"]), css = toObject(obj["css"]))
            }
            val createItem = ::gen_createItem_fn
            fun gen_makeId_fn(): String {
                return "up-poster-canvas-" + Date.now().toString(10)
            }
            val makeId = ::gen_makeId_fn
            fun gen_getPixelRatio_fn(): Number {
                val info = uni_getSystemInfoSync()
                if (info.pixelRatio > 0) {
                    return info.pixelRatio
                }
                return 1
            }
            val getPixelRatio = ::gen_getPixelRatio_fn
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val instance = getCurrentInstance()
            val canvasId = ref<String>(makeId())
            val showCanvas = ref<Boolean>(true)
            val canvasWidth = ref<Number>(375)
            val canvasHeight = ref<Number>(557)
            var canvasContext: CanvasContext? = null
            var ctx: CanvasRenderingContext2D? = null
            val canvasStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                return _uO("width" to (canvasWidth.value.toString(10) + "px"), "height" to (canvasHeight.value.toString(10) + "px"))
            }
            )
            fun gen_getJson_fn(): UTSJSONObject {
                return toObject(props.json)
            }
            val getJson = ::gen_getJson_fn
            fun gen_getPosterCss_fn(): UTSJSONObject {
                return toObject(getJson()["css"])
            }
            val getPosterCss = ::gen_getPosterCss_fn
            fun gen_getViews_fn(): UTSArray<Any> {
                val views = getJson()["views"]
                if (views == null) {
                    return _uA<Any>()
                }
                return views as UTSArray<Any>
            }
            val getViews = ::gen_getViews_fn
            fun gen_prepareSize_fn(): Unit {
                val css = getPosterCss()
                canvasWidth.value = numberValue(css["width"], 375)
                canvasHeight.value = numberValue(css["height"], 557)
            }
            val prepareSize = ::gen_prepareSize_fn
            fun gen_initCanvas_fn(): UTSPromise<Unit> {
                return UTSPromise(fun(resolve, reject){
                    uni_createCanvasContextAsync(CreateCanvasContextAsyncOptions(id = canvasId.value as String, component = instance?.proxy, success = fun(context: CanvasContext){
                        canvasContext = context
                        val c2d = context.getContext("2d")
                        if (c2d == null) {
                            reject(UTSError("Canvas context is not ready"))
                            return
                        }
                        val pixelRatio = getPixelRatio()
                        val canvas = c2d.canvas
                        canvas.width = canvasWidth.value * pixelRatio
                        canvas.height = canvasHeight.value * pixelRatio
                        c2d.scale(pixelRatio, pixelRatio)
                        ctx = c2d
                        resolve(Unit)
                    }
                    , fail = fun(err: UniError){
                        reject(err)
                    }
                    ))
                }
                )
            }
            val initCanvas = ::gen_initCanvas_fn
            fun gen_fillRoundRect_fn(x: Number, y: Number, width: Number, height: Number, radius: Number): Unit {
                val context = ctx
                if (context == null) {
                    return
                }
                if (radius <= 0) {
                    context.fillRect(x, y, width, height)
                    return
                }
                val r = Math.min(radius, Math.min(width, height) / 2)
                context.beginPath()
                context.moveTo(x + r, y)
                context.lineTo(x + width - r, y)
                context.quadraticCurveTo(x + width, y, x + width, y + r)
                context.lineTo(x + width, y + height - r)
                context.quadraticCurveTo(x + width, y + height, x + width - r, y + height)
                context.lineTo(x + r, y + height)
                context.quadraticCurveTo(x, y + height, x, y + height - r)
                context.lineTo(x, y + r)
                context.quadraticCurveTo(x, y, x + r, y)
                context.closePath()
                context.fill()
            }
            val fillRoundRect = ::gen_fillRoundRect_fn
            fun gen_clipRadiusMask_fn(x: Number, y: Number, width: Number, height: Number, radius: Number): Unit {
                val context = ctx
                if (context == null) {
                    return
                }
                context.save()
                context.globalCompositeOperation = "destination-in"
                context.fillStyle = "#000000"
                fillRoundRect(x, y, width, height, radius)
                context.restore()
                context.globalCompositeOperation = "source-over"
            }
            val clipRadiusMask = ::gen_clipRadiusMask_fn
            fun gen_gradientColorAt_fn(stops: UTSArray<GradientStop>, progress: Number, fallback: String): String {
                if (stops.length == 0) {
                    return fallback
                }
                var current = stops[0]
                run {
                    var i: Number = 1
                    while(i < stops.length){
                        if (progress <= stops[i].offset) {
                            val next = stops[i]
                            val span = next.offset - current.offset
                            val ratio = if (span <= 0) {
                                0
                            } else {
                                (progress - current.offset) / span
                            }
                            return if (ratio < 0.5) {
                                current.color
                            } else {
                                next.color
                            }
                        }
                        current = stops[i]
                        i++
                    }
                }
                return current.color
            }
            val gradientColorAt = ::gen_gradientColorAt_fn
            fun gen_fillSteppedLinearGradient_fn(background: String, x: Number, y: Number, width: Number, height: Number, radius: Number, fallback: String): Unit {
                val context = ctx
                if (context == null) {
                    return
                }
                val stops = parseGradientStops(background)
                val angle = gradientAngle(background) % 360
                val horizontal = angle == 90 || angle == 270
                val steps = Math.max(1, Math.floor(if (horizontal) {
                    width
                } else {
                    height
                }
                ))
                run {
                    var i: Number = 0
                    while(i < steps){
                        val rawProgress = if (steps <= 1) {
                            0
                        } else {
                            i / (steps - 1)
                        }
                        val progress = if (angle == 270 || angle == 0) {
                            1 - rawProgress
                        } else {
                            rawProgress
                        }
                        context.fillStyle = gradientColorAt(stops, progress, fallback)
                        if (horizontal) {
                            context.fillRect(x + i, y, 1.5, height)
                        } else {
                            context.fillRect(x, y + i, width, 1.5)
                        }
                        i++
                    }
                }
                if (radius > 0) {
                    clipRadiusMask(x, y, width, height, radius)
                }
            }
            val fillSteppedLinearGradient = ::gen_fillSteppedLinearGradient_fn
            fun gen_fillSteppedRadialGradient_fn(background: String, x: Number, y: Number, width: Number, height: Number, radius: Number, fallback: String): Unit {
                val context = ctx
                if (context == null) {
                    return
                }
                val stops = parseGradientStops(background)
                val centerX = x + width / 2
                val centerY = y + height / 2
                val maxRadius = Math.max(width, height) / 2
                val steps = Math.max(1, Math.floor(maxRadius))
                run {
                    var i = steps
                    while(i >= 0){
                        val progress = if (steps <= 0) {
                            0
                        } else {
                            i / steps
                        }
                        context.fillStyle = gradientColorAt(stops, progress, fallback)
                        context.beginPath()
                        context.arc(centerX, centerY, i, 0, Math.PI * 2)
                        context.closePath()
                        context.fill()
                        i--
                    }
                }
                if (radius > 0) {
                    clipRadiusMask(x, y, width, height, radius)
                }
            }
            val fillSteppedRadialGradient = ::gen_fillSteppedRadialGradient_fn
            fun gen_fillCanvasGradient_fn(background: String, x: Number, y: Number, width: Number, height: Number, radius: Number): Boolean {
                val context = ctx
                if (context == null) {
                    return false
                }
                val stops = parseGradientStops(background)
                if (background.indexOf("radial-gradient") >= 0) {
                    val centerX = x + width / 2
                    val centerY = y + height / 2
                    val maxRadius = Math.max(width, height) / 2
                    val gradient = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius)
                    run {
                        var i: Number = 0
                        while(i < stops.length){
                            gradient.addColorStop(stops[i].offset, stops[i].color)
                            i++
                        }
                    }
                    context.fillStyle = gradient
                    fillRoundRect(x, y, width, height, radius)
                    return true
                }
                val angle = gradientAngle(background) % 360
                var startX = x
                var startY = y
                var endX = x + width
                var endY = y + height
                if (angle == 0) {
                    startX = x
                    startY = y + height
                    endX = x
                    endY = y
                } else if (angle == 90) {
                    startX = x
                    startY = y
                    endX = x + width
                    endY = y
                } else if (angle == 180) {
                    startX = x
                    startY = y
                    endX = x
                    endY = y + height
                } else if (angle == 270) {
                    startX = x + width
                    startY = y
                    endX = x
                    endY = y
                }
                val gradient = context.createLinearGradient(startX, startY, endX, endY)
                run {
                    var i: Number = 0
                    while(i < stops.length){
                        gradient.addColorStop(stops[i].offset, stops[i].color)
                        i++
                    }
                }
                context.fillStyle = gradient
                fillRoundRect(x, y, width, height, radius)
                return true
            }
            val fillCanvasGradient = ::gen_fillCanvasGradient_fn
            fun gen_fillGradient_fn(background: String, x: Number, y: Number, width: Number, height: Number, radius: Number, fallback: String): Unit {
                if (fillCanvasGradient(background, x, y, width, height, radius)) {
                    return
                }
                if (background.indexOf("radial-gradient") >= 0) {
                    fillSteppedRadialGradient(background, x, y, width, height, radius, fallback)
                    return
                }
                fillSteppedLinearGradient(background, x, y, width, height, radius, fallback)
            }
            val fillGradient = ::gen_fillGradient_fn
            fun gen_fillBackground_fn(value: Any?, x: Number, y: Number, width: Number, height: Number, radius: Number, fallback: String): Unit {
                val context = ctx
                if (context == null) {
                    return
                }
                val background = colorValue(value, fallback)
                if (background.indexOf("gradient") >= 0) {
                    fillGradient(background, x, y, width, height, radius, fallback)
                    return
                }
                context.fillStyle = background
                fillRoundRect(x, y, width, height, radius)
            }
            val fillBackground = ::gen_fillBackground_fn
            fun gen_drawView_fn(item: PosterItem): Unit {
                val context = ctx
                if (context == null) {
                    return
                }
                val css = item.css
                val x = numberValue(css["left"], 0)
                val y = numberValue(css["top"], 0)
                val width = numberValue(css["width"], 0)
                val height = numberValue(css["height"], 0)
                fillBackground(css["background"], x, y, width, height, numberValue(css["radius"], 0), "#ffffff")
            }
            val drawView = ::gen_drawView_fn
            fun gen_wrapText_fn(text: String, maxWidth: Number, maxLines: Number): UTSArray<String> {
                val context = ctx
                val lines = _uA<String>()
                if (context == null || text.length == 0) {
                    return lines
                }
                var current = ""
                run {
                    var i: Number = 0
                    while(i < text.length){
                        val next = current + text.substring(i, i + 1)
                        if (context.measureText(next).width > maxWidth && current.length > 0) {
                            lines.push(current)
                            current = text.substring(i, i + 1)
                            if (lines.length >= maxLines) {
                                break
                            }
                        } else {
                            current = next
                        }
                        i++
                    }
                }
                if (lines.length < maxLines && current.length > 0) {
                    lines.push(current)
                }
                if (lines.length == maxLines && text.length > lines.join("").length) {
                    var last = lines[maxLines - 1]
                    while(last.length > 0 && context.measureText(last + "...").width > maxWidth){
                        last = last.substring(0, last.length - 1)
                    }
                    lines[maxLines - 1] = last + "..."
                }
                return lines
            }
            val wrapText = ::gen_wrapText_fn
            fun gen_drawText_fn(item: PosterItem): Unit {
                val context = ctx
                if (context == null) {
                    return
                }
                val css = item.css
                val x = numberValue(css["left"], 0)
                val y = numberValue(css["top"], 0)
                val width = numberValue(css["width"], canvasWidth.value - x)
                val fontSize = numberValue(css["fontSize"], 14)
                val lineHeight = numberValue(css["lineHeight"], fontSize + 6)
                val lineClamp = numberValue(css["lineClamp"], 1)
                context.fillStyle = colorValue(css["color"], "#333333")
                context.font = if (stringValue(css["fontWeight"]) == "bold") {
                    "bold " + fontSize.toString(10) + "px sans-serif"
                } else {
                    fontSize.toString(10) + "px sans-serif"
                }
                val lines = wrapText(item.text, width, lineClamp)
                run {
                    var i: Number = 0
                    while(i < lines.length){
                        context.fillText(lines[i], x, y + fontSize + i * lineHeight)
                        i++
                    }
                }
            }
            val drawText = ::gen_drawText_fn
            fun gen_drawImageFallback_fn(x: Number, y: Number, width: Number, height: Number, radius: Number): Unit {
                val context = ctx
                if (context == null) {
                    return
                }
                context.fillStyle = "#eef2f7"
                fillRoundRect(x, y, width, height, radius)
            }
            val drawImageFallback = ::gen_drawImageFallback_fn
            fun gen_drawImageBox_fn(item: PosterItem): UTSPromise<Unit> {
                return UTSPromise(fun(resolve, _reject){
                    val context = ctx
                    if (context == null) {
                        resolve(Unit)
                        return
                    }
                    val css = item.css
                    val x = numberValue(css["left"], 0)
                    val y = numberValue(css["top"], 0)
                    val width = numberValue(css["width"], 0)
                    val height = numberValue(css["height"], 0)
                    uni_getImageInfo(GetImageInfoOptions(src = item.src, success = fun(res: GetImageInfoSuccess){
                        val canvas = canvasContext
                        if (canvas == null) {
                            drawImageFallback(x, y, width, height, numberValue(css["radius"], 0))
                            resolve(Unit)
                            return
                        }
                        val image = canvas.createImage()
                        image.onload = fun(){
                            context.drawImage(image as UniImageElementImpl, x, y, width, height)
                            resolve(Unit)
                        }
                        image.src = res.path
                    }
                    , fail = fun(_){
                        drawImageFallback(x, y, width, height, numberValue(css["radius"], 0))
                        resolve(Unit)
                    }
                    ))
                }
                )
            }
            val drawImageBox = ::gen_drawImageBox_fn
            fun gen_drawQrCode_fn(item: PosterItem): Unit {
                val context = ctx
                if (context == null) {
                    return
                }
                val css = item.css
                val x = numberValue(css["left"], 0)
                val y = numberValue(css["top"], 0)
                val width = numberValue(css["width"], 0)
                val height = numberValue(css["height"], width)
                val kVal = if (item.text.length > 0) {
                    item.text
                } else {
                    item.src
                }
                if (kVal.length == 0 || width <= 0 || height <= 0) {
                    drawImageFallback(x, y, width, height, numberValue(css["radius"], 0))
                    return
                }
                val foreground = colorValue(css["foreground"], "#000000")
                val background = colorValue(css["background"], "#ffffff")
                val pdground = colorValue(css["pdground"], foreground)
                val level = numberValue(css["lv"], 3)
                val count = getQrRenderCount(kVal, level)
                val cells = createQrCells(kVal, foreground, background, pdground, level)
                val cellSize = Math.min(width, height) / count
                context.fillStyle = background
                context.fillRect(x, y, width, height)
                run {
                    var row: Number = 0
                    while(row < count){
                        run {
                            var col: Number = 0
                            while(col < count){
                                val index = row * count + col
                                if (index >= cells.length) {
                                    col++
                                    continue
                                }
                                val cell = cells[index]
                                if (!cell.getBoolean("dark", false)) {
                                    col++
                                    continue
                                }
                                context.fillStyle = cell.getString("color", foreground)
                                context.fillRect(x + col * cellSize, y + row * cellSize, cellSize + 0.5, cellSize + 0.5)
                                col++
                            }
                        }
                        row++
                    }
                }
            }
            val drawQrCode = ::gen_drawQrCode_fn
            fun gen_drawItem_fn(item: PosterItem): UTSPromise<Unit> {
                return UTSPromise(fun(resolve, _reject){
                    if (item.type == "view") {
                        drawView(item)
                        resolve(Unit)
                    } else if (item.type == "text") {
                        drawText(item)
                        resolve(Unit)
                    } else if (item.type == "image") {
                        drawImageBox(item).then(fun(){
                            resolve(Unit)
                        })
                    } else if (item.type == "qrcode") {
                        drawQrCode(item)
                        resolve(Unit)
                    } else {
                        resolve(Unit)
                    }
                }
                )
            }
            val drawItem = ::gen_drawItem_fn
            fun gen_drawItems_fn(views: UTSArray<Any>, index: Number): UTSPromise<Unit> {
                return UTSPromise(fun(resolve, _reject){
                    if (index >= views.length) {
                        resolve(Unit)
                        return
                    }
                    drawItem(createItem(views[index])).then(fun(){
                        gen_drawItems_fn(views, index + 1).then(fun(){
                            resolve(Unit)
                        }
                        )
                    }
                    )
                }
                )
            }
            val drawItems = ::gen_drawItems_fn
            fun gen_drawPosterSync_fn(): UTSPromise<Unit> {
                return UTSPromise(fun(resolve, _reject){
                    val context = ctx
                    if (context == null) {
                        resolve(Unit)
                        return
                    }
                    val css = getPosterCss()
                    context.clearRect(0, 0, canvasWidth.value, canvasHeight.value)
                    fillBackground(css["background"], 0, 0, canvasWidth.value, canvasHeight.value, 0, "#ffffff")
                    val views = getViews()
                    drawItems(views, 0).then(fun(){
                        resolve(Unit)
                    }
                    )
                }
                )
            }
            val drawPosterSync = ::gen_drawPosterSync_fn
            fun gen_drawPoster_fn(): UTSPromise<Unit> {
                return UTSPromise(fun(resolve, _reject){
                    drawPosterSync().then(fun(){
                        resolve(Unit)
                    }
                    )
                }
                )
            }
            val drawPoster = ::gen_drawPoster_fn
            fun gen_generatePoster_fn(): UTSPromise<String> {
                return UTSPromise(fun(resolve, reject){
                    prepareSize()
                    showCanvas.value = true
                    nextTick(fun(){
                        initCanvas().then(fun(){
                            drawPoster().then(fun(){
                                if (canvasContext == null) {
                                    reject(UTSError("Canvas is not ready"))
                                    return
                                }
                                val dataUrl = canvasContext!!.toDataURL("image/png", 1)
                                val base64 = if (dataUrl.indexOf(",") >= 0) {
                                    dataUrl.substring(dataUrl.indexOf(",") + 1)
                                } else {
                                    dataUrl
                                }
                                val fileSystemManager = uni_getFileSystemManager()
                                val filePath = "" + uni_env.USER_DATA_PATH + "/up-poster-" + Date.now() + ".png"
                                fileSystemManager.writeFile(WriteFileOptions(filePath = filePath, encoding = "base64", data = base64, success = fun(_res){
                                    resolve(filePath)
                                }
                                , fail = fun(err: Any){
                                    reject(UTSError("write poster file failed: " + JSON.stringify(err)))
                                }
                                ))
                            }
                            )
                        }
                        ).`catch`(fun(err: Any?){
                            reject(err)
                        }
                        )
                    }
                    )
                }
                )
            }
            val generatePoster = ::gen_generatePoster_fn
            fun gen_exportImage_fn(): UTSPromise<UTSJSONObject> {
                return UTSPromise(fun(resolve, reject){
                    generatePoster().then(fun(path: String){
                        val result: UTSJSONObject = _uO("width" to canvasWidth.value, "height" to canvasHeight.value, "path" to path)
                        emit("export", result)
                        resolve(result)
                    }
                    ).`catch`(fun(err: Any?){
                        emit("error", err)
                        reject(err)
                    }
                    )
                }
                )
            }
            val exportImage = ::gen_exportImage_fn
            __expose(_uM("generatePoster" to generatePoster, "exportImage" to exportImage))
            return fun(): Any? {
                return _cE("view", _uM("class" to "weapp-tw-border up-poster"), _uA(
                    if (isTrue(showCanvas.value)) {
                        _cE("canvas", _uM("key" to 0, "class" to "up-poster__canvas", "id" to canvasId.value, "canvas-id" to canvasId.value, "style" to _nS(canvasStyle.value)), null, 12, _uA(
                            "id",
                            "canvas-id"
                        ))
                    } else {
                        _cC("v-if", true)
                    }
                ))
            }
        }
        var name = "up-poster"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "up-poster" to _pS(_uM("position" to "fixed", "left" to -9999, "top" to -9999, "width" to 1, "height" to 1, "overflow" to "hidden")), "up-poster__canvas" to _pS(_uM("display" to "flex")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("export" to null, "error" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "json" to _uM("default" to fun(): UTSJSONObject {
            return (_uO())
        }
        )))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "json"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
