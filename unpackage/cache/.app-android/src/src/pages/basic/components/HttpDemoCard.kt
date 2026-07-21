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
open class GenSrcPagesBasicComponentsHttpDemoCard : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
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
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenSrcPagesBasicComponentsHttpDemoCard) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesBasicComponentsHttpDemoCard
            val _cache = __ins.renderCache
            val mockList = ref(_uA<IFoo>())
            val loading = ref<Boolean>(false)
            val requestStatus = ref<String>("idle")
            val responseData = ref<IFoo?>(null)
            val errorMsg = ref<String>("")
            val statusText = computed(fun(): String {
                when (requestStatus.value) {
                    "loading" -> 
                        return "请求中"
                    "success" -> 
                        return "请求成功"
                    "error" -> 
                        return "请求失败"
                    else -> 
                        return "待请求"
                }
            }
            )
            val statusColor = computed(fun(): String {
                when (requestStatus.value) {
                    "loading" -> 
                        return "#d97706"
                    "success" -> 
                        return "#059669"
                    "error" -> 
                        return "#dc2626"
                    else -> 
                        return "#94a3b8"
                }
            }
            )
            val statusBgColor = computed(fun(): String {
                when (requestStatus.value) {
                    "loading" -> 
                        return "#fef9c3"
                    "success" -> 
                        return "#d1fae5"
                    "error" -> 
                        return "#fee2e2"
                    else -> 
                        return "#f1f5f9"
                }
            }
            )
            val hasResponseData = computed(fun(): Boolean {
                return responseData.value != null
            }
            )
            val hasErrorMsg = computed(fun(): Boolean {
                return errorMsg.value.length > 0
            }
            )
            val responseText = computed(fun(): String {
                val data = responseData.value
                if (data == null) {
                    return ""
                }
                return "id: " + data.id + ", name: " + data.name
            }
            )
            fun gen_loadMockData_fn(): UTSPromise<Unit> {
                return wrapUTSPromise(suspend {
                        try {
                            val list = await(getFooList())
                            mockList.value = list
                        }
                         catch (err: Throwable) {
                            console.error("loadMockData error:", err, " at src/pages/basic/components/HttpDemoCard.uvue:184")
                        }
                })
            }
            val loadMockData = ::gen_loadMockData_fn
            fun gen_fetchRealApi_fn(): UTSPromise<Unit> {
                return wrapUTSPromise(suspend {
                        loading.value = true
                        requestStatus.value = "loading"
                        responseData.value = null
                        errorMsg.value = ""
                        try {
                            val res = await(foo())
                            responseData.value = res
                            requestStatus.value = "success"
                        }
                         catch (err: Throwable) {
                            console.log(err, "err", " at src/pages/basic/components/HttpDemoCard.uvue:204")
                            requestStatus.value = "error"
                            var errStr = ""
                            if (err != null) {
                                errStr = JSON.stringify(err)
                            }
                            errorMsg.value = if (errStr.length > 0) {
                                errStr
                            } else {
                                "请求失败"
                            }
                        }
                        loading.value = false
                })
            }
            val fetchRealApi = ::gen_fetchRealApi_fn
            onMounted(fun(){
                loadMockData()
            }
            )
            return fun(): Any? {
                return _cV(unref(GenSrcPagesBasicComponentsCardClass), _uM("title" to "HTTP 请求 Demo"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cE("view", _uM("class" to "bg-__f8fafc_ rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_"), _uA(
                            _cE("text", _uM("class" to "text-12px text-__64748b_ leading-20px"), " 基于 lime-request 封装的 http 请求演示，包含 Mock 数据与真实接口请求两种模式。 ")
                        )),
                        _cE("view", _uM("class" to "mb-16px"), _uA(
                            _cE("text", _uM("class" to "text-14px font-bold text-__2d3748_ mb-10px"), "Mock 数据列表（ID 为任意类型）"),
                            _cE(Fragment, null, RenderHelpers.renderList(mockList.value, fun(item, index, __index, _cached): Any {
                                return _cE("view", _uM("key" to index, "class" to "flex-row items-center py-10px px-12px bg-__f1f5f9_ rounded-8px mt-8px"), _uA(
                                    _cE("view", _uM("class" to "w-28px h-28px rounded-14px bg-__3182ce_ justify-center items-center mr-10px"), _uA(
                                        _cE("text", _uM("class" to "text-12px text-white font-bold"), _tD(item.id), 1)
                                    )),
                                    _cE("text", _uM("class" to "text-14px text-__334155_"), _tD(item.name), 1)
                                ))
                            }
                            ), 128)
                        )),
                        _cE("view", _uM("class" to "bg-__f8fafc_ rounded-10px p-12px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_"), _uA(
                            _cE("view", _uM("class" to "flex-row justify-between items-center mb-6px"), _uA(
                                _cE("text", _uM("class" to "text-13px text-__64748b_"), "接口请求状态:"),
                                _cE("view", _uM("style" to _nS(_uM("paddingLeft" to "8px", "paddingRight" to "8px", "paddingTop" to "2px", "paddingBottom" to "2px", "borderRadius" to 10, "backgroundColor" to statusBgColor.value))), _uA(
                                    _cE("text", _uM("style" to _nS(_uM("fontSize" to 12, "color" to statusColor.value))), _tD(statusText.value), 5)
                                ), 4)
                            )),
                            if (isTrue(hasResponseData.value)) {
                                _cE("view", _uM("key" to 0, "class" to "bg-white rounded-8px p-10px border-width-1px border-style-solid border-color-__e2e8f0_"), _uA(
                                    _cE("text", _uM("class" to "text-12px text-__475569_"), _tD(responseText.value), 1)
                                ))
                            } else {
                                _cC("v-if", true)
                            }
                            ,
                            if (isTrue(hasErrorMsg.value)) {
                                _cE("view", _uM("key" to 1, "class" to "bg-__fff5f5_ rounded-8px p-10px border-width-1px border-style-solid border-color-__fecaca_ mt-6px"), _uA(
                                    _cE("text", _uM("class" to "text-12px text-__ef4444_"), "错误：" + _tD(errorMsg.value), 1)
                                ))
                            } else {
                                _cC("v-if", true)
                            }
                        )),
                        _cE("view", _uM("class" to "flex-row"), _uA(
                            _cE("view", _uM("class" to "flex-1 mr-10px"), _uA(
                                _cE("view", _uM("class" to "bg-__3182ce_ rounded-8px h-42px w-full flex flex-row items-center justify-center", "onClick" to loadMockData), _uA(
                                    _cE("text", _uM("class" to "text-__ffffff_ text-14px"), "加载 Mock 数据")
                                ))
                            )),
                            _cE("view", _uM("class" to "flex-1"), _uA(
                                _cE("view", _uM("class" to "bg-__10b981_ rounded-8px h-42px w-full flex flex-row items-center justify-center", "onClick" to fetchRealApi), _uA(
                                    _cE("text", _uM("class" to "text-__ffffff_ text-14px"), _tD(if (loading.value) {
                                        "请求中..."
                                    } else {
                                        "真实 API 请求"
                                    }
                                    ), 1)
                                ))
                            ))
                        ))
                    )
                }
                ), "_" to 1))
            }
        }
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("bg-__10b981_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#10b981")), "bg-__3182ce_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#3182ce")), "bg-__f1f5f9_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#f1f5f9")), "bg-__f8fafc_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#f8fafc")), "bg-__fff5f5_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#fff5f5")), "bg-white" to _pS(_uM("backgroundColor" to "rgba(255,255,255,var(--un-bg-opacity,1))")), "border-color-__e2e8f0_" to _pS(_uM("borderTopColor" to "#e2e8f0", "borderRightColor" to "#e2e8f0", "borderBottomColor" to "#e2e8f0", "borderLeftColor" to "#e2e8f0")), "border-color-__fecaca_" to _pS(_uM("borderTopColor" to "#fecaca", "borderRightColor" to "#fecaca", "borderBottomColor" to "#fecaca", "borderLeftColor" to "#fecaca")), "border-style-solid" to _pS(_uM("borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "border-width-1px" to _pS(_uM("borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "flex" to _pS(_uM("display" to "flex")), "flex-1" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "flex-row" to _pS(_uM("flexDirection" to "row")), "font-bold" to _pS(_uM("fontWeight" to 700)), "h-28px" to _pS(_uM("height" to 28)), "h-42px" to _pS(_uM("height" to 42)), "items-center" to _pS(_uM("alignItems" to "center")), "justify-between" to _pS(_uM("justifyContent" to "space-between")), "justify-center" to _pS(_uM("justifyContent" to "center")), "leading-20px" to _pS(_uM("lineHeight" to "20px")), "mb-10px" to _pS(_uM("marginBottom" to 10)), "mb-16px" to _pS(_uM("marginBottom" to 16)), "mb-6px" to _pS(_uM("marginBottom" to 6)), "mr-10px" to _pS(_uM("marginRight" to 10)), "mt-6px" to _pS(_uM("marginTop" to 6)), "mt-8px" to _pS(_uM("marginTop" to 8)), "p-10px" to _pS(_uM("paddingTop" to 10, "paddingRight" to 10, "paddingBottom" to 10, "paddingLeft" to 10)), "p-12px" to _pS(_uM("paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12)), "p-16px" to _pS(_uM("paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 16, "paddingLeft" to 16)), "px-12px" to _pS(_uM("paddingLeft" to 12, "paddingRight" to 12)), "py-10px" to _pS(_uM("paddingTop" to 10, "paddingBottom" to 10)), "rounded-10px" to _pS(_uM("borderTopLeftRadius" to 10, "borderTopRightRadius" to 10, "borderBottomRightRadius" to 10, "borderBottomLeftRadius" to 10)), "rounded-12px" to _pS(_uM("borderTopLeftRadius" to 12, "borderTopRightRadius" to 12, "borderBottomRightRadius" to 12, "borderBottomLeftRadius" to 12)), "rounded-14px" to _pS(_uM("borderTopLeftRadius" to 14, "borderTopRightRadius" to 14, "borderBottomRightRadius" to 14, "borderBottomLeftRadius" to 14)), "rounded-8px" to _pS(_uM("borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "text-__2d3748_" to _pS(_uM("color" to "#2d3748")), "text-__334155_" to _pS(_uM("color" to "#334155")), "text-__475569_" to _pS(_uM("color" to "#475569")), "text-__64748b_" to _pS(_uM("color" to "#64748b")), "text-__ef4444_" to _pS(_uM("color" to "#ef4444")), "text-__ffffff_" to _pS(_uM("color" to "#ffffff")), "text-12px" to _pS(_uM("fontSize" to 12)), "text-13px" to _pS(_uM("fontSize" to 13)), "text-14px" to _pS(_uM("fontSize" to 14)), "text-white" to _pS(_uM("color" to "rgba(255,255,255,var(--un-color-opacity,1))")), "w-28px" to _pS(_uM("width" to 28)), "w-full" to _pS(_uM("width" to "100%")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo")))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
