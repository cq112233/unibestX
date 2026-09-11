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
import io.dcloud.uniapp.extapi.getSystemInfoSync as uni_getSystemInfoSync
open class GenUniModulesUviewUltraComponentsUpQrcodeUpQrcode : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var cid: String by `$props`
    open var size: Any by `$props`
    open var unit: String by `$props`
    open var show: Boolean by `$props`
    open var `val`: String by `$props`
    open var background: String by `$props`
    open var foreground: String by `$props`
    open var pdground: String by `$props`
    open var icon: String by `$props`
    open var iconSize: Any by `$props`
    open var lv: Any by `$props`
    open var quietZone: Any by `$props`
    open var onval: Boolean by `$props`
    open var loadMake: Boolean by `$props`
    open var usingComponents: Boolean by `$props`
    open var showLoading: Boolean by `$props`
    open var loadingText: String by `$props`
    open var allowPreview: Boolean by `$props`
    open var useRootHeightAndWidth: Boolean by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var makeCode: () -> Unit
        get() {
            return unref(this.`$exposed`["makeCode"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "makeCode", value)
        }
    open var toTempFilePath: (options: UTSJSONObject) -> Unit
        get() {
            return unref(this.`$exposed`["toTempFilePath"]) as (options: UTSJSONObject) -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "toTempFilePath", value)
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpQrcodeUpQrcode, __setupCtx: SetupContext) -> Any? = fun(__props, __setupCtx): Any? {
            val __expose = __setupCtx.expose
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpQrcodeUpQrcode
            val _cache = __ins.renderCache
            var qrcodeCounter: Number = 0
            fun gen_makeId_fn(prefix: String): String {
                return prefix + Date.now().toString(10) + "_" + (++qrcodeCounter).toString(10)
            }
            val makeId = ::gen_makeId_fn
            fun gen_isEmpty_fn(value: Any?): Boolean {
                if (value == null) {
                    return true
                }
                val text = value.toString()
                return text.length == 0 || text == "undefined" || text == "null" || text == "{}" || text == "[]"
            }
            val isEmpty = ::gen_isEmpty_fn
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
            val cells = ref(_uA<UTSJSONObject>())
            val loading = ref<Boolean>(false)
            val result = ref<String>("")
            val error = ref<String>("")
            val canvasId = ref<String>(if (props.cid != "") {
                props.cid
            } else {
                makeId("up-qrcode-canvas-")
            }
            )
            var canvasContext: CanvasContext? = null
            var ctx: CanvasRenderingContext2D? = null
            val sizeLocal = computed<Number>(fun(): Number {
                return parseFloat(props.size.toString())
            }
            )
            val rootStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                return _uO("width" to if (props.useRootHeightAndWidth) {
                    "100%"
                } else {
                    sizeLocal.value.toString(10) + props.unit
                }
                , "height" to if (props.useRootHeightAndWidth) {
                    "100%"
                } else {
                    sizeLocal.value.toString(10) + props.unit
                }
                )
            }
            )
            val matrixStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                return _uO("width" to (sizeLocal.value.toString(10) + props.unit), "height" to (sizeLocal.value.toString(10) + props.unit), "backgroundColor" to props.background)
            }
            )
            val iconStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                val iSize = parseFloat(props.iconSize.toString())
                val sz = iSize.toString(10) + props.unit
                return _uO("width" to sz, "height" to sz, "left" to (((sizeLocal.value - iSize) / 2).toString(10) + props.unit), "top" to (((sizeLocal.value - iSize) / 2).toString(10) + props.unit))
            }
            )
            val canvasStyle = computed<UTSJSONObject>(fun(): UTSJSONObject {
                return _uO("width" to (sizeLocal.value.toString(10) + props.unit), "height" to (sizeLocal.value.toString(10) + props.unit))
            }
            )
            fun gen_initCanvas_fn(): UTSPromise<Unit> {
                return UTSPromise(fun(resolve, reject){
                    if (canvasContext != null && ctx != null) {
                        resolve(Unit)
                        return
                    }
                    uni_createCanvasContextAsync(CreateCanvasContextAsyncOptions(id = canvasId.value as String, component = instance?.proxy, success = fun(context: CanvasContext){
                        canvasContext = context
                        val c2d = context.getContext("2d")
                        if (c2d == null) {
                            reject(UTSError("Canvas context is not ready"))
                            return
                        }
                        val canvas = c2d.canvas
                        val pixelRatio = getPixelRatio()
                        canvas.width = sizeLocal.value * pixelRatio
                        canvas.height = sizeLocal.value * pixelRatio
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
            fun gen_drawQrToCanvas_fn(): Unit {
                if (ctx == null) {
                    return
                }
                val drawSize = sizeLocal.value
                ctx!!.clearRect(0, 0, drawSize, drawSize)
                ctx!!.fillStyle = props.background
                ctx!!.fillRect(0, 0, drawSize, drawSize)
                val count = getQrRenderCountWithQuietZone(props.`val`, parseFloat(props.lv.toString()), parseFloat(props.quietZone.toString()))
                run {
                    var i: Number = 0
                    while(i < cells.value.length){
                        val cell = cells.value[i]
                        if (!cell.getBoolean("dark", false)) {
                            i++
                            continue
                        }
                        val color = cell.getString("color", props.foreground)
                        val row = Math.floor(i / count)
                        val col = i % count
                        val left = Math.floor(col * drawSize / count)
                        val top = Math.floor(row * drawSize / count)
                        val right = Math.ceil((col + 1) * drawSize / count)
                        val bottom = Math.ceil((row + 1) * drawSize / count)
                        ctx!!.fillStyle = color
                        ctx!!.fillRect(left, top, right - left, bottom - top)
                        i++
                    }
                }
            }
            val drawQrToCanvas = ::gen_drawQrToCanvas_fn
            fun gen_renderCanvas_fn(): UTSPromise<Unit> {
                if (error.value.length > 0 || cells.value.length == 0) {
                    return UTSPromise.resolve()
                }
                return initCanvas().then(fun(){
                    drawQrToCanvas()
                }
                )
            }
            val renderCanvas = ::gen_renderCanvas_fn
            fun gen_makeCode_fn(): Unit {
                if (isEmpty(props.`val`)) {
                    error.value = "二维码内容不能为空"
                    cells.value = _uA<UTSJSONObject>()
                    emit("error", _uO("message" to error.value))
                    return
                }
                try {
                    loading.value = true
                    error.value = ""
                    cells.value = createQrCells(props.`val`, props.foreground, props.background, props.pdground, parseInt(props.lv.toString()), parseInt(props.quietZone.toString()))
                    result.value = props.`val`
                    loading.value = false
                    nextTick(fun(){
                        renderCanvas()
                    }
                    )
                    emit("result", result.value)
                }
                 catch (err: Throwable) {
                    loading.value = false
                    var msg = ""
                    if (err != null && UTSAndroid.`typeof`(err) == "object") {
                        val errObj = err as UTSJSONObject
                        if (errObj["message"] != null) {
                            msg = errObj["message"]!!.toString()
                        }
                    }
                    if (msg == "") {
                        msg = "" + err
                    }
                    error.value = msg
                    cells.value = _uA<UTSJSONObject>()
                    emit("error", _uO("message" to error.value))
                }
            }
            val makeCode = ::gen_makeCode_fn
            fun gen_preview_fn(e: UniPointerEvent): Unit {
                emit("preview", _uO("url" to result.value), e)
            }
            val preview = ::gen_preview_fn
            fun gen_emitTempFileSuccess_fn(options: UTSJSONObject, path: String): Unit {
                val success = options["success"]
                if (success != null) {
                    (success as (res: UTSJSONObject) -> Unit)(_uO("tempFilePath" to path))
                }
                val complete = options["complete"]
                if (complete != null) {
                    (complete as (res: UTSJSONObject) -> Unit)(_uO("tempFilePath" to path))
                }
            }
            val emitTempFileSuccess = ::gen_emitTempFileSuccess_fn
            fun gen_emitTempFileFail_fn(options: UTSJSONObject, message: String): Unit {
                val payload: UTSJSONObject = _uO("errMsg" to message)
                val fail = options["fail"]
                if (fail != null) {
                    (fail as (error: UTSJSONObject) -> Unit)(payload)
                }
                val complete = options["complete"]
                if (complete != null) {
                    (complete as (error: UTSJSONObject) -> Unit)(payload)
                }
            }
            val emitTempFileFail = ::gen_emitTempFileFail_fn
            fun gen_exportImage_fn(options: UTSJSONObject): Unit {
                renderCanvas().then(fun(){
                    if (canvasContext == null) {
                        emitTempFileFail(options, "Canvas is not ready")
                        return
                    }
                    val path = canvasContext!!.toDataURL("image/png", 1)
                    emitTempFileSuccess(options, path)
                }
                ).`catch`(fun(err: Any?){
                    val message = if (err == null) {
                        "Canvas init failed"
                    } else {
                        err.toString()
                    }
                    emitTempFileFail(options, message)
                }
                )
            }
            val exportImage = ::gen_exportImage_fn
            fun gen_toTempFilePath_fn(options: UTSJSONObject): Unit {
                if (error.value.length > 0 || cells.value.length == 0) {
                    emitTempFileFail(options, "up-qrcode content is not ready")
                    return
                }
                exportImage(options)
            }
            val toTempFilePath = ::gen_toTempFilePath_fn
            fun gen_longpress_fn(): Unit {
                toTempFilePath(_uO("success" to fun(res: UTSJSONObject){
                    emit("longpressCallback", res["tempFilePath"])
                }
                , "fail" to fun(_: UTSJSONObject){
                    emit("longpressCallback", result.value)
                }
                ))
            }
            val longpress = ::gen_longpress_fn
            watch(fun(): String {
                return props.`val`
            }
            , fun(){
                if (props.onval) {
                    makeCode()
                }
            }
            )
            watch(fun(): UTSArray<Any?> {
                return _uA<Any?>(props.size, props.background, props.foreground, props.pdground)
            }
            , fun(){
                makeCode()
            }
            )
            onMounted(fun(){
                if (props.loadMake) {
                    makeCode()
                }
            }
            )
            __expose(_uM("makeCode" to makeCode, "toTempFilePath" to toTempFilePath))
            return fun(): Any? {
                val _component_up_loading_icon = resolveEasyComponent("up-loading-icon", GenUniModulesUviewUltraComponentsUpLoadingIconUpLoadingIconClass)
                return _cE("view", _uM("class" to "weapp-tw-border up-qrcode", "style" to _nS(rootStyle.value), "onLongpress" to longpress, "onClick" to preview), _uA(
                    if (error.value.length > 0) {
                        _cE("view", _uM("key" to 0, "class" to "weapp-tw-border up-qrcode__error", "style" to _nS(matrixStyle.value)), _uA(
                            _cE("text", _uM("class" to "weapp-tw-border up-qrcode__error-text"), _tD(error.value), 1)
                        ), 4)
                    } else {
                        _cE("view", _uM("key" to 1, "class" to "weapp-tw-border up-qrcode__matrix", "style" to _nS(matrixStyle.value)), _uA(
                            _cE("canvas", _uM("class" to "up-qrcode__canvas", "id" to canvasId.value, "canvas-id" to canvasId.value, "style" to _nS(canvasStyle.value)), null, 12, _uA(
                                "id",
                                "canvas-id"
                            )),
                            if (_ctx.icon.length > 0) {
                                _cE("image", _uM("key" to 0, "class" to "up-qrcode__icon", "src" to _ctx.icon, "mode" to "aspectFill", "style" to _nS(iconStyle.value)), null, 12, _uA(
                                    "src"
                                ))
                            } else {
                                _cC("v-if", true)
                            }
                            ,
                            if (isTrue(if (isTruthy(_ctx.showLoading)) {
                                loading.value
                            } else {
                                _ctx.showLoading
                            }
                            )) {
                                _cE("view", _uM("key" to 1, "class" to "weapp-tw-border up-qrcode__loading"), _uA(
                                    _cV(_component_up_loading_icon, _uM("vertical" to "", "text" to _ctx.loadingText, "textSize" to "14px"), null, 8, _uA(
                                        "text"
                                    ))
                                ))
                            } else {
                                _cC("v-if", true)
                            }
                        ), 4)
                    }
                ), 36)
            }
        }
        var name = "up-qrcode"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "up-qrcode" to _pS(_uM("display" to "flex", "position" to "relative")), "up-qrcode__matrix" to _pS(_uM("position" to "relative", "overflow" to "hidden")), "up-qrcode__canvas" to _pS(_uM("position" to "absolute", "left" to 0, "top" to 0)), "up-qrcode__icon" to _pS(_uM("position" to "absolute", "borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4, "borderBottomLeftRadius" to 4, "backgroundColor" to "#ffffff")), "up-qrcode__loading" to _pS(_uM("position" to "absolute", "left" to 0, "right" to 0, "top" to 0, "bottom" to 0, "display" to "flex", "alignItems" to "center", "justifyContent" to "center", "backgroundColor" to "rgba(255,255,255,0.8)")), "up-qrcode__error" to _pS(_uM("display" to "flex", "alignItems" to "center", "justifyContent" to "center", "backgroundColor" to "#f8f8f8")), "up-qrcode__error-text" to _pS(_uM("color" to "#fa3534", "fontSize" to 14)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("result" to null, "longpressCallback" to null, "preview" to null, "error" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "cid" to _uM("type" to "String", "default" to ""), "size" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to 200), "unit" to _uM("type" to "String", "default" to "px"), "show" to _uM("type" to "Boolean", "default" to true), "val" to _uM("type" to "String", "default" to ""), "background" to _uM("type" to "String", "default" to "#ffffff"), "foreground" to _uM("type" to "String", "default" to "#000000"), "pdground" to _uM("type" to "String", "default" to "#000000"), "icon" to _uM("type" to "String", "default" to ""), "iconSize" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to 40), "lv" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to 3), "quietZone" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to 0), "onval" to _uM("type" to "Boolean", "default" to true), "loadMake" to _uM("type" to "Boolean", "default" to true), "usingComponents" to _uM("type" to "Boolean", "default" to true), "showLoading" to _uM("type" to "Boolean", "default" to true), "loadingText" to _uM("type" to "String", "default" to "生成中"), "allowPreview" to _uM("type" to "Boolean", "default" to false), "useRootHeightAndWidth" to _uM("type" to "Boolean", "default" to false)))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "cid",
            "size",
            "unit",
            "show",
            "val",
            "background",
            "foreground",
            "pdground",
            "icon",
            "iconSize",
            "lv",
            "quietZone",
            "onval",
            "loadMake",
            "usingComponents",
            "showLoading",
            "loadingText",
            "allowPreview",
            "useRootHeightAndWidth"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
