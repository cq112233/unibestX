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
open class GenSrcPagesFunctionComponentsEchartsDemoCard : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {}
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenSrcPagesFunctionComponentsEchartsDemoCard) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesFunctionComponentsEchartsDemoCard
            val _cache = __ins.renderCache
            val echartTitle = computed(fun(): String {
                return `$t`("basic.echartTitle")
            }
            )
            val echartLineText = computed(fun(): String {
                return `$t`("basic.echartLine")
            }
            )
            val echartBarText = computed(fun(): String {
                return `$t`("basic.echartBar")
            }
            )
            val echartPieText = computed(fun(): String {
                return `$t`("basic.echartPie")
            }
            )
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
                return _cV(unref(GenSrcPagesBasicComponentsCardClass), _uM("title" to echartTitle.value), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cE("view", _uM("class" to "wtu-1gus49c-0 wtu-fven52-1 wtu-15g7x2s-2"), _uA(
                            _cV(_component_e_chart, _uM("ref_key" to "echartRef", "ref" to echartRef, "height" to "280px", "class" to "wtu-1gus49c-0 wtu-1hnun9r-3", "onReady" to initEchart), null, 512)
                        )),
                        _cE("view", _uM("class" to "wtu-mcij7f-4 wtu-z7dd2m-5 wtu-1d3bbdp-6"), _uA(
                            _cE("view", _uM("class" to "wtu-1jofu1o-7 wtu-s54k3p-8"), _uA(
                                _cE("view", _uM("class" to _nC(_uA(
                                    "wtu-1gus49c-0 wtu-utvssx-9 wtu-1gx3c6p-a wtu-1xomkve-b wtu-mcij7f-4 wtu-1vz4tc3-c wtu-80iwab-d",
                                    if (currentType.value !== "line") {
                                        "wtu-1t1j6iy-e"
                                    } else {
                                        "wtu-1oruciv-f"
                                    }
                                )), "onClick" to changeToLine), _uA(
                                    _cE("text", _uM("class" to _nC(_uA(
                                        "wtu-esa49s-g wtu-100960-h",
                                        if (currentType.value !== "line") {
                                            "wtu-ecywtr-i"
                                        } else {
                                            "wtu-1y2qqu-j"
                                        }
                                    ))), _tD(echartLineText.value), 3)
                                ), 2)
                            )),
                            _cE("view", _uM("class" to "wtu-1jofu1o-7 wtu-s54k3p-8"), _uA(
                                _cE("view", _uM("class" to _nC(_uA(
                                    "wtu-1gus49c-0 wtu-utvssx-9 wtu-1gx3c6p-a wtu-1xomkve-b wtu-mcij7f-4 wtu-1vz4tc3-c wtu-80iwab-d",
                                    if (currentType.value !== "bar") {
                                        "wtu-e83h5m-k"
                                    } else {
                                        "wtu-96qsb-l"
                                    }
                                )), "onClick" to changeToBar), _uA(
                                    _cE("text", _uM("class" to _nC(_uA(
                                        "wtu-esa49s-g wtu-100960-h",
                                        if (currentType.value !== "bar") {
                                            "wtu-rz8j03-m"
                                        } else {
                                            "wtu-1y2qqu-j"
                                        }
                                    ))), _tD(echartBarText.value), 3)
                                ), 2)
                            )),
                            _cE("view", _uM("class" to "wtu-1jofu1o-7"), _uA(
                                _cE("view", _uM("class" to _nC(_uA(
                                    "wtu-1gus49c-0 wtu-utvssx-9 wtu-1gx3c6p-a wtu-1xomkve-b wtu-mcij7f-4 wtu-1vz4tc3-c wtu-80iwab-d",
                                    if (currentType.value !== "pie") {
                                        "wtu-1votq1i-n"
                                    } else {
                                        "wtu-kr2m39-o"
                                    }
                                )), "onClick" to changeToPie), _uA(
                                    _cE("text", _uM("class" to _nC(_uA(
                                        "wtu-esa49s-g wtu-100960-h",
                                        if (currentType.value !== "pie") {
                                            "wtu-1sjpi71-p"
                                        } else {
                                            "wtu-1y2qqu-j"
                                        }
                                    ))), _tD(echartPieText.value), 3)
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
                return _uM("wtu-1gus49c-0" to _pS(_uM("width" to "100%")), "wtu-fven52-1" to _pS(_uM("height" to 280)), "wtu-15g7x2s-2" to _pS(_uM("marginTop" to 10)), "wtu-1hnun9r-3" to _pS(_uM("height" to "100%")), "wtu-mcij7f-4" to _pS(_uM("flexDirection" to "row")), "wtu-z7dd2m-5" to _pS(_uM("justifyContent" to "space-between")), "wtu-1d3bbdp-6" to _pS(_uM("marginTop" to 15)), "wtu-1jofu1o-7" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "wtu-s54k3p-8" to _pS(_uM("marginRight" to 8)), "wtu-utvssx-9" to _pS(_uM("height" to 36)), "wtu-1gx3c6p-a" to _pS(_uM("borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "wtu-1xomkve-b" to _pS(_uM("display" to "flex")), "wtu-1vz4tc3-c" to _pS(_uM("alignItems" to "center")), "wtu-80iwab-d" to _pS(_uM("justifyContent" to "center")), "wtu-1t1j6iy-e" to _pS(_uM("backgroundColor" to "#e0edff")), "wtu-1oruciv-f" to _pS(_uM("backgroundColor" to "#3b82f6")), "wtu-esa49s-g" to _pS(_uM("fontSize" to 12)), "wtu-100960-h" to _pS(_uM("--tw-font-weight" to "var(--font-weight-bold, 700)", "fontWeight" to 700)), "wtu-ecywtr-i" to _pS(_uM("color" to "#3b82f6")), "wtu-1y2qqu-j" to _pS(_uM("color" to "#ffffff")), "wtu-e83h5m-k" to _pS(_uM("backgroundColor" to "#d1fae5")), "wtu-96qsb-l" to _pS(_uM("backgroundColor" to "#10b981")), "wtu-rz8j03-m" to _pS(_uM("color" to "#10b981")), "wtu-1votq1i-n" to _pS(_uM("backgroundColor" to "#fef3c7")), "wtu-kr2m39-o" to _pS(_uM("backgroundColor" to "#f59e0b")), "wtu-1sjpi71-p" to _pS(_uM("color" to "#f59e0b")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM())
        var propsNeedCastKeys: UTSArray<String> = _uA()
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
