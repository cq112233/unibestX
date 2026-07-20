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
import io.dcloud.uniapp.extapi.createCanvasContextAsync as uni_createCanvasContextAsync
open class GenUniModulesUviewUltraComponentsUpQrcodeUpQrcode : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
        onMounted(fun(): Unit {
            if (this.loadMake) {
                this.makeCode()
            }
        }
        , __ins)
        this.`$watch`(fun(): Any? {
            return this.`val`
        }
        , fun() {
            if (this.onval) {
                this.makeCode()
            }
        }
        )
        this.`$watch`(fun(): Any? {
            return this.size
        }
        , fun() {
            this.makeCode()
        }
        )
        this.`$watch`(fun(): Any? {
            return this.background
        }
        , fun() {
            this.makeCode()
        }
        )
        this.`$watch`(fun(): Any? {
            return this.foreground
        }
        , fun() {
            this.makeCode()
        }
        )
        this.`$watch`(fun(): Any? {
            return this.pdground
        }
        , fun() {
            this.makeCode()
        }
        )
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        val _component_up_loading_icon = resolveEasyComponent("up-loading-icon", GenUniModulesUviewUltraComponentsUpLoadingIconUpLoadingIconClass)
        return _cE("view", _uM("class" to "up-qrcode", "style" to _nS(_ctx.rootStyle), "onLongpress" to _ctx.longpress, "onClick" to _ctx.preview), _uA(
            if (_ctx.error.length > 0) {
                _cE("view", _uM("key" to 0, "class" to "up-qrcode__error", "style" to _nS(_ctx.matrixStyle)), _uA(
                    _cE("text", _uM("class" to "up-qrcode__error-text"), _tD(_ctx.error), 1)
                ), 4)
            } else {
                _cE("view", _uM("key" to 1, "class" to "up-qrcode__matrix", "style" to _nS(_ctx.matrixStyle)), _uA(
                    _cE("canvas", _uM("class" to "up-qrcode__canvas", "id" to _ctx.canvasId, "canvas-id" to _ctx.canvasId, "style" to _nS(_ctx.canvasStyle)), null, 12, _uA(
                        "id",
                        "canvas-id"
                    )),
                    if (_ctx.icon.length > 0) {
                        _cE("image", _uM("key" to 0, "class" to "up-qrcode__icon", "src" to _ctx.icon, "mode" to "aspectFill", "style" to _nS(_ctx.iconStyle)), null, 12, _uA(
                            "src"
                        ))
                    } else {
                        _cC("v-if", true)
                    }
                    ,
                    if (isTrue(_ctx.showLoading && _ctx.loading)) {
                        _cE("view", _uM("key" to 1, "class" to "up-qrcode__loading"), _uA(
                            _cV(_component_up_loading_icon, _uM("vertical" to "", "text" to _ctx.loadingText, "textSize" to "14px"), null, 8, _uA(
                                "text"
                            ))
                        ))
                    } else {
                        _cC("v-if", true)
                    }
                ), 4)
            }
        ), 44, _uA(
            "onLongpress",
            "onClick"
        ))
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var cid: String? by `$props`
    open var size: Number by `$props`
    open var unit: String by `$props`
    open var show: Boolean by `$props`
    open var `val`: String by `$props`
    open var background: String by `$props`
    open var foreground: String by `$props`
    open var pdground: String by `$props`
    open var icon: String by `$props`
    open var iconSize: Number by `$props`
    open var lv: Number by `$props`
    open var quietZone: Number by `$props`
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
    open var rootId: Any? by `$data`
    open var cells: UTSArray<UTSJSONObject> by `$data`
    open var loading: Boolean by `$data`
    open var result: String by `$data`
    open var error: String by `$data`
    open var canvasId: Any? by `$data`
    open var canvasContext: CanvasContext? by `$data`
    open var ctx: CanvasRenderingContext2D? by `$data`
    open var sizeLocal: Number by `$data`
    open var rootStyle: UTSJSONObject by `$data`
    open var matrixStyle: UTSJSONObject by `$data`
    open var iconStyle: UTSJSONObject by `$data`
    open var cellSize: Number by `$data`
    open var canvasStyle: UTSJSONObject by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "parentData" to _uO(), "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>(), "rootId" to makeId("rootId-"), "cells" to _uA<UTSJSONObject>(), "loading" to false, "result" to "", "error" to "", "canvasId" to makeId("up-qrcode-canvas-"), "canvasContext" to null as CanvasContext?, "ctx" to null as CanvasRenderingContext2D?, "sizeLocal" to computed<Number>(fun(): Number {
            return this.size
        }
        ), "rootStyle" to computed<UTSJSONObject>(fun(): UTSJSONObject {
            return _uO("width" to if (this.useRootHeightAndWidth) {
                "100%"
            } else {
                this.sizeLocal.toString(10) + this.unit
            }
            , "height" to if (this.useRootHeightAndWidth) {
                "100%"
            } else {
                this.sizeLocal.toString(10) + this.unit
            }
            )
        }
        ), "matrixStyle" to computed<UTSJSONObject>(fun(): UTSJSONObject {
            return _uO("width" to (this.sizeLocal.toString(10) + this.unit), "height" to (this.sizeLocal.toString(10) + this.unit), "backgroundColor" to this.background)
        }
        ), "iconStyle" to computed<UTSJSONObject>(fun(): UTSJSONObject {
            val size = this.iconSize.toString(10) + this.unit
            return _uO("width" to size, "height" to size, "left" to (((this.sizeLocal - this.iconSize) / 2).toString(10) + this.unit), "top" to (((this.sizeLocal - this.iconSize) / 2).toString(10) + this.unit))
        }
        ), "cellSize" to computed<Number>(fun(): Number {
            return this.sizeLocal / getQrRenderCountWithQuietZone(this.`val`, this.lv, this.quietZone)
        }
        ), "canvasStyle" to computed<UTSJSONObject>(fun(): UTSJSONObject {
            return _uO("width" to (this.sizeLocal.toString(10) + this.unit), "height" to (this.sizeLocal.toString(10) + this.unit))
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
    open var makeCode = ::gen_makeCode_fn
    open fun gen_makeCode_fn(): Unit {
        if (isEmpty(this.`val`)) {
            this.error = "二维码内容不能为空"
            this.cells = _uA<UTSJSONObject>()
            this.`$emit`("error", _uO("message" to this.error))
            return
        }
        try {
            this.loading = true
            this.error = ""
            this.cells = createQrCells(this.`val`, this.foreground, this.background, this.pdground, this.lv, this.quietZone)
            this.result = this.`val`
            this.loading = false
            this.`$nextTick`(fun(){
                this.renderCanvas()
            }
            )
            this.`$emit`("result", this.result)
        }
         catch (error: Throwable) {
            this.loading = false
            val err = error as UTSJSONObject
            val message = err["message"]
            this.error = if (message == null) {
                error.toString()
            } else {
                message.toString()
            }
            this.cells = _uA<UTSJSONObject>()
            this.`$emit`("error", _uO("message" to this.error))
        }
    }
    open var _makeCode = ::gen__makeCode_fn
    open fun gen__makeCode_fn(): Unit {
        this.makeCode()
    }
    open var _clearCode = ::gen__clearCode_fn
    open fun gen__clearCode_fn(): Unit {
        this.cells = _uA<UTSJSONObject>()
        this.result = ""
    }
    open var preview = ::gen_preview_fn
    open fun gen_preview_fn(e: UniPointerEvent): Unit {
        this.`$emit`("preview", _uO("url" to this.result), e)
    }
    open var longpress = ::gen_longpress_fn
    open fun gen_longpress_fn(): Unit {
        this.toTempFilePath(_uO("success" to fun(res: UTSJSONObject){
            this.`$emit`("longpressCallback", res["tempFilePath"])
        }
        , "fail" to fun(_: UTSJSONObject){
            this.`$emit`("longpressCallback", this.result)
        }
        ))
    }
    open var toTempFilePath = ::gen_toTempFilePath_fn
    open fun gen_toTempFilePath_fn(options: UTSJSONObject): Unit {
        if (this.error.length > 0 || this.cells.length == 0) {
            this.emitTempFileFail(options, "up-qrcode content is not ready")
            return
        }
        this.exportImage(options)
    }
    open var emitTempFileSuccess = ::gen_emitTempFileSuccess_fn
    open fun gen_emitTempFileSuccess_fn(options: UTSJSONObject, path: String): Unit {
        val success = options["success"]
        if (success != null) {
            (success as (res: UTSJSONObject) -> Unit)(_uO("tempFilePath" to path))
        }
        val complete = options["complete"]
        if (complete != null) {
            (complete as (res: UTSJSONObject) -> Unit)(_uO("tempFilePath" to path))
        }
    }
    open var emitTempFileFail = ::gen_emitTempFileFail_fn
    open fun gen_emitTempFileFail_fn(options: UTSJSONObject, message: String): Unit {
        val payload: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("payload", "uni_modules/uview-ultra/components/up-qrcode/up-qrcode.uvue", 268, 19), "errMsg" to message)
        val fail = options["fail"]
        if (fail != null) {
            (fail as (error: UTSJSONObject) -> Unit)(payload)
        }
        val complete = options["complete"]
        if (complete != null) {
            (complete as (error: UTSJSONObject) -> Unit)(payload)
        }
    }
    open var exportImage = ::gen_exportImage_fn
    open fun gen_exportImage_fn(options: UTSJSONObject): Unit {
        this.renderCanvas().then(fun(){
            val canvas = this.canvasContext
            if (canvas == null) {
                this.emitTempFileFail(options, "Canvas is not ready")
                return
            }
            val path = canvas.toDataURL("image/png", 1)
            this.emitTempFileSuccess(options, path)
        }
        ).`catch`(fun(error: Any?){
            val message = if (error == null) {
                "Canvas init failed"
            } else {
                error.toString()
            }
            this.emitTempFileFail(options, message)
        }
        )
    }
    open var renderCanvas = ::gen_renderCanvas_fn
    open fun gen_renderCanvas_fn(): UTSPromise<Unit> {
        if (this.error.length > 0 || this.cells.length == 0) {
            return UTSPromise.resolve()
        }
        return this.initCanvas().then(fun(){
            this.drawQrToCanvas()
        }
        )
    }
    open var initCanvas = ::gen_initCanvas_fn
    open fun gen_initCanvas_fn(): UTSPromise<Unit> {
        return UTSPromise(fun(resolve, reject){
            if (this.canvasContext != null && this.ctx != null) {
                resolve(Unit)
                return
            }
            uni_createCanvasContextAsync(CreateCanvasContextAsyncOptions(id = this.canvasId.toString() as String, component = this, success = fun(context: CanvasContext){
                this.canvasContext = context
                val ctx = context.getContext("2d")
                if (ctx == null) {
                    reject(UTSError("Canvas context is not ready"))
                    return
                }
                val canvas = ctx.canvas
                val pixelRatio = getPixelRatio()
                canvas.width = this.sizeLocal * pixelRatio
                canvas.height = this.sizeLocal * pixelRatio
                ctx.scale(pixelRatio, pixelRatio)
                this.ctx = ctx
                resolve(Unit)
            }
            , fail = fun(error: UniError){
                reject(error)
            }
            ))
        }
        )
    }
    open var drawQrToCanvas = ::gen_drawQrToCanvas_fn
    open fun gen_drawQrToCanvas_fn(): Unit {
        val context = this.ctx
        if (context == null) {
            return
        }
        val drawSize = this.sizeLocal
        context.clearRect(0, 0, drawSize, drawSize)
        context.fillStyle = this.background
        context.fillRect(0, 0, drawSize, drawSize)
        val count = getQrRenderCountWithQuietZone(this.`val`, this.lv, this.quietZone)
        run {
            var i: Number = 0
            while(i < this.cells.length){
                val cell = this.cells[i]
                if (!cell.getBoolean("dark", false)) {
                    i++
                    continue
                }
                val color = cell.getString("color", this.foreground)
                val row = Math.floor(i / count)
                val col = i % count
                val left = Math.floor(col * drawSize / count)
                val top = Math.floor(row * drawSize / count)
                val right = Math.ceil((col + 1) * drawSize / count)
                val bottom = Math.ceil((row + 1) * drawSize / count)
                context.fillStyle = color
                context.fillRect(left, top, right - left, bottom - top)
                i++
            }
        }
        context.draw()
    }
    companion object {
        var name = "up-qrcode"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("up-qrcode" to _pS(_uM("display" to "flex", "position" to "relative")), "up-qrcode__matrix" to _pS(_uM("position" to "relative", "overflow" to "hidden")), "up-qrcode__canvas" to _pS(_uM("position" to "absolute", "left" to 0, "top" to 0)), "up-qrcode__icon" to _pS(_uM("position" to "absolute", "borderTopLeftRadius" to 4, "borderTopRightRadius" to 4, "borderBottomRightRadius" to 4, "borderBottomLeftRadius" to 4, "backgroundColor" to "#ffffff")), "up-qrcode__loading" to _pS(_uM("position" to "absolute", "left" to 0, "right" to 0, "top" to 0, "bottom" to 0, "display" to "flex", "alignItems" to "center", "justifyContent" to "center", "backgroundColor" to "rgba(255,255,255,0.8)")), "up-qrcode__error" to _pS(_uM("display" to "flex", "alignItems" to "center", "justifyContent" to "center", "backgroundColor" to "#f8f8f8")), "up-qrcode__error-text" to _pS(_uM("color" to "#fa3534", "fontSize" to 14)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("result" to null, "longpressCallback" to null, "preview" to null, "error" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "cid" to _uM("type" to "String", "default" to fun(): String {
            return makeId("up-qrcode-")
        }
        ), "size" to _uM("type" to "Number", "default" to 200), "unit" to _uM("type" to "String", "default" to "px"), "show" to _uM("type" to "Boolean", "default" to true), "val" to _uM("type" to "String", "default" to ""), "background" to _uM("type" to "String", "default" to "#ffffff"), "foreground" to _uM("type" to "String", "default" to "#000000"), "pdground" to _uM("type" to "String", "default" to "#000000"), "icon" to _uM("type" to "String", "default" to ""), "iconSize" to _uM("type" to "Number", "default" to 40), "lv" to _uM("type" to "Number", "default" to 3), "quietZone" to _uM("type" to "Number", "default" to 0), "onval" to _uM("type" to "Boolean", "default" to true), "loadMake" to _uM("type" to "Boolean", "default" to true), "usingComponents" to _uM("type" to "Boolean", "default" to true), "showLoading" to _uM("type" to "Boolean", "default" to true), "loadingText" to _uM("type" to "String", "default" to "生成中"), "allowPreview" to _uM("type" to "Boolean", "default" to false), "useRootHeightAndWidth" to _uM("type" to "Boolean", "default" to false)))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
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
