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
open class GenSrcPagesFunctionComponentsTimeDemoCard : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {}
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenSrcPagesFunctionComponentsTimeDemoCard) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesFunctionComponentsTimeDemoCard
            val _cache = __ins.renderCache
            val currentFullTime = ref("")
            var timerId: Number = 0
            val offsetDays = ref(0)
            fun gen_updateClock_fn() {
                currentFullTime.value = dayuts().format("YYYY-MM-DD HH:mm:ss.SSS dddd")
            }
            val updateClock = ::gen_updateClock_fn
            fun gen_adjustOffset_fn(days: Number) {
                offsetDays.value += days
            }
            val adjustOffset = ::gen_adjustOffset_fn
            val targetOffsetTime = computed(fun(): String {
                return dayuts().add(offsetDays.value, "day").format("YYYY-MM-DD HH:mm:ss")
            }
            )
            val startOfMonth = computed(fun(): String {
                return dayuts().startOf("month").format("YYYY-MM-DD")
            }
            )
            val endOfMonth = computed(fun(): String {
                return dayuts().endOf("month").format("YYYY-MM-DD")
            }
            )
            val isLeapYear = computed(fun(): Boolean {
                return dayuts().isLeapYear()
            }
            )
            val daysToYearEnd = computed(fun(): Number {
                val endOfYear = dayuts().endOf("year")
                val diffVal = endOfYear.diff(dayuts(), "day")
                return Math.ceil(diffVal)
            }
            )
            onMounted(fun(){
                updateClock()
                timerId = setInterval(fun(){
                    updateClock()
                }
                , 100)
            }
            )
            onUnmounted(fun(){
                if (timerId != 0) {
                    clearInterval(timerId)
                }
            }
            )
            return fun(): Any? {
                return _cV(unref(GenSrcPagesBasicComponentsCardClass), _uM("title" to "时间日期操作 (lime-dayuts)"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cE("view", _uM("class" to "wtu-4kmwrd-0 wtu-1jdh43a-1 wtu-dtibgf-2 wtu-1h5kt0c-3 wtu-4rnkc-4 wtu-11f339e-5"), _uA(
                            _cE("text", _uM("class" to "wtu-1iqtm2m-6 wtu-1oju4iv-7 wtu-115tbw1-8 wtu-c3b92s-9"), "实时高精度时钟 (更新于每一百毫秒)"),
                            _cE("text", _uM("class" to "wtu-110ukgw-a wtu-1oju4iv-7 wtu-i1z22m-b wtu-1mdi86u-c", "style" to _nS(_uM("font-family" to "monospace"))), _tD(currentFullTime.value), 5),
                            _cE("text", _uM("class" to "wtu-19je0nn-d wtu-1bwkk92-e"), " 格式模板: YYYY-MM-DD HH:mm:ss.SSS dddd ")
                        )),
                        _cE("view", _uM("class" to "wtu-4kmwrd-0 wtu-1jdh43a-1 wtu-dtibgf-2 wtu-1h5kt0c-3 wtu-4rnkc-4 wtu-11f339e-5"), _uA(
                            _cE("text", _uM("class" to "wtu-1iqtm2m-6 wtu-1oju4iv-7 wtu-115tbw1-8 wtu-136pgjf-f"), "日期偏移操作"),
                            _cE("view", _uM("class" to "wtu-av7f06-g wtu-484t6y-h wtu-avfu85-i wtu-136pgjf-f"), _uA(
                                _cE("text", _uM("class" to "wtu-2fc1j5-j wtu-v9onga-k"), "当前偏移天数:"),
                                _cE("text", _uM("class" to "wtu-1r68wxj-l wtu-1oju4iv-7 wtu-lavu4m-m"), _tD(if (offsetDays.value > 0) {
                                    "+"
                                } else {
                                    ""
                                }
                                ) + _tD(offsetDays.value) + " 天", 1)
                            )),
                            _cE("view", _uM("class" to "wtu-av7f06-g wtu-avfu85-i wtu-136pgjf-f"), _uA(
                                _cE("view", _uM("class" to "wtu-1qpd44h-n wtu-1oyi3ms-o"), _uA(
                                    _cE("view", _uM("class" to "wtu-173zvjd-p wtu-t2tdnc-q wtu-1qs4qj6-r wtu-16xqvqb-s wtu-1jd3mn7-t wtu-av7f06-g wtu-484t6y-h wtu-7vso4e-u", "onClick" to fun(){
                                        adjustOffset(-7)
                                    }
                                    ), _uA(
                                        _cE("text", _uM("class" to "wtu-ee1xhe-v wtu-19je0nn-d wtu-1oju4iv-7"), "-7 天")
                                    ), 8, _uA(
                                        "onClick"
                                    ))
                                )),
                                _cE("view", _uM("class" to "wtu-1qpd44h-n wtu-1oyi3ms-o"), _uA(
                                    _cE("view", _uM("class" to "wtu-173zvjd-p wtu-t2tdnc-q wtu-1qs4qj6-r wtu-16xqvqb-s wtu-1jd3mn7-t wtu-av7f06-g wtu-484t6y-h wtu-7vso4e-u", "onClick" to fun(){
                                        adjustOffset(-1)
                                    }
                                    ), _uA(
                                        _cE("text", _uM("class" to "wtu-ee1xhe-v wtu-19je0nn-d wtu-1oju4iv-7"), "-1 天")
                                    ), 8, _uA(
                                        "onClick"
                                    ))
                                )),
                                _cE("view", _uM("class" to "wtu-1qpd44h-n wtu-1oyi3ms-o"), _uA(
                                    _cE("view", _uM("class" to "wtu-173zvjd-p wtu-t2tdnc-q wtu-1qs4qj6-r wtu-16xqvqb-s wtu-1jd3mn7-t wtu-av7f06-g wtu-484t6y-h wtu-7vso4e-u", "onClick" to fun(){
                                        adjustOffset(1)
                                    }
                                    ), _uA(
                                        _cE("text", _uM("class" to "wtu-ee1xhe-v wtu-19je0nn-d wtu-1oju4iv-7"), "+1 天")
                                    ), 8, _uA(
                                        "onClick"
                                    ))
                                )),
                                _cE("view", _uM("class" to "wtu-1qpd44h-n"), _uA(
                                    _cE("view", _uM("class" to "wtu-173zvjd-p wtu-t2tdnc-q wtu-1qs4qj6-r wtu-16xqvqb-s wtu-1jd3mn7-t wtu-av7f06-g wtu-484t6y-h wtu-7vso4e-u", "onClick" to fun(){
                                        adjustOffset(7)
                                    }
                                    ), _uA(
                                        _cE("text", _uM("class" to "wtu-ee1xhe-v wtu-19je0nn-d wtu-1oju4iv-7"), "+7 天")
                                    ), 8, _uA(
                                        "onClick"
                                    ))
                                ))
                            )),
                            _cE("view", _uM("class" to "wtu-1xfhmhe-w wtu-lhlnxb-x wtu-vpqmae-y")),
                            _cE("view", null, _uA(
                                _cE("text", _uM("class" to "wtu-19je0nn-d wtu-1bwkk92-e wtu-c0eg5k-z"), "计算得到的目标时间:"),
                                _cE("text", _uM("class" to "wtu-2fc1j5-j wtu-1oju4iv-7 wtu-lavu4m-m"), _tD(targetOffsetTime.value), 1)
                            ))
                        )),
                        _cE("view", _uM("class" to "wtu-4kmwrd-0 wtu-1jdh43a-1 wtu-1h5kt0c-3 wtu-4rnkc-4 wtu-11f339e-5"), _uA(
                            _cE("text", _uM("class" to "wtu-1iqtm2m-6 wtu-1oju4iv-7 wtu-115tbw1-8 wtu-136pgjf-f"), "常用日期边界与区间计算"),
                            _cE("view", _uM("class" to "wtu-av7f06-g wtu-avfu85-i wtu-c3b92s-9"), _uA(
                                _cE("text", _uM("class" to "wtu-2fc1j5-j wtu-v9onga-k"), "本月第一天"),
                                _cE("text", _uM("class" to "wtu-2fc1j5-j wtu-quefir-10 wtu-lavu4m-m"), _tD(startOfMonth.value), 1)
                            )),
                            _cE("view", _uM("class" to "wtu-av7f06-g wtu-avfu85-i wtu-c3b92s-9"), _uA(
                                _cE("text", _uM("class" to "wtu-2fc1j5-j wtu-v9onga-k"), "本月最后一天"),
                                _cE("text", _uM("class" to "wtu-2fc1j5-j wtu-quefir-10 wtu-lavu4m-m"), _tD(endOfMonth.value), 1)
                            )),
                            _cE("view", _uM("class" to "wtu-av7f06-g wtu-avfu85-i wtu-c3b92s-9"), _uA(
                                _cE("text", _uM("class" to "wtu-2fc1j5-j wtu-v9onga-k"), "今年天数"),
                                _cE("text", _uM("class" to "wtu-2fc1j5-j wtu-quefir-10 wtu-lavu4m-m"), _tD(if (isLeapYear.value) {
                                    "366天 (闰年)"
                                } else {
                                    "365天 (平年)"
                                }
                                ), 1)
                            )),
                            _cE("view", _uM("class" to "wtu-av7f06-g wtu-avfu85-i"), _uA(
                                _cE("text", _uM("class" to "wtu-2fc1j5-j wtu-v9onga-k"), "距离今年底倒计时"),
                                _cE("text", _uM("class" to "wtu-2fc1j5-j wtu-1oju4iv-7 wtu-kluce4-11"), _tD(daysToYearEnd.value) + " 天", 1)
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
                return _uM("wtu-4kmwrd-0" to _pS(_uM("borderTopLeftRadius" to 12, "borderTopRightRadius" to 12, "borderBottomRightRadius" to 12, "borderBottomLeftRadius" to 12)), "wtu-1jdh43a-1" to _pS(_uM("paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 16, "paddingLeft" to 16)), "wtu-dtibgf-2" to _pS(_uM("marginBottom" to 16)), "wtu-1h5kt0c-3" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderRightStyle" to "var(--tw-border-style)", "borderBottomStyle" to "var(--tw-border-style)", "borderLeftStyle" to "var(--tw-border-style)", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "wtu-4rnkc-4" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "wtu-11f339e-5" to _pS(_uM("borderTopColor" to "#e2e8f0", "borderRightColor" to "#e2e8f0", "borderBottomColor" to "#e2e8f0", "borderLeftColor" to "#e2e8f0")), "wtu-1iqtm2m-6" to _pS(_uM("fontSize" to 13)), "wtu-1oju4iv-7" to _pS(_uM("--tw-font-weight" to "var(--font-weight-bold, 700)", "fontWeight" to 700)), "wtu-115tbw1-8" to _pS(_uM("color" to "#1e293b")), "wtu-c3b92s-9" to _pS(_uM("marginBottom" to 8)), "wtu-110ukgw-a" to _pS(_uM("fontSize" to 24)), "wtu-i1z22m-b" to _pS(_uM("color" to "var(--theme-color)")), "wtu-1mdi86u-c" to _pS(_uM("marginBottom" to 6)), "wtu-19je0nn-d" to _pS(_uM("fontSize" to 12)), "wtu-1bwkk92-e" to _pS(_uM("color" to "#94a3b8")), "wtu-136pgjf-f" to _pS(_uM("marginBottom" to 12)), "wtu-av7f06-g" to _pS(_uM("flexDirection" to "row")), "wtu-484t6y-h" to _pS(_uM("alignItems" to "center")), "wtu-avfu85-i" to _pS(_uM("justifyContent" to "space-between")), "wtu-2fc1j5-j" to _pS(_uM("fontSize" to 14)), "wtu-v9onga-k" to _pS(_uM("color" to "#64748b")), "wtu-1r68wxj-l" to _pS(_uM("fontSize" to 16)), "wtu-lavu4m-m" to _pS(_uM("color" to "#334155")), "wtu-1qpd44h-n" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "wtu-1oyi3ms-o" to _pS(_uM("marginRight" to 8)), "wtu-173zvjd-p" to _pS(_uM("width" to "100%")), "wtu-t2tdnc-q" to _pS(_uM("height" to 36)), "wtu-1qs4qj6-r" to _pS(_uM("borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "wtu-16xqvqb-s" to _pS(_uM("backgroundColor" to "#e0edff")), "wtu-1jd3mn7-t" to _pS(_uM("display" to "flex")), "wtu-7vso4e-u" to _pS(_uM("justifyContent" to "center")), "wtu-ee1xhe-v" to _pS(_uM("color" to "#3b82f6")), "wtu-1xfhmhe-w" to _pS(_uM("height" to 1)), "wtu-lhlnxb-x" to _pS(_uM("backgroundColor" to "#e2e8f0")), "wtu-vpqmae-y" to _pS(_uM("marginTop" to 10, "marginBottom" to 10)), "wtu-c0eg5k-z" to _pS(_uM("marginBottom" to 4)), "wtu-quefir-10" to _pS(_uM("--tw-font-weight" to "var(--font-weight-medium, 500)", "fontWeight" to 500)), "wtu-kluce4-11" to _pS(_uM("color" to "#f43f5e")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM())
        var propsNeedCastKeys: UTSArray<String> = _uA()
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
