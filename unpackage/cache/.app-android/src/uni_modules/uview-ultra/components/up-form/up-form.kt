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
open class GenUniModulesUviewUltraComponentsUpFormUpForm : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var model: Any by `$props`
    open var rules: UTSJSONObject by `$props`
    open var errorType: String by `$props`
    open var borderBottom: Boolean by `$props`
    open var labelPosition: String by `$props`
    open var labelWidth: Any by `$props`
    open var labelAlign: String by `$props`
    open var labelStyle: UTSJSONObject by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var setOriginalModel: (prop: String, value: Any?) -> Unit
        get() {
            return unref(this.`$exposed`["setOriginalModel"]) as (prop: String, value: Any?) -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "setOriginalModel", value)
        }
    open var getProps: () -> UTSJSONObject
        get() {
            return unref(this.`$exposed`["getProps"]) as () -> UTSJSONObject
        }
        set(value) {
            setRefValue(this.`$exposed`, "getProps", value)
        }
    open var getRefs: () -> UTSJSONObject
        get() {
            return unref(this.`$exposed`["getRefs"]) as () -> UTSJSONObject
        }
        set(value) {
            setRefValue(this.`$exposed`, "getRefs", value)
        }
    open var validate: () -> UTSPromise<Any>
        get() {
            return unref(this.`$exposed`["validate"]) as () -> UTSPromise<Any>
        }
        set(value) {
            setRefValue(this.`$exposed`, "validate", value)
        }
    open fun clearValidate(propsParam: UTSArray<String>? = null): Unit {
        return callKotlinFunction(this.`$exposed`["clearValidate"]!!, _uA(
            propsParam
        )) as Unit
    }
    open fun validateField(value: Any, callback: ((errors: UTSArray<UTSJSONObject>) -> Unit)? = null, event: String? = null): UTSPromise<*> {
        return callKotlinFunction(this.`$exposed`["validateField"]!!, _uA(
            value,
            callback,
            event
        )) as UTSPromise<*>
    }
    open var resetFields: () -> Unit
        get() {
            return unref(this.`$exposed`["resetFields"]) as () -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "resetFields", value)
        }
    open var setRules: (rules: UTSJSONObject) -> Unit
        get() {
            return unref(this.`$exposed`["setRules"]) as (rules: UTSJSONObject) -> Unit
        }
        set(value) {
            setRefValue(this.`$exposed`, "setRules", value)
        }
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
        var setup: (__props: GenUniModulesUviewUltraComponentsUpFormUpForm, __setupCtx: SetupContext) -> Any? = fun(__props, __setupCtx): Any? {
            val __expose = __setupCtx.expose
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenUniModulesUviewUltraComponentsUpFormUpForm
            val _cache = __ins.renderCache
            val _useUltraUI = useUltraUI()
            val children = _useUltraUI.children
            val getChildren = _useUltraUI.getChildren
            val addChild = _useUltraUI.addChild
            val instance = getCurrentInstance()!!.proxy!!
            val props = __props
            val formRules = ref(_uO())
            val validator = ref<Schema>(Schema(_uO()))
            val originalModel = ref<UTSJSONObject?>(null)
            val propsChange = computed(fun(): UTSArray<Any> {
                return _uA(
                    props.errorType,
                    props.borderBottom,
                    props.labelPosition,
                    props.labelWidth,
                    props.labelAlign,
                    props.labelStyle
                )
            }
            )
            val setRules = fun(rules: UTSJSONObject){
                if (rules == null) {
                    return
                }
                formRules.value = rules
                validator.value = Schema(formRules.value)
            }
            fun resetModel(obj: Any? = null) {
                children.value.map(fun(child: ComponentPublicInstance){
                    val prop = child.`$props`["prop"].toString()
                    val value = getProperty(originalModel.value as UTSJSONObject, prop)
                    try {
                        setProperty(props.model, prop, value)
                    }
                     catch (e: Throwable) {
                        console.error("resetModel error", e, " at uni_modules/uview-ultra/components/up-form/up-form.uvue:115")
                    }
                }
                )
            }
            fun clearValidate(propsParam: UTSArray<String>? = null): Unit {
                val propsList = if (propsParam == null) {
                    _uA()
                } else {
                    propsParam
                }
                children.value.map(fun(child: ComponentPublicInstance){
                    val prop = child.`$props`["prop"].toString()
                    if (propsList.length == 0 || propsList.includes(prop)) {
                        child.`$callMethod`("setMessage", "")
                    }
                }
                )
            }
            val resetFields = fun(){
                resetModel()
                clearValidate()
            }
            fun validateField(value: Any, callback: ((errors: UTSArray<UTSJSONObject>) -> Unit)? = null, event: String? = null): UTSPromise<*> {
                return UTSPromise(fun(resolve, reject){
                    val errorsRes: UTSArray<UTSJSONObject> = _uA()
                    val validateProps: UTSArray<String> = _uA()
                    val modelSnapshot = UTSAndroid.consoleDebugError(JSON.parse(JSON.stringify(props.model)), " at uni_modules/uview-ultra/components/up-form/up-form.uvue:145") as UTSJSONObject
                    if (UTSArray.isArray(value)) {
                        (value as UTSArray<String>).forEach(fun(propItem: String){
                            validateProps.push(propItem)
                        })
                    } else {
                        validateProps.push(value as String)
                    }
                    var promises: UTSArray<UTSPromise<UTSArray<UTSJSONObject>>> = children.value.map(fun(child: ComponentPublicInstance): UTSPromise<UTSArray<UTSJSONObject>> {
                        return UTSPromise(fun(resolveChild, _reject){
                            val childErrors: UTSArray<UTSJSONObject> = _uA()
                            var childProps: UTSJSONObject = child.`$callMethod`("getProps")!! as UTSJSONObject
                            var childRefs: UTSJSONObject = child.`$callMethod`("getRefs")!! as UTSJSONObject
                            if (validateProps.includes(childProps["prop"]!!.toString())) {
                                val propertyVal = getProperty(modelSnapshot, childProps["prop"]!!.toString())
                                val propertyChain = childProps["prop"]!!.toString().split(".")
                                val propertyName = propertyChain[propertyChain.length - 1]
                                var rule: UTSArray<UTSJSONObject> = _uA()
                                var tmp = formRules.value[childProps["prop"]!!.toString()]
                                if (tmp == null && props.rules != null) {
                                    tmp = props.rules[childProps["prop"]!!.toString()]
                                }
                                if (UTSArray.isArray(tmp)) {
                                    rule = tmp as UTSArray<UTSJSONObject>
                                } else {
                                    if (tmp != null) {
                                        rule.push(tmp as UTSJSONObject)
                                    }
                                }
                                if (rule == null || rule.length == 0) {
                                    console.log("rule-miss", childProps["prop"]!!.toString(), UTSJSONObject.keys(formRules.value), " at uni_modules/uview-ultra/components/up-form/up-form.uvue:191")
                                    resolveChild(_uA())
                                    return
                                }
                                var rules: UTSArray<UTSJSONObject> = _uA()
                                rules = rule
                                var executeRuleCount: Number = 0
                                var completeRuleCount: Number = 0
                                var childResolved = false
                                val finishChild = fun(){
                                    if (childResolved) {
                                        return
                                    }
                                    if (completeRuleCount < executeRuleCount) {
                                        return
                                    }
                                    if (childErrors.length > 0) {
                                        val msg = childErrors[0]["message"]
                                        val childMsg = if (msg == null) {
                                            ""
                                        } else {
                                            msg.toString()
                                        }
                                        child.`$callMethod`("setMessage", childMsg)
                                    } else {
                                        child.`$callMethod`("setMessage", "")
                                    }
                                    childResolved = true
                                    resolveChild(errorsRes)
                                }
                                run {
                                    var i: Number = 0
                                    while(i < rules.length){
                                        val ruleItem = rules[i]
                                        if (ruleItem == null) {
                                            i++
                                            continue
                                        }
                                        val normalizedRule = UPFormRuleItem()
                                        if (ruleItem["type"] != null) {
                                            normalizedRule.type = ruleItem["type"]!!.toString()
                                        }
                                        if (ruleItem["required"] != null) {
                                            normalizedRule.required = ruleItem["required"] as Boolean
                                        }
                                        if (ruleItem["min"] != null) {
                                            normalizedRule.min = parseFloat(ruleItem["min"]!!.toString())
                                        }
                                        if (ruleItem["max"] != null) {
                                            normalizedRule.max = parseFloat(ruleItem["max"]!!.toString())
                                        }
                                        if (ruleItem["len"] != null) {
                                            normalizedRule.len = parseFloat(ruleItem["len"]!!.toString())
                                        }
                                        if (ruleItem["message"] != null) {
                                            normalizedRule.message = ruleItem["message"]!!.toString()
                                        }
                                        if (ruleItem["enum"] != null && UTSArray.isArray(ruleItem["enum"])) {
                                            val enumList: UTSArray<String> = _uA()
                                            val rawEnum = ruleItem["enum"] as UTSArray<Any>
                                            run {
                                                var j: Number = 0
                                                while(j < rawEnum.length){
                                                    enumList.push(rawEnum[j]!!.toString())
                                                    j++
                                                }
                                            }
                                            normalizedRule.`enum` = enumList
                                        }
                                        if (ruleItem["whitespace"] != null) {
                                            normalizedRule.whitespace = ruleItem["whitespace"] as Boolean
                                        }
                                        if (ruleItem["pattern"] != null) {
                                            normalizedRule.pattern = ruleItem["pattern"]
                                        }
                                        if (ruleItem["validator"] != null) {
                                            normalizedRule.validator = ruleItem["validator"] as Any
                                        }
                                        if (ruleItem["asyncValidator"] != null) {
                                            normalizedRule.asyncValidator = ruleItem["asyncValidator"] as Any
                                        }
                                        if (ruleItem["transform"] != null) {
                                            normalizedRule.transform = ruleItem["transform"] as Any
                                        }
                                        var trigger: UTSArray<String> = _uA()
                                        if (ruleItem["trigger"] != null) {
                                            val triggerVal = ruleItem["trigger"]
                                            if (UTSArray.isArray(triggerVal)) {
                                                val triggerList = triggerVal as UTSArray<Any>
                                                run {
                                                    var j: Number = 0
                                                    while(j < triggerList.length){
                                                        trigger.push(triggerList[j]!!.toString())
                                                        j++
                                                    }
                                                }
                                                normalizedRule.trigger = trigger
                                            } else {
                                                trigger.push(triggerVal!!.toString())
                                                normalizedRule.trigger = triggerVal!!.toString()
                                            }
                                        }
                                        if (event != null && trigger.length > 0 && !trigger.includes(event)) {
                                            i++
                                            continue
                                        }
                                        executeRuleCount += 1
                                        val validator = Schema(_uO(propertyName to normalizedRule))
                                        console.log("rule-debug", childProps["prop"]!!.toString(), JSON.stringify(normalizedRule), propertyVal, " at uni_modules/uview-ultra/components/up-form/up-form.uvue:288")
                                        try {
                                            var settled = false
                                            fun finishRule(ruleErrors: UTSArray<UTSJSONObject>?): Unit {
                                                if (settled) {
                                                    return
                                                }
                                                settled = true
                                                if (ruleErrors != null && ruleErrors.length > 0) {
                                                    ruleErrors.forEach(fun(element: UTSJSONObject){
                                                        element["prop"] = childProps["prop"]
                                                    }
                                                    )
                                                    ruleErrors.forEach(fun(element: UTSJSONObject){
                                                        errorsRes.push(element)
                                                        childErrors.push(element)
                                                    }
                                                    )
                                                }
                                                completeRuleCount += 1
                                                finishChild()
                                            }
                                            val validateRet = validator.validate(_uO(propertyName to propertyVal), _uO(), fun(errors: UTSArray<UTSJSONObject>?, fields: UTSJSONObject?){
                                                console.log("rule-errors", childProps["prop"]!!.toString(), errors, " at uni_modules/uview-ultra/components/up-form/up-form.uvue:311")
                                                finishRule(errors)
                                            }) as UTSPromise<Any>
                                            validateRet.then(fun(res: Any): Unit {
                                                finishRule(_uA())
                                            }, fun(err: Any): Unit {
                                                var ruleErrors: UTSArray<UTSJSONObject> = _uA()
                                                if (err != null) {
                                                    try {
                                                        val errObj = err as UTSJSONObject
                                                        val errsVal = errObj["errors"]
                                                        if (errsVal != null && UTSArray.isArray(errsVal)) {
                                                            ruleErrors = errsVal as UTSArray<UTSJSONObject>
                                                        }
                                                    }
                                                     catch (e: Throwable) {}
                                                }
                                                finishRule(ruleErrors)
                                            })
                                        } catch (e: Throwable) {
                                            completeRuleCount += 1
                                            finishChild()
                                        }
                                        i++
                                    }
                                }
                                if (executeRuleCount == 0) {
                                    child.`$callMethod`("setMessage", "")
                                    resolveChild(_uA())
                                }
                            } else {
                                resolveChild(_uA())
                            }
                        }
                        )
                    }
                    )
                    UTSPromise.all(promises).then(fun(results: Any){
                        console.log("errors", errorsRes.length, " at uni_modules/uview-ultra/components/up-form/up-form.uvue:352")
                        if (callback != null) {
                            callback(errorsRes)
                        }
                        resolve(errorsRes)
                    }
                    )
                }
                )
            }
            val validate = fun(): UTSPromise<Any> {
                if ("development" == "development" && UTSJSONObject.keys(formRules.value).length == 0) {
                    console.error("未设置rules，请看文档说明！如果已经设置，请刷新页面。", " at uni_modules/uview-ultra/components/up-form/up-form.uvue:370")
                    return UTSPromise(fun(resolve, reject){
                        reject(_uO())
                    }
                    )
                }
                return UTSPromise(fun(resolve, reject){
                    val formItemProps: UTSArray<String> = children.value.map(fun(item: ComponentPublicInstance): String {
                        val props = item.`$callMethod`("getProps") as UTSJSONObject
                        return if (props != null) {
                            (props["prop"] as Any).toString()
                        } else {
                            ""
                        }
                    }
                    )
                    console.log("formItemProps", formItemProps, " at uni_modules/uview-ultra/components/up-form/up-form.uvue:385")
                    var func = fun(errors: UTSArray<UTSJSONObject>): Unit {
                        if (errors.length > 0) {
                            if (props.errorType == "toast" && errors[0] != null) {
                                toast((errors[0]["message"] as Any).toString())
                            }
                            console.log("errors", errors.length, " at uni_modules/uview-ultra/components/up-form/up-form.uvue:390")
                            reject(errors)
                        } else {
                            resolve(true)
                        }
                    }
                    validateField(formItemProps, func)
                }
                )
            }
            watch(fun(): UTSJSONObject {
                return props.rules
            }
            , fun(newVal: UTSJSONObject){
                setRules(newVal)
            }
            , WatchOptions(immediate = true))
            watch(fun(): Any {
                return propsChange.value
            }
            , fun(): Unit {
                if (children.value.length > 0) {
                    children.value.forEach(fun(child: ComponentPublicInstance){
                        child.`$callMethod`("updateParentData")
                    }
                    )
                }
            }
            )
            watch(fun(): Any {
                return props.model
            }
            , fun(newVal: Any): Unit {
                if (originalModel.value == null) {
                    originalModel.value = deepClone(newVal) as UTSJSONObject
                }
            }
            , WatchOptions(immediate = true))
            val getProps = fun(): UTSJSONObject {
                return _uO("labelPosition" to props.labelPosition, "labelAlign" to props.labelAlign, "labelStyle" to props.labelStyle, "labelWidth" to props.labelWidth, "errorType" to props.errorType)
            }
            val getRefs = fun(): UTSJSONObject {
                return _uO("originalModel" to if (originalModel.value == null) {
                    _uO()
                } else {
                    originalModel.value!!
                }
                )
            }
            val setOriginalModel = fun(prop: String, value: Any?) {
                if (originalModel.value == null) {
                    originalModel.value = _uO()
                }
                originalModel.value!![prop] = value
            }
            __expose(_uM("setOriginalModel" to setOriginalModel, "getChildren" to getChildren, "addChild" to addChild, "getProps" to getProps, "getRefs" to getRefs, "validate" to validate, "clearValidate" to ::clearValidate, "validateField" to ::validateField, "resetFields" to resetFields, "setRules" to setRules))
            return fun(): Any? {
                return _cE("view", _uM("class" to "up-form"), _uA(
                    renderSlot(_ctx.`$slots`, "default")
                ))
            }
        }
        var name = "up-form"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA())
        }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM()
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "model" to _uM("default" to default__80.getArray("form.model")), "rules" to _uM("type" to "Object", "default" to default__80.getArray("form.rules")), "errorType" to _uM("type" to "String", "default" to default__80.getString("form.errorType")), "borderBottom" to _uM("type" to "Boolean", "default" to default__80.getBoolean("form.borderBottom")), "labelPosition" to _uM("type" to "String", "default" to default__80.getString("form.labelPosition")), "labelWidth" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to default__80.getNumber("form.labelWidth")), "labelAlign" to _uM("type" to "String", "default" to default__80.getString("form.labelAlign")), "labelStyle" to _uM("type" to "Object", "default" to default__80.getArray("form.labelStyle"))))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "model",
            "rules",
            "errorType",
            "borderBottom",
            "labelPosition",
            "labelWidth",
            "labelAlign",
            "labelStyle"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
