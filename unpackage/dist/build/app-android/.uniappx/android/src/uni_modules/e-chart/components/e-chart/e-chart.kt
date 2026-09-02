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
import io.dcloud.uniapp.extapi.createWebviewContext as uni_createWebviewContext
import io.dcloud.uniapp.extapi.env as uni_env
import io.dcloud.uniapp.extapi.getElementById as uni_getElementById
import io.dcloud.uniapp.extapi.getFileSystemManager as uni_getFileSystemManager
import io.dcloud.uniapp.extapi.showModal as uni_showModal
open class GenUniModulesEChartComponentsEChartEChart : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {}
    open var width: Any by `$props`
    open var height: Any by `$props`
    open var disableScroll: Boolean by `$props`
    open var theme: String by `$props`
    open var init: (option: UTSJSONObject) -> UTSPromise<Any>
        get() {
            return unref(this.`$exposed`["init"]) as (option: UTSJSONObject) -> UTSPromise<Any>
        }
        set(value) {
            setRefValue(this.`$exposed`, "init", value)
        }
    open var setOption: (option: UTSJSONObject) -> Unit
        get() {
            return unref(this.`$exposed`["setOption"]) as (option: UTSJSONObject) -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "setOption", value)
        }
    open var getOption: () -> UTSPromise<UTSJSONObject>
        get() {
            return unref(this.`$exposed`["getOption"]) as () -> UTSPromise<UTSJSONObject>
        }
        set(value) {
            setRefValue(this.`$exposed`, "getOption", value)
        }
    open var getWidth: () -> UTSPromise<Number>
        get() {
            return unref(this.`$exposed`["getWidth"]) as () -> UTSPromise<Number>
        }
        set(value) {
            setRefValue(this.`$exposed`, "getWidth", value)
        }
    open var getHeight: () -> UTSPromise<Number>
        get() {
            return unref(this.`$exposed`["getHeight"]) as () -> UTSPromise<Number>
        }
        set(value) {
            setRefValue(this.`$exposed`, "getHeight", value)
        }
    open var resize: () -> Unit
        get() {
            return unref(this.`$exposed`["resize"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "resize", value)
        }
    open var getEchartObj: () -> Any?
        get() {
            return unref(this.`$exposed`["getEchartObj"]) as () -> Any?
        }
        set(value) {
            setRefValue(this.`$exposed`, "getEchartObj", value)
        }
    open var canvasToTempFilePath: () -> UTSPromise<String>
        get() {
            return unref(this.`$exposed`["canvasToTempFilePath"]) as () -> UTSPromise<String>
        }
        set(value) {
            setRefValue(this.`$exposed`, "canvasToTempFilePath", value)
        }
    open var showLoading: (option: UTSJSONObject) -> Unit
        get() {
            return unref(this.`$exposed`["showLoading"]) as (option: UTSJSONObject) -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "showLoading", value)
        }
    open var hideLoading: () -> Unit
        get() {
            return unref(this.`$exposed`["hideLoading"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "hideLoading", value)
        }
    open var onCanvasReady: () -> Unit
        get() {
            return unref(this.`$exposed`["onCanvasReady"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "onCanvasReady", value)
        }
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenUniModulesEChartComponentsEChartEChart, __setupCtx: SetupContext) -> Any? = fun(__props, __setupCtx): Any? {
            val __expose = __setupCtx.expose
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesEChartComponentsEChartEChart
            val _cache = __ins.renderCache
            fun emit(event: String, vararg do_not_transform_spread: Any?) {
                __ins.emit(event, *do_not_transform_spread)
            }
            val props = __props
            val instance = getCurrentInstance()
            val echartObj = ref<WebviewEchart?>(null)
            val canvasId = getRandomId()
            val canvasStyle = computed<String>(fun(): String {
                return "width:" + addUnitRpx(props.width) + ";height:" + addUnitRpx(props.height)
            }
            )
            fun gen_onCanvasReady_fn() {
                emit("ready")
            }
            val onCanvasReady = ::gen_onCanvasReady_fn
            fun gen_initAPP_fn(option: UTSJSONObject): UTSJSONObject? {
                var elem: UniWebViewElement? = null
                var ctx: WebviewContext? = null
                try {
                    val el = uni_getElementById(canvasId) as UniWebViewElement?
                    if (el != null) {
                        elem = el
                    }
                }
                 catch (_e: Throwable) {}
                if (elem == null) {
                    try {
                        ctx = uni_createWebviewContext(canvasId, null)
                    }
                     catch (_e: Throwable) {}
                }
                echartObj.value = WebviewEchart(canvasId, ctx, elem)
                echartObj.value!!.init(props.theme)
                echartObj.value?.setOption(option)
                setTimeout(fun(){
                    echartObj.value?.init(props.theme)
                    echartObj.value?.setOption(option)
                }
                , 120)
                return _uO("echartObj" to echartObj.value)
            }
            val initAPP = ::gen_initAPP_fn
            fun gen_init_fn(option: UTSJSONObject): UTSPromise<Any> {
                return wrapUTSPromise(suspend w1@{
                        return@w1 initAPP(option)
                })
            }
            val init = ::gen_init_fn
            fun gen_getEchartObj_fn(): Any? {
                return echartObj.value
            }
            val getEchartObj = ::gen_getEchartObj_fn
            fun gen_setOption_fn(option: UTSJSONObject) {
                echartObj.value?.setOption(option)
            }
            val setOption = ::gen_setOption_fn
            fun gen_getOption_fn(): UTSPromise<UTSJSONObject> {
                return UTSPromise<UTSJSONObject>(fun(resolve, _reject){
                    echartObj.value!!.getOption(resolve)
                }
                )
            }
            val getOption = ::gen_getOption_fn
            fun gen_getWidth_fn(): UTSPromise<Number> {
                return UTSPromise<Number>(fun(resolve, _reject){
                    echartObj.value!!.getWidth(fun(e: UTSJSONObject){
                        resolve(e["width"] as Number)
                    }
                    )
                }
                )
            }
            val getWidth = ::gen_getWidth_fn
            fun gen_getHeight_fn(): UTSPromise<Number> {
                return UTSPromise<Number>(fun(resolve, _reject){
                    echartObj.value!!.getHeight(fun(e: UTSJSONObject){
                        resolve(e["height"] as Number)
                    }
                    )
                }
                )
            }
            val getHeight = ::gen_getHeight_fn
            fun gen_resize_fn() {
                echartObj.value?.resize()
            }
            val resize = ::gen_resize_fn
            fun gen_canvasToTempFilePath_fn(): UTSPromise<String> {
                return UTSPromise<String>(fun(resolve, reject){
                    val fail = fun(e: UTSJSONObject){
                        uni_showModal(ShowModalOptions(title = "保存失败", content = JSON.stringify(e), showCancel = false))
                        reject(e)
                    }
                    echartObj.value?.canvasToTempFilePath(_uO("success" to fun(e: UTSJSONObject){
                        val base64 = e["base64"] as String
                        val fileSystemManager = uni_getFileSystemManager()
                        val filePath = "" + uni_env.USER_DATA_PATH + "/" + Date.now() + ".png"
                        fileSystemManager.writeFile(WriteFileOptions(filePath = filePath, encoding = "base64", data = base64.replace("data:image/png;base64,", ""), success = fun(_res){
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
            val canvasToTempFilePath = ::gen_canvasToTempFilePath_fn
            fun gen_showLoading_fn(option: UTSJSONObject) {
                echartObj.value?.showLoading(option)
            }
            val showLoading = ::gen_showLoading_fn
            fun gen_hideLoading_fn() {
                echartObj.value?.hideLoading()
            }
            val hideLoading = ::gen_hideLoading_fn
            fun gen_onWebviewMsg_fn(e: UniWebViewMessageEvent) {
                echartObj.value?.onWebviewMsg(e)
            }
            val onWebviewMsg = ::gen_onWebviewMsg_fn
            fun gen_onWebviewError_fn(e: UniWebViewErrorEvent) {
                console.error("onWebviewError:", e)
            }
            val onWebviewError = ::gen_onWebviewError_fn
            watch(fun(): Any {
                return props.width
            }
            , fun(){
                resize()
            }
            )
            watch(fun(): Any {
                return props.height
            }
            , fun(){
                resize()
            }
            )
            onMounted(fun(){})
            __expose(_uM("init" to init, "setOption" to setOption, "getOption" to getOption, "getWidth" to getWidth, "getHeight" to getHeight, "resize" to resize, "getEchartObj" to getEchartObj, "canvasToTempFilePath" to canvasToTempFilePath, "showLoading" to showLoading, "hideLoading" to hideLoading, "onCanvasReady" to onCanvasReady))
            return fun(): Any? {
                val _component_web_view = resolveComponent("web-view")
                return _cV(_component_web_view, _uM("id" to unref(canvasId), "style" to _nS(canvasStyle.value), "bounces" to false, "horizontalScrollBarAccess" to false, "verticalScrollBarAccess" to false, "webview-styles" to _uO("progress" to false), "src" to "/uni_modules/e-chart/static/app/webview.html", "onLoad" to onCanvasReady, "onError" to onWebviewError, "onMessage" to onWebviewMsg), null, 8, _uA(
                    "id",
                    "style"
                ))
            }
        }
        var name = "e-chart"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA())
        }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("ready" to null)
        var props = _nP(_uM("width" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to "100%"), "height" to _uM("type" to _uA(
            "Number",
            "String"
        ), "default" to 600), "disableScroll" to _uM("type" to "Boolean", "default" to false), "theme" to _uM("type" to "String", "default" to "")))
        var propsNeedCastKeys = _uA(
            "width",
            "height",
            "disableScroll",
            "theme"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
