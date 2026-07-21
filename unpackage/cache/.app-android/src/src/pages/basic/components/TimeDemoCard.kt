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
open class GenSrcPagesBasicComponentsTimeDemoCard : VueComponent {
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
        var setup: (__props: GenSrcPagesBasicComponentsTimeDemoCard) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcPagesBasicComponentsTimeDemoCard
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
                        _cE("view", _uM("class" to "bg-__f8fafc_ rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_"), _uA(
                            _cE("text", _uM("class" to "text-13px font-bold text-__1e293b_ mb-8px"), "实时高精度时钟 (更新于每一百毫秒)"),
                            _cE("text", _uM("class" to "text-24px font-bold text-_var_--theme-color__37c2bc__ mb-6px", "style" to _nS(_uM("font-family" to "monospace"))), _tD(currentFullTime.value), 5),
                            _cE("text", _uM("class" to "text-12px text-__94a3b8_"), " 格式模板: YYYY-MM-DD HH:mm:ss.SSS dddd ")
                        )),
                        _cE("view", _uM("class" to "bg-__f8fafc_ rounded-12px p-16px mb-16px border-width-1px border-style-solid border-color-__e2e8f0_"), _uA(
                            _cE("text", _uM("class" to "text-13px font-bold text-__1e293b_ mb-12px"), "日期偏移操作"),
                            _cE("view", _uM("class" to "flex-row items-center justify-between mb-12px"), _uA(
                                _cE("text", _uM("class" to "text-14px text-__64748b_"), "当前偏移天数:"),
                                _cE("text", _uM("class" to "text-16px font-bold text-__334155_"), _tD(if (offsetDays.value > 0) {
                                    "+"
                                } else {
                                    ""
                                }
                                ) + _tD(offsetDays.value) + " 天", 1)
                            )),
                            _cE("view", _uM("class" to "flex-row justify-between mb-12px"), _uA(
                                _cE("view", _uM("class" to "flex-1 mr-8px"), _uA(
                                    _cE("view", _uM("class" to "w-full h-36px rounded-8px bg-__e0edff_ flex flex-row items-center justify-center", "onClick" to fun(){
                                        adjustOffset(-7)
                                    }
                                    ), _uA(
                                        _cE("text", _uM("class" to "text-__3b82f6_ text-12px font-bold"), "-7 天")
                                    ), 8, _uA(
                                        "onClick"
                                    ))
                                )),
                                _cE("view", _uM("class" to "flex-1 mr-8px"), _uA(
                                    _cE("view", _uM("class" to "w-full h-36px rounded-8px bg-__e0edff_ flex flex-row items-center justify-center", "onClick" to fun(){
                                        adjustOffset(-1)
                                    }
                                    ), _uA(
                                        _cE("text", _uM("class" to "text-__3b82f6_ text-12px font-bold"), "-1 天")
                                    ), 8, _uA(
                                        "onClick"
                                    ))
                                )),
                                _cE("view", _uM("class" to "flex-1 mr-8px"), _uA(
                                    _cE("view", _uM("class" to "w-full h-36px rounded-8px bg-__e0edff_ flex flex-row items-center justify-center", "onClick" to fun(){
                                        adjustOffset(1)
                                    }
                                    ), _uA(
                                        _cE("text", _uM("class" to "text-__3b82f6_ text-12px font-bold"), "+1 天")
                                    ), 8, _uA(
                                        "onClick"
                                    ))
                                )),
                                _cE("view", _uM("class" to "flex-1"), _uA(
                                    _cE("view", _uM("class" to "w-full h-36px rounded-8px bg-__e0edff_ flex flex-row items-center justify-center", "onClick" to fun(){
                                        adjustOffset(7)
                                    }
                                    ), _uA(
                                        _cE("text", _uM("class" to "text-__3b82f6_ text-12px font-bold"), "+7 天")
                                    ), 8, _uA(
                                        "onClick"
                                    ))
                                ))
                            )),
                            _cE("view", _uM("class" to "border-top-width-1px border-top-style-solid border-top-color-__e2e8f0_ pt-8px mt-8px"), _uA(
                                _cE("text", _uM("class" to "text-12px text-__94a3b8_ mb-4px"), "计算得到的目标时间:"),
                                _cE("text", _uM("class" to "text-14px font-bold text-__334155_"), _tD(targetOffsetTime.value), 1)
                            ))
                        )),
                        _cE("view", _uM("class" to "bg-__f8fafc_ rounded-12px p-16px border-width-1px border-style-solid border-color-__e2e8f0_"), _uA(
                            _cE("text", _uM("class" to "text-13px font-bold text-__1e293b_ mb-12px"), "常用日期边界与区间计算"),
                            _cE("view", _uM("class" to "flex-row justify-between mb-8px"), _uA(
                                _cE("text", _uM("class" to "text-14px text-__64748b_"), "本月第一天"),
                                _cE("text", _uM("class" to "text-14px font-medium text-__334155_"), _tD(startOfMonth.value), 1)
                            )),
                            _cE("view", _uM("class" to "flex-row justify-between mb-8px"), _uA(
                                _cE("text", _uM("class" to "text-14px text-__64748b_"), "本月最后一天"),
                                _cE("text", _uM("class" to "text-14px font-medium text-__334155_"), _tD(endOfMonth.value), 1)
                            )),
                            _cE("view", _uM("class" to "flex-row justify-between mb-8px"), _uA(
                                _cE("text", _uM("class" to "text-14px text-__64748b_"), "今年天数"),
                                _cE("text", _uM("class" to "text-14px font-medium text-__334155_"), _tD(if (isLeapYear.value) {
                                    "366天 (闰年)"
                                } else {
                                    "365天 (平年)"
                                }
                                ), 1)
                            )),
                            _cE("view", _uM("class" to "flex-row justify-between"), _uA(
                                _cE("text", _uM("class" to "text-14px text-__64748b_"), "距离今年底倒计时"),
                                _cE("text", _uM("class" to "text-14px font-bold text-__f43f5e_"), _tD(daysToYearEnd.value) + " 天", 1)
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
                return _uM("bg-__e0edff_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#e0edff")), "bg-__f8fafc_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#f8fafc")), "border-color-__e2e8f0_" to _pS(_uM("borderTopColor" to "#e2e8f0", "borderRightColor" to "#e2e8f0", "borderBottomColor" to "#e2e8f0", "borderLeftColor" to "#e2e8f0")), "border-style-solid" to _pS(_uM("borderTopStyle" to "solid", "borderRightStyle" to "solid", "borderBottomStyle" to "solid", "borderLeftStyle" to "solid")), "border-top-color-__e2e8f0_" to _pS(_uM("borderTopColor" to "#e2e8f0")), "border-top-style-solid" to _pS(_uM("borderTopStyle" to "solid")), "border-top-width-1px" to _pS(_uM("borderTopWidth" to 1)), "border-width-1px" to _pS(_uM("borderTopWidth" to 1, "borderRightWidth" to 1, "borderBottomWidth" to 1, "borderLeftWidth" to 1)), "flex" to _pS(_uM("display" to "flex")), "flex-1" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "flex-row" to _pS(_uM("flexDirection" to "row")), "font-bold" to _pS(_uM("fontWeight" to "700")), "font-medium" to _pS(_uM("fontWeight" to "500")), "h-36px" to _pS(_uM("height" to 36)), "items-center" to _pS(_uM("alignItems" to "center")), "justify-between" to _pS(_uM("justifyContent" to "space-between")), "justify-center" to _pS(_uM("justifyContent" to "center")), "mb-12px" to _pS(_uM("marginBottom" to 12)), "mb-16px" to _pS(_uM("marginBottom" to 16)), "mb-4px" to _pS(_uM("marginBottom" to 4)), "mb-6px" to _pS(_uM("marginBottom" to 6)), "mb-8px" to _pS(_uM("marginBottom" to 8)), "mr-8px" to _pS(_uM("marginRight" to 8)), "mt-8px" to _pS(_uM("marginTop" to 8)), "p-16px" to _pS(_uM("paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 16, "paddingLeft" to 16)), "pt-8px" to _pS(_uM("paddingTop" to 8)), "rounded-12px" to _pS(_uM("borderTopLeftRadius" to 12, "borderTopRightRadius" to 12, "borderBottomRightRadius" to 12, "borderBottomLeftRadius" to 12)), "rounded-8px" to _pS(_uM("borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "text-__1e293b_" to _pS(_uM("color" to "#1e293b")), "text-__334155_" to _pS(_uM("color" to "#334155")), "text-__3b82f6_" to _pS(_uM("color" to "#3b82f6")), "text-__64748b_" to _pS(_uM("color" to "#64748b")), "text-__94a3b8_" to _pS(_uM("color" to "#94a3b8")), "text-__f43f5e_" to _pS(_uM("color" to "#f43f5e")), "text-_var_--theme-color__37c2bc__" to _pS(_uM("color" to "var(--theme-color,#37c2bc)")), "text-12px" to _pS(_uM("fontSize" to 12)), "text-13px" to _pS(_uM("fontSize" to 13)), "text-14px" to _pS(_uM("fontSize" to 14)), "text-16px" to _pS(_uM("fontSize" to 16)), "text-24px" to _pS(_uM("fontSize" to 24)), "text-center" to _pS(_uM("textAlign" to "center")), "w-full" to _pS(_uM("width" to "100%")))
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
