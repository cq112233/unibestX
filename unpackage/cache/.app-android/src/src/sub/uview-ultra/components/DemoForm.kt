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
import io.dcloud.uniapp.extapi.showToast as uni_showToast
open class GenSrcSubUviewUltraComponentsDemoForm : VueComponent {
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
        var setup: (__props: GenSrcSubUviewUltraComponentsDemoForm) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcSubUviewUltraComponentsDemoForm
            val _cache = __ins.renderCache
            val inputValue = ref("")
            val passwordValue = ref("")
            val searchValue = ref("")
            val switchValue1 = ref(true)
            val switchValue2 = ref(false)
            val checkboxValue = ref(_uA<String>("apple"))
            val radioValue = ref("male")
            val sliderValue = ref(50)
            val rateValue = ref(3)
            val numberValue = ref(1)
            val formModel = reactive(_uO("name" to "楼兰", "gender" to "", "age" to "0", "fruit" to "apple", "hobbies" to _uA<String>(), "intro" to "", "stayTime" to "", "code" to "", "birthday" to ""))
            val formRules: UTSJSONObject = _uO("__\$originalPosition" to UTSSourceMapPosition("formRules", "src/sub/uview-ultra/components/DemoForm.uvue", 290, 7), "name" to _uA(
                _uO("required" to true, "message" to "请填写姓名", "trigger" to _uA(
                    "blur",
                    "change"
                ))
            ), "gender" to _uA(
                _uO("required" to true, "message" to "请选择性别", "trigger" to _uA(
                    "blur",
                    "change"
                ))
            ))
            val uForm = ref(null as ComponentPublicInstance?)
            fun gen_submitForm_fn() {
                val form = uForm.value
                if (form != null) {
                    (form.`$callMethod`("validate") as UTSPromise<Any>).then(fun(res: Any){
                        uni_showToast(ShowToastOptions(title = "验证通过", icon = "success"))
                    }
                    ).`catch`(fun(err: Any?){
                        console.log("validate err:", err, " at src/sub/uview-ultra/components/DemoForm.uvue:318")
                    }
                    )
                }
            }
            val submitForm = ::gen_submitForm_fn
            fun gen_resetForm_fn() {
                val form = uForm.value
                if (form != null) {
                    form.`$callMethod`("resetFields")
                }
            }
            val resetForm = ::gen_resetForm_fn
            val genderActionShow = ref(false)
            val genderActions = ref(_uA<UTSJSONObject>(_uO("name" to "男"), _uO("name" to "女")))
            fun gen_onGenderSelect_fn(item: UTSJSONObject) {
                formModel["gender"] = item.getString("name") ?: ""
                genderActionShow.value = false
            }
            val onGenderSelect = ::gen_onGenderSelect_fn
            val calendarShow = ref(false)
            val calendarValue = ref("")
            fun gen_onCalendarConfirm_fn(dates: UTSArray<String>) {
                if (dates.length > 0) {
                    calendarValue.value = dates[0]
                    if (dates.length > 1) {
                        formModel["stayTime"] = "" + dates[0] + " 至 " + dates[dates.length - 1]
                    } else {
                        formModel["stayTime"] = dates[0]
                    }
                }
                calendarShow.value = false
            }
            val onCalendarConfirm = ::gen_onCalendarConfirm_fn
            val keyboardShow = ref(false)
            val keyboardMode = ref("number")
            val keyboardValue = ref("")
            fun gen_openKeyboard_fn(mode: String): Unit {
                keyboardMode.value = mode
                keyboardShow.value = true
            }
            val openKeyboard = ::gen_openKeyboard_fn
            fun gen_onKeyboardChange_fn(kVal: String): Unit {
                console.log(kVal, "val", " at src/sub/uview-ultra/components/DemoForm.uvue:367")
                keyboardValue.value = keyboardValue.value + kVal
            }
            val onKeyboardChange = ::gen_onKeyboardChange_fn
            fun gen_onKeyboardBackspace_fn(): Unit {
                val len = keyboardValue.value.length
                if (len > 0) {
                    keyboardValue.value = keyboardValue.value.substring(0, len - 1)
                }
            }
            val onKeyboardBackspace = ::gen_onKeyboardBackspace_fn
            val pickerShow = ref(false)
            val pickerValue = ref("")
            val pickerColumns = ref(_uA<UTSArray<String>>(_uA(
                "中国",
                "美国",
                "日本",
                "英国",
                "法国"
            )))
            fun gen_onPickerConfirm_fn(e: UTSJSONObject): Unit {
                val indexs = e["indexs"] as UTSArray<Number>
                if (indexs.length > 0) {
                    pickerValue.value = pickerColumns.value[0][indexs[0]]
                }
                pickerShow.value = false
            }
            val onPickerConfirm = ::gen_onPickerConfirm_fn
            val datetimePickerShow = ref(false)
            val datetimePickerValue = ref(Date().getTime() as Any)
            val datetimePickerLabel = ref("")
            fun gen_onDatetimePickerConfirm_fn(e: UTSJSONObject): Unit {
                val value = e["value"]
                if (value != null) {
                    datetimePickerValue.value = value
                    var timestamp: Number = 0
                    if (UTSAndroid.`typeof`(value) === "number") {
                        timestamp = value as Number
                    } else {
                        timestamp = UTSNumber.parseInt(value.toString())
                    }
                    val d = Date(timestamp)
                    val year = d.getFullYear()
                    val month = d.getMonth() + 1
                    val date = d.getDate()
                    val monthStr = if (month < 10) {
                        "0" + month
                    } else {
                        "" + month
                    }
                    val dateStr = if (date < 10) {
                        "0" + date
                    } else {
                        "" + date
                    }
                    datetimePickerLabel.value = "" + year + "-" + monthStr + "-" + dateStr
                    formModel["birthday"] = "" + year + "-" + monthStr + "-" + dateStr
                }
                datetimePickerShow.value = false
            }
            val onDatetimePickerConfirm = ::gen_onDatetimePickerConfirm_fn
            val uploadList = ref(_uA<UTSJSONObject>(_uO("url" to "/static/logo.png")))
            fun gen_onUploadAfterRead_fn(e: UTSJSONObject): Unit {
                val file = e["file"] as UTSArray<UTSJSONObject>
                file.forEach(fun(item: UTSJSONObject){
                    uploadList.value.push(UTSJSONObject.assign(_uO(), item))
                }
                )
            }
            val onUploadAfterRead = ::gen_onUploadAfterRead_fn
            fun gen_onUploadDelete_fn(e: UTSJSONObject): Unit {
                val index = e["index"] as Number
                if (index >= 0 && index < uploadList.value.length) {
                    uploadList.value.splice(index, 1)
                }
            }
            val onUploadDelete = ::gen_onUploadDelete_fn
            return fun(): Any? {
                val _component_up_input = resolveEasyComponent("up-input", GenUniModulesUviewUltraComponentsUpInputUpInputClass)
                val _component_up_search = resolveEasyComponent("up-search", GenUniModulesUviewUltraComponentsUpSearchUpSearchClass)
                val _component_up_switch = resolveEasyComponent("up-switch", GenUniModulesUviewUltraComponentsUpSwitchUpSwitchClass)
                val _component_up_checkbox = resolveEasyComponent("up-checkbox", GenUniModulesUviewUltraComponentsUpCheckboxUpCheckboxClass)
                val _component_up_checkbox_group = resolveEasyComponent("up-checkbox-group", GenUniModulesUviewUltraComponentsUpCheckboxGroupUpCheckboxGroupClass)
                val _component_up_radio = resolveEasyComponent("up-radio", GenUniModulesUviewUltraComponentsUpRadioUpRadioClass)
                val _component_up_radio_group = resolveEasyComponent("up-radio-group", GenUniModulesUviewUltraComponentsUpRadioGroupUpRadioGroupClass)
                val _component_up_slider = resolveEasyComponent("up-slider", GenUniModulesUviewUltraComponentsUpSliderUpSliderClass)
                val _component_up_rate = resolveEasyComponent("up-rate", GenUniModulesUviewUltraComponentsUpRateUpRateClass)
                val _component_up_number_box = resolveEasyComponent("up-number-box", GenUniModulesUviewUltraComponentsUpNumberBoxUpNumberBoxClass)
                val _component_up_form_item = resolveEasyComponent("up-form-item", GenUniModulesUviewUltraComponentsUpFormItemUpFormItemClass)
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                val _component_up_form = resolveEasyComponent("up-form", GenUniModulesUviewUltraComponentsUpFormUpFormClass)
                val _component_up_button = resolveEasyComponent("up-button", GenUniModulesUviewUltraComponentsUpButtonUpButtonClass)
                val _component_up_upload = resolveEasyComponent("up-upload", GenUniModulesUviewUltraComponentsUpUploadUpUploadClass)
                val _component_up_divider = resolveEasyComponent("up-divider", GenUniModulesUviewUltraComponentsUpDividerUpDividerClass)
                val _component_up_calendar = resolveEasyComponent("up-calendar", GenUniModulesUviewUltraComponentsUpCalendarUpCalendarClass)
                val _component_up_keyboard = resolveEasyComponent("up-keyboard", GenUniModulesUviewUltraComponentsUpKeyboardUpKeyboardClass)
                val _component_up_picker = resolveEasyComponent("up-picker", GenUniModulesUviewUltraComponentsUpPickerUpPickerClass)
                val _component_up_datetime_picker = resolveEasyComponent("up-datetime-picker", GenUniModulesUviewUltraComponentsUpDatetimePickerUpDatetimePickerClass)
                val _component_up_action_sheet = resolveEasyComponent("up-action-sheet", GenUniModulesUviewUltraComponentsUpActionSheetUpActionSheetClass)
                return _cE("view", null, _uA(
                    _cE("text", _uM("class" to "section-title"), " 表单组件 "),
                    _cE("view", _uM("class" to "demo-block"), _uA(
                        _cE("text", _uM("class" to "demo-label"), " up-input "),
                        _cV(_component_up_input, _uM("modelValue" to inputValue.value, "onUpdate:modelValue" to fun(`$event`: String){
                            inputValue.value = `$event`
                        }
                        , "placeholder" to "请输入内容", "border" to "surround", "clearable" to ""), null, 8, _uA(
                            "modelValue",
                            "onUpdate:modelValue"
                        )),
                        _cE("view", _uM("class" to "h-10px")),
                        _cV(_component_up_input, _uM("modelValue" to passwordValue.value, "onUpdate:modelValue" to fun(`$event`: String){
                            passwordValue.value = `$event`
                        }
                        , "placeholder" to "请输入密码", "password" to true, "border" to "surround"), null, 8, _uA(
                            "modelValue",
                            "onUpdate:modelValue"
                        ))
                    )),
                    _cE("view", _uM("class" to "demo-block"), _uA(
                        _cE("text", _uM("class" to "demo-label"), " up-search "),
                        _cV(_component_up_search, _uM("modelValue" to searchValue.value, "onUpdate:modelValue" to fun(`$event`: String){
                            searchValue.value = `$event`
                        }
                        , "placeholder" to "搜索关键字", "show-action" to true, "action-text" to "搜索"), null, 8, _uA(
                            "modelValue",
                            "onUpdate:modelValue"
                        ))
                    )),
                    _cE("view", _uM("class" to "demo-block"), _uA(
                        _cE("text", _uM("class" to "demo-label"), " up-switch "),
                        _cE("view", _uM("class" to "demo-row-start"), _uA(
                            _cV(_component_up_switch, _uM("modelValue" to switchValue1.value, "onUpdate:modelValue" to fun(`$event`: Boolean){
                                switchValue1.value = `$event`
                            }
                            ), null, 8, _uA(
                                "modelValue",
                                "onUpdate:modelValue"
                            )),
                            _cE("view", _uM("class" to "w-20px")),
                            _cV(_component_up_switch, _uM("modelValue" to switchValue2.value, "onUpdate:modelValue" to fun(`$event`: Boolean){
                                switchValue2.value = `$event`
                            }
                            , "active-color" to "#fa3534"), null, 8, _uA(
                                "modelValue",
                                "onUpdate:modelValue"
                            ))
                        ))
                    )),
                    _cE("view", _uM("class" to "demo-block"), _uA(
                        _cE("text", _uM("class" to "demo-label"), " up-checkbox "),
                        _cV(_component_up_checkbox_group, _uM("modelValue" to checkboxValue.value, "onUpdate:modelValue" to fun(`$event`: UTSArray<String>){
                            checkboxValue.value = `$event`
                        }
                        , "placement" to "row"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cV(_component_up_checkbox, _uM("name" to "apple", "label" to "苹果", "checked" to true)),
                                _cV(_component_up_checkbox, _uM("name" to "banana", "label" to "香蕉"))
                            )
                        }
                        ), "_" to 1), 8, _uA(
                            "modelValue",
                            "onUpdate:modelValue"
                        ))
                    )),
                    _cE("view", _uM("class" to "demo-block"), _uA(
                        _cE("text", _uM("class" to "demo-label"), " up-radio "),
                        _cV(_component_up_radio_group, _uM("modelValue" to radioValue.value, "onUpdate:modelValue" to fun(`$event`: String){
                            radioValue.value = `$event`
                        }
                        , "placement" to "row"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cV(_component_up_radio, _uM("name" to "male", "label" to "男")),
                                _cV(_component_up_radio, _uM("name" to "female", "label" to "女"))
                            )
                        }
                        ), "_" to 1), 8, _uA(
                            "modelValue",
                            "onUpdate:modelValue"
                        ))
                    )),
                    _cE("view", _uM("class" to "demo-block"), _uA(
                        _cE("text", _uM("class" to "demo-label"), " up-slider "),
                        _cV(_component_up_slider, _uM("modelValue" to sliderValue.value, "onUpdate:modelValue" to fun(`$event`: Number){
                            sliderValue.value = `$event`
                        }
                        , "min" to 0, "max" to 100, "step" to 1, "show-value" to true), null, 8, _uA(
                            "modelValue",
                            "onUpdate:modelValue"
                        ))
                    )),
                    _cE("view", _uM("class" to "demo-block"), _uA(
                        _cE("text", _uM("class" to "demo-label"), " up-rate "),
                        _cE("view", _uM("class" to "demo-row"), _uA(
                            _cV(_component_up_rate, _uM("modelValue" to rateValue.value, "onUpdate:modelValue" to fun(`$event`: Number){
                                rateValue.value = `$event`
                            }
                            , "count" to 5), null, 8, _uA(
                                "modelValue",
                                "onUpdate:modelValue"
                            )),
                            _cE("text", _uM("class" to "text-14px text-__909399_ ml-10px"), _tD(rateValue.value) + " 分", 1)
                        ))
                    )),
                    _cE("view", _uM("class" to "demo-block"), _uA(
                        _cE("text", _uM("class" to "demo-label"), " up-number-box "),
                        _cE("view", _uM("class" to "demo-row-start"), _uA(
                            _cV(_component_up_number_box, _uM("modelValue" to numberValue.value, "onUpdate:modelValue" to fun(`$event`: Number){
                                numberValue.value = `$event`
                            }
                            , "min" to 0, "max" to 100), null, 8, _uA(
                                "modelValue",
                                "onUpdate:modelValue"
                            ))
                        ))
                    )),
                    _cE("view", _uM("class" to "demo-block"), _uA(
                        _cE("text", _uM("class" to "demo-label"), " 基础使用 "),
                        _cV(_component_up_form, _uM("ref_key" to "uForm", "ref" to uForm, "model" to formModel, "rules" to formRules, "label-width" to "80px", "error-type" to "toast"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cV(_component_up_form_item, _uM("label" to "姓名", "prop" to "name", "border-bottom" to true), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                    return _uA(
                                        _cV(_component_up_input, _uM("modelValue" to formModel["name"], "onUpdate:modelValue" to fun(`$event`: Any?){
                                            formModel["name"] = `$event`
                                        }
                                        , "placeholder" to "请输入姓名", "border" to "none"), null, 8, _uA(
                                            "modelValue",
                                            "onUpdate:modelValue"
                                        ))
                                    )
                                }
                                ), "_" to 1)),
                                _cV(_component_up_form_item, _uM("label" to "性别", "prop" to "gender", "border-bottom" to true, "onClick" to fun(){
                                    genderActionShow.value = true
                                }
                                ), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                    return _uA(
                                        _cE("view", _uM("class" to "flex-row items-center justify-between w-full"), _uA(
                                            _cE("text", _uM("class" to _nC(_uA(
                                                "text-15px",
                                                if (formModel["gender"] == "") {
                                                    "text-__c0c4cc_"
                                                } else {
                                                    "text-__303133_"
                                                }
                                            ))), _tD(if (formModel["gender"] != "") {
                                                formModel["gender"]
                                            } else {
                                                "请选择性别"
                                            }
                                            ), 3),
                                            _cV(_component_up_icon, _uM("name" to "arrow-right", "color" to "#c0c4cc", "size" to "16"))
                                        ))
                                    )
                                }
                                ), "_" to 1), 8, _uA(
                                    "onClick"
                                ))
                            )
                        }
                        ), "_" to 1), 8, _uA(
                            "model"
                        )),
                        _cE("view", _uM("class" to "mt-15px flex-row justify-between"), _uA(
                            _cV(_component_up_button, _uM("type" to "primary", "text" to "提交", "size" to "mini", "onClick" to submitForm)),
                            _cV(_component_up_button, _uM("type" to "info", "text" to "重置", "size" to "mini", "onClick" to resetForm))
                        ))
                    )),
                    _cE("view", _uM("class" to "demo-block"), _uA(
                        _cE("text", _uM("class" to "demo-label"), " up-calendar "),
                        _cE("view", _uM("class" to "demo-row-start items-center"), _uA(
                            _cV(_component_up_button, _uM("type" to "primary", "text" to "选择日期", "size" to "mini", "onClick" to fun(){
                                calendarShow.value = true
                            }
                            ), null, 8, _uA(
                                "onClick"
                            )),
                            _cE("view", _uM("class" to "w-15px")),
                            _cE("text", _uM("class" to "text-14px text-__606266_"), _tD(if (calendarValue.value != "") {
                                "已选日期: " + calendarValue.value
                            } else {
                                "未选择日期"
                            }
                            ), 1)
                        ))
                    )),
                    _cE("view", _uM("class" to "demo-block"), _uA(
                        _cE("text", _uM("class" to "demo-label"), " up-keyboard "),
                        _cE("view", _uM("class" to "demo-row-start items-center"), _uA(
                            _cE("view", _uM("class" to "flex-1"), _uA(
                                _cV(_component_up_input, _uM("modelValue" to keyboardValue.value, "onUpdate:modelValue" to fun(`$event`: String){
                                    keyboardValue.value = `$event`
                                }
                                , "placeholder" to "通过键盘输入内容", "border" to "surround", "readonly" to "", "onClick" to fun(){
                                    openKeyboard("number")
                                }
                                ), null, 8, _uA(
                                    "modelValue",
                                    "onUpdate:modelValue",
                                    "onClick"
                                ))
                            )),
                            _cE("view", _uM("class" to "w-10px")),
                            _cV(_component_up_button, _uM("type" to "info", "text" to "清空", "size" to "mini", "onClick" to fun(){
                                keyboardValue.value = ""
                            }
                            ), null, 8, _uA(
                                "onClick"
                            ))
                        )),
                        _cE("view", _uM("class" to "demo-row-start mt-10px"), _uA(
                            _cV(_component_up_button, _uM("type" to "primary", "text" to "数字键盘", "size" to "mini", "onClick" to fun(){
                                openKeyboard("number")
                            }
                            ), null, 8, _uA(
                                "onClick"
                            )),
                            _cE("view", _uM("class" to "w-10px")),
                            _cV(_component_up_button, _uM("type" to "primary", "text" to "身份证键盘", "size" to "mini", "onClick" to fun(){
                                openKeyboard("card")
                            }
                            ), null, 8, _uA(
                                "onClick"
                            ))
                        ))
                    )),
                    _cE("view", _uM("class" to "demo-block"), _uA(
                        _cE("text", _uM("class" to "demo-label"), " up-picker "),
                        _cE("view", _uM("class" to "demo-row-start items-center"), _uA(
                            _cV(_component_up_button, _uM("type" to "primary", "text" to "选择国家", "size" to "mini", "onClick" to fun(){
                                pickerShow.value = true
                            }
                            ), null, 8, _uA(
                                "onClick"
                            )),
                            _cE("view", _uM("class" to "w-15px")),
                            _cE("text", _uM("class" to "text-14px text-__606266_"), _tD(if (pickerValue.value != "") {
                                "已选: " + pickerValue.value
                            } else {
                                "未选择"
                            }
                            ), 1)
                        ))
                    )),
                    _cE("view", _uM("class" to "demo-block"), _uA(
                        _cE("text", _uM("class" to "demo-label"), " up-datetime-picker "),
                        _cE("view", _uM("class" to "demo-row-start items-center"), _uA(
                            _cV(_component_up_button, _uM("type" to "primary", "text" to "选择日期", "size" to "mini", "onClick" to fun(){
                                datetimePickerShow.value = true
                            }
                            ), null, 8, _uA(
                                "onClick"
                            )),
                            _cE("view", _uM("class" to "w-15px")),
                            _cE("text", _uM("class" to "text-14px text-__606266_"), _tD(if (datetimePickerLabel.value != "") {
                                "已选: " + datetimePickerLabel.value
                            } else {
                                "未选择"
                            }
                            ), 1)
                        ))
                    )),
                    _cE("view", _uM("class" to "demo-block"), _uA(
                        _cE("text", _uM("class" to "demo-label"), " up-upload "),
                        _cE("view", _uM("class" to "demo-row-start"), _uA(
                            _cV(_component_up_upload, _uM("file-list" to uploadList.value, "multiple" to true, "max-count" to 3, "width" to "80px", "height" to "80px", "onAfterRead" to onUploadAfterRead, "onDelete" to onUploadDelete), null, 8, _uA(
                                "file-list"
                            ))
                        ))
                    )),
                    _cV(_component_up_divider, _uM("text" to "表单组件结束")),
                    _cV(_component_up_calendar, _uM("show" to calendarShow.value, "mode" to "range", "onConfirm" to onCalendarConfirm, "onClose" to fun(){
                        calendarShow.value = false
                    }
                    ), null, 8, _uA(
                        "show",
                        "onClose"
                    )),
                    _cV(_component_up_keyboard, _uM("show" to keyboardShow.value, "mode" to keyboardMode.value, "onChange" to onKeyboardChange, "onBackspace" to onKeyboardBackspace, "onClose" to fun(){
                        keyboardShow.value = false
                    }
                    , "onConfirm" to fun(){
                        keyboardShow.value = false
                    }
                    , "onCancel" to fun(){
                        keyboardShow.value = false
                    }
                    ), null, 8, _uA(
                        "show",
                        "mode",
                        "onClose",
                        "onConfirm",
                        "onCancel"
                    )),
                    _cV(_component_up_picker, _uM("show" to pickerShow.value, "columns" to pickerColumns.value, "onConfirm" to onPickerConfirm, "onCancel" to fun(){
                        pickerShow.value = false
                    }
                    , "onClose" to fun(){
                        pickerShow.value = false
                    }
                    ), null, 8, _uA(
                        "show",
                        "columns",
                        "onCancel",
                        "onClose"
                    )),
                    _cV(_component_up_datetime_picker, _uM("modelValue" to datetimePickerValue.value, "onUpdate:modelValue" to fun(`$event`: Any){
                        datetimePickerValue.value = `$event`
                    }
                    , "show" to datetimePickerShow.value, "mode" to "date", "onConfirm" to onDatetimePickerConfirm, "onCancel" to fun(){
                        datetimePickerShow.value = false
                    }
                    , "onClose" to fun(){
                        datetimePickerShow.value = false
                    }
                    ), null, 8, _uA(
                        "modelValue",
                        "onUpdate:modelValue",
                        "show",
                        "onCancel",
                        "onClose"
                    )),
                    _cV(_component_up_action_sheet, _uM("show" to genderActionShow.value, "actions" to genderActions.value, "title" to "请选择性别", "onSelect" to onGenderSelect, "onClose" to fun(){
                        genderActionShow.value = false
                    }
                    ), null, 8, _uA(
                        "show",
                        "actions",
                        "onClose"
                    ))
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
                return _uM("blur" to _pS(_uM("filter" to "var(--un-blur) var(--un-brightness) var(--un-contrast) var(--un-drop-shadow) var(--un-grayscale) var(--un-hue-rotate) var(--un-invert) var(--un-opacity) var(--un-saturate) var(--un-sepia)", "--un-blur" to "blur(8rpx)")), "flex-1" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "flex-row" to _pS(_uM("flexDirection" to "row")), "h-10px" to _pS(_uM("height" to 10)), "items-center" to _pS(_uM("alignItems" to "center")), "justify-between" to _pS(_uM("justifyContent" to "space-between")), "ml-10px" to _pS(_uM("marginLeft" to 10)), "mt-10px" to _pS(_uM("marginTop" to 10)), "mt-15px" to _pS(_uM("marginTop" to 15)), "none" to _pS(_uM("display" to "none")), "text-__303133_" to _pS(_uM("color" to "#303133")), "text-__606266_" to _pS(_uM("color" to "#606266")), "text-__909399_" to _pS(_uM("color" to "#909399")), "text-__c0c4cc_" to _pS(_uM("color" to "#c0c4cc")), "text-14px" to _pS(_uM("fontSize" to 14)), "text-15px" to _pS(_uM("fontSize" to 15)), "w-10px" to _pS(_uM("width" to 10)), "w-15px" to _pS(_uM("width" to 15)), "w-20px" to _pS(_uM("width" to 20)), "w-full" to _pS(_uM("width" to "100%")), "section-title" to _pS(_uM("paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 8, "paddingLeft" to 16, "fontSize" to 18, "fontWeight" to "bold", "color" to "#303133")), "demo-block" to _pS(_uM("marginTop" to 0, "marginRight" to 12, "marginBottom" to 12, "marginLeft" to 12, "paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12, "backgroundColor" to "#ffffff", "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "demo-label" to _pS(_uM("fontSize" to 14, "fontWeight" to "bold", "color" to "#606266", "marginBottom" to 10, "paddingLeft" to 4, "borderLeftWidth" to 3, "borderLeftStyle" to "solid", "borderLeftColor" to "#2979ff")), "demo-row" to _pS(_uM("display" to "flex", "flexDirection" to "row", "flexWrap" to "wrap", "alignItems" to "center", "justifyContent" to "space-between", "marginBottom" to 8)), "demo-row-start" to _pS(_uM("display" to "flex", "flexDirection" to "row", "flexWrap" to "wrap", "alignItems" to "center", "justifyContent" to "flex-start", "marginBottom" to 8)))
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
