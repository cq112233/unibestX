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
open class GenUniModulesUviewUltraComponentsUpPickerUpPicker : VueComponent {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onCreated(fun() {}, __ins)
        onCreated(fun() {}, __ins)
        this.`$watch`(fun(): Any? {
            return this.defaultIndex
        }
        , fun(n: UTSArray<Number>) {
            this.setIndexs(n, true)
        }
        , WatchOptions(immediate = true, deep = true))
        this.`$watch`(fun(): Any? {
            return this.columns
        }
        , fun(n: UTSArray<UTSArray<Any>>) {
            this.setColumns(n)
        }
        , WatchOptions(immediate = true, deep = true))
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        val _component_up_toolbar = resolveEasyComponent("up-toolbar", GenUniModulesUviewUltraComponentsUpToolbarUpToolbarClass)
        val _component_picker_view_column = resolveComponent("picker-view-column")
        val _component_picker_view = resolveComponent("picker-view")
        val _component_up_loading_icon = resolveEasyComponent("up-loading-icon", GenUniModulesUviewUltraComponentsUpLoadingIconUpLoadingIconClass)
        val _component_up_popup = resolveEasyComponent("up-popup", GenUniModulesUviewUltraComponentsUpPopupUpPopupClass)
        return _cE("view", _uM("class" to "up-picker-warrper"), _uA(
            if (isTrue(_ctx.hasInput)) {
                _cE("view", _uM("key" to 0, "class" to "up-picker-input cursor-pointer", "onClick" to fun(){
                    _ctx.showByClickInput = !_ctx.showByClickInput
                }), _uA(
                    renderSlot(_ctx.`$slots`, "default", _uO(), fun(): UTSArray<Any> {
                        return _uA(
                            _cE("view", null, _tD(if (_ctx.inputLabel.length > 0) {
                                _ctx.inputLabel.join("/")
                            } else {
                                _ctx.placeholder
                            }), 1)
                        )
                    })
                ), 8, _uA(
                    "onClick"
                ))
            } else {
                _cC("v-if", true)
            }
            ,
            _cV(_component_up_popup, _uM("show" to (_ctx.pageInline || _ctx.show || (_ctx.hasInput && _ctx.showByClickInput)), "mode" to _ctx.popupMode, "pageInline" to _ctx.pageInline, "onClose" to _ctx.closeHandler), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                return _uA(
                    _cE("view", _uM("class" to "up-picker"), _uA(
                        if (isTrue(_ctx.showToolbar)) {
                            _cV(_component_up_toolbar, _uM("key" to 0, "cancelColor" to _ctx.cancelColor, "confirmColor" to _ctx.confirmColor, "cancelText" to _ctx.cancelText, "confirmText" to _ctx.confirmText, "title" to _ctx.title, "rightSlot" to if (_ctx.toolbarRightSlot) {
                                true
                            } else {
                                false
                            }, "onCancel" to _ctx.cancel, "onConfirm" to _ctx.confirm), _uM("right" to withSlotCtx(fun(): UTSArray<Any> {
                                return _uA(
                                    renderSlot(_ctx.`$slots`, "toolbar-right")
                                )
                            }), "_" to 3), 8, _uA(
                                "cancelColor",
                                "confirmColor",
                                "cancelText",
                                "confirmText",
                                "title",
                                "rightSlot",
                                "onCancel",
                                "onConfirm"
                            ))
                        } else {
                            _cC("v-if", true)
                        }
                        ,
                        renderSlot(_ctx.`$slots`, "toolbar-bottom"),
                        _cV(_component_picker_view, _uM("class" to "up-picker__view", "indicatorStyle" to ("height: " + _ctx.addUnit(_ctx.itemHeight)), "value" to _ctx.innerIndex, "immediateChange" to _ctx.immediateChange, "style" to _nS(_uM("height" to _ctx.pickerViewHeight)), "onChange" to _ctx.changeHandler), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                            return _uA(
                                _cE(Fragment, null, RenderHelpers.renderList(_ctx.innerColumns, fun(item, index, __index, _cached): Any {
                                    return _cV(_component_picker_view_column, _uM("key" to index, "class" to "up-picker__view__column"), _uM("default" to withSlotCtx(fun(): UTSArray<Any> {
                                        return _uA(
                                            if (isTrue(_ctx.testArray(item))) {
                                                _cE(Fragment, _uM("key" to 0), RenderHelpers.renderList(item, fun(item1, index1, __index, _cached): Any {
                                                    return _cE("view", _uM("class" to "up-picker__view__column__item up-line-1", "key" to index1, "style" to _nS(_uM("height" to _ctx.addUnit(_ctx.itemHeight)))), _uA(
                                                        _cE("text", _uM("class" to "up-picker__view__column__item__text", "style" to _nS(_uM("lineHeight" to _ctx.addUnit(_ctx.itemHeight), "fontWeight" to if ((_ctx.innerIndex.length - 1 >= index && index1 === _ctx.innerIndex[index])) {
                                                            "bold"
                                                        } else {
                                                            "normal"
                                                        }))), _tD(_ctx.getItemText(item1)), 5)
                                                    ), 4)
                                                }), 128)
                                            } else {
                                                _cC("v-if", true)
                                            }
                                        )
                                    }
                                    ), "_" to 2), 1024)
                                }
                                ), 128)
                            )
                        }
                        ), "_" to 1), 8, _uA(
                            "indicatorStyle",
                            "value",
                            "immediateChange",
                            "style",
                            "onChange"
                        )),
                        if (isTrue(_ctx.loading)) {
                            _cE("view", _uM("key" to 1, "class" to "up-picker--loading"), _uA(
                                _cV(_component_up_loading_icon, _uM("mode" to "circle"))
                            ))
                        } else {
                            _cC("v-if", true)
                        }
                    ))
                )
            }
            ), "_" to 3), 8, _uA(
                "show",
                "mode",
                "pageInline",
                "onClose"
            ))
        ))
    }
    open var customStyle: Any by `$props`
    open var customClass: String by `$props`
    open var url: String by `$props`
    open var linkType: String by `$props`
    open var modelValue: UTSArray<Any?> by `$props`
    open var hasInput: Boolean by `$props`
    open var placeholder: String by `$props`
    open var show: Boolean by `$props`
    open var popupMode: String by `$props`
    open var showToolbar: Boolean by `$props`
    open var title: String by `$props`
    open var columns: UTSArray<Any?> by `$props`
    open var loading: Boolean by `$props`
    open var itemHeight: Any by `$props`
    open var cancelText: String by `$props`
    open var confirmText: String by `$props`
    open var cancelColor: String by `$props`
    open var confirmColor: String by `$props`
    open var visibleItemCount: Any by `$props`
    open var keyName: String by `$props`
    open var closeOnClickOverlay: Boolean by `$props`
    open var defaultIndex: UTSArray<Any?> by `$props`
    open var immediateChange: Boolean by `$props`
    open var toolbarRightSlot: Boolean by `$props`
    open var pageInline: Boolean by `$props`
    open var parent: ComponentPublicInstance? by `$data`
    open var parentData: UTSJSONObject by `$data`
    open var children: UTSArray<ComponentPublicInstance> by `$data`
    open var childrenRefs: UTSArray<String> by `$data`
    open var lastIndex: UTSArray<Number> by `$data`
    open var innerIndex: UTSArray<Number> by `$data`
    open var innerColumns: UTSArray<UTSArray<Any>> by `$data`
    open var columnIndex: Number by `$data`
    open var showByClickInput: Boolean by `$data`
    open var pickerViewHeight: String by `$data`
    open var inputLabel: UTSArray<String> by `$data`
    open var inputValue: UTSArray<Any> by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return _uM("parent" to null as ComponentPublicInstance?, "parentData" to _uO(), "children" to _uA<ComponentPublicInstance>(), "childrenRefs" to _uA<String>(), "lastIndex" to _uA<Number>(), "innerIndex" to _uA<Number>(), "innerColumns" to _uA<UTSArray<Any>>(), "columnIndex" to 0, "showByClickInput" to false, "pickerViewHeight" to computed<String>(fun(): String {
            var tmp = parseInt(this.visibleItemCount.toString()) * parseInt(this.itemHeight.toString())
            return uni.UNI5198058.addUnit(tmp)
        }
        ), "inputLabel" to computed<UTSArray<String>>(fun(): UTSArray<String> {
            var items: UTSArray<Any> = _uA()
            this.innerColumns.map(fun(item, index){
                val idx = if (index < this.innerIndex.length) {
                    this.innerIndex[index]
                } else {
                    0
                }
                if (idx < item.length) {
                    items.push(item[idx])
                }
            }
            )
            var res: UTSArray<String> = _uA()
            items.forEach(fun(element){
                if (UTSAndroid.`typeof`(element) == "object") {
                    res.push((element as UTSJSONObject)[this.keyName].toString())
                }
            }
            )
            return res
        }
        ), "inputValue" to computed<UTSArray<Any>>(fun(): UTSArray<Any> {
            var items: UTSArray<Any> = _uA()
            this.innerColumns.map(fun(item, index){
                val idx = if (index < this.innerIndex.length) {
                    this.innerIndex[index]
                } else {
                    0
                }
                if (idx < item.length) {
                    items.push(item[idx])
                }
            }
            )
            var res: UTSArray<Any> = _uA()
            items.forEach(fun(element){
                if (UTSAndroid.`typeof`(element) == "string") {
                    res.push((element as String).toString())
                } else {
                    var ele1 = (element as UTSJSONObject)["id"]
                    if (ele1 != null) {
                        res.push(ele1)
                    }
                }
            }
            )
            return res
        }
        ))
    }
    open fun `$upAddUnit`(kVal: Any?, unit: String? = ""): String {
        return uni.UNI5198058.addUnit(kVal, unit)
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
    open var addUnit = ::gen_addUnit_fn
    open fun gen_addUnit_fn(str: Any): String {
        return uni.UNI5198058.addUnit(str)
    }
    open var testArray = ::gen_testArray_fn
    open fun gen_testArray_fn(obj: Any): Boolean {
        return array(obj)
    }
    open var getItemText = ::gen_getItemText_fn
    open fun gen_getItemText_fn(item: Any): Any? {
        if (UTSAndroid.`typeof`(item) == "object") {
            var ele1 = (item as UTSJSONObject)[this.keyName]
            if (ele1 != null) {
                return ele1.toString()
            }
            return ""
        } else {
            return item
        }
    }
    open var closeHandler = ::gen_closeHandler_fn
    open fun gen_closeHandler_fn(): Unit {
        if (this.closeOnClickOverlay) {
            if (this.hasInput) {
                this.showByClickInput = false
            }
            this.`$emit`("close")
        }
    }
    open var cancel = ::gen_cancel_fn
    open fun gen_cancel_fn(): Unit {
        if (this.hasInput) {
            this.showByClickInput = false
        }
        this.`$emit`("cancel")
    }
    open var confirm = ::gen_confirm_fn
    open fun gen_confirm_fn(): Unit {
        this.`$emit`("update:modelValue", this.inputValue)
        if (this.hasInput) {
            this.showByClickInput = false
        }
        this.`$emit`("confirm", _uO("indexs" to this.innerIndex, "value" to this.innerColumns.map(fun(item, index){}), "values" to this.innerColumns))
    }
    open var changeHandler = ::gen_changeHandler_fn
    open fun gen_changeHandler_fn(e: UniPickerViewChangeEvent): Unit {
        val value = e.detail.value
        var index: Number = 0
        var columnIndex: Number = 0
        run {
            var i: Number = 0
            while(i < value.length){
                var item = value[i]
                if (item !== (if (i < this.lastIndex.length) {
                    this.lastIndex[i]
                } else {
                    0
                }
                )) {
                    columnIndex = i
                    index = item
                    break
                }
                i++
            }
        }
        this.columnIndex = columnIndex
        val values = this.innerColumns
        this.setLastIndex(value)
        this.setIndexs(value, false)
        this.`$emit`("update:modelValue", this.inputValue)
        var valueOrigin: UTSArray<Any> = _uA()
        this.innerColumns.map(fun(item, index){
            val idx = if (index < value.length) {
                value[index]
            } else {
                0
            }
            if (idx < item.length) {
                valueOrigin.push(item[idx])
            }
        }
        )
        this.`$emit`("change", _uO("value" to valueOrigin, "index" to index, "indexs" to value, "values" to values, "columnIndex" to columnIndex))
    }
    open var setIndexs = ::gen_setIndexs_fn
    open fun gen_setIndexs_fn(index: UTSArray<Number>?, setLastIndex: Boolean): Unit {
        this.innerIndex = if (index != null) {
            index.slice()
        } else {
            _uA()
        }
        if (setLastIndex) {
            this.setLastIndex(this.innerIndex)
        }
    }
    open var setLastIndex = ::gen_setLastIndex_fn
    open fun gen_setLastIndex_fn(index: UTSArray<Number>): Unit {
        this.lastIndex = index.slice()
    }
    open var setColumnValues = ::gen_setColumnValues_fn
    open fun gen_setColumnValues_fn(columnIndex: Number, values: UTSArray<Any>): Unit {
        this.innerColumns.splice(columnIndex, 1, values)
        this.setLastIndex(this.innerIndex.slice(0, columnIndex))
        var tmpIndex = this.innerIndex.slice()
        run {
            var i: Number = 0
            while(i < this.innerColumns.length){
                if (i > this.columnIndex) {
                    tmpIndex[i] = 0
                }
                i++
            }
        }
        this.setIndexs(tmpIndex, false)
    }
    open var getColumnValues = ::gen_getColumnValues_fn
    open fun gen_getColumnValues_fn(columnIndex: Number): UTSArray<Any> {
        return this.innerColumns[columnIndex]
    }
    open var setColumns = ::gen_setColumns_fn
    open fun gen_setColumns_fn(columns: UTSArray<UTSArray<Any>>): Unit {
        this.innerColumns = columns
        if (this.innerIndex.length == 0) {
            this.innerIndex = UTSArray(columns.length).fill(0)
        }
    }
    open var getIndexs = ::gen_getIndexs_fn
    open fun gen_getIndexs_fn(): UTSArray<Number> {
        return this.innerIndex
    }
    open var getValues = ::gen_getValues_fn
    open fun gen_getValues_fn(): UTSArray<Any> {
        var res: UTSArray<Any> = _uA()
        return this.innerColumns.map(fun(item: UTSArray<Any>, index){
            res.push(item[this.innerIndex[index]])
        }
        )
    }
    companion object {
        var name = "up-picker"
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            _nCS(_uA(
                styles0
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return _uM("u-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "u-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-empty__wrap" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view-wrapper" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__scroll-view" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-tabs__wrapper__nav__line" to _pS(_uM("display" to "flex", "flexDirection" to "column", "flexShrink" to 0, "flexGrow" to 0, "flexBasis" to "auto", "alignItems" to "stretch", "alignContent" to "flex-start")), "up-picker" to _pS(_uM("position" to "relative", "backgroundColor" to "#ffffff")), "up-picker__view__column" to _pS(_uM("display" to "flex", "flexDirection" to "row", "flexGrow" to 1, "flexShrink" to 1, "flexBasis" to "0%", "justifyContent" to "center")), "up-picker__view__column__item" to _pS(_uM("display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "alignItems" to "center")), "up-picker__view__column__item__text" to _pS(_uM("fontSize" to 16, "textAlign" to "center", "color" to "#303133")), "up-picker__view__column__item--disabled" to _pS(_uM("opacity" to 0.35)), "up-picker--loading" to _pS(_uM("position" to "absolute", "top" to 0, "right" to 0, "left" to 0, "bottom" to 0, "display" to "flex", "flexDirection" to "row", "justifyContent" to "center", "alignItems" to "center", "backgroundColor" to "rgba(255,255,255,0.87)", "zIndex" to 1000)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = _uM()
        var emits: Map<String, Any?> = _uM("close" to null, "cancel" to null, "confirm" to null, "change" to null, "update:modelValue" to null)
        var props = _nP(_uM("customStyle" to _uM("type" to _uA(
            "Object",
            "String"
        ), "default" to _uO()), "customClass" to _uM("type" to "String", "default" to ""), "url" to _uM("type" to "String", "default" to ""), "linkType" to _uM("type" to "String", "default" to "navigateTo"), "modelValue" to _uM("type" to "Array", "default" to _uA<Any>()), "hasInput" to _uM("type" to "Boolean", "default" to false), "placeholder" to _uM("type" to "String", "default" to "请选择"), "show" to _uM("type" to "Boolean", "default" to crtProp__23["show"]), "popupMode" to _uM("type" to "String", "default" to crtProp__23["popupMode"]), "showToolbar" to _uM("type" to "Boolean", "default" to crtProp__23["showToolbar"]), "title" to _uM("type" to "String", "default" to crtProp__23["title"]), "columns" to _uM("type" to "Array", "default" to crtProp__23["columns"]), "loading" to _uM("type" to "Boolean", "default" to crtProp__23["loading"]), "itemHeight" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__23["itemHeight"]), "cancelText" to _uM("type" to "String", "default" to crtProp__23["cancelText"]), "confirmText" to _uM("type" to "String", "default" to crtProp__23["confirmText"]), "cancelColor" to _uM("type" to "String", "default" to crtProp__23["cancelColor"]), "confirmColor" to _uM("type" to "String", "default" to crtProp__23["confirmColor"]), "visibleItemCount" to _uM("type" to _uA(
            "String",
            "Number"
        ), "default" to crtProp__23["visibleItemCount"]), "keyName" to _uM("type" to "String", "default" to crtProp__23["keyName"]), "closeOnClickOverlay" to _uM("type" to "Boolean", "default" to crtProp__23["closeOnClickOverlay"]), "defaultIndex" to _uM("type" to "Array", "default" to crtProp__23["defaultIndex"]), "immediateChange" to _uM("type" to "Boolean", "default" to crtProp__23["immediateChange"]), "toolbarRightSlot" to _uM("type" to "Boolean", "default" to false), "pageInline" to _uM("type" to "Boolean", "default" to crtProp__23["pageInline"])))
        var propsNeedCastKeys = _uA(
            "customStyle",
            "customClass",
            "url",
            "linkType",
            "modelValue",
            "hasInput",
            "placeholder",
            "show",
            "popupMode",
            "showToolbar",
            "title",
            "columns",
            "loading",
            "itemHeight",
            "cancelText",
            "confirmText",
            "cancelColor",
            "confirmColor",
            "visibleItemCount",
            "keyName",
            "closeOnClickOverlay",
            "defaultIndex",
            "immediateChange",
            "toolbarRightSlot",
            "pageInline"
        )
        var components: Map<String, CreateVueComponent> = _uM()
    }
}
