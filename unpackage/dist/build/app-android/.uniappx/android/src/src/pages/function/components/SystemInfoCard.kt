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
import io.dcloud.uniapp.extapi.getSystemInfoSync as uni_getSystemInfoSync
open class GenSrcPagesFunctionComponentsSystemInfoCard : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {}
    companion object {
        @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
        var setup: (__props: GenSrcPagesFunctionComponentsSystemInfoCard) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesFunctionComponentsSystemInfoCard
            val _cache = __ins.renderCache
            val sysBrand = ref("")
            val sysModel = ref("")
            val sysSystem = ref("")
            val sysPlatform = ref("")
            fun gen_fetchSystemInfo_fn() {
                try {
                    val info = uni_getSystemInfoSync()
                    sysBrand.value = info.brand ?: ""
                    sysModel.value = info.model ?: ""
                    sysSystem.value = info.system ?: ""
                    sysPlatform.value = info.uniPlatform ?: ""
                }
                 catch (err: Throwable) {
                    console.error(err)
                }
            }
            val fetchSystemInfo = ::gen_fetchSystemInfo_fn
            onMounted(fun(){
                fetchSystemInfo()
            }
            )
            return fun(): Any? {
                return _cV(unref(GenSrcPagesBasicComponentsCardClass), _uM("title" to "设备系统信息"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cE("view", _uM("class" to "wtu-oay3eq-0 wtu-xwpmb1-1 wtu-1f04jd2-2 wtu-yvwy5v-3 wtu-ydbv97-4 wtu-luxr69-5"), _uA(
                            _cE("view", _uM("class" to "wtu-2dnwdx-6 wtu-y6hc1g-7 wtu-fxzeik-8"), _uA(
                                _cE("text", _uM("class" to "wtu-1hz062s-9 wtu-2prjq9-a"), "手机品牌"),
                                _cE("text", _uM("class" to "wtu-1hz062s-9 wtu-10grseq-b wtu-14btyn8-c"), _tD(if (sysBrand.value !== "") {
                                    sysBrand.value
                                } else {
                                    "暂无数据"
                                }
                                ), 1)
                            )),
                            _cE("view", _uM("class" to "wtu-2dnwdx-6 wtu-y6hc1g-7 wtu-fxzeik-8"), _uA(
                                _cE("text", _uM("class" to "wtu-1hz062s-9 wtu-2prjq9-a"), "手机型号"),
                                _cE("text", _uM("class" to "wtu-1hz062s-9 wtu-10grseq-b wtu-14btyn8-c"), _tD(if (sysModel.value !== "") {
                                    sysModel.value
                                } else {
                                    "暂无数据"
                                }
                                ), 1)
                            )),
                            _cE("view", _uM("class" to "wtu-2dnwdx-6 wtu-y6hc1g-7 wtu-fxzeik-8"), _uA(
                                _cE("text", _uM("class" to "wtu-1hz062s-9 wtu-2prjq9-a"), "操作系统"),
                                _cE("text", _uM("class" to "wtu-1hz062s-9 wtu-10grseq-b wtu-14btyn8-c"), _tD(if (sysSystem.value !== "") {
                                    sysSystem.value
                                } else {
                                    "暂无数据"
                                }
                                ), 1)
                            )),
                            _cE("view", _uM("class" to "wtu-2dnwdx-6 wtu-y6hc1g-7"), _uA(
                                _cE("text", _uM("class" to "wtu-1hz062s-9 wtu-2prjq9-a"), "运行平台"),
                                _cE("text", _uM("class" to "wtu-1hz062s-9 wtu-10grseq-b wtu-14btyn8-c"), _tD(if (sysPlatform.value !== "") {
                                    sysPlatform.value
                                } else {
                                    "暂无数据"
                                }
                                ), 1)
                            ))
                        )),
                        _cE("view", _uM("class" to "wtu-1tlvelu-d wtu-xe6yl0-e wtu-79ydq7-f wtu-17j8w31-g wtu-o8ie9c-h wtu-2dnwdx-6 wtu-1ie67qt-i wtu-1d5n1t1-j", "onClick" to fetchSystemInfo), _uA(
                            _cE("text", _uM("class" to "wtu-tl526o-k wtu-1hz062s-9 wtu-10grseq-b"), "获取系统信息")
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
                return _uM("wtu-oay3eq-0" to _pS(_uM("borderTopLeftRadius" to 12, "borderTopRightRadius" to 12, "borderBottomRightRadius" to 12, "borderBottomLeftRadius" to 12)), "wtu-xwpmb1-1" to _pS(_uM("paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 16, "paddingLeft" to 16)), "wtu-1f04jd2-2" to _pS(_uM("marginBottom" to 16)), "wtu-yvwy5v-3" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "var(--tw-border-style)", "borderRightStyle" to "var(--tw-border-style)", "borderBottomStyle" to "var(--tw-border-style)", "borderLeftStyle" to "var(--tw-border-style)", "borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "wtu-ydbv97-4" to _pS(_uM("--tw-border-style" to "solid", "borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "wtu-luxr69-5" to _pS(_uM("borderTopColor" to "#e2e8f0", "borderRightColor" to "#e2e8f0", "borderBottomColor" to "#e2e8f0", "borderLeftColor" to "#e2e8f0")), "wtu-2dnwdx-6" to _pS(_uM("flexDirection" to "row")), "wtu-y6hc1g-7" to _pS(_uM("justifyContent" to "space-between")), "wtu-fxzeik-8" to _pS(_uM("marginBottom" to 10)), "wtu-1hz062s-9" to _pS(_uM("fontSize" to 14)), "wtu-2prjq9-a" to _pS(_uM("color" to "#718096")), "wtu-10grseq-b" to _pS(_uM("--tw-font-weight" to "var(--font-weight-bold, 700)", "fontWeight" to 700)), "wtu-14btyn8-c" to _pS(_uM("color" to "#2d3748")), "wtu-1tlvelu-d" to _pS(_uM("width" to "100%")), "wtu-xe6yl0-e" to _pS(_uM("height" to 44)), "wtu-79ydq7-f" to _pS(_uM("borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "wtu-17j8w31-g" to _pS(_uM("backgroundColor" to "#3b82f6")), "wtu-o8ie9c-h" to _pS(_uM("display" to "flex")), "wtu-1ie67qt-i" to _pS(_uM("alignItems" to "center")), "wtu-1d5n1t1-j" to _pS(_uM("justifyContent" to "center")), "wtu-tl526o-k" to _pS(_uM("color" to "#ffffff")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM())
        var propsNeedCastKeys: UTSArray<String> = _uA()
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
