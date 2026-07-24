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
open class GenSrcPagesBasicComponentsEchartsDemoCard : VueComponent {
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
        var setup: (__props: GenSrcPagesBasicComponentsEchartsDemoCard) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesBasicComponentsEchartsDemoCard
            val _cache = __ins.renderCache
            val echartRef = ref<ComponentPublicInstance?>(null)
            val currentType = ref("line")
            val gridKey = "grid"
            val lineOption: UTSJSONObject = _uO("title" to _uO("text" to "访问趋势 (折线图)", "textStyle" to _uO("fontSize" to 12, "color" to "#64748b")), "xAxis" to _uO("type" to "category", "data" to _uA(
                "周一",
                "周二",
                "周三",
                "周四",
                "周五",
                "周六",
                "周日"
            ), "axisLine" to _uO("lineStyle" to _uO("color" to "#cbd5e1")), "axisLabel" to _uO("color" to "#64748b")), "yAxis" to _uO("type" to "value", "axisLine" to _uO("show" to false), "splitLine" to _uO("lineStyle" to _uO("color" to "#f1f5f9")), "axisLabel" to _uO("color" to "#64748b")), gridKey to _uO("left" to "12%", "right" to "5%", "top" to "18%", "bottom" to "12%"), "series" to _uA(
                _uO("data" to _uA(
                    120,
                    200,
                    150,
                    80,
                    70,
                    110,
                    130
                ), "type" to "line", "smooth" to true, "color" to "#3b82f6", "areaStyle" to _uO("color" to _uO("type" to "linear", "x" to 0, "y" to 0, "x2" to 0, "y2" to 1, "colorStops" to _uA(
                    _uO("offset" to 0, "color" to "rgba(59, 130, 246, 0.4)"),
                    _uO("offset" to 1, "color" to "rgba(59, 130, 246, 0)")
                ))))
            ))
            val barOption: UTSJSONObject = _uO("title" to _uO("text" to "访问分布 (柱状图)", "textStyle" to _uO("fontSize" to 12, "color" to "#64748b")), "xAxis" to _uO("type" to "category", "data" to _uA(
                "周一",
                "周二",
                "周三",
                "周四",
                "周五",
                "周六",
                "周日"
            ), "axisLine" to _uO("lineStyle" to _uO("color" to "#cbd5e1")), "axisLabel" to _uO("color" to "#64748b")), "yAxis" to _uO("type" to "value", "axisLine" to _uO("show" to false), "splitLine" to _uO("lineStyle" to _uO("color" to "#f1f5f9")), "axisLabel" to _uO("color" to "#64748b")), gridKey to _uO("left" to "12%", "right" to "5%", "top" to "18%", "bottom" to "12%"), "series" to _uA(
                _uO("data" to _uA(
                    120,
                    200,
                    150,
                    80,
                    70,
                    110,
                    130
                ), "type" to "bar", "color" to "#10b981")
            ))
            val pieOption = __uts_large_pieOption_build_6()
            fun gen_initEchart_fn() {
                if (echartRef.value != null) {
                    val chart = echartRef.value as ComponentPublicInstance
                    chart.`$callMethod`("init", lineOption)
                }
            }
            val initEchart = ::gen_initEchart_fn
            fun gen_changeToLine_fn() {
                currentType.value = "line"
                if (echartRef.value != null) {
                    val chart = echartRef.value as ComponentPublicInstance
                    chart.`$callMethod`("setOption", lineOption)
                }
            }
            val changeToLine = ::gen_changeToLine_fn
            fun gen_changeToBar_fn() {
                currentType.value = "bar"
                if (echartRef.value != null) {
                    val chart = echartRef.value as ComponentPublicInstance
                    chart.`$callMethod`("setOption", barOption)
                }
            }
            val changeToBar = ::gen_changeToBar_fn
            fun gen_changeToPie_fn() {
                currentType.value = "pie"
                if (echartRef.value != null) {
                    val chart = echartRef.value as ComponentPublicInstance
                    chart.`$callMethod`("setOption", pieOption)
                }
            }
            val changeToPie = ::gen_changeToPie_fn
            val windowWidth = computed(fun(): Number {
                return systemInfo.value?.windowWidth ?: 0
            }
            )
            watch(windowWidth, fun(){
                setTimeout(fun(){
                    if (echartRef.value != null) {
                        val chart = echartRef.value as ComponentPublicInstance
                        chart.`$callMethod`("resize")
                    }
                }
                , 100)
            }
            )
            return fun(): Any? {
                val _component_e_chart = resolveEasyComponent("e-chart", GenUniModulesEChartComponentsEChartEChartClass)
                return _cV(unref(GenSrcPagesBasicComponentsCardClass), _uM("title" to _ctx.`$t`("basic.echartTitle")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cE("view", _uM("class" to "w-full h-260px mt-10px"), _uA(
                            _cV(_component_e_chart, _uM("ref_key" to "echartRef", "ref" to echartRef, "class" to "w-full i_h-full", "onReady" to initEchart), null, 512)
                        )),
                        _cE("view", _uM("class" to "flex-row justify-between mt-15px"), _uA(
                            _cE("view", _uM("class" to "flex-1 mr-8px"), _uA(
                                _cE("view", _uM("class" to _nC(_uA(
                                    "w-full h-36px rounded-8px flex flex-row items-center justify-center",
                                    if (currentType.value !== "line") {
                                        "bg-__e0edff_"
                                    } else {
                                        "bg-__3b82f6_"
                                    }
                                )), "onClick" to changeToLine), _uA(
                                    _cE("text", _uM("class" to _nC(_uA(
                                        "text-12px font-bold",
                                        if (currentType.value !== "line") {
                                            "text-__3b82f6_"
                                        } else {
                                            "text-__ffffff_"
                                        }
                                    ))), _tD(_ctx.`$t`("basic.echartLine")), 3)
                                ), 2)
                            )),
                            _cE("view", _uM("class" to "flex-1 mr-8px"), _uA(
                                _cE("view", _uM("class" to _nC(_uA(
                                    "w-full h-36px rounded-8px flex flex-row items-center justify-center",
                                    if (currentType.value !== "bar") {
                                        "bg-__d1fae5_"
                                    } else {
                                        "bg-__10b981_"
                                    }
                                )), "onClick" to changeToBar), _uA(
                                    _cE("text", _uM("class" to _nC(_uA(
                                        "text-12px font-bold",
                                        if (currentType.value !== "bar") {
                                            "text-__10b981_"
                                        } else {
                                            "text-__ffffff_"
                                        }
                                    ))), _tD(_ctx.`$t`("basic.echartBar")), 3)
                                ), 2)
                            )),
                            _cE("view", _uM("class" to "flex-1"), _uA(
                                _cE("view", _uM("class" to _nC(_uA(
                                    "w-full h-36px rounded-8px flex flex-row items-center justify-center",
                                    if (currentType.value !== "pie") {
                                        "bg-__fef3c7_"
                                    } else {
                                        "bg-__f59e0b_"
                                    }
                                )), "onClick" to changeToPie), _uA(
                                    _cE("text", _uM("class" to _nC(_uA(
                                        "text-12px font-bold",
                                        if (currentType.value !== "pie") {
                                            "text-__f59e0b_"
                                        } else {
                                            "text-__ffffff_"
                                        }
                                    ))), _tD(_ctx.`$t`("basic.echartPie")), 3)
                                ), 2)
                            ))
                        ))
                    )
                }
                ), "_" to 1), 8, _uA(
                    "title"
                ))
            }
        }
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("bg-__10b981_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#10b981")), "bg-__3b82f6_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#3b82f6")), "bg-__d1fae5_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#d1fae5")), "bg-__e0edff_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#e0edff")), "bg-__f59e0b_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#f59e0b")), "bg-__fef3c7_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#fef3c7")), "flex" to _pS(_uM("display" to "flex")), "flex-1" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "flex-row" to _pS(_uM("flexDirection" to "row")), "font-bold" to _pS(_uM("fontWeight" to 700)), "h-260px" to _pS(_uM("height" to 260)), "h-36px" to _pS(_uM("height" to 36)), "i_h-full" to _pS(_uM("!height" to "100%")), "items-center" to _pS(_uM("alignItems" to "center")), "justify-between" to _pS(_uM("justifyContent" to "space-between")), "justify-center" to _pS(_uM("justifyContent" to "center")), "mr-8px" to _pS(_uM("marginRight" to 8)), "mt-10px" to _pS(_uM("marginTop" to 10)), "mt-15px" to _pS(_uM("marginTop" to 15)), "rounded-8px" to _pS(_uM("borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "text-__10b981_" to _pS(_uM("color" to "#10b981")), "text-__3b82f6_" to _pS(_uM("color" to "#3b82f6")), "text-__f59e0b_" to _pS(_uM("color" to "#f59e0b")), "text-__ffffff_" to _pS(_uM("color" to "#ffffff")), "text-12px" to _pS(_uM("fontSize" to 12)), "w-full" to _pS(_uM("width" to "100%")))
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
