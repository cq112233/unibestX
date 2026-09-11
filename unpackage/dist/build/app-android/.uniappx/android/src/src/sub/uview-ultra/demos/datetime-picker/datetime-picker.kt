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
open class GenSrcSubUviewUltraDemosDatetimePickerDatetimePicker : BasePage {
    constructor(__ins: ComponentInternalInstance, __renderer: String?) : super(__ins, __renderer) {
        onLoad(fun(_: OnLoadOptions) {}, __ins)
        onCreated(fun() {}, __ins)
        onReachBottom(fun() {}, __ins)
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
        var setup: (__props: GenSrcSubUviewUltraDemosDatetimePickerDatetimePicker) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcSubUviewUltraDemosDatetimePickerDatetimePicker
            val _cache = __ins.renderCache
            val dtShow1 = ref<Boolean>(false)
            val dtShow2 = ref<Boolean>(false)
            val dtShow3 = ref<Boolean>(false)
            val dtShow4 = ref<Boolean>(false)
            val dtShowMinMaxDate = ref<Boolean>(false)
            val dtShowMinMaxTime = ref<Boolean>(false)
            val dtShowStart = ref<Boolean>(false)
            val dtShowEnd = ref<Boolean>(false)
            val dtValue1 = ref<Number>(Date.parse("2026-08-10 08:30:00"))
            val dtValue2 = ref<Number>(Date.parse("2026-08-10 00:00:00"))
            val dtValue3 = ref<Number>(Date.parse("2026-08-10 00:00:00"))
            val dtValue4 = ref<String>("08:30")
            val limitMinDate = Date.parse("2026-08-01 00:00:00")
            val limitMaxDate = Date.parse("2026-08-31 00:00:00")
            val dtValueMinMaxDate = ref<Number>(Date.parse("2026-08-10 00:00:00"))
            val dtValueMinMaxTime = ref<String>("09:30")
            val dtValueStart = ref<Number>(Date.parse("2026-08-10 00:00:00"))
            val dtValueEnd = ref<Number>(Date.parse("2026-08-20 00:00:00"))
            fun gen_formatDate_fn(timestamp: Number): String {
                val d = Date(timestamp)
                val year = d.getFullYear()
                val month = (if (d.getMonth() + 1 < 10) {
                    "0"
                } else {
                    ""
                }
                ) + (d.getMonth() + 1)
                val date = (if (d.getDate() < 10) {
                    "0"
                } else {
                    ""
                }
                ) + d.getDate()
                val hours = (if (d.getHours() < 10) {
                    "0"
                } else {
                    ""
                }
                ) + d.getHours()
                val minutes = (if (d.getMinutes() < 10) {
                    "0"
                } else {
                    ""
                }
                ) + d.getMinutes()
                return "" + year + "-" + month + "-" + date + " " + hours + ":" + minutes
            }
            val formatDate = ::gen_formatDate_fn
            fun gen_formatDateOnly_fn(timestamp: Number): String {
                val d = Date(timestamp)
                val year = d.getFullYear()
                val month = (if (d.getMonth() + 1 < 10) {
                    "0"
                } else {
                    ""
                }
                ) + (d.getMonth() + 1)
                val date = (if (d.getDate() < 10) {
                    "0"
                } else {
                    ""
                }
                ) + d.getDate()
                return "" + year + "-" + month + "-" + date
            }
            val formatDateOnly = ::gen_formatDateOnly_fn
            fun gen_formatYearMonth_fn(timestamp: Number): String {
                val d = Date(timestamp)
                val year = d.getFullYear()
                val month = (if (d.getMonth() + 1 < 10) {
                    "0"
                } else {
                    ""
                }
                ) + (d.getMonth() + 1)
                return "" + year + "-" + month
            }
            val formatYearMonth = ::gen_formatYearMonth_fn
            fun gen_onConfirm1_fn(e: UTSJSONObject) {
                val kVal = e["value"]
                if (kVal != null) {
                    dtValue1.value = kVal as Number
                }
                dtShow1.value = false
            }
            val onConfirm1 = ::gen_onConfirm1_fn
            fun gen_onConfirm2_fn(e: UTSJSONObject) {
                val kVal = e["value"]
                if (kVal != null) {
                    dtValue2.value = kVal as Number
                }
                dtShow2.value = false
            }
            val onConfirm2 = ::gen_onConfirm2_fn
            fun gen_onConfirm3_fn(e: UTSJSONObject) {
                val kVal = e["value"]
                if (kVal != null) {
                    dtValue3.value = kVal as Number
                }
                dtShow3.value = false
            }
            val onConfirm3 = ::gen_onConfirm3_fn
            fun gen_onConfirm4_fn(e: UTSJSONObject) {
                val kVal = e["value"]
                if (kVal != null) {
                    dtValue4.value = kVal.toString()
                }
                dtShow4.value = false
            }
            val onConfirm4 = ::gen_onConfirm4_fn
            fun gen_onConfirmMinMaxDate_fn(e: UTSJSONObject) {
                val kVal = e["value"]
                if (kVal != null) {
                    dtValueMinMaxDate.value = kVal as Number
                }
                dtShowMinMaxDate.value = false
            }
            val onConfirmMinMaxDate = ::gen_onConfirmMinMaxDate_fn
            fun gen_onConfirmMinMaxTime_fn(e: UTSJSONObject) {
                val kVal = e["value"]
                if (kVal != null) {
                    dtValueMinMaxTime.value = kVal.toString()
                }
                dtShowMinMaxTime.value = false
            }
            val onConfirmMinMaxTime = ::gen_onConfirmMinMaxTime_fn
            fun gen_onConfirmStart_fn(e: UTSJSONObject) {
                val kVal = e["value"]
                if (kVal != null) {
                    dtValueStart.value = kVal as Number
                }
                dtShowStart.value = false
            }
            val onConfirmStart = ::gen_onConfirmStart_fn
            fun gen_onConfirmEnd_fn(e: UTSJSONObject) {
                val kVal = e["value"]
                if (kVal != null) {
                    dtValueEnd.value = kVal as Number
                }
                dtShowEnd.value = false
            }
            val onConfirmEnd = ::gen_onConfirmEnd_fn
            return fun(): Any? {
                val _component_up_button = resolveEasyComponent("up-button", GenUniModulesUviewUltraComponentsUpButtonUpButtonClass)
                val _component_up_datetime_picker = resolveEasyComponent("up-datetime-picker", GenUniModulesUviewUltraComponentsUpDatetimePickerUpDatetimePickerClass)
                return _cV(unref(GenAppkuClass), _uM("layout" to "navbar", "show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to false, "page-style" to _uO("navigationBarTitleText" to "up-datetime-picker 时间选择", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cV(unref(GenSrcLayoutsNavbarClass), _uM("show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to false, "page-style" to _uO("navigationBarTitleText" to "up-datetime-picker 时间选择", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "weapp-tw-border page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B"), _uA(
                                    _cE("view", _uM("class" to "weapp-tw-border p-_b16px_B"), _uA(
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border demo-label"), "完整时间"),
                                            _cE("view", _uM("class" to "weapp-tw-border flex-row items-center justify-between"), _uA(
                                                _cV(_component_up_button, _uM("type" to "primary", "text" to "年月日时分", "size" to "mini", "onClick" to fun(){
                                                    dtShow1.value = true
                                                }
                                                ), null, 8, _uA(
                                                    "onClick"
                                                )),
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b13px_B text-gray-500"), _tD(formatDate(dtValue1.value)), 1)
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border demo-label"), "仅选日期"),
                                            _cE("view", _uM("class" to "weapp-tw-border flex-row items-center justify-between"), _uA(
                                                _cV(_component_up_button, _uM("type" to "success", "text" to "年月日", "size" to "mini", "onClick" to fun(){
                                                    dtShow2.value = true
                                                }
                                                ), null, 8, _uA(
                                                    "onClick"
                                                )),
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b13px_B text-gray-500"), _tD(formatDateOnly(dtValue2.value)), 1)
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border demo-label"), "年月选择"),
                                            _cE("view", _uM("class" to "weapp-tw-border flex-row items-center justify-between"), _uA(
                                                _cV(_component_up_button, _uM("type" to "warning", "text" to "年月", "size" to "mini", "onClick" to fun(){
                                                    dtShow3.value = true
                                                }
                                                ), null, 8, _uA(
                                                    "onClick"
                                                )),
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b13px_B text-gray-500"), _tD(formatYearMonth(dtValue3.value)), 1)
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border demo-label"), "仅选时间"),
                                            _cE("view", _uM("class" to "weapp-tw-border flex-row items-center justify-between"), _uA(
                                                _cV(_component_up_button, _uM("type" to "error", "text" to "时分", "size" to "mini", "onClick" to fun(){
                                                    dtShow4.value = true
                                                }
                                                ), null, 8, _uA(
                                                    "onClick"
                                                )),
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b13px_B text-gray-500"), _tD(dtValue4.value), 1)
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border demo-label"), "限制最大最小日期 (2026-08-01 ~ 2026-08-31)"),
                                            _cE("view", _uM("class" to "weapp-tw-border flex-row items-center justify-between"), _uA(
                                                _cV(_component_up_button, _uM("type" to "primary", "text" to "选择当月日期", "size" to "mini", "onClick" to fun(){
                                                    dtShowMinMaxDate.value = true
                                                }
                                                ), null, 8, _uA(
                                                    "onClick"
                                                )),
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b13px_B text-gray-500"), _tD(formatDateOnly(dtValueMinMaxDate.value)), 1)
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border demo-label"), "限制工作时间 (09:00 ~ 18:00)"),
                                            _cE("view", _uM("class" to "weapp-tw-border flex-row items-center justify-between"), _uA(
                                                _cV(_component_up_button, _uM("type" to "warning", "text" to "选择时分范围", "size" to "mini", "onClick" to fun(){
                                                    dtShowMinMaxTime.value = true
                                                }
                                                ), null, 8, _uA(
                                                    "onClick"
                                                )),
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b13px_B text-gray-500"), _tD(dtValueMinMaxTime.value), 1)
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border demo-label"), "开始与结束时间联动 (结束不早于开始)"),
                                            _cE("view", _uM("class" to "weapp-tw-border flex-row items-center justify-between mb-_b8px_B"), _uA(
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b13px_B text-gray-700"), "开始日期："),
                                                _cE("view", _uM("class" to "weapp-tw-border flex-row items-center"), _uA(
                                                    _cV(_component_up_button, _uM("type" to "primary", "text" to "选择开始", "size" to "mini", "onClick" to fun(){
                                                        dtShowStart.value = true
                                                    }
                                                    ), null, 8, _uA(
                                                        "onClick"
                                                    )),
                                                    _cE("text", _uM("class" to "weapp-tw-border ml-_b10px_B text-_b13px_B text-gray-500"), _tD(formatDateOnly(dtValueStart.value)), 1)
                                                ))
                                            )),
                                            _cE("view", _uM("class" to "weapp-tw-border flex-row items-center justify-between"), _uA(
                                                _cE("text", _uM("class" to "weapp-tw-border text-_b13px_B text-gray-700"), "结束日期："),
                                                _cE("view", _uM("class" to "weapp-tw-border flex-row items-center"), _uA(
                                                    _cV(_component_up_button, _uM("type" to "success", "text" to "选择结束", "size" to "mini", "onClick" to fun(){
                                                        dtShowEnd.value = true
                                                    }
                                                    ), null, 8, _uA(
                                                        "onClick"
                                                    )),
                                                    _cE("text", _uM("class" to "weapp-tw-border ml-_b10px_B text-_b13px_B text-gray-500"), _tD(formatDateOnly(dtValueEnd.value)), 1)
                                                ))
                                            ))
                                        ))
                                    )),
                                    _cV(_component_up_datetime_picker, _uM("modelValue" to dtValue1.value, "onUpdate:modelValue" to fun(`$event`: Number){
                                        dtValue1.value = `$event`
                                    }
                                    , "show" to dtShow1.value, "mode" to "datetime", "onConfirm" to onConfirm1, "onCancel" to fun(){
                                        dtShow1.value = false
                                    }
                                    ), null, 8, _uA(
                                        "modelValue",
                                        "onUpdate:modelValue",
                                        "show",
                                        "onCancel"
                                    )),
                                    _cV(_component_up_datetime_picker, _uM("modelValue" to dtValue2.value, "onUpdate:modelValue" to fun(`$event`: Number){
                                        dtValue2.value = `$event`
                                    }
                                    , "show" to dtShow2.value, "mode" to "date", "onConfirm" to onConfirm2, "onCancel" to fun(){
                                        dtShow2.value = false
                                    }
                                    ), null, 8, _uA(
                                        "modelValue",
                                        "onUpdate:modelValue",
                                        "show",
                                        "onCancel"
                                    )),
                                    _cV(_component_up_datetime_picker, _uM("modelValue" to dtValue3.value, "onUpdate:modelValue" to fun(`$event`: Number){
                                        dtValue3.value = `$event`
                                    }
                                    , "show" to dtShow3.value, "mode" to "year-month", "onConfirm" to onConfirm3, "onCancel" to fun(){
                                        dtShow3.value = false
                                    }
                                    ), null, 8, _uA(
                                        "modelValue",
                                        "onUpdate:modelValue",
                                        "show",
                                        "onCancel"
                                    )),
                                    _cV(_component_up_datetime_picker, _uM("modelValue" to dtValue4.value, "onUpdate:modelValue" to fun(`$event`: String){
                                        dtValue4.value = `$event`
                                    }
                                    , "show" to dtShow4.value, "mode" to "time", "onConfirm" to onConfirm4, "onCancel" to fun(){
                                        dtShow4.value = false
                                    }
                                    ), null, 8, _uA(
                                        "modelValue",
                                        "onUpdate:modelValue",
                                        "show",
                                        "onCancel"
                                    )),
                                    _cV(_component_up_datetime_picker, _uM("modelValue" to dtValueMinMaxDate.value, "onUpdate:modelValue" to fun(`$event`: Number){
                                        dtValueMinMaxDate.value = `$event`
                                    }
                                    , "show" to dtShowMinMaxDate.value, "mode" to "date", "min-date" to unref(limitMinDate), "max-date" to unref(limitMaxDate), "onConfirm" to onConfirmMinMaxDate, "onCancel" to fun(){
                                        dtShowMinMaxDate.value = false
                                    }
                                    ), null, 8, _uA(
                                        "modelValue",
                                        "onUpdate:modelValue",
                                        "show",
                                        "min-date",
                                        "max-date",
                                        "onCancel"
                                    )),
                                    _cV(_component_up_datetime_picker, _uM("modelValue" to dtValueMinMaxTime.value, "onUpdate:modelValue" to fun(`$event`: String){
                                        dtValueMinMaxTime.value = `$event`
                                    }
                                    , "show" to dtShowMinMaxTime.value, "mode" to "time", "min-hour" to 9, "max-hour" to 18, "onConfirm" to onConfirmMinMaxTime, "onCancel" to fun(){
                                        dtShowMinMaxTime.value = false
                                    }
                                    ), null, 8, _uA(
                                        "modelValue",
                                        "onUpdate:modelValue",
                                        "show",
                                        "onCancel"
                                    )),
                                    _cV(_component_up_datetime_picker, _uM("modelValue" to dtValueStart.value, "onUpdate:modelValue" to fun(`$event`: Number){
                                        dtValueStart.value = `$event`
                                    }
                                    , "show" to dtShowStart.value, "mode" to "date", "max-date" to dtValueEnd.value, "onConfirm" to onConfirmStart, "onCancel" to fun(){
                                        dtShowStart.value = false
                                    }
                                    ), null, 8, _uA(
                                        "modelValue",
                                        "onUpdate:modelValue",
                                        "show",
                                        "max-date",
                                        "onCancel"
                                    )),
                                    _cV(_component_up_datetime_picker, _uM("modelValue" to dtValueEnd.value, "onUpdate:modelValue" to fun(`$event`: Number){
                                        dtValueEnd.value = `$event`
                                    }
                                    , "show" to dtShowEnd.value, "mode" to "date", "min-date" to dtValueStart.value, "onConfirm" to onConfirmEnd, "onCancel" to fun(){
                                        dtShowEnd.value = false
                                    }
                                    ), null, 8, _uA(
                                        "modelValue",
                                        "onUpdate:modelValue",
                                        "show",
                                        "min-date",
                                        "onCancel"
                                    ))
                                ))
                            )
                        }
                        ), "_" to 1))
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
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "demo-block" to _pS(_uM("marginBottom" to 12, "paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12, "backgroundColor" to "#ffffff", "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "demo-label" to _pS(_uM("fontSize" to 14, "fontWeight" to "bold", "color" to "#606266", "marginBottom" to 10, "paddingLeft" to 4, "borderLeftWidth" to 3, "borderLeftStyle" to "solid", "borderLeftColor" to "var(--theme-color, #0957de)")))
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
