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
import io.dcloud.uniapp.extapi.createWebviewContext as uni_createWebviewContext
import io.dcloud.uniapp.extapi.env as uni_env
import io.dcloud.uniapp.extapi.getFileSystemManager as uni_getFileSystemManager
import io.dcloud.uniapp.extapi.showModal as uni_showModal
open class GenUniModulesEChartComponentsEChartEChart : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
        onMounted(fun() {
            this.onCanvasReady()
        }
        , __ins)
        this.`$watch`(fun(): Any? {
            return this.width
        }
        , fun() {
            this.resize()
        }
        )
        this.`$watch`(fun(): Any? {
            return this.height
        }
        , fun() {
            this.resize()
        }
        )
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        val _component_web_view = resolveComponent("web-view")
        return _cV(_component_web_view, _uM("id" to _ctx.canvasId, "style" to _nS(_ctx.canvasStyle), "bounces" to false, "horizontalScrollBarAccess" to false, "verticalScrollBarAccess" to false, "webview-styles" to _uO("progress" to false), "src" to "/uni_modules/e-chart/static/app/webview.html", "onLoad" to _ctx.onCanvasReady, "onError" to _ctx.onWebviewError, "onMessage" to _ctx.onWebviewMsg), null, 8, _uA(
            "id",
            "style",
            "onLoad",
            "onError",
            "onMessage"
        ))
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var width: Any by `$props`
    open var height: Any by `$props`
    open var disableScroll: Boolean? by `$props`
    open var theme: String? by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var echartObj: WebviewEchart? by `$data`
    open var canvasId: Any? by `$data`
    open var canvasStyle: String by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "parentData" to _uO(), "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>(), "echartObj" to null as WebviewEchart?, "canvasId" to getRandomId(), "canvasStyle" to computed<String>(fun(): String {
            return "width:" + addUnitRpx(this.width) + ";height:" + addUnitRpx(this.height)
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
    open var onCanvasReady = ::gen_onCanvasReady_fn
    open fun gen_onCanvasReady_fn() {
        this.`$emit`("ready")
    }
    open var init = ::gen_init_fn
    open fun gen_init_fn(option: UTSJSONObject): UTSPromise<UTSJSONObject> {
        return wrapUTSPromise(suspend w@{
                return@w this.initAPP(option) as UTSJSONObject
        })
    }
    open var initAPP = ::gen_initAPP_fn
    open fun gen_initAPP_fn(option: UTSJSONObject): UTSJSONObject? {
        val id = this.canvasId as String
        val ctx = uni_createWebviewContext(id, this)
        if (ctx == null) {
            console.error("初始化echart的webview失败")
            return null
        }
        this.echartObj = WebviewEchart(ctx)
        this.echartObj!!.init(this.theme)
        this.setOption(option)
        return _uO("echartObj" to this.echartObj!!)
    }
    open var getEchartObj = ::gen_getEchartObj_fn
    open fun gen_getEchartObj_fn(): WebviewEchart {
        return this.echartObj as WebviewEchart
    }
    open var setOption = ::gen_setOption_fn
    open fun gen_setOption_fn(option: UTSJSONObject) {
        this.echartObj?.setOption(option)
    }
    open var getOption = ::gen_getOption_fn
    open fun gen_getOption_fn(): UTSPromise<UTSJSONObject> {
        return UTSPromise<UTSJSONObject>(fun(resolve, _reject){
            this.echartObj!!.getOption(resolve)
        }
        )
    }
    open var getWidth = ::gen_getWidth_fn
    open fun gen_getWidth_fn(): UTSPromise<Number> {
        return UTSPromise<Number>(fun(resolve, _reject){
            this.echartObj!!.getWidth(fun(e: UTSJSONObject){
                resolve(e["width"] as Number)
            }
            )
        }
        )
    }
    open var getHeight = ::gen_getHeight_fn
    open fun gen_getHeight_fn(): UTSPromise<Number> {
        return UTSPromise<Number>(fun(resolve, _reject){
            this.echartObj!!.getHeight(fun(e: UTSJSONObject){
                resolve(e["height"] as Number)
            }
            )
        }
        )
    }
    open var resize = ::gen_resize_fn
    open fun gen_resize_fn() {
        this.echartObj?.resize()
    }
    open var canvasToTempFilePath = ::gen_canvasToTempFilePath_fn
    open fun gen_canvasToTempFilePath_fn(): UTSPromise<String> {
        return UTSPromise<String>(fun(resolve, reject){
            val fail = fun(e: UTSJSONObject){
                uni_showModal(ShowModalOptions(title = "保存失败", content = JSON.stringify(e), showCancel = false))
                reject(e)
            }
            this.echartObj?.canvasToTempFilePath(_uO("success" to fun(e: UTSJSONObject){
                val base64 = e["base64"] as String
                val fileSystemManager = uni_getFileSystemManager()
                val filePath = "" + uni_env.USER_DATA_PATH + "/" + Date.now() + ".png"
                fileSystemManager.writeFile(WriteFileOptions(filePath = filePath, encoding = "base64", data = base64.replace("data:image/png;base64,", ""), success = fun(res){
                    resolve(filePath)
                }
                , fail = fun(err){
                    fail(err as UTSJSONObject)
                }
                ))
            }
            , "fail" to fail))
        }
        )
    }
    open var showLoading = ::gen_showLoading_fn
    open fun gen_showLoading_fn(option: UTSJSONObject) {
        this.echartObj?.showLoading(option)
    }
    open var hideLoading = ::gen_hideLoading_fn
    open fun gen_hideLoading_fn() {
        this.echartObj?.hideLoading()
    }
    open var onWebviewMsg = ::gen_onWebviewMsg_fn
    open fun gen_onWebviewMsg_fn(e: UniWebViewMessageEvent) {
        this.echartObj?.onWebviewMsg(e)
    }
    open var onWebviewError = ::gen_onWebviewError_fn
    open fun gen_onWebviewError_fn(e: UniWebViewErrorEvent) {
        console.error("onWebviewError:", e)
    }
    companion object {
        var name = "e-chart"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA())
        }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("ready" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "width" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to "100%"), "height" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to 600), "disableScroll" to _uM("type" to "Boolean"), "theme" to _uM("type" to "String")))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "width",
            "height",
            "disableScroll"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
