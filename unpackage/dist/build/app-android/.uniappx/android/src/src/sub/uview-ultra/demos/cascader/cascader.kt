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
open class GenSrcSubUviewUltraDemosCascaderCascader : BasePage {
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
        var setup: (__props: GenSrcSubUviewUltraDemosCascaderCascader) -> Any? = fun(__props): Any? {
            val __ins = getCurrentInstance()!!
            val _ctx = __ins.proxy as GenSrcSubUviewUltraDemosCascaderCascader
            val _cache = __ins.renderCache
            val showArea = ref<Boolean>(false)
            val showCategory = ref<Boolean>(false)
            val showOrg = ref<Boolean>(false)
            val showColumn = ref<Boolean>(false)
            val showAuto = ref<Boolean>(false)
            val areaValue = ref<UTSArray<Any>>(_uA<Any>())
            val categoryValue = ref<UTSArray<Any>>(_uA<Any>("2", "2-2"))
            val orgValue = ref<UTSArray<Any>>(_uA<Any>())
            val columnValue = ref<UTSArray<Any>>(_uA<Any>())
            val autoValue = ref<UTSArray<Any>>(_uA<Any>())
            val eventLog = ref<String>("选择后 change / confirm 事件会返回选中的值数组")
            val areaData = ref<UTSArray<UTSJSONObject>>(_uA<UTSJSONObject>(_uO("label" to "北京市", "value" to "11", "children" to _uA(
                _uO("label" to "北京市", "value" to "1101", "children" to _uA(
                    _uO("label" to "东城区", "value" to "110101"),
                    _uO("label" to "西城区", "value" to "110102"),
                    _uO("label" to "朝阳区", "value" to "110105")
                ))
            )), _uO("label" to "广东省", "value" to "44", "children" to _uA(
                _uO("label" to "广州市", "value" to "4401", "children" to _uA(
                    _uO("label" to "天河区", "value" to "440106"),
                    _uO("label" to "越秀区", "value" to "440104"),
                    _uO("label" to "海珠区", "value" to "440105")
                ))
            )), _uO("label" to "浙江省", "value" to "33", "children" to _uA(
                _uO("label" to "杭州市", "value" to "3301", "children" to _uA(
                    _uO("label" to "西湖区", "value" to "330106"),
                    _uO("label" to "滨江区", "value" to "330108")
                ))
            ))))
            val categoryData = ref<UTSArray<UTSJSONObject>>(_uA<UTSJSONObject>(_uO("label" to "服装", "value" to "1", "children" to _uA(
                _uO("label" to "上装", "value" to "1-1", "children" to _uA(
                    _uO("label" to "T恤", "value" to "1-1-1"),
                    _uO("label" to "衬衫", "value" to "1-1-2")
                ))
            )), _uO("label" to "数码", "value" to "2", "children" to _uA(
                _uO("label" to "电脑", "value" to "2-2", "children" to _uA(
                    _uO("label" to "笔记本", "value" to "2-2-1"),
                    _uO("label" to "台式机", "value" to "2-2-2")
                ))
            )), _uO("label" to "食品", "value" to "3", "children" to _uA(
                _uO("label" to "零食", "value" to "3-3", "children" to _uA(
                    _uO("label" to "坚果", "value" to "3-3-1"),
                    _uO("label" to "饼干", "value" to "3-3-2")
                ))
            ))))
            val orgData = ref<UTSArray<UTSJSONObject>>(_uA<UTSJSONObject>(_uO("name" to "总部", "id" to "1", "childs" to _uA(
                _uO("name" to "研发部", "id" to "1-1", "childs" to _uA(
                    _uO("name" to "前端组", "id" to "1-1-1"),
                    _uO("name" to "后端组", "id" to "1-1-2")
                )),
                _uO("name" to "市场部", "id" to "1-2", "childs" to _uA(
                    _uO("name" to "品牌组", "id" to "1-2-1"),
                    _uO("name" to "运营组", "id" to "1-2-2")
                ))
            ))))
            fun gen_getValueText_fn(value: UTSArray<Any>): String {
                if (value.length == 0) {
                    return "未选择"
                }
                val texts = _uA<String>()
                run {
                    var i: Number = 0
                    while(i < value.length){
                        val item = value[i]
                        texts.push(if (item == null) {
                            ""
                        } else {
                            item.toString()
                        }
                        )
                        i++
                    }
                }
                return texts.join(" / ")
            }
            val getValueText = ::gen_getValueText_fn
            fun gen_openArea_fn(): Unit {
                showArea.value = true
            }
            val openArea = ::gen_openArea_fn
            fun gen_openCategory_fn(): Unit {
                showCategory.value = true
            }
            val openCategory = ::gen_openCategory_fn
            fun gen_openOrg_fn(): Unit {
                showOrg.value = true
            }
            val openOrg = ::gen_openOrg_fn
            fun gen_openColumn_fn(): Unit {
                showColumn.value = true
            }
            val openColumn = ::gen_openColumn_fn
            fun gen_openAuto_fn(): Unit {
                showAuto.value = true
            }
            val openAuto = ::gen_openAuto_fn
            fun gen_onAreaChange_fn(value: UTSArray<Any>): Unit {
                eventLog.value = "基础用法 change => " + getValueText(value)
            }
            val onAreaChange = ::gen_onAreaChange_fn
            fun gen_onAreaConfirm_fn(value: UTSArray<Any>): Unit {
                eventLog.value = "基础用法 confirm => " + getValueText(value)
            }
            val onAreaConfirm = ::gen_onAreaConfirm_fn
            fun gen_onCategoryConfirm_fn(value: UTSArray<Any>): Unit {
                eventLog.value = "默认值 confirm => " + getValueText(value)
            }
            val onCategoryConfirm = ::gen_onCategoryConfirm_fn
            fun gen_onOrgConfirm_fn(value: UTSArray<Any>): Unit {
                eventLog.value = "自定义字段 confirm => " + getValueText(value)
            }
            val onOrgConfirm = ::gen_onOrgConfirm_fn
            fun gen_onColumnConfirm_fn(value: UTSArray<Any>): Unit {
                eventLog.value = "垂直头部 confirm => " + getValueText(value)
            }
            val onColumnConfirm = ::gen_onColumnConfirm_fn
            fun gen_onAutoConfirm_fn(value: UTSArray<Any>): Unit {
                eventLog.value = "自动关闭 confirm => " + getValueText(value)
            }
            val onAutoConfirm = ::gen_onAutoConfirm_fn
            return fun(): Any? {
                val _component_up_title = resolveEasyComponent("up-title", GenUniModulesUviewUltraComponentsUpTitleUpTitleClass)
                val _component_up_button = resolveEasyComponent("up-button", GenUniModulesUviewUltraComponentsUpButtonUpButtonClass)
                val _component_up_cascader = resolveEasyComponent("up-cascader", GenUniModulesUviewUltraComponentsUpCascaderUpCascaderClass)
                return _cV(unref(GenAppkuClass), _uM("layout" to "navbar", "show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to false, "page-style" to _uO("navigationBarTitleText" to "up-cascader 级联选择器", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                    return _uA(
                        _cV(unref(GenSrcLayoutsNavbarClass), _uM("show-back" to true, "hide-navbar" to false, "enable-pull-down-refresh" to false, "page-style" to _uO("navigationBarTitleText" to "up-cascader 级联选择器", "navigationStyle" to "custom")), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE("view", _uM("class" to "weapp-tw-border page-container bg-_b_hf8fafc_B min-h-screen pb-_b30px_B"), _uA(
                                    _cE("view", _uM("class" to "weapp-tw-border p-_b16px_B"), _uA(
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "基础用法（省市区）")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cV(_component_up_button, _uM("type" to "primary", "text" to "选择地区", "onClick" to openArea)),
                                            _cE("view", _uM("class" to "weapp-tw-border demo-result"), _uA(
                                                _cE("text", _uM("class" to "weapp-tw-border demo-result-label"), "已选："),
                                                _cE("text", _uM("class" to "weapp-tw-border demo-result-value"), _tD(getValueText(areaValue.value)), 1)
                                            )),
                                            _cV(_component_up_cascader, _uM("show" to showArea.value, "onUpdate:show" to fun(`$event`: Boolean){
                                                showArea.value = `$event`
                                            }
                                            , "modelValue" to areaValue.value, "onUpdate:modelValue" to fun(`$event`: UTSArray<Any>){
                                                areaValue.value = `$event`
                                            }
                                            , "data" to areaData.value, "onChange" to onAreaChange, "onConfirm" to onAreaConfirm), null, 8, _uA(
                                                "show",
                                                "onUpdate:show",
                                                "modelValue",
                                                "onUpdate:modelValue",
                                                "data"
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "设置默认值（v-model 默认选中「数码 → 电脑」）")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cV(_component_up_button, _uM("type" to "primary", "text" to "选择商品分类", "onClick" to openCategory)),
                                            _cE("view", _uM("class" to "weapp-tw-border demo-result"), _uA(
                                                _cE("text", _uM("class" to "weapp-tw-border demo-result-label"), "已选："),
                                                _cE("text", _uM("class" to "weapp-tw-border demo-result-value"), _tD(getValueText(categoryValue.value)), 1)
                                            )),
                                            _cV(_component_up_cascader, _uM("show" to showCategory.value, "onUpdate:show" to fun(`$event`: Boolean){
                                                showCategory.value = `$event`
                                            }
                                            , "modelValue" to categoryValue.value, "onUpdate:modelValue" to fun(`$event`: UTSArray<Any>){
                                                categoryValue.value = `$event`
                                            }
                                            , "data" to categoryData.value, "onConfirm" to onCategoryConfirm), null, 8, _uA(
                                                "show",
                                                "onUpdate:show",
                                                "modelValue",
                                                "onUpdate:modelValue",
                                                "data"
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "自定义字段名（value-key / label-key / children-key）")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cV(_component_up_button, _uM("type" to "primary", "text" to "选择组织架构", "onClick" to openOrg)),
                                            _cE("view", _uM("class" to "weapp-tw-border demo-result"), _uA(
                                                _cE("text", _uM("class" to "weapp-tw-border demo-result-label"), "已选："),
                                                _cE("text", _uM("class" to "weapp-tw-border demo-result-value"), _tD(getValueText(orgValue.value)), 1)
                                            )),
                                            _cV(_component_up_cascader, _uM("show" to showOrg.value, "onUpdate:show" to fun(`$event`: Boolean){
                                                showOrg.value = `$event`
                                            }
                                            , "modelValue" to orgValue.value, "onUpdate:modelValue" to fun(`$event`: UTSArray<Any>){
                                                orgValue.value = `$event`
                                            }
                                            , "data" to orgData.value, "value-key" to "id", "label-key" to "name", "children-key" to "childs", "onConfirm" to onOrgConfirm), null, 8, _uA(
                                                "show",
                                                "onUpdate:show",
                                                "modelValue",
                                                "onUpdate:modelValue",
                                                "data"
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "垂直头部 + 单列（headerDirection=\"column\"、optionsCols=1）")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cV(_component_up_button, _uM("type" to "primary", "text" to "选择商品分类", "onClick" to openColumn)),
                                            _cE("view", _uM("class" to "weapp-tw-border demo-result"), _uA(
                                                _cE("text", _uM("class" to "weapp-tw-border demo-result-label"), "已选："),
                                                _cE("text", _uM("class" to "weapp-tw-border demo-result-value"), _tD(getValueText(columnValue.value)), 1)
                                            )),
                                            _cV(_component_up_cascader, _uM("show" to showColumn.value, "onUpdate:show" to fun(`$event`: Boolean){
                                                showColumn.value = `$event`
                                            }
                                            , "modelValue" to columnValue.value, "onUpdate:modelValue" to fun(`$event`: UTSArray<Any>){
                                                columnValue.value = `$event`
                                            }
                                            , "data" to categoryData.value, "header-direction" to "column", "options-cols" to 1, "onConfirm" to onColumnConfirm), null, 8, _uA(
                                                "show",
                                                "onUpdate:show",
                                                "modelValue",
                                                "onUpdate:modelValue",
                                                "data"
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "自动关闭（auto-close 选中最后一级立即关闭并触发 confirm）")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cV(_component_up_button, _uM("type" to "primary", "text" to "选择地区", "onClick" to openAuto)),
                                            _cE("view", _uM("class" to "weapp-tw-border demo-result"), _uA(
                                                _cE("text", _uM("class" to "weapp-tw-border demo-result-label"), "已选："),
                                                _cE("text", _uM("class" to "weapp-tw-border demo-result-value"), _tD(getValueText(autoValue.value)), 1)
                                            )),
                                            _cV(_component_up_cascader, _uM("show" to showAuto.value, "onUpdate:show" to fun(`$event`: Boolean){
                                                showAuto.value = `$event`
                                            }
                                            , "modelValue" to autoValue.value, "onUpdate:modelValue" to fun(`$event`: UTSArray<Any>){
                                                autoValue.value = `$event`
                                            }
                                            , "data" to areaData.value, "auto-close" to true, "onConfirm" to onAutoConfirm), null, 8, _uA(
                                                "show",
                                                "onUpdate:show",
                                                "modelValue",
                                                "onUpdate:modelValue",
                                                "data"
                                            ))
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border demo-block mt-_b12px_B"), _uA(
                                            _cV(_component_up_title, _uM("class" to "demo-title"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                                return _uA(
                                                    _cE("text", _uM("class" to "weapp-tw-border demo-title-text"), "说明")
                                                )
                                            }
                                            ), "_" to 1)),
                                            _cE("text", _uM("class" to "weapp-tw-border demo-text"), " up-cascader 支持无限级联，可通过 data 配置级联数据、v-model 绑定选中值、v-model:show 控制显示隐藏；value-key / label-key / children-key 可自定义数据字段名；headerDirection=\"column\" 配合 optionsCols=1 适合长文案选项；auto-close 可在选中最后一级时自动关闭并触发 confirm；change / confirm / cancel 事件回调均返回选中值数组。 ")
                                        )),
                                        _cE("view", _uM("class" to "weapp-tw-border log-box mt-_b10px_B"), _uA(
                                            _cE("text", _uM("class" to "weapp-tw-border log-text"), _tD(eventLog.value), 1)
                                        ))
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
                return _uM("weapp-tw-border" to _pS(_uM("borderTopWidth" to 0, "borderRightWidth" to 0, "borderBottomWidth" to 0, "borderLeftWidth" to 0)), "demo-block" to _pS(_uM("marginBottom" to 12, "paddingTop" to 12, "paddingRight" to 12, "paddingBottom" to 12, "paddingLeft" to 12, "backgroundColor" to "#ffffff", "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "demo-title" to _pS(_uM("marginBottom" to 10)), "demo-title-text" to _pS(_uM("fontSize" to 14, "fontWeight" to "bold", "color" to "#606266")), "demo-result" to _pS(_uM("display" to "flex", "flexDirection" to "row", "marginTop" to 10)), "demo-result-label" to _pS(_uM("fontSize" to 13, "color" to "#64748b")), "demo-result-value" to _pS(_uM("fontSize" to 13, "color" to "#2563eb")), "demo-text" to _pS(_uM("fontSize" to 13, "lineHeight" to "20px", "color" to "#64748b")), "log-box" to _pS(_uM("paddingTop" to 10, "paddingRight" to 12, "paddingBottom" to 10, "paddingLeft" to 12, "backgroundColor" to "#0f172a", "borderTopLeftRadius" to 8, "borderTopRightRadius" to 8, "borderBottomRightRadius" to 8, "borderBottomLeftRadius" to 8)), "log-text" to _pS(_uM("fontSize" to 12, "lineHeight" to "18px", "color" to "#93c5fd")))
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
