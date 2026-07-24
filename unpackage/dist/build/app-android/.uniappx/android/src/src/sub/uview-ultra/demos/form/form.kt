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
import io.dcloud.uniapp.extapi.showToast as uni_showToast
open class GenSrcSubUviewUltraDemosFormForm : BasePage {
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
        var setup: (__props: GenSrcSubUviewUltraDemosFormForm) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcSubUviewUltraDemosFormForm
            val _cache = __ins.renderCache
            val formModel = reactive(_uO("name" to "", "gender" to "", "birthday" to "", "country" to "", "stayTime" to "", "fruit" to "apple", "hobbies" to _uA<String>("reading"), "notification" to true, "rate" to 4, "count" to 1, "satisfaction" to 80, "intro" to "", "photos" to _uA<UTSJSONObject>()))
            val formModel2 = reactive(_uO("name" to "", "detail" to ""))
            val formRules = __uts_large_formRules_build_2()
            val uForm = ref(null as ComponentPublicInstance?)
            val uploadList = ref(_uA<UTSJSONObject>())
            fun gen_submitForm_fn() {
                val form = uForm.value
                if (form != null) {
                    (form.`$callMethod`("validate") as UTSPromise<Any>).then(fun(res: Any){
                        uni_showToast(ShowToastOptions(title = "验证通过，提交成功！", icon = "success"))
                        console.log("提交的数据：", formModel)
                    }
                    ).`catch`(fun(err: Any?){
                        console.log("验证失败:", err)
                        uni_showToast(ShowToastOptions(title = "请检查必填项", icon = "error"))
                    }
                    )
                }
            }
            val submitForm = ::gen_submitForm_fn
            fun gen_resetForm_fn() {
                val form = uForm.value
                if (form != null) {
                    form.`$callMethod`("resetFields")
                    formModel["gender"] = ""
                    formModel["birthday"] = ""
                    formModel["country"] = ""
                    formModel["stayTime"] = ""
                    formModel["hobbies"] = _uA<String>("reading")
                    uploadList.value = _uA<UTSJSONObject>()
                    uni_showToast(ShowToastOptions(title = "已重置表单", icon = "none"))
                }
            }
            val resetForm = ::gen_resetForm_fn
            val genderActionShow = ref(false)
            val genderActions = ref(_uA<UTSJSONObject>(_uO("name" to "男"), _uO("name" to "女"), _uO("name" to "保密")))
            fun gen_onGenderSelect_fn(item: UTSJSONObject) {
                formModel["gender"] = item.getString("name") ?: ""
                genderActionShow.value = false
                val form = uForm.value
                if (form != null) {
                    form.`$callMethod`("validateField", "gender")
                }
            }
            val onGenderSelect = ::gen_onGenderSelect_fn
            val calendarShow = ref(false)
            fun gen_onCalendarConfirm_fn(dates: UTSArray<String>) {
                if (dates.length > 0) {
                    if (dates.length > 1) {
                        formModel["stayTime"] = "" + dates[0] + " 至 " + dates[dates.length - 1]
                    } else {
                        formModel["stayTime"] = dates[0]
                    }
                }
                calendarShow.value = false
            }
            val onCalendarConfirm = ::gen_onCalendarConfirm_fn
            val pickerShow = ref(false)
            val pickerColumns = ref(_uA<UTSArray<String>>(_uA(
                "中国",
                "美国",
                "日本",
                "英国",
                "法国",
                "德国",
                "澳大利亚"
            )))
            fun gen_onPickerConfirm_fn(e: UTSJSONObject): Unit {
                val indexs = e["indexs"] as UTSArray<Number>
                if (indexs.length > 0) {
                    formModel["country"] = pickerColumns.value[0][indexs[0]]
                }
                pickerShow.value = false
            }
            val onPickerConfirm = ::gen_onPickerConfirm_fn
            val datetimePickerShow = ref(false)
            val datetimePickerValue = ref(Date().getTime() as Any)
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
                    formModel["birthday"] = "" + year + "-" + monthStr + "-" + dateStr
                    val form = uForm.value
                    if (form != null) {
                        form.`$callMethod`("validateField", "birthday")
                    }
                }
                datetimePickerShow.value = false
            }
            val onDatetimePickerConfirm = ::gen_onDatetimePickerConfirm_fn
            fun gen_onUploadAfterRead_fn(e: UTSJSONObject): Unit {
                val file = e["file"] as UTSArray<UTSJSONObject>
                file.forEach(fun(item: UTSJSONObject){
                    uploadList.value.push(UTSJSONObject.assign(_uO(), item))
                }
                )
                formModel["photos"] = uploadList.value
            }
            val onUploadAfterRead = ::gen_onUploadAfterRead_fn
            fun gen_onUploadDelete_fn(e: UTSJSONObject): Unit {
                val index = e["index"] as Number
                if (index >= 0 && index < uploadList.value.length) {
                    uploadList.value.splice(index, 1)
                }
                formModel["photos"] = uploadList.value
            }
            val onUploadDelete = ::gen_onUploadDelete_fn
            return fun(): Any? {
                val _component_NavBar = resolveEasyComponent("NavBar", GenSrcComponentsNavBarNavBarClass)
                val _component_up_input = resolveEasyComponent("up-input", GenUniModulesUviewUltraComponentsUpInputUpInputClass)
                val _component_up_form_item = resolveEasyComponent("up-form-item", GenUniModulesUviewUltraComponentsUpFormItemUpFormItemClass)
                val _component_up_icon = resolveEasyComponent("up-icon", GenUniModulesUviewUltraComponentsUpIconUpIconClass)
                val _component_up_radio = resolveEasyComponent("up-radio", GenUniModulesUviewUltraComponentsUpRadioUpRadioClass)
                val _component_up_radio_group = resolveEasyComponent("up-radio-group", GenUniModulesUviewUltraComponentsUpRadioGroupUpRadioGroupClass)
                val _component_up_checkbox = resolveEasyComponent("up-checkbox", GenUniModulesUviewUltraComponentsUpCheckboxUpCheckboxClass)
                val _component_up_checkbox_group = resolveEasyComponent("up-checkbox-group", GenUniModulesUviewUltraComponentsUpCheckboxGroupUpCheckboxGroupClass)
                val _component_up_switch = resolveEasyComponent("up-switch", GenUniModulesUviewUltraComponentsUpSwitchUpSwitchClass)
                val _component_up_rate = resolveEasyComponent("up-rate", GenUniModulesUviewUltraComponentsUpRateUpRateClass)
                val _component_up_number_box = resolveEasyComponent("up-number-box", GenUniModulesUviewUltraComponentsUpNumberBoxUpNumberBoxClass)
                val _component_up_slider = resolveEasyComponent("up-slider", GenUniModulesUviewUltraComponentsUpSliderUpSliderClass)
                val _component_up_textarea = resolveEasyComponent("up-textarea", GenUniModulesUviewUltraComponentsUpTextareaUpTextareaClass)
                val _component_up_upload = resolveEasyComponent("up-upload", GenUniModulesUviewUltraComponentsUpUploadUpUploadClass)
                val _component_up_form = resolveEasyComponent("up-form", GenUniModulesUviewUltraComponentsUpFormUpFormClass)
                val _component_up_button = resolveEasyComponent("up-button", GenUniModulesUviewUltraComponentsUpButtonUpButtonClass)
                val _component_up_calendar = resolveEasyComponent("up-calendar", GenUniModulesUviewUltraComponentsUpCalendarUpCalendarClass)
                val _component_up_picker = resolveEasyComponent("up-picker", GenUniModulesUviewUltraComponentsUpPickerUpPickerClass)
                val _component_up_datetime_picker = resolveEasyComponent("up-datetime-picker", GenUniModulesUviewUltraComponentsUpDatetimePickerUpDatetimePickerClass)
                val _component_up_action_sheet = resolveEasyComponent("up-action-sheet", GenUniModulesUviewUltraComponentsUpActionSheetUpActionSheetClass)
                return _cV(unref(GenAppkuClass), null, _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cV(unref(GenSrcLayoutsDefaultClass), _uM("navigation-style" to "custom", "navigation-bar-title-text" to "up-form 表单"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "page-container bg-__f8fafc_ min-h-screen pb-30px"), _uA(
                                    _cV(_component_NavBar, _uM("title" to "Form 表单", "auto-back" to true, "safe-area-inset-top" to true, "bg-color" to "#ffffff")),
                                    _cE("view", _uM("class" to "p-16px"), _uA(
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), "基础表单示例"),
                                            _cV(_component_up_form, _uM("ref_key" to "uForm", "ref" to uForm, "model" to formModel, "rules" to formRules, "label-width" to "90px", "error-type" to "toast"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cV(_component_up_form_item, _uM("label" to "姓名", "prop" to "name", "border-bottom" to true, "required" to ""), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_input, _uM("modelValue" to formModel["name"], "onUpdate:modelValue" to fun(`$event`: Any?){
                                                                formModel["name"] = `$event`
                                                            }
                                                            , "placeholder" to "请输入姓名", "border" to "none", "clearable" to ""), null, 8, _uA(
                                                                "modelValue",
                                                                "onUpdate:modelValue"
                                                            ))
                                                        )
                                                    }
                                                    ), "_" to 1)),
                                                    _cV(_component_up_form_item, _uM("label" to "性别", "prop" to "gender", "border-bottom" to true, "onClick" to fun(){
                                                        genderActionShow.value = true
                                                    }
                                                    , "required" to ""), _uM("right" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_icon, _uM("name" to "arrow-right", "color" to "#c0c4cc", "size" to "16"))
                                                        )
                                                    }
                                                    ), "default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_input, _uM("modelValue" to formModel["gender"], "onUpdate:modelValue" to fun(`$event`: Any?){
                                                                formModel["gender"] = `$event`
                                                            }
                                                            , "disabled" to "", "disabled-color" to "#ffffff", "placeholder" to "请选择性别", "border" to "none"), null, 8, _uA(
                                                                "modelValue",
                                                                "onUpdate:modelValue"
                                                            ))
                                                        )
                                                    }
                                                    ), "_" to 1), 8, _uA(
                                                        "onClick"
                                                    )),
                                                    _cV(_component_up_form_item, _uM("label" to "出生日期", "prop" to "birthday", "border-bottom" to true, "onClick" to fun(){
                                                        datetimePickerShow.value = true
                                                    }
                                                    , "required" to ""), _uM("right" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_icon, _uM("name" to "arrow-right", "color" to "#c0c4cc", "size" to "16"))
                                                        )
                                                    }
                                                    ), "default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_input, _uM("modelValue" to formModel["birthday"], "onUpdate:modelValue" to fun(`$event`: Any?){
                                                                formModel["birthday"] = `$event`
                                                            }
                                                            , "disabled" to "", "disabled-color" to "#ffffff", "placeholder" to "请选择出生日期", "border" to "none"), null, 8, _uA(
                                                                "modelValue",
                                                                "onUpdate:modelValue"
                                                            ))
                                                        )
                                                    }
                                                    ), "_" to 1), 8, _uA(
                                                        "onClick"
                                                    )),
                                                    _cV(_component_up_form_item, _uM("label" to "国籍", "prop" to "country", "border-bottom" to true, "onClick" to fun(){
                                                        pickerShow.value = true
                                                    }
                                                    ), _uM("right" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_icon, _uM("name" to "arrow-right", "color" to "#c0c4cc", "size" to "16"))
                                                        )
                                                    }
                                                    ), "default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_input, _uM("modelValue" to formModel["country"], "onUpdate:modelValue" to fun(`$event`: Any?){
                                                                formModel["country"] = `$event`
                                                            }
                                                            , "disabled" to "", "disabled-color" to "#ffffff", "placeholder" to "请选择国籍", "border" to "none"), null, 8, _uA(
                                                                "modelValue",
                                                                "onUpdate:modelValue"
                                                            ))
                                                        )
                                                    }
                                                    ), "_" to 1), 8, _uA(
                                                        "onClick"
                                                    )),
                                                    _cV(_component_up_form_item, _uM("label" to "行程时间", "prop" to "stayTime", "border-bottom" to true, "onClick" to fun(){
                                                        calendarShow.value = true
                                                    }
                                                    ), _uM("right" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_icon, _uM("name" to "arrow-right", "color" to "#c0c4cc", "size" to "16"))
                                                        )
                                                    }
                                                    ), "default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_input, _uM("modelValue" to formModel["stayTime"], "onUpdate:modelValue" to fun(`$event`: Any?){
                                                                formModel["stayTime"] = `$event`
                                                            }
                                                            , "disabled" to "", "disabled-color" to "#ffffff", "placeholder" to "请选择日期范围", "border" to "none"), null, 8, _uA(
                                                                "modelValue",
                                                                "onUpdate:modelValue"
                                                            ))
                                                        )
                                                    }
                                                    ), "_" to 1), 8, _uA(
                                                        "onClick"
                                                    )),
                                                    _cV(_component_up_form_item, _uM("label" to "水果最爱", "prop" to "fruit", "border-bottom" to true), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_radio_group, _uM("modelValue" to formModel["fruit"], "onUpdate:modelValue" to fun(`$event`: Any?){
                                                                formModel["fruit"] = `$event`
                                                            }
                                                            , "placement" to "row"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    _cV(_component_up_radio, _uM("name" to "apple", "label" to "苹果")),
                                                                    _cE("view", _uM("class" to "w-10px")),
                                                                    _cV(_component_up_radio, _uM("name" to "banana", "label" to "香蕉")),
                                                                    _cE("view", _uM("class" to "w-10px")),
                                                                    _cV(_component_up_radio, _uM("name" to "orange", "label" to "橘子"))
                                                                )
                                                            }
                                                            ), "_" to 1), 8, _uA(
                                                                "modelValue",
                                                                "onUpdate:modelValue"
                                                            ))
                                                        )
                                                    }
                                                    ), "_" to 1)),
                                                    _cV(_component_up_form_item, _uM("label" to "兴趣爱好", "prop" to "hobbies", "border-bottom" to true), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_checkbox_group, _uM("modelValue" to formModel["hobbies"], "onUpdate:modelValue" to fun(`$event`: Any?){
                                                                formModel["hobbies"] = `$event`
                                                            }
                                                            , "placement" to "row"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                                return _uA(
                                                                    _cV(_component_up_checkbox, _uM("name" to "reading", "label" to "阅读")),
                                                                    _cE("view", _uM("class" to "w-10px")),
                                                                    _cV(_component_up_checkbox, _uM("name" to "sports", "label" to "运动")),
                                                                    _cE("view", _uM("class" to "w-10px")),
                                                                    _cV(_component_up_checkbox, _uM("name" to "music", "label" to "音乐"))
                                                                )
                                                            }
                                                            ), "_" to 1), 8, _uA(
                                                                "modelValue",
                                                                "onUpdate:modelValue"
                                                            ))
                                                        )
                                                    }
                                                    ), "_" to 1)),
                                                    _cV(_component_up_form_item, _uM("label" to "通知开关", "prop" to "notification", "border-bottom" to true), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_switch, _uM("modelValue" to formModel["notification"], "onUpdate:modelValue" to fun(`$event`: Any?){
                                                                formModel["notification"] = `$event`
                                                            }
                                                            , "active-color" to "#2979ff"), null, 8, _uA(
                                                                "modelValue",
                                                                "onUpdate:modelValue"
                                                            ))
                                                        )
                                                    }
                                                    ), "_" to 1)),
                                                    _cV(_component_up_form_item, _uM("label" to "服务评分", "prop" to "rate", "border-bottom" to true), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_rate, _uM("modelValue" to formModel["rate"], "onUpdate:modelValue" to fun(`$event`: Any?){
                                                                formModel["rate"] = `$event`
                                                            }
                                                            , "count" to 5), null, 8, _uA(
                                                                "modelValue",
                                                                "onUpdate:modelValue"
                                                            ))
                                                        )
                                                    }
                                                    ), "_" to 1)),
                                                    _cV(_component_up_form_item, _uM("label" to "购买数量", "prop" to "count", "border-bottom" to true), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_number_box, _uM("modelValue" to formModel["count"], "onUpdate:modelValue" to fun(`$event`: Any?){
                                                                formModel["count"] = `$event`
                                                            }
                                                            , "min" to 1, "max" to 100), null, 8, _uA(
                                                                "modelValue",
                                                                "onUpdate:modelValue"
                                                            ))
                                                        )
                                                    }
                                                    ), "_" to 1)),
                                                    _cV(_component_up_form_item, _uM("label" to "满意度", "prop" to "satisfaction", "border-bottom" to true), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_slider, _uM("modelValue" to formModel["satisfaction"], "onUpdate:modelValue" to fun(`$event`: Any?){
                                                                formModel["satisfaction"] = `$event`
                                                            }
                                                            , "min" to 0, "max" to 100, "show-value" to true, "style" to _nS(_uM("width" to "100%"))), null, 8, _uA(
                                                                "modelValue",
                                                                "onUpdate:modelValue",
                                                                "style"
                                                            ))
                                                        )
                                                    }
                                                    ), "_" to 1)),
                                                    _cV(_component_up_form_item, _uM("label" to "个人简介", "prop" to "intro", "border-bottom" to true, "label-position" to "top"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_textarea, _uM("modelValue" to formModel["intro"], "onUpdate:modelValue" to fun(`$event`: Any?){
                                                                formModel["intro"] = `$event`
                                                            }
                                                            , "placeholder" to "请输入个人简介", "count" to "", "maxlength" to 100), null, 8, _uA(
                                                                "modelValue",
                                                                "onUpdate:modelValue"
                                                            ))
                                                        )
                                                    }
                                                    ), "_" to 1)),
                                                    _cV(_component_up_form_item, _uM("label" to "相关照片", "prop" to "photos", "border-bottom" to true, "label-position" to "top"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_upload, _uM("file-list" to uploadList.value, "multiple" to true, "max-count" to 3, "width" to "80px", "height" to "80px", "onAfterRead" to onUploadAfterRead, "onDelete" to onUploadDelete), null, 8, _uA(
                                                                "file-list"
                                                            ))
                                                        )
                                                    }
                                                    ), "_" to 1))
                                                )
                                            }
                                            ), "_" to 1), 8, _uA(
                                                "model"
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "demo-block"), _uA(
                                            _cE("text", _uM("class" to "demo-label"), "标签上方对齐"),
                                            _cV(_component_up_form, _uM("model" to formModel2, "label-position" to "top", "label-width" to "100px"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cV(_component_up_form_item, _uM("label" to "活动名称", "prop" to "name", "border-bottom" to true), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_input, _uM("modelValue" to formModel2["name"], "onUpdate:modelValue" to fun(`$event`: Any?){
                                                                formModel2["name"] = `$event`
                                                            }
                                                            , "placeholder" to "请输入活动名称", "border" to "none"), null, 8, _uA(
                                                                "modelValue",
                                                                "onUpdate:modelValue"
                                                            ))
                                                        )
                                                    }
                                                    ), "_" to 1)),
                                                    _cV(_component_up_form_item, _uM("label" to "活动详情", "prop" to "detail", "border-bottom" to true), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                        return _uA(
                                                            _cV(_component_up_textarea, _uM("modelValue" to formModel2["detail"], "onUpdate:modelValue" to fun(`$event`: Any?){
                                                                formModel2["detail"] = `$event`
                                                            }
                                                            , "placeholder" to "请输入活动详情", "border" to "none"), null, 8, _uA(
                                                                "modelValue",
                                                                "onUpdate:modelValue"
                                                            ))
                                                        )
                                                    }
                                                    ), "_" to 1))
                                                )
                                            }
                                            ), "_" to 1), 8, _uA(
                                                "model"
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "mt-20px flex-row justify-between"), _uA(
                                            _cE("view", _uM("class" to "flex-1 mr-10px"), _uA(
                                                _cV(_component_up_button, _uM("type" to "primary", "text" to "提交表单", "onClick" to submitForm))
                                            )),
                                            _cE("view", _uM("class" to "flex-1 ml-10px"), _uA(
                                                _cV(_component_up_button, _uM("type" to "info", "text" to "重置表单", "onClick" to resetForm))
                                            ))
                                        ))
                                    )),
                                    _cV(_component_up_calendar, _uM("show" to calendarShow.value, "mode" to "range", "onConfirm" to onCalendarConfirm, "onClose" to fun(){
                                        calendarShow.value = false
                                    }
                                    ), null, 8, _uA(
                                        "show",
                                        "onClose"
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
                                    , "show" to datetimePickerShow.value, "mode" to "date", "min-date" to 0, "onConfirm" to onDatetimePickerConfirm, "onCancel" to fun(){
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
                return _uM("bg-__f8fafc_" to _pS(_uM("backgroundImage" to "none", "backgroundColor" to "#f8fafc")), "blur" to _pS(_uM("filter" to "var(--un-blur) var(--un-brightness) var(--un-contrast) var(--un-drop-shadow) var(--un-grayscale) var(--un-hue-rotate) var(--un-invert) var(--un-opacity) var(--un-saturate) var(--un-sepia)", "--un-blur" to "blur(8rpx)")), "flex-1" to _pS(_uM("flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%")), "flex-row" to _pS(_uM("flexDirection" to "row")), "justify-between" to _pS(_uM("justifyContent" to "space-between")), "ml-10px" to _pS(_uM("marginLeft" to 10)), "mr-10px" to _pS(_uM("marginRight" to 10)), "mt-20px" to _pS(_uM("marginTop" to 20)), "none" to _pS(_uM("display" to "none")), "p-16px" to _pS(_uM("paddingTop" to 16, "paddingRight" to 16, "paddingBottom" to 16, "paddingLeft" to 16)), "pb-30px" to _pS(_uM("paddingBottom" to 30)), "w-10px" to _pS(_uM("width" to 10)), "demo-block" to _pS(_uM("marginBottom" to 12, "paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12, "backgroundColor" to "#ffffff", "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "demo-label" to _pS(_uM("fontSize" to 14, "fontWeight" to "bold", "color" to "#606266", "marginBottom" to 10, "paddingLeft" to 4, "borderLeftWidth" to 3, "borderLeftStyle" to "solid", "borderLeftColor" to "#2979ff")))
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
