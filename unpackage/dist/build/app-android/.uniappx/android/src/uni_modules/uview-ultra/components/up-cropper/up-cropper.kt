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
import io.dcloud.uniapp.extapi.chooseImage as uni_chooseImage
import io.dcloud.uniapp.extapi.createCanvasContextAsync as uni_createCanvasContextAsync
import io.dcloud.uniapp.extapi.getImageInfo as uni_getImageInfo
import io.dcloud.uniapp.extapi.getSystemInfoSync as uni_getSystemInfoSync
import io.dcloud.uniapp.extapi.getWindowInfo as uni_getWindowInfo
open class GenUniModulesUviewUltraComponentsUpCropperUpCropper : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var minScale: Any by `$props`
    open var maxScale: Any by `$props`
    open var canScale: Boolean by `$props`
    open var canRotate: Boolean by `$props`
    open var lockWidth: Any by `$props`
    open var lockHeight: Any by `$props`
    open var stretch: String by `$props`
    open var lock: String by `$props`
    open var noTab: Boolean by `$props`
    open var inner: Boolean by `$props`
    open var quality: Any by `$props`
    open var canChangeSize: Boolean by `$props`
    open var areaWidth: String by `$props`
    open var areaHeight: String by `$props`
    open var exportWidth: String by `$props`
    open var exportHeight: String by `$props`
    open var fillColor: String by `$props`
    open var index: Any by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open fun chooseImage(index: Any? = 0, params: UTSJSONObject = _uO(), data: Any? = null): Unit {
        return callKotlinFunction(this.`$exposed`["chooseImage"]!!, _uA(
            index,
            params,
            data
        )) as Unit
    }
    open var select: () -> Unit
        get() {
            return unref(this.`$exposed`["select"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "select", value)
        }
    open var loadImage: (path: String) -> Unit
        get() {
            return unref(this.`$exposed`["loadImage"]) as (path: String) -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "loadImage", value)
        }
    open var rotate: () -> Unit
        get() {
            return unref(this.`$exposed`["rotate"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "rotate", value)
        }
    open var preview: () -> Unit
        get() {
            return unref(this.`$exposed`["preview"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "preview", value)
        }
    open var exitPreview: () -> Unit
        get() {
            return unref(this.`$exposed`["exitPreview"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "exitPreview", value)
        }
    open var confirm: () -> Unit
        get() {
            return unref(this.`$exposed`["confirm"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "confirm", value)
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpCropperUpCropper, __setupCtx: SetupContext) -> Any? = fun(__props, __setupCtx): Any? {
            val __expose = __setupCtx.expose
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpCropperUpCropper
            val _cache = __ins.renderCache
            fun gen_makeId_fn(prefix: String): String {
                return prefix + Date.now().toString(10)
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
            fun gen_toObject_fn(value: Any?): UTSJSONObject {
                return if (value == null) {
                    (_uO())
                } else {
                    value as UTSJSONObject
                }
            }
            val toObject = ::gen_toObject_fn
            fun normalizeString(value: Any?, fallback: String = ""): String {
                return if (value == null) {
                    fallback
                } else {
                    value.toString()
                }
            }
            fun gen_rpxToPx_fn(value: Any?, fallback: Number): Number {
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
            val rpxToPx = ::gen_rpxToPx_fn
            fun numberValue(value: Any?, fallback: Number = 0): Number {
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
            fun gen_touchPoint_fn(e: UniTouchEvent): CropTouch {
                var x: Number = 0
                var y: Number = 0
                if (e.touches.length > 0) {
                    x = e.touches[0].pageX
                    y = e.touches[0].pageY
                } else if (e.changedTouches.length > 0) {
                    x = e.changedTouches[0].pageX
                    y = e.changedTouches[0].pageY
                }
                return CropTouch(x = x, y = y)
            }
            val touchPoint = ::gen_touchPoint_fn
            fun gen_touchAt_fn(e: UniTouchEvent, index: Number): CropTouch? {
                if (e.touches.length > index) {
                    return CropTouch(x = e.touches[index].pageX, y = e.touches[index].pageY)
                }
                return null
            }
            val touchAt = ::gen_touchAt_fn
            fun gen_distanceBetween_fn(a: CropTouch, b: CropTouch): Number {
                val x = a.x - b.x
                val y = a.y - b.y
                return Math.sqrt(x * x + y * y)
            }
            val distanceBetween = ::gen_distanceBetween_fn
            fun gen_clamp_fn(value: Number, min: Number, max: Number): Number {
                if (value < min) {
                    return min
                }
                if (value > max) {
                    return max
                }
                return value
            }
            val clamp = ::gen_clamp_fn
            val props = __props
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val instance = getCurrentInstance()
            fun gen_resolveFillColor_fn(): String {
                if (props.fillColor == "transparent") {
                    return "rgba(0,0,0,0)"
                }
                return props.fillColor
            }
            val resolveFillColor = ::gen_resolveFillColor_fn
            val canvasId = ref<String>(makeId("up-cropper-"))
            val exportCanvasId = ref<String>(makeId("up-cropper-export-"))
            var canvasContext: CanvasContext? = null
            var exportCanvasContext: CanvasContext? = null
            var ctx: CanvasRenderingContext2D? = null
            var exportCtx: CanvasRenderingContext2D? = null
            var imageElement: Any? = null
            val imagePath = ref<String>("")
            val imageWidth = ref<Number>(0)
            val imageHeight = ref<Number>(0)
            val visible = ref<Boolean>(false)
            val canvasWidth = ref<Number>(uni_getWindowInfo().windowWidth)
            val canvasHeight = ref<Number>(uni_getWindowInfo().windowHeight - 70)
            val cropWidth = ref<Number>(rpxToPx(props.areaWidth, 300))
            val cropHeight = ref<Number>(rpxToPx(props.areaHeight, 300))
            val outputWidth = ref<Number>(rpxToPx(props.exportWidth, 260))
            val outputHeight = ref<Number>(rpxToPx(props.exportHeight, 260))
            val imageX = ref<Number>(0)
            val imageY = ref<Number>(0)
            val baseDisplayWidth = ref<Number>(0)
            val baseDisplayHeight = ref<Number>(0)
            val displayWidth = ref<Number>(0)
            val displayHeight = ref<Number>(0)
            val scaleValue = ref<Number>(1)
            val minScaleValue = ref<Number>(numberValue(props.minScale, 0.3))
            val maxScaleValue = ref<Number>(numberValue(props.maxScale, 4))
            val rotateDeg = ref<Number>(0)
            val canScaleLocal = ref<Boolean>(props.canScale)
            val canRotateLocal = ref<Boolean>(props.canRotate && !props.inner)
            val canChangeSizeLocal = ref<Boolean>(props.canChangeSize)
            val lockMode = ref<String>(normalizeString(props.lock))
            val stretchMode = ref<String>(normalizeString(props.stretch))
            val innerMode = ref<Boolean>(props.inner)
            var returnData: Any? = null
            var lastOptions: UTSJSONObject = _uO()
            var activeTouch: CropTouch? = null
            var startPinchDistance: Number = 0
            var startScaleValue: Number = 1
            var resizeHandle: String = ""
            val previewing = ref<Boolean>(false)
            val currentIndex = ref<Number>(0)
            val canvasStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                return _uO("width" to (canvasWidth.value.toString(10) + "px"), "height" to (canvasHeight.value.toString(10) + "px"))
            }
            )
            val exportCanvasStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                return _uO("width" to (outputWidth.value.toString(10) + "px"), "height" to (outputHeight.value.toString(10) + "px"))
            }
            )
            val cropLeft = computed<Number>(fun(): Number {
                return (numberValue(canvasWidth.value, 0) - numberValue(cropWidth.value, 0)) / 2
            }
            )
            val cropTop = computed<Number>(fun(): Number {
                return (numberValue(canvasHeight.value, 0) - numberValue(cropHeight.value, 0)) / 2
            }
            )
            val showRotateButton = computed<Boolean>(fun(): Boolean {
                return canRotateLocal.value
            }
            )
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
                        uni_createCanvasContextAsync(CreateCanvasContextAsyncOptions(id = exportCanvasId.value as String, component = instance?.proxy, success = fun(exportContext: CanvasContext){
                            exportCanvasContext = exportContext
                            val export2d = exportContext.getContext("2d")
                            if (export2d == null) {
                                reject(UTSError("Export canvas context is not ready"))
                                return
                            }
                            val exportCanvas = export2d.canvas
                            exportCanvas.width = outputWidth.value * pixelRatio
                            exportCanvas.height = outputHeight.value * pixelRatio
                            export2d.scale(pixelRatio, pixelRatio)
                            exportCtx = export2d
                            resolve(Unit)
                        }
                        , fail = fun(err: UniError){
                            reject(err)
                        }
                        ))
                    }
                    , fail = fun(err: UniError){
                        reject(err)
                    }
                    ))
                }
                )
            }
            val initCanvas = ::gen_initCanvas_fn
            fun gen_keepImageInCrop_fn(): Unit {
                val cropL = cropLeft.value
                val cropT = cropTop.value
                val cropW = numberValue(cropWidth.value, 0)
                val cropH = numberValue(cropHeight.value, 0)
                val displayW = numberValue(displayWidth.value, 0)
                val displayH = numberValue(displayHeight.value, 0)
                if (displayW <= cropW) {
                    imageX.value = cropL + (cropW - displayW) / 2
                } else {
                    if (numberValue(imageX.value, 0) > cropL) {
                        imageX.value = cropL
                    }
                    if (numberValue(imageX.value, 0) + displayW < cropL + cropW) {
                        imageX.value = cropL + cropW - displayW
                    }
                }
                if (displayH <= cropH) {
                    imageY.value = cropT + (cropH - displayH) / 2
                } else {
                    if (numberValue(imageY.value, 0) > cropT) {
                        imageY.value = cropT
                    }
                    if (numberValue(imageY.value, 0) + displayH < cropT + cropH) {
                        imageY.value = cropT + cropH - displayH
                    }
                }
            }
            val keepImageInCrop = ::gen_keepImageInCrop_fn
            fun gen_fitImage_fn(): Unit {
                val cropW = numberValue(cropWidth.value, 300)
                val cropH = numberValue(cropHeight.value, 300)
                val imgW = Math.max(1, numberValue(imageWidth.value, 1))
                val imgH = Math.max(1, numberValue(imageHeight.value, 1))
                var scale = Math.max(cropW / imgW, cropH / imgH)
                val imageRadio = imgW / imgH
                val mode = stretchMode.value
                if (mode == "x") {
                    scale = cropW / imgW
                } else if (mode == "y") {
                    scale = cropH / imgH
                } else if (mode == "long") {
                    scale = if (imageRadio > 1) {
                        cropW / imgW
                    } else {
                        cropH / imgH
                    }
                } else if (mode == "short") {
                    scale = if (imageRadio > 1) {
                        cropH / imgH
                    } else {
                        cropW / imgW
                    }
                }
                var displayW = imgW * scale
                var displayH = imgH * scale
                if (innerMode.value) {
                    if (displayW < cropW) {
                        displayW = cropW
                        displayH = displayW / imageRadio
                    }
                    if (displayH < cropH) {
                        displayH = cropH
                        displayW = displayH * imageRadio
                    }
                }
                baseDisplayWidth.value = displayW
                baseDisplayHeight.value = displayH
                displayWidth.value = displayW
                displayHeight.value = displayH
                scaleValue.value = 1
                rotateDeg.value = 0
                imageX.value = cropLeft.value + (cropW - displayW) / 2
                imageY.value = cropTop.value + (cropH - displayH) / 2
                keepImageInCrop()
                emit("avtinit")
            }
            val fitImage = ::gen_fitImage_fn
            fun gen_drawHandle_fn(context: CanvasRenderingContext2D, x: Number, y: Number, size: Number): Unit {
                context.fillRect(x - size / 2, y - size / 2, size, size)
                context.strokeRect(x - size / 2, y - size / 2, size, size)
            }
            val drawHandle = ::gen_drawHandle_fn
            fun gen_drawResizeHandles_fn(context: CanvasRenderingContext2D, left: Number, top: Number, width: Number, height: Number): Unit {
                val size: Number = 12
                context.fillStyle = "#ffffff"
                context.strokeStyle = "#d14343"
                context.lineWidth = 1
                drawHandle(context, left, top, size)
                drawHandle(context, left + width, top, size)
                drawHandle(context, left, top + height, size)
                drawHandle(context, left + width, top + height, size)
            }
            val drawResizeHandles = ::gen_drawResizeHandles_fn
            fun gen_draw_fn(): Unit {
                val context = ctx
                val image = imageElement
                if (context == null || image == null) {
                    return
                }
                val canvasW = numberValue(canvasWidth.value, 0)
                val canvasH = numberValue(canvasHeight.value, 0)
                val cropL = cropLeft.value
                val cropT = cropTop.value
                val cropW = numberValue(cropWidth.value, 0)
                val cropH = numberValue(cropHeight.value, 0)
                val imgX = numberValue(imageX.value, 0)
                val imgY = numberValue(imageY.value, 0)
                val displayW = numberValue(displayWidth.value, 0)
                val displayH = numberValue(displayHeight.value, 0)
                context.clearRect(0, 0, canvasW, canvasH)
                context.fillStyle = "rgba(0,0,0,0.72)"
                context.fillRect(0, 0, canvasW, canvasH)
                context.save()
                context.beginPath()
                context.rect(cropL, cropT, cropW, cropH)
                context.clip()
                context.fillStyle = resolveFillColor()
                context.fillRect(cropL, cropT, cropW, cropH)
                context.translate(imgX + displayW / 2, imgY + displayH / 2)
                context.rotate(rotateDeg.value * Math.PI / 180)
                context.drawImage(image as UniImageElementImpl, -displayW / 2, -displayH / 2, displayW, displayH)
                context.restore()
                context.strokeStyle = "#ffffff"
                context.lineWidth = 2
                context.strokeRect(cropL, cropT, cropW, cropH)
                if (canChangeSizeLocal.value) {
                    drawResizeHandles(context, cropL, cropT, cropW, cropH)
                }
            }
            val draw = ::gen_draw_fn
            fun gen_createCanvasImage_fn(path: String): Unit {
                val canvas = canvasContext
                if (canvas == null) {
                    emit("error", UTSError("Canvas is not ready"))
                    return
                }
                val image = canvas.createImage()
                image.onload = fun(){
                    imageElement = image
                    fitImage()
                    draw()
                }
                image.src = path
            }
            val createCanvasImage = ::gen_createCanvasImage_fn
            fun gen_loadImage_fn(path: String): Unit {
                uni_getImageInfo(GetImageInfoOptions(src = path, success = fun(info: GetImageInfoSuccess){
                    imagePath.value = path
                    imageWidth.value = info.width
                    imageHeight.value = info.height
                    visible.value = true
                    nextTick(fun(){
                        initCanvas().then(fun(){
                            createCanvasImage(info.path)
                        }
                        ).`catch`(fun(err: Any?){
                            emit("error", err)
                        }
                        )
                    }
                    )
                }
                , fail = fun(_){
                    emit("error", "读取图片失败")
                }
                ))
            }
            val loadImage = ::gen_loadImage_fn
            fun chooseImage(index: Any? = 0, params: UTSJSONObject = _uO(), data: Any? = null): Unit {
                val options = toObject(params)
                lastOptions = options
                currentIndex.value = if (UTSAndroid.`typeof`(index) === "number") {
                    (index as Number)
                } else {
                    0
                }
                cropWidth.value = rpxToPx(options["areaWidth"], rpxToPx(props.areaWidth, 300))
                cropHeight.value = rpxToPx(options["areaHeight"], rpxToPx(props.areaHeight, 300))
                outputWidth.value = rpxToPx(options["exportWidth"], rpxToPx(props.exportWidth, 260))
                outputHeight.value = rpxToPx(options["exportHeight"], rpxToPx(props.exportHeight, 260))
                minScaleValue.value = numberValue(options["minScale"], numberValue(props.minScale, 0.3))
                maxScaleValue.value = numberValue(options["maxScale"], numberValue(props.maxScale, 4))
                canScaleLocal.value = if (options["canScale"] == null) {
                    props.canScale
                } else {
                    (options["canScale"] as Boolean)
                }
                canRotateLocal.value = (if (options["canRotate"] == null) {
                    props.canRotate
                } else {
                    (options["canRotate"] as Boolean)
                }
                ) && !(if (options["inner"] == null) {
                    props.inner
                } else {
                    (options["inner"] as Boolean)
                }
                )
                canChangeSizeLocal.value = if (options["canChangeSize"] == null) {
                    props.canChangeSize
                } else {
                    (options["canChangeSize"] as Boolean)
                }
                innerMode.value = if (options["inner"] == null) {
                    props.inner
                } else {
                    (options["inner"] as Boolean)
                }
                lockMode.value = normalizeString(options["lock"], normalizeString(props.lock))
                stretchMode.value = normalizeString(options["stretch"], normalizeString(props.stretch))
                returnData = data
                previewing.value = false
                uni_chooseImage(ChooseImageOptions(count = 1, sizeType = _uA(
                    "original",
                    "compressed"
                ), sourceType = _uA(
                    "album",
                    "camera"
                ), success = fun(res: ChooseImageSuccess){
                    if (res.tempFilePaths.length == 0) {
                        return
                    }
                    loadImage(res.tempFilePaths[0])
                }
                , fail = fun(_){
                    emit("cancel")
                }
                ))
            }
            fun gen_openDefault_fn(): Unit {
                chooseImage(0, _uO())
            }
            val openDefault = ::gen_openDefault_fn
            fun gen_select_fn(): Unit {
                chooseImage(currentIndex.value, lastOptions, returnData)
            }
            val select = ::gen_select_fn
            fun gen_getResizeHandle_fn(point: CropTouch): String {
                val tolerance: Number = 28
                val left = cropLeft.value
                val top = cropTop.value
                val width = numberValue(cropWidth.value, 0)
                val height = numberValue(cropHeight.value, 0)
                if (Math.abs(point.x - left) <= tolerance && Math.abs(point.y - top) <= tolerance) {
                    return "top-left"
                }
                if (Math.abs(point.x - left - width) <= tolerance && Math.abs(point.y - top) <= tolerance) {
                    return "top-right"
                }
                if (Math.abs(point.x - left) <= tolerance && Math.abs(point.y - top - height) <= tolerance) {
                    return "bottom-left"
                }
                if (Math.abs(point.x - left - width) <= tolerance && Math.abs(point.y - top - height) <= tolerance) {
                    return "bottom-right"
                }
                return ""
            }
            val getResizeHandle = ::gen_getResizeHandle_fn
            fun gen_resizeCrop_fn(point: CropTouch): Unit {
                val minSize: Number = 50
                val oldW = numberValue(cropWidth.value, 0)
                val oldH = numberValue(cropHeight.value, 0)
                val centerX = cropLeft.value + oldW / 2
                val centerY = cropTop.value + oldH / 2
                var nextW = Math.abs(point.x - centerX) * 2
                var nextH = Math.abs(point.y - centerY) * 2
                val maxW = numberValue(canvasWidth.value, 0) - 24
                val maxH = numberValue(canvasHeight.value, 0) - 24
                nextW = clamp(nextW, minSize, maxW)
                nextH = clamp(nextH, minSize, maxH)
                val lockedWidth = rpxToPx(props.lockWidth, 0)
                val lockedHeight = rpxToPx(props.lockHeight, 0)
                if (lockedWidth > 0) {
                    nextW = lockedWidth
                }
                if (lockedHeight > 0) {
                    nextH = lockedHeight
                }
                cropWidth.value = nextW
                cropHeight.value = nextH
            }
            val resizeCrop = ::gen_resizeCrop_fn
            fun gen_applyScale_fn(nextScale: Number): Unit {
                val centerX = imageX.value + displayWidth.value / 2
                val centerY = imageY.value + displayHeight.value / 2
                scaleValue.value = nextScale
                displayWidth.value = baseDisplayWidth.value * nextScale
                displayHeight.value = baseDisplayHeight.value * nextScale
                imageX.value = centerX - displayWidth.value / 2
                imageY.value = centerY - displayHeight.value / 2
            }
            val applyScale = ::gen_applyScale_fn
            fun gen_handlePinch_fn(first: CropTouch, second: CropTouch): Unit {
                val currentDistance = distanceBetween(first, second)
                if (startPinchDistance > 0 && canScaleLocal.value) {
                    val minScale = numberValue(minScaleValue.value, 0.3)
                    val maxScale = numberValue(maxScaleValue.value, 4)
                    val nextScale = clamp(startScaleValue * currentDistance / startPinchDistance, minScale, maxScale)
                    applyScale(nextScale)
                }
                keepImageInCrop()
                draw()
            }
            val handlePinch = ::gen_handlePinch_fn
            fun gen_isMoveLockedX_fn(): Boolean {
                return lockMode.value == "x" || lockMode.value == "longSel" || lockMode.value == "long"
            }
            val isMoveLockedX = ::gen_isMoveLockedX_fn
            fun gen_isMoveLockedY_fn(): Boolean {
                return lockMode.value == "y" || lockMode.value == "shortSel" || lockMode.value == "short"
            }
            val isMoveLockedY = ::gen_isMoveLockedY_fn
            fun gen_touchStart_fn(e: UniTouchEvent): Unit {
                if (previewing.value) {
                    return
                }
                val first = touchAt(e, 0)
                val second = touchAt(e, 1)
                if (first != null && second != null) {
                    activeTouch = first
                    second
                    startPinchDistance = distanceBetween(first, second)
                    startScaleValue = scaleValue.value
                    resizeHandle = ""
                    return
                }
                val point = touchPoint(e)
                activeTouch = point
                null
                resizeHandle = if (canChangeSizeLocal.value) {
                    getResizeHandle(point)
                } else {
                    ""
                }
            }
            val touchStart = ::gen_touchStart_fn
            fun gen_touchMove_fn(e: UniTouchEvent): Unit {
                if (previewing.value) {
                    return
                }
                val first = touchAt(e, 0)
                val second = touchAt(e, 1)
                if (first != null && second != null) {
                    handlePinch(first, second)
                    return
                }
                val last = activeTouch
                if (last == null) {
                    return
                }
                val point = touchPoint(e)
                if (resizeHandle.length > 0) {
                    resizeCrop(point)
                } else {
                    if (!isMoveLockedX()) {
                        imageX.value += point.x - last.x
                    }
                    if (!isMoveLockedY()) {
                        imageY.value += point.y - last.y
                    }
                }
                activeTouch = point
                keepImageInCrop()
                draw()
            }
            val touchMove = ::gen_touchMove_fn
            fun gen_touchEnd_fn(): Unit {
                activeTouch = null
                null
                resizeHandle = ""
            }
            val touchEnd = ::gen_touchEnd_fn
            fun gen_rotate_fn(): Unit {
                if (!canRotateLocal.value || previewing.value) {
                    return
                }
                rotateDeg.value = (rotateDeg.value + 90) % 360
                draw()
            }
            val rotate = ::gen_rotate_fn
            fun gen_drawPreview_fn(): Unit {
                val context = ctx
                val image = imageElement
                if (context == null || image == null) {
                    return
                }
                val canvasW = numberValue(canvasWidth.value, 0)
                val canvasH = numberValue(canvasHeight.value, 0)
                val cropW = numberValue(cropWidth.value, 0)
                val cropH = numberValue(cropHeight.value, 0)
                val previewW = Math.min(canvasW - 40, cropW)
                val previewH = cropH * previewW / Math.max(1, cropW)
                val x = (canvasW - previewW) / 2
                val y = Math.max(20, (canvasH - previewH) / 2)
                context.clearRect(0, 0, canvasW, canvasH)
                context.fillStyle = "#000000"
                context.fillRect(0, 0, canvasW, canvasH)
                context.save()
                context.beginPath()
                context.rect(x, y, previewW, previewH)
                context.clip()
                context.fillStyle = resolveFillColor()
                context.fillRect(x, y, previewW, previewH)
                val scaleX = previewW / cropW
                val scaleY = previewH / cropH
                val cropL = cropLeft.value
                val cropT = cropTop.value
                val displayW = numberValue(displayWidth.value, 0)
                val displayH = numberValue(displayHeight.value, 0)
                context.translate(x + (imageX.value + displayW / 2 - cropL) * scaleX, y + (imageY.value + displayH / 2 - cropT) * scaleY)
                context.rotate(rotateDeg.value * Math.PI / 180)
                context.drawImage(image as UniImageElementImpl, -displayW * scaleX / 2, -displayH * scaleY / 2, displayW * scaleX, displayH * scaleY)
                context.restore()
                context.strokeStyle = "#ffffff"
                context.lineWidth = 1
                context.strokeRect(x, y, previewW, previewH)
            }
            val drawPreview = ::gen_drawPreview_fn
            fun gen_preview_fn(): Unit {
                previewing.value = true
                drawPreview()
            }
            val preview = ::gen_preview_fn
            fun gen_exitPreview_fn(): Unit {
                previewing.value = false
                draw()
            }
            val exitPreview = ::gen_exitPreview_fn
            fun gen_confirm_fn(): Unit {
                val context = exportCtx
                val canvas = exportCanvasContext
                val image = imageElement
                if (context == null || canvas == null || image == null) {
                    emit("error", UTSError("Canvas is not ready"))
                    return
                }
                val outputW = numberValue(outputWidth.value, 0)
                val outputH = numberValue(outputHeight.value, 0)
                val displayW = Math.max(1, numberValue(displayWidth.value, 1))
                val displayH = Math.max(1, numberValue(displayHeight.value, 1))
                val cropW = numberValue(cropWidth.value, 0)
                val cropH = numberValue(cropHeight.value, 0)
                val cropL = cropLeft.value
                val cropT = cropTop.value
                val imgX = numberValue(imageX.value, 0)
                val imgY = numberValue(imageY.value, 0)
                context.clearRect(0, 0, outputW, outputH)
                context.fillStyle = resolveFillColor()
                context.fillRect(0, 0, outputW, outputH)
                context.save()
                val scaleX = outputW / Math.max(1, cropW)
                val scaleY = outputH / Math.max(1, cropH)
                context.scale(scaleX, scaleY)
                context.translate(imgX + displayW / 2 - cropL, imgY + displayH / 2 - cropT)
                context.rotate(rotateDeg.value * Math.PI / 180)
                context.drawImage(image as UniImageElementImpl, -displayW / 2, -displayH / 2, displayW, displayH)
                context.restore()
                val quality = clamp(numberValue(props.quality, 1), 0, 1)
                val path = canvas.toDataURL("image/png", quality)
                visible.value = false
                previewing.value = false
                emit("confirm", _uO("path" to path, "avatar" to path, "index" to currentIndex.value, "data" to returnData))
            }
            val confirm = ::gen_confirm_fn
            fun gen_close_fn(): Unit {
                visible.value = false
                emit("cancel")
            }
            val close = ::gen_close_fn
            __expose(_uM("chooseImage" to ::chooseImage, "select" to select, "loadImage" to loadImage, "rotate" to rotate, "preview" to preview, "exitPreview" to exitPreview, "confirm" to confirm, "close" to close))
            return fun(): Any? {
                return _cE("view", _uM("class" to "weapp-tw-border up-cropper"), _uA(
                    if (isTrue(visible.value)) {
                        _cE("view", _uM("key" to 0, "class" to "weapp-tw-border up-cropper__panel"), _uA(
                            _cE("canvas", _uM("class" to "up-cropper__canvas", "id" to canvasId.value, "canvas-id" to canvasId.value, "style" to _nS(canvasStyle.value), "onTouchstart" to touchStart, "onTouchmove" to touchMove, "onTouchend" to touchEnd, "onTouchcancel" to touchEnd), null, 44, _uA(
                                "id",
                                "canvas-id"
                            )),
                            _cE("canvas", _uM("class" to "up-cropper__export", "id" to exportCanvasId.value, "canvas-id" to exportCanvasId.value, "style" to _nS(exportCanvasStyle.value)), null, 12, _uA(
                                "id",
                                "canvas-id"
                            )),
                            _cE("view", _uM("class" to "weapp-tw-border up-cropper__toolbar"), _uA(
                                if (isTrue(!previewing.value)) {
                                    _cE(Fragment, _uM("key" to 0), _uA(
                                        _cE("text", _uM("class" to "weapp-tw-border up-cropper__button", "onClick" to select), "重选"),
                                        _cE("text", _uM("class" to "weapp-tw-border up-cropper__button", "onClick" to close), "关闭"),
                                        if (isTrue(showRotateButton.value)) {
                                            _cE("text", _uM("key" to 0, "class" to "weapp-tw-border up-cropper__button", "onClick" to rotate), "旋转")
                                        } else {
                                            _cC("v-if", true)
                                        },
                                        _cE("text", _uM("class" to "weapp-tw-border up-cropper__button", "onClick" to preview), "预览"),
                                        _cE("text", _uM("class" to "weapp-tw-border up-cropper__button", "onClick" to confirm), "确定")
                                    ), 64)
                                } else {
                                    _cE(Fragment, _uM("key" to 1), _uA(
                                        _cE("text", _uM("class" to "weapp-tw-border up-cropper__button", "onClick" to exitPreview), "返回"),
                                        _cE("text", _uM("class" to "weapp-tw-border up-cropper__button", "onClick" to confirm), "确定")
                                    ), 64)
                                }
                            ))
                        ))
                    } else {
                        _cE("view", _uM("key" to 1, "class" to "weapp-tw-border", "onClick" to openDefault), _uA(
                            renderSlot(_ctx.`$slots`, "default")
                        ))
                    }
                ))
            }
        }
        var name = "up-cropper"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "up-cropper" to _pS(_uM("display" to "flex", "flexDirection" to "column")), "up-cropper__panel" to _pS(_uM("position" to "fixed", "left" to 0, "top" to 0, "right" to 0, "bottom" to 0, "zIndex" to 999, "backgroundColor" to "#000000")), "up-cropper__canvas" to _pS(_uM("display" to "flex")), "up-cropper__export" to _pS(_uM("position" to "fixed", "left" to -9999, "top" to -9999)), "up-cropper__toolbar" to _pS(_uM("height" to 70, "display" to "flex", "flexDirection" to "row", "alignItems" to "center", "justifyContent" to "space-around", "backgroundColor" to "#111111")), "up-cropper__button" to _pS(_uM("color" to "#ffffff", "fontSize" to 15, "paddingTop" to 10, "paddingRight" to 10, "paddingBottom" to 10, "paddingLeft" to 10)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("avtinit" to null, "confirm" to null, "cancel" to null, "error" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "minScale" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 0.3), "maxScale" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 4), "canScale" to _uM("type" to "Boolean", "default" to true), "canRotate" to _uM("type" to "Boolean", "default" to true), "lockWidth" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to ""), "lockHeight" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to ""), "stretch" to _uM("type" to "String", "default" to ""), "lock" to _uM("type" to "String", "default" to ""), "noTab" to _uM("type" to "Boolean", "default" to true), "inner" to _uM("type" to "Boolean", "default" to false), "quality" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 1), "canChangeSize" to _uM("type" to "Boolean", "default" to false), "areaWidth" to _uM("type" to "String", "default" to "300rpx"), "areaHeight" to _uM("type" to "String", "default" to "300rpx"), "exportWidth" to _uM("type" to "String", "default" to "260rpx"), "exportHeight" to _uM("type" to "String", "default" to "260rpx"), "fillColor" to _uM("type" to "String", "default" to "transparent"), "index" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to 0)))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "minScale",
            "maxScale",
            "canScale",
            "canRotate",
            "lockWidth",
            "lockHeight",
            "stretch",
            "lock",
            "noTab",
            "inner",
            "quality",
            "canChangeSize",
            "areaWidth",
            "areaHeight",
            "exportWidth",
            "exportHeight",
            "fillColor",
            "index"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
